'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Storytelling() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Ensure ScrollTrigger is registered inside the client effect context
    gsap.registerPlugin(ScrollTrigger)
    
    const panels = gsap.utils.toArray('.story-panel') as HTMLElement[]
    if (panels.length === 0) return

    const ctx = gsap.context(() => {
      // Create the master pinning timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          // Gives breathing room for each distinct phrase to sit pinned
          end: `+=${panels.length * 150}%`, 
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      })

      // Set initial states: Hide all layers except the first structural one
      panels.forEach((panel, idx) => {
        if (idx !== 0) {
          gsap.set(panel, { opacity: 0, yPercent: 15 })
        }
      })

      // Sequence the animations cleanly over the scroll duration
      panels.forEach((panel, idx) => {
        // Exit animation for current panel (unless it's the final climax statement)
        if (idx < panels.length - 1) {
          tl.to(panel, {
            opacity: 0,
            yPercent: -15,
            duration: 1,
            ease: "power2.inOut"
          }, `+=1`) // Holds the phrase on screen before initiating exit
          
          // Entrance animation for the incoming downstream panel
          tl.to(panels[idx + 1], {
            opacity: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2.inOut"
          }, "<") // Starts precisely as the previous card begins fading out
        }
      })
      
      // Add a small spacer buffer at the end of the timeline for visual balance
      tl.to({}, { duration: 1 })
      
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const steps = [
    "Before the websites.",
    "Before the projects.",
    "Before the YouTube channel.",
    "There was my father."
  ]

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden bg-black w-full mix-blend-screen">
      <div className="absolute inset-0 w-full h-full">
        {steps.map((text, idx) => (
          <div
            key={idx}
            className="story-panel absolute inset-0 w-full h-full flex items-center justify-center bg-black px-6 will-change-transform"
            style={{ zIndex: steps.length + idx }}
          >
            <h2 className="text-3xl md:text-6xl font-light tracking-tight text-white max-w-4xl text-center leading-tight selection:bg-accent/30">
              {idx === steps.length - 1 ? (
                <span className="font-serif italic text-accent font-normal drop-shadow-[0_0_30px_rgba(135,206,235,0.2)]">
                  {text}
                </span>
              ) : (
                text
              )}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}