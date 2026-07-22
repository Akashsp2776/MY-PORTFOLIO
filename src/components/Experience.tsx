import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { experiences } from '../data'

export default function Experience() {
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
            Internship Experience
          </span>
          <h2 className="section-title text-balance">Where I've put theory into practice.</h2>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="gradient-border group relative overflow-hidden p-7 transition-all duration-300 hover:scale-[1.02]"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `${exp.color}40` }}
              />

              <div className="relative flex items-start justify-between">
                <span
                  className="grid h-12 w-12 place-items-center rounded-xl"
                  style={{ background: `${exp.color}20`, border: `1px solid ${exp.color}40` }}
                >
                  <Briefcase className="h-5 w-5" style={{ color: exp.color }} />
                </span>
                <span
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{ background: `${exp.color}15`, color: exp.color }}
                >
                  {exp.type}
                </span>
              </div>

              <div className="relative mt-5">
                <h3 className="font-display text-xl font-semibold text-white">{exp.role}</h3>
                <div className="mt-1 flex items-center gap-2 text-sm">
                  <span className="font-medium text-slate-200">{exp.company}</span>
                  <span className="text-slate-600">·</span>
                  <span className="font-mono text-xs text-slate-400">{exp.period}</span>
                </div>
              </div>

              <ul className="relative mt-5 space-y-2.5">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-400">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: exp.color }}
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
