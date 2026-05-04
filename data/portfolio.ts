// ============================================================
// data/portfolio.ts  —  Single source of truth for all content.
// ============================================================

// ── Hero Slides ───────────────────────────────────────────────────
export interface HeroSlide {
  badge: string; badgeCls: string; badgeTextCls: string
  line1: string; line2: string; line2Cls: string; desc: string
  btn1Cls: string; btn1: string; btn2: string
  imagePath: string | null
  placeholderBg: string
}

export const heroSlides: HeroSlide[] = [
  { badge: 'Global Executive Leadership', badgeCls: 'border-primary/20 bg-primary/5', badgeTextCls: 'metallic-text', line1: 'International', line2: 'Tech Leader', line2Cls: 'from-primary to-secondary', desc: 'Spearheading nation-wide developer ecosystems and mentoring the next generation of full-stack innovators on a global stage.', btn1Cls: 'bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-xl shadow-primary/10', btn1: 'View Milestones', btn2: 'Technical Vision', imagePath: null, placeholderBg: 'from-[#0a1830] to-[#070e1d]' },
  { badge: 'Advanced Technical Depth', badgeCls: 'border-secondary/20 bg-secondary/5', badgeTextCls: 'text-secondary', line1: 'Senior Mobile', line2: 'Architect', line2Cls: 'from-cyan-400 to-blue-500', desc: 'Engineering sophisticated mobile ecosystems and scaling enterprise architectures for mission-critical digital infrastructure.', btn1Cls: 'bg-gradient-to-r from-secondary to-[#7903fd] text-on-secondary shadow-xl shadow-secondary/10', btn1: 'Architecture Stack', btn2: 'Case Studies', imagePath: null, placeholderBg: 'from-[#0a1428] to-[#070e1d]' },
  { badge: 'Strategic Command', badgeCls: 'border-primary/20 bg-primary/5', badgeTextCls: 'metallic-text', line1: 'Chief Technology', line2: 'Officer', line2Cls: 'from-primary to-secondary', desc: 'Directing global AI-health-tech strategy and overseeing monumental technological transformations at scale.', btn1Cls: 'bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-xl shadow-primary/10', btn1: 'Executive Presence', btn2: 'Connect Today', imagePath: null, placeholderBg: 'from-[#0c1428] to-[#070e1d]' },
]

// ── Whitepapers ───────────────────────────────────────────────────
export interface Whitepaper {
  id: string
  tag: string
  tagColor: string
  title: string
  description: string
  meta: string
  pdfUrl: string
  /** Internal Next.js route — if set, card navigates here instead of opening pdfUrl directly */
  route?: string
  iconName: string
  /** Set to '/whitepapers/<name>.webp' for real thumbnails */
  thumbnailPath: string | null
  gradient: string
}

export const whitepapers: Whitepaper[] = [
  {
    id: 'wp-1',
    tag: 'AI Tech',
    tagColor: '#00d2ff',
    title: 'Scaling AI in Healthcare',
    description: 'A deep dive into the architectural challenges of deploying LLMs in clinical environments. Exploring data privacy, low-latency inference, and the integration of predictive models into existing medical workflows at hospital scale.',
    meta: 'Q1 2024 · 30 MIN READ',
    pdfUrl: '/whitepapers/vigorus-ai-whitepaper-v11.pdf',
    route: '/whitepapers/vigorus-ai',   // ← navigates to full whitepaper page
    iconName: 'HeartPulse',
    thumbnailPath: null,
    gradient: 'from-[#00d2ff]/10 via-transparent to-transparent',
  },
  {
    id: 'wp-2',
    tag: 'Mobile',
    tagColor: '#b4c5ff',
    title: 'Clean Mobile Monoliths',
    description: 'Analysing the shift from micro-frontends back to robust, highly modular monolithic architectures in enterprise mobile applications. Strategies for managing build times and complex navigation states at scale.',
    meta: 'Q3 2023 · 22 MIN READ',
    pdfUrl: '#',
    iconName: 'Smartphone',
    thumbnailPath: null,
    gradient: 'from-primary/10 via-transparent to-transparent',
  },
  {
    id: 'wp-3',
    tag: 'Cloud',
    tagColor: '#d4af37',
    title: 'Distributed State Management',
    description: 'Examining transactional consistency across distributed systems without sacrificing performance. A hybrid approach using event sourcing and real-time synchronisation in globally distributed architectures.',
    meta: 'Q2 2024 · 18 MIN READ',
    pdfUrl: '#',
    iconName: 'Network',
    thumbnailPath: null,
    gradient: 'from-[#d4af37]/10 via-transparent to-transparent',
  },
  {
    id: 'wp-4',
    tag: 'Interface',
    tagColor: '#00d2ff',
    title: 'Precision Visualization',
    description: 'Research into high-fidelity data visualisation for surgical planning. Discussing the UX of complexity and how to render millions of data points on consumer-grade mobile hardware using custom GPU shaders.',
    meta: 'Q1 2023 · 28 MIN READ',
    pdfUrl: '#',
    iconName: 'BarChart3',
    thumbnailPath: null,
    gradient: 'from-[#00d2ff]/10 via-transparent to-transparent',
  },
  {
    id: 'wp-5',
    tag: 'Security',
    tagColor: '#b4c5ff',
    title: 'Zero Trust Health Networks',
    description: 'A framework for securing medical IoT devices using Zero Trust principles. Addressing vulnerability of edge devices and implementing identity-centric security at the hardware level.',
    meta: 'Q4 2023 · 25 MIN READ',
    pdfUrl: '#',
    iconName: 'ShieldCheck',
    thumbnailPath: null,
    gradient: 'from-primary/10 via-transparent to-transparent',
  },
  {
    id: 'wp-6',
    tag: 'Strategy',
    tagColor: '#d4af37',
    title: 'The Architectural Legacy',
    description: 'A philosophical and technical inquiry into building software that lasts for decades. Lessons from civil engineering applied to digital infrastructure, focusing on documentation and interface stability.',
    meta: 'Q2 2024 · 15 MIN READ',
    pdfUrl: '#',
    iconName: 'Landmark',
    thumbnailPath: null,
    gradient: 'from-[#d4af37]/10 via-transparent to-transparent',
  },
]

// ── Gallery ───────────────────────────────────────────────────
export type GalleryCategory = 'all' | 'london' | 'hackathons' | 'ibm' | 'ngo'

export interface GalleryImage {
  id: string; label: string; category: Exclude<GalleryCategory, 'all'>; tall: boolean
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
