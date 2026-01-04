"use client"

import type React from "react"


import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"
import { Shield, Search, Lock, AlertTriangle } from "lucide-react"

export function Hero() {
  const [url, setUrl] = useState("")
  const [isScanning, setIsScanning] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsScanning(true)
    setError(null)
    setResult(null)
    setModalOpen(false)
    try {
      const res = await fetch("https://secure-sight-sand.vercel.app/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url })
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err?.message || "Error al analizar la URL")
      }
      const data = await res.json()
      setResult(data)
      setModalOpen(true)
    } catch (err: any) {
      setError(err.message || "Error desconocido")
      setModalOpen(true)
    } finally {
      setIsScanning(false)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e40af_1px,transparent_1px),linear-gradient(to_bottom,#1e40af_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-move" />
      </div>

      {/* Floating security icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Shield
          className="absolute top-20 left-[10%] w-8 h-8 text-primary/20 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <Lock
          className="absolute top-40 right-[15%] w-6 h-6 text-accent/20 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <AlertTriangle
          className="absolute bottom-32 left-[20%] w-7 h-7 text-primary/20 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <Shield
          className="absolute bottom-20 right-[25%] w-9 h-9 text-accent/20 animate-float"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Logo/Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Defensive Security Platform</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
          <span className="text-foreground">SecureSight</span>
          <br />
          <span className="text-primary">Detect security breaches</span>
          <br />
          <span className="text-foreground">in seconds</span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Just enter a URL and get a complete analysis of vulnerabilities, misconfigurations, and security risks in real time.
        </p>

        {/* Scan form */}
        <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <form onSubmit={handleScan} className="relative">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-label="Search icon" />
                <Input
                  type="url"
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pl-12 h-14 text-lg bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary transition-all"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
                disabled={isScanning}
              >
                {isScanning ? (
                  <>
                    <span className="animate-spin mr-2">⚡</span>
                    Scanning...
                  </>
                ) : (
                  <>
                    <Shield className="w-5 h-5 mr-2" aria-label="Shield icon" />
                    Scan Now
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Scanning animation */}
          {isScanning && (
            <div className="mt-6 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20 animate-in fade-in">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Shield className="w-6 h-6 text-primary" />
                  <div className="absolute inset-0 rounded-full border-2 border-primary animate-pulse-ring" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium text-foreground">Analyzing vulnerabilities...</p>
                  <div className="mt-2 h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full animate-[width_2s_ease-in-out_infinite] w-2/3" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>



        {/* Barra de score debajo del form y arriba del resultado */}
        {result && result.score && typeof result.score.value === 'number' && (
          (() => {
            const value = Math.max(0, Math.min(100, result.score.value));
            let barColor = '';
            let barBg = '';
            let label = '';
            let icon = null;
            let iconBg = '';
            if (value >= 80) {
              barColor = 'linear-gradient(90deg, #4ade80 0%, #22c55e 100%)'; // green gradient
              barBg = 'bg-green-50';
              label = 'Safe site!';
              icon = <span className="inline-block align-middle mr-3 text-green-600 text-3xl">✔️</span>;
              iconBg = 'bg-green-100';
            } else if (value >= 50) {
              barColor = 'linear-gradient(90deg, #fde68a 0%, #facc15 100%)'; // yellow gradient
              barBg = 'bg-yellow-50';
              label = 'Caution: review recommendations';
              icon = <span className="inline-block align-middle mr-3 text-yellow-600 text-3xl">⚠️</span>;
              iconBg = 'bg-yellow-100';
            } else {
              barColor = 'linear-gradient(90deg, #fca5a5 0%, #ef4444 100%)'; // red gradient
              barBg = 'bg-red-50';
              label = 'High risk! Fix vulnerabilities';
              icon = <span className="inline-block align-middle mr-3 text-red-600 text-3xl">❌</span>;
              iconBg = 'bg-red-100';
            }
            return (
              <div className={
                `mb-6 mt-6 max-w-2xl mx-auto p-6 rounded-2xl border border-primary/30 shadow-xl flex flex-col items-center gap-4 bg-card/70 backdrop-blur-md`
              }>
                <div className="flex items-center gap-3 w-full justify-center text-center">
                  <div className={`rounded-full p-2 ${iconBg} shadow-md flex items-center justify-center`}>{icon}</div>
                  <span className="text-lg md:text-2xl font-bold text-foreground/90">{result.score.status ? result.score.status : label}</span>
                </div>
                <div className="w-full h-10 bg-muted rounded-lg border border-primary/20 relative overflow-hidden shadow-inner mt-2">
                  <div
                    style={{
                      width: `${value}%`,
                      minWidth: '40px',
                      background: barColor,
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      borderRadius: '0.5rem',
                      transition: 'width 1s cubic-bezier(0.4,0,0.2,1)',
                      boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
                    }}
                    title={`Score: ${value}`}
                    role="progressbar"
                    aria-label="Security score bar"
                    aria-valuenow={value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span className="pl-4 text-base md:text-lg font-bold text-white leading-10 drop-shadow-sm">{value}%</span>
                  </div>
                </div>
              </div>
            );
          })()
        )}
        {(error || result) && (
          <div className="fixed left-0 right-0 z-20 mt-6 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20 animate-in fade-in w-full max-w-full mx-auto top-auto md:static md:relative">
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-screen-xl mx-auto">
              <div className="flex-1 min-w-0 md:pr-6 w-full">
                <span className="font-semibold text-lg block mb-2">
                  {error ? "Analysis error" : "Summary for everyone"}
                </span>
                <div className="text-muted-foreground text-sm">
                  {error
                    ? error
                    : result && (
                      <ul className="list-none pl-0 mt-2 space-y-2 text-left">
                        {Object.entries(result).map(([key, value]) => {
                          // If it's an array of objects with status/impact, show each as a row
                          if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object') {
                            return value.map((item, idx) => (
                              <li key={key + idx} className="border-b last:border-b-0 pb-1">
                                <span className="font-semibold text-primary">{item.name || key.replace(/_/g, ' ')}:</span>{' '}
                                {item.status !== undefined && (
                                  <span>
                                    Status: {typeof item.status === 'boolean' ? (item.status ? 'Yes' : 'No') : String(item.status)}
                                  </span>
                                )}
                                {item.impact && (
                                  <span className="ml-2 text-xs text-muted-foreground">Impact: {item.impact}</span>
                                )}
                                {item.description && (
                                  <span className="ml-2 text-xs text-muted-foreground">{item.description}</span>
                                )}
                              </li>
                            ));
                          }
                          // Si es objeto con status/impact
                          if (
                            typeof value === 'object' &&
                            value !== null &&
                            ('status' in value || 'impact' in value || 'description' in value)
                          ) {
                            const v = value as { status?: boolean; impact?: string; description?: string };
                            return (
                              <li key={key} className="border-b last:border-b-0 pb-1">
                                <span className="font-semibold text-primary">{key.replace(/_/g, ' ')}:</span>{' '}
                                {'status' in v && v.status !== undefined && (
                                  <span>
                                    Status: {typeof v.status === 'boolean' ? (v.status ? 'Yes' : 'No') : String(v.status)}
                                  </span>
                                )}
                                {'impact' in v && v.impact && (
                                  <span className="ml-2 text-xs text-muted-foreground">Impact: {v.impact}</span>
                                )}
                                {'description' in v && v.description && (
                                  <span className="ml-2 text-xs text-muted-foreground">{v.description}</span>
                                )}
                              </li>
                            );
                          }
                          // Booleano simple
                          if (typeof value === 'boolean') {
                            return (
                              <li key={key}>
                                <span className="font-semibold text-primary">{key.replace(/_/g, ' ')}:</span>{' '}
                                <span className={value ? 'text-green-700 font-bold' : 'text-red-700 font-bold'}>{value ? 'Yes' : 'No'}</span>
                              </li>
                            );
                          }
                          // Otro tipo
                          return (
                            <li key={key}>
                              <span className="font-semibold text-primary">{key.replace(/_/g, ' ')}:</span>{' '}
                              <span>{String(value)}</span>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                </div>
              </div>
              <div className="flex-1 min-w-0 border-t md:border-t-0 md:border-l border-border/30 pt-4 md:pt-0 md:pl-6 w-full">
                <span className="font-semibold text-lg block mb-2">Technical view (JSON):</span>
                <div className="text-muted-foreground text-sm">
                  {result
                    ? <pre className="text-left whitespace-pre-wrap break-words text-xs md:text-sm max-h-80 overflow-auto bg-muted rounded p-2 border mt-2">{JSON.stringify(result, null, 2)}</pre>
                    : !error && "No response received."}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-muted-foreground animate-in fade-in duration-1000 delay-500">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" aria-label="Shield icon" />
            <span>100% Secure</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-primary" aria-label="Lock icon" />
            <span>Encrypted Data</span>
          </div>
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-primary" aria-label="Search icon" />
            <span>Deep Analysis</span>
          </div>
        </div>
      </div>
    </section>
  )
}
