export interface LanguageConfig {
  code: string;
  label: string;
  englishName: string;
}

export const TARGET_LANGUAGES: LanguageConfig[] = [
  { code: 'en', label: '英语', englishName: 'English' },
  { code: 'th', label: '泰语', englishName: 'Thai' },
  { code: 'vn', label: '越南语', englishName: 'Vietnamese' },
  { code: 'es', label: '西班牙语', englishName: 'Spanish' },
  { code: 'pt', label: '葡萄牙语', englishName: 'Portuguese' },
  { code: 'id_lang', label: '印尼语', englishName: 'Indonesian' },
  { code: 'ru', label: '俄语', englishName: 'Russian' },
  { code: 'fr', label: '法语', englishName: 'French' },
  { code: 'ar', label: '阿拉伯语', englishName: 'Arabic' },
  { code: 'ja', label: '日语', englishName: 'Japanese' },
];

export interface ComplianceRule {
  id: string;
  name: string;
  description: string;
  defaultEnabled: boolean;
}

export const COMPLIANCE_RULES: ComplianceRule[] = [
  {
    id: 'eu_descending',
    name: '欧盟成分降序校验',
    description: '自动验证纤维成分的百分比排序是否符合由大到小（降序）的要求（欧盟法规 1007/2011）。',
    defaultEnabled: true,
  },
  {
    id: 'gb_18401_safety',
    name: 'GB 18401 安全类别校验',
    description: '验证中文洗标中是否正确标注了国家基本安全技术规范的类别（如 A类/B类/C类）。',
    defaultEnabled: true,
  },
  {
    id: 'origin_label',
    name: '产地标志校验',
    description: '检测产地信息（如“中国制造”或“Made in China”）是否在各启用语种中都有对应的有效翻译。',
    defaultEnabled: true,
  },
];
