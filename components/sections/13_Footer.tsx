'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="w-full h-screen bg-black flex flex-col items-center justify-center border-t border-white/5 relative select-none">
      <div className="text-center">
        <motion.h4
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-2xl md:text-4xl font-light tracking-wider text-white"
        >
          Happy Father's Day <span className="font-serif italic text-accent">❤️</span>
        </motion.h4>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="mt-4 text-xs font-mono text-mutedText tracking-widest uppercase"
        >
          Made With Absolute Love By Arhan
        </motion.p>
      </div>
      
      <div className="absolute bottom-8 text-[10px] font-mono text-white/10 tracking-widest uppercase">
        © 2026 CODEWITHARHAN. PRODUCTION MATRIX DEPLOYED.
      </div>
    </footer>
  )
}