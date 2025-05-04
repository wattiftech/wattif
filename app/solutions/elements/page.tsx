"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Clock,
  Bed,
  ChefHat,
  Users,
  FlaskRoundIcon as Flask,
  Building,
  BarChart3,
  Thermometer,
  Server,
  ShoppingBag,
  Microscope,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"

export default function ElementsPage() {
  const [activeTab, setActiveTab] = useState("commercial")
  const [mounted, setMounted] = useState(false)

  // Handle hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  const buildingTypes = [
    {
      id: "commercial",
      label: "Commercial Real Estate",
      icon: <Building className="h-5 w-5" />,
      image: "/office-energy-monitoring.png",
      description: "Optimize energy usage across tenant spaces and common areas while reducing peak demand charges.",
      elements: [
        {
          title: "Tenant Energy Attribution",
          icon: <Building />,
          description: "Track and allocate energy usage accurately by tenant without installing submeters.",
          benefits: [
            "Accurately track energy consumption by tenant without submeters",
            "Identify after-hours usage for appropriate billing",
            "Support green lease compliance with verifiable data",
          ],
        },
        {
          title: "Common Area Optimization",
          icon: <Users />,
          description: "Reduce waste in shared spaces while maintaining comfort and functionality.",
          benefits: [
            "Monitor lobby, corridor and amenity space consumption",
            "Identify excessive ventilation or conditioning in transitional spaces",
            "Optimize elevator and escalator energy usage patterns",
          ],
        },
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
      ],
    },
    {
      id: "hotels",
      label: "Hotels",
      icon: <Bed className="h-5 w-5" />,
      image: "/modern-office-energy.png",
      description:
        "Balance guest comfort with energy efficiency across rooms, amenities, and back-of-house operations.",
      elements: [
        {
          title: "After-Hours Energy Waste Detection",
          icon: <Clock />,
          description: "Identify energy waste during low-occupancy periods to reduce operational costs.",
          benefits: [
            "Identify unoccupied areas still consuming significant energy",
            "Detect equipment running unnecessarily during low-occupancy periods",
            "Track actual vs. scheduled HVAC and lighting operation",
          ],
        },
        {
          title: "Guest Room Energy Optimization",
          icon: <Bed />,
          description: "Optimize energy use in guest rooms while maintaining comfort standards.",
          benefits: [
            "Monitor room-specific consumption patterns against occupancy",
            "Identify rooms with abnormal energy signatures requiring maintenance",
            "Validate energy recovery effectiveness from unoccupied rooms",
          ],
        },
        {
          title: "Kitchen and Laundry Efficiency",
          icon: <ChefHat />,
          description: "Reduce energy costs in high-consumption hotel service areas.",
          benefits: [
            "Monitor high-energy equipment performance in real-time",
            "Track energy consumption per meal served or pound of laundry",
            "Identify equipment scheduling opportunities during off-peak hours",
          ],
        },
      ],
    },
    {
      id: "educational",
      label: "Educational Buildings",
      icon: <Flask className="h-5 w-5" />,
      image: "/university-energy-monitoring.png",
      description: "Manage energy across diverse campus facilities while supporting sustainability goals.",
      elements: [
        {
          title: "Occupancy-Based Energy Management",
          icon: <Users />,
          description: "Align building energy use with actual occupancy patterns across campus.",
          benefits: [
            "Correlate energy use with actual classroom and facility usage",
            "Identify conditioning waste during vacations and breaks",
            "Optimize building schedules based on actual usage patterns",
          ],
        },
        {
          title: "Lab and Specialized Equipment Monitoring",
          icon: <Flask />,
          description: "Optimize energy-intensive research facilities without compromising research.",
          benefits: [
            "Track energy-intensive research equipment usage and efficiency",
            "Ensure proper ventilation system operation without excess energy",
            "Identify opportunities for consolidating research activities",
          ],
        },
        {
          title: "Campus-Wide Energy Allocation",
          icon: <BarChart3 />,
          description: "Accurately track and allocate energy costs across departments and buildings.",
          benefits: [
            "Accurately allocate energy costs to departments and buildings",
            "Identify highest-priority buildings for efficiency upgrades",
            "Support campus sustainability goals with verified consumption data",
          ],
        },
      ],
    },
    {
      id: "datacenters",
      label: "Data Centers",
      icon: <Server className="h-5 w-5" />,
      image: "/modern-data-center-energy-monitoring.png",
      description: "Optimize PUE while ensuring reliability and supporting IT infrastructure needs.",
      elements: [
        {
          title: "Cooling Efficiency Optimization",
          icon: <Thermometer />,
          description: "Balance cooling needs with energy efficiency to reduce PUE.",
          benefits: [
            "Identify hotspots and overcooled areas to balance airflow",
            "Monitor CRAC/CRAH unit performance and detect degradation",
            "Track cooling energy per kW of IT load to optimize PUE",
          ],
        },
        {
          title: "Auxiliary System Monitoring",
          icon: <Server />,
          description: "Ensure support systems operate efficiently without wasting energy.",
          benefits: [
            "Track UPS efficiency and operating parameters",
            "Monitor support equipment energy consumption",
            "Identify parasitic loads that increase overall energy footprint",
          ],
        },
        {
          title: "IT Equipment Load Analysis",
          icon: <BarChart3 />,
          description: "Identify opportunities to optimize IT infrastructure energy use.",
          benefits: [
            "Identify zombie servers and underutilized equipment",
            "Correlate server loads with cooling requirements",
            "Support IT refresh ROI calculations with actual energy data",
          ],
        },
      ],
    },
    {
      id: "retail",
      label: "Multi-Site Retail",
      icon: <ShoppingBag className="h-5 w-5" />,
      image: "/retail-energy-monitoring.png",
      description: "Standardize energy performance across locations while supporting merchandising needs.",
      elements: [
        {
          title: "Store-to-Store Benchmarking",
          icon: <ShoppingBag />,
          description: "Compare energy performance across locations to identify best practices.",
          benefits: [
            "Compare similar stores to identify outliers and best practices",
            "Normalize energy use by traffic, sales or square footage",
            "Identify specific operational differences driving performance variations",
          ],
        },
        {
          title: "HVAC and Refrigeration Performance",
          icon: <Thermometer />,
          description: "Ensure critical systems operate efficiently without compromising product integrity.",
          benefits: [
            "Detect refrigeration system inefficiencies before product risk",
            "Monitor HVAC performance against outdoor conditions",
            "Identify maintenance needs based on system degradation",
          ],
        },
        {
          title: "Lighting and Equipment Analysis",
          icon: <BarChart3 />,
          description: "Optimize lighting and equipment operation across all locations.",
          benefits: [
            "Verify lighting schedule compliance across locations",
            "Identify abnormal equipment energy signatures requiring intervention",
            "Track energy impact of merchandising and display changes",
          ],
        },
      ],
    },
    {
      id: "rd",
      label: "R&D Facilities",
      icon: <Microscope className="h-5 w-5" />,
      image: "/energy-monitoring-dashboard.png",
      description: "Balance precise environmental control with energy efficiency in research environments.",
      elements: [
        {
          title: "Specialized Equipment Monitoring",
          icon: <Microscope />,
          description: "Track and optimize energy use of specialized research equipment.",
          benefits: [
            "Track energy use of research-specific equipment",
            "Identify idle equipment still consuming standby power",
            "Support research grant energy allocation and reporting",
          ],
        },
        {
          title: "Environmental Condition Efficiency",
          icon: <Thermometer />,
          description: "Maintain critical environmental parameters while minimizing energy waste.",
          benefits: [
            "Monitor energy needed to maintain critical parameters",
            "Identify opportunities to optimize without compromising research",
            "Track energy impact of clean room and containment systems",
          ],
        },
        {
          title: "Safety System Optimization",
          icon: <Server />,
          description: "Ensure safety systems operate efficiently without compromising protection.",
          benefits: [
            "Ensure fume hoods and safety systems operate efficiently",
            "Monitor backup and redundant systems for waste",
            "Identify opportunities to reduce energy without compromising safety",
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
        image="/modular-energy-dashboard.png"
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
                <Button size="lg" className="bg-coral-500 hover:bg-coral-600">
                  Find Your Elements
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Consultation
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
      <section className="py-16 bg-slate-50">
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
                  <Button className="bg-coral-500 hover:bg-coral-600">
                    Explore {currentBuildingType.label} Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-coral-200/20 to-blue-200/20 rounded-3xl blur-xl"></div>
                  <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-lg">
                    <Image
                      src={currentBuildingType.image || "/placeholder.svg"}
                      alt={`${currentBuildingType.label} energy monitoring`}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Elements Cards */}
              <div className="grid md:grid-cols-3 gap-8">
                {currentBuildingType.elements.map((element, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden border-slate-200 transition-all duration-300 hover:shadow-lg h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-coral-100">
                          <div className="text-coral-600">{element.icon}</div>
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
                          {currentBuildingType.id === "commercial" && element.title === "Tenant Energy Attribution" && (
                            <Button
                              variant="outline"
                              className="w-full border-coral-200 text-coral-700 hover:bg-coral-50"
                            >
                              Start Allocating Costs
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                          )}
                          {currentBuildingType.id === "commercial" && element.title === "Common Area Optimization" && (
                            <Button
                              variant="outline"
                              className="w-full border-coral-200 text-coral-700 hover:bg-coral-50"
                            >
                              Start Reducing Waste
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                          )}
                          {currentBuildingType.id === "commercial" &&
                            element.title === "Peak Demand Charge Reduction" && (
                              <Button
                                variant="outline"
                                className="w-full border-coral-200 text-coral-700 hover:bg-coral-50"
                              >
                                Start Cutting Charges
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Button>
                            )}
                          {currentBuildingType.id === "hotels" &&
                            element.title === "After-Hours Energy Waste Detection" && (
                              <Button
                                variant="outline"
                                className="w-full border-coral-200 text-coral-700 hover:bg-coral-50"
                              >
                                Start Eliminating Waste
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Button>
                            )}
                          {currentBuildingType.id === "hotels" &&
                            element.title === "Guest Room Energy Optimization" && (
                              <Button
                                variant="outline"
                                className="w-full border-coral-200 text-coral-700 hover:bg-coral-50"
                              >
                                Start Optimizing Rooms
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Button>
                            )}
                          {currentBuildingType.id === "hotels" &&
                            element.title === "Kitchen and Laundry Efficiency" && (
                              <Button
                                variant="outline"
                                className="w-full border-coral-200 text-coral-700 hover:bg-coral-50"
                              >
                                Start Saving Energy
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Button>
                            )}
                          {currentBuildingType.id === "educational" &&
                            element.title === "Occupancy-Based Energy Management" && (
                              <Button
                                variant="outline"
                                className="w-full border-coral-200 text-coral-700 hover:bg-coral-50"
                              >
                                Start Matching Usage
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Button>
                            )}
                          {currentBuildingType.id === "educational" &&
                            element.title === "Lab and Specialized Equipment Monitoring" && (
                              <Button
                                variant="outline"
                                className="w-full border-coral-200 text-coral-700 hover:bg-coral-50"
                              >
                                Start Monitoring Labs
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Button>
                            )}
                          {currentBuildingType.id === "educational" &&
                            element.title === "Campus-Wide Energy Allocation" && (
                              <Button
                                variant="outline"
                                className="w-full border-coral-200 text-coral-700 hover:bg-coral-50"
                              >
                                Start Tracking Costs
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Button>
                            )}
                          {currentBuildingType.id === "datacenters" &&
                            element.title === "Cooling Efficiency Optimization" && (
                              <Button
                                variant="outline"
                                className="w-full border-coral-200 text-coral-700 hover:bg-coral-50"
                              >
                                Start Optimizing PUE
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Button>
                            )}
                          {currentBuildingType.id === "datacenters" &&
                            element.title === "Auxiliary System Monitoring" && (
                              <Button
                                variant="outline"
                                className="w-full border-coral-200 text-coral-700 hover:bg-coral-50"
                              >
                                Start Reducing Overhead
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Button>
                            )}
                          {currentBuildingType.id === "datacenters" &&
                            element.title === "IT Equipment Load Analysis" && (
                              <Button
                                variant="outline"
                                className="w-full border-coral-200 text-coral-700 hover:bg-coral-50"
                              >
                                Start Identifying Waste
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Button>
                            )}
                          {currentBuildingType.id === "retail" && element.title === "Store-to-Store Benchmarking" && (
                            <Button
                              variant="outline"
                              className="w-full border-coral-200 text-coral-700 hover:bg-coral-50"
                            >
                              Start Comparing Stores
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                          )}
                          {currentBuildingType.id === "retail" &&
                            element.title === "HVAC and Refrigeration Performance" && (
                              <Button
                                variant="outline"
                                className="w-full border-coral-200 text-coral-700 hover:bg-coral-50"
                              >
                                Start Preventing Failures
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Button>
                            )}
                          {currentBuildingType.id === "retail" &&
                            element.title === "Lighting and Equipment Analysis" && (
                              <Button
                                variant="outline"
                                className="w-full border-coral-200 text-coral-700 hover:bg-coral-50"
                              >
                                Start Optimizing Usage
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Button>
                            )}
                          {currentBuildingType.id === "rd" && element.title === "Specialized Equipment Monitoring" && (
                            <Button
                              variant="outline"
                              className="w-full border-coral-200 text-coral-700 hover:bg-coral-50"
                            >
                              Start Tracking Equipment
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                          )}
                          {currentBuildingType.id === "rd" &&
                            element.title === "Environmental Condition Efficiency" && (
                              <Button
                                variant="outline"
                                className="w-full border-coral-200 text-coral-700 hover:bg-coral-50"
                              >
                                Start Balancing Conditions
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Button>
                            )}
                          {currentBuildingType.id === "rd" && element.title === "Safety System Optimization" && (
                            <Button
                              variant="outline"
                              className="w-full border-coral-200 text-coral-700 hover:bg-coral-50"
                            >
                              Start Improving Safety
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                          )}
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
