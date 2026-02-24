import os
import re

app_dir = os.path.join(os.path.dirname(__file__), 'app')

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Replace btn-primary with btn-cta for booking/call actions
    content = re.sub(r'className="([^"]*)btn-primary([^"]*)"', r'className="\1btn-cta border-none\2"', content)
    # Replace white buttons that have blue text and are "cta" style
    content = re.sub(r'className="([^"]*)btn bg-white text-\[#2463eb\]([^"]*hover:bg-slate-50[^"]*)"', r'className="\1btn btn-cta border-none\2"', content)

    # Replace blue prices to green
    content = re.sub(r'text-\[#2463eb\]([^>]*>\$[0-9]+)', r'text-green-600\1', content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated: {filepath}")

for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            process_file(os.path.join(root, file))

print("Done.")
