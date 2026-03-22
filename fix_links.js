const fs = require('fs');
const path = require('path');

function getFiles(dir, ext) {
    let results = [];
    const list = fs.readdirSync(dir);
    for (const file of list) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file === 'js' || dir === '.') {
                 if(file === 'node_modules' || file === '.git' || file === '.gemini') continue;
                 results = results.concat(getFiles(fullPath, ext));
            }
        } else {
            if (fullPath.endsWith(ext) && file !== 'fix_links.js' && file !== 'translations.js') {
                results.push(fullPath);
            }
        }
    }
    return results;
}

const htmlFiles = getFiles('.', '.html');
const jsFiles = getFiles('.', '.js');
const allFiles = [...htmlFiles, ...jsFiles];

let updatedFiles = 0;

allFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content.replace(/href="#"/g, 'href="javascript:void(0)"')
                            .replace(/href='#'/g, "href='javascript:void(0)'")
                            .replace(/href=""/g, 'href="javascript:void(0)"');
    
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log(`Updated ${file}`);
        updatedFiles++;
    }
});

console.log(`Successfully fixed dead links in ${updatedFiles} files.`);
