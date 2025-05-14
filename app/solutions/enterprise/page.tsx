import Image from "next/image"
import Link from "next/link"
import { Building2, HeadphonesIcon, LineChart, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"

export default function EnterprisePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <PageHeader title="Wattif Enterprise" description="Complete Energy Intelligence for Large-Scale Operations" />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">Comprehensive Energy Monitoring</h2>
              <p className="mb-4 text-lg text-slate-600">
                Wattif Enterprise is our comprehensive energy monitoring platform for organizations with complex energy
                profiles or multiple facilities. It combines granular data collection with sophisticated analytics to
                provide a complete picture of your energy landscape.
              </p>
              <p className="mb-4 text-lg text-slate-600">
                Unlike traditional energy monitoring systems that only show total consumption, Wattif Enterprise reveals
                detailed patterns at the circuit and equipment level, giving you unprecedented visibility into how,
                when, and where energy is being used across your organization.
              </p>
              <p className="text-lg text-slate-600">
                This detailed intelligence enables you to make data-driven decisions that reduce costs, improve
                operations, and meet sustainability goals.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/placeholder.svg?key=wfo0t"
                  alt="Wattif Enterprise Dashboard showing multi-site energy monitoring"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Key Capabilities</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <Building2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Multi-Site Management</h3>
                <p className="text-slate-600">
                  Monitor, compare, and manage energy use across your entire portfolio from a single platform. Identify
                  top and bottom performers, normalize for weather and occupancy, and prioritize improvement efforts
                  based on opportunity size.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <LineChart className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Advanced Analytics</h3>
                <p className="text-slate-600">
                  Move beyond basic monitoring with features like load disaggregation, peak demand analysis, and
                  consumption forecasting. Our machine learning algorithms continuously improve as they learn your
                  operational patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <Share2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">API Access & Custom Integrations</h3>
                <p className="text-slate-600">
                  Connect with your existing systems—BMS, CMMS, ERP, or other platforms—to create a unified data
                  environment. Our robust API allows for custom integrations and data exchange with your critical
                  business systems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <HeadphonesIcon className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Premium Support</h3>
                <p className="text-slate-600">
                  Receive dedicated account management, priority technical support, and regular business reviews. Our
                  energy experts are available to help you interpret data, identify opportunities, and implement
                  energy-saving strategies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Who Uses Wattif Enterprise?</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-slate-50 p-6">
                <h3 className="mb-4 text-xl font-medium text-slate-900">Multi-Site Organizations</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-coral-500">•</span>
                    <span>Retail chains with dozens or hundreds of locations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-coral-500">•</span>
                    <span>Commercial real estate portfolios</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-coral-500">•</span>
                    <span>University and healthcare campuses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-coral-500">•</span>
                    <span>Manufacturing companies with multiple facilities</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg bg-slate-50 p-6">
                <h3 className="mb-4 text-xl font-medium text-slate-900">Complex Single Sites</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-coral-500">•</span>
                    <span>Large manufacturing facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-coral-500">•</span>
                    <span>Data centers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-coral-500">•</span>
                    <span>Hospitals and healthcare facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-coral-500">•</span>
                    <span>Large commercial buildings with multiple tenants</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">Ready to See Your Energy Clearly?</h2>
            <p className="mb-8 text-lg text-slate-300">
              Discover how Wattif Enterprise can transform your organization's approach to energy management.
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
