"use client"

import { useState } from "react"
import { PixelTV, PixelRadio, PixelCassette, PixelStar } from "./pixel-icon"
import { RetroButton } from "./retro-button"
import { cn } from "@/lib/utils"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: "Shows", icon: PixelTV },
    { label: "Music", icon: PixelRadio },
    { label: "Classics", icon: PixelCassette },
    { label: "Top Picks", icon: PixelStar },
  ]

  return (
    <header className="sticky top-0 z-50 bg-retro-brown border-b-4 border-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <PixelTV className="w-10 h-10 text-retro-orange" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-retro-pink animate-pulse" />
            </div>
            <div>
              <h1 className="text-[12px] text-retro-yellow vhs-glitch">RETROWAVE</h1>
              <p className="text-[6px] text-retro-turquoise tracking-widest">TV & MUSIC</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.label.toLowerCase().replace(" ", "-")}`}
                className="flex items-center gap-2 text-[10px] text-muted hover:text-retro-yellow transition-colors group"
              >
                <item.icon className="w-5 h-5 text-retro-orange group-hover:text-retro-yellow transition-colors" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <RetroButton variant="accent" size="sm">
              Subscribe
            </RetroButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-retro-yellow"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <div className={cn(
                "w-6 h-1 bg-current transition-transform",
                menuOpen && "rotate-45 translate-y-2.5"
              )} />
              <div className={cn(
                "w-6 h-1 bg-current transition-opacity",
                menuOpen && "opacity-0"
              )} />
              <div className={cn(
                "w-6 h-1 bg-current transition-transform",
                menuOpen && "-rotate-45 -translate-y-2.5"
              )} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          menuOpen ? "max-h-64 pb-4" : "max-h-0"
        )}>
          <nav className="flex flex-col gap-4 pt-4 border-t-2 border-retro-orange">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.label.toLowerCase().replace(" ", "-")}`}
                className="flex items-center gap-3 text-[10px] text-muted hover:text-retro-yellow transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <item.icon className="w-5 h-5 text-retro-orange" />
                <span>{item.label}</span>
              </a>
            ))}
            <RetroButton variant="accent" size="sm" className="mt-2">
              Subscribe
            </RetroButton>
          </nav>
        </div>
      </div>
    </header>
  )
}
