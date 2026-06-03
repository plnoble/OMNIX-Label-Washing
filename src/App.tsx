import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { 
  Settings, FileText, Table, Image as ImageIcon, 
  BookOpen, Eye, EyeOff, Sparkles, X
} from 'lucide-react';
import { DictionaryService } from './services/dictionaryService';
import { LLMService } from './services/llmService';
import { ExcelService, TranslationEngine } from './services/excelService';
import { MockupLabel } from './components/MockupLabel';
import { LanguageSelector } from './components/LanguageSelector';
import { DictionaryEditor } from './components/DictionaryEditor';
import { LabelTab } from './components/LabelTab';
import { ExcelTab } from './components/ExcelTab';
import { PdfTab } from './components/PdfTab';
import { useDictionaryHistory } from './hooks/useDictionaryHistory';
import type { ParsedWashLabel, TranslationRow, ValidationIssue, LLMProvider } from './types';
import { TARGET_LANGUAGES } from './config';

// 导入 pdf.js
import * as pdfjsLib from 'pdfjs-dist';
// 配置 CDN worker 路径
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.worker.min.mjs`;

interface HlaPreviewRow {
  oldCode: string;
  category: string;
  compText: string;
  compTrans: string;
  washText: string;
  washTrans: string;
}

// 规则引擎：纯中文文本解析工具方法
function parseWashLabelText(text: string): ParsedWashLabel {
  const lines = text.split(/[.。;；\n]+/).map(s => s.trim()).filter(Boolean);
  const materialsList: ParsedWashLabel['materials'] = [];
  const washList: string[] = [];
  let styleNo = '';
  let size = '';
  let safetyClass = '';
  let origin = '';
  let category = '';
  let sku = '';

  lines.forEach(line => {
    if (/款号|Style\s*No/i.test(line)) {
      styleNo = line.replace(/.*[:：]/, '').trim();
    }
    else if (/尺码|规格|SIZE/i.test(line)) {
      size = line.replace(/.*[:：]/, '').trim();
    }
    else if (/品名|类目|品类|Category/i.test(line)) {
      category = line.replace(/.*[:：]/, '').trim();
    }
    else if (/SKU|数量|物料编码/i.test(line)) {
      sku = line.replace(/.*[:：]/, '').trim();
    }
    else if (/安全类别|安全技术类别/i.test(line)) {
      const match = line.match(/[A-Ca-c]类/);
      if (match) safetyClass = match[0];
    }
    else if (/中国制造|越南制造|孟加拉制造/i.test(line)) {
      origin = line.trim();
    }
    else if (/\d+%/.test(line) || /%\d+/.test(line)) {
      let part = '';
      let fiberText = line;
      const colonIdx = line.search(/[:：]/);
      if (colonIdx !== -1) {
        part = line.substring(0, colonIdx).trim();
        fiberText = line.substring(colonIdx + 1).trim();
      }

      const fibers: { name: string; percentage: number }[] = [];
      const matches = fiberText.matchAll(/(\d+(?:\.\d+)?)\s*%\s*([^\d\s%，,;；.。:：]+)|([^\d\s%，,;；.。:：]+)\s*(\d+(?:\.\d+)?)\s*%/g);
      for (const match of matches) {
        const percentage = parseFloat(match[1] || match[4]);
        const name = (match[2] || match[3] || '').trim();
        if (name && !isNaN(percentage)) {
          fibers.push({ name, percentage });
        }
      }

      if (fibers.length > 0) {
        materialsList.push({
          part: part || undefined,
          fibers,
          rawText: line
        });
      }
    }
    else {
      washList.push(line);
    }
  });

  return {
    styleNo: styleNo || undefined,
    size: size || undefined,
    safetyClass: safetyClass || undefined,
    origin: origin || undefined,
    category: category || undefined,
    sku: sku || undefined,
    materials: materialsList,
    washInstructions: washList
  };
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'label' | 'excel' | 'pdf' | 'dictionary'>('label');
  
  // API 配置状态
  const [llmProvider, setLlmProvider] = useState<LLMProvider>(() => 
    (localStorage.getItem('OMNIX_LLM_PROVIDER') as LLMProvider) || 'gemini-native'
  );
  const [apiEndpoint, setApiEndpoint] = useState(() => 
    localStorage.getItem('OMNIX_API_ENDPOINT') || 'https://api.openai.com/v1'
  );
  const [apiModel, setApiModel] = useState(() => 
    localStorage.getItem('OMNIX_API_MODEL') || 'gemini-1.5-flash'
  );
  const [rememberApiKey, setRememberApiKey] = useState(() => {
    return localStorage.getItem('OMNIX_REMEMBER_API_KEY') !== 'false';
  });
  const [apiKey, setApiKey] = useState(() => 
    localStorage.getItem('OMNIX_API_KEY') || sessionStorage.getItem('OMNIX_API_KEY') || ''
  );
  const [showApiKey, setShowApiKey] = useState(false);
  const [showSettingsPanel, setShowSettingsPanel] = useState(false);

  // 状态变量
  const [enabledLanguages, setEnabledLanguages] = useState<string[]>(() => {
    const stored = localStorage.getItem('OMNIX_ENABLED_LANGUAGES');
    return stored ? JSON.parse(stored) : ['en', 'th', 'vn', 'es', 'pt', 'id_lang', 'ru', 'fr', 'ar', 'ja'];
  });
  const [enabledRules, setEnabledRules] = useState<string[]>(() => {
    const stored = localStorage.getItem('OMNIX_ENABLED_RULES');
    return stored ? JSON.parse(stored) : ['eu_descending', 'gb_18401_safety', 'origin_label'];
  });

  // 使用 Undo/Redo 撤销重做状态 Hook 包装词库
  const { dict, updateDict, undo, redo, resetDict, canUndo, canRedo } = useDictionaryHistory();

  const [sourceText, setSourceText] = useState('品名：时尚牛仔裤\n款号：HLA-40-C-N\n面料：66%棉 32%聚酯纤维 2%氨纶\n30℃常规水洗。不可漂白。悬挂晾干。150℃熨烫。不可干洗。中国制造。\n安全类别：GB 18401-2010 B类\nSKU:1__1000PCS');
  
  // 初始化时直接通过函数解析初始中文文本，避免 mount 后异步触发 re-render
  const [parsedLabel, setParsedLabel] = useState<ParsedWashLabel | null>(() => 
    parseWashLabelText('品名：时尚牛仔裤\n款号：HLA-40-C-N\n面料：66%棉 32%聚酯纤维 2%氨纶\n30℃常规水洗。不可漂白。悬挂晾干。150℃熨烫。不可干洗。中国制造。\n安全类别：GB 18401-2010 B类\nSKU:1__1000PCS')
  );
  const [isTranslating, setIsTranslating] = useState(false);

  // Excel 批量翻译相关状态
  const [excelFile, setExcelFile] = useState<File | null>(null);
  const [excelRows, setExcelRows] = useState<string[]>([]);
  const [excelResults, setExcelResults] = useState<{ cn: string; translations: Record<string, string> }[]>([]);
  const [excelMode, setExcelMode] = useState<'standard' | 'hla'>('standard');
  const [excelWorkbook, setExcelWorkbook] = useState<XLSX.WorkBook | null>(null);
  const [hlaPreviewRows, setHlaPreviewRows] = useState<HlaPreviewRow[]>([]);
  const [expandedEvWords, setExpandedEvWords] = useState<string[]>([]);
  const [isEvolutionCollapsed, setIsEvolutionCollapsed] = useState(false);

  // PDF 解析状态
  const [pdfExtractedItems, setPdfExtractedItems] = useState<{ cn: string; category: string; matchedTrans: TranslationRow | null }[]>([]);
  const [isProcessingPDF, setIsProcessingPDF] = useState(false);
  const [pdfProgress, setPdfProgress] = useState('');

  // 监听语种和规则设置变化并持久化
  useEffect(() => {
    localStorage.setItem('OMNIX_ENABLED_LANGUAGES', JSON.stringify(enabledLanguages));
  }, [enabledLanguages]);

  useEffect(() => {
    localStorage.setItem('OMNIX_ENABLED_RULES', JSON.stringify(enabledRules));
  }, [enabledRules]);

  // localStorage 存储容量估算
  const getLocalStorageUsage = () => {
    let totalBytes = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const val = localStorage.getItem(key) || '';
        totalBytes += key.length + val.length;
      }
    }
    const limit = 5 * 1024 * 1024; // 5MB standard browser quota limit
    const percentage = (totalBytes / limit) * 100;
    return {
      bytesUsed: totalBytes,
      percentage,
      isWarning: percentage > 80
    };
  };

  const storageUsage = getLocalStorageUsage();

  const handleLlmProviderChange = (val: LLMProvider) => {
    setLlmProvider(val);
    localStorage.setItem('OMNIX_LLM_PROVIDER', val);
    if (val === 'gemini-native') {
      setApiModel('gemini-1.5-flash');
      localStorage.setItem('OMNIX_API_MODEL', 'gemini-1.5-flash');
    } else if (val === 'anthropic') {
      setApiModel('claude-3-5-sonnet-20241022');
      localStorage.setItem('OMNIX_API_MODEL', 'claude-3-5-sonnet-20241022');
      setApiEndpoint('https://api.anthropic.com/v1');
      localStorage.setItem('OMNIX_API_ENDPOINT', 'https://api.anthropic.com/v1');
    } else if (val === 'openai') {
      setApiModel('gpt-4o-mini');
      localStorage.setItem('OMNIX_API_MODEL', 'gpt-4o-mini');
      setApiEndpoint('https://api.openai.com/v1');
      localStorage.setItem('OMNIX_API_ENDPOINT', 'https://api.openai.com/v1');
    }
  };

  const handleApiEndpointChange = (val: string) => {
    setApiEndpoint(val);
    localStorage.setItem('OMNIX_API_ENDPOINT', val);
  };

  const handleApiModelChange = (val: string) => {
    setApiModel(val);
    localStorage.setItem('OMNIX_API_MODEL', val);
  };

  const handleApiKeyChange = (val: string) => {
    setApiKey(val);
    if (rememberApiKey) {
      localStorage.setItem('OMNIX_API_KEY', val);
    } else {
      sessionStorage.setItem('OMNIX_API_KEY', val);
      localStorage.removeItem('OMNIX_API_KEY');
    }
  };

  const handleToggleRememberApiKey = (val: boolean) => {
    setRememberApiKey(val);
    localStorage.setItem('OMNIX_REMEMBER_API_KEY', String(val));
    if (val) {
      if (apiKey) {
        localStorage.setItem('OMNIX_API_KEY', apiKey);
      }
      sessionStorage.removeItem('OMNIX_API_KEY');
    } else {
      if (apiKey) {
        sessionStorage.setItem('OMNIX_API_KEY', apiKey);
      }
      localStorage.removeItem('OMNIX_API_KEY');
    }
  };

  const handleToggleLanguage = (code: string) => {
    setEnabledLanguages(prev => 
      prev.includes(code) ? prev.filter(c => c !== code) : [...prev, code]
    );
  };

  const handleToggleRule = (id: string) => {
    setEnabledRules(prev => 
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    );
  };

  const handleDictionaryChange = () => {
    // Captures reactively via dictionaryState
  };

  // 运行合规检测逻辑
  const runComplianceCheck = (label: ParsedWashLabel): ValidationIssue[] => {
    const issues: ValidationIssue[] = [];

    // 1. GB 18401 安全类别校验
    if (enabledRules.includes('gb_18401_safety')) {
      const hasSafety = label.safetyClass && ['A类', 'B类', 'C类', 'A', 'B', 'C'].some(c => label.safetyClass?.toUpperCase().includes(c));
      if (!hasSafety) {
        issues.push({
          type: 'warning',
          ruleId: 'gb_18401_safety',
          message: '未在洗标中检测到符合国标 GB 18401 的安全类别（如“A类/B类/C类”），销往中国市场时为强制性标注项。'
        });
      }
    }

    // 2. 欧盟成分降序校验
    if (enabledRules.includes('eu_descending')) {
      label.materials.forEach(part => {
        const fibers = part.fibers;
        for (let i = 0; i < fibers.length - 1; i++) {
          if (fibers[i].percentage < fibers[i + 1].percentage) {
            issues.push({
              type: 'error',
              ruleId: 'eu_descending',
              message: `成分比例不合规（${part.part || '材料成分'}）：${fibers[i].name}(${fibers[i].percentage}%) 排在 ${fibers[i + 1].name}(${fibers[i + 1].percentage}%) 之前，欧盟等地区法规要求成分百分比必须按降序排列。`
            });
          }
        }
      });
    }

    // 3. 产地多语种翻译字典校验
    if (enabledRules.includes('origin_label')) {
      if (!label.origin) {
        issues.push({
          type: 'warning',
          ruleId: 'origin_label',
          message: '洗标未包含产地声明（如“中国制造”或“Made in China”）。'
        });
      } else {
        const originTrans = dict[label.origin] || DictionaryService.lookup(label.origin);
        if (!originTrans || !originTrans.en) {
          issues.push({
            type: 'info',
            ruleId: 'origin_label',
            message: `产地词条“${label.origin}”在词汇库中尚未配置对应的英文翻译，可能导致部分语种输出为缺失状态。`
          });
        }
      }
    }

    return issues;
  };

  // 根据当前解析的标签和系统配置，在 render 期间【动态派生】翻译详情和合规警示 (Derived State 模式)
  const getDerivedLabelData = () => {
    if (!parsedLabel) {
      return { translationsMap: {}, validationIssues: [] };
    }
    
    const allPhrases = new Set<string>();
    if (parsedLabel.origin) allPhrases.add(parsedLabel.origin);
    if (parsedLabel.category) allPhrases.add(parsedLabel.category);
    parsedLabel.washInstructions.forEach(inst => allPhrases.add(inst));
    
    parsedLabel.materials.forEach(part => {
      if (part.part) allPhrases.add(part.part);
      part.fibers.forEach(f => allPhrases.add(f.name));
    });

    const tempMap: Record<string, string> = {};
    allPhrases.forEach(phrase => {
      const transRow = dict[phrase] || DictionaryService.lookup(phrase);
      enabledLanguages.forEach(lang => {
        if (!transRow || !transRow[lang]) {
          tempMap[`${phrase}_${lang}`] = `[缺失: ${phrase}]`;
        } else {
          tempMap[`${phrase}_${lang}`] = transRow[lang];
        }
      });
    });

    const issues = runComplianceCheck(parsedLabel);
    
    return {
      translationsMap: tempMap,
      validationIssues: issues
    };
  };

  const { translationsMap, validationIssues } = getDerivedLabelData();

  // 根据词典和导入文件状态，【动态派生】当前页面中缺失的翻译词汇列表
  const getMissingTerms = (): string[] => {
    const missing = new Set<string>();
    
    // 1. 从单标签预览中提取缺失词
    if (parsedLabel) {
      const allPhrases = new Set<string>();
      if (parsedLabel.origin) allPhrases.add(parsedLabel.origin);
      if (parsedLabel.category) allPhrases.add(parsedLabel.category);
      parsedLabel.washInstructions.forEach(inst => allPhrases.add(inst));
      parsedLabel.materials.forEach(part => {
        if (part.part) allPhrases.add(part.part);
        part.fibers.forEach(f => allPhrases.add(f.name));
      });
      
      allPhrases.forEach(phrase => {
        const transRow = dict[phrase] || DictionaryService.lookup(phrase);
        enabledLanguages.forEach(lang => {
          if (!transRow || !transRow[lang]) {
            missing.add(phrase);
          }
        });
      });
    }

    // 2. 从 Excel 批量任务中提取缺失词
    if (excelWorkbook) {
      if (excelMode === 'hla') {
        hlaPreviewRows.forEach(row => {
          if (row.compText) {
            enabledLanguages.forEach(lang => {
              const tResult = TranslationEngine.translateText(row.compText, [lang], dict);
              const val = tResult[lang] || '';
              const matches = val.matchAll(/\[缺失:\s*([^\]]+)\]/g);
              for (const match of matches) {
                missing.add(match[1].trim());
              }
            });
          }
          if (row.washText) {
            const washTexts = row.washText.split(' / ');
            washTexts.forEach(wText => {
              enabledLanguages.forEach(lang => {
                const exactMatch = dict[wText] || DictionaryService.lookup(wText);
                if (!exactMatch || !exactMatch[lang]) {
                  missing.add(wText);
                }
              });
            });
          }
        });
      } else {
        excelResults.forEach(row => {
          enabledLanguages.forEach(lang => {
            const trans = row.translations[lang] || '';
            const matches = trans.matchAll(/\[缺失:\s*([^\]]+)\]/g);
            for (const match of matches) {
              missing.add(match[1].trim());
            }
          });
        });
      }
    }

    return Array.from(missing);
  };

  const missingTerms = getMissingTerms();

  // 中文洗标智能拆解与翻译
  const handleTranslateSingleText = async (useAI = false) => {
    if (!sourceText.trim()) return;
    setIsTranslating(true);

    try {
      let resultLabel: ParsedWashLabel;

      if (useAI) {
        if (!apiKey) {
          alert('AI 翻译需要配置 API Key！');
          setIsTranslating(false);
          return;
        }
        resultLabel = await LLMService.extractLabelFromText(sourceText, llmProvider, apiEndpoint, apiModel, apiKey);
      } else {
        resultLabel = parseWashLabelText(sourceText);
      }

      setParsedLabel(resultLabel);
      setIsEvolutionCollapsed(false);
    } catch (e) {
      alert(`解析失败: ${e instanceof Error ? e.message : e}`);
    } finally {
      setIsTranslating(false);
    }
  };

  // 单元格即时编辑并更新到本地词库
  const handleEditCell = (cnWord: string, langCode: string, newVal: string) => {
    updateDict(() => {
      DictionaryService.addOrUpdateTerm(cnWord, { [langCode]: newVal.trim() });
    });
  };

  // 提取并运行 Excel 翻译的核心计算逻辑
  const runExcelTranslation = async (wb: XLSX.WorkBook) => {
    if (!wb) return;
    try {
      const firstSheetName = wb.SheetNames[0];
      const worksheet = wb.Sheets[firstSheetName];
      const jsonData = XLSX.utils.sheet_to_json<string[]>(worksheet, { header: 1 }) as string[][];

      if (jsonData.length === 0) return;

      const headers = (jsonData[0] as string[]) || [];
      const hasComposition = headers.includes('成分');
      const hasWash1 = headers.includes('洗语1');

      if (hasComposition && hasWash1) {
        setExcelMode('hla');
        setExcelRows(jsonData.slice(1).map(r => String(r[headers.indexOf('老编码')] || r[0] || '')));

        const compIdx = headers.indexOf('成分');
        const washIndices: number[] = [];
        for (let i = 1; i <= 7; i++) {
          const idx = headers.indexOf(`洗语${i}`);
          if (idx !== -1) washIndices.push(idx);
        }

        const previewList = jsonData.slice(1).map(row => {
          if (!row || row.length === 0) return null;
          const oldCode = String(row[headers.indexOf('老编码')] || row[headers.indexOf('流水号')] || '');
          const category = String(row[headers.indexOf('类目')] || '');
          const compText = String(row[compIdx] || '');
          
          const washTexts: string[] = [];
          washIndices.forEach(idx => {
            if (row[idx] !== undefined && row[idx] !== null) {
              const text = String(row[idx]).trim();
              if (text) washTexts.push(text);
            }
          });

          const previewLang = enabledLanguages[0] || 'en';
          const compTransResult = TranslationEngine.translateText(compText, [previewLang], dict);
          const compTrans = compTransResult[previewLang] || '';

          const washTranslations: string[] = [];
          washTexts.forEach(wText => {
            const exactMatch = dict[wText] || DictionaryService.lookup(wText);
            const transVal = exactMatch ? (exactMatch[previewLang] || `[缺失: ${wText}]`) : `[缺失: ${wText}]`;
            washTranslations.push(transVal);
          });

          return {
            oldCode,
            category,
            compText,
            compTrans,
            washText: washTexts.join(' / '),
            washTrans: washTranslations.join(' / ')
          };
        }).filter(Boolean);

        setHlaPreviewRows(previewList as HlaPreviewRow[]);
        setExcelResults([]);
      } else {
        setExcelMode('standard');
        setHlaPreviewRows([]);
        const sourceRows = jsonData.slice(1).map(row => {
          return row && row[0] !== undefined && row[0] !== null ? String(row[0]).trim() : '';
        }).filter(Boolean);
        
        const uniqueRows = Array.from(new Set(sourceRows));
        setExcelRows(uniqueRows);

        const results = uniqueRows.map(cnText => {
          const translations = TranslationEngine.translateText(cnText, enabledLanguages, dict);
          return { cn: cnText, translations };
        });
        setExcelResults(results);
      }
    } catch (error) {
      console.error('计算 Excel 翻译错误:', error);
    }
  };

  // Excel 批量解析上传
  const handleExcelUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setExcelFile(file);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });
      setExcelWorkbook(workbook);
      await runExcelTranslation(workbook);
      setIsEvolutionCollapsed(false);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Excel 读取失败');
    }
  };

  // 导出批量翻译后的 Excel
  const handleExportExcel = () => {
    const enabledConfigs = TARGET_LANGUAGES.filter(l => enabledLanguages.includes(l.code));
    if (excelMode === 'hla') {
      if (!excelWorkbook) return;
      ExcelService.exportHlaTemplateTranslation(excelWorkbook, enabledConfigs, dict);
    } else {
      if (excelResults.length === 0) return;
      ExcelService.exportTranslation(excelResults, enabledConfigs);
    }
  };

  // 在词库进化区快速录入多语言缺失词条并重新触发翻译
  const handleEvolutionSaveMulti = (word: string) => {
    const translations: Record<string, string> = {};
    
    // English is the primary
    const enInput = document.getElementById(`ev-${word}-en`) as HTMLInputElement;
    if (enInput && enInput.value.trim()) {
      translations.en = enInput.value.trim();
    }
    
    // Check other active languages
    enabledLanguages.forEach(lang => {
      if (lang === 'en') return;
      const input = document.getElementById(`ev-${word}-${lang}`) as HTMLInputElement;
      if (input && input.value.trim()) {
        translations[lang] = input.value.trim();
      }
    });

    if (Object.keys(translations).length === 0) {
      alert('请至少录入一种语言的翻译！');
      return;
    }
    
    // 添加到自定义字典 (带有 undo 历史支持)
    updateDict(() => {
      DictionaryService.addOrUpdateTerm(word, translations);
    });
    
    // 从待进化列表中移除
    setExpandedEvWords(prev => prev.filter(w => w !== word));
  };

  // PDF OCR 识别流程
  const handlePDFUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    if (!apiKey) {
      alert('进行洗标图片识别必须先配置 API Key！');
      return;
    }

    setIsProcessingPDF(true);
    setPdfExtractedItems([]);

    const allExtracted: { cn: string; category: string; matchedTrans: TranslationRow | null }[] = [];

    try {
      for (let fIdx = 0; fIdx < files.length; fIdx++) {
        const file = files[fIdx];
        setPdfProgress(`正在读取第 ${fIdx + 1}/${files.length} 个文件: ${file.name}...`);

        if (file.type === 'application/pdf') {
          const arrayBuffer = await file.arrayBuffer();
          const pdfDoc = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
          
          for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
            setPdfProgress(`正在渲染 [${file.name}] 第 ${pageNum}/${pdfDoc.numPages} 页...`);
            const page = await pdfDoc.getPage(pageNum);
            const viewport = page.getViewport({ scale: 2.0 });
            
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            
            if (ctx) {
              await page.render({ canvasContext: ctx, viewport, canvas }).promise;
              const base64Png = canvas.toDataURL('image/png');
              
              setPdfProgress(`正在调用 AI 识别 [${file.name}] 第 ${pageNum} 页...`);
              const labelData = await LLMService.extractLabelFromImage(base64Png, 'image/png', llmProvider, apiEndpoint, apiModel, apiKey);
              
              labelData.materials.forEach(m => {
                m.fibers.forEach(f => {
                  allExtracted.push({ cn: f.name, category: '纤维成分', matchedTrans: dict[f.name] || DictionaryService.lookup(f.name) });
                });
                if (m.part) {
                  allExtracted.push({ cn: m.part, category: '材质部位', matchedTrans: dict[m.part] || DictionaryService.lookup(m.part) });
                }
              });
              labelData.washInstructions.forEach(inst => {
                allExtracted.push({ cn: inst, category: '洗涤术语', matchedTrans: dict[inst] || DictionaryService.lookup(inst) });
              });
              if (labelData.origin) {
                allExtracted.push({ cn: labelData.origin, category: '产地信息', matchedTrans: dict[labelData.origin] || DictionaryService.lookup(labelData.origin) });
              }
            }
          }
        } else {
          setPdfProgress(`正在读取图片 [${file.name}]...`);
          const reader = new FileReader();
          const base64Data = await new Promise<string>((res, rej) => {
            reader.onload = () => res(reader.result as string);
            reader.onerror = rej;
            reader.readAsDataURL(file);
          });

          setPdfProgress(`正在调用 AI 识别图片 [${file.name}]...`);
          const labelData = await LLMService.extractLabelFromImage(base64Data, file.type, llmProvider, apiEndpoint, apiModel, apiKey);
          
          labelData.materials.forEach(m => {
            m.fibers.forEach(f => {
              allExtracted.push({ cn: f.name, category: '纤维成分', matchedTrans: dict[f.name] || DictionaryService.lookup(f.name) });
            });
            if (m.part) {
              allExtracted.push({ cn: m.part, category: '材质部位', matchedTrans: dict[m.part] || DictionaryService.lookup(m.part) });
            }
          });
          labelData.washInstructions.forEach(inst => {
            allExtracted.push({ cn: inst, category: '洗涤术语', matchedTrans: dict[inst] || DictionaryService.lookup(inst) });
          });
          if (labelData.origin) {
            allExtracted.push({ cn: labelData.origin, category: '产地信息', matchedTrans: dict[labelData.origin] || DictionaryService.lookup(labelData.origin) });
          }
        }
      }

      const uniqueItems: typeof pdfExtractedItems = [];
      const seen = new Set<string>();
      allExtracted.forEach(item => {
        if (!seen.has(item.cn)) {
          seen.add(item.cn);
          uniqueItems.push(item);
        }
      });

      setPdfExtractedItems(uniqueItems);
      setIsEvolutionCollapsed(false);
      setPdfProgress('批量识别完成，数据已载入审阅区，请在下方编辑后录入本地字典。');
    } catch (e) {
      alert(`PDF/图片 OCR 提取失败: ${e instanceof Error ? e.message : e}`);
      setPdfProgress('识别出错，操作中断。');
    } finally {
      setIsProcessingPDF(false);
    }
  };

  // 将审阅区的识别条目合并到本地主词库中
  const handleMergeExtractedToMain = () => {
    if (pdfExtractedItems.length === 0) return;
    
    updateDict(() => {
      pdfExtractedItems.forEach(item => {
        if (item.matchedTrans) {
          DictionaryService.addOrUpdateTerm(item.cn, item.matchedTrans);
        }
      });
    });

    setPdfExtractedItems([]);
    alert('已成功合并所有经过审阅的翻译词条进入本地词库！');
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/35">
      {/* 顶部 API Bar 与导航 */}
      <header className="border-b border-slate-900 bg-slate-950/80 backdrop-blur sticky top-0 z-50 px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-lg shadow-indigo-600/35">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-white">OmniX 服装多语种智能洗标系统</h1>
            <p className="text-[10px] text-slate-400">基于 GB/T & ISO 工业标准词库及大语言模型合规校验</p>
          </div>
        </div>

        {/* API Key 及导航切换 */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => setShowSettingsPanel(!showSettingsPanel)}
            className={`flex items-center gap-1.5 bg-slate-900 border ${
              showSettingsPanel ? 'border-indigo-500 text-indigo-400' : 'border-slate-800 text-slate-400 hover:text-slate-200'
            } rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer`}
          >
            <Settings className="w-3.5 h-3.5" />
            接口配置
          </button>

          <nav className="flex bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('label')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md transition-all cursor-pointer ${
                activeTab === 'label' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              洗标翻译与预览
            </button>
            <button
              onClick={() => setActiveTab('excel')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md transition-all cursor-pointer ${
                activeTab === 'excel' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              Excel 批量翻译
            </button>
            <button
              onClick={() => setActiveTab('pdf')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md transition-all cursor-pointer ${
                activeTab === 'pdf' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              PDF/图片 OCR 审阅
            </button>
            <button
              onClick={() => setActiveTab('dictionary')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md transition-all cursor-pointer ${
                activeTab === 'dictionary' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              词汇对照表
            </button>
          </nav>
        </div>
      </header>

      {/* 展开的 API 设置面板 */}
      {showSettingsPanel && (
        <div className="bg-slate-900/60 border-b border-slate-800 backdrop-blur px-6 py-4 transition-all">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div className="flex flex-col gap-1">
              <label className="text-slate-400 font-medium">接口协议模式</label>
              <select
                value={llmProvider}
                onChange={(e) => handleLlmProviderChange(e.target.value as LLMProvider)}
                className="bg-slate-950 border border-slate-800 text-slate-300 rounded px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <option value="gemini-native">Gemini Native (原生)</option>
                <option value="openai">OpenAI Compatible (兼容)</option>
                <option value="anthropic">Anthropic Claude</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-slate-400 font-medium">模型名称 (Model)</label>
              <input
                type="text"
                value={apiModel}
                onChange={(e) => handleApiModelChange(e.target.value)}
                placeholder="例如: gemini-1.5-flash"
                className="bg-slate-950 border border-slate-800 text-slate-300 rounded px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-slate-400 font-medium">代理接口端点 (Endpoint)</label>
              <input
                type="text"
                value={apiEndpoint}
                onChange={(e) => handleApiEndpointChange(e.target.value)}
                placeholder="例如: https://api.openai.com/v1"
                disabled={llmProvider === 'gemini-native'}
                className="bg-slate-950 border border-slate-800 text-slate-300 rounded px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-indigo-500 disabled:opacity-40"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-slate-400 font-medium" htmlFor="settings-api-key">API 密钥 (API Key)</label>
              <div className="relative flex items-center">
                <input
                  type={showApiKey ? 'text' : 'password'}
                  value={apiKey}
                  onChange={(e) => handleApiKeyChange(e.target.value)}
                  placeholder="请输入您的 API Key"
                  id="settings-api-key"
                  className="bg-slate-950 border border-slate-800 text-slate-300 rounded px-2.5 py-1.5 w-full pr-8 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <button 
                  onClick={() => setShowApiKey(!showApiKey)}
                  className="absolute right-2 text-slate-500 hover:text-slate-300 cursor-pointer"
                  type="button"
                >
                  {showApiKey ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <input
                  type="checkbox"
                  id="remember-api-key"
                  checked={rememberApiKey}
                  onChange={(e) => handleToggleRememberApiKey(e.target.checked)}
                  className="w-3.5 h-3.5 rounded border-slate-800 bg-slate-950 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="remember-api-key" className="text-slate-400 text-xs cursor-pointer select-none">
                  记住 API Key (关闭浏览器不清除；不勾选则为临时会话存储)
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 主工作区 */}
      <main className="flex-grow p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto w-full">
        {/* 左侧及中间主要编辑/上传内容 (占 8 列) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* 实时词库进化区 (支持全语种录入扩展) */}
          {missingTerms.length > 0 && (
            isEvolutionCollapsed ? (
              <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl px-5 py-3.5 flex items-center justify-between animate-fadeIn text-xs">
                <div className="flex items-center gap-2 text-amber-400">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-medium">有 {missingTerms.length} 个未录入词汇待补全对照翻译</span>
                </div>
                <button
                  onClick={() => setIsEvolutionCollapsed(false)}
                  className="text-amber-500 hover:text-amber-400 font-semibold cursor-pointer underline text-[11px] hover:no-underline"
                >
                  展开词库进化区
                </button>
              </div>
            ) : (
              <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-5 flex flex-col gap-3 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-amber-400">
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    <h4 className="text-xs font-semibold uppercase tracking-wider">✨ 词库进化区 (未录入词汇实时补全)</h4>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-slate-400 hidden sm:inline">补全翻译并保存后，页面及导出结果会自动刷新</span>
                    <button
                      onClick={() => setIsEvolutionCollapsed(true)}
                      className="text-slate-400 hover:text-slate-200 cursor-pointer p-0.5"
                      title="收起词库进化区"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-3 max-h-64 overflow-y-auto pr-1">
                  {missingTerms.map(word => (
                    <div key={word} className="bg-slate-950/40 border border-slate-800 rounded-lg p-3 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-slate-200">{word}</span>
                        <span className="text-[9px] bg-amber-500/10 text-amber-400 px-1.5 py-0.5 rounded">待补全</span>
                      </div>
                      <div className="flex gap-2 flex-wrap items-center">
                        <input
                          type="text"
                          id={`ev-${word}-en`}
                          placeholder="输入英文翻译 (必填)"
                          className="flex-grow bg-slate-900 border border-slate-800 rounded px-2.5 py-1 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              handleEvolutionSaveMulti(word);
                            }
                          }}
                        />
                        <button
                          onClick={() => setExpandedEvWords(prev =>
                            prev.includes(word) ? prev.filter(w => w !== word) : [...prev, word]
                          )}
                          className="text-[10px] text-amber-500 hover:text-amber-400 font-semibold px-2.5 py-1 cursor-pointer border border-dashed border-amber-500/30 rounded h-7 hover:bg-amber-500/5 transition-colors"
                        >
                          {expandedEvWords.includes(word) ? '收起' : '+ 更多语言'}
                        </button>
                        <button
                          onClick={() => handleEvolutionSaveMulti(word)}
                          className="bg-amber-600 hover:bg-amber-500 text-white text-xs px-3 py-1 rounded transition-colors font-semibold shadow shadow-amber-600/10 cursor-pointer h-7"
                        >
                          录入
                        </button>
                      </div>

                      {/* 更多语言展开面板 */}
                      {expandedEvWords.includes(word) && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-2 pt-2 border-t border-slate-800/60 text-[10px]">
                          {enabledLanguages.filter(l => l !== 'en').map(langCode => {
                            const config = TARGET_LANGUAGES.find(t => t.code === langCode);
                            return (
                              <div key={langCode} className="flex items-center gap-1.5">
                                <span className="text-slate-500 w-10 text-right truncate">{config?.label || langCode}:</span>
                                <input
                                  type="text"
                                  id={`ev-${word}-${langCode}`}
                                  placeholder="未配置"
                                  className="flex-grow bg-slate-900 border border-slate-800 rounded px-1.5 py-0.5 text-[10px] text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500"
                                />
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
          
          {/* Tab 1: 单一洗标处理 */}
          {activeTab === 'label' && (
            <LabelTab 
              sourceText={sourceText}
              setSourceText={setSourceText}
              parsedLabel={parsedLabel}
              translationsMap={translationsMap}
              validationIssues={validationIssues}
              isTranslating={isTranslating}
              enabledLanguages={enabledLanguages}
              handleTranslateSingleText={handleTranslateSingleText}
              handleEditCell={handleEditCell}
              canUndo={canUndo}
              canRedo={canRedo}
              onUndo={undo}
              onRedo={redo}
            />
          )}

          {/* Tab 2: Excel 批量翻译 */}
          {activeTab === 'excel' && (
            <ExcelTab 
              excelFile={excelFile}
              excelRows={excelRows}
              excelResults={excelResults}
              excelMode={excelMode}
              hlaPreviewRows={hlaPreviewRows}
              enabledLanguages={enabledLanguages}
              handleExcelUpload={handleExcelUpload}
              handleExportExcel={handleExportExcel}
              setExcelMode={setExcelMode}
              downloadHlaTemplate={ExcelService.downloadHlaTemplate}
            />
          )}

          {/* Tab 3: PDF / 图片 OCR 解析 */}
          {activeTab === 'pdf' && (
            <PdfTab 
              pdfExtractedItems={pdfExtractedItems}
              isProcessingPDF={isProcessingPDF}
              pdfProgress={pdfProgress}
              handlePDFUpload={handlePDFUpload}
              handleMergeExtractedToMain={handleMergeExtractedToMain}
              setPdfExtractedItems={setPdfExtractedItems}
            />
          )}

          {/* Tab 4: 字典主表编辑器 */}
          {activeTab === 'dictionary' && (
            <DictionaryEditor 
              dict={dict}
              onDictionaryChange={handleDictionaryChange}
              onUndo={undo}
              onRedo={redo}
              canUndo={canUndo}
              canRedo={canRedo}
              storageUsage={storageUsage}
              updateDict={updateDict}
              resetDict={resetDict}
            />
          )}

        </div>

        {/* 右侧：虚拟洗标预览与拼接开关配置 (占 4 列) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* 实物预览卡片 */}
          <MockupLabel 
            parsedLabel={parsedLabel}
            translations={dict}
            enabledLanguages={enabledLanguages}
          />

          {/* 语种和标准开启关闭开关 */}
          <LanguageSelector 
            enabledLanguages={enabledLanguages}
            onToggleLanguage={handleToggleLanguage}
            enabledRules={enabledRules}
            onToggleRule={handleToggleRule}
          />
        </div>
      </main>
    </div>
  );
}
