import * as XLSX from 'xlsx';
import * as fs from 'fs';

const inputPath = 'D:/Document/2026.03 洗唛翻译开发/3.20备份/知识库/服装面辅料知识库.xlsx';
const outputPath = 'D:/Document/2026.03 洗唛翻译开发/3.20备份/知识库/服装面辅料知识库_已清洗.xlsx';
const dictServicePath = 'D:/Agent/Project/Label washing/src/services/dictionaryService.ts';

const XLSX_API = XLSX.default || XLSX;
const workbook = XLSX_API.readFile(inputPath);

const TARGET_LANG_KEYS = ['en', 'th', 'vn', 'es', 'pt', 'id_lang', 'ru', 'fr', 'ar', 'ja'];

// 行业校准字典：强制替换错误翻译
const CORRECTIONS = {
  '中咖': {
    cn: '中咖', en: 'Medium Coffee', th: 'สีกาแฟปานกลาง', vn: 'Màu cà phê trung bình', es: 'Marrón café medio',
    pt: 'Castanho café médio', id_lang: 'Warna kopi sedang', ru: 'Средне-коричневый', fr: 'Marron café moyen', ar: 'بني قهوة متوسط', ja: 'モカブラウン'
  },
  '中咖镶拼': {
    cn: '中咖镶拼', en: 'Medium Coffee Inlay', th: 'สีกาแฟปานกลางแต่งต่อ', vn: 'Phối màu cà phê trung bình', es: 'Incrustación de café medio',
    pt: 'Incrustação de café médio', id_lang: 'Hiasan kopi sedang', ru: 'Средне-коричневая вставка', fr: 'Incrustation de café moyen', ar: 'تطعيم لون قهوة متوسط', ja: 'モカブラウン切り替え'
  },
  '深藏青': {
    cn: '深藏青', en: 'Dark Navy Blue', th: 'สีน้ำเงินเข้มพิเศษ', vn: 'Màu xanh hải quân đậm', es: 'Azul marino oscuro',
    pt: 'Azul-marinho escuro', id_lang: 'Biru tua pekat', ru: 'Темно-синий (темный)', fr: 'Bleu marine foncé', ar: 'أรُق داكن غامق', ja: 'ダークネイビー'
  },
  '花灰': {
    cn: '花灰', en: 'Heather Gray', th: 'สีเทาผสม', vn: 'Màu xám muối tiêu', es: 'Gris vigoré',
    pt: 'Gris vigoré', id_lang: 'Abu-abu melange', ru: 'Серый меланж', fr: 'Gris chiné', ar: 'رمادي ميلانچ', ja: '杢グレー'
  },
  '复合': {
    cn: '复合', en: 'Bonded', th: 'ประกบ', vn: 'Ép dán', es: 'Laminado',
    pt: 'Dublado', id_lang: 'Komposit', ru: 'Дублированный', fr: 'Contrecollé', ar: 'مركب / مصفح', ja: 'ボンディング'
  },
  '支': {
    cn: '支', en: 'Count', th: 'คาวน์', vn: 'Chi số sợi', es: 'Título',
    pt: 'Título', id_lang: 'Nomor benang', ru: 'Номер пряжи', fr: 'Nombre de fils', ar: 'نمرة الخيط', ja: '番手'
  },
  '复合灰色恋人': {
    cn: '复合灰色恋人', en: 'Bonded gray lover fabric', th: 'ผ้าประกบสีเทา', vn: 'Vải ép dán màu xám', es: 'Tejido laminado amantes grises',
    pt: 'Tecido dublado amantes cinzentos', id_lang: 'Kain komposit abu-abu', ru: 'Дублированная ткань серого цвета', fr: 'Tissu contrecollé amants gris', ar: 'قماش مركب رمادي', ja: 'グレー恋人ボンディング生地'
  }
};

const newWorkbook = XLSX_API.utils.book_new();
const finalDictTerms = {};

workbook.SheetNames.forEach((sheetName) => {
  if (sheetName === '商品类目描述') {
    console.log('Skipping stationery sheet: "商品类目描述"');
    return;
  }

  const sheet = workbook.Sheets[sheetName];
  const rows = XLSX_API.utils.sheet_to_json(sheet, { header: 1 });
  if (rows.length < 2) return;

  const header = rows[0];
  const cleanedRows = [header];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (!row || row[1] === undefined || row[1] === null) continue;

    const cnKey = String(row[1]).trim();
    if (!cnKey) continue;

    // 1. 获取已校准数据或保留原数据
    let term = {
      cn: cnKey, en: '', th: '', vn: '', es: '', pt: '', id_lang: '', ru: '', fr: '', ar: '', ja: ''
    };

    if (CORRECTIONS[cnKey]) {
      term = { ...term, ...CORRECTIONS[cnKey] };
    } else {
      // 提取 Excel 中的列数据
      term.en = row[2] ? String(row[2]).trim() : '';
      term.th = row[3] ? String(row[3]).trim() : '';
      term.vn = row[4] ? String(row[4]).trim() : '';
      term.es = row[5] ? String(row[5]).trim() : '';
      term.pt = row[6] ? String(row[6]).trim() : '';
      term.id_lang = row[7] ? String(row[7]).trim() : '';
      term.ru = row[8] ? String(row[8]).trim() : '';
      term.fr = row[9] ? String(row[9]).trim() : '';
      term.ar = row[10] ? String(row[10]).trim() : '';
    }

    // 2. 清理翻译文本中的机器直译错误
    Object.keys(term).forEach(lang => {
      if (typeof term[lang] === 'string') {
        // 如果英文包含 "Chinese coffee" 且不是我们主动校正的项，说明是机器翻译错误
        if (term[lang].toLowerCase().includes('chinese coffee') && !CORRECTIONS[cnKey]) {
          term[lang] = term[lang].replace(/Chinese coffee/ig, 'Medium Coffee');
        }
      }
    });

    // 3. 将清理后的数据回写到 Excel 行
    const newRow = [
      row[0] || '', // 分类
      term.cn,
      term.en,
      term.th,
      term.vn,
      term.es,
      term.pt,
      term.id_lang,
      term.ru,
      term.fr,
      term.ar
    ];
    cleanedRows.push(newRow);

    // 4. 保存至词库
    finalDictTerms[term.cn] = term;
  }

  // 将清理后的 Sheet 写入新 Excel
  const newSheet = XLSX_API.utils.aoa_to_sheet(cleanedRows);
  XLSX_API.utils.book_append_sheet(newWorkbook, newSheet, sheetName);
  console.log(`Sheet "${sheetName}" cleaned: ${cleanedRows.length - 1} rows saved.`);
});

// 保存清理后的 Excel
XLSX_API.writeFile(newWorkbook, outputPath);
console.log('Cleaned Excel workbook saved successfully to:', outputPath);

// 5. 更新 dictionaryService.ts 中的 DEFAULT_DICTIONARY
// 读取原 dictionaryService.ts
let dictContent = fs.readFileSync(dictServicePath, 'utf-8');

// 读取当前已有的标准对照库作为基础
// 我们将 finalDictTerms 中的词汇覆盖/添加到现有词汇中
const originalDefaultTermsRegex = /const DEFAULT_DICTIONARY: Record<string, TranslationRow> = (\{[\s\S]*?\});/;
const match = dictContent.match(originalDefaultTermsRegex);

if (match) {
  // 我们直接用编程方式在 DEFAULT_DICTIONARY 部分生成完整的词库对象，以确保没有任何语法错误
  // 首先，我们将原来的 DEFAULT_DICTIONARY 中已有的词条（如有必要）合并到 finalDictTerms 中，保留原开发中辛苦整理出来的精细化翻译
  // 为了安全，我们可以编写一段 JS 来解析原 DEFAULT_DICTIONARY 的结构，但其实直接将 finalDictTerms 的 JSON 生成字符串替换进去即可，
  // 因为 finalDictTerms 已经包含了从 Excel 提取出的所有面辅料、洗涤说明等 2000+ 核心词，且我们刚才新提取的那十几个词也在 Excel 中有定义（除了夹克/毛领这种款式，Excel可能没有）。
  // 为了万无一失，我们可以把原 dictionaryService.ts 中 DEFAULT_DICTIONARY 定义的所有项先读取出来，合并到 finalDictTerms 中！
  
  // 我们来写一个简单的解析逻辑，合并原有词条
  console.log('Merging existing DEFAULT_DICTIONARY entries with cleaned Excel terms...');
}

// 编写一个安全的合入逻辑：
// 我们可以读取 dictionaryService.ts 原有的 DEFAULT_DICTIONARY 对象。由于它是一个标准的 TS 对象，我们可以使用一个小沙箱或者直接通过正则提取出每个词条
// 更好的方法是：把 dictionaryService.ts 中的 DEFAULT_DICTIONARY 正则匹配到之后，用 node eval 一个虚拟上下文来获取这个 DEFAULT_DICTIONARY 对象！
try {
  const dictionaryText = match[1];
  // 使用 eval 转化为真正的 JS 对象
  const existingDefaultDictionary = eval(`(${dictionaryText})`);
  
  console.log(`Existing terms count in DEFAULT_DICTIONARY: ${Object.keys(existingDefaultDictionary).length}`);
  
  // 进行合并：现有词汇优先级高，或者 Excel 校正后词汇优先级高？
  // 校正后词汇优先级高。我们用 finalDictTerms 覆盖 existingDefaultDictionary，但保留 existingDefaultDictionary 中特有的词（比如 '夹克', '毛领', '（衬里和非纤维物质除外）' 等款式词）
  const mergedDict = {
    ...existingDefaultDictionary,
    ...finalDictTerms
  };

  console.log(`Total merged terms count: ${Object.keys(mergedDict).length}`);

  // 将合并后的 mergedDict 格式化为漂亮的 TS 字符串
  let formattedDictStr = 'const DEFAULT_DICTIONARY: Record<string, TranslationRow> = {\n';
  Object.keys(mergedDict).sort().forEach(key => {
    const row = mergedDict[key];
    formattedDictStr += `  '${key}': {\n`;
    formattedDictStr += `    cn: '${row.cn.replace(/'/g, "\\'")}', `;
    formattedDictStr += `en: '${(row.en || '').replace(/'/g, "\\'")}', `;
    formattedDictStr += `th: '${(row.th || '').replace(/'/g, "\\'")}', `;
    formattedDictStr += `vn: '${(row.vn || '').replace(/'/g, "\\'")}', `;
    formattedDictStr += `es: '${(row.es || '').replace(/'/g, "\\'")}',\n    `;
    formattedDictStr += `pt: '${(row.pt || '').replace(/'/g, "\\'")}', `;
    formattedDictStr += `id_lang: '${(row.id_lang || '').replace(/'/g, "\\'")}', `;
    formattedDictStr += `ru: '${(row.ru || '').replace(/'/g, "\\'")}', `;
    formattedDictStr += `fr: '${(row.fr || '').replace(/'/g, "\\'")}', `;
    formattedDictStr += `ar: '${(row.ar || '').replace(/'/g, "\\'")}', `;
    formattedDictStr += `ja: '${(row.ja || '').replace(/'/g, "\\'")}'\n`;
    formattedDictStr += `  },\n`;
  });
  formattedDictStr += '};';

  // 替换原有定义
  const updatedContent = dictContent.replace(originalDefaultTermsRegex, formattedDictStr);
  fs.writeFileSync(dictServicePath, updatedContent, 'utf-8');
  console.log('Successfully merged and updated dictionaryService.ts with 2000+ cleaned textile terms!');
} catch (e) {
  console.error('Error merging dictionaries:', e);
}
