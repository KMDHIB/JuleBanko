# PWA Ikon Setup - Komplet ✅

## Hvad jeg har lavet:

### 1. Oprettet Placeholder Ikoner
Jeg har lavet 3 SVG ikoner med et grønt "J" logo (#42b883):
- `public/icon-192.svg` - 192x192 pixels (PWA standard ikon)
- `public/icon-512.svg` - 512x512 pixels (PWA high-res ikon)
- `public/apple-touch-icon.svg` - 180x180 pixels (iOS home screen ikon)

Disse ikoner:
- Matcher app'ens tema-farve
- Har afrundede hjørner (moderne design)
- Viser et tydeligt "J" for JuleBanko
- Virker både på Android og iOS

### 2. Opdateret Web Manifest
`public/manifest.webmanifest` indeholder nu:
- Begge ikon størrelser (192px og 512px)
- "any" purpose (normal visning)
- "maskable" purpose (adaptive ikoner på Android)

### 3. Tilføjet Apple Touch Icon
`index.html` har nu:
- `<link rel="apple-touch-icon">` for iOS devices
- Dette sikrer at appen ser godt ud på iPhone/iPad home screen

### 4. Instruktioner til Udskiftning
Se `public/ICONS-README.md` for detaljerede instruktioner om hvordan du:
- Konverterer ikoner til PNG (hvis ønsket)
- Bruger realfavicongenerator.net
- Erstatter med dit eget logo
- Opdaterer manifest filen

## Sådan erstatter du ikonerne:

### Hurtigste metode (anbefalet):
1. Gå til https://realfavicongenerator.net/
2. Upload dit logo (f.eks. UVdata logoet)
3. Download den genererede zip fil
4. Erstat filerne i `public/` mappen
5. Opdater `manifest.webmanifest` til at pege på de nye filer

### Manuel metode:
1. Design/eksporter dit logo som PNG i størrelserne:
   - 192x192 pixels
   - 512x512 pixels
   - 180x180 pixels
2. Gem dem i `public/` mappen
3. Opdater `manifest.webmanifest` til at bruge `.png` i stedet for `.svg`

## Status

✅ PWA ikoner er sat op og virker
✅ Placeholder ikoner ser professionelle ud
✅ Alle nødvendige størrelser er inkluderet
✅ iOS og Android support er komplet
✅ Instruktioner til udskiftning er tilgængelige

Ikonerne vil blive kopieret til `dist/` ved build og deployed til GitHub Pages.
