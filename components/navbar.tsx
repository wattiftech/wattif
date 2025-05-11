"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center  flex-col justify-center gap-y-1 py-1 w-36">
            <Image src="/logo.png" width={20} height={32} alt="Wattif Logo" className="h-auto w-full" />
            <Image src="/tagline.png" width={20} height={32} alt="Wattif Logo" className="h-auto w-full" />
            {/* <span className="text-2xl font-bold text-coral-500">Wattif</span>
            <span className="text-2xl font-light text-slate-900">Tech</span> */}
          </Link>
        </div>

        <nav className="hidden items-center  md:gap-x-2 lg:gap-x-6 md:flex">
          <Link href="/solutions/notch" className="relative flex items-center text-coral-500 hover:text-coral-600 text-[15px] font-medium">
            Notch
            <span className="absolute -top-2 -right-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-coral-500 to-coral-400 shadow-md"></span>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="p-0 focus:outline-none focus:border-none focus:ring-0 ">
              <Button style={{ border: "none", outline: "none" }} variant="link" className="flex items-center gap-1 text-slate-700 p-0 focus:outline-none focus:border-none focus:ring-0 text-[15px] ">
                Solutions
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-[220px]">
              <DropdownMenuItem asChild>
                <Link href="/solutions/elements" className="cursor-pointer">
                  Wattif Elements
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/enterprise" className="cursor-pointer">
                  Wattif Enterprise
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/insights" className="cursor-pointer">
                  Wattif Insights
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="p-0 outline-none border-none ring-0">
              <Button variant="link" className="flex items-center gap-1 text-slate-700 p-0 outline-none border-none ring-0 text-[15px]">
                Industries
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-[220px]">
              <DropdownMenuItem asChild>
                <Link href="/industries/commercial-real-estate" className="cursor-pointer">
                  Commercial Real Estate
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/industries/data-centers" className="cursor-pointer">
                  Data Centers
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/industries/construction-sites" className="cursor-pointer">
                  Construction Sites
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/industries/manufacturing-plants" className="cursor-pointer">
                  Manufacturing Plants
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/industries/logistics-facilities" className="cursor-pointer">
                  Logistics Facilities
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/industries/r-and-d-facilities" className="cursor-pointer">
                  R&D Facilities
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/pricing" className="text-slate-700 hover:text-coral-500 text-[15px] font-medium">
            Pricing
          </Link>

          <Link href="/about" className="text-slate-700 hover:text-coral-500 text-[15px] font-medium">
            About
          </Link>

          <Link href="/contact" className="text-slate-700 hover:text-coral-500 text-[15px] font-medium">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-coral-500 hover:bg-coral-600">
            <Link href="/contact">Request a Demo</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/" className="flex items-center  flex-col justify-center gap-y-1 py-1 w-36">
                <Image src="/logo.png" width={20} height={32} alt="Wattif Logo" className="h-auto w-full" />
                <Image src="/tagline.png" width={20} height={32} alt="Wattif Logo" className="h-auto w-full" />
                {/* <span className="text-2xl font-bold text-coral-500">Wattif</span>
            <span className="text-2xl font-light text-slate-900">Tech</span> */}
              </Link>

              <div className="flex flex-col gap-y-3">
                <div className="border-b border-slate-200 pb-2">
                  <Link
                    href="/solutions/notch"
                    className="relative flex items-center font-medium text-coral-500 hover:text-coral-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Notch
                    <span className="ml-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-coral-500 to-coral-400"></span>
                  </Link>
                </div>

                <div className="border-b border-slate-200 pb-2">
                  <h3 className="mb-2 font-medium text-base">Solutions</h3>
                  <div className="flex flex-col space-y-2 pl-2">
                    <Link
                      href="/solutions/elements"
                      className="text-slate-600 hover:text-coral-500"
                      onClick={() => setIsOpen(false)}
                    >
                      Wattif Elements
                    </Link>
                    <Link
                      href="/solutions/enterprise"
                      className="text-slate-600 hover:text-coral-500"
                      onClick={() => setIsOpen(false)}
                    >
                      Wattif Enterprise
                    </Link>
                    <Link
                      href="/solutions/insights"
                      className="text-slate-600 hover:text-coral-500"
                      onClick={() => setIsOpen(false)}
                    >
                      Wattif Insights
                    </Link>
                  </div>
                </div>

                <div className="border-b border-slate-200 pb-2">
                  <h3 className="mb-2 font-medium text-base">Industries</h3>
                  <div className="flex flex-col space-y-2 pl-2">
                    <Link
                      href="/industries/commercial-real-estate"
                      className="text-slate-600 hover:text-coral-500"
                      onClick={() => setIsOpen(false)}
                    >
                      Commercial Real Estate
                    </Link>
                    <Link
                      href="/industries/data-centers"
                      className="text-slate-600 hover:text-coral-500"
                      onClick={() => setIsOpen(false)}
                    >
                      Data Centers
                    </Link>
                    <Link
                      href="/industries/construction-sites"
                      className="text-slate-600 hover:text-coral-500"
                      onClick={() => setIsOpen(false)}
                    >
                      Construction Sites
                    </Link>
                    <Link
                      href="/industries/manufacturing-plants"
                      className="text-slate-600 hover:text-coral-500"
                      onClick={() => setIsOpen(false)}
                    >
                      Manufacturing Plants
                    </Link>
                    <Link
                      href="/industries/logistics-facilities"
                      className="text-slate-600 hover:text-coral-500"
                      onClick={() => setIsOpen(false)}
                    >
                      Logistics Facilities
                    </Link>
                    <Link
                      href="/industries/r-and-d-facilities"
                      className="text-slate-600 hover:text-coral-500"
                      onClick={() => setIsOpen(false)}
                    >
                      R&D Facilities
                    </Link>
                  </div>
                </div>

                <Link
                  href="/pricing"
                  className="border-b border-slate-200 pb-2 text-slate-600 hover:text-coral-500"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>

                <Link
                  href="/about"
                  className="border-b border-slate-200 pb-2 text-slate-600 hover:text-coral-500"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  className="border-b border-slate-200 pb-2 text-slate-600 hover:text-coral-500"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>

              <Button className="bg-coral-500 hover:bg-coral-600">Request a Demo</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
