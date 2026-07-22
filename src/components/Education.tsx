import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { education } from '../data'

export default function Education() {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <section id="education" ref={ref} className="py-section relative">
      <div className="px-container mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <span className="eyebrow mb-6"><span className="h-px w-8 bg-cyan-400" />Education</span>
          <h2 className="section-title text-balance">My academic foundation.</h2>
        </motion.div>
        <div className="mt-16 relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent md:left-1/2" />
          <div className="space-y-10">
            {education.map((edu, i) => (
              <motion.div key={edu.id} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }} className={`relative flex md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-4 z-10 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border bg-bg md:left-1/2" style={{ borderColor: `${edu.color}60` }}><div className="h-2.5 w-2.5 rounded-full" style={{ background: edu.color }} /></div>
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="gradient-border p-6 transition-all duration-300 hover:scale-[1.02]">
                    <div className={`flex items-center gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}><GraduationCap className="h-4 w-4" style={{ color: edu.color }} /><span className="font-mono text-xs uppercase tracking-wider" style={{ color: edu.color }}>{edu.period}</span></div>
                    <h3 className="mt-3 font-display text-lg font-semibold text-white">{edu.institution}</h3>
                    <p className="mt-1 text-sm font-medium text-slate-300">{edu.degree}</p>
                    {edu.field && <p className="text-sm text-slate-400">{edu.field}</p>}
                    <div className={`mt-3 flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>{edu.highlights.map((h) => (<span key={h} className="chip">{h}</span>))}</div>
                    {edu.status === 'Current' && (<div className={`mt-4 flex items-center gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}><span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-400"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />Currently studying</span></div>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
