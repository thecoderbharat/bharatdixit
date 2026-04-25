'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Valid email required'),
  message: z.string().min(10, 'Message required'),
})
type FormData = z.infer<typeof schema>

export function Footer() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    await new Promise(r => setTimeout(r, 800))
    console.log(data)
    reset()
  }

  return (
    <section className="bg-surface pt-32 pb-16 relative overflow-hidden" id="contact">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-24">

          {/* Left — Connect */}
          <div>
            <h2 className="font-headline text-7xl font-bold tracking-tighter mb-8 leading-tight">
              Let&apos;s build <br />
              <span className="text-primary italic">monumental</span> code.
            </h2>
            <p className="text-on-surface-variant text-xl leading-relaxed mb-12">
              Available for strategic advisory, technical leadership roles, and large-scale architectural consulting.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant/30 group-hover:bg-primary transition-all flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:stroke-on-primary">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Direct Channel</p>
                  <p className="font-headline font-bold text-xl">hello@bharatdixit.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant/30 group-hover:bg-primary transition-all flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:stroke-on-primary">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.6 5.05 2 2 0 0 1 3.57 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.5a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">WhatsApp Presence</p>
                  <p className="font-headline font-bold text-xl">+91 (Executive Line)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-surface-container-high p-10 md:p-16 rounded-2xl border border-primary/10 shadow-2xl relative">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 blur-3xl pointer-events-none" />

            {isSubmitSuccessful ? (
              <div className="text-center py-16">
                <div className="text-5xl text-primary mb-4">✓</div>
                <h3 className="font-headline text-2xl font-bold text-white mb-2">Transmission Received</h3>
                <p className="text-on-surface-variant">I&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
                <div className="relative">
                  <input {...register('name')} type="text" placeholder="Full Name"
                    className="w-full bg-transparent border-b border-outline-variant/50 py-4 focus:outline-none focus:border-primary transition-colors text-lg text-on-surface placeholder:text-on-surface-variant/40" />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div className="relative">
                  <input {...register('email')} type="email" placeholder="Professional Email"
                    className="w-full bg-transparent border-b border-outline-variant/50 py-4 focus:outline-none focus:border-primary transition-colors text-lg text-on-surface placeholder:text-on-surface-variant/40" />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div className="relative">
                  <textarea {...register('message')} rows={4} placeholder="Tell me about your architectural vision..."
                    className="w-full bg-transparent border-b border-outline-variant/50 py-4 focus:outline-none focus:border-primary transition-colors text-lg resize-none text-on-surface placeholder:text-on-surface-variant/40" />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>
                <button type="submit" disabled={isSubmitting}
                  className="w-full bg-primary text-on-primary py-6 rounded-xl font-headline font-bold uppercase tracking-[0.2em] hover:shadow-[0_0_30px_rgba(180,197,255,0.3)] transition-all disabled:opacity-60">
                  {isSubmitting ? 'Sending…' : 'Initiate Transmission'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <footer className="pt-12 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-lg font-black tracking-[0.25em] text-slate-50 font-headline uppercase">
            BHARAT DIXIT
          </div>
          <p className="font-body text-[10px] tracking-[0.15em] uppercase text-slate-600">
            © 2024 MONOLITHIC TECH LEADERSHIP. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            {['LinkedIn', 'GitHub', 'X / Twitter'].map(l => (
              <a key={l} href="#" className="text-slate-600 hover:text-primary transition-colors uppercase text-[10px] font-bold tracking-widest">
                {l}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </section>
  )
}
