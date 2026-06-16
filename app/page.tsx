'use client'

import { useState } from 'react'
import SmoothScroll from '@/components/core/SmoothScroll'
import Loader from '@/components/sections/01_Loader'
import Hero from '@/components/sections/02_Hero'
import Storytelling from '@/components/sections/03_Storytelling'
import Journey from '@/components/sections/04_Journey'
import Numbers from '@/components/sections/05_Numbers'
import YouTubeShort from '@/components/sections/06_YouTubeShort'
import DigitalLetter from '@/components/sections/07_DigitalLetter'
import VideoMessage from '@/components/sections/08_VideoMessage'
import Legacy from '@/components/sections/09_Legacy'
import Appreciation from '@/components/sections/10_Appreciation'
import Surprise from '@/components/sections/11_Surprise'
import Climax from '@/components/sections/12_Climax'
import Footer from '@/components/sections/13_Footer'

export default function Page() {
  const [loadingComplete, setLoadingComplete] = useState(false)

  return (
    <main className="relative bg-black text-white min-h-screen antialiased overflow-x-hidden selection:bg-accent selection:text-black">
      <Loader onComplete={() => setLoadingComplete(true)} />
      
      {loadingComplete && (
        <SmoothScroll>
          <Hero />
          <Storytelling />
          <Journey />
          <Numbers />
          <YouTubeShort />
          <DigitalLetter />
          <VideoMessage />
          <Legacy />
          <Appreciation />
          <Surprise />
          <Climax />
          <Footer />
        </SmoothScroll>
      )}
    </main>
  )
}