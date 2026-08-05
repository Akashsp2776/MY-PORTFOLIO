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
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className={`transition-all duration-500 ${scrolled ? 'glass-strong border-b border-[#2a2a2a]' : 'bg-transparent'}`}>
        <nav className="px-container mx-auto flex max-w-7xl items-center justify-between py-4">
          <a href="#home" className="group flex items-center gap-2.5" aria-label="Home">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-[#2a2a2a] bg-[#111111] font-mono text-sm font-bold text-white transition-all duration-300 group-hover:border-[#3a3a3a] group-hover:bg-[#161616]">
              &lt;/&gt;
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-white">
              Akash<span className="text-neutral-500">.SP</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                  active === item.href.slice(1) ? 'text-white' : 'text-neutral-500 hover:text-white'
                }`}
              >
                {item.label}
                {active === item.href.slice(1) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-white"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#resume"
              className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#eaeaea] sm:inline-flex"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-[#2a2a2a] text-white transition-colors hover:bg-[#111111] lg:hidden"
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
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong overflow-hidden border-b border-[#2a2a2a] lg:hidden"
          >
            <div className="px-container mx-auto flex max-w-7xl flex-col gap-1 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    active === item.href.slice(1) ? 'bg-[#161616] text-white' : 'text-neutral-400 hover:bg-[#111111] hover:text-white'
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
