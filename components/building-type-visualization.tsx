"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2 } from "lucide-react"

type MonitoringPoint = {
  id: string
  title: string
  description: string
  x: number
  y: number
  category: "hvac" | "lighting" | "equipment" | "main" | "server" | "production" | "retail" | "lab"
}

type BuildingType = {
  id: string
  name: string
  description: string
  monitoringPoints: MonitoringPoint[]
}

export function BuildingTypeVisualization() {
  const [activePoint, setActivePoint] = useState<string | null>(null)
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null)

  const buildingTypes: BuildingType[] = [
    {
      id: "office",
      name: "Office Building",
      description: "Optimize energy usage in commercial office spaces",
      monitoringPoints: [
        {
          id: "office-main",
          title: "Main Electrical Panel",
          description: "Monitors overall building power consumption and identifies peak demand periods",
          x: 15,
          y: 70,
          category: "main",
        },
        {
          id: "office-hvac",
          title: "HVAC System",
          description: "Tracks energy usage of heating, ventilation, and air conditioning systems",
          x: 40,
          y: 30,
          category: "hvac",
        },
        {
          id: "office-lighting",
          title: "Lighting Circuit",
          description: "Monitors lighting energy consumption and identifies optimization opportunities",
          x: 70,
          y: 25,
          category: "lighting",
        },
        {
          id: "office-server",
          title: "Server Room",
          description: "Monitors high-energy IT equipment and cooling systems",
          x: 80,
          y: 60,
          category: "server",
        },
        {
          id: "office-elevator",
          title: "Elevator Systems",
          description: "Tracks energy usage of elevator motors and control systems",
          x: 30,
          y: 55,
          category: "equipment",
        },
      ],
    },
    {
      id: "hotels",
      name: "Hotels",
      description: "Monitor energy usage across hotel properties and optimize guest comfort",
      monitoringPoints: [
        {
          id: "hotel-main",
          title: "Main Distribution Board",
          description: "Monitors overall hotel power consumption and power quality",
          x: 10,
          y: 50,
          category: "main",
        },
        {
          id: "hotel-hvac",
          title: "HVAC Systems",
          description: "Tracks energy consumption of heating, cooling and ventilation for guest rooms and common areas",
          x: 40,
          y: 30,
          category: "hvac",
        },
        {
          id: "hotel-kitchen",
          title: "Kitchen Equipment",
          description: "Monitors energy-intensive kitchen and restaurant equipment",
          x: 70,
          y: 40,
          category: "equipment",
        },
        {
          id: "hotel-lighting",
          title: "Lighting Systems",
          description: "Tracks lighting energy usage in guest rooms, lobbies and exterior areas",
          x: 30,
          y: 60,
          category: "lighting",
        },
        {
          id: "hotel-pool",
          title: "Pool & Spa Facilities",
          description: "Monitors energy consumption of pool heating, pumps and spa equipment",
          x: 60,
          y: 75,
          category: "equipment",
        },
      ],
    },
    {
      id: "datacenter",
      name: "Data Center",
      description: "Optimize high-density power usage in critical IT environments",
      monitoringPoints: [
        {
          id: "dc-main",
          title: "Main Power Distribution",
          description: "Monitors overall data center power consumption and redundant systems",
          x: 15,
          y: 80,
          category: "main",
        },
        {
          id: "dc-server",
          title: "Server Racks",
          description: "Tracks power usage of individual server racks to identify hotspots",
          x: 40,
          y: 50,
          category: "server",
        },
        {
          id: "dc-cooling",
          title: "Precision Cooling",
          description: "Monitors energy consumption of CRAC units and cooling infrastructure",
          x: 75,
          y: 30,
          category: "hvac",
        },
        {
          id: "dc-ups",
          title: "UPS Systems",
          description: "Tracks efficiency and power draw of uninterruptible power supplies",
          x: 20,
          y: 30,
          category: "equipment",
        },
        {
          id: "dc-lighting",
          title: "Data Hall Lighting",
          description: "Monitors lighting systems in server areas",
          x: 65,
          y: 70,
          category: "lighting",
        },
      ],
    },
    {
      id: "retail",
      name: "Retail",
      description: "Monitor energy usage across store locations and optimize customer comfort",
      monitoringPoints: [
        {
          id: "retail-main",
          title: "Main Electrical Panel",
          description: "Monitors overall store power consumption",
          x: 10,
          y: 70,
          category: "main",
        },
        {
          id: "retail-hvac",
          title: "Store HVAC",
          description: "Tracks heating and cooling systems for customer comfort",
          x: 30,
          y: 20,
          category: "hvac",
        },
        {
          id: "retail-lighting",
          title: "Display Lighting",
          description: "Monitors energy-intensive display and accent lighting",
          x: 60,
          y: 40,
          category: "lighting",
        },
        {
          id: "retail-refrigeration",
          title: "Refrigeration Units",
          description: "Tracks energy usage of refrigerated display cases and cold storage",
          x: 80,
          y: 60,
          category: "equipment",
        },
        {
          id: "retail-pos",
          title: "Point of Sale Systems",
          description: "Monitors electronic equipment at checkout areas",
          x: 40,
          y: 75,
          category: "retail",
        },
      ],
    },
    {
      id: "industrial",
      name: "Industrial Facility",
      description: "Optimize energy usage across manufacturing floors and production lines",
      monitoringPoints: [
        {
          id: "ind-main",
          title: "Main Distribution",
          description: "Monitors overall facility power consumption and demand patterns",
          x: 15,
          y: 80,
          category: "main",
        },
        {
          id: "ind-hvac",
          title: "Industrial HVAC",
          description: "Tracks heating, ventilation, and cooling systems for production areas",
          x: 40,
          y: 30,
          category: "hvac",
        },
        {
          id: "ind-production",
          title: "Production Equipment",
          description: "Monitors energy-intensive manufacturing machinery and assembly lines",
          x: 70,
          y: 50,
          category: "production",
        },
        {
          id: "ind-lighting",
          title: "Facility Lighting",
          description: "Tracks lighting systems across production floors and warehousing",
          x: 30,
          y: 60,
          category: "lighting",
        },
        {
          id: "ind-compressors",
          title: "Air Compressors",
          description: "Monitors compressed air systems used throughout the facility",
          x: 60,
          y: 20,
          category: "equipment",
        },
      ],
    },
    {
      id: "rd",
      name: "R&D Facilities",
      description: "Optimize energy usage in research environments while maintaining critical parameters",
      monitoringPoints: [
        {
          id: "rd-main",
          title: "Main Power Distribution",
          description: "Monitors overall facility power consumption and quality",
          x: 15,
          y: 80,
          category: "main",
        },
        {
          id: "rd-hvac",
          title: "Precision HVAC",
          description: "Tracks specialized climate control systems for research environments",
          x: 40,
          y: 25,
          category: "hvac",
        },
        {
          id: "rd-lab",
          title: "Laboratory Equipment",
          description: "Monitors energy-intensive research equipment and instruments",
          x: 65,
          y: 40,
          category: "lab",
        },
        {
          id: "rd-cleanroom",
          title: "Clean Room Systems",
          description: "Tracks energy usage of clean room filtration and environmental controls",
          x: 75,
          y: 60,
          category: "equipment",
        },
        {
          id: "rd-cooling",
          title: "Process Cooling",
          description: "Monitors specialized cooling systems for research equipment",
          x: 30,
          y: 50,
          category: "hvac",
        },
      ],
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
      case "server":
        return "bg-emerald-500"
      case "production":
        return "bg-orange-500"
      case "retail":
        return "bg-pink-500"
      case "lab":
        return "bg-teal-500"
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
      case "server":
        return "border-emerald-500"
      case "production":
        return "border-orange-500"
      case "retail":
        return "border-pink-500"
      case "lab":
        return "border-teal-500"
      default:
        return "border-slate-500"
    }
  }

  const renderBuildingIllustration = (buildingType: string) => {
    switch (buildingType) {
      case "office":
        return (
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            style={{ filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))" }}
          >
            {/* Office Building */}
            <rect x="10" y="15" width="80" height="70" fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.5" />
            <rect x="10" y="15" width="80" height="10" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.5" />

            {/* Windows */}
            <rect x="15" y="30" width="10" height="10" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="30" y="30" width="10" height="10" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="45" y="30" width="10" height="10" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="60" y="30" width="10" height="10" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="75" y="30" width="10" height="10" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />

            <rect x="15" y="45" width="10" height="10" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="30" y="45" width="10" height="10" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="45" y="45" width="10" height="10" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="60" y="45" width="10" height="10" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="75" y="45" width="10" height="10" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />

            <rect x="15" y="60" width="10" height="10" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="30" y="60" width="10" height="10" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="45" y="60" width="10" height="10" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="60" y="60" width="10" height="10" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />

            {/* Door */}
            <rect x="75" y="65" width="10" height="15" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />

            {/* Main Electrical Panel - clearly labeled */}
            <rect x="10" y="65" width="15" height="15" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="15" y="75" fontSize="2" textAnchor="middle" fill="#64748b">
              MAIN
            </text>
            <line x1="12" y1="70" x2="18" y2="70" stroke="#64748b" strokeWidth="0.3" />
            <line x1="12" y1="72" x2="18" y2="72" stroke="#64748b" strokeWidth="0.3" />
            <line x1="12" y1="74" x2="18" y2="74" stroke="#64748b" strokeWidth="0.3" />

            {/* HVAC System on roof - clearly labeled */}
            <rect x="35" y="10" width="15" height="5" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.8" />
            <rect x="38" y="10" width="9" height="2" fill="#94a3b8" stroke="#64748b" strokeWidth="0.3" />
            <text x="42.5" y="14" fontSize="2" textAnchor="middle" fill="#64748b">
              HVAC
            </text>

            {/* Lighting Circuit - clearly labeled */}
            <rect x="65" y="20" width="10" height="5" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="70" y="23.5" fontSize="2" textAnchor="middle" fill="#64748b">
              LIGHTING
            </text>
            <line x1="67" y1="25" x2="73" y2="25" stroke="#f59e0b" strokeWidth="0.3" />
            <circle cx="70" cy="22" r="1" fill="#f59e0b" opacity="0.7" />

            {/* Server Room - clearly labeled */}
            <rect x="75" y="55" width="15" height="10" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="82.5" y="60" fontSize="2" textAnchor="middle" fill="#64748b">
              SERVER
            </text>
            <rect x="77" y="61" width="4" height="3" fill="#64748b" stroke="#475569" strokeWidth="0.2" />
            <rect x="82" y="61" width="4" height="3" fill="#64748b" stroke="#475569" strokeWidth="0.2" />

            {/* Elevator Systems - clearly labeled */}
            <rect x="25" y="50" width="10" height="15" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="30" y="55" fontSize="2" textAnchor="middle" fill="#64748b">
              ELEVATOR
            </text>
            <line x1="27" y1="57" x2="33" y2="57" stroke="#64748b" strokeWidth="0.3" />
            <line x1="30" y1="57" x2="30" y2="63" stroke="#64748b" strokeWidth="0.3" />
          </svg>
        )
      case "hotels":
        return (
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            style={{ filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))" }}
          >
            {/* Hotel building */}
            <rect x="10" y="20" width="80" height="65" fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.5" />

            {/* Roof/top floor */}
            <rect x="10" y="20" width="80" height="5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.5" />

            {/* Windows - guest rooms */}
            <rect x="15" y="30" width="8" height="8" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="28" y="30" width="8" height="8" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="41" y="30" width="8" height="8" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="54" y="30" width="8" height="8" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="67" y="30" width="8" height="8" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />

            <rect x="15" y="43" width="8" height="8" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="28" y="43" width="8" height="8" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="41" y="43" width="8" height="8" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="54" y="43" width="8" height="8" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="67" y="43" width="8" height="8" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />

            <rect x="15" y="56" width="8" height="8" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="28" y="56" width="8" height="8" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="41" y="56" width="8" height="8" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="54" y="56" width="8" height="8" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="67" y="56" width="8" height="8" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />

            {/* Lobby entrance */}
            <rect x="35" y="75" width="30" height="10" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />
            <rect x="45" y="75" width="10" height="10" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.5" />

            {/* Main Distribution Board - clearly labeled */}
            <rect x="10" y="45" width="15" height="15" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="17.5" y="50" fontSize="2" textAnchor="middle" fill="#64748b">
              MAIN
            </text>
            <text x="17.5" y="53" fontSize="2" textAnchor="middle" fill="#64748b">
              DISTRIBUTION
            </text>
            <line x1="12" y1="55" x2="23" y2="55" stroke="#64748b" strokeWidth="0.3" />
            <line x1="12" y1="57" x2="23" y2="57" stroke="#64748b" strokeWidth="0.3" />
            <line x1="12" y1="59" x2="23" y2="59" stroke="#64748b" strokeWidth="0.3" />

            {/* HVAC Systems - clearly labeled */}
            <rect x="35" y="25" width="15" height="10" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="42.5" y="29" fontSize="2" textAnchor="middle" fill="#64748b">
              HVAC
            </text>
            <text x="42.5" y="32" fontSize="2" textAnchor="middle" fill="#64748b">
              SYSTEMS
            </text>
            <rect x="38" y="34" width="9" height="2" fill="#94a3b8" stroke="#64748b" strokeWidth="0.3" />

            {/* Kitchen Equipment - clearly labeled */}
            <rect x="65" y="35" width="15" height="15" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="72.5" y="40" fontSize="2" textAnchor="middle" fill="#64748b">
              KITCHEN
            </text>
            <text x="72.5" y="43" fontSize="2" textAnchor="middle" fill="#64748b">
              EQUIPMENT
            </text>
            <rect x="67" y="45" width="5" height="3" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="73" y="45" width="5" height="3" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.3" />

            {/* Lighting Systems - clearly labeled */}
            <rect x="25" y="55" width="15" height="10" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="32.5" y="59" fontSize="2" textAnchor="middle" fill="#64748b">
              LIGHTING
            </text>
            <text x="32.5" y="62" fontSize="2" textAnchor="middle" fill="#64748b">
              SYSTEMS
            </text>
            <line x1="27" y1="64" x2="38" y2="64" stroke="#f59e0b" strokeWidth="0.3" />
            <circle cx="30" cy="57" r="1" fill="#f59e0b" opacity="0.7" />
            <circle cx="35" cy="57" r="1" fill="#f59e0b" opacity="0.7" />

            {/* Pool & Spa - clearly labeled */}
            <rect x="55" y="70" width="15" height="10" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="62.5" y="74" fontSize="2" textAnchor="middle" fill="#64748b">
              POOL &
            </text>
            <text x="62.5" y="77" fontSize="2" textAnchor="middle" fill="#64748b">
              SPA
            </text>
            <rect x="57" y="78" width="11" height="1" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.2" />
            <path
              d="M58,78 L58,79 M60,78 L60,79 M62,78 L62,79 M64,78 L64,79 M66,78 L66,79"
              stroke="#0ea5e9"
              strokeWidth="0.2"
            />
          </svg>
        )
      case "datacenter":
        return (
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            style={{ filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))" }}
          >
            {/* Data center building */}
            <rect x="10" y="20" width="80" height="65" fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.5" />

            {/* Main Power Distribution - clearly labeled */}
            <rect x="10" y="75" width="20" height="10" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="20" y="79" fontSize="2" textAnchor="middle" fill="#64748b">
              MAIN POWER
            </text>
            <text x="20" y="82" fontSize="2" textAnchor="middle" fill="#64748b">
              DISTRIBUTION
            </text>
            <line x1="12" y1="84" x2="28" y2="84" stroke="#64748b" strokeWidth="0.3" />
            <line x1="12" y1="85" x2="28" y2="85" stroke="#64748b" strokeWidth="0.3" />

            {/* Server Racks - clearly labeled */}
            <rect x="35" y="40" width="30" height="25" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="50" y="38" fontSize="2" textAnchor="middle" fill="#64748b">
              SERVER RACKS
            </text>

            <rect x="38" y="45" width="5" height="15" fill="#64748b" stroke="#475569" strokeWidth="0.3" />
            <rect x="45" y="45" width="5" height="15" fill="#64748b" stroke="#475569" strokeWidth="0.3" />
            <rect x="52" y="45" width="5" height="15" fill="#64748b" stroke="#475569" strokeWidth="0.3" />
            <rect x="59" y="45" width="5" height="15" fill="#64748b" stroke="#475569" strokeWidth="0.3" />

            <rect x="38" y="45" width="5" height="1" fill="#22c55e" stroke="none" />
            <rect x="45" y="45" width="5" height="1" fill="#22c55e" stroke="none" />
            <rect x="52" y="45" width="5" height="1" fill="#ef4444" stroke="none" />
            <rect x="59" y="45" width="5" height="1" fill="#22c55e" stroke="none" />

            {/* Precision Cooling - clearly labeled */}
            <rect x="70" y="25" width="15" height="15" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="77.5" y="30" fontSize="2" textAnchor="middle" fill="#64748b">
              PRECISION
            </text>
            <text x="77.5" y="33" fontSize="2" textAnchor="middle" fill="#64748b">
              COOLING
            </text>
            <rect x="72" y="35" width="11" height="3" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <path
              d="M73,35 L73,38 M75,35 L75,38 M77,35 L77,38 M79,35 L79,38 M81,35 L81,38"
              stroke="#0ea5e9"
              strokeWidth="0.3"
            />

            {/* UPS Systems - clearly labeled */}
            <rect x="15" y="25" width="15" height="15" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="22.5" y="30" fontSize="2" textAnchor="middle" fill="#64748b">
              UPS
            </text>
            <text x="22.5" y="33" fontSize="2" textAnchor="middle" fill="#64748b">
              SYSTEMS
            </text>
            <rect x="17" y="35" width="11" height="3" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.3" />
            <circle cx="20" cy="36.5" r="1" fill="#22c55e" />
            <circle cx="25" cy="36.5" r="1" fill="#22c55e" />

            {/* Data Hall Lighting - clearly labeled */}
            <rect x="60" y="70" width="15" height="10" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="67.5" y="74" fontSize="2" textAnchor="middle" fill="#64748b">
              DATA HALL
            </text>
            <text x="67.5" y="77" fontSize="2" textAnchor="middle" fill="#64748b">
              LIGHTING
            </text>
            <line x1="62" y1="79" x2="73" y2="79" stroke="#f59e0b" strokeWidth="0.3" />
            <circle cx="65" cy="72" r="1" fill="#f59e0b" opacity="0.7" />
            <circle cx="70" cy="72" r="1" fill="#f59e0b" opacity="0.7" />
          </svg>
        )
      case "retail":
        return (
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            style={{ filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))" }}
          >
            {/* Retail store */}
            <rect x="10" y="20" width="80" height="65" fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.5" />

            {/* Storefront windows */}
            <rect
              x="10"
              y="60"
              width="80"
              height="15"
              fill="#bfdbfe"
              stroke="#94a3b8"
              strokeWidth="0.5"
              opacity="0.5"
            />

            {/* Door */}
            <rect x="45" y="65" width="10" height="15" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />

            {/* Main Electrical Panel - clearly labeled */}
            <rect x="10" y="65" width="15" height="15" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="17.5" y="70" fontSize="2" textAnchor="middle" fill="#64748b">
              MAIN
            </text>
            <text x="17.5" y="73" fontSize="2" textAnchor="middle" fill="#64748b">
              PANEL
            </text>
            <line x1="12" y1="75" x2="23" y2="75" stroke="#64748b" strokeWidth="0.3" />
            <line x1="12" y1="77" x2="23" y2="77" stroke="#64748b" strokeWidth="0.3" />
            <line x1="12" y1="79" x2="23" y2="79" stroke="#64748b" strokeWidth="0.3" />

            {/* Store HVAC - clearly labeled */}
            <rect x="25" y="15" width="15" height="10" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="32.5" y="20" fontSize="2" textAnchor="middle" fill="#64748b">
              STORE
            </text>
            <text x="32.5" y="23" fontSize="2" textAnchor="middle" fill="#64748b">
              HVAC
            </text>
            <rect x="28" y="25" width="9" height="2" fill="#94a3b8" stroke="#64748b" strokeWidth="0.3" />

            {/* Display Lighting - clearly labeled */}
            <rect x="55" y="35" width="15" height="10" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="62.5" y="39" fontSize="2" textAnchor="middle" fill="#64748b">
              DISPLAY
            </text>
            <text x="62.5" y="42" fontSize="2" textAnchor="middle" fill="#64748b">
              LIGHTING
            </text>
            <line x1="57" y1="44" x2="68" y2="44" stroke="#f59e0b" strokeWidth="0.3" />
            <circle cx="60" cy="37" r="1" fill="#f59e0b" opacity="0.7" />
            <circle cx="65" cy="37" r="1" fill="#f59e0b" opacity="0.7" />

            {/* Refrigeration Units - clearly labeled */}
            <rect x="75" y="55" width="15" height="15" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="82.5" y="60" fontSize="2" textAnchor="middle" fill="#64748b">
              REFRIGERATION
            </text>
            <text x="82.5" y="63" fontSize="2" textAnchor="middle" fill="#64748b">
              UNITS
            </text>
            <rect x="77" y="65" width="11" height="3" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <path d="M78,65 L78,68 M80,65 L80,68 M82,65 L82,68 M84,65 L84,68" stroke="#0ea5e9" strokeWidth="0.3" />

            {/* Point of Sale Systems - clearly labeled */}
            <rect x="35" y="70" width="15" height="10" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="42.5" y="74" fontSize="2" textAnchor="middle" fill="#64748b">
              POINT OF
            </text>
            <text x="42.5" y="77" fontSize="2" textAnchor="middle" fill="#64748b">
              SALE
            </text>
            <rect x="37" y="78" width="5" height="1" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.2" />
            <rect x="43" y="78" width="5" height="1" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.2" />
          </svg>
        )
      case "industrial":
        return (
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            style={{ filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))" }}
          >
            {/* Industrial facility building */}
            <rect x="10" y="20" width="80" height="65" fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.5" />

            {/* Roof with equipment */}
            <rect x="10" y="20" width="80" height="5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.5" />
            <rect x="15" y="15" width="10" height="5" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />
            <rect x="30" y="15" width="10" height="5" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />
            <rect x="70" y="15" width="15" height="5" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />

            {/* Factory windows */}
            <rect x="15" y="30" width="10" height="5" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="30" y="30" width="10" height="5" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="45" y="30" width="10" height="5" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="60" y="30" width="10" height="5" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="75" y="30" width="10" height="5" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />

            {/* Factory floor */}
            <rect x="15" y="40" width="70" height="30" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.3" />

            {/* Production machinery */}
            <rect x="20" y="45" width="15" height="10" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />
            <rect x="40" y="45" width="15" height="10" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />
            <rect x="60" y="45" width="15" height="10" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />
            <rect x="20" y="60" width="15" height="5" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />
            <rect x="40" y="60" width="15" height="5" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />
            <rect x="60" y="60" width="15" height="5" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />

            {/* Main entrance */}
            <rect x="45" y="75" width="10" height="10" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />

            {/* Main Distribution - clearly labeled */}
            <rect x="10" y="75" width="20" height="10" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="20" y="79" fontSize="2" textAnchor="middle" fill="#64748b">
              MAIN
            </text>
            <text x="20" y="82" fontSize="2" textAnchor="middle" fill="#64748b">
              DISTRIBUTION
            </text>
            <line x1="12" y1="84" x2="28" y2="84" stroke="#64748b" strokeWidth="0.3" />
            <line x1="12" y1="85" x2="28" y2="85" stroke="#64748b" strokeWidth="0.3" />

            {/* Industrial HVAC - clearly labeled */}
            <rect x="35" y="25" width="15" height="10" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="42.5" y="29" fontSize="2" textAnchor="middle" fill="#64748b">
              INDUSTRIAL
            </text>
            <text x="42.5" y="32" fontSize="2" textAnchor="middle" fill="#64748b">
              HVAC
            </text>
            <rect x="38" y="34" width="9" height="2" fill="#94a3b8" stroke="#64748b" strokeWidth="0.3" />

            {/* Production Equipment - clearly labeled */}
            <rect x="65" y="45" width="15" height="15" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="72.5" y="49" fontSize="2" textAnchor="middle" fill="#64748b">
              PRODUCTION
            </text>
            <text x="72.5" y="52" fontSize="2" textAnchor="middle" fill="#64748b">
              EQUIPMENT
            </text>
            <rect x="67" y="54" width="5" height="4" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="73" y="54" width="5" height="4" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.3" />
            <line x1="69.5" y1="54" x2="69.5" y2="58" stroke="#64748b" strokeWidth="0.2" />
            <line x1="75.5" y1="54" x2="75.5" y2="58" stroke="#64748b" strokeWidth="0.2" />

            {/* Facility Lighting - clearly labeled */}
            <rect x="25" y="55" width="15" height="10" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="32.5" y="59" fontSize="2" textAnchor="middle" fill="#64748b">
              FACILITY
            </text>
            <text x="32.5" y="62" fontSize="2" textAnchor="middle" fill="#64748b">
              LIGHTING
            </text>
            <line x1="27" y1="64" x2="38" y2="64" stroke="#f59e0b" strokeWidth="0.3" />
            <circle cx="30" cy="57" r="1" fill="#f59e0b" opacity="0.7" />
            <circle cx="35" cy="57" r="1" fill="#f59e0b" opacity="0.7" />

            {/* Air Compressors - clearly labeled */}
            <rect x="55" y="15" width="15" height="10" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="62.5" y="19" fontSize="2" textAnchor="middle" fill="#64748b">
              AIR
            </text>
            <text x="62.5" y="22" fontSize="2" textAnchor="middle" fill="#64748b">
              COMPRESSORS
            </text>
            <rect x="57" y="23" width="4" height="1.5" fill="#64748b" stroke="#475569" strokeWidth="0.2" />
            <rect x="62" y="23" width="4" height="1.5" fill="#64748b" stroke="#475569" strokeWidth="0.2" />
          </svg>
        )
      case "rd":
        return (
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            style={{ filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))" }}
          >
            {/* R&D Facility building */}
            <rect x="10" y="20" width="80" height="65" fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.5" />

            {/* Roof with equipment */}
            <rect x="10" y="20" width="80" height="5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.5" />
            <rect x="15" y="15" width="10" height="5" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />
            <rect x="30" y="15" width="10" height="5" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />
            <rect x="70" y="15" width="15" height="5" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />

            {/* Windows */}
            <rect x="15" y="30" width="10" height="10" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="30" y="30" width="10" height="10" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="45" y="30" width="10" height="10" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="60" y="30" width="10" height="10" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="75" y="30" width="10" height="10" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />

            <rect x="15" y="45" width="10" height="10" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="30" y="45" width="10" height="10" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="75" y="45" width="10" height="10" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />

            {/* Main entrance */}
            <rect x="45" y="75" width="10" height="10" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />

            {/* Main Power Distribution - clearly labeled */}
            <rect x="10" y="75" width="20" height="10" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="20" y="79" fontSize="2" textAnchor="middle" fill="#64748b">
              MAIN POWER
            </text>
            <text x="20" y="82" fontSize="2" textAnchor="middle" fill="#64748b">
              DISTRIBUTION
            </text>
            <line x1="12" y1="84" x2="28" y2="84" stroke="#64748b" strokeWidth="0.3" />
            <line x1="12" y1="85" x2="28" y2="85" stroke="#64748b" strokeWidth="0.3" />

            {/* Precision HVAC - clearly labeled */}
            <rect x="35" y="20" width="15" height="10" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="42.5" y="24" fontSize="2" textAnchor="middle" fill="#64748b">
              PRECISION
            </text>
            <text x="42.5" y="27" fontSize="2" textAnchor="middle" fill="#64748b">
              HVAC
            </text>
            <rect x="38" y="29" width="9" height="2" fill="#94a3b8" stroke="#64748b" strokeWidth="0.3" />

            {/* Laboratory Equipment - clearly labeled */}
            <rect x="60" y="35" width="15" height="15" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="67.5" y="40" fontSize="2" textAnchor="middle" fill="#64748b">
              LABORATORY
            </text>
            <text x="67.5" y="43" fontSize="2" textAnchor="middle" fill="#64748b">
              EQUIPMENT
            </text>
            <rect x="62" y="45" width="5" height="3" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.3" />
            <rect x="68" y="45" width="5" height="3" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.3" />
            <circle cx="64.5" cy="46.5" r="0.8" fill="#14b8a6" />
            <circle cx="70.5" cy="46.5" r="0.8" fill="#14b8a6" />

            {/* Clean Room Systems - clearly labeled */}
            <rect x="70" y="55" width="15" height="15" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="77.5" y="60" fontSize="2" textAnchor="middle" fill="#64748b">
              CLEAN ROOM
            </text>
            <text x="77.5" y="63" fontSize="2" textAnchor="middle" fill="#64748b">
              SYSTEMS
            </text>
            <rect x="72" y="65" width="11" height="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.3" />
            <line x1="72" y1="66.5" x2="83" y2="66.5" stroke="#94a3b8" strokeWidth="0.2" />
            <line x1="74" y1="65" x2="74" y2="68" stroke="#94a3b8" strokeWidth="0.2" />
            <line x1="77" y1="65" x2="77" y2="68" stroke="#94a3b8" strokeWidth="0.2" />
            <line x1="80" y1="65" x2="80" y2="68" stroke="#94a3b8" strokeWidth="0.2" />

            {/* Process Cooling - clearly labeled */}
            <rect x="25" y="45" width="15" height="15" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" />
            <text x="32.5" y="50" fontSize="2" textAnchor="middle" fill="#64748b">
              PROCESS
            </text>
            <text x="32.5" y="53" fontSize="2" textAnchor="middle" fill="#64748b">
              COOLING
            </text>
            <rect x="27" y="55" width="11" height="3" fill="#bfdbfe" stroke="#94a3b8" strokeWidth="0.3" />
            <path
              d="M28,55 L28,58 M30,55 L30,58 M32,55 L32,58 M34,55 L34,58 M36,55 L36,58"
              stroke="#0ea5e9"
              strokeWidth="0.3"
            />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <Tabs defaultValue="office" className="w-full">
      <TabsList className="grid grid-cols-2 md:grid-cols-6 mb-8">
        {buildingTypes.map((type) => (
          <TabsTrigger key={type.id} value={type.id} onClick={() => setActivePoint(null)}>
            {type.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {buildingTypes.map((buildingType) => (
        <TabsContent key={buildingType.id} value={buildingType.id}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden shadow-lg border border-slate-200">
              {/* Building illustration */}
              {renderBuildingIllustration(buildingType.id)}

              {/* Monitoring points */}
              <div className="absolute inset-0">
                {buildingType.monitoringPoints.map((point) => (
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

              {/* Instructions */}
              <div className="absolute top-3 right-3 bg-white bg-opacity-90 p-2 rounded-lg shadow-sm border border-slate-200">
                <p className="text-xs text-slate-600">Click on a point to learn more</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 flex items-center mb-3">
                  <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-coral-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-coral-600"
                    >
                      <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
                      <path d="M2 20h20"></path>
                      <path d="M14 12v.01"></path>
                    </svg>
                  </div>
                  {buildingType.name} Monitoring
                </h3>
                <p className="text-slate-600">
                  {buildingType.description}. Our non-invasive sensors provide detailed visibility into your facility's
                  energy consumption patterns, helping identify inefficiencies and opportunities for savings.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 flex items-center mb-3">
                  <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-coral-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-coral-600"
                    >
                      <path d="M12 2v8"></path>
                      <path d="m4.93 10.93 1.41 1.41"></path>
                      <path d="M2 18h2"></path>
                      <path d="M20 18h2"></path>
                      <path d="m19.07 10.93-1.41 1.41"></path>
                      <path d="M22 22H2"></path>
                      <path d="M8 22v-4h8v4"></path>
                      <path d="M12 14v4"></path>
                    </svg>
                  </div>
                  Key Monitoring Points
                </h3>
                <ul className="space-y-2 text-slate-600">
                  {buildingType.monitoringPoints.map((point) => (
                    <li key={point.id} className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-1 h-4 w-4 text-coral-500 shrink-0" />
                      <span>{point.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
