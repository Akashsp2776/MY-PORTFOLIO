import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Floating3DShape() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360])
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 720])
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <div ref={containerRef} className="pointer-events-none fixed right-[8%] top-[15%] z-0 hidden lg:block">
      <motion.div
        style={{
          rotateX,
          rotateY,
          y: translateY,
          transformStyle: 'preserve-3d',
          perspective: 800,
        }}
        className="relative"
      >
        {/* Wireframe icosahedron via CSS */}
        <div className="relative h-64 w-64" style={{ transformStyle: 'preserve-3d' }}>
          {/* Faces */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border border-cyan-400/20"
              style={{
                transform: `rotateY(${i * 60}deg) translateZ(80px)`,
                background: `linear-gradient(135deg, rgba(96,165,250,0.03), rgba(124,58,237,0.03))`,
              }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
          {/* Edge glow */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(124,58,237,0.08), transparent 70%)',
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </div>
  )
}
