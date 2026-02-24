const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all tsx files with pattern.png reference
const appDir = path.join(__dirname, 'app');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        const dirPath = path.join(dir, f);
        const isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walkDir(dirPath, callback);
        } else {
            callback(path.join(dir, f));
        }
    });
}

let count = 0;
walkDir(appDir, (filePath) => {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes("pattern.png")) {
        const updated = content.replaceAll("pattern.png", "pattern.svg");
        fs.writeFileSync(filePath, updated, 'utf8');
        count++;
        console.log(`Updated: ${filePath}`);
    }
});

console.log(`\nDone! Updated ${count} files.`);
