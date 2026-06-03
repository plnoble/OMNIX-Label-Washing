import * as XLSX from 'xlsx';
import type { TranslationRow } from '../types';
import { DictionaryService } from './dictionaryService';
import { TARGET_LANGUAGES } from '../config';

// 正则表达式定义
const COMPOSITION_SPLIT_REGEX = /[,，\s+]/; // 纤维成分间的分隔符，例如“棉70% 涤纶30%”
const FIBER_PERCENT_REGEX = /(\d+(?:\.\d+)?)\s*%\s*([^\d\s%，,;；.。:：]+)|([^\d\s%，,;；.。:：]+)\s*(\d+(?:\.\d+)?)\s*%/; // 提取“70%棉”或“棉70%”

/**
 * 智能翻译引擎：将中文洗标文本拆解为多个独立子句，分别查询字典，再针对“纤维成分”和“部位”进行动态组装翻译。
 */
export class TranslationEngine {
  /**
   * 翻译单条中文文本为指定语言的映射字典
   */
  static translateText(
    text: string,
    targetLangs: string[],
    dict: Record<string, TranslationRow>
  ): Record<string, string> {
    const results: Record<string, string> = {};
    
    // 如果包含换行符，拆开分行翻译再用换行拼接，以保留原有的排版
    if (text.includes('\n')) {
      const lines = text.split('\n');
      const lineTranslations = lines.map(line => this.translateText(line, targetLangs, dict));
      
      targetLangs.forEach(lang => {
        results[lang] = lineTranslations.map(trans => trans[lang]).join('\n');
      });
      return results;
    }

    const cleanText = text.trim();

    if (!cleanText) {
      targetLangs.forEach(lang => { results[lang] = ''; });
      return results;
    }

    // 1. 尝试整句精确匹配字典
    const exactMatch = dict[cleanText];
    if (exactMatch) {
      targetLangs.forEach(lang => {
        results[lang] = exactMatch[lang] || `[缺失]`;
      });
      return results;
    }

    // 2. 切分字句（根据句号、分号、逗号切分）
    const clauses = cleanText.split(/[.。;；,，\n]+/).map(s => s.trim()).filter(Boolean);
    const translatedClauses: Record<string, string[]> = {};
    targetLangs.forEach(lang => { translatedClauses[lang] = []; });

    for (const clause of clauses) {
      // 检查当前子句是否精确匹配字典
      const clauseMatch = dict[clause];
      if (clauseMatch) {
        targetLangs.forEach(lang => {
          translatedClauses[lang].push(clauseMatch[lang] || `[缺失: ${clause}]`);
        });
        continue;
      }

      // 如果不能精确匹配，判断是否为“成分标注”（如：“面料：100%棉” 或 “60%棉 40%聚酯纤维”）
      const parsedComposition = this.parseCompositionClause(clause, dict);
      if (parsedComposition) {
        targetLangs.forEach(lang => {
          const transStr = this.formatComposition(parsedComposition, lang);
          translatedClauses[lang].push(transStr);
        });
      } else {
        // 既不是成分又无对应翻译，则标记该句在所有目标语言中都缺失
        targetLangs.forEach(lang => {
          translatedClauses[lang].push(`[缺失: ${clause}]`);
        });
      }
    }

    // 3. 将各子句的翻译按照目标语言习惯进行拼接
    targetLangs.forEach(lang => {
      // 英语、法语、西班牙语、葡萄牙语等使用“句号 + 空格”连接，亚洲语系如泰语、阿拉伯语等可根据语言习惯连接
      const separator = ['en', 'fr', 'es', 'pt', 'ru'].includes(lang) ? '. ' : ' ';
      let sentence = translatedClauses[lang].join(separator);
      if (sentence && !sentence.endsWith('.') && ['en', 'fr', 'es', 'pt', 'ru'].includes(lang)) {
        sentence += '.';
      }
      results[lang] = sentence;
    });

    return results;
  }

  /**
   * 解析可能包含纤维成分的子句
   * 例：“面料：70%棉 30%聚酯纤维”
   */
  private static parseCompositionClause(
    clause: string,
    dict: Record<string, TranslationRow>
  ): { partCn: string; fibers: { nameCn: string; nameTrans: Record<string, string>; percent: string }[] } | null {
    // 检查是否包含冒号分隔部位，如 “面料:” 或 “Lining:”
    let partCn = '';
    let remainingText = clause;

    const colonIndex = clause.search(/[:：]/);
    if (colonIndex !== -1) {
      partCn = clause.substring(0, colonIndex).trim();
      remainingText = clause.substring(colonIndex + 1).trim();
    }

    // 将剩余文本分割，提取纤维与百分比
    const parts = remainingText.split(COMPOSITION_SPLIT_REGEX).map(s => s.trim()).filter(Boolean);
    if (parts.length === 0) return null;

    const fibers: { nameCn: string; nameTrans: Record<string, string>; percent: string }[] = [];

    for (const part of parts) {
      const match = part.match(FIBER_PERCENT_REGEX);
      if (!match) return null; // 只要有一段不符合百分比格式，就判定不是纤维成分格式

      // 兼容“70%棉” (match[1], match[2]) 和 “棉70%” (match[3], match[4])
      const percent = match[1] || match[4];
      const fiberName = (match[2] || match[3] || '').trim();

      if (!percent || !fiberName) return null;

      // 查找该纤维的多语种翻译
      const fiberTrans = dict[fiberName];
      const nameTrans: Record<string, string> = {};
      if (fiberTrans) {
        Object.keys(fiberTrans).forEach(k => {
          nameTrans[k] = fiberTrans[k];
        });
      } else {
        nameTrans['cn'] = fiberName;
      }

      fibers.push({
        nameCn: fiberName,
        nameTrans,
        percent
      });
    }

    // 如果未解析出任何纤维，说明不匹配
    if (fibers.length === 0) return null;

    return { partCn, fibers };
  }

  /**
   * 格式化输出成分翻译字符串
   */
  private static formatComposition(
    parsed: { partCn: string; fibers: { nameCn: string; nameTrans: Record<string, string>; percent: string }[] },
    lang: string
  ): string {
    const dict = DictionaryService.getDictionary();
    
    // 翻译部位名称
    let partTrans = '';
    if (parsed.partCn) {
      const partMatch = dict[parsed.partCn];
      partTrans = partMatch ? (partMatch[lang] || parsed.partCn) : `[缺失: ${parsed.partCn}]`;
    }

    // 翻译纤维成分
    const fiberStrings = parsed.fibers.map(f => {
      const transName = f.nameTrans[lang] || `[缺失: ${f.nameCn}]`;
      // 根据语言确定格式。例如：英语 “70% Cotton”，中文 “70%棉”
      if (['cn', 'ja'].includes(lang)) {
        return `${f.percent}%${transName}`;
      } else {
        return `${f.percent}% ${transName}`;
      }
    });

    const fibersJoined = fiberStrings.join(lang === 'cn' ? ' ' : ', ');

    if (partTrans) {
      const separator = ['cn', 'ja'].includes(lang) ? '：' : ': ';
      return `${partTrans}${separator}${fibersJoined}`;
    }

    return fibersJoined;
  }
}

export class ExcelService {
  /**
   * 解析上传的 Excel 文件，并提取第一列作为中文源词
   */
  static parseExcel(file: File): Promise<string[]> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target?.result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          
          // 获取所有行数据
          const jsonData = XLSX.utils.sheet_to_json<unknown[]>(worksheet, { header: 1 });
          const sourceTexts: string[] = [];

          // 提取第一列，忽略表头
          for (let i = 1; i < jsonData.length; i++) {
            const row = jsonData[i];
            if (row && row[0] !== undefined && row[0] !== null) {
              sourceTexts.push(String(row[0]).trim());
            }
          }

          resolve(Array.from(new Set(sourceTexts)).filter(Boolean)); // 去重后返回
        } catch (error) {
          reject(new Error(`Excel 解析失败: ${error instanceof Error ? error.message : error}`));
        }
      };
      reader.onerror = () => reject(new Error('文件读取失败'));
      reader.readAsArrayBuffer(file);
    });
  }

  /**
   * 导出翻译完成的 Excel，仅包含启用的目标语种
   */
  static exportTranslation(
    translatedRows: { cn: string; translations: Record<string, string> }[],
    enabledLangs: { code: string; label: string }[]
  ): void {
    // 构造 Excel 数据表头
    const headers = ['原文', ...enabledLangs.map(l => l.label)];
    const data: string[][] = [headers];

    // 填充数据行
    translatedRows.forEach(row => {
      const rowData = [row.cn];
      enabledLangs.forEach(lang => {
        rowData.push(row.translations[lang.code] || '');
      });
      data.push(rowData);
    });

    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '洗标翻译');

    // 写入文件并触发下载
    XLSX.writeFile(workbook, '服装洗标翻译结果_OmniX.xlsx');
  }

  /**
   * 解析导入的词条字典 Excel，支持通过列名自动配对语种
   */
  static parseDictionaryExcel(file: File): Promise<TranslationRow[]> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target?.result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          
          const jsonData = XLSX.utils.sheet_to_json<unknown[]>(worksheet, { header: 1 });
          if (jsonData.length < 2) {
            resolve([]);
            return;
          }

          const headers = jsonData[0] as string[];
          // 建立列索引到语种代码的映射
          const colToLangMap: Record<number, string> = {};
          
          headers.forEach((headerVal, colIdx) => {
            if (colIdx === 0 || !headerVal) return;
            const normalized = String(headerVal).trim().toLowerCase();
            
            // 匹配 TARGET_LANGUAGES
            const matchedLang = TARGET_LANGUAGES.find(lang => 
              lang.code.toLowerCase() === normalized ||
              lang.label.toLowerCase() === normalized ||
              lang.englishName.toLowerCase() === normalized ||
              lang.code.substring(0, 2).toLowerCase() === normalized.substring(0, 2)
            );
            
            if (matchedLang) {
              colToLangMap[colIdx] = matchedLang.code;
            }
          });

          const rows: TranslationRow[] = [];

          for (let i = 1; i < jsonData.length; i++) {
            const row = jsonData[i];
            if (!row || row[0] === undefined || row[0] === null) continue;
            
            const cnKey = String(row[0]).trim();
            if (!cnKey) continue;

            const term: TranslationRow = {
              cn: cnKey,
              en: '', th: '', vn: '', es: '', pt: '', id_lang: '', ru: '', fr: '', ar: '', ja: ''
            };

            headers.forEach((_, colIdx) => {
              const langCode = colToLangMap[colIdx];
              if (langCode && row[colIdx] !== undefined && row[colIdx] !== null) {
                term[langCode] = String(row[colIdx]).trim();
              }
            });

            rows.push(term);
          }

          resolve(rows);
        } catch (error) {
          reject(new Error(`词典 Excel 解析失败: ${error instanceof Error ? error.message : error}`));
        }
      };
      reader.onerror = () => reject(new Error('文件读取失败'));
      reader.readAsArrayBuffer(file);
    });
  }

  /**
   * 导出当前完整的词汇对照库为 Excel 文件
   */
  static exportDictionary(dict: Record<string, TranslationRow>): void {
    // 构造表头，第一列为中文原词，随后为各目标语种
    const headers = ['中文原词', ...TARGET_LANGUAGES.map(l => l.label)];
    const data: string[][] = [headers];

    // 填充词汇数据
    Object.values(dict).forEach(row => {
      const rowData = [row.cn];
      TARGET_LANGUAGES.forEach(lang => {
        rowData.push(row[lang.code] || '');
      });
      data.push(rowData);
    });

    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '对照词库');

    // 写入文件并下载
    XLSX.writeFile(workbook, 'OmniX_服装洗标词汇对照库.xlsx');
  }

  /**
   * 导出 HLA 22列工作表模板的多语种翻译结果
   * 为每一个启用的目标语种生成一个单独的工作表 (Sheet)
   */
  static exportHlaTemplateTranslation(
    originalWorkbook: XLSX.WorkBook,
    enabledLangs: { code: string; label: string }[],
    dict: Record<string, TranslationRow>
  ): void {
    const firstSheetName = originalWorkbook.SheetNames[0];
    const worksheet = originalWorkbook.Sheets[firstSheetName];
    
    // 获取原始的所有行数据，包含空行，我们需要保持原样以防丢失样式/结构
    const rows = XLSX.utils.sheet_to_json<unknown[]>(worksheet, { header: 1 });
    if (rows.length === 0) return;

    const headers = (rows[0] as string[]) || [];
    const compIdx = headers.indexOf('成分');
    
    // 洗语1 - 洗语7 列索引
    const washIndices: number[] = [];
    for (let i = 1; i <= 7; i++) {
      const idx = headers.indexOf(`洗语${i}`);
      if (idx !== -1) washIndices.push(idx);
    }

    const newWorkbook = XLSX.utils.book_new();

    // 1. 保留一份原始的 Sheet 作为第一页
    const rawDataCopy = rows.map(r => [...(r || [])]);
    const rawSheet = XLSX.utils.aoa_to_sheet(rawDataCopy);
    XLSX.utils.book_append_sheet(newWorkbook, rawSheet, '原始数据');

    // 2. 为每个启用的目标语言创建翻译后的 Sheet
    enabledLangs.forEach(lang => {
      const langCode = lang.code;
      const langLabel = lang.label;

      const translatedRows = rows.map((row, rowIdx) => {
        if (!row) return [];
        const newRow = [...row];
        
        // 忽略表头行
        if (rowIdx === 0) return newRow;

        // 1. 翻译成分列 (如果存在且有值)
        if (compIdx !== -1 && row[compIdx] !== undefined && row[compIdx] !== null) {
          const compText = String(row[compIdx]);
          const transResult = TranslationEngine.translateText(compText, [langCode], dict);
          newRow[compIdx] = transResult[langCode] || '';
        }

        // 2. 翻译洗语1 - 洗语7 (如果存在且有值)
        washIndices.forEach(idx => {
          if (row[idx] !== undefined && row[idx] !== null) {
            const washText = String(row[idx]).trim();
            if (washText) {
              const exactMatch = dict[washText];
              newRow[idx] = exactMatch ? (exactMatch[langCode] || `[缺失: ${washText}]`) : `[缺失: ${washText}]`;
            }
          }
        });

        return newRow;
      });

      const translatedSheet = XLSX.utils.aoa_to_sheet(translatedRows);
      XLSX.utils.book_append_sheet(newWorkbook, translatedSheet, langLabel);
    });

    // 写入文件并触发下载
    XLSX.writeFile(newWorkbook, 'HLA服装洗标多语种翻译结果_OmniX.xlsx');
  }

  /**
   * 生成并下载 HLA 22列标准工作流模板
   */
  static downloadHlaTemplate(): void {
    const headers = [
      "流水号", "类目", "老编码", "尺码", "号型", "规格需求量", "成分", "content", 
      "洗涤图标1", "洗涤图标2", "洗涤图标3", "洗涤图标4", "洗涤图标5", "洗涤图标6", 
      "洗语1", "洗语2", "洗语3", "洗语4", "洗语5", "洗语6", "洗语7", "ITEM CODE"
    ];
    
    const sampleRow1 = [
      1, "卫衣", "HNZWD3F190A/K0L", "", "", 1500, 
      "面布：74%聚酯纤维21%棉5%氨纶\n底布：66%聚酯纤维34%粘纤", "", 
      "A13", "B03", "C01", "E03", "F05", "", 
      "手洗 最高洗涤温度40℃", "不可漂白", "悬挂晾干", 
      "熨斗底板最高温度110℃，蒸汽熨烫可能造成不可回复的损伤", "不可干洗", "", "", "HLA-40-C-N"
    ];

    const sampleRow2 = [
      2, "女长袖连衣裙", "EQLCJ1RBE4A/ER", "", "XS", 33, 
      "面料1：54%聚酯纤维41%棉5%氨纶\n面料2：100%棉", "", 
      "A13", "B03", "C01", "E03", "F05", "", 
      "手洗 最高洗涤温度40℃", "不可漂白", "悬挂晾干", 
      "熨斗底板最高温度110℃，蒸汽熨烫可能造成不可回复的损伤", "不可干洗", 
      "注：不可长时间浸泡，请与其它衣物分开洗涤。", "", "", "HLA-40-C-N"
    ];

    const data = [headers, sampleRow1, sampleRow2];
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "HLA-30-AN");

    XLSX.writeFile(workbook, "HLA服装洗标导入模板_OmniX.xlsx");
  }
}

