import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const marqueeItems = [
  'Product Design',
  'Design Systems',
  'User Research',
  'Prototyping',
  'Motion Design',
  'Brand Identity',
  'React',
  'TypeScript',
  'WebGL',
  'Art Direction',
]

export default function Marquee() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section ref={ref} className="border-y border-white/5 bg-ink-900/40 py-6">
      <div className="flex items-center gap-4 overflow-hidden">
        <motion.div
          animate={inView ? { x: ['0%', '-50%'] } : {}}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex shrink-0 items-center gap-8 pr-8"
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="font-display text-xl font-medium text-ink-400 whitespace-nowrap">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500/60" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
