import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, Map, Loader2, AlertCircle } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { personal } from '../data'
import TiltCard from './TiltCard'

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
    `w-full rounded-xl border bg-[#171717] px-4 py-3.5 text-stone-100 placeholder-stone-600 outline-none transition-all duration-300 focus:ring-2 ${errors[field] ? 'border-[#5a3a3a] focus:border-[#7a4a4a] focus:ring-[#7a4a4a]/20' : 'border-[#2a2a2a] focus:border-copper focus:ring-copper/20 focus:bg-[#1D1D1D]'}`

  return (
    <section id="contact" ref={ref} className="py-section relative overflow-hidden bg-section">
      <div className="px-container mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.5, ease: 'easeInOut' }}>
          <span className="eyebrow mb-6"><span className="h-px w-8 bg-copper" />Contact</span>
          <h2 className="section-title text-balance max-w-2xl">Let's build something together.</h2>
          <p className="mt-4 max-w-xl text-stone-400">I'm actively seeking Software Engineering, Full Stack, Java, AI, and Backend internships. If you're hiring — or just want to connect — I'd love to hear from you.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.2 }} className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-copper/30 bg-copper/10 px-4 py-2">
          <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-copper opacity-75" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-copper" /></span>
          <span className="text-sm font-medium text-copper">Available for internships — Summer/Fall 2026</span>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <motion.div initial={{ opacity: 0, x: -30, filter: 'blur(6px)' }} animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.5, delay: 0.1, ease: 'easeInOut' }} className="lg:col-span-2">
            <div className="space-y-3">
              {contactItems.map(({ icon: Icon, label, value, href }, i) => (
                <motion.div key={label} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }} style={{ transformStyle: 'preserve-3d' }} className="perspective-1000">
                  <TiltCard maxTilt={3} scale={1.01} className="card-premium group h-full">
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="flex items-center gap-4 p-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#2a2a2a] bg-[#1D1D1D] text-stone-100 transition-all duration-300 group-hover:border-copper/50 group-hover:text-copper" style={{ transform: 'translateZ(20px)' }}><Icon className="h-5 w-5" /></span>
                      <div className="min-w-0" style={{ transform: 'translateZ(15px)' }}><div className="text-xs uppercase tracking-wider text-stone-600">{label}</div><div className="truncate text-sm font-medium text-stone-200 group-hover:text-stone-100">{value}</div></div>
                    </a>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
            <div id="map" className="card-premium mt-3 overflow-hidden p-0">
              <div className="relative flex h-32 items-center justify-center bg-[#0B0B0B]">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="relative flex flex-col items-center gap-2 text-stone-400">
                  <Map className="h-6 w-6 text-copper" />
                  <span className="text-xs">Bengaluru, Karnataka, India</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 30, filter: 'blur(6px)' }} animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }} className="card-premium relative overflow-hidden p-7 lg:col-span-3" noValidate>
            <div className="relative mb-6 flex items-center gap-2">
              <Send className="h-4 w-4 text-copper" />
              <span className="font-mono text-xs uppercase tracking-wider text-stone-500">Send a message</span>
            </div>
            <div className="relative grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-stone-200">Name</label>
                <input value={form.name} onChange={(e) => { setForm({ ...form, name: e.target.value }); if (errors.name) setErrors({ ...errors, name: undefined }) }} className={inputClass('name')} placeholder="Your name" />
                {errors.name && <p className="mt-1.5 text-xs text-stone-400">{errors.name}</p>}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-stone-200">Email</label>
                <input type="email" value={form.email} onChange={(e) => { setForm({ ...form, email: e.target.value }); if (errors.email) setErrors({ ...errors, email: undefined }) }} className={inputClass('email')} placeholder="you@company.com" />
                {errors.email && <p className="mt-1.5 text-xs text-stone-400">{errors.email}</p>}
              </div>
            </div>
            <div className="relative mt-5">
              <label className="mb-2 block text-sm font-medium text-stone-200">Message</label>
              <textarea rows={5} value={form.message} onChange={(e) => { setForm({ ...form, message: e.target.value }); if (errors.message) setErrors({ ...errors, message: undefined }) }} className={`${inputClass('message')} resize-none`} placeholder="Hi Akash, we have an internship opportunity..." />
              {errors.message && <p className="mt-1.5 text-xs text-stone-400">{errors.message}</p>}
            </div>
            {status === 'sent' && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="relative mt-5 flex items-center gap-2 rounded-xl border border-copper/30 bg-copper/10 px-4 py-3 text-sm text-copper">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>Message sent successfully! Thank you for contacting me. I'll get back to you as soon as possible.</span>
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="relative mt-5 flex items-center gap-2 rounded-xl border border-[#3a2a2a] bg-[#1a1010] px-4 py-3 text-sm text-stone-300">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>Unable to send your message. Please try again later.</span>
              </motion.div>
            )}
            <button type="submit" disabled={status === 'sending' || status === 'sent'} className="btn-primary relative mt-6 w-full justify-center disabled:cursor-not-allowed disabled:opacity-70">
              {status === 'sent' ? (<><CheckCircle2 className="h-4 w-4" />Message sent — talk soon!</>) : status === 'sending' ? (<><Loader2 className="h-4 w-4 animate-spin" />Sending...</>) : (<>Send Message<Send className="h-4 w-4" /></>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
