import Link from "next/link"
import { Microscope, CheckCircle2, FlaskRound, Thermometer, Calculator, Shield, Cog } from "lucide-react"

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
        title="R&D Facilities"
        description="Optimize energy efficiency without compromising research integrity or safety protocols"
        icon={<Microscope className="h-12 w-12 text-coral-500" />}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">Unique Energy Challenges for R&D Facilities</h2>
              <p className="mb-4 text-lg text-slate-600">
                R&D facilities face distinctive energy management challenges that standard commercial approaches fail to
                address. From specialized equipment with variable usage patterns to critical environmental requirements,
                these facilities require tailored solutions that protect research integrity while optimizing efficiency.
              </p>
              <p className="mb-4 text-lg text-slate-600">
                Traditional energy monitoring systems often can't accommodate the complex needs of research
                environments, where safety protocols, specialized infrastructure, and precise environmental controls
                create a unique energy profile that's difficult to optimize without compromising research quality.
              </p>
              <p className="text-lg text-slate-600">
                Wattif's non-invasive monitoring approach provides the granular visibility needed to understand these
                complex environments without disrupting critical research activities or requiring system shutdowns.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-xl">
                <img
                  src="/rd-facilities-illustration.jpg"
                  alt="Modern research laboratory with integrated energy monitoring"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">How Wattif Supports R&D Facilities</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <Cog className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Specialized Equipment Monitoring</h3>
                <p className="text-slate-600">
                  Sensors can be applied to specific research equipment to reveal actual energy consumption patterns,
                  helping facilities allocate costs accurately to grants and projects while identifying inefficient
                  equipment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <Thermometer className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Environmental Parameter Optimization</h3>
                <p className="text-slate-600">
                  Wattif's analytics can reveal previously unseen relationships between environmental conditions and
                  energy use, helping maintain critical research parameters while identifying efficiency opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <Calculator className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Grant Compliance Documentation</h3>
                <p className="text-slate-600">
                  The detailed energy data helps document energy use for grant reporting requirements and sustainability
                  initiatives, providing accurate allocation of overhead costs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <Shield className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Non-Disruptive Installation</h3>
                <p className="text-slate-600">
                  Wattif's self-powered sensors can be installed without interrupting critical research activities or
                  requiring system shutdowns—preserving both research continuity and safety protocols.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <FlaskRound className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Custom Monitoring Parameters</h3>
                <p className="text-slate-600">
                  The flexibility of Wattif's system allows for monitoring specialized equipment and setting custom
                  parameters relevant to research environments rather than generic commercial building metrics.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Equipment Performance Monitoring</h3>
                <p className="text-slate-600">
                  Beyond energy savings, Wattif can help identify when specialized equipment may be performing
                  sub-optimally, potentially protecting valuable research by flagging issues before they affect
                  experiments or samples.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Key R&D Facility Challenges</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <Cog className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Specialized Equipment with Variable Usage</h3>
                <p className="text-slate-600">
                  R&D facilities house expensive, energy-intensive equipment (labs, clean rooms, testing chambers) with
                  highly variable usage patterns that don't follow predictable schedules, making traditional energy
                  management approaches ineffective.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <Thermometer className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Critical Environmental Requirements</h3>
                <p className="text-slate-600">
                  Many R&D processes require precise environmental conditions (temperature, humidity, air quality) that
                  cannot be compromised for energy savings, creating a constant balancing act between research integrity
                  and efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <Calculator className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Complex Energy Allocation</h3>
                <p className="text-slate-600">
                  With multiple research projects and departments sharing facilities, accurately allocating energy costs
                  between different projects, grants, and budgets is extremely difficult without granular visibility.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <Shield className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Laboratory Safety Constraints</h3>
                <p className="text-slate-600">
                  Safety protocols in labs often prohibit interruptions to power or environmental systems, limiting
                  options for traditional energy monitoring installations that might require system shutdowns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <FlaskRound className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Specialized Infrastructure</h3>
                <p className="text-slate-600">
                  R&D facilities often include unique infrastructure like fume hoods, clean rooms, and specialized
                  equipment with proprietary control systems that standard building management systems don't adequately
                  monitor.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Story section temporarily hidden
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Success Story</h2>
            <div className="rounded-lg bg-slate-50 p-8 shadow-md">
              <h3 className="mb-4 text-xl font-medium text-slate-900">University Research Complex</h3>
              <p className="mb-4 text-slate-600">
                A major university research complex was struggling with high energy costs and difficulty allocating
                expenses across multiple grant-funded projects. Their specialized equipment and 24/7 operations made
                traditional energy management approaches ineffective.
              </p>
              <p className="mb-4 text-slate-600">
                After implementing Wattif's monitoring solution, they identified that 32% of their energy was being
                consumed by cooling systems running at full capacity even when labs were unoccupied. By implementing
                targeted adjustments that maintained critical environmental parameters while reducing unnecessary
                cooling, they reduced energy consumption by 21%.
              </p>
              <p className="text-slate-600">
                The project delivered annual savings of $285,000 with an ROI of 240% in the first year, while also
                providing the granular data needed for accurate grant reporting and identifying equipment that was
                beginning to fail before it affected research results.
              </p>
              <div className="mt-6 flex justify-center">
                <Button asChild className="bg-coral-500 hover:bg-coral-600">
                  <Link href="/case-studies/university-research">
                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">Ready to Optimize Your R&D Facility?</h2>
            <p className="mb-8 text-lg text-slate-300">
              Discover how Wattif can help you improve energy efficiency without compromising research integrity or
              safety protocols.
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
