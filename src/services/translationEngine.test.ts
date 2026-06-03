import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock localStorage for Node environment run
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      store = {};
    })
  };
})();

Object.defineProperty(globalThis, 'localStorage', {
  value: localStorageMock,
  writable: true
});

import { TranslationEngine } from './excelService';
import { DictionaryService } from './dictionaryService';

describe('TranslationEngine 单元测试', () => {
  beforeEach(() => {
    DictionaryService.resetToDefault();
  });

  it('全句精确匹配翻译', () => {
    const dict = DictionaryService.getDictionary();
    const result = TranslationEngine.translateText('30℃常规水洗', ['en', 'fr'], dict);
    expect(result.en).toBe('Machine wash 30°C normal process');
    expect(result.fr).toBe('Lavage en machine à 30°C, programme normal');
  });

  it('多句拼接翻译并使用正确的标点符号', () => {
    const dict = DictionaryService.getDictionary();
    const result = TranslationEngine.translateText('30℃常规水洗。不可漂白。', ['en', 'vn'], dict);
    
    // 英语通常以句号加空格分隔且结尾有句号
    expect(result.en).toBe('Machine wash 30°C normal process. Do not bleach.');
    // 越南语可能使用空格或句号拼接
    expect(result.vn).toContain('Giặt máy 30°C quy trình thường');
    expect(result.vn).toContain('Không dùng chất tẩy');
  });

  it('智能成分拆解与格式化翻译', () => {
    const dict = DictionaryService.getDictionary();
    
    // 内置词典含有棉(Cotton)、聚酯纤维(Polyester)等的翻译
    const result = TranslationEngine.translateText('面料：66%棉 34%聚酯纤维', ['en', 'es'], dict);
    
    // 检查部位与纤维成分是否正确组合
    expect(result.en.toUpperCase()).toContain('FABRIC');
    expect(result.en.toUpperCase()).toContain('66% COTTON');
    expect(result.en.toUpperCase()).toContain('POLYESTER');
    
    expect(result.es.toUpperCase()).toContain('ALGODÓN');
    expect(result.es.toUpperCase()).toContain('POLIÉSTER');
  });

  it('多行换行文本应该分别翻译并合并', () => {
    const dict = DictionaryService.getDictionary();
    const multilineText = '30℃常规水洗\n不可漂白';
    
    const result = TranslationEngine.translateText(multilineText, ['en'], dict);
    expect(result.en).toBe('Machine wash 30°C normal process\nDo not bleach');
  });

  it('未知成分或句子应返回缺失标记', () => {
    const dict = DictionaryService.getDictionary();
    const result = TranslationEngine.translateText('不可飞天水洗', ['en'], dict);
    expect(result.en).toContain('[缺失: 不可飞天水洗]');
  });
});
