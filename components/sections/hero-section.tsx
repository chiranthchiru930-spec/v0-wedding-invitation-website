"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
          <path
            fill="currentColor"
            d="M100,10 L120,80 L190,80 L135,125 L155,195 L100,150 L45,195 L65,125 L10,80 L80,80 Z"
            opacity="0.3"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 rotate-180">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
          <path
            fill="currentColor"
            d="M100,10 L120,80 L190,80 L135,125 L155,195 L100,150 L45,195 L65,125 L10,80 L80,80 Z"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-primary/40" />
      <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-primary/40" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-primary/40" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-primary/40" />

      {/* Content */}
      <div className={`text-center z-10 ${mounted ? "fade-in-up" : "opacity-0"}`}>
        <p className="text-primary/80 text-sm md:text-base uppercase tracking-[0.4em] mb-6">
          Together with their families
        </p>
        
        <div className="relative mb-8">
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground mb-4"
            style={{ fontFamily: "var(--font-script), cursive" }}
          >
            Lavanya
          </h1>
          <div className="flex items-center justify-center gap-4 my-4">
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary text-3xl md:text-4xl">&</span>
            <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-primary" />
          </div>
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground"
            style={{ fontFamily: "var(--font-script), cursive" }}
          >
            Chiranth
          </h1>
        </div>

        <p className="text-muted-foreground text-lg md:text-xl mb-2 uppercase tracking-[0.2em]">
          Request the pleasure of your company
        </p>
        <p className="text-muted-foreground text-base md:text-lg mb-8">
          at the celebration of their marriage
        </p>

        <div className="inline-flex flex-col items-center border border-primary/30 px-8 py-4 bg-secondary/20 backdrop-blur-sm">
          <span className="text-primary uppercase tracking-[0.3em] text-sm">Save the Date</span>
          <span className="text-3xl md:text-4xl font-light text-foreground mt-2">5th July 2026</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-muted-foreground text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 text-primary" />
      </div>
    </section>
  )
}
