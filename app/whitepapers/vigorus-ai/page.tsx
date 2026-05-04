import type { Metadata } from 'next'
import { WhitepaperVigorusAi } from '@/components/whitepapers/WhitepaperVigorusAi'

export const metadata: Metadata = {
  title: 'Vigorus AI: The Future of Intelligent Healthcare Infrastructure',
  description:
    'A 35-page technical whitepaper by Bharat Dixit — AI-Powered EMR, Blockchain PHR, ABDM & NHCX integration, and autonomous insurance claims processing.',
  alternates: { canonical: 'https://bharatdixit.com/whitepapers/vigorus-ai' },
  openGraph: {
    title: 'Vigorus AI Whitepaper V11 | Bharat Dixit',
    description:
      'Comprehensive architecture whitepaper: Voice-First EMR, Blockchain PHR, ClaimIQ, ABDM & NHCX integration. Authored by Bharat Dixit.',
    url: 'https://bharatdixit.com/whitepapers/vigorus-ai',
  },
}

export default function VigorusAiWhitepaperPage() {
  return <WhitepaperVigorusAi />
}
