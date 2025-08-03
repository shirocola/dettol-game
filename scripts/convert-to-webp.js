import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');
const optimizedDir = path.join(publicDir, 'optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Define image sizes for responsive design
const SIZES = {
  mobile: { width: 430, suffix: '-mobile' },
  tablet: { width: 768, suffix: '-tablet' },
  desktop: { width: 1920, suffix: '-desktop' }
};

// Priority files that need immediate optimization (largest files first)
const PRIORITY_FILES = [
  'BG-Cream.png',           // 75MB
  'start.png',              // 15MB
  'start-game.png',         // 13MB
  'age-selection.png',      // 9.3MB
  'honey-result.png',       // 5.9MB
  'sakura-result.png',      // 4.8MB
  'apple-result.png',       // 3.8MB
  'lavender-result.png',    // 3.8MB
  'Sakura-1.png',           // 3.1MB
  'peach-result.png',       // 3.0MB
  'Object1.png',            // 2.8MB
  'peach-quote.png',        // 1.1MB
  'apple-quote.png',        // 1.0MB
  'honey-quote.png',        // 0.9MB
  'sakura-quote.png',       // 0.9MB
  'lavender-qoute.png',     // Note: typo in filename
  // Quiz icons
  'foam.png',               // 435KB
  'fun.png',                // 388KB
  'back.png',               // 345KB
  'moiture.png',            // 337KB
  'longlasting.png',        // 334KB
  'body.png',               // 320KB
  'hairwash.png',           // 314KB
  'romantic.png',           // 314KB
  'hand.png',               // 309KB
  'simple.png',             // 278KB
  'arm.png',                // 273KB
  'scent.png',              // 243KB
  'clean.png',              // 238KB
  'brush.png',              // 236KB
  'scrub.png',              // 228KB
  'temp.png',               // 211KB
  'freshness.png',          // 162KB
  'cleanefficiancy.png',    // 99KB
];

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const { width, quality = 80 } = options;
    
    let sharpInstance = sharp(inputPath);
    
    if (width) {
      sharpInstance = sharpInstance.resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    await sharpInstance
      .webp({ quality, effort: 6 })
      .toFile(outputPath);
    
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const compression = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(1);
    
    console.log(`✓ ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
    console.log(`  ${(inputStats.size / 1024 / 1024).toFixed(1)}MB -> ${(outputStats.size / 1024 / 1024).toFixed(1)}MB (${compression}% reduction)`);
    
    return {
      original: inputStats.size,
      optimized: outputStats.size,
      compression: parseFloat(compression)
    };
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

async function convertPriorityFiles() {
  console.log('🚀 Starting image optimization for mobile performance...\n');
  
  let totalOriginal = 0;
  let totalOptimized = 0;
  
  for (const filename of PRIORITY_FILES) {
    const inputPath = path.join(publicDir, filename);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  ${filename} not found, skipping...`);
      continue;
    }
    
    console.log(`📸 Processing ${filename}...`);
    
    const baseName = path.parse(filename).name;
    
    // Generate responsive sizes for critical images
    for (const [sizeName, config] of Object.entries(SIZES)) {
      const outputPath = path.join(optimizedDir, `${baseName}${config.suffix}.webp`);
      
      const result = await optimizeImage(inputPath, outputPath, {
        width: config.width,
        quality: sizeName === 'mobile' ? 75 : 80 // Lower quality for mobile
      });
      
      if (result) {
        totalOriginal += result.original;
        totalOptimized += result.optimized;
      }
    }
    
    // Also create a general optimized version
    const generalOutputPath = path.join(optimizedDir, `${baseName}.webp`);
    const generalResult = await optimizeImage(inputPath, generalOutputPath, {
      quality: 80
    });
    
    if (generalResult) {
      totalOriginal += generalResult.original;
      totalOptimized += generalResult.optimized;
    }
    
    console.log('');
  }
  
  const totalCompression = ((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1);
  console.log(`🎉 Optimization complete!`);
  console.log(`📊 Total size reduction: ${(totalOriginal / 1024 / 1024).toFixed(1)}MB -> ${(totalOptimized / 1024 / 1024).toFixed(1)}MB`);
  console.log(`💾 Space saved: ${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(1)}MB (${totalCompression}% reduction)`);
}

// Run the optimization
convertPriorityFiles().catch(console.error);