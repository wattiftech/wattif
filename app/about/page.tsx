import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHeader } from "@/components/page-header"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <PageHeader title="About Wattif" description="Energy Intelligence Reimagined" icon={<Link href="/" className="flex items-center  flex-col justify-center gap-y-1 py-1 w-36">
        <Image src="/logo-white.png" width={20} height={32} alt="Wattif Logo" className="h-auto w-full" />
        <Image src="/tagline-white.png" width={20} height={32} alt="Wattif Logo" className="h-auto w-full" />

      </Link>} />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">Our Story</h2>
              <p className="mb-4 text-lg text-slate-600">
                We started Wattif with a simple question: Why is energy monitoring still so complicated?
              </p>
              <p className="mb-4 text-lg text-slate-600">
                Modern buildings have sophisticated systems for everything from security to climate control, yet most
                still rely on monthly utility bills to understand their energy use. When building owners want deeper
                insights, they face expensive installations, complex systems, and data that requires specialists to
                interpret.
              </p>
              <p className="mb-4 text-lg text-slate-600">We believed there had to be a better way.</p>
              <p className="text-lg text-slate-600">
                Our founding team—bringing together expertise from electrical engineering, data science, and building
                management—set out to create the monitoring system we wished existed: one that installs without
                disruption, operates without maintenance, and delivers insights without complexity.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/placeholder.svg?key=jtstj"
                  alt="Wattif Technologies headquarters"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">Our Approach</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Simplicity Without Compromise</h3>
                <p className="text-slate-600">
                  We believe energy monitoring should be sophisticated in its capabilities but simple in its
                  implementation and use. That's why Wattif combines advanced analytics with intuitive interfaces and
                  non-invasive installation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Data That Drives Action</h3>
                <p className="text-slate-600">
                  Measurement alone doesn't create change. Every feature in our platform is designed not just to inform,
                  but to enable specific actions that improve energy performance and support business goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100">
                  <CheckCircle2 className="h-6 w-6 text-coral-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Continuous Innovation</h3>
                <p className="text-slate-600">
                  The energy landscape is constantly evolving, and so is our platform. We continually enhance our
                  technologies, incorporating advances in machine learning, IoT, and data visualization to provide
                  ever-improving insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-slate-900">Our Team</h2>
            <p className="mb-12 text-lg text-slate-600">
              Meet the experts behind Wattif's innovative energy intelligence solutions.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-lg">
              <div className="h-64 w-full bg-slate-100">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dharani_Malladi_lfoe95.jpg-8MdQLLGZ6ae15UgBNwGE8joUFUT7p0.jpeg"
                  alt="Dharani Malladi"
                  className="h-full w-full object-contain"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900">Dharani Malladi</h3>
                <p className="text-coral-600 font-medium">Founder and CEO</p>
                <div className="mt-4 flex">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-slate-500 hover:text-coral-600"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/dmalladi/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <div className="h-64 w-full bg-slate-100">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aish_Prasad_Picture_oymyje.jpg-kHSv9NRTTeDstmDQPzOBk3fyiz0nVb.jpeg"
                  alt="Aish Prasad"
                  className="h-full w-full object-contain"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900">Aish Prasad</h3>
                <p className="text-coral-600 font-medium">Director of Client Impact</p>
                <div className="mt-4 flex">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-slate-500 hover:text-coral-600"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/aishvarma/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <div className="h-64 w-full bg-slate-100">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suresh.jpg-iC3tgjQqtiDijRuIhJHKjDizzNKnZu.jpeg"
                  alt="Suresh M"
                  className="h-full w-full object-contain"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900">Suresh M, Ph.D</h3>
                <p className="text-coral-600 font-medium">Electrical Engineering</p>
                <div className="mt-4 flex">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-slate-500 hover:text-coral-600"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/mogilicharla-suresh/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <div className="h-64 w-full bg-slate-100">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Balaji_Kalluri_eklkb4.jpg-goqEz6qssceLXRw3AxVqCi4hSb0EMt.jpeg"
                  alt="Dr. Balaji Kalluri"
                  className="h-full w-full object-contain"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900">Dr. Balaji Kalluri</h3>
                <p className="text-coral-600 font-medium">Scientific Advisor, Non-Intrusive Load Monitoring</p>
                <div className="mt-4 flex">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-slate-500 hover:text-coral-600"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/dr-balaji-kalluri-phd-a95a4931/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <div className="h-64 w-full bg-slate-100">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Venkii_Pic_40KB_dya3u9.jpg-71zobv6piRown9yojryqeJLnJcQGOp.jpeg"
                  alt="Venkatesh GR"
                  className="h-full w-full object-contain"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900">Venkatesh GR</h3>
                <p className="text-coral-600 font-medium">Principal IoT Engineer</p>
                <div className="mt-4 flex">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-slate-500 hover:text-coral-600"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/venkateshgr11/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">Join Our Team</h2>
            <p className="mb-8 text-lg text-slate-300">
              We're always looking for talented individuals who are passionate about energy efficiency, sustainability,
              and creating innovative solutions to complex problems.
            </p>
            <Button asChild size="lg" className="bg-coral-500 hover:bg-coral-600">
              <Link href="/careers">
                View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
