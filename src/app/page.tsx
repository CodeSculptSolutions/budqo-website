import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { Features } from '@/components/Features'
import { BigStatement } from '@/components/BigStatement'
import { Pricing } from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { DownloadCTA } from '@/components/DownloadCTA'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <BigStatement />
        <Pricing />
        <FAQ />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  )
}
