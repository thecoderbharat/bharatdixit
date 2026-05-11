import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Judging & Mentorship Events | Bharat Dixit',
  description:
    'Bharat Kumar Dixit as technical jury member and mentor at HackIndia, NIT Kolkata, NIT Delhi, Chitkara University, ABES Hackathon, and Amity University. Photos and videos from each event.',
  keywords: [
    'Bharat Dixit judge', 'Bharat Dixit HackIndia judge', 'Bharat Dixit NIT Kolkata',
    'Bharat Dixit NIT Delhi', 'Bharat Dixit Chitkara University', 'Bharat Dixit ABES Hackathon',
    'Bharat Kumar Dixit mentor', 'Bharat Dixit hackathon judge India',
  ],
  alternates: { canonical: 'https://bharatdixit.com/judging' },
  openGraph: {
    title: 'Judging & Mentorship | Bharat Dixit',
    description: 'Technical jury member at HackIndia, NIT Kolkata, NIT Delhi, Chitkara University & more.',
    url: 'https://bharatdixit.com/judging',
    images: [{ url: 'https://bharatdixit.com/og/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function JudgingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
