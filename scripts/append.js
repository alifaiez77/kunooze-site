const fs = require('fs');
const newStyles = fs.readFileSync('styles/extracted_styles.css', 'utf8');
fs.appendFileSync('styles/main.css', '\n\n/* ===================================================================\n   EXTRACTED INLINE STYLES MIGRATED (PHASE 1 AUDIT)\n   =================================================================== */\n' + newStyles, 'utf8');
console.log('Appended successfully');
