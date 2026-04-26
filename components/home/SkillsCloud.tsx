'use client'

const SKILLS = [
  { icon: '📱', label: 'Flutter/Dart' },    { icon: '🍎', label: 'Swift/SwiftUI' },
  { icon: '⚛️', label: 'React Native' },   { icon: '🧠', label: 'AI/NLP Integration' },
  { icon: '☁️', label: 'AWS/GCP' },        { icon: '🏗️', label: 'Microservices' },
  { icon: '🗄️', label: 'Firebase/NoSQL' }, { icon: '🔷', label: 'Clean Arch' },
  { icon: '🔒', label: 'Zero Trust' },      { icon: '🚀', label: 'CI/CD Pipelines' },
  { icon: '📊', label: 'Data Viz' },        { icon: '🤖', label: 'LLM Integration' },
]

export function SkillsCloud() {
  return (
    <section className="py-32 bg-surface-container-lowest relative" id="skills">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24 gap-8">
          <div>
            <h2 className="font-headline text-5xl font-bold tracking-tight mb-2">Technological Stack</h2>
            <p className="text-on-surface-variant">Multidisciplinary expertise across the modern development lifecycle.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="px-6 py-2 border border-primary/20 bg-primary/10 rounded-full text-xs font-bold uppercase tracking-widest text-primary">Core Mobile</span>
            <span className="px-6 py-2 border border-outline-variant/30 rounded-full text-xs font-bold uppercase tracking-widest text-on-surface-variant">Backend</span>
            <span className="px-6 py-2 border border-outline-variant/30 rounded-full text-xs font-bold uppercase tracking-widest text-on-surface-variant">Cloud Ops</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {SKILLS.map((skill) => (
            <div key={skill.label}
              className="bg-surface-container p-6 rounded-xl border border-outline-variant/20 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,210,255,0.15)] transition-all flex flex-col items-center text-center group cursor-default">
              <span className="text-4xl mb-4 group-hover:scale-110 transition-transform block">{skill.icon}</span>
              <span className="font-headline font-bold text-sm uppercase tracking-tighter">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
