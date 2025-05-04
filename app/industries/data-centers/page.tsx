import Link from "next/link"
import { CheckCircle2, Server } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"

export default function DataCentersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <PageHeader
        title="Data Center Energy Intelligence"
        description="Balance performance, reliability, and efficiency in mission-critical environments"
        icon={<Server className="h-12 w-12 text-coral-500" />}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">The Data Center Energy Challenge</h2>
              <p className="mb-4 text-lg text-slate-600">
                Data centers face a unique challenge: maintaining 100% uptime while managing enormous energy demands
                that can account for 40% or more of operational costs.
              </p>
              <p className="mb-4 text-lg text-slate-600">
                Traditional monitoring focuses on uptime metrics but provides limited visibility into energy efficiency
                opportunities. Meanwhile, cooling systems often operate at maximum capacity regardless of actual IT
                load, wasting energy and increasing costs.
              </p>
              <p className="text-lg text-slate-600">
                As data center operators face increasing pressure to reduce carbon footprints while maintaining
                reliability, the need for granular energy intelligence has never been greater.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-full overflow-hidden rounded-xl shadow-xl">
                <svg viewBox="0 0 800 600" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Background with gradient */}
                  <defs>
                    <linearGradient id="floorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                    <linearGradient id="rackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#475569" />
                      <stop offset="100%" stopColor="#334155" />
                    </linearGradient>
                    <linearGradient id="serverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#64748b" />
                      <stop offset="100%" stopColor="#475569" />
                    </linearGradient>
                    <linearGradient id="coolingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#bfdbfe" />
                      <stop offset="100%" stopColor="#93c5fd" />
                    </linearGradient>
                    <linearGradient id="energyFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#ef4444" stopOpacity="0.8" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.3" />
                    </filter>
                    <pattern id="gridPattern" width="50" height="50" patternUnits="userSpaceOnUse">
                      <rect width="50" height="50" fill="none" stroke="#334155" strokeWidth="0.5" />
                    </pattern>
                    <radialGradient id="sensorGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Data center floor */}
                  <rect x="0" y="0" width="800" height="600" fill="url(#floorGradient)" />
                  <rect x="0" y="0" width="800" height="600" fill="url(#gridPattern)" />

                  {/* Title and Legend */}
                  <g transform="translate(20, 30)">
                    <text x="0" y="0" fontSize="18" fontWeight="bold" fill="#f8fafc">
                      Data Center Energy Monitoring
                    </text>
                    <text x="0" y="25" fontSize="12" fill="#94a3b8">
                      Real-time energy intelligence for optimal efficiency
                    </text>

                    {/* Legend */}
                    <g transform="translate(0, 40)">
                      <rect x="0" y="0" width="12" height="12" fill="#22c55e" rx="2" />
                      <text x="20" y="10" fontSize="10" fill="#f8fafc">
                        Optimal Energy Usage
                      </text>

                      <rect x="0" y="20" width="12" height="12" fill="#f59e0b" rx="2" />
                      <text x="20" y="30" fontSize="10" fill="#f8fafc">
                        Moderate Energy Usage
                      </text>

                      <rect x="0" y="40" width="12" height="12" fill="#ef4444" rx="2" />
                      <text x="20" y="50" fontSize="10" fill="#f8fafc">
                        High Energy Usage
                      </text>

                      <circle cx="6" cy="70" r="6" fill="none" stroke="#0ea5e9" strokeWidth="1.5">
                        <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="20" y="73" fontSize="10" fill="#f8fafc">
                        Energy Monitoring Sensor
                      </text>
                    </g>
                  </g>

                  {/* Energy Usage Dashboard */}
                  <g transform="translate(600, 30)">
                    <rect x="0" y="0" width="180" height="100" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                    <text x="90" y="20" fontSize="12" textAnchor="middle" fill="#f8fafc" fontWeight="bold">
                      ENERGY DASHBOARD
                    </text>

                    <text x="20" y="40" fontSize="10" fill="#94a3b8">
                      PUE:
                    </text>
                    <text x="50" y="40" fontSize="10" fill="#22c55e" fontWeight="bold">
                      1.2
                    </text>
                    <text x="70" y="40" fontSize="8" fill="#22c55e">
                      (Industry Avg: 1.6)
                    </text>

                    <text x="20" y="60" fontSize="10" fill="#94a3b8">
                      Power Capacity:
                    </text>
                    <rect x="100" y="55" width="60" height="8" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                    <rect x="100" y="55" width="42" height="8" rx="4" fill="#22c55e" />
                    <text x="170" y="60" fontSize="8" fill="#f8fafc">
                      70%
                    </text>

                    <text x="20" y="80" fontSize="10" fill="#94a3b8">
                      Cooling Efficiency:
                    </text>
                    <rect x="100" y="75" width="60" height="8" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                    <rect x="100" y="75" width="48" height="8" rx="4" fill="#f59e0b" />
                    <text x="170" y="80" fontSize="8" fill="#f8fafc">
                      80%
                    </text>
                  </g>

                  {/* Data center room */}
                  <rect
                    x="100"
                    y="100"
                    width="600"
                    height="400"
                    rx="5"
                    fill="#1e293b"
                    stroke="#334155"
                    strokeWidth="2"
                  />

                  {/* Server racks with detailed servers */}
                  <g filter="url(#shadow)">
                    {/* Row 1 */}
                    <g transform="translate(150, 150)">
                      {/* Rack 1 */}
                      <rect
                        x="0"
                        y="0"
                        width="80"
                        height="250"
                        rx="2"
                        fill="url(#rackGradient)"
                        stroke="#334155"
                        strokeWidth="1"
                      />
                      <text x="40" y="-10" fontSize="10" textAnchor="middle" fill="#f8fafc">
                        RACK 1 - 4.2 kW
                      </text>

                      {/* Servers */}
                      <rect
                        x="5"
                        y="10"
                        width="70"
                        height="20"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="15" width="5" height="10" fill="#22c55e" />
                      <rect x="20" y="15" width="40" height="10" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="20" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="22" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        320W
                      </text>

                      <rect
                        x="5"
                        y="40"
                        width="70"
                        height="20"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="45" width="5" height="10" fill="#f59e0b" />
                      <rect x="20" y="45" width="40" height="10" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="50" r="2" fill="#f59e0b">
                        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="52" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        480W
                      </text>

                      <rect
                        x="5"
                        y="70"
                        width="70"
                        height="20"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="75" width="5" height="10" fill="#22c55e" />
                      <rect x="20" y="75" width="40" height="10" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="80" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="82" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        350W
                      </text>

                      <rect
                        x="5"
                        y="100"
                        width="70"
                        height="20"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="105" width="5" height="10" fill="#22c55e" />
                      <rect x="20" y="105" width="40" height="10" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="110" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="112" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        290W
                      </text>

                      <rect
                        x="5"
                        y="130"
                        width="70"
                        height="20"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="135" width="5" height="10" fill="#ef4444" />
                      <rect x="20" y="135" width="40" height="10" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="140" r="2" fill="#ef4444">
                        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="142" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        720W
                      </text>

                      <rect
                        x="5"
                        y="160"
                        width="70"
                        height="20"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="165" width="5" height="10" fill="#22c55e" />
                      <rect x="20" y="165" width="40" height="10" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="170" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="172" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        310W
                      </text>

                      <rect
                        x="5"
                        y="190"
                        width="70"
                        height="20"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="195" width="5" height="10" fill="#22c55e" />
                      <rect x="20" y="195" width="40" height="10" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="200" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="202" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        340W
                      </text>

                      <rect
                        x="5"
                        y="220"
                        width="70"
                        height="20"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="225" width="5" height="10" fill="#f59e0b" />
                      <rect x="20" y="225" width="40" height="10" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="230" r="2" fill="#f59e0b">
                        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="232" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        450W
                      </text>

                      <text x="40" y="270" fontSize="10" textAnchor="middle" fill="#f8fafc" fontWeight="bold">
                        Web Servers
                      </text>
                    </g>

                    {/* Rack 2 */}
                    <g transform="translate(250, 150)">
                      <rect
                        x="0"
                        y="0"
                        width="80"
                        height="250"
                        rx="2"
                        fill="url(#rackGradient)"
                        stroke="#334155"
                        strokeWidth="1"
                      />
                      <text x="40" y="-10" fontSize="10" textAnchor="middle" fill="#f8fafc">
                        RACK 2 - 5.8 kW
                      </text>

                      {/* Servers */}
                      <rect
                        x="5"
                        y="10"
                        width="70"
                        height="20"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="15" width="5" height="10" fill="#22c55e" />
                      <rect x="20" y="15" width="40" height="10" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="20" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="22" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        380W
                      </text>

                      <rect
                        x="5"
                        y="40"
                        width="70"
                        height="20"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="45" width="5" height="10" fill="#22c55e" />
                      <rect x="20" y="45" width="40" height="10" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="50" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="52" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        360W
                      </text>

                      <rect
                        x="5"
                        y="70"
                        width="70"
                        height="40"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="75" width="5" height="30" fill="#ef4444" />
                      <rect x="20" y="75" width="40" height="30" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="90" r="2" fill="#ef4444">
                        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="92" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        1.2kW
                      </text>

                      <rect
                        x="5"
                        y="120"
                        width="70"
                        height="20"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="125" width="5" height="10" fill="#22c55e" />
                      <rect x="20" y="125" width="40" height="10" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="130" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="132" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        340W
                      </text>

                      <rect
                        x="5"
                        y="150"
                        width="70"
                        height="20"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="155" width="5" height="10" fill="#22c55e" />
                      <rect x="20" y="155" width="40" height="10" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="160" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="162" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        320W
                      </text>

                      <rect
                        x="5"
                        y="180"
                        width="70"
                        height="60"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="185" width="5" height="50" fill="#f59e0b" />
                      <rect x="20" y="185" width="40" height="50" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="210" r="2" fill="#f59e0b">
                        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="212" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        780W
                      </text>

                      <text x="40" y="270" fontSize="10" textAnchor="middle" fill="#f8fafc" fontWeight="bold">
                        Database Servers
                      </text>
                    </g>

                    {/* Rack 3 */}
                    <g transform="translate(350, 150)">
                      <rect
                        x="0"
                        y="0"
                        width="80"
                        height="250"
                        rx="2"
                        fill="url(#rackGradient)"
                        stroke="#334155"
                        strokeWidth="1"
                      />
                      <text x="40" y="-10" fontSize="10" textAnchor="middle" fill="#f8fafc">
                        RACK 3 - 3.9 kW
                      </text>

                      {/* Network equipment */}
                      <rect
                        x="5"
                        y="10"
                        width="70"
                        height="60"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <text x="40" y="40" fontSize="10" textAnchor="middle" fill="#f8fafc">
                        NETWORK
                      </text>
                      <text x="40" y="55" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        840W
                      </text>
                      <circle cx="15" cy="25" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="15" cy="35" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="0.7s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="15" cy="45" r="2" fill="#f59e0b">
                        <animate attributeName="opacity" values="1;0.3;1" dur="0.3s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="15" cy="55" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="0.6s" repeatCount="indefinite" />
                      </circle>

                      {/* Servers */}
                      <rect
                        x="5"
                        y="80"
                        width="70"
                        height="20"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="85" width="5" height="10" fill="#22c55e" />
                      <rect x="20" y="85" width="40" height="10" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="90" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="92" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        280W
                      </text>

                      <rect
                        x="5"
                        y="110"
                        width="70"
                        height="20"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="115" width="5" height="10" fill="#22c55e" />
                      <rect x="20" y="115" width="40" height="10" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="120" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="122" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        310W
                      </text>

                      <rect
                        x="5"
                        y="140"
                        width="70"
                        height="20"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="145" width="5" height="10" fill="#22c55e" />
                      <rect x="20" y="145" width="40" height="10" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="150" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="152" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        290W
                      </text>

                      <rect
                        x="5"
                        y="170"
                        width="70"
                        height="20"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="175" width="5" height="10" fill="#ef4444" />
                      <rect x="20" y="175" width="40" height="10" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="180" r="2" fill="#ef4444">
                        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="182" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        680W
                      </text>

                      <rect
                        x="5"
                        y="200"
                        width="70"
                        height="40"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="205" width="5" height="30" fill="#22c55e" />
                      <rect x="20" y="205" width="40" height="30" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="220" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="222" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        420W
                      </text>

                      <text x="40" y="270" fontSize="10" textAnchor="middle" fill="#f8fafc" fontWeight="bold">
                        Network & Security
                      </text>
                    </g>

                    {/* Row 2 */}
                    <g transform="translate(470, 150)">
                      {/* Rack 4 */}
                      <rect
                        x="0"
                        y="0"
                        width="80"
                        height="250"
                        rx="2"
                        fill="url(#rackGradient)"
                        stroke="#334155"
                        strokeWidth="1"
                      />
                      <text x="40" y="-10" fontSize="10" textAnchor="middle" fill="#f8fafc">
                        RACK 4 - 6.2 kW
                      </text>

                      {/* Servers */}
                      <rect
                        x="5"
                        y="10"
                        width="70"
                        height="40"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="15" width="5" height="30" fill="#22c55e" />
                      <rect x="20" y="15" width="40" height="30" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="30" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="32" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        520W
                      </text>

                      <rect
                        x="5"
                        y="60"
                        width="70"
                        height="40"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="65" width="5" height="30" fill="#f59e0b" />
                      <rect x="20" y="65" width="40" height="30" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="80" r="2" fill="#f59e0b">
                        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="82" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        780W
                      </text>

                      <rect
                        x="5"
                        y="110"
                        width="70"
                        height="40"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="115" width="5" height="30" fill="#22c55e" />
                      <rect x="20" y="115" width="40" height="30" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="130" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="132" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        540W
                      </text>

                      <rect
                        x="5"
                        y="160"
                        width="70"
                        height="80"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="165" width="5" height="70" fill="#22c55e" />
                      <rect x="20" y="165" width="40" height="70" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="200" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="202" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        920W
                      </text>

                      <text x="40" y="270" fontSize="10" textAnchor="middle" fill="#f8fafc" fontWeight="bold">
                        Compute Servers
                      </text>
                    </g>

                    {/* Rack 5 */}
                    <g transform="translate(570, 150)">
                      <rect
                        x="0"
                        y="0"
                        width="80"
                        height="250"
                        rx="2"
                        fill="url(#rackGradient)"
                        stroke="#334155"
                        strokeWidth="1"
                      />
                      <text x="40" y="-10" fontSize="10" textAnchor="middle" fill="#f8fafc">
                        RACK 5 - 7.4 kW
                      </text>

                      {/* Storage arrays */}
                      <rect
                        x="5"
                        y="10"
                        width="70"
                        height="80"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <text x="40" y="50" fontSize="10" textAnchor="middle" fill="#f8fafc">
                        STORAGE
                      </text>
                      <text x="40" y="65" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        2.4kW
                      </text>
                      <circle cx="15" cy="30" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="15" cy="40" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="15" cy="50" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="15" cy="60" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="15" cy="70" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>

                      {/* Servers */}
                      <rect
                        x="5"
                        y="100"
                        width="70"
                        height="20"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="105" width="5" height="10" fill="#22c55e" />
                      <rect x="20" y="105" width="40" height="10" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="110" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="112" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        380W
                      </text>

                      <rect
                        x="5"
                        y="130"
                        width="70"
                        height="20"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="135" width="5" height="10" fill="#22c55e" />
                      <rect x="20" y="135" width="40" height="10" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="140" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="142" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        410W
                      </text>

                      <rect
                        x="5"
                        y="160"
                        width="70"
                        height="20"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="165" width="5" height="10" fill="#f59e0b" />
                      <rect x="20" y="165" width="40" height="10" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="170" r="2" fill="#f59e0b">
                        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="172" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        520W
                      </text>

                      <rect
                        x="5"
                        y="190"
                        width="70"
                        height="50"
                        rx="1"
                        fill="url(#serverGradient)"
                        stroke="#334155"
                        strokeWidth="0.5"
                      />
                      <rect x="10" y="195" width="5" height="40" fill="#22c55e" />
                      <rect x="20" y="195" width="40" height="40" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                      <circle cx="70" cy="215" r="2" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="35" y="217" fontSize="6" textAnchor="middle" fill="#f8fafc">
                        680W
                      </text>

                      <text x="40" y="270" fontSize="10" textAnchor="middle" fill="#f8fafc" fontWeight="bold">
                        Storage Arrays
                      </text>
                    </g>
                  </g>

                  {/* CRAC Units */}
                  <g filter="url(#shadow)">
                    {/* CRAC 1 */}
                    <g transform="translate(120, 420)">
                      <rect
                        x="0"
                        y="0"
                        width="100"
                        height="60"
                        rx="3"
                        fill="url(#coolingGradient)"
                        stroke="#334155"
                        strokeWidth="1"
                      />
                      <text x="50" y="25" fontSize="14" textAnchor="middle" fill="#1e293b" fontWeight="bold">
                        CRAC 1
                      </text>
                      <text x="50" y="45" fontSize="10" textAnchor="middle" fill="#1e293b">
                        8.2 kW - 22°C
                      </text>

                      {/* Cool air flow */}
                      <path
                        d="M50,0 Q50,-20 100,-20 Q150,-20 150,50 Q150,120 400,120"
                        fill="none"
                        stroke="#bfdbfe"
                        strokeWidth="2"
                        strokeDasharray="5,3"
                        filter="url(#glow)"
                      >
                        <animate attributeName="stroke-dashoffset" values="8;0" dur="3s" repeatCount="indefinite" />
                      </path>

                      {/* Energy monitoring indicator */}
                      <circle cx="90" cy="10" r="4" fill="#0ea5e9">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </g>

                    {/* CRAC 2 */}
                    <g transform="translate(580, 420)">
                      <rect
                        x="0"
                        y="0"
                        width="100"
                        height="60"
                        rx="3"
                        fill="url(#coolingGradient)"
                        stroke="#334155"
                        strokeWidth="1"
                      />
                      <text x="50" y="25" fontSize="14" textAnchor="middle" fill="#1e293b" fontWeight="bold">
                        CRAC 2
                      </text>
                      <text x="50" y="45" fontSize="10" textAnchor="middle" fill="#1e293b">
                        7.8 kW - 21°C
                      </text>

                      {/* Cool air flow */}
                      <path
                        d="M50,0 Q50,-20 0,-20 Q-50,-20 -50,50 Q-50,120 -300,120"
                        fill="none"
                        stroke="#bfdbfe"
                        strokeWidth="2"
                        strokeDasharray="5,3"
                        filter="url(#glow)"
                      >
                        <animate attributeName="stroke-dashoffset" values="8;0" dur="3s" repeatCount="indefinite" />
                      </path>

                      {/* Energy monitoring indicator */}
                      <circle cx="10" cy="10" r="4" fill="#0ea5e9">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </g>
                  </g>

                  {/* UPS Systems */}
                  <g filter="url(#shadow)">
                    <g transform="translate(250, 430)">
                      <rect x="0" y="0" width="80" height="50" rx="3" fill="#64748b" stroke="#334155" strokeWidth="1" />
                      <rect x="5" y="5" width="70" height="40" rx="2" fill="#475569" stroke="#334155" strokeWidth="1" />
                      <text x="40" y="20" fontSize="12" textAnchor="middle" fill="#f8fafc" fontWeight="bold">
                        UPS 1
                      </text>
                      <text x="40" y="35" fontSize="8" textAnchor="middle" fill="#f8fafc">
                        94% Efficiency
                      </text>

                      {/* Battery status indicators */}
                      <rect x="10" y="10" width="10" height="5" fill="#22c55e" />
                      <rect x="10" y="20" width="10" height="5" fill="#22c55e" />
                      <rect x="10" y="30" width="10" height="5" fill="#22c55e" />

                      {/* Energy monitoring indicator */}
                      <circle cx="70" cy="10" r="4" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </g>

                    <g transform="translate(470, 430)">
                      <rect x="0" y="0" width="80" height="50" rx="3" fill="#64748b" stroke="#334155" strokeWidth="1" />
                      <rect x="5" y="5" width="70" height="40" rx="2" fill="#475569" stroke="#334155" strokeWidth="1" />
                      <text x="40" y="20" fontSize="12" textAnchor="middle" fill="#f8fafc" fontWeight="bold">
                        UPS 2
                      </text>
                      <text x="40" y="35" fontSize="8" textAnchor="middle" fill="#f8fafc">
                        91% Efficiency
                      </text>

                      {/* Battery status indicators */}
                      <rect x="10" y="10" width="10" height="5" fill="#22c55e" />
                      <rect x="10" y="20" width="10" height="5" fill="#22c55e" />
                      <rect x="10" y="30" width="10" height="5" fill="#f59e0b" />

                      {/* Energy monitoring indicator */}
                      <circle cx="70" cy="10" r="4" fill="#f59e0b">
                        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="r" values="3;4;3" dur="1.5s" repeatCount="indefinite" />
                      </circle>
                    </g>
                  </g>

                  {/* PDUs */}
                  <g filter="url(#shadow)">
                    <g transform="translate(150, 120)">
                      <rect
                        x="0"
                        y="0"
                        width="20"
                        height="300"
                        rx="2"
                        fill="#64748b"
                        stroke="#334155"
                        strokeWidth="1"
                      />
                      <text
                        x="10"
                        y="150"
                        fontSize="14"
                        textAnchor="middle"
                        fill="#f8fafc"
                        fontWeight="bold"
                        transform="rotate(90, 10, 150)"
                      >
                        PDU 1
                      </text>

                      {/* Outlet indicators */}
                      <circle cx="10" cy="30" r="3" fill="#22c55e" />
                      <circle cx="10" cy="60" r="3" fill="#22c55e" />
                      <circle cx="10" cy="90" r="3" fill="#22c55e" />
                      <circle cx="10" cy="120" r="3" fill="#f59e0b" />
                      <circle cx="10" cy="150" r="3" fill="#22c55e" />
                      <circle cx="10" cy="180" r="3" fill="#22c55e" />
                      <circle cx="10" cy="210" r="3" fill="#ef4444">
                        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="10" cy="240" r="3" fill="#22c55e" />
                      <circle cx="10" cy="270" r="3" fill="#22c55e" />
                    </g>

                    <g transform="translate(630, 120)">
                      <rect
                        x="0"
                        y="0"
                        width="20"
                        height="300"
                        rx="2"
                        fill="#64748b"
                        stroke="#334155"
                        strokeWidth="1"
                      />
                      <text
                        x="10"
                        y="150"
                        fontSize="14"
                        textAnchor="middle"
                        fill="#f8fafc"
                        fontWeight="bold"
                        transform="rotate(90, 10, 150)"
                      >
                        PDU 2
                      </text>

                      {/* Outlet indicators */}
                      <circle cx="10" cy="30" r="3" fill="#22c55e" />
                      <circle cx="10" cy="60" r="3" fill="#22c55e" />
                      <circle cx="10" cy="90" r="3" fill="#22c55e" />
                      <circle cx="10" cy="120" r="3" fill="#22c55e" />
                      <circle cx="10" cy="150" r="3" fill="#f59e0b" />
                      <circle cx="10" cy="180" r="3" fill="#22c55e" />
                      <circle cx="10" cy="210" r="3" fill="#22c55e" />
                      <circle cx="10" cy="240" r="3" fill="#22c55e" />
                      <circle cx="10" cy="270" r="3" fill="#22c55e" />
                    </g>
                  </g>

                  {/* Data Hall Lighting */}
                  <g filter="url(#glow)">
                    <circle cx="200" cy="120" r="10" fill="#fef9c3" opacity="0.7">
                      <animate attributeName="opacity" values="0.7;0.5;0.7" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="400" cy="120" r="10" fill="#fef9c3" opacity="0.7">
                      <animate attributeName="opacity" values="0.7;0.5;0.7" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="600" cy="120" r="10" fill="#fef9c3" opacity="0.7">
                      <animate attributeName="opacity" values="0.7;0.5;0.7" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="200" cy="400" r="10" fill="#fef9c3" opacity="0.7">
                      <animate attributeName="opacity" values="0.7;0.5;0.7" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="400" cy="400" r="10" fill="#fef9c3" opacity="0.7">
                      <animate attributeName="opacity" values="0.7;0.5;0.7" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="600" cy="400" r="10" fill="#fef9c3" opacity="0.7">
                      <animate attributeName="opacity" values="0.7;0.5;0.7" dur="4s" repeatCount="indefinite" />
                    </circle>
                  </g>

                  {/* Wattif monitoring system indicators */}
                  <g>
                    <circle cx="190" cy="200" r="5" fill="#f8fafc" stroke="#0ea5e9" strokeWidth="2">
                      <animate attributeName="r" values="5;7;5" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="290" cy="200" r="5" fill="#f8fafc" stroke="#0ea5e9" strokeWidth="2">
                      <animate attributeName="r" values="5;7;5" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="390" cy="200" r="5" fill="#f8fafc" stroke="#0ea5e9" strokeWidth="2">
                      <animate attributeName="r" values="5;7;5" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="510" cy="200" r="5" fill="#f8fafc" stroke="#0ea5e9" strokeWidth="2">
                      <animate attributeName="r" values="5;7;5" dur="3.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="610" cy="200" r="5" fill="#f8fafc" stroke="#0ea5e9" strokeWidth="2">
                      <animate attributeName="r" values="5;7;5" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="170" cy="450" r="5" fill="#f8fafc" stroke="#0ea5e9" strokeWidth="2">
                      <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="510" cy="450" r="5" fill="#f8fafc" stroke="#0ea5e9" strokeWidth="2">
                      <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="630" cy="450" r="5" fill="#f8fafc" stroke="#0ea5e9" strokeWidth="2">
                      <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </g>

                  {/* Energy Flow Visualization */}
                  <g filter="url(#glow)">
                    <path
                      d="M100,520 H700"
                      stroke="url(#energyFlowGradient)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      fill="none"
                    >
                      <animate
                        attributeName="stroke-dasharray"
                        values="5,15;10,10;5,15"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                      <animate attributeName="stroke-dashoffset" values="0;-20" dur="1s" repeatCount="indefinite" />
                    </path>
                    <text x="400" y="540" fontSize="12" textAnchor="middle" fill="#f8fafc" fontWeight="bold">
                      ENERGY FLOW - 27.5 kW TOTAL
                    </text>
                  </g>

                  {/* Efficiency Metrics */}
                  <g transform="translate(20, 520)">
                    <text x="0" y="0" fontSize="12" fill="#f8fafc" fontWeight="bold">
                      Efficiency Metrics:
                    </text>
                    <text x="0" y="20" fontSize="10" fill="#22c55e">
                      ● Optimal: &lt;350W per server
                    </text>
                    <text x="0" y="35" fontSize="10" fill="#f59e0b">
                      ● Moderate: 350-600W per server
                    </text>
                    <text x="0" y="50" fontSize="10" fill="#ef4444">
                      ● High: &gt;600W per server
                    </text>
                  </g>

                  {/* Wattif Branding */}
                  <g transform="translate(650, 560)">
                    <text x="0" y="0" fontSize="14" fill="#f8fafc" fontWeight="bold">
                      Wattif
                    </text>
                    <text x="0" y="15" fontSize="10" fill="#94a3b8">
                      Energy Intelligence
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
            How Wattif Transforms Data Center Energy Management
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Real-Time PUE Monitoring</h3>
                <p className="text-slate-600">
                  Track Power Usage Effectiveness in real-time at both the facility level and for individual data halls,
                  identifying opportunities to improve this critical efficiency metric.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Cooling Optimization</h3>
                <p className="text-slate-600">
                  Identify overcooling, airflow issues, and opportunities to raise temperature setpoints safely,
                  reducing cooling costs without compromising equipment reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">IT Load Correlation</h3>
                <p className="text-slate-600">
                  Correlate energy use with IT workloads to identify the most efficient servers and racks, informing
                  workload placement and hardware refresh decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Power Chain Analysis</h3>
                <p className="text-slate-600">
                  Monitor efficiency across your entire power chain—from utility entry to the rack—identifying losses in
                  UPS systems, PDUs, and power distribution equipment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Capacity Planning</h3>
                <p className="text-slate-600">
                  Use detailed power and cooling data to optimize capacity utilization, deferring capital expenditures
                  by maximizing the use of existing infrastructure.
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
                  Generate accurate carbon emissions data and efficiency metrics for sustainability reporting,
                  supporting corporate ESG goals and customer requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Story section temporarily hidden */}
      {/*
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Success Story</h2>
            <div className="rounded-lg bg-slate-50 p-8 shadow-md">
              <h3 className="mb-4 text-xl font-medium text-slate-900">Regional Colocation Provider</h3>
              <p className="mb-4 text-slate-600">
                A regional colocation provider with 5 data centers implemented Wattif to improve their PUE while
                maintaining their strict reliability standards. The detailed energy data revealed several optimization
                opportunities that had been invisible with their existing monitoring systems.
              </p>
              <p className="mb-4 text-slate-600">
                By implementing targeted cooling adjustments based on Wattif's recommendations, they reduced energy use
                by 22% while actually improving temperature stability in their data halls. The improved PUE (from 1.8 to
                1.4) became a competitive advantage in their sales process, helping them secure contracts with
                sustainability-focused clients. The project paid for itself in just 7 months through energy savings
                alone.
              </p>
              <div className="mt-6 flex justify-center">
                <Button asChild className="bg-coral-500 hover:bg-coral-600">
                  <Link href="/case-studies/data-center">
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
            <h2 className="mb-6 text-3xl font-bold">Ready to Optimize Your Data Center Operations?</h2>
            <p className="mb-8 text-lg text-slate-300">
              Discover how Wattif can help you reduce energy costs, improve PUE, and meet sustainability goals without
              compromising reliability.
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
