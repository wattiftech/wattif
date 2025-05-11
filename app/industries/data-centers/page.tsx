import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Server, AlertTriangle, Thermometer, BarChart3, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"

export default function DataCentersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <PageHeader
        title="Data Centers: Maximum Uptime, Minimum Waste"
        description="Optimize energy without compromising reliability"
        icon={<Server className="h-12 w-12 text-coral-500" />}
      />

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">The Data Center Energy Challenge</h2>
              <p className="text-lg text-slate-600">Data centers are the digital backbone of our world.</p>
              <p className="text-lg font-semibold text-coral-600">
                But with dense racks, critical cooling needs, and relentless uptime demands, even a small inefficiency
                can mean big costs—or worse, downtime.
              </p>
              <p className="text-lg text-slate-600">
                Traditional monitoring systems are expensive to install, add cable clutter, and require constant
                maintenance in already packed environments.
              </p>
            </div>
            <div className="relative mx-auto aspect-video w-full max-w-lg overflow-hidden rounded-xl shadow-xl md:mx-0">
              <Image
                src="/modern-data-center-energy-monitoring.png"
                alt="Modern data center with energy monitoring"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">The Problems You Face</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <Thermometer className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Thermal Hotspots</h3>
                <p className="text-slate-600">Uneven cooling leads to wasted energy and puts servers at risk.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <Zap className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Power Anomalies</h3>
                <p className="text-slate-600">
                  Unmonitored power spikes or failures can cause outages or damage equipment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <AlertTriangle className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Maintenance Burden</h3>
                <p className="text-slate-600">
                  Wired or battery-powered sensors are hard to install and maintain in high-density, mission-critical
                  spaces.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <BarChart3 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Sustainability Mandates</h3>
                <p className="text-slate-600">
                  Growing pressure to reduce energy consumption and carbon footprint, while maintaining 24/7 uptime.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-slate-900">
              Our Solution: Wireless, Batteryless Energy Intelligence
            </h2>
            <p className="mb-4 text-lg text-slate-600">
              Imagine a monitoring solution that fits anywhere, never needs a battery change, and delivers real-time
              insights from every rack, aisle, and zone.
            </p>
            <p className="mb-8 text-lg font-semibold text-coral-600">
              Our wireless, batteryless sensors are designed for the unique demands of data centers—no wires, no
              maintenance, no missed data.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-coral-500 to-coral-300 opacity-30 blur-lg"></div>
              <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-8 shadow-lg">
                <h3 className="mb-6 text-2xl font-bold text-slate-900">How We Solve It</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-coral-500" />
                    <div>
                      <h4 className="font-bold text-slate-900">Deploy in Any Rack or Room</h4>
                      <p className="text-slate-600">
                        Sensors install in minutes, even in the tightest spaces, and can be moved as your layout
                        changes.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-coral-500" />
                    <div>
                      <h4 className="font-bold text-slate-900">Granular, Real-Time Monitoring</h4>
                      <p className="text-slate-600">
                        Track temperature, humidity, and power use at the rack or aisle level. Instantly spot hotspots
                        and power anomalies.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-coral-500" />
                    <div>
                      <h4 className="font-bold text-slate-900">Zero Maintenance</h4>
                      <p className="text-slate-600">
                        No batteries to replace, no wires to manage. Focus on uptime, not sensor upkeep.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-coral-500" />
                    <div>
                      <h4 className="font-bold text-slate-900">Sustainability and Reporting</h4>
                      <p className="text-slate-600">
                        Optimize cooling, reduce energy use, and generate reports for compliance and ESG goals.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-coral-300 to-coral-500 opacity-30 blur-lg"></div>
              <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-8 shadow-lg">
                <h3 className="mb-6 text-2xl font-bold text-slate-900">The Results</h3>
                <ul className="space-y-6">
                  <li className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                      <Thermometer className="h-6 w-6 text-coral-600" />
                    </div>
                    <p className="text-lg font-medium text-slate-900">
                      <span className="text-coral-600">Lower cooling and energy costs</span> through precise, targeted
                      optimization.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                      <AlertTriangle className="h-6 w-6 text-coral-600" />
                    </div>
                    <p className="text-lg font-medium text-slate-900">
                      <span className="text-coral-600">Fewer outages and equipment failures</span> with early detection
                      of issues.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                      <Server className="h-6 w-6 text-coral-600" />
                    </div>
                    <p className="text-lg font-medium text-slate-900">
                      <span className="text-coral-600">Simplified operations</span> with maintenance-free monitoring.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                      <BarChart3 className="h-6 w-6 text-coral-600" />
                    </div>
                    <p className="text-lg font-medium text-slate-900">
                      <span className="text-coral-600">A greener, more efficient data center</span> ready for the
                      future.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">Ready to maximize uptime and efficiency?</h2>
            <p className="mb-8 text-lg text-slate-300">
              Discover how our sensors can make your data center smarter, safer, and more sustainable.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-coral-500 hover:bg-coral-600">
                <Link href="/contact">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
