import {
  ArrowRight,
  Battery,
  Building2,
  GraduationCap,
  HospitalIcon as HospitalSquare,
  Hotel,
  Server,
  ShoppingBag,
  Warehouse,
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"

export default function IndustriesPage() {
  const industries = [
    {
      icon: <Hotel className="h-8 w-8" />,
      title: "Hotels",
      description:
        "Balance guest comfort with energy efficiency. Optimize HVAC, lighting, and amenities without compromising the guest experience.",
      link: "/industries/hotels",
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Commercial Real Estate",
      description:
        "Transform energy data into property value with tenant-specific tracking and optimization for improved NOI.",
      link: "/industries/commercial-real-estate",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Data Centers",
      description:
        "Balance performance and efficiency with detailed PUE tracking and cooling optimization without compromising reliability.",
      link: "/industries/data-centers",
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Multi-Site Retail",
      description:
        "Ensure consistent energy performance across every location in your chain and identify outliers quickly.",
      link: "/industries/multi-site-retail",
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Battery Storage Facilities",
      description:
        "Optimize charging efficiency, extend battery life, and enhance safety with comprehensive monitoring of thermal and performance metrics.",
      link: "/industries/battery-storage",
    },
    {
      icon: <HospitalSquare className="h-8 w-8" />,
      title: "Healthcare",
      description:
        "Monitor critical systems while optimizing energy use in non-critical areas to balance patient care and efficiency.",
      link: "/industries/healthcare",
    },
    {
      icon: <Warehouse className="h-8 w-8" />,
      title: "Logistics & Warehousing",
      description:
        "Optimize energy use in large spaces with variable occupancy and specialized equipment like refrigeration and material handling.",
      link: "/industries/logistics-warehousing",
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Educational Buildings",
      description:
        "Monitor energy use across diverse campus facilities. Align consumption with actual space utilization based on class schedules and events.",
      link: "/industries/educational-buildings",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <PageHeader
        title="Industry Solutions"
        description="Tailored energy intelligence for every industry's unique challenges"
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Card key={index} className="flex h-full flex-col transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-medium">{industry.title}</h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate-600">{industry.description}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={industry.link}
                    className="flex items-center text-sm font-medium text-teal-600 hover:text-teal-700"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900">Don't See Your Industry?</h2>
            <p className="mb-8 text-lg text-slate-600">
              Our energy monitoring solutions can be adapted to any environment where energy is consumed. Contact us to
              discuss your specific industry challenges and how Wattif can help you achieve energy clarity.
            </p>
            <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600">
              <Link href="/contact">
                Contact Our Team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
