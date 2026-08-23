import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directories = [
  path.join(process.cwd(), 'public'),
  path.join(process.cwd(), 'public', 'logo')
];

for (const directoryPath of directories) {
  fs.readdir(directoryPath, async (err, files) => {
    if (err) return;
    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.jpg')) {
        const inputPath = path.join(directoryPath, file);
        const outputPath = path.join(directoryPath, file.replace(/\.(png|jpg|jpeg)$/, '.webp'));
        
        try {
          await sharp(inputPath)
            .resize({ width: 1920, withoutEnlargement: true }) // Resize to max 1920 width if it's larger
            .webp({ quality: 75 }) // Convert to webp with good quality
            .toFile(outputPath);
          console.log(`Converted ${file} to WebP in ${directoryPath}`);
        } catch (err) {
          console.error(`Error converting ${file}:`, err);
        }
      }
    }
  });
}
