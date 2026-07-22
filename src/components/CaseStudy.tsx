import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb, Rocket, Code2, Layers, Calendar, Image as ImageIcon } from 'lucide-react'
import { type Project } from '../data'

export default function CaseStudy({ project, onBack }: { project: Project; onBack: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="min-h-screen pt-20">
      <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img src={project.image} alt={project.title} className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/30" />
        <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ background: `radial-gradient(circle at 50% 50%, ${project.accent}, transparent 70%)` }} />
        <div className="absolute inset-0 flex items-end">
          <div className="px-container mx-auto w-full max-w-5xl pb-10">
            <button onClick={onBack} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-all hover:border-white/20 hover:text-white"><ArrowLeft className="h-4 w-4" />Back to Portfolio</button>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <span className="chip mb-4">{project.category}</span>
              <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">{project.title}</h1>
              <p className="mt-3 max-w-2xl text-lg text-slate-300">{project.tagline}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-primary"><Github className="h-4 w-4" />GitHub Repository</a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="btn-ghost"><ExternalLink className="h-4 w-4" />Live Demo</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="px-container mx-auto max-w-5xl py-16">
        <div className="grid gap-12">
          <section>
            <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold text-white"><Layers className="h-5 w-5 text-cyan-400" />Project Overview</h2>
            <p className="text-base leading-relaxed text-slate-400">{project.longDesc}</p>
          </section>
          <div className="grid gap-6 md:grid-cols-2">
            <section className="gradient-border p-6">
              <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold text-white"><AlertTriangle className="h-5 w-5 text-amber-400" />Problem Statement</h3>
              <p className="text-sm leading-relaxed text-slate-400">{project.description}</p>
            </section>
            <section className="gradient-border p-6">
              <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold text-white"><Lightbulb className="h-5 w-5 text-cyan-400" />Solution</h3>
              <p className="text-sm leading-relaxed text-slate-400">{project.architecture}</p>
            </section>
          </div>
          <section>
            <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold text-white"><CheckCircle2 className="h-5 w-5 text-emerald-400" />Features</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.features.map((f) => (<div key={f} className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-4"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" /><span className="text-sm text-slate-300">{f}</span></div>))}
            </div>
          </section>
          <section>
            <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold text-white"><Code2 className="h-5 w-5 text-purple-400" />Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (<span key={t} className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">{t}</span>))}
            </div>
          </section>
          <section>
            <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold text-white"><Layers className="h-5 w-5 text-blue-400" />Architecture Diagram</h2>
            <div className="gradient-border overflow-hidden p-6">
              <div className="flex flex-wrap items-center justify-center gap-3 text-center">
                {project.architecture.split('→').map((node, idx, arr) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"><span className="text-sm font-medium text-slate-200">{node.trim()}</span></div>
                    {idx < arr.length - 1 && <span className="text-cyan-400">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section>
            <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold text-white"><Calendar className="h-5 w-5 text-cyan-400" />Development Timeline</h2>
            <div className="space-y-3">
              {project.timeline.map((t, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-xs font-bold text-white">{i + 1}</div>
                  <div className="flex-1 gradient-border p-4"><span className="font-medium text-white">{t.phase}</span><span className="ml-3 font-mono text-xs text-slate-500">{t.duration}</span></div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold text-white"><AlertTriangle className="h-5 w-5 text-amber-400" />Challenges Faced & How I Solved Them</h2>
            <div className="space-y-4">
              {project.challenges.map((c, i) => (
                <div key={i} className="gradient-border p-6">
                  <div className="mb-3"><span className="mb-1 block text-xs font-medium uppercase tracking-wider text-amber-400">Challenge</span><p className="text-sm text-slate-300">{c.challenge}</p></div>
                  <div><span className="mb-1 block text-xs font-medium uppercase tracking-wider text-emerald-400">Solution</span><p className="text-sm text-slate-300">{c.solution}</p></div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold text-white"><Lightbulb className="h-5 w-5 text-cyan-400" />Lessons Learned</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.learnings.map((l) => (<div key={l} className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-4"><Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" /><span className="text-sm text-slate-300">{l}</span></div>))}
            </div>
          </section>
          <section>
            <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold text-white"><Rocket className="h-5 w-5 text-purple-400" />Future Improvements</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.futureImprovements.map((f) => (<div key={f} className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-4"><Rocket className="mt-0.5 h-4 w-4 shrink-0 text-purple-400" /><span className="text-sm text-slate-300">{f}</span></div>))}
            </div>
          </section>
          <section>
            <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold text-white"><ImageIcon className="h-5 w-5 text-blue-400" />Screenshots Gallery</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="flex aspect-video items-center justify-center rounded-xl border border-white/5 bg-white/5 text-slate-600">
                  <div className="flex flex-col items-center gap-2"><ImageIcon className="h-8 w-8" /><span className="text-xs">Screenshot {n}</span></div>
                </div>
              ))}
            </div>
          </section>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-8">
            <button onClick={onBack} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-white/20 hover:text-white"><ArrowLeft className="h-4 w-4" />Back to Portfolio</button>
            <div className="flex gap-3">
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost"><Github className="h-4 w-4" />GitHub</a>
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary"><ExternalLink className="h-4 w-4" />Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
