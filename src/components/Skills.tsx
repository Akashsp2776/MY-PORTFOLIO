import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { skillGroups } from '../data'

export default function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="skills" ref={ref} className="py-section relative">
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="px-container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow mb-6">
            <span className="h-px w-8 bg-cyan-400" />
            Technical Skills
          </span>
          <h2 className="section-title text-balance">My engineering toolkit.</h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            Technologies I use to design, build, and ship software — from frontend interfaces to
            backend systems, databases, and AI-powered tooling.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="gradient-border group relative overflow-hidden p-6 transition-all duration-300 hover:scale-[1.02]"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: cat.glow }}
              />

              <div className="relative flex items-center gap-3">
                <span
                  className="grid h-12 w-12 place-items-center rounded-xl text-2xl"
                  style={{ background: `${cat.color}20`, border: `1px solid ${cat.color}40` }}
                >
                  {cat.icon}
                </span>
                <h3 className="font-display text-lg font-semibold text-white">{cat.label}</h3>
              </div>

              {/* Animated progress bars */}
              <div className="relative mt-6 space-y-3.5">
                {cat.skills.map((skill, idx) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-300">{skill.name}</span>
                      <span className="font-mono text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 + i * 0.08 + idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${cat.color}, ${cat.color}aa)` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
