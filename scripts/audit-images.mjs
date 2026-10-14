import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

function getFiles(dir, extList = ['.ts', '.tsx', '.js', '.jsx', '.css', '.html', '.json']) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath, extList));
    } else {
      if (extList.some(ext => file.endsWith(ext))) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

const codeFiles = getFiles('./client/src');
const imageMatches = new Map();

codeFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const regex = /['"`](\/?images\/[^'"`\s]+)['"`]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const imgPath = match[1];
    if (!imageMatches.has(imgPath)) {
      imageMatches.set(imgPath, []);
    }
    imageMatches.get(imgPath).push(file.replace(/\\/g, '/'));
  }
});

console.log('=== AUDIT OF REFERENCED IMAGES ===\n');

for (const [img, files] of imageMatches.entries()) {
  const cleanPath = img.startsWith('/') ? img.slice(1) : img;
  const diskPath = path.join('./client/public', cleanPath);
  const exists = fs.existsSync(diskPath);
  
  if (!exists) {
    console.log(`[MISSING] ${img}`);
    continue;
  }

  const meta = await sharp(diskPath).metadata();
  const stats = await sharp(diskPath).stats();
  
  // Analyze corner pixels to check for background transparency
  const { data, info } = await sharp(diskPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const channels = info.channels;
  const width = info.width;
  const height = info.height;

  // Sample the 4 corners (top-left, top-right, bottom-left, bottom-right)
  const getPixel = (x, y) => {
    const idx = (y * width + x) * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const a = channels === 4 ? data[idx + 3] : 255;
    return { r, g, b, a };
  };

  const corners = [
    getPixel(0, 0),
    getPixel(width - 1, 0),
    getPixel(0, height - 1),
    getPixel(width - 1, height - 1)
  ];

  const allCornersTransparent = channels === 4 && corners.every(c => c.a === 0);
  const anyCornerTransparent = channels === 4 && corners.some(c => c.a === 0);
  const hasAlpha = meta.hasAlpha;
  const minAlpha = stats.channels[3]?.min ?? (hasAlpha ? 0 : 255);

  console.log({
    image: img,
    format: meta.format,
    dimensions: `${width}x${height}`,
    hasAlpha,
    minAlpha,
    allCornersTransparent,
    anyCornerTransparent,
    corners,
    usedInCount: files.length,
    files: files.slice(0, 3)
  });
}
