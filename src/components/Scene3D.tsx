import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function FloatingShape({ position, geometry, color, speed = 1, scale = 1 }: { position: [number, number, number]; geometry: 'box' | 'sphere' | 'octahedron' | 'torus' | 'icosahedron'; color: string; speed?: number; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  const geo = useMemo(() => {
    switch (geometry) {
      case 'box': return new THREE.BoxGeometry(1, 1, 1)
      case 'sphere': return new THREE.SphereGeometry(0.7, 16, 16)
      case 'octahedron': return new THREE.OctahedronGeometry(0.8)
      case 'torus': return new THREE.TorusGeometry(0.6, 0.2, 12, 32)
      case 'icosahedron': return new THREE.IcosahedronGeometry(0.8)
    }
  }, [geometry])

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 * speed
  })

  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale} geometry={geo}>
        <meshBasicMaterial color={color} wireframe transparent opacity={0.3} />
      </mesh>
    </Float>
  )
}

function WireframeGlobe() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
  })

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[2, 24, 24]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.15} />
      </mesh>
      <mesh>
        <sphereGeometry args={[2, 24, 24]} />
        <meshBasicMaterial color="#1a1a2e" transparent opacity={0.05} />
      </mesh>
    </group>
  )
}

export default function Scene3D() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#60a5fa" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />

        <WireframeGlobe />

        <FloatingShape position={[-4, 2, -2]} geometry="icosahedron" color="#60a5fa" speed={0.8} scale={0.8} />
        <FloatingShape position={[4, -1.5, -1]} geometry="octahedron" color="#a855f7" speed={1} scale={0.7} />
        <FloatingShape position={[3.5, 2.5, -3]} geometry="box" color="#22d3ee" speed={0.6} scale={0.5} />
        <FloatingShape position={[-3.5, -2, -2]} geometry="torus" color="#3b82f6" speed={1.2} scale={0.6} />
        <FloatingShape position={[0, 3.5, -4]} geometry="sphere" color="#c084fc" speed={0.7} scale={0.5} />
      </Canvas>
    </div>
  )
}
