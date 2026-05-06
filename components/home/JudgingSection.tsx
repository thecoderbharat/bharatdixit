'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { cld } from '@/lib/cloudinary'
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
  const router = useRouter()

  return (
    <section id="judging" className="py-32 bg-surface border-y border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
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

        {/* Event Cards Grid — click → navigate to detail page */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {judgingEvents.map((event) => (
            <Reveal key={event.id}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => router.push(`/judging/${event.id}`)}
                className="group cursor-pointer bg-surface-container rounded-2xl border border-white/5
                           hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5
                           transition-colors duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  {event.imagePath ? (
                    <Image
                      src={cld(event.imagePath!, 'w_800,h_480,c_fill,g_face')}
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
                      <div className="absolute top-3 left-3 w-5 h-5 border-l border-t border-primary/20" />
                      <div className="absolute top-3 right-10 w-5 h-5 border-r border-t border-primary/20" />
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
                    <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold
                                    text-on-surface-variant group-hover:text-primary transition-colors">
                      View Event
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
