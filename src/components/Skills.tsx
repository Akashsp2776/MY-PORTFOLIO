import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { skillGroups } from '../data'
import TiltCard from './TiltCard'

export default function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="skills" ref={ref} className="py-section relative">
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="px-container mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <span className="eyebrow mb-6"><span className="h-px w-8 bg-cyan-400" />Technical Skills</span>
          <h2 className="section-title text-balance">My engineering toolkit.</h2>
          <p className="mt-4 max-w-2xl text-slate-400">Technologies I use to design, build, and ship software — from frontend interfaces to backend systems, databases, and AI-powered tooling.</p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30, rotateX: -12, filter: 'blur(6px)' }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
              className="perspective-1000"
            >
              <TiltCard maxTilt={8} scale={1.03} className="gradient-border group relative overflow-hidden p-6 transition-shadow duration-300 hover:card-3d-shadow-hover">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" style={{ background: cat.glow }} />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: `radial-gradient(circle at 50% 0%, ${cat.color}10, transparent 60%)` }} />

                <div className="relative flex items-center gap-3" style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}>
                  <motion.span
                    className="grid h-12 w-12 place-items-center rounded-xl text-2xl"
                    style={{ background: `${cat.color}20`, border: `1px solid ${cat.color}40` }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {cat.icon}
                  </motion.span>
                  <h3 className="font-display text-lg font-semibold text-white">{cat.label}</h3>
                </div>

                <div className="relative mt-6 space-y-4" style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
                  {cat.skills.map((skill, idx) => (
                    <div key={skill.name} className="group/skill">
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-300 transition-colors group-hover/skill:text-white">{skill.name}</span>
                        <span className="font-mono text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="relative h-2 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1.2, delay: 0.3 + i * 0.08 + idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                          className="relative h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${cat.color}, ${cat.color}aa)` }}
                        >
                          <div className="absolute inset-0 rounded-full opacity-50" style={{ background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)`, backgroundSize: '200% 100%', animation: 'border-flow 2s linear infinite' }} />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="gradient-border mt-8 overflow-hidden p-8"
        >
          <h3 className="mb-6 font-display text-lg font-semibold text-white">Technology Orbit</h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {skillGroups.flatMap((g) => g.skills).map((skill, i) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.03, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="cursor-default rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-300"
                data-hover
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
