'use client'

import { cn } from '@/lib/utils'

interface MediaToggleProps {
  value: 'images' | 'videos'
  onChange: (v: 'images' | 'videos') => void
}

export function MediaToggle({ value, onChange }: MediaToggleProps) {
  return (
    <div className="flex items-center gap-1 bg-surface-low rounded-xl p-1 flex-shrink-0">
      {(['images', 'videos'] as const).map((type) => (
        <button
          key={type}
          onClick={() => onChange(type)}
          className={cn(
            'px-5 py-2 rounded-lg font-headline font-bold text-xs uppercase tracking-widest transition-all duration-300',
            value === type
              ? 'bg-surface-highest text-white shadow'
              : 'text-white/40 hover:text-white/70',
          )}
        >
          {type}
        </button>
      ))}
    </div>
  )
}
