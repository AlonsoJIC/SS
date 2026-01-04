import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { CTA } from "@/components/cta"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <HowItWorks />
      <Features />
      <CTA />
    </main>
  )
}
