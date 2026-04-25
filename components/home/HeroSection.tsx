'use client'

import { useEffect, useRef, useState } from 'react'

const SLIDES = [
  {
    badge: 'Global Executive Leadership',
    badgeCls: 'border-primary/20 bg-primary/5',
    badgeTextCls: 'metallic-text',
    line1: 'International',
    line2: 'Tech Leader',
    line2Cls: 'from-primary to-secondary',
    desc: 'Spearheading nation-wide developer ecosystems and mentoring the next generation of full-stack innovators on a global stage.',
    btn1Cls: 'bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-xl shadow-primary/10',
    btn1: 'View Milestones',
    btn2: 'Technical Vision',
    // Placeholder bg — replace the inner div with <Image> when you have real photos
    placeholderBg: 'from-[#0a1830] to-[#070e1d]',
  },
  {
    badge: 'Advanced Technical Depth',
    badgeCls: 'border-secondary/20 bg-secondary/5',
    badgeTextCls: 'text-secondary',
    line1: 'Senior Mobile',
    line2: 'Architect',
    line2Cls: 'from-cyan-400 to-blue-500',
    desc: 'Engineering sophisticated mobile ecosystems and scaling enterprise architectures for mission-critical digital infrastructure.',
    btn1Cls: 'bg-gradient-to-r from-secondary to-[#7903fd] text-on-secondary shadow-xl shadow-secondary/10',
    btn1: 'Architecture Stack',
    btn2: 'Case Studies',
    placeholderBg: 'from-[#0a1428] to-[#070e1d]',
  },
  {
    badge: 'Strategic Command',
    badgeCls: 'border-primary/20 bg-primary/5',
    badgeTextCls: 'metallic-text',
    line1: 'Chief Technology',
    line2: 'Officer',
    line2Cls: 'from-primary to-secondary',
    desc: 'Directing global AI-health-tech strategy and overseeing monumental technological transformations at scale.',
    btn1Cls: 'bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-xl shadow-primary/10',
    btn1: 'Executive Presence',
    btn2: 'Connect Today',
    placeholderBg: 'from-[#0c1428] to-[#070e1d]',
  },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => setCurrent(c => (c + 1) % SLIDES.length), 6000)
  }

  useEffect(() => {
    resetTimer()
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  const goTo = (idx: number) => { setCurrent(idx); resetTimer() }
  const move = (dir: number) => { setCurrent(c => (c + dir + SLIDES.length) % SLIDES.length); resetTimer() }

  return (
    <section className="relative h-[921px] overflow-hidden group">
      {/* Slider */}
      <div className="hero-slider h-full" style={{ transform: `translateX(-${current * 100}%)` }}>
        {SLIDES.map((s, i) => (
          <div key={i} className="slide relative flex items-center justify-center">
            {/* ── Background image placeholder ─────────────────────────────
                REPLACE THIS DIV with a real Next.js <Image> when you have photos:
                <Image src="/images/slide-1.jpg" alt="..." fill className="object-cover opacity-50" />
            ─────────────────────────────────────────────────────────────── */}
            <div className={`absolute inset-0 z-0 bg-gradient-to-b ${s.placeholderBg}`} />

            {/* Gradient overlay — same as reference */}
            <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-surface/80 to-surface z-[1]" />

            {/* Text content */}
            <div className="relative z-10 text-center px-6 max-w-5xl">
              <div className={`mb-4 inline-block px-4 py-1 border ${s.badgeCls} rounded-full`}>
                <span className={`text-[10px] font-headline font-bold tracking-[0.3em] uppercase ${s.badgeTextCls}`}>
                  {s.badge}
                </span>
              </div>

              <h1 className="font-headline font-bold text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-none mb-8">
                {s.line1}<br />
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${s.line2Cls}`}>
                  {s.line2}
                </span>
              </h1>

              <p className="max-w-2xl mx-auto text-on-surface-variant text-lg mb-10 leading-relaxed">
                {s.desc}
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <button className={`${s.btn1Cls} px-10 py-4 rounded-xl font-headline font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform`}>
                  {s.btn1}
                </button>
                <button className="border border-outline-variant/30 px-10 py-4 rounded-xl font-headline font-bold uppercase tracking-widest text-sm hover:bg-surface-container-high transition-colors">
                  {s.btn2}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button onClick={() => move(-1)}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 p-4 border border-white/5
                   bg-surface/20 backdrop-blur-md rounded-full text-white/50
                   hover:text-white hover:border-primary/50 transition-all
                   opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <button onClick={() => move(1)}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 p-4 border border-white/5
                   bg-surface/20 backdrop-blur-md rounded-full text-white/50
                   hover:text-white hover:border-primary/50 transition-all
                   opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            className="h-1 rounded-full transition-all duration-300"
            style={{ width: 48, background: i === current ? '#b4c5ff' : 'rgba(67,70,85,0.3)' }} />
        ))}
      </div>
    </section>
  )
}
