import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart4, CheckCircle2, ClipboardCheck, LineChart, TrendingUp, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"

export default function InsightsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <PageHeader title="Wattif Insights" description="Expert Guidance to Transform Data into Action" />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">Data-Driven Energy Expertise</h2>
              <p className="mb-4 text-lg text-slate-600">
                Data alone doesn't save energy. Wattif Insights pairs our monitoring technology with expert analysis and
                recommendation services to ensure you achieve maximum value from your energy data.
              </p>
              <p className="mb-4 text-lg text-slate-600">
                Our team of energy experts works as an extension of your staff, analyzing your energy data, identifying
                opportunities, and providing clear, actionable recommendations prioritized by impact and ease of
                implementation.
              </p>
              <p className="text-lg text-slate-600">
                Whether you lack dedicated energy management resources or simply want to accelerate your efficiency
                initiatives, Wattif Insights provides the expertise you need to transform data into meaningful action
                and measurable results.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/placeholder.svg?key=t7mln"
                  alt="Wattif Insights Expert Analysis"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-slate-100 to-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Who Uses Wattif Insights</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-medium text-slate-900">Organizations Without Energy Staff</h3>
              <p className="text-slate-600">
                Companies that lack dedicated energy management personnel but want to optimize their energy use. Our
                experts act as their virtual energy team, providing guidance and expertise.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-medium text-slate-900">Multi-Site Operators</h3>
              <p className="text-slate-600">
                Businesses with multiple locations who need consistent energy management across their portfolio. Our
                experts identify patterns, share best practices, and ensure all sites perform optimally.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-medium text-slate-900">Sustainability Leaders</h3>
              <p className="text-slate-600">
                Organizations with ambitious sustainability goals who need expert guidance to translate energy data into
                actionable carbon reduction strategies and measurable results.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-medium text-slate-900">Lean Facility Teams</h3>
              <p className="text-slate-600">
                Facility management teams that are stretched thin and need expert support to maximize the value of their
                energy data and implement effective efficiency measures.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-medium text-slate-900">Energy Program Managers</h3>
              <p className="text-slate-600">
                Energy managers who want to accelerate their programs with expert analysis and recommendations, allowing
                them to focus on implementation rather than data analysis.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md border-2 border-coral-500">
              <h3 className="mb-3 text-xl font-medium text-slate-900">Is Insights Right for You?</h3>
              <p className="mb-4 text-slate-600">
                Wattif Insights is ideal if you want expert guidance to transform your energy data into actionable
                recommendations and measurable results without expanding your internal team.
              </p>
              <div className="text-center">
                <Button asChild className="bg-coral-500 hover:bg-coral-600">
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Our Approach</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <BarChart4 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Initial Assessment</h3>
                <p className="text-slate-600">
                  Our energy experts analyze your current energy profile, identifying patterns, anomalies, and
                  opportunities for improvement. We establish your baseline performance and set realistic targets for
                  improvement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <LineChart className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Regular Analysis</h3>
                <p className="text-slate-600">
                  Receive scheduled reports with clear, actionable insights about your energy performance. Our experts
                  continuously monitor your data, identifying new opportunities and tracking the results of implemented
                  changes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <ClipboardCheck className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Prioritized Recommendations</h3>
                <p className="text-slate-600">
                  Get specific, prioritized suggestions for operational changes, each with projected ROI. We focus on
                  low-cost or no-cost opportunities first, ensuring you achieve quick wins while building momentum for
                  your energy management program.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <Users className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Implementation Support</h3>
                <p className="text-slate-600">
                  Our team doesn't just identify opportunities—we help you implement them. From developing standard
                  operating procedures to training staff and validating results, we ensure your energy-saving
                  initiatives deliver the expected outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <TrendingUp className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Continuous Improvement</h3>
                <p className="text-slate-600">
                  As your baseline improves, we continually refine our analysis to find the next tier of optimization.
                  Energy management is a journey, not a destination, and our experts are with you every step of the way.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Reporting & Documentation</h3>
                <p className="text-slate-600">
                  We provide comprehensive documentation of all findings, recommendations, and results, making it easy
                  to demonstrate the value of your energy management initiatives to stakeholders and decision-makers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Service Levels</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-center text-xl font-medium text-slate-900">Essential</h3>
                  <div className="mb-4 text-center">
                    <span className="text-3xl font-bold text-slate-900">Quarterly</span>
                    <p className="text-sm text-slate-600">Analysis & Reporting</p>
                  </div>
                  <ul className="mb-6 space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-teal-500" />
                      <span>Quarterly energy performance reports</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-teal-500" />
                      <span>Top 3 energy-saving recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-teal-500" />
                      <span>Annual energy review meeting</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <Button asChild className="bg-coral-500 hover:bg-coral-600">
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-center text-xl font-medium text-slate-900">Advanced</h3>
                  <div className="mb-4 text-center">
                    <span className="text-3xl font-bold text-slate-900">Monthly</span>
                    <p className="text-sm text-slate-600">Analysis & Reporting</p>
                  </div>
                  <ul className="mb-6 space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-teal-500" />
                      <span>Monthly energy performance reports</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-teal-500" />
                      <span>Prioritized action plan with ROI analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-teal-500" />
                      <span>Quarterly review meetings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-teal-500" />
                      <span>Implementation guidance</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <Button asChild className="bg-coral-500 hover:bg-coral-600">
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-center text-xl font-medium text-slate-900">Premium</h3>
                  <div className="mb-4 text-center">
                    <span className="text-3xl font-bold text-slate-900">Weekly</span>
                    <p className="text-sm text-slate-600">Analysis & Reporting</p>
                  </div>
                  <ul className="mb-6 space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-teal-500" />
                      <span>Weekly energy performance reports</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-teal-500" />
                      <span>Comprehensive action plan with ROI analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-teal-500" />
                      <span>Monthly review meetings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-teal-500" />
                      <span>Full implementation support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-teal-500" />
                      <span>Dedicated energy advisor</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 text-teal-500" />
                      <span>Custom reporting for stakeholders</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <Button asChild className="bg-coral-500 hover:bg-coral-600">
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Success Story</h2>
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h3 className="mb-4 text-xl font-medium text-slate-900">University Campus</h3>
              <p className="mb-4 text-slate-600">
                A mid-sized university implemented Wattif Insights to help manage energy across their diverse campus
                facilities. Our experts identified that the HVAC systems in several buildings were operating on
                schedules that didn't match actual occupancy patterns.
              </p>
              <p className="mb-4 text-slate-600">
                By adjusting schedules to match real usage and implementing simple setback strategies during breaks and
                low-occupancy periods, the university reduced their energy consumption by 16% in the first year,
                resulting in over $230,000 in savings with minimal capital investment.
              </p>
              <div className="mt-6 flex justify-center">
                <Button asChild className="bg-coral-500 hover:bg-coral-600">
                  <Link href="/case-studies/university-campus">
                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">Ready to Transform Data into Action?</h2>
            <p className="mb-8 text-lg text-slate-300">
              Let our energy experts help you unlock the full potential of your energy data and achieve meaningful
              results.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-coral-500 hover:bg-coral-600">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-300 text-white hover:bg-slate-700">
                <Link href="/solutions">Compare All Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
