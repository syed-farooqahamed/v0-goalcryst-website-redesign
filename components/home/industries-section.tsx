"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { 
  Plane, 
  Landmark, 
  Brain, 
  ShoppingCart, 
  Calculator, 
  Heart, 
  Shield, 
  Wallet, 
  Wifi,
  Home,
  ArrowRight
} from "lucide-react"

const industries = [
  { name: "Aviation", icon: Plane, href: "/industries/aviation", color: "from-cyan to-blue-500" },
  { name: "Banking & Collection", icon: Landmark, href: "/industries/banking-collection", color: "from-purple to-pink-500" },
  { name: "AI/ML Data Solutions", icon: Brain, href: "/industries/ai-ml-data-solutions", color: "from-cyan to-purple" },
  { name: "E-Commerce", icon: ShoppingCart, href: "/industries/e-commerce", color: "from-green-400 to-cyan" },
  { name: "Finance & Accounting", icon: Calculator, href: "/industries/finance-accounting", color: "from-amber-400 to-orange-500" },
  { name: "Health Care", icon: Heart, href: "/industries/health-care", color: "from-red-400 to-pink-500" },
  { name: "Insurance", icon: Shield, href: "/industries/insurance", color: "from-blue-400 to-indigo-500" },
  { name: "Payroll", icon: Wallet, href: "/industries/payroll", color: "from-emerald-400 to-teal-500" },
  { name: "Telecom", icon: Wifi, href: "/industries/telecom", color: "from-violet-400 to-purple" },
  { name: "US Title Insurance", icon: Home, href: "/industries/us-title-insurance", color: "from-rose-400 to-red-500" },
]

export function IndustriesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple/10 border border-purple/20 mb-4">
                <span className="text-xs font-medium text-purple uppercase tracking-wider">Industries</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
                Transforming{" "}
                <span className="bg-gradient-to-r from-purple to-cyan bg-clip-text text-transparent">
                  Every Sector
                </span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-pretty">
              Deep industry expertise combined with innovative solutions to drive efficiency and growth across diverse sectors.
            </p>
          </div>
        </motion.div>

        {/* Industries grid - Staggered layout */}
        <div className="relative">
          {/* Horizontal scroll container for mobile */}
          <div className="flex lg:grid lg:grid-cols-5 gap-4 overflow-x-auto pb-4 lg:pb-0 snap-x snap-mandatory lg:snap-none -mx-4 px-4 lg:mx-0 lg:px-0">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`flex-shrink-0 w-[280px] lg:w-auto snap-center ${
                  index % 2 === 1 ? "lg:translate-y-8" : ""
                }`}
              >
                <Link href={industry.href} className="group block">
                  <div className="relative h-48 rounded-2xl bg-card/50 border border-border/30 p-6 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                    
                    {/* Arrow */}
                    <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-2">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                      <div className={`absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br ${industry.color} opacity-20 rotate-45`} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Scroll indicator for mobile */}
          <div className="flex lg:hidden justify-center gap-2 mt-4">
            <span className="text-xs text-muted-foreground">Scroll to explore</span>
            <ArrowRight className="w-4 h-4 text-muted-foreground animate-pulse" />
          </div>
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link 
            href="/industries"
            className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300"
          >
            <span>Explore All Industries</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
