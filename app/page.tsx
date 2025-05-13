"use client"

import type React from "react"

import { useState } from "react"
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
  HardHat,
  Lightbulb,
  LineChart,
  Microscope,
  Server,
  ShoppingBag,
  Zap,
  Building,
  FlaskConical,
  Gauge,
  Workflow,
  Beaker,
  PieChart,
  AreaChart,
  CircuitBoard,
  Wrench,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HowItWorks } from "@/components/how-it-works"
import { IndustryCard } from "@/components/industry-card"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

// Define proper types for the CategoryCard component
interface CategoryCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-2 relative overflow-hidden group">
      {icon}
      <div className="absolute inset-0 bg-blue-500 bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-white text-xs text-center px-1">{description}</div>
      </div>
    </div>
    <span className="text-xs text-center font-medium text-slate-700">{title}</span>
  </div>
)

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0)
  const [selectedIndustry, setSelectedIndustry] = useState(0)

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
      name: "Industrial Plants",
      icon: <Wrench className="h-5 w-5 mr-2" />,
      content: (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <CategoryCard
            icon={<Gauge className="h-5 w-5 text-coral-600" />}
            title="Patterns hiding in plain sight"
            description="Critical equipment operating outside optimal parameters, increasing failure risk and energy waste."
          />
          <CategoryCard
            icon={<PieChart className="h-5 w-5 text-coral-600" />}
            title="Data without context"
            description="Production metrics disconnected from energy consumption patterns and equipment health."
          />
          <CategoryCard
            icon={<Workflow className="h-5 w-5 text-coral-600" />}
            title="Insights trapped in complexity"
            description="Operational data siloed across multiple systems with no unified view."
          />
          <CategoryCard
            icon={<CircuitBoard className="h-5 w-5 text-coral-600" />}
            title="The Wattif difference"
            description="Preventing costly downtime by identifying equipment issues before they cause failures."
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
      name: "Construction Sites",
      icon: <HardHat className="h-5 w-5 mr-2" />,
      content: (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <CategoryCard
            icon={<LineChart className="h-5 w-5 text-coral-600" />}
            title="Patterns hiding in plain sight"
            description="Temporary power systems running inefficiently, increasing project costs and carbon footprint."
          />
          <CategoryCard
            icon={<BarChart3 className="h-5 w-5 text-coral-600" />}
            title="Data without context"
            description="Energy usage disconnected from project phases and equipment utilization."
          />
          <CategoryCard
            icon={<Server className="h-5 w-5 text-coral-600" />}
            title="Insights trapped in complexity"
            description="Site conditions changing daily with no adaptive monitoring solution."
          />
          <CategoryCard
            icon={<Lightbulb className="h-5 w-5 text-coral-600" />}
            title="The Wattif difference"
            description="Flexible monitoring that moves with your project phases and reduces diesel generator waste."
          />
        </div>
      ),
    },
    {
      name: "Logistics Facilities",
      icon: <ShoppingBag className="h-5 w-5 mr-2" />,
      content: (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <CategoryCard
            icon={<Gauge className="h-5 w-5 text-coral-600" />}
            title="Patterns hiding in plain sight"
            description="Cold storage and material handling equipment operating inefficiently across vast spaces."
          />
          <CategoryCard
            icon={<PieChart className="h-5 w-5 text-coral-600" />}
            title="Data without context"
            description="Energy consumption disconnected from throughput metrics and operational schedules."
          />
          <CategoryCard
            icon={<Workflow className="h-5 w-5 text-coral-600" />}
            title="Insights trapped in complexity"
            description="Multiple facility systems with no unified energy intelligence platform."
          />
          <CategoryCard
            icon={<CircuitBoard className="h-5 w-5 text-coral-600" />}
            title="The Wattif difference"
            description="Scaling energy monitoring across your entire logistics network without complex infrastructure."
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
                  Energy Intelligence{" "}
                  <span className="bg-gradient-to-r from-coral-500 to-coral-400 bg-clip-text text-transparent">
                    Tailored to Your Challenges
                  </span>
                </h1>
              </div>

              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden bg-coral-500 text-white transition-all hover:bg-coral-600"
                >
                  <Link href="/solutions/elements">
                    <span className="relative z-10 flex items-center">
                      See Your Energy Clearly
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-slate-700 bg-slate-900/50 text-slate-300 backdrop-blur-sm transition-all hover:border-coral-500 hover:text-coral-400"
                >
                  <Link href="#how-it-works">
                    Calculate Potential Savings
                  </Link>
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
              title="Commercial Buildings"
              description="Retrofit any building, old or new, with no invasive wiring or ongoing maintenance. Place sensors in hard-to-reach or high-traffic areas for granular monitoring."
              href="/industries/commercial-real-estate"
            />

            <IndustryCard
              icon={<Server className="h-8 w-8" />}
              title="Data Centers"
              description="Achieve rack-level and aisle-level environmental and power monitoring without adding wiring complexity or maintenance burden."
              href="/industries/data-centers"
            />

            <IndustryCard
              icon={<HardHat className="h-8 w-8" />}
              title="Construction Sites"
              description="Rapidly deploy and relocate sensors as site layouts change-without worrying about power or connectivity."
              href="/industries/construction-sites"
            />

            <IndustryCard
              icon={<Wrench className="h-8 w-8" />}
              title="Industrial Facilities"
              description="Deploy sensors anywhere on the factory floor, production lines, or inside machinery-without wiring or battery changes."
              href="/industries/industrial-plants"
            />

            <IndustryCard
              icon={<ShoppingBag className="h-8 w-8" />}
              title="Logistics Facilities"
              description="Place sensors throughout vast warehouses, loading docks, and cold storage areas with zero wiring or battery logistics."
              href="/industries/logistics-warehouses"
            />

            <IndustryCard
              icon={<Microscope className="h-8 w-8" />}
              title="R&D"
              description="Install sensors in sensitive labs, cleanrooms, and test environments without disrupting operations or introducing maintenance cycles."
              href="/industries/battery-storage"
            />
          </div>

          <Card className="flex flex-col items-center justify-center border-dashed border-slate-300 bg-slate-50 p-6 text-center">
            <CardContent className="pb-6 pt-6">
              <h3 className="mb-2 text-xl font-medium">Don't see your industry?</h3>
              <p className="mb-4 text-slate-600">Our solutions adapt to any environment where energy is consumed.</p>
              <Button asChild variant="outline" className="mt-2">
                <Link href="/contact">
                  Contact Us
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
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

            {/* Solution 1 - Wattif Elements */}
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
                    <button
                      onClick={() => setSelectedIndustry(0)}
                      className={`px-3 py-1 text-sm rounded-full ${selectedIndustry === 0 ? "bg-coral-500/20 text-coral-400" : "bg-white/10 text-slate-300"} hover:bg-coral-500/30 transition-colors`}
                    >
                      Commercial Buildings
                    </button>
                    <button
                      onClick={() => setSelectedIndustry(1)}
                      className={`px-3 py-1 text-sm rounded-full ${selectedIndustry === 1 ? "bg-coral-500/20 text-coral-400" : "bg-white/10 text-slate-300"} hover:bg-coral-500/30 transition-colors`}
                    >
                      Industrial Plants
                    </button>
                    <button
                      onClick={() => setSelectedIndustry(2)}
                      className={`px-3 py-1 text-sm rounded-full ${selectedIndustry === 2 ? "bg-coral-500/20 text-coral-400" : "bg-white/10 text-slate-300"} hover:bg-coral-500/30 transition-colors`}
                    >
                      Data Centers
                    </button>
                    <button
                      onClick={() => setSelectedIndustry(3)}
                      className={`px-3 py-1 text-sm rounded-full ${selectedIndustry === 3 ? "bg-coral-500/20 text-coral-400" : "bg-white/10 text-slate-300"} hover:bg-coral-500/30 transition-colors`}
                    >
                      Construction Sites
                    </button>
                    <button
                      onClick={() => setSelectedIndustry(4)}
                      className={`px-3 py-1 text-sm rounded-full ${selectedIndustry === 4 ? "bg-coral-500/20 text-coral-400" : "bg-white/10 text-slate-300"} hover:bg-coral-500/30 transition-colors`}
                    >
                      Logistics Facilities
                    </button>
                    <button
                      onClick={() => setSelectedIndustry(5)}
                      className={`px-3 py-1 text-sm rounded-full ${selectedIndustry === 5 ? "bg-coral-500/20 text-coral-400" : "bg-white/10 text-slate-300"} hover:bg-coral-500/30 transition-colors`}
                    >
                      R&D Facilities
                    </button>
                  </div>

                  {selectedIndustry === 0 && (
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
                        <span className="text-slate-300">Tenant Comfort Optimization</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                          <ChevronRight className="h-4 w-4 text-coral-400" />
                        </div>
                        <span className="text-slate-300">Common Area Energy Management</span>
                      </li>
                    </ul>
                  )}

                  {selectedIndustry === 1 && (
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                          <ChevronRight className="h-4 w-4 text-coral-400" />
                        </div>
                        <span className="text-slate-300">Production Line Optimization</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                          <ChevronRight className="h-4 w-4 text-coral-400" />
                        </div>
                        <span className="text-slate-300">Equipment Failure Prevention</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                          <ChevronRight className="h-4 w-4 text-coral-400" />
                        </div>
                        <span className="text-slate-300">Peak Demand Management</span>
                      </li>
                    </ul>
                  )}

                  {selectedIndustry === 2 && (
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                          <ChevronRight className="h-4 w-4 text-coral-400" />
                        </div>
                        <span className="text-slate-300">Cooling Efficiency Optimization</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                          <ChevronRight className="h-4 w-4 text-coral-400" />
                        </div>
                        <span className="text-slate-300">Server Load Balancing</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                          <ChevronRight className="h-4 w-4 text-coral-400" />
                        </div>
                        <span className="text-slate-300">PUE Improvement Strategies</span>
                      </li>
                    </ul>
                  )}

                  {selectedIndustry === 3 && (
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                          <ChevronRight className="h-4 w-4 text-coral-400" />
                        </div>
                        <span className="text-slate-300">Generator Efficiency Monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                          <ChevronRight className="h-4 w-4 text-coral-400" />
                        </div>
                        <span className="text-slate-300">Temporary Power Management</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                          <ChevronRight className="h-4 w-4 text-coral-400" />
                        </div>
                        <span className="text-slate-300">Equipment Utilization Tracking</span>
                      </li>
                    </ul>
                  )}

                  {selectedIndustry === 4 && (
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                          <ChevronRight className="h-4 w-4 text-coral-400" />
                        </div>
                        <span className="text-slate-300">Cold Storage Optimization</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                          <ChevronRight className="h-4 w-4 text-coral-400" />
                        </div>
                        <span className="text-slate-300">Loading Dock Energy Management</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                          <ChevronRight className="h-4 w-4 text-coral-400" />
                        </div>
                        <span className="text-slate-300">Material Handling Equipment Efficiency</span>
                      </li>
                    </ul>
                  )}

                  {selectedIndustry === 5 && (
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                          <ChevronRight className="h-4 w-4 text-coral-400" />
                        </div>
                        <span className="text-slate-300">Lab Equipment Power Quality</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                          <ChevronRight className="h-4 w-4 text-coral-400" />
                        </div>
                        <span className="text-slate-300">Cleanroom Environment Control</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-coral-500/20 flex items-center justify-center">
                          <ChevronRight className="h-4 w-4 text-coral-400" />
                        </div>
                        <span className="text-slate-300">Sensitive Instrument Protection</span>
                      </li>
                    </ul>
                  )}
                </div>

                <div className="relative">
                  <Button
                    asChild
                    className="w-full py-6 bg-gradient-to-r from-coral-500 to-coral-600 hover:opacity-90 rounded-xl group overflow-hidden"
                  >
                    <Link href="/contact">
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 flex items-center justify-center">
                        Start Optimizing Your Building
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
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
                  <Button
                    asChild
                    className="w-full py-6 bg-gradient-to-r from-coral-500 to-coral-600 hover:opacity-90 rounded-xl group overflow-hidden"
                  >
                    <Link href="/contact">
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 flex items-center justify-center">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
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
                  <Button
                    asChild
                    className="w-full py-6 bg-gradient-to-r from-coral-500 to-coral-600 hover:opacity-90 rounded-xl group overflow-hidden"
                  >
                    <Link href="/contact">
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 flex items-center justify-center">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
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
