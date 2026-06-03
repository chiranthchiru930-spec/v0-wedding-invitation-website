import { HeroSection } from "@/components/sections/hero-section"
import { SlideshowSection } from "@/components/sections/slideshow-section"
import { CountdownSection } from "@/components/sections/countdown-section"
import { EventsSection } from "@/components/sections/events-section"
import { VenueSection } from "@/components/sections/venue-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { FooterSection } from "@/components/sections/footer-section"
import { FloatingFlowers } from "@/components/floating-flowers"
import { MusicPlayer } from "@/components/music-player"
import { WhatsAppShare } from "@/components/whatsapp-share"

export default function WeddingInvitation() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <FloatingFlowers />
      <MusicPlayer />
      <WhatsAppShare />
      
      <HeroSection />
      <SlideshowSection />
      <CountdownSection />
      <EventsSection />
      <VenueSection />
      <GallerySection />
      <FooterSection />
    </main>
  )
}
