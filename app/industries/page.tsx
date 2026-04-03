"use client"

import { motion } from "framer-motion"
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
import { Button } from "@/components/ui/button"

const iconMap = {
  plane: Plane,
  landmark: Landmark,
  brain: Brain,
  "shopping-cart": ShoppingCart,
  calculator: Calculator,
  heart: Heart,
  shield: Shield,
  wallet: Wallet,
  wifi: Wifi,
  home: Home,
}

type IconName = keyof typeof iconMap

const industries: {
  name: string
  iconName: IconName
  href: string
  description: string
}[] = [
  {
    name: "Aviation",
    iconName: "plane",
    href: "/industries/aviation",
    description: "Comprehensive aviation support from booking to baggage handling.",
  },
  {
    name: "Banking & Collection",
    iconName: "landmark",
    href: "/industries/banking-collection",
    description: "Secure banking operations and professional collections management.",
  },
  {
    name: "AI/ML Data Solutions",
    iconName: "brain",
    href: "/industries/ai-ml-data-solutions",
    description: "High-quality data annotation and processing for AI/ML models.",
  },
  {
    name: "E-Commerce",
    iconName: "shopping-cart",
    href: "/industries/e-commerce",
    description: "End-to-end e-commerce support to boost sales and satisfaction.",
  },
  {
    name: "Finance & Accounting",
    iconName: "calculator",
    href: "/industries/finance-accounting",
    description: "Accurate, compliant financial operations and reporting.",
  },
  {
    name: "Health Care",
    iconName: "heart",
    href: "/industries/health-care",
    description: "HIPAA-compliant healthcare support with compassion and care.",
  },
  {
    name: "Insurance",
    iconName: "shield",
    href: "/industries/insurance",
    description: "Streamlined insurance operations from policy to claims.",
  },
  {
    name: "Payroll",
    iconName: "wallet",
    href: "/industries/payroll",
    description: "Reliable payroll processing with guaranteed accuracy.",
  },
  {
    name: "Telecom",
    iconName: "wifi",
    href: "/industries/telecom",
    description: "24/7 telecommunications support keeping customers connected.",
  },
  {
    name: "US Title Insurance",
    iconName: "home",
    href: "/industries/us-title-insurance",
    description: "Expert title insurance services for the US real estate market.",
  },
]

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="absolute inset-0 gradient-subtle" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Industries</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Industry-Specific{" "}
              <span className="text-primary">
                Expertise
              </span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Deep domain knowledge across industries, delivering solutions that understand 
              your unique challenges and regulatory requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const Icon = iconMap[industry.iconName]
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link href={industry.href} className="group block h-full">
                    <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                      {/* Icon */}
                      <div className="inline-flex w-14 h-14 rounded-xl bg-primary items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {industry.name}
                      </h3>
                      <p className="text-muted-foreground flex-grow mb-4">
                        {industry.description}
                      </p>
                      
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <span className="text-sm">Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {"Don't See Your Industry?"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {"We're experts at adapting to new industries. Let's discuss how we can support your unique needs."}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
