import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkCls = 'text-slate-200 hover:text-white/90 transition-colors'

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 shadow-[0_0_25px_rgba(124,58,237,0.5)]" />
              <span className="text-white font-semibold tracking-tight">CHJK Studios</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#work" className={linkCls}>Work</a>
              <a href="#servers" className={linkCls}>Servers</a>
              <a href="#about" className={linkCls}>About</a>
              <a href="#contact" className="inline-flex items-center rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 text-slate-900 font-semibold shadow-[0_8px_30px_rgba(56,189,248,0.35)] hover:brightness-110 transition">Contact</a>
            </nav>

            <button className="md:hidden text-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <Menu size={24} />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 grid gap-2">
              <a onClick={() => setOpen(false)} href="#work" className={linkCls}>Work</a>
              <a onClick={() => setOpen(false)} href="#servers" className={linkCls}>Servers</a>
              <a onClick={() => setOpen(false)} href="#about" className={linkCls}>About</a>
              <a onClick={() => setOpen(false)} href="#contact" className="text-slate-900 font-semibold rounded-md bg-gradient-to-r from-violet-500 to-cyan-400 px-3 py-2 w-max">Contact</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
