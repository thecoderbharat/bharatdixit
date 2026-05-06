import type { MetadataRoute } from 'next'
import { judgingEvents, whitepapers } from '@/data/portfolio'

const BASE = 'https://bharatdixit.com'
const NOW  = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  const whitepaperRoutes = whitepapers
    .filter(wp => wp.route)
    .map(wp => ({
      url: `${BASE}${wp.route}`,
      lastModified: NOW,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    }))

  const judgingRoutes = judgingEvents.map(e => ({
    url: `${BASE}/judging/${e.id}`,
    lastModified: NOW,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [
    // ── Core pages ─────────────────────────────────────────────
    { url: BASE,                   lastModified: NOW, changeFrequency: 'weekly',  priority: 1.0  },
    { url: `${BASE}/whitepapers`,  lastModified: NOW, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/gallery`,      lastModified: NOW, changeFrequency: 'monthly', priority: 0.8  },
    { url: `${BASE}/media`,        lastModified: NOW, changeFrequency: 'monthly', priority: 0.8  },
    { url: `${BASE}/judging`,      lastModified: NOW, changeFrequency: 'monthly', priority: 0.8  },
    // ── Whitepaper detail pages ─────────────────────────────────
    ...whitepaperRoutes,
    // ── Judging event detail pages ──────────────────────────────
    ...judgingRoutes,
  ]
}
