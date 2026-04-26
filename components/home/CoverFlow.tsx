'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { coverCards } from '@/data/portfolio'

export function CoverFlow() {
  const [activeId, setActiveId] = useState('hackindia')
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: -1 | 1) => {
    if (scrollRef.current) scrollRef.current.scrollLeft += dir * 432
  }

  const handleClick = (id: string) => {
    setActiveId(id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="py-24 overflow-hidden bg-surface-container-low" id="achievements">
      <div className="max-w-[1440px] mx-auto px-8 mb-16 flex justify-between items-end">
        <div>
          <span className="metallic-text font-headline font-bold tracking-widest uppercase text-xs block mb-4">Milestones &amp; Recognition</span>
          <h2 className="font-headline text-5xl font-bold tracking-tighter">Strategic Impact</h2>
        </div>
        <div className="flex gap-4">
          <button onClick={() => scrollBy(-1)} aria-label="Scroll left"
            className="p-4 border border-outline-variant/30 rounded-full hover:bg-primary hover:text-on-primary transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button onClick={() => scrollBy(1)} aria-label="Scroll right"
            className="p-4 border border-outline-variant/30 rounded-full hover:bg-primary hover:text-on-primary transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-8 px-8 overflow-x-auto pb-12 snap-x-mandatory scrollbar-hide" style={{ scrollBehavior: 'smooth' }}>
        {coverCards.map((card) => {
          const isActive = card.id === activeId
          return (
            <article
              key={card.id}
              onClick={() => handleClick(card.id)}
              className={`min-w-[400px] p-8 rounded-xl snap-center cursor-pointer transition-all
                ${isActive
                  ? 'bg-surface-container-highest border-2 border-primary/40 shadow-2xl shadow-primary/10 scale-105 relative z-10'
                  : 'bg-surface-container-high border border-outline-variant/10 hover:border-primary/30 group'}`}
            >
              {/* Image slot */}
              <div className="h-64 w-full mb-8 overflow-hidden rounded-lg relative">
                {card.imagePath ? (
                  <Image
                    src={card.imagePath}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="400px"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${card.placeholderBg} flex items-end p-4`}>
                    <span className="text-white/20 font-headline font-bold text-lg uppercase tracking-widest">{card.title}</span>
                  </div>
                )}
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-widest mb-2 block ${card.tagCls}`}>{card.tag}</span>
              <h3 className="font-headline text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{card.desc}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
