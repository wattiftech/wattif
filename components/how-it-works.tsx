"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  const steps = [
    {
      number: "1",
      title: "Connect",
      description:
        "Non-invasive sensors install in minutes at your electrical panels and key equipment. No building modifications required, no operational disruptions, no complicated IT requirements. Our professional technicians handle the entire setup process, typically in less than a day.",
    },
    {
      number: "2",
      title: "Collect",
      description:
        "Wattif begins gathering detailed energy data across your facility—from the main service entrance down to individual circuits and equipment. Our system collects information at one-minute intervals, giving you unprecedented visibility into consumption patterns.",
    },
    {
      number: "3",
      title: "Analyze",
      description:
        "Our intelligent analytics platform processes millions of data points to reveal patterns conventional systems miss. Machine learning algorithms identify anomalies, detect inefficiencies, and classify consumption patterns, transforming raw data into actionable insights.",
    },
    {
      number: "4",
      title: "Insights",
      description:
        "We deliver energy insights in the format that works best for your organization. Choose between detailed reports tailored to different stakeholders or access your data programmatically through our API for seamless integration with your existing systems and dashboards.",
    },
  ]

  // Handle scroll-based step activation
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      // Get the position of the section relative to the viewport
      const sectionRect = sectionRef.current.getBoundingClientRect()

      // If section is not in view, don't do anything
      if (sectionRect.bottom < 0 || sectionRect.top > window.innerHeight) return

      // Check each step's position
      stepRefs.current.forEach((stepRef, index) => {
        if (!stepRef) return

        const stepRect = stepRef.getBoundingClientRect()
        // If step is in the top half of the viewport, activate it
        if (stepRect.top < window.innerHeight * 0.6 && stepRect.bottom > 0) {
          setActiveStep(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Manual navigation
  const scrollToStep = (index: number) => {
    stepRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <div ref={sectionRef} className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Four Steps to Energy Clarity</h2>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className={cn("mb-24 scroll-mt-24", index === steps.length - 1 ? "mb-0" : "")}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                {/* Step content on the left */}
                <div className="lg:col-span-5">
                  <button onClick={() => scrollToStep(index)} className="flex items-start text-left w-full group">
                    <span
                      className={cn(
                        "text-4xl font-bold mr-6 transition-colors",
                        activeStep === index ? "text-coral-500" : "text-slate-300 group-hover:text-slate-400",
                      )}
                    >
                      {step.number}
                    </span>
                    <span
                      className={cn(
                        "text-xl font-medium pt-2 transition-colors",
                        activeStep === index ? "text-slate-900" : "text-slate-600 group-hover:text-slate-700",
                      )}
                    >
                      {step.title}
                    </span>
                  </button>

                  {/* Description is always visible but highlighted when active */}
                  <div
                    className={cn(
                      "mt-4 pl-16 transition-opacity duration-500",
                      activeStep === index ? "opacity-100" : "opacity-70",
                    )}
                  >
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                    {activeStep === index && (
                      <div className="h-px bg-gradient-to-r from-coral-500/50 to-transparent w-full mt-8"></div>
                    )}
                  </div>
                </div>

                {/* Visual representation on the right */}
                <div
                  className={cn(
                    "lg:col-span-7 bg-gradient-to-br from-coral-50 to-slate-50 rounded-xl p-6 relative h-[400px] transition-all duration-500 shadow-sm",
                    activeStep === index ? "opacity-100 scale-100" : "opacity-50 scale-95",
                  )}
                >
                  {/* Step 1: Connect */}
                  {index === 0 && (
                    <div className="relative h-full overflow-hidden">
                      {/* Background grid pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                      </div>

                      {/* Main illustration */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px]">
                        <div className="relative">
                          {/* Electrical panel */}
                          <div className="absolute left-0 top-0 w-[180px] h-[240px] bg-gradient-to-br from-slate-700 to-slate-800 rounded-md shadow-lg overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-6 bg-slate-600 flex items-center px-2">
                              <div className="w-2 h-2 rounded-full bg-coral-500 mr-1"></div>
                              <div className="text-xs text-white font-medium">Main Panel</div>
                            </div>

                            {/* Panel interior */}
                            <div className="absolute top-8 left-2 right-2 bottom-2 bg-slate-200 rounded-sm p-2">
                              <div className="grid grid-cols-2 gap-2">
                                {[...Array(8)].map((_, i) => (
                                  <div key={i} className="h-10 bg-slate-300 rounded flex items-center justify-center">
                                    <div className="w-6 h-3 bg-slate-800 rounded-sm"></div>
                                  </div>
                                ))}
                              </div>

                              {/* Sensor attachment point with glow */}
                              <div className="absolute right-0 top-1/3 transform translate-x-1/2">
                                <div className="relative">
                                  <div className="absolute -inset-2 bg-coral-500 rounded-full opacity-20 animate-pulse"></div>
                                  <div className="w-4 h-4 bg-coral-500 rounded-full relative z-10"></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Wattif sensor */}
                          <div className="absolute right-0 top-1/4 w-[140px] h-[100px] bg-white rounded-lg shadow-lg overflow-hidden border border-slate-200">
                            <div className="absolute top-0 left-0 w-full h-1 bg-coral-500"></div>
                            <div className="p-3">
                              <div className="flex items-center">
                                <div className="w-6 h-6 rounded-full bg-coral-500 flex items-center justify-center">
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                                      stroke="white"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                                <div className="ml-2 text-xs font-medium text-slate-900">Wattif Sensor</div>
                              </div>
                              <div className="mt-2 flex justify-between">
                                <div className="text-[10px] text-slate-500">
                                  Status: <span className="text-green-500">Active</span>
                                </div>
                                <div className="text-[10px] text-slate-500">ID: WS-2845</div>
                              </div>
                              <div className="mt-3 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-coral-500 w-3/4"></div>
                              </div>
                              <div className="mt-1 flex justify-between">
                                <div className="text-[10px] text-slate-500">Signal</div>
                                <div className="text-[10px] text-slate-500">75%</div>
                              </div>
                            </div>
                          </div>

                          {/* Connection line with animation */}
                          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M180,80 C220,80 220,80 260,80"
                              stroke="#E94234"
                              strokeWidth="2"
                              fill="none"
                              strokeDasharray="4 2"
                            >
                              <animate
                                attributeName="stroke-dashoffset"
                                from="24"
                                to="0"
                                dur="3s"
                                repeatCount="indefinite"
                              />
                            </path>
                            <circle cx="180" cy="80" r="4" fill="#E94234" />
                            <circle cx="260" cy="80" r="4" fill="#E94234" />
                          </svg>
                        </div>
                      </div>

                      {/* Info cards */}
                      <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-md border border-slate-100">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-coral-500/10 flex items-center justify-center mr-2">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15 7C16.1046 7 17 6.10457 17 5C17 3.89543 16.1046 3 15 3C13.8954 3 13 3.89543 13 5C13 6.10457 13.8954 7 15 7Z"
                                stroke="#E94234"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 17C10.1046 17 11 16.1046 11 15C11 13.8954 10.1046 13 9 13C7.89543 13 7 13.8954 7 15C7 16.1046 7.89543 17 9 17Z"
                                stroke="#E94234"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15 7C15 9.20914 13.2091 11 11 11H9C6.79086 11 5 12.7909 5 15"
                                stroke="#E94234"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 17C9 19.2091 10.7909 21 13 21H15C17.2091 21 19 19.2091 19 17"
                                stroke="#E94234"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900">Non-invasive Installation</div>
                            <div className="text-xs text-slate-500">Clip-on sensors, no rewiring</div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-md border border-slate-100">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-coral-500/10 flex items-center justify-center mr-2">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="12" cy="12" r="10" stroke="#E94234" strokeWidth="2" />
                              <path
                                d="M12 6V12L16 14"
                                stroke="#E94234"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900">Quick Setup</div>
                            <div className="text-xs text-slate-500">Typically less than a day</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Collect */}
                  {index === 1 && (
                    <div className="relative h-full overflow-hidden">
                      {/* Background grid pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                      </div>

                      {/* Main illustration */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px]">
                        <div className="relative">
                          {/* Data flow visualization */}
                          <div className="absolute left-0 top-0 w-full">
                            {/* Sensors */}
                            <div className="flex justify-between mb-6">
                              {[...Array(3)].map((_, i) => (
                                <div
                                  key={i}
                                  className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center border border-slate-200"
                                >
                                  <div className="w-10 h-10 rounded-full bg-coral-500/10 flex items-center justify-center">
                                    <svg
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                                        stroke="#E94234"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Data flow lines */}
                            <svg
                              className="w-full h-20"
                              viewBox="0 0 320 80"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M40,0 L40,40 L160,40 L160,80"
                                stroke="#E94234"
                                strokeWidth="2"
                                strokeDasharray="4 2"
                              >
                                <animate
                                  attributeName="stroke-dashoffset"
                                  from="24"
                                  to="0"
                                  dur="3s"
                                  repeatCount="indefinite"
                                />
                              </path>
                              <path d="M160,0 L160,40 L160,80" stroke="#E94234" strokeWidth="2" strokeDasharray="4 2">
                                <animate
                                  attributeName="stroke-dashoffset"
                                  from="24"
                                  to="0"
                                  dur="3s"
                                  repeatCount="indefinite"
                                />
                              </path>
                              <path
                                d="M280,0 L280,40 L160,40 L160,80"
                                stroke="#E94234"
                                strokeWidth="2"
                                strokeDasharray="4 2"
                              >
                                <animate
                                  attributeName="stroke-dashoffset"
                                  from="24"
                                  to="0"
                                  dur="3s"
                                  repeatCount="indefinite"
                                />
                              </path>
                            </svg>

                            {/* Data collection server */}
                            <div className="w-[200px] h-[120px] mx-auto bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
                              <div className="h-6 bg-slate-800 flex items-center px-2">
                                <div className="w-2 h-2 rounded-full bg-coral-500 mr-1"></div>
                                <div className="text-xs text-white">Wattif Data Collection</div>
                              </div>
                              <div className="p-3">
                                <div className="flex justify-between mb-2">
                                  <div className="text-xs font-medium">Data Points</div>
                                  <div className="text-xs text-coral-500">1,432,876</div>
                                </div>
                                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mb-2">
                                  <div className="h-full bg-coral-500 w-3/4 animate-pulse"></div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="h-6 bg-slate-100 rounded flex items-center justify-center">
                                    <div className="text-[10px] text-slate-500">Panel A</div>
                                  </div>
                                  <div className="h-6 bg-slate-100 rounded flex items-center justify-center">
                                    <div className="text-[10px] text-slate-500">Panel B</div>
                                  </div>
                                  <div className="h-6 bg-slate-100 rounded flex items-center justify-center">
                                    <div className="text-[10px] text-slate-500">HVAC</div>
                                  </div>
                                  <div className="h-6 bg-slate-100 rounded flex items-center justify-center">
                                    <div className="text-[10px] text-slate-500">Lighting</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Info cards */}
                      <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-md border border-slate-100">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-coral-500/10 flex items-center justify-center mr-2">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="4"
                                y="4"
                                width="16"
                                height="16"
                                rx="2"
                                stroke="#E94234"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 9H9.01"
                                stroke="#E94234"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15 9H15.01"
                                stroke="#E94234"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 15H9.01"
                                stroke="#E94234"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15 15H15.01"
                                stroke="#E94234"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900">Detailed Data</div>
                            <div className="text-xs text-slate-500">1-minute interval collection</div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-md border border-slate-100">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-coral-500/10 flex items-center justify-center mr-2">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7"
                                stroke="#E94234"
                                strokeWidth="2"
                              />
                              <path d="M22 3H2V7H22V3Z" stroke="#E94234" strokeWidth="2" />
                              <path d="M12 7V21" stroke="#E94234" strokeWidth="2" />
                              <path d="M8 12H16" stroke="#E94234" strokeWidth="2" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900">Data Points</div>
                            <div className="text-xs text-slate-500">Millions collected per facility</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Analyze */}
                  {index === 2 && (
                    <div className="relative h-full overflow-hidden">
                      {/* Background grid pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                      </div>

                      {/* Main illustration */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px]">
                        <div className="relative">
                          {/* AI Analysis visualization */}
                          <div className="w-full h-[220px] bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
                            <div className="h-8 bg-slate-800 flex items-center px-3">
                              <div className="w-2 h-2 rounded-full bg-coral-500 mr-1"></div>
                              <div className="text-xs text-white">Wattif Analytics Engine</div>
                              <div className="ml-auto flex items-center">
                                <div className="w-4 h-4 rounded-full bg-coral-500/20 flex items-center justify-center mr-1">
                                  <div className="w-2 h-2 rounded-full bg-coral-500 animate-pulse"></div>
                                </div>
                                <div className="text-xs text-coral-500">Processing</div>
                              </div>
                            </div>
                            <div className="p-3">
                              {/* Graph visualization */}
                              <div className="h-[120px] mb-3 relative">
                                <svg
                                  className="w-full h-full"
                                  viewBox="0 0 300 120"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  {/* Grid lines */}
                                  <line x1="0" y1="0" x2="300" y2="0" stroke="#f1f5f9" strokeWidth="1" />
                                  <line x1="0" y1="30" x2="300" y2="30" stroke="#f1f5f9" strokeWidth="1" />
                                  <line x1="0" y1="60" x2="300" y2="60" stroke="#f1f5f9" strokeWidth="1" />
                                  <line x1="0" y1="90" x2="300" y2="90" stroke="#f1f5f9" strokeWidth="1" />
                                  <line x1="0" y1="120" x2="300" y2="120" stroke="#f1f5f9" strokeWidth="1" />

                                  <line x1="0" y1="0" x2="0" y2="120" stroke="#f1f5f9" strokeWidth="1" />
                                  <line x1="60" y1="0" x2="60" y2="120" stroke="#f1f5f9" strokeWidth="1" />
                                  <line x1="120" y1="0" x2="120" y2="120" stroke="#f1f5f9" strokeWidth="1" />
                                  <line x1="180" y1="0" x2="180" y2="120" stroke="#f1f5f9" strokeWidth="1" />
                                  <line x1="240" y1="0" x2="240" y2="120" stroke="#f1f5f9" strokeWidth="1" />
                                  <line x1="300" y1="0" x2="300" y2="120" stroke="#f1f5f9" strokeWidth="1" />

                                  {/* Data line */}
                                  <path
                                    d="M0,100 C20,90 40,30 60,40 C80,50 100,20 120,25 C140,30 160,60 180,50 C200,40 220,80 240,70 C260,60 280,90 300,85"
                                    stroke="#E94234"
                                    strokeWidth="2"
                                    fill="none"
                                  />

                                  {/* Anomaly points */}
                                  <circle cx="120" cy="25" r="4" fill="#E94234" />
                                  <circle cx="180" cy="50" r="4" fill="#E94234" />

                                  {/* Anomaly labels */}
                                  <rect
                                    x="110"
                                    y="5"
                                    width="60"
                                    height="16"
                                    rx="2"
                                    fill="white"
                                    stroke="#E94234"
                                    strokeWidth="1"
                                  />
                                  <text x="115" y="16" fontSize="10" fill="#E94234">
                                    Anomaly Detected
                                  </text>

                                  <rect
                                    x="170"
                                    y="30"
                                    width="60"
                                    height="16"
                                    rx="2"
                                    fill="white"
                                    stroke="#E94234"
                                    strokeWidth="1"
                                  />
                                  <text x="175" y="41" fontSize="10" fill="#E94234">
                                    Pattern Change
                                  </text>
                                </svg>
                              </div>

                              {/* Analysis results */}
                              <div className="grid grid-cols-2 gap-2">
                                <div className="h-8 bg-slate-100 rounded flex items-center px-2">
                                  <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                                  <div className="text-xs text-slate-700">Efficiency: 87%</div>
                                </div>
                                <div className="h-8 bg-slate-100 rounded flex items-center px-2">
                                  <div className="w-2 h-2 rounded-full bg-coral-500 mr-1"></div>
                                  <div className="text-xs text-slate-700">Anomalies: 2</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Info cards */}
                      <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-md border border-slate-100">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-coral-500/10 flex items-center justify-center mr-2">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 20V10"
                                stroke="#E94234"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M18 20V4"
                                stroke="#E94234"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M6 20V16"
                                stroke="#E94234"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900">Intelligent Analysis</div>
                            <div className="text-xs text-slate-500">ML-powered pattern detection</div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-md border border-slate-100">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-coral-500/10 flex items-center justify-center mr-2">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 12h-4l-3 9L9 3l-3 9H2"
                                stroke="#E94234"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900">AI-Powered</div>
                            <div className="text-xs text-slate-500">Advanced pattern recognition</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Insights */}
                  {index === 3 && (
                    <div className="relative h-full overflow-hidden">
                      {/* Background grid pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                      </div>

                      {/* Main illustration */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px]">
                        <div className="relative">
                          {/* Split view showing both report and API */}
                          <div className="grid grid-cols-2 gap-4">
                            {/* Report visualization */}
                            <div className="w-full h-[220px] bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
                              <div className="h-8 bg-slate-800 flex items-center px-3">
                                <div className="w-2 h-2 rounded-full bg-coral-500 mr-1"></div>
                                <div className="text-xs text-white">Energy Insights Report</div>
                              </div>
                              <div className="p-3">
                                {/* Report content */}
                                <div className="mb-3">
                                  <div className="h-4 bg-slate-100 rounded w-3/4 mb-1"></div>
                                  <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                                </div>

                                <div className="h-[60px] bg-slate-50 rounded p-2 mb-3">
                                  <div className="flex justify-between mb-1">
                                    <div className="h-3 bg-slate-200 rounded w-1/3"></div>
                                    <div className="h-3 bg-coral-200 rounded w-1/4"></div>
                                  </div>
                                  <div className="h-[30px] relative">
                                    <svg
                                      className="w-full h-full"
                                      viewBox="0 0 100 30"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0,20 C5,18 10,15 15,16 C20,17 25,19 30,18 C35,17 40,14 45,12 C50,10 55,10 60,11 C65,12 70,15 75,14 C80,13 85,10 90,9 C95,8 100,10 100,10"
                                        stroke="#E94234"
                                        strokeWidth="1.5"
                                        fill="none"
                                      />
                                    </svg>
                                  </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2">
                                  <div className="h-[60px] bg-slate-50 rounded p-2">
                                    <div className="h-3 bg-slate-200 rounded w-2/3 mb-1"></div>
                                    <div className="flex items-center justify-center h-[35px]">
                                      <div className="text-lg font-bold text-coral-500">-12%</div>
                                    </div>
                                  </div>
                                  <div className="h-[60px] bg-slate-50 rounded p-2">
                                    <div className="h-3 bg-slate-200 rounded w-2/3 mb-1"></div>
                                    <div className="flex items-center justify-center h-[35px]">
                                      <div className="text-lg font-bold text-green-500">+8%</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* API visualization */}
                            <div className="w-full h-[220px] bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
                              <div className="h-8 bg-slate-800 flex items-center px-3">
                                <div className="w-2 h-2 rounded-full bg-coral-500 mr-1"></div>
                                <div className="text-xs text-white">API Integration</div>
                              </div>
                              <div className="p-3">
                                {/* API code snippet */}
                                <div className="bg-slate-800 rounded p-2 mb-3 text-[10px] font-mono text-slate-300 overflow-hidden">
                                  <div>GET /api/v1/energy/data</div>
                                  <div className="text-slate-500">Authorization: Bearer ...</div>
                                  <div className="mt-2">{"{"}</div>
                                  <div className="pl-2">"facility_id": "123",</div>
                                  <div className="pl-2">"metrics": ["usage", "cost"],</div>
                                  <div className="pl-2">"interval": "hourly"</div>
                                  <div>{"}"}</div>
                                </div>

                                {/* System integration illustration */}
                                <div className="relative h-[80px]">
                                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[40px] h-[40px] bg-slate-100 rounded flex items-center justify-center">
                                    <div className="w-6 h-6 rounded-full bg-coral-500/20 flex items-center justify-center">
                                      <div className="w-3 h-3 rounded-full bg-coral-500"></div>
                                    </div>
                                  </div>

                                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M40,20 L100,20"
                                      stroke="#E94234"
                                      strokeWidth="2"
                                      strokeDasharray="4 2"
                                      fill="none"
                                    >
                                      <animate
                                        attributeName="stroke-dashoffset"
                                        from="24"
                                        to="0"
                                        dur="3s"
                                        repeatCount="indefinite"
                                      />
                                    </path>
                                  </svg>

                                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[40px] h-[40px] bg-slate-100 rounded flex items-center justify-center">
                                    <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center">
                                      <div className="w-3 h-3 rounded-full bg-slate-400"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Info cards */}
                      <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-md border border-slate-100">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-coral-500/10 flex items-center justify-center mr-2">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3"
                                stroke="#E94234"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M16 2H8v5h8V2z"
                                stroke="#E94234"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900">Detailed Reports</div>
                            <div className="text-xs text-slate-500">Tailored for your needs</div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-md border border-slate-100">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-coral-500/10 flex items-center justify-center mr-2">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"
                                stroke="#E94234"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
                                stroke="#E94234"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900">API Integration</div>
                            <div className="text-xs text-slate-500">Connect with your systems</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick navigation dots */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToStep(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                activeStep === index ? "bg-coral-500 scale-125" : "bg-slate-300 hover:bg-slate-400",
              )}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
