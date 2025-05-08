import Link from "next/link"
import { CheckCircle2, GraduationCap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"

export default function EducationalBuildingsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <PageHeader
        title="Educational Building Energy Intelligence"
        description="Optimize energy use across campus while supporting learning environments"
        icon={<GraduationCap className="h-12 w-12 text-coral-500" />}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">The Educational Building Energy Challenge</h2>
              <p className="mb-4 text-lg text-slate-600">
                Educational institutions face unique energy challenges with diverse building types, variable occupancy,
                and the need to balance budget constraints with optimal learning environments.
              </p>
              <p className="mb-4 text-lg text-slate-600">
                From K-12 schools to large university campuses, these facilities often struggle with aging
                infrastructure, limited visibility into building performance, and competing demands for limited
                resources.
              </p>
              <p className="text-lg text-slate-600">
                Without detailed energy monitoring, it's nearly impossible to identify which buildings are
                underperforming, prioritize infrastructure investments, or align energy use with actual space
                utilization.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-xl">
                <svg viewBox="0 0 800 600" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Background with gradient */}
                  <defs>
                    <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#dbeafe" />
                      <stop offset="100%" stopColor="#f0f9ff" />
                    </linearGradient>
                    <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f1f5f9" />
                      <stop offset="100%" stopColor="#e2e8f0" />
                    </linearGradient>
                    <linearGradient id="floorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#e2e8f0" />
                      <stop offset="100%" stopColor="#cbd5e1" />
                    </linearGradient>
                    <linearGradient id="roofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#cbd5e1" />
                      <stop offset="100%" stopColor="#94a3b8" />
                    </linearGradient>
                    <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
                    </linearGradient>
                    <radialGradient id="sensorGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                    </radialGradient>
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.2" />
                    </filter>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Sky and ground */}
                  <rect x="0" y="0" width="800" height="600" fill="url(#skyGradient)" />
                  <rect x="0" y="450" width="800" height="150" fill="url(#floorGradient)" />

                  {/* Campus visualization */}
                  <g filter="url(#shadow)">
                    {/* Main administration building */}
                    <g transform="translate(300, 150)">
                      <rect
                        x="0"
                        y="0"
                        width="200"
                        height="150"
                        fill="url(#buildingGradient)"
                        stroke="#64748b"
                        strokeWidth="2"
                      />
                      <polygon points="0,0 100,-50 200,0" fill="url(#roofGradient)" stroke="#64748b" strokeWidth="2" />
                      <rect x="80" y="100" width="40" height="50" fill="#94a3b8" stroke="#64748b" strokeWidth="1" />
                      <text x="100" y="170" fontSize="14" textAnchor="middle" fill="#1e293b" fontWeight="bold">
                        Main Hall
                      </text>
                      <circle cx="100" cy="180" r="8" fill="url(#sensorGlow)">
                        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" />
                      </circle>
                      <text x="100" y="195" fontSize="10" textAnchor="middle" fill="#475569">
                        42.8 kWh
                      </text>
                    </g>

                    {/* Science building */}
                    <g transform="translate(550, 200)">
                      <rect
                        x="0"
                        y="0"
                        width="150"
                        height="100"
                        fill="url(#buildingGradient)"
                        stroke="#64748b"
                        strokeWidth="2"
                      />
                      <rect x="0" y="-30" width="150" height="30" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />
                      <text x="75" y="110" fontSize="14" textAnchor="middle" fill="#1e293b" fontWeight="bold">
                        Science Building
                      </text>
                      <circle cx="75" cy="120" r="8" fill="url(#sensorGlow)">
                        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.5s" repeatCount="indefinite" />
                      </circle>
                      <text x="75" cy="135" fontSize="10" textAnchor="middle" fill="#475569">
                        56.2 kWh
                      </text>
                    </g>

                    {/* Library */}
                    <g transform="translate(150, 250)">
                      <rect
                        x="0"
                        y="0"
                        width="120"
                        height="80"
                        fill="url(#buildingGradient)"
                        stroke="#64748b"
                        strokeWidth="2"
                      />
                      <rect x="-10" y="-20" width="140" height="20" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />
                      <text x="60" y="90" fontSize="14" textAnchor="middle" fill="#1e293b" fontWeight="bold">
                        Library
                      </text>
                      <circle cx="60" cy="100" r="8" fill="url(#sensorGlow)">
                        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite" />
                      </circle>
                      <text x="60" y="115" fontSize="10" textAnchor="middle" fill="#475569">
                        35.9 kWh
                      </text>
                    </g>

                    {/* Dormitory */}
                    <g transform="translate(450, 300)">
                      <rect
                        x="0"
                        y="0"
                        width="100"
                        height="130"
                        fill="url(#buildingGradient)"
                        stroke="#64748b"
                        strokeWidth="2"
                      />
                      <rect x="0" y="-20" width="100" height="20" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />
                      <text x="50" y="140" fontSize="14" textAnchor="middle" fill="#1e293b" fontWeight="bold">
                        Dormitory
                      </text>
                      <circle cx="50" cy="150" r="8" fill="url(#sensorGlow)">
                        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3.5s" repeatCount="indefinite" />
                      </circle>
                      <text x="50" y="165" fontSize="10" textAnchor="middle" fill="#475569">
                        48.3 kWh
                      </text>
                    </g>

                    {/* Gymnasium */}
                    <g transform="translate(650, 350)">
                      <rect
                        x="0"
                        y="0"
                        width="120"
                        height="80"
                        fill="url(#buildingGradient)"
                        stroke="#64748b"
                        strokeWidth="2"
                      />
                      <polygon points="0,0 60,-30 120,0" fill="url(#roofGradient)" stroke="#64748b" strokeWidth="2" />
                      <text x="60" y="90" fontSize="14" textAnchor="middle" fill="#1e293b" fontWeight="bold">
                        Gymnasium
                      </text>
                      <circle cx="60" cy="100" r="8" fill="url(#sensorGlow)">
                        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="60" y="115" fontSize="10" textAnchor="middle" fill="#475569">
                        72.1 kWh
                      </text>
                    </g>
                  </g>

                  {/* Energy flow visualization */}
                  <g opacity="0.8" filter="url(#glow)">
                    <path
                      d="M400,300 C500,300 500,350 550,350"
                      fill="none"
                      stroke="url(#energyGradient)"
                      strokeWidth="3"
                      strokeDasharray="5,3"
                    >
                      <animate attributeName="stroke-dashoffset" values="8;0" dur="2s" repeatCount="indefinite" />
                    </path>
                    <path
                      d="M400,280 C300,280 300,320 210,320"
                      fill="none"
                      stroke="url(#energyGradient)"
                      strokeWidth="3"
                      strokeDasharray="5,3"
                    >
                      <animate attributeName="stroke-dashoffset" values="8;0" dur="2s" repeatCount="indefinite" />
                    </path>
                    <path
                      d="M400,260 C550,260 550,250 625,250"
                      fill="none"
                      stroke="url(#energyGradient)"
                      strokeWidth="3"
                      strokeDasharray="5,3"
                    >
                      <animate attributeName="stroke-dashoffset" values="8;0" dur="2s" repeatCount="indefinite" />
                    </path>
                    <path
                      d="M400,240 C500,240 500,365 710,365"
                      fill="none"
                      stroke="url(#energyGradient)"
                      strokeWidth="3"
                      strokeDasharray="5,3"
                    >
                      <animate attributeName="stroke-dashoffset" values="8;0" dur="2s" repeatCount="indefinite" />
                    </path>
                  </g>

                  {/* Legend */}
                  <g transform="translate(50, 50)">
                    <rect
                      x="0"
                      y="0"
                      width="180"
                      height="100"
                      rx="5"
                      fill="white"
                      fillOpacity="0.8"
                      stroke="#64748b"
                      strokeWidth="1"
                    />
                    <text x="90" y="20" fontSize="14" textAnchor="middle" fill="#0f172a" fontWeight="bold">
                      Energy Monitoring Legend
                    </text>

                    <circle cx="20" cy="40" r="5" fill="#22c55e" />
                    <text x="30" y="44" fontSize="12" fill="#0f172a" textAnchor="start">
                      Efficient (&lt; 40 kWh)
                    </text>

                    <circle cx="20" cy="60" r="5" fill="#f59e0b" />
                    <text x="30" y="64" fontSize="12" fill="#0f172a" textAnchor="start">
                      Moderate (40-60 kWh)
                    </text>

                    <circle cx="20" cy="80" r="5" fill="#ef4444" />
                    <text x="30" y="84" fontSize="12" fill="#0f172a" textAnchor="start">
                      High Usage (&gt; 60 kWh)
                    </text>
                  </g>

                  {/* Campus Energy Dashboard */}
                  <g transform="translate(600, 50)">
                    <rect
                      x="0"
                      y="0"
                      width="160"
                      height="140"
                      rx="5"
                      fill="white"
                      fillOpacity="0.8"
                      stroke="#64748b"
                      strokeWidth="1"
                    />
                    <text x="80" y="20" fontSize="12" textAnchor="middle" fill="#0f172a" fontWeight="bold">
                      Campus Energy Dashboard
                    </text>

                    <rect
                      x="10"
                      y="30"
                      width="140"
                      height="10"
                      rx="2"
                      fill="#f1f5f9"
                      stroke="#cbd5e1"
                      strokeWidth="1"
                    />
                    <rect x="10" y="30" width="84" height="10" rx="2" fill="#f59e0b" />
                    <text x="80" y="38" fontSize="8" textAnchor="middle" fill="#0f172a">
                      Main Hall: 84% of Benchmark
                    </text>

                    <rect
                      x="10"
                      y="50"
                      width="140"
                      height="10"
                      rx="2"
                      fill="#f1f5f9"
                      stroke="#cbd5e1"
                      strokeWidth="1"
                    />
                    <rect x="10" y="50" width="112" height="10" rx="2" fill="#ef4444" />
                    <text x="80" y="58" fontSize="8" textAnchor="middle" fill="#0f172a">
                      Science Building: 112% of Benchmark
                    </text>

                    <rect
                      x="10"
                      y="70"
                      width="140"
                      height="10"
                      rx="2"
                      fill="#f1f5f9"
                      stroke="#cbd5e1"
                      strokeWidth="1"
                    />
                    <rect x="10" y="70" width="72" height="10" rx="2" fill="#22c55e" />
                    <text x="80" y="78" fontSize="8" textAnchor="middle" fill="#0f172a">
                      Library: 72% of Benchmark
                    </text>

                    <rect
                      x="10"
                      y="90"
                      width="140"
                      height="10"
                      rx="2"
                      fill="#f1f5f9"
                      stroke="#cbd5e1"
                      strokeWidth="1"
                    />
                    <rect x="10" y="90" width="95" height="10" rx="2" fill="#f59e0b" />
                    <text x="80" y="98" fontSize="8" textAnchor="middle" fill="#0f172a">
                      Dormitory: 95% of Benchmark
                    </text>

                    <rect
                      x="10"
                      y="110"
                      width="140"
                      height="10"
                      rx="2"
                      fill="#f1f5f9"
                      stroke="#cbd5e1"
                      strokeWidth="1"
                    />
                    <rect x="10" y="110" width="125" height="10" rx="2" fill="#ef4444" />
                    <text x="80" y="118" fontSize="8" textAnchor="middle" fill="#0f172a">
                      Gymnasium: 125% of Benchmark
                    </text>

                    <rect
                      x="10"
                      y="130"
                      width="140"
                      height="10"
                      rx="2"
                      fill="#f1f5f9"
                      stroke="#cbd5e1"
                      strokeWidth="1"
                    />
                    <rect x="10" y="130" width="98" height="10" rx="2" fill="#f59e0b" />
                    <text x="80" y="138" fontSize="8" textAnchor="middle" fill="#0f172a">
                      Campus Total: 98% of Benchmark
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
            How Wattif Transforms Educational Building Energy Management
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Visibility Across Campus</h3>
                <p className="text-slate-600">
                  Monitor energy consumption across multiple buildings with different functions to identify priority
                  areas for improvement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Occupancy-Based Optimization</h3>
                <p className="text-slate-600">
                  Align energy use with actual space utilization based on class schedules, events, and seasonal patterns
                  to eliminate waste.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Aging Infrastructure Detection</h3>
                <p className="text-slate-600">
                  Identify inefficient HVAC, lighting, and control systems that need upgrading, with ROI calculations to
                  support capital improvement requests.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Deferred Maintenance Planning</h3>
                <p className="text-slate-600">
                  Use energy performance data to prioritize maintenance investments for maximum operational and
                  financial impact.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Living Laboratory</h3>
                <p className="text-slate-600">
                  Turn your energy data into educational opportunities by integrating real-world energy management into
                  curriculum and research.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Sustainability Reporting</h3>
                <p className="text-slate-600">
                  Generate accurate data for sustainability commitments, climate action plans, and stakeholder
                  reporting.
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
        <h3 className="mb-4 text-xl font-medium text-slate-900">State University System</h3>
        <p className="mb-4 text-slate-600">
          A state university system deployed Wattif across 5 campuses and 120 buildings, discovering that science
          buildings were consuming 35% more energy than necessary due to overcooling and equipment running 24/7.
        </p>
        <p className="mb-4 text-slate-600">
          By implementing targeted retrofits and schedule changes, they reduced annual energy costs by $1.2
          million while improving classroom comfort and research environment stability.
        </p>
        <p className="text-slate-600">
          The university also integrated the energy monitoring system into their engineering and environmental
          science curriculum, giving students hands-on experience with real-world energy management data.
        </p>
        <div className="mt-6 flex justify-center">
          <Button asChild className="bg-coral-500 hover:bg-coral-600">
            <Link href="/case-studies/state-university-system">
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
            <h2 className="mb-6 text-3xl font-bold">Ready to Optimize Your Educational Facilities?</h2>
            <p className="mb-8 text-lg text-slate-300">
              Discover how Wattif can help your institution reduce energy costs, improve facility performance, and
              support your sustainability mission.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-coral-500 hover:bg-coral-600">
                <Link href="/contact">Request a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-300 hover:text-white hover:bg-slate-700 text-black">
                <Link href="/solutions/enterprise">Learn About Wattif Enterprise</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
