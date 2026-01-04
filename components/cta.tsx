"use client"

import { Button } from "@/components/ui/button"
import { Shield, ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            <span className="text-foreground">Ready to protect</span>
            <br />
            <span className="text-primary">tu sitio web?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join thousands of developers and security teams who trust SecureSight
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          <Button
            size="lg"
            className="h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
          >
            <Shield className="w-5 h-5 mr-2" />
            Comenzar Gratis
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-14 px-8 text-lg font-semibold border-border/50 hover:border-primary/50 hover:bg-card/50 transition-all bg-transparent"
          >
            Ver Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="pt-8 text-sm text-muted-foreground animate-in fade-in duration-1000 delay-300">
          <p>No credit card required • Unlimited scans • 24/7 support</p>
        </div>
      </div>
    </section>
  )
}
