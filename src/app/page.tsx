import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { LogoMarquee } from "@/components/logo-marquee"
import { Pricing } from "@/components/pricing"
import { AppverseFooter } from "@/components/appverse-footer"

export default function Page() {
  return (
    <main className="min-h-[100dvh] text-white">
      <SiteHeader />
      <Hero />
      <Features />
      <LogoMarquee />
      <Pricing />
      <AppverseFooter />
    </main>
  )
}
