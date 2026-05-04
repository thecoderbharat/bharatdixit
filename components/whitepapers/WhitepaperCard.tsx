'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  HeartPulse, Smartphone, Network, BarChart3, ShieldCheck, Landmark, ExternalLink,
} from 'lucide-react'
import type { Whitepaper } from '@/data/portfolio'

const ICON_MAP: Record<string, React.ElementType> = {
  HeartPulse, Smartphone, Network, BarChart3, ShieldCheck, Landmark,
}

export function WhitepaperCard({ paper, delay = 0 }: { paper: Whitepaper; delay?: number }) {
  const Icon = ICON_MAP[paper.iconName] ?? Landmark

  // ── The inner card markup (same for both link types) ──────────────
  const cardContent = (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className="glass-card rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-neon/5 transition-all duration-500 flex flex-col cursor-pointer"
    >
      {/* Thumbnail */}
      <div className="relative h-64 overflow-hidden flex items-center justify-center bg-surface-lowest">
        {paper.thumbnailPath ? (
          <Image
            src={paper.thumbnailPath}
            alt={`${paper.title} — Bharat Dixit whitepaper thumbnail`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        ) : (
          <>
            <div
              className="absolute inset-0"
              style={{ background: `radial-gradient(ellipse at 50% 60%, ${paper.tagColor}18 0%, transparent 70%)` }}
            />
            <Icon size={80} className="relative z-10" style={{ color: `${paper.tagColor}45` }} />
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-lowest to-transparent opacity-60 pointer-events-none" />
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-surface-highest/80 backdrop-blur px-3 py-1 rounded text-[10px] text-white font-headline uppercase tracking-widest border border-white/10">
            {paper.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-xl font-headline font-bold text-white mb-4 group-hover:text-neon transition-colors leading-tight">
          {paper.title}
        </h3>
        <p className="text-on-surface-variant font-body text-sm leading-relaxed flex-1">
          {paper.description}
        </p>
        <div className="mt-6 pt-5 border-t border-white/5 flex justify-between items-center">
          <span className="text-gold font-headline font-bold text-[10px] uppercase tracking-widest">
            {paper.meta}
          </span>
          <span className="flex items-center gap-1.5 text-neon font-headline font-bold text-xs uppercase tracking-wider group/btn">
            {paper.route ? 'Read More' : paper.pdfUrl && paper.pdfUrl !== '#' ? 'Read PDF' : 'Coming Soon'}
            <ExternalLink
              size={14}
              className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
            />
          </span>
        </div>
      </div>
    </motion.article>
  )

  // ── If the whitepaper has an internal route → use Next.js Link ────
  if (paper.route) {
    return (
      <Link href={paper.route} className="block no-underline">
        {cardContent}
      </Link>
    )
  }

  // ── No route and no real PDF yet — render as non-interactive card ──
  if (!paper.pdfUrl || paper.pdfUrl === '#') {
    return (
      <div
        aria-label={`${paper.title} — coming soon`}
        className="block cursor-default"
      >
        {cardContent}
      </div>
    )
  }

  // ── Otherwise open the PDF directly in a new tab ──
  return (
    <a
      href={paper.pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Read ${paper.title} PDF`}
      className="block no-underline"
    >
      {cardContent}
    </a>
  )
}
