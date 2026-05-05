import type { Metadata } from 'next'
import Link from 'next/link'

const SITE_URL = 'https://bharatdixit.com'

export const metadata: Metadata = {
  title: 'UK Banking System Architecture Whitepaper | Bharat Kumar Dixit',
  description:
    'A technical whitepaper by Bharat Kumar Dixit examining the UK\'s modern banking infrastructure — Open Banking APIs, PSD2 compliance, real-time payment rails (Faster Payments, CHAPS), cloud-native core banking migration, and a blueprint for resilient financial systems.',
  keywords: [
    'UK banking architecture whitepaper', 'Bharat Dixit UK banking', 'Open Banking API architecture',
    'PSD2 compliance architecture', 'Faster Payments architecture', 'CHAPS real-time payments',
    'cloud-native core banking', 'UK fintech architecture', 'banking system whitepaper',
    'Bharat Kumar Dixit fintech', 'mobile banking architecture UK',
  ],
  alternates: { canonical: `${SITE_URL}/whitepapers/uk-banking` },
  openGraph: {
    title: 'UK Banking System Architecture | Bharat Kumar Dixit',
    description: 'Technical analysis of UK banking infrastructure — Open Banking, PSD2, Faster Payments, CHAPS, and cloud-native core banking. Authored by Bharat Dixit.',
    url: `${SITE_URL}/whitepapers/uk-banking`,
    images: [{ url: `${SITE_URL}/og/og-image.jpg`, width: 1200, height: 630, alt: 'UK Banking Architecture Whitepaper by Bharat Dixit' }],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'ScholarlyArticle',
  headline: 'UK Banking System Architecture — A Technical Analysis',
  description: "A detailed architectural analysis of the UK's modern banking infrastructure — Open Banking, PSD2, Faster Payments, CHAPS, and cloud-native core banking migration.",
  author: { '@type': 'Person', name: 'Bharat Kumar Dixit', url: SITE_URL, jobTitle: 'CTO, Vigorus.ai' },
  publisher: { '@type': 'Person', name: 'Bharat Kumar Dixit', url: SITE_URL },
  url: `${SITE_URL}/whitepapers/uk-banking`,
  inLanguage: 'en-GB',
  about: ['UK Banking', 'Open Banking', 'PSD2', 'FinTech Architecture', 'Payment Systems'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',               item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Whitepapers',        item: `${SITE_URL}/whitepapers` },
    { '@type': 'ListItem', position: 3, name: 'UK Banking Architecture', item: `${SITE_URL}/whitepapers/uk-banking` },
  ],
}

const COMPONENTS = [
  { icon: '🏦', title: 'Open Banking API Layer', desc: 'Technical breakdown of the UK\'s Open Banking Standard — API specifications, consent architecture, TPP (Third Party Provider) integration patterns, and the FCA regulatory sandbox.' },
  { icon: '📜', title: 'PSD2 Compliance Architecture', desc: 'Implementation blueprint for PSD2 — Strong Customer Authentication (SCA), TLS certificate management, dynamic linking, and the technical requirements for Account Information and Payment Initiation Services.' },
  { icon: '⚡', title: 'Real-Time Payment Rails', desc: 'Deep-dive into Faster Payments Service (FPS), CHAPS for high-value same-day settlement, and the New Payments Architecture (NPA) — the ISO 20022-based infrastructure replacing legacy rails.' },
  { icon: '☁️', title: 'Cloud-Native Core Banking', desc: 'Architecture patterns for migrating legacy core banking systems to cloud-native infrastructure — strangler fig patterns, event sourcing, CQRS, and the technical challenges of zero-downtime migration.' },
  { icon: '🔒', title: 'Security & Resilience', desc: 'UK banking\'s operational resilience requirements, Critical Third Party (CTP) framework, cyber security obligations under the Bank of England\'s CBEST regime, and zero-trust network architecture.' },
  { icon: '📱', title: 'Mobile Banking Architecture', desc: 'Mobile-first banking architecture patterns — biometric authentication, push payment notifications, offline resilience, and the technical stack behind leading UK challenger banks.' },
]

const TIMELINE = [
  { year: '2018', event: 'Open Banking Standard launched', detail: 'CMA9 banks mandated to implement Open Banking APIs' },
  { year: '2019', event: 'PSD2 Strong Customer Authentication', detail: 'SCA requirements enforced across UK payment services' },
  { year: '2021', event: 'New Payments Architecture announced', detail: 'Pay.UK publishes NPA blueprint — ISO 20022 migration' },
  { year: '2023', event: 'CBDC Research intensifies', detail: 'Bank of England advances digital pound consultation' },
  { year: '2025', event: 'Smart Data regime expansion', detail: 'Open Finance extending to mortgages, pensions, and investments' },
]

export default function UKBankingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema]) }} />

      <div className="min-h-screen pb-24">
        {/* ── HERO ── */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 30% 0%, rgba(180,197,255,0.08) 0%, transparent 60%)' }} />
          <div className="max-w-screen-2xl mx-auto px-6 md:px-24">
            <Link href="/whitepapers"
              className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary
                         font-headline font-bold text-[10px] uppercase tracking-widest transition-colors mb-10">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
              All Whitepapers
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary
                                   font-headline font-bold text-[10px] uppercase tracking-widest">
                    FinTech
                  </span>
                  <span className="text-on-surface-variant text-[10px] font-body">2025</span>
                </div>
                <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter text-white leading-tight mb-6">
                  UK Banking
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                    System Architecture
                  </span>
                </h1>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  A detailed architectural whitepaper by{' '}
                  <strong className="text-white font-semibold">Bharat Kumar Dixit</strong> examining the
                  technical foundations of the UK&apos;s world-leading banking infrastructure — Open Banking,
                  PSD2, real-time payment rails, and the path to cloud-native core banking.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary font-headline
                               font-bold uppercase tracking-widest text-xs rounded-xl hover:brightness-110
                               active:scale-95 transition-all shadow-lg shadow-primary/20">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Download Whitepaper
                  </a>
                  <Link href="/whitepapers"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white
                               font-headline font-bold uppercase tracking-widest text-xs rounded-xl
                               hover:border-primary/40 transition-colors">
                    View All Papers
                  </Link>
                </div>
              </div>

              {/* Meta card */}
              <div className="bg-surface-container border border-white/5 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-white/5"
                  style={{ background: 'linear-gradient(135deg, rgba(180,197,255,0.08), rgba(0,210,255,0.04))' }}>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-primary font-bold mb-3">Whitepaper Details</div>
                  {[
                    ['Author',    'Bharat Kumar Dixit'],
                    ['Focus',     'UK Banking Infrastructure'],
                    ['Domain',    'FinTech · Open Banking · PSD2'],
                    ['Language',  'English'],
                    ['Year',      '2025'],
                    ['Jurisdiction', 'United Kingdom'],
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
                    {['Open Banking', 'PSD2', 'Faster Payments', 'CHAPS', 'ISO 20022', 'CBEST', 'NPA', 'Cloud-Native Core Banking', 'SCA'].map(t => (
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

        {/* ── STATS BAR ── */}
        <div className="bg-surface-container-low border-y border-white/5">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-24">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { v: '£2.5T', l: 'UK payments volume annually', s: 'Faster Payments + CHAPS' },
                { v: '9', l: 'CMA9 mandated banks', s: 'Open Banking compliance' },
                { v: '7M+', l: 'Open Banking API calls/month', s: 'As of 2024' },
                { v: '6', l: 'Architecture components', s: 'Covered in this whitepaper' },
              ].map((s, i) => (
                <div key={i} className={`py-7 px-4 text-center ${i < 3 ? 'border-r border-white/5' : ''}`}>
                  <div className="text-3xl font-headline font-bold text-neon mb-1">{s.v}</div>
                  <div className="text-xs font-headline font-bold text-on-surface uppercase tracking-wide mb-0.5">{s.l}</div>
                  <div className="text-[11px] text-on-surface-variant">{s.s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── COMPONENTS ── */}
        <section className="py-24">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-24">
            <div className="text-center mb-14">
              <span className="text-primary font-headline font-bold tracking-[0.3em] uppercase text-xs block mb-4">
                Architecture Components
              </span>
              <h2 className="font-headline text-4xl font-bold text-white tracking-tight">
                Six Areas of Analysis
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMPONENTS.map((c) => (
                <div key={c.title}
                  className="bg-surface-container rounded-xl border border-white/5 p-6
                             hover:border-primary/20 transition-colors group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{c.icon}</div>
                  <h3 className="font-headline font-bold text-base text-white mb-3 group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section className="py-24 bg-surface-container-low border-y border-white/5">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-24">
            <div className="mb-14">
              <span className="text-primary font-headline font-bold tracking-[0.3em] uppercase text-xs block mb-4">
                Context
              </span>
              <h2 className="font-headline text-4xl font-bold text-white tracking-tight">
                UK Banking&apos;s Digital Evolution
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent" />
              <div className="space-y-8">
                {TIMELINE.map((t) => (
                  <div key={t.year} className="flex gap-8 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-surface-container border-2 border-primary/40
                                    flex items-center justify-center z-10">
                      <span className="font-headline font-bold text-xs text-primary">{t.year}</span>
                    </div>
                    <div className="bg-surface-container rounded-xl border border-white/5 p-5 flex-1">
                      <h3 className="font-headline font-bold text-sm text-white mb-1">{t.event}</h3>
                      <p className="text-on-surface-variant text-xs leading-relaxed">{t.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── AUTHOR + CTA ── */}
        <section className="py-24">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-24 text-center">
            <div className="max-w-2xl mx-auto bg-surface-container border border-white/5 rounded-2xl p-10 md:p-14">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-neon flex items-center
                              justify-center font-headline font-bold text-lg text-surface mx-auto mb-6">
                BD
              </div>
              <span className="text-primary font-headline font-bold tracking-[0.3em] uppercase text-xs block mb-4">Authored By</span>
              <h2 className="font-headline text-3xl font-bold text-white tracking-tight mb-3">Bharat Kumar Dixit</h2>
              <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
                CTO at Vigorus.ai · Senior Mobile Application Architect at IBM · International Tech Leader
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-on-primary font-headline
                           font-bold uppercase tracking-widest text-xs rounded-xl hover:brightness-110
                           active:scale-95 transition-all shadow-lg shadow-primary/20">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download UK Banking Whitepaper
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
