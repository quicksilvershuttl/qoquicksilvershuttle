import os
import re

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Replace amber with blue/white logic
    content = re.sub(r'text-amber-[1-9]00', 'text-[#2463eb]', content)
    content = re.sub(r'bg-amber-[1-9]00', 'bg-[#2463eb]', content)
    content = re.sub(r'bg-amber-[1-9]00/[0-9]+', 'bg-[#2463eb]/20', content)
    content = re.sub(r'border-amber-[1-9]00/[0-9]+', 'border-[#2463eb]', content)
    content = re.sub(r'border-amber-[1-9]00', 'border-[#2463eb]', content)
    content = re.sub(r'shadow-amber-[1-9]00/[0-9]+', 'shadow-[#2463eb]/30', content)
    content = re.sub(r'shadow-amber-[1-9]00', 'shadow-[#2463eb]/30', content)
    
    # Replace slate
    # Light backgrounds -> white
    content = re.sub(r'bg-slate-[50]', 'bg-white', content)
    content = re.sub(r'bg-slate-100', 'bg-white', content)
    content = re.sub(r'bg-slate-200', 'bg-white', content)
    
    # Dark backgrounds -> blue
    content = re.sub(r'bg-slate-[89]00', 'bg-[#2463eb]', content)
    content = re.sub(r'bg-slate-950', 'bg-[#2463eb]', content)
    
    # Text colors
    content = re.sub(r'text-slate-[1234]00', 'text-white', content)
    content = re.sub(r'text-slate-[56789]00', 'text-[#2463eb]', content)
    content = re.sub(r'text-slate-950', 'text-[#2463eb]', content)

    # Borders
    content = re.sub(r'border-slate-[12]00', 'border-[#2463eb]/20', content)
    content = re.sub(r'border-slate-[789]00', 'border-white/20', content)
    content = re.sub(r'border-slate-950', 'border-white/20', content)

    # Gradients
    content = re.sub(r'from-amber-[0-9]+ via-amber-[0-9]+ to-amber-[0-9]+', 'from-[#2463eb] to-[#1d4ed8]', content)

    if content != original:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Updated {file_path}')

def process_directory(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                process_file(os.path.join(root, file))

if __name__ == '__main__':
    process_directory(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'app'))
    print('Python processing complete.')
