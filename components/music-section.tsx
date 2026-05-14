"use client"

import { MusicCard } from "./music-card"
import { PixelRadio, PixelCassette } from "./pixel-icon"

const albums = [
  {
    title: "MIDNIGHT DRIVE",
    artist: "Neon Pulse",
    year: "1984",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
  },
  {
    title: "ELECTRIC DREAMS",
    artist: "Synth Wave",
    year: "1986",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
  },
  {
    title: "CHROME SUNSET",
    artist: "Retro Future",
    year: "1988",
    image: "https://images.unsplash.com/photo-1571974599782-87624638275e?w=400&h=400&fit=crop",
  },
  {
    title: "ARCADE NIGHTS",
    artist: "Pixel Beat",
    year: "1990",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop",
  },
]

export function MusicSection() {
  return (
    <section id="music" className="py-16 bg-retro-brown retro-grain scanlines">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-card p-3 pixel-shadow border-4 border-foreground">
            <PixelRadio className="w-8 h-8 text-retro-turquoise" />
          </div>
          <div>
            <h2 className="text-base md:text-lg text-retro-yellow">RETRO MUSIC</h2>
            <p className="text-[8px] text-muted mt-1">Timeless tracks from the golden era</p>
          </div>
          <div className="flex-1 h-1 bg-retro-yellow ml-4" />
        </div>

        {/* Music Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {albums.map((album) => (
            <MusicCard key={album.title} {...album} />
          ))}
        </div>

        {/* Cassette Player UI */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-card p-6 retro-border">
            <div className="flex items-center gap-4 mb-4">
              <PixelCassette className="w-12 h-12 text-retro-orange" />
              <div className="flex-1">
                <div className="text-[10px] text-foreground">NOW PLAYING</div>
                <div className="text-[8px] text-muted-foreground">Insert your favorite cassette...</div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-3 bg-muted border-2 border-retro-brown relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-1/3 bg-retro-orange" />
              <div className="absolute inset-0 flex">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="flex-1 border-r border-retro-brown/30" />
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-4">
              {["⏮", "⏪", "▶", "⏩", "⏭"].map((icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 bg-muted hover:bg-retro-orange text-foreground hover:text-primary-foreground pixel-shadow border-2 border-retro-brown flex items-center justify-center text-sm transition-colors"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Browse More */}
        <div className="text-center mt-12">
          <button className="text-[10px] text-retro-yellow hover:text-retro-pink transition-colors border-b-2 border-current pb-1">
            {">> EXPLORE FULL LIBRARY <<"}
          </button>
        </div>
      </div>
    </section>
  )
}
