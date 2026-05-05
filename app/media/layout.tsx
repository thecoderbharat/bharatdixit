import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Media & Press Recognitions | Bharat Dixit',
  description:
    'Bharat Kumar Dixit featured in Deccan Herald, Forbes India, YourStory, Inc42, Economic Times Technology, and Wired India. Press coverage, interviews, and media appearances.',
  keywords: [
    'Bharat Dixit media', 'Bharat Kumar Dixit press', 'Bharat Dixit Forbes India',
    'Bharat Dixit YourStory', 'Bharat Dixit Inc42', 'Bharat Dixit interview',
    'Bharat Dixit Economic Times', 'Bharat Dixit Wired India',
  ],
  alternates: { canonical: 'https://bharatdixit.com/media' },
  openGraph: {
    title: 'Media & Press Recognitions | Bharat Dixit',
    description: 'Bharat Kumar Dixit featured in Forbes India, YourStory, Inc42, Economic Times, Wired India, and Deccan Herald.',
    url: 'https://bharatdixit.com/media',
    images: [{ url: 'https://bharatdixit.com/og/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
