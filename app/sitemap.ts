import type { MetadataRoute } from 'next'
import { judgingEvents, whitepapers } from '@/data/portfolio'

const BASE_URL = 'https://bharatdixit.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // Dynamic judging event pages
  const judgingRoutes = judgingEvents.map(e => ({
    url: `${BASE_URL}/judging/${e.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic whitepaper detail pages (only those with a route)
  const whitepaperRoutes = whitepapers
    .filter(wp => wp.route)
    .map(wp => ({
      url: `${BASE_URL}${wp.route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    }))

  return [
    // Core pages — highest priority
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Whitepaper index
    {
      url: `${BASE_URL}/whitepapers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    // Gallery
    {
      url: `${BASE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Media page
    {
      url: `${BASE_URL}/media`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Individual whitepaper pages
    ...whitepaperRoutes,
    // Individual judging event pages
    ...judgingRoutes,
  ]
}
