import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'
import { stats } from '../data'

function StatItem({ stat, start }: { stat: typeof stats[number]; start: boolean }) {
  const value = useCounter(stat.value, 1800, start)
  return (
    <div className="gradient-border p-6 text-center">
      <div className="font-display text-4xl font-bold text-gradient-blue">{value}{stat.suffix}</div>
      <div className="mt-2 text-sm font-medium text-slate-400">{stat.label}</div>
    </div>
  )
}

export default function StatsCounter() {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <section ref={ref} className="py-12">
      <div className="px-container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (<StatItem key={s.label} stat={s} start={inView} />))}
        </div>
      </div>
    </section>
  )
}
