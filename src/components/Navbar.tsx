import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { useScrollSpy } from '../hooks/useScrollSpy'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'Certificates', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(navItems.map((n) => n.href.slice(1)))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className={`transition-all duration-300 ${scrolled ? 'glass-strong border-b border-[#2a2a2a]' : 'bg-transparent'}`}>
        <nav className="px-container mx-auto flex max-w-7xl items-center justify-between py-4">
          <a href="#home" className="group flex items-center gap-2.5" aria-label="Home">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-[#2a2a2a] bg-[#171717] font-mono text-sm font-bold text-stone-100 transition-all duration-300 group-hover:border-copper/50 group-hover:text-copper">
              &lt;/&gt;
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-stone-100">
              Akash<span className="text-stone-500">.SP</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-opacity duration-300 ${
                  active === item.href.slice(1) ? 'text-stone-100' : 'text-stone-500 hover:text-stone-100'
                }`}
              >
                {item.label}
                {active === item.href.slice(1) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-copper"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#resume"
              className="hidden items-center gap-2 rounded-full bg-copper px-4 py-2 text-sm font-semibold text-[#0B0B0B] transition-all duration-300 hover:bg-copper-light sm:inline-flex"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-[#2a2a2a] text-stone-100 transition-colors hover:bg-[#171717] lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="glass-strong overflow-hidden border-b border-[#2a2a2a] lg:hidden"
          >
            <div className="px-container mx-auto flex max-w-7xl flex-col gap-1 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    active === item.href.slice(1) ? 'bg-[#1D1D1D] text-copper' : 'text-stone-400 hover:bg-[#171717] hover:text-stone-100'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a href="#resume" onClick={() => setOpen(false)} className="btn-primary mt-2 justify-center">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
