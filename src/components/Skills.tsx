import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { skillGroups } from '../data'
import TiltCard from './TiltCard'

export default function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="skills" ref={ref} className="py-section relative">
      <div className="px-container mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <span className="eyebrow mb-6"><span className="h-px w-8 bg-neutral-600" />Technical Skills</span>
          <h2 className="section-title text-balance">My engineering toolkit.</h2>
          <p className="mt-4 max-w-2xl text-neutral-400">Technologies I use to design, build, and ship software — from frontend interfaces to backend systems, databases, and AI-powered tooling.</p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
              className="perspective-1000"
            >
              <TiltCard maxTilt={3} scale={1.01} className="card-premium group relative h-full overflow-hidden p-6">
                <div className="relative flex items-center gap-3">
                  <motion.span
                    className="grid h-12 w-12 place-items-center rounded-xl border border-[#2a2a2a] bg-[#161616] text-2xl transition-colors group-hover:border-[#3a3a3a]"
                    whileHover={{ scale: 1.05 }}
                  >
                    {cat.icon}
                  </motion.span>
                  <h3 className="font-display text-lg font-semibold text-white">{cat.label}</h3>
                </div>

                <div className="relative mt-6 space-y-4">
                  {cat.skills.map((skill, idx) => (
                    <div key={skill.name} className="group/skill">
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className="font-medium text-neutral-300 transition-colors group-hover/skill:text-white">{skill.name}</span>
                        <span className="font-mono text-neutral-600">{skill.level}%</span>
                      </div>
                      <div className="relative h-1.5 overflow-hidden rounded-full bg-[#1a1a1a]">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1.2, delay: 0.3 + i * 0.08 + idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                          className="relative h-full rounded-full bg-white"
                        />
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
          className="card-premium mx-auto mt-8 max-w-3xl p-6"
        >
          <h3 className="mb-4 flex items-center justify-center gap-2 font-display text-base font-semibold text-white">
            <span className="h-px w-6 bg-neutral-700" />
            Technology Orbit
            <span className="h-px w-6 bg-neutral-700" />
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {skillGroups.flatMap((g) => g.skills).map((skill, i) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.02, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="cursor-default rounded-full border border-[#2a2a2a] bg-[#111111] px-3 py-1.5 text-xs font-medium text-neutral-300 transition-colors hover:border-[#3a3a3a] hover:bg-[#161616] hover:text-white"
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
