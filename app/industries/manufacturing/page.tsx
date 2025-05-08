import Link from "next/link"
import { CheckCircle2, Factory } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"

export default function ManufacturingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <PageHeader
        title="Manufacturing Energy Intelligence"
        description="Energy visibility for every production line, machine, and process"
        icon={<Factory className="h-12 w-12 text-coral-500" />}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">The Manufacturing Energy Challenge</h2>
              <p className="mb-4 text-lg text-slate-600">
                Manufacturing facilities often waste 10-15% of their energy through operational inefficiencies—invisible
                without circuit-level monitoring.
              </p>
              <p className="mb-4 text-lg text-slate-600">
                Traditional energy monitoring only shows total facility consumption, making it impossible to identify
                which production lines, processes, or equipment are consuming more energy than they should.
              </p>
              <p className="text-lg text-slate-600">
                This lack of visibility leads to higher operational costs, reduced competitiveness, and missed
                opportunities for process optimization.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-xl">
                <svg viewBox="0 0 800 600" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Enhanced Background with gradient */}
                  <defs>
                    <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#dbeafe" />
                      <stop offset="100%" stopColor="#f0f9ff" />
                    </linearGradient>
                    <linearGradient id="floorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#e2e8f0" />
                      <stop offset="100%" stopColor="#cbd5e1" />
                    </linearGradient>
                    <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f1f5f9" />
                      <stop offset="100%" stopColor="#e2e8f0" />
                    </linearGradient>
                    <linearGradient id="roofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#cbd5e1" />
                      <stop offset="100%" stopColor="#94a3b8" />
                    </linearGradient>
                    <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
                    </linearGradient>
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.2" />
                    </filter>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#cbd5e1" strokeWidth="0.5" />
                    </pattern>
                    <radialGradient id="sensorGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Sky and ground */}
                  <rect x="0" y="0" width="800" height="600" fill="url(#skyGradient)" />
                  <rect x="0" y="450" width="800" height="150" fill="url(#floorGradient)" />
                  <rect x="0" y="450" width="800" height="150" fill="url(#gridPattern)" />

                  {/* Factory Building - Enhanced */}
                  <g filter="url(#shadow)">
                    {/* Main structure */}
                    <rect
                      x="100"
                      y="200"
                      width="600"
                      height="250"
                      fill="url(#buildingGradient)"
                      stroke="#64748b"
                      strokeWidth="2"
                    />

                    {/* Roof */}
                    <polygon
                      points="100,200 400,120 700,200"
                      fill="url(#roofGradient)"
                      stroke="#64748b"
                      strokeWidth="2"
                    />

                    {/* Roof details */}
                    <line x1="150" y1="180" x2="150" y2="200" stroke="#64748b" strokeWidth="2" />
                    <line x1="250" y1="160" x2="250" y2="200" stroke="#64748b" strokeWidth="2" />
                    <line x1="350" y1="140" x2="350" y2="200" stroke="#64748b" strokeWidth="2" />
                    <line x1="450" y1="140" x2="450" y2="200" stroke="#64748b" strokeWidth="2" />
                    <line x1="550" y1="160" x2="550" y2="200" stroke="#64748b" strokeWidth="2" />
                    <line x1="650" y1="180" x2="650" y2="200" stroke="#64748b" strokeWidth="2" />

                    {/* Solar panels on roof */}
                    <g transform="translate(400, 140)">
                      <rect x="-100" y="-10" width="200" height="60" fill="#0f172a" fillOpacity="0.1" />
                      <g transform="translate(-90, 0)">
                        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                          <rect
                            key={i}
                            x={i * 25}
                            y="-5"
                            width="20"
                            height="50"
                            fill="#1e293b"
                            stroke="#334155"
                            strokeWidth="1"
                            opacity="0.8"
                          />
                        ))}
                      </g>
                      <text x="0" y="70" fontSize="12" textAnchor="middle" fill="#1e293b" fontWeight="bold">
                        Solar Array
                      </text>
                    </g>
                  </g>

                  {/* Windows with reflection - Enhanced */}
                  <g opacity="0.9">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <g key={i} transform={`translate(${130 + i * 90}, 230)`}>
                        <rect width="60" height="40" rx="2" fill="#bfdbfe" stroke="#64748b" strokeWidth="1" />
                        <rect width="60" height="20" rx="2" fill="#dbeafe" stroke="none" />
                        <text x="30" y="60" fontSize="10" textAnchor="middle" fill="#334155">
                          {i === 0
                            ? "Admin"
                            : i === 1
                              ? "R&D"
                              : i === 2
                                ? "QA"
                                : i === 3
                                  ? "Assembly"
                                  : i === 4
                                    ? "Packaging"
                                    : "Shipping"}
                        </text>
                      </g>
                    ))}
                  </g>

                  {/* Main entrance - Enhanced */}
                  <g filter="url(#shadow)">
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
                  </g>

                  {/* Production Line with detailed machinery - Enhanced */}
                  <g filter="url(#shadow)">
                    <rect
                      x="150"
                      y="300"
                      width="500"
                      height="15"
                      rx="2"
                      fill="#94a3b8"
                      stroke="#64748b"
                      strokeWidth="1"
                    />

                    {/* CNC Machine - Enhanced */}
                    <g transform="translate(180, 280)">
                      <rect x="0" y="0" width="60" height="50" rx="2" fill="#64748b" stroke="#475569" strokeWidth="1" />
                      <rect x="5" y="5" width="50" height="30" rx="1" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
                      <rect x="20" y="40" width="20" height="10" fill="#475569" />
                      <circle cx="30" cy="20" r="10" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
                      <circle cx="30" cy="20" r="5" fill="#94a3b8" />
                      <text x="30" y="65" fontSize="12" textAnchor="middle" fill="#1e293b" fontWeight="bold">
                        CNC
                      </text>
                      <text x="30" y="80" fontSize="10" textAnchor="middle" fill="#475569">
                        12.4 kWh
                      </text>

                      {/* Energy monitoring indicator */}
                      <circle cx="55" cy="5" r="3" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="55" cy="5" r="6" fill="none" stroke="#22c55e" strokeWidth="1">
                        <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </g>

                    {/* Press Machine - Enhanced */}
                    <g transform="translate(300, 280)">
                      <rect x="0" y="0" width="50" height="60" rx="2" fill="#64748b" stroke="#475569" strokeWidth="1" />
                      <rect
                        x="10"
                        y="10"
                        width="30"
                        height="40"
                        rx="1"
                        fill="#94a3b8"
                        stroke="#475569"
                        strokeWidth="1"
                      />
                      <rect x="20" y="50" width="10" height="10" fill="#475569" />
                      <rect x="15" y="0" width="20" height="10" fill="#475569" />
                      <text x="25" y="75" fontSize="12" textAnchor="middle" fill="#1e293b" fontWeight="bold">
                        Press
                      </text>
                      <text x="25" y="90" fontSize="10" textAnchor="middle" fill="#475569">
                        18.7 kWh
                      </text>

                      {/* Energy monitoring indicator */}
                      <circle cx="45" cy="5" r="3" fill="#f59e0b">
                        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="45" cy="5" r="6" fill="none" stroke="#f59e0b" strokeWidth="1">
                        <animate attributeName="r" values="6;10;6" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0;1" dur="1.5s" repeatCount="indefinite" />
                      </circle>
                    </g>

                    {/* Robotic Arm - Enhanced */}
                    <g transform="translate(420, 260)">
                      <rect
                        x="0"
                        y="20"
                        width="40"
                        height="20"
                        rx="2"
                        fill="#64748b"
                        stroke="#475569"
                        strokeWidth="1"
                      />
                      <rect x="15" y="0" width="10" height="20" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
                      <rect x="10" y="40" width="20" height="10" fill="#475569" />
                      <path d="M20,0 Q40,10 50,30" fill="none" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
                      <circle cx="50" cy="30" r="5" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
                      <text x="20" y="65" fontSize="12" textAnchor="middle" fill="#1e293b" fontWeight="bold">
                        Robot
                      </text>
                      <text x="20" y="80" fontSize="10" textAnchor="middle" fill="#475569">
                        8.2 kWh
                      </text>

                      {/* Energy monitoring indicator */}
                      <circle cx="35" cy="25" r="3" fill="#22c55e">
                        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="35" cy="25" r="6" fill="none" stroke="#22c55e" strokeWidth="1">
                        <animate attributeName="r" values="6;10;6" dur="1s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
                      </circle>
                    </g>

                    {/* Laser Cutter - Enhanced */}
                    <g transform="translate(540, 280)">
                      <rect x="0" y="0" width="70" height="40" rx="2" fill="#64748b" stroke="#475569" strokeWidth="1" />
                      <rect x="5" y="5" width="60" height="30" rx="1" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
                      <rect x="25" y="40" width="20" height="10" fill="#475569" />
                      <line x1="35" y1="20" x2="65" y2="20" stroke="#ef4444" strokeWidth="2">
                        <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite" />
                      </line>
                      <text x="35" y="65" fontSize="12" textAnchor="middle" fill="#1e293b" fontWeight="bold">
                        Laser
                      </text>
                      <text x="35" y="80" fontSize="10" textAnchor="middle" fill="#475569">
                        22.5 kWh
                      </text>

                      {/* Energy monitoring indicator */}
                      <circle cx="65" cy="5" r="3" fill="#ef4444">
                        <animate attributeName="opacity" values="1;0.3;1" dur="0.7s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="65" cy="5" r="6" fill="none" stroke="#ef4444" strokeWidth="1">
                        <animate attributeName="r" values="6;10;6" dur="0.7s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0;1" dur="0.7s" repeatCount="indefinite" />
                      </circle>
                    </g>
                  </g>

                  {/* HVAC System with details - Enhanced */}
                  <g transform="translate(600, 150)" filter="url(#shadow)">
                    <rect x="0" y="0" width="80" height="40" rx="3" fill="#94a3b8" stroke="#64748b" strokeWidth="1" />
                    <rect x="10" y="10" width="60" height="20" rx="2" fill="#cbd5e1" stroke="#64748b" strokeWidth="1" />
                    <line x1="15" y1="15" x2="65" y2="15" stroke="#64748b" strokeWidth="1" />
                    <line x1="15" y1="20" x2="65" y2="20" stroke="#64748b" strokeWidth="1" />
                    <line x1="15" y1="25" x2="65" y2="25" stroke="#64748b" strokeWidth="1" />
                    <text x="40" y="45" fontSize="14" textAnchor="middle" fill="#1e293b" fontWeight="bold">
                      HVAC
                    </text>
                    <text x="40" y="60" fontSize="10" textAnchor="middle" fill="#475569">
                      34.8 kWh
                    </text>

                    {/* Energy monitoring indicator */}
                    <circle cx="70" cy="5" r="4" fill="#0ea5e9">
                      <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="70" cy="5" r="8" fill="none" stroke="#0ea5e9" strokeWidth="1">
                      <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="1;0;1" dur="3s" repeatCount="indefinite" />
                    </circle>

                    {/* Air flow indicators */}
                    <path d="M75,15 Q85,15 90,10" fill="none" stroke="#bfdbfe" strokeWidth="2" strokeDasharray="2,2">
                      <animate
                        attributeName="d"
                        values="M75,15 Q85,15 90,10;M75,15 Q85,20 90,15;M75,15 Q85,15 90,10"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </path>
                    <path d="M75,25 Q85,25 90,30" fill="none" stroke="#bfdbfe" strokeWidth="2" strokeDasharray="2,2">
                      <animate
                        attributeName="d"
                        values="M75,25 Q85,25 90,30;M75,25 Q85,20 90,25;M75,25 Q85,25 90,30"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </g>

                  {/* Electrical Panel with details - Enhanced */}
                  <g transform="translate(120, 350)" filter="url(#shadow)">
                    <rect x="0" y="0" width="50" height="80" rx="3" fill="#64748b" stroke="#475569" strokeWidth="2" />
                    <rect x="5" y="5" width="40" height="70" rx="2" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
                    <line x1="5" y1="15" x2="45" y2="15" stroke="#475569" strokeWidth="1" />
                    <line x1="5" y1="25" x2="45" y2="25" stroke="#475569" strokeWidth="1" />
                    <line x1="5" y1="35" x2="45" y2="35" stroke="#475569" strokeWidth="1" />
                    <line x1="5" y1="45" x2="45" y2="45" stroke="#475569" strokeWidth="1" />
                    <line x1="5" y1="55" x2="45" y2="55" stroke="#475569" strokeWidth="1" />
                    <line x1="5" y1="65" x2="45" y2="65" stroke="#475569" strokeWidth="1" />

                    <circle cx="15" cy="20" r="3" fill="#22c55e" />
                    <circle cx="15" cy="30" r="3" fill="#22c55e" />
                    <circle cx="15" cy="40" r="3" fill="#f59e0b" />
                    <circle cx="15" cy="50" r="3" fill="#22c55e" />
                    <circle cx="15" cy="60" r="3" fill="#ef4444">
                      <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
                    </circle>

                    <text x="25" y="90" fontSize="14" textAnchor="middle" fill="#1e293b" fontWeight="bold">
                      Main Panel
                    </text>
                    <text x="25" y="105" fontSize="10" textAnchor="middle" fill="#475569">
                      Total: 96.6 kWh
                    </text>
                  </g>

                  {/* Energy flow visualization - Enhanced with glow effect */}
                  <g opacity="0.8" filter="url(#glow)">
                    <path
                      d="M145,390 C200,390 200,330 250,330 C300,330 300,300 350,300"
                      fill="none"
                      stroke="url(#energyGradient)"
                      strokeWidth="3"
                      strokeDasharray="5,3"
                    >
                      <animate attributeName="stroke-dashoffset" values="8;0" dur="2s" repeatCount="indefinite" />
                    </path>
                    <path
                      d="M145,400 C220,400 220,340 300,340 C380,340 380,300 420,300"
                      fill="none"
                      stroke="url(#energyGradient)"
                      strokeWidth="3"
                      strokeDasharray="5,3"
                    >
                      <animate attributeName="stroke-dashoffset" values="8;0" dur="2s" repeatCount="indefinite" />
                    </path>
                    <path
                      d="M145,380 C180,380 180,320 200,320 C220,320 220,280 240,280"
                      fill="none"
                      stroke="url(#energyGradient)"
                      strokeWidth="3"
                      strokeDasharray="5,3"
                    >
                      <animate attributeName="stroke-dashoffset" values="8;0" dur="2s" repeatCount="indefinite" />
                    </path>
                    <path
                      d="M145,410 C250,410 250,350 400,350 C550,350 550,300 570,300"
                      fill="none"
                      stroke="url(#energyGradient)"
                      strokeWidth="3"
                      strokeDasharray="5,3"
                    >
                      <animate attributeName="stroke-dashoffset" values="8;0" dur="2s" repeatCount="indefinite" />
                    </path>
                    <path
                      d="M145,370 C300,370 300,200 600,200 C630,200 630,170 640,170"
                      fill="none"
                      stroke="url(#energyGradient)"
                      strokeWidth="3"
                      strokeDasharray="5,3"
                    >
                      <animate attributeName="stroke-dashoffset" values="8;0" dur="2s" repeatCount="indefinite" />
                    </path>
                  </g>

                  {/* Wattif monitoring system indicators - Enhanced with glow */}
                  <g>
                    {[
                      { x: 210, y: 280, duration: "3s", label: "CNC Sensor" },
                      { x: 325, y: 280, duration: "2.5s", label: "Press Sensor" },
                      { x: 440, y: 260, duration: "4s", label: "Robot Sensor" },
                      { x: 575, y: 280, duration: "3.5s", label: "Laser Sensor" },
                      { x: 640, y: 150, duration: "3s", label: "HVAC Sensor" },
                      { x: 145, y: 390, duration: "2s", label: "Main Panel Sensor" },
                    ].map((sensor, i) => (
                      <g key={i} transform={`translate(${sensor.x}, ${sensor.y})`}>
                        <circle r="8" fill="url(#sensorGlow)">
                          <animate
                            attributeName="opacity"
                            values="0.6;0.2;0.6"
                            dur={sensor.duration}
                            repeatCount="indefinite"
                          />
                        </circle>
                        <circle r="5" fill="#f8fafc" stroke="#0ea5e9" strokeWidth="2">
                          <animate attributeName="r" values="5;7;5" dur={sensor.duration} repeatCount="indefinite" />
                        </circle>
                        <text y="20" fontSize="8" textAnchor="middle" fill="#0c4a6e" fontWeight="bold">
                          {sensor.label}
                        </text>
                      </g>
                    ))}
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
                      Efficient (&lt; 15 kWh)
                    </text>

                    <circle cx="20" cy="60" r="5" fill="#f59e0b" />
                    <text x="30" y="64" fontSize="12" fill="#0f172a" textAnchor="start">
                      Moderate (15-20 kWh)
                    </text>

                    <circle cx="20" cy="80" r="5" fill="#ef4444" />
                    <text x="30" y="84" fontSize="12" fill="#0f172a" textAnchor="start">
                      High Usage (&gt; 20 kWh)
                    </text>
                  </g>

                  {/* Data Visualization */}
                  <g transform="translate(650, 50)">
                    <rect
                      x="0"
                      y="0"
                      width="120"
                      height="100"
                      rx="5"
                      fill="white"
                      fillOpacity="0.8"
                      stroke="#64748b"
                      strokeWidth="1"
                    />
                    <text x="60" y="20" fontSize="12" textAnchor="middle" fill="#0f172a" fontWeight="bold">
                      Energy Dashboard
                    </text>

                    <rect
                      x="10"
                      y="30"
                      width="100"
                      height="10"
                      rx="2"
                      fill="#f1f5f9"
                      stroke="#cbd5e1"
                      strokeWidth="1"
                    />
                    <rect x="10" y="30" width="75" height="10" rx="2" fill="#22c55e" />
                    <text x="60" y="38" fontSize="8" textAnchor="middle" fill="#0f172a">
                      CNC: 75% Efficient
                    </text>

                    <rect
                      x="10"
                      y="50"
                      width="100"
                      height="10"
                      rx="2"
                      fill="#f1f5f9"
                      stroke="#cbd5e1"
                      strokeWidth="1"
                    />
                    <rect x="10" y="50" width="55" height="10" rx="2" fill="#f59e0b" />
                    <text x="60" y="58" fontSize="8" textAnchor="middle" fill="#0f172a">
                      Press: 55% Efficient
                    </text>

                    <rect
                      x="10"
                      y="70"
                      width="100"
                      height="10"
                      rx="2"
                      fill="#f1f5f9"
                      stroke="#cbd5e1"
                      strokeWidth="1"
                    />
                    <rect x="10" y="70" width="85" height="10" rx="2" fill="#22c55e" />
                    <text x="60" y="78" fontSize="8" textAnchor="middle" fill="#0f172a">
                      Robot: 85% Efficient
                    </text>

                    <rect
                      x="10"
                      y="90"
                      width="100"
                      height="10"
                      rx="2"
                      fill="#f1f5f9"
                      stroke="#cbd5e1"
                      strokeWidth="1"
                    />
                    <rect x="10" y="90" width="45" height="10" rx="2" fill="#ef4444" />
                    <text x="60" y="98" fontSize="8" textAnchor="middle" fill="#0f172a">
                      Laser: 45% Efficient
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
            How Wattif Transforms Manufacturing Energy Management
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Production Line Visibility</h3>
                <p className="text-slate-600">
                  Monitor energy consumption per production line, machine, or process to identify inefficiencies and
                  optimize operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Production-Energy Correlation</h3>
                <p className="text-slate-600">
                  Correlate energy use with production output to establish benchmarks and identify deviations that
                  indicate inefficiencies.
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
                  Detect equipment degradation and maintenance needs before they lead to failures or energy waste.
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
                  Identify peak demand contributors and implement load-shifting strategies to reduce demand charges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Shift and Process Benchmarking</h3>
                <p className="text-slate-600">
                  Compare energy performance across shifts, products, and processes to identify best practices and
                  standardize operations.
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
                  Generate accurate energy and emissions data for sustainability reporting and compliance requirements.
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
        <h3 className="mb-4 text-xl font-medium text-slate-900">Precision Parts Manufacturer</h3>
        <p className="mb-4 text-slate-600">
          A precision parts manufacturer used Wattif to identify that one CNC machine was consuming 34% more
          energy than identical models. The issue was traced to a control system problem, and fixing it saved
          $18,200 annually from that single machine.
        </p>
        <p className="mb-4 text-slate-600">
          Further analysis revealed that several machines were left running during breaks and shift changes,
          leading to an additional $45,000 in annual energy waste. By implementing automated shutdown procedures,
          the company reduced their overall energy consumption by 12%.
        </p>
        <div className="mt-6 flex justify-center">
          <Button asChild className="bg-coral-500 hover:bg-coral-600">
            <Link href="/case-studies/precision-manufacturing">
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
            <h2 className="mb-6 text-3xl font-bold">Ready to Optimize Your Manufacturing Energy Use?</h2>
            <p className="mb-8 text-lg text-slate-300">
              Discover how Wattif can help you reduce energy costs, improve equipment performance, and meet
              sustainability goals.
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
