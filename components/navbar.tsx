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
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            {/* <span className="text-2xl font-bold text-coral-500">Wattif</span>
            <span className="text-2xl font-light text-slate-900">Tech</span> */}

            <Image src="/watif_logo_black.png" width={20} height={32} alt="Wattif Logo" className="h-5 w-auto" />

          </Link>
        </div>

        <nav className="hidden items-center space-x-6 md:flex">
          <Link
            href="/solutions/notch"
            className="relative flex items-center font-medium text-coral-500 transition-all hover:text-coral-600"
          >
            Notch
            <span className="absolute -top-2 -right-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-coral-500 to-coral-400 shadow-md"></span>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="flex items-center gap-1 font-medium text-slate-700 hover:text-coral-500 p-0 h-auto text-base">
                Solutions
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-[220px]">
              <DropdownMenuItem asChild>
                <Link href="/solutions/enterprise" className="cursor-pointer">
                  Wattif Enterprise
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/elements" className="cursor-pointer">
                  Wattif Elements
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
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="flex items-center gap-1 font-medium text-slate-700 hover:text-coral-500 p-0 h-auto text-base">
                Industries
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-[220px]">
              <DropdownMenuItem asChild>
                <Link href="/industries/hotels" className="cursor-pointer">
                  Hotels
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/industries/educational-buildings" className="cursor-pointer">
                  Educational Buildings
                </Link>
              </DropdownMenuItem>
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
                <Link href="/industries/multi-site-retail" className="cursor-pointer">
                  Multi-Site Retail
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/industries/battery-storage" className="cursor-pointer">
                  R&D Facilities
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/pricing" className="font-medium text-slate-700 hover:text-coral-500">
            Pricing
          </Link>

          <Link href="/about" className="font-medium text-slate-700 hover:text-coral-500">
            About
          </Link>

          <Link href="/contact" className="font-medium text-slate-700 hover:text-coral-500">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-coral-500 hover:bg-coral-600">Request a Demo</Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-8 w-8" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
            <div className="flex flex-col gap-6 pt-3">
              <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                {/* <span className="text-2xl font-bold text-coral-500">Wattif</span>
                <span className="text-2xl font-light text-slate-900">Tech</span> */}

                <Image src="/watif_logo_black.png" width={20} height={32} alt="Wattif Logo" className="h-6 w-auto" />

              </Link>

              <div className="flex flex-col space-y-3">
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
                  <h3 className="mb-2 font-medium">Solutions</h3>
                  <div className="flex flex-col space-y-2 pl-2">
                    <Link
                      href="/solutions/enterprise"
                      className="text-slate-600 hover:text-coral-500"
                      onClick={() => setIsOpen(false)}
                    >
                      Wattif Enterprise
                    </Link>
                    <Link
                      href="/solutions/elements"
                      className="text-slate-600 hover:text-coral-500"
                      onClick={() => setIsOpen(false)}
                    >
                      Wattif Elements
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
                  <h3 className="mb-2 font-medium">Industries</h3>
                  <div className="flex flex-col space-y-2 pl-2">
                    <Link
                      href="/industries/hotels"
                      className="text-slate-600 hover:text-coral-500"
                      onClick={() => setIsOpen(false)}
                    >
                      Hotels
                    </Link>
                    <Link
                      href="/industries/educational-buildings"
                      className="text-slate-600 hover:text-coral-500"
                      onClick={() => setIsOpen(false)}
                    >
                      Educational Buildings
                    </Link>
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
                      href="/industries/multi-site-retail"
                      className="text-slate-600 hover:text-coral-500"
                      onClick={() => setIsOpen(false)}
                    >
                      Multi-Site Retail
                    </Link>
                    <Link
                      href="/industries/battery-storage"
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
