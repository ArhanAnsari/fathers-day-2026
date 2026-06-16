'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

interface CanvasContainerProps {
  children: React.ReactNode
}

export default function CanvasContainer({ children }: CanvasContainerProps) {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full pointer-events-none">
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 60 }}
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  )
}