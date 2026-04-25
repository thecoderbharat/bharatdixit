'use client'

import { useRef, useState } from 'react'

// Placeholder card image colours (replace with real <Image> per card)
const CARDS = [
  {
    id: 'nit-kolkata',
    tag: 'Judge & Mentor',
    tagCls: 'metallic-text',
    title: 'NIT Kolkata Summit',
    desc: 'Presiding over innovation as a technical judge, evaluating breakthrough mobile architectures and AI solutions.',
    placeholderBg: 'from-[#0a1828] to-[#1a3050]',
    active: false,
  },
  {
    id: 'hackindia',
    tag: 'Keynote Presence',
    tagCls: 'text-cyan-400',
    title: 'HackIndia National Lead',
    desc: "Spearheading nation-wide developer ecosystems and mentoring the next generation of full-stack innovators.",
    placeholderBg: 'from-[#0c1428] to-[#1a2848]',
    active: true,
  },
  {
    id: 'ibm-training',
    tag: 'Certified Excellence',
    tagCls: 'metallic-text',
    title: 'IBM Enterprise Training',
    desc: 'Completed advanced certification in enterprise cloud mobility and architectural scalability frameworks.',
    placeholderBg: 'from-[#101828] to-[#1a2038]',
    active: false,
  },
  {
    id: 'recognitions',
    tag: 'Industry Honours',
    tagCls: 'text-primary',
    title: 'Appreciation & Recognitions',
    desc: 'Recognised by peers and leadership for exceptional contributions to enterprise mobile architecture.',
    placeholderBg: 'from-[#0a1020] to-[#1a2030]',
    active: false,
  },
  {
    id: 'media',
    tag: 'Press Coverage',
    tagCls: 'text-cyan-400',
    title: 'Media Recognitions',
    desc: 'Featured in leading technology publications for insights on AI integration and digital transformation.',
    placeholderBg: 'from-[#0c1020] to-[#182030]',
    active: false,
  },
  {
    id: 'certificates',
    tag: 'Credentials',
    tagCls: 'metallic-text',
    title: 'Certifications & Badges',
    desc: 'AWS, Google Flutter, IBM Mobile Architect, and Enterprise Security professional certifications.',
    placeholderBg: 'from-[#0a1428] to-[#1a2040]',
    active: false,
  },
  {
    id: 'ngo-foundation',
    tag: 'Philanthropy',
    tagCls: 'text-orange-400',
    title: 'Founder of NGO',
    desc: 'Founded Shree Kishori Priya Foundation for the elderly in Vrindavan — a mission beyond technology.',
    placeholderBg: 'from-[#1a1010] to-[#2a1808]',
    active: false,
  },
]

export function CoverFlow() {
  const [activeId, setActiveId] = useState('hackindia')
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollTo = (dir: -1 | 1) => {
    if (scrollRef.current) scrollRef.current.scrollLeft += dir * 420
  }

  const handleClick = (id: string) => {
    setActiveId(id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="py-24 overflow-hidden bg-surface-container-low" id="achievements">
      <div className="max-w-[1440px] mx-auto px-8 mb-16 flex justify-between items-end">
        <div>
          <span className="metallic-text font-headline font-bold tracking-widest uppercase text-xs block mb-4">
            Milestones &amp; Recognition
          </span>
          <h2 className="font-headline text-5xl font-bold tracking-tighter">Strategic Impact</h2>
        </div>
        <div className="flex gap-4">
          <button onClick={() => scrollTo(-1)}
            className="p-4 border border-outline-variant/30 rounded-full hover:bg-primary hover:text-on-primary transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button onClick={() => scrollTo(1)}
            className="p-4 border border-outline-variant/30 rounded-full hover:bg-primary hover:text-on-primary transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-8 px-8 overflow-x-auto pb-12 snap-x-mandatory scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {CARDS.map((card) => {
          const isActive = card.id === activeId
          return (
            <div
              key={card.id}
              onClick={() => handleClick(card.id)}
              className={`min-w-[400px] p-8 rounded-xl snap-center cursor-pointer transition-all
                ${isActive
                  ? 'bg-surface-container-highest border-2 border-primary/40 shadow-2xl shadow-primary/10 scale-105 relative z-10'
                  : 'bg-surface-container-high border border-outline-variant/10 hover:border-primary/30 group'
                }`}
            >
              {/* Image placeholder — replace with <Image> when you have real photos */}
              <div className={`h-64 w-full mb-8 overflow-hidden rounded-lg bg-gradient-to-br ${card.placeholderBg} relative`}>
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="text-white/20 font-headline font-bold text-lg uppercase tracking-widest">
                    {card.title}
                  </span>
                </div>
              </div>

              <span className={`text-[10px] font-bold uppercase tracking-widest mb-2 block ${card.tagCls}`}>
                {card.tag}
              </span>
              <h3 className="font-headline text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{card.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
