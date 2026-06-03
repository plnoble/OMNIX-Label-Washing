import React from 'react';
import { TARGET_LANGUAGES, COMPLIANCE_RULES } from '../config';

interface LanguageSelectorProps {
  enabledLanguages: string[];
  onToggleLanguage: (code: string) => void;
  enabledRules: string[];
  onToggleRule: (id: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  enabledLanguages,
  onToggleLanguage,
  enabledRules,
  onToggleRule,
}) => {
  return (
    <div className="flex flex-col gap-6 bg-slate-900 border border-slate-800 rounded-xl p-5">
      {/* 语种拼接模块 */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-slate-200">目标语种模块拼接</h3>
          <span className="text-[10px] bg-slate-800 text-indigo-400 font-mono px-2 py-0.5 rounded">
            已启用 {enabledLanguages.length} / {TARGET_LANGUAGES.length}
          </span>
        </div>
        <p className="text-xs text-slate-400 mb-4 leading-relaxed">
          勾选您需要输出翻译的语言列。未勾选的语言列在表格展示和 Excel 导出时将被自动关闭和排除。
        </p>
        
        <div className="grid grid-cols-2 gap-2">
          {TARGET_LANGUAGES.map(lang => {
            const isChecked = enabledLanguages.includes(lang.code);
            return (
              <label
                key={lang.code}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border text-xs cursor-pointer select-none transition-all ${
                  isChecked
                    ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300'
                    : 'bg-slate-950/40 border-slate-800/80 text-slate-400 hover:border-slate-700/80'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => onToggleLanguage(lang.code)}
                  className="rounded text-indigo-600 focus:ring-indigo-500/50 bg-slate-800 border-slate-700 w-4 h-4 cursor-pointer"
                />
                <div className="flex flex-col">
                  <span className="font-semibold">{lang.label}</span>
                  <span className="text-[9px] opacity-60 font-mono">{lang.englishName}</span>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      <hr className="border-slate-800" />

      {/* 法规合规规则模块 */}
      <div>
        <h3 className="text-sm font-semibold text-slate-200 mb-3">合规性校验规则</h3>
        <p className="text-xs text-slate-400 mb-4 leading-relaxed">
          开启行业或地区法规的自动静态校验规则，防止翻译和标注格式不合规。
        </p>

        <div className="flex flex-col gap-3">
          {COMPLIANCE_RULES.map(rule => {
            const isChecked = enabledRules.includes(rule.id);
            return (
              <label
                key={rule.id}
                className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer select-none transition-all ${
                  isChecked
                    ? 'bg-emerald-500/5 border-emerald-500/20 text-slate-300'
                    : 'bg-slate-950/40 border-slate-800/80 text-slate-500 hover:border-slate-700/80'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => onToggleRule(rule.id)}
                  className="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500/50 bg-slate-800 border-slate-700 w-4 h-4 cursor-pointer"
                />
                <div className="flex flex-col gap-0.5">
                  <span className={`text-xs font-semibold ${isChecked ? 'text-slate-200' : 'text-slate-500'}`}>
                    {rule.name}
                  </span>
                  <span className="text-[10px] leading-relaxed text-slate-400 opacity-80">
                    {rule.description}
                  </span>
                </div>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};
