import React from 'react';
import { Sparkles, Loader2, AlertCircle, Undo2, Redo2 } from 'lucide-react';
import type { ParsedWashLabel, ValidationIssue } from '../types';

interface LabelTabProps {
  sourceText: string;
  setSourceText: (val: string) => void;
  parsedLabel: ParsedWashLabel | null;
  translationsMap: Record<string, string>;
  validationIssues: ValidationIssue[];
  isTranslating: boolean;
  enabledLanguages: string[];
  handleTranslateSingleText: (useAI: boolean) => Promise<void>;
  handleEditCell: (cnWord: string, langCode: string, newVal: string) => void;
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
}

export const LabelTab: React.FC<LabelTabProps> = ({
  sourceText,
  setSourceText,
  parsedLabel,
  translationsMap,
  validationIssues,
  isTranslating,
  enabledLanguages,
  handleTranslateSingleText,
  handleEditCell,
  canUndo,
  canRedo,
  onUndo,
  onRedo
}) => {
  return (
    <div className="flex flex-col gap-6 animate-fadeIn">
      {/* 输入文本框 */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="text-sm font-semibold text-slate-200">输入洗标中文原文本</h3>
          <div className="flex gap-2">
            <button
              onClick={() => handleTranslateSingleText(false)}
              disabled={isTranslating}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-4 py-2 rounded-lg text-xs transition-colors disabled:opacity-50 flex items-center gap-1.5 cursor-pointer"
            >
              本地规则引擎解析
            </button>
            <button
              onClick={() => handleTranslateSingleText(true)}
              disabled={isTranslating}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-4 py-2 rounded-lg text-xs transition-colors shadow shadow-indigo-600/20 disabled:opacity-50 flex items-center gap-1.5 cursor-pointer"
            >
              {isTranslating ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Sparkles className="w-3.5 h-3.5" />
              )}
              AI 智能解析
            </button>
          </div>
        </div>
        <textarea
          rows={5}
          value={sourceText}
          onChange={(e) => setSourceText(e.target.value)}
          placeholder="例如：
面料：70%棉 30%聚酯纤维。
里料：100%涤纶。
40℃常规水洗。不可漂白。不可翻转干燥。常规干洗。中国制造。
安全类别：GB 18401-2010 B类"
          className="w-full bg-slate-950 border border-slate-800 text-slate-300 placeholder-slate-600 rounded-lg p-3 text-xs focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none leading-relaxed"
        />
      </div>

      {/* 静态法规校验警示区 */}
      {validationIssues.length > 0 && (
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-amber-500 text-xs font-bold">
            <AlertCircle className="w-4 h-4" />
            <span>合规性校验警告 ({validationIssues.length})</span>
          </div>
          <ul className="list-disc list-inside text-[11px] text-slate-300 leading-relaxed flex flex-col gap-1.5 pl-1">
            {validationIssues.map((issue, idx) => (
              <li key={idx}>
                <span className={`font-semibold mr-1 ${
                  issue.type === 'error' ? 'text-rose-400' : issue.type === 'warning' ? 'text-amber-400' : 'text-blue-400'
                }`}>
                  [{issue.type === 'error' ? '错误' : issue.type === 'warning' ? '警告' : '提示'}]
                </span>
                {issue.message}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 拆词对照表与实时编辑 (双向交互) */}
      {parsedLabel && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col gap-3">
          <div className="flex justify-between items-center flex-wrap gap-2 border-b border-slate-800 pb-3">
            <h3 className="text-sm font-semibold text-slate-200">拆词对照翻译详情 (双击单元格可修改本地词库)</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={onUndo}
                disabled={!canUndo}
                className="flex items-center gap-1 bg-slate-950 border border-slate-800 hover:bg-slate-800 text-slate-300 text-[10px] font-semibold px-2.5 py-1 rounded transition-colors disabled:opacity-40 cursor-pointer"
                title="撤销词库修改"
              >
                <Undo2 className="w-3 h-3" />
                撤销
              </button>
              <button
                onClick={onRedo}
                disabled={!canRedo}
                className="flex items-center gap-1 bg-slate-950 border border-slate-800 hover:bg-slate-800 text-slate-300 text-[10px] font-semibold px-2.5 py-1 rounded transition-colors disabled:opacity-40 cursor-pointer"
                title="重做词库修改"
              >
                <Redo2 className="w-3 h-3" />
                重做
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[11px] text-left">
              <thead className="bg-slate-950/60 text-slate-400 font-semibold border-b border-slate-800">
                <tr>
                  <th className="p-2.5">类型</th>
                  <th className="p-2.5">原词</th>
                  {enabledLanguages.map(code => (
                    <th key={code} className="p-2.5 uppercase font-mono">{code}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {/* 品名/类目 */}
                {parsedLabel.category && (
                  <tr className="hover:bg-slate-950/20">
                    <td className="p-2.5 font-semibold text-pink-400">品名/类目</td>
                    <td className="p-2.5 font-bold text-slate-200">{parsedLabel.category}</td>
                    {enabledLanguages.map(langCode => {
                      const val = translationsMap[`${parsedLabel.category}_${langCode}`] || '';
                      return (
                        <td key={langCode} className="p-2 bg-slate-950/10 min-w-[80px]">
                          <input
                            type="text"
                            value={val}
                            placeholder="缺失"
                            onChange={(e) => handleEditCell(parsedLabel.category!, langCode, e.target.value)}
                            className={`w-full bg-transparent border-none focus:ring-1 focus:ring-indigo-500 rounded px-1 text-[11px] placeholder-red-500/55 ${
                              !val ? 'text-red-500' : 'text-slate-300'
                            }`}
                          />
                        </td>
                      );
                    })}
                  </tr>
                )}
                {/* 纤维及部位 */}
                {parsedLabel.materials.map((m, idx) => {
                  const items = [];
                  if (m.part) items.push({ word: m.part, label: '部位' });
                  m.fibers.forEach(f => items.push({ word: f.name, label: '纤维' }));
                  
                  return items.map((item, subIdx) => (
                    <tr key={`${idx}-${subIdx}`} className="hover:bg-slate-950/20">
                      <td className="p-2.5 font-semibold text-indigo-400">{item.label}</td>
                      <td className="p-2.5 font-bold text-slate-200">{item.word}</td>
                      {enabledLanguages.map(langCode => {
                        const val = translationsMap[`${item.word}_${langCode}`] || '';
                        return (
                          <td key={langCode} className="p-2 bg-slate-950/10 min-w-[80px]">
                            <input
                              type="text"
                              value={val}
                              placeholder="缺失"
                              onChange={(e) => handleEditCell(item.word, langCode, e.target.value)}
                              className={`w-full bg-transparent border-none focus:ring-1 focus:ring-indigo-500 rounded px-1 text-[11px] placeholder-red-500/55 ${
                                !val ? 'text-red-500' : 'text-slate-300'
                              }`}
                            />
                          </td>
                        );
                      })}
                    </tr>
                  ));
                })}

                {/* 洗涤说明 */}
                {parsedLabel.washInstructions.map((inst, idx) => (
                  <tr key={idx} className="hover:bg-slate-950/20">
                    <td className="p-2.5 font-semibold text-emerald-400">洗涤说明</td>
                    <td className="p-2.5 font-bold text-slate-200">{inst}</td>
                    {enabledLanguages.map(langCode => {
                      const val = translationsMap[`${inst}_${langCode}`] || '';
                      return (
                        <td key={langCode} className="p-2 bg-slate-950/10 min-w-[80px]">
                          <input
                            type="text"
                            value={val}
                            placeholder="缺失"
                            onChange={(e) => handleEditCell(inst, langCode, e.target.value)}
                            className={`w-full bg-transparent border-none focus:ring-1 focus:ring-indigo-500 rounded px-1 text-[11px] placeholder-red-500/55 ${
                              !val ? 'text-red-500' : 'text-slate-300'
                            }`}
                          />
                        </td>
                      );
                    })}
                  </tr>
                ))}

                {/* 产地 */}
                {parsedLabel.origin && (
                  <tr className="hover:bg-slate-950/20">
                    <td className="p-2.5 font-semibold text-amber-400">产地</td>
                    <td className="p-2.5 font-bold text-slate-200">{parsedLabel.origin}</td>
                    {enabledLanguages.map(langCode => {
                      const val = translationsMap[`${parsedLabel.origin}_${langCode}`] || '';
                      return (
                        <td key={langCode} className="p-2 bg-slate-950/10 min-w-[80px]">
                          <input
                            type="text"
                            value={val}
                            placeholder="缺失"
                            onChange={(e) => handleEditCell(parsedLabel.origin!, langCode, e.target.value)}
                            className={`w-full bg-transparent border-none focus:ring-1 focus:ring-indigo-500 rounded px-1 text-[11px] placeholder-red-500/55 ${
                              !val ? 'text-red-500' : 'text-slate-300'
                            }`}
                          />
                        </td>
                      );
                    })}
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
