"use client"

import { MapPin, Navigation } from "lucide-react"

export function VenueSection() {
  const venueUrl = "https://maps.app.goo.gl/QvRVFUNvK3ZoJHfG8"
  
  return (
    <section className="py-24 md:py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary/80 text-sm uppercase tracking-[0.3em] mb-4">
            Find Your Way
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground" style={{ fontFamily: "var(--font-script), cursive" }}>
            Wedding <span className="text-primary">Venue</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Map embed */}
          <div className="relative aspect-video lg:aspect-square rounded-lg overflow-hidden border border-primary/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77943.70035760281!2d77.48687629243221!3d12.914452312997884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f5b1dfafdd7%3A0x762228ec5e17b11f!2sC%20R%20Simha%20Samskruthika%20Bhavana!5e0!3m2!1sen!2sin!4v1780505071244!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>

          {/* Venue details */}
          <div className="space-y-8">
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-8 relative">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">C R Simha Samskruthika Bhavana</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    7, 1st Main Rd, Gnanabharathi, Stage II,<br />
                    Kengeri Satellite Town,<br />
                    Bengaluru, Karnataka 560059
                  </p>
                </div>
              </div>
            </div>

            <a
              href={venueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 group"
            >
              <Navigation className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span className="text-lg font-medium">Get Directions</span>
            </a>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-secondary/20 border border-primary/10 rounded-lg">
                <span className="text-3xl mb-2 block">📅</span>
                <span className="text-muted-foreground text-sm">Reception</span>
                <p className="text-foreground font-medium">4th July</p>
              </div>
              <div className="text-center p-6 bg-secondary/20 border border-primary/10 rounded-lg">
                <span className="text-3xl mb-2 block">💒</span>
                <span className="text-muted-foreground text-sm">Wedding</span>
                <p className="text-foreground font-medium">5th July</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
