'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface StatItem {
  target: number
  suffix: string
  label: string
}

export default function Numbers() {
  const rootRef = useRef<HTMLDivElement>(null)
  const stats: StatItem[] = [
    { target: 17, suffix: " Years", label: "Of True Guidance" },
    { target: 999, suffix: "K+", label: "Infinite System Support" },
    { target: 100, suffix: "%", label: "Unyielding Belief Matrix" },
    { target: 1, suffix: " Only", label: "The Greatest Ultimate Father" }
  ]

  useEffect(() => {
    const elements = gsap.utils.toArray('.stat-count')
    const ctx = gsap.context(() => {
      elements.forEach((el: any) => {
        const targetVal = parseInt(el.getAttribute('data-target') || '0', 10)
        gsap.fromTo(el, 
          { textContent: '0' },
          {
            textContent: targetVal,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none"
            },
            snap: { textContent: 1 }
          }
        )
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="w-full py-32 bg-black px-6 md:px-24 border-y border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {stats.map((s, idx) => (
          <div key={idx} className="flex flex-col border-l border-white/10 pl-6 py-2">
            <div className="text-4xl md:text-6xl font-light text-white tracking-tight">
              <span className="stat-count" data-target={s.target}>0</span>
              <span className="text-accent font-serif italic">{s.suffix}</span>
            </div>
            <p className="text-xs tracking-widest uppercase text-mutedText mt-3 font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}