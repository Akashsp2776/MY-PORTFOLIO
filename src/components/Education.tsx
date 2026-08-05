import { motion } from 'framer-motion'
import { GraduationCap, BookOpen } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { education } from '../data'
import TiltCard from './TiltCard'

export default function Education() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="education" ref={ref} className="py-section relative bg-section">
      <div className="px-container mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.5, ease: 'easeInOut' }}>
          <span className="eyebrow mb-6"><span className="h-px w-8 bg-copper" />Education</span>
          <h2 className="section-title text-balance">My academic foundation.</h2>
          <p className="mt-4 max-w-2xl text-stone-400">From foundational science education to advanced computer science engineering — each milestone building the analytical and technical skills I use today.</p>
        </motion.div>

        <div className="mt-16 relative">
          <div className="absolute left-4 top-0 h-full w-px bg-copper/30 md:left-1/2" />
          <div className="space-y-10">
            {education.map((edu, i) => (
              <motion.div key={edu.id} initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.4, delay: 0.2 + i * 0.12, ease: 'easeInOut' }} className={`relative flex md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-4 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full border border-copper/50 bg-[#0B0B0B] md:left-1/2">
                  <GraduationCap className="h-4 w-4 text-copper" />
                </div>
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <motion.div style={{ transformStyle: 'preserve-3d' }} className="perspective-1000">
                    <TiltCard maxTilt={3} scale={1.01} className="card-premium group h-full p-6">
                      <div className={`flex items-center gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`} style={{ transform: 'translateZ(30px)' }}>
                        <BookOpen className="h-4 w-4 text-copper" />
                        <span className="font-mono text-xs uppercase tracking-wider text-stone-500">{edu.period}</span>
                      </div>
                      <h3 className="mt-3 font-display text-lg font-semibold text-stone-100" style={{ transform: 'translateZ(20px)' }}>{edu.institution}</h3>
                      <p className="mt-1 text-sm font-medium text-stone-300" style={{ transform: 'translateZ(15px)' }}>{edu.degree}</p>
                      {edu.field && <p className="text-sm text-stone-400">{edu.field}</p>}
                      <div className={`mt-4 flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`} style={{ transform: 'translateZ(10px)' }}>
                        {edu.highlights.map((h) => (
                          <span key={h} className="chip transition-colors hover:border-copper/40 hover:text-copper">{h}</span>
                        ))}
                      </div>
                      {edu.status === 'Current' && (
                        <div className={`mt-4 flex items-center gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-copper/30 bg-copper/10 px-3 py-1 text-xs font-medium text-copper">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-copper" />
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
