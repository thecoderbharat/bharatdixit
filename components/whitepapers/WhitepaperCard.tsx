'use client'

import Image from 'next/image'
import { cld } from '@/lib/cloudinary'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  HeartPulse, Smartphone, Network, BarChart3, ShieldCheck, Landmark,
  Activity, ExternalLink, ArrowRight,
} from 'lucide-react'
import type { Whitepaper } from '@/data/portfolio'

const ICON_MAP: Record<string, React.ElementType> = {
  HeartPulse, Smartphone, Network, BarChart3, ShieldCheck, Landmark, Activity,
}

export function WhitepaperCard({ paper, delay = 0 }: { paper: Whitepaper; delay?: number }) {
  const router = useRouter()
  const Icon = ICON_MAP[paper.iconName] ?? Landmark

  const handleAction = () => {
    if (paper.route) {
      router.push(paper.route)
    } else if (paper.pdfUrl && paper.pdfUrl !== '#') {
      window.open(paper.pdfUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      onClick={handleAction}
      className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:shadow-2xl
                 hover:shadow-primary/5 transition-all duration-500 flex flex-col border border-white/5
                 hover:border-primary/20"
    >
      {/* Thumbnail */}
      <div className="relative h-64 overflow-hidden flex items-center justify-center bg-surface-lowest">
        {paper.thumbnailPath ? (
          <Image
            src={cld(paper.thumbnailPath!, 'w_800,h_512,c_fill')}
            alt={`${paper.title} — whitepaper by Bharat Kumar Dixit`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        ) : (
          <>
            <div className="absolute inset-0"
              style={{ background: `radial-gradient(ellipse at 50% 60%, ${paper.tagColor}18 0%, transparent 70%)` }} />
            <Icon size={80} className="relative z-10" style={{ color: `${paper.tagColor}45` }} />
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-lowest to-transparent opacity-60 pointer-events-none" />

        {/* Tag badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-surface-highest/80 backdrop-blur px-3 py-1 rounded text-[10px]
                           text-white font-headline uppercase tracking-widest border border-white/10">
            {paper.tag}
          </span>
        </div>

        {/* Has detail page indicator */}
        {paper.route && (
          <div className="absolute top-4 right-4 z-20 bg-primary/20 backdrop-blur border border-primary/30
                          rounded-lg px-2.5 py-1">
            <span className="text-[9px] font-headline font-bold text-primary uppercase tracking-wider">
              Full Paper
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-xl font-headline font-bold text-white mb-4 group-hover:text-neon
                       transition-colors leading-tight">
          {paper.title}
        </h3>
        <p className="text-on-surface-variant font-body text-sm leading-relaxed flex-1">
          {paper.description}
        </p>

        <div className="mt-6 pt-5 border-t border-white/5 flex justify-between items-center">
          <span className="text-gold font-headline font-bold text-[10px] uppercase tracking-widest">
            {paper.meta}
          </span>

          {paper.route ? (
            <span className="flex items-center gap-1.5 text-neon font-headline font-bold text-xs
                             uppercase tracking-wider group/btn">
              Read Paper
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          ) : (
            <a
              href={paper.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Download ${paper.title} PDF`}
              onClick={e => e.stopPropagation()}
              className="flex items-center gap-1.5 text-neon font-headline font-bold text-xs
                         uppercase tracking-wider group/btn"
            >
              Download PDF
              <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
