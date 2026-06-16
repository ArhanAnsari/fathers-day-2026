'use client'

export default function YouTubeShort() {
  return (
    <section className="w-full py-32 bg-surface px-6 flex flex-col items-center">
      <div className="max-w-3xl text-center mb-16">
        <p className="text-xs uppercase tracking-widest text-accent font-medium mb-3">Captured Frame</p>
        <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">One Memory. A Thousand Emotions.</h2>
      </div>
      <div className="w-full flex justify-center">
        {/* Premium UI wrapper matching Apple product spec dimensions */}
        <div className="relative w-full max-w-85 aspect-9/16 overflow-hidden rounded-3xl bg-black border border-white/10 shadow-luxury group">
          <iframe
            src="https://www.youtube.com/embed/h7mjeVzs-7E?autoplay=0&loop=1&playlist=h7mjeVzs-7E&controls=1&modestbranding=1&rel=0"
            title="Tried this trend 🔥 #papaoutaiafrosoul #papaoutai"
            className="w-full h-full object-cover opacity-90 transition-opacity duration-700 group-hover:opacity-100"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}