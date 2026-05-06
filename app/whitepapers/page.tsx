import type { Metadata } from 'next'
import Link from 'next/link'
import { whitepapers } from '@/data/portfolio'
import { WhitepaperCard } from '@/components/whitepapers/WhitepaperCard'

const SITE_URL = 'https://bharatdixit.com'

export const metadata: Metadata = {
  title: 'Whitepapers by Bharat Dixit | Vigorus AI, SvasthaX & UK Banking Architecture',
  description:
    'Technical whitepapers authored by Bharat Kumar Dixit — Vigorus.ai AI healthcare infrastructure (35 pages), SvasthaX digital health platform, and UK Banking System Architecture. Expert insights on AI, mobile architecture, and fintech.',
  keywords: [
    'Bharat Dixit whitepaper', 'Vigorus AI whitepaper', 'SvasthaX whitepaper',
    'UK banking architecture whitepaper', 'AI healthcare whitepaper India',
    'Bharat Kumar Dixit research', 'ABDM NHCX architecture', 'mobile architecture whitepaper',
    'healthcare AI India', 'Open Banking PSD2 architecture',
  ],
  alternates: { canonical: `${SITE_URL}/whitepapers` },
  openGraph: {
    title: 'Whitepapers by Bharat Dixit | Vigorus AI, SvasthaX & UK Banking',
    description: 'Three major technical whitepapers authored by Bharat Kumar Dixit — AI healthcare, digital health, and UK banking architecture.',
    url: `${SITE_URL}/whitepapers`,
    images: [{ url: `${SITE_URL}/og/og-image.jpg`, width: 1200, height: 630, alt: 'Whitepapers by Bharat Dixit' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Whitepapers by Bharat Dixit',
    description: 'Vigorus AI whitepaper, SvasthaX digital health, UK Banking Architecture — authored by Bharat Kumar Dixit.',
    images: [`${SITE_URL}/og/og-image.jpg`],
  },
}

// JSON-LD: ItemList of scholarly articles
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Technical Whitepapers by Bharat Kumar Dixit',
  description: 'AI Healthcare, Digital Health, and Financial Systems Architecture — authored by Bharat Kumar Dixit, CTO at Vigorus.ai',
  url: `${SITE_URL}/whitepapers`,
  numberOfItems: whitepapers.length,
  author: {
    '@type': 'Person',
    name: 'Bharat Kumar Dixit',
    url: SITE_URL,
    jobTitle: 'Chief Technology Officer',
    worksFor: { '@type': 'Organization', name: 'Vigorus.ai' },
  },
  itemListElement: whitepapers.map((wp, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'ScholarlyArticle',
      '@id': wp.route ? `${SITE_URL}${wp.route}` : `${SITE_URL}/whitepapers#${wp.id}`,
      name: wp.title,
      headline: wp.title,
      description: wp.description,
      author: { '@type': 'Person', name: 'Bharat Kumar Dixit', url: SITE_URL },
      publisher: { '@type': 'Person', name: 'Bharat Kumar Dixit', url: SITE_URL },
      url: wp.route ? `${SITE_URL}${wp.route}` : (wp.pdfUrl !== '#' ? wp.pdfUrl : `${SITE_URL}/whitepapers#${wp.id}`),
      inLanguage: 'en-GB',
    },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',        item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Whitepapers', item: `${SITE_URL}/whitepapers` },
  ],
}

export default function WhitepapersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([itemListSchema, breadcrumbSchema]) }} />

      <div className="pt-32 pb-24">
        {/* ── HEADER ── */}
        <header className="max-w-screen-2xl mx-auto px-6 md:px-24 mb-20">
          <span className="text-gold font-headline font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">
            Technical Research · 2025–2026
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-headline text-on-surface tracking-tighter leading-none max-w-4xl mb-6">
            Whitepapers &amp;{' '}
            <span className="text-primary-container block md:inline">Technical Insights</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            Three comprehensive technical whitepapers authored by{' '}
            <strong className="text-on-surface font-semibold">Bharat Kumar Dixit</strong> — covering
            AI-native healthcare infrastructure, digital health platforms for India, and UK banking
            system architecture.
          </p>

          {/* Author badge */}
          <div className="mt-8 inline-flex items-center gap-4 bg-surface-container border border-white/5
                          rounded-xl px-6 py-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-neon flex items-center
                            justify-center font-headline font-bold text-sm text-surface">
              BD
            </div>
            <div>
              <div className="font-headline font-bold text-sm text-white">Bharat Kumar Dixit</div>
              <div className="text-on-surface-variant text-xs">CTO, Vigorus.ai · Senior Architect, IBM</div>
            </div>
            <div className="ml-4 pl-4 border-l border-white/10">
              <div className="font-headline font-bold text-2xl text-primary">{whitepapers.length}</div>
              <div className="text-[10px] uppercase tracking-widest text-on-surface-variant">Published</div>
            </div>
          </div>
        </header>

        {/* ── WHITEPAPER CARDS ── */}
        <section
          className="max-w-screen-2xl mx-auto px-6 md:px-24"
          aria-label="Whitepaper list by Bharat Dixit"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitepapers.map((paper, i) => (
              <WhitepaperCard key={paper.id} paper={paper} delay={i * 0.1} />
            ))}
          </div>
        </section>

        {/* ── CUSTOM RESEARCH CTA ── */}
        <section className="max-w-screen-2xl mx-auto px-6 md:px-24 mt-24">
          <div className="bg-surface-container-low border border-white/5 p-10 md:p-14 rounded-2xl
                          flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-headline font-bold text-white mb-4 tracking-tight">
                Custom Research &amp; Architecture Reviews
              </h2>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                In addition to published whitepapers, Bharat Kumar Dixit provides bespoke technical audits
                and architecture reviews for healthcare startups, fintech companies, and enterprise teams.
                Reach out to discuss your system&apos;s next evolution.
              </p>
            </div>
            <Link
              href="/#contact"
              className="flex-shrink-0 px-10 py-4 bg-transparent border border-gold text-gold
                         font-headline font-bold text-xs uppercase tracking-widest
                         hover:bg-gold hover:text-surface transition-all duration-300 rounded-xl"
            >
              Inquire for Research
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
