import Link from "next/link"
import { Building2, CheckCircle2 } from "lucide-react"

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
        title="Commercial Real Estate Energy Intelligence"
        description="Transform energy data into property value and tenant satisfaction"
        icon={<Building2 className="h-12 w-12 text-coral-500" />}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">The Commercial Real Estate Energy Challenge</h2>
              <p className="mb-4 text-lg text-slate-600">
                Energy costs represent 30% of operating expenses in commercial buildings, yet most property managers
                lack visibility into how that energy is being used across their portfolio.
              </p>
              <p className="mb-4 text-lg text-slate-600">
                Traditional building management systems provide basic control but miss opportunities for optimization.
                Meanwhile, tenants demand sustainable spaces and transparency around utility costs.
              </p>
              <p className="text-lg text-slate-600">
                This lack of granular energy data makes it difficult to identify efficiency opportunities, allocate
                costs fairly, and differentiate properties in a competitive market.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-xl bg-gradient-to-b from-slate-50 to-slate-100 p-4">
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-md border border-slate-200 z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs font-medium text-slate-700">Efficient</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span className="text-xs font-medium text-slate-700">Moderate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-xs font-medium text-slate-700">Inefficient</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-md border border-slate-200 z-10">
                  <h4 className="text-xs font-semibold text-slate-900 mb-1">Real-time Monitoring</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs text-slate-700">Live data</span>
                  </div>
                </div>

                <svg viewBox="0 0 800 600" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Sky Background */}
                  <rect x="0" y="0" width="800" height="600" fill="#f8fafc" />

                  {/* Building Base */}
                  <rect x="200" y="100" width="400" height="450" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" />

                  {/* Building Floors with Energy Efficiency Indicators */}

                  {/* Floor 5 - Efficient (Green) */}
                  <rect x="210" y="110" width="380" height="80" fill="#f0fdf4" stroke="#64748b" strokeWidth="1" />
                  <rect x="220" y="120" width="80" height="60" fill="#dcfce7" stroke="#64748b" strokeWidth="1" />
                  <rect x="310" y="120" width="80" height="60" fill="#bbf7d0" stroke="#64748b" strokeWidth="1" />
                  <rect x="400" y="120" width="80" height="60" fill="#86efac" stroke="#64748b" strokeWidth="1" />
                  <rect
                    x="490"
                    y="120"
                    width="90"
                    height="60"
                    fill="#4ade80"
                    stroke="#64748b"
                    strokeWidth="1"
                    opacity="0.7"
                  />

                  {/* Floor 4 - Moderate (Yellow) */}
                  <rect x="210" y="200" width="380" height="80" fill="#fefce8" stroke="#64748b" strokeWidth="1" />
                  <rect x="220" y="210" width="80" height="60" fill="#fef9c3" stroke="#64748b" strokeWidth="1" />
                  <rect
                    x="310"
                    y="210"
                    width="80"
                    height="60"
                    fill="#fde047"
                    stroke="#64748b"
                    strokeWidth="1"
                    opacity="0.7"
                  />
                  <rect
                    x="400"
                    y="210"
                    width="80"
                    height="60"
                    fill="#facc15"
                    stroke="#64748b"
                    strokeWidth="1"
                    opacity="0.6"
                  />
                  <rect
                    x="490"
                    y="210"
                    width="90"
                    height="60"
                    fill="#eab308"
                    stroke="#64748b"
                    strokeWidth="1"
                    opacity="0.5"
                  />

                  {/* Floor 3 - Inefficient (Red) */}
                  <rect x="210" y="290" width="380" height="80" fill="#fef2f2" stroke="#64748b" strokeWidth="1" />
                  <rect x="220" y="300" width="80" height="60" fill="#fee2e2" stroke="#64748b" strokeWidth="1" />
                  <rect x="310" y="300" width="80" height="60" fill="#fecaca" stroke="#64748b" strokeWidth="1" />
                  <rect
                    x="400"
                    y="300"
                    width="80"
                    height="60"
                    fill="#ef4444"
                    stroke="#64748b"
                    strokeWidth="1"
                    opacity="0.6"
                  />
                  <rect
                    x="490"
                    y="300"
                    width="90"
                    height="60"
                    fill="#dc2626"
                    stroke="#64748b"
                    strokeWidth="1"
                    opacity="0.5"
                  />

                  {/* Floor 2 - Moderate (Yellow) */}
                  <rect x="210" y="380" width="380" height="80" fill="#fefce8" stroke="#64748b" strokeWidth="1" />
                  <rect x="220" y="390" width="80" height="60" fill="#fef9c3" stroke="#64748b" strokeWidth="1" />
                  <rect
                    x="310"
                    y="390"
                    width="80"
                    height="60"
                    fill="#fde047"
                    stroke="#64748b"
                    strokeWidth="1"
                    opacity="0.7"
                  />
                  <rect
                    x="400"
                    y="390"
                    width="80"
                    height="60"
                    fill="#facc15"
                    stroke="#64748b"
                    strokeWidth="1"
                    opacity="0.6"
                  />
                  <rect
                    x="490"
                    y="390"
                    width="90"
                    height="60"
                    fill="#eab308"
                    stroke="#64748b"
                    strokeWidth="1"
                    opacity="0.5"
                  />

                  {/* Floor 1 - Lobby */}
                  <rect x="210" y="470" width="380" height="70" fill="#f8fafc" stroke="#64748b" strokeWidth="1" />
                  <rect x="350" y="490" width="100" height="50" fill="#bfdbfe" stroke="#64748b" strokeWidth="1" />

                  {/* Building Systems */}
                  <rect x="600" y="110" width="50" height="40" rx="4" fill="#94a3b8" stroke="#64748b" strokeWidth="1" />
                  <text x="610" y="135" fontSize="10" fill="#f8fafc" fontWeight="bold">
                    HVAC
                  </text>

                  <rect x="600" y="160" width="50" height="40" rx="4" fill="#94a3b8" stroke="#64748b" strokeWidth="1" />
                  <text x="605" y="185" fontSize="10" fill="#f8fafc" fontWeight="bold">
                    Panel
                  </text>

                  {/* Energy Flow Lines */}
                  <path d="M600 130 H 590 V 450 H 400" stroke="#4ade80" strokeWidth="2" strokeDasharray="4 2" />
                  <path d="M600 180 H 580 V 400 H 490" stroke="#facc15" strokeWidth="2" strokeDasharray="4 2" />
                  <path d="M600 180 H 570 V 330 H 490" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />

                  {/* Sensors */}
                  <circle cx="590" cy="130" r="5" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1" />
                  <circle cx="580" cy="400" r="5" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1" />
                  <circle cx="570" cy="330" r="5" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1" />

                  {/* Floor Labels with Energy Data */}
                  <rect x="150" y="140" width="50" height="20" rx="4" fill="white" stroke="#64748b" strokeWidth="1" />
                  <text x="155" y="155" fontSize="10" fill="#16a34a" fontWeight="bold">
                    Floor 5
                  </text>
                  <text x="155" y="165" fontSize="8" fill="#16a34a">
                    -24% kWh
                  </text>

                  <rect x="150" y="230" width="50" height="20" rx="4" fill="white" stroke="#64748b" strokeWidth="1" />
                  <text x="155" y="245" fontSize="10" fill="#ca8a04" fontWeight="bold">
                    Floor 4
                  </text>
                  <text x="155" y="255" fontSize="8" fill="#ca8a04">
                    +2% kWh
                  </text>

                  <rect x="150" y="320" width="50" height="20" rx="4" fill="white" stroke="#64748b" strokeWidth="1" />
                  <text x="155" y="335" fontSize="10" fill="#dc2626" fontWeight="bold">
                    Floor 3
                  </text>
                  <text x="155" y="345" fontSize="8" fill="#dc2626">
                    +31% kWh
                  </text>

                  <rect x="150" y="410" width="50" height="20" rx="4" fill="white" stroke="#64748b" strokeWidth="1" />
                  <text x="155" y="425" fontSize="10" fill="#ca8a04" fontWeight="bold">
                    Floor 2
                  </text>
                  <text x="155" y="435" fontSize="8" fill="#ca8a04">
                    +5% kWh
                  </text>

                  <rect x="150" y="500" width="50" height="20" rx="4" fill="white" stroke="#64748b" strokeWidth="1" />
                  <text x="155" y="515" fontSize="10" fill="#475569" fontWeight="bold">
                    Floor 1
                  </text>
                  <text x="155" y="525" fontSize="8" fill="#475569">
                    Lobby
                  </text>

                  {/* Tenant Labels */}
                  <text x="230" y="145" fontSize="9" fill="#0f172a" fontWeight="500">
                    Tenant A
                  </text>
                  <text x="320" y="145" fontSize="9" fill="#0f172a" fontWeight="500">
                    Tenant B
                  </text>
                  <text x="410" y="145" fontSize="9" fill="#0f172a" fontWeight="500">
                    Tenant C
                  </text>
                  <text x="500" y="145" fontSize="9" fill="#0f172a" fontWeight="500">
                    Tenant D
                  </text>

                  <text x="230" y="235" fontSize="9" fill="#0f172a" fontWeight="500">
                    Tenant E
                  </text>
                  <text x="320" y="235" fontSize="9" fill="#0f172a" fontWeight="500">
                    Tenant F
                  </text>
                  <text x="410" y="235" fontSize="9" fill="#0f172a" fontWeight="500">
                    Tenant G
                  </text>
                  <text x="500" y="235" fontSize="9" fill="#0f172a" fontWeight="500">
                    Tenant H
                  </text>

                  {/* Data Visualization Elements */}
                  <circle cx="260" cy="170" r="4" fill="#3b82f6" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="350" cy="170" r="4" fill="#3b82f6" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.4;0.8" dur="1.7s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="440" cy="170" r="4" fill="#3b82f6" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2.3s" repeatCount="indefinite" />
                  </circle>

                  <circle cx="260" cy="350" r="4" fill="#3b82f6" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.4;0.8" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="350" cy="350" r="4" fill="#3b82f6" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2.1s" repeatCount="indefinite" />
                  </circle>

                  {/* Title */}
                  <rect x="300" y="50" width="200" height="30" rx="4" fill="white" stroke="#64748b" strokeWidth="1" />
                  <text x="320" y="70" fontSize="14" fill="#0f172a" fontWeight="bold">
                    Building Energy Profile
                  </text>
                </svg>

                <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-md border border-slate-200 z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-xs font-medium text-slate-700">Energy Sensors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
            How Wattif Transforms Commercial Real Estate Energy Management
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Tenant-Specific Monitoring</h3>
                <p className="text-slate-600">
                  Track energy use by tenant space, common areas, and building systems to allocate costs accurately and
                  identify optimization opportunities in specific zones.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Portfolio Benchmarking</h3>
                <p className="text-slate-600">
                  Compare energy performance across your entire portfolio to identify top and bottom performers,
                  standardize best practices, and prioritize improvement efforts.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Sustainability Certification Support</h3>
                <p className="text-slate-600">
                  Generate the detailed energy data needed for LEED, ENERGY STAR, GRESB, and other certifications that
                  enhance property value and attract premium tenants.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Tenant Engagement Tools</h3>
                <p className="text-slate-600">
                  Provide tenants with visibility into their energy use through branded dashboards, encouraging
                  conservation and demonstrating your commitment to transparency.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">BMS Integration</h3>
                <p className="text-slate-600">
                  Enhance your existing building management system with granular energy data that enables more precise
                  control and optimization of HVAC, lighting, and other building systems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">NOI Improvement</h3>
                <p className="text-slate-600">
                  Directly impact Net Operating Income through reduced energy costs, lower maintenance expenses, and
                  increased tenant retention and satisfaction.
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
        <h3 className="mb-4 text-xl font-medium text-slate-900">Class A Office Portfolio</h3>
        <p className="mb-4 text-slate-600">
          A commercial real estate firm with 12 Class A office buildings implemented Wattif to differentiate their
          properties in a competitive market. By providing tenants with energy transparency and implementing
          targeted efficiency measures, they achieved remarkable results.
        </p>
        <p className="mb-4 text-slate-600">
          Energy costs decreased by 17% across the portfolio, while tenant satisfaction scores increased by 22%.
          The firm was able to secure a 7.5% premium on lease rates compared to similar properties by marketing
          their buildings as "smart" and "sustainable." The detailed energy data also streamlined their ENERGY
          STAR certification process, with all properties achieving certification within one year.
        </p>
        <div className="mt-6 flex justify-center">
          <Button asChild className="bg-coral-500 hover:bg-coral-600">
            <Link href="/case-studies/commercial-real-estate">
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
            <h2 className="mb-6 text-3xl font-bold">Ready to Transform Your Property Portfolio?</h2>
            <p className="mb-8 text-lg text-slate-300">
              Discover how Wattif can help you reduce operating costs, increase property value, and meet tenant
              expectations for sustainability and transparency.
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
