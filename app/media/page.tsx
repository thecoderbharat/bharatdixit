'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { mediaCards, mediaDetailItems } from '@/data/portfolio'

export default function MediaPage() {
  const [activeCardId, setActiveCardId] = useState<string>(mediaCards[0].id)
  const [mediaFilter, setMediaFilter] = useState<'all' | 'image' | 'video'>('all')
  const [lightbox, setLightbox] = useState<string | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  const activeCard = mediaCards.find(c => c.id === activeCardId)!
  const items = mediaDetailItems
    .filter(item => item.mediaCardId === activeCardId)
    .filter(item => mediaFilter === 'all' || item.type === mediaFilter)

  // Scroll active tab into view
  useEffect(() => {
    const el = sliderRef.current?.querySelector(`[data-id="${activeCardId}"]`) as HTMLElement
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [activeCardId])

  // Handle hash on load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && mediaCards.find(c => c.id === hash)) setActiveCardId(hash)
  }, [])

  const TYPE_ICON: Record<string, string> = {
    article: '📰', interview: '🎙️', feature: '⭐', video: '🎬', podcast: '🎧',
  }

  return (
    <div className="min-h-screen pt-28 pb-24">

      {/* ── PAGE HEADER ── */}
      <header className="max-w-7xl mx-auto px-8 mb-16">
        <Link href="/#media"
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary
                     font-headline font-bold text-[10px] uppercase tracking-widest transition-colors mb-8">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Portfolio
        </Link>
        <span className="metallic-text font-headline font-bold tracking-[0.3em] uppercase text-xs block mb-4">
          Archives &amp; Impact
        </span>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface leading-none mb-4">
          Media &amp;<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
            Recognitions
          </span>
        </h1>
        <p className="text-on-surface-variant text-lg font-light max-w-2xl leading-relaxed">
          Featured across international publications, broadcast media, and technology platforms.
          Select a coverage below to explore images and videos.
        </p>
      </header>

      {/* ── OUTLET BUTTON SLIDER ── */}
      <div className="max-w-7xl mx-auto px-8 mb-12">
        <div
          ref={sliderRef}
          className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {mediaCards.map(card => {
            const isActive = card.id === activeCardId
            return (
              <button
                key={card.id}
                data-id={card.id}
                id={card.id}
                onClick={() => { setActiveCardId(card.id); setMediaFilter('all') }}
                className={`flex-shrink-0 flex items-center gap-3 px-5 py-3.5 rounded-xl border
                             font-headline font-bold text-xs uppercase tracking-widest transition-all duration-300
                             ${isActive
                               ? 'border-primary/50 bg-primary/10 text-primary shadow-lg shadow-primary/10 scale-[1.03]'
                               : 'border-white/10 bg-surface-container text-white/60 hover:border-white/25 hover:text-white'}`}
              >
                <span className="text-lg">{TYPE_ICON[card.type]}</span>
                <div className="text-left">
                  <div className="font-bold text-[11px]" style={{ color: isActive ? undefined : 'inherit' }}>
                    {card.outlet}
                  </div>
                  <div className="text-[9px] font-normal opacity-60 normal-case tracking-normal">
                    {card.date}
                  </div>
                </div>
                {isActive && (
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse ml-1" />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* ── ACTIVE CARD HERO BANNER ── */}
      <div className="max-w-7xl mx-auto px-8 mb-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCardId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="relative rounded-2xl overflow-hidden border border-white/5"
            style={{ background: `linear-gradient(135deg, ${activeCard.placeholderGradient})` }}
          >
            {activeCard.imagePath && (
              <Image src={activeCard.imagePath} alt={activeCard.title} fill
                className="object-cover opacity-30" sizes="100vw" />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container via-surface-container/80 to-transparent" />
            <div className="relative z-10 p-8 md:p-12 max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{TYPE_ICON[activeCard.type]}</span>
                <span className="font-headline font-bold text-[10px] uppercase tracking-[0.3em]"
                  style={{ color: activeCard.accentColor }}>
                  {activeCard.outlet} · {activeCard.category} · {activeCard.date}
                </span>
              </div>
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
                {activeCard.title}
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-6">{activeCard.description}</p>
              {activeCard.url !== '#' && (
                <a href={activeCard.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold
                             border border-white/20 px-5 py-2.5 rounded-lg hover:border-primary/50
                             hover:text-primary transition-all">
                  Read Full Article
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── MEDIA FILTER TABS ── */}
      <div className="max-w-7xl mx-auto px-8 mb-8 flex items-center justify-between">
        <h3 className="font-headline font-bold text-lg text-white">
          Photos &amp; Videos
          <span className="ml-3 text-[11px] text-on-surface-variant font-normal">
            ({items.length} items)
          </span>
        </h3>
        <div className="flex items-center gap-1 bg-surface-container-low rounded-xl p-1">
          {(['all', 'image', 'video'] as const).map(f => (
            <button key={f} onClick={() => setMediaFilter(f)}
              className={`px-4 py-2 rounded-lg font-headline font-bold text-[10px] uppercase tracking-widest
                          transition-all ${mediaFilter === f
                            ? 'bg-surface-container-highest text-white shadow'
                            : 'text-white/40 hover:text-white/70'}`}>
              {f === 'all' ? 'All' : f === 'image' ? '📷 Images' : '🎬 Videos'}
            </button>
          ))}
        </div>
      </div>

      {/* ── MEDIA GRID ── */}
      <div className="max-w-7xl mx-auto px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCardId}-${mediaFilter}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {items.length === 0 ? (
              <div className="text-center py-20 text-on-surface-variant">
                <div className="text-5xl mb-4">🎞️</div>
                <p className="font-headline font-bold">No {mediaFilter === 'all' ? '' : mediaFilter} items yet</p>
                <p className="text-sm mt-2 opacity-60">Drop files into public/media/{activeCardId}/ to populate this section</p>
              </div>
            ) : (
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
                {items.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="break-inside-avoid mb-5"
                  >
                    <div
                      className={`relative rounded-xl overflow-hidden group cursor-pointer border border-white/5
                                  hover:border-white/15 transition-all ${item.type === 'video' ? 'h-52' : i % 3 === 0 ? 'h-72' : 'h-52'}`}
                      style={{ background: `linear-gradient(135deg, ${item.placeholderGradient})` }}
                      onClick={() => item.type === 'image' ? setLightbox(item.id) : undefined}
                    >
                      {item.imagePath && (
                        <Image src={item.imagePath} alt={item.title} fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                      )}

                      {/* Video play overlay */}
                      {item.type === 'video' && (
                        <a href={item.videoUrl ?? '#'} target="_blank" rel="noopener noreferrer"
                          className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-neon/20 backdrop-blur-sm border border-neon/40
                                          flex items-center justify-center group-hover:bg-neon/30
                                          group-hover:shadow-xl group-hover:shadow-neon/30 transition-all">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                              <polygon points="5,3 19,12 5,21"/>
                            </svg>
                          </div>
                        </a>
                      )}

                      {/* Hover info overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                      flex items-end p-4">
                        <div>
                          <div className="text-white font-headline font-bold text-sm mb-1">{item.title}</div>
                          <div className="text-white/60 text-xs">{item.description}</div>
                        </div>
                      </div>

                      {/* Type badge */}
                      <div className="absolute top-3 right-3 bg-surface-lowest/80 backdrop-blur-sm border border-white/10
                                      rounded-lg px-2 py-0.5">
                        <span className="text-[9px] font-headline font-bold uppercase tracking-wider text-white/70">
                          {item.type}
                        </span>
                      </div>
                    </div>

                    {/* Caption */}
                    <div className="px-1 pt-3 pb-1">
                      <div className="font-headline font-bold text-sm text-white">{item.title}</div>
                      <div className="text-on-surface-variant text-xs mt-1 leading-relaxed">{item.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightbox && (() => {
          const item = mediaDetailItems.find(i => i.id === lightbox)
          if (!item) return null
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={e => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-surface-container rounded-2xl overflow-hidden border border-white/10"
              >
                <div className="relative h-96 md:h-[540px]"
                  style={{ background: `linear-gradient(135deg, ${item.placeholderGradient})` }}>
                  {item.imagePath && (
                    <Image src={item.imagePath} alt={item.title} fill className="object-contain" sizes="896px" />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-headline font-bold text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm">{item.description}</p>
                </div>
                <button onClick={() => setLightbox(null)}
                  className="absolute top-4 right-4 w-9 h-9 bg-surface-lowest/80 backdrop-blur rounded-full
                             border border-white/10 flex items-center justify-center text-white/70 hover:text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6 6 18M6 6l12 12"/>
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )
        })()}
      </AnimatePresence>
    </div>
  )
}
