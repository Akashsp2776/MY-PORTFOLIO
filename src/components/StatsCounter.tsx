import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'
import { stats } from '../data'
import TiltCard from './TiltCard'

function StatItem({ stat, start, index }: { stat: typeof stats[number]; start: boolean; index: number }) {
  const value = useCounter(stat.value, 1800, start)
  return (
    <motion.div initial={{ opacity: 0, y: 30, rotateX: -15 }} animate={start ? { opacity: 1, y: 0, rotateX: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }} style={{ transformStyle: 'preserve-3d' }} className="perspective-1000">
      <TiltCard maxTilt={10} scale={1.05} className="gradient-border h-full p-6 text-center transition-shadow duration-300 hover:card-3d-shadow-hover">
        <div className="font-display text-4xl font-bold text-gradient-blue" style={{ transform: 'translateZ(30px)' }}>{value}{stat.suffix}</div>
        <div className="mt-2 text-sm font-medium text-slate-400" style={{ transform: 'translateZ(15px)' }}>{stat.label}</div>
      </TiltCard>
    </motion.div>
  )
}

export default function StatsCounter() {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <section ref={ref} className="py-12">
      <div className="px-container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (<StatItem key={s.label} stat={s} start={inView} index={i} />))}
        </div>
      </div>
    </section>
  )
}
