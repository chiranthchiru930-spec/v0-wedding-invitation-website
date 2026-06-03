"use client"

import { useEffect, useState } from "react"

const FLOWER_COLORS = [
  "🌸", "🌺", "🌷", "💐", "🌹", "🪷", "🌼"
]

interface Flower {
  id: number
  emoji: string
  left: number
  animationDuration: number
  swayDuration: number
  delay: number
  size: number
}

export function FloatingFlowers() {
  const [flowers, setFlowers] = useState<Flower[]>([])

  useEffect(() => {
    const newFlowers: Flower[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      emoji: FLOWER_COLORS[Math.floor(Math.random() * FLOWER_COLORS.length)],
      left: Math.random() * 100,
      animationDuration: 15 + Math.random() * 20,
      swayDuration: 3 + Math.random() * 4,
      delay: Math.random() * 20,
      size: 16 + Math.random() * 16
    }))
    setFlowers(newFlowers)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="flower absolute"
          style={{
            left: `${flower.left}%`,
            top: "-50px",
            fontSize: `${flower.size}px`,
            animationDuration: `${flower.animationDuration}s, ${flower.swayDuration}s`,
            animationDelay: `${flower.delay}s, ${flower.delay}s`
          }}
        >
          {flower.emoji}
        </div>
      ))}
    </div>
  )
}
