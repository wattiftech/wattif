"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Clock,
  Building,
  BarChart3,
  Thermometer,
  Server,
  Microscope,
  CheckCircle2,
  Warehouse,
  HardHat,
  Factory,
  Truck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"
import Link from "next/link"
import contructionImage from "@/public/commercial-real-estate.png"
import dataCentersImage from "@/public/data-centers.png"
import constructionSiteImage from "@/public/construction-site.png"
import logisticsFacilityImage from "@/public/logistics-facility.png"
import energyMonitoringImage from "@/public/energy-monitoring-dashboard.png"
import industrialPlantImage from "@/public/industrial-plant.png"


export default function ElementsPage() {
  const [activeTab, setActiveTab] = useState("commercial-real-estate")
  const [mounted, setMounted] = useState(false)

  // Handle hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  const buildingTypes = [
    {
      id: "commercial-real-estate",
      label: "Commercial Real Estate",
      icon: <Building className="h-5 w-5" />,
      image: contructionImage,
      description: "Optimize energy usage across tenant spaces and common areas while reducing peak demand charges.",
      elements: [
        {
          title: "Tenant Energy Attribution",
          icon: <Building />,
          description: "Track and allocate energy usage accurately by tenant without installing submeters.",
          benefits: [
            "Track and allocate energy usage accurately by tenant without installing submeters",
            "Identify after-hours usage for appropriate billing",
            "Support green lease compliance with verifiable data",
          ],
        },
        {
          title: "Portfolio Analysis",
          icon: <Building />,
          description: "Track and allocate energy usage by tenant or property across your portfolio.",
          benefits: [
            "Track and allocate energy usage by tenant or property",
            "Compare performance across multiple buildings",
            "Support green lease compliance and ESG reporting",
          ],
        },
        {
          title: "Energy Optimization",
          icon: <BarChart3 />,
          description: "Optimize energy usage through intelligent scheduling and load management.",
          benefits: [
            "Optimize HVAC schedules and equipment operation",
            "Reduce peak demand charges through load management",
            "Automate lighting and equipment controls",
          ],
        },
        {
          title: "Energy Waste",
          icon: <Clock />,
          description: "Identify and eliminate unnecessary energy consumption throughout your facilities.",
          benefits: [
            "Identify after-hours energy consumption",
            "Detect equipment running unnecessarily",
            "Monitor and reduce common area inefficiencies",
          ],
        },
        {
          title: "Building Intelligence",
          icon: <Server />,
          description: "Monitor system performance and benchmark against industry standards.",
          benefits: [
            "Monitor system performance and equipment health",
            "Benchmark against industry standards and similar properties",
            "Track maintenance needs and efficiency trends",
          ],
        },
      ],
    },
    {
      id: "data-centers",
      label: "Data Centers",
      icon: <Server className="h-5 w-5" />,
      image: dataCentersImage,
      description: "Optimize PUE while ensuring reliability and supporting IT infrastructure needs.",
      elements: [
        {
          title: "PUE Optimization",
          icon: <Thermometer />,
          description: "Real-time power usage effectiveness monitoring and optimization.",
          benefits: [
            "Real-time power usage effectiveness monitoring",
            "Cooling system efficiency analysis",
            "Infrastructure utilization optimization",
          ],
        },
        {
          title: "Critical System Monitoring",
          icon: <Server />,
          description: "Ensure reliability and prevent downtime with proactive monitoring.",
          benefits: [
            "Equipment reliability tracking and fault detection",
            "Predictive failure alerts before downtime occurs",
            "Mission-critical system redundancy validation",
          ],
        },
        {
          title: "Cooling Efficiency Analysis",
          icon: <Thermometer />,
          description: "Optimize cooling systems for maximum efficiency and reliability.",
          benefits: [
            "Rack-level thermal monitoring and hotspot detection",
            "Airflow pattern optimization recommendations",
            "Temperature differential analysis across zones",
          ],
        },
        {
          title: "Capacity Planning",
          icon: <BarChart3 />,
          description: "Plan for future growth with data-driven capacity insights.",
          benefits: [
            "Power consumption forecasting based on growth trends",
            "Infrastructure utilization reporting for expansion planning",
            "Real-time capacity vs. demand monitoring",
          ],
        },
      ],
    },
    {
      id: "construction-sites",
      label: "Construction Sites",
      icon: <HardHat className="h-5 w-5" />,
      image: constructionSiteImage,
      description: "Monitor and optimize energy usage across temporary power systems and construction equipment.",
      elements: [
        {
          title: "Equipment Utilization Tracking",
          icon: <HardHat />,
          description: "Monitor and optimize construction equipment energy consumption.",
          benefits: [
            "Monitor heavy equipment energy consumption",
            "Track crane and pump efficiency patterns",
            "Identify idle equipment waste and optimization opportunities",
          ],
        },
        {
          title: "Temporary Power Optimization",
          icon: <Clock />,
          description: "Reduce waste from temporary power systems and equipment.",
          benefits: [
            "Optimize generator fuel consumption and scheduling",
            "Balance load distribution across temporary panels",
            "Minimize peak demand charges from utility connections",
          ],
        },
        {
          title: "Project Cost Allocation",
          icon: <BarChart3 />,
          description: "Allocate energy costs accurately across project phases and contractors.",
          benefits: [
            "Allocate energy costs by project phase and contractor",
            "Track energy consumption per square foot of construction",
            "Support LEED and green building certification efforts",
          ],
        },
        {
          title: "Safety and Compliance Monitoring",
          icon: <CheckCircle2 />,
          description: "Ensure electrical safety and code compliance throughout construction.",
          benefits: [
            "Monitor electrical system load balancing for safety",
            "Track temporary lighting adequacy and efficiency",
            "Ensure electrical code compliance throughout construction",
          ],
        },
      ],
    },
    {
      id: "logistics-facilities",
      label: "Logistics Facilities",
      icon: <Truck className="h-5 w-5" />,
      image: logisticsFacilityImage,
      description: "Optimize energy across loading docks, storage areas, and material handling systems.",
      elements: [
        {
          title: "Zone-Based Energy Management",
          icon: <Warehouse />,
          description: "Optimize energy across different operational zones in logistics facilities.",
          benefits: [
            "Monitor picking, packing, and storage areas separately",
            "Optimize HVAC zones based on operational activity",
            "Track energy consumption per unit processed",
          ],
        },
        {
          title: "Loading Dock Optimization",
          icon: <Truck />,
          description: "Reduce energy waste in high-traffic loading and unloading areas.",
          benefits: [
            "Monitor dock door and seal energy usage",
            "Optimize dock leveler efficiency patterns",
            "Track and manage reefer plug-in consumption",
          ],
        },
        {
          title: "Cold Storage Efficiency",
          icon: <Thermometer />,
          description: "Optimize refrigeration systems and cold storage energy usage.",
          benefits: [
            "Temperature differential monitoring across refrigerated zones",
            "Refrigeration system performance optimization",
            "Energy allocation by storage temperature requirement",
          ],
        },
        {
          title: "Automated Systems Monitoring",
          icon: <Server />,
          description: "Track and optimize energy usage of automated warehouse systems.",
          benefits: [
            "Track conveyor belt and sortation system efficiency",
            "Monitor warehouse management system energy usage",
            "Optimize robotic picker and packer energy consumption",
          ],
        },
      ],
    },
    {
      id: "r-and-d-facilities",
      label: "R&D Facilities",
      icon: <Microscope className="h-5 w-5" />,
      image: energyMonitoringImage,
      description: "Balance precise environmental control with energy efficiency in research environments.",
      elements: [
        {
          title: "Precision Environmental Control",
          icon: <Thermometer />,
          description: "Maintain critical environmental parameters while minimizing energy waste.",
          benefits: [
            "Monitor critical temperature and humidity zones",
            "Validate research environment stability for compliance",
            "Track fume hood and clean room energy requirements",
          ],
        },
        {
          title: "Experiment Correlation Analysis",
          icon: <Microscope />,
          description: "Track energy patterns in relation to research activities and outcomes.",
          benefits: [
            "Correlate energy patterns with research outcomes",
            "Identify equipment performance impacts on results",
            "Support research reproducibility and documentation",
          ],
        },
        {
          title: "Lab Equipment Efficiency",
          icon: <Server />,
          description: "Optimize energy usage of specialized laboratory equipment.",
          benefits: [
            "Monitor specialized research equipment performance",
            "Track energy consumption per experiment or test",
            "Optimize equipment scheduling and usage patterns",
          ],
        },
        {
          title: "Clean Room Optimization",
          icon: <CheckCircle2 />,
          description: "Maximize energy efficiency in clean room environments.",
          benefits: [
            "Monitor air filtration system efficiency",
            "Track particulate levels vs. energy consumption",
            "Optimize clean room pressure and airflow management",
          ],
        },
      ],
    },
    {
      id: "industrial-plants",
      label: "Industrial Plants",
      icon: <Factory className="h-5 w-5" />,
      image: industrialPlantImage,
      description: "Optimize energy across production lines, equipment, and facility systems.",
      elements: [
        {
          title: "Peak Demand Charge Reduction",
          icon: <BarChart3 />,
          description: "Identify and mitigate peak demand events to reduce utility charges.",
          benefits: [
            "Identify specific contributors to coincident peak loads",
            "Develop staggered equipment schedules to reduce demand charges",
            "Verify demand management strategy effectiveness",
          ],
        },
        {
          title: "Process Optimization",
          icon: <Factory />,
          description: "Optimize energy across production processes and equipment.",
          benefits: [
            "Production efficiency insights and energy correlations",
            "Equipment performance trending and analysis",
            "Real-time optimization recommendations for operations",
          ],
        },
        {
          title: "Predictive Maintenance",
          icon: <Clock />,
          description: "Predict equipment failures before they occur based on energy patterns.",
          benefits: [
            "Equipment failure prediction based on energy patterns",
            "Maintenance scheduling optimization to prevent downtime",
            "Cost avoidance through early intervention strategies",
          ],
        },
        {
          title: "Regulatory Compliance",
          icon: <CheckCircle2 />,
          description: "Automate energy-related regulatory compliance reporting.",
          benefits: [
            "Environmental reporting automation for EPA requirements",
            "Energy audit documentation and verification",
            "Track emissions correlation with energy usage patterns",
          ],
        },
      ],
    },
  ]

  const currentBuildingType = buildingTypes.find((type) => type.id === activeTab) || buildingTypes[0]

  if (!mounted) {
    return null // Prevent hydration issues
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 to-white">
      <Navbar />

      <PageHeader
        title="Wattif Elements"
        description="Energy-Focused Solutions for Six Building Types"
      // image="/modular-energy-dashboard.png"
      />

      {/* Hero Section with Animated Illustration */}
      <section className="relative py-12 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Targeted Energy Solutions for Every Building Type
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Our modular Elements approach delivers precise energy intelligence tailored to your specific building
                challenges.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-coral-500 hover:bg-coral-600">
                  <Link href="#select-your-building-type">
                    Find Your Elements
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">
                    Schedule Consultation
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-coral-200/30 to-blue-200/30 rounded-3xl blur-xl"></div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 shadow-lg">
                <Image
                  src="/energy-efficient-office.png"
                  alt="Energy monitoring dashboard"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Type Selector */}
      <section className="py-16 bg-slate-50" id="#select-your-building-type">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Select Your Building Type</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Each building type has unique energy challenges. Choose yours to see the specific Elements designed to
              address your needs.
            </p>
          </div>

          {/* Building Type Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
            {buildingTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={cn(
                  "flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300",
                  activeTab === type.id
                    ? "bg-coral-500 text-white shadow-lg scale-105"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-coral-300 hover:shadow",
                )}
              >
                <div className={cn("p-3 rounded-full mb-3", activeTab === type.id ? "bg-white/20" : "bg-slate-100")}>
                  {type.icon}
                </div>
                <span className="text-sm font-medium text-center">{type.label}</span>
              </button>
            ))}
          </div>

          {/* Selected Building Type Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-coral-100 text-coral-700 text-sm font-medium mb-4">
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    <span>Optimized for {currentBuildingType.label}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Energy Intelligence for {currentBuildingType.label}
                  </h2>
                  <p className="text-lg text-slate-600 mb-6">{currentBuildingType.description}</p>
                  <ul className="space-y-3 mb-8">
                    {currentBuildingType.elements.map((element, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-3 mt-1 p-1 rounded-full bg-coral-100 text-coral-600">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <span className="text-slate-700">{element.title}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/industries/${currentBuildingType.id}`}>
                    <Button className="bg-coral-500 hover:bg-coral-600">
                      Explore {currentBuildingType.label} Solutions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-coral-200/20 to-blue-200/20 rounded-3xl blur-xl"></div>
                  <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-lg">
                    <Image
                      src={currentBuildingType.image || "/placeholder.svg"}
                      alt={`${currentBuildingType.label} energy monitoring`}
                      placeholder="blur"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Elements Cards */}
              <div className="grid md:grid-cols-2 gap-8">
                {currentBuildingType.elements.map((element, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden border-slate-200 transition-all duration-300 hover:shadow-lg h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-coral-100 to-coral-200 shadow-sm">
                          <div className="text-coral-600 h-7 w-7">{element.icon}</div>
                        </div>
                        <h3 className="mb-3 text-xl font-semibold">{element.title}</h3>
                        <p className="mb-6 text-slate-600">{element.description}</p>
                        <div className="mt-auto">
                          <h4 className="font-medium text-slate-900 mb-3">Key Benefits:</h4>
                          <ul className="space-y-2 mb-6">
                            {element.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start">
                                <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-coral-500"></div>
                                <span className="text-slate-600 text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                          <Link href={'/contact'}>
                            <Button
                              variant="outline"
                              className="w-full border-coral-200 text-coral-700 hover:bg-coral-50"
                            >                              {
                                element.title === "Tenant Energy Attribution" &&
                                "Start Allocating Costs"}
                              {
                                element.title === "Portfolio Analysis" &&
                                "Start Analyzing Portfolio"}
                              {
                                element.title === "Energy Optimization" &&
                                "Start Optimizing Energy"}
                              {
                                element.title === "Energy Waste" &&
                                "Start Reducing Waste"}

                              {
                                element.title === "Common Area Optimization" &&
                                "Start Reducing Waste"}
                              {
                                element.title === "Peak Demand Charge Reduction" &&
                                "Start Cutting Charges"}
                              {
                                element.title === "Lighting and Scheduling Optimization" &&
                                "Start Optimizing Lighting"}

                              {
                                element.title === "PUE Optimization" &&
                                "Start Optimizing PUE"}
                              {
                                element.title === "Critical System Monitoring" &&
                                "Start Monitoring Systems"}
                              {
                                element.title === "Cooling Efficiency Analysis" &&
                                "Start Analyzing Cooling"}
                              {
                                element.title === "Capacity Planning" &&
                                "Start Planning Capacity"}

                              {
                                element.title === "Equipment Utilization Tracking" &&
                                "Start Tracking Equipment"}
                              {
                                element.title === "Temporary Power Optimization" &&
                                "Start Optimizing Power"}
                              {
                                element.title === "Project Cost Allocation" &&
                                "Start Allocating Costs"}
                              {
                                element.title === "Safety and Compliance Monitoring" &&
                                "Start Monitoring Safety"}

                              {
                                element.title === "Zone-Based Energy Management" &&
                                "Start Managing Zones"}
                              {
                                element.title === "Loading Dock Optimization" &&
                                "Start Optimizing Docks"}
                              {
                                element.title === "Cold Storage Efficiency" &&
                                "Start Optimizing Storage"}
                              {
                                element.title === "Automated Systems Monitoring" &&
                                "Start Monitoring Systems"}

                              {
                                element.title === "Precision Environmental Control" &&
                                "Start Controlling Environment"}
                              {
                                element.title === "Experiment Correlation Analysis" &&
                                "Start Analyzing Experiments"}
                              {
                                element.title === "Lab Equipment Efficiency" &&
                                "Start Optimizing Equipment"}
                              {
                                element.title === "Clean Room Optimization" &&
                                "Start Optimizing Clean Rooms"}

                              {
                                element.title === "Peak Demand Charge Reduction" &&
                                "Start Reducing Charges"}
                              {
                                element.title === "Process Optimization" &&
                                "Start Optimizing Processes"}
                              {
                                element.title === "Predictive Maintenance" &&
                                "Start Predicting Maintenance"}
                              {
                                element.title === "Regulatory Compliance" &&
                                "Start Automating Compliance"}

                              {
                                element.title === "Building Intelligence" &&
                                "Start Monitoring Performance"}

                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                          </Link>

                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-coral-500/20 text-coral-300 text-sm font-medium mb-4">
              <CheckCircle2 className="h-4 w-4 mr-1" />
              <span>Simple Implementation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How Wattif Elements Work</h2>
            <p className="text-lg text-slate-300">
              Our modular approach makes it easy to start small and expand your energy intelligence capabilities over
              time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-coral-500/20 to-coral-400/20 blur-sm"></div>
              <div className="relative rounded-xl bg-slate-800 p-8 border border-slate-700 h-full">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-coral-500/20 text-coral-400">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Select Your Elements</h3>
                <p className="text-slate-300">
                  Choose the specific Elements that address your most pressing energy challenges. Start with one or
                  implement multiple solutions.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-coral-500/20 to-coral-400/20 blur-sm"></div>
              <div className="relative rounded-xl bg-slate-800 p-8 border border-slate-700 h-full">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-coral-500/20 text-coral-400">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Quick Installation</h3>
                <p className="text-slate-300">
                  Our self-powered sensors install in minutes with no wiring or IT infrastructure required. Most
                  deployments are complete in less than a day.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-coral-500/20 to-coral-400/20 blur-sm"></div>
              <div className="relative rounded-xl bg-slate-800 p-8 border border-slate-700 h-full">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-coral-500/20 text-coral-400">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Immediate Insights</h3>
                <p className="text-slate-300">
                  Start receiving targeted insights and recommendations specific to your selected Elements within days,
                  not months. ROI typically begins in the first billing cycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-100">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="aspect-square rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/ceo-headshot.png"
                      alt="Facility Manager"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="font-semibold text-slate-900">Sarah Johnson</h4>
                  <p className="text-sm text-slate-600">Facility Director, Meridian Properties</p>
                </div>
                <div className="md:w-2/3">
                  <div className="mb-6">
                    <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                        fill="#F59E0B"
                      />
                      <path
                        d="M36 17.27L42.18 21L40.54 13.97L46 9.24L38.81 8.63L36 2L33.19 8.63L26 9.24L31.46 13.97L29.82 21L36 17.27Z"
                        fill="#F59E0B"
                      />
                      <path
                        d="M60 17.27L66.18 21L64.54 13.97L70 9.24L62.81 8.63L60 2L57.19 8.63L50 9.24L55.46 13.97L53.82 21L60 17.27Z"
                        fill="#F59E0B"
                      />
                      <path
                        d="M84 17.27L90.18 21L88.54 13.97L94 9.24L86.81 8.63L84 2L81.19 8.63L74 9.24L79.46 13.97L77.82 21L84 17.27Z"
                        fill="#F59E0B"
                      />
                      <path
                        d="M108 17.27L114.18 21L112.54 13.97L118 9.24L110.81 8.63L108 2L105.19 8.63L98 9.24L103.46 13.97L101.82 21L108 17.27Z"
                        fill="#F59E0B"
                      />
                    </svg>
                  </div>
                  <blockquote className="text-xl text-slate-700 italic mb-6">
                    "The Wattif Elements for commercial buildings helped us reduce energy costs by 23% in the first
                    year. The tenant attribution feature has completely transformed how we bill for after-hours usage."
                  </blockquote>
                  <p className="text-slate-600">
                    We implemented the Commercial Real Estate Elements across our 12-building portfolio and saw
                    immediate results. The installation was non-disruptive and the insights were actionable from day
                    one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl bg-gradient-to-br from-coral-50 to-slate-50 p-8 md:p-12 shadow-lg border border-slate-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    Ready to optimize your building's energy?
                  </h2>
                  <p className="text-lg text-slate-600 mb-6 md:mb-0">
                    Schedule a consultation to discuss which Elements are right for your energy challenges.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-coral-500 hover:bg-coral-600 px-8">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View Pricing
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
