import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery — Media & Appearances | Bharat Dixit',
  description:
    'Photos and videos from Bharat Kumar Dixit\'s international appearances — London Tech Tour, HackIndia judging, IBM mentorship sessions, NIT events, and Shree Kishori Priya Foundation NGO activities.',
  keywords: [
    'Bharat Dixit gallery', 'Bharat Kumar Dixit photos', 'Bharat Dixit London',
    'Bharat Dixit HackIndia', 'Bharat Dixit IBM', 'Bharat Dixit NGO',
    'Bharat Dixit appearances',
  ],
  alternates: { canonical: 'https://bharatdixit.com/gallery' },
  openGraph: {
    title: 'Gallery — Media & Appearances | Bharat Dixit',
    description: 'International appearances, judging events, IBM mentorship, and NGO activities of Bharat Kumar Dixit.',
    url: 'https://bharatdixit.com/gallery',
    images: [{ url: 'https://bharatdixit.com/og/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
