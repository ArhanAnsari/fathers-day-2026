'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface CardProps {
  title: string
  desc: string
  tag: string
}

export default function Journey() {
  const scrollSectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const cards: CardProps[] = [
    { tag: "01 / FOUNDATION", title: "The Dreamer", desc: "Long before writing production structures, you taught me to envision architectures beyond normal restrictions. Your belief handed me the canvas." },
    { tag: "02 / STRUCTURE", title: "The Builder", desc: "Observing your resilience amidst unexpected friction engineered my understanding of persistence. You showed me how to lay true foundations." },
    { tag: "03 / KNOWLEDGE", title: "The Learner", desc: "Every breakdown became structural insight because you never judged failure. Your patience created the environment where my core curiosity flourished." },
    { tag: "04 / FREEDOM", title: "The Creator", desc: "Today, I design tools and launch platforms, but you authored the developer behind the layout. Everything I create reflects your guidance." }
  ]

  useEffect(() => {
    const track = trackRef.current
    const section = scrollSectionRef.current
    if (!track || !section) return

    const ctx = gsap.context(() => {
      const scrollWidth = track.scrollWidth - window.innerWidth
      gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
          invalidateOnRefresh: true,
        }
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={scrollSectionRef} className="relative h-screen bg-surface overflow-hidden w-full">
      <div className="absolute top-20 left-12 md:left-24 z-10">
        <p className="text-xs uppercase tracking-widest text-accent font-medium">Core Progression</p>
        <h3 className="text-3xl font-light text-white mt-1">Chapters of Evolution</h3>
      </div>
      
      <div ref={trackRef} className="absolute inset-y-0 left-0 flex items-center pl-12 md:pl-24 pr-[20vw] gap-8 select-none">
        {cards.map((c, i) => (
          <div 
            key={i} 
            className="w-[85vw] sm:w-[50vw] md:w-[35vw] h-[55vh] shrink-0 bg-glass border border-border backdrop-blur-xl rounded-3xl p-8 md:p-12 flex flex-col justify-between shadow-luxury"
          >
            <span className="text-xs font-mono tracking-wider text-mutedText">{c.tag}</span>
            <div>
              <h4 className="text-2xl md:text-3xl font-light text-white tracking-tight">{c.title}</h4>
              <p className="text-mutedText mt-4 font-light leading-relaxed text-sm md:text-base">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}