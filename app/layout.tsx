import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'

const SITE_URL = 'https://bharatdixit.com'
const OG_IMAGE = `${SITE_URL}/og/og-image.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Bharat Dixit | CTO, Senior Mobile Architect & International Tech Leader',
    template: '%s | Bharat Dixit',
  },
  description:
    'Bharat Kumar Dixit — International Tech Leader, Senior Mobile Application Architect at IBM, and CTO at Vigorus.ai. Expert in AI-native healthcare platforms, Flutter architecture, enterprise mobile systems, and digital health innovation.',
  keywords: [
    'Bharat Dixit', 'Bharat Kumar Dixit', 'Bharat Dixit CTO', 'Bharat Dixit IBM',
    'Bharat Dixit Vigorus', 'Bharat Dixit mobile architect', 'Bharat Dixit portfolio',
    'Bharat Dixit India', 'Bharat Dixit whitepaper', 'Senior Mobile Application Architect',
    'International Tech Leader India', 'CTO Vigorus.ai', 'Flutter Expert India',
    'AI Healthcare Architecture', 'IBM Mobile Architect India', 'HackIndia Judge',
    'NIT Kolkata Judge', 'Shree Kishori Priya Foundation', 'SvasthaX whitepaper',
    'Vigorus AI whitepaper', 'UK banking architecture', 'ABDM healthcare India',
  ],
  authors: [{ name: 'Bharat Kumar Dixit', url: SITE_URL }],
  creator: 'Bharat Kumar Dixit',
  publisher: 'Bharat Kumar Dixit',
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'profile',
    firstName: 'Bharat Kumar', lastName: 'Dixit', username: 'bharatdixit', gender: 'male',
    url: SITE_URL,
    siteName: 'Bharat Dixit — Official Portfolio',
    title: 'Bharat Dixit | CTO & Senior Mobile Architect',
    description:
      'International Tech Leader, Senior Mobile Architect at IBM, and CTO at Vigorus.ai. Author of whitepapers on AI healthcare, SvasthaX, and UK banking architecture.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Bharat Kumar Dixit — CTO & Senior Mobile Architect', type: 'image/jpeg' }],
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bharatdixit',
    creator: '@bharatdixit',
    title: 'Bharat Dixit | CTO & Senior Mobile Architect',
    description: 'International Tech Leader. Senior Mobile Architect at IBM. CTO at Vigorus.ai.',
    images: [OG_IMAGE],
  },
  icons: {
    icon: [
      { url: '/favicon.ico',                        sizes: 'any' },
      { url: '/favicon/favicon-16x16.png',          sizes: '16x16',   type: 'image/png' },
      { url: '/favicon/favicon-32x32.png',          sizes: '32x32',   type: 'image/png' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  verification: {
    google: 'PASTE_GOOGLE_SEARCH_CONSOLE_CODE_HERE',
  },
}

// ── JSON-LD schemas ───────────────────────────────────────────────
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Bharat Kumar Dixit',
  givenName: 'Bharat Kumar', familyName: 'Dixit',
  alternateName: ['Bharat Dixit', 'Bharat K. Dixit'],
  jobTitle: ['Chief Technology Officer', 'Senior Mobile Application Architect', 'International Tech Leader'],
  description: 'Bharat Kumar Dixit is an International Tech Leader, Senior Mobile Application Architect at IBM, and CTO at Vigorus.ai. Expert in AI-native healthcare, Flutter architecture, enterprise mobile systems, ABDM integration, and digital health innovation. Judge at HackIndia, NIT Kolkata, NIT Delhi, Chitkara University, and ABES Hackathon.',
  url: SITE_URL,
  image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
  email: 'hello@bharatdixit.com',
  telephone: '+919354795744',
  worksFor: { '@type': 'Organization', name: 'Vigorus.ai', url: 'https://vigorus.ai' },
  alumniOf: [{ '@type': 'Organization', name: 'IBM' }],
  knowsAbout: ['Mobile Architecture', 'Flutter Development', 'AI in Healthcare', 'Clean Architecture', 'Enterprise Software', 'TypeScript', 'AWS Cloud', 'Zero Trust Security', 'Distributed Systems', 'ABDM Integration', 'NHCX Healthcare Claims', 'Blockchain PHR', 'UK Banking Architecture', 'Open Banking PSD2'],
  sameAs: ['https://www.linkedin.com/in/bharat-dixit-80573a2b9/', 'https://github.com/bharatdixit', 'https://wa.me/919354795744'],
  nationality: { '@type': 'Country', name: 'India' },
  founder: { '@type': 'NGO', name: 'Shree Kishori Priya Foundation', description: 'Old Age Home NGO in Vrindavan.', foundingDate: '2020' },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Bharat Dixit — Official Portfolio',
  description: 'Official portfolio of Bharat Kumar Dixit — CTO, Senior Mobile Architect, and International Tech Leader',
  author: { '@id': `${SITE_URL}/#person` },
  inLanguage: 'en-GB',
  copyrightYear: 2026,
  copyrightHolder: { '@id': `${SITE_URL}/#person` },
}

const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${SITE_URL}/#profilepage`,
  mainEntity: { '@id': `${SITE_URL}/#person` },
  url: SITE_URL,
  name: 'Bharat Kumar Dixit — Official Portfolio',
  dateModified: new Date().toISOString(),
  dateCreated: '2024-01-01',
  inLanguage: 'en-GB',
  author: { '@id': `${SITE_URL}/#person` },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',        item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Whitepapers', item: `${SITE_URL}/whitepapers` },
    { '@type': 'ListItem', position: 3, name: 'Gallery',     item: `${SITE_URL}/gallery` },
    { '@type': 'ListItem', position: 4, name: 'Media',       item: `${SITE_URL}/media` },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, websiteSchema, profilePageSchema, breadcrumbSchema]) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-surface font-body text-on-surface selection:bg-primary/30">
        <div className="blueprint-bg" />
        <Header />
        <main className="relative z-10" id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
