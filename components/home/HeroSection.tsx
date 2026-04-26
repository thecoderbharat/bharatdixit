'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { heroSlides } from '@/data/portfolio'

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => setCurrent(c => (c + 1) % heroSlides.length), 6000)
  }

  useEffect(() => { resetTimer(); return () => { if (intervalRef.current) clearInterval(intervalRef.current) } }, [])

  const goTo = (idx: number) => { setCurrent(idx); resetTimer() }
  const move = (dir: number) => { setCurrent(c => (c + dir + heroSlides.length) % heroSlides.length); resetTimer() }

  return (
    <section className="relative h-[921px] overflow-hidden group">
      <div className="hero-slider h-full" style={{ transform: `translateX(-${current * 100}%)` }}>
        {heroSlides.map((s, i) => (
          <div key={i} className="slide relative flex items-center justify-center">

            {/* ── Background ── */}
            {s.imagePath ? (
              <Image
                src={s.imagePath}
                alt={`${s.line1} ${s.line2} — Bharat Kumar Dixit`}
                fill
                priority={i === 0}
                className="object-cover object-top opacity-50"
                sizes="100vw"
              />
            ) : (
              <div className={`absolute inset-0 z-0 bg-gradient-to-b ${s.placeholderBg}`} />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-surface/80 to-surface z-[1]" />

            {/* ── Content ── */}
            <div className="relative z-10 text-center px-6 max-w-5xl">
              <div className={`mb-4 inline-block px-4 py-1 border ${s.badgeCls} rounded-full`}>
                <span className={`text-[10px] font-headline font-bold tracking-[0.3em] uppercase ${s.badgeTextCls}`}>{s.badge}</span>
              </div>
              <h1 className="font-headline font-bold text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-none mb-8">
                {s.line1}<br />
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${s.line2Cls}`}>{s.line2}</span>
              </h1>
              <p className="max-w-2xl mx-auto text-on-surface-variant text-lg mb-10 leading-relaxed">{s.desc}</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <button className={`${s.btn1Cls} px-10 py-4 rounded-xl font-headline font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform`}>{s.btn1}</button>
                <button className="border border-outline-variant/30 px-10 py-4 rounded-xl font-headline font-bold uppercase tracking-widest text-sm hover:bg-surface-container-high transition-colors">{s.btn2}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button onClick={() => move(-1)} aria-label="Previous slide"
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 p-4 border border-white/5 bg-surface/20 backdrop-blur-md rounded-full text-white/50 hover:text-white hover:border-primary/50 transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <button onClick={() => move(1)} aria-label="Next slide"
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 p-4 border border-white/5 bg-surface/20 backdrop-blur-md rounded-full text-white/50 hover:text-white hover:border-primary/50 transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {heroSlides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
            className="h-1 rounded-full transition-all duration-300"
            style={{ width: 48, background: i === current ? '#b4c5ff' : 'rgba(67,70,85,0.3)' }} />
        ))}
      </div>
    </section>
  )
}
