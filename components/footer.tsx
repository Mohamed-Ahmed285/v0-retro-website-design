"use client"

import { PixelTV, PixelRadio, PixelCassette, PixelHeart } from "./pixel-icon"
import { RetroButton } from "./retro-button"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")

  return (
    <footer className="bg-foreground text-background retro-grain">
      {/* Newsletter */}
      <div className="border-b-4 border-retro-orange">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-sm md:text-base text-retro-yellow mb-2">JOIN THE NOSTALGIA CLUB</h3>
            <p className="text-[8px] text-muted mb-6">
              Get weekly picks of classic shows and retro tracks delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR@EMAIL.COM"
                className="flex-1 px-4 py-2 bg-background text-foreground border-4 border-retro-brown text-[10px] placeholder:text-muted-foreground focus:outline-none focus:border-retro-orange"
              />
              <RetroButton variant="primary">
                SUBSCRIBE
              </RetroButton>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <PixelTV className="w-8 h-8 text-retro-orange" />
              <div>
                <div className="text-[10px] text-retro-yellow">RETROWAVE</div>
                <div className="text-[6px] text-retro-turquoise">TV & MUSIC</div>
              </div>
            </div>
            <p className="text-[8px] text-muted leading-relaxed">
              Your portal to the golden era of entertainment. Relive the classics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] text-retro-orange mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {["Home", "Shows", "Music", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[8px] text-muted hover:text-retro-yellow transition-colors">
                    {">"} {link.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-[10px] text-retro-turquoise mb-4">CATEGORIES</h4>
            <ul className="space-y-2">
              {["80s Classics", "90s Hits", "Synthwave", "Action Shows", "Comedy Gold"].map((cat) => (
                <li key={cat}>
                  <a href="#" className="text-[8px] text-muted hover:text-retro-pink transition-colors">
                    {">"} {cat.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[10px] text-retro-pink mb-4">CONNECT</h4>
            <div className="flex gap-3 mb-4">
              {[PixelTV, PixelRadio, PixelCassette].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-retro-brown flex items-center justify-center pixel-shadow border-2 border-retro-orange hover:bg-retro-orange transition-colors"
                >
                  <Icon className="w-5 h-5 text-retro-yellow" />
                </a>
              ))}
            </div>
            <p className="text-[8px] text-muted">
              Follow us for daily throwbacks
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-retro-brown mt-10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[8px] text-muted">
              © 2026 RETROWAVE TV & MUSIC. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-2 text-[8px] text-muted">
              <span>MADE WITH</span>
              <PixelHeart className="w-4 h-4 text-retro-pink" />
              <span>FOR NOSTALGIA LOVERS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Retro TV static bar */}
      <div className="h-2 bg-gradient-to-r from-retro-orange via-retro-yellow via-retro-turquoise to-retro-pink" />
    </footer>
  )
}
