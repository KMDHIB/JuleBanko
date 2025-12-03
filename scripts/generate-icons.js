// Script til at generere PWA ikoner fra SVG
// Kør: node scripts/generate-icons.js

const fs = require('fs');
const path = require('path');

// Dette script kræver at du manuelt konverterer icon.svg til PNG
// Du kan bruge online værktøjer som:
// - https://cloudconvert.com/svg-to-png
// - https://svgtopng.com/
// - Eller et lokalt værktøj som Inkscape eller ImageMagick

console.log(`
📱 PWA Ikon Generator Instruktioner
===================================

For at generere PWA ikoner til JuleBanko appen:

1. Åbn public/icon.svg i en SVG editor eller online converter

2. Eksporter/konverter til PNG i følgende størrelser:
   - 192x192 pixels → gem som public/icon-192.png
   - 512x512 pixels → gem som public/icon-512.png
   - 180x180 pixels → gem som public/apple-touch-icon.png

3. Anbefalede værktøjer:
   
   Online:
   - https://realfavicongenerator.net/ (genererer alle størrelser automatisk)
   - https://cloudconvert.com/svg-to-png
   
   Lokal (hvis installeret):
   - Inkscape: File → Export PNG Image
   - ImageMagick: 
     convert icon.svg -resize 192x192 icon-192.png
     convert icon.svg -resize 512x512 icon-512.png
     convert icon.svg -resize 180x180 apple-touch-icon.png

4. Alternativ: Brug placeholder farve-ikoner
   Jeg har oprettet simple placeholder PNG filer som du kan erstatte senere.

Manifestet og HTML er allerede opdateret til at bruge disse ikoner.
`);

// Opret simple placeholder ikoner som base64 data URLs der kan gemmes
const createPlaceholderIcon = (size, color = '#42b883') => {
  // Dette er et simpelt SVG placeholder ikon
  const svg = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="${color}"/>
  <text x="50%" y="50%" font-size="${size/3}" fill="white" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="bold">J</text>
</svg>`;
  return svg;
};

// Gem placeholder SVG ikoner
const publicDir = path.join(__dirname, '..', 'public');

fs.writeFileSync(
  path.join(publicDir, 'icon-192.svg'),
  createPlaceholderIcon(192)
);

fs.writeFileSync(
  path.join(publicDir, 'icon-512.svg'),
  createPlaceholderIcon(512)
);

fs.writeFileSync(
  path.join(publicDir, 'apple-touch-icon.svg'),
  createPlaceholderIcon(180)
);

console.log('\n✅ Placeholder SVG ikoner oprettet i public/');
console.log('   Du kan konvertere disse til PNG eller bruge dem som SVG midlertidigt.\n');
