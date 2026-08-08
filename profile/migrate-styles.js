const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = [
  { regex: /text-\[var\(--accent\)\]/g, replacement: 'text-primary' },
  { regex: /bg-\[var\(--accent\)\]/g, replacement: 'bg-primary' },
  { regex: /border-\[var\(--accent\)\]/g, replacement: 'border-primary' },
  { regex: /shadow-\[var\(--shadow-glow\)\]/g, replacement: 'shadow-primary/20' },
  { regex: /text-emerald-500/g, replacement: 'text-primary' },
  { regex: /bg-emerald-500\/10/g, replacement: 'bg-primary/10' },
  { regex: /border-emerald-500\/20/g, replacement: 'border-primary/20' },
  { regex: /glass-card/g, replacement: 'bg-card border border-border rounded-2xl shadow-sm' },
  { regex: /text-gray-900 dark:text-gray-100/g, replacement: 'text-foreground' },
  { regex: /text-gray-800 dark:text-gray-100/g, replacement: 'text-foreground' },
  { regex: /text-gray-800 dark:text-white/g, replacement: 'text-foreground' },
  { regex: /text-gray-600 dark:text-gray-400/g, replacement: 'text-muted-foreground' },
  { regex: /text-gray-700 dark:text-gray-300/g, replacement: 'text-muted-foreground' },
  { regex: /text-gray-500 dark:text-gray-400/g, replacement: 'text-muted-foreground' },
  { regex: /text-gray-500/g, replacement: 'text-muted-foreground' },
  { regex: /bg-gray-100 dark:bg-gray-800/g, replacement: 'bg-secondary' },
  { regex: /bg-gray-100 dark:bg-\[#1a1a1a\]/g, replacement: 'bg-secondary' },
  { regex: /bg-gray-50 dark:bg-\[#111\]/g, replacement: 'bg-secondary' },
  { regex: /bg-gray-200 dark:bg-gray-700/g, replacement: 'bg-secondary' },
  { regex: /bg-white dark:bg-\[#151515\]/g, replacement: 'bg-card' },
  { regex: /border-gray-200 dark:border-gray-800/g, replacement: 'border-border' },
  { regex: /border-gray-200 dark:border-gray-700/g, replacement: 'border-border' },
  { regex: /border-gray-300 dark:border-gray-700/g, replacement: 'border-border' },
  { regex: /btn-primary/g, replacement: 'px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 transition-all' }
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      for (const { regex, replacement } of replacements) {
        content = content.replace(regex, replacement);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(srcDir);
console.log('Migration script complete.');
