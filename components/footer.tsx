"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Linkedin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const pathname = usePathname()

  // Define page-specific CTA content
  const getCtaContent = () => {
    switch (pathname) {
      case "/":
        return {
          text: "Start Your Energy Monitoring Journey",
          link: "/contact",
          description: "Ready to see your energy clearly? Get started with a personalized demo.",
        }
      case "/solutions":
      case "/solutions/enterprise":
      case "/solutions/elements":
      case "/solutions/insights":
        return {
          text: "Find Your Perfect Solution",
          link: "/contact",
          description: "Discover which Wattif solution is right for your specific needs.",
        }
      case "/industries":
      case pathname?.startsWith("/industries/") ? pathname : "":
        return {
          text: "See Industry-Specific Results",
          link: "/contact",
          description: "Learn how organizations like yours are saving with Wattif.",
        }
      case "/pricing":
        return {
          text: "Get a Custom Quote",
          link: "/contact",
          description: "Contact us for pricing tailored to your specific requirements.",
        }
      case "/about":
        return {
          text: "Join Our Mission",
          link: "/contact",
          description: "Become part of the energy intelligence revolution.",
        }
      case "/contact":
        return {
          text: "Schedule a Consultation",
          link: "/contact",
          description: "Our energy experts are ready to help you optimize your energy use.",
        }
      default:
        return {
          text: "Transform Your Energy Management",
          link: "/contact",
          description: "Take the first step toward complete energy visibility.",
        }
    }
  }

  const ctaContent = getCtaContent()

  return (
    <footer className="relative bg-slate-900 text-slate-300 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b40_1px,transparent_1px),linear-gradient(to_bottom,#1e293b40_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>

      <div className="container mx-auto px-4 py-12 md:px-6 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center  flex-col justify-center gap-y-1 py-1 w-36">
              <Image src="/logo-white.png" width={20} height={32} alt="Wattif Logo" className="h-auto w-full" />
              <Image src="/tagline-white.png" width={20} height={32} alt="Wattif Logo" className="h-auto w-full" />

            </Link>
            <p className="mt-2 text-sm">
              Revealing the complete energy story of your business—showing you exactly where energy is being used, when,
              and how much it's costing you.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions/elements" className="hover:text-coral-400">
                  Wattif Elements
                </Link>
              </li>
              <li>
                <Link href="/solutions/enterprise" className="hover:text-coral-400">
                  Wattif Enterprise
                </Link>
              </li>
              <li>
                <Link href="/solutions/insights" className="hover:text-coral-400">
                  Wattif Insights
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/industries/industrial-plants" className="hover:text-coral-400">
                  Industrial Plants
                </Link>
              </li>
              <li>
                <Link href="/industries/commercial-real-estate" className="hover:text-coral-400">
                  Commercial Real Estate
                </Link>
              </li>
              <li>
                <Link href="/industries/data-centers" className="hover:text-coral-400">
                  Data Centers
                </Link>
              </li>
              <li>
                <Link href="/industries/construction-sites" className="hover:text-coral-400">
                  Construction Sites
                </Link>
              </li>
              <li>
                <Link href="/industries/logistics-facilities" className="hover:text-coral-400">
                  Logistics Facilities
                </Link>
              </li>
              <li>
                <Link href="/industries/r-and-d-facilities" className="hover:text-coral-400">
                  R&D Facilities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-coral-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-coral-400">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-coral-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-coral-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>

            <address className="mt-6 not-italic text-sm">
              <p className="mb-2">
                <strong className="font-medium text-white">Headquarters:</strong>
                <br />
                Wattif Technologies Pte. Ltd.
                <br />
                68 CIRCULAR ROAD
                <br />
                #02-01
                <br />
                SINGAPORE (049422)
              </p>
              <p className="mb-2">
                <strong className="font-medium text-white">Email:</strong>
                <br />
                <a href="mailto:info@wattif.io" className="hover:text-coral-400">
                  info@wattif.io
                </a>
              </p>
            </address>

            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.linkedin.com/company/wattif-technologies/"
                className="text-slate-400 hover:text-coral-400"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Wattif Technologies Pte. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
