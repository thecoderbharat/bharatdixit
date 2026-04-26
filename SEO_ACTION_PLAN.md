# 🚀 Complete SEO Action Plan — Ranking "Bharat Dixit" #1 on Google

This file covers everything you need to do **outside the code** plus what's already done inside it.

---

## ✅ What's Already Done In The Code

| Item | File |
|------|------|
| Title tags with keyword "Bharat Dixit" on every page | `app/layout.tsx`, each `page.tsx` |
| Meta descriptions on all 3 pages | `app/layout.tsx`, each `page.tsx` |
| Open Graph tags (LinkedIn, WhatsApp sharing) | `app/layout.tsx` |
| Twitter Card tags | `app/layout.tsx` |
| JSON-LD: Person schema | `app/layout.tsx` |
| JSON-LD: WebSite schema | `app/layout.tsx` |
| JSON-LD: ProfilePage schema (new Google standard) | `app/layout.tsx` |
| JSON-LD: ItemList of whitepapers | `app/whitepapers/page.tsx` |
| XML Sitemap at /sitemap.xml | `app/sitemap.ts` |
| robots.txt at /robots.txt | `app/robots.ts` |
| Canonical URLs on all pages | each `page.tsx` |
| Web App Manifest | `public/site.webmanifest` |
| Semantic HTML: `<article>`, `<section>`, `<header>`, `<main>`, `<footer>` | all components |
| Alt text on all images with your name | all Image components |
| Next.js Image optimisation (WebP auto-conversion, lazy loading) | all Image components |

---

## 🔴 PRIORITY 1 — Do These First (Week 1)

### 1. Register & Verify Google Search Console
**URL:** https://search.google.com/search-console/

Steps:
1. Add property → Enter `https://bharatdixit.com`
2. Choose **HTML tag** verification method
3. Copy the verification code (looks like: `abc123def456`)
4. Paste it into `app/layout.tsx` → `verification.google` field
5. Deploy → click Verify
6. Submit your sitemap: `https://bharatdixit.com/sitemap.xml`

**Why:** Google won't index you properly without this. The sitemap tells Google all your pages immediately.

---

### 2. Create Your OG Image
**Required dimensions:** 1200 × 630px exactly
**Format:** JPG (not WebP — broader compatibility)
**Save to:** `public/og/og-image.jpg`

**What to include:**
- Your professional photo
- Your name "Bharat Kumar Dixit" in large text
- Your title "CTO & Senior Mobile Architect"
- Dark background matching your site theme

**Free tool:** https://canva.com — search "LinkedIn banner" template then resize to 1200×630

**Why:** This is the image that appears when your site is shared on LinkedIn, WhatsApp, Twitter. Without it, those platforms show a broken image preview which kills click-through rates.

---

### 3. Generate & Add Favicon Files
**URL:** https://realfavicongenerator.net

Steps:
1. Upload a high-res version of your logo/initials
2. Download the generated zip
3. Extract and place files in `public/favicon/`:
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png` (180×180)
   - `android-chrome-192x192.png`
   - `android-chrome-512x512.png`
4. Also place `favicon.ico` directly in `public/` (not in the favicon subfolder)

---

### 4. Update Social Links in layout.tsx
In `app/layout.tsx`, update the `sameAs` array with your real profile URLs:
```ts
sameAs: [
  'https://linkedin.com/in/YOUR-REAL-SLUG',
  'https://github.com/YOUR-USERNAME',
  'https://researchgate.net/profile/YOUR-PROFILE',
]
```
Also update `twitter.site` and `twitter.creator` with your real @handle.

---

## 🟡 PRIORITY 2 — Do These in Week 2–3

### 5. LinkedIn Profile Optimisation
Google heavily indexes LinkedIn for name searches. Your LinkedIn profile will compete WITH your website for the #1 spot.

**Actions:**
- Custom URL: `linkedin.com/in/bharat-kumar-dixit` or similar
- Headline: "CTO at Vigorus.ai | Senior Mobile Architect | International Tech Leader"
- About section: Use "Bharat Dixit" and "Bharat Kumar Dixit" naturally 2–3 times
- Add your website URL in the Contact section
- All past roles should match your portfolio exactly

**Why:** LinkedIn often ranks #1 for name searches. Having both rank means you own 2 of the top 5 spots.

---

### 6. Wikipedia / Wikidata (if eligible)
If you can establish "notability" (you've been mentioned in published news articles, been a judge at a national event, etc. — which you clearly have), a Wikipedia page puts you in Google's Knowledge Panel.

**Eligibility check:** Have you been mentioned by name in at least 3 independent, reliable sources (news sites, universities, etc.)? If yes, you are likely eligible.

**Actions:**
1. Create a Wikipedia account
2. Draft a page at: `en.wikipedia.org/wiki/Bharat_Kumar_Dixit`
3. Cite your HackIndia judging, IBM work, NGO founding with actual news article URLs
4. Also create a Wikidata entry — this feeds Google's Knowledge Graph directly

---

### 7. Google Business Profile (Free)
**URL:** https://business.google.com

Even as an individual professional, you can create a profile for yourself.

**Actions:**
- Create listing for "Bharat Kumar Dixit" as a "Professional Services" provider
- Add your website URL
- Add your location (even if just city)
- Add your services (CTO Consulting, Mobile Architecture, etc.)
- Upload a professional photo

**Why:** Can trigger a rich sidebar panel in Google search results showing your photo, title, and website instantly.

---

### 8. Get Backlinks From These Sources
Backlinks are the #1 ranking factor. One high-quality backlink beats 100 low-quality ones.

**Easy wins:**
- [ ] Your company website (Vigorus.ai) — add an "About the Founder" page that links to `bharatdixit.com`
- [ ] HackIndia website — email them and ask to be listed as a judge with a link to your site
- [ ] NIT Kolkata event page — same approach, ask the organiser to add your name + link
- [ ] IBM India blog / alumni section — if possible, get your name linked from an IBM page
- [ ] Press articles that already mention you — email the journalist and ask them to add a link

---

### 9. Publish on Medium / Substack / Dev.to
Write 3–5 technical articles and include:
- Your author name "Bharat Kumar Dixit" prominently
- A bio with a link back to `bharatdixit.com`
- Topics matching your whitepapers (AI in healthcare, mobile architecture, etc.)

**Why:** These high-authority domains rank fast. Articles mentioning your name on Medium will appear in search results within days, not months.

---

## 🟢 PRIORITY 3 — Ongoing (Month 2+)

### 10. Build More Content Pages
The more pages on your site that mention "Bharat Dixit" in context, the stronger the signal.

**Suggested pages to add:**
- `/blog` — Short technical posts (even 300-word summaries of your whitepapers)
- `/speaking` — A dedicated page for your judge/speaker appearances with dates and details
- `/ngo` — A dedicated page for Shree Kishori Priya Foundation
- `/contact` — A standalone contact page (beyond the footer form)

---

### 11. YouTube Channel
Create a YouTube channel named "Bharat Dixit" or "Bharat Kumar Dixit".

Even uploading your existing keynote recordings with proper titles like:
`"Bharat Dixit - The Future of Decentralised Architecture [HackIndia 2023]"`

YouTube videos often rank on the first page of Google for name searches.

---

### 12. Monitor & Measure

| Tool | What to Track | URL |
|------|--------------|-----|
| Google Search Console | Impressions for "Bharat Dixit", click-through rate, indexed pages | search.google.com/search-console |
| Google Analytics 4 | Traffic sources, bounce rate, time on site | analytics.google.com |
| Ahrefs Free / Ubersuggest | Backlinks pointing to your site | ahrefs.com/backlink-checker |

**Target timeline:**
- Week 1–2: Site gets indexed, you appear on page 3–5
- Month 1–2: You reach page 1 (positions 5–10)
- Month 3–6: You reach top 3, potentially #1

---

## 🏆 The #1 Factor: Name Frequency + Authority

Google ranks "Bharat Dixit" searches based on:
1. **How many times "Bharat Kumar Dixit" appears on authoritative pages** (your site, LinkedIn, Wikipedia, news)
2. **How many authoritative sites link to you** (IBM, HackIndia, NIT Kolkata, news articles)
3. **How complete your Knowledge Graph is** (JSON-LD + Google Business Profile + Wikipedia)

The code is already maximised. The off-site work above is what drives you from page 3 to #1.

---

## Quick Reference: Files to Update After Reading This

| What to update | File | Field |
|---|---|---|
| Google Search Console code | `app/layout.tsx` | `verification.google` |
| Your real Twitter handle | `app/layout.tsx` | `twitter.site`, `twitter.creator` |
| Your real social URLs | `app/layout.tsx` | `sameAs` array |
| Your real domain | `app/layout.tsx` | `SITE_URL` constant |
| Your real email | `app/layout.tsx` | `personSchema.email` |
| OG image | `public/og/og-image.jpg` | Drop the file |
| Favicon files | `public/favicon/` | Drop the files |
