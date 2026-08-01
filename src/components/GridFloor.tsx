import { useEffect, useRef } from 'react'

export default function GridFloor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return
      const offset = window.scrollY * 0.5
      ref.current.style.transform = `perspective(600px) rotateX(60deg) translateY(${offset % 80}px)`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        ref={ref}
        className="absolute bottom-0 left-1/2 h-[120vh] w-[300vw] -translate-x-1/2"
        style={{
          backgroundImage:
            'linear-gradient(rgba(96,165,250,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.12) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'linear-gradient(to top, black 0%, transparent 70%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
