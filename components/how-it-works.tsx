import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Enter the URL",
    description: "Just paste the website address you want to analyze.",
  },
  {
    number: "02",
    title: "Automatic Analysis",
    description: "Our AI scans thousands of vulnerability points in seconds.",
  },
  {
    number: "03",
    title: "Get the Report",
    description: "Get a detailed report with priorities and recommended solutions.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-4 bg-card/30 backdrop-blur-sm border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            <span className="text-primary">How It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Three simple steps to secure your website
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-4">
                <div className="text-6xl font-bold text-primary/20">{step.number}</div>
                <h3 className="text-2xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-6 text-primary/30">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
