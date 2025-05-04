import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function NotchPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-[#f9f8f3]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5dc20_1px,transparent_1px),linear-gradient(to_bottom,#e5e5dc20_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>

          <div className="container relative mx-auto px-4 py-24 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 flex items-center justify-center md:justify-start">
                <Image src="/notch-logo.png" alt="Notch Logo" width={180} height={60} className="h-24 w-auto" />
              </div>

              <div className="mb-6 inline-block rounded-full bg-coral-100 px-4 py-1 text-sm font-medium text-coral-600">
                Energy Automation Platform for Corporate Office Tenants
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-slate-800 md:text-5xl lg:text-6xl">
                Automate Energy Savings and Sustainability in Your Spaces,{" "}
                <span className="text-coral-400">Effortlessly.</span>
              </h1>

              <p className="mt-6 text-lg text-slate-600 md:text-xl">
                From portfolio-wide energy benchmarking to plug load control, and from granular energy intelligence to
                seamless ESG reporting, Notch automates the workflows that matter most.
              </p>

              <div className="mt-8 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
                <Button asChild size="lg" className="bg-coral-500 hover:bg-coral-600">
                  <a href="https://www.buildwithnotch.com" target="_blank" rel="noopener noreferrer">
                    Visit Notch Website
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-100"
                >
                  <a href="https://www.buildwithnotch.com/contact" target="_blank" rel="noopener noreferrer">
                    Contact Notch Team
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Notch Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-2xl font-semibold text-slate-800">Why Notch Exists</h2>

              <div className="space-y-6 text-slate-600">
                <p>
                  Notch was born from Wattif's mission to solve a critical challenge in the commercial real estate
                  industry: the complexity of implementing effective energy management and sustainability solutions. We
                  recognized that despite the growing importance of ESG goals, most organizations struggle with
                  fragmented data, complex systems, and resource-intensive processes.
                </p>

                <p>
                  As a standalone platform, Notch embodies Wattif's core philosophy: making sustainability accessible,
                  actionable, and measurable for all commercial spaces. By automating energy workflows and simplifying
                  ESG reporting, Notch removes the traditional barriers that have prevented widespread adoption of
                  sustainability initiatives.
                </p>

                <h3 className="mt-8 mb-4 text-xl font-medium text-slate-800">Wattif's Vision</h3>

                <p>
                  At Wattif Technologies, our goal is to accelerate the transition to sustainable buildings by providing
                  solutions that deliver immediate value while supporting long-term environmental objectives. We believe
                  that effective energy management shouldn't require specialized expertise or disruptive
                  implementations.
                </p>

                <p>
                  Through Notch and our comprehensive suite of solutions, we're working toward a future where energy
                  efficiency and sustainability are seamlessly integrated into every commercial building's
                  operations—making environmental responsibility both accessible and economically advantageous for
                  organizations of all sizes.
                </p>
              </div>

              <div className="mt-12 text-center">
                <Button asChild size="lg" className="bg-coral-500 hover:bg-coral-600">
                  <a href="https://www.buildwithnotch.com" target="_blank" rel="noopener noreferrer">
                    Discover How Notch Works
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
