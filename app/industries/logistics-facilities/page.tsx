import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, PackageCheck, Zap, Thermometer, BarChart3, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"

export default function LogisticsFacilitiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <PageHeader
        title="Logistics Facilities: Every Watt, Every Move, Optimized"
        description="Transform warehouse and distribution center efficiency"
        icon={<PackageCheck className="h-12 w-12 text-coral-500" />}
      />

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">The Logistics Energy Challenge</h2>
              <p className="text-lg text-slate-600">
                Warehouses and distribution centers are the lifeblood of global commerce.
              </p>
              <p className="text-lg font-semibold text-coral-600">
                But with 24/7 operations, vast spaces, and a mix of equipment, energy waste and downtime can threaten
                efficiency and profits.
              </p>
              <p className="text-lg text-slate-600">
                Traditional monitoring is hard to scale, costly to maintain, and often leaves critical areas untracked.
              </p>
            </div>
            <div className="relative mx-auto aspect-video w-full max-w-lg overflow-hidden rounded-xl shadow-xl md:mx-0">
              <Image
                src="/retail-energy-monitoring.png"
                alt="Logistics facility with energy monitoring"
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
                  <Zap className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Energy Waste</h3>
                <p className="text-slate-600">
                  Lighting, HVAC, and refrigeration run constantly, often in empty or underused areas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <Truck className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Equipment Downtime</h3>
                <p className="text-slate-600">
                  Unplanned failures in conveyors, forklifts, or refrigeration can halt operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <PackageCheck className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Scaling Headaches</h3>
                <p className="text-slate-600">
                  Wired or battery-powered sensors are hard to deploy across large, multi-site operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <BarChart3 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Sustainability Goals</h3>
                <p className="text-slate-600">
                  Pressure to cut emissions and prove efficiency gains is only increasing.
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
            <p className="mb-4 text-lg text-slate-600">Our sensors are made for logistics.</p>
            <p className="mb-8 text-lg font-semibold text-coral-600">
              Place them throughout your facility—on shelves, docks, cold storage, or vehicles—without wiring or battery
              logistics.
            </p>
            <p className="text-lg text-slate-600">
              Monitor everything in real time, from energy use to equipment health, and scale effortlessly as your
              operation grows.
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
                      <h4 className="font-bold text-slate-900">Effortless Deployment</h4>
                      <p className="text-slate-600">
                        Install sensors wherever you need insights, with zero disruption to operations.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-coral-500" />
                    <div>
                      <h4 className="font-bold text-slate-900">Granular Monitoring</h4>
                      <p className="text-slate-600">
                        Track lighting, HVAC, refrigeration, and material handling equipment in real time.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-coral-500" />
                    <div>
                      <h4 className="font-bold text-slate-900">Predictive Maintenance</h4>
                      <p className="text-slate-600">
                        Spot issues before they cause downtime, keeping your supply chain moving.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-coral-500" />
                    <div>
                      <h4 className="font-bold text-slate-900">Sustainability at Scale</h4>
                      <p className="text-slate-600">
                        Meet ESG goals with transparent, automated energy and emissions reporting.
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
                      <span className="text-coral-600">Reduced energy costs and waste</span> across every site.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                      <Truck className="h-6 w-6 text-coral-600" />
                    </div>
                    <p className="text-lg font-medium text-slate-900">
                      <span className="text-coral-600">Fewer disruptions</span> with early warning for equipment issues.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                      <PackageCheck className="h-6 w-6 text-coral-600" />
                    </div>
                    <p className="text-lg font-medium text-slate-900">
                      <span className="text-coral-600">Seamless scaling</span> for growing operations and new
                      facilities.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                      <Thermometer className="h-6 w-6 text-coral-600" />
                    </div>
                    <p className="text-lg font-medium text-slate-900">
                      <span className="text-coral-600">A more sustainable, resilient supply chain</span> ready for
                      tomorrow's demands.
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
            <h2 className="mb-6 text-3xl font-bold">Ready to optimize every move?</h2>
            <p className="mb-8 text-lg text-slate-300">
              Discover how our maintenance-free sensors can power your logistics operation.
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
