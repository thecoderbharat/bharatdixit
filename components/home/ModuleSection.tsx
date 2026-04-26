'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { moduleSections } from '@/data/portfolio'

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

export function ModuleSections() {
  return (
    <>
      {moduleSections.map((mod, idx) => {
        const isLeft = mod.layout === 'image-left'
        const sectionBg = idx % 2 === 0 ? 'bg-surface border-y border-white/5' : 'bg-surface-container-low'

        // Special cases for unique layouts in reference
        const isNGO = mod.id === 'ngo-foundation'
        const isIBM = mod.id === 'ibm-training'
        const isHack = mod.id === 'hackindia'
        const isRecognitions = mod.id === 'recognitions'
        const isMedia = mod.id === 'media'
        const isCerts = mod.id === 'certificates'

        const ImageSlot = () => (
          <div className="relative">
            {/* Glow effect for NIT & IBM */}
            {(mod.id === 'nit-kolkata' || isIBM) && (
              <div className={`absolute -inset-4 ${isIBM ? 'bg-blue-500/10' : 'bg-primary/20'} blur-${isIBM ? '3xl rounded-full' : '2xl'} pointer-events-none`} />
            )}
            <div className={`relative overflow-hidden rounded-2xl border border-white/10 ${mod.imageAspect} ${isNGO ? 'border-2 border-orange-500/20 shadow-2xl' : ''} ${isIBM ? 'border-4 border-surface-container-highest p-1 bg-surface shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : ''}`}>
              {/* Inner wrapper for IBM frame */}
              <div className={isIBM ? 'overflow-hidden rounded-xl w-full h-full' : 'w-full h-full'}>
                {mod.imageSrc ? (
                  <Image
                    src={mod.imageSrc}
                    alt={mod.imageAlt}
                    fill
                    className={`object-cover ${mod.imageWrapperCls ?? ''}`}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br`}
                    style={{ background: `linear-gradient(135deg, ${mod.placeholderGradient})` }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/15 font-headline font-bold text-2xl uppercase tracking-widest text-center px-6">{mod.title}</span>
                    </div>
                  </div>
                )}
                {isNGO && <div className="absolute inset-0 bg-gradient-to-t from-orange-950/60 to-transparent pointer-events-none" />}
              </div>
            </div>
          </div>
        )

        // Recognitions: full-width 3-card grid
        if (isRecognitions) return (
          <section key={mod.id} id={mod.id} className="py-32 bg-surface-container-lowest scroll-mt-24">
            <div className="max-w-7xl mx-auto px-8">
              <Reveal className="text-center mb-16">
                <h2 className="font-headline text-5xl font-bold tracking-tight mb-4">Appreciation &amp; Recognitions</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-transparent mx-auto" />
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { cls: 'hover:border-primary/40', iconCls: 'bg-primary/10', svgCls: 'text-primary', label: 'Excellence Award', desc: 'Recognized for outstanding technical leadership during the Q3 enterprise migration at IBM.' },
                  { cls: 'hover:border-secondary/40', iconCls: 'bg-secondary/10', svgCls: 'text-secondary', label: 'Architect of the Year', desc: 'Honored for designing the core infrastructure of the Vigorus.ai health-tech platform.' },
                  { cls: 'hover:border-cyan-400/40', iconCls: 'bg-cyan-400/10', svgCls: 'text-cyan-400', label: 'Innovation Lead', desc: "Awarded for spearheading the 'Zero-Lag' mobile initiative across cross-functional teams." },
                ].map((item, i) => (
                  <Reveal key={i}>
                    <div className={`bg-surface-container p-8 rounded-2xl border border-white/5 ${item.cls} transition-all group cursor-pointer`}>
                      <div className={`w-12 h-12 ${item.iconCls} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={item.svgCls}>
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <h4 className="font-headline text-xl font-bold mb-3">{item.label}</h4>
                      <p className="text-on-surface-variant text-sm">{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )

        // Media: 2-column with logo grid
        if (isMedia) return (
          <section key={mod.id} id={mod.id} className="py-32 bg-surface scroll-mt-24">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <Reveal>
                <h2 className="font-headline text-5xl font-bold tracking-tight mb-6">Media Recognitions</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">Featured and interviewed by leading technology publications and business journals for insights on the future of mobile architecture, AI integration, and digital transformation at scale.</p>
              </Reveal>
              <Reveal>
                <div className="grid grid-cols-2 gap-4">
                  {['TechCrunch', 'Forbes Tech', 'Wired', 'The Verge'].map((pub) => (
                    <div key={pub} className="h-32 bg-surface-container rounded-xl border border-white/5 flex items-center justify-center group hover:bg-surface-container-high transition-colors">
                      <span className="font-headline font-bold text-slate-500 group-hover:text-primary transition-colors tracking-tighter text-xl italic uppercase">{pub}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        )

        // Certificates: auto-scrolling badge strip
        if (isCerts) return (
          <section key={mod.id} id={mod.id} className="py-32 bg-surface-container-low overflow-hidden scroll-mt-24">
            <div className="max-w-7xl mx-auto px-8 mb-16 text-center">
              <h2 className="font-headline text-5xl font-bold tracking-tight">Certifications &amp; Professional Badges</h2>
            </div>
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll whitespace-nowrap gap-12 w-max px-8">
                {[...Array(2)].flatMap(() => [
                  { icon: '🏆', title: 'IBM Certified\nMobile Architect',   cls: 'text-primary' },
                  { icon: '☁️', title: 'AWS Solutions\nAssociate',          cls: 'text-secondary' },
                  { icon: '⌨️', title: 'Google Flutter\nSpecialist',        cls: 'text-cyan-400' },
                  { icon: '🛡️', title: 'Enterprise\nSecurity Certified',    cls: 'text-primary' },
                  { icon: '✨', title: 'AI Implementation\nSpecialist',      cls: 'text-secondary' },
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

        // NGO: orange gradient section
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
              <Reveal><ImageSlot /></Reveal>
            </div>
          </section>
        )

        // HackIndia: gradient border frame
        if (isHack) return (
          <section key={mod.id} id={mod.id} className="py-32 bg-surface-container-low scroll-mt-24">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <Reveal className="order-2 lg:order-1">
                <span className="metallic-text font-bold tracking-[0.3em] uppercase text-xs block mb-4">National Recognition</span>
                <h2 className="font-headline text-5xl font-bold tracking-tight mb-6">International Tech Lead Judge — HackIndia</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-10">{mod.body[0]}</p>
                <button className="px-8 py-4 bg-surface-container-high border border-outline-variant/30 rounded-xl text-on-surface font-headline font-bold uppercase tracking-widest text-xs hover:border-secondary transition-all">{mod.ctaLabel}</button>
              </Reveal>
              <Reveal className="order-1 lg:order-2">
                <div className="relative p-2 bg-gradient-to-tr from-secondary/40 via-transparent to-primary/40 rounded-3xl">
                  <div className="bg-surface p-4 rounded-2xl overflow-hidden shadow-2xl">
                    <div className={`relative overflow-hidden rounded-xl ${mod.imageAspect}`}>
                      {mod.imageSrc ? (
                        <Image src={mod.imageSrc} alt={mod.imageAlt} fill className="object-cover rounded-xl" sizes="(max-width: 1024px) 100vw, 50vw" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center rounded-xl" style={{ background: `linear-gradient(135deg, ${mod.placeholderGradient})` }}>
                          <span className="text-white/20 font-headline font-bold text-xl uppercase tracking-widest">HackIndia</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        )

        // Default: alternating 2-col layout (NIT Kolkata, IBM, generic)
        return (
          <section key={mod.id} id={mod.id} className={`py-32 ${sectionBg} scroll-mt-24`}>
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <Reveal className={isLeft ? 'order-1' : 'order-1 lg:order-2'}>
                <ImageSlot />
              </Reveal>
              <Reveal className={isLeft ? 'order-2' : 'order-2 lg:order-1'}>
                {mod.id === 'nit-kolkata' && <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mb-8" />}
                {mod.tag && mod.id !== 'nit-kolkata' && (
                  <span className="metallic-text font-bold tracking-[0.3em] uppercase text-xs block mb-4">{mod.tag}</span>
                )}
                <h2 className="font-headline text-5xl font-bold tracking-tight mb-6">{mod.title}</h2>
                {mod.body.map((p, i) => <p key={i} className="text-on-surface-variant text-lg leading-relaxed mb-6">{p}</p>)}
                {mod.id === 'nit-kolkata' && <div className="h-px w-full bg-gradient-to-r from-outline-variant/50 to-transparent mb-8" />}
                <button className={mod.id === 'nit-kolkata'
                  ? 'px-8 py-3 border border-primary/40 text-primary font-headline font-bold uppercase tracking-widest text-xs hover:bg-primary/10 transition-colors'
                  : 'flex items-center gap-4 text-cyan-400 font-bold uppercase tracking-widest text-xs'}>
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
