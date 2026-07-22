import { useEffect, useRef, useState } from 'react'

export function useCounter(target: number, duration = 1800, start = false) {
  const [value, setValue] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!start || startedRef.current) return
    startedRef.current = true

    let startTime: number | null = null
    let raf = 0

    const animate = (ts: number) => {
      if (startTime === null) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * target))
      if (progress < 1) raf = requestAnimationFrame(animate)
      else setValue(target)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, start])

  return value
}
