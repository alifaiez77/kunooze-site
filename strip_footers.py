import os
import re
import glob

html_files = glob.glob('*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Strip <footer class="footer"> ... </footer>
    if '<footer class="footer">' in content:
        # regex to remove footer block (non-greedy)
        new_content = re.sub(r'<footer class="footer">.*?</footer>\n*', '', content, flags=re.DOTALL)
        
        # Inject script before </body>
        if 'js/footer.js' not in new_content:
            new_content = new_content.replace('</body>', '<script src="js/footer.js"></script>\n</body>')
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Stripped footer and injected script in {file}")

print("Done stripping footers.")
