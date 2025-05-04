import type React from "react"
import "@/app/globals.css"

import { Inter } from "next/font/google"
import { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wattif Technologies - See the Energy Your Building is Hiding",
  description:
    "Wattif's non-invasive monitoring solution reveals the complete energy story of your business—showing you exactly where energy is being used, when, and how much it's costing you.",
  metadataBase: new URL("https://wattif.io"),
  openGraph: {
    title: "Wattif Technologies - See the Energy Your Building is Hiding",
    description: "Wattif's non-invasive monitoring solution reveals the complete energy story of your business—showing you exactly where energy is being used, when, and how much it's costing you.",
    url: "https://wattif.io",
    siteName: "Wattif Technologies",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
