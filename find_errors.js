import * as XLSX from 'xlsx';
import * as fs from 'fs';

const filePath = 'D:/Document/2026.03 洗唛翻译开发/3.20备份/知识库/服装面辅料知识库.xlsx';
const XLSX_API = XLSX.default || XLSX;
const workbook = XLSX_API.readFile(filePath);

workbook.SheetNames.forEach((sheetName) => {
  const sheet = workbook.Sheets[sheetName];
  const rows = XLSX_API.utils.sheet_to_json(sheet, { header: 1 });
  
  rows.forEach((row, idx) => {
    if (row && row.some(cell => String(cell).includes("复合"))) {
      console.log(`[${sheetName}] Row ${idx + 1}:`, JSON.stringify(row));
    }
  });
});
