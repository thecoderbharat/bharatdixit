# 📁 Image Management Guide — Bharat Dixit Portfolio

All images live in section-specific folders inside `/public/`.
Use **WebP** format for all photos (smaller file size, better Core Web Vitals).
Only the OG image should be JPG for maximum social compatibility.

---

## Folder Structure & File Names

```
public/
├── hero/                          ← Hero slider backgrounds (full-width)
│   ├── slide-1.webp               → "International Tech Leader" slide
│   ├── slide-2.webp               → "Senior Mobile Architect" slide
│   └── slide-3.webp               → "Chief Technology Officer" slide
│
├── coverflow/                     ← Achievement slider card thumbnails
│   ├── nit-kolkata.webp
│   ├── hackindia.webp
│   ├── ibm-training.webp
│   ├── recognitions.webp
│   ├── media.webp
│   ├── certificates.webp
│   └── ngo.webp
│
├── modules/                       ← Detailed section images (large)
│   ├── nit-kolkata/
│   │   └── bharat-nit-kolkata.webp
│   ├── hackindia/
│   │   └── bharat-hackindia.webp
│   ├── ibm-training/
│   │   └── bharat-ibm-training.webp
│   ├── recognitions/
│   │   └── recognitions-collage.webp
│   ├── media/
│   │   └── media-coverage.webp
│   ├── certificates/
│   │   └── certificates-wall.webp
│   └── ngo/
│       └── vrindavan-foundation.webp
│
├── timeline/                      ← Career timeline company logos (optional)
│   ├── vigorus-logo.webp
│   └── ibm-logo.webp
│
├── whitepapers/                   ← Whitepaper card thumbnails
│   ├── scaling-ai-healthcare.webp
│   ├── clean-mobile-monoliths.webp
│   ├── distributed-state.webp
│   ├── precision-visualization.webp
│   ├── zero-trust-health.webp
│   └── architectural-legacy.webp
│
├── gallery/                       ← Gallery page images (organised by category)
│   ├── london/
│   │   ├── london-tech-summit-1.webp
│   │   ├── london-boardroom.webp
│   │   └── london-cityscape.webp
│   ├── hackathons/
│   │   ├── hackindia-finals.webp
│   │   ├── judging-panel.webp
│   │   └── nit-kolkata-event.webp
│   ├── ibm/
│   │   ├── ibm-workshop.webp
│   │   └── ibm-mentorship.webp
│   └── ngo/
│       ├── ngo-training-day.webp
│       ├── community-outreach.webp
│       └── digital-literacy.webp
│
├── og/
│   └── og-image.jpg               ← REQUIRED: 1200×630px social share image
│
└── favicon/
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    ├── apple-touch-icon.png       (180×180)
    └── android-chrome-192x192.png
```

---

## Image Size Requirements

| Section          | Dimensions      | Format | Notes                        |
|------------------|-----------------|--------|------------------------------|
| Hero slides      | 1920×1080px min | WebP   | Use object-top for portraits |
| Cover flow cards | 400×264px min   | WebP   | 16:9, zooms on hover         |
| Module images    | 1200×800px min  | WebP   | Large, high quality          |
| NGO image        | 900×1125px      | WebP   | Portrait 4:5                 |
| Whitepaper cards | 800×500px min   | WebP   | 16:10 thumbnail              |
| Gallery images   | 800×600px min   | WebP   | Mix portrait/landscape       |
| OG image         | 1200×630px      | **JPG**| Exact dimensions critical    |
| Favicon          | Various         | PNG    | Use realfavicongenerator.net |

---

## How to Convert Photos to WebP

**Mac:** `sips -s format webp yourphoto.jpg --out yourphoto.webp`
**Online:** https://squoosh.app (free, browser-based, excellent quality)
**Batch:** Use https://convertio.co for multiple files at once

---

## How to Activate Images in Code

Once you drop images into the folders, update `data/portfolio.ts`:

```ts
// Hero slides — update the imagePath field:
{ imagePath: '/hero/slide-1.webp', line1: 'International', ... }

// Module sections — update imageSrc field:
{ id: 'nit-kolkata', imageSrc: '/modules/nit-kolkata/bharat-nit-kolkata.webp', ... }

// Gallery — update the src field:
{ id: 'g1', src: '/gallery/london/london-tech-summit-1.webp', ... }
```

The components already read from these fields — just add the file and update the data.

---

## SEO Image Checklist

- [ ] All images have descriptive `alt` text (already done in code)
- [ ] OG image is exactly 1200×630px JPG at `/public/og/og-image.jpg`
- [ ] Favicon files are in `/public/favicon/` and linked in `app/layout.tsx`
- [ ] Hero images use `priority={true}` on the first slide (already done)
- [ ] All images use Next.js `<Image>` component (already done)
