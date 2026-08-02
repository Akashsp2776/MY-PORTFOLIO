import { motion } from 'framer-motion'
import { GraduationCap, BookOpen } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { education } from '../data'
import TiltCard from './TiltCard'

export default function Education() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="education" ref={ref} className="py-section relative">
      <div className="pointer-events-none absolute right-1/4 top-1/4 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="px-container mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <span className="eyebrow mb-6"><span className="h-px w-8 bg-cyan-400" />Education</span>
          <h2 className="section-title text-balance">My academic foundation.</h2>
          <p className="mt-4 max-w-2xl text-slate-400">From foundational science education to advanced computer science engineering — each milestone building the analytical and technical skills I use today.</p>
        </motion.div>

        <div className="mt-16 relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent md:left-1/2" />
          <div className="space-y-10">
            {education.map((edu, i) => (
              <motion.div key={edu.id} initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }} className={`relative flex md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-4 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full border bg-bg md:left-1/2" style={{ borderColor: `${edu.color}60`, boxShadow: `0 0 25px -5px ${edu.color}80` }}>
                  <GraduationCap className="h-4 w-4" style={{ color: edu.color }} />
                </div>
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <motion.div style={{ transformStyle: 'preserve-3d' }} className="perspective-1000">
                    <TiltCard maxTilt={8} scale={1.02} className="gradient-border group h-full p-6 transition-shadow duration-300 hover:card-3d-shadow-hover">
                      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" style={{ background: `${edu.color}30` }} />
                      <div className={`flex items-center gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`} style={{ transform: 'translateZ(30px)' }}>
                        <BookOpen className="h-4 w-4" style={{ color: edu.color }} />
                        <span className="font-mono text-xs uppercase tracking-wider" style={{ color: edu.color }}>{edu.period}</span>
                      </div>
                      <h3 className="mt-3 font-display text-lg font-semibold text-white" style={{ transform: 'translateZ(20px)' }}>{edu.institution}</h3>
                      <p className="mt-1 text-sm font-medium text-slate-300" style={{ transform: 'translateZ(15px)' }}>{edu.degree}</p>
                      {edu.field && <p className="text-sm text-slate-400">{edu.field}</p>}
                      <div className={`mt-4 flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`} style={{ transform: 'translateZ(10px)' }}>
                        {edu.highlights.map((h) => (
                          <span key={h} className="chip transition-colors hover:border-cyan-500/30 hover:text-cyan-300">{h}</span>
                        ))}
                      </div>
                      {edu.status === 'Current' && (
                        <div className={`mt-4 flex items-center gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-400">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                            Currently studying
                          </span>
                        </div>
                      )}
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
