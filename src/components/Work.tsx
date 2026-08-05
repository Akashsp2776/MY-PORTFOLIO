import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Github, ExternalLink, BookOpen, CheckCircle2, AlertCircle, Zap, Star, Layers } from 'lucide-react'
import { projects, type Project } from '../data'
import { useInView } from '../hooks/useInView'

const categories = ['All', 'Web', 'Security', 'IoT', 'UI'] as const

function StatusBadge({ status }: { status: Project['status'] }) {
  const map = {
    Completed: { icon: CheckCircle2, color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30' },
    'In Progress': { icon: AlertCircle, color: 'text-amber-400 bg-amber-400/10 border-amber-400/30' },
    Planning: { icon: Zap, color: 'text-blue-400 bg-blue-400/10 border-blue-400/30' },
  }
  const { icon: Icon, color } = map[status] ?? map.Completed
  return <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${color}`}><Icon className="h-3 w-3" />{status}</span>
}

function DifficultyBadge({ level }: { level: Project['difficulty'] }) {
  const colors = { Beginner: 'text-slate-400', Intermediate: 'text-cyan-400', Advanced: 'text-purple-400' }
  return <span className={`text-xs font-medium ${colors[level] ?? 'text-slate-400'}`}>{level}</span>
}

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const reversed = index % 2 === 1

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40, scale: 0.96, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -20, scale: 0.96 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="card-premium group relative overflow-hidden rounded-3xl"
    >
      {/* Animated gradient accent line on top */}
      <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
        <motion.div
          initial={{ x: '-100%' }}
          whileInView={{ x: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeInOut' }}
          className="h-full w-full"
          style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
        />
      </div>

      <div className={`flex flex-col md:flex-row ${reversed ? 'md:flex-row-reverse' : ''}`}>
        {/* Image section */}
        <div className="relative overflow-hidden md:w-2/5">
          <div className="aspect-[16/10] md:h-full">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-90"
            />
          </div>
          <div className="absolute inset-0" style={{ background: `linear-gradient(${reversed ? 'to left' : 'to right'}, #050505, rgba(5,5,5,0.3) 50%, transparent)` }} />
          {/* Floating accent glow */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
            className="pointer-events-none absolute inset-0 mix-blend-overlay"
            style={{ background: `radial-gradient(circle at 50% 50%, ${project.accent}33, transparent 70%)` }}
          />
          {/* Category chip */}
          <div className="absolute left-4 top-4">
            <span className="chip backdrop-blur-md">{project.category}</span>
          </div>
          {/* Status badge */}
          <div className="absolute right-4 top-4">
            <StatusBadge status={project.status} />
          </div>
        </div>

        {/* Content section */}
        <div className="flex flex-col p-6 md:w-3/5 md:p-8">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-slate-500">0{index + 1}</span>
              <h3 className="font-display text-xl font-semibold text-white transition-colors group-hover:text-cyan-300">{project.title}</h3>
            </div>
            <DifficultyBadge level={project.difficulty} />
          </div>
          <p className="mt-1.5 text-sm text-slate-500">{project.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>

          {/* Key features as animated pills */}
          <div className="mt-4">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">Key Features</p>
            <div className="flex flex-wrap gap-2">
              {project.highlights.slice(0, 3).map((h, hi) => (
                <motion.span
                  key={h}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + hi * 0.05 + 0.3 }}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-400"
                >
                  <Star className="h-2.5 w-2.5 text-cyan-400/60" />
                  {h}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-slate-300 transition-colors hover:border-cyan-500/30 hover:text-cyan-300">{t}</span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-auto flex items-center gap-2 border-t border-white/5 pt-5">
            {project.demo && project.demo !== '#' ? (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition-all hover:bg-emerald-500/10 hover:text-emerald-300"><ExternalLink className="h-3.5 w-3.5" />Live Demo</a>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-2 text-xs font-medium text-slate-500"><ExternalLink className="h-3.5 w-3.5" />Coming Soon</span>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition-all hover:bg-white/10 hover:text-white"><Github className="h-3.5 w-3.5" />Code</a>
            <button onClick={onOpen} className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-3 py-2 text-xs font-medium text-cyan-400 transition-all hover:from-blue-600/30 hover:to-purple-600/30"><BookOpen className="h-3.5 w-3.5" />Case Study<ArrowUpRight className="h-3 w-3" /></button>
          </div>
        </div>
      </div>

      {/* Hover glow border effect */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: `inset 0 0 0 1px ${project.accent}40, 0 0 40px -10px ${project.accent}30` }}
      />
    </motion.article>
  )
}

export default function Work({ onOpenCaseStudy }: { onOpenCaseStudy: (id: string) => void }) {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All')
  const { ref, inView } = useInView<HTMLDivElement>()
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="portfolio" ref={ref} className="py-section relative">
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="px-container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="eyebrow mb-6"><span className="h-px w-8 bg-cyan-400" />Engineering Portfolio</span>
            <h2 className="section-title text-balance">Projects I've built — each one a learning milestone.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)]'
                    : 'border border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="mt-12 flex flex-col gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={i}
                onOpen={() => onOpenCaseStudy(p.id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-12 flex flex-col items-center gap-3 text-center">
            <Layers className="h-10 w-10 text-slate-600" />
            <p className="text-sm text-slate-500">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  )
}
