'use client'

import { useState } from 'react'
import type { GalleryCategory } from '@/data/portfolio'
import { galleryImages } from '@/data/portfolio'
import { GalleryFilters } from '@/components/gallery/GalleryFilters'
import { MediaToggle }    from '@/components/gallery/MediaToggle'
import { MasonryGrid }   from '@/components/gallery/MasonryGrid'
import { VideoGrid }     from '@/components/gallery/VideoGrid'

// Note: export const metadata doesn't work in 'use client' files.
// SEO for this page is handled via generateMetadata in a wrapper,
// but since gallery is pure client interaction, the layout.tsx title
// template handles the page title automatically.

export default function GalleryPage() {
  const [filter, setFilter]       = useState<GalleryCategory>('all')
  const [mediaType, setMediaType] = useState<'images' | 'videos'>('images')

  return (
    <div className="pt-32 pb-24">
      <header className="max-w-screen-2xl mx-auto px-6 md:px-24 mb-12">
        <span className="text-gold font-headline font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">
          Archives &amp; Impact
        </span>
        <h1 className="text-5xl md:text-7xl font-bold font-headline text-on-surface tracking-tighter leading-none mb-4">
          Media &amp; Appearances
        </h1>
        <p className="text-on-surface-variant text-lg font-light max-w-2xl leading-relaxed">
          Photos and videos from Bharat Kumar Dixit&apos;s international appearances, judging events,
          IBM mentorship sessions, London Tech Tour, and NGO activities.
        </p>
      </header>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-24 mb-12 flex flex-col md:flex-row
                      gap-6 items-start md:items-center justify-between">
        <GalleryFilters active={filter} onChange={setFilter} />
        <MediaToggle value={mediaType} onChange={setMediaType} />
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-24">
        {mediaType === 'images'
          ? <MasonryGrid images={galleryImages} filter={filter} />
          : <VideoGrid />}
      </div>
    </div>
  )
}
