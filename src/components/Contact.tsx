import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, Map, Loader2, AlertCircle } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { personal } from '../data'

const WEBHOOK_URL = 'https://eotbnnriklxmd6r.m.pipedream.net'

export default function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})

  const validate = () => {
    const next: typeof errors = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) {
      next.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Please enter a valid email address'
    }
    if (!form.message.trim()) next.message = 'Message is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'sending' || status === 'sent') return
    if (!validate()) return
    setStatus('sending')
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name.trim(), email: form.email.trim(), message: form.message.trim() }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setErrors({})
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  const contactItems = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Location', value: personal.location, href: '#map' },
    { icon: Github, label: 'GitHub', value: '@Akashsp2776', href: personal.github },
    { icon: Linkedin, label: 'LinkedIn', value: 'in/akash-sp', href: personal.linkedin },
  ]

  const inputClass = (field: keyof typeof errors) =>
    `w-full rounded-xl border bg-bg/60 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all duration-300 focus:ring-2 ${errors[field] ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:border-purple-500/50 focus:ring-purple-500/20'}`

  return (
    <section id="contact" ref={ref} className="py-section relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="px-container mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <span className="eyebrow mb-6"><span className="h-px w-8 bg-cyan-400" />Contact</span>
          <h2 className="section-title text-balance max-w-2xl">Let's build something together.</h2>
          <p className="mt-4 max-w-xl text-slate-400">I'm actively seeking Software Engineering, Full Stack, Java, AI, and Backend internships. If you're hiring — or just want to connect — I'd love to hear from you.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2">
          <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" /></span>
          <span className="text-sm font-medium text-emerald-300">Available for internships — Summer/Fall 2026</span>
        </motion.div>
        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-2">
            <div className="space-y-3">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="gradient-border group flex items-center gap-4 p-4 transition-all duration-300 hover:scale-[1.02]">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 text-cyan-400"><Icon className="h-5 w-5" /></span>
                  <div className="min-w-0"><div className="text-xs uppercase tracking-wider text-slate-500">{label}</div><div className="truncate text-sm font-medium text-slate-200 group-hover:text-white">{value}</div></div>
                </a>
              ))}
            </div>
            <div id="map" className="gradient-border mt-3 overflow-hidden p-0">
              <div className="relative flex h-32 items-center justify-center bg-gradient-to-br from-blue-600/10 to-purple-600/10">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="relative flex flex-col items-center gap-2 text-slate-400"><Map className="h-6 w-6 text-cyan-400" /><span className="text-xs">Bengaluru, Karnataka, India</span></div>
              </div>
            </div>
          </motion.div>
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="gradient-border space-y-5 p-7 lg:col-span-3" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Name</label>
                <input value={form.name} onChange={(e) => { setForm({ ...form, name: e.target.value }); if (errors.name) setErrors({ ...errors, name: undefined }) }} className={inputClass('name')} placeholder="Your name" />
                {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Email</label>
                <input type="email" value={form.email} onChange={(e) => { setForm({ ...form, email: e.target.value }); if (errors.email) setErrors({ ...errors, email: undefined }) }} className={inputClass('email')} placeholder="you@company.com" />
                {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">Message</label>
              <textarea rows={5} value={form.message} onChange={(e) => { setForm({ ...form, message: e.target.value }); if (errors.message) setErrors({ ...errors, message: undefined }) }} className={`${inputClass('message')} resize-none`} placeholder="Hi Akash, we have an internship opportunity..." />
              {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
            </div>
            {status === 'sent' && (
              <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>Message sent successfully! Thank you for contacting me. I'll get back to you as soon as possible.</span>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>Unable to send your message. Please try again later.</span>
              </div>
            )}
            <button type="submit" disabled={status === 'sending' || status === 'sent'} className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-70">
              {status === 'sent' ? (<><CheckCircle2 className="h-4 w-4" />Message sent — talk soon!</>) : status === 'sending' ? (<><Loader2 className="h-4 w-4 animate-spin" />Sending...</>) : (<>Send Message<Send className="h-4 w-4" /></>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
