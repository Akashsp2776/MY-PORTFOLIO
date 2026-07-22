import { motion } from 'framer-motion'
import { Github, Star, GitFork, Users } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { personal } from '../data'

const githubStats = [
  { icon: Star, label: 'Stars', value: '12+', color: '#d97706' },
  { icon: GitFork, label: 'Forks', value: '5+', color: '#0891b2' },
  { icon: Users, label: 'Followers', value: '8+', color: '#7c3aed' },
  { icon: Github, label: 'Repos', value: '15+', color: '#2563eb' },
]

const weeks = Array.from({ length: 26 }, (_, i) => i)
const days = ['M', 'W', 'F']
const contributionLevel = (week: number, day: number) => Math.abs((week * 7 + day * 3) % 5)
const levelColors = ['bg-white/5', 'bg-blue-500/20', 'bg-blue-500/40', 'bg-blue-500/60', 'bg-blue-500/80']

export default function GitHubStats() {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <section ref={ref} className="py-section relative">
      <div className="px-container mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <span className="eyebrow mb-6"><span className="h-px w-8 bg-cyan-400" />GitHub Activity</span>
          <h2 className="section-title text-balance">Always shipping, always contributing.</h2>
        </motion.div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="grid grid-cols-2 gap-4 lg:col-span-1">
            {githubStats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }} className="gradient-border p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: `${stat.color}20`, border: `1px solid ${stat.color}40` }}><stat.icon className="h-5 w-5" style={{ color: stat.color }} /></span>
                  <div><div className="font-display text-2xl font-bold text-white">{stat.value}</div><div className="text-xs text-slate-400">{stat.label}</div></div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="gradient-border p-6 lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-base font-semibold text-white">Contribution Activity</h3>
              <a href={personal.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs text-cyan-400 transition-colors hover:text-cyan-300"><Github className="h-3.5 w-3.5" />View Profile</a>
            </div>
            <div className="overflow-x-auto">
              <div className="flex gap-1">
                <div className="mr-1 flex flex-col justify-around gap-1">{days.map((d) => (<span key={d} className="text-[10px] text-slate-600">{d}</span>))}</div>
                {weeks.map((week) => (
                  <div key={week} className="flex flex-col gap-1">
                    {days.map((day, dayIdx) => {
                      const level = contributionLevel(week, dayIdx)
                      return <motion.div key={day} initial={{ opacity: 0, scale: 0 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.3, delay: week * 0.01 + dayIdx * 0.03 }} className={`h-3 w-3 rounded-sm ${levelColors[level]}`} />
                    })}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-end gap-2">
              <span className="text-[10px] text-slate-600">Less</span>
              {levelColors.map((c, i) => (<div key={i} className={`h-2.5 w-2.5 rounded-sm ${c}`} />))}
              <span className="text-[10px] text-slate-600">More</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
