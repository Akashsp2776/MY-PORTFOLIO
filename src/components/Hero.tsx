import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, Code2, Sparkles, Terminal, Cpu, Database, Bot } from 'lucide-react'
import { personal } from '../data'
import { useTypingEffect } from '../hooks/useTypingEffect'
import ParticleField from './ParticleField'

const floatingIcons = [
  { icon: '⚛️', label: 'React', x: '8%', y: '18%', delay: 0 },
  { icon: '☕', label: 'Java', x: '85%', y: '12%', delay: 0.5 },
  { icon: '🐍', label: 'Python', x: '12%', y: '68%', delay: 1 },
  { icon: '💚', label: 'Node', x: '82%', y: '62%', delay: 1.5 },
  { icon: '⚡', label: 'JS', x: '48%', y: '6%', delay: 2 },
  { icon: '🗄️', label: 'MongoDB', x: '90%', y: '42%', delay: 2.5 },
  { icon: '🔗', label: 'Git', x: '4%', y: '42%', delay: 3 },
  { icon: '🤖', label: 'AI', x: '45%', y: '82%', delay: 3.5 },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const typed = useTypingEffect(personal.roles)

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-70">
        <ParticleField density={50} />
      </div>

      <div className="pointer-events-none absolute inset-0 grid-bg mask-fade-b opacity-40" />

      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px] animate-float-slow" />
      <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-purple-600/15 blur-[100px] animate-float" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

      {floatingIcons.map((fi) => (
        <motion.div
          key={fi.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + fi.delay * 0.2, duration: 0.5 }}
          className="pointer-events-none absolute hidden lg:block"
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

      <div className="relative px-container mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 pt-28 pb-16 lg:flex-row">
        {/* Left: text content */}
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl flex-1">
          <motion.div variants={item} className="mb-6">
            <span className="chip">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              Open to Software Engineering & Full Stack Internships — 2026
            </span>
          </motion.div>

          <motion.div variants={item} className="mb-3">
            <p className="font-mono text-sm text-cyan-400">Hi, I'm</p>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl md:text-8xl"
          >
            AKASH <span className="text-gradient-blue">SP</span>
          </motion.h1>

          <motion.div variants={item} className="mt-5 flex items-center gap-3">
            <Code2 className="h-5 w-5 shrink-0 text-purple-400" />
            <span className="font-mono text-base text-slate-300 sm:text-lg">
              {typed}
              <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-cyan-400" />
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-balance text-base leading-relaxed text-slate-400 sm:text-lg"
          >
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
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
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
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: developer visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden flex-1 justify-center lg:flex"
        >
          <div className="relative h-[420px] w-[380px]">
            {/* Orbit rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-white/5"
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <div className="glass grid h-12 w-12 place-items-center rounded-xl text-2xl">⚛️</div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                <div className="glass grid h-12 w-12 place-items-center rounded-xl text-2xl">☕</div>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="glass grid h-12 w-12 place-items-center rounded-xl text-2xl">💚</div>
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
                <div className="glass grid h-12 w-12 place-items-center rounded-xl text-2xl">🤖</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-8 rounded-full border border-white/5"
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <div className="glass grid h-10 w-10 place-items-center rounded-xl text-xl">⚡</div>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="glass grid h-10 w-10 place-items-center rounded-xl text-xl">🔗</div>
              </div>
            </motion.div>

            {/* Center card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-1/2 top-1/2 w-48 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="gradient-border p-5">
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
                  <Cpu className="h-3 w-3 text-purple-400" />
                  <Database className="h-3 w-3 text-cyan-400" />
                  <Bot className="h-3 w-3 text-blue-400" />
                  <span className="ml-auto font-mono text-[10px] text-slate-500">v2.0</span>
                </div>
              </div>
            </motion.div>

            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-500/20 blur-3xl" />
          </div>
        </motion.div>
      </div>

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
