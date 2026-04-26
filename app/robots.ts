import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://bharatdixit.com/sitemap.xml',
    host: 'https://bharatdixit.com',
  }
}
