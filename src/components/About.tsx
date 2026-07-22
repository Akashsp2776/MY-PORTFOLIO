import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const storyPoints = [
  {
    title: 'Who I Am',
    text: 'A second-year Computer Science Engineering student at Presidency University, Bengaluru, with a deep passion for building software that solves real-world problems.',
    color: '#2563eb',
  },
  {
    title: 'My Journey',
    text: 'Started with C, fell in love with Java, explored Python and AI, then moved into full-stack web development with React and Node.js — each step building on the last.',
    color: '#7c3aed',
  },
  {
    title: 'Why Software Engineering',
    text: "I love the craft of turning ideas into working systems. There's nothing quite like the moment a feature comes alive and actually helps someone.",
    color: '#0891b2',
  },
  {
    title: 'Why Java',
    text: "Java taught me to think in objects, design clean abstractions, and write maintainable code. It's the backbone of my engineering mindset.",
    color: '#d97706',
  },
  {
    title: 'AI Interest',
    text: 'I am fascinated by how AI can augment human capability. From ChatGPT to GitHub Copilot, I actively explore how generative AI can make development faster and smarter.',
    color: '#059669',
  },
  {
    title: 'Full Stack Passion',
    text: 'I enjoy owning the entire stack — designing the UI, building the API, modeling the database, and deploying. End-to-end thinking is my superpower.',
    color: '#a855f7',
  },
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow mb-6">
            <span className="h-px w-8 bg-cyan-400" />
            About Me
          </span>
          <h2 className="section-title text-balance max-w-3xl">
            I'm a future software engineer who builds, learns, and ships.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {storyPoints.map((sp, i) => (
            <motion.div
              key={sp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="gradient-border group p-6 transition-all duration-300 hover:scale-[1.02]"
            >
              <div
                className="mb-4 h-1 w-10 rounded-full"
                style={{ background: sp.color }}
              />
              <h3 className="font-display text-lg font-semibold text-white">{sp.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{sp.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 glass-card p-8"
        >
          <h3 className="font-display text-xl font-semibold text-white">Career Goals</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {goals.map((g, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-xs font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-slate-300">{g}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
