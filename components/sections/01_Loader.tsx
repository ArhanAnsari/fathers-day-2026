'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const steps = ["Loading Memories...", "Preparing Something Special...", "For The Greatest Father..."]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < steps.length) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1)
      }, 1100)
      return () => clearTimeout(timeout)
    } else {
      onComplete()
    }
  }, [index, onComplete, steps.length])

  return (
    <AnimatePresence>
      {index < steps.length && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black px-6 select-none"
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
        >
          <div className="relative h-8 overflow-hidden text-center">
            <motion.p
              key={index}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl font-light tracking-wide text-white"
            >
              {steps[index]}
            </motion.p>
          </div>
          <div className="mt-8 h-px w-16 bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 3.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}