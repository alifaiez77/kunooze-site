import glob
import re
import json

html_files = glob.glob('*.html')
js_file = 'js/translations.js'

html_keys = set()
for f in html_files:
    with open(f, 'r', encoding='utf-8') as h_file:
        content = h_file.read()
        matches = re.findall(r'data-t="([^"]+)"', content)
        html_keys.update(matches)

with open(js_file, 'r', encoding='utf-8') as j_file:
    js_content = j_file.read()

en_block = re.search(r'en\s*:\s*\{([^}]+)\}', js_content)
ar_block = re.search(r'ar\s*:\s*\{([^}]+)\}', js_content)

missing_en = set()
missing_ar = set()

if en_block:
    en_keys = set(re.findall(r'([a-zA-Z0-9_]+)\s*:', en_block.group(1)))
    missing_en = html_keys - en_keys

if ar_block:
    ar_keys = set(re.findall(r'([a-zA-Z0-9_]+)\s*:', ar_block.group(1)))
    missing_ar = html_keys - ar_keys

with open('missing_translations.txt', 'w', encoding='utf-8') as f:
    f.write("Missing in EN:\n")
    for k in sorted(missing_en):
        f.write(f"- {k}\n")
    f.write("\nMissing in AR:\n")
    for k in sorted(missing_ar):
        f.write(f"- {k}\n")
