import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <Hero />
        <HowItWorks />
        <Features />
      </main>
      <Footer />
    </>
  )
}
