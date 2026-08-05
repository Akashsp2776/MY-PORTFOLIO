import { motion, useTransform, useScroll } from 'framer-motion'
import { useEffect } from 'react'
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, MapPin, Terminal } from 'lucide-react'
import { personal } from '../data'
import { useTypingEffect } from '../hooks/useTypingEffect'
import StarField from './StarField'

const floatingIcons = [
  { icon: '⚛️', label: 'React', x: '6%', y: '16%', delay: 0 },
  { icon: '☕', label: 'Java', x: '87%', y: '10%', delay: 0.5 },
  { icon: '🐍', label: 'Python', x: '10%', y: '70%', delay: 1 },
  { icon: '💚', label: 'Node', x: '84%', y: '64%', delay: 1.5 },
  { icon: '⚡', label: 'JS', x: '47%', y: '4%', delay: 2 },
  { icon: '🗄️', label: 'MongoDB', x: '92%', y: '40%', delay: 2.5 },
  { icon: '🔗', label: 'Git', x: '2%', y: '44%', delay: 3 },
  { icon: '🤖', label: 'AI', x: '43%', y: '84%', delay: 3.5 },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const nameParticles = [
  { size: 3, x: '-8%', y: '20%', delay: 0, dur: 3.2, color: '#22d3ee' },
  { size: 2, x: '102%', y: '70%', delay: 0.6, dur: 4, color: '#818cf8' },
  { size: 4, x: '50%', y: '-30%', delay: 1.1, dur: 3.6, color: '#38bdf8' },
  { size: 2, x: '80%', y: '110%', delay: 1.8, dur: 4.4, color: '#a78bfa' },
  { size: 3, x: '20%', y: '115%', delay: 0.4, dur: 3.8, color: '#22d3ee' },
  { size: 2, x: '-5%', y: '80%', delay: 2.2, dur: 5, color: '#38bdf8' },
]

export default function Hero() {
  const typed = useTypingEffect(personal.roles)
  const { scrollY } = useScroll()
  const yGlow1 = useTransform(scrollY, [0, 600], [0, 120])
  const yGlow2 = useTransform(scrollY, [0, 600], [0, -80])
  const yIcons = useTransform(scrollY, [0, 500], [0, 60])
  const yCard = useTransform(scrollY, [0, 600], [0, -40])
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0.4])

  useEffect(() => {
    document.body.style.overflowX = 'hidden'
    return () => { document.body.style.overflowX = '' }
  }, [])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-50"><StarField /></div>
      <div className="pointer-events-none absolute inset-0 grid-bg mask-fade-b opacity-20" />
      <motion.div style={{ y: yGlow1 }} className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px] animate-float-slow" />
      <motion.div style={{ y: yGlow2 }} className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-purple-600/15 blur-[100px] animate-float" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

      <motion.div style={{ y: yIcons }} className="pointer-events-none absolute inset-0 hidden lg:block">
        {floatingIcons.map((fi) => (
          <motion.div
            key={fi.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + fi.delay * 0.2, duration: 0.5 }}
            className="pointer-events-none absolute"
            style={{ left: fi.x, top: fi.y }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4 + fi.delay, repeat: Infinity, ease: 'easeInOut' }}
              className="glass flex items-center gap-2 rounded-xl px-3 py-2"
            >
              <span className="text-xl">{fi.icon}</span>
              <span className="font-mono text-xs text-slate-300">{fi.label}</span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div style={{ opacity: opacityHero }} className="relative px-container mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 pt-28 pb-16 lg:flex-row">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl flex-1">
          <motion.div variants={item} className="mb-6">
            <span className="chip animate-glow-pulse">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              Available for Internships — 2026
            </span>
          </motion.div>
          <motion.div variants={item} className="mb-4 flex items-center gap-2">
            <p className="font-mono text-sm text-cyan-400">Hi, I'm</p>
            <span className="inline-flex items-center gap-1 font-mono text-xs text-slate-500">
              <MapPin className="h-3 w-3" />Bengaluru, Karnataka
            </span>
          </motion.div>

          <motion.div variants={item} className="relative mb-2">
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-visible">
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-6 -top-4 h-28 w-56 rounded-full bg-cyan-500/25 blur-[40px]"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute -right-4 top-0 h-24 w-44 rounded-full bg-blue-500/25 blur-[40px]"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
                className="absolute left-1/4 -bottom-2 h-16 w-40 rounded-full bg-violet-500/20 blur-[35px]"
              />
            </div>

            {nameParticles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], y: [0, -18, -36] }}
                transition={{ delay: 1.5 + p.delay, duration: p.dur, repeat: Infinity, ease: 'easeOut' }}
                className="pointer-events-none absolute -z-10"
                style={{ left: p.x, top: p.y }}
              >
                <div
                  className="rounded-full"
                  style={{ width: p.size * 2, height: p.size * 2, background: p.color, boxShadow: `0 0 ${p.size * 4}px ${p.color}` }}
                />
              </motion.div>
            ))}

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left"
              style={{ background: 'linear-gradient(90deg, transparent, #22d3ee66, #818cf866, transparent)' }}
            />

            <h1 className="font-display text-6xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl md:text-[5.5rem]">
              AKASH{' '}
              <span
                className="relative inline-block animate-aurora-text text-gradient-blue"
                style={{ textShadow: '0 0 60px rgba(34,211,238,0.35), 0 0 120px rgba(99,102,241,0.2)' }}
              >
                SP
                <motion.span
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="pointer-events-none absolute inset-0 -z-10 rounded-md blur-xl"
                  style={{ background: 'linear-gradient(135deg, #22d3ee44, #818cf844)' }}
                />
              </span>
            </h1>
          </motion.div>

          <motion.div variants={item} className="mt-5 flex items-center gap-3">
            <Terminal className="h-5 w-5 shrink-0 text-purple-400" />
            <span className="font-mono text-base text-slate-300 sm:text-lg">
              {typed}
              <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-cyan-400" />
            </span>
          </motion.div>

          <motion.p variants={item} className="mt-8 max-w-xl text-balance text-base leading-relaxed text-slate-400 sm:text-lg">
            {personal.summary}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#portfolio" className="btn-primary group">
              View Engineering Portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#resume" className="btn-ghost">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a href="#contact" className="btn-ghost">Contact Me</a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500">Find me on</span>
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: personal.github, label: 'GitHub' },
                { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white hover:shadow-[0_8px_20px_-6px_rgba(124,58,237,0.5)]"
                >
                  <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden flex-1 justify-center lg:flex"
          style={{ perspective: 1000, y: yCard }}
        >
          <div className="relative h-[420px] w-[380px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-white/5"
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"><div className="glass grid h-12 w-12 place-items-center rounded-xl text-2xl">⚛️</div></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2"><div className="glass grid h-12 w-12 place-items-center rounded-xl text-2xl">☕</div></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"><div className="glass grid h-12 w-12 place-items-center rounded-xl text-2xl">💚</div></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2"><div className="glass grid h-12 w-12 place-items-center rounded-xl text-2xl">🤖</div></div>
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-8 rounded-full border border-white/5"
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"><div className="glass grid h-10 w-10 place-items-center rounded-xl text-xl">⚡</div></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"><div className="glass grid h-10 w-10 place-items-center rounded-xl text-xl">🔗</div></div>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-1/2 top-1/2 w-48 -translate-x-1/2 -translate-y-1/2"
              style={{ transform: 'translateZ(40px)' }}
            >
              <div className="gradient-border-animated p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-cyan-400" />
                  <span className="font-mono text-xs text-slate-400">developer.ts</span>
                </div>
                <pre className="font-mono text-[11px] leading-relaxed text-slate-300">
{`const akash = {
  role: "CSE Student",
  stack: ["Java", "React",
    "Node.js", "Python"],
  focus: "Full Stack + AI",
  open_to: "Internships",
  status: "🟢 Available"
}`}
                </pre>
                <div className="mt-3 flex items-center gap-2 border-t border-white/5 pt-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  <span className="ml-auto font-mono text-[10px] text-slate-500">v2.0</span>
                </div>
              </div>
            </motion.div>
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-500/20 blur-3xl" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1.5 rounded-full bg-cyan-400"
          />
        </div>
      </motion.div>
    </section>
  )
}
