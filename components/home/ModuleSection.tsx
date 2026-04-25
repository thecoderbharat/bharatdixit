'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={className}>
      {children}
    </motion.div>
  )
}

/** Generic image placeholder — swap for <Image> when you have real photos */
function ImgPlaceholder({ label, gradient, className = '' }: { label: string; gradient: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-white/10 ${className}`}
      style={{ background: `linear-gradient(135deg, ${gradient})` }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white/15 font-headline font-bold text-2xl uppercase tracking-widest text-center px-6">
          {label}
        </span>
      </div>
    </div>
  )
}

export function ModuleSections() {
  return (
    <>
      {/* ── 1. NIT Kolkata ─────────────────────────────────────────── */}
      <section className="py-32 bg-surface border-y border-white/5" id="nit-kolkata">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 blur-2xl group-hover:bg-primary/30 transition-all rounded-2xl" />
              {/* REPLACE: <Image src="/images/nit-kolkata.jpg" alt="..." fill className="object-cover img-grayscale" /> */}
              <ImgPlaceholder label="NIT Kolkata Summit" gradient="#0a1828,#1a3050"
                className="aspect-video img-grayscale" />
            </div>
          </Reveal>
          <Reveal>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mb-8" />
            <h2 className="font-headline text-5xl font-bold tracking-tight mb-6">Judging at NIT Kolkata</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Invited as a guest of honor and technical jury member for the annual technical symposium.
              Evaluated over 50+ innovative mobile applications and AI-driven prototypes, providing
              strategic feedback to the next generation of engineers.
            </p>
            <div className="h-px w-full bg-gradient-to-r from-outline-variant/50 to-transparent mb-8" />
            <button className="px-8 py-3 border border-primary/40 text-primary font-headline font-bold uppercase tracking-widest text-xs hover:bg-primary/10 transition-colors">
              Event Gallery
            </button>
          </Reveal>
        </div>
      </section>

      {/* ── 2. HackIndia ───────────────────────────────────────────── */}
      <section className="py-32 bg-surface-container-low" id="hackindia">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal className="order-2 lg:order-1">
            <span className="metallic-text font-bold tracking-[0.3em] uppercase text-xs block mb-4">National Recognition</span>
            <h2 className="font-headline text-5xl font-bold tracking-tight mb-6">
              International Tech Lead Judge — HackIndia
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
              Spearheading the technical evaluation framework for one of India's largest national hackathons.
              Collaborated with industry veterans to mentor and judge high-impact solutions across Web3, FinTech,
              and Mobile sectors.
            </p>
            <button className="px-8 py-4 bg-surface-container-high border border-outline-variant/30 rounded-xl text-on-surface font-headline font-bold uppercase tracking-widest text-xs hover:border-secondary transition-all">
              View Certificate/Details
            </button>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <div className="relative p-2 bg-gradient-to-tr from-secondary/40 via-transparent to-primary/40 rounded-3xl">
              <div className="bg-surface p-4 rounded-2xl overflow-hidden shadow-2xl">
                {/* REPLACE with <Image src="/images/hackindia.jpg" ... /> */}
                <ImgPlaceholder label="HackIndia National Lead" gradient="#0c1428,#1a2848"
                  className="w-full aspect-video rounded-xl" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 3. IBM Training ────────────────────────────────────────── */}
      <section className="py-32 bg-surface border-y border-white/5" id="ibm-training">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />
              <div className="relative border-4 border-surface-container-highest p-1 bg-surface rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                {/* REPLACE with <Image src="/images/ibm-training.jpg" ... /> */}
                <ImgPlaceholder label="IBM Architecture Training" gradient="#101828,#1a2038"
                  className="w-full aspect-video rounded-xl" />
              </div>
            </div>
          </Reveal>
          <Reveal>
            <h2 className="font-headline text-5xl font-bold tracking-tight mb-6">
              Empowering the Next Generation at IBM
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Orchestrated intensive technical bootcamps for senior developers and system architects.
              Focused on enterprise-grade Flutter architecture, CI/CD pipelines, and cloud-native mobile
              integration strategies to ensure mission-ready readiness.
            </p>
            <div className="flex items-center gap-4 text-cyan-400 font-bold uppercase tracking-widest text-xs">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
              </svg>
              Technical Knowledge Transfer
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4. Appreciation & Recognitions ─────────────────────────── */}
      <section className="py-32 bg-surface-container-lowest" id="recognitions">
        <div className="max-w-7xl mx-auto px-8">
          <Reveal className="text-center mb-16">
            <h2 className="font-headline text-5xl font-bold tracking-tight mb-4">
              Appreciation &amp; Recognitions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-transparent mx-auto" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'primary', label: 'Excellence Award', desc: 'Recognized for outstanding technical leadership during the Q3 enterprise migration at IBM.', color: 'primary', hover: 'hover:border-primary/40' },
              { icon: 'secondary', label: 'Architect of the Year', desc: 'Honored for designing the core infrastructure of the Vigorus.ai health-tech platform.', color: 'secondary', hover: 'hover:border-secondary/40' },
              { icon: 'cyan', label: 'Innovation Lead', desc: "Awarded for spearheading the 'Zero-Lag' mobile initiative across cross-functional teams.", color: 'cyan', hover: 'hover:border-cyan-400/40' },
            ].map((item, i) => (
              <Reveal key={i}>
                <div className={`bg-surface-container p-8 rounded-2xl border border-white/5 ${item.hover} transition-all group cursor-pointer`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform
                    ${item.color === 'primary' ? 'bg-primary/10' : item.color === 'secondary' ? 'bg-secondary/10' : 'bg-cyan-400/10'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={item.color === 'cyan' ? '#22d3ee' : 'currentColor'} strokeWidth="2"
                      className={item.color === 'primary' ? 'text-primary' : item.color === 'secondary' ? 'text-secondary' : ''}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h4 className="font-headline text-xl font-bold mb-3">{item.label}</h4>
                  <p className="text-on-surface-variant text-sm">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Media Recognitions ──────────────────────────────────── */}
      <section className="py-32 bg-surface" id="media">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <h2 className="font-headline text-5xl font-bold tracking-tight mb-6">Media Recognitions</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Featured and interviewed by leading technology publications and business journals for insights
              on the future of mobile architecture, AI integration, and digital transformation at scale.
            </p>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              {['TechCrunch', 'Forbes Tech', 'Wired', 'The Verge'].map((pub) => (
                <div key={pub} className="h-32 bg-surface-container rounded-xl border border-white/5 flex items-center justify-center group hover:bg-surface-container-high transition-colors">
                  <span className="font-headline font-bold text-slate-500 group-hover:text-primary transition-colors tracking-tighter text-xl italic uppercase">
                    {pub}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 6. Certifications ──────────────────────────────────────── */}
      <section className="py-32 bg-surface-container-low overflow-hidden" id="certificates">
        <div className="max-w-7xl mx-auto px-8 mb-16 text-center">
          <h2 className="font-headline text-5xl font-bold tracking-tight">
            Certifications &amp; Professional Badges
          </h2>
        </div>
        {/* Auto-scrolling badge strip */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap gap-12 w-max px-8">
            {[
              { icon: '🏆', title: 'IBM Certified\nMobile Architect', color: 'text-primary' },
              { icon: '☁️', title: 'AWS Solutions\nAssociate', color: 'text-secondary' },
              { icon: '⌨️', title: 'Google Flutter\nSpecialist', color: 'text-cyan-400' },
              { icon: '🛡️', title: 'Enterprise\nSecurity Certified', color: 'text-primary' },
              { icon: '✨', title: 'AI Implementation\nSpecialist', color: 'text-secondary' },
              /* Duplicated for seamless loop */
              { icon: '🏆', title: 'IBM Certified\nMobile Architect', color: 'text-primary' },
              { icon: '☁️', title: 'AWS Solutions\nAssociate', color: 'text-secondary' },
              { icon: '⌨️', title: 'Google Flutter\nSpecialist', color: 'text-cyan-400' },
              { icon: '🛡️', title: 'Enterprise\nSecurity Certified', color: 'text-primary' },
              { icon: '✨', title: 'AI Implementation\nSpecialist', color: 'text-secondary' },
            ].map((cert, i) => (
              <div key={i}
                className="w-48 h-56 bg-surface-container-high rounded-t-full rounded-b-xl border border-white/10 flex flex-col items-center justify-center p-6 shadow-xl flex-shrink-0">
                <span className={`text-5xl mb-4 ${cert.color}`}>{cert.icon}</span>
                <span className="text-center font-bold text-[10px] uppercase tracking-widest text-on-surface leading-tight whitespace-pre-line">
                  {cert.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. NGO Foundation ──────────────────────────────────────── */}
      <section className="py-32 bg-gradient-to-b from-surface to-orange-950/10" id="ngo-foundation">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <span className="text-orange-400 font-bold tracking-[0.3em] uppercase text-[10px] block mb-4">
              Philanthropy &amp; Purpose
            </span>
            <h2 className="font-headline text-5xl font-bold tracking-tight mb-4">
              Founder of Shree Kishori Priya Foundation
            </h2>
            <h4 className="text-orange-200/60 font-headline text-xl mb-6">
              Old Age Home NGO in Vrindavan
            </h4>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
              Beyond technology, my mission is to provide dignified living and healthcare for the elderly.
              The Shree Kishori Priya Foundation is dedicated to supporting abandoned senior citizens in Vrindavan,
              fostering a community of care and spiritual peace.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-10 py-4 rounded-xl font-headline font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg shadow-orange-900/40">
              Support the Cause
            </button>
          </Reveal>
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden border-2 border-orange-500/20 shadow-2xl">
              {/* REPLACE with <Image src="/images/vrindavan.jpg" ... /> */}
              <ImgPlaceholder label="Shree Kishori Priya Foundation · Vrindavan"
                gradient="#1a1010,#2a1808"
                className="w-full aspect-[4/5]" />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-950/60 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
