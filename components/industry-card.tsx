import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface IndustryCardProps {
  icon: ReactNode
  title: string
  description: string
  highlight?: string
  href: string
}

export function IndustryCard({ icon, title, description, highlight="", href }: IndustryCardProps) {
  return (
    <Card className="flex h-full flex-col transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-coral-100 text-coral-600">
          {icon}
        </div>
        <h3 className="text-xl font-medium">{title}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="mb-4 text-slate-600">{description}</p>
       {highlight && <div className="rounded-md bg-slate-50 p-3">
          <p className="text-sm font-medium text-slate-700">
            <span className="text-coral-600">Success Story: </span>
            {highlight}
          </p>
        </div>}
      </CardContent>
      <CardFooter>
        <Link href={href} className="flex items-center text-coral-600 hover:text-coral-700 text-sm font-medium">
          Learn more
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}
