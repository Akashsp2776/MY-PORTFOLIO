import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Terminal } from 'lucide-react'
import { personal } from '../data'
import { useTypingEffect } from '../hooks/useTypingEffect'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const typed = useTypingEffect(personal.roles)

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg mask-fade-b opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[120px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative px-container mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-10 pt-28 pb-20 text-center"
      >
        <motion.div variants={item}>
          <span className="chip">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-white" /></span>
            Available for Internships — 2026
          </span>
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-2 font-mono text-sm text-neutral-500">
          <MapPin className="h-3.5 w-3.5" />Bengaluru, Karnataka
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-6xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl md:text-8xl"
        >
          AKASH SP
        </motion.h1>

        <motion.div variants={item} className="flex items-center gap-3">
          <Terminal className="h-5 w-5 shrink-0 text-neutral-500" />
          <span className="font-mono text-base text-neutral-300 sm:text-lg">
            {typed}
            <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-white" />
          </span>
        </motion.div>

        <motion.p variants={item} className="max-w-2xl text-balance text-base leading-relaxed text-neutral-400 sm:text-lg">
          {personal.summary}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-3">
          <a href="#portfolio" className="btn-primary group">
            View Engineering Portfolio
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#resume" className="btn-ghost">
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-wider text-neutral-600">Find me on</span>
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
                className="group grid h-10 w-10 place-items-center rounded-xl border border-[#2a2a2a] bg-[#111111] text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#3a3a3a] hover:bg-[#161616] hover:text-white"
              >
                <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-[#2a2a2a] p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1.5 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  )
}
