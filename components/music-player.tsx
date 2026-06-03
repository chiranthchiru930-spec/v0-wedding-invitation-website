"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX, Music } from "lucide-react"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
      setHasInteracted(true)
    }
  }

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true)
          setHasInteracted(true)
        }).catch(() => {
          // Autoplay was prevented
        })
      }
    }

    window.addEventListener("click", handleFirstInteraction, { once: true })
    window.addEventListener("scroll", handleFirstInteraction, { once: true })
    window.addEventListener("touchstart", handleFirstInteraction, { once: true })

    return () => {
      window.removeEventListener("click", handleFirstInteraction)
      window.removeEventListener("scroll", handleFirstInteraction)
      window.removeEventListener("touchstart", handleFirstInteraction)
    }
  }, [hasInteracted])

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="metadata"
        src="/public/public/music/wedding-song.mp3"
      />
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-all duration-300 pulse-glow"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6" />
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
      </button>
      
      {!hasInteracted && (
        <div className="fixed bottom-24 right-6 z-50 bg-secondary/90 backdrop-blur-sm text-foreground px-4 py-2 rounded-lg text-sm flex items-center gap-2 animate-bounce">
          <Music className="w-4 h-4 text-primary" />
          <span>Click to play music</span>
        </div>
      )}
    </>
  )
}
