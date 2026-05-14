"use client"

import { cn } from "@/lib/utils"
import { PixelPlay, PixelHeart } from "./pixel-icon"
import { useState } from "react"

interface TVCardProps {
  title: string
  year: string
  genre: string
  image: string
  className?: string
}

export function TVCard({ title, year, genre, image, className }: TVCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [liked, setLiked] = useState(false)

  return (
    <div
      className={cn(
        "relative bg-retro-brown p-3 pixel-shadow",
        "border-4 border-retro-brown",
        "transition-transform",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* TV Frame */}
      <div className="bg-card p-2 retro-border">
        {/* Antenna */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-8">
          <div className="w-1 h-6 bg-retro-brown rotate-[-20deg] origin-bottom" />
          <div className="w-1 h-6 bg-retro-brown rotate-[20deg] origin-bottom" />
        </div>

        {/* Screen */}
        <div className="relative aspect-[4/3] bg-retro-brown tv-screen scanlines overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
            style={{
              backgroundImage: `url(${image})`,
              transform: isHovered ? "scale(1.1)" : "scale(1)",
              imageRendering: "pixelated",
            }}
          />
          
          {/* Overlay on hover */}
          <div
            className={cn(
              "absolute inset-0 bg-retro-brown/80 flex items-center justify-center gap-4",
              "transition-opacity duration-200",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          >
            <button 
              className="p-2 bg-primary hover:bg-retro-orange text-primary-foreground pixel-shadow border-2 border-retro-brown"
              aria-label="Play"
            >
              <PixelPlay className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setLiked(!liked)}
              className={cn(
                "p-2 pixel-shadow border-2 border-retro-brown",
                liked ? "bg-accent text-accent-foreground" : "bg-card text-foreground hover:bg-accent"
              )}
              aria-label="Like"
            >
              <PixelHeart className="w-6 h-6" />
            </button>
          </div>

          {/* Static noise effect */}
          <div className="absolute inset-0 retro-grain pointer-events-none" />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-2 px-1">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-retro-orange" />
            <div className="w-3 h-3 rounded-full bg-retro-turquoise" />
          </div>
          <div className="w-8 h-8 rounded-full bg-muted border-2 border-retro-brown flex items-center justify-center">
            <div className="w-4 h-1 bg-retro-brown" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="mt-3 space-y-1">
        <h3 className="text-[10px] text-primary-foreground truncate font-bold">{title}</h3>
        <div className="flex items-center justify-between text-[8px] text-muted">
          <span>{year}</span>
          <span className="bg-retro-turquoise text-secondary-foreground px-2 py-0.5">{genre}</span>
        </div>
      </div>
    </div>
  )
}
