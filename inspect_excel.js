import * as XLSX from 'xlsx';
import * as fs from 'fs';

const filePath = 'D:/Document/2026.03 洗唛翻译开发/3.20备份/知识库/服装面辅料知识库.xlsx';

if (!fs.existsSync(filePath)) {
  console.error("File does not exist:", filePath);
  process.exit(1);
}

const XLSX_API = XLSX.default || XLSX;
const workbook = XLSX_API.readFile(filePath);
console.log("Workbook sheets count:", workbook.SheetNames.length);
console.log("Sheet names:", workbook.SheetNames);

workbook.SheetNames.forEach((sheetName) => {
  const sheet = workbook.Sheets[sheetName];
  const range = XLSX_API.utils.decode_range(sheet['!ref'] || 'A1:A1');
  const rowsCount = range.e.r - range.s.r + 1;
  const colsCount = range.e.c - range.s.c + 1;
  console.log(`Sheet "${sheetName}": ${rowsCount} rows, ${colsCount} columns`);
  
  // Print first 5 rows of data
  const data = XLSX_API.utils.sheet_to_json(sheet, { header: 1 }).slice(0, 5);
  console.log("Sample Data:", JSON.stringify(data, null, 2));
  console.log("-----------------------------------------");
});
