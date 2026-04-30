const fs = require('fs');

// Fix globals.css
let css = fs.readFileSync('src/app/globals.css', 'utf8');
const imports = [];
// extract all imports
css = css.replace(/@import\s+url\([^)]+\);/g, (match) => {
  imports.push(match);
  return '';
});
// ensure they are at the top, just below tailwindcss
const finalCss = imports.join('\n') + '\n' + css;
// Wait, tailwind import is early in the file, let's just make it the absolute top
fs.writeFileSync('src/app/globals.css', finalCss);

// Fix page.tsx
let tsx = fs.readFileSync('src/app/page.tsx', 'utf8');
tsx = tsx.replace(/-pocColor:/g, "'--poc-color':");
tsx = tsx.replace(/-pocGlow:/g, "'--poc-glow':");
// Wait, React technically requires casting or a special handling for custom props in inline styles in TS.
// Let's just cast it: style={{ '--poc-color': '...', '--poc-glow': '...' } as React.CSSProperties}
// The replacement is: style={{ '--poc-color': '#6366f1', '--poc-glow': 'rgba(99,102,241,0.15)' }} 
// In Next.js / React 18, putting strings as keys for CSS variables is perfectly valid and supported!
fs.writeFileSync('src/app/page.tsx', tsx);
console.log("Fixed issues.");
