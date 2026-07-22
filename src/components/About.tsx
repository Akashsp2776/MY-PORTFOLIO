import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { learningJourney } from '../data'

const storyPoints = [
  { title: 'Passion for Software Engineering', text: 'I love the craft of turning ideas into working systems. From writing my first C program to building full-stack applications, every line of code reinforces my drive to create software that matters.', color: '#2563eb' },
  { title: 'Full Stack Development', text: 'I own the entire stack — designing responsive UIs with React and Tailwind, building REST APIs with Node.js, and modeling databases with MySQL and MongoDB. End-to-end thinking is my superpower.', color: '#7c3aed' },
  { title: 'Java Development', text: 'Java taught me to think in objects, design clean abstractions, and write maintainable code. Through my internship at INTERNPE, I built production Java applications using OOP, JDBC, and Collections.', color: '#0891b2' },
  { title: 'Artificial Intelligence', text: 'I actively explore how generative AI can augment development — from ChatGPT to GitHub Copilot. I hold certifications in AI Tools, Generative AI, and AI Ethics, and I am building toward AI-powered developer tools.', color: '#059669' },
  { title: 'Problem Solving', text: 'Whether it is implementing SHA-256 hashing from scratch or integrating Arduino sensors with Python, I break complex problems into solvable pieces and ship working solutions.', color: '#d97706' },
  { title: 'Continuous Learning', text: 'My journey from C to Full Stack spans 5 years and 15+ technologies. I learn by building — every project is a new skill acquired, a new challenge conquered, a new lesson internalized.', color: '#a855f7' },
]

const goals = [
  'Secure a Software Engineering internship at a top tech company',
  'Master system design and distributed systems',
  'Build AI-powered developer tools',
  'Contribute to open-source at scale',
]

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="about" ref={ref} className="py-section relative">
      <div className="px-container mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <span className="eyebrow mb-6"><span className="h-px w-8 bg-cyan-400" />About Me</span>
          <h2 className="section-title text-balance max-w-3xl">A future software engineer who builds, learns, and ships.</h2>
          <p className="mt-6 max-w-3xl text-balance text-base leading-relaxed text-slate-400 sm:text-lg">
            I am a second-year Computer Science Engineering student at Presidency University with hands-on experience in Java development, full-stack web engineering, and AI. Through internships, real-world projects in cybersecurity and IoT, and continuous self-driven learning, I have built a strong foundation in problem-solving and software craftsmanship. I am now seeking internships where I can contribute, grow, and build software that creates real impact.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {storyPoints.map((sp, i) => (
            <motion.div key={sp.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }} className="gradient-border group p-6 transition-all duration-300 hover:scale-[1.02]">
              <div className="mb-4 h-1 w-10 rounded-full" style={{ background: sp.color }} />
              <h3 className="font-display text-lg font-semibold text-white">{sp.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{sp.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <motion.h3 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="mb-8 font-display text-xl font-semibold text-white">My Learning Journey</motion.h3>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent md:left-1/2" />
            <div className="space-y-8">
              {learningJourney.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }} className={`relative flex md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-4 z-10 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border bg-bg md:left-1/2" style={{ borderColor: `${step.color}60` }}>
                    <div className="h-2.5 w-2.5 rounded-full" style={{ background: step.color }} />
                  </div>
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="gradient-border p-5 transition-all duration-300 hover:scale-[1.02]">
                      <span className="font-mono text-xs font-medium" style={{ color: step.color }}>{step.year}</span>
                      <h4 className="mt-1 font-display text-base font-semibold text-white">{step.title}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.5 }} className="mt-12 glass-card p-8">
          <h3 className="font-display text-xl font-semibold text-white">Career Goals</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {goals.map((g, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-xs font-bold text-white">{i + 1}</span>
                <p className="text-sm leading-relaxed text-slate-300">{g}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
