// ============================================================
// data/portfolio.ts
// Central data layer for Bharat Kumar Dixit's portfolio.
// All UI components consume from here — never hardcode content.
// ============================================================

export interface Achievement {
  id: string
  title: string
  shortTitle: string
  icon: string            // Lucide icon name
  accentColor: string
  moduleId: string        // Matching HTML section id
  summary: string
}

export interface Module {
  id: string
  tag: string
  title: string
  body: string[]
  ctaLabel: string
  imageAlt: string
  imagePlaceholderGradient: string
  layout: 'image-left' | 'image-right'
}

export interface TimelineEntry {
  period: string
  role: string
  company: string
  companyColor: string
  description: string
  tags: string[]
}

export interface SkillCategory {
  category: string
  accentColor: string
  skills: string[]
}

export interface Whitepaper {
  id: string
  tag: string
  tagColor: string
  title: string
  description: string
  meta: string
  pdfUrl: string
  iconName: string
  gradient: string
}

export interface GalleryImage {
  id: string
  label: string
  category: GalleryCategory
  tall: boolean
  gradient: string
}

export interface GalleryVideo {
  id: string
  tag: string
  title: string
  gradient: string
}

export type GalleryCategory = 'all' | 'london' | 'hackathons' | 'ibm' | 'ngo'

// ------------------------------------------------------------------
// ACHIEVEMENTS
// ------------------------------------------------------------------
export const achievements: Achievement[] = [
  {
    id: 'nit',
    title: 'Judging At NIT Kolkata',
    shortTitle: 'NIT Kolkata',
    icon: 'GraduationCap',
    accentColor: '#00d2ff',
    moduleId: 'module-nit',
    summary: 'Panel judge evaluating final-year engineering projects.',
  },
  {
    id: 'hackindia',
    title: 'Tech Lead Judge — HackIndia',
    shortTitle: 'HackIndia',
    icon: 'Trophy',
    accentColor: '#d4af37',
    moduleId: 'module-hackindia',
    summary: 'National lead judge across 50+ competing teams.',
  },
  {
    id: 'ibm',
    title: 'Architecture Training IBM',
    shortTitle: 'IBM Training',
    icon: 'Building2',
    accentColor: '#b4c5ff',
    moduleId: 'module-ibm',
    summary: 'Delivered enterprise mobile architecture training at IBM.',
  },
  {
    id: 'appreciation',
    title: 'Appreciation & Recognitions',
    shortTitle: 'Recognitions',
    icon: 'Award',
    accentColor: '#d4af37',
    moduleId: 'module-appreciation',
    summary: 'Peer and industry awards for architectural excellence.',
  },
  {
    id: 'media',
    title: 'Media Recognitions',
    shortTitle: 'Media',
    icon: 'Newspaper',
    accentColor: '#00d2ff',
    moduleId: 'module-media',
    summary: 'Featured in international technology publications.',
  },
  {
    id: 'certificates',
    title: 'Certificates',
    shortTitle: 'Certificates',
    icon: 'BadgeCheck',
    accentColor: '#b4c5ff',
    moduleId: 'module-certificates',
    summary: 'AWS, Google, IBM, and Microsoft professional credentials.',
  },
  {
    id: 'ngo',
    title: 'Founder of NGO',
    shortTitle: 'NGO Founder',
    icon: 'Heart',
    accentColor: '#d4af37',
    moduleId: 'module-ngo',
    summary: 'Founded Shree Kishori Priya Foundation for digital literacy.',
  },
]

// ------------------------------------------------------------------
// MODULES (detailed sections)
// ------------------------------------------------------------------
export const modules: Module[] = [
  {
    id: 'module-nit',
    tag: 'Academic Excellence',
    title: 'Judging At NIT Kolkata',
    body: [
      'Invited as a panel judge at NIT Kolkata\'s Annual Technology Symposium, evaluating final-year mobile and web engineering projects across three specialisations.',
      'Provided strategic feedback covering clean architecture, scalability patterns, and entrepreneurial viability — mentoring the next generation of Indian engineers.',
    ],
    ctaLabel: 'View Details',
    imageAlt: 'NIT Kolkata judging panel',
    imagePlaceholderGradient: 'from-neon/10 to-transparent',
    layout: 'image-left',
  },
  {
    id: 'module-hackindia',
    tag: 'National Leadership',
    title: 'International Tech Lead Judge — HackIndia',
    body: [
      'Served as lead judge at HackIndia\'s national finals, the largest university hackathon in South Asia, evaluating over 50 finalist teams against industry-grade engineering and business criteria.',
      'Collaborated on the judging panel with representatives from Google, Microsoft, and NASSCOM, setting precedent for evaluation standards at national scale.',
    ],
    ctaLabel: 'View Details',
    imageAlt: 'HackIndia judging stage',
    imagePlaceholderGradient: 'from-gold/10 to-transparent',
    layout: 'image-right',
  },
  {
    id: 'module-ibm',
    tag: 'Enterprise Training',
    title: 'Empowering the Next Generation at IBM',
    body: [
      'Delivered a multi-day enterprise architecture training programme to IBM\'s incoming engineering cohort, covering Flutter architecture, CI/CD pipelines, and cloud-native mobile development patterns.',
      'The curriculum — built from real production experience — was subsequently adopted as part of IBM India\'s internal mobile onboarding programme.',
    ],
    ctaLabel: 'View Details',
    imageAlt: 'IBM training workshop',
    imagePlaceholderGradient: 'from-primary/10 to-transparent',
    layout: 'image-left',
  },
  {
    id: 'module-appreciation',
    tag: 'Peer Recognition',
    title: 'Appreciation & Recognitions',
    body: [
      'Recognised by peers and leadership for exceptional contributions to enterprise mobile architecture, mentorship, and cross-functional team delivery.',
      'Awards include Excellence Award for team growth, Architect of the Year for reducing clinical review time by 40%, and an Interconnected community leadership honour.',
    ],
    ctaLabel: 'View All Awards',
    imageAlt: 'Award ceremony',
    imagePlaceholderGradient: 'from-gold/10 to-transparent',
    layout: 'image-right',
  },
  {
    id: 'module-media',
    tag: 'Press & Publications',
    title: 'Media Recognitions',
    body: [
      'Featured across international technology publications and broadcast media as a voice on AI integration in healthcare, mobile-first enterprise architecture, and the future of decentralised systems.',
      'Coverage spans Deccan Chronicle, Zoho TV, India Today Tech, and specialist engineering platforms reaching over 2 million monthly readers.',
    ],
    ctaLabel: 'View Press Kit',
    imageAlt: 'Media appearances',
    imagePlaceholderGradient: 'from-neon/10 to-transparent',
    layout: 'image-left',
  },
  {
    id: 'module-certificates',
    tag: 'Professional Credentials',
    title: 'Certifications & Professional Badges',
    body: [
      'Holds active professional certifications across the full modern architecture stack — from cloud infrastructure to AI practitioner credentials.',
      'Certifications include AWS Solutions Architect, Google Flutter Expert, IBM AI/ML Practitioner, and Microsoft Zero Trust Security Specialist.',
    ],
    ctaLabel: 'View Credentials',
    imageAlt: 'Professional certificates',
    imagePlaceholderGradient: 'from-primary/10 to-transparent',
    layout: 'image-right',
  },
  {
    id: 'module-ngo',
    tag: 'Social Impact',
    title: 'Founder of Shree Kishori Priya Foundation',
    body: [
      'Founded the NGO with a dual mission: delivering digital literacy education to underprivileged youth, and deploying technology to preserve cultural heritage across regional communities.',
      'The foundation has trained over 500 students in programming fundamentals, mobile app usage, and digital entrepreneurship — creating measurable economic mobility in three districts.',
    ],
    ctaLabel: 'Learn More',
    imageAlt: 'Shree Kishori Priya Foundation',
    imagePlaceholderGradient: 'from-gold/10 to-transparent',
    layout: 'image-left',
  },
]

// ------------------------------------------------------------------
// CAREER TIMELINE
// ------------------------------------------------------------------
export const timeline: TimelineEntry[] = [
  {
    period: '2023 — Present',
    role: 'Chief Technology Officer',
    company: 'Vigorus.ai',
    companyColor: '#00d2ff',
    description:
      'Architecting AI-native healthcare platforms at enterprise scale. Establishing technical vision, leading cross-functional global teams, and translating clinical requirements into production-grade systems.',
    tags: ['AI/ML', 'Healthcare', 'Leadership', 'Architecture'],
  },
  {
    period: '2022 — 2026',
    role: 'Mobile Tech Lead',
    company: 'IBM',
    companyColor: '#b4c5ff',
    description:
      'Led a team of 12 mobile engineers building enterprise-grade Flutter applications for Fortune 500 clients across healthcare and financial services verticals.',
    tags: ['Flutter', 'Enterprise', 'Team Lead', 'IBM'],
  },
  {
    period: '2019 — 2021',
    role: 'Senior Mobile Architect',
    company: 'Independent / Consulting',
    companyColor: '#d4af37',
    description:
      'Designed and delivered mobile-first architectures for 10+ startups, specialising in cross-platform performance optimisation and clean architecture patterns.',
    tags: ['Mobile', 'Consulting', 'Clean Arch', 'Startup'],
  },
  {
    period: '2016 — 2019',
    role: 'Mobile Developer',
    company: 'Various Agencies',
    companyColor: '#b4c5ff',
    description:
      'Developed native iOS and Android applications for clients spanning e-commerce, logistics, and consumer finance. Established foundational expertise in cross-platform tooling.',
    tags: ['iOS', 'Android', 'React Native', 'Swift'],
  },
]

// ------------------------------------------------------------------
// SKILLS
// ------------------------------------------------------------------
export const skillCategories: SkillCategory[] = [
  {
    category: 'Mobile / Core',
    accentColor: '#00d2ff',
    skills: ['Flutter', 'Swift', 'Kotlin', 'React Native', 'Dart', 'iOS', 'Android', 'SwiftUI', 'Jetpack Compose'],
  },
  {
    category: 'Web / Backend',
    accentColor: '#b4c5ff',
    skills: ['Next.js', 'Node.js', 'TypeScript', 'GraphQL', 'REST APIs', 'Python', 'FastAPI', 'PostgreSQL'],
  },
  {
    category: 'AI / HealthTech',
    accentColor: '#d4af37',
    skills: ['TensorFlow', 'PyTorch', 'LangChain', 'Clinical NLP', 'HL7 FHIR', 'ML Ops', 'LLM Integration', 'OpenAI API'],
  },
  {
    category: 'Architecture / DevOps',
    accentColor: '#b4c5ff',
    skills: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Clean Architecture', 'DDD', 'Event Sourcing', 'Terraform'],
  },
]

// ------------------------------------------------------------------
// WHITEPAPERS
// ------------------------------------------------------------------
export const whitepapers: Whitepaper[] = [
  {
    id: 'wp-1',
    tag: 'AI Tech',
    tagColor: '#00d2ff',
    title: 'Scaling AI in Healthcare',
    description:
      'A deep dive into the architectural challenges of deploying LLMs in clinical environments. This research explores data privacy, low-latency inference, and the integration of predictive models into existing medical workflows at hospital scale.',
    meta: 'Q1 2024 · 30 MIN READ',
    pdfUrl: '#',
    iconName: 'HeartPulse',
    gradient: 'from-[#00d2ff]/10 via-transparent to-transparent',
  },
  {
    id: 'wp-2',
    tag: 'Mobile',
    tagColor: '#b4c5ff',
    title: 'Clean Mobile Monoliths',
    description:
      'Analysing the shift from micro-frontends back to robust, highly modular monolithic architectures in enterprise mobile applications. Strategies for managing build times, complex navigation states, and shared state at scale.',
    meta: 'Q3 2023 · 22 MIN READ',
    pdfUrl: '#',
    iconName: 'Smartphone',
    gradient: 'from-primary/10 via-transparent to-transparent',
  },
  {
    id: 'wp-3',
    tag: 'Cloud',
    tagColor: '#d4af37',
    title: 'Distributed State Management',
    description:
      'Examining transactional consistency across distributed systems without sacrificing performance. This paper outlines a hybrid approach using event sourcing and real-time synchronisation in globally distributed architectures.',
    meta: 'Q2 2024 · 18 MIN READ',
    pdfUrl: '#',
    iconName: 'Network',
    gradient: 'from-gold/10 via-transparent to-transparent',
  },
  {
    id: 'wp-4',
    tag: 'Interface',
    tagColor: '#00d2ff',
    title: 'Precision Visualization',
    description:
      'Research into high-fidelity data visualisation for surgical planning. Discussing the UX of complexity and how to render millions of data points on consumer-grade mobile hardware using custom GPU shaders.',
    meta: 'Q1 2023 · 28 MIN READ',
    pdfUrl: '#',
    iconName: 'BarChart3',
    gradient: 'from-[#00d2ff]/10 via-transparent to-transparent',
  },
  {
    id: 'wp-5',
    tag: 'Security',
    tagColor: '#b4c5ff',
    title: 'Zero Trust Health Networks',
    description:
      'A framework for securing medical IoT devices using Zero Trust principles. Addressing the vulnerability of edge devices and the methodology for implementing identity-centric security at the hardware level.',
    meta: 'Q4 2023 · 25 MIN READ',
    pdfUrl: '#',
    iconName: 'ShieldCheck',
    gradient: 'from-primary/10 via-transparent to-transparent',
  },
  {
    id: 'wp-6',
    tag: 'Strategy',
    tagColor: '#d4af37',
    title: 'The Architectural Legacy',
    description:
      'A philosophical and technical inquiry into building software that lasts for decades. Lessons from civil engineering applied to digital infrastructure, focusing on documentation and interface stability.',
    meta: 'Q2 2024 · 15 MIN READ',
    pdfUrl: '#',
    iconName: 'Landmark',
    gradient: 'from-gold/10 via-transparent to-transparent',
  },
]

// ------------------------------------------------------------------
// GALLERY
// ------------------------------------------------------------------
export const galleryImages: GalleryImage[] = [
  { id: 'g1', label: 'London Tech Summit', category: 'london', tall: true, gradient: 'from-[#0a1828] to-[#1a3a5c]' },
  { id: 'g2', label: 'London Boardroom', category: 'london', tall: false, gradient: 'from-[#101820] to-[#2a3a4a]' },
  { id: 'g3', label: 'City Architecture', category: 'london', tall: false, gradient: 'from-[#181820] to-[#2a2a40]' },
  { id: 'g4', label: 'HackIndia Finals', category: 'hackathons', tall: false, gradient: 'from-[#0c1828] to-[#1a2840]' },
  { id: 'g5', label: 'Judging Panel', category: 'hackathons', tall: true, gradient: 'from-[#101828] to-[#202838]' },
  { id: 'g6', label: 'NIT Kolkata', category: 'hackathons', tall: false, gradient: 'from-[#0a1020] to-[#1a2030]' },
  { id: 'g7', label: 'IBM Workshop', category: 'ibm', tall: false, gradient: 'from-[#181018] to-[#281828]' },
  { id: 'g8', label: 'IBM Mentorship Session', category: 'ibm', tall: true, gradient: 'from-[#101820] to-[#202838]' },
  { id: 'g9', label: 'NGO Training Day', category: 'ngo', tall: false, gradient: 'from-[#0c1420] to-[#1c2430]' },
  { id: 'g10', label: 'Community Outreach', category: 'ngo', tall: false, gradient: 'from-[#0a1820] to-[#182030]' },
  { id: 'g11', label: 'Youth Digital Literacy', category: 'ngo', tall: true, gradient: 'from-[#0c1820] to-[#1a2838]' },
  { id: 'g12', label: 'Tech Conference', category: 'london', tall: false, gradient: 'from-[#101828] to-[#202840]' },
]

export const galleryVideos: GalleryVideo[] = [
  {
    id: 'v1',
    tag: 'KEYNOTE SPEECH',
    title: 'The Future of Decentralised Architecture',
    gradient: 'from-[#0a1828] to-[#1a3050]',
  },
  {
    id: 'v2',
    tag: 'PANEL DISCUSSION',
    title: 'Bridging the Gap: Mentorship in AI',
    gradient: 'from-[#101820] to-[#202838]',
  },
  {
    id: 'v3',
    tag: 'DEVELOPER INSIGHTS',
    title: 'Mastering Systems Design: Live Coding',
    gradient: 'from-[#0c1820] to-[#182838]',
  },
]

export const galleryCategories: { value: GalleryCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'london', label: 'London Tech Tour' },
  { value: 'hackathons', label: 'Hackathons' },
  { value: 'ibm', label: 'IBM Mentorship' },
  { value: 'ngo', label: 'NGO Activities' },
]
