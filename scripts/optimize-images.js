import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all PNG files in the public directory
const publicDir = path.join(__dirname, '../public');
const files = fs.readdirSync(publicDir).filter(file => file.endsWith('.png'));

console.log('Found the following PNG files:');
files.forEach(file => {
  const filePath = path.join(publicDir, file);
  const stats = fs.statSync(filePath);
  const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`- ${file}: ${sizeInMB}MB`);
});

console.log('\nImage optimization recommendations:');
console.log('1. Convert large PNG files to WebP format (smaller file size)');
console.log('2. Use different image sizes for different screen sizes');
console.log('3. Consider using AVIF format for even better compression');
console.log('4. Lazy load images that are not immediately visible');

console.log('\nTo optimize images, you can:');
console.log('- Use online tools like TinyPNG or Squoosh');
console.log('- Use Sharp library for Node.js image processing');
console.log('- Use build tools like Vite with image optimization plugins');

console.log('\nFor the BG-Cream.png (75MB), consider:');
console.log('- Converting to WebP format (70-80% size reduction)');
console.log('- Creating multiple sizes for different screen resolutions');
console.log('- Using progressive loading for large images');