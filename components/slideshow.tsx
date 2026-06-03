"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SlideshowProps {
  images: { src: string; alt: string }[]
  autoPlayInterval?: number
}

export function Slideshow({ images, autoPlayInterval = 5000 }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    setIsLoaded(true)
    const timer = setInterval(nextSlide, autoPlayInterval)
    return () => clearInterval(timer)
  }, [nextSlide, autoPlayInterval])

  if (!isLoaded) {
    return (
      <div className="relative w-full h-screen bg-secondary/20 animate-pulse" />
    )
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-background/30 backdrop-blur-sm border border-primary/30 text-primary hover:bg-primary/20 transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-background/30 backdrop-blur-sm border border-primary/30 text-primary hover:bg-primary/20 transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "w-8 bg-primary" 
                : "bg-primary/40 hover:bg-primary/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4">
          <p className="text-primary/80 text-sm md:text-base uppercase tracking-[0.3em] mb-4 fade-in-up">
            Save the Date
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-2" style={{ fontFamily: "var(--font-script), cursive" }}>
            Lavanya <span className="text-primary">&</span> Chiranth
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4">
            5th July 2026
          </p>
        </div>
      </div>
    </div>
  )
}
