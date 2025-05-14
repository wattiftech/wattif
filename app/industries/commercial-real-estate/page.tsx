import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Building2, AlertTriangle, Lightbulb, BarChart3, LineChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"

export default function CommercialRealEstatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <PageHeader
        title="Smarter Buildings, Effortless Efficiency"
        description="The Future of Facility Management"
        icon={<Building2 className="h-12 w-12 text-coral-500" />}
      />

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                The Commercial Building Energy Challenge
              </h2>
              <p className="text-lg text-slate-600">
                Modern offices, shopping centers, and mixed-use complexes are more than just spaces—they're living
                ecosystems.
              </p>
              <p className="text-lg font-semibold text-coral-600">
                Balancing comfort, energy efficiency, and sustainability is a daily challenge, especially with aging
                infrastructure and evolving tenant needs.
              </p>
              <p className="text-lg text-slate-600">
                Traditional energy management solutions are disruptive to install, costly to maintain, and often can't
                keep up with changing layouts or occupancy patterns.
              </p>
            </div>
            <div className="relative mx-auto aspect-video w-full max-w-lg overflow-hidden rounded-xl shadow-xl md:mx-0">
              <Image
                src="/commercial-real-estate.png"
                alt="Modern office building with energy monitoring"
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
                  <AlertTriangle className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Energy Drains</h3>
                <p className="text-slate-600">
                  Outdated HVAC, lighting, and control systems waste energy and money, while tenants and guests expect
                  comfort and reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <Lightbulb className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Retrofit Headaches</h3>
                <p className="text-slate-600">
                  Retrofitting wired or battery-powered sensors disrupts operations and can be prohibitively expensive
                  in occupied or historic buildings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <LineChart className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Fragmented Data</h3>
                <p className="text-slate-600">
                  Without unified, real-time insights, it's hard to optimize performance or justify investments in
                  upgrades.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <BarChart3 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Sustainability Pressures</h3>
                <p className="text-slate-600">
                  Achieving green certifications and ESG goals means tracking and proving efficiency gains across every
                  square foot.
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
              Say goodbye to complicated installations and hello to effortless efficiency.
            </p>
            <p className="mb-8 text-lg font-semibold text-coral-600">
              Our wireless, batteryless sensors install in minutes—anywhere you need them, from lobbies to rooftops,
              without the need for wires or battery changes.
            </p>
            <p className="text-lg text-slate-600">
              They deliver continuous, actionable data on energy use, occupancy, air quality, and more, helping you
              optimize comfort and efficiency with zero disruption.
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
                      <h4 className="font-bold text-slate-900">Non-Invasive Deployment</h4>
                      <p className="text-slate-600">
                        No drilling, no rewiring, no tenant complaints. Sensors blend seamlessly into any space and can
                        be relocated as your building evolves.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-coral-500" />
                    <div>
                      <h4 className="font-bold text-slate-900">Comprehensive Visibility</h4>
                      <p className="text-slate-600">
                        Monitor every system and space in real time. Instantly identify inefficiencies, equipment
                        issues, or comfort problems.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-coral-500" />
                    <div>
                      <h4 className="font-bold text-slate-900">Automated Optimization</h4>
                      <p className="text-slate-600">
                        Use AI-driven insights to fine-tune HVAC, lighting, and environmental controls for maximum
                        efficiency and occupant satisfaction.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-coral-500" />
                    <div>
                      <h4 className="font-bold text-slate-900">Sustainability, Simplified</h4>
                      <p className="text-slate-600">
                        Track and report on energy savings, carbon reductions, and indoor air quality to meet
                        certification and ESG requirements.
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
                      <BarChart3 className="h-6 w-6 text-coral-600" />
                    </div>
                    <p className="text-lg font-medium text-slate-900">
                      <span className="text-coral-600">Up to 30% reduction in energy bills</span> through smarter,
                      data-driven building management.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                      <Building2 className="h-6 w-6 text-coral-600" />
                    </div>
                    <p className="text-lg font-medium text-slate-900">
                      <span className="text-coral-600">Happier tenants and guests</span> with consistently comfortable,
                      healthy environments.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                      <Lightbulb className="h-6 w-6 text-coral-600" />
                    </div>
                    <p className="text-lg font-medium text-slate-900">
                      <span className="text-coral-600">Easier, faster retrofits</span> with minimal disruption and lower
                      costs.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                      <LineChart className="h-6 w-6 text-coral-600" />
                    </div>
                    <p className="text-lg font-medium text-slate-900">
                      <span className="text-coral-600">A sustainable, future-proof building</span> that stands out in a
                      competitive market.
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
            <h2 className="mb-6 text-3xl font-bold">Ready to make your building smarter and more efficient?</h2>
            <p className="mb-8 text-lg text-slate-300">
              See how our maintenance-free sensors can help you achieve more—with less.
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
