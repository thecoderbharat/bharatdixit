import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'

const SITE_URL = 'https://bharatdixit.com'   // ← update with your real domain
const OG_IMAGE = `${SITE_URL}/og/og-image.jpg` // 1200×630 JPG — see public/og/README.md

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Bharat Dixit | CTO & Senior Mobile Architect',
    template: '%s | Bharat Dixit',
  },
  description:
    'Bharat Kumar Dixit — International Tech Leader, Senior Mobile Architect, and CTO at Vigorus.ai. Expert in AI-native healthcare platforms, Flutter architecture, and enterprise systems.',
  keywords: [
    'Bharat Dixit', 'Bharat Kumar Dixit', 'CTO', 'Senior Mobile Architect',
    'International Tech Leader', 'Flutter Expert', 'AI Healthcare', 'IBM Mobile Architect',
    'Vigorus.ai', 'Mobile Architecture India', 'HackIndia Judge', 'NIT Kolkata Judge',
    'Shree Kishori Priya Foundation',
  ],
  authors: [{ name: 'Bharat Kumar Dixit', url: SITE_URL }],
  creator: 'Bharat Kumar Dixit',
  publisher: 'Bharat Kumar Dixit',
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'profile',
    firstName: 'Bharat Kumar', lastName: 'Dixit', username: 'bharatdixit', gender: 'male',
    url: SITE_URL, siteName: 'Bharat Dixit Portfolio',
    title: 'Bharat Dixit | CTO & Senior Mobile Architect',
    description: 'International Tech Leader architecting the intersection of AI precision and mobile excellence. CTO at Vigorus.ai, ex-IBM.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Bharat Kumar Dixit — CTO & Senior Mobile Architect' }],
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bharatdixit',       // ← update with your real Twitter/X handle
    creator: '@bharatdixit',
    title: 'Bharat Dixit | CTO & Senior Mobile Architect',
    description: 'International Tech Leader. Senior Mobile Architect. CTO at Vigorus.ai.',
    images: [OG_IMAGE],
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    google: 'PASTE_GOOGLE_SEARCH_CONSOLE_CODE_HERE',
    // bing: 'PASTE_BING_CODE_HERE',
  },
}

// ── JSON-LD: Person ───────────────────────────────────────────────
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Bharat Kumar Dixit',
  givenName: 'Bharat Kumar', familyName: 'Dixit',
  jobTitle: ['Chief Technology Officer', 'Senior Mobile Architect', 'International Tech Leader'],
  description: 'Bharat Kumar Dixit is an International Tech Leader, Senior Mobile Architect, and CTO at Vigorus.ai, with a strong background in AI-native healthcare platforms and enterprise mobile architecture.',
  url: SITE_URL, image: OG_IMAGE,
  email: 'hello@bharatdixit.com',
  worksFor: { '@type': 'Organization', name: 'Vigorus.ai', url: 'https://vigorus.ai' },
  alumniOf: [
    { '@type': 'Organization', name: 'IBM' },
    { '@type': 'Organization', name: 'Clixlogix' },
  ],
  knowsAbout: ['Mobile Architecture', 'Flutter Development', 'AI in Healthcare', 'Clean Architecture', 'Enterprise Software', 'TypeScript', 'AWS Cloud', 'Zero Trust Security', 'Distributed Systems'],
  sameAs: [
    'https://www.linkedin.com/in/bharat-dixit-80573a2b9/',
    'https://github.com/bharatdixit',                // ← update if different
    'https://wa.me/919354795744',
  ],
  nationality: { '@type': 'Country', name: 'India' },
  founder: { '@type': 'NGO', name: 'Shree Kishori Priya Foundation', description: 'Old Age Home NGO in Vrindavan supporting abandoned senior citizens.', foundingDate: '2020' },
}

// ── JSON-LD: WebSite ──────────────────────────────────────────────
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Bharat Dixit Portfolio',
  description: 'Official portfolio of Bharat Kumar Dixit — CTO & Senior Mobile Architect',
  author: { '@id': `${SITE_URL}/#person` },
}

// ── JSON-LD: ProfilePage ──────────────────────────────────────────
const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: { '@id': `${SITE_URL}/#person` },
  url: SITE_URL,
  name: 'Bharat Kumar Dixit — Official Portfolio',
  dateModified: new Date().toISOString(),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, websiteSchema, profilePageSchema]) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-surface font-body text-on-surface selection:bg-primary/30">
        <div className="blueprint-bg" />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
