import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"

export default function SolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <PageHeader
        title="Our Solutions"
        description="Comprehensive energy monitoring solutions tailored to your specific needs"
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-1 lg:grid-cols-3">
            {/* Wattif Enterprise */}
            <Card className="flex flex-col overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="bg-gradient-to-r from-coral-600 to-coral-500 p-6">
                <h2 className="text-2xl font-bold text-white">Wattif Enterprise</h2>
                <p className="mt-2 text-coral-50">Complete Energy Intelligence for Large-Scale Operations</p>
              </div>
              <CardContent className="flex-grow p-6">
                <p className="mb-6 text-slate-600">
                  Our comprehensive energy monitoring platform for organizations with complex energy profiles or
                  multiple facilities. It combines granular data collection with sophisticated analytics to provide a
                  complete picture of your energy landscape.
                </p>
                <h3 className="mb-3 text-lg font-medium text-slate-900">Key Capabilities:</h3>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-coral-500">•</span>
                    <div>
                      <span className="font-medium">Multi-Site Portfolio View</span>
                      <p className="text-sm text-slate-600">
                        Monitor, compare, and manage energy use across your entire portfolio from a single platform.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-coral-500">•</span>
                    <div>
                      <span className="font-medium">Anomaly Detection and Alerts</span>
                      <p className="text-sm text-slate-600">
                        Receive timely notifications when consumption patterns deviate from expected parameters.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-coral-500">•</span>
                    <div>
                      <span className="font-medium">Advanced Analytics</span>
                      <p className="text-sm text-slate-600">
                        Move beyond basic monitoring with features like load disaggregation, peak demand analysis, and
                        consumption forecasting.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-coral-500">•</span>
                    <div>
                      <span className="font-medium">Customizable Dashboards</span>
                      <p className="text-sm text-slate-600">
                        Different stakeholders need different views. All accessible from any device, anywhere.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-coral-500">•</span>
                    <div>
                      <span className="font-medium">Integration Capabilities</span>
                      <p className="text-sm text-slate-600">
                        Connect with your existing systems—BMS, CMMS, ERP, or other platforms.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-700">
                    <span className="text-coral-600">Ideal For: </span>
                    Organizations with complex energy requirements, multiple facilities, or sophisticated sustainability
                    reporting needs.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="border-t bg-slate-50 p-6">
                <div className="flex w-full flex-col gap-3 sm:flex-row">
                  <Button asChild className="flex-1 bg-coral-500 hover:bg-coral-600">
                    <Link href="/solutions/enterprise">Learn More</Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <Link href="/contact">Request a Demo</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>

            {/* Wattif Elements */}
            <Card className="flex flex-col overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6">
                <h2 className="text-2xl font-bold text-white">Wattif Elements</h2>
                <p className="mt-2 text-slate-200">Modular Solutions for Targeted Energy Challenges</p>
              </div>
              <CardContent className="flex-grow p-6">
                <p className="mb-6 text-slate-600">
                  Not ready for a comprehensive system? Start with specific monitoring modules designed to address your
                  most pressing energy challenges.
                </p>
                <h3 className="mb-3 text-lg font-medium text-slate-900">Available Elements:</h3>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-coral-500">•</span>
                    <div>
                      <span className="font-medium">Power Quality Monitoring</span>
                      <p className="text-sm text-slate-600">
                        Detect harmonics, voltage sags, phase imbalances, and other power quality issues.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-coral-500">•</span>
                    <div>
                      <span className="font-medium">Circuit-Level Tracking</span>
                      <p className="text-sm text-slate-600">
                        Install monitoring on specific distribution panels or circuits for granular visibility.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-coral-500">•</span>
                    <div>
                      <span className="font-medium">Peak Demand Analysis</span>
                      <p className="text-sm text-slate-600">
                        Identify exactly what contributes to your peak demand charges and develop strategies to reduce
                        them.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-coral-500">•</span>
                    <div>
                      <span className="font-medium">Renewable Integration Analysis</span>
                      <p className="text-sm text-slate-600">
                        Optimize the interaction between on-site generation, battery storage, and grid consumption.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-coral-500">•</span>
                    <div>
                      <span className="font-medium">Carbon Intensity Reporting</span>
                      <p className="text-sm text-slate-600">
                        Track Scope 2 emissions with time-based carbon accounting.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-700">
                    <span className="text-coral-600">Ideal For: </span>
                    Organizations looking to solve specific energy challenges without implementing a comprehensive
                    monitoring system.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="border-t bg-slate-50 p-6">
                <div className="flex w-full flex-col gap-3 sm:flex-row">
                  <Button asChild className="flex-1 bg-coral-500 hover:bg-coral-600">
                    <Link href="/solutions/elements">Explore Elements</Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <Link href="/contact">Talk to an Expert</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>

            {/* Wattif Insights */}
            <Card className="flex flex-col overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="bg-gradient-to-r from-cyan-600 to-cyan-500 p-6">
                <h2 className="text-2xl font-bold text-white">Wattif Insights</h2>
                <p className="mt-2 text-cyan-50">Expert Guidance to Transform Data into Action</p>
              </div>
              <CardContent className="flex-grow p-6">
                <p className="mb-6 text-slate-600">
                  Data alone doesn't save energy. Wattif Insights pairs our monitoring technology with expert analysis
                  and recommendation services to ensure you achieve maximum value.
                </p>
                <h3 className="mb-3 text-lg font-medium text-slate-900">Our Approach:</h3>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-coral-500">•</span>
                    <div>
                      <span className="font-medium">Initial Assessment</span>
                      <p className="text-sm text-slate-600">
                        Our energy experts analyze your current energy profile, identifying opportunities for
                        improvement.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-coral-500">•</span>
                    <div>
                      <span className="font-medium">Regular Analysis</span>
                      <p className="text-sm text-slate-600">
                        Receive scheduled reports with clear, actionable insights about your energy performance.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-coral-500">•</span>
                    <div>
                      <span className="font-medium">Prioritized Recommendations</span>
                      <p className="text-sm text-slate-600">
                        Get specific, prioritized suggestions for operational changes, each with projected ROI.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-coral-500">•</span>
                    <div>
                      <span className="font-medium">Implementation Support</span>
                      <p className="text-sm text-slate-600">
                        Our team doesn't just identify opportunities—we help you implement them.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-coral-500">•</span>
                    <div>
                      <span className="font-medium">Continuous Improvement</span>
                      <p className="text-sm text-slate-600">
                        As your baseline improves, we continually refine our analysis to find the next tier of
                        optimization.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-700">
                    <span className="text-coral-600">Ideal For: </span>
                    Organizations without dedicated energy management staff or those looking to accelerate their
                    efficiency initiatives.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="border-t bg-slate-50 p-6">
                <div className="flex w-full flex-col gap-3 sm:flex-row">
                  <Button asChild className="flex-1 bg-coral-500 hover:bg-coral-600">
                    <Link href="/solutions/insights">Learn More</Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <Link href="/contact">Schedule a Consultation</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900">
              Not Sure Which Solution Is Right For You?
            </h2>
            <p className="mb-8 text-lg text-slate-600">
              Our energy experts can help you determine the best approach based on your specific needs, goals, and
              budget. Schedule a consultation to discuss your unique energy challenges.
            </p>
            <Button asChild size="lg" className="bg-coral-500 hover:bg-coral-600">
              <Link href="/contact">
                Contact Our Team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
