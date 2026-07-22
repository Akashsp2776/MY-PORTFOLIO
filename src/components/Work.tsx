import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Github, ExternalLink, BookOpen, CheckCircle2, AlertCircle, Zap } from 'lucide-react'
import { projects, type Project } from '../data'
import { useInView } from '../hooks/useInView'

const categories = ['All', 'Web', 'Security', 'IoT', 'UI'] as const

function StatusBadge({ status }: { status: Project['status'] }) {
  const map = {
    Completed: { icon: CheckCircle2, color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30' },
    'In Progress': { icon: AlertCircle, color: 'text-amber-400 bg-amber-400/10 border-amber-400/30' },
    Planning: { icon: Zap, color: 'text-blue-400 bg-blue-400/10 border-blue-400/30' },
  }
  const { icon: Icon, color } = map[status]
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${color}`}>
      <Icon className="h-3 w-3" />
      {status}
    </span>
  )
}

function DifficultyBadge({ level }: { level: Project['difficulty'] }) {
  const colors = {
    Beginner: 'text-slate-400',
    Intermediate: 'text-cyan-400',
    Advanced: 'text-purple-400',
  }
  return <span className={`text-xs font-medium ${colors[level]}`}>{level}</span>
}

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="gradient-border group relative overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to top, #050816, rgba(5,8,22,0.3) 50%, transparent)` }}
        />
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{ background: `radial-gradient(circle at 50% 50%, ${project.accent}, transparent 70%)` }}
        />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="chip backdrop-blur-md">{project.category}</span>
        </div>
        <div className="absolute right-4 top-4">
          <StatusBadge status={project.status} />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-white transition-colors group-hover:text-cyan-300">
            {project.title}
          </h3>
          <DifficultyBadge level={project.difficulty} />
        </div>
        <p className="mt-1.5 text-sm text-slate-500">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>

        {/* Key Features */}
        <div className="mt-4">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">Key Features</p>
          <ul className="space-y-1.5">
            {project.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex items-start gap-2 text-xs text-slate-400">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech badges */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center gap-2 border-t border-white/5 pt-5">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition-all hover:bg-white/10 hover:text-white"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition-all hover:bg-white/10 hover:text-white"
          >
            <Github className="h-3.5 w-3.5" />
            Code
          </a>
          <button
            onClick={onOpen}
            className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-3 py-2 text-xs font-medium text-cyan-400 transition-all hover:from-blue-600/30 hover:to-purple-600/30"
          >
            <BookOpen className="h-3.5 w-3.5" />
            Case Study
            <ArrowUpRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export default function Work({ onOpenCaseStudy }: { onOpenCaseStudy: (id: string) => void }) {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All')
  const { ref, inView } = useInView<HTMLDivElement>()
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="portfolio" ref={ref} className="py-section relative">
      <div className="px-container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="eyebrow mb-6">
              <span className="h-px w-8 bg-cyan-400" />
              Engineering Portfolio
            </span>
            <h2 className="section-title text-balance">Projects I've built — each one a learning milestone.</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'border border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} onOpen={() => onOpenCaseStudy(p.id)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
