import { motion } from 'framer-motion'
import { Code2, Layers, Brain, Target, Zap, Trophy } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'
import { stats, learningJourney } from '../data'

const storyPoints = [
  { title: 'Passion for Software Engineering', text: 'I love the craft of turning ideas into working systems. From writing my first C program to building full-stack applications, every line of code reinforces my drive to create software that matters.', icon: Code2 },
  { title: 'Full Stack Development', text: 'I own the entire stack — designing responsive UIs with React and Tailwind, building REST APIs with Node.js, and modeling databases with MySQL and MongoDB. End-to-end thinking is my superpower.', icon: Layers },
  { title: 'Java Development', text: 'Java taught me to think in objects, design clean abstractions, and write maintainable code. Through my internship at INTERNPE, I built production Java applications using OOP, JDBC, and Collections.', icon: Code2 },
  { title: 'Artificial Intelligence', text: 'I actively explore how generative AI can augment development — from ChatGPT to GitHub Copilot. I hold certifications in AI Tools, Generative AI, and AI Ethics, and I am building toward AI-powered developer tools.', icon: Brain },
  { title: 'Problem Solving', text: 'Whether it is implementing SHA-256 hashing from scratch or integrating Arduino sensors with Python, I break complex problems into solvable pieces and ship working solutions.', icon: Target },
  { title: 'Continuous Learning', text: 'My journey from C to Full Stack spans 5 years and 15+ technologies. I learn by building — every project is a new skill acquired, a new challenge conquered, a new lesson internalized.', icon: Zap },
]

const goals = [
  'Secure a Software Engineering internship at a top tech company',
  'Master system design and distributed systems',
  'Build AI-powered developer tools',
  'Contribute to open-source at scale',
]

function StatCounter({ stat, index, start }: { stat: typeof stats[number]; index: number; start: boolean }) {
  const value = useCounter(stat.value, 2000, start)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={start ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeInOut' }}
    >
      <div className="card-premium group relative overflow-hidden p-6 text-center">
        <div className="relative font-display text-4xl font-bold text-stone-100">{value}<span className="text-copper">{stat.suffix}</span></div>
        <div className="relative mt-2 text-xs uppercase tracking-wider text-stone-500">{stat.label}</div>
      </div>
    </motion.div>
  )
}

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="about" ref={ref} className="py-section relative bg-section">
      <div className="px-container mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.5, ease: 'easeInOut' }}>
          <span className="eyebrow mb-6"><span className="h-px w-8 bg-copper" />About Me</span>
          <h2 className="section-title text-balance max-w-3xl">A future software engineer who builds, learns, and ships.</h2>
          <p className="mt-6 max-w-3xl text-balance text-base leading-relaxed text-stone-400 sm:text-lg">
            I am a Computer Science Engineering student at Presidency University, Bengaluru, driven by a singular obsession — building software that works, scales, and matters. What sets me apart is not the coursework on my transcript but the hours I have spent outside of it: architecting a cryptographically secure voting system, engineering an IoT pipeline that monitors water quality in real time, and shipping full-stack web applications used by real people. I do not wait for permission to build. I learn by doing, I ship by habit, and I treat every bug as a puzzle worth solving. I am actively seeking a Software Engineering internship where I can bring this builder's mindset to a team that ships products people rely on.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => <StatCounter key={s.label} stat={s} index={i} start={inView} />)}
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {storyPoints.map((sp, i) => (
            <motion.div key={sp.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease: 'easeInOut' }}>
              <div className="card-premium group h-full p-6">
                <div className="relative mb-4 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-[#2a2a2a] bg-[#1D1D1D] text-stone-100 transition-colors group-hover:border-copper/50 group-hover:text-copper">
                    <sp.icon className="h-5 w-5" />
                  </span>
                  <div className="h-px flex-1 bg-[#2a2a2a]" />
                </div>
                <h3 className="relative font-display text-lg font-semibold text-stone-100">{sp.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-stone-400">{sp.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <motion.h3 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.3 }} className="mb-8 flex items-center gap-2 font-display text-xl font-semibold text-stone-100">
            <Trophy className="h-5 w-5 text-copper" />My Learning Journey
          </motion.h3>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-copper/30 md:left-1/2" />
            <div className="space-y-8">
              {learningJourney.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }} className={`relative flex md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-4 z-10 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border border-copper/50 bg-[#0B0B0B] md:left-1/2">
                    <div className="h-2.5 w-2.5 rounded-full bg-copper" />
                  </div>
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="card-premium p-5">
                      <span className="font-mono text-xs font-medium text-copper">{step.year}</span>
                      <h4 className="mt-1 font-display text-base font-semibold text-stone-100">{step.title}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-stone-400">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.5, delay: 0.5 }} className="card-premium mt-12 p-8">
          <h3 className="font-display text-xl font-semibold text-stone-100">Career Goals</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {goals.map((g, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.6 + i * 0.1 }} className="flex items-start gap-3 rounded-xl border border-[#2a2a2a] bg-[#1D1D1D] p-4 transition-colors hover:border-copper/40">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-copper text-xs font-bold text-[#0B0B0B]">{i + 1}</span>
                <p className="text-sm leading-relaxed text-stone-300">{g}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
