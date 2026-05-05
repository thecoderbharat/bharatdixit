import type { Metadata } from 'next'
import { WhitepaperVigorusAi } from '@/components/whitepapers/WhitepaperVigorusAi'

const SITE_URL = 'https://bharatdixit.com'

export const metadata: Metadata = {
  title: 'Vigorus AI Whitepaper — Intelligent Healthcare Infrastructure | Bharat Dixit',
  description:
    'A 35-page technical whitepaper by Bharat Kumar Dixit on Vigorus.ai — Voice-First EMR in 40+ languages, Blockchain PHR, ClaimIQ autonomous insurance claims, ABDM & NHCX-native integration. The complete AI healthcare platform blueprint.',
  keywords: [
    'Vigorus AI whitepaper', 'Vigorus.ai healthcare architecture', 'Bharat Dixit Vigorus',
    'AI healthcare India whitepaper', 'Voice EMR India', 'Blockchain PHR ABDM',
    'ClaimIQ NHCX insurance', 'ABDM NHCX integration architecture', 'AI clinical documentation India',
    'Bharat Kumar Dixit whitepaper', 'healthcare AI whitepaper 2026',
  ],
  alternates: { canonical: `${SITE_URL}/whitepapers/vigorus-ai` },
  openGraph: {
    title: 'Vigorus AI Whitepaper V11 | Bharat Kumar Dixit',
    description: '35-page AI healthcare whitepaper — Voice EMR, Blockchain PHR, ClaimIQ, ABDM & NHCX. Authored by Bharat Kumar Dixit, CTO at Vigorus.ai.',
    url: `${SITE_URL}/whitepapers/vigorus-ai`,
    type: 'article',
    images: [{ url: `${SITE_URL}/og/og-image.jpg`, width: 1200, height: 630, alt: 'Vigorus AI Whitepaper by Bharat Dixit' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vigorus AI Whitepaper | Bharat Dixit',
    description: 'Voice-First EMR, Blockchain PHR, Autonomous NHCX Claims — 35-page AI healthcare blueprint by Bharat Kumar Dixit.',
    images: [`${SITE_URL}/og/og-image.jpg`],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'ScholarlyArticle',
  headline: 'Vigorus AI: The Future of Intelligent Healthcare Infrastructure',
  description: 'A 35-page technical whitepaper on AI-native healthcare platform covering Voice-First EMR, Blockchain PHR, ClaimIQ, ABDM & NHCX integration.',
  author: { '@type': 'Person', name: 'Bharat Kumar Dixit', url: SITE_URL, jobTitle: 'CTO', worksFor: { '@type': 'Organization', name: 'Vigorus.ai' } },
  publisher: { '@type': 'Person', name: 'Bharat Kumar Dixit', url: SITE_URL },
  url: `${SITE_URL}/whitepapers/vigorus-ai`,
  inLanguage: 'en-GB',
  datePublished: '2026-01-01',
  about: ['AI Healthcare', 'Voice EMR', 'Blockchain PHR', 'ABDM', 'NHCX', 'India Health Tech'],
  numberOfPages: 35,
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',        item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Whitepapers', item: `${SITE_URL}/whitepapers` },
    { '@type': 'ListItem', position: 3, name: 'Vigorus AI',  item: `${SITE_URL}/whitepapers/vigorus-ai` },
  ],
}

export default function VigorusAiWhitepaperPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema]) }} />
      <WhitepaperVigorusAi />
    </>
  )
}
