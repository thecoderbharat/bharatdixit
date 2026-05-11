'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50
                       bg-slate-900/40 backdrop-blur-xl border border-white/10
                       rounded-2xl shadow-2xl overflow-hidden">
      <nav className="flex justify-between items-center px-8 py-5">
        {/* Logo */}
        <Link href="/" className="text-xl font-black tracking-[0.25em] text-slate-50 font-headline uppercase">
          BHARAT DIXIT
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10 font-headline font-bold tracking-tight uppercase text-[11px]">
          <Link href="/" className={`transition-colors duration-300 ${pathname === '/' ? 'text-primary' : 'text-white hover:text-primary'}`}>
            Home
          </Link>
          <Link href="/whitepapers" className={`transition-colors duration-300 ${pathname === '/whitepapers' ? 'text-primary' : 'text-white/60 hover:text-primary'}`}>
            Whitepapers
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-5 py-2.5 bg-primary text-on-primary font-headline font-bold
                             uppercase tracking-widest text-[10px] rounded-lg transition-all
                             hover:brightness-110 active:scale-95 shadow-lg shadow-primary/20">
            Download Resume
          </button>
          <button
            className="md:hidden text-white p-1"
            onClick={() => setOpen(!open)}
          >
            {open
              ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
              : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            }
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 px-8 py-5 flex flex-col gap-5">
          {[['/', 'Home'], ['/whitepapers', 'Whitepapers']].map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="font-headline font-bold uppercase text-sm text-white/60 hover:text-primary transition-colors">
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
