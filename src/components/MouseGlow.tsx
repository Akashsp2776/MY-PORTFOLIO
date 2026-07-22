import { useEffect, useRef } from 'react'

export default function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let glowX = mouseX
    let glowY = mouseY
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      glowX += (mouseX - glowX) * 0.08
      glowY += (mouseY - glowY) * 0.08
      if (ref.current) {
        ref.current.style.left = `${glowX}px`
        ref.current.style.top = `${glowY}px`
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    window.addEventListener('mousemove', onMove)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return <div ref={ref} className="mouse-glow" />
}
