'use client'

import CustomVideoPlayer from '../core/CustomVideoPlayer'

export default function VideoMessage() {
  return (
    <section className="w-full py-32 bg-surface px-6 flex justify-center">
      <div className="w-full max-w-5xl">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-accent-secondary font-medium mb-2">Direct Message</p>
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">Something I Wanted To Say.</h2>
        </div>
        <CustomVideoPlayer 
          src="personal_message.mp4" 
          poster="message_thumb.jpg" 
          aspectRatio="short"
        />
      </div>
    </section>
  )
}
