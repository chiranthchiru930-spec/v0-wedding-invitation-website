"use client"

import { Calendar, Clock, MapPin } from "lucide-react"

const events = [
  {
    title: "Reception",
    date: "4th July 2026",
    time: "6:30 PM onwards",
    description: "Join us for an evening of celebration, dinner, and festivities as we begin our wedding celebrations.",
    icon: "🎉"
  },
  {
    title: "Wedding Ceremony",
    date: "5th July 2026",
    time: "7:25 AM - 8:10 AM",
    description: "Witness our sacred union as we exchange vows and embark on our journey together as husband and wife.",
    icon: "💍"
  }
]

export function EventsSection() {
  return (
    <section className="py-24 md:py-32 px-4 bg-secondary/10 relative overflow-hidden">
      {/* Decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary/80 text-sm uppercase tracking-[0.3em] mb-4">
            Mark Your Calendar
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground" style={{ fontFamily: "var(--font-script), cursive" }}>
            Wedding <span className="text-primary">Events</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {events.map((event, index) => (
            <div
              key={event.title}
              className="group relative bg-card/50 backdrop-blur-sm border border-primary/20 p-8 md:p-10 hover:border-primary/40 transition-all duration-500"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 transition-all duration-300 group-hover:w-12 group-hover:h-12" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/50 transition-all duration-300 group-hover:w-12 group-hover:h-12" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/50 transition-all duration-300 group-hover:w-12 group-hover:h-12" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50 transition-all duration-300 group-hover:w-12 group-hover:h-12" />

              <div className="text-5xl mb-6">{event.icon}</div>
              
              <h3 className="text-2xl md:text-3xl font-light text-foreground mb-6" style={{ fontFamily: "var(--font-script), cursive" }}>
                {event.title}
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-lg">{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-lg">{event.time}</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
