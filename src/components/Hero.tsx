import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, Code2, Sparkles } from 'lucide-react'
import { personal } from '../data'
import { useTypingEffect } from '../hooks/useTypingEffect'
import ParticleField from './ParticleField'

const floatingIcons = [
  { icon: '⚛️', label: 'React', x: '8%', y: '20%', delay: 0 },
  { icon: '☕', label: 'Java', x: '85%', y: '15%', delay: 0.5 },
  { icon: '🐍', label: 'Python', x: '15%', y: '70%', delay: 1 },
  { icon: '💚', label: 'Node', x: '80%', y: '65%', delay: 1.5 },
  { icon: '⚡', label: 'JS', x: '50%', y: '8%', delay: 2 },
  { icon: '🗄️', label: 'SQL', x: '90%', y: '45%', delay: 2.5 },
  { icon: '🔗', label: 'Git', x: '5%', y: '45%', delay: 3 },
  { icon: '🤖', label: 'AI', x: '45%', y: '85%', delay: 3.5 },
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

      <div className="relative px-container mx-auto flex min-h-screen max-w-7xl flex-col justify-center pt-28 pb-16">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
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

          <motion.div variants={item} className="mt-4 flex items-center gap-3">
            <Code2 className="h-5 w-5 text-purple-400" />
            <span className="font-mono text-lg text-slate-300 sm:text-xl">
              {typed}
              <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-cyan-400" />
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-balance text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {personal.summary}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#portfolio" className="btn-primary">
              View Engineering Portfolio
              <ArrowRight className="h-4 w-4" />
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
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
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
