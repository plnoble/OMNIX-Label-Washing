import React, { useState } from 'react';
import type { TranslationRow } from '../types';
import { DictionaryService } from '../services/dictionaryService';
import { ExcelService } from '../services/excelService';
import { TARGET_LANGUAGES } from '../config';
import { Plus, Search, Trash2, RotateCcw, X, Edit3, Check, Upload, Download, Undo2, Redo2 } from 'lucide-react';

interface DictionaryEditorProps {
  dict: Record<string, TranslationRow>;
  onDictionaryChange: () => void;
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  storageUsage: { bytesUsed: number; percentage: number; isWarning: boolean };
  updateDict: (updater: () => void) => void;
  resetDict: () => void;
}

export const DictionaryEditor: React.FC<DictionaryEditorProps> = ({
  dict,
  onDictionaryChange,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
  storageUsage,
  updateDict,
  resetDict
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // 编辑状态
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<Partial<TranslationRow>>({});
  
  // 新增状态
  const [isAdding, setIsAdding] = useState(false);
  const [newKey, setNewKey] = useState('');
  const [newValues, setNewValues] = useState<Partial<TranslationRow>>({});

  // 分页状态
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 50;

  const refreshDict = () => {
    onDictionaryChange();
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // 搜索时重置为第一页
  };

  const filteredKeys = Object.keys(dict).filter(key => 
    key.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dict[key].en.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredKeys.length / PAGE_SIZE) || 1;
  const displayPage = Math.min(currentPage, totalPages);
  const paginatedKeys = filteredKeys.slice((displayPage - 1) * PAGE_SIZE, displayPage * PAGE_SIZE);

  // 开启编辑
  const startEdit = (key: string) => {
    setEditingKey(key);
    setEditValues(dict[key]);
  };

  // 保存编辑
  const saveEdit = (key: string) => {
    updateDict(() => {
      DictionaryService.addOrUpdateTerm(key, editValues);
    });
    setEditingKey(null);
    refreshDict();
  };

  // 删除词条
  const handleDelete = (key: string) => {
    if (window.confirm(`确定要删除 “${key}” 吗？`)) {
      updateDict(() => {
        DictionaryService.deleteTerm(key);
      });
      refreshDict();
    }
  };

  // 恢复默认
  const handleReset = () => {
    if (window.confirm('警告：此操作将清空所有自定义词条，并重置为出厂标准词库！确定继续吗？')) {
      resetDict();
      refreshDict();
    }
  };

  // 保存新增词条
  const handleAddSave = () => {
    const key = newKey.trim();
    if (!key) {
      alert('中文原词不能为空');
      return;
    }
    if (dict[key]) {
      alert('该词条已存在');
      return;
    }
    updateDict(() => {
      DictionaryService.addOrUpdateTerm(key, newValues);
    });
    setIsAdding(false);
    setNewKey('');
    setNewValues({});
    refreshDict();
  };

  const handleBulkImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const importedRows = await ExcelService.parseDictionaryExcel(file);
      if (importedRows.length === 0) {
        alert('未解析到有效词条，请检查 Excel 格式是否正确');
        return;
      }
      
      updateDict(() => {
        importedRows.forEach(row => {
          const cleanKey = row.cn.trim();
          const translations: Partial<TranslationRow> = {};
          TARGET_LANGUAGES.forEach(lang => {
            if (row[lang.code]) {
              translations[lang.code] = row[lang.code];
            }
          });
          DictionaryService.addOrUpdateTerm(cleanKey, translations);
        });
      });

      alert(`成功导入 ${importedRows.length} 条对照词汇！`);
      refreshDict();
    } catch (err) {
      alert(err instanceof Error ? err.message : '字典导入失败');
    } finally {
      e.target.value = '';
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 border border-slate-800 rounded-xl p-5 animate-fadeIn">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-200">本地词汇对照库管理</h3>
          <p className="text-xs text-slate-400 mt-1">维护纤维和洗保用语，翻译引擎会自动拆词并查阅此对照库。</p>
          
          {/* localStorage Capacity monitoring gauge */}
          <div className="flex items-center gap-2 mt-1.5 text-[10px] text-slate-400 flex-wrap">
            <span>存储占用: {(storageUsage.bytesUsed / 1024).toFixed(1)} KB / 5,120 KB</span>
            <div className="w-24 h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800 inline-block align-middle">
              <div 
                className={`h-full rounded-full transition-all duration-300 ${
                  storageUsage.isWarning ? 'bg-rose-500' : 'bg-indigo-500'
                }`}
                style={{ width: `${Math.min(storageUsage.percentage, 100)}%` }}
              />
            </div>
            <span>({storageUsage.percentage.toFixed(1)}%)</span>
            {storageUsage.isWarning && (
              <span className="text-rose-400 animate-pulse font-semibold">⚠️ 空间即将耗尽，请及时清理或备份！</span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {/* Undo/Redo buttons */}
          <div className="flex items-center gap-1 bg-slate-950 border border-slate-800 rounded px-1 py-0.5">
            <button
              onClick={onUndo}
              disabled={!canUndo}
              className="p-1 text-slate-400 hover:text-slate-200 disabled:opacity-30 disabled:hover:text-slate-400 cursor-pointer"
              title="撤销词库修改"
            >
              <Undo2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onRedo}
              disabled={!canRedo}
              className="p-1 text-slate-400 hover:text-slate-200 disabled:opacity-30 disabled:hover:text-slate-400 cursor-pointer"
              title="重做词库修改"
            >
              <Redo2 className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            新增词条
          </button>
          
          <input
            type="file"
            id="dict-excel-upload"
            accept=".xlsx, .xls"
            onChange={handleBulkImport}
            className="hidden"
          />
          <label
            htmlFor="dict-excel-upload"
            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors"
            title="通过 Excel 批量导入词条对照表"
          >
            <Upload className="w-3.5 h-3.5" />
            批量导入
          </label>

          <button
            onClick={() => ExcelService.exportDictionary(dict)}
            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
            title="导出当前本地词库为 Excel"
          >
            <Download className="w-3.5 h-3.5" />
            导出词库
          </button>

          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
            title="清除所有自定义及覆盖词条，恢复到内置标准状态"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            重置词库
          </button>
        </div>
      </div>

      {/* 搜索栏 */}
      <div className="relative mb-4">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
          <Search className="w-4 h-4" />
        </span>
        <input
          type="text"
          placeholder="搜索中文原词 或 英文翻译..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full bg-slate-950 border border-slate-800 text-slate-300 placeholder-slate-500 text-xs rounded-lg pl-9 pr-4 py-2 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
        />
      </div>

      {/* 新增词条输入区 */}
      {isAdding && (
        <div className="bg-slate-950/60 border border-indigo-500/20 rounded-lg p-4 mb-4 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-indigo-400">新增对照词汇</span>
            <button onClick={() => setIsAdding(false)} className="text-slate-500 hover:text-slate-300">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <label htmlFor="add-cn-word" className="text-slate-400 block mb-1">中文原词 (必填)</label>
              <input
                type="text"
                id="add-cn-word"
                value={newKey}
                onChange={(e) => setNewKey(e.target.value)}
                placeholder="例如：新型纤维"
                className="w-full bg-slate-900 border border-slate-800 text-slate-300 rounded px-2.5 py-1.5 focus:outline-none"
              />
            </div>
            {TARGET_LANGUAGES.map(lang => (
              <div key={lang.code}>
                <label htmlFor={`add-lang-${lang.code}`} className="text-slate-400 block mb-1">{lang.label} ({lang.englishName})</label>
                <input
                  type="text"
                  id={`add-lang-${lang.code}`}
                  value={newValues[lang.code] || ''}
                  onChange={(e) => setNewValues({ ...newValues, [lang.code]: e.target.value })}
                  placeholder="翻译"
                  className="w-full bg-slate-900 border border-slate-800 text-slate-300 rounded px-2.5 py-1.5 focus:outline-none"
                />
              </div>
            ))}
          </div>
          <button
            onClick={handleAddSave}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded py-2 text-xs mt-1 transition-colors"
          >
            保存并加入对照库
          </button>
        </div>
      )}

      {/* 词条列表 */}
      <div className="flex-grow overflow-y-auto max-h-[400px] border border-slate-800/80 rounded-lg bg-slate-950/30">
        <table className="w-full border-collapse text-xs text-left">
          <thead className="bg-slate-950/60 text-slate-400 font-semibold border-b border-slate-800 sticky top-0">
            <tr>
              <th className="p-3 w-1/4">中文原词</th>
              <th className="p-3 w-1/4">英文翻译</th>
              <th className="p-3 w-1/3">其他语言翻译</th>
              <th className="p-3 text-right">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {paginatedKeys.length > 0 ? (
              paginatedKeys.map(key => {
                const isEditing = editingKey === key;
                return (
                  <tr key={key} className="hover:bg-slate-900/30 text-slate-300">
                    <td className="p-3 font-semibold text-slate-200">
                      <div className="flex flex-col gap-1">
                        <span>{key}</span>
                        {DictionaryService.isCustomTerm(key) && (
                          <span className="text-[9px] w-fit font-normal bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-1.5 py-0.5 rounded">
                            👤 自定义
                          </span>
                        )}
                        {DictionaryService.isModifiedTerm(key) && (
                          <span className="text-[9px] w-fit font-normal bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1.5 py-0.5 rounded">
                            ✏️ 已修改
                          </span>
                        )}
                        {DictionaryService.isSystemTerm(key) && !DictionaryService.isModifiedTerm(key) && (
                          <span className="text-[9px] w-fit font-normal bg-slate-800 text-slate-400 border border-slate-700 px-1.5 py-0.5 rounded">
                            🏷️ 系统内置
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-3 font-mono">
                      {isEditing ? (
                        <input
                          type="text"
                          value={editValues.en || ''}
                          onChange={(e) => setEditValues({ ...editValues, en: e.target.value })}
                          className="bg-slate-900 border border-slate-700 text-slate-200 rounded px-1.5 py-1 w-full focus:outline-none font-sans"
                        />
                      ) : (
                        dict[key].en || <span className="text-red-500 opacity-40">未配置</span>
                      )}
                    </td>
                    <td className="p-3">
                      {isEditing ? (
                        <div className="grid grid-cols-2 gap-1.5">
                          {TARGET_LANGUAGES.filter(l => l.code !== 'en').map(lang => (
                            <div key={lang.code} className="flex items-center gap-1">
                              <span className="text-[9px] text-slate-500 w-8">{lang.label}:</span>
                              <input
                                type="text"
                                value={editValues[lang.code] || ''}
                                onChange={(e) => setEditValues({ ...editValues, [lang.code]: e.target.value })}
                                className="bg-slate-900 border border-slate-700 text-slate-200 rounded px-1.5 py-0.5 text-[10px] w-full focus:outline-none"
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-[10px] text-slate-400 leading-relaxed max-w-sm truncate" title={
                          TARGET_LANGUAGES.filter(l => l.code !== 'en')
                            .map(l => `${l.label}: ${dict[key][l.code] || '-'}`)
                            .join('\n')
                        }>
                          {TARGET_LANGUAGES.filter(l => l.code !== 'en')
                            .map(l => `${l.label}: ${dict[key][l.code] || '-'}`)
                            .join(', ')}
                        </div>
                      )}
                    </td>
                    <td className="p-3 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {isEditing ? (
                          <>
                            <button
                              onClick={() => saveEdit(key)}
                              className="text-emerald-500 hover:text-emerald-400 p-1 bg-slate-900 border border-slate-800 rounded"
                              title="确认保存"
                            >
                              <Check className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => setEditingKey(null)}
                              className="text-slate-500 hover:text-slate-400 p-1 bg-slate-900 border border-slate-800 rounded"
                              title="取消"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => startEdit(key)}
                              className="text-slate-400 hover:text-indigo-400 p-1 bg-slate-900 border border-slate-800 rounded"
                              title="编辑翻译"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDelete(key)}
                              className="text-slate-500 hover:text-red-400 p-1 bg-slate-900 border border-slate-800 rounded"
                              title="删除词条"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={4} className="text-center p-8 text-slate-500 opacity-60">没有找到匹配的词汇对照记录</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 分页控制栏 */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-3 px-1 text-xs text-slate-400">
          <div>
            共 <span className="font-semibold text-slate-200">{filteredKeys.length}</span> 条词条，
            当前第 <span className="font-semibold text-slate-200">{displayPage}</span> / {totalPages} 页
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={displayPage === 1}
              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-slate-300 font-semibold transition-colors border border-slate-700 cursor-pointer"
            >
              上一页
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={displayPage === totalPages}
              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-slate-300 font-semibold transition-colors border border-slate-700 cursor-pointer"
            >
              下一页
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
