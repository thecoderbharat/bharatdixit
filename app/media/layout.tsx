import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Media & Press Recognitions | Bharat Dixit',
  description:
    'Bharat Kumar Dixit featured in Taarezameenpar Magazine, Lawstreet Journal, local media, and national publications. Press coverage, interviews, and media appearances across print, digital, and broadcast.',
  keywords: [
    'Bharat Dixit media', 'Bharat Kumar Dixit press', 'Bharat Dixit Taarezameenpar',
    'Bharat Dixit Lawstreet Journal', 'Bharat Dixit national articles',
    'Bharat Dixit local media', 'Bharat Dixit interview', 'Bharat Dixit coverage',
  ],
  alternates: { canonical: 'https://bharatdixit.com/media' },
  openGraph: {
    title: 'Media & Press Recognitions | Bharat Dixit',
    description: 'Bharat Kumar Dixit featured in Taarezameenpar Magazine, Lawstreet Journal, national publications, and local media.',
    url: 'https://bharatdixit.com/media',
    images: [{ url: 'https://bharatdixit.com/og/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
