'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { coverCards } from '@/data/portfolio'
import { cld } from '@/lib/cloudinary'

const CARD_WIDTH = 432 // px — card width + gap

export function CoverFlow() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const scrollToIdx = useCallback((idx: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: idx * CARD_WIDTH, behavior: 'smooth' })
    }
  }, [])

  const advance = useCallback(() => {
    setActiveIdx(prev => {
      const next = (prev + 1) % coverCards.length
      scrollToIdx(next)
      return next
    })
  }, [scrollToIdx])

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(advance, 3000)
  }, [advance])

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [startTimer])

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current)
    } else {
      startTimer()
    }
  }, [isPaused, startTimer])

  const moveTo = (idx: number) => {
    setActiveIdx(idx)
    scrollToIdx(idx)
    startTimer() // reset timer on manual nav
  }

  // Tiles in this list don't navigate on click (their detail sections aren't ready yet).
  const NON_CLICKABLE_IDS = new Set(['judging', 'media'])

  const handleClick = (id: string, idx: number) => {
    moveTo(idx)
    if (NON_CLICKABLE_IDS.has(id)) return
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="py-24 overflow-hidden bg-surface-container-low" id="achievements">
      <div className="max-w-[1440px] mx-auto px-8 mb-16 flex justify-between items-end">
        <div>
          <span className="metallic-text font-headline font-bold tracking-widest uppercase text-xs block mb-4">
            Milestones &amp; Recognition
          </span>
          <h2 className="font-headline text-5xl font-bold tracking-tighter">Strategic Impact</h2>
        </div>
        <div className="flex items-center gap-4">
          {/* Dot indicators */}
          <div className="hidden md:flex gap-2 mr-2">
            {coverCards.map((_, i) => (
              <button key={i} onClick={() => moveTo(i)} aria-label={`Go to card ${i + 1}`}
                className="h-1 rounded-full transition-all duration-300"
                style={{ width: i === activeIdx ? '24px' : '8px', background: i === activeIdx ? '#b4c5ff' : 'rgba(67,70,85,0.4)' }} />
            ))}
          </div>
          <button onClick={() => moveTo((activeIdx - 1 + coverCards.length) % coverCards.length)}
            aria-label="Previous"
            className="p-4 border border-outline-variant/30 rounded-full hover:bg-primary hover:text-on-primary transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button onClick={() => moveTo((activeIdx + 1) % coverCards.length)}
            aria-label="Next"
            className="p-4 border border-outline-variant/30 rounded-full hover:bg-primary hover:text-on-primary transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-8 px-8 overflow-x-auto pb-12 snap-x-mandatory scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {coverCards.map((card, idx) => {
          const isActive = idx === activeIdx
          const isClickable = !NON_CLICKABLE_IDS.has(card.id)
          return (
            <article
              key={card.id}
              onClick={() => handleClick(card.id, idx)}
              className={`min-w-[400px] p-8 rounded-xl snap-center transition-all duration-300
                ${isClickable ? 'cursor-pointer' : 'cursor-default'}
                ${isActive
                  ? 'bg-surface-container-highest border-2 border-primary/40 shadow-2xl shadow-primary/10 scale-105 relative z-10'
                  : 'bg-surface-container-high border border-outline-variant/10 hover:border-primary/30 group'}`}
            >
              {/* Image */}
              <div className="h-64 w-full mb-8 overflow-hidden rounded-lg relative">
                {card.imagePath ? (
                  <Image src={cld(card.imagePath, 'w_400,h_256,c_fill,g_face')} alt={card.title} fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="400px" />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${card.placeholderBg} flex items-end p-4`}>
                    <span className="text-white/20 font-headline font-bold text-lg uppercase tracking-widest">{card.title}</span>
                  </div>
                )}
                {/* Auto-play progress bar on active card */}
                {isActive && !isPaused && (
                  <div className="absolute bottom-0 left-0 h-0.5 bg-primary/60 rounded-full"
                    style={{ animation: 'progress 3s linear infinite' }} />
                )}
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-widest mb-2 block ${card.tagCls}`}>{card.tag}</span>
              <h3 className="font-headline text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{card.desc}</p>
            </article>
          )
        })}
      </div>

      <style>{`
        @keyframes progress { from { width: 0% } to { width: 100% } }
      `}</style>
    </section>
  )
}
