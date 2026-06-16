'use client'

import { motion } from 'framer-motion'

export default function Appreciation() {
  const items = [
    "Thank You For Believing In Me.",
    "Thank You For Supporting Me.",
    "Thank You For Guiding Me.",
    "Thank You For Being My Father."
  ]

  return (
    <section className="w-full py-32 bg-surface px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <p className="text-xs uppercase tracking-widest text-accent text-center mb-6 font-medium">Constant Axioms</p>
        {items.map((text, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
            className="w-full p-8 rounded-2xl bg-glass border border-border backdrop-blur-md flex items-center shadow-luxury"
          >
            <span className="font-mono text-xs text-accent mr-6">0{idx + 1}</span>
            <p className="text-lg md:text-xl font-light text-white tracking-tight">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}