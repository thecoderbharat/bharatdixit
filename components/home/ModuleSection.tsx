'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { moduleSections, recognitionSlides, mediaCards } from '@/data/portfolio'

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={className}>
      {children}
    </motion.div>
  )
}

function ImageSlot({ mod }: { mod: typeof moduleSections[number] }) {
  const isIBM = mod.id === 'ibm-training'
  const isNGO = mod.id === 'ngo-foundation'
  return (
    <div className="relative">
      {isIBM && <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />}
      <div className={`relative overflow-hidden rounded-2xl border ${mod.imageAspect}
        ${isNGO ? 'border-2 border-orange-500/20 shadow-2xl' : 'border-white/10'}
        ${isIBM ? 'border-4 border-surface-container-highest p-1 bg-surface shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : ''}`}>
        <div className={isIBM ? 'overflow-hidden rounded-xl w-full h-full' : 'w-full h-full'}>
          {mod.imageSrc ? (
            <Image src={mod.imageSrc} alt={mod.imageAlt} fill
              className={`object-cover ${mod.imageWrapperCls ?? ''}`}
              sizes="(max-width: 1024px) 100vw, 50vw" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${mod.placeholderGradient})` }}>
              <span className="text-white/15 font-headline font-bold text-2xl uppercase tracking-widest text-center px-6">
                {mod.title}
              </span>
            </div>
          )}
          {isNGO && <div className="absolute inset-0 bg-gradient-to-t from-orange-950/60 to-transparent pointer-events-none" />}
        </div>
      </div>
    </div>
  )
}

// ── RECOGNITIONS SLIDER ───────────────────────────────────────────
function RecognitionsSlider() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const total = recognitionSlides.length

  const advance = useCallback(() => {
    setActive(p => (p + 1) % total)
  }, [total])

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(advance, 4000)
  }, [advance])

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [resetTimer])

  const goTo = (i: number) => { setActive(i); resetTimer() }
  const move = (dir: number) => { setActive(p => (p + dir + total) % total); resetTimer() }

  const slide = recognitionSlides[active]

  return (
    <section id="recognitions" className="py-32 bg-surface-container-lowest scroll-mt-24">
      <div className="max-w-7xl mx-auto px-8">
        <Reveal className="text-center mb-16">
          <span className="metallic-text font-headline font-bold tracking-[0.3em] uppercase text-xs block mb-4">
            Peer Recognition
          </span>
          <h2 className="font-headline text-5xl font-bold tracking-tight mb-4">
            Appreciation &amp; Recognitions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-transparent mx-auto" />
        </Reveal>

        <div
          onMouseEnter={() => { setPaused(true); if (timerRef.current) clearInterval(timerRef.current) }}
          onMouseLeave={() => { setPaused(false); resetTimer() }}
          className="relative"
        >
          {/* Main slider card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-surface-container rounded-2xl border border-white/5 overflow-hidden shadow-2xl"
            >
              {/* Image panel */}
              <div className="relative h-72 lg:h-auto min-h-[340px]"
                style={{ background: `linear-gradient(135deg, ${slide.placeholderGradient})` }}>
                {slide.imagePath ? (
                  <Image src={slide.imagePath} alt={slide.title} fill
                    className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                ) : (
                  <>
                    {/* Decorative corner marks */}
                    <div className="absolute top-5 left-5 w-8 h-8 border-l-2 border-t-2 border-white/10" />
                    <div className="absolute bottom-5 right-5 w-8 h-8 border-r-2 border-b-2 border-white/10" />
                    {/* Large initials placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/10 font-headline font-bold text-8xl tracking-tighter select-none">
                        BD
                      </span>
                    </div>
                    {/* Accent glow */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2"
                      style={{ background: `linear-gradient(to top, ${slide.accentColor}15, transparent)` }} />
                  </>
                )}
                {/* Slide counter */}
                <div className="absolute top-5 right-5 bg-surface-lowest/70 backdrop-blur-sm border border-white/10
                                rounded-lg px-3 py-1.5 font-headline font-bold text-[10px] tracking-widest"
                  style={{ color: slide.accentColor }}>
                  {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </div>
              </div>

              {/* Content panel */}
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <span className="font-headline font-bold text-[10px] uppercase tracking-[0.3em] mb-3 block"
                  style={{ color: slide.accentColor }}>
                  {slide.label}
                </span>
                <h3 className="font-headline text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                  {slide.title}
                </h3>
                <p className="text-on-surface-variant text-base leading-relaxed mb-10">
                  {slide.description}
                </p>

                {/* Progress bar */}
                <div className="w-full h-0.5 bg-white/5 rounded-full mb-8 overflow-hidden">
                  <motion.div
                    key={`bar-${active}`}
                    className="h-full rounded-full"
                    style={{ backgroundColor: slide.accentColor }}
                    initial={{ width: '0%' }}
                    animate={{ width: paused ? undefined : '100%' }}
                    transition={{ duration: 4, ease: 'linear' }}
                  />
                </div>

                {/* Navigation row */}
                <div className="flex items-center justify-between">
                  {/* Dot indicators */}
                  <div className="flex gap-2">
                    {recognitionSlides.map((_, i) => (
                      <button key={i} onClick={() => goTo(i)} aria-label={`Recognition ${i + 1}`}
                        className="h-1.5 rounded-full transition-all duration-300"
                        style={{
                          width: i === active ? '28px' : '8px',
                          background: i === active ? slide.accentColor : 'rgba(255,255,255,0.15)',
                        }} />
                    ))}
                  </div>
                  {/* Arrow buttons */}
                  <div className="flex gap-3">
                    <button onClick={() => move(-1)} aria-label="Previous recognition"
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center
                                 text-white/50 hover:border-white/30 hover:text-white transition-all">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m15 18-6-6 6-6"/>
                      </svg>
                    </button>
                    <button onClick={() => move(1)} aria-label="Next recognition"
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center
                                 text-white/50 hover:border-white/30 hover:text-white transition-all">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Thumbnail strip */}
          <div className="flex gap-3 mt-5 overflow-x-auto scrollbar-hide pb-1">
            {recognitionSlides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className={`flex-shrink-0 w-32 h-20 rounded-xl overflow-hidden border-2 transition-all
                  ${i === active ? 'scale-105 shadow-lg' : 'border-white/5 opacity-50 hover:opacity-80'}`}
                style={{
                  borderColor: i === active ? s.accentColor : undefined,
                  background: `linear-gradient(135deg, ${s.placeholderGradient})`,
                }}
              >
                {s.imagePath ? (
                  <Image src={s.imagePath} alt={s.title} fill className="object-cover" sizes="128px" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white/20 font-headline font-bold text-[9px] uppercase tracking-widest text-center px-2 leading-tight">
                      {s.title}
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── MEDIA RECOGNITIONS GRID + SEE MORE ───────────────────────────
function MediaRecognitionsGrid() {
  const router = useRouter()
  const TYPE_ICON: Record<string, string> = {
    article: '📰', interview: '🎙️', feature: '⭐', video: '🎬', podcast: '🎧',
  }

  return (
    <section id="media" className="py-32 bg-surface scroll-mt-24">
      <div className="max-w-7xl mx-auto px-8">
        <Reveal className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="metallic-text font-headline font-bold tracking-[0.3em] uppercase text-xs block mb-4">
                Press &amp; Publications
              </span>
              <h2 className="font-headline text-5xl font-bold tracking-tight">Media Recognitions</h2>
            </div>
            <p className="text-on-surface-variant text-base leading-relaxed max-w-sm md:text-right">
              Featured across international publications and broadcast media.
            </p>
          </div>
        </Reveal>

        {/* 6-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mediaCards.map((card, i) => (
            <Reveal key={card.id}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => router.push(`/media#${card.id}`)}
                className="group cursor-pointer bg-surface-container rounded-2xl border border-white/5
                           hover:border-white/15 hover:shadow-xl hover:shadow-black/30
                           transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative h-44 overflow-hidden flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${card.placeholderGradient})` }}>
                  {card.imagePath ? (
                    <Image src={card.imagePath} alt={card.title} fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/10 font-headline font-bold text-5xl uppercase tracking-widest">
                        {card.outlet.charAt(0)}
                      </span>
                    </div>
                  )}
                  {/* Type badge */}
                  <div className="absolute top-3 left-3 bg-surface-lowest/80 backdrop-blur-sm border border-white/10
                                  rounded-lg px-2.5 py-1 flex items-center gap-1.5">
                    <span className="text-sm">{TYPE_ICON[card.type] ?? '📰'}</span>
                    <span className="text-[9px] font-headline font-bold uppercase tracking-wider text-white/70">
                      {card.type}
                    </span>
                  </div>
                  {/* Date */}
                  <div className="absolute top-3 right-3 bg-surface-lowest/80 backdrop-blur-sm border border-white/10
                                  rounded-lg px-2.5 py-1">
                    <span className="text-[9px] font-headline font-bold text-white/60">{card.date}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="font-headline font-bold text-[10px] uppercase tracking-widest mb-2"
                    style={{ color: card.accentColor }}>
                    {card.outlet} · {card.category}
                  </div>
                  <h3 className="font-headline font-bold text-base text-white leading-snug mb-3
                                 group-hover:text-primary transition-colors line-clamp-2">
                    {card.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3 flex-1">
                    {card.description}
                  </p>
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant
                                     group-hover:text-primary transition-colors">
                      View Coverage
                    </span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" className="text-on-surface-variant group-hover:text-primary
                      group-hover:translate-x-1 transition-all">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        {/* See More button */}
        <Reveal className="text-center">
          <button
            onClick={() => router.push('/media')}
            className="inline-flex items-center gap-3 px-10 py-4 bg-surface-container border border-white/10
                       font-headline font-bold uppercase tracking-widest text-sm text-white
                       hover:border-primary/50 hover:text-primary hover:shadow-lg hover:shadow-primary/10
                       transition-all duration-300 rounded-xl group"
          >
            See All Media Coverage
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              className="group-hover:translate-x-1 transition-transform">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </Reveal>
      </div>
    </section>
  )
}

// ── MAIN EXPORT ───────────────────────────────────────────────────
export function ModuleSections() {
  return (
    <>
      {moduleSections.map((mod, idx) => {
        const isLeft      = mod.layout === 'image-left'
        const isNGO       = mod.id === 'ngo-foundation'
        const isIBM       = mod.id === 'ibm-training'
        const isRec       = mod.id === 'recognitions'
        const isMedia     = mod.id === 'media'
        const isCerts     = mod.id === 'certificates'
        const sectionBg   = idx % 2 === 0 ? 'bg-surface border-y border-white/5' : 'bg-surface-container-low'

        if (isRec)   return <RecognitionsSlider key={mod.id} />
        if (isMedia) return <MediaRecognitionsGrid key={mod.id} />

        if (isCerts) return (
          <section key={mod.id} id={mod.id} className="py-32 bg-surface-container-low overflow-hidden scroll-mt-24">
            <div className="max-w-7xl mx-auto px-8 mb-16 text-center">
              <h2 className="font-headline text-5xl font-bold tracking-tight">Certifications &amp; Professional Badges</h2>
            </div>
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll whitespace-nowrap gap-12 w-max px-8">
                {[...Array(2)].flatMap(() => [
                  { icon: '🏆', title: 'IBM Certified\nMobile Architect',  cls: 'text-primary'   },
                  { icon: '☁️', title: 'AWS Solutions\nAssociate',         cls: 'text-secondary' },
                  { icon: '⌨️', title: 'Google Flutter\nSpecialist',       cls: 'text-cyan-400'  },
                  { icon: '🛡️', title: 'Enterprise\nSecurity Certified',   cls: 'text-primary'   },
                  { icon: '✨', title: 'AI Implementation\nSpecialist',     cls: 'text-secondary' },
                ]).map((cert, i) => (
                  <div key={i} className="w-48 h-56 bg-surface-container-high rounded-t-full rounded-b-xl border border-white/10 flex flex-col items-center justify-center p-6 shadow-xl flex-shrink-0">
                    <span className={`text-5xl mb-4 ${cert.cls}`}>{cert.icon}</span>
                    <span className="text-center font-bold text-[10px] uppercase tracking-widest text-on-surface leading-tight whitespace-pre-line">{cert.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )

        if (isNGO) return (
          <section key={mod.id} id={mod.id} className="py-32 bg-gradient-to-b from-surface to-orange-950/10 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <Reveal>
                <span className="text-orange-400 font-bold tracking-[0.3em] uppercase text-[10px] block mb-4">Philanthropy &amp; Purpose</span>
                <h2 className="font-headline text-5xl font-bold tracking-tight mb-4">Founder of Shree Kishori Priya Foundation</h2>
                <h4 className="text-orange-200/60 font-headline text-xl mb-6">Old Age Home NGO in Vrindavan</h4>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-10">{mod.body[0]}</p>
                <button className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-10 py-4 rounded-xl font-headline font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg shadow-orange-900/40">Support the Cause</button>
              </Reveal>
              <Reveal><ImageSlot mod={mod} /></Reveal>
            </div>
          </section>
        )

        return (
          <section key={mod.id} id={mod.id} className={`py-32 ${sectionBg} scroll-mt-24`}>
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <Reveal className={isLeft ? 'order-1' : 'order-1 lg:order-2'}>
                <ImageSlot mod={mod} />
              </Reveal>
              <Reveal className={isLeft ? 'order-2' : 'order-2 lg:order-1'}>
                {mod.tag && (
                  <span className="metallic-text font-bold tracking-[0.3em] uppercase text-xs block mb-4">{mod.tag}</span>
                )}
                <h2 className="font-headline text-5xl font-bold tracking-tight mb-6">{mod.title}</h2>
                {mod.body.map((p, i) => (
                  <p key={i} className="text-on-surface-variant text-lg leading-relaxed mb-6">{p}</p>
                ))}
                <button className={isIBM
                  ? 'flex items-center gap-4 text-cyan-400 font-bold uppercase tracking-widest text-xs'
                  : 'px-8 py-3 border border-primary/40 text-primary font-headline font-bold uppercase tracking-widest text-xs hover:bg-primary/10 transition-colors'}>
                  {mod.ctaLabel}
                </button>
              </Reveal>
            </div>
          </section>
        )
      })}
    </>
  )
}
