'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

export default function Surprise() {
  const [revealed, setRevealed] = useState(false)

  const triggerSurprise = () => {
    setRevealed(true)
    const duration = 3 * 1000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#87CEEB', '#A7D8F5', '#FFFFFF']
      })
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#87CEEB', '#A7D8F5', '#FFFFFF']
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    frame()
  }

  return (
    <section className="w-full py-32 bg-black px-6 flex flex-col items-center justify-center min-h-[60vh]">
      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.button
            key="button"
            onClick={triggerSurprise}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-full bg-white text-black font-medium tracking-wide text-sm shadow-luxury transition-colors duration-300 hover:bg-accent hover:text-black flex items-center gap-2"
          >
            Pappa, Click Here <span className="text-sm">❤️</span>
          </motion.button>
        ) : (
          <motion.div
            key="award"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md p-12 rounded-3xl bg-glass border border-accent/20 backdrop-blur-2xl text-center shadow-luxury flex flex-col items-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-b from-accent/5 to-transparent pointer-events-none" />
            <div className="w-16 h-16 rounded-full border border-accent/30 flex items-center justify-center mb-6">
              <span className="text-xl font-serif text-accent">★</span>
            </div>
            <p className="text-xs tracking-widest font-mono text-accent uppercase font-medium">Supreme Distinction</p>
            <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight mt-2">World's Best Dad Award</h3>
            <div className="w-12 h-px bg-white/10 my-6" />
            <p className="text-xs tracking-widest uppercase text-mutedText">Presented To:</p>
            <p className="text-xl font-serif italic font-normal text-white mt-1">My Father</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}