"use client"

import { Countdown } from "@/components/countdown"

export function CountdownSection() {
  // Wedding date: July 5th, 2026
  const weddingDate = new Date("2026-07-05T07:25:00")

  return (
    <section className="py-24 md:py-32 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/10" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-primary/80 text-sm uppercase tracking-[0.3em] mb-4">
          The Countdown Begins
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-12" style={{ fontFamily: "var(--font-script), cursive" }}>
          Until We Say <span className="text-primary">{'"'}I Do{'"'}</span>
        </h2>

        <Countdown targetDate={weddingDate} />

        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
      </div>
    </section>
  )
}
