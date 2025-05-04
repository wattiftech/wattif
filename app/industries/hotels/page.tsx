import Link from "next/link"
import { CheckCircle2, Hotel } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"

export default function HotelsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <PageHeader
        title="Hotel Energy Intelligence"
        description="Balance guest comfort with energy efficiency across your entire property"
        icon={<Hotel className="h-12 w-12 text-coral-500" />}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">The Hotel Energy Challenge</h2>
              <p className="mb-4 text-lg text-slate-600">
                Hotels face a unique energy balancing act: maintaining guest comfort while controlling costs and meeting
                sustainability goals.
              </p>
              <p className="mb-4 text-lg text-slate-600">
                Energy is typically the second highest operating cost for hotels after labor, with HVAC, lighting, hot
                water, and amenities consuming massive amounts of power 24/7.
              </p>
              <p className="text-lg text-slate-600">
                Without circuit-level monitoring, it's impossible to know which systems are wasting energy, how
                occupancy affects consumption, or where to prioritize efficiency investments.
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
                    <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
                    </linearGradient>
                    <radialGradient id="sensorGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                    </radialGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.2" />
                    </filter>
                  </defs>

                  {/* Sky and ground */}
                  <rect x="0" y="0" width="800" height="600" fill="url(#skyGradient)" />
                  <rect x="0" y="450" width="800" height="150" fill="url(#floorGradient)" />

                  {/* Hotel Building */}
                  <g filter="url(#shadow)">
                    {/* Main structure */}
                    <rect
                      x="150"
                      y="100"
                      width="500"
                      height="350"
                      fill="url(#buildingGradient)"
                      stroke="#64748b"
                      strokeWidth="2"
                    />

                    {/* Roof */}
                    <rect x="130" y="80" width="540" height="30" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />

                    {/* Hotel entrance */}
                    <rect
                      x="350"
                      y="380"
                      width="100"
                      height="70"
                      rx="3"
                      fill="#94a3b8"
                      stroke="#64748b"
                      strokeWidth="2"
                    />
                    <rect
                      x="370"
                      y="380"
                      width="60"
                      height="50"
                      rx="2"
                      fill="#bfdbfe"
                      stroke="#64748b"
                      strokeWidth="1"
                    />
                    <rect x="395" y="430" width="10" height="20" fill="#64748b" />
                    <text x="400" y="465" fontSize="12" textAnchor="middle" fill="#1e293b" fontWeight="bold">
                      Main Entrance
                    </text>

                    {/* Hotel sign */}
                    <rect
                      x="320"
                      y="50"
                      width="160"
                      height="40"
                      rx="5"
                      fill="#0ea5e9"
                      stroke="#0284c7"
                      strokeWidth="2"
                    />
                    <text x="400" y="75" fontSize="20" textAnchor="middle" fill="white" fontWeight="bold">
                      LUXURY HOTEL
                    </text>

                    {/* Windows - rows of hotel rooms */}
                    {[0, 1, 2, 3, 4].map((floor) => (
                      <g key={floor}>
                        {[0, 1, 2, 3, 4, 5, 6, 7].map((room) => (
                          <g key={`${floor}-${room}`} transform={`translate(${170 + room * 60}, ${140 + floor * 60})`}>
                            <rect width="40" height="40" rx="2" fill="#bfdbfe" stroke="#64748b" strokeWidth="1" />
                            <rect width="40" height="20" rx="2" fill="#dbeafe" stroke="none" />
                            <rect x="12" y="30" width="16" height="10" fill="#94a3b8" />

                            {/* Room status indicator */}
                            <circle
                              cx="35"
                              cy="5"
                              r="3"
                              fill={
                                room % 3 === 0
                                  ? "#22c55e"
                                  : // Green - energy efficient
                                    room % 3 === 1
                                    ? "#f59e0b"
                                    : // Yellow - moderate usage
                                      "#ef4444" // Red - high usage
                              }
                            >
                              <animate
                                attributeName="opacity"
                                values="1;0.3;1"
                                dur={`${1 + (room % 3)}s`}
                                repeatCount="indefinite"
                              />
                            </circle>
                          </g>
                        ))}
                      </g>
                    ))}
                  </g>

                  {/* Energy monitoring systems */}
                  <g opacity="0.8" filter="url(#glow)">
                    {/* Energy flow lines between rooms and systems */}
                    {[0, 1, 2, 3, 4].map((floor) => (
                      <g key={`flow-${floor}`}>
                        <path
                          d={`M650,${150 + floor * 60} C700,${150 + floor * 60} 700,400 720,400`}
                          fill="none"
                          stroke="url(#energyGradient)"
                          strokeWidth="2"
                          strokeDasharray="5,3"
                        >
                          <animate attributeName="stroke-dashoffset" values="8;0" dur="2s" repeatCount="indefinite" />
                        </path>
                      </g>
                    ))}
                  </g>

                  {/* Building systems */}
                  <g transform="translate(700, 380)">
                    <rect x="0" y="0" width="80" height="80" rx="5" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />
                    <text x="40" y="30" fontSize="12" textAnchor="middle" fill="#1e293b" fontWeight="bold">
                      Energy
                    </text>
                    <text x="40" y="50" fontSize="12" textAnchor="middle" fill="#1e293b" fontWeight="bold">
                      Management
                    </text>
                    <text x="40" y="70" fontSize="12" textAnchor="middle" fill="#1e293b" fontWeight="bold">
                      System
                    </text>
                    <circle cx="40" cy="90" r="8" fill="url(#sensorGlow)">
                      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" />
                    </circle>
                  </g>

                  {/* Building systems - HVAC */}
                  <g transform="translate(100, 200)">
                    <rect x="0" y="0" width="60" height="60" rx="3" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />
                    <text x="30" y="35" fontSize="12" textAnchor="middle" fill="#1e293b" fontWeight="bold">
                      HVAC
                    </text>
                    <circle cx="30" cy="70" r="8" fill="url(#sensorGlow)">
                      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                  </g>

                  {/* Building systems - Pool/Spa */}
                  <g transform="translate(80, 300)">
                    <rect
                      x="0"
                      y="0"
                      width="80"
                      height="40"
                      rx="3"
                      fill="#0ea5e9"
                      stroke="#0284c7"
                      strokeWidth="2"
                      opacity="0.7"
                    />
                    <text x="40" y="25" fontSize="12" textAnchor="middle" fill="white" fontWeight="bold">
                      Pool & Spa
                    </text>
                    <circle cx="40" cy="50" r="8" fill="url(#sensorGlow)">
                      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite" />
                    </circle>
                  </g>

                  {/* Building systems - Restaurant */}
                  <g transform="translate(40, 370)">
                    <rect x="0" y="0" width="90" height="40" rx="3" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />
                    <text x="45" y="25" fontSize="12" textAnchor="middle" fill="#1e293b" fontWeight="bold">
                      Restaurant
                    </text>
                    <circle cx="45" cy="50" r="8" fill="url(#sensorGlow)">
                      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3.5s" repeatCount="indefinite" />
                    </circle>
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
                      Efficient
                    </text>

                    <circle cx="20" cy="60" r="5" fill="#f59e0b" />
                    <text x="30" y="64" fontSize="12" fill="#0f172a" textAnchor="start">
                      Moderate Usage
                    </text>

                    <circle cx="20" cy="80" r="5" fill="#ef4444" />
                    <text x="30" y="84" fontSize="12" fill="#0f172a" textAnchor="start">
                      High Usage
                    </text>
                  </g>

                  {/* Dashboard */}
                  <g transform="translate(590, 50)">
                    <rect
                      x="0"
                      y="0"
                      width="160"
                      height="120"
                      rx="5"
                      fill="white"
                      fillOpacity="0.8"
                      stroke="#64748b"
                      strokeWidth="1"
                    />
                    <text x="80" y="20" fontSize="12" textAnchor="middle" fill="#0f172a" fontWeight="bold">
                      Hotel Energy Dashboard
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
                    <rect x="10" y="30" width="70" height="10" rx="2" fill="#22c55e" />
                    <text x="80" y="38" fontSize="8" textAnchor="middle" fill="#0f172a">
                      Guest Rooms: 50% Occupied, 70% Efficient
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
                    <rect x="10" y="50" width="110" height="10" rx="2" fill="#ef4444" />
                    <text x="80" y="58" fontSize="8" textAnchor="middle" fill="#0f172a">
                      Pool & Spa: 110% Above Baseline
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
                    <rect x="10" y="70" width="90" height="10" rx="2" fill="#f59e0b" />
                    <text x="80" y="78" fontSize="8" textAnchor="middle" fill="#0f172a">
                      Restaurant: 90% of Daily Allocation
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
                    <rect x="10" y="90" width="60" height="10" rx="2" fill="#22c55e" />
                    <text x="80" y="98" fontSize="8" textAnchor="middle" fill="#0f172a">
                      HVAC: 60% of Capacity
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
                    <rect x="10" y="110" width="80" height="10" rx="2" fill="#f59e0b" />
                    <text x="80" y="118" fontSize="8" textAnchor="middle" fill="#0f172a">
                      Total: 80% of Daily Budget
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
            How Wattif Transforms Hotel Energy Management
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Guest Comfort & Energy Balance</h3>
                <p className="text-slate-600">
                  Maintain optimal guest comfort while identifying inefficient or unnecessary energy use in unoccupied
                  spaces.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">High-Consumption Area Tracking</h3>
                <p className="text-slate-600">
                  Identify energy hotspots like pools, spas, restaurants, and event spaces to optimize their operation
                  without affecting guest experience.
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
                  Correlate energy use with occupancy rates to create dynamic energy profiles and automatically adjust
                  systems based on booking schedules.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Peak Demand Management</h3>
                <p className="text-slate-600">
                  Identify contributors to peak demand charges and implement load-shifting strategies to reduce utility
                  costs without impacting guest satisfaction.
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
                  Detect inefficient or failing equipment before it impacts guest experience or causes unexpected
                  downtime.
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
                  Track and report on energy metrics for green certifications, corporate sustainability goals, and
                  guest-facing eco-initiatives.
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
      <h3 className="mb-4 text-xl font-medium text-slate-900">Luxury Resort Chain</h3>
      <p className="mb-4 text-slate-600">
        A luxury resort chain implemented Wattif technology across its portfolio and discovered that its spa
        facilities were consuming 40% more energy than necessary due to equipment running during off-hours.
      </p>
      <p className="mb-4 text-slate-600">
        By adjusting schedules and implementing smart controls, they reduced energy costs by $230,000 annually
        across 12 properties while maintaining their five-star guest experience.
      </p>
      <p className="text-slate-600">
        The detailed energy data also helped them secure green hotel certifications, which they feature
        prominently in their marketing materials, attracting eco-conscious luxury travelers.
      </p>
      <div className="mt-6 flex justify-center">
        <Button asChild className="bg-coral-500 hover:bg-coral-600">
          <Link href="/case-studies/luxury-resort-chain">
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
            <h2 className="mb-6 text-3xl font-bold">Ready to Transform Your Hotel's Energy Management?</h2>
            <p className="mb-8 text-lg text-slate-300">
              Discover how Wattif can help you reduce energy costs while maintaining the exceptional guest experience
              your brand demands.
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
