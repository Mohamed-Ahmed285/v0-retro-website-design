import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ShowsSection } from "@/components/shows-section"
import { MusicSection } from "@/components/music-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ShowsSection />
      <MusicSection />
      <Footer />
    </main>
  )
}
