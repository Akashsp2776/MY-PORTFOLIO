import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react'
import { personal } from '../data'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-bg">
      <div className="px-container mx-auto max-w-7xl py-14">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 font-mono text-sm font-bold text-white">
              &lt;/&gt;
            </span>
            <span className="font-display text-lg font-semibold text-white">
              Akash<span className="text-gradient-blue">.SP</span>
            </span>
          </a>

          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-400">
            {['About', 'Skills', 'Portfolio', 'Certifications', 'Education', 'Contact'].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="transition-colors hover:text-white">
                {l}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: personal.github },
              { icon: Linkedin, href: personal.linkedin },
              { icon: Mail, href: `mailto:${personal.email}` },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-purple-500/50 hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
            Made with
            <Heart className="h-3.5 w-3.5 fill-purple-500 text-purple-500" />
            by AKASH SP · Built with React + Tailwind CSS + Framer Motion
          </p>
          <a
            href="#home"
            className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
          >
            Back to Top
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10">
              <ArrowUp className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
