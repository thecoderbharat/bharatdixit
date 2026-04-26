'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { galleryVideos } from '@/data/portfolio'

export function VideoGrid() {
  return (
    <div>
      <h2 className="text-3xl font-headline font-bold text-white mb-3 tracking-tight">Keynote Presentations</h2>
      <p className="text-on-surface-variant mb-10 text-sm leading-relaxed">Curated insights and recorded sessions from international forums and technology summits.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {galleryVideos.map((video, i) => (
          <motion.div key={video.id}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="group cursor-pointer">
            <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Watch: ${video.title}`}>
              <div className="relative rounded-xl overflow-hidden mb-4 h-52"
                style={!video.thumbnailPath ? { background: `linear-gradient(135deg, ${video.placeholderGradient})` } : undefined}>
                {video.thumbnailPath && (
                  <Image src={video.thumbnailPath} alt={video.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div whileHover={{ scale: 1.12 }}
                    className="w-16 h-16 rounded-full bg-neon/20 backdrop-blur border border-neon/40 flex items-center justify-center group-hover:bg-neon/30 group-hover:shadow-xl group-hover:shadow-neon/30 transition-all duration-300">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="none"><polygon points="5,3 19,12 5,21"/></svg>
                  </motion.div>
                </div>
              </div>
            </a>
            <div className="metallic-text font-headline font-bold text-[10px] uppercase tracking-widest mb-2">{video.tag}</div>
            <div className="text-white font-headline font-bold text-lg leading-tight group-hover:text-cyan-400 transition-colors">{video.title}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
