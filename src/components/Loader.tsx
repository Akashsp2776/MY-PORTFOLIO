import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      current += Math.random() * 12 + 4
      if (current >= 100) {
        current = 100
        clearInterval(interval)
        setTimeout(() => setDone(true), 400)
      }
      setProgress(Math.floor(current))
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, filter: 'blur(20px)', scale: 1.1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[#0B0B0B]"
        >
          <div className="flex flex-col items-center gap-8">
            <div className="relative h-24 w-24">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-copper border-r-copper/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-3 rounded-full border-2 border-transparent border-b-copper/40"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 grid place-items-center"
              >
                <span className="font-mono text-lg font-bold text-stone-100">&lt;/&gt;</span>
              </motion.div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <motion.p
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="font-display text-lg tracking-[0.3em] text-stone-100"
              >
                AKASH SP
              </motion.p>
              <div className="h-px w-48 overflow-hidden rounded-full bg-[#2a2a2a]">
                <motion.div
                  className="h-full bg-copper"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="font-mono text-xs tracking-wider text-stone-600">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
