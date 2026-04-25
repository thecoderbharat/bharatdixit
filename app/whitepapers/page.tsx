import type { Metadata } from 'next'
import { motion } from 'framer-motion'
import { whitepapers } from '@/data/portfolio'
import { WhitepaperCard } from '@/components/whitepapers/WhitepaperCard'

export const metadata: Metadata = {
  title: 'Whitepapers & Technical Insights | Bharat Dixit',
  description:
    'Technical whitepapers by Bharat Dixit covering AI in healthcare, mobile architecture, distributed systems, and zero-trust security.',
}

export default function WhitepapersPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <header className="max-w-screen-2xl mx-auto px-6 md:px-24 mb-20">
        <span className="text-gold font-headline font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">
          Architectural Portfolio 2024
        </span>
        <h1 className="text-5xl md:text-7xl font-bold font-headline text-on-surface tracking-tighter leading-none max-w-4xl mb-6">
          Whitepapers &{' '}
          <span className="text-primary-container block md:inline">Technical Insights</span>
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          Focusing on AI, Mobile Architecture, and Healthcare Tech. Exploring the
          intersection of high-scale engineering and clinical precision.
        </p>
      </header>

      {/* Grid */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whitepapers.map((paper, i) => (
            <WhitepaperCard key={paper.id} paper={paper} delay={i * 0.08} />
          ))}
        </div>
      </section>

      {/* Custom Research CTA */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-24 mt-32">
        <div className="bg-surface-low border border-white/5 p-10 md:p-14 rounded-xl
                        flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-headline font-bold text-white mb-4 tracking-tight uppercase">
              Custom Research Requests
            </h2>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              In addition to published whitepapers, I provide bespoke technical audits and
              architecture reviews for healthcare and fintech startups. Let&apos;s discuss
              your system&apos;s next evolution.
            </p>
          </div>
          <button
            className="flex-shrink-0 px-10 py-4 bg-transparent border border-gold text-gold
                       font-headline font-bold text-xs uppercase tracking-widest
                       hover:bg-gold hover:text-surface transition-all duration-300 rounded"
          >
            Inquire for Research
          </button>
        </div>
      </section>
    </div>
  )
}
