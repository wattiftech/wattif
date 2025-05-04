"use client"

import { useState } from "react"

type MonitoringPoint = {
  id: string
  title: string
  description: string
  x: number
  y: number
  category: "hvac" | "lighting" | "equipment" | "main"
}

export function InteractiveBuilding() {
  const [activePoint, setActivePoint] = useState<string | null>(null)
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null)

  const monitoringPoints: MonitoringPoint[] = [
    {
      id: "main-panel",
      title: "Main Electrical Panel",
      description: "Monitors overall building power consumption and identifies peak demand periods",
      x: 15,
      y: 70,
      category: "main",
    },
    {
      id: "hvac-system",
      title: "HVAC System",
      description: "Tracks energy usage of heating, ventilation, and air conditioning systems",
      x: 40,
      y: 30,
      category: "hvac",
    },
    {
      id: "lighting-circuit",
      title: "Lighting Circuit",
      description: "Monitors lighting energy consumption and identifies optimization opportunities",
      x: 70,
      y: 25,
      category: "lighting",
    },
    {
      id: "server-room",
      title: "Server Room Equipment",
      description: "Monitors high-energy IT equipment and cooling systems",
      x: 80,
      y: 60,
      category: "equipment",
    },
    {
      id: "production-line",
      title: "Production Equipment",
      description: "Tracks energy usage of manufacturing or production equipment",
      x: 30,
      y: 55,
      category: "equipment",
    },
  ]

  const handlePointClick = (id: string) => {
    setActivePoint(id === activePoint ? null : id)
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "hvac":
        return "bg-blue-500"
      case "lighting":
        return "bg-yellow-500"
      case "equipment":
        return "bg-purple-500"
      case "main":
        return "bg-coral-500"
      default:
        return "bg-slate-500"
    }
  }

  const getCategoryBorderColor = (category: string) => {
    switch (category) {
      case "hvac":
        return "border-blue-500"
      case "lighting":
        return "border-yellow-500"
      case "equipment":
        return "border-purple-500"
      case "main":
        return "border-coral-500"
      default:
        return "border-slate-500"
    }
  }

  return (
    <div className="relative w-full aspect-[4/3] bg-slate-50 rounded-xl overflow-hidden shadow-lg border border-slate-200">
      {/* Building outline */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        style={{ filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))" }}
      >
        {/* Building exterior */}
        <path d="M10,85 L10,25 L40,15 L90,25 L90,85 L10,85 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.5" />

        {/* Roof */}
        <path d="M10,25 L40,15 L90,25" fill="none" stroke="#94a3b8" strokeWidth="0.5" />

        {/* Windows */}
        <rect x="20" y="35" width="10" height="10" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.3" />
        <rect x="40" y="35" width="10" height="10" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.3" />
        <rect x="60" y="35" width="10" height="10" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.3" />
        <rect x="20" y="55" width="10" height="10" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.3" />
        <rect x="40" y="55" width="10" height="10" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.3" />
        <rect x="60" y="55" width="10" height="10" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.3" />

        {/* Door */}
        <rect x="75" y="65" width="10" height="20" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />

        {/* Interior walls */}
        <line x1="50" y1="25" x2="50" y2="85" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="2,1" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="2,1" />

        {/* HVAC unit on roof */}
        <rect x="65" y="20" width="15" height="10" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />

        {/* Server room */}
        <rect x="70" y="55" width="15" height="15" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.5" />

        {/* Production area */}
        <rect x="15" y="55" width="30" height="25" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.5" />
      </svg>

      {/* Monitoring points */}
      <div className="absolute inset-0">
        {monitoringPoints.map((point) => (
          <div
            key={point.id}
            className={`absolute cursor-pointer transition-all duration-300 ${
              activePoint === point.id ? "z-30 scale-110" : "z-20"
            } ${hoveredPoint === point.id ? "scale-110" : ""}`}
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
            onClick={() => handlePointClick(point.id)}
            onMouseEnter={() => setHoveredPoint(point.id)}
            onMouseLeave={() => setHoveredPoint(null)}
          >
            <div
              className={`relative flex items-center justify-center w-6 h-6 rounded-full ${
                activePoint === point.id ? getCategoryColor(point.category) : "bg-white"
              } border-2 ${getCategoryBorderColor(point.category)} shadow-md transition-all duration-300`}
            >
              {activePoint === point.id && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border border-slate-200 flex items-center justify-center">
                  <span className="text-xs font-bold">×</span>
                </div>
              )}
              <div
                className={`absolute w-10 h-10 rounded-full ${getCategoryColor(
                  point.category,
                )} opacity-20 animate-ping`}
                style={{ animationDuration: "3s" }}
              ></div>
            </div>

            {/* Info box that appears when a point is clicked */}
            {activePoint === point.id && (
              <div
                className={`absolute mt-2 p-3 bg-white rounded-lg shadow-lg border ${getCategoryBorderColor(
                  point.category,
                )} w-64 z-40 transition-all duration-300`}
                style={{
                  left: point.x > 50 ? "-270px" : "30px",
                  top: point.y > 50 ? "-120px" : "0",
                }}
              >
                <h4 className="font-bold text-slate-900">{point.title}</h4>
                <p className="text-sm text-slate-600 mt-1">{point.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="absolute bottom-3 left-3 bg-white bg-opacity-90 p-3 rounded-lg shadow-sm border border-slate-200">
        <p className="text-xs font-semibold text-slate-700 mb-2">Monitoring Point Types:</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-coral-500 mr-2"></div>
            <span className="text-xs text-slate-600">Main Panel</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
            <span className="text-xs text-slate-600">HVAC</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <span className="text-xs text-slate-600">Lighting</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
            <span className="text-xs text-slate-600">Equipment</span>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute top-3 right-3 bg-white bg-opacity-90 p-2 rounded-lg shadow-sm border border-slate-200">
        <p className="text-xs text-slate-600">Click on a point to learn more</p>
      </div>
    </div>
  )
}
