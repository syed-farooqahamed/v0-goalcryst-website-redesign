"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Plane,
  Brain,
  ShoppingCart,
  Calculator,
  Heart,
  Wifi,
  ArrowRight
} from "lucide-react"

const iconMap = {
  plane: Plane,
  brain: Brain,
  "shopping-cart": ShoppingCart,
  calculator: Calculator,
  heart: Heart,
  wifi: Wifi,
} as const

type IconName = keyof typeof iconMap

const industries: Array<{ name: string; iconName: IconName; href: string; description: string }> = [
  {
    name: "Aviation",
    iconName: "plane",
    href: "/industries/aviation",
    description: "Comprehensive aviation support from booking to baggage handling."
  },
  {
    name: "Health Care",
    iconName: "heart",
    href: "/industries/health-care",
    description: "HIPAA-compliant healthcare support with compassion and care."
  },
  {
    name: "AI/ML Data Solutions",
    iconName: "brain",
    href: "/industries/ai-ml-data-solutions",
    description: "High-quality data annotation and processing for AI/ML models."
  },
  {
    name: "E-Commerce",
    iconName: "shopping-cart",
    href: "/industries/e-commerce",
    description: "End-to-end e-commerce support to boost sales and satisfaction."
  },
  {
    name: "Finance & Accounting",
    iconName: "calculator",
    href: "/industries/finance-accounting",
    description: "Accurate, compliant financial operations and reporting."
  },
  {
    name: "Telecom",
    iconName: "wifi",
    href: "/industries/telecom",
    description: "24/7 telecommunications support keeping customers connected."
  },
]

export function IndustriesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-secondary/30">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Industries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Transforming{" "}
            <span className="text-primary">
              Every Sector
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Deep industry expertise combined with innovative solutions to drive efficiency and growth across diverse sectors.
          </p>
        </motion.div>

        {/* Industries grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = iconMap[industry.iconName]
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={industry.href} className="group block">
                  <div className="relative h-48 rounded-2xl bg-card border border-border p-6 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {industry.description}
                    </p>

                    {/* Arrow */}
                    <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-1">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* View all industries button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-background hover:bg-secondary/50 border-primary/20 hover:border-primary/40"
          >
            <Link href="/industries">
              View All Industries
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
