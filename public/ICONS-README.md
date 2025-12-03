# PWA Ikoner

## Nuværende ikoner

Appen bruger pt. placeholder SVG ikoner med et grønt "J" logo.

## Erstat med dine egne ikoner

For at erstatte med dine egne ikoner:

### Option 1: Konverter eksisterende logo til PNG

Hvis du vil bruge UVdata logoet eller et andet logo:

1. Gå til https://realfavicongenerator.net/
2. Upload dit logo (f.eks. `assets/uvdata.svg`)
3. Generer alle ikoner
4. Download og erstat følgende filer:
   - `icon-192.svg` → erstat med `icon-192.png` (192x192 pixels)
   - `icon-512.svg` → erstat med `icon-512.png` (512x512 pixels)
   - `apple-touch-icon.svg` → erstat med `apple-touch-icon.png` (180x180 pixels)

5. Opdater `manifest.webmanifest`:
   ```json
   "icons": [
     {
       "src": "./icon-192.png",
       "sizes": "192x192",
       "type": "image/png"
     },
     {
       "src": "./icon-512.png",
       "sizes": "512x512",
       "type": "image/png"
     }
   ]
   ```

### Option 2: Brug ImageMagick/Inkscape lokalt

Hvis du har ImageMagick installeret:

```powershell
# Fra projektets rod
cd public

# Konverter fra SVG til PNG
magick icon-192.svg icon-192.png
magick icon-512.svg icon-512.png
magick apple-touch-icon.svg apple-touch-icon.png

# Slet de gamle SVG filer
rm icon-192.svg, icon-512.svg, apple-touch-icon.svg
```

### Option 3: Design custom ikoner

Du kan også designe helt nye ikoner i f.eks. Figma, Canva eller Photoshop:

**Specifikationer:**
- Format: PNG (foretrukket) eller SVG
- Størrelse: 192x192 og 512x512 pixels
- Baggrund: Transparent eller solid farve
- Margin: Mindst 10% padding omkring logoet (safe zone)

## Nuværende placeholder ikoner

De nuværende ikoner viser et hvidt "J" på grøn baggrund (#42b883).
Dette matcher app'ens tema-farve og giver et professionelt udseende,
men du bør erstatte dem med dit eget branding.
