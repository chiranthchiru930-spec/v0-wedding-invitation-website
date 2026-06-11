"use client"

import { Heart } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="py-16 md:py-24 px-4 relative">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Thank you message */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6" style={{ fontFamily: "var(--font-script), cursive" }}>
            Thank You
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            We are truly honored that you will be joining us on our special day. 
            Your presence will make our celebration complete.
          </p>
        </div>

        {/* Divider with heart */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/50" />
          <Heart className="w-6 h-6 text-primary fill-primary" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        {/* Couple names */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-foreground" style={{ fontFamily: "var(--font-script), cursive" }}>
            With love,
          </p>
          <p className="text-2xl md:text-3xl text-primary mt-2" style={{ fontFamily: "var(--font-script), cursive" }}>
            Lavanya & Chiranth
          </p>
        </div>

        {/* Wedding hashtag */}
        <div className="inline-block px-6 py-3 border border-primary/30 bg-secondary/20 backdrop-blur-sm rounded-full">
          <span className="text-primary font-medium tracking-wide">#LavanyaWedsChiranth</span>
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground/60 text-sm mt-12">
          © 2026 | Made with ❤️ for our special day
        </p>
      </div>
    </footer>
  )
}
