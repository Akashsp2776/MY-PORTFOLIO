import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '../data'
import { useInView } from '../hooks/useInView'

export default function Testimonials() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="words" ref={ref} className="section-py relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-accent-500/5 blur-[120px]" />

      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="eyebrow mb-6 justify-center">
            <span className="h-px w-8 bg-accent-400" />
            Kind Words
            <span className="h-px w-8 bg-accent-400" />
          </span>
          <h2 className="section-title text-balance mx-auto max-w-2xl">
            People I've worked with say nice things.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card group relative flex flex-col p-8 transition-all duration-300 hover:border-white/10 hover:bg-ink-900/70"
            >
              <Quote className="h-8 w-8 text-accent-500/40" />

              <div className="mt-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-gold-400 text-gold-400" />
                ))}
              </div>

              <p className="mt-5 flex-1 text-base leading-relaxed text-ink-200">
                "{t.quote}"
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-white/10"
                />
                <div>
                  <div className="font-medium text-white">{t.name}</div>
                  <div className="text-sm text-ink-400">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
