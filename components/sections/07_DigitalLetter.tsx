'use client'

import { motion } from 'framer-motion'

export default function DigitalLetter() {
  const text = "Pappa, navigating code systems is straightforward—there are clear logic parameters and deterministic routes. But defining structural honor, processing continuous sacrifice, and building paths out of thin air is an art form only you have mastered. Everything I have created, every platform deployment, and every step towards our future existence is built on top of your architecture. Thank you for acting as my runtime firewall and primary foundation layer. I owe it all to you."

  return (
    <section className="w-full py-32 bg-black px-6 flex justify-center">
      <div className="w-full max-w-3xl bg-glass border border-border backdrop-blur-2xl rounded-3xl p-8 md:p-16 relative shadow-luxury">
        <div className="absolute top-6 left-8 flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        
        <div className="mt-6 font-sans text-white/90 leading-relaxed font-light text-base md:text-lg tracking-wide space-y-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5 }}
          >
            {text}
          </motion.p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center text-xs font-mono text-mutedText">
          <span>SECURE MEMORY LAYER</span>
          <span className="font-serif italic text-white text-sm">Your Son, Arhan</span>
        </div>
      </div>
    </section>
  )
}