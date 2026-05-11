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
  { badge: 'Global Executive Leadership', badgeCls: 'border-primary/20 bg-primary/5', badgeTextCls: 'metallic-text', line1: 'International', line2: 'Tech Leader', line2Cls: 'from-primary to-secondary', desc: 'Spearheading nation-wide developer ecosystems and mentoring the next generation of full-stack innovators on a global stage.', btn1Cls: 'bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-xl shadow-primary/10', btn1: 'View Milestones', btn2: 'Technical Vision', imagePath: 'slide-1_hgi7r8', placeholderBg: 'from-[#0a1830] to-[#070e1d]' },
  { badge: 'Advanced Technical Depth', badgeCls: 'border-secondary/20 bg-secondary/5', badgeTextCls: 'text-secondary', line1: 'Senior Mobile', line2: 'Architect', line2Cls: 'from-primary to-secondary', desc: 'Engineering sophisticated mobile ecosystems and scaling enterprise architectures for mission-critical digital infrastructure.', btn1Cls: 'bg-gradient-to-r from-secondary to-[#7903fd] text-on-secondary shadow-xl shadow-secondary/10', btn1: 'Architecture Stack', btn2: 'Case Studies', imagePath: 'slide-2_mzxbsh', placeholderBg: 'from-[#0a1428] to-[#070e1d]' },
  { badge: 'Strategic Command', badgeCls: 'border-primary/20 bg-primary/5', badgeTextCls: 'metallic-text', line1: 'Chief Technology', line2: 'Officer', line2Cls: 'from-primary to-secondary', desc: 'Directing global AI-health-tech strategy and overseeing monumental technological transformations at scale.', btn1Cls: 'bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-xl shadow-primary/10', btn1: 'Executive Presence', btn2: 'Connect Today', imagePath: 'slide-3_x4hogc', placeholderBg: 'from-[#0c1428] to-[#070e1d]' },
]

// ── Cover Flow Cards ──────────────────────────────────────────────
export interface CoverCard {
  id: string; tag: string; tagCls: string; title: string; desc: string
  /** Set to '/coverflow/<name>.webp' once file is in public/coverflow/ */
  imagePath: string | null
  placeholderBg: string
}

export const coverCards: CoverCard[] = [
  { id: 'judging',       tag: 'Judge & Mentor',      tagCls: 'text-cyan-400',   title: 'Judging & Mentorship',        desc: 'Technical jury member at HackIndia, NIT Kolkata, NIT Delhi, Chitkara University, Smart India Hackathon, and more.',       imagePath: 'judging_sxkokx', placeholderBg: 'from-[#0a1828] to-[#1a3050]' },
  { id: 'ibm-training',  tag: 'Certified Excellence',tagCls: 'metallic-text',   title: 'IBM Enterprise Training',     desc: 'Completed advanced certification in enterprise cloud mobility and architectural scalability frameworks.',                   imagePath: 'ibm-training_quuy2e', placeholderBg: 'from-[#101828] to-[#1a2038]' },
  { id: 'recognitions',  tag: 'Industry Honours',    tagCls: 'text-primary',    title: 'Appreciation & Recognitions', desc: 'Recognised by peers and leadership for exceptional contributions to enterprise mobile architecture.',                    imagePath: 'recognitions_tatuoe', placeholderBg: 'from-[#0a1020] to-[#1a2030]' },
  { id: 'media',         tag: 'Press Coverage',      tagCls: 'text-cyan-400',   title: 'Media Recognitions',          desc: 'Featured in leading technology publications for insights on AI integration and digital transformation.',                 imagePath: 'media_wi68nc', placeholderBg: 'from-[#0c1020] to-[#182030]' },
  { id: 'certificates',  tag: 'Credentials',         tagCls: 'metallic-text',   title: 'Certifications & Badges',     desc: 'AWS, Google Flutter, IBM Mobile Architect, and Enterprise Security professional certifications.',                      imagePath: 'certificates_x8vjll', placeholderBg: 'from-[#0a1428] to-[#1a2040]' },
  { id: 'ngo-foundation',tag: 'Philanthropy',         tagCls: 'text-orange-400', title: 'Founder of NGO',              desc: 'Founded Shree Kishori Priya Foundation for the elderly in Vrindavan — a mission beyond technology.',                    imagePath: 'ngo-foundation_brsbaw', placeholderBg: 'from-[#1a1010] to-[#2a1808]' },
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
    institution: 'HackIndia - Judge Panel Appointment',
    role: 'International Tech Lead Judge',
    year: '2026',
    type: 'national',
    shortDesc: "Appointed as International Tech Lead Judge for HackIndia's national andinternational hackathons, evaluating 50+ finalist teams on engineering excellence and scalability.",
    fullDesc: "Appointed as an International Tech Lead Judge for HackIndia's prestigious national and international hackathons. Evaluated over 500+ teams across multiple engineering disciplines, including mobile development, AI/ML, Web3, and FinTech. Provided in-depth feedback on code quality, architectural decisions, and scalability potential. Engaged with finalists in a post-judging mentorship session focused on career pathways in technology leadership and enterprise architecture.",
    tags: ['Mobile', 'AI/ML', 'Web3', 'FinTech'],
    imagePath: 'hackindia-appointment_pkuxqp',
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
    imagePath: 'nit-delhi_jyw7hn',
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
    imagePath: 'chitkara-university_oaxnvo',
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
    imagePath: 'nit-kolkata_vnw5ed',
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
    imagePath: 'abes_hltb1n',
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
  { id: 'ibm-training',  tag: 'Enterprise Knowledge Transfer', title: 'Driving Architecture Excellence: Mentoring Engineers at IBM for Enterprise-Scale Systems',      body: ['Delivered focused technical mentorship sessions for IBM engineers, emphasising scalable mobile architecture, performance engineering, and enterprise system design. The programme aimed at enabling developers to transition into architecture-level roles by strengthening their understanding of real-world system challenges, optimisation strategies, and production-grade implementation patterns.'], ctaLabel: 'Technical Knowledge Transfer',     imageSrc: 'IBM_Training_nv9wso', imageAlt: 'Bharat Kumar Dixit conducting architecture training at IBM', placeholderGradient: '#101828,#1a2038', imageAspect: 'aspect-[3/2]', layout: 'image-left' },
  { id: 'recognitions',  tag: 'Peer Recognition',              title: 'Appreciation & Recognitions',                body: ['Recognised for outstanding technical leadership during enterprise migrations, infrastructure design, and community-building initiatives across IBM and Vigorus.ai.'], ctaLabel: 'View All Awards',                 imageSrc: null, imageAlt: 'Bharat Kumar Dixit recognition awards', placeholderGradient: '#0a1020,#1a2030', imageAspect: 'aspect-video', layout: 'image-right' },
  { id: 'media',         tag: 'Press & Publications',          title: 'Media Recognitions',                         body: ['Featured and interviewed by leading technology publications and business journals for insights on the future of mobile architecture, AI integration, and digital transformation at scale.'], ctaLabel: 'View Press Kit',                  imageSrc: null, imageAlt: 'Bharat Kumar Dixit media appearances and press coverage', placeholderGradient: '#0c1020,#182030', imageAspect: 'aspect-video', layout: 'image-left' },
  { id: 'certificates',  tag: 'Professional Credentials',      title: 'Certifications & Professional Badges',       body: ['Five verified professional credentials spanning Generative AI, Agentic AI, cloud architecture, enterprise design thinking, and consulting practice — issued by Google Cloud, IBM, and Amazon Web Services. All badges are publicly verifiable on Credly and the IBM Learning portal.'], ctaLabel: 'View Credentials',                imageSrc: null, imageAlt: 'Bharat Kumar Dixit professional certifications wall', placeholderGradient: '#0a1428,#1a2040', imageAspect: 'aspect-video', layout: 'image-right' },
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
  meta: string; pdfUrl: string
  /** Internal Next.js route — if set, card navigates here instead of opening pdfUrl directly */
  route?: string
  iconName: string
  /** Cloudinary public ID for the PDF — e.g. 'bharatdixit/whitepapers/vigorus-ai-v11' */
  pdfPublicId: string | null
  /** Cloudinary public ID for thumbnail image */
  thumbnailPath: string | null
  gradient: string
}

export const whitepapers: Whitepaper[] = [
  {
    id: 'vigorus-ai',
    tag: 'Healthcare AI',
    tagColor: '#00d2ff',
    title: 'Vigorus.ai — The Future of Intelligent Healthcare Infrastructure',
    description: 'A comprehensive 35-page technical whitepaper authored by Bharat Kumar Dixit covering Voice-First EMR, Blockchain PHR, autonomous NHCX insurance claims, and native ABDM integration — the complete architecture blueprint for AI-native clinical systems.',
    meta: '2026 · 35 PAGES · AUTHORED BY BHARAT DIXIT',
    pdfUrl: '/whitepapers/vigorus-ai-whitepaper-v11.pdf', // legacy local path — will be overridden by pdfPublicId
    pdfPublicId: null, // → set to 'bharatdixit/whitepapers/vigorus-ai-v11' after uploading to Cloudinary
    route: '/whitepapers/vigorus-ai',
    iconName: 'HeartPulse',
    thumbnailPath: null,
    gradient: 'from-[#00d2ff]/10 via-transparent to-transparent',
  },
  {
    id: 'svasthax',
    tag: 'Digital Health',
    tagColor: '#d4af37',
    title: "SvasthaX — Reimagining India's Digital Health Ecosystem",
    description: "A strategic and technical whitepaper by Bharat Kumar Dixit exploring a next-generation digital health platform built for India's scale. Covers interoperable health records, AI-powered diagnostics, multi-lingual patient engagement, and a national-scale ABDM-native architecture.",
    meta: '2025 · AUTHORED BY BHARAT DIXIT',
    pdfUrl: '/whitepapers/SvasthaXWhitepaper.pdf',
    pdfPublicId: null, // → set to 'bharatdixit/whitepapers/svasthax' after uploading
    route: '/whitepapers/svasthax',
    iconName: 'Activity',
    thumbnailPath: null,
    gradient: 'from-[#d4af37]/10 via-transparent to-transparent',
  },
  {
    id: 'uk-banking',
    tag: 'FinTech',
    tagColor: '#b4c5ff',
    title: 'UK Banking System Architecture — A Technical Analysis',
    description: "A detailed architectural whitepaper by Bharat Kumar Dixit examining the UK's modern banking infrastructure — Open Banking APIs, PSD2 compliance, real-time payment rails (Faster Payments, CHAPS), cloud-native core banking migration, and the technical blueprint for resilient financial systems.",
    meta: '2025 · AUTHORED BY BHARAT DIXIT',
    pdfUrl: '/whitepapers/UK_Banking_Architecture_Whitepaper_Bharat_Dixit.pdf',
    pdfPublicId: null, // → set to 'bharatdixit/whitepapers/uk-banking' after uploading
    route: '/whitepapers/uk-banking',
    iconName: 'Landmark',
    thumbnailPath: null,
    gradient: 'from-primary/10 via-transparent to-transparent',
  },
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
  /** YouTube video ID — the part after ?v= in the YouTube URL e.g. 'dQw4w9WgXcQ' */
  youtubeId: string | null
  placeholderGradient: string
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
  // youtubeId: Set this to the YouTube video ID when you have the video uploaded.
  // Example: if your YouTube URL is https://youtube.com/watch?v=ABC123xyz then youtubeId: 'ABC123xyz'
  { id: 'v1', tag: 'KEYNOTE SPEECH',     title: 'The Future of Decentralised Architecture', youtubeId: null, placeholderGradient: '#0a1828,#1a3050' },
  { id: 'v2', tag: 'PANEL DISCUSSION',   title: 'Bridging the Gap: Mentorship in AI',       youtubeId: null, placeholderGradient: '#101820,#202838' },
  { id: 'v3', tag: 'DEVELOPER INSIGHTS', title: 'Mastering Systems Design: Live Coding',    youtubeId: null, placeholderGradient: '#0c1820,#182838' },
]

export const galleryCategories: { value: GalleryCategory; label: string }[] = [
  { value: 'all', label: 'All' }, { value: 'london', label: 'London Tech Tour' },
  { value: 'hackathons', label: 'Hackathons' }, { value: 'ibm', label: 'IBM Mentorship' },
  { value: 'ngo', label: 'NGO Activities' },
]

// ── Recognition Slider ────────────────────────────────────────────
export interface RecognitionSlide {
  id: string
  title: string
  description: string
  /** Drop file into public/recognitions/<id>.webp */
  imagePath: string | null
  placeholderGradient: string
  accentColor: string
  label: string
}

export const recognitionSlides: RecognitionSlide[] = [
  {
    id: 'excellence-award',
    title: 'Excellence Award',
    description: 'Recognized for outstanding technical leadership during the Q3 enterprise migration at IBM — delivering a zero-downtime transition for a Fortune 500 financial services client.',
    imagePath: null,
    placeholderGradient: '#0a1428,#1a2848',
    accentColor: '#b4c5ff',
    label: 'IBM · 2023',
  },
  {
    id: 'architect-of-year',
    title: 'Architect of the Year',
    description: 'Honored for designing the core AI infrastructure of the Vigorus.ai health-tech platform — reducing clinical review time by 40% and enabling real-time diagnostics at scale.',
    imagePath: null,
    placeholderGradient: '#0c1428,#1c2040',
    accentColor: '#d4af37',
    label: 'Vigorus.ai · 2024',
  },
  {
    id: 'innovation-lead',
    title: 'Innovation Lead',
    description: "Awarded for spearheading the 'Zero-Lag' mobile initiative — a cross-functional programme that reduced app cold-start time by 68% across 12 enterprise client deployments.",
    imagePath: null,
    placeholderGradient: '#0a1020,#182030',
    accentColor: '#00d2ff',
    label: 'Industry · 2023',
  },
  {
    id: 'community-builder',
    title: 'Community Builder Award',
    description: 'Recognised for organising cross-company knowledge exchange programmes connecting 200+ mobile engineers across IBM, Vigorus.ai, and partner organisations.',
    imagePath: null,
    placeholderGradient: '#101018,#1c1828',
    accentColor: '#d4bbff',
    label: 'Tech Community · 2022',
  },
  {
    id: 'mentor-award',
    title: 'Outstanding Mentor Award',
    description: 'Awarded by HackIndia for exceptional mentorship provided to student teams during national hackathons — directly contributing to 3 finalist teams securing industry partnerships.',
    imagePath: null,
    placeholderGradient: '#0a1820,#182038',
    accentColor: '#00d2ff',
    label: 'HackIndia · 2024',
  },
]

// ── Media Recognition Cards ───────────────────────────────────────
export interface MediaCard {
  id: string
  outlet: string
  category: string
  title: string
  description: string
  date: string
  type: 'article' | 'interview' | 'feature' | 'video' | 'podcast'
  /** Drop file into public/media/<id>.webp */
  imagePath: string | null
  placeholderGradient: string
  accentColor: string
  /** Full detail URL or '#' */
  url: string
}

// ─────────────────────────────────────────────────────────────────
// mediaCards — matches your Cloudinary media-coverage/ subfolders exactly:
//   bharatdixit/media-coverage/local-media/
//   bharatdixit/media-coverage/articles-nationals/
//   bharatdixit/media-coverage/taarezameenpar-magzine/
//   bharatdixit/media-coverage/lawstreet-journal/
//
// To add an image to a card:
//   1. Upload to the matching Cloudinary subfolder
//   2. Set imagePath: 'bharatdixit/media-coverage/<folder>/<filename>'
// ─────────────────────────────────────────────────────────────────
export const mediaCards: MediaCard[] = [
  {
    id: 'local-media',
    outlet: 'Local Media',
    category: 'Feature Coverage',
    title: 'Bharat Dixit Featured in Local Media — Tech Leadership & Innovation',
    description: "Local media coverage highlighting the journey and achievements of Bharat Kumar Dixit — from Senior Mobile Architect at IBM to CTO at Vigorus.ai, and his contributions to India's digital health landscape.",
    date: '2025',
    type: 'feature',
    // Cloudinary folder: bharatdixit/media-coverage/local-media/
    imagePath: 'local-media_nnmfym',   // → e.g. 'bharatdixit/media-coverage/local-media/feature-cover'
    placeholderGradient: '#0a1828,#1a2848',
    accentColor: '#00d2ff',
    url: '#',
  },
  {
    id: 'articles-nationals',
    outlet: 'National Publications',
    category: 'Article Feature',
    title: 'Bharat Dixit in National Publications — Architecture, AI & Healthcare',
    description: 'Featured in leading national publications for expertise in AI-native healthcare platforms, enterprise mobile architecture, and digital health innovation. Coverage spanning technology, business, and health sectors.',
    date: '2024–2025',
    type: 'article',
    // Cloudinary folder: bharatdixit/media-coverage/articles-nationals/
    imagePath: 'articles-nationals_ycmoxs',   // → e.g. 'bharatdixit/media-coverage/articles-nationals/article-1'
    placeholderGradient: '#0c1020,#1a1c30',
    accentColor: '#d4af37',
    url: '#',
  },
  {
    id: 'taarezameenpar-magzine',
    outlet: 'Taarezameenpar Magazine',
    category: 'Magazine Feature',
    title: 'Bharat Dixit — Taarezameenpar Magazine Coverage',
    description: 'Featured in Taarezameenpar Magazine for his work on technology-driven social impact, including the founding of Shree Kishori Priya Foundation and the use of digital platforms for community welfare.',
    date: '2024',
    type: 'feature',
    // Cloudinary folder: bharatdixit/media-coverage/taarezameenpar-magzine/
    imagePath: 'taarezameenpar-magzine_v412zi',   // → e.g. 'bharatdixit/media-coverage/taarezameenpar-magzine/magazine-cover'
    placeholderGradient: '#101828,#1c2a3a',
    accentColor: '#b4c5ff',
    url: '#',
  },
  {
    id: 'lawstreet-journal',
    outlet: 'Lawstreet Journal',
    category: 'Legal Tech Feature',
    title: 'Bharat Dixit in Lawstreet Journal — Technology & Compliance',
    description: 'Lawstreet Journal features Bharat Kumar Dixit on the intersection of technology and legal compliance — covering healthcare data privacy, ABDM regulatory architecture, and the legal framework for AI-driven clinical systems.',
    date: '2024',
    type: 'article',
    // Cloudinary folder: bharatdixit/media-coverage/lawstreet-journal/
    imagePath: 'lawstreet-journal_gjbvma',   // → e.g. 'bharatdixit/media-coverage/lawstreet-journal/feature-1'
    placeholderGradient: '#0a1020,#162028',
    accentColor: '#00d2ff',
    url: '#',
  },
]

// Media detail items — grouped by mediaCard id
export interface MediaDetailItem {
  id: string
  mediaCardId: string   // references MediaCard.id
  type: 'image' | 'video'
  title: string
  description: string
  /** Cloudinary public ID — set after uploading to bharatdixit/media-coverage/<outlet>/ */
  imagePath: string | null
  /** YouTube video ID — the part after ?v= in the YouTube URL */
  youtubeId: string | null
  placeholderGradient: string
}

// ─────────────────────────────────────────────────────────────────
// mediaDetailItems — media grid items shown when a card is selected.
// imagePath format: 'bharatdixit/media-coverage/<folder>/<filename>'
// youtubeId: paste the YouTube video ID (part after ?v= in the URL)
// ─────────────────────────────────────────────────────────────────
export const mediaDetailItems: MediaDetailItem[] = [
  // ── Local Media ── folder: bharatdixit/media-coverage/local-media/
  { id: 'lm-1', mediaCardId: 'local-media', type: 'image', title: 'Local Media Feature', description: 'Feature coverage in local media highlighting achievements as International Tech Leader and CTO.', imagePath: null, youtubeId: null, placeholderGradient: '#0a1428,#1a2848' },
  { id: 'lm-2', mediaCardId: 'local-media', type: 'image', title: 'Press Interview', description: 'Press interview session covering Vigorus.ai platform and digital health innovation.', imagePath: null, youtubeId: null, placeholderGradient: '#0c1828,#1c2a40' },
  { id: 'lm-3', mediaCardId: 'local-media', type: 'image', title: 'Award Ceremony Coverage', description: 'Local media coverage of recognition and awards received for technology leadership.', imagePath: null, youtubeId: null, placeholderGradient: '#0a1020,#182030' },
  { id: 'lm-4', mediaCardId: 'local-media', type: 'video', title: 'TV Interview Recording', description: 'Television interview on technology entrepreneurship and AI in healthcare.', imagePath: null, youtubeId: null, placeholderGradient: '#101828,#1c2840' },

  // ── National Articles ── folder: bharatdixit/media-coverage/articles-nationals/
  { id: 'an-1', mediaCardId: 'articles-nationals', type: 'image', title: 'National Publication Feature', description: 'Feature article in a leading national publication on AI-native healthcare architecture.', imagePath: null, youtubeId: null, placeholderGradient: '#0c1020,#1a1c30' },
  { id: 'an-2', mediaCardId: 'articles-nationals', type: 'image', title: 'Tech Leadership Profile', description: 'In-depth profile on the journey from IBM Senior Architect to healthcare AI CTO.', imagePath: null, youtubeId: null, placeholderGradient: '#101820,#202838' },
  { id: 'an-3', mediaCardId: 'articles-nationals', type: 'image', title: 'Digital Health Article', description: 'Published piece on India digital health ecosystem transformation and ABDM architecture.', imagePath: null, youtubeId: null, placeholderGradient: '#0a1828,#182038' },
  { id: 'an-4', mediaCardId: 'articles-nationals', type: 'video', title: 'National Media Interview', description: 'Recorded interview on enterprise mobile architecture and the future of healthcare AI.', imagePath: null, youtubeId: null, placeholderGradient: '#0c1428,#1a2040' },

  // ── Taarezameenpar Magazine ── folder: bharatdixit/media-coverage/taarezameenpar-magzine/
  { id: 'tm-1', mediaCardId: 'taarezameenpar-magzine', type: 'image', title: 'Magazine Cover Story', description: 'Cover story in Taarezameenpar Magazine on technology-driven social impact and NGO work.', imagePath: null, youtubeId: null, placeholderGradient: '#101828,#1c2a3a' },
  { id: 'tm-2', mediaCardId: 'taarezameenpar-magzine', type: 'image', title: 'Editorial Shoot', description: 'Professional editorial photography for the Taarezameenpar Magazine feature spread.', imagePath: null, youtubeId: null, placeholderGradient: '#0a1020,#162028' },
  { id: 'tm-3', mediaCardId: 'taarezameenpar-magzine', type: 'image', title: 'NGO Feature Article', description: 'Magazine feature on Shree Kishori Priya Foundation and its mission in Vrindavan.', imagePath: null, youtubeId: null, placeholderGradient: '#0c1828,#1a2838' },
  { id: 'tm-4', mediaCardId: 'taarezameenpar-magzine', type: 'video', title: 'Magazine Interview Video', description: 'Video interview for Taarezameenpar Magazine digital edition.', imagePath: null, youtubeId: null, placeholderGradient: '#101018,#1c1c28' },

  // ── Lawstreet Journal ── folder: bharatdixit/media-coverage/lawstreet-journal/
  { id: 'lj-1', mediaCardId: 'lawstreet-journal', type: 'image', title: 'Lawstreet Journal Feature', description: 'Featured in Lawstreet Journal on healthcare data privacy and ABDM regulatory compliance architecture.', imagePath: null, youtubeId: null, placeholderGradient: '#0a1020,#162028' },
  { id: 'lj-2', mediaCardId: 'lawstreet-journal', type: 'image', title: 'Legal Tech Article', description: 'Article on the legal and technical framework for AI-driven clinical documentation systems in India.', imagePath: null, youtubeId: null, placeholderGradient: '#0c1428,#1a2040' },
  { id: 'lj-3', mediaCardId: 'lawstreet-journal', type: 'video', title: 'Legal Tech Panel', description: 'Panel discussion on technology compliance and data protection in Indian healthcare systems.', imagePath: null, youtubeId: null, placeholderGradient: '#101018,#1c1828' },
]

// ── Judging Event Media ───────────────────────────────────────────
export interface JudgingMediaItem {
  id: string
  judgingEventId: string   // references JudgingEvent.id
  type: 'image' | 'video'
  title: string
  description: string
  /** Cloudinary public ID — set after uploading to bharatdixit/judging/<event>/ */
  imagePath: string | null
  /** YouTube video ID — the part after ?v= in the YouTube URL */
  youtubeId: string | null
  placeholderGradient: string
}

export const judgingMediaItems: JudgingMediaItem[] = [
  // HackIndia
  { id: 'hi-1', judgingEventId: 'hackindia', type: 'image', title: 'Judging Panel — Opening Ceremony', description: 'On stage at HackIndia opening ceremony with fellow judges and organisers.', imagePath: null, youtubeId: null, placeholderGradient: '#0a1428,#1a2848' },
  { id: 'hi-2', judgingEventId: 'hackindia', type: 'image', title: 'Evaluating Finalist Teams', description: 'Reviewing finalist team presentations during the technical evaluation round.', imagePath: null, youtubeId: null, placeholderGradient: '#0c1828,#1c2a40' },
  { id: 'hi-3', judgingEventId: 'hackindia', type: 'video', title: 'Post-Judging Mentorship Session', description: 'Recorded mentorship session with top 10 finalist teams on architecture and scaling.', imagePath: null, youtubeId: null, placeholderGradient: '#0a1020,#182030' },
  { id: 'hi-4', judgingEventId: 'hackindia', type: 'image', title: 'Award Ceremony', description: 'Presenting awards to winning teams at the HackIndia finals.', imagePath: null, youtubeId: null, placeholderGradient: '#101828,#202838' },
  // NIT Delhi
  { id: 'nd-1', judgingEventId: 'nit-delhi', type: 'image', title: 'NIT Delhi Innovation Summit', description: 'Arriving at the NIT Delhi campus for the Annual Innovation Summit.', imagePath: null, youtubeId: null, placeholderGradient: '#101828,#1c2a40' },
  { id: 'nd-2', judgingEventId: 'nit-delhi', type: 'image', title: 'Project Evaluation Session', description: 'Evaluating mobile application projects submitted by final-year students.', imagePath: null, youtubeId: null, placeholderGradient: '#0a1020,#162028' },
  { id: 'nd-3', judgingEventId: 'nit-delhi', type: 'video', title: 'Q&A Session Recording', description: 'Recorded Q&A session with students on careers in mobile architecture.', imagePath: null, youtubeId: null, placeholderGradient: '#0c1020,#1a1830' },
  // Chitkara
  { id: 'cu-1', judgingEventId: 'chitkara', type: 'image', title: 'Chitkara TechFest Stage', description: 'Delivering keynote on clean architecture principles at Chitkara University TechFest.', imagePath: null, youtubeId: null, placeholderGradient: '#0c1020,#1a1c30' },
  { id: 'cu-2', judgingEventId: 'chitkara', type: 'image', title: 'Mentoring Winning Teams', description: 'One-on-one mentorship with the top-ranked team post-event.', imagePath: null, youtubeId: null, placeholderGradient: '#101020,#1c1c30' },
  { id: 'cu-3', judgingEventId: 'chitkara', type: 'video', title: 'Keynote Recording', description: 'Full recording of the keynote address on modern mobile architecture.', imagePath: null, youtubeId: null, placeholderGradient: '#0a1020,#182030' },
  // NIT Kolkata
  { id: 'nk-1', judgingEventId: 'nit-kolkata', type: 'image', title: 'Hack-o-NiT Judging Panel', description: 'With the judging panel at Hack-o-NiT, NIT Kolkata.', imagePath: null, youtubeId: null, placeholderGradient: '#0a1828,#1a3050' },
  { id: 'nk-2', judgingEventId: 'nit-kolkata', type: 'image', title: 'Project Demonstration Review', description: 'Reviewing AI and mobile project demonstrations from engineering students.', imagePath: null, youtubeId: null, placeholderGradient: '#0c1828,#1a2840' },
  { id: 'nk-3', judgingEventId: 'nit-kolkata', type: 'video', title: 'Feedback Session', description: 'Video feedback session for participating teams on architecture and innovation.', imagePath: null, youtubeId: null, placeholderGradient: '#0a1020,#162030' },
  // ABES / Smart India
  { id: 'ab-1', judgingEventId: 'smart-india', type: 'image', title: 'ABES Hackathon Invitation', description: 'Official invitation and judge appointment letter for ABES Hackathon.', imagePath: null, youtubeId: null, placeholderGradient: '#0a1020,#162030' },
  { id: 'ab-2', judgingEventId: 'smart-india', type: 'image', title: 'Event Preparation', description: 'Briefing session with organising team prior to the hackathon commencement.', imagePath: null, youtubeId: null, placeholderGradient: '#101828,#1c2838' },
]
