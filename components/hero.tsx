"use client"

import { RetroButton } from "./retro-button"
import { PixelTV, PixelCassette, PixelController, PixelStar } from "./pixel-icon"

export function Hero() {
  return (
    <section className="relative min-h-[80vh] bg-retro-brown overflow-hidden retro-grain scanlines">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <PixelStar className="absolute top-20 left-[10%] w-8 h-8 text-retro-yellow float" />
        <PixelStar className="absolute top-40 right-[15%] w-6 h-6 text-retro-pink float" style={{ animationDelay: "0.5s" }} />
        <PixelStar className="absolute bottom-32 left-[20%] w-5 h-5 text-retro-turquoise float" style={{ animationDelay: "1s" }} />
        <PixelController className="absolute bottom-20 right-[10%] w-16 h-16 text-retro-orange float opacity-50" style={{ animationDelay: "0.3s" }} />
        <PixelCassette className="absolute top-32 right-[25%] w-12 h-12 text-retro-yellow float opacity-50" style={{ animationDelay: "0.7s" }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* TV Set Frame */}
          <div className="relative inline-block mb-8">
            <div className="bg-card p-6 md:p-8 retro-border relative">
              {/* Antennas */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex gap-20">
                <div className="w-2 h-10 bg-foreground rotate-[-30deg] origin-bottom" />
                <div className="w-2 h-10 bg-foreground rotate-[30deg] origin-bottom" />
              </div>
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-4 h-4 bg-retro-orange rounded-full" />

              {/* Screen content */}
              <div className="bg-retro-brown p-6 md:p-10 tv-screen">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <PixelTV className="w-10 h-10 md:w-14 md:h-14 text-retro-yellow" />
                  </div>
                  
                  <h1 className="text-lg md:text-2xl lg:text-3xl text-retro-yellow vhs-glitch leading-relaxed">
                    TRAVEL BACK
                    <br />
                    <span className="text-retro-pink">IN TIME</span>
                  </h1>
                  
                  <p className="text-[10px] md:text-xs text-muted max-w-md mx-auto leading-relaxed">
                    Relive the golden era of entertainment. Classic TV shows, timeless music, and pure nostalgia.
                  </p>

                  {/* Blinking cursor */}
                  <div className="flex items-center justify-center gap-1 text-[10px] text-retro-turquoise">
                    <span>{">"}</span>
                    <span>PRESS START</span>
                    <span className="blink">_</span>
                  </div>
                </div>
              </div>

              {/* TV Controls */}
              <div className="flex items-center justify-between mt-4 px-2">
                <div className="flex gap-3">
                  <div className="w-4 h-4 rounded-full bg-retro-orange border-2 border-foreground" />
                  <div className="w-4 h-4 rounded-full bg-retro-turquoise border-2 border-foreground" />
                  <div className="w-4 h-4 rounded-full bg-retro-pink border-2 border-foreground" />
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-muted border-2 border-foreground" />
                  <div className="w-8 h-8 rounded-full bg-muted border-2 border-foreground" />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <RetroButton variant="primary" size="lg">
              Watch Shows
            </RetroButton>
            <RetroButton variant="secondary" size="lg">
              Listen Music
            </RetroButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-lg mx-auto">
            {[
              { value: "500+", label: "Classic Shows" },
              { value: "1000+", label: "Retro Tracks" },
              { value: "80s-90s", label: "Golden Era" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card p-3 retro-border">
                <div className="text-sm md:text-base text-retro-orange">{stat.value}</div>
                <div className="text-[6px] md:text-[8px] text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
