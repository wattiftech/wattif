import Link from "next/link"
import { CheckCircle2, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"

export default function MultiSiteRetailPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <PageHeader
        title="Multi-Site Retail Energy Intelligence"
        description="Consistent energy performance across every location in your chain"
        icon={<ShoppingBag className="h-12 w-12 text-coral-500" />}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">The Multi-Site Retail Energy Challenge</h2>
              <p className="mb-4 text-lg text-slate-600">
                Retail chains with dozens or hundreds of locations face unique energy management challenges. Each site
                may have different equipment, operating hours, and local climate conditions, making it difficult to
                establish consistent energy performance standards.
              </p>
              <p className="mb-4 text-lg text-slate-600">
                Store managers are focused on sales and customer service, not energy management. Without automated
                monitoring and alerts, energy waste can continue for months before being detected through utility bills.
              </p>
              <p className="text-lg text-slate-600">
                As energy costs continue to rise and sustainability becomes a competitive advantage, retail chains need
                solutions that can scale across their entire portfolio while requiring minimal attention from store
                staff.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-full overflow-hidden rounded-lg shadow-xl">
                <svg
                  viewBox="0 0 800 600"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  {/* Define gradients and patterns */}
                  <defs>
                    <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#dbeafe" />
                      <stop offset="100%" stopColor="#eff6ff" />
                    </linearGradient>

                    <linearGradient id="groundGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#e2e8f0" />
                      <stop offset="100%" stopColor="#cbd5e1" />
                    </linearGradient>

                    <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f8fafc" />
                      <stop offset="100%" stopColor="#e2e8f0" />
                    </linearGradient>

                    <linearGradient id="roofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#94a3b8" />
                      <stop offset="100%" stopColor="#64748b" />
                    </linearGradient>

                    <linearGradient id="glassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.7" />
                    </linearGradient>

                    <linearGradient id="doorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#475569" />
                      <stop offset="50%" stopColor="#334155" />
                      <stop offset="100%" stopColor="#475569" />
                    </linearGradient>

                    <linearGradient id="signGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f1f5f9" />
                      <stop offset="100%" stopColor="#cbd5e1" />
                    </linearGradient>

                    <linearGradient id="counterGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#64748b" />
                      <stop offset="100%" stopColor="#475569" />
                    </linearGradient>

                    <linearGradient id="hvacGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#64748b" />
                      <stop offset="100%" stopColor="#475569" />
                    </linearGradient>

                    <linearGradient id="refrigerationGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#bfdbfe" />
                      <stop offset="100%" stopColor="#93c5fd" />
                    </linearGradient>

                    <linearGradient id="shelvingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#cbd5e1" />
                      <stop offset="100%" stopColor="#94a3b8" />
                    </linearGradient>

                    <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
                      <feOffset dx="0" dy="4" result="offsetblur" />
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="0.3" />
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>

                    <pattern id="retailGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                    </pattern>
                  </defs>

                  {/* Background */}
                  <rect width="800" height="600" fill="url(#skyGradient)" />

                  {/* Ground/Sidewalk */}
                  <rect x="0" y="450" width="800" height="150" fill="url(#groundGradient)" />
                  <rect x="100" y="450" width="600" height="20" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />

                  {/* Main Retail Building */}
                  <g filter="url(#dropShadow)">
                    <rect
                      x="150"
                      y="150"
                      width="500"
                      height="300"
                      fill="url(#buildingGradient)"
                      stroke="#64748b"
                      strokeWidth="2"
                      rx="4"
                    />

                    {/* Roof */}
                    <rect
                      x="130"
                      y="130"
                      width="540"
                      height="30"
                      fill="url(#roofGradient)"
                      stroke="#64748b"
                      strokeWidth="2"
                      rx="2"
                    />
                  </g>

                  {/* Store Front */}
                  <rect x="150" y="350" width="500" height="100" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />

                  {/* Store Front Glass Windows */}
                  <g>
                    <rect
                      x="170"
                      y="370"
                      width="100"
                      height="60"
                      fill="url(#glassGradient)"
                      stroke="#64748b"
                      strokeWidth="1.5"
                      rx="2"
                    />
                    <rect
                      x="300"
                      y="370"
                      width="200"
                      height="60"
                      fill="url(#glassGradient)"
                      stroke="#64748b"
                      strokeWidth="1.5"
                      rx="2"
                    />
                    <rect
                      x="530"
                      y="370"
                      width="100"
                      height="60"
                      fill="url(#glassGradient)"
                      stroke="#64748b"
                      strokeWidth="1.5"
                      rx="2"
                    />

                    {/* Glass Reflections */}
                    <path d="M175 375 L195 375 L175 395 Z" fill="white" opacity="0.5" />
                    <path d="M310 375 L330 375 L310 395 Z" fill="white" opacity="0.5" />
                    <path d="M535 375 L555 375 L535 395 Z" fill="white" opacity="0.5" />
                  </g>

                  {/* Store Front Door */}
                  <g>
                    <rect
                      x="380"
                      y="400"
                      width="40"
                      height="50"
                      fill="url(#doorGradient)"
                      stroke="#64748b"
                      strokeWidth="1.5"
                      rx="1"
                    />
                    <rect x="395" y="415" width="10" height="20" fill="#94a3b8" opacity="0.8" rx="1" />
                  </g>

                  {/* Store Sign */}
                  <g filter="url(#dropShadow)">
                    <rect
                      x="250"
                      y="170"
                      width="300"
                      height="40"
                      fill="url(#signGradient)"
                      stroke="#64748b"
                      strokeWidth="1.5"
                      rx="4"
                    />
                    <text x="400" y="195" fontSize="18" fill="#1e293b" textAnchor="middle" fontWeight="bold">
                      RETAIL CHAIN
                    </text>
                    <text x="400" y="210" fontSize="10" fill="#475569" textAnchor="middle">
                      Location #327
                    </text>
                  </g>

                  {/* Product Display and Windows */}
                  <g>
                    {/* Product Window 1 */}
                    <rect x="180" y="380" width="80" height="40" fill="#f8fafc" stroke="#64748b" strokeWidth="0.5" />
                    {/* Products */}
                    <rect x="185" y="385" width="15" height="30" fill="#fb923c" rx="2" />
                    <rect x="205" y="385" width="15" height="30" fill="#4ade80" rx="2" />
                    <rect x="225" y="385" width="15" height="30" fill="#60a5fa" rx="2" />
                    <rect x="245" y="385" width="10" height="30" fill="#f43f5e" rx="2" />

                    {/* Product Window 2 */}
                    <rect x="540" y="380" width="80" height="40" fill="#f8fafc" stroke="#64748b" strokeWidth="0.5" />
                    {/* Products */}
                    <rect x="545" y="385" width="15" height="30" fill="#fcd34d" rx="2" />
                    <rect x="565" y="385" width="15" height="30" fill="#a78bfa" rx="2" />
                    <rect x="585" y="385" width="15" height="30" fill="#34d399" rx="2" />
                    <rect x="605" y="385" width="10" height="30" fill="#fb7185" rx="2" />
                  </g>

                  {/* Interior Shelving and Products */}
                  <g>
                    {/* Row 1 */}
                    <rect
                      x="200"
                      y="250"
                      width="100"
                      height="20"
                      fill="url(#shelvingGradient)"
                      stroke="#64748b"
                      strokeWidth="1"
                      rx="1"
                    />
                    <rect
                      x="200"
                      y="280"
                      width="100"
                      height="20"
                      fill="url(#shelvingGradient)"
                      stroke="#64748b"
                      strokeWidth="1"
                      rx="1"
                    />
                    <rect
                      x="200"
                      y="310"
                      width="100"
                      height="20"
                      fill="url(#shelvingGradient)"
                      stroke="#64748b"
                      strokeWidth="1"
                      rx="1"
                    />

                    {/* Row 2 */}
                    <rect
                      x="350"
                      y="250"
                      width="100"
                      height="20"
                      fill="url(#shelvingGradient)"
                      stroke="#64748b"
                      strokeWidth="1"
                      rx="1"
                    />
                    <rect
                      x="350"
                      y="280"
                      width="100"
                      height="20"
                      fill="url(#shelvingGradient)"
                      stroke="#64748b"
                      strokeWidth="1"
                      rx="1"
                    />
                    <rect
                      x="350"
                      y="310"
                      width="100"
                      height="20"
                      fill="url(#shelvingGradient)"
                      stroke="#64748b"
                      strokeWidth="1"
                      rx="1"
                    />

                    {/* Row 3 */}
                    <rect
                      x="500"
                      y="250"
                      width="100"
                      height="20"
                      fill="url(#shelvingGradient)"
                      stroke="#64748b"
                      strokeWidth="1"
                      rx="1"
                    />
                    <rect
                      x="500"
                      y="280"
                      width="100"
                      height="20"
                      fill="url(#shelvingGradient)"
                      stroke="#64748b"
                      strokeWidth="1"
                      rx="1"
                    />
                    <rect
                      x="500"
                      y="310"
                      width="100"
                      height="20"
                      fill="url(#shelvingGradient)"
                      stroke="#64748b"
                      strokeWidth="1"
                      rx="1"
                    />

                    {/* Products on shelves */}
                    <g>
                      {/* Shelf 1 */}
                      <rect x="210" y="240" width="15" height="20" fill="#f97316" opacity="0.9" rx="1" />
                      <rect x="230" y="240" width="15" height="20" fill="#3b82f6" opacity="0.9" rx="1" />
                      <rect x="250" y="240" width="15" height="20" fill="#22c55e" opacity="0.9" rx="1" />
                      <rect x="270" y="240" width="15" height="20" fill="#eab308" opacity="0.9" rx="1" />

                      {/* Shelf 2 */}
                      <rect x="360" y="240" width="15" height="20" fill="#f97316" opacity="0.9" rx="1" />
                      <rect x="380" y="240" width="15" height="20" fill="#3b82f6" opacity="0.9" rx="1" />
                      <rect x="400" y="240" width="15" height="20" fill="#22c55e" opacity="0.9" rx="1" />
                      <rect x="420" y="240" width="15" height="20" fill="#eab308" opacity="0.9" rx="1" />

                      {/* Shelf 3 */}
                      <rect x="510" y="240" width="15" height="20" fill="#f97316" opacity="0.9" rx="1" />
                      <rect x="530" y="240" width="15" height="20" fill="#3b82f6" opacity="0.9" rx="1" />
                      <rect x="550" y="240" width="15" height="20" fill="#22c55e" opacity="0.9" rx="1" />
                      <rect x="570" y="240" width="15" height="20" fill="#eab308" opacity="0.9" rx="1" />
                    </g>
                  </g>

                  {/* Checkout Counter */}
                  <g>
                    <rect
                      x="550"
                      y="350"
                      width="70"
                      height="25"
                      fill="url(#counterGradient)"
                      stroke="#64748b"
                      strokeWidth="1.5"
                      rx="2"
                    />
                    <rect
                      x="560"
                      y="340"
                      width="50"
                      height="15"
                      fill="#1e293b"
                      stroke="#0f172a"
                      strokeWidth="1"
                      rx="2"
                    />
                    <text x="585" y="350" fontSize="8" fill="white" textAnchor="middle" fontWeight="bold">
                      POS TERMINAL
                    </text>
                  </g>

                  {/* HVAC System */}
                  <g>
                    <rect
                      x="600"
                      y="180"
                      width="40"
                      height="40"
                      rx="3"
                      fill="url(#hvacGradient)"
                      stroke="#64748b"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="605"
                      y="185"
                      width="30"
                      height="30"
                      rx="2"
                      fill="#334155"
                      stroke="#1e293b"
                      strokeWidth="1"
                    />
                    <text x="620" y="205" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">
                      HVAC
                    </text>
                  </g>

                  {/* Refrigeration Unit */}
                  <g>
                    <rect
                      x="170"
                      y="250"
                      width="20"
                      height="100"
                      rx="2"
                      fill="url(#refrigerationGradient)"
                      stroke="#64748b"
                      strokeWidth="1.5"
                    />
                    <text
                      x="180"
                      y="300"
                      fontSize="10"
                      transform="rotate(90, 180, 300)"
                      fill="#1e293b"
                      textAnchor="middle"
                      fontWeight="bold"
                    >
                      Refrigeration
                    </text>
                    <line x1="175" y1="255" x2="185" y2="255" stroke="#64748b" strokeWidth="1" strokeDasharray="2,1" />
                    <line x1="175" y1="345" x2="185" y2="345" stroke="#64748b" strokeWidth="1" strokeDasharray="2,1" />
                  </g>

                  {/* Electrical Panel */}
                  <g>
                    <rect
                      x="160"
                      y="180"
                      width="30"
                      height="40"
                      rx="2"
                      fill="#64748b"
                      stroke="#475569"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="165"
                      y="185"
                      width="20"
                      height="30"
                      rx="1"
                      fill="#334155"
                      stroke="#1e293b"
                      strokeWidth="1"
                    />
                    <text x="175" y="205" fontSize="8" fill="white" textAnchor="middle" fontWeight="bold">
                      PANEL
                    </text>
                  </g>

                  {/* Lighting */}
                  <g filter="url(#glow)">
                    <circle cx="250" y="220" r="6" fill="#fef9c3" stroke="#eab308" strokeWidth="1">
                      <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="350" y="220" r="6" fill="#fef9c3" stroke="#eab308" strokeWidth="1">
                      <animate attributeName="opacity" values="1;0.7;1" dur="2.3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="450" y="220" r="6" fill="#fef9c3" stroke="#eab308" strokeWidth="1">
                      <animate attributeName="opacity" values="1;0.7;1" dur="1.8s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="550" y="220" r="6" fill="#fef9c3" stroke="#eab308" strokeWidth="1">
                      <animate attributeName="opacity" values="1;0.7;1" dur="2.1s" repeatCount="indefinite" />
                    </circle>
                  </g>

                  {/* Energy Monitoring Points */}
                  <g>
                    <circle cx="175" cy="180" r="4" fill="#22c55e" stroke="#16a34a" strokeWidth="1.5">
                      <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="620" cy="180" r="4" fill="#22c55e" stroke="#16a34a" strokeWidth="1.5">
                      <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="r" values="3;4;3" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="180" cy="250" r="4" fill="#22c55e" stroke="#16a34a" strokeWidth="1.5">
                      <animate attributeName="opacity" values="1;0.5;1" dur="2.2s" repeatCount="indefinite" />
                      <animate attributeName="r" values="3;4;3" dur="2.2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="585" cy="350" r="4" fill="#22c55e" stroke="#16a34a" strokeWidth="1.5">
                      <animate attributeName="opacity" values="1;0.5;1" dur="1.8s" repeatCount="indefinite" />
                      <animate attributeName="r" values="3;4;3" dur="1.8s" repeatCount="indefinite" />
                    </circle>
                  </g>

                  {/* Data Connections */}
                  <g>
                    <path
                      d="M175,180 C120,180 120,350 175,350"
                      stroke="#22c55e"
                      strokeWidth="1.5"
                      strokeDasharray="4,2"
                      fill="none"
                      opacity="0.7"
                    >
                      <animate attributeName="stroke-dashoffset" values="0;6" dur="1s" repeatCount="indefinite" />
                    </path>
                    <path
                      d="M620,180 C675,180 675,350 620,350"
                      stroke="#22c55e"
                      strokeWidth="1.5"
                      strokeDasharray="4,2"
                      fill="none"
                      opacity="0.7"
                    >
                      <animate attributeName="stroke-dashoffset" values="0;6" dur="1s" repeatCount="indefinite" />
                    </path>
                    <path
                      d="M180,250 C140,250 140,350 180,350"
                      stroke="#22c55e"
                      strokeWidth="1.5"
                      strokeDasharray="4,2"
                      fill="none"
                      opacity="0.7"
                    >
                      <animate attributeName="stroke-dashoffset" values="0;6" dur="1s" repeatCount="indefinite" />
                    </path>
                    <path
                      d="M585,350 C585,380 400,380 400,350"
                      stroke="#22c55e"
                      strokeWidth="1.5"
                      strokeDasharray="4,2"
                      fill="none"
                      opacity="0.7"
                    >
                      <animate attributeName="stroke-dashoffset" values="0;6" dur="1s" repeatCount="indefinite" />
                    </path>
                  </g>

                  {/* Energy Dashboard */}
                  <g transform="translate(600, 240)">
                    <rect
                      x="0"
                      y="0"
                      width="160"
                      height="100"
                      rx="5"
                      fill="white"
                      fillOpacity="0.9"
                      stroke="#64748b"
                      strokeWidth="1"
                    />
                    <text x="80" y="15" fontSize="10" textAnchor="middle" fill="#1e293b" fontWeight="bold">
                      ENERGY MONITOR
                    </text>

                    {/* HVAC Usage */}
                    <text x="10" y="30" fontSize="8" fill="#475569">
                      HVAC:
                    </text>
                    <rect
                      x="50"
                      y="25"
                      width="100"
                      height="6"
                      rx="3"
                      fill="#e2e8f0"
                      stroke="#cbd5e1"
                      strokeWidth="0.5"
                    />
                    <rect x="50" y="25" width="70" height="6" rx="3" fill="#22c55e" />
                    <text x="155" y="30" fontSize="7" fill="#475569" textAnchor="end">
                      70%
                    </text>

                    {/* Refrigeration Usage */}
                    <text x="10" y="45" fontSize="8" fill="#475569">
                      Refrigeration:
                    </text>
                    <rect
                      x="50"
                      y="40"
                      width="100"
                      height="6"
                      rx="3"
                      fill="#e2e8f0"
                      stroke="#cbd5e1"
                      strokeWidth="0.5"
                    />
                    <rect x="50" y="40" width="85" height="6" rx="3" fill="#f59e0b" />
                    <text x="155" y="45" fontSize="7" fill="#475569" textAnchor="end">
                      85%
                    </text>

                    {/* Lighting Usage */}
                    <text x="10" y="60" fontSize="8" fill="#475569">
                      Lighting:
                    </text>
                    <rect
                      x="50"
                      y="55"
                      width="100"
                      height="6"
                      rx="3"
                      fill="#e2e8f0"
                      stroke="#cbd5e1"
                      strokeWidth="0.5"
                    />
                    <rect x="50" y="55" width="50" height="6" rx="3" fill="#22c55e" />
                    <text x="155" y="60" fontSize="7" fill="#475569" textAnchor="end">
                      50%
                    </text>

                    {/* POS Usage */}
                    <text x="10" y="75" fontSize="8" fill="#475569">
                      POS System:
                    </text>
                    <rect
                      x="50"
                      y="70"
                      width="100"
                      height="6"
                      rx="3"
                      fill="#e2e8f0"
                      stroke="#cbd5e1"
                      strokeWidth="0.5"
                    />
                    <rect x="50" y="70" width="30" height="6" rx="3" fill="#22c55e" />
                    <text x="155" y="75" fontSize="7" fill="#475569" textAnchor="end">
                      30%
                    </text>

                    {/* Total Usage */}
                    <text x="10" y="90" fontSize="8" fill="#1e293b" fontWeight="bold">
                      TOTAL:
                    </text>
                    <rect
                      x="50"
                      y="85"
                      width="100"
                      height="8"
                      rx="4"
                      fill="#e2e8f0"
                      stroke="#cbd5e1"
                      strokeWidth="0.5"
                    />
                    <rect x="50" y="85" width="62" height="8" rx="4" fill="#3b82f6" />
                    <text x="155" y="90" fontSize="7" fill="#1e293b" fontWeight="bold" textAnchor="end">
                      62%
                    </text>
                  </g>

                  {/* Legend */}
                  <g transform="translate(50, 240)">
                    <rect
                      x="0"
                      y="0"
                      width="120"
                      height="100"
                      rx="5"
                      fill="white"
                      fillOpacity="0.9"
                      stroke="#64748b"
                      strokeWidth="1"
                    />
                    <text x="60" y="15" fontSize="10" textAnchor="middle" fill="#1e293b" fontWeight="bold">
                      ENERGY MONITORING
                    </text>

                    <g transform="translate(10, 30)">
                      <circle cx="5" cy="5" r="5" fill="#22c55e" />
                      <text x="15" y="8" fontSize="7" fill="#475569">
                        Efficient Energy Use
                      </text>
                    </g>

                    <g transform="translate(10, 50)">
                      <circle cx="5" cy="5" r="5" fill="#f59e0b" />
                      <text x="15" y="8" fontSize="7" fill="#475569">
                        Moderate Energy Use
                      </text>
                    </g>

                    <g transform="translate(10, 70)">
                      <circle cx="5" cy="5" r="5" fill="#ef4444" />
                      <text x="15" y="8" fontSize="7" fill="#475569">
                        High Energy Use
                      </text>
                    </g>

                    <g transform="translate(10, 90)">
                      <circle cx="5" cy="5" r="5" fill="none" stroke="#22c55e" strokeWidth="1.5">
                        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x="15" y="8" fontSize="7" fill="#475569">
                        Monitoring Point
                      </text>
                    </g>
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
            How Wattif Transforms Multi-Site Retail Energy Management
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Portfolio-Wide Visibility</h3>
                <p className="text-slate-600">
                  Monitor energy performance across all locations from a single dashboard, identifying top and bottom
                  performers and standardizing best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Automated Schedule Verification</h3>
                <p className="text-slate-600">
                  Ensure HVAC, lighting, and other systems are operating according to store hours, automatically
                  detecting and alerting when equipment runs outside scheduled times.
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
                  Detect equipment issues before they impact customer comfort or energy bills, enabling proactive
                  maintenance and reducing emergency service calls.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Store-Specific Benchmarking</h3>
                <p className="text-slate-600">
                  Compare energy use across locations while accounting for differences in store size, climate, and
                  operating hours to identify true efficiency opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Central Management</h3>
                <p className="text-slate-600">
                  Enable corporate energy teams to monitor and optimize all locations without requiring store staff
                  involvement, ensuring consistent implementation of energy policies.
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
                  Generate accurate energy and emissions data across your entire portfolio to support corporate
                  sustainability goals and reporting requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Story section temporarily hidden */}

      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">Ready to Optimize Your Retail Energy Performance?</h2>
            <p className="mb-8 text-lg text-slate-300">
              Discover how Wattif can help you reduce energy costs, improve operational consistency, and meet
              sustainability goals across your entire portfolio.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-coral-500 hover:bg-coral-600">
                <Link href="/contact">Request a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-300 text-black hover:text-white hover:bg-slate-700">
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
