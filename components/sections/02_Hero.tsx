'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacityText = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let stars: { x: number; y: number; r: number; d: number }[] = []
    const numStars = 95

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      stars = Array.from({ length: numStars }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.4,
        d: Math.random() * numStars
      }))
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.75)'
      stars.forEach((s) => {
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
      })
      animationFrameId = requestAnimationFrame(render)
    }
    render()

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const moveX = (clientX - window.innerWidth / 2) * 0.04
      const moveY = (clientY - window.innerHeight / 2) * 0.04
      gsap.to(canvas, { x: moveX, y: moveY, duration: 1.5, ease: "power2.out" })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none w-full h-full" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black" />
      
      <motion.div style={{ y: yText, opacity: opacityText }} className="text-center z-10 px-4 select-none max-w-5xl">
        <motion.h1 
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-5xl md:text-8xl tracking-tight font-light text-white font-sans"
        >
          Happy Father's Day <span className="font-serif italic font-normal text-accent-secondary">Pappa</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="mt-6 text-base md:text-lg text-mutedText tracking-widest uppercase font-light max-w-2xl mx-auto"
        >
          Every achievement of mine begins with you.
        </motion.p>
      </motion.div>

      <div className="absolute bottom-10 inset-x-0 flex justify-center pointer-events-none">
        <div className="w-5 h-9 rounded-full border border-white/20 flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-accent"
          />
        </div>
      </div>
    </section>
  )
}