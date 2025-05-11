import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Factory, AlertTriangle, Wrench, Gauge, BarChart3 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"

export default function ManufacturingPlantsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <PageHeader
        title="Powering Manufacturing Excellence"
        description="Precision Energy Intelligence for Every Production Line"
        icon={<Factory className="h-12 w-12 text-coral-500" />}
      />

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">The Manufacturing Energy Challenge</h2>
              <p className="text-lg text-slate-600">
                Manufacturing is the backbone of the global economy, but it is also one of the most energy-intensive
                sectors. From heavy machinery and assembly lines to compressed air systems and HVAC, energy costs can
                represent a significant portion of operational expenses.
              </p>
              <p className="text-lg font-semibold text-coral-600">
                Unplanned downtime, inefficient equipment, and hidden energy waste can severely impact profitability and
                competitiveness.
              </p>
              <p className="text-lg text-slate-600">
                Traditional energy monitoring solutions often fall short due to complex operations, harsh environments,
                and the need for real-time, actionable insights.
              </p>
            </div>
            <div className="relative mx-auto aspect-video w-full max-w-lg overflow-hidden rounded-xl shadow-xl md:mx-0">
              <Image
                src="/modern-manufacturing-facility.png"
                alt="Modern manufacturing facility with energy monitoring"
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
                <h3 className="mb-2 text-xl font-medium text-slate-900">High Energy Costs</h3>
                <p className="text-slate-600">
                  Energy consumption is a major variable cost, with inefficiencies directly eating into margins.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <Wrench className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Equipment Downtime</h3>
                <p className="text-slate-600">
                  Unexpected failures disrupt production, causing costly delays and lost revenue.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <AlertTriangle className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Complex Operations</h3>
                <p className="text-slate-600">
                  Diverse machinery and processes make it difficult to get a unified view of energy use.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <Gauge className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Maintenance Challenges</h3>
                <p className="text-slate-600">
                  Wired or battery-powered sensors require frequent upkeep and are hard to deploy in harsh or
                  hard-to-reach areas.
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
              Imagine a sensor network that adapts to your manufacturing environment.
            </p>
            <p className="mb-8 text-lg font-semibold text-coral-600">
              Our wireless, batteryless sensors can be installed anywhere—on machines, inside panels, along production
              lines—without wires, batteries, or maintenance.
            </p>
            <p className="text-lg text-slate-600">
              They harvest energy from their surroundings, providing continuous, real-time data on equipment health,
              energy consumption, and process efficiency.
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
                      <h4 className="font-bold text-slate-900">Deploy Anywhere, Instantly</h4>
                      <p className="text-slate-600">
                        Place sensors exactly where you need them, even in the most inaccessible spots. No wiring, no
                        downtime, no ongoing maintenance.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-coral-500" />
                    <div>
                      <h4 className="font-bold text-slate-900">Comprehensive Visibility</h4>
                      <p className="text-slate-600">
                        Gain a complete, real-time view of your manufacturing operations. Detect inefficiencies,
                        identify failing assets early, and optimize energy use across your facility.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-coral-500" />
                    <div>
                      <h4 className="font-bold text-slate-900">Predictive Maintenance</h4>
                      <p className="text-slate-600">
                        Use data-driven insights to schedule maintenance proactively, reducing unplanned downtime and
                        extending equipment life.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-coral-500" />
                    <div>
                      <h4 className="font-bold text-slate-900">Sustainable and Scalable</h4>
                      <p className="text-slate-600">
                        Eliminate battery waste and reduce environmental impact. Scale your monitoring effortlessly as
                        your operations grow.
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
                      <span className="text-coral-600">15–30% reduction in energy costs</span> by eliminating waste and
                      optimizing processes.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                      <AlertTriangle className="h-6 w-6 text-coral-600" />
                    </div>
                    <p className="text-lg font-medium text-slate-900">
                      <span className="text-coral-600">Significant decrease in unplanned downtime</span> through early
                      fault detection.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                      <Gauge className="h-6 w-6 text-coral-600" />
                    </div>
                    <p className="text-lg font-medium text-slate-900">
                      <span className="text-coral-600">Lower total cost of ownership</span> with zero battery
                      replacements or wiring.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                      <Factory className="h-6 w-6 text-coral-600" />
                    </div>
                    <p className="text-lg font-medium text-slate-900">
                      <span className="text-coral-600">A future-ready manufacturing facility</span> that's smarter,
                      greener, and more competitive.
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
            <h2 className="mb-6 text-3xl font-bold">Ready to transform your manufacturing operations?</h2>
            <p className="mb-8 text-lg text-slate-300">
              Discover how our maintenance-free energy intelligence platform can power your production excellence.
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
