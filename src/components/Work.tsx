import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Github, ExternalLink, BookOpen, CheckCircle2, AlertCircle, Zap, Star, Layers } from 'lucide-react'
import { projects, type Project } from '../data'
import { useInView } from '../hooks/useInView'

const categories = ['All', 'Web', 'Security', 'IoT', 'UI'] as const

function StatusBadge({ status }: { status: Project['status'] }) {
  const map = {
    Completed: { icon: CheckCircle2 },
    'In Progress': { icon: AlertCircle },
    Planning: { icon: Zap },
  }
  const Icon = map[status]?.icon ?? CheckCircle2
  return <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2a2a2a] bg-[#161616] px-2.5 py-1 text-xs font-medium text-neutral-300"><Icon className="h-3 w-3" />{status}</span>
}

function DifficultyBadge({ level }: { level: Project['difficulty'] }) {
  return <span className="text-xs font-medium text-neutral-500">{level}</span>
}

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const reversed = index % 2 === 1

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="card-premium group relative overflow-hidden rounded-3xl"
    >
      <div className={`flex flex-col md:flex-row ${reversed ? 'md:flex-row-reverse' : ''}`}>
        {/* Image section */}
        <div className="relative overflow-hidden md:w-2/5">
          <div className="aspect-[16/10] md:h-full">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover opacity-50 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-70 group-hover:grayscale-0"
            />
          </div>
          <div className="absolute inset-0" style={{ background: `linear-gradient(${reversed ? 'to left' : 'to right'}, #000000, rgba(0,0,0,0.4) 50%, transparent)` }} />
          <div className="absolute left-4 top-4"><span className="chip">{project.category}</span></div>
          <div className="absolute right-4 top-4"><StatusBadge status={project.status} /></div>
        </div>

        {/* Content section */}
        <div className="flex flex-col p-6 md:w-3/5 md:p-8">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-neutral-600">0{index + 1}</span>
              <h3 className="font-display text-xl font-semibold text-white transition-colors group-hover:text-white">{project.title}</h3>
            </div>
            <DifficultyBadge level={project.difficulty} />
          </div>
          <p className="mt-1.5 text-sm text-neutral-500">{project.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">{project.description}</p>

          <div className="mt-4">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-600">Key Features</p>
            <div className="flex flex-wrap gap-2">
              {project.highlights.slice(0, 3).map((h, hi) => (
                <motion.span
                  key={h}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + hi * 0.05 + 0.3 }}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#2a2a2a] bg-[#161616] px-2.5 py-1 text-[11px] text-neutral-400"
                >
                  <Star className="h-2.5 w-2.5 text-neutral-500" />
                  {h}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="rounded-md border border-[#2a2a2a] bg-[#111111] px-2 py-0.5 text-[11px] font-medium text-neutral-400 transition-colors hover:border-[#3a3a3a] hover:text-white">{t}</span>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-2 border-t border-[#2a2a2a] pt-5">
            {project.demo && project.demo !== '#' ? (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-[#2a2a2a] bg-[#111111] px-3 py-2 text-xs font-medium text-neutral-300 transition-all hover:border-[#3a3a3a] hover:bg-[#161616] hover:text-white"><ExternalLink className="h-3.5 w-3.5" />Live Demo</a>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#2a2a2a] bg-[#111111] px-3 py-2 text-xs font-medium text-neutral-600"><ExternalLink className="h-3.5 w-3.5" />Coming Soon</span>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-[#2a2a2a] bg-[#111111] px-3 py-2 text-xs font-medium text-neutral-300 transition-all hover:border-[#3a3a3a] hover:bg-[#161616] hover:text-white"><Github className="h-3.5 w-3.5" />Code</a>
            <button onClick={onOpen} className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-black transition-all hover:bg-[#eaeaea]"><BookOpen className="h-3.5 w-3.5" />Case Study<ArrowUpRight className="h-3 w-3" /></button>
          </div>
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
    <section id="portfolio" ref={ref} className="py-section relative bg-alt">
      <div className="px-container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="eyebrow mb-6"><span className="h-px w-8 bg-neutral-600" />Engineering Portfolio</span>
            <h2 className="section-title text-balance">Projects I've built — each one a learning milestone.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-white text-black'
                    : 'border border-[#2a2a2a] text-neutral-400 hover:border-[#3a3a3a] hover:text-white'
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
              <ProjectCard key={p.id} project={p} index={i} onOpen={() => onOpenCaseStudy(p.id)} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-12 flex flex-col items-center gap-3 text-center">
            <Layers className="h-10 w-10 text-neutral-700" />
            <p className="text-sm text-neutral-500">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  )
}
