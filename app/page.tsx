import type { Metadata } from 'next'
import { HeroSection }    from '@/components/home/HeroSection'
import { CoverFlow }      from '@/components/home/CoverFlow'
import { JudgingSection } from '@/components/home/JudgingSection'
import { ModuleSections } from '@/components/home/ModuleSection'
import { CareerTimeline } from '@/components/home/CareerTimeline'
import { SkillsCloud }    from '@/components/home/SkillsCloud'

const SITE_URL = 'https://bharatdixit.com'

export const metadata: Metadata = {
  title: 'Bharat Dixit | International Tech Leader, CTO & Senior Mobile Architect',
  description:
    'Bharat Kumar Dixit — International Tech Leader, CTO at Vigorus.ai, Senior Mobile Application Architect at IBM. Judge at HackIndia, NIT Kolkata, NIT Delhi & Chitkara University. Founder of Shree Kishori Priya Foundation.',
  keywords: [
    'Bharat Dixit', 'Bharat Kumar Dixit', 'Bharat Dixit CTO', 'Bharat Dixit IBM',
    'International Tech Leader', 'Senior Mobile Architect India', 'Vigorus.ai CTO',
    'Flutter developer India', 'mobile architect India', 'HackIndia judge 2026',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Bharat Dixit | International Tech Leader, CTO & Senior Mobile Architect',
    description:
      'CTO at Vigorus.ai. Senior Mobile Architect at IBM. Judge at HackIndia, NIT Kolkata, NIT Delhi & Chitkara University. Founder of Shree Kishori Priya Foundation.',
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/og/og-image.jpg`, width: 1200, height: 630, alt: 'Bharat Kumar Dixit' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bharat Dixit | CTO & Senior Mobile Architect',
    description: 'International Tech Leader. CTO at Vigorus.ai. Senior Mobile Architect at IBM.',
    images: [`${SITE_URL}/og/og-image.jpg`],
  },
}

// FAQ schema — helps Google show rich results for name searches
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is Bharat Dixit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bharat Kumar Dixit is an International Tech Leader, Senior Mobile Application Architect at IBM, and CTO at Vigorus.ai. He has over 12 years of experience in enterprise mobile architecture, AI healthcare platforms, and digital health innovation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Bharat Dixit known for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bharat Kumar Dixit is known for his expertise in mobile architecture, AI-native healthcare platforms, and enterprise systems. He is a judge at HackIndia, NIT Kolkata, NIT Delhi, Chitkara University, and ABES Hackathon, and is the founder of Shree Kishori Priya Foundation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where does Bharat Dixit work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bharat Kumar Dixit is currently CTO at Vigorus.ai and Senior Mobile Application Architect at IBM.',
      },
    },
    {
      '@type': 'Question',
      name: 'What whitepapers has Bharat Dixit authored?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bharat Kumar Dixit has authored three major technical whitepapers: the Vigorus.ai healthcare AI whitepaper (35 pages covering Voice-First EMR, Blockchain PHR, and ABDM/NHCX integration), the SvasthaX digital health platform whitepaper, and the UK Banking System Architecture whitepaper.',
      },
    },
  ],
}

// Person JSON-LD for home page specifically
const homePersonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Bharat Kumar Dixit',
  url: SITE_URL,
  jobTitle: 'Chief Technology Officer',
  worksFor: { '@type': 'Organization', name: 'Vigorus.ai' },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, homePersonSchema]) }} />
      <HeroSection />
      <CoverFlow />
      <JudgingSection />
      <ModuleSections />
      <CareerTimeline />
      <SkillsCloud />
    </>
  )
}
