import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, Map } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { personal } from '../data'

export default function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setForm({ name: '', email: '', message: '' })
    }, 3500)
  }

  const contactItems = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Location', value: personal.location, href: '#map' },
    { icon: Github, label: 'GitHub', value: '@Akashsp2776', href: personal.github },
    { icon: Linkedin, label: 'LinkedIn', value: 'in/akash-sp', href: personal.linkedin },
  ]

  return (
    <section id="contact" ref={ref} className="py-section relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="px-container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow mb-6">
            <span className="h-px w-8 bg-cyan-400" />
            Contact
          </span>
          <h2 className="section-title text-balance max-w-2xl">Let's build something together.</h2>
          <p className="mt-4 max-w-xl text-slate-400">
            I'm actively seeking Software Engineering, Full Stack, Java, AI, and Backend
            internships. If you're hiring — or just want to connect — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div className="space-y-3">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="gradient-border group flex items-center gap-4 p-4 transition-all duration-300 hover:scale-[1.02]"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 text-cyan-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-slate-500">{label}</div>
                    <div className="truncate text-sm font-medium text-slate-200 group-hover:text-white">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div id="map" className="gradient-border mt-3 overflow-hidden p-0">
              <div className="relative flex h-32 items-center justify-center bg-gradient-to-br from-blue-600/10 to-purple-600/10">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="relative flex flex-col items-center gap-2 text-slate-400">
                  <Map className="h-6 w-6 text-cyan-400" />
                  <span className="text-xs">Bengaluru, Karnataka, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="gradient-border space-y-5 p-7 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-bg/60 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-bg/60 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-white/10 bg-bg/60 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20"
                placeholder="Hi Akash, we have an internship opportunity..."
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="btn-primary w-full justify-center disabled:opacity-70"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  Message sent — talk soon!
                </>
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
