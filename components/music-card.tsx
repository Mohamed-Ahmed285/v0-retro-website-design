"use client"

import { cn } from "@/lib/utils"
import { PixelPlay, PixelMusic } from "./pixel-icon"
import { useState } from "react"

interface MusicCardProps {
  title: string
  artist: string
  year: string
  image: string
  className?: string
}

export function MusicCard({ title, artist, year, image, className }: MusicCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div
      className={cn(
        "relative bg-card p-4 pixel-shadow",
        "border-4 border-retro-brown",
        "group",
        className
      )}
    >
      {/* Cassette/Vinyl Style */}
      <div className="relative">
        {/* Album art */}
        <div className="relative aspect-square bg-retro-brown overflow-hidden retro-border">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
            style={{
              backgroundImage: `url(${image})`,
              transform: isPlaying ? "rotate(360deg)" : "rotate(0deg)",
              imageRendering: "pixelated",
            }}
          />
          <div className="absolute inset-0 retro-grain pointer-events-none" />
          
          {/* Center hole for vinyl effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-retro-brown border-4 border-card" />
          
          {/* Play overlay */}
          <div className={cn(
            "absolute inset-0 bg-retro-brown/70 flex items-center justify-center",
            "opacity-0 group-hover:opacity-100 transition-opacity"
          )}>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 bg-primary text-primary-foreground pixel-shadow border-2 border-retro-brown hover:bg-retro-orange"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <div className="flex gap-1">
                  <div className="w-2 h-6 bg-current" />
                  <div className="w-2 h-6 bg-current" />
                </div>
              ) : (
                <PixelPlay className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Spinning animation indicator */}
        {isPlaying && (
          <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground p-1 border-2 border-retro-brown">
            <PixelMusic className="w-4 h-4 animate-pulse" />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="mt-4 space-y-2">
        <h3 className="text-[10px] text-foreground truncate font-bold">{title}</h3>
        <p className="text-[8px] text-muted-foreground truncate">{artist}</p>
        <div className="flex items-center justify-between">
          <span className="text-[8px] text-muted-foreground">{year}</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-1.5 h-3",
                  i < 3 ? "bg-retro-orange" : "bg-muted"
                )}
                style={{
                  animation: isPlaying ? `pulse ${0.3 + i * 0.1}s ease-in-out infinite alternate` : "none"
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
