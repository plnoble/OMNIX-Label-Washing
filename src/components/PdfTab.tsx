import React from 'react';
import { Image as ImageIcon, Loader2, CheckCircle, Info } from 'lucide-react';
import type { TranslationRow } from '../types';
import { TARGET_LANGUAGES } from '../config';

interface PdfTabProps {
  pdfExtractedItems: { cn: string; category: string; matchedTrans: TranslationRow | null }[];
  isProcessingPDF: boolean;
  pdfProgress: string;
  handlePDFUpload: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  handleMergeExtractedToMain: () => void;
  setPdfExtractedItems: React.Dispatch<React.SetStateAction<{ cn: string; category: string; matchedTrans: TranslationRow | null }[]>>;
}

export const PdfTab: React.FC<PdfTabProps> = ({
  pdfExtractedItems,
  isProcessingPDF,
  pdfProgress,
  handlePDFUpload,
  handleMergeExtractedToMain,
  setPdfExtractedItems
}) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col gap-5 animate-fadeIn">
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold text-slate-200">批量上传洗标 PDF/图片 智能分析提取</h3>
        <p className="text-xs text-slate-400">
          上传印刷厂或客户发来的 PDF/图片。AI 会自动将其识别并载入下方审阅区。审阅对照无误后，点击一键入库，快速补充本地字典。
        </p>
      </div>

      {/* 离线/在线提示 */}
      <div className="bg-blue-500/5 border border-blue-500/20 text-blue-400 text-xs rounded-lg p-3 flex items-start gap-2">
        <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
        <div className="leading-relaxed">
          <p className="font-semibold">💡 OCR 解析说明：</p>
          <p className="text-slate-400 text-[11px] mt-0.5">
            1. PDF 及图片解析需要调用大语言模型的视觉能力，并且需要加载 PDF 渲染引擎，因此<b>必须处于联网状态</b>并正确配置接口 API Key。<br />
            2. 本功能支持多文件批量上传（同时选择多个 PDF/图片），系统将逐个、逐页进行后台解析。<br />
            3. 识别提取出的词汇将先进入「隔离审阅区」，您可以在审阅区对各项翻译进行二次修改，确认无误后点击保存方可合并入主词库，<b>绝不污染现有出厂字典</b>。
          </p>
        </div>
      </div>

      {/* 上传区 */}
      <div className="border-2 border-dashed border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center text-center bg-slate-950/40">
        <ImageIcon className="w-12 h-12 text-slate-600 mb-2" />
        <input
          type="file"
          multiple
          accept="application/pdf, image/*"
          onChange={handlePDFUpload}
          className="hidden"
          id="pdf-upload"
          disabled={isProcessingPDF}
        />
        <label 
          htmlFor="pdf-upload"
          className={`bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2 rounded-lg cursor-pointer transition-colors shadow shadow-indigo-600/20 ${
            isProcessingPDF ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isProcessingPDF ? '正在处理中...' : '选择 PDF / 洗标图片'}
        </label>
      </div>

      {/* 解析进度条 */}
      {isProcessingPDF && (
        <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-lg p-3 flex items-center gap-3 text-xs text-indigo-300">
          <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
          <span>{pdfProgress}</span>
        </div>
      )}

      {/* 审阅区表格 */}
      {pdfExtractedItems.length > 0 && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-t border-slate-800 pt-4 flex-wrap gap-2">
            <span className="text-xs text-slate-300">
              审阅暂存区：共提取到 <span className="font-bold text-indigo-400 font-mono">{pdfExtractedItems.length}</span> 个不重复词条。
            </span>
            <button
              onClick={handleMergeExtractedToMain}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 shadow shadow-emerald-600/20 cursor-pointer"
            >
              <CheckCircle className="w-3.5 h-3.5" />
              审阅无误：保存并合并至词库
            </button>
          </div>

          {/* 审阅表数据 */}
          <div className="overflow-x-auto border border-slate-800 rounded-lg max-h-72 bg-slate-950/20">
            <table className="w-full border-collapse text-[10px] text-left">
              <thead className="bg-slate-950 text-slate-400 sticky top-0">
                <tr>
                  <th className="p-2.5 border-b border-slate-800 w-16">类别</th>
                  <th className="p-2.5 border-b border-slate-800 w-1/4">中文原词</th>
                  <th className="p-2.5 border-b border-slate-800 uppercase font-mono w-1/4">EN (英文)</th>
                  <th className="p-2.5 border-b border-slate-800 uppercase font-mono w-1/3">其他语言翻译补充</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/40">
                {pdfExtractedItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-950/20 text-slate-300">
                    <td className="p-2.5 font-bold text-indigo-400">{item.category}</td>
                    <td className="p-2.5 font-semibold text-slate-200">{item.cn}</td>
                    <td className="p-2.5">
                      <input
                        type="text"
                        value={item.matchedTrans?.en || ''}
                        onChange={(e) => {
                          const updated = [...pdfExtractedItems];
                          updated[idx].matchedTrans = {
                            ...(item.matchedTrans || {
                              cn: item.cn, en: '', th: '', vn: '', es: '', pt: '', id_lang: '', ru: '', fr: '', ar: '', ja: ''
                            }),
                            en: e.target.value
                          };
                          setPdfExtractedItems(updated);
                        }}
                        className="bg-slate-900 border border-slate-800 text-slate-200 rounded px-1.5 py-1 text-[10px] w-full focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      />
                    </td>
                    <td className="p-2.5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {TARGET_LANGUAGES.filter(l => l.code !== 'en').map(lang => (
                          <div key={lang.code} className="flex items-center gap-1">
                            <span className="text-[8px] text-slate-500 w-8 truncate">{lang.label}:</span>
                            <input
                              type="text"
                              value={item.matchedTrans?.[lang.code] || ''}
                              onChange={(e) => {
                                const updated = [...pdfExtractedItems];
                                updated[idx].matchedTrans = {
                                  ...(item.matchedTrans || {
                                    cn: item.cn, en: '', th: '', vn: '', es: '', pt: '', id_lang: '', ru: '', fr: '', ar: '', ja: ''
                                  }),
                                  [lang.code]: e.target.value
                                };
                                setPdfExtractedItems(updated);
                              }}
                              className="bg-slate-900 border border-slate-800 text-slate-200 rounded px-1 py-0.5 text-[9px] w-full focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            />
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
