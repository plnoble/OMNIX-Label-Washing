import React, { useState, useRef } from 'react';
import type { ParsedWashLabel, TranslationRow } from '../types';
import { DictionaryService } from '../services/dictionaryService';

interface MockupLabelProps {
  parsedLabel: ParsedWashLabel | null;
  translations: Record<string, TranslationRow>;
  enabledLanguages: string[];
}

// 获取符号 SVG 字符串形式（导出/打印用）
const getCareSymbolSvgString = (type: string, value: string, color: string = '#000000'): string => {
  const strokeWidth = 1.5;
  const isNoWash = value.includes('不可水洗');
  const isHandWash = value.includes('手洗');
  const is30 = value.includes('30');
  const is40 = value.includes('40');

  const isNoBleach = value.includes('不可漂白');
  const isOxygen = value.includes('仅限氧漂');

  const isNoDry = value.includes('不可翻转干燥') || value.includes('不可烘干');
  const isHang = value.includes('悬挂');
  const isFlat = value.includes('平摊');
  const isShade = value.includes('阴干');

  const isNoIron = value.includes('不可熨烫');
  const isLow = value.includes('低温') || value.includes('110');
  const isMedium = value.includes('中温') || value.includes('150');

  const isNoClean = value.includes('不可干洗');
  const isNormal = value.includes('常规干洗') || value.includes('干洗');

  let paths = '';

  if (type === 'wash') {
    paths = `<path d="M2 8h20l-2.5 10a2 2 0 0 1-2 2H6.5a2 2 0 0 1-2-2L2 8Z" />
             <path d="M2 11c1.5 0 2-1 4-1s2.5 1 4 1 2.5-1 4-1 2.5 1 4 1 2.5-1 4-1" />`;
    if (isHandWash) {
      paths += `<path d="M12 4v4M10 6l2-2 2 2" stroke-linecap="round" stroke-linejoin="round" />`;
    }
    if ((is30 || is40) && !isNoWash) {
      paths += `<text x="12" y="16" text-anchor="middle" font-size="6.5" font-weight="bold" fill="${color}" stroke="none">${is30 ? '30°' : '40°'}</text>`;
    }
    if (isNoWash) {
      paths += `<path d="M4 6l16 14M20 6L4 20" stroke="red" stroke-width="2" />`;
    }
  } else if (type === 'bleach') {
    paths = `<path d="M12 3L2 21h20L12 3Z" />`;
    if (isOxygen && !isNoBleach) {
      paths += `<path d="M9 20l5-9" /><path d="M12 20l5-9" />`;
    }
    if (isNoBleach) {
      paths += `<path d="M4 6l16 14M20 6L4 20" stroke="red" stroke-width="2" />`;
    }
  } else if (type === 'dry') {
    paths = `<rect x="3" y="3" width="18" height="18" rx="1" />`;
    if (isNoDry) {
      paths += `<circle cx="12" cy="12" r="5" /><path d="M4 4l16 16M20 4L4 20" stroke="red" stroke-width="2" />`;
    } else {
      if (isHang) {
        paths += `<path d="M3 7c4.5-2 13.5-2 18 0" stroke-linecap="round" />`;
      }
      if (isFlat) {
        paths += `<path d="M6 12h12" stroke-linecap="round" />`;
      }
      if (isShade) {
        paths += `<path d="M4 8l4-4" /><path d="M4 12l8-8" />`;
      }
    }
  } else if (type === 'iron') {
    paths = `<path d="M3 16h18c-1-3.5-3-5.5-7-5.5v-1a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1c-1 0-2.5 1-3 5.5Z" /><path d="M4 18h16" />`;
    if (isLow && !isNoIron) {
      paths += `<circle cx="12" cy="13.5" r="0.75" fill="${color}" stroke="none" />`;
    }
    if (isMedium && !isNoIron) {
      paths += `<circle cx="10" cy="13.5" r="0.75" fill="${color}" stroke="none" /><circle cx="14" cy="13.5" r="0.75" fill="${color}" stroke="none" />`;
    }
    if (isNoIron) {
      paths += `<path d="M4 6l16 14M20 6L4 20" stroke="red" stroke-width="2" />`;
    }
  } else if (type === 'clean') {
    paths = `<circle cx="12" cy="12" r="9" />`;
    if (isNormal && !isNoClean) {
      paths += `<text x="12" y="15.5" text-anchor="middle" font-size="10" font-weight="bold" fill="${color}" stroke="none">P</text>`;
    }
    if (isNoClean) {
      paths += `<path d="M4 6l16 14M20 6L4 20" stroke="red" stroke-width="2" />`;
    }
  }

  return `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" style="width: 22px; height: 22px; display: inline-block;">${paths}</svg>`;
};

// HTML entity escape helper to prevent DOM XSS in generated exports
const escapeHtml = (text: string): string => {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

export const MockupLabel: React.FC<MockupLabelProps> = ({ parsedLabel, translations, enabledLanguages }) => {
  const [labelTheme, setLabelTheme] = useState<'white' | 'black'>('white');
  const [layoutTemplate, setLayoutTemplate] = useState<'hla-double' | 'standard'>('hla-double');
  const [activePreviewLang, setActivePreviewLang] = useState<string>('en');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Compute active preview language safely during render
  const previewLang = enabledLanguages.includes(activePreviewLang)
    ? activePreviewLang
    : (enabledLanguages[0] || 'en');

  const translateTerm = (term: string, lang: string): string => {
    const matched = translations[term] || DictionaryService.lookup(term);
    return matched ? (matched[lang] || term) : term;
  };

  const getFibersList = (lang: string) => {
    if (!parsedLabel) return [];
    return parsedLabel.materials.map(part => {
      const partTrans = part.part ? translateTerm(part.part, lang) : '';
      const fiberStrings = part.fibers.map(f => {
        const transName = translateTerm(f.name, lang);
        if (['cn', 'ja', 'zh'].includes(lang)) {
          return `${f.percentage}%${transName}`;
        }
        return `${f.percentage}% ${transName}`;
      });
      const fibersJoined = fiberStrings.join(lang === 'cn' ? ' ' : ', ');
      if (partTrans) {
        const sep = ['cn', 'ja', 'zh'].includes(lang) ? '：' : ': ';
        return `${partTrans}${sep}${fibersJoined}`;
      }
      return fibersJoined;
    });
  };

  // HLA Double-Ribbon Spacers & Formats
  const getFibersHlaString = (lang: string): string => {
    if (!parsedLabel) return '';
    return parsedLabel.materials.map(part => {
      const partTrans = part.part ? translateTerm(part.part, lang) : '';
      const fiberStrings = part.fibers.map(f => {
        const transName = translateTerm(f.name, lang);
        return `${f.percentage}%${transName}`;
      });
      const fibersJoined = fiberStrings.join('/');
      if (partTrans) {
        return `${partTrans}: ${fibersJoined}`;
      }
      return fibersJoined;
    }).join(' / ');
  };

  const getWashInstructionsHlaString = (lang: string): string => {
    if (!parsedLabel) return '';
    return parsedLabel.washInstructions.map(inst => {
      let trans = translateTerm(inst, lang);
      if (!trans.endsWith('/')) {
        trans += './';
      }
      return trans;
    }).join(' ');
  };

  // Split-language helper for HLA (Thai & Russian)
  const getWashInstructionsHlaSplit = (lang: 'th' | 'ru', part: 1 | 2): string => {
    if (!parsedLabel) return '';
    const sliceIdx = 2; // Split after the 2nd instruction
    const sliceArr = part === 1 
      ? parsedLabel.washInstructions.slice(0, sliceIdx)
      : parsedLabel.washInstructions.slice(sliceIdx);

    const washString = sliceArr.map(inst => {
      let trans = translateTerm(inst, lang);
      if (!trans.endsWith('/')) {
        trans += './';
      }
      return trans;
    }).join(' ');

    if (part === 2) {
      return washString + ' ' + getHlaNotes(lang);
    }
    return washString;
  };

  const getHlaNotes = (lang: string): string => {
    const notes: Record<string, string> = {
      vn: 'LƯU Ý: SẢN PHẨM GIẶT',
      es: 'NOTA: PRODUCTOS DE LAVADO',
      pt: 'NOTA: PRODUTOS DE LAVAGEM',
      id_lang: 'CATATAN: MENCUCI PRODUK',
      ru: 'ПРИМЕЧАНИЕ: СРЕДСТВА ДЛЯ СТИРКИ',
      fr: 'REMARQUE : PRODUITS DE LAVAGE',
      ar: 'ملحوظة: منتجات الغسيل',
      en: 'NOTE: WASHING PRODUCTS',
      th: 'หมายเหตุ: ผลิตภัณฑ์ซักผ้า'
    };
    return notes[lang] || 'NOTE: WASHING PRODUCTS';
  };

  // 从洗标用语中筛选出符合洗保类型的关键词，用于渲染符号
  const getSymbolValue = (type: 'wash' | 'bleach' | 'dry' | 'iron' | 'clean'): string => {
    if (!parsedLabel) return '';
    const matched = parsedLabel.washInstructions.find(inst => {
      if (type === 'wash') return inst.includes('水洗') || inst.includes('洗涤') || inst.includes('手洗');
      if (type === 'bleach') return inst.includes('漂');
      if (type === 'dry') return inst.includes('干') || inst.includes('晾') || inst.includes('烘') || inst.includes('翻转');
      if (type === 'iron') return inst.includes('熨');
      if (type === 'clean') return inst.includes('干洗') || inst.includes('专业湿洗');
      return false;
    });
    return matched || '';
  };

  const generateLabelHtmlString = (): string => {
    if (!parsedLabel) return '';

    const isDark = labelTheme === 'black';
    const textCol = isDark ? '#f8fafc' : '#0f172a';
    const bgCol = isDark ? '#020617' : '#fafaf9';
    const borderCol = isDark ? '#475569' : '#cbd5e1';

    const sWash = getSymbolValue('wash');
    const sBleach = getSymbolValue('bleach');
    const sDry = getSymbolValue('dry');
    const sIron = getSymbolValue('iron');
    const sClean = getSymbolValue('clean');

    const symbWash = getCareSymbolSvgString('wash', sWash, textCol);
    const symbBleach = getCareSymbolSvgString('bleach', sBleach, textCol);
    const symbDry = getCareSymbolSvgString('dry', sDry, textCol);
    const symbIron = getCareSymbolSvgString('iron', sIron, textCol);
    const symbClean = getCareSymbolSvgString('clean', sClean, textCol);

    const styleVal = escapeHtml(parsedLabel.styleNo || 'HKCED6F085A/85F');
    const sizeVal = escapeHtml(parsedLabel.size || '');

    const getOriginHlaString = (): string => {
      const originText = parsedLabel.origin || '中国制造';
      const translate = (lang: string) => escapeHtml(translateTerm(originText, lang) || originText);
      
      return `
        ${translate('en')} / ${translate('th')}<br>
        ${translate('vn')} / ${translate('es')}<br>
        ${translate('pt')} / ${translate('id_lang')}<br>
        ${translate('ru')} / ${translate('fr')}<br>
        ${translate('ar')}
      `.toUpperCase();
    };

    const renderLangBlock = (lang: string, showComp = true, showWash = true) => {
      if (!enabledLanguages.includes(lang)) return '';
      
      const categoryText = parsedLabel.category ? escapeHtml(translateTerm(parsedLabel.category, lang)) : '';
      const compText = escapeHtml(getFibersHlaString(lang));
      const washText = escapeHtml(getWashInstructionsHlaString(lang));
      const isAr = lang === 'ar';

      return `
        <div class="lang-block" style="direction: ${isAr ? 'rtl' : 'ltr'}; text-align: ${isAr ? 'right' : 'left'};">
          ${categoryText ? `<div class="lang-title">${categoryText}</div>` : ''}
          ${showComp && compText ? `<div class="lang-comp">${compText}</div>` : ''}
          ${showWash && washText ? `<div class="lang-wash">${washText} ${escapeHtml(getHlaNotes(lang))}</div>` : ''}
        </div>
      `;
    };

    const renderSplitLangBlock = (lang: 'th' | 'ru', part: 1 | 2, showComp = true, showWash = true) => {
      if (!enabledLanguages.includes(lang)) return '';
      const categoryText = parsedLabel.category ? escapeHtml(translateTerm(parsedLabel.category, lang)) : '';
      const compText = escapeHtml(getFibersHlaString(lang));
      const washText = escapeHtml(getWashInstructionsHlaSplit(lang, part));

      return `
        <div class="lang-block" style="text-align: left;">
          ${showComp && categoryText ? `<div class="lang-title">${categoryText}</div>` : ''}
          ${showComp && compText ? `<div class="lang-comp">${compText}</div>` : ''}
          ${showWash && washText ? `<div class="lang-wash">${washText}</div>` : ''}
        </div>
      `;
    };

    const cutLineHtml = `
      <div class="cut-line" style="display: flex; align-items: center; width: 100%; gap: 6px; color: ${textCol}; opacity: 0.8; margin-top: 1mm; margin-bottom: 2mm;">
        <span style="font-size: 8pt; font-weight: bold;">✂</span>
        <div style="flex-grow: 1; border-top: 1.5px dashed ${textCol};"></div>
      </div>
    `;

    const foldLineHtml = `
      <div class="fold-line" style="width: 100%; border-top: 1.5px dashed #10b981; margin: 4mm 0 3mm 0; opacity: 0.7;"></div>
    `;

    const sensorMarkHtml = `
      <div class="sensor-mark" style="width: 10mm; height: 2.2mm; background: #000000; margin: 1mm auto 2mm auto; border-radius: 0.1mm;"></div>
    `;

    const doubleRibbonLayout = `
      <div class="container">
        <div class="ribbon">
          <div class="rotated-section">
            ${renderSplitLangBlock('ru', 2, false, true)}
            ${renderLangBlock('fr')}
            ${renderLangBlock('ar')}
          </div>
          ${foldLineHtml}
          <div class="upright-section">
            ${sensorMarkHtml}
            ${cutLineHtml}
            <div class="style-section">
              <div class="style-text">STYLE: ${styleVal} ${sizeVal}</div>
            </div>
            <div class="symbols-row">
              ${symbWash}
              ${symbBleach}
              ${symbDry}
              ${symbIron}
              ${symbClean}
            </div>
            <div class="origin-block">
              ${getOriginHlaString()}
            </div>
            ${renderLangBlock('en')}
            ${renderSplitLangBlock('th', 1, true, true)}
          </div>
        </div>
        <div class="ribbon">
          <div class="rotated-section">
            ${renderSplitLangBlock('th', 2, false, true)}
            ${renderLangBlock('vn')}
            ${renderLangBlock('es')}
          </div>
          ${foldLineHtml}
          <div class="upright-section">
            ${renderLangBlock('pt')}
            ${renderLangBlock('id_lang')}
            ${renderSplitLangBlock('ru', 1, true, true)}
          </div>
        </div>
      </div>
    `;

    const renderStandardLayout = () => {
      const categoryText = parsedLabel.category ? escapeHtml(translateTerm(parsedLabel.category, previewLang)) : 'BRAND COLLECTION';
      const styleNoVal = parsedLabel.styleNo ? escapeHtml(parsedLabel.styleNo) : '';
      const sizeVal = parsedLabel.size ? escapeHtml(parsedLabel.size) : '';
      const fibersHtml = getFibersList(previewLang).map(fiber => `
        <div class="fiber-item uppercase" style="border-bottom: 0.5px solid ${borderCol}35; padding-bottom: 1.5mm; line-height: 1.3;">
          ${escapeHtml(fiber)}
        </div>
      `).join('');
      const instructionsHtml = parsedLabel.washInstructions.map(inst => {
        const trans = escapeHtml(translateTerm(inst, previewLang));
        const orig = escapeHtml(inst);
        return `
          <div class="instruction-item uppercase" style="border-left: 2px solid #6366f1; padding-left: 2mm; margin-bottom: 2mm; text-align: left; line-height: 1.3;">
            <div style="font-size: 4.8pt; opacity: 0.45; font-family: monospace;">${orig}</div>
            <div style="font-size: 5.5pt; font-weight: 500; letter-spacing: 0.2px;">${trans}</div>
          </div>
        `;
      }).join('');
      const originHtml = parsedLabel.origin ? `<div class="origin-val">${escapeHtml(translateTerm(parsedLabel.origin, previewLang))}</div>` : '';
      const safetyHtml = parsedLabel.safetyClass ? `<div class="safety-val" style="font-size: 4.8pt; opacity: 0.6; margin-top: 0.5mm;">${escapeHtml(translateTerm('安全类别', previewLang))}: ${escapeHtml(translateTerm(parsedLabel.safetyClass, previewLang))}</div>` : '';

      return `
        <div class="ribbon-standard" style="width: 72mm; min-height: 120mm; background: ${bgCol}; color: ${textCol}; border: 1px dashed ${borderCol}; box-sizing: border-box; padding: 5mm 4mm; display: flex; flex-direction: column; align-items: center; position: relative; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3); border-radius: 4px;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 1mm; border-top: 1.5px dashed ${borderCol}50;"></div>
          <div style="width: 100%; display: flex; flex-direction: column; align-items: center; flex-grow: 1;">
            <div style="font-size: 5.8pt; letter-spacing: 0.2em; font-weight: bold; opacity: 0.5; margin-bottom: 4mm; text-transform: uppercase;">
              -- ${categoryText} --
            </div>
            ${(styleNoVal || sizeVal) ? `
              <div style="width: 100%; font-size: 5.5pt; font-family: monospace; border-bottom: 0.5px solid ${textCol}35; padding-bottom: 1.5mm; margin-bottom: 3.5mm; opacity: 0.85; text-align: center;">
                ${styleNoVal ? `<div>STYLE NO: ${styleNoVal}</div>` : ''}
                ${sizeVal ? `<div style="font-weight: bold; margin-top: 0.5mm;">SIZE: ${sizeVal}</div>` : ''}
              </div>
            ` : ''}
            <div style="width: 100%; display: flex; flex-direction: column; gap: 1.5mm; text-align: left; margin-bottom: 5mm; font-size: 5.5pt;">
              ${fibersHtml}
            </div>
            <div class="symbols-row" style="width: 100%; margin-bottom: 5mm; border: none; padding: 0; display: flex; justify-content: space-between; align-items: center;">
              ${symbWash}
              ${symbBleach}
              ${symbDry}
              ${symbIron}
              ${symbClean}
            </div>
            <div style="width: 100%; text-align: left; margin-bottom: 5mm;">
              ${instructionsHtml}
            </div>
            <div style="margin-top: auto; border-top: 0.5px dashed ${borderCol}50; width: 100%; padding-top: 3mm; font-size: 5.5pt; text-align: center; font-weight: 600; text-transform: uppercase;">
              ${originHtml}
              ${safetyHtml}
            </div>
          </div>
          <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 1mm; border-bottom: 1.5px dashed ${borderCol}50;"></div>
        </div>
      `;
    };

    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>OmniX Wash Label Layout</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Noto+Sans+Thai&family=Noto+Sans+Arabic&display=swap');
    body { margin: 0; padding: 20px; font-family: 'Noto Sans', 'Noto Sans Thai', 'Noto Sans Arabic', system-ui, sans-serif; background: transparent; display: flex; justify-content: center; align-items: center; min-height: calc(100vh - 40px); color: #334155; }
    .container { display: flex; gap: 30px; padding: 10px; border-radius: 12px; }
    .ribbon { width: 40mm; height: 170mm; background: ${bgCol}; color: ${textCol}; border: 1px dashed ${borderCol}; box-sizing: border-box; padding: 3mm 2mm; display: flex; flex-direction: column; align-items: center; position: relative; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3); border-radius: 4px; }
    .ribbon::before { content: ""; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-image: linear-gradient(rgba(0,0,0,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.01) 1px, transparent 1px); background-size: 4px 4px; pointer-events: none; }
    .rotated-section { width: 100%; display: flex; flex-direction: column; transform: rotate(180deg); transform-origin: center; }
    .upright-section { width: 100%; display: flex; flex-direction: column; align-items: center; }
    .lang-block { width: 100%; margin-bottom: 2mm; line-height: 1.15; }
    .lang-title { font-size: 6.2pt; font-weight: 700; text-transform: uppercase; margin-bottom: 0.4mm; }
    .lang-comp { font-size: 5.2pt; text-transform: uppercase; font-weight: 500; margin-bottom: 0.4mm; word-break: break-all; }
    .lang-wash { font-size: 4.8pt; opacity: 0.85; text-transform: uppercase; word-break: break-word; }
    .style-section { width: 100%; padding-top: 0.5mm; margin-bottom: 2.5mm; text-align: center; }
    .style-text { font-size: 6pt; font-weight: 700; letter-spacing: 0.5px; }
    .symbols-row { width: 100%; border-top: 0.5px solid ${textCol}35; border-bottom: 0.5px solid ${textCol}35; padding: 1.2mm 0; margin-bottom: 2.5mm; display: flex; justify-content: space-around; align-items: center; }
    .origin-block { width: 100%; font-size: 4.2pt; line-height: 1.2; text-align: center; text-transform: uppercase; margin-bottom: 3.5mm; opacity: 0.9; }
    @media print {
      body { background: none; padding: 0; min-height: auto; }
      .container { box-shadow: none; padding: 0; background: none; gap: 0; }
      .ribbon { border: none; box-shadow: none; page-break-inside: avoid; }
      .ribbon-standard { border: none; box-shadow: none; page-break-inside: avoid; }
      @page { size: ${layoutTemplate === 'hla-double' ? '80mm 170mm' : '80mm 130mm'}; margin: 0; }
    }
  </style>
</head>
<body>
  ${layoutTemplate === 'hla-double' ? doubleRibbonLayout : renderStandardLayout()}
</body>
</html>`;
  };

  const htmlContent = generateLabelHtmlString();

  // Print triggered directly through iframe context to prevent browser blockers
  const handlePrint = () => {
    if (!parsedLabel) return;
    if (iframeRef.current) {
      const contentWindow = iframeRef.current.contentWindow;
      if (contentWindow) {
        contentWindow.focus();
        contentWindow.print();
      }
    }
  };

  // Download Standalone HTML Layout
  const handleDownload = () => {
    if (!parsedLabel) return;
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `WashLabel_${parsedLabel.styleNo || 'HLA'}_Layout.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const isDark = labelTheme === 'black';

  return (
    <div className="flex flex-col items-center w-full">
      {/* Visual Controller */}
      <div className="flex flex-col md:flex-row md:items-center justify-between w-full mb-4 px-2 gap-3">
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-slate-200">印唛排版实物预览 (所见即所得)</h3>
          <span className="text-[10px] text-slate-500">折页洗唛模版以 HLA 40x170mm 双面原件为基准</span>
        </div>
        
        <div className="flex flex-wrap items-center gap-2">
          {/* Template Select */}
          <select
            value={layoutTemplate}
            onChange={(e) => setLayoutTemplate(e.target.value as 'hla-double' | 'standard')}
            className="text-xs bg-slate-900 border border-slate-800 text-slate-300 rounded px-2.5 py-1 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="hla-double">HLA 1:1 双排折页排版</option>
            <option value="standard">单语言标签预览</option>
          </select>

          {/* Preview Language Select in standard mode */}
          {layoutTemplate === 'standard' && (
            <select
              value={activePreviewLang}
              onChange={(e) => setActivePreviewLang(e.target.value)}
              className="text-xs bg-slate-900 border border-slate-800 text-slate-300 rounded px-2.5 py-1 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
            >
              {enabledLanguages.map(lang => (
                <option key={lang} value={lang}>
                  {lang === 'en' ? '英语 (EN)' : 
                   lang === 'th' ? '泰语 (TH)' : 
                   lang === 'vn' ? '越南语 (VN)' : 
                   lang === 'es' ? '西班牙语 (ES)' : 
                   lang === 'pt' ? '葡萄牙语 (PT)' : 
                   lang === 'id_lang' ? '印尼语 (ID)' : 
                   lang === 'ru' ? '俄语 (RU)' : 
                   lang === 'fr' ? '法语 (FR)' : 
                   lang === 'ar' ? '阿拉伯语 (AR)' : 
                   lang === 'ja' ? '日语 (JA)' : lang.toUpperCase()}
                </option>
              ))}
            </select>
          )}

          {/* Background Theme toggle */}
          <div className="flex items-center gap-1 border border-slate-800 bg-slate-950 px-2 py-0.5 rounded">
            <button
              onClick={() => setLabelTheme('white')}
              className={`w-3.5 h-3.5 rounded-full ${labelTheme === 'white' ? 'ring-2 ring-indigo-500 scale-105' : ''} bg-white cursor-pointer`}
              title="织带底色：白缎"
            />
            <button
              onClick={() => setLabelTheme('black')}
              className={`w-3.5 h-3.5 rounded-full ${labelTheme === 'black' ? 'ring-2 ring-indigo-500 scale-105' : ''} bg-slate-950 border border-slate-700 cursor-pointer`}
              title="织带底色：黑缎"
            />
          </div>
        </div>
      </div>

      {/* Main Preview Pane */}
      {parsedLabel ? (
        <div className="w-full flex flex-col items-center gap-4">
          {/* Preview canvas rendered in isolated sandbox iframe */}
          <div className="flex items-start justify-center p-6 bg-slate-900/50 border border-slate-800 rounded-xl w-full overflow-x-auto min-h-[400px]">
            <iframe
              ref={iframeRef}
              srcDoc={htmlContent}
              title="Wash Label Preview"
              className="w-full border-0 transition-all duration-300 rounded shadow-xl"
              style={{
                height: layoutTemplate === 'hla-double' ? '670px' : '520px',
                maxWidth: layoutTemplate === 'hla-double' ? '360px' : '300px',
                background: isDark ? '#020617' : '#fafaf9'
              }}
            />
          </div>

          {/* Action buttons bar */}
          <div className="flex gap-3 justify-center w-full mt-2">
            <button
              onClick={handlePrint}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 shadow shadow-indigo-600/25 cursor-pointer"
            >
              🖨️ 打印洗标 (1:1尺寸)
            </button>
            <button
              onClick={handleDownload}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              💾 下载排版 (HTML)
            </button>
          </div>
          
          {layoutTemplate === 'hla-double' && (
            <div className="text-[10px] text-slate-500 text-center leading-relaxed max-w-sm">
              提示：双面排版中，上半部内容物理上以 180° 旋转印刷（对折折页工艺）。虚线代表对折线，黑色色块为裁切光标，可根据左侧勾选语言动态渲染。
            </div>
          )}

        </div>
      ) : (
        /* Empty State */
        <div
          className={`relative w-full min-h-[480px] p-6 shadow-2xl transition-all duration-300 rounded border flex flex-col items-center justify-center text-center ${
            isDark 
              ? 'bg-slate-950 text-slate-200 border-slate-800' 
              : 'bg-stone-50 text-stone-900 border-stone-200'
          }`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="w-16 h-16 mb-4 text-slate-400 opacity-40">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
            <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
          </svg>
          <p className="text-xs text-slate-400 opacity-70">暂无解析数据</p>
          <p className="text-[10px] mt-1 text-slate-500 max-w-[200px]">请输入中文文本或导入文件，印唛效果将在此渲染</p>
        </div>
      )}
    </div>
  );
};
