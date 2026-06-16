'use client'

import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins globally on the client side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  useEffect(() => {
    // Global configuration for GSAP animations
    gsap.config({
      nullTargetWarn: false, // Suppress warnings if elements haven't rendered yet
    })

    // Global ScrollTrigger defaults for premium, smooth transitions
    ScrollTrigger.defaults({
      markers: false, // Set to true only during active local debugging
      invalidateOnRefresh: true,
    })

    // Refresh ScrollTrigger on window resize to maintain layout boundaries
    const handleResize = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {children}
    </>
  )
}