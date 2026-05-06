import type { Metadata } from 'next'
import { judgingEvents } from '@/data/portfolio'
import { JudgingEventPage } from './EventPage'

const SITE_URL = 'https://bharatdixit.com'

// ── Dynamic metadata per event ────────────────────────────────────
// Google will show a unique title + description for each judging event page
export async function generateMetadata(
  { params }: { params: { eventId: string } }
): Promise<Metadata> {
  const event = judgingEvents.find(e => e.id === params.eventId)

  if (!event) {
    return {
      title: 'Judging Event | Bharat Dixit',
      description: 'Bharat Kumar Dixit judging and mentorship event details.',
    }
  }

  const typeLabel = event.type === 'national'
    ? 'National Hackathon'
    : event.type === 'university'
      ? 'University Event'
      : 'International Event'

  return {
    title: `${event.institution} — ${event.role} | Bharat Dixit`,
    description: `Bharat Kumar Dixit as ${event.role} at ${event.institution} (${event.year}). ${event.shortDesc}`,
    keywords: [
      `Bharat Dixit ${event.institution}`,
      `Bharat Kumar Dixit ${event.institution}`,
      `Bharat Dixit ${typeLabel}`,
      `Bharat Dixit judge ${event.year}`,
      event.institution,
      ...event.tags,
    ],
    alternates: { canonical: `${SITE_URL}/judging/${params.eventId}` },
    openGraph: {
      title: `Bharat Dixit — ${event.role} at ${event.institution}`,
      description: event.shortDesc,
      url: `${SITE_URL}/judging/${params.eventId}`,
      images: [{ url: `${SITE_URL}/og/og-image.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Bharat Dixit — ${event.role} at ${event.institution}`,
      description: event.shortDesc,
      images: [`${SITE_URL}/og/og-image.jpg`],
    },
  }
}

// ── Static paths for build-time generation ───────────────────────
export function generateStaticParams() {
  return judgingEvents.map(e => ({ eventId: e.id }))
}

// ── Page ─────────────────────────────────────────────────────────
export default function Page({ params }: { params: { eventId: string } }) {
  return <JudgingEventPage eventId={params.eventId} />
}
