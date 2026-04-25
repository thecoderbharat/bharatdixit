import { HeroSection } from '@/components/home/HeroSection'
import { CoverFlow } from '@/components/home/CoverFlow'
import { ModuleSections } from '@/components/home/ModuleSection'
import { CareerTimeline } from '@/components/home/CareerTimeline'
import { SkillsCloud } from '@/components/home/SkillsCloud'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CoverFlow />
      <ModuleSections />
      <CareerTimeline />
      <SkillsCloud />
    </>
  )
}
