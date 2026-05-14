"use client"

import { TVCard } from "./tv-card"
import { PixelTV } from "./pixel-icon"

const shows = [
  {
    title: "COSMIC RANGERS",
    year: "1985",
    genre: "Sci-Fi",
    image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400&h=300&fit=crop",
  },
  {
    title: "NEON NIGHTS",
    year: "1988",
    genre: "Drama",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=300&fit=crop",
  },
  {
    title: "PIXEL PATROL",
    year: "1992",
    genre: "Action",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    title: "RETRO QUEST",
    year: "1987",
    genre: "Adventure",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
  },
  {
    title: "SYNTH CITY",
    year: "1991",
    genre: "Mystery",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=400&h=300&fit=crop",
  },
  {
    title: "ARCADE HEROES",
    year: "1989",
    genre: "Comedy",
    image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=400&h=300&fit=crop",
  },
]

export function ShowsSection() {
  return (
    <section id="shows" className="py-16 bg-background retro-grain">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-retro-brown p-3 pixel-shadow border-4 border-retro-brown">
            <PixelTV className="w-8 h-8 text-retro-orange" />
          </div>
          <div>
            <h2 className="text-base md:text-lg text-foreground">CLASSIC SHOWS</h2>
            <p className="text-[8px] text-muted-foreground mt-1">Relive the magic of television</p>
          </div>
          <div className="flex-1 h-1 bg-retro-brown ml-4" />
        </div>

        {/* Shows Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shows.map((show) => (
            <TVCard key={show.title} {...show} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="text-[10px] text-retro-turquoise hover:text-retro-orange transition-colors border-b-2 border-current pb-1">
            {">> LOAD MORE SHOWS <<"}
          </button>
        </div>
      </div>
    </section>
  )
}
