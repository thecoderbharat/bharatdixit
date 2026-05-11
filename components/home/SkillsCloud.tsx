'use client'

import {
  Smartphone, Brain, Server, Cloud, Banknote, HeartPulse, ShieldCheck,
} from 'lucide-react'

type SkillCategory = {
  id: string
  icon: React.ElementType
  title: string
  accent: string            // tailwind text colour class
  ring: string              // tailwind border + glow on hover
  items: string[]
}

const CATEGORIES: SkillCategory[] = [
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile',
    accent: 'text-primary',
    ring: 'hover:border-primary/50 hover:shadow-[0_0_30px_rgba(180,197,255,0.12)]',
    items: [
      'React Native', 'iOS (Swift, SwiftUI, Objective-C)', 'Android (Kotlin, Jetpack)',
      'Cross-platform Architecture', 'Mobile CI/CD', 'Performance Optimisation',
      'Secure Mobile Development', 'OWASP MASVS',
    ],
  },
  {
    id: 'ai-data',
    icon: Brain,
    title: 'AI & Data',
    accent: 'text-neon',
    ring: 'hover:border-neon/50 hover:shadow-[0_0_30px_rgba(0,210,255,0.15)]',
    items: [
      'Generative AI', 'Agentic AI', 'IBM Watsonx', 'NLP',
      'Clinical AI Architecture', 'Behavioural Digital Twin',
      'Predictive Analytics', 'OCR', 'FHIR R4',
    ],
  },
  {
    id: 'backend',
    icon: Server,
    title: 'Backend & API',
    accent: 'text-primary',
    ring: 'hover:border-primary/50 hover:shadow-[0_0_30px_rgba(180,197,255,0.12)]',
    items: [
      'Node.js', 'Java Spring Boot', 'Python FastAPI', 'REST', 'GraphQL',
      'gRPC', 'Apache Kafka', 'Microservices', 'Event Sourcing', 'CQRS', 'DDD',
    ],
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud & DevOps',
    accent: 'text-neon',
    ring: 'hover:border-neon/50 hover:shadow-[0_0_30px_rgba(0,210,255,0.15)]',
    items: [
      'AWS (EKS, Lambda, API GW, KMS)', 'Azure (AKS, APIM)',
      'Kubernetes', 'Docker', 'Terraform', 'ArgoCD', 'GitOps', 'HashiCorp Vault',
    ],
  },
  {
    id: 'uk-fintech',
    icon: Banknote,
    title: 'UK Fintech',
    accent: 'text-gold',
    ring: 'hover:border-gold/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]',
    items: [
      'Open Banking / OBIE v3.1.x', 'FAPI 1.0 Advanced', 'FPS & CHAPS',
      'ISO 20022', 'PSD2 / PSRs 2017', 'UK GDPR', 'PCI DSS', 'SCA',
    ],
  },
  {
    id: 'healthcare',
    icon: HeartPulse,
    title: 'Healthcare',
    accent: 'text-gold',
    ring: 'hover:border-gold/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]',
    items: [
      'ABDM', 'NHCX', 'ABHA Identity', 'HIE-CM', 'FHIR R4', 'HL7',
      'HIPAA', 'Blockchain PHR', 'Clinical Decision Support', 'NHS ICS Alignment',
    ],
  },
  {
    id: 'security',
    icon: ShieldCheck,
    title: 'Security',
    accent: 'text-primary',
    ring: 'hover:border-primary/50 hover:shadow-[0_0_30px_rgba(180,197,255,0.12)]',
    items: [
      'Zero-Trust Architecture', 'OAuth 2.0 / OIDC', 'mTLS', 'PKI',
      'AES-256', 'TLS 1.3', 'Certificate Pinning', 'GDPR', 'ISO 27001',
    ],
  },
]

export function SkillsCloud() {
  return (
    <section className="py-32 bg-surface-container-lowest relative" id="skills">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <span className="text-gold font-headline font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">
              Technological Stack
            </span>
            <h2 className="font-headline text-5xl font-bold tracking-tight mb-3">
              Multidisciplinary{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-neon">
                Engineering Depth
              </span>
            </h2>
            <p className="text-on-surface-variant max-w-2xl leading-relaxed">
              Twelve years of production-scale architecture across mobile, AI, fintech,
              and national digital-health infrastructure — organised by domain below.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-surface-container border border-white/5 rounded-xl px-5 py-3">
            <span className="font-headline font-bold text-3xl text-primary">{CATEGORIES.length}</span>
            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant leading-tight">
              Specialised<br/>Domains
            </span>
          </div>
        </div>

        {/* ── Category grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.id}
                className={`bg-surface-container rounded-xl border border-outline-variant/20
                            p-6 transition-all duration-300 ${cat.ring}
                            flex flex-col`}
              >
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/5">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-surface-container-high ${cat.accent}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-headline font-bold text-lg text-on-surface">{cat.title}</h3>
                  <span className="ml-auto text-[10px] font-headline font-bold text-on-surface-variant
                                   bg-surface-container-high border border-white/5 rounded px-2 py-0.5">
                    {cat.items.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-surface-container-high border border-white/5
                                 rounded-md text-[11px] font-body text-on-surface-variant
                                 hover:text-on-surface hover:border-white/15 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
