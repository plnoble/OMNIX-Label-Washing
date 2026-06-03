export interface TranslationRow {
  cn: string;
  en: string;
  th: string;
  vn: string;
  es: string;
  pt: string;
  id_lang: string;
  ru: string;
  fr: string;
  ar: string;
  ja: string;
  [key: string]: string;
}

export interface FiberComponent {
  percentage: number;
  name: string; // 中文材质名称，如 “聚酯纤维”
}

export interface ParsedComposition {
  part?: string; // 比如 “面料”, “里料”, “填充物” 等，可为空
  fibers: FiberComponent[];
  rawText: string; // 原始中文成分文本，如 “面料：100% 聚酯纤维”
}

export interface ParsedWashLabel {
  styleNo?: string;
  size?: string;
  safetyClass?: string; // A类 / B类 / C类
  origin?: string; // “中国制造” 等
  category?: string; // 服装品名/类目
  sku?: string; // SKU物料/印刷信息
  materials: ParsedComposition[];
  washInstructions: string[]; // 中文洗涤术语列表
}

export interface ValidationIssue {
  type: 'error' | 'warning' | 'info';
  ruleId: string;
  message: string;
}

export type LLMProvider = 'openai' | 'anthropic' | 'gemini-native';

export interface AppState {
  apiKey: string;
  llmProvider: LLMProvider;
  apiEndpoint: string;
  apiModel: string;
  enabledLanguages: string[]; // 启用语种列表，如 ['en', 'fr', 'ja']
  enabledRules: string[]; // 启用的法规验证规则 ID
  sourceText: string; // 输入的中文洗标文本
  parsedLabel: ParsedWashLabel | null;
  translations: Record<string, TranslationRow>; // 中文短语/词汇 -> 多国语言翻译
  validationIssues: ValidationIssue[];
}
