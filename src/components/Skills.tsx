import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { skillCategories } from '../data'

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
            Technologies I use to design, build, and ship software — from frontend
            interfaces to backend systems and databases.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
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
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{cat.label}</h3>
                </div>
              </div>

              <div className="relative mt-5 flex flex-wrap gap-2">
                {cat.skills.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 + idx * 0.05 }}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-white/20 hover:text-white"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
