'use client'

import { galleryCategories, type GalleryCategory } from '@/data/portfolio'
import { cn } from '@/lib/utils'

interface GalleryFiltersProps {
  active: GalleryCategory
  onChange: (cat: GalleryCategory) => void
}

export function GalleryFilters({ active, onChange }: GalleryFiltersProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
      {galleryCategories.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={cn(
            'flex-shrink-0 px-5 py-2 rounded-full font-headline font-bold text-xs',
            'uppercase tracking-widest transition-all duration-300',
            active === value
              ? 'bg-neon text-surface shadow-lg shadow-neon/20'
              : 'border border-white/10 text-white/60 hover:border-white/30 hover:text-white',
          )}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
