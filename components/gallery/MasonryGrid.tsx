'use client'

import Image from 'next/image'
import { cld } from '@/lib/cloudinary'
import { motion, AnimatePresence } from 'framer-motion'
import type { GalleryImage, GalleryCategory } from '@/data/portfolio'

interface MasonryGridProps {
  images: GalleryImage[]
  filter: GalleryCategory
}

export function MasonryGrid({ images, filter }: MasonryGridProps) {
  const visible = filter === 'all' ? images : images.filter(img => img.category === filter)

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
      <AnimatePresence>
        {visible.map((img) => (
          <motion.div
            key={img.id} layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="break-inside-avoid mb-4 rounded-xl overflow-hidden relative group cursor-pointer"
          >
            <div
              className={`relative overflow-hidden ${img.tall ? 'h-80' : 'h-48'}`}
              style={!img.src ? { background: `linear-gradient(135deg, ${img.placeholderGradient})` } : undefined}
            >
              {img.src ? (
                <Image
                  src={cld(img.src, 'c_fill,g_auto')}
                  alt={`Bharat Kumar Dixit — ${img.label}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : null}

              {/* Zoom overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/>
                </svg>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <span className="text-white/70 font-headline font-bold text-[10px] uppercase tracking-widest">{img.label}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
