import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, FileText, CircleDot } from 'lucide-react';
import { projects } from '@/data/portfolio';

const easeOut = [0.22, 1, 0.36, 1] as const;

const statusColors: Record<string, string> = {
  Completed: 'text-green-400 bg-green-500/10 border-green-500/20',
  'In Progress': 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
  Planned: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
};

const difficultyColors: Record<string, string> = {
  Beginner: 'text-cyan-400',
  Intermediate: 'text-blue-400',
  Advanced: 'accent-coral',
};

interface ProjectsProps { onNavigate: (slug: string) => void; }

export default function Projects({ onNavigate }: ProjectsProps) {
  return (
    <section id="projects" className="section-pad relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6, ease: easeOut }} className="mb-16">
          <p className="warm-text font-mono text-xs tracking-widest uppercase mb-2">03 — Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Things I've <span className="warm-text">Built</span></h2>
          <p className="text-zinc-500 max-w-2xl mt-4">Each project is a software product — explore the case studies to see the problem, architecture, and engineering decisions.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div key={project.slug} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: i * 0.1, ease: easeOut }} whileHover={{ y: -6 }} className="glass glass-hover rounded-2xl overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <motion.img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" whileHover={{ scale: 1.08 }} transition={{ duration: 0.5 }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0f] via-[#0c0c0f]/50 to-transparent" />
                <div className="absolute top-3 left-3"><span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[project.status]}`}><CircleDot size={10} className="inline mr-1" />{project.status}</span></div>
                <div className="absolute top-3 right-3"><span className={`text-xs font-mono font-semibold ${difficultyColors[project.difficulty]}`}>{project.difficulty}</span></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (<span key={tech} className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-zinc-400 border border-white/10">{tech}</span>))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => onNavigate(project.slug)} className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium border" style={{ background: 'rgba(255,107,107,0.1)', color: '#ff6b6b', borderColor: 'rgba(255,107,107,0.2)' }}>
                    <FileText size={14} /> Case Study <ArrowRight size={14} />
                  </motion.button>
                  {project.github && (<a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-4 py-2 rounded-lg glass text-zinc-400 text-sm font-medium hover:text-white transition-colors"><Github size={14} /> Code</a>)}
                  {project.liveDemo && (<a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-4 py-2 rounded-lg glass text-zinc-400 text-sm font-medium hover:text-white transition-colors"><ExternalLink size={14} /> Demo</a>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
