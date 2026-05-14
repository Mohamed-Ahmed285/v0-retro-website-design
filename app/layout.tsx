import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import '@fontsource/press-start-2p'
import './globals.css'

export const metadata: Metadata = {
  title: 'RetroWave TV - Nostalgic Shows & Music',
  description: 'Travel back in time with classic TV shows and timeless music from the golden era',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
