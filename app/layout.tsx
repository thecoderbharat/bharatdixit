import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'

export const metadata: Metadata = {
  title: 'Bharat Kumar Dixit | Chief Technology Officer & Mobile Architect',
  description: 'Bharat Kumar Dixit — International Tech Leader, Senior Mobile Architect, and CTO at Vigorus.ai.',
  keywords: ['Bharat Dixit', 'Bharat Kumar Dixit', 'CTO', 'Mobile Architect', 'Flutter', 'IBM', 'Vigorus.ai'],
  authors: [{ name: 'Bharat Kumar Dixit' }],
  openGraph: {
    title: 'Bharat Dixit | CTO & Senior Mobile Architect',
    description: 'International Tech Leader architecting the intersection of AI and mobile excellence.',
    type: 'website',
    url: 'https://bharatdixit.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Bharat Kumar Dixit',
  jobTitle: ['Chief Technology Officer', 'Senior Mobile Architect', 'International Tech Leader'],
  worksFor: { '@type': 'Organization', name: 'Vigorus.ai' },
  alumniOf: { '@type': 'Organization', name: 'IBM' },
  url: 'https://bharatdixit.com',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-surface font-body text-on-surface selection:bg-primary/30">
        {/* Fixed blueprint dot-grid overlay */}
        <div className="blueprint-bg" />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
