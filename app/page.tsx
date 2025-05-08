"use client"

import { ReactNode, useState } from "react"
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Brain,
  Building2,
  ChevronRight,
  ClipboardCheck,
  Cpu,
  Eye,
  GraduationCap,
  Lightbulb,
  LineChart,
  Microscope,
  Server,
  ShoppingBag,
  Zap,
  Wrench,
  Users,
  Building,
  FlaskConical,
  Gauge,
  Workflow,
  Beaker,
  PieChart,
  AreaChart,
  CircuitBoard,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HowItWorks } from "@/components/how-it-works"
import { IndustryCard } from "@/components/industry-card"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

type CategoryCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
}

const CategoryCard = ({ icon, title, description }: CategoryCardProps) => (
  <Card className="border-none shadow-lg transition-all duration-300 hover:shadow-xl h-full">
    <CardHeader className="pb-2">
      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-coral-100">{icon}</div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-slate-600">{description}</p>
    </CardContent>
  </Card>
)

export default function Home() {
  const [activeTab, setActiveTab] = useState(0)

  // Tab data
  const tabs = [
    {
      name: "Commercial Buildings",
      icon: <Building className="h-5 w-5 mr-2" />,
      content: (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <CategoryCard
            icon={<LineChart className="h-5 w-5 text-coral-600" />}
            title="Patterns hiding in plain sight"
            description="Equipment cycling inefficiently, leading to tenant comfort issues and wasted energy."
          />
          <CategoryCard
            icon={<BarChart3 className="h-5 w-5 text-coral-600" />}
            title="Data without context"
            description="Monthly utility bills show consumption but not the why, when, or where."
          />
          <CategoryCard
            icon={<Server className="h-5 w-5 text-coral-600" />}
            title="Insights trapped in complexity"
            description="Building management data isolated from energy performance metrics."
          />
          <CategoryCard
            icon={<Lightbulb className="h-5 w-5 text-coral-600" />}
            title="The Wattif difference"
            description="Revealing operational inefficiencies that impact tenant satisfaction and operating costs."
          />
        </div>
      ),
    },
    {
      name: "Data Centers",
      icon: <Server className="h-5 w-5 mr-2" />,
      content: (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <CategoryCard
            icon={<Gauge className="h-5 w-5 text-coral-600" />}
            title="Patterns hiding in plain sight"
            description="Computing loads and cooling systems working against each other, creating hidden inefficiencies."
          />
          <CategoryCard
            icon={<PieChart className="h-5 w-5 text-coral-600" />}
            title="Data without context"
            description="PUE metrics without granular insights into what's driving energy variations."
          />
          <CategoryCard
            icon={<Workflow className="h-5 w-5 text-coral-600" />}
            title="Insights trapped in complexity"
            description="Critical parameters scattered across disparate monitoring systems."
          />
          <CategoryCard
            icon={<CircuitBoard className="h-5 w-5 text-coral-600" />}
            title="The Wattif difference"
            description="Providing early warning of conditions that threaten uptime and computational efficiency."
          />
        </div>
      ),
    },
    {
      name: "R&D Facilities",
      icon: <FlaskConical className="h-5 w-5 mr-2" />,
      content: (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <CategoryCard
            icon={<Beaker className="h-5 w-5 text-coral-600" />}
            title="Patterns hiding in plain sight"
            description="Sensitive equipment experiencing power quality issues that affect research integrity."
          />
          <CategoryCard
            icon={<AreaChart className="h-5 w-5 text-coral-600" />}
            title="Data without context"
            description="Lab energy consumption without correlation to experimental conditions or equipment performance."
          />
          <CategoryCard
            icon={<Microscope className="h-5 w-5 text-coral-600" />}
            title="Insights trapped in complexity"
            description="Power quality data disconnected from sensitive instrument calibration and operation."
          />
          <CategoryCard
            icon={<Brain className="h-5 w-5 text-coral-600" />}
            title="The Wattif difference"
            description="Protecting valuable research by ensuring power quality for sensitive analytical instruments."
          />
        </div>
      ),
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black py-16 md:py-24">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-black"></div>

          {/* Hero background placeholder image with overlay */}
          <div className="absolute inset-0">
            <Image
              src="/dezem-installation.svg"
              alt="Dezem energy monitoring system installation diagram"
              fill
              className="object-cover object-center opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>

          {/* Animated grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, #20202033 1px, transparent 1px), linear-gradient(to bottom, #20202033 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>

          {/* Enhanced glow effects */}
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-teal-500/15 blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]"></div>
          <div className="absolute top-1/2 right-1/3 h-64 w-64 rounded-full bg-coral-500/15 blur-[100px]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left column - Text content */}
            <div className="flex flex-col space-y-8">
              <div>
                <div className="mb-3 inline-flex items-center rounded-full border border-coral-500/40 bg-gradient-to-r from-coral-500/15 to-coral-400/10 px-4 py-1.5 text-xs font-medium text-coral-400 animate-pulse shadow-sm">
                  <span className="mr-2 flex h-2 w-2 rounded-full bg-coral-400 animate-ping"></span>
                  Easy Install Energy Intelligence Kit
                </div>

                <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                  Stop Losing Money to Hidden Energy{" "}
                  <span className="bg-gradient-to-r from-coral-500 to-coral-400 bg-clip-text text-transparent">
                    Waste
                  </span>
                </h1>
              </div>

              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-coral-500 text-white transition-all hover:bg-coral-600"
                >
                  <span className="relative z-10 flex items-center">
                    See Your Energy Clearly
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 bg-slate-900/50 text-slate-300 backdrop-blur-sm transition-all hover:border-coral-500 hover:text-coral-400"
                >
                  Calculate Potential Savings
                </Button>
              </div>
            </div>

            {/* Right column - Feature cards */}
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full border border-teal-500/20"></div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full border border-cyan-500/20"></div>

              {/* Feature cards */}
              <div className="relative space-y-4 md:ml-8">
                <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm transition-all hover:border-teal-500/30 hover:bg-slate-900/80">
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-coral-500/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100"></div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral-500/10">
                      <Brain className="h-5 w-5 text-coral-400" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-base font-medium text-white">AI-Powered Intelligence</h3>
                      <p className="text-sm text-slate-400">
                        Our advanced algorithms identify patterns, anomalies, and optimization opportunities human
                        analysis would miss.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm transition-all hover:border-teal-500/30 hover:bg-slate-900/80">
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-coral-500/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100"></div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral-500/10">
                      <Building2 className="h-5 w-5 text-coral-400" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-base font-medium text-white">Universal Application</h3>
                      <p className="text-sm text-slate-400">
                        Perfect for building management, industrial facilities, and smart city infrastructure—anywhere
                        energy flows.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm transition-all hover:border-teal-500/30 hover:bg-slate-900/80">
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-coral-500/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100"></div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral-500/10">
                      <Zap className="h-5 w-5 text-coral-400" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-base font-medium text-white">Zero Maintenance</h3>
                      <p className="text-sm text-slate-400">
                        No batteries. No wiring. No maintenance. Our sensors harvest energy from the electrical fields
                        they monitor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-slate-800 pt-10 md:grid-cols-3">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">15-20%</p>
              <p className="text-sm text-slate-400">Average Energy Savings</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">5 min</p>
              <p className="text-sm text-slate-400">Installation Time</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="text-sm text-slate-400">Real-time Monitoring</p>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Problem Statement Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#f9fafb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-[20%] top-[20%] w-[40%] h-[40%] bg-coral-50 rounded-full opacity-20 blur-[120px]"></div>
          <div className="absolute -left-[10%] bottom-[10%] w-[30%] h-[30%] bg-blue-50 rounded-full opacity-20 blur-[100px]"></div>
        </div>

        <div className="container relative mx-auto px-4 md:px-6 z-10">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            <span className="relative inline-block">
              Bridging the Energy Visibility Gap
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-coral-400 to-transparent"></div>
            </span>
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-coral-300 to-coral-500 rounded-t-2xl"></div>
              <div className="mb-6 rounded-full bg-coral-50 p-3 w-12 h-12 flex items-center justify-center group-hover:bg-coral-100 transition-colors duration-300">
                <Eye className="h-6 w-6 text-coral-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">Visibility Gap</h3>
              <p className="text-slate-600 leading-relaxed">
                Monthly utility bills lack detail, leaving you blind to where energy is actually being wasted within
                your building. Without granular data, optimization is impossible.
              </p>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1 md:translate-y-6">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-coral-300 to-coral-500 rounded-t-2xl"></div>
              <div className="mb-6 rounded-full bg-coral-50 p-3 w-12 h-12 flex items-center justify-center group-hover:bg-coral-100 transition-colors duration-300">
                <Wrench className="h-6 w-6 text-coral-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">Implementation Barrier</h3>
              <p className="text-slate-600 leading-relaxed">
                Traditional monitoring requires complex installation, wiring, IT projects and ongoing maintenance,
                making it too disruptive for many buildings.
              </p>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-coral-300 to-coral-500 rounded-t-2xl"></div>
              <div className="mb-6 rounded-full bg-coral-50 p-3 w-12 h-12 flex items-center justify-center group-hover:bg-coral-100 transition-colors duration-300">
                <Users className="h-6 w-6 text-coral-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">Expertise Shortage</h3>
              <p className="text-slate-600 leading-relaxed">
                Most buildings lack dedicated energy specialists who can continuously analyze consumption patterns and
                identify optimization opportunities.
              </p>
            </div>
          </div>

          <div className="relative mt-16 mx-auto max-w-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-coral-200/20 to-slate-200/20 rounded-2xl blur-xl"></div>
            <p className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl text-center text-lg text-slate-700 shadow-lg border border-slate-100">
              Energy waste is everywhere in commercial buildings, but without the right monitoring, it remains
              invisible—until now.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement: The Hidden Story - TABBED INTERFACE */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff40_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff40_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-to-br from-coral-50/20 to-transparent rounded-full opacity-30 blur-[80px]"></div>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-6 text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            The Hidden Story in Your Critical Infrastructure
          </h2>
          <p className="mb-10 text-center text-lg text-slate-600 max-w-3xl mx-auto">
            Most facilities have invisible energy patterns that traditional monitoring misses completely.
          </p>

          {/* Tab navigation */}
          <div className="flex flex-wrap justify-center mb-8">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-6 py-3 text-sm font-medium rounded-full mx-2 mb-2 transition-all duration-200 ${activeTab === index
                    ? "bg-gradient-to-r from-coral-500 to-coral-600 text-white shadow-md"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-coral-300 hover:text-coral-600"
                  }`}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab content with animation */}
          <div className="tab-content transition-all duration-300 ease-in-out">{tabs[activeTab].content}</div>
        </div>
      </section>

      {/* Product Introduction */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#fcfcfc_1px,transparent_1px)] [background-size:16px_16px] opacity-70"></div>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-50/80 to-transparent"></div>
        <div className="absolute right-0 top-[20%] w-96 h-96 bg-blue-50 rounded-full opacity-30 blur-[100px]"></div>
        <div className="absolute left-0 bottom-[20%] w-72 h-72 bg-coral-50 rounded-full opacity-30 blur-[100px]"></div>

        <div className="container relative mx-auto px-4 md:px-6 z-10">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-br from-coral-50 to-coral-100 rounded-xl mb-4">
              <div className="bg-white px-4 py-1 rounded-lg">
                <span className="bg-gradient-to-r from-coral-600 to-coral-500 bg-clip-text text-transparent font-medium">
                  Revolutionary Technology
                </span>
              </div>
            </div>
            <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Plug & Learn Energy Intelligence
            </h2>
            <p className="mb-0 mx-auto max-w-3xl text-center text-lg text-slate-600">
              Wattif combines revolutionary sensor technology with sophisticated AI analytics in a system that installs
              in minutes and gets smarter over time.
            </p>
          </div>

          <div className="grid gap-16 md:grid-cols-3">
            <div className="flex flex-col items-center group relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-b from-coral-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 mb-6">
                <div className="absolute -inset-3 bg-gradient-to-r from-coral-200/30 to-coral-300/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-xl shadow-lg border border-coral-100/50">
                  <Image
                    src="/energy-sensor-installation.png"
                    alt="Wattif self-powered energy sensor installation"
                    width={300}
                    height={200}
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-coral-500/90 to-coral-500/0 p-3 pt-8">
                    <h3 className="text-white font-bold text-lg">Self-Powered Sensors</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-slate-100/50 relative z-10">
                <p className="text-slate-600 text-center">
                  Our patented sensors harvest energy from the electrical fields they monitor—requiring no batteries, no
                  wiring, and no maintenance. Simply clip them onto your electrical panels and they begin collecting
                  data immediately.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center group relative md:translate-y-12">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-b from-coral-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 mb-6">
                <div className="absolute -inset-3 bg-gradient-to-r from-coral-200/30 to-coral-300/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-xl shadow-lg border border-coral-100/50">
                  <Image
                    src="/energy-sensor-connection.png"
                    alt="Wattif energy sensor quick connection system"
                    width={300}
                    height={200}
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-coral-500/90 to-coral-500/0 p-3 pt-8">
                    <h3 className="text-white font-bold text-lg">Zero-Configuration Setup</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-slate-100/50 relative z-10">
                <p className="text-slate-600 text-center">
                  The system automatically identifies your energy patterns and equipment types without complex
                  programming or configuration. Just install the sensors and let our AI do the rest.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center group relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-b from-coral-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 mb-6">
                <div className="absolute -inset-3 bg-gradient-to-r from-coral-200/30 to-coral-300/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-xl shadow-lg border border-coral-100/50">
                  <Image
                    src="/energy-analytics-dashboard-detail.png"
                    alt="Wattif detailed energy monitoring dashboard"
                    width={300}
                    height={200}
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-coral-500/90 to-coral-500/0 p-3 pt-8">
                    <h3 className="text-white font-bold text-lg">Continuous Learning</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-slate-100/50 relative z-10">
                <p className="text-slate-600 text-center">
                  Our analytics platform continuously improves as it learns your building's unique patterns, identifying
                  new optimization opportunities and adapting to operational changes automatically.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <Button
              asChild
              variant="outline"
              className="group relative px-8 py-6 overflow-hidden border-coral-200 rounded-xl text-base"
            >
              <Link href="#how-it-works" className="flex items-center">
                <span className="relative z-10">Learn how it works</span>
                <div className="absolute inset-0 bg-gradient-to-r from-coral-50 to-coral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ArrowDown className="ml-2 h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-y-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-slate-50 to-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff30_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff30_1px,transparent_1px)] [background-size:32px_32px] opacity-70"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

        {/* Content */}
        <div className="container relative mx-auto px-4 md:px-6 z-10">
          <div className="mb-20 text-center">
            <div className="inline-flex items-center justify-center px-4 py-1.5 bg-gradient-to-br from-coral-500 to-coral-600 rounded-full mb-4 text-white text-sm font-medium">
              Benefits
            </div>
            <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              From Invisible to Actionable
            </h2>
            <p className="mx-auto max-w-3xl text-center text-lg text-slate-600">
              Transform hidden energy data into clear, actionable insights that drive real results.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {/* Benefit 1 */}
            <div className="group relative overflow-hidden rounded-2xl p-px">
              <div className="absolute inset-0 bg-gradient-to-br from-coral-100 to-coral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex gap-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-coral-500 to-coral-600 shadow-md group-hover:shadow-coral-200/50 transition-shadow duration-300">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">Immediate Visibility</h3>
                  <p className="text-slate-600 leading-relaxed">
                    See your complete energy landscape within days of installation—from building-wide consumption to
                    individual circuit behavior.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="group relative overflow-hidden rounded-2xl p-px">
              <div className="absolute inset-0 bg-gradient-to-br from-coral-100 to-coral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex gap-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-coral-500 to-coral-600 shadow-md group-hover:shadow-coral-200/50 transition-shadow duration-300">
                  <Cpu className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">Automatic Pattern Recognition</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our AI identifies consumption patterns, anomalies, and optimization opportunities without requiring
                    manual analysis or configuration.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="group relative overflow-hidden rounded-2xl p-px">
              <div className="absolute inset-0 bg-gradient-to-br from-coral-100 to-coral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex gap-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-coral-500 to-coral-600 shadow-md group-hover:shadow-coral-200/50 transition-shadow duration-300">
                  <Lightbulb className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">Practical Insights</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Receive specific, actionable recommendations that translate energy data into operational
                    improvements and cost savings.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="group relative overflow-hidden rounded-2xl p-px">
              <div className="absolute inset-0 bg-gradient-to-br from-coral-100 to-coral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex gap-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-coral-500 to-coral-600 shadow-md group-hover:shadow-coral-200/50 transition-shadow duration-300">
                  <ClipboardCheck className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">Effortless Compliance</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Generate sustainability reports and regulatory documentation automatically, transforming complex
                    data collection into simple verification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#f9fafb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-coral-50 rounded-full opacity-20 blur-[80px]"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-50 rounded-full opacity-20 blur-[80px]"></div>
        <div className="container mx-auto px-4 md:px-6">
          <HowItWorks />
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff20_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff20_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Tailored Energy Intelligence for Every Industry
          </h2>
          <p className="mb-12 text-center text-lg text-slate-600">
            Discover how Wattif's solutions address the unique energy challenges in your industry
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <IndustryCard
              icon={<Building2 className="h-8 w-8" />}
              title="Commercial Real Estate"
              description="Transform energy data into property value with tenant-specific tracking and optimization."
              href="/industries/commercial-real-estate"
            />

            <IndustryCard
              icon={<Server className="h-8 w-8" />}
              title="Data Centers"
              description="Balance performance and efficiency with detailed PUE tracking and cooling optimization."
              href="/industries/data-centers"
            />

            <IndustryCard
              icon={<ShoppingBag className="h-8 w-8" />}
              title="Multi-Site Retail"
              description="Ensure consistent energy performance across every location in your chain."
              href="/industries/multi-site-retail"
            />

            <IndustryCard
              icon={<Building2 className="h-8 w-8" />}
              title="Hotels"
              description="Optimize guest comfort while reducing energy costs across your property."
              href="/industries/hotels"
            />

            <IndustryCard
              icon={<GraduationCap className="h-8 w-8" />}
              title="Educational Buildings"
              description="Create sustainable campuses with smart energy monitoring and management."
              href="/industries/education"
            />

            <IndustryCard
              icon={<Microscope className="h-8 w-8" />}
              title="R&D Facilities"
              description="Optimize energy efficiency without compromising research integrity or safety protocols in specialized laboratory environments."
              href="/industries/battery-storage"
            />
          </div>

          {/* Bottom illustration */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-coral-50/20 via-transparent to-blue-50/20 rounded-xl"></div>
            <div className="relative mx-auto max-w-4xl p-8 flex items-center justify-center">
              <div className="grid grid-cols-5 gap-4 w-full">
                {/* Building icons */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-2 relative overflow-hidden group">
                    <Building2 className="h-8 w-8 text-coral-500 group-hover:scale-110 transition-transform" />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-coral-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </div>
                  <div className="h-20 w-1 border-dashed border-l-2 border-coral-200 mx-auto"></div>
                </div>

                <div className="flex flex-col items-center mt-12">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-2 relative overflow-hidden group">
                    <Server className="h-8 w-8 text-coral-500 group-hover:scale-110 transition-transform" />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-coral-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </div>
                  <div className="h-12 w-1 border-dashed border-l-2 border-coral-200 mx-auto"></div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-2 relative overflow-hidden group">
                    <ShoppingBag className="h-8 w-8 text-coral-500 group-hover:scale-110 transition-transform" />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-coral-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </div>
                  <div className="h-24 w-1 border-dashed border-l-2 border-coral-200 mx-auto"></div>
                </div>

                <div className="flex flex-col items-center mt-8">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-2 relative overflow-hidden group">
                    <GraduationCap className="h-8 w-8 text-coral-500 group-hover:scale-110 transition-transform" />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-coral-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </div>
                  <div className="h-16 w-1 border-dashed border-l-2 border-coral-200 mx-auto"></div>
                </div>

                <div className="flex flex-col items-center mt-4">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-2 relative overflow-hidden group">
                    <Microscope className="h-8 w-8 text-coral-500 group-hover:scale-110 transition-transform" />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-coral-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </div>
                  <div className="h-20 w-1 border-dashed border-l-2 border-coral-200 mx-auto"></div>
                </div>

                {/* Central hub */}
                <div className="col-span-5 flex justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-coral-500 to-coral-600 rounded-full shadow-lg flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full bg-coral-500 animate-ping opacity-20"></div>
                    <Zap className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="flex flex-col items-center justify-center border-dashed border-slate-300 bg-slate-50 p-6 text-center">
            <CardContent className="pb-6 pt-6">
              <h3 className="mb-2 text-xl font-medium">Don't see your industry?</h3>
              <p className="mb-4 text-slate-600">Our solutions adapt to any environment where energy is consumed.</p>
              <Button variant="outline" className="mt-2">
                Contact Us
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-28 text-white overflow-hidden relative">
        {/* Overlay graphics */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIxMjUiIHZpZXdCb3g9IjAgMCAxNDQwIDEyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNLTY1LjkxNTggNjYuNjI1QzExNi4wOTUgNjYuNjI1IDcxLjg0MTUgMzMuMzEyNSAyNTMuODUzIDMzLjMxMjVDNDM1Ljg2NCAzMy4zMTI1IDUwNS43MiA2Ni42MjUgNjg3LjczMiA2Ni42MjVDODY5Ljc0MyA2Ni42MjUgOTM5LjU5OSAwIDExMjEuNjEgMEMxMzAzLjYyIDAgMTM3My40OCA2Ni42MjUgMTU1NS40OSA2Ni42MjVDMTczNy41IDY2LjYyNSAxNjkzLjI1IDEyNSAxODc1LjI2IDEyNUMyMDU3LjI3IDEyNSAyMTYyLjEzIDY2LjYyNSAyMzA5LjE0IDY2LjYyNUwyMzA5LjE0IC0yNzVILTY1LjkxNThWNjYuNjI1WiIgZmlsbD0idXJsKCNwYWludDAfbGluZWFyXzBfOTkiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJwYWludDAfbGluZWFyXzBfOTkiIHgxPSIxMTIxLjYxIiB5MT0iMCIgeDI9IjExMjEuNjEiIHkyPSIxMjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMC4wIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+')]"></div>

        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_bottom,transparent_50%,black)]">
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(circle at 50% 80%, rgba(233, 66, 52, 0.08), transparent 25%)" }}
          ></div>
        </div>

        <div className="container relative mx-auto px-4 md:px-6 z-10">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight md:text-5xl">
            <span className="block mb-2 text-sm font-medium text-coral-400 uppercase tracking-wider">
              Complete Energy Intelligence Platform
            </span>
            Our Solutions
          </h2>

          <div className="grid gap-8 md:grid-cols-3 relative">
            {/* Connecting line in the background */}
            <div className="absolute top-[30%] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-coral-500/20 to-transparent hidden md:block"></div>

            {/* Solution 1 - Wattif Elements (moved from second position) */}
            <div className="group relative">
              {/* Glass card */}
              <div className="absolute inset-0 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl"></div>

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col">
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-coral-400 to-coral-500 bg-clip-text text-transparent text-2xl font-bold">
                    Wattif Elements
                  </span>
                  <p className="mt-1 text-slate-300 font-medium">Energy-Focused Solutions for Six Building Types</p>
                </div>

                <div className="mb-8 flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <button className="px-3 py-1 text-sm rounded-full bg-coral-500/20 text-coral-400 hover:bg-coral-500/30 transition-colors">
                      Hotels
                    </button>
                    <button className="px-3 py-1 text-sm rounded-full bg-white/10 text-slate-300 hover:bg-white/20 transition-colors">
                      Educational
                    </button>
                    <button className="px-3 py-1 text-sm rounded-full bg-white/10 text-slate-300 hover:bg-white/20 transition-colors">
                      Commercial
                    </button>
                    <button className="px-3 py-1 text-sm rounded-full bg-white/10 text-slate-300 hover:bg-white/20 transition-colors">
                      Data Centers
                    </button>
                    <button className="px-3 py-1 text-sm rounded-full bg-white/10 text-slate-300 hover:bg-white/20 transition-colors">
                      Retail
                    </button>
                    <button className="px-3 py-1 text-sm rounded-full bg-white/10 text-slate-300 hover:bg-white/20 transition-colors">
                      R&D
                    </button>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                        <ChevronRight className="h-4 w-4 text-coral-400" />
                      </div>
                      <span className="text-slate-300">After-Hours Energy Waste Detection</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                        <ChevronRight className="h-4 w-4 text-coral-400" />
                      </div>
                      <span className="text-slate-300">Guest Room Energy Optimization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                        <ChevronRight className="h-4 w-4 text-coral-400" />
                      </div>
                      <span className="text-slate-300">Kitchen and Laundry Efficiency</span>
                    </li>
                  </ul>
                </div>

                <div className="relative">
                  <Button className="w-full py-6 bg-gradient-to-r from-coral-500 to-coral-600 hover:opacity-90 rounded-xl group overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center">
                      Start Optimizing Your Building
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Solution 2 - Wattif Enterprise (moved from first position) */}
            <div className="group relative md:translate-y-8">
              {/* Glass card */}
              <div className="absolute inset-0 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl"></div>

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col">
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-coral-400 to-coral-500 bg-clip-text text-transparent text-2xl font-bold">
                    Wattif Enterprise
                  </span>
                  <p className="mt-1 text-slate-300 font-medium">
                    Complete Energy Intelligence for Large-Scale Operations
                  </p>
                </div>

                <div className="mb-8 flex-grow">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                        <ChevronRight className="h-4 w-4 text-coral-400" />
                      </div>
                      <span className="text-slate-300">Multi-site management</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                        <ChevronRight className="h-4 w-4 text-coral-400" />
                      </div>
                      <span className="text-slate-300">Advanced analytics</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                        <ChevronRight className="h-4 w-4 text-coral-400" />
                      </div>
                      <span className="text-slate-300">API access and custom integrations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                        <ChevronRight className="h-4 w-4 text-coral-400" />
                      </div>
                      <span className="text-slate-300">Premium support</span>
                    </li>
                  </ul>
                </div>

                <div className="relative">
                  <Button className="w-full py-6 bg-gradient-to-r from-coral-500 to-coral-600 hover:opacity-90 rounded-xl group overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Solution 3 - Wattif Insights (remains in third position) */}
            <div className="group relative">
              {/* Glass card */}
              <div className="absolute inset-0 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl"></div>

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col">
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-coral-400 to-coral-500 bg-clip-text text-transparent text-2xl font-bold">
                    Wattif Insights
                  </span>
                  <p className="mt-1 text-slate-300 font-medium">Expert Guidance to Transform Data into Action</p>
                </div>

                <div className="mb-8 flex-grow">
                  <p className="mb-4 text-slate-300">
                    Pairs our monitoring technology with expert analysis and recommendation services.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                        <ChevronRight className="h-4 w-4 text-coral-400" />
                      </div>
                      <span className="text-slate-300">Initial Assessment</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                        <ChevronRight className="h-4 w-4 text-coral-400" />
                      </div>
                      <span className="text-slate-300">Regular Analysis</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                        <ChevronRight className="h-4 w-4 text-coral-400" />
                      </div>
                      <span className="text-slate-300">Prioritized Recommendations</span>
                    </li>
                  </ul>
                </div>

                <div className="relative">
                  <Button className="w-full py-6 bg-gradient-to-r from-coral-500 to-coral-600 hover:opacity-90 rounded-xl group overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#fcfcfc_1px,transparent_1px)] [background-size:16px_16px] opacity-70"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-coral-50 rounded-full mix-blend-multiply opacity-30 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply opacity-30 blur-3xl"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 20%, rgba(233, 66, 52, 0.02), transparent 25%), radial-gradient(circle at 70% 65%, rgba(0, 112, 243, 0.02), transparent 25%)",
            }}
          ></div>
        </div>

        <Footer />
      </section>
    </div>
  )
}
