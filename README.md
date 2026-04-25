# Bharat Dixit — Portfolio

Production-ready Next.js 14 portfolio for Bharat Kumar Dixit.  
CTO · Senior Mobile Architect · International Tech Leader

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion v11 |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |

---

## Directory Structure

```
bharat-portfolio/
├── app/
│   ├── layout.tsx              ← Root layout: nav, footer, SEO, JSON-LD
│   ├── globals.css             ← Global styles, blueprint grid, glass utilities
│   ├── page.tsx                ← Home page
│   ├── whitepapers/
│   │   └── page.tsx            ← Whitepapers page
│   └── gallery/
│       └── page.tsx            ← Gallery page
├── components/
│   ├── shared/
│   │   ├── Header.tsx          ← Glassmorphism sticky nav
│   │   └── Footer.tsx          ← Split-screen contact footer (react-hook-form + zod)
│   ├── home/
│   │   ├── HeroSection.tsx     ← Full-height hero with crossfade slider
│   │   ├── CoverFlow.tsx       ← Achievement coverflow slider
│   │   ├── ModuleSection.tsx   ← 7 detailed module sections (alternating layouts)
│   │   ├── CareerTimeline.tsx  ← Vertical alternating career timeline
│   │   └── SkillsCloud.tsx     ← Categorised skill pills with hover effects
│   ├── whitepapers/
│   │   └── WhitepaperCard.tsx  ← Individual whitepaper card
│   └── gallery/
│       ├── GalleryFilters.tsx  ← Category filter tabs
│       ├── MediaToggle.tsx     ← Images / Videos toggle
│       ├── MasonryGrid.tsx     ← CSS columns masonry with Framer Motion
│       └── VideoGrid.tsx       ← 3-column video grid with play button overlay
├── data/
│   └── portfolio.ts            ← All content data (interfaces + typed arrays)
├── lib/
│   └── utils.ts                ← cn() helper (clsx + tailwind-merge)
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

---

## Production Build

```bash
npm run build
npm start
```

---

## Customisation Guide

### Updating Content
All content lives in **`data/portfolio.ts`** — never hardcode in components.

| What to change | Where |
|---|---|
| Career timeline entries | `timeline` array |
| Whitepaper list + PDF links | `whitepapers` array — set `pdfUrl` to real URL |
| Skills | `skillCategories` array |
| Gallery images/videos | `galleryImages` / `galleryVideos` arrays |
| Achievement slider | `achievements` array |
| Module section copy | `modules` array |

### Adding Real Images
Replace `ImagePlaceholder` in `ModuleSection.tsx` with Next.js `<Image>` components:
```tsx
import Image from 'next/image'
<Image src="/images/nit-kolkata.jpg" alt="NIT Kolkata" fill className="object-cover" />
```

### Connecting the Contact Form
In `components/shared/Footer.tsx`, replace the `onSubmit` mock with your API:
```ts
const onSubmit = async (data: ContactForm) => {
  await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
}
```
Then create `app/api/contact/route.ts` using Resend, SendGrid, or Nodemailer.

### SEO
- Update `metadata` in `app/layout.tsx` with your real domain
- Update `jsonLd.url` and `sameAs` social URLs
- Add `public/og-image.jpg` (1200×630px) for Open Graph

---

## Design System

The design follows the **Architectural Monolith** system:

- **No 1px dividers** — separation via background shifts and negative space
- **Gold (#d4af37)** — used sparingly for labels and micro-accents only
- **Neon Blue (#00d2ff)** — active states, glows, CTA highlights
- **Blueprint dot grid** — fixed to surface layer via CSS background
- **Glassmorphism** — `backdrop-filter: blur` with 5–8% white border on glass edges
- **Typography** — Space Grotesk (headlines) + Inter (body)

---

*Senior Lead Architect Portfolio V4.0 · Obsidian Architect Framework*
