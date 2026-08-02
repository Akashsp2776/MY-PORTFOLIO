import { motion } from 'framer-motion'
import { BadgeCheck, Award } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { certifications } from '../data'
import TiltCard from './TiltCard'

export default function Certifications() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="certifications" ref={ref} className="py-section relative">
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-cyan-600/10 blur-[120px]" />
      <div className="px-container mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <span className="eyebrow mb-6"><span className="h-px w-8 bg-cyan-400" />Certificates</span>
          <h2 className="section-title text-balance">Verified learning, always leveling up.</h2>
          <p className="mt-4 max-w-2xl text-slate-400">Certifications that validate my skills across programming, AI, and academic excellence — each one a checkpoint in my continuous learning journey.</p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div key={cert.id} initial={{ opacity: 0, y: 30, rotateX: -12, filter: 'blur(6px)' }} animate={inView ? { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }} style={{ transformStyle: 'preserve-3d' }} className="perspective-1000">
              <TiltCard maxTilt={10} scale={1.04} className="gradient-border group relative h-full overflow-hidden p-6 transition-shadow duration-300 hover:card-3d-shadow-hover">
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" style={{ background: `${cert.color}40` }} />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: `radial-gradient(circle at 50% 0%, ${cert.color}10, transparent 60%)` }} />

                <div className="relative flex items-start justify-between" style={{ transform: 'translateZ(30px)' }}>
                  <motion.span
                    className="grid h-14 w-14 place-items-center rounded-2xl text-3xl"
                    style={{ background: `${cert.color}20`, border: `1px solid ${cert.color}40` }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {cert.icon}
                  </motion.span>
                  <BadgeCheck className="h-5 w-5" style={{ color: cert.color }} />
                </div>

                <h3 className="relative mt-5 font-display text-base font-semibold leading-snug text-white" style={{ transform: 'translateZ(20px)' }}>{cert.title}</h3>
                <p className="relative mt-1.5 flex items-center gap-1.5 text-sm text-slate-400" style={{ transform: 'translateZ(15px)' }}>
                  <Award className="h-3.5 w-3.5" style={{ color: cert.color }} />
                  {cert.issuer}
                </p>
                <span className="relative mt-4 inline-block rounded-full px-2.5 py-1 text-xs font-medium" style={{ background: `${cert.color}15`, color: cert.color }}>{cert.category}</span>

                <div className="relative mt-5 h-1 overflow-hidden rounded-full bg-white/5" style={{ transform: 'translateZ(10px)' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100%' } : {}}
                    transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${cert.color}, ${cert.color}80)` }}
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
