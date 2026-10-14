import fs from 'fs';
import path from 'path';

// Let's analyze all pages and sections in client/src
const pagesDir = path.resolve('client/src/pages');
const sectionsDir = path.resolve('client/src/sections');
const componentsDir = path.resolve('client/src/components');

console.log('--- STARTING COMPREHENSIVE CONTENT & PAGE AUDIT ---');

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const wordCount = content.replace(/<[^>]*>/g, ' ').replace(/[^\w\s]/g, ' ').split(/\s+/).filter(Boolean).length;
  return {
    lines: lines.length,
    bytes: content.length,
    wordCount,
  };
}

const pages = fs.readdirSync(pagesDir, { withFileTypes: true });

pages.forEach(entry => {
  if (entry.isFile() && entry.name.endsWith('.tsx')) {
    const fullPath = path.join(pagesDir, entry.name);
    const stats = analyzeFile(fullPath);
    console.log(`Page: ${entry.name.padEnd(25)} | Lines: ${String(stats.lines).padStart(4)} | Words: ~${String(stats.wordCount).padStart(5)}`);
  } else if (entry.isDirectory()) {
    const subPages = fs.readdirSync(path.join(pagesDir, entry.name));
    subPages.forEach(sub => {
      if (sub.endsWith('.tsx')) {
        const fullPath = path.join(pagesDir, entry.name, sub);
        const stats = analyzeFile(fullPath);
        console.log(`Page: ${(`${entry.name}/${sub}`).padEnd(25)} | Lines: ${String(stats.lines).padStart(4)} | Words: ~${String(stats.wordCount).padStart(5)}`);
      }
    });
  }
});
