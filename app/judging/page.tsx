import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { judgingEvents } from '@/data/portfolio'
import { cld } from '@/lib/cloudinary'

const SITE_URL = 'https://bharatdixit.com'

export const metadata: Metadata = {
  title: 'Judging & Mentorship Events | Bharat Dixit',
  description:
    'Bharat Kumar Dixit as technical jury member at HackIndia, NIT Kolkata, NIT Delhi, Chitkara University, ABES Hackathon. 500+ projects evaluated across national and university-level events.',
  keywords: [
    'Bharat Dixit judge', 'Bharat Dixit HackIndia judge',
    'Bharat Dixit NIT Kolkata judge', 'Bharat Dixit NIT Delhi',
    'Bharat Dixit Chitkara University', 'Bharat Dixit ABES Hackathon',
    'Bharat Kumar Dixit mentor', 'Bharat Dixit hackathon judge India',
    'International Tech Lead Judge India',
  ],
  alternates: { canonical: `${SITE_URL}/judging` },
  openGraph: {
    title: 'Judging & Mentorship Events | Bharat Dixit',
    description:
      'Bharat Kumar Dixit as technical jury member at HackIndia, NIT Kolkata, NIT Delhi, Chitkara University & ABES Hackathon.',
    url: `${SITE_URL}/judging`,
    images: [{ url: `${SITE_URL}/og/og-image.jpg`, width: 1200, height: 630, alt: 'Bharat Dixit Judging Events' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Judging & Mentorship | Bharat Dixit',
    description: 'Technical jury member at HackIndia, NIT Kolkata, NIT Delhi, Chitkara & ABES Hackathon.',
    images: [`${SITE_URL}/og/og-image.jpg`],
  },
}

// JSON-LD: ItemList of all judging events
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Judging & Mentorship Events — Bharat Kumar Dixit',
  description: 'Technical jury appearances by Bharat Kumar Dixit at national and university-level events across India.',
  numberOfItems: judgingEvents.length,
  itemListElement: judgingEvents.map((e, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Event',
      name: `${e.role} — ${e.institution}`,
      description: e.shortDesc,
      url: `${SITE_URL}/judging/${e.id}`,
      organizer: { '@type': 'Organization', name: e.institution },
      performer: {
        '@type': 'Person',
        name: 'Bharat Kumar Dixit',
        url: SITE_URL,
      },
    },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',    item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Judging', item: `${SITE_URL}/judging` },
  ],
}

const TYPE_STYLES: Record<string, { border: string; bg: string; text: string }> = {
  national:      { border: 'border-cyan-400/30', bg: 'bg-cyan-400/10',  text: 'text-cyan-400' },
  university:    { border: 'border-primary/30',  bg: 'bg-primary/10',   text: 'text-primary' },
  international: { border: 'border-secondary/30',bg: 'bg-secondary/10', text: 'text-secondary' },
}

export default function JudgingIndexPage() {
  const national   = judgingEvents.filter(e => e.type === 'national')
  const university = judgingEvents.filter(e => e.type === 'university')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([itemListSchema, breadcrumbSchema]) }}
      />

      <div className="min-h-screen pb-24 pt-28">

        {/* ── HEADER ── */}
        <header className="max-w-7xl mx-auto px-8 mb-20">
          <Link
            href="/#judging"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary
                       font-headline font-bold text-[10px] uppercase tracking-widest
                       transition-colors mb-10"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Back to Portfolio
          </Link>

          <span className="metallic-text font-headline font-bold tracking-[0.3em] uppercase text-xs block mb-4">
            Academic &amp; National Leadership
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-white leading-none mb-6">
            Judging &amp;<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
              Mentorship
            </span>
          </h1>
          <p className="text-on-surface-variant text-lg font-light max-w-2xl leading-relaxed mb-14">
            Invited as a technical jury member and mentor across India&apos;s top engineering
            institutions and national hackathons. Click any event to view photos, videos,
            and full details.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 max-w-xl">
            {[
              { value: `${judgingEvents.length}+`, label: 'Events Judged' },
              { value: '500+',                     label: 'Projects Evaluated' },
              { value: '70+',                      label: 'Institutions' },
            ].map(stat => (
              <div
                key={stat.label}
                className="bg-surface-container border border-white/5 rounded-2xl px-5 py-4 text-center"
              >
                <div className="font-headline font-bold text-3xl text-primary mb-1">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </header>

        {/* ── NATIONAL EVENTS ── */}
        {national.length > 0 && (
          <section className="max-w-7xl mx-auto px-8 mb-20">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] font-headline font-bold uppercase tracking-[0.3em] text-cyan-400">
                National Events
              </span>
              <div className="flex-1 h-px bg-white/5" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {national.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        )}

        {/* ── UNIVERSITY EVENTS ── */}
        {university.length > 0 && (
          <section className="max-w-7xl mx-auto px-8">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] font-headline font-bold uppercase tracking-[0.3em] text-primary">
                University Events
              </span>
              <div className="flex-1 h-px bg-white/5" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {university.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        )}

      </div>
    </>
  )
}

// ── Event Card Component ──────────────────────────────────────────
function EventCard({ event }: { event: typeof judgingEvents[number] }) {
  const style = TYPE_STYLES[event.type] ?? TYPE_STYLES.university

  return (
    <Link
      href={`/judging/${event.id}`}
      className="group bg-surface-container rounded-2xl border border-white/5
                 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5
                 transition-all duration-300 overflow-hidden block"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {event.imagePath ? (
          <Image
            src={cld(event.imagePath, 'w_600,h_384,c_fill,g_face')}
            alt={`Bharat Kumar Dixit at ${event.institution}`}
            fill
            className="object-cover grayscale group-hover:grayscale-0
                       group-hover:scale-105 transition-all duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div
            className="w-full h-full group-hover:opacity-80 transition-opacity relative"
            style={{ background: `linear-gradient(135deg, ${event.placeholderGradient})` }}
          >
            <div className="absolute top-3 left-3 w-5 h-5 border-l border-t border-primary/20" />
            <div className="absolute top-3 right-12 w-5 h-5 border-r border-t border-primary/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/10 font-headline font-bold text-lg uppercase tracking-widest text-center px-6">
                {event.institution}
              </span>
            </div>
          </div>
        )}

        {/* Year badge */}
        <div className="absolute top-3 right-3 bg-surface-lowest/80 backdrop-blur-sm
                        border border-white/10 rounded-lg px-2.5 py-1">
          <span className="text-[10px] font-headline font-bold text-primary tracking-wider">
            {event.year}
          </span>
        </div>

        {/* Type badge */}
        <div className="absolute top-3 left-3">
          <span className={`text-[9px] font-headline font-bold uppercase tracking-widest
                           px-2.5 py-1 rounded-lg border backdrop-blur-sm
                           ${style.bg} ${style.border} ${style.text}`}>
            {event.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="metallic-text font-bold text-[10px] uppercase tracking-widest mb-2">
          {event.role}
        </div>
        <h2 className="font-headline font-bold text-lg text-white leading-tight mb-2
                       group-hover:text-primary transition-colors">
          {event.institution}
        </h2>
        <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2 mb-4">
          {event.shortDesc}
        </p>

        <div className="flex items-center justify-between">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {event.tags.slice(0, 2).map(tag => (
              <span
                key={tag}
                className="text-[9px] font-headline font-bold uppercase tracking-wider
                           text-on-surface-variant border border-outline-variant/40
                           px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Arrow */}
          <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest
                          font-bold text-on-surface-variant group-hover:text-primary
                          transition-colors flex-shrink-0">
            View Event
            <svg
              width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}
