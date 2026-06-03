"use client"

import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SlideshowProps {
  images: { src: string; alt: string }[]
}

export function Slideshow({ images }: SlideshowProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 0.85 // Scrolls by 85vw
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative w-full h-screen bg-[#f7f5f0] overflow-hidden flex flex-col justify-center">
      
      {/* Background Title (Fixed) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-0 opacity-10 pointer-events-none">
        <h2
          className="text-7xl md:text-9xl font-light text-primary"
          style={{ fontFamily: "var(--font-script), cursive" }}
        >
          L & C
        </h2>
      </div>

      {/* SCRL Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="relative z-10 flex w-full h-[75vh] md:h-[80vh] overflow-x-auto snap-x snap-mandatory items-center px-4 md:px-20 gap-4 md:gap-8 pb-8 no-scrollbar"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
        }}
      >
        <style dangerouslySetInnerHTML={{ __html: `::-webkit-scrollbar { display: none; }` }} />

        {images.map((image, index) => (
          <div
            key={image.src}
            // w-[85vw] is the magic trick. It makes the image take up 85% of the screen, leaving 15% to show the next image.
            className="relative w-[85vw] md:w-[45vw] h-full shrink-0 snap-center rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index <= 1}
            />
          </div>
        ))}
      </div>

      {/* Foreground Content */}
      <div className="absolute bottom-8 left-0 right-0 text-center z-20 pointer-events-none px-4">
        <p className="text-primary/80 text-sm md:text-base uppercase tracking-[0.3em] mb-2">
          Save the Date
        </p>
        <h2
          className="text-4xl md:text-5xl font-light text-foreground mb-1"
          style={{ fontFamily: "var(--font-script), cursive" }}
        >
          Lavanya <span className="text-primary">&</span> Chiranth
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground">
          5th July 2026
        </p>
      </div>

      {/* Navigation Buttons (Hidden on mobile since they will naturally swipe) */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/50 backdrop-blur-md hover:bg-white/80 text-black p-3 rounded-full transition hidden md:block"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/50 backdrop-blur-md hover:bg-white/80 text-black p-3 rounded-full transition hidden md:block"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

    </div>
  )
}
