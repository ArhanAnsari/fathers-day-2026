'use client'

import CustomVideoPlayer from '../core/CustomVideoPlayer'

export default function YouTubeShort() {
  return (
    <section className="w-full py-32 bg-surface px-6 flex flex-col items-center">
      <div className="max-w-3xl text-center mb-16">
        <p className="text-xs uppercase tracking-widest text-accent font-medium mb-3">Captured Frame</p>
        <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">One Memory. A Thousand Emotions.</h2>
      </div>
      <div className="w-full flex justify-center">
        <CustomVideoPlayer 
          src="https://youtube.com/shorts/h7mjeVzs-7E?si=8NojtqBJOVv4d5m6" 
          poster="/assets/short_thumb.jpg" 
          aspectRatio="shorts"
        />
      </div>
    </section>
  )
}