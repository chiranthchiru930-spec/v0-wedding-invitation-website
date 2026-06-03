"use client"

import { Slideshow } from "@/components/slideshow"

const ENGAGEMENT_PHOTOS = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%203.25.42%20PM-fsnSS2jvwrLgnzE4nFWwcp8dhEkcN9.jpeg",
    alt: "Lavanya and Chiranth in nature - outdoor engagement photo"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%202.04.11%20PM-SnzhZjxIVSkdd2xXc8DNgFOC6bVmUv.jpeg",
    alt: "Lavanya and Chiranth embracing - romantic moment"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%202.04.10%20PM%20%281%29-8esuqJx5cj4vJ6thlB44or4ZGUoZgs.jpeg",
    alt: "Couple at temple with carved pillars"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%203.28.21%20PM-EqkDw4c6Q1fse94lXIDDfBvO8oq40h.jpeg",
    alt: "Intimate close-up of the couple"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%202.04.10%20PM-1bkNdehroTvjz7kEh1kBeor65r7und.jpeg",
    alt: "Engagement ceremony - exchanging garlands"
  },
]

export function SlideshowSection() {
  return (
    <section id="slideshow" className="relative">
      <Slideshow images={ENGAGEMENT_PHOTOS} autoPlayInterval={4000} />
    </section>
  )
}
