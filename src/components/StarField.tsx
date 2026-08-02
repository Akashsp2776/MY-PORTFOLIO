import { useEffect, useRef } from 'react'

type Star = { x: number; y: number; z: number; size: number; twinkle: number; speed: number }

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let stars: Star[] = []
    let raf = 0
    let w = 0
    let h = 0

    const resize = () => {
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * window.devicePixelRatio
      canvas.height = h * window.devicePixelRatio
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      initStars()
    }

    const initStars = () => {
      stars = []
      const count = Math.min(120, Math.floor((w * h) / 12000))
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: Math.random() * 0.8 + 0.2,
          size: Math.random() * 1.5 + 0.3,
          twinkle: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.02 + 0.005,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const s of stars) {
        s.twinkle += s.speed
        const alpha = (Math.sin(s.twinkle) * 0.4 + 0.6) * s.z
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 220, 255, ${alpha * 0.6})`
        ctx.fill()

        if (s.size > 1) {
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.size * 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(124, 58, 237, ${alpha * 0.08})`
          ctx.fill()
        }
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
}
