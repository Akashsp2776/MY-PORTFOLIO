import { motion } from 'framer-motion'
import { Briefcase, Sparkles } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { experiences } from '../data'
import TiltCard from './TiltCard'

export default function Experience() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="experience" ref={ref} className="py-section relative">
      <div className="px-container mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.5, ease: 'easeInOut' }}>
          <span className="eyebrow mb-6"><span className="h-px w-8 bg-copper" />Internship Experience</span>
          <h2 className="section-title text-balance">Where I've put theory into practice.</h2>
          <p className="mt-4 max-w-2xl text-stone-400">Real-world software engineering experience from internships where I contributed to production code, worked in agile teams, and shipped features that mattered.</p>
        </motion.div>

        <div className="mt-14 relative">
          <div className="absolute left-4 top-0 h-full w-px bg-copper/30 md:left-1/2" />
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div key={exp.id} initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.4, delay: 0.1 + i * 0.12, ease: 'easeInOut' }} className={`relative flex md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-4 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full border border-copper/50 bg-[#0B0B0B] md:left-1/2">
                  <Briefcase className="h-4 w-4 text-copper" />
                </div>
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div style={{ transformStyle: 'preserve-3d' }} className="perspective-1000">
                    <TiltCard maxTilt={3} scale={1.01} className="card-premium group relative overflow-hidden p-7">
                      <div className="relative flex items-start justify-between" style={{ transform: 'translateZ(30px)' }}>
                        <span className="grid h-12 w-12 place-items-center rounded-xl border border-[#2a2a2a] bg-[#1D1D1D] text-stone-100 transition-colors group-hover:border-copper/50 group-hover:text-copper">
                          <Briefcase className="h-5 w-5" />
                        </span>
                        <span className="rounded-full border border-[#2a2a2a] bg-[#171717] px-3 py-1 text-xs font-medium text-stone-400">{exp.type}</span>
                      </div>
                      <div className="relative mt-5" style={{ transform: 'translateZ(20px)' }}>
                        <h3 className="font-display text-xl font-semibold text-stone-100">{exp.role}</h3>
                        <div className="mt-1 flex items-center gap-2 text-sm">
                          <span className="font-medium text-stone-200">{exp.company}</span>
                          <span className="text-stone-700">·</span>
                          <span className="font-mono text-xs text-stone-500">{exp.period}</span>
                        </div>
                      </div>
                      <ul className="relative mt-5 space-y-2.5" style={{ transform: 'translateZ(15px)' }}>
                        {exp.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5 text-sm leading-relaxed text-stone-400">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <div className="relative mt-5 flex items-center gap-2 border-t border-[#2a2a2a] pt-4" style={{ transform: 'translateZ(10px)' }}>
                        <Sparkles className="h-3.5 w-3.5 text-copper" />
                        <span className="text-xs text-stone-500">Real-world impact · Agile team · Production code</span>
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
