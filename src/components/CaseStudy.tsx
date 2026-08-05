import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb, Rocket, Code2, Layers, Calendar, Image as ImageIcon } from 'lucide-react'
import { type Project } from '../data'

export default function CaseStudy({ project, onBack }: { project: Project; onBack: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="min-h-screen pt-20">
      <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img src={project.image} alt={project.title} className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/80 to-[#0B0B0B]/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="px-container mx-auto w-full max-w-5xl pb-10">
            <button onClick={onBack} className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#171717] px-4 py-2 text-sm text-stone-300 transition-all hover:border-copper/40 hover:bg-[#1D1D1D] hover:text-copper"><ArrowLeft className="h-4 w-4" />Back to Portfolio</button>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <span className="chip mb-4">{project.category}</span>
              <h1 className="font-display text-4xl font-bold text-stone-100 sm:text-5xl">{project.title}</h1>
              <p className="mt-3 max-w-2xl text-lg text-stone-300">{project.tagline}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary"><Github className="h-4 w-4" />GitHub Repository</a>
                {project.demo && project.demo !== '#' ? (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-ghost"><ExternalLink className="h-4 w-4" />Live Demo</a>
                ) : (
                  <span className="btn-ghost cursor-not-allowed opacity-50"><ExternalLink className="h-4 w-4" />Coming Soon</span>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="px-container mx-auto max-w-5xl py-16">
        <div className="grid gap-12">
          <section>
            <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold text-stone-100"><Layers className="h-5 w-5 text-copper" />Project Overview</h2>
            <p className="text-base leading-relaxed text-stone-400">{project.longDesc}</p>
          </section>
          <div className="grid gap-6 md:grid-cols-2">
            <section className="card-premium p-6">
              <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold text-stone-100"><AlertTriangle className="h-5 w-5 text-stone-500" />Problem Statement</h3>
              <p className="text-sm leading-relaxed text-stone-400">{project.description}</p>
            </section>
            <section className="card-premium p-6">
              <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold text-stone-100"><Lightbulb className="h-5 w-5 text-copper" />Solution</h3>
              <p className="text-sm leading-relaxed text-stone-400">{project.architecture}</p>
            </section>
          </div>
          <section>
            <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold text-stone-100"><CheckCircle2 className="h-5 w-5 text-copper" />Features</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.features.map((f) => (<div key={f} className="flex items-start gap-3 rounded-xl border border-[#2a2a2a] bg-[#171717] p-4 transition-colors hover:border-copper/40"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-copper" /><span className="text-sm text-stone-300">{f}</span></div>))}
            </div>
          </section>
          <section>
            <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold text-stone-100"><Code2 className="h-5 w-5 text-copper" />Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (<span key={t} className="rounded-lg border border-[#2a2a2a] bg-[#171717] px-4 py-2 text-sm font-medium text-stone-200 transition-colors hover:border-copper/40 hover:text-copper">{t}</span>))}
            </div>
          </section>
          <section>
            <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold text-stone-100"><Layers className="h-5 w-5 text-stone-500" />Architecture Diagram</h2>
            <div className="card-premium overflow-hidden p-6">
              <div className="flex flex-wrap items-center justify-center gap-3 text-center">
                {project.architecture.split('→').map((node, idx, arr) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="rounded-xl border border-[#2a2a2a] bg-[#171717] px-4 py-3"><span className="text-sm font-medium text-stone-200">{node.trim()}</span></div>
                    {idx < arr.length - 1 && <span className="text-copper">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section>
            <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold text-stone-100"><Calendar className="h-5 w-5 text-copper" />Development Timeline</h2>
            <div className="space-y-3">
              {project.timeline.map((t, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-copper text-xs font-bold text-[#0B0B0B]">{i + 1}</div>
                  <div className="card-premium flex-1 p-4"><span className="font-medium text-stone-100">{t.phase}</span><span className="ml-3 font-mono text-xs text-stone-500">{t.duration}</span></div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold text-stone-100"><AlertTriangle className="h-5 w-5 text-stone-500" />Challenges Faced & How I Solved Them</h2>
            <div className="space-y-4">
              {project.challenges.map((c, i) => (
                <div key={i} className="card-premium p-6">
                  <div className="mb-3"><span className="mb-1 block text-xs font-medium uppercase tracking-wider text-stone-500">Challenge</span><p className="text-sm text-stone-300">{c.challenge}</p></div>
                  <div><span className="mb-1 block text-xs font-medium uppercase tracking-wider text-copper">Solution</span><p className="text-sm text-stone-300">{c.solution}</p></div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold text-stone-100"><Lightbulb className="h-5 w-5 text-copper" />Lessons Learned</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.learnings.map((l) => (<div key={l} className="flex items-start gap-3 rounded-xl border border-[#2a2a2a] bg-[#171717] p-4 transition-colors hover:border-copper/40"><Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-copper" /><span className="text-sm text-stone-300">{l}</span></div>))}
            </div>
          </section>
          <section>
            <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold text-stone-100"><Rocket className="h-5 w-5 text-copper" />Future Improvements</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.futureImprovements.map((f) => (<div key={f} className="flex items-start gap-3 rounded-xl border border-[#2a2a2a] bg-[#171717] p-4 transition-colors hover:border-copper/40"><Rocket className="mt-0.5 h-4 w-4 shrink-0 text-stone-500" /><span className="text-sm text-stone-300">{f}</span></div>))}
            </div>
          </section>
          <section>
            <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold text-stone-100"><ImageIcon className="h-5 w-5 text-stone-500" />Screenshots Gallery</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="flex aspect-video items-center justify-center rounded-xl border border-[#2a2a2a] bg-[#171717] text-stone-700 transition-colors hover:border-copper/40">
                  <div className="flex flex-col items-center gap-2"><ImageIcon className="h-8 w-8" /><span className="text-xs">Screenshot {n}</span></div>
                </div>
              ))}
            </div>
          </section>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#2a2a2a] pt-8">
            <button onClick={onBack} className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#171717] px-5 py-3 text-sm font-semibold text-stone-200 transition-all hover:border-copper/40 hover:bg-[#1D1D1D] hover:text-copper"><ArrowLeft className="h-4 w-4" />Back to Portfolio</button>
            <div className="flex gap-3">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Github className="h-4 w-4" />GitHub</a>
              {project.demo && project.demo !== '#' ? (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary"><ExternalLink className="h-4 w-4" />Live Demo</a>
              ) : (
                <span className="btn-primary cursor-not-allowed opacity-50"><ExternalLink className="h-4 w-4" />Coming Soon</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
