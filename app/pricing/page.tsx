import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"
import { BuildingTypeVisualization } from "@/components/building-type-visualization"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <PageHeader
        title="Transparent Pricing"
        description="Flexible solutions tailored to your energy monitoring needs"
      />

      <section className="relative py-16 overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-dot-pattern opacity-50"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-[20%] top-[20%] w-[40%] h-[40%] bg-coral-50 rounded-full opacity-20 blur-[120px]"></div>
          <div className="absolute -left-[10%] bottom-[10%] w-[30%] h-[30%] bg-blue-50 rounded-full opacity-20 blur-[100px]"></div>
        </div>

        <div className="container relative mx-auto px-4 md:px-6 z-10">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Transparent Value-Based Pricing</h2>
            <p className="mt-4 text-lg text-slate-600">
              Our pricing model is designed to scale with your facility and deliver measurable ROI. We structure our
              solutions to typically represent just 0.25-0.5% of your annual energy spend.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 mb-16">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Simple Pricing Structure</h3>
              <p className="text-slate-600 mb-6">
                We keep our pricing straightforward and transparent, with software subscriptions starting at just 0.25%
                of your annual energy spend for annual subscriptions. Your price is based on four key factors:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-coral-100 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-coral-600"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-slate-900">Building Size</h4>
                    <p className="text-slate-600">
                      Larger buildings get better rates. We offer volume discounts as your monitored area increases.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-coral-100 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-coral-600"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-slate-900">Building Type</h4>
                    <p className="text-slate-600">
                      Different buildings have different needs. We adjust pricing based on your specific building type.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-coral-100 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-coral-600"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-slate-900">Building Efficiency</h4>
                    <p className="text-slate-600">
                      Current energy efficiency affects potential savings. Less efficient buildings often see faster
                      ROI.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-coral-100 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-coral-600"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-slate-900">Solution Package</h4>
                    <p className="text-slate-600">
                      Choose the features you need. Your selected Elements and monitoring points determine the final
                      price.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Modular Solution Approach</h3>
              <p className="text-slate-600 mb-6">
                Our flexible, modular approach allows you to start small and expand as needed, tailored to your energy
                management maturity and goals:
              </p>
              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-coral-100 flex items-center justify-center mr-3">
                      <span className="text-coral-600 font-medium">1</span>
                    </div>
                    <h4 className="text-lg font-medium text-slate-900">Essential - Start with One Element</h4>
                  </div>
                  <p className="mt-2 text-slate-600 pl-11">
                    Begin with a single Element to address your most critical energy challenge. Perfect for initial
                    deployments or focused energy management needs.
                  </p>
                </div>
                <div className="border-b border-slate-100 pb-4">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-coral-100 flex items-center justify-center mr-3">
                      <span className="text-coral-600 font-medium">2</span>
                    </div>
                    <h4 className="text-lg font-medium text-slate-900">Advanced - Multiple Elements</h4>
                  </div>
                  <p className="mt-2 text-slate-600 pl-11">
                    Combine multiple Elements for comprehensive energy management. Create a custom solution with the
                    exact capabilities your facility needs.
                  </p>
                </div>
                <div>
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-coral-100 flex items-center justify-center mr-3">
                      <span className="text-coral-600 font-medium">3</span>
                    </div>
                    <h4 className="text-lg font-medium text-slate-900">Enterprise - Full Platform + Advisory</h4>
                  </div>
                  <p className="mt-2 text-slate-600 pl-11">
                    Access the complete Wattif platform with all Elements plus dedicated energy expertise. Includes
                    strategic guidance and ongoing optimization.
                  </p>
                  <ul className="mt-3 space-y-2 list-none pl-11">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-coral-500 flex-shrink-0" />
                      <span className="text-slate-600">Monthly strategy sessions with dedicated energy specialist</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-coral-500 flex-shrink-0" />
                      <span className="text-slate-600">
                        Custom analysis and reporting tailored to your business goals
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-coral-500 flex-shrink-0" />
                      <span className="text-slate-600">
                        Priority support and implementation with dedicated account manager
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-coral-500 flex-shrink-0" />
                      <span className="text-slate-600">
                        Comprehensive ROI tracking and documentation for stakeholders
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mt-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Hardware Investment</h3>
            <p className="text-slate-600 mb-6">
              Our hardware components are a one-time purchase, separate from the software subscription:
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-coral-100 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-coral-600"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-900">Monitoring Sensors</h4>
                  <p className="text-slate-600">
                    Non-invasive sensors for electrical monitoring are purchased upfront. Volume discounts available
                    based on quantity.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-coral-100 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-coral-600"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <line x1="9" y1="1" x2="9" y2="4"></line>
                    <line x1="15" y1="1" x2="15" y2="4"></line>
                    <line x1="9" y1="20" x2="9" y2="23"></line>
                    <line x1="15" y1="20" x2="15" y2="23"></line>
                    <line x1="20" y1="9" x2="23" y2="9"></line>
                    <line x1="20" y1="14" x2="23" y2="14"></line>
                    <line x1="1" y1="9" x2="4" y2="9"></line>
                    <line x1="1" y1="14" x2="4" y2="14"></line>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-900">Gateway Devices</h4>
                  <p className="text-slate-600">
                    Central data collection units that connect your sensors to our cloud platform. One gateway typically
                    covers multiple sensors.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-coral-100 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-coral-600"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-900">Warranty</h4>
                  <p className="text-slate-600">
                    All hardware comes with a comprehensive 5-year warranty, ensuring long-term reliability and peace of
                    mind.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-coral-50 to-slate-50 rounded-xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Factors That Influence Pricing</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-coral-500" />
                      <span className="text-slate-700">Energy Usage Intensity (EUI) of your facility</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-coral-500" />
                      <span className="text-slate-700">Total square meters/feet to be monitored</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-coral-500" />
                      <span className="text-slate-700">Number of electrical distribution points</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-coral-500" />
                      <span className="text-slate-700">Complexity of electrical infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-coral-500" />
                      <span className="text-slate-700">Number of buildings in portfolio</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-coral-500" />
                      <span className="text-slate-700">Subscription term length (1-3 years)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mb-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Value-Based Investment</h3>
              <p className="text-lg text-slate-600 mb-6">
                Our solutions typically represent just <span className="text-emerald-600 font-semibold">3%</span> of
                your annual energy spend while delivering <span className="text-emerald-600 font-semibold">15%</span> in
                energy savings.
              </p>
              <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-6 max-w-xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 shadow-md flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-white"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">ROI Calculator</h4>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-500">Annual Energy Spend</p>
                      <p className="text-lg font-medium text-slate-900">$200,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Annual Energy Savings</p>
                      <p className="text-lg font-medium text-emerald-600">$30,000</p>
                      <p className="text-xs text-slate-500">(15% of energy spend)</p>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-sm text-slate-500 mb-2">Investment</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-slate-500">One-time Hardware</p>
                        <p className="text-lg font-medium text-slate-900">$20,000</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Annual Software</p>
                        <p className="text-lg font-medium text-slate-900">$6,000</p>
                        <p className="text-xs text-slate-500">(3% of energy spend)</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-sm text-slate-500 mb-2">Results</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-slate-500">First Year Net Savings</p>
                        <p className="text-lg font-medium text-emerald-600">$4,000</p>
                        <p className="text-xs text-slate-500">(After hardware & software)</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Time to Recover Investment</p>
                        <p className="text-lg font-medium text-emerald-600">12 months</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-slate-500">5-Year Net Savings</p>
                        <p className="text-lg font-medium text-emerald-600">$124,000</p>
                        <p className="text-xs text-slate-500">($30k × 5 years - $26k costs)</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">5-Year ROI</p>
                        <p className="text-lg font-medium text-emerald-600">477%</p>
                        <p className="text-xs text-slate-500">($124k return / $26k investment)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button asChild className="bg-coral-500 hover:bg-coral-600">
                <Link href="/contact">
                  Request Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Points Visualization Section */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Understanding Monitoring Points</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Monitoring points are the foundation of our energy intelligence platform. Each point represents a
                non-invasive sensor that captures real-time data from your electrical infrastructure.
              </p>
            </div>

            <div className="mb-12">
              <BuildingTypeVisualization />
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600 mb-4">
                Our energy specialists will help determine the optimal number and placement of monitoring points based
                on your facility's unique characteristics and energy management goals.
              </p>
              <Button asChild variant="outline" className="border-coral-500 text-coral-500 hover:bg-coral-50">
                <Link href="/contact">
                  Schedule a Site Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">Key Pricing Elements</h2>

          <div className="grid gap-12 md:grid-cols-3">
            {/* All-Inclusive Approach */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-slate-900 flex items-center">
                <div className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-coral-100">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                Software Subscription Model
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-coral-500" />
                  <span>Software, implementation support, and ongoing maintenance bundled in one subscription</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-coral-500" />
                  <span>Hardware is a separate one-time purchase</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-coral-500" />
                  <span>Software updates and platform improvements included</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-coral-500" />
                  <span>Predictable operational expense for ongoing services</span>
                </li>
              </ul>
            </div>

            {/* Annual Billing with Discount */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-slate-900 flex items-center">
                <div className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-coral-100">
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
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                Annual Billing with Discount
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-coral-500" />
                  <span>Monthly rate listed with 15% discount for annual prepayment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-coral-500" />
                  <span>Minimum 12-month commitment standard</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-coral-500" />
                  <span>Multi-year options with escalating discounts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-coral-500" />
                  <span>Discounts: 15% (1-year), 20% (2-year), and 25% (3-year) commitments</span>
                </li>
              </ul>
            </div>

            {/* Transparent Add-Ons */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-slate-900 flex items-center">
                <div className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-coral-100">
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
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
                Transparent Add-Ons
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-coral-500" />
                  <span>Additional monitoring points: $25-50/point/month depending on tier</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-coral-500" />
                  <span>Notch workflow automation: 50% of base subscription when bundled</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-coral-500" />
                  <span>Premium support packages clearly defined</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-coral-500" />
                  <span>No hidden fees or unexpected charges</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-medium">
                  What's included in the subscription?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-600">
                    The subscription includes all software access, standard implementation support, ongoing technical
                    support, and regular system updates. Hardware components are purchased separately as a one-time
                    investment.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-medium">
                  Do I need to purchase the sensors?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-600">
                    Yes. The monitoring sensors and gateway devices are a one-time purchase. We offer competitive
                    pricing and volume discounts based on the size of your deployment. All hardware comes with a
                    comprehensive 5-year warranty at no additional cost.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-medium">
                  Can I start small and expand later?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-600">
                    Absolutely. Many customers begin with our Essentials plan or a proof-of-concept deployment to
                    validate results in a specific area before expanding. Your subscription can grow flexibly as you
                    identify additional monitoring needs.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-medium">
                  Are there long-term contracts?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-600"></p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-medium">
                  Are there long-term contracts?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-600">
                    We offer flexible terms with incentives for longer commitments. While our standard agreement is 12
                    months, we offer discounts of 15% for 1-year, 20% for 2-year, and 25% for 3-year commitments.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-lg font-medium">
                  What happens if I need to add monitoring points?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-600">
                    Additional monitoring points can be added at any time for $25-50 per point per month depending on
                    your current solution level. Volume discounts apply automatically as your deployment grows.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-lg font-medium">
                  How quickly will I see results?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-600">
                    Most clients identify their first energy-saving opportunities within the first week of monitoring,
                    with more comprehensive insights developing over the first month as our AI learns your facility's
                    patterns.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left text-lg font-medium">
                  How much does the hardware cost?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-600">
                    Hardware costs vary based on your facility's specific requirements, the number of monitoring points
                    needed, and the complexity of your electrical infrastructure. Our energy specialists will provide a
                    detailed hardware quote after assessing your facility's needs. Typically, the hardware investment is
                    recovered through energy savings within the first 6-12 months.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mt-12 text-center">
            <p className="mb-6 text-slate-600">Have more questions about our pricing or solutions?</p>
            <div className="flex justify-center">
              <Button asChild className="bg-coral-500 hover:bg-coral-600">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(circle at 50% 50%, rgba(233, 66, 52, 0.1), transparent 35%)" }}
          ></div>
        </div>

        <div className="container relative mx-auto px-4 md:px-6 z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">Ready to Transform Your Energy Management?</h2>
            <p className="mb-8 text-lg text-slate-300">
              Start with a proof-of-concept to experience the power of Wattif's energy monitoring solutions. Our
              risk-free approach ensures you see value before committing to a full-scale deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-coral-500 hover:bg-coral-600">
                <Link href="/contact">
                  Start with a Proof-of-Concept
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
