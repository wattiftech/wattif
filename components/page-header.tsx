import type { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  description: string
  icon?: ReactNode
}

export function PageHeader({ title, description, icon }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 text-white" >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {icon && <div className="mb-4 flex justify-center">{icon}</div>}
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
          <div className="w-16 h-1 bg-coral-500 mx-auto mb-6 mt-2"></div>
          <p className="text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto font-light">{description}</p>
        </div>
      </div>
    </section >
  )
}
