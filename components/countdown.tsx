"use client"

import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function Countdown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!mounted) {
    return null
  }

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds }
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {timeUnits.map((unit) => (
        <div 
          key={unit.label} 
          className="flex flex-col items-center"
        >
          <div className="relative">
            <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center border-2 border-primary/50 bg-secondary/30 backdrop-blur-sm rounded-lg pulse-glow">
              <span className="text-3xl md:text-5xl font-light text-primary">
                {unit.value.toString().padStart(2, "0")}
              </span>
            </div>
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-primary" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-primary" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-primary" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-primary" />
          </div>
          <span className="mt-3 text-sm md:text-base uppercase tracking-[0.2em] text-muted-foreground">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  )
}
