'use client'

/**
 * WhitepaperVigorusAi.tsx
 * ─────────────────────────────────────────────────────────────────
 * Vigorus AI whitepaper page — themed to match bharatdixit.com
 * Uses the project's existing Space Grotesk + Inter fonts and
 * Tailwind colour tokens exactly.
 *
 * Place this file at:
 *   components/whitepapers/WhitepaperVigorusAi.tsx
 *
 * PDF must be at:
 *   public/whitepapers/vigorus-ai-whitepaper-v11.pdf
 * ─────────────────────────────────────────────────────────────────
 */

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Download, ArrowRight, CheckCircle2, ExternalLink,
  FileText, Shield, Zap, Globe, Mic, Link2, Brain,
} from 'lucide-react'

// ── CONFIG ────────────────────────────────────────────────────────
const PDF_URL   = '/whitepapers/vigorus-ai-whitepaper-v11.pdf'
const AUTHOR    = 'Bharat Dixit'
const VERSION   = 'V11'
const PUB_DATE  = '2026'

// ── FADE-UP ANIMATION VARIANT ─────────────────────────────────────
const fadeUp = {
  hidden : { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

// ── SMALL REUSABLE PIECES ─────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-neon font-headline font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">
      {children}
    </span>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center bg-surface-high border border-white/10 text-on-surface-variant font-headline font-bold text-[9px] uppercase tracking-widest px-3 py-1 rounded">
      {children}
    </span>
  )
}

function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`glass-card rounded-xl border border-white/5 ${className}`}>
      {children}
    </div>
  )
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 size={14} className="text-neon mt-0.5 flex-shrink-0" />
      <span className="text-on-surface-variant font-body text-sm leading-relaxed">{children}</span>
    </div>
  )
}

// ── HERO ──────────────────────────────────────────────────────────
function Hero({ onDownload }: { onDownload: () => void }) {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Radial glow blobs — matches site style */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(0,210,255,0.06) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(180,197,255,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-center">

          {/* LEFT COPY */}
          <div>
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <SectionLabel>Vigorus AI · Technical Whitepaper · {PUB_DATE}</SectionLabel>
            </motion.div>

            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={0.08}
              className="text-5xl md:text-7xl font-bold font-headline text-on-surface tracking-tighter leading-none max-w-3xl mb-6"
            >
              The Future of{' '}
              <span className="text-primary-container block md:inline">Intelligent</span>
              <br />Healthcare Infrastructure
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={0.16}
              className="text-on-surface-variant text-lg font-light max-w-xl leading-relaxed mb-10"
            >
              A 35-page technical blueprint eliminating healthcare's administrative burden
              through voice-first EMR, blockchain patient records, autonomous NHCX claims,
              and native ABDM integration — architected by{' '}
              <strong className="text-on-surface font-bold">{AUTHOR}</strong>.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.24}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button
                onClick={onDownload}
                className="flex items-center gap-2 px-8 py-4 bg-primary text-on-primary font-headline font-bold uppercase tracking-widest text-[11px] rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20"
              >
                <Download size={15} />
                Download Whitepaper (PDF)
              </button>
              <a
                href="#overview"
                className="flex items-center gap-2 px-8 py-4 bg-transparent border border-white/15 text-on-surface font-headline font-bold uppercase tracking-widest text-[11px] rounded-lg hover:border-primary/50 hover:text-primary transition-all"
              >
                Read Overview <ArrowRight size={14} />
              </a>
            </motion.div>

            {/* Meta strip */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.32}
              className="flex border border-white/8 rounded-xl overflow-hidden max-w-md bg-surface-low"
            >
              {[['AUTHOR', AUTHOR], ['VERSION', VERSION], ['PUBLISHED', PUB_DATE]].map(([label, val], i) => (
                <div key={i} className={`flex-1 px-5 py-3 ${i < 2 ? 'border-r border-white/8' : ''}`}>
                  <div className="text-[9px] font-headline font-bold tracking-[0.15em] uppercase text-on-surface-variant mb-1">
                    {label}
                  </div>
                  <div className="text-sm font-headline font-bold text-on-surface">{val}</div>
                </div>
              ))}
            </motion.div>

            {/* Compliance tags */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.40}
              className="flex flex-wrap gap-2 mt-5"
            >
              {['HIPAA', 'GDPR', 'ABDM', 'NHCX', 'FHIR R4', 'DICOM'].map(b => (
                <Tag key={b}>{b}</Tag>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — document card */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.2}
            className="hidden lg:block"
          >
            <GlassCard className="overflow-hidden">
              {/* Card header */}
              <div className="p-6 border-b border-white/5"
                   style={{ background: 'linear-gradient(135deg, rgba(0,210,255,0.08) 0%, rgba(180,197,255,0.06) 100%)' }}>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center text-primary">
                    <FileText size={18} />
                  </div>
                  <Tag>PDF · {VERSION}</Tag>
                </div>
                <h3 className="text-base font-headline font-bold text-on-surface leading-snug mb-2">
                  Vigorus AI: The Future of Intelligent Healthcare Infrastructure
                </h3>
                <p className="text-on-surface-variant text-xs leading-relaxed">
                  AI-Powered EMR · Blockchain PHR · ABDM &amp; NHCX · Autonomous Claims
                </p>
              </div>

              {/* Chapters */}
              <div className="p-5 bg-surface-low">
                <div className="text-[9px] font-headline font-bold tracking-[0.15em] uppercase text-on-surface-variant mb-4">
                  CONTENTS
                </div>
                {[
                  ['01', 'Voice-First EMR & AI Documentation Engine'],
                  ['02', 'Blockchain-Based Personal Health Record (PHR)'],
                  ['03', 'ClaimIQ: Autonomous Insurance Processing'],
                  ['04', 'Lipi · Sahyogi · Radibot · LangDoc Agents'],
                  ['05', 'ABDM & NHCX Integration Architecture'],
                  ['06', 'Security, Compliance & Competitive Analysis'],
                ].map(([n, t]) => (
                  <div key={n} className="flex items-center gap-3 py-2.5 border-b border-white/5 last:border-0">
                    <span className="text-[10px] font-headline font-bold text-neon w-6">{n}</span>
                    <span className="text-xs text-on-surface-variant">{t}</span>
                  </div>
                ))}

                {/* Author row */}
                <div className="flex items-center gap-3 pt-4 mt-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-neon flex items-center justify-center text-[10px] font-bold text-surface flex-shrink-0">
                    BD
                  </div>
                  <div>
                    <div className="text-xs font-headline font-bold text-on-surface">{AUTHOR}</div>
                    <div className="text-[10px] text-on-surface-variant">System Architect · Vigorus AI</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

// ── STATS BAR ─────────────────────────────────────────────────────
function StatsBar() {
  const stats = [
    { v: '40%', l: 'Claim denial reduction',    s: 'vs manual processing' },
    { v: '60%', l: 'Faster radiology reporting', s: 'per-study time saved' },
    { v: '40+', l: 'Clinical languages',         s: 'Hindi, Tamil, Arabic +' },
    { v: '35',  l: 'Whitepaper pages',           s: `authored by ${AUTHOR}` },
  ]
  return (
    <div className="bg-surface-low border-y border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className={`py-7 px-4 text-center ${i < 3 ? 'border-r border-white/5' : ''}`}>
              <div className="text-3xl md:text-4xl font-headline font-bold text-neon mb-1">{s.v}</div>
              <div className="text-xs font-headline font-bold text-on-surface uppercase tracking-wide mb-0.5">{s.l}</div>
              <div className="text-[11px] text-on-surface-variant">{s.s}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── OVERVIEW ──────────────────────────────────────────────────────
function Overview() {
  const items = [
    { icon: <Mic size={18} />,    title: 'Voice-First EMR',  desc: 'AI structures full clinical notes in 40+ languages from natural speech — zero typing required.' },
    { icon: <Link2 size={18} />,  title: 'Blockchain PHR',   desc: 'Patient-owned health records with cryptographic access control and ABDM HIE-CM consent.' },
    { icon: <Zap size={18} />,    title: 'ClaimIQ Claims',   desc: 'Autonomous NHCX-native pipeline — assembled, fraud-checked, submitted at discharge. 40% fewer denials.' },
    { icon: <Globe size={18} />,  title: 'ABDM & NHCX',      desc: 'The only platform natively built on India\'s national health infrastructure — not a compliance add-on.' },
  ]

  return (
    <section id="overview" className="py-24">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <SectionLabel>About This Whitepaper</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface tracking-tighter leading-tight mb-6">
              A Technical Blueprint for{' '}
              <span className="text-primary-container">Healthcare's AI-Native Future</span>
            </h2>
            <p className="text-on-surface-variant text-base font-light leading-relaxed mb-4">
              This whitepaper presents Vigorus AI's comprehensive framework for deploying AI
              agents across the full healthcare stack — voice-driven EMR, blockchain patient
              records, autonomous insurance processing, and native ABDM &amp; NHCX integration.
            </p>
            <p className="text-on-surface-variant text-base font-light leading-relaxed mb-4">
              The architecture was conceived and developed by{' '}
              <strong className="text-on-surface font-semibold">{AUTHOR}</strong>, whose work
              on scalable clinical AI infrastructure forms the entire engineering backbone of
              the Vigorus AI platform.
            </p>
            <p className="text-on-surface-variant text-base font-light leading-relaxed">
              This document is the definitive reference for healthcare institutions, government
              bodies, insurers, and technology partners evaluating the Vigorus AI ecosystem.
            </p>
          </motion.div>

          {/* Right — feature cards */}
          <div className="flex flex-col gap-4">
            {items.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={i * 0.08}
              >
                <GlassCard className="flex gap-4 p-5 hover:border-primary/20 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center text-neon flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-headline font-bold text-sm text-on-surface mb-1.5">
                      {item.title}
                    </div>
                    <div className="text-on-surface-variant text-sm font-light leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

// ── PRODUCTS GRID ─────────────────────────────────────────────────
function Products() {
  const products = [
    { emoji: '🎙️', name: 'Voice-First EMR Engine', target: 'Physicians',
      desc: 'Medical-domain ASR in 40+ languages. Generates SOAP notes, prescriptions and discharge summaries from natural clinical speech — structured to FHIR R4.',
      feats: ['40+ languages — Hindi, Tamil, Arabic, Swahili', 'ICD-10 / SNOMED CT / LOINC auto-mapping', 'ABDM ABHA-linked FHIR R4 record output', 'Sub-200ms real-time streaming transcription'] },
    { emoji: '⛓️', name: 'Blockchain PHR System', target: 'Patients · Hospitals',
      desc: 'Patient-owned, decentralised health records. AES-256 off-chain storage, immutable on-chain consent ledger, full ABDM HIE-CM integration.',
      feats: ['Cryptographic patient key ownership', 'FHIR R4 / HL7 v2 / ABDM-compliant export', 'Real-time consent revocation in 5 seconds', 'Zero-knowledge proof identity verification'] },
    { emoji: '⚡', name: 'ClaimIQ', target: 'Billing · Insurers',
      desc: 'Seven-stage autonomous claims pipeline. Fraud detection, denial prediction, automated NHCX submission — 40% fewer denials, >92% first-pass.',
      feats: ['NHCX-native FHIR R4 submission gateway', 'PM-JAY, CGHS, private insurer support', 'AI fraud pattern & upcoding detection', '>92% first-pass claim acceptance rate'] },
    { emoji: '✍️', name: 'Lipi', target: 'Hospitals · Archives',
      desc: 'Converts handwritten medical documents from legacy archives into FHIR-compliant digital records. Multi-script OCR with NLP entity extraction.',
      feats: ['Devanagari, Tamil, Telugu, Latin, mixed', 'Drug, diagnosis, dosage entity extraction', 'Auto-links to patient ABHA PHR', 'Batch legacy archive processing'] },
    { emoji: '🧠', name: 'Sahyogi', target: 'Physicians',
      desc: 'Context-aware clinical decision support via Voice EMR. Drug interactions, differential diagnoses, red flags and protocols — surfaced automatically.',
      feats: ['Real-time drug-drug interaction checks', 'WHO / ICMR guideline protocols', 'Red flag and escalation alerting', 'Renal-adjusted dosage verification'] },
    { emoji: '🔬', name: 'Radibot', target: 'Radiologists',
      desc: 'Voice-first radiology dictation generating sign-off-ready reports instantly. Prior study auto-pull, hands-free PACS navigation, 60% time reduction.',
      feats: ['CT, MRI, X-Ray, Ultrasound, PET-CT templates', 'Prior study auto-retrieval from PACS', 'DICOM / HL7 / RIS native integration', 'PHR report linkage via ABHA'] },
    { emoji: '📋', name: 'LangDoc', target: 'Nurses · Ward Staff',
      desc: 'Multilingual ambient nursing documentation. OPD intake, IPD admissions, ICU notes, ER triage and shift handovers in 40+ languages.',
      feats: ['Ambient listening for all ward types', 'Care plan & checklist auto-generation', 'Shift handover summaries every change', 'Blockchain-anchored consent timestamps'] },
  ]

  return (
    <section className="py-24 bg-surface-low border-y border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-24">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-14"
        >
          <SectionLabel>Platform Products</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface tracking-tighter mb-4">
            Seven AI Agents. One Unified Platform.
          </h2>
          <p className="text-on-surface-variant text-lg font-light max-w-xl mx-auto">
            All architected by <strong className="text-on-surface">{AUTHOR}</strong> — independently
            deployable, natively ABDM-integrated.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-40px' }} custom={i * 0.06}
            >
              <GlassCard className="p-6 h-full flex flex-col hover:border-white/10 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl">{p.emoji}</div>
                  <Tag>{p.target}</Tag>
                </div>
                <h3 className="font-headline font-bold text-base text-on-surface mb-3 group-hover:text-neon transition-colors">
                  {p.name}
                </h3>
                <p className="text-on-surface-variant text-sm font-light leading-relaxed mb-4 flex-1">
                  {p.desc}
                </p>
                <div className="flex flex-col gap-2 pt-4 border-t border-white/5">
                  {p.feats.map((f, j) => (
                    <CheckItem key={j}>{f}</CheckItem>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── ABDM & NHCX ───────────────────────────────────────────────────
function AbdmNhcx() {
  const abdm = [
    { t: 'ABHA Identity',      d: 'Patient registration and record linkage across all modules via ABDM Auth API' },
    { t: 'HIE-CM Consent',     d: 'Every data access event routed through national consent manager — patient controls all access' },
    { t: 'Health Repository',  d: 'FHIR R4 record deposit and retrieval from the national health repository after every consultation' },
    { t: 'HFR / HPR Registry', d: 'Facility and clinician credential validation; digital prescription signing authority' },
  ]
  const nhcx = [
    { t: 'Pre-Authorisation',  d: 'Auto-generated pre-auth requests submitted via NHCX gateway at planned admission' },
    { t: 'Claims Gateway',     d: 'All ClaimIQ submissions, enhancements and settlement responses through NHCX' },
    { t: 'PM-JAY Engine',      d: 'Beneficiary eligibility, package validation and entitlement balance verification' },
    { t: 'TPA Routing',        d: 'Automatic TPA identification and routing based on patient insurance data in PHR' },
  ]
  const phases = [
    ['1', 'Registration',   'ABHA verified + eligibility via NHCX'],
    ['2', 'Consultation',   'Voice EMR + pre-auth submitted'],
    ['3', 'Inpatient',      'LangDoc + Radibot → ABHA PHR'],
    ['4', 'Discharge',      'Claim auto-assembled via NHCX'],
    ['5', 'Post-Discharge', 'PHR updated + settlement tracked'],
  ]

  return (
    <section className="py-24">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-24">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mb-14"
        >
          <SectionLabel>Section 10 — Integration Architecture</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface tracking-tighter mb-4">
            ABDM &amp; NHCX:{' '}
            <span className="text-primary-container">Natively Built-In</span>
          </h2>
          <p className="text-on-surface-variant text-lg font-light max-w-2xl">
            A foundational architectural decision by {AUTHOR} — ABDM and NHCX are not
            compliance add-ons. Every patient is ABHA-linked. Every claim is NHCX-processed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* ABDM */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center font-headline font-bold text-[10px] text-neon">
                AB
              </div>
              <div>
                <div className="font-headline font-bold text-sm text-on-surface">ABDM Integration</div>
                <div className="text-[11px] text-on-surface-variant">Ayushman Bharat Digital Mission</div>
              </div>
            </div>
            {abdm.map((x, i) => (
              <div key={i} className="mb-3 p-3 rounded-lg bg-surface-lowest/60 border border-white/4">
                <div className="font-headline font-bold text-xs text-on-surface mb-1">{x.t}</div>
                <div className="text-xs text-on-surface-variant leading-relaxed">{x.d}</div>
              </div>
            ))}
          </GlassCard>

          {/* NHCX */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center font-headline font-bold text-[9px] text-primary">
                NHCX
              </div>
              <div>
                <div className="font-headline font-bold text-sm text-on-surface">NHCX Integration</div>
                <div className="text-[11px] text-on-surface-variant">National Health Claims Exchange · IRDAI</div>
              </div>
            </div>
            {nhcx.map((x, i) => (
              <div key={i} className="mb-3 p-3 rounded-lg bg-surface-lowest/60 border border-white/4">
                <div className="font-headline font-bold text-xs text-on-surface mb-1">{x.t}</div>
                <div className="text-xs text-on-surface-variant leading-relaxed">{x.d}</div>
              </div>
            ))}
          </GlassCard>
        </div>

        {/* Journey strip */}
        <div className="bg-surface-low border border-white/5 rounded-xl p-6">
          <div className="text-[9px] font-headline font-bold tracking-[0.18em] uppercase text-neon mb-5">
            END-TO-END PATIENT JOURNEY — ABDM + NHCX
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {phases.map(([n, phase, desc]) => (
              <div key={n} className="p-4 bg-surface-lowest/60 border border-white/5 rounded-lg">
                <div className="text-[9px] font-headline font-bold tracking-[0.15em] uppercase text-neon mb-2">
                  PHASE {n}
                </div>
                <div className="font-headline font-bold text-xs text-on-surface mb-1.5">{phase}</div>
                <div className="text-[11px] text-on-surface-variant leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── ARCHITECT ─────────────────────────────────────────────────────
function Architect() {
  const expertise = [
    ['Clinical AI Architecture',  'Voice EMR, Sahyogi, Radibot system design'],
    ['Blockchain Infrastructure', 'PHR patient-owned cryptographic architecture'],
    ['NLP & Speech Systems',      '40+ language medical ASR and NLP pipeline'],
    ['ABDM & NHCX Integration',   'National digital health infrastructure — native'],
    ['Healthcare Compliance',     'HIPAA, GDPR, ABDM, NHCX, FHIR R4'],
    ['Insurance Claims AI',       'ClaimIQ autonomous adjudication pipeline'],
  ]

  return (
    <section className="py-24 bg-surface-low border-y border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionLabel>Authored By</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface tracking-tighter mb-6">
              Architected &amp; Authored by{' '}
              <span className="text-primary-container">{AUTHOR}</span>
            </h2>
            <p className="text-on-surface-variant text-base font-light leading-relaxed mb-4">
              <strong className="text-on-surface">{AUTHOR}</strong> is a senior mobile and
              clinical intelligence systems architect with over a decade of experience designing
              scalable digital platforms across healthcare, fintech, and enterprise infrastructure.
            </p>
            <p className="text-on-surface-variant text-base font-light leading-relaxed mb-4">
              As chief platform architect of Vigorus AI, he designed the end-to-end architecture
              of all seven AI agents — Voice EMR, Blockchain PHR, ClaimIQ, Lipi, Sahyogi,
              Radibot, and LangDoc — plus the ABDM and NHCX integration layer.
            </p>
            <p className="text-on-surface-variant text-base font-light leading-relaxed">
              This whitepaper was researched and authored by{' '}
              <strong className="text-on-surface">{AUTHOR}</strong> as the authoritative technical
              and business reference for the Vigorus AI platform.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1}>
            <GlassCard className="overflow-hidden">
              {/* Author header */}
              <div className="flex items-center gap-4 p-5 border-b border-white/5 bg-neon/4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-neon flex items-center justify-center font-headline font-bold text-base text-surface">
                  BD
                </div>
                <div>
                  <div className="font-headline font-bold text-sm text-on-surface">{AUTHOR}</div>
                  <div className="text-xs text-on-surface-variant">System Architect · Vigorus AI · CTO</div>
                </div>
              </div>
              {/* Expertise rows */}
              {expertise.map(([domain, app], i) => (
                <div key={i} className={`grid grid-cols-2 gap-4 px-5 py-3 ${i % 2 === 1 ? 'bg-surface-lowest/30' : ''} ${i < expertise.length - 1 ? 'border-b border-white/4' : ''}`}>
                  <span className="text-xs font-headline font-bold text-on-surface">{domain}</span>
                  <span className="text-xs text-on-surface-variant">{app}</span>
                </div>
              ))}
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

// ── TABLE OF CONTENTS ─────────────────────────────────────────────
function Toc() {
  const chapters = [
    { n: '01', t: 'Executive Summary',                                      p: 4  },
    { n: '02', t: 'Introduction — The Global Healthcare Documentation Crisis', p: 5 },
    { n: '03', t: 'Vigorus AI Platform Overview & Architecture',            p: 7  },
    { n: '04', t: 'Voice-First EMR & AI Documentation Engine',             p: 9  },
    { n: '05', t: 'Blockchain-Based Personal Health Record (PHR)',         p: 13 },
    { n: '06', t: 'ClaimIQ: Autonomous Insurance Processing',              p: 16 },
    { n: '07', t: 'Lipi: Handwriting Digitisation Engine',                 p: 19 },
    { n: '08', t: 'Sahyogi: Clinical Decision Support',                    p: 20 },
    { n: '09', t: 'Radibot: AI Radiology Dictation & Automation',          p: 21 },
    { n: '10', t: 'LangDoc: Multilingual Nursing Documentation',           p: 22 },
    { n: '11', t: 'ABDM & NHCX Integration Architecture',                  p: 23 },
    { n: '12', t: 'Security, Compliance & Data Privacy',                   p: 31 },
    { n: '13', t: 'Competitive Landscape Analysis',                        p: 32 },
    { n: '14', t: 'Commercialisation Strategy & Scaling Model',            p: 33 },
    { n: '15', t: 'Future Research Directions & Conclusion',               p: 34 },
    { n: '16', t: `About the Author — ${AUTHOR}`,                          p: 35 },
  ]

  return (
    <section className="py-24">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-24">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-12"
        >
          <SectionLabel>Table of Contents</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface tracking-tighter mb-3">
            What's Inside
          </h2>
          <p className="text-on-surface-variant font-light">
            A comprehensive 35-page technical whitepaper authored by{' '}
            <strong className="text-on-surface">{AUTHOR}</strong>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {chapters.map((c, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }} custom={i * 0.03}
            >
              <GlassCard className="flex items-center gap-4 px-5 py-3.5 hover:border-white/10 transition-colors">
                <span className="font-headline font-bold text-xs text-neon w-7 flex-shrink-0">{c.n}</span>
                <span className="flex-1 text-sm text-on-surface-variant leading-snug">{c.t}</span>
                <span className="text-[11px] text-outline-variant flex-shrink-0">p.{c.p}</span>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── COMPLIANCE ────────────────────────────────────────────────────
function Compliance() {
  const standards = [
    { s: 'HIPAA',       scope: 'US patient data privacy',       status: 'Fully Compliant',     cls: 'text-emerald-400' },
    { s: 'GDPR',        scope: 'EU data protection',            status: 'Fully Compliant',     cls: 'text-emerald-400' },
    { s: 'ABDM/ABHA',   scope: 'India national digital health', status: 'Natively Integrated', cls: 'text-neon' },
    { s: 'NHCX',        scope: 'National claims exchange',      status: 'Natively Integrated', cls: 'text-neon' },
    { s: 'HL7 FHIR R4', scope: 'Health data interoperability',  status: 'Implemented',         cls: 'text-primary' },
    { s: 'DICOM',       scope: 'Medical imaging standards',     status: 'Fully Compliant',     cls: 'text-emerald-400' },
  ]

  return (
    <section className="py-24 bg-surface-low border-y border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-24">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-12"
        >
          <SectionLabel>Section 11 — Security & Compliance</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface tracking-tighter mb-3">
            Built for Regulated Healthcare
          </h2>
          <p className="text-on-surface-variant font-light max-w-lg mx-auto">
            Designed by {AUTHOR} from day one — compliance is foundational architecture, not a retrofit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {standards.map((x, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.06}>
              <GlassCard className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <span className="font-headline font-bold text-lg text-on-surface">{x.s}</span>
                  <span className={`text-[9px] font-headline font-bold uppercase tracking-wider ${x.cls}`}>
                    {x.status}
                  </span>
                </div>
                <div className="text-sm text-on-surface-variant">{x.scope}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <GlassCard className="p-6 md:p-8">
          <div className="font-headline font-bold text-xs uppercase tracking-widest text-neon mb-5">
            DATA SECURITY ARCHITECTURE
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'All PHI encrypted at rest (AES-256) and in transit (TLS 1.3)',
              'Role-based access control with per-clinical-role permission sets',
              'Immutable, tamper-proof audit trail for every action',
              'Zero-trust network architecture across all platform components',
              'Quarterly penetration testing + annual third-party security audits',
              'Data residency: India, EU, UAE, UK, Southeast Asia regional nodes',
            ].map((item, i) => (
              <CheckItem key={i}>{item}</CheckItem>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  )
}

// ── COMPETITIVE ───────────────────────────────────────────────────
function Competitive() {
  const rows = [
    { n: 'Vigorus AI',      emr: true,  lang: '40+ languages', abdm: true,  nhcx: true,  phr: true,  claims: 'ClaimIQ', hi: true },
    { n: 'Nuance DAX',      emr: true,  lang: '—',             abdm: false, nhcx: false, phr: false, claims: '—' },
    { n: 'Suki AI',         emr: true,  lang: '—',             abdm: false, nhcx: false, phr: false, claims: '—' },
    { n: 'Augmedix',        emr: true,  lang: 'Limited',       abdm: false, nhcx: false, phr: false, claims: '—' },
    { n: 'Practo EMR',      emr: false, lang: 'Partial',       abdm: 'Partial', nhcx: false, phr: false, claims: '—' },
    { n: 'Traditional EMR', emr: false, lang: '—',             abdm: 'Partial', nhcx: false, phr: false, claims: '—' },
  ]
  const cols = ['Voice EMR', 'Indian Languages', 'ABDM Native', 'NHCX Native', 'Blockchain PHR', 'Claims AI']

  const Cell = ({ v }: { v: boolean | string }) => {
    if (v === true)  return <span className="text-emerald-400 font-bold">✓</span>
    if (v === false || v === '—') return <span className="text-outline-variant">—</span>
    return <span className={`text-xs font-bold ${v === 'Partial' ? 'text-gold' : 'text-neon'}`}>{v}</span>
  }

  return (
    <section className="py-24">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-24">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-12"
        >
          <SectionLabel>Section 12 — Competitive Analysis</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface tracking-tighter">
            The Only Full-Stack Clinical Intelligence Platform
          </h2>
        </motion.div>

        <div className="overflow-x-auto rounded-xl border border-white/8">
          <table className="w-full border-collapse bg-surface-low text-sm">
            <thead>
              <tr className="border-b border-white/8" style={{ background: 'rgba(0,210,255,0.06)' }}>
                <th className="text-left px-5 py-3.5 text-[10px] font-headline font-bold uppercase tracking-widest text-neon">Platform</th>
                {cols.map(c => (
                  <th key={c} className="text-center px-4 py-3.5 text-[10px] font-headline font-bold uppercase tracking-wider text-on-surface-variant">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className={`border-b border-white/5 last:border-0 ${r.hi ? 'bg-neon/3' : i % 2 === 1 ? 'bg-surface-lowest/30' : ''}`}>
                  <td className={`px-5 py-3 font-headline font-bold text-sm ${r.hi ? 'text-neon' : 'text-on-surface-variant'}`}>
                    {r.n}
                    {r.hi && (
                      <span className="ml-2 text-[9px] bg-neon/10 text-neon border border-neon/20 px-1.5 py-0.5 rounded uppercase tracking-wider">
                        THIS
                      </span>
                    )}
                  </td>
                  {[r.emr, r.lang, r.abdm, r.nhcx, r.phr, r.claims].map((v, j) => (
                    <td key={j} className="px-4 py-3 text-center"><Cell v={v as boolean | string} /></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
          {[
            ['Full-Stack Integration',    'The only platform combining all seven AI agents in one interoperable system. Every competitor addresses at most one or two workflows.'],
            ['India-First Multilingual',  '40+ language medical AI makes Vigorus AI the only viable solution for government hospital deployment at India\'s scale.'],
            ['ABDM & NHCX Native',        'No competitor operates natively within both national programmes. Built from the ground up — not a compliance wrapper.'],
            ['Blockchain-Native PHR',     'Patient-owned, cryptographic PHR creates a longitudinal data asset that continuously improves every other platform module.'],
          ].map(([title, desc], i) => (
            <GlassCard key={i} className="flex gap-4 p-5">
              <div className="w-1 rounded-full flex-shrink-0 bg-gradient-to-b from-neon to-primary" />
              <div>
                <div className="font-headline font-bold text-sm text-on-surface mb-1.5">{title}</div>
                <div className="text-xs text-on-surface-variant leading-relaxed">{desc}</div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── DOWNLOAD CTA ──────────────────────────────────────────────────
function DownloadCta({ onDownload }: { onDownload: () => void }) {
  return (
    <section className="py-24 bg-surface-low border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-24">
        <div className="max-w-2xl mx-auto text-center bg-surface-container border border-white/5 rounded-2xl p-12 md:p-16 relative overflow-hidden">
          {/* Glow */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none"
               style={{ background: 'radial-gradient(circle, rgba(0,210,255,0.08) 0%, transparent 70%)' }} />

          <div className="relative">
            <SectionLabel>Vigorus AI · Whitepaper {VERSION}</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface tracking-tighter mb-4">
              Read the Full Whitepaper
            </h2>
            <p className="text-on-surface-variant font-light leading-relaxed mb-8 max-w-lg mx-auto">
              Download the complete 35-page technical whitepaper authored by{' '}
              <strong className="text-on-surface">{AUTHOR}</strong> — all seven AI agents,
              ABDM &amp; NHCX architecture, security compliance, and commercialisation strategy.
            </p>
            <button
              onClick={onDownload}
              className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-on-primary font-headline font-bold uppercase tracking-widest text-[11px] rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20"
            >
              <Download size={16} />
              Download Whitepaper PDF
            </button>
            <p className="text-on-surface-variant text-[11px] mt-4 font-light">
              Free · PDF · {VERSION} · {PUB_DATE} · 35 pages
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── ROOT EXPORT ───────────────────────────────────────────────────
export function WhitepaperVigorusAi() {
  const handleDownload = () => {
    window.open(PDF_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <div>
      {/* Back to whitepapers breadcrumb */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-24 pt-24 pb-0">
        <Link
          href="/whitepapers"
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary font-headline font-bold text-[10px] uppercase tracking-widest transition-colors"
        >
          ← Back to Whitepapers
        </Link>
      </div>

      <Hero       onDownload={handleDownload} />
      <StatsBar   />
      <Overview   />
      <Products   />
      <AbdmNhcx   />
      <Architect  />
      <Toc        />
      <Compliance />
      <Competitive />
      <DownloadCta onDownload={handleDownload} />
    </div>
  )
}
