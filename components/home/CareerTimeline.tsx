'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { timelineRoles } from '@/data/portfolio'

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }} className={className}>
      {children}
    </motion.div>
  )
}

export function CareerTimeline() {
  return (
    <section className="py-32 bg-surface" id="timeline">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="font-headline text-5xl font-bold tracking-tight mb-4">The Professional Arc</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto" />
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-outline-variant to-transparent opacity-30" />
          {timelineRoles.map((r, i) => (
            <Reveal key={i}>
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center">
                {r.side === 'left' ? (
                  <>
                    <div className="text-right pr-12 hidden md:block">
                      <span className={`font-headline text-4xl font-bold ${r.periodCls}`}>{r.period}</span>
                    </div>
                    <div className="relative pl-12">
                      <div className={`absolute -left-3 md:-left-[13px] top-4 w-6 h-6 rounded-full ${r.dotCls}`} />
                      <div className={`bg-surface-container p-8 rounded-xl border ${r.borderCls}`}>
                        <h3 className="font-headline text-2xl font-bold mb-1">{r.role}</h3>
                        <p className={`${r.companyCls} font-bold text-sm tracking-widest mb-4 uppercase`}>{r.company}</p>
                        <p className="text-on-surface-variant leading-relaxed">{r.desc}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative pr-12 text-right order-2 md:order-1">
                      <div className={`absolute -right-3 md:-right-[13px] top-4 w-6 h-6 rounded-full ${r.dotCls}`} />
                      <div className={`bg-surface-container p-8 rounded-xl border ${r.borderCls}`}>
                        <h3 className="font-headline text-2xl font-bold mb-1">{r.role}</h3>
                        <p className={`${r.companyCls} font-bold text-sm tracking-widest mb-4 uppercase`}>{r.company}</p>
                        <p className="text-on-surface-variant leading-relaxed text-left">{r.desc}</p>
                      </div>
                    </div>
                    <div className="pl-12 hidden md:block order-1 md:order-2">
                      <span className={`font-headline text-4xl font-bold ${r.periodCls}`}>{r.period}</span>
                    </div>
                  </>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
