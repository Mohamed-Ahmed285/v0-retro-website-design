"use client"

import { cn } from "@/lib/utils"

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent"
  size?: "sm" | "md" | "lg"
}

export function RetroButton({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: RetroButtonProps) {
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-retro-orange",
    secondary: "bg-secondary text-secondary-foreground hover:bg-retro-turquoise",
    accent: "bg-accent text-accent-foreground hover:bg-retro-pink",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-[8px]",
    md: "px-4 py-2 text-[10px]",
    lg: "px-6 py-3 text-xs",
  }

  return (
    <button
      className={cn(
        "relative font-sans uppercase tracking-wider",
        "border-4 border-retro-brown",
        "transition-all duration-100 cursor-pointer",
        "pixel-shadow",
        "active:translate-x-1 active:translate-y-1",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
