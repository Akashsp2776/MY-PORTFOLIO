import { useEffect, useRef } from 'react'

type Shape = {
  x: number; y: number; z: number
  vx: number; vy: number; vz: number
  rx: number; ry: number; rz: number
  vrx: number; vry: number; vrz: number
  size: number
  color: string
  type: 'cube' | 'triangle' | 'diamond'
  opacity: number
}

function projectPoint(x: number, y: number, z: number, fov: number, cx: number, cy: number) {
  const scale = fov / (fov + z)
  return { px: cx + x * scale, py: cy + y * scale, scale }
}

export default function Scene3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0, h = 0, raf = 0

    const colors = ['rgba(96,165,250,', 'rgba(168,85,247,', 'rgba(34,211,238,', 'rgba(99,102,241,', 'rgba(196,181,253,']
    const shapes: Shape[] = []

    const resize = () => {
      w = canvas.offsetWidth; h = canvas.offsetHeight
      canvas.width = w * window.devicePixelRatio
      canvas.height = h * window.devicePixelRatio
      ctx.setTransform(1,0,0,1,0,0)
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    const initShapes = () => {
      for (let i = 0; i < 18; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)]
        shapes.push({
          x: (Math.random() - 0.5) * 700,
          y: (Math.random() - 0.5) * 500,
          z: Math.random() * 400 - 200,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          vz: (Math.random() - 0.5) * 0.2,
          rx: Math.random() * Math.PI * 2,
          ry: Math.random() * Math.PI * 2,
          rz: Math.random() * Math.PI * 2,
          vrx: (Math.random() - 0.5) * 0.012,
          vry: (Math.random() - 0.5) * 0.010,
          vrz: (Math.random() - 0.5) * 0.008,
          size: Math.random() * 28 + 14,
          color,
          type: (['cube', 'triangle', 'diamond'] as const)[Math.floor(Math.random() * 3)],
          opacity: Math.random() * 0.25 + 0.1,
        })
      }
    }

    const drawCube = (cx: number, cy: number, scale: number, s: Shape) => {
      const sz = s.size * scale * 0.5
      const cos = Math.cos(s.ry), sin = Math.sin(s.ry)
      const cosX = Math.cos(s.rx)
      const pts: [number,number][] = [
        [-sz, -sz], [sz, -sz], [sz, sz], [-sz, sz]
      ].map(([x, y]) => [
        cx + x * cos - y * sin * 0.3,
        cy + x * sin * 0.3 * cosX + y * cosX
      ])
      ctx.beginPath()
      ctx.moveTo(pts[0][0], pts[0][1])
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1])
      ctx.closePath()
      ctx.strokeStyle = `${s.color}${s.opacity})`
      ctx.lineWidth = 1
      ctx.stroke()
      // cross lines
      ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); ctx.lineTo(pts[2][0], pts[2][1]); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(pts[1][0], pts[1][1]); ctx.lineTo(pts[3][0], pts[3][1]); ctx.stroke()
    }

    const drawTriangle = (cx: number, cy: number, scale: number, s: Shape) => {
      const sz = s.size * scale
      const cos = Math.cos(s.rz)
      const sin = Math.sin(s.rz)
      const pts: [number,number][] = [
        [0, -sz], [-sz * 0.87, sz * 0.5], [sz * 0.87, sz * 0.5]
      ].map(([x, y]) => [cx + x * cos - y * sin, cy + x * sin + y * cos])
      ctx.beginPath()
      ctx.moveTo(pts[0][0], pts[0][1])
      pts.forEach(([x, y]) => ctx.lineTo(x, y))
      ctx.closePath()
      ctx.strokeStyle = `${s.color}${s.opacity})`
      ctx.lineWidth = 1
      ctx.stroke()
      // inner triangle
      const inner = pts.map(([x, y]) => [cx + (x - cx) * 0.5, cy + (y - cy) * 0.5] as [number,number])
      ctx.beginPath(); ctx.moveTo(inner[0][0], inner[0][1])
      inner.forEach(([x,y]) => ctx.lineTo(x, y)); ctx.closePath(); ctx.stroke()
    }

    const drawDiamond = (cx: number, cy: number, scale: number, s: Shape) => {
      const sz = s.size * scale
      const cos = Math.cos(s.rz + s.rx * 0.5)
      const sin = Math.sin(s.rz + s.rx * 0.5)
      const pts: [number,number][] = [
        [0, -sz], [sz * 0.6, 0], [0, sz], [-sz * 0.6, 0]
      ].map(([x, y]) => [cx + x * cos - y * sin, cy + x * sin + y * cos])
      ctx.beginPath()
      ctx.moveTo(pts[0][0], pts[0][1])
      pts.forEach(([x, y]) => ctx.lineTo(x, y))
      ctx.closePath()
      ctx.strokeStyle = `${s.color}${s.opacity})`
      ctx.lineWidth = 1
      ctx.stroke()
      pts.forEach(([px, py]) => { ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.stroke() })
    }

    const fov = 600
    let frame = 0

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      frame++
      const cx = w / 2, cy = h / 2

      // Rotating wireframe globe lines
      const globeR = Math.min(w, h) * 0.28
      const rings = 8, segs = 32
      ctx.strokeStyle = 'rgba(34,211,238,0.06)'
      ctx.lineWidth = 0.8
      const globeRot = frame * 0.003
      for (let r = 0; r < rings; r++) {
        const lat = Math.PI * r / (rings - 1) - Math.PI / 2
        ctx.beginPath()
        for (let s = 0; s <= segs; s++) {
          const lng = (2 * Math.PI * s) / segs + globeRot
          const gx = cx + globeR * Math.cos(lat) * Math.cos(lng)
          const gy = cy + globeR * Math.sin(lat)
          s === 0 ? ctx.moveTo(gx, gy) : ctx.lineTo(gx, gy)
        }
        ctx.stroke()
      }
      for (let s = 0; s < segs; s += 4) {
        const lng = (2 * Math.PI * s) / segs + globeRot
        ctx.beginPath()
        for (let r = 0; r <= rings; r++) {
          const lat = Math.PI * r / (rings - 1) - Math.PI / 2
          const gx = cx + globeR * Math.cos(lat) * Math.cos(lng)
          const gy = cy + globeR * Math.sin(lat)
          r === 0 ? ctx.moveTo(gx, gy) : ctx.lineTo(gx, gy)
        }
        ctx.stroke()
      }

      // Floating shapes
      for (const s of shapes) {
        s.rx += s.vrx; s.ry += s.vry; s.rz += s.vrz
        s.x += s.vx; s.y += s.vy; s.z += s.vz
        if (s.x < -400) s.vx = Math.abs(s.vx)
        if (s.x > 400) s.vx = -Math.abs(s.vx)
        if (s.y < -300) s.vy = Math.abs(s.vy)
        if (s.y > 300) s.vy = -Math.abs(s.vy)
        if (s.z < -200) s.vz = Math.abs(s.vz)
        if (s.z > 200) s.vz = -Math.abs(s.vz)
        const { px, py, scale } = projectPoint(s.x, s.y, s.z, fov, cx, cy)
        if (px < -100 || px > w + 100 || py < -100 || py > h + 100) continue
        if (s.type === 'cube') drawCube(px, py, scale, s)
        else if (s.type === 'triangle') drawTriangle(px, py, scale, s)
        else drawDiamond(px, py, scale, s)
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    initShapes()
    draw()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-50" />
}
