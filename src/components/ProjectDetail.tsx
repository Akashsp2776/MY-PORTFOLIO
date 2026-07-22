import { motion } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, Github, ExternalLink, CheckCircle2, AlertTriangle,
  Lightbulb, Rocket, Calendar, Layers, Target, Wrench, TrendingUp, Cpu,
} from 'lucide-react';
import { projects } from '@/data/portfolio';

const easeOut = [0.22, 1, 0.36, 1] as const;

interface ProjectDetailProps { slug: string; onBack: () => void; }

function Section({ icon: Icon, label, color, children }: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string; color: string; children: React.ReactNode;
}) {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, ease: easeOut }}>
      <div className="flex items-center gap-3 mb-6"><Icon size={22} className={color} /><h2 className="text-2xl font-semibold text-white">{label}</h2></div>
      {children}
    </motion.section>
  );
}

export default function ProjectDetail({ slug, onBack }: ProjectDetailProps) {
  const project = projects.find((p) => p.slug === slug);
  if (!project) return (<div className="min-h-screen flex items-center justify-center pt-20"><div className="text-center"><h1 className="text-2xl text-white mb-4">Project not found</h1><button onClick={onBack} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-black font-medium" style={{ background: 'linear-gradient(135deg, #ff6b6b, #f5a623)' }}><ArrowLeft size={18} /> Back</button></div></div>);

  return (
    <div className="pt-20">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0"><img src={project.image} alt={project.title} className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0f]/80 via-[#0c0c0f]/70 to-[#0c0c0f]" /></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: easeOut }}>
            <button onClick={onBack} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-zinc-400 hover:text-white text-sm mb-6 transition-colors"><ArrowLeft size={16} /> Back</button>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 warm-text">{project.title}</h1>
            <p className="text-zinc-300 text-lg max-w-2xl mx-auto mb-6">{project.shortDescription}</p>
            <div className="flex flex-wrap gap-2 justify-center">{project.technologies.map((tech) => (<span key={tech} className="px-3 py-1 rounded-md text-sm font-mono bg-white/5 text-zinc-400 border border-white/10">{tech}</span>))}</div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <Section icon={Layers} label="Project Overview" color="accent-coral"><p className="text-zinc-300 leading-relaxed">{project.overview}</p></Section>
        <Section icon={AlertTriangle} label="Problem Statement" color="text-red-400"><p className="text-zinc-300 leading-relaxed">{project.problem}</p></Section>
        <Section icon={Target} label="Objectives" color="accent-teal"><ul className="space-y-3">{project.objectives.map((obj, i) => (<motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3 text-zinc-300"><CheckCircle2 className="accent-teal mt-0.5 shrink-0" size={18} /> {obj}</motion.li>))}</ul></Section>
        <Section icon={Lightbulb} label="Solution" color="warm-text"><p className="text-zinc-300 leading-relaxed">{project.solution}</p></Section>
        <Section icon={Cpu} label="Architecture" color="accent-coral">
          <div className="glass rounded-2xl p-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {project.techStack.map((tech, i) => (<div key={tech.name} className="flex items-center gap-3"><motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="px-4 py-3 rounded-xl glass text-center min-w-[120px]"><p className="text-white font-semibold text-sm">{tech.name}</p><p className="text-zinc-600 text-xs mt-1">{tech.role}</p></motion.div>{i < project.techStack.length - 1 && <ArrowRight className="text-zinc-700" size={20} />}</div>))}
            </div>
            <p className="text-zinc-400 text-sm text-center mt-6 leading-relaxed">{project.architecture}</p>
          </div>
        </Section>
        <Section icon={Wrench} label="Technology Stack" color="warm-text"><div className="grid sm:grid-cols-2 gap-3">{project.techStack.map((tech) => (<div key={tech.name} className="glass glass-hover rounded-xl p-4 flex items-center justify-between"><span className="text-white font-medium">{tech.name}</span><span className="text-zinc-600 text-sm">{tech.role}</span></div>))}</div></Section>
        <Section icon={Rocket} label="Key Features" color="accent-teal"><div className="grid sm:grid-cols-2 gap-3">{project.features.map((feature, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass glass-hover rounded-xl p-4 flex items-start gap-3"><CheckCircle2 className="accent-teal mt-0.5 shrink-0" size={18} /><span className="text-zinc-300 text-sm">{feature}</span></motion.div>))}</div></Section>
        <Section icon={Calendar} label="Development Timeline" color="accent-coral"><div className="space-y-4">{project.timeline.map((phase, i) => (<motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-xl p-5"><div className="flex items-center justify-between mb-3"><h4 className="text-white font-semibold">{phase.phase}</h4><span className="warm-text text-sm font-mono">{phase.duration}</span></div><div className="flex flex-wrap gap-2">{phase.tasks.map((task, j) => (<span key={j} className="px-3 py-1 rounded-md text-xs bg-white/5 text-zinc-500 border border-white/10">{task}</span>))}</div></motion.div>))}</div></Section>
        <Section icon={AlertTriangle} label="Challenges & Solutions" color="text-red-400"><div className="space-y-4">{project.challenges.map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-xl p-5"><div className="flex items-start gap-3 mb-3"><AlertTriangle className="text-red-400 mt-0.5 shrink-0" size={18} /><div><p className="text-zinc-500 text-xs uppercase tracking-wide mb-1">Challenge</p><p className="text-zinc-200">{item.challenge}</p></div></div><div className="flex items-start gap-3 pl-7"><Lightbulb className="text-green-400 mt-0.5 shrink-0" size={18} /><div><p className="text-zinc-500 text-xs uppercase tracking-wide mb-1">Solution</p><p className="text-zinc-300 text-sm">{item.solution}</p></div></div></motion.div>))}</div></Section>
        <Section icon={TrendingUp} label="Lessons Learned" color="accent-teal"><ul className="space-y-3">{project.lessons.map((lesson, i) => (<motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3 text-zinc-300"><Lightbulb className="accent-teal mt-0.5 shrink-0" size={18} /> {lesson}</motion.li>))}</ul></Section>
        <Section icon={Rocket} label="Future Improvements" color="warm-text"><ul className="space-y-3">{project.futureImprovements.map((item, i) => (<motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3 text-zinc-300"><Rocket className="warm-text mt-0.5 shrink-0" size={18} /> {item}</motion.li>))}</ul></Section>
        <div className="glass rounded-2xl p-8 text-center"><h3 className="text-2xl font-semibold text-white mb-4">Explore this project</h3><div className="flex flex-wrap gap-4 justify-center">{project.liveDemo && (<a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full text-black font-medium" style={{ background: 'linear-gradient(135deg, #ff6b6b, #f5a623)' }}><ExternalLink size={18} /> Live Demo</a>)}{project.github && (<a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full glass glass-hover text-white font-medium"><Github size={18} /> GitHub</a>)}</div></div>
        <div className="text-center"><button onClick={onBack} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-zinc-500 hover:text-white text-sm transition-colors"><ArrowLeft size={16} /> Back to Portfolio</button></div>
      </div>
    </div>
  );
}
