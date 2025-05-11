import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Microscope, FlaskRoundIcon as Flask, ClipboardCheck, Lightbulb } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"

export default function RDFacilitiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <PageHeader
        title="R&D Facilities: Precision Monitoring for Innovation"
        description="Optimize energy efficiency without disrupting critical research"
        icon={<Microscope className="h-12 w-12 text-coral-500" />}
      />

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">The R&D Energy Challenge</h2>
              <p className="text-lg text-slate-600">Innovation can't wait for maintenance.</p>
              <p className="text-lg font-semibold text-coral-600">
                Research labs and innovation centers demand absolute precision, reliability, and compliance.
              </p>
              <p className="text-lg text-slate-600">
                But traditional sensors are disruptive to install, require regular upkeep, and can't always adapt to
                rapidly changing research needs.
              </p>
            </div>
            <div className="relative mx-auto aspect-video w-full max-w-lg overflow-hidden rounded-xl shadow-xl md:mx-0">
              <Image
                src="/energy-analytics-dashboard-detail.png"
                alt="R&D facility with energy monitoring"
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
                  <Flask className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Sensitive Environments</h3>
                <p className="text-slate-600">Labs and cleanrooms can't tolerate downtime or invasive installations.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <Lightbulb className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Evolving Needs</h3>
                <p className="text-slate-600">
                  Experiments and equipment change frequently, making fixed monitoring solutions a poor fit.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <ClipboardCheck className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Compliance Pressures</h3>
                <p className="text-slate-600">
                  Strict standards require continuous, reliable data for audits and reporting.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <Microscope className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Maintenance Disruptions</h3>
                <p className="text-slate-600">Battery changes and wiring work interrupt research and risk data gaps.</p>
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
            <p className="mb-4 text-lg text-slate-600">Our sensors are designed for the frontiers of science.</p>
            <p className="mb-8 text-lg font-semibold text-coral-600">
              Install them in any lab, cleanroom, or test environment—no wires, no batteries, no disruption.
            </p>
            <p className="text-lg text-slate-600">
              Monitor environmental conditions, equipment health, and energy use with unmatched granularity and
              reliability.
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
                      <h4 className="font-bold text-slate-900">Discreet, Non-Invasive Deployment</h4>
                      <p className="text-slate-600">
                        Place sensors wherever you need data, even in sensitive or hard-to-access locations.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-coral-500" />
                    <div>
                      <h4 className="font-bold text-slate-900">Flexible, Adaptable Monitoring</h4>
                      <p className="text-slate-600">Move or repurpose sensors instantly as your research evolves.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-coral-500" />
                    <div>
                      <h4 className="font-bold text-slate-900">Continuous, Reliable Data</h4>
                      <p className="text-slate-600">
                        Support compliance and research integrity with maintenance-free, always-on monitoring.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-coral-500" />
                    <div>
                      <h4 className="font-bold text-slate-900">Sustainability Built-In</h4>
                      <p className="text-slate-600">
                        Eliminate battery waste and support your organization's green goals.
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
                      <ClipboardCheck className="h-6 w-6 text-coral-600" />
                    </div>
                    <p className="text-lg font-medium text-slate-900">
                      <span className="text-coral-600">Uninterrupted research and compliance</span> with zero
                      maintenance downtime.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                      <Lightbulb className="h-6 w-6 text-coral-600" />
                    </div>
                    <p className="text-lg font-medium text-slate-900">
                      <span className="text-coral-600">Flexible, future-proof monitoring</span> for every experiment and
                      facility change.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                      <Flask className="h-6 w-6 text-coral-600" />
                    </div>
                    <p className="text-lg font-medium text-slate-900">
                      <span className="text-coral-600">Granular insights</span> that protect valuable research and
                      equipment.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                      <Microscope className="h-6 w-6 text-coral-600" />
                    </div>
                    <p className="text-lg font-medium text-slate-900">
                      <span className="text-coral-600">A greener, smarter innovation environment</span> ready for what's
                      next.
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
            <h2 className="mb-6 text-3xl font-bold">Ready to empower your next breakthrough?</h2>
            <p className="mb-8 text-lg text-slate-300">
              See how our wireless, batteryless sensors can support your R&D journey.
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
