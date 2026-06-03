"use client"

import { Gallery } from "@/components/gallery"

const GALLERY_IMAGES = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%203.25.42%20PM-fsnSS2jvwrLgnzE4nFWwcp8dhEkcN9.jpeg",
    alt: "Lavanya and Chiranth in nature"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%202.04.11%20PM-SnzhZjxIVSkdd2xXc8DNgFOC6bVmUv.jpeg",
    alt: "Romantic embrace"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%202.04.10%20PM%20%281%29-8esuqJx5cj4vJ6thlB44or4ZGUoZgs.jpeg",
    alt: "Temple photoshoot"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%203.28.21%20PM-EqkDw4c6Q1fse94lXIDDfBvO8oq40h.jpeg",
    alt: "Intimate moment"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%202.04.10%20PM-1bkNdehroTvjz7kEh1kBeor65r7und.jpeg",
    alt: "Engagement ceremony"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%202.04.15%20PM-SKbbhPTp0RTGduw3ZgO4dFRbY4BiRk.jpeg",
    alt: "Temple conversation"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%202.04.12%20PM-4VF3dVsddBooD5xbP3L67IOPRR4HV2.jpeg",
    alt: "Ring exchange"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%202.06.02%20PM-m7UGOJzdgTp3wQyzS2HIFKug1cq8T9.jpeg",
    alt: "Couple sitting together"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%203.28.21%20PM%20%281%29-DLqtIyBKiixqcueV7HVuZcPzaQ3OON.jpeg",
    alt: "Holding hands"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%202.04.10%20PM%20%282%29-XwqaL5rCBcnkDG5KSCeUGGTmRvulAz.jpeg",
    alt: "Wedding rings on henna hand"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%202.04.14%20PM-R5BijKk6M3StlvJGA88D90nsFyUPM2.jpeg",
    alt: "Couple embracing at temple"
  }
]

export function GallerySection() {
  return (
    <section className="py-24 md:py-32 px-4 bg-secondary/10 relative overflow-hidden">
      {/* Decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary/80 text-sm uppercase tracking-[0.3em] mb-4">
            Our Journey Together
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4" style={{ fontFamily: "var(--font-script), cursive" }}>
            Captured <span className="text-primary">Moments</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our love story through cherished memories from our engagement and pre-wedding celebrations.
          </p>
        </div>

        <Gallery images={GALLERY_IMAGES} />
      </div>
    </section>
  )
}
