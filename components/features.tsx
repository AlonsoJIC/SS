import { Shield, Zap, Eye, Lock, AlertTriangle, CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "Scannig",
    description: "Detects OWASP Top 10 vulnerabilities, XSS, SQL Injection, CSRF, and more.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get a detailed report in less than 15 seconds with real-time analysis.",
  },
  {
    icon: Lock,
    title: "Header Analysis",
    description: "Verifies HTTP, HTTPS, CSP, and CORS security configurations.",
  },
]

export function Features() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            <span className="text-foreground">Professional</span> <span className="text-primary">Protection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Advanced analysis technology to keep your website safe
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
