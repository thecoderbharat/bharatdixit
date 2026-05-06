'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { galleryVideos } from '@/data/portfolio'
import { ytThumb, ytUrl } from '@/lib/cloudinary'

export function VideoGrid() {
  return (
    <div>
      <h2 className="text-3xl font-headline font-bold text-white mb-3 tracking-tight">
        Keynote Presentations
      </h2>
      <p className="text-on-surface-variant mb-10 text-sm leading-relaxed">
        Curated insights and recorded sessions from international forums and technology summits.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {galleryVideos.map((video, i) => {
          const thumbSrc  = video.youtubeId ? ytThumb(video.youtubeId)  : null
          const watchHref = video.youtubeId ? ytUrl(video.youtubeId)    : null

          return (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              {/* Thumbnail */}
              <div
                className="relative rounded-xl overflow-hidden mb-4 h-52"
                style={!thumbSrc ? { background: `linear-gradient(135deg, ${video.placeholderGradient})` } : undefined}
              >
                {thumbSrc && (
                  <Image
                    src={thumbSrc}
                    alt={video.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    unoptimized   // YouTube thumbnails are served directly — no Next.js transform needed
                  />
                )}

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center
                                bg-black/20 group-hover:bg-black/10 transition-colors">
                  {watchHref ? (
                    <a
                      href={watchHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Watch ${video.title} on YouTube`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.12 }}
                        className="w-16 h-16 rounded-full bg-neon/20 backdrop-blur border border-neon/40
                                   flex items-center justify-center group-hover:bg-neon/30
                                   group-hover:shadow-xl group-hover:shadow-neon/30 transition-all duration-300"
                      >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="none">
                          <polygon points="5,3 19,12 5,21"/>
                        </svg>
                      </motion.div>
                    </a>
                  ) : (
                    /* Placeholder play button when no YouTube ID yet */
                    <motion.div
                      whileHover={{ scale: 1.06 }}
                      className="w-16 h-16 rounded-full bg-white/10 backdrop-blur border border-white/20
                                 flex items-center justify-center"
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="white" fillOpacity="0.4" stroke="none">
                        <polygon points="5,3 19,12 5,21"/>
                      </svg>
                    </motion.div>
                  )}
                </div>

                {/* YouTube badge */}
                {video.youtubeId && (
                  <div className="absolute top-3 right-3 bg-red-600/90 backdrop-blur-sm
                                  border border-red-500/50 rounded-lg px-2.5 py-1">
                    <span className="text-[9px] font-headline font-bold text-white tracking-wider">
                      YouTube
                    </span>
                  </div>
                )}
              </div>

              {/* Meta */}
              <div className="metallic-text font-headline font-bold text-[10px] uppercase tracking-widest mb-2">
                {video.tag}
              </div>
              <div className="text-white font-headline font-bold text-lg leading-tight
                              group-hover:text-cyan-400 transition-colors">
                {video.title}
              </div>
              {watchHref && (
                <a
                  href={watchHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2 text-[10px] uppercase tracking-widest
                             font-bold text-on-surface-variant hover:text-neon transition-colors"
                >
                  Watch on YouTube
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
