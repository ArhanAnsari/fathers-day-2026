'use client'

import dynamic from 'next/dynamic'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const CanvasContainer = dynamic(() => import('../core/CanvasContainer'), { ssr: false })

function ParticleSystem() {
  const pointsRef = useRef<THREE.Points>(null)
  const count = 1800
  
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 12
  }

  useFrame((state) => {
    if (!pointsRef.current) return
    const time = state.clock.getElapsedTime()
    pointsRef.current.rotation.y = time * 0.03
    pointsRef.current.rotation.x = Math.sin(time * 0.02) * 0.1
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#87CEEB"
        transparent
        opacity={0.5}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  )
}

export default function Legacy() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-black overflow-hidden px-6">
      <CanvasContainer>
        <ambientLight intensity={0.4} />
        <ParticleSystem />
      </CanvasContainer>

      <div className="text-center z-10 max-w-4xl select-none">
        <h2 className="text-2xl md:text-4xl font-light text-white tracking-wide leading-relaxed">
          The Greatest Inheritance Is Not Money. <br />
          <span className="font-serif italic font-normal text-accent-secondary">It Is Values.</span> <br />
          And You've Given Me Plenty.
        </h2>
      </div>
    </section>
  )
}