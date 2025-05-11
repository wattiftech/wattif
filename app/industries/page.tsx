import Link from "next/link"
import { Building2, Database, Factory, HardHat, Microscope, Warehouse } from "lucide-react"

import { PageHeader } from "@/components/page-header"
import { IndustryCard } from "@/components/industry-card"

export default function IndustriesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PageHeader
        title="Industry-Specific Energy Solutions"
        description="Tailored energy intelligence for your unique operational challenges"
      />

      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Tailored Energy Intelligence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IndustryCard
            title="Commercial Real Estate"
            description="Optimize energy usage across your entire property portfolio with solutions designed for multi-tenant buildings."
            icon={<Building2 className="h-10 w-10 text-coral-500" />}
            href="/industries/commercial-real-estate"
          />
          <IndustryCard
            title="Manufacturing Plants"
            description="Align energy use with production demands and identify high-cost systems to reduce waste while maintaining output."
            icon={<Factory className="h-10 w-10 text-coral-500" />}
            href="/industries/manufacturing-plants"
          />
          <IndustryCard
            title="Data Centers"
            description="Maintain critical operations while optimizing energy consumption in high-demand computing environments."
            icon={<Database className="h-10 w-10 text-coral-500" />}
            href="/industries/data-centers"
          />
          <IndustryCard
            title="Construction Sites"
            description="Track energy use across generators, equipment, and project zones to optimize costs and meet sustainability goals."
            icon={<HardHat className="h-10 w-10 text-coral-500" />}
            href="/industries/construction-sites"
          />
          <IndustryCard
            title="Logistics Facilities"
            description="Standardize energy performance across warehouses and distribution centers while adapting to local conditions."
            icon={<Warehouse className="h-10 w-10 text-coral-500" />}
            href="/industries/logistics-facilities"
          />
          <IndustryCard
            title="R&D Facilities"
            description="Support precise environmental controls while identifying opportunities for energy optimization."
            icon={<Microscope className="h-10 w-10 text-coral-500" />}
            href="/industries/r-and-d-facilities"
          />
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Don't See Your Industry?</h2>
            <p className="text-lg text-slate-700 mb-8">
              Our energy intelligence platform is adaptable to virtually any built environment. Contact our team to
              discuss your specific industry challenges.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-coral-500 px-8 py-3 text-lg font-medium text-white shadow transition-colors hover:bg-coral-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-coral-500"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
