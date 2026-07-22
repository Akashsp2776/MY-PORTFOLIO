import { motion } from 'framer-motion'
import { Rocket, ArrowUpRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { currentlyBuilding } from '../data'

export default function CurrentlyBuilding() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section ref={ref} className="py-section relative">
      <div className="px-container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow mb-6">
            <span className="h-px w-8 bg-cyan-400" />
            Currently Building
          </span>
          <h2 className="section-title text-balance">What I'm engineering right now.</h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {currentlyBuilding.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="gradient-border relative overflow-hidden p-8"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-600/20 blur-3xl" />

              <div className="relative flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600">
                  <Rocket className="h-6 w-6 text-white" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.description}</p>
                </div>
              </div>

              <div className="relative mt-8">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-300">Progress</span>
                  <span className="font-mono text-cyan-400">{item.progress}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${item.progress}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400"
                  />
                </div>
              </div>

              <div className="relative mt-6">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-500">
                  Upcoming Features
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.upcoming.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                    >
                      <ArrowUpRight className="h-3 w-3 text-cyan-400" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>

              <div className="relative mt-6 flex items-center gap-2 text-sm">
                <span className="text-slate-500">Target release:</span>
                <span className="font-mono font-medium text-purple-400">{item.eta}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
