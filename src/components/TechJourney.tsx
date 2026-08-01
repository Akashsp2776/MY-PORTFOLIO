import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { techJourney } from '../data'
import TiltCard from './TiltCard'

export default function TechJourney() {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <section ref={ref} className="py-section relative">
      <div className="pointer-events-none absolute right-1/4 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="px-container mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <span className="eyebrow mb-6"><span className="h-px w-8 bg-cyan-400" />Tech Journey</span>
          <h2 className="section-title text-balance">The path from first <code className="font-mono text-cyan-400">printf</code> to full stack.</h2>
        </motion.div>
        <div className="mt-16 overflow-x-auto mask-fade-edges pb-4">
          <div className="flex min-w-max items-start gap-0">
            {techJourney.map((step, i) => (
              <div key={i} className="flex items-start">
                <motion.div initial={{ opacity: 0, scale: 0.5, rotateX: -20 }} animate={inView ? { opacity: 1, scale: 1, rotateX: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }} style={{ transformStyle: 'preserve-3d' }} className="relative flex flex-col items-center perspective-1000">
                  <TiltCard maxTilt={8} scale={1.04} className="gradient-border w-44 p-4 text-center transition-shadow duration-300 hover:card-3d-shadow-hover">
                    <div className="mb-2 text-3xl" style={{ transform: 'translateZ(30px)' }}>{step.icon}</div>
                    <div className="font-mono text-xs text-cyan-400" style={{ transform: 'translateZ(20px)' }}>{step.year}</div>
                    <div className="mt-1 font-display text-base font-semibold text-white" style={{ transform: 'translateZ(20px)' }}>{step.tech}</div>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-400" style={{ transform: 'translateZ(10px)' }}>{step.desc}</p>
                  </TiltCard>
                  <div className="mt-4 grid h-8 w-8 place-items-center rounded-full border border-purple-500/40 bg-bg"><div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" /></div>
                </motion.div>
                {i < techJourney.length - 1 && (<div className="mt-[calc(11rem+1rem)] flex items-center pt-2"><div className="h-px w-12 bg-gradient-to-r from-purple-500/50 to-blue-500/50" /><span className="text-slate-600">→</span></div>)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
