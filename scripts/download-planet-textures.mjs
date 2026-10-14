import fs from 'fs';
import path from 'path';

const out = path.resolve('client/public/textures');
fs.mkdirSync(out, { recursive: true });
const base = 'https://www.solarsystemscope.com/textures/download/';
const files = [
  '2k_sun.jpg', '2k_mercury.jpg', '2k_venus_surface.jpg', '2k_earth_daymap.jpg',
  '2k_earth_clouds.jpg', '2k_moon.jpg', '2k_mars.jpg', '2k_jupiter.jpg',
  '2k_saturn.jpg', '2k_saturn_ring_alpha.png', '2k_uranus.jpg', '2k_neptune.jpg',
  '2k_stars_milky_way.jpg',
];

for (const f of files) {
  try {
    const r = await fetch(base + f, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const buf = Buffer.from(await r.arrayBuffer());
    fs.writeFileSync(path.join(out, f), buf);
    console.log('OK  ', f, (buf.length / 1024).toFixed(0) + ' KB');
  } catch (e) {
    console.log('FAIL', f, e.message);
  }
}
