import { motion } from 'framer-motion'
import { BadgeCheck, Award } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { certifications } from '../data'
import TiltCard from './TiltCard'

export default function Certifications() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="certifications" ref={ref} className="py-section relative">
      <div className="px-container mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.5, ease: 'easeInOut' }}>
          <span className="eyebrow mb-6"><span className="h-px w-8 bg-copper" />Certificates</span>
          <h2 className="section-title text-balance">Verified learning, always leveling up.</h2>
          <p className="mt-4 max-w-2xl text-stone-400">Certifications that validate my skills across programming, AI, and academic excellence — each one a checkpoint in my continuous learning journey.</p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div key={cert.id} initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease: 'easeInOut' }} style={{ transformStyle: 'preserve-3d' }} className="perspective-1000">
              <TiltCard maxTilt={3} scale={1.01} className="card-premium group relative h-full overflow-hidden p-6">
                <div className="relative flex items-start justify-between" style={{ transform: 'translateZ(30px)' }}>
                  <motion.span
                    className="grid h-14 w-14 place-items-center rounded-2xl border border-[#2a2a2a] bg-[#1D1D1D] text-3xl transition-colors group-hover:border-copper/50"
                    whileHover={{ scale: 1.05 }}
                  >
                    {cert.icon}
                  </motion.span>
                  <BadgeCheck className="h-5 w-5 text-stone-500 transition-colors group-hover:text-copper" />
                </div>

                <h3 className="relative mt-5 font-display text-base font-semibold leading-snug text-stone-100" style={{ transform: 'translateZ(20px)' }}>{cert.title}</h3>
                <p className="relative mt-1.5 flex items-center gap-1.5 text-sm text-stone-400" style={{ transform: 'translateZ(15px)' }}>
                  <Award className="h-3.5 w-3.5 text-copper" />
                  {cert.issuer}
                </p>
                <span className="relative mt-4 inline-block rounded-full border border-copper/30 bg-copper/10 px-2.5 py-1 text-xs font-medium text-copper">{cert.category}</span>

                <div className="relative mt-5 h-1 overflow-hidden rounded-full bg-[#1a1a1a]" style={{ transform: 'translateZ(10px)' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100%' } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: 'easeInOut' }}
                    className="h-full rounded-full bg-copper"
                  />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
