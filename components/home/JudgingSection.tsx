'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { judgingEvents } from '@/data/portfolio'

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}>
      {children}
    </motion.div>
  )
}

export function JudgingSection() {
  const [activeId, setActiveId] = useState<string | null>(null)

  const activeEvent = judgingEvents.find(e => e.id === activeId) ?? null

  return (
    <section id="judging" className="py-32 bg-surface border-y border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* ── Header ── */}
        <Reveal className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="metallic-text font-headline font-bold tracking-[0.3em] uppercase text-xs block mb-4">
                Academic &amp; National Leadership
              </span>
              <h2 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter leading-none">
                Judging &amp;<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                  Mentorship
                </span>
              </h2>
            </div>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-md md:text-right">
              Invited as a technical jury member and mentor across India&apos;s top engineering
              institutions and national hackathons.
            </p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-4 mt-14">
            {[
              { value: `${judgingEvents.length}+`, label: 'Events Judged' },
              { value: '500+', label: 'Projects Evaluated' },
              { value: '70+', label: 'Institutions' },
            ].map(stat => (
              <div key={stat.label}
                className="bg-surface-container-low border border-white/5 rounded-2xl px-6 py-5 text-center">
                <div className="font-headline font-bold text-3xl md:text-4xl text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-on-surface-variant text-[11px] uppercase tracking-widest font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── Event Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {judgingEvents.map((event, i) => (
            <Reveal key={event.id}>
              <motion.article
                layoutId={`card-${event.id}`}
                onClick={() => setActiveId(event.id)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group cursor-pointer bg-surface-container rounded-2xl border border-white/5
                           hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5
                           transition-colors duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  {event.imagePath ? (
                    <Image
                      src={event.imagePath}
                      alt={`Bharat Kumar Dixit judging at ${event.institution}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-end p-4 group-hover:opacity-80 transition-opacity"
                      style={{ background: `linear-gradient(135deg, ${event.placeholderGradient})` }}
                    >
                      {/* Blueprint corner marks */}
                      <div className="absolute top-3 left-3 w-5 h-5 border-l border-t border-primary/20" />
                      <div className="absolute top-3 right-3 w-5 h-5 border-r border-t border-primary/20" />
                      <span className="text-white/20 font-headline font-bold text-sm uppercase tracking-widest leading-tight">
                        {event.institution}
                      </span>
                    </div>
                  )}
                  {/* Year badge */}
                  <div className="absolute top-3 right-3 bg-surface-lowest/80 backdrop-blur-sm
                                  border border-white/10 rounded-lg px-2.5 py-1">
                    <span className="text-[10px] font-headline font-bold text-primary tracking-wider">
                      {event.year}
                    </span>
                  </div>
                  {/* Type badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-[9px] font-headline font-bold uppercase tracking-widest
                                     px-2.5 py-1 rounded-lg border backdrop-blur-sm
                                     ${event.type === 'national'
                                       ? 'bg-cyan-400/10 border-cyan-400/30 text-cyan-400'
                                       : event.type === 'university'
                                         ? 'bg-primary/10 border-primary/30 text-primary'
                                         : 'bg-secondary/10 border-secondary/30 text-secondary'}`}>
                      {event.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="metallic-text font-bold text-[10px] uppercase tracking-widest mb-2">
                    {event.role}
                  </div>
                  <h3 className="font-headline font-bold text-lg text-white leading-tight mb-2 group-hover:text-primary transition-colors">
                    {event.institution}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2 mb-4">
                    {event.shortDesc}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {event.tags.slice(0, 2).map(tag => (
                        <span key={tag}
                          className="text-[9px] font-headline font-bold uppercase tracking-wider
                                     text-on-surface-variant border border-outline-variant/40
                                     px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      aria-label={`View details for ${event.institution}`}
                      className="w-8 h-8 rounded-full border border-outline-variant/30 flex items-center
                                 justify-center text-on-surface-variant group-hover:border-primary/50
                                 group-hover:text-primary transition-all flex-shrink-0"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

      </div>

      {/* ── Expanded Detail Modal ── */}
      <AnimatePresence>
        {activeEvent && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveId(null)}
              className="fixed inset-0 bg-surface-lowest/80 backdrop-blur-sm z-40"
            />

            {/* Modal */}
            <motion.div
              key="modal"
              layoutId={`card-${activeEvent.id}`}
              className="fixed inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2
                         top-1/2 -translate-y-1/2 z-50 w-full md:w-[700px] max-h-[90vh]
                         overflow-y-auto bg-surface-container-high rounded-2xl border border-white/10
                         shadow-2xl shadow-black/60"
            >
              {/* Modal image */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl flex-shrink-0">
                {activeEvent.imagePath ? (
                  <Image
                    src={activeEvent.imagePath}
                    alt={`Bharat Kumar Dixit at ${activeEvent.institution}`}
                    fill
                    className="object-cover"
                    sizes="700px"
                  />
                ) : (
                  <div
                    className="w-full h-full"
                    style={{ background: `linear-gradient(135deg, ${activeEvent.placeholderGradient})` }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-transparent to-transparent" />

                {/* Close */}
                <button
                  onClick={() => setActiveId(null)}
                  className="absolute top-4 right-4 w-9 h-9 bg-surface-lowest/70 backdrop-blur
                             border border-white/10 rounded-full flex items-center justify-center
                             text-white/70 hover:text-white transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6 6 18M6 6l12 12"/>
                  </svg>
                </button>

                {/* Year */}
                <div className="absolute bottom-4 left-6">
                  <span className="text-gold font-headline font-bold text-[10px] uppercase tracking-widest">
                    {activeEvent.year}
                  </span>
                </div>
              </div>

              {/* Modal content */}
              <div className="p-8">
                <span className={`text-[10px] font-headline font-bold uppercase tracking-widest
                                  px-3 py-1 rounded-full border mb-4 inline-block
                                  ${activeEvent.type === 'national'
                                    ? 'bg-cyan-400/10 border-cyan-400/30 text-cyan-400'
                                    : activeEvent.type === 'university'
                                      ? 'bg-primary/10 border-primary/30 text-primary'
                                      : 'bg-secondary/10 border-secondary/30 text-secondary'}`}>
                  {activeEvent.type}
                </span>

                <h3 className="font-headline text-3xl font-bold text-white mb-1 tracking-tight">
                  {activeEvent.institution}
                </h3>
                <p className="metallic-text font-bold text-sm tracking-widest uppercase mb-6">
                  {activeEvent.role}
                </p>

                <p className="text-on-surface-variant leading-relaxed text-base mb-6">
                  {activeEvent.fullDesc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {activeEvent.tags.map(tag => (
                    <span key={tag}
                      className="text-[10px] font-headline font-bold uppercase tracking-wider
                                 text-on-surface-variant border border-outline-variant/40
                                 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveId(null)}
                  className="w-full py-4 border border-outline-variant/40 text-on-surface-variant
                             font-headline font-bold text-xs uppercase tracking-widest
                             hover:border-primary/50 hover:text-primary transition-all rounded-xl"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
