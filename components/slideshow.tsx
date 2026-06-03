"use client"



import { useState, useEffect, useCallback, useRef } from "react"

import Image from "next/image"

import { ChevronLeft, ChevronRight } from "lucide-react"



interface SlideshowProps {

  images: { src: string; alt: string }[]

  autoPlayInterval?: number

}



export function Slideshow({

  images,

  autoPlayInterval = 5000,

}: SlideshowProps) {

  const [currentIndex, setCurrentIndex] = useState(0)

  const [isLoaded, setIsLoaded] = useState(false)



  const touchStartX = useRef<number | null>(null)

  const touchEndX = useRef<number | null>(null)



  const nextSlide = useCallback(() => {

    setCurrentIndex((prev) => (prev + 1) % images.length)

  }, [images.length])



  const prevSlide = useCallback(() => {

    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)

  }, [images.length])



  const handleTouchStart = (e: React.TouchEvent) => {

    touchStartX.current = e.targetTouches[0].clientX

  }



  const handleTouchMove = (e: React.TouchEvent) => {

    touchEndX.current = e.targetTouches[0].clientX

  }



  const handleTouchEnd = () => {

    if (touchStartX.current === null || touchEndX.current === null) return



    const distance = touchStartX.current - touchEndX.current



    if (distance > 50) nextSlide()

    if (distance < -50) prevSlide()



    touchStartX.current = null

    touchEndX.current = null

  }



  useEffect(() => {

    setIsLoaded(true)



    const timer = setInterval(() => {

      nextSlide()

    }, autoPlayInterval)



    return () => clearInterval(timer)

  }, [nextSlide, autoPlayInterval])



  if (!isLoaded) {

    return (

      <div className="relative w-full h-screen bg-secondary/20 animate-pulse" />

    )

  }



  return (

    <div

      className="relative w-full h-screen overflow-hidden"

      onTouchStart={handleTouchStart}

      onTouchMove={handleTouchMove}

      onTouchEnd={handleTouchEnd}

    >

      {/* Images */}

      {images.map((image, index) => (

        <div

          key={image.src}

          className={`absolute inset-0 transition-all duration-2000 ease-in-out ${

            index === currentIndex

              ? "opacity-150 scale-[1.50]"

              : "opacity-0 scale-105"

          }`}

        >

          <Image

            src={image.src}

            alt={image.alt}

            fill

            className="object-contain"

            priority={index === 0}

          />



          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />

        </div>

      ))}



      {/* Content */}

      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">

        <div className="text-center px-4">

          <p className="text-primary/80 text-sm md:text-base uppercase tracking-[0.3em] mb-4">

            Save the Date

          </p>



          <h2

            className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-2"

            style={{ fontFamily: "var(--font-script), cursive" }}

          >

            Lavanya <span className="text-primary">&</span> Chiranth

          </h2>



          <p className="text-lg md:text-xl text-muted-foreground mt-4">

            5th July 2026

          </p>

        </div>

      </div>



      {/* Previous Button */}

      <button

        onClick={prevSlide}

        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"

      >

        <ChevronLeft className="w-6 h-6" />

      </button>



      {/* Next Button */}

      <button

        onClick={nextSlide}

        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"

      >

        <ChevronRight className="w-6 h-6" />

      </button>



      {/* Dots */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2">

        {images.map((_, index) => (

          <button

            key={index}

            onClick={() => setCurrentIndex(index)}

            className={`w-3 h-3 rounded-full transition ${

              index === currentIndex

                ? "bg-yellow-400"

                : "bg-white/50"

            }`}

          />

        ))}

      </div>

    </div>

  )

}
