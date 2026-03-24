const fs = require('fs');
const path = require('path');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let allStyles = '';
let report = [];

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const styleRegex = /<style>([\s\S]*?)<\/style>/gi;
  let match;
  let fileStyles = '';
  
  while ((match = styleRegex.exec(content)) !== null) {
    fileStyles += match[1].trim() + '\n\n';
  }
  
  if (fileStyles) {
    allStyles += `/* --- FROM ${file} --- */\n${fileStyles}`;
    report.push(file);
    // Remove the style block and any surrounding blank lines
    let newContent = content.replace(/<style>[\s\S]*?<\/style>\s*/gi, '');
    fs.writeFileSync(filePath, newContent, 'utf8');
  }
});

fs.writeFileSync('styles/extracted_styles.css', allStyles, 'utf8');
console.log(`Extracted styles from ${report.length} files: ${report.join(', ')}`);
