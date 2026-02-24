const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Replace amber (which was the accent) to white or blue depending on context
    // Usually amber text on dark becomes white, on light becomes blue. We'll map mostly to #2463eb except when it's an overlay or shadow.
    content = content.replace(/text-amber-[1-9]00/g, 'text-[#2463eb]');
    content = content.replace(/bg-amber-[1-9]00/g, 'bg-[#2463eb]');
    content = content.replace(/bg-amber-[1-9]00\/[0-9]+/g, 'bg-[#2463eb]/20');
    content = content.replace(/border-amber-[1-9]00\/?[0-9]*/g, 'border-[#2463eb]');
    content = content.replace(/shadow-amber-[1-9]00\/?[0-9]*/g, 'shadow-[#2463eb]/30');
    content = content.replace(/from-amber-[0-9]+ via-amber-[0-9]+ to-amber-[0-9]+/g, 'from-[#2463eb] via-[#1d4ed8] to-[#2463eb]');

    // Replace slate
    // Light slates (backgrounds) become white
    content = content.replace(/bg-slate-[50|100|200]/g, 'bg-white');
    // Dark slates (backgrounds) become blue
    content = content.replace(/bg-slate-[800|900|950]/g, 'bg-[#2463eb]');

    // Light slates (text) become white
    content = content.replace(/text-slate-[234]00/g, 'text-white');
    // Dark slates (text) become blue
    content = content.replace(/text-slate-[56789]00/g, 'text-[#2463eb]');
    content = content.replace(/text-slate-950/g, 'text-[#2463eb]');

    content = content.replace(/border-slate-[12]00/g, 'border-[#2463eb]/20');
    content = content.replace(/border-slate-[789]00/g, 'border-white/20');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    }
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            processFile(fullPath);
        }
    }
}

processDirectory(path.join(__dirname, 'app'));
console.log('Color replacements complete.');
