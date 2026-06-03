import React from 'react';
import { Table, Download } from 'lucide-react';

interface ExcelTabProps {
  excelFile: File | null;
  excelRows: string[];
  excelResults: { cn: string; translations: Record<string, string> }[];
  excelMode: 'standard' | 'hla';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hlaPreviewRows: any[];
  enabledLanguages: string[];
  handleExcelUpload: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  handleExportExcel: () => void;
  setExcelMode: (mode: 'standard' | 'hla') => void;
  downloadHlaTemplate: () => void;
}

export const ExcelTab: React.FC<ExcelTabProps> = ({
  excelFile,
  excelRows,
  excelResults,
  excelMode,
  hlaPreviewRows,
  enabledLanguages,
  handleExcelUpload,
  handleExportExcel,
  setExcelMode,
  downloadHlaTemplate
}) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col gap-5 animate-fadeIn">
      <div className="flex justify-between items-start flex-wrap gap-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-200">批量 Excel 洗标翻译导入</h3>
          <p className="text-xs text-slate-400 mt-1">
            支持标准单列翻译及 HLA 22列工作表模板翻译。系统将根据表头自动切换模式。
          </p>
        </div>
        <button
          onClick={downloadHlaTemplate}
          className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 bg-slate-950/60 hover:bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          title="下载系统配套的 HLA 洗标 Excel 模板"
        >
          <Download className="w-3.5 h-3.5" />
          下载 HLA 22列模板
        </button>
      </div>

      {/* 上传 */}
      <div className="border-2 border-dashed border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center text-center bg-slate-950/40">
        <Table className="w-12 h-12 text-slate-600 mb-2" />
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleExcelUpload}
          className="hidden"
          id="excel-upload"
        />
        <label 
          htmlFor="excel-upload"
          className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2 rounded-lg cursor-pointer transition-colors shadow shadow-indigo-600/20"
        >
          选择 Excel 文件
        </label>
        {excelFile && (
          <span className="text-xs text-indigo-400 mt-2 font-mono">{excelFile.name}</span>
        )}
      </div>

      {/* HLA 专属模式横幅 */}
      {excelFile && excelMode === 'hla' && (
        <div className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs rounded-lg p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span>检测到 HLA 22列标准工作表结构，已自动启用 <b>HLA 专属模板模式</b>。</span>
          </div>
          <button
            onClick={() => setExcelMode('standard')}
            className="text-[10px] text-slate-400 hover:text-slate-200 underline cursor-pointer"
          >
            切换为标准单列模式
          </button>
        </div>
      )}

      {/* 实时分析与导出按钮 */}
      {excelRows.length > 0 && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-t border-slate-800 pt-4 flex-wrap gap-2">
            <span className="text-xs text-slate-300">
              共检测到 <span className="font-bold text-indigo-400 font-mono">{excelRows.length}</span> 条洗标记录。
            </span>
            <button
              onClick={handleExportExcel}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 shadow shadow-emerald-600/20 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              一键导出至 Excel
            </button>
          </div>

          {/* 实时预览 */}
          <div className="overflow-x-auto border border-slate-800 rounded-lg max-h-80 bg-slate-950/20">
            {excelMode === 'hla' ? (
              <table className="w-full border-collapse text-[10px] text-left">
                <thead className="bg-slate-950 text-slate-400 sticky top-0">
                  <tr>
                    <th className="p-2.5 border-b border-slate-800 w-[120px]">老编码</th>
                    <th className="p-2.5 border-b border-slate-800 w-[80px]">类目</th>
                    <th className="p-2.5 border-b border-slate-800 w-1/3">成分 (中文原语)</th>
                    <th className="p-2.5 border-b border-slate-800 w-1/3">成分 (预览翻译)</th>
                    <th className="p-2.5 border-b border-slate-800">洗语 (中文 / 预览翻译)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/40">
                  {hlaPreviewRows.map((row, idx) => {
                    const isCompMissing = row.compTrans.includes('[缺失');
                    const isWashMissing = row.washTrans.includes('[缺失');
                    return (
                      <tr key={idx} className="hover:bg-slate-950/20 text-slate-300">
                        <td className="p-2.5 font-mono truncate">{row.oldCode}</td>
                        <td className="p-2.5">{row.category}</td>
                        <td className="p-2.5 whitespace-pre-line leading-relaxed">{row.compText}</td>
                        <td className={`p-2.5 whitespace-pre-line leading-relaxed ${isCompMissing ? 'text-amber-400 font-bold bg-amber-500/5' : 'text-slate-400'}`}>
                          {row.compTrans}
                        </td>
                        <td className="p-2.5 leading-relaxed">
                          <div className="text-slate-300">{row.washText}</div>
                          <div className={`mt-1 font-mono text-[9px] ${isWashMissing ? 'text-amber-400 font-bold bg-amber-500/5' : 'text-slate-400'}`}>
                            {row.washTrans}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <table className="w-full border-collapse text-[10px] text-left">
                <thead className="bg-slate-950 text-slate-400 sticky top-0">
                  <tr>
                    <th className="p-2.5 border-b border-slate-800 w-1/3">原文 (第1列)</th>
                    {enabledLanguages.map(lang => (
                      <th key={lang} className="p-2.5 border-b border-slate-800 uppercase font-mono">{lang}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/40">
                  {excelResults.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-950/20">
                      <td className="p-2.5 font-medium text-slate-300 truncate max-w-xs">{row.cn}</td>
                      {enabledLanguages.map(lang => {
                        const trans = row.translations[lang];
                        const isMissing = trans?.includes('[缺失');
                        return (
                          <td key={lang} className={`p-2.5 truncate max-w-[120px] ${isMissing ? 'bg-amber-500/10 text-amber-400 font-bold' : 'text-slate-400'}`}>
                            {trans}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
