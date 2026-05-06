'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { judgingEvents, judgingMediaItems } from '@/data/portfolio'
import { cld, ytThumb, ytUrl } from '@/lib/cloudinary'

export function JudgingEventPage({ eventId }: { eventId: string }) {
  const [mediaFilter, setMediaFilter] = useState<'all' | 'image' | 'video'>('all')
  const [lightbox, setLightbox] = useState<string | null>(null)

  const event = judgingEvents.find(e => e.id === eventId)

  if (!event) return (
    <div className="min-h-screen pt-32 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-6">🔍</div>
        <h2 className="font-headline text-3xl font-bold text-white mb-4">Event Not Found</h2>
        <Link href="/#judging"
          className="text-primary font-headline font-bold text-sm uppercase tracking-widest hover:underline">
          ← Back to Judging Section
        </Link>
      </div>
    </div>
  )

  const allMedia = judgingMediaItems.filter(m => m.judgingEventId === eventId)
  const filteredMedia = allMedia.filter(m => mediaFilter === 'all' || m.type === mediaFilter)

  const typeColor = event.type === 'national' ? '#00d2ff'
    : event.type === 'university' ? '#b4c5ff' : '#d4bbff'

  return (
    <div className="min-h-screen pb-24">

      {/* ── HERO BANNER ── */}
      <div className="relative h-[480px] md:h-[560px] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${event.placeholderGradient})` }}>
          {event.imagePath && (
            <Image src={cld(event.imagePath!, 'w_1920,h_1080,c_fill,g_face')} alt={event.institution} fill
              className="object-cover opacity-40" sizes="100vw" priority />
          )}
        </div>
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface/30 via-surface/60 to-surface" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/80 to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-8 pb-16">
          {/* Back link */}
          <Link href="/#judging"
            className="absolute top-28 left-8 inline-flex items-center gap-2 text-white/60
                       hover:text-primary font-headline font-bold text-[10px] uppercase tracking-widest
                       transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Back to Judging
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full border font-headline font-bold text-[9px] uppercase tracking-widest"
              style={{ color: typeColor, borderColor: `${typeColor}40`, background: `${typeColor}10` }}>
              {event.type}
            </span>
            <span className="text-[10px] font-headline font-bold tracking-widest text-white/40 uppercase">
              {event.year}
            </span>
          </div>

          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-white leading-tight mb-4 max-w-3xl">
            {event.institution}
          </h1>
          <p className="metallic-text font-bold text-sm tracking-widest uppercase mb-5">
            {event.role}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {event.tags.map(tag => (
              <span key={tag}
                className="text-[9px] font-headline font-bold uppercase tracking-wider
                           text-on-surface-variant border border-outline-variant/40
                           px-3 py-1 rounded-full bg-surface-container/60 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── EVENT DESCRIPTION ── */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <span className="metallic-text font-headline font-bold tracking-[0.3em] uppercase text-xs block mb-4">
              About This Event
            </span>
            <h2 className="font-headline text-3xl font-bold text-white tracking-tight mb-6">
              Event Overview
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              {event.fullDesc}
            </p>
          </div>

          {/* Stats sidebar */}
          <div className="flex flex-col gap-4">
            <div className="bg-surface-container rounded-2xl border border-white/5 p-6">
              <div className="text-[9px] font-headline font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-4">
                Event Details
              </div>
              {[
                { label: 'Year', value: event.year },
                { label: 'Type', value: event.type.charAt(0).toUpperCase() + event.type.slice(1) },
                { label: 'Role', value: event.role },
                { label: 'Media Items', value: `${allMedia.length} items` },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-0">
                  <span className="text-xs text-on-surface-variant font-body">{label}</span>
                  <span className="text-xs font-headline font-bold text-white">{value}</span>
                </div>
              ))}
            </div>

            {/* Media count cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-surface-container rounded-xl border border-white/5 p-4 text-center">
                <div className="font-headline font-bold text-2xl text-primary mb-1">
                  {allMedia.filter(m => m.type === 'image').length}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">Photos</div>
              </div>
              <div className="bg-surface-container rounded-xl border border-white/5 p-4 text-center">
                <div className="font-headline font-bold text-2xl text-neon mb-1">
                  {allMedia.filter(m => m.type === 'video').length}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">Videos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MEDIA SECTION ── */}
      <div className="max-w-7xl mx-auto px-8">
        {/* Section header + filter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8
                        pb-6 border-b border-white/5">
          <div>
            <h2 className="font-headline text-3xl font-bold text-white tracking-tight">
              Event Media
            </h2>
            <p className="text-on-surface-variant text-sm mt-1">
              {filteredMedia.length} {mediaFilter === 'all' ? 'items' : mediaFilter + 's'} from this event
            </p>
          </div>
          <div className="flex items-center gap-1 bg-surface-container-low rounded-xl p-1">
            {(['all', 'image', 'video'] as const).map(f => (
              <button key={f} onClick={() => setMediaFilter(f)}
                className={`px-4 py-2 rounded-lg font-headline font-bold text-[10px] uppercase
                            tracking-widest transition-all
                            ${mediaFilter === f
                              ? 'bg-surface-container-highest text-white shadow'
                              : 'text-white/40 hover:text-white/70'}`}>
                {f === 'all' ? 'All' : f === 'image' ? '📷 Images' : '🎬 Videos'}
              </button>
            ))}
          </div>
        </div>

        {/* Media grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mediaFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filteredMedia.length === 0 ? (
              <div className="text-center py-24 text-on-surface-variant">
                <div className="text-6xl mb-5">
                  {mediaFilter === 'video' ? '🎬' : mediaFilter === 'image' ? '📷' : '🎞️'}
                </div>
                <h3 className="font-headline text-xl font-bold text-white/60 mb-2">
                  No {mediaFilter === 'all' ? 'media' : mediaFilter + 's'} yet
                </h3>
                <p className="text-sm opacity-50 max-w-md mx-auto">
                  Drop files into{' '}
                  <code className="bg-surface-container px-2 py-0.5 rounded text-primary text-xs">
                    public/judging/{eventId}/
                  </code>{' '}
                  and set the imagePath in data/portfolio.ts
                </p>
              </div>
            ) : (
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
                {filteredMedia.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="break-inside-avoid mb-5"
                  >
                    <div
                      className={`relative rounded-xl overflow-hidden group cursor-pointer border border-white/5
                                  hover:border-white/15 transition-all
                                  ${item.type === 'video' ? 'h-56' : i % 4 === 0 ? 'h-80' : 'h-56'}`}
                      style={{ background: `linear-gradient(135deg, ${item.placeholderGradient})` }}
                      onClick={() => item.type === 'image' ? setLightbox(item.id) : undefined}
                    >
                      {/* Show Cloudinary image OR YouTube thumbnail */}
                      {item.type === 'image' && item.imagePath && (
                        <Image src={cld(item.imagePath, 'c_fill,g_auto')} alt={item.title} fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                      )}
                      {item.type === 'video' && item.youtubeId && (
                        <Image src={ytThumb(item.youtubeId)} alt={item.title} fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          unoptimized />
                      )}

                      {/* Video play button */}
                      {item.type === 'video' && (
                        item.youtubeId ? (
                          <a href={ytUrl(item.youtubeId)} target="_blank" rel="noopener noreferrer"
                            aria-label={`Watch ${item.title} on YouTube`}
                            className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-neon/20 backdrop-blur-sm border border-neon/40
                                            flex items-center justify-center group-hover:bg-neon/30
                                            group-hover:shadow-2xl group-hover:shadow-neon/40 transition-all duration-300">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                <polygon points="5,3 19,12 5,21"/>
                              </svg>
                            </div>
                          </a>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20
                                            flex items-center justify-center">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" fillOpacity="0.4">
                                <polygon points="5,3 19,12 5,21"/>
                              </svg>
                            </div>
                          </div>
                        )
                      )}

                      {/* Image zoom icon */}
                      {item.type === 'image' && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0
                                        group-hover:opacity-100 transition-opacity bg-black/20">
                          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20
                                          flex items-center justify-center">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                              <circle cx="11" cy="11" r="8"/>
                              <path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/>
                            </svg>
                          </div>
                        </div>
                      )}

                      {/* Info overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent
                                      opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <div>
                          <div className="text-white font-headline font-bold text-sm mb-1">{item.title}</div>
                          <div className="text-white/60 text-xs leading-snug">{item.description}</div>
                        </div>
                      </div>

                      {/* Type pill */}
                      <div className="absolute top-3 right-3 bg-surface-lowest/80 backdrop-blur-sm
                                      border border-white/10 rounded-lg px-2 py-0.5">
                        <span className="text-[9px] font-headline font-bold uppercase tracking-wider text-white/70">
                          {item.type === 'video' ? '🎬 Video' : '📷 Photo'}
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
          const item = judgingMediaItems.find(i => i.id === lightbox)
          if (!item) return null
          const idx = filteredMedia.findIndex(m => m.id === lightbox)
          const prev = idx > 0 ? filteredMedia[idx - 1].id : null
          const next = idx < filteredMedia.length - 1 ? filteredMedia[idx + 1].id : null

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.92 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.92 }}
                onClick={e => e.stopPropagation()}
                className="relative max-w-5xl w-full"
              >
                {/* Image */}
                <div className="relative rounded-xl overflow-hidden bg-surface-container"
                  style={{ height: 'min(75vh, 600px)', background: `linear-gradient(135deg, ${item.placeholderGradient})` }}>
                  {item.imagePath && (
                    <Image src={cld(item.imagePath, 'c_limit,w_1200')} alt={item.title} fill className="object-contain" sizes="1200px" />
                  )}
                </div>
                {/* Caption */}
                <div className="mt-4 px-2">
                  <h3 className="font-headline font-bold text-lg text-white mb-1">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm">{item.description}</p>
                </div>

                {/* Close */}
                <button onClick={() => setLightbox(null)}
                  className="absolute -top-4 -right-4 w-9 h-9 bg-surface-container border border-white/10
                             rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6 6 18M6 6l12 12"/>
                  </svg>
                </button>

                {/* Prev/Next */}
                {prev && (
                  <button onClick={() => setLightbox(prev)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-surface-container/80
                               backdrop-blur border border-white/10 rounded-full flex items-center justify-center
                               text-white/70 hover:text-white transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m15 18-6-6 6-6"/>
                    </svg>
                  </button>
                )}
                {next && (
                  <button onClick={() => setLightbox(next)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-surface-container/80
                               backdrop-blur border border-white/10 rounded-full flex items-center justify-center
                               text-white/70 hover:text-white transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </button>
                )}
              </motion.div>
            </motion.div>
          )
        })()}
      </AnimatePresence>
    </div>
  )
}
