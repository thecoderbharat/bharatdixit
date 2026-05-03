// ============================================================
// data/portfolio.ts  —  Single source of truth for all content.
// To activate real images: set the imagePath / src field on each
// object, then drop the file into the matching public/ folder.
// ============================================================

// ── Hero Slides ───────────────────────────────────────────────────
export interface HeroSlide {
  badge: string; badgeCls: string; badgeTextCls: string
  line1: string; line2: string; line2Cls: string; desc: string
  btn1Cls: string; btn1: string; btn2: string
  /** Set to '/hero/slide-N.webp' once you drop the file in public/hero/ */
  imagePath: string | null
  placeholderBg: string
}

export const heroSlides: HeroSlide[] = [
  { badge: 'Global Executive Leadership', badgeCls: 'border-primary/20 bg-primary/5', badgeTextCls: 'metallic-text', line1: 'International', line2: 'Tech Leader', line2Cls: 'from-primary to-secondary', desc: 'Spearheading nation-wide developer ecosystems and mentoring the next generation of full-stack innovators on a global stage.', btn1Cls: 'bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-xl shadow-primary/10', btn1: 'View Milestones', btn2: 'Technical Vision', imagePath: null, placeholderBg: 'from-[#0a1830] to-[#070e1d]' },
  { badge: 'Advanced Technical Depth', badgeCls: 'border-secondary/20 bg-secondary/5', badgeTextCls: 'text-secondary', line1: 'Senior Mobile', line2: 'Architect', line2Cls: 'from-cyan-400 to-blue-500', desc: 'Engineering sophisticated mobile ecosystems and scaling enterprise architectures for mission-critical digital infrastructure.', btn1Cls: 'bg-gradient-to-r from-secondary to-[#7903fd] text-on-secondary shadow-xl shadow-secondary/10', btn1: 'Architecture Stack', btn2: 'Case Studies', imagePath: null, placeholderBg: 'from-[#0a1428] to-[#070e1d]' },
  { badge: 'Strategic Command', badgeCls: 'border-primary/20 bg-primary/5', badgeTextCls: 'metallic-text', line1: 'Chief Technology', line2: 'Officer', line2Cls: 'from-primary to-secondary', desc: 'Directing global AI-health-tech strategy and overseeing monumental technological transformations at scale.', btn1Cls: 'bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-xl shadow-primary/10', btn1: 'Executive Presence', btn2: 'Connect Today', imagePath: null, placeholderBg: 'from-[#0c1428] to-[#070e1d]' },
]

// ── Cover Flow Cards ──────────────────────────────────────────────
export interface CoverCard {
  id: string; tag: string; tagCls: string; title: string; desc: string
  /** Set to '/coverflow/<name>.webp' once file is in public/coverflow/ */
  imagePath: string | null
  placeholderBg: string
}

export const coverCards: CoverCard[] = [
  { id: 'judging',       tag: 'Judge & Mentor',      tagCls: 'text-cyan-400',   title: 'Judging & Mentorship',        desc: 'Technical jury member at HackIndia, NIT Kolkata, NIT Delhi, Chitkara University, Smart India Hackathon, and more.',       imagePath: null, placeholderBg: 'from-[#0a1828] to-[#1a3050]' },
  { id: 'ibm-training',  tag: 'Certified Excellence',tagCls: 'metallic-text',   title: 'IBM Enterprise Training',     desc: 'Completed advanced certification in enterprise cloud mobility and architectural scalability frameworks.',                   imagePath: null, placeholderBg: 'from-[#101828] to-[#1a2038]' },
  { id: 'recognitions',  tag: 'Industry Honours',    tagCls: 'text-primary',    title: 'Appreciation & Recognitions', desc: 'Recognised by peers and leadership for exceptional contributions to enterprise mobile architecture.',                    imagePath: null, placeholderBg: 'from-[#0a1020] to-[#1a2030]' },
  { id: 'media',         tag: 'Press Coverage',      tagCls: 'text-cyan-400',   title: 'Media Recognitions',          desc: 'Featured in leading technology publications for insights on AI integration and digital transformation.',                 imagePath: null, placeholderBg: 'from-[#0c1020] to-[#182030]' },
  { id: 'certificates',  tag: 'Credentials',         tagCls: 'metallic-text',   title: 'Certifications & Badges',     desc: 'AWS, Google Flutter, IBM Mobile Architect, and Enterprise Security professional certifications.',                      imagePath: null, placeholderBg: 'from-[#0a1428] to-[#1a2040]' },
  { id: 'ngo-foundation',tag: 'Philanthropy',         tagCls: 'text-orange-400', title: 'Founder of NGO',              desc: 'Founded Shree Kishori Priya Foundation for the elderly in Vrindavan — a mission beyond technology.',                    imagePath: null, placeholderBg: 'from-[#1a1010] to-[#2a1808]' },
]

// ── Judging Events (unified section) ─────────────────────────────
export type JudgingType = 'national' | 'university' | 'international'

export interface JudgingEvent {
  id: string
  institution: string
  role: string
  year: string
  type: JudgingType
  shortDesc: string
  fullDesc: string
  tags: string[]
  /** Drop file into public/judging/<id>.webp */
  imagePath: string | null
  placeholderGradient: string
}

export const judgingEvents: JudgingEvent[] = [
  {
    id: 'hackindia',
    institution: 'HackIndia Appointment — Judge Panel',
    role: 'International Tech Lead Judge',
    year: '2026',
    type: 'national',
    shortDesc: "Appointed as International Tech Lead Judge for HackIndia's national andinternational hackathons, evaluating 50+ finalist teams on engineering excellence and scalability.",
    fullDesc: "Appointed as an International Tech Lead Judge for HackIndia's prestigious national and international hackathons. Evaluated over 500+ teams across multiple engineering disciplines, including mobile development, AI/ML, Web3, and FinTech. Provided in-depth feedback on code quality, architectural decisions, and scalability potential. Engaged with finalists in a post-judging mentorship session focused on career pathways in technology leadership and enterprise architecture.",
    tags: ['Mobile', 'AI/ML', 'Web3', 'FinTech'],
    imagePath: null,
    placeholderGradient: '#0a1428,#1a2848',
  },
  {
    id: 'nit-delhi',
    institution: 'NIT Delhi',
    role: 'International Tech Lead Judge',
    year: '2026',
    type: 'university',
    shortDesc: "Jury member at NIT Delhi's annual innovation summit, assessing student-built mobile and enterprise solutions.",
    fullDesc: "Invited as a technical panel judge at NIT Delhi's Innovation Summit. Assessed student-built mobile applications and enterprise solutions, focusing on code quality, user experience design, and production readiness. Conducted a post-judging Q&A session on industry pathways in mobile architecture for final-year students.",
    tags: ['Mobile', 'Innovation', 'Enterprise'],
    imagePath: null,
    placeholderGradient: '#101828,#1c2a40',
  },
  {
    id: 'chitkara',
    institution: 'Chitkara University',
    role: 'International Technical Judge',
    year: '2026',
    type: 'university',
    shortDesc: 'Industry expert judge at Chitkara University TechFest, mentoring student teams on real-world architectural challenges.',
    fullDesc: "Served as an industry expert judge at Chitkara University's annual TechFest. Evaluated 30+ student projects across mobile app development, IoT integration, and AI-powered solutions. Provided hands-on mentorship to winning teams, guiding them on transitioning academic projects into production-ready products. Delivered a keynote on clean architecture principles for modern mobile development.",
    tags: ['Flutter', 'IoT', 'Mentorship', 'Keynote'],
    imagePath: null,
    placeholderGradient: '#0c1020,#1a1c30',
  },
  {
    id: 'nit-kolkata',
    institution: 'NIT Kolkata',
    role: 'Technical Panel Judge',
    year: '2026',
    type: 'university',
    shortDesc: 'Invited as Judge for the Hackathon (Hack-o-NiT), evaluating 50+ mobile and AI projects.',
    fullDesc: "Invited as a Judge for the Hackathon (Hack-o-NiT) for NIT Kolkata's Annual Technology Symposium. Evaluated over 50+ innovative mobile applications and AI-driven prototypes across three engineering specialisations — Mobile Development, AI/ML, and Cloud Systems. Provided strategic feedback on clean architecture, scalability patterns, and entrepreneurial viability to final-year engineering students.",
    tags: ['Mobile', 'AI', 'Cloud', 'Architecture'],
    imagePath: null,
    placeholderGradient: '#0a1828,#1a3050',
  },
  {
    id: 'smart-india',
    institution: 'ABES Hackathon',
    role: 'International tech lead judge',
    year: '2026',
    type: 'national',
    shortDesc: "Invitation received to serve as an International Tech Lead Judge at the ABES Hackathon, part of the HackIndia Hackathon series. This prestigious event attracts top student talent from across the country, competing on solutions for national challenges in healthcare, agriculture, and urban development.",
    fullDesc: "Received an invitation to serve as an International Tech Lead Judge at the ABES Hackathon, a key event in the HackIndia Hackathon series. This prestigious competition draws top student talent from across India, challenging them to develop innovative solutions for national issues in healthcare, agriculture, and urban development. As a judge, I will evaluate projects based on technical innovation, scalability, and real-world impact, while also providing mentorship to finalists on enterprise architecture and product strategy.",
    tags: ['GovTech', 'Healthcare', 'AgriTech', 'Scale'],
    imagePath: null,
    placeholderGradient: '#0a1020,#162030',
  },
  // {
  //   id: 'amity',
  //   institution: 'Amity University',
  //   role: 'Tech Lead Mentor & Judge',
  //   year: '2022',
  //   type: 'university',
  //   shortDesc: 'Mentor and judge at Amity University Hackathon, coaching teams on architecture design and production readiness.',
  //   fullDesc: "Served as Tech Lead Mentor and Judge at the Amity University Hackathon. Worked directly with competing teams throughout the event as a mentor, then assessed final presentations as part of the judging panel. Focused on evaluating technical depth, architecture decisions, and the teams' ability to articulate their solutions to non-technical stakeholders — a critical enterprise skill.",
  //   tags: ['Mentorship', 'Architecture', 'Enterprise'],
  //   imagePath: null,
  //   placeholderGradient: '#101018,#1c1828',
  // },
]

// ── Module Sections (non-judging) ─────────────────────────────────
export interface ModuleSection {
  id: string; tag: string; title: string; body: string[]; ctaLabel: string
  /** Set to '/modules/<id>/<filename>.webp' */
  imageSrc: string | null
  imageAlt: string; placeholderGradient: string; imageAspect: string
  layout: 'image-left' | 'image-right'
  imageWrapperCls?: string
}

export const moduleSections: ModuleSection[] = [
  { id: 'ibm-training',  tag: 'Enterprise Knowledge Transfer', title: 'Empowering the Next Generation at IBM',      body: ['Orchestrated intensive technical bootcamps for senior developers and system architects. Focused on enterprise-grade Flutter architecture, CI/CD pipelines, and cloud-native mobile integration strategies to ensure mission-ready readiness.'], ctaLabel: 'Technical Knowledge Transfer',     imageSrc: null, imageAlt: 'Bharat Kumar Dixit conducting architecture training at IBM', placeholderGradient: '#101828,#1a2038', imageAspect: 'aspect-video', layout: 'image-left' },
  { id: 'recognitions',  tag: 'Peer Recognition',              title: 'Appreciation & Recognitions',                body: ['Recognised for outstanding technical leadership during enterprise migrations, infrastructure design, and community-building initiatives across IBM and Vigorus.ai.'], ctaLabel: 'View All Awards',                 imageSrc: null, imageAlt: 'Bharat Kumar Dixit recognition awards', placeholderGradient: '#0a1020,#1a2030', imageAspect: 'aspect-video', layout: 'image-right' },
  { id: 'media',         tag: 'Press & Publications',          title: 'Media Recognitions',                         body: ['Featured and interviewed by leading technology publications and business journals for insights on the future of mobile architecture, AI integration, and digital transformation at scale.'], ctaLabel: 'View Press Kit',                  imageSrc: null, imageAlt: 'Bharat Kumar Dixit media appearances and press coverage', placeholderGradient: '#0c1020,#182030', imageAspect: 'aspect-video', layout: 'image-left' },
  { id: 'certificates',  tag: 'Professional Credentials',      title: 'Certifications & Professional Badges',       body: ['Holds active professional certifications across the full modern architecture stack — AWS Solutions Architect, Google Flutter Expert, IBM AI/ML Practitioner, and Microsoft Zero Trust Security Specialist.'], ctaLabel: 'View Credentials',                imageSrc: null, imageAlt: 'Bharat Kumar Dixit professional certifications wall', placeholderGradient: '#0a1428,#1a2040', imageAspect: 'aspect-video', layout: 'image-right' },
  { id: 'ngo-foundation', tag: 'Philanthropy & Purpose',       title: 'Founder of Shree Kishori Priya Foundation', body: ["Beyond technology, my mission is to provide dignified living and healthcare for the elderly. The Shree Kishori Priya Foundation is dedicated to supporting abandoned senior citizens in Vrindavan, fostering a community of care and spiritual peace."], ctaLabel: 'Support the Cause',               imageSrc: null, imageAlt: 'Shree Kishori Priya Foundation Old Age Home in Vrindavan', placeholderGradient: '#1a1010,#2a1808', imageAspect: 'aspect-[4/5]', layout: 'image-right' },
]

// ── Career Timeline ───────────────────────────────────────────────
export interface TimelineRole {
  period: string; side: 'left' | 'right'; dotCls: string; borderCls: string
  company: string; companyCls: string; role: string; desc: string; periodCls: string
  logoPath: string | null
}

export const timelineRoles: TimelineRole[] = [
  { period: 'Jan 2023 — Present', side: 'left',  dotCls: 'bg-primary shadow-[0_0_15px_rgba(180,197,255,0.8)]',   borderCls: 'border-primary/20',         company: 'Vigorus.ai',  companyCls: 'metallic-text', role: 'Chief Technology Officer',              desc: 'Directing global AI-health-tech strategy, overseeing full-stack mobile architecture, and scaling product-led growth across international markets.', periodCls: 'text-primary/40',   logoPath: null },
  { period: 'Jan 2022 — Present', side: 'right', dotCls: 'bg-secondary shadow-[0_0_15px_rgba(212,187,255,0.4)]', borderCls: 'border-secondary/20',       company: 'IBM',         companyCls: 'metallic-text', role: 'Senior Mobile Application Architect', desc: 'Leading enterprise-grade mobile architecture for Fortune 500 clients — designing scalable Flutter and Swift/Kotlin native stacks, defining CI/CD pipelines, and driving cross-functional engineering teams across healthcare and financial services.', periodCls: 'text-secondary/40', logoPath: null },
  { period: 'Apr 2014 — Jan 2022', side: 'left', dotCls: 'bg-primary/60',                                         borderCls: 'border-outline-variant/30', company: 'Other Companies', companyCls: 'metallic-text', role: 'Mobile Application Developer & Architect', desc: 'Over eight years of progressive mobile engineering across multiple organisations — building cross-platform applications for logistics, e-commerce, healthcare, and finance. Grew from hands-on developer to lead architect, establishing expertise in iOS, Android, React Native, and enterprise-scale system design.', periodCls: 'text-primary/40',   logoPath: null },
]

// ── Whitepapers ───────────────────────────────────────────────────
export interface Whitepaper {
  id: string; tag: string; tagColor: string; title: string; description: string
  meta: string; pdfUrl: string; iconName: string
  /** Set to '/whitepapers/<name>.webp' for real thumbnails */
  thumbnailPath: string | null
  gradient: string
}

export const whitepapers: Whitepaper[] = [
  { id: 'wp-1', tag: 'AI Tech',   tagColor: '#00d2ff', title: 'Scaling AI in Healthcare',      description: 'A deep dive into the architectural challenges of deploying LLMs in clinical environments. Exploring data privacy, low-latency inference, and the integration of predictive models into existing medical workflows at hospital scale.', meta: 'Q1 2024 · 30 MIN READ', pdfUrl: '#', iconName: 'HeartPulse',  thumbnailPath: null, gradient: 'from-[#00d2ff]/10 via-transparent to-transparent' },
  { id: 'wp-2', tag: 'Mobile',    tagColor: '#b4c5ff', title: 'Clean Mobile Monoliths',         description: 'Analysing the shift from micro-frontends back to robust, highly modular monolithic architectures in enterprise mobile applications. Strategies for managing build times and complex navigation states at scale.', meta: 'Q3 2023 · 22 MIN READ', pdfUrl: '#', iconName: 'Smartphone',   thumbnailPath: null, gradient: 'from-primary/10 via-transparent to-transparent' },
  { id: 'wp-3', tag: 'Cloud',     tagColor: '#d4af37', title: 'Distributed State Management',  description: 'Examining transactional consistency across distributed systems without sacrificing performance. A hybrid approach using event sourcing and real-time synchronisation in globally distributed architectures.', meta: 'Q2 2024 · 18 MIN READ', pdfUrl: '#', iconName: 'Network',      thumbnailPath: null, gradient: 'from-[#d4af37]/10 via-transparent to-transparent' },
  { id: 'wp-4', tag: 'Interface', tagColor: '#00d2ff', title: 'Precision Visualization',       description: 'Research into high-fidelity data visualisation for surgical planning. Discussing the UX of complexity and how to render millions of data points on consumer-grade mobile hardware using custom GPU shaders.', meta: 'Q1 2023 · 28 MIN READ', pdfUrl: '#', iconName: 'BarChart3',    thumbnailPath: null, gradient: 'from-[#00d2ff]/10 via-transparent to-transparent' },
  { id: 'wp-5', tag: 'Security',  tagColor: '#b4c5ff', title: 'Zero Trust Health Networks',    description: 'A framework for securing medical IoT devices using Zero Trust principles. Addressing vulnerability of edge devices and implementing identity-centric security at the hardware level.', meta: 'Q4 2023 · 25 MIN READ', pdfUrl: '#', iconName: 'ShieldCheck',  thumbnailPath: null, gradient: 'from-primary/10 via-transparent to-transparent' },
  { id: 'wp-6', tag: 'Strategy',  tagColor: '#d4af37', title: 'The Architectural Legacy',      description: 'A philosophical and technical inquiry into building software that lasts for decades. Lessons from civil engineering applied to digital infrastructure, focusing on documentation and interface stability.', meta: 'Q2 2024 · 15 MIN READ', pdfUrl: '#', iconName: 'Landmark',     thumbnailPath: null, gradient: 'from-[#d4af37]/10 via-transparent to-transparent' },
]

// ── Gallery ───────────────────────────────────────────────────────
export type GalleryCategory = 'all' | 'london' | 'hackathons' | 'ibm' | 'ngo'

export interface GalleryImage {
  id: string; label: string; category: Exclude<GalleryCategory, 'all'>; tall: boolean
  /** Set to '/gallery/<category>/<filename>.webp' */
  src: string | null
  placeholderGradient: string
}

export interface GalleryVideo {
  id: string; tag: string; title: string
  thumbnailPath: string | null
  placeholderGradient: string; videoUrl: string
}

export const galleryImages: GalleryImage[] = [
  { id: 'g1',  label: 'London Tech Summit',    category: 'london',     tall: true,  src: null, placeholderGradient: '#0a1828,#1a3a5c' },
  { id: 'g2',  label: 'London Boardroom',       category: 'london',     tall: false, src: null, placeholderGradient: '#101820,#2a3a4a' },
  { id: 'g3',  label: 'City Architecture',      category: 'london',     tall: false, src: null, placeholderGradient: '#181820,#2a2a40' },
  { id: 'g4',  label: 'HackIndia Finals',       category: 'hackathons', tall: false, src: null, placeholderGradient: '#0c1828,#1a2840' },
  { id: 'g5',  label: 'Judging Panel',          category: 'hackathons', tall: true,  src: null, placeholderGradient: '#101828,#202838' },
  { id: 'g6',  label: 'NIT Kolkata Event',      category: 'hackathons', tall: false, src: null, placeholderGradient: '#0a1020,#1a2030' },
  { id: 'g7',  label: 'IBM Workshop',           category: 'ibm',        tall: false, src: null, placeholderGradient: '#181018,#281828' },
  { id: 'g8',  label: 'IBM Mentorship Session', category: 'ibm',        tall: true,  src: null, placeholderGradient: '#101820,#202838' },
  { id: 'g9',  label: 'NGO Training Day',       category: 'ngo',        tall: false, src: null, placeholderGradient: '#0c1420,#1c2430' },
  { id: 'g10', label: 'Community Outreach',     category: 'ngo',        tall: false, src: null, placeholderGradient: '#0a1820,#182030' },
  { id: 'g11', label: 'Youth Digital Literacy', category: 'ngo',        tall: true,  src: null, placeholderGradient: '#0c1820,#1a2838' },
  { id: 'g12', label: 'Tech Conference',        category: 'london',     tall: false, src: null, placeholderGradient: '#101828,#202840' },
]

export const galleryVideos: GalleryVideo[] = [
  { id: 'v1', tag: 'KEYNOTE SPEECH',     title: 'The Future of Decentralised Architecture', thumbnailPath: null, placeholderGradient: '#0a1828,#1a3050', videoUrl: '#' },
  { id: 'v2', tag: 'PANEL DISCUSSION',   title: 'Bridging the Gap: Mentorship in AI',       thumbnailPath: null, placeholderGradient: '#101820,#202838', videoUrl: '#' },
  { id: 'v3', tag: 'DEVELOPER INSIGHTS', title: 'Mastering Systems Design: Live Coding',    thumbnailPath: null, placeholderGradient: '#0c1820,#182838', videoUrl: '#' },
]

export const galleryCategories: { value: GalleryCategory; label: string }[] = [
  { value: 'all', label: 'All' }, { value: 'london', label: 'London Tech Tour' },
  { value: 'hackathons', label: 'Hackathons' }, { value: 'ibm', label: 'IBM Mentorship' },
  { value: 'ngo', label: 'NGO Activities' },
]
