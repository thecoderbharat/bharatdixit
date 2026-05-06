import type { Metadata } from 'next'
import { HeroSection } from '@/components/home/HeroSection'
import { CoverFlow } from '@/components/home/CoverFlow'
import { JudgingSection } from '@/components/home/JudgingSection'
import { ModuleSections } from '@/components/home/ModuleSection'
import { CareerTimeline } from '@/components/home/CareerTimeline'
import { SkillsCloud } from '@/components/home/SkillsCloud'

export const metadata: Metadata = {
  title: 'Bharat Dixit | International Tech Leader & CTO',
  description:
    'Official portfolio of Bharat Kumar Dixit — International Tech Leader, Senior Mobile Architect, and CTO at Vigorus.ai. View achievements, career timeline, and technical expertise.',
  alternates: { canonical: 'https://bharatdixit.com' },
  openGraph: {
    title: 'Bharat Dixit | International Tech Leader & CTO',
    description: 'CTO at Vigorus.ai. Senior Mobile Architect. Judge at HackIndia, NIT Kolkata, NIT Delhi, Chitkara University & more. Founder of Shree Kishori Priya Foundation.',
    url: 'https://bharatdixit.com',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CoverFlow />
      <JudgingSection />
      <ModuleSections />
      <CareerTimeline />
      <SkillsCloud />
    </>
  )
}
