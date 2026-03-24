const fs = require('fs');
const mainPath = 'styles/main.css';
const extractPath = 'styles/extracted_styles.css';

let mainContent = fs.readFileSync(mainPath, 'utf8');
const separator = '/* ===================================================================\n   EXTRACTED INLINE STYLES MIGRATED (PHASE 1 AUDIT)\n   =================================================================== */';

// truncate mainContent to the separator
const sepIndex = mainContent.indexOf(separator);
if (sepIndex !== -1) {
  mainContent = mainContent.substring(0, sepIndex + separator.length) + '\n';
  const cleanStyles = fs.readFileSync(extractPath, 'utf8');
  mainContent += cleanStyles;
  fs.writeFileSync(mainPath, mainContent, 'utf8');
  console.log('Successfully truncated and appended clean styles.');
} else {
  console.log('Separator not found in main.css!');
}
