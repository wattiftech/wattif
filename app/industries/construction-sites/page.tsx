import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, HardHat, Zap, BarChart3, Repeat, Wrench } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"

export default function ConstructionSitesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <PageHeader
        title="Construction Sites: Build Smarter, Waste Less"
        description="Optimize energy usage on dynamic project sites"
        icon={<HardHat className="h-12 w-12 text-coral-500" />}
      />

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">The Construction Energy Challenge</h2>
              <p className="text-lg text-slate-600">Every construction project is a race against time and budget.</p>
              <p className="text-lg font-semibold text-coral-600">
                But with temporary power, shifting layouts, and harsh conditions, energy waste and blind spots are
                almost inevitable.
              </p>
              <p className="text-lg text-slate-600">
                Traditional monitoring tools are hard to install, easy to damage, and often can't keep up with the pace
                of change on site.
              </p>
            </div>
            <div className="relative mx-auto aspect-video w-full max-w-lg overflow-hidden rounded-xl shadow-xl md:mx-0">
              <Image
                src="/construction-site.png"
                alt="Construction site with energy monitoring equipment"
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
                <h3 className="mb-2 text-xl font-medium text-slate-900">Temporary Power, Permanent Waste</h3>
                <p className="text-slate-600">
                  Generators and site power are often left running unnecessarily, driving up costs and emissions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <Repeat className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Changing Layouts</h3>
                <p className="text-slate-600">
                  Wired or battery-powered sensors can't be easily moved as the site evolves.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <Wrench className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Harsh Environments</h3>
                <p className="text-slate-600">Dust, debris, and weather can quickly damage traditional devices.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <BarChart3 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Sustainability Demands</h3>
                <p className="text-slate-600">
                  Clients and regulators expect transparent reporting on energy use and emissions from day one.
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
            <p className="mb-4 text-lg text-slate-600">Our sensors are built for the dynamic world of construction.</p>
            <p className="mb-8 text-lg font-semibold text-coral-600">
              Deploy, redeploy, and relocate them as your site changes—no wires, no batteries, no worries.
            </p>
            <p className="text-lg text-slate-600">
              With protective enclosures, they stand up to tough conditions, delivering real-time data on energy use,
              equipment operation, and site safety.
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
                      <h4 className="font-bold text-slate-900">Rapid, Flexible Deployment</h4>
                      <p className="text-slate-600">
                        Install sensors wherever you need them, whenever you need them. Move them as the project
                        progresses.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-coral-500" />
                    <div>
                      <h4 className="font-bold text-slate-900">Real-Time Energy Tracking</h4>
                      <p className="text-slate-600">
                        Monitor every generator, tool, and temporary power line to spot waste and optimize usage.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-coral-500" />
                    <div>
                      <h4 className="font-bold text-slate-900">Safety and Compliance</h4>
                      <p className="text-slate-600">
                        Track site conditions and equipment operation to support safety and sustainability reporting.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-coral-500" />
                    <div>
                      <h4 className="font-bold text-slate-900">No Maintenance Hassles</h4>
                      <p className="text-slate-600">
                        With no batteries to change, you can focus on building, not sensor upkeep.
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
                      <span className="text-coral-600">Lower energy costs and emissions</span> from day one, with
                      transparent reporting for clients and regulators.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                      <HardHat className="h-6 w-6 text-coral-600" />
                    </div>
                    <p className="text-lg font-medium text-slate-900">
                      <span className="text-coral-600">Improved site safety and efficiency</span> through real-time
                      monitoring.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                      <Repeat className="h-6 w-6 text-coral-600" />
                    </div>
                    <p className="text-lg font-medium text-slate-900">
                      <span className="text-coral-600">Sensors that move with your project,</span> ready for the next
                      site.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                      <Zap className="h-6 w-6 text-coral-600" />
                    </div>
                    <p className="text-lg font-medium text-slate-900">
                      <span className="text-coral-600">A smarter, greener construction process</span> that sets you
                      apart.
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
            <h2 className="mb-6 text-3xl font-bold">Ready to build smarter?</h2>
            <p className="mb-8 text-lg text-slate-300">
              See how our wireless, batteryless sensors can transform your next project.
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
