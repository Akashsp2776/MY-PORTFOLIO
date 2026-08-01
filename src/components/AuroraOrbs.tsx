import { motion } from 'framer-motion'

const orbs = [
  { size: 500, color: 'rgba(37,99,235,0.18)', x: '5%', y: '10%', delay: 0, duration: 18 },
  { size: 400, color: 'rgba(124,58,237,0.16)', x: '70%', y: '20%', delay: 2, duration: 22 },
  { size: 450, color: 'rgba(8,145,178,0.14)', x: '40%', y: '60%', delay: 4, duration: 20 },
  { size: 350, color: 'rgba(168,85,247,0.12)', x: '85%', y: '70%', delay: 1, duration: 25 },
]

export default function AuroraOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[100px]"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
          }}
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
