import type { Metadata } from 'next'
import { cldPdf } from '@/lib/cloudinary'
import Link from 'next/link'

const SITE_URL = 'https://bharatdixit.com'

export const metadata: Metadata = {
  title: 'SvasthaX — Reimagining India\'s Digital Health Ecosystem | Bharat Dixit',
  description:
    'A strategic and technical whitepaper by Bharat Kumar Dixit on SvasthaX — a next-generation digital health platform built for India\'s scale. Covers interoperable health records, AI-powered diagnostics, ABDM-native architecture, and multilingual patient engagement.',
  keywords: [
    'SvasthaX whitepaper', 'SvasthaX Bharat Dixit', 'India digital health platform',
    'ABDM interoperability', 'AI diagnostics India', 'digital health architecture India',
    'Bharat Dixit SvasthaX', 'India health records platform', 'multilingual health AI',
  ],
  alternates: { canonical: `${SITE_URL}/whitepapers/svasthax` },
  openGraph: {
    title: 'SvasthaX Whitepaper | Bharat Kumar Dixit',
    description: 'Technical whitepaper on SvasthaX — India\'s next-generation digital health platform. Authored by Bharat Dixit.',
    url: `${SITE_URL}/whitepapers/svasthax`,
    images: [{ url: `${SITE_URL}/og/og-image.jpg`, width: 1200, height: 630, alt: 'SvasthaX Whitepaper by Bharat Dixit' }],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'ScholarlyArticle',
  headline: "SvasthaX — Reimagining India's Digital Health Ecosystem",
  description: "A strategic and technical whitepaper on a next-generation digital health platform built for India's scale.",
  author: { '@type': 'Person', name: 'Bharat Kumar Dixit', url: SITE_URL, jobTitle: 'CTO, Vigorus.ai' },
  publisher: { '@type': 'Person', name: 'Bharat Kumar Dixit', url: SITE_URL },
  url: `${SITE_URL}/whitepapers/svasthax`,
  inLanguage: 'en-GB',
  about: ['Digital Health', 'ABDM', 'AI Diagnostics', 'India Healthcare'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',        item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Whitepapers', item: `${SITE_URL}/whitepapers` },
    { '@type': 'ListItem', position: 3, name: 'SvasthaX',    item: `${SITE_URL}/whitepapers/svasthax` },
  ],
}

const FEATURES = [
  { icon: '🏥', title: 'Unified Health Records', desc: 'Interoperable patient records across all care settings — ABDM-native, FHIR R4 compliant, patient-owned and cryptographically secured.' },
  { icon: '🧠', title: 'AI-Powered Diagnostics', desc: 'Embedded diagnostic AI surfacing clinical decision support, drug interactions, and red-flag alerts directly within the clinical workflow.' },
  { icon: '🌐', title: 'Multilingual Engagement', desc: 'Patient-facing interfaces in 22+ Indian languages — removing the literacy and language barriers that prevent healthcare access at scale.' },
  { icon: '🔗', title: 'ABDM-Native Architecture', desc: 'Built from the ground up on India\'s Ayushman Bharat Digital Mission infrastructure — ABHA identity, HIE-CM consent, and health repository integration.' },
  { icon: '📊', title: 'Population Health Analytics', desc: 'Real-time population health dashboards for government health bodies — enabling proactive disease surveillance and resource allocation.' },
  { icon: '💊', title: 'Digital Pharmacy Integration', desc: 'End-to-end digital prescription lifecycle — from clinical note to pharmacy fulfilment, with counterfeit drug verification.' },
]

const PILLARS = [
  { num: '01', title: 'Access',         desc: 'Making quality healthcare reachable for every Indian — urban or rural, literate or not.' },
  { num: '02', title: 'Interoperability', desc: 'A single patient record that travels with them across every provider and care setting.' },
  { num: '03', title: 'Intelligence',   desc: 'AI that assists clinicians, not replaces them — surfacing insights at the point of care.' },
  { num: '04', title: 'Trust',          desc: 'Patient-controlled data with cryptographic consent — privacy as a foundational right.' },
]

// Set this to your Cloudinary public ID once you upload the PDF
// e.g. 'bharatdixit/whitepapers/svasthax'
const pdfPublicId: string | null = null

export default function SvasthaXPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema]) }} />

      <div className="min-h-screen pb-24">
        {/* ── HERO ── */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 60% 0%, rgba(212,175,55,0.08) 0%, transparent 60%)' }} />
          <div className="max-w-screen-2xl mx-auto px-6 md:px-24">
            <Link href="/whitepapers"
              className="inline-flex items-center gap-2 text-on-surface-variant hover:text-gold
                         font-headline font-bold text-[10px] uppercase tracking-widest transition-colors mb-10">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
              All Whitepapers
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold
                                   font-headline font-bold text-[10px] uppercase tracking-widest">
                    Digital Health
                  </span>
                  <span className="text-on-surface-variant text-[10px] font-body">2025</span>
                </div>
                <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter text-white leading-tight mb-6">
                  SvasthaX
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-400">
                    India&apos;s Digital Health Future
                  </span>
                </h1>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  A strategic and technical whitepaper exploring a next-generation digital health platform
                  purpose-built for India&apos;s scale — 1.4 billion people, 22 languages, and the world&apos;s
                  largest government health digitisation programme.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={pdfPublicId ? cldPdf(pdfPublicId) : '#'} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-surface font-headline
                               font-bold uppercase tracking-widest text-xs rounded-xl hover:brightness-110
                               active:scale-95 transition-all shadow-lg shadow-gold/20">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Download Whitepaper
                  </a>
                  <Link href="/whitepapers"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white
                               font-headline font-bold uppercase tracking-widest text-xs rounded-xl
                               hover:border-gold/40 transition-colors">
                    View All Papers
                  </Link>
                </div>
              </div>

              {/* Meta card */}
              <div className="bg-surface-container border border-white/5 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-white/5"
                  style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.08), rgba(180,197,255,0.04))' }}>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-gold font-bold mb-3">Whitepaper Details</div>
                  {[
                    ['Author',   'Bharat Kumar Dixit'],
                    ['Focus',    'India Digital Health Platform'],
                    ['Domain',   'Healthcare · AI · ABDM'],
                    ['Language', 'English'],
                    ['Year',     '2025'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between py-2.5 border-b border-white/5 last:border-0">
                      <span className="text-xs text-on-surface-variant">{k}</span>
                      <span className="text-xs font-headline font-bold text-white">{v}</span>
                    </div>
                  ))}
                </div>
                <div className="p-6">
                  <div className="text-[9px] uppercase tracking-[0.2em] text-on-surface-variant font-bold mb-3">Key Topics</div>
                  <div className="flex flex-wrap gap-2">
                    {['ABDM Integration', 'AI Diagnostics', 'Multilingual UX', 'FHIR R4', 'Population Health', 'Digital Pharmacy', 'Patient Privacy', 'Interoperability'].map(t => (
                      <span key={t} className="px-2.5 py-1 bg-surface-low border border-white/5 rounded-lg
                                               text-[9px] font-headline font-bold uppercase tracking-wider text-on-surface-variant">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PILLARS ── */}
        <section className="py-16 bg-surface-container-low border-y border-white/5">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
              {PILLARS.map((p) => (
                <div key={p.num} className="bg-surface-container p-8">
                  <div className="font-headline font-bold text-3xl text-gold mb-3">{p.num}</div>
                  <div className="font-headline font-bold text-base text-white mb-2">{p.title}</div>
                  <div className="text-on-surface-variant text-sm leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="py-24">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-gold font-headline font-bold tracking-[0.3em] uppercase text-xs block mb-4">
                  About This Whitepaper
                </span>
                <h2 className="font-headline text-4xl font-bold text-white tracking-tight mb-6">
                  The Problem SvasthaX Solves
                </h2>
                <p className="text-on-surface-variant text-base leading-relaxed mb-4">
                  India&apos;s healthcare system serves 1.4 billion people across vastly different geographies,
                  languages, and economic contexts. Despite ABDM laying the digital foundation, fragmentation
                  persists — patient records don&apos;t travel, diagnostics are inaccessible to rural populations,
                  and care coordination remains largely manual.
                </p>
                <p className="text-on-surface-variant text-base leading-relaxed mb-4">
                  SvasthaX is architected by{' '}
                  <strong className="text-white font-semibold">Bharat Kumar Dixit</strong> as a platform that
                  sits on top of ABDM&apos;s infrastructure and makes healthcare genuinely accessible — interoperable
                  records, AI-assisted diagnostics, multilingual interfaces, and seamless insurance claims.
                </p>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  This whitepaper outlines the technical architecture, platform components, integration
                  strategy, and the product vision for scaling India&apos;s digital health transformation.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { v: '1.4B', l: 'Target population', s: 'India-scale design' },
                  { v: '22+', l: 'Languages supported', s: 'Multilingual by default' },
                  { v: '100%', l: 'ABDM-native', s: 'Not a compliance add-on' },
                ].map((s, i) => (
                  <div key={i} className="bg-surface-container border border-white/5 rounded-xl p-6 flex items-center gap-6">
                    <div className="font-headline font-bold text-4xl text-gold">{s.v}</div>
                    <div>
                      <div className="font-headline font-bold text-base text-white">{s.l}</div>
                      <div className="text-on-surface-variant text-sm">{s.s}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-24 bg-surface-container-low border-y border-white/5">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-24">
            <div className="text-center mb-14">
              <span className="text-gold font-headline font-bold tracking-[0.3em] uppercase text-xs block mb-4">Platform Components</span>
              <h2 className="font-headline text-4xl font-bold text-white tracking-tight">
                Six Core Platform Capabilities
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((f) => (
                <div key={f.title}
                  className="bg-surface-container rounded-xl border border-white/5 p-6
                             hover:border-gold/20 transition-colors group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{f.icon}</div>
                  <h3 className="font-headline font-bold text-base text-white mb-2 group-hover:text-gold transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AUTHOR + CTA ── */}
        <section className="py-24">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-24 text-center">
            <div className="max-w-2xl mx-auto bg-surface-container border border-white/5 rounded-2xl p-10 md:p-14">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-amber-500 flex items-center
                              justify-center font-headline font-bold text-lg text-surface mx-auto mb-6">
                BD
              </div>
              <span className="text-gold font-headline font-bold tracking-[0.3em] uppercase text-xs block mb-4">Authored By</span>
              <h2 className="font-headline text-3xl font-bold text-white tracking-tight mb-3">Bharat Kumar Dixit</h2>
              <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
                CTO at Vigorus.ai · Senior Mobile Application Architect at IBM · International Tech Leader
              </p>
              <a href={pdfPublicId ? cldPdf(pdfPublicId) : '#'} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-surface font-headline
                           font-bold uppercase tracking-widest text-xs rounded-xl hover:brightness-110
                           active:scale-95 transition-all shadow-lg shadow-gold/20">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download SvasthaX Whitepaper
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
