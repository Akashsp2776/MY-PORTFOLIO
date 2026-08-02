import { motion } from 'framer-motion'
import { Briefcase, Sparkles } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { experiences } from '../data'
import TiltCard from './TiltCard'

export default function Experience() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="experience" ref={ref} className="py-section relative">
      <div className="pointer-events-none absolute right-1/4 top-0 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="px-container mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <span className="eyebrow mb-6"><span className="h-px w-8 bg-cyan-400" />Internship Experience</span>
          <h2 className="section-title text-balance">Where I've put theory into practice.</h2>
          <p className="mt-4 max-w-2xl text-slate-400">Real-world software engineering experience from internships where I contributed to production code, worked in agile teams, and shipped features that mattered.</p>
        </motion.div>

        <div className="mt-14 relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent md:left-1/2" />
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div key={exp.id} initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }} className={`relative flex md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-4 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full border bg-bg md:left-1/2" style={{ borderColor: `${exp.color}60`, boxShadow: `0 0 25px -5px ${exp.color}80` }}>
                  <Briefcase className="h-4 w-4" style={{ color: exp.color }} />
                </div>
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div style={{ transformStyle: 'preserve-3d' }} className="perspective-1000">
                    <TiltCard maxTilt={8} scale={1.02} className="gradient-border group relative overflow-hidden p-7 transition-shadow duration-300 hover:card-3d-shadow-hover">
                      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" style={{ background: `${exp.color}40` }} />
                      <div className="relative flex items-start justify-between" style={{ transform: 'translateZ(30px)' }}>
                        <span className="grid h-12 w-12 place-items-center rounded-xl" style={{ background: `${exp.color}20`, border: `1px solid ${exp.color}40` }}>
                          <Briefcase className="h-5 w-5" style={{ color: exp.color }} />
                        </span>
                        <span className="rounded-full px-3 py-1 text-xs font-medium" style={{ background: `${exp.color}15`, color: exp.color }}>{exp.type}</span>
                      </div>
                      <div className="relative mt-5" style={{ transform: 'translateZ(20px)' }}>
                        <h3 className="font-display text-xl font-semibold text-white">{exp.role}</h3>
                        <div className="mt-1 flex items-center gap-2 text-sm">
                          <span className="font-medium text-slate-200">{exp.company}</span>
                          <span className="text-slate-600">·</span>
                          <span className="font-mono text-xs text-slate-400">{exp.period}</span>
                        </div>
                      </div>
                      <ul className="relative mt-5 space-y-2.5" style={{ transform: 'translateZ(15px)' }}>
                        {exp.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-400">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: exp.color }} />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <div className="relative mt-5 flex items-center gap-2 border-t border-white/5 pt-4" style={{ transform: 'translateZ(10px)' }}>
                        <Sparkles className="h-3.5 w-3.5" style={{ color: exp.color }} />
                        <span className="text-xs text-slate-500">Real-world impact · Agile team · Production code</span>
                      </div>
                    </TiltCard>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
