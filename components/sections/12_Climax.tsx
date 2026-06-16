'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Climax() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const lines = gsap.utils.toArray('.climax-line')
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 0.7,
        }
      })

      lines.forEach((line: any, index) => {
        tl.fromTo(line, 
          { opacity: 0, y: 40, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power2.out" },
          index * 1.5
        )
        if (index < lines.length - 1) {
          tl.to(line, { opacity: 0.15, filter: "blur(4px)", duration: 0.8, ease: "power2.in" }, `+=${0.5}`)
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const phrases = [
    "I May Build Apps.",
    "I May Build Websites.",
    "I May Build A Future.",
    "But You Built Me."
  ]

  return (
    <div ref={sectionRef} className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center px-6">
      <div className="flex flex-col items-center justify-center w-full max-w-5xl text-center relative h-full">
        {phrases.map((phrase, idx) => (
          <h2
            key={idx}
            className="climax-line absolute text-4xl md:text-7xl font-light tracking-tight text-white w-full px-4"
          >
            {idx === phrases.length - 1 ? (
              <span className="font-serif italic font-normal text-accent">{phrase}</span>
            ) : phrase}
          </h2>
        ))}
      </div>
    </div>
  )
}