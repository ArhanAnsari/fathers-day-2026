'use client'

import { useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

interface CustomVideoPlayerProps {
  src: string
  poster?: string
  aspectRatio?: "video" | "shorts"
}

export default function CustomVideoPlayer({ src, poster, aspectRatio = "video" }: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play().catch(err => console.log("Video play interrupted:", err))
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-surface border border-border group ${
      aspectRatio === "shorts" ? "aspect-9/16 max-w-85 mx-auto" : "aspect-video"
    }`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="h-full w-full object-cover opacity-90 transition-opacity duration-700 group-hover:opacity-100"
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
        <button
          onClick={togglePlay}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105 active:scale-95"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause className="h-5 w-5 fill-black" /> : <Play className="h-5 w-5 fill-black ml-0.5" />}
        </button>
        <button
          onClick={toggleMute}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-glass border border-border text-white backdrop-blur-md transition-transform hover:scale-105"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
      </div>
    </div>
  )
}