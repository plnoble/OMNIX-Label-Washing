import { describe, it, expect, beforeEach, vi } from 'vitest';

// 模拟全局 localStorage，以防 Node 运行环境下 DictionaryService 报错
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

import { DictionaryService } from './dictionaryService';

describe('DictionaryService 单元测试', () => {
  beforeEach(() => {
    // 每次测试前重置字典状态
    DictionaryService.resetToDefault();
  });

  it('应该能正常查询到内置的标准词条', () => {
    const term = DictionaryService.lookup('30℃常规水洗');
    expect(term).not.toBeNull();
    expect(term?.en).toBe('Machine wash 30°C normal process');
  });

  it('查询不存在的词条应返回 null', () => {
    const term = DictionaryService.lookup('不存在的测试词条_OmniX');
    expect(term).toBeNull();
  });

  it('应该能正确新增和更新自定义词条', () => {
    const testKey = '超弹合成纤维';
    const trans = { en: 'Super Elastic Fiber', th: 'เส้นใยยืดหยุ่นสูง' };
    
    // 新增
    DictionaryService.addOrUpdateTerm(testKey, trans);
    
    let term = DictionaryService.lookup(testKey);
    expect(term).not.toBeNull();
    expect(term?.en).toBe('Super Elastic Fiber');
    expect(term?.th).toBe('เส้นใยยืดหยุ่นสูง');
    expect(DictionaryService.isCustomTerm(testKey)).toBe(true);

    // 更新单个语种，其他语种应该被保留
    DictionaryService.addOrUpdateTerm(testKey, { en: 'Mega Elastic Fiber' });
    term = DictionaryService.lookup(testKey);
    expect(term?.en).toBe('Mega Elastic Fiber');
    expect(term?.th).toBe('เส้นใยยืดหยุ่นสูง');
  });

  it('能够正确地删除自定义词条', () => {
    const testKey = '临时测试词条';
    DictionaryService.addOrUpdateTerm(testKey, { en: 'Temp Term' });
    expect(DictionaryService.lookup(testKey)).not.toBeNull();
    
    DictionaryService.deleteTerm(testKey);
    expect(DictionaryService.lookup(testKey)).toBeNull();
  });
});
