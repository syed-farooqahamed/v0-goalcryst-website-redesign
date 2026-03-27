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

const industries = [
  { 
    name: "Aviation", 
    icon: Plane, 
    href: "/industries/aviation", 
    color: "from-cyan to-blue-500",
    description: "End-to-end aviation support from booking management to customer service excellence."
  },
  { 
    name: "Banking & Collection", 
    icon: Landmark, 
    href: "/industries/banking-collection", 
    color: "from-purple to-pink-500",
    description: "Secure, compliant banking operations and professional collection services."
  },
  { 
    name: "AI/ML Data Solutions", 
    icon: Brain, 
    href: "/industries/ai-ml-data-solutions", 
    color: "from-cyan to-purple",
    description: "Cutting-edge AI and machine learning data annotation and processing services."
  },
  { 
    name: "E-Commerce", 
    icon: ShoppingCart, 
    href: "/industries/e-commerce", 
    color: "from-green-400 to-cyan",
    description: "Comprehensive e-commerce support driving customer satisfaction and sales."
  },
  { 
    name: "Finance & Accounting", 
    icon: Calculator, 
    href: "/industries/finance-accounting", 
    color: "from-amber-400 to-orange-500",
    description: "Accurate financial processing and accounting services you can rely on."
  },
  { 
    name: "Health Care", 
    icon: Heart, 
    href: "/industries/health-care", 
    color: "from-red-400 to-pink-500",
    description: "HIPAA-compliant healthcare support services with compassion and precision."
  },
  { 
    name: "Insurance", 
    icon: Shield, 
    href: "/industries/insurance", 
    color: "from-blue-400 to-indigo-500",
    description: "Streamlined insurance processing from claims to policy management."
  },
  { 
    name: "Payroll", 
    icon: Wallet, 
    href: "/industries/payroll", 
    color: "from-emerald-400 to-teal-500",
    description: "Reliable payroll processing ensuring accuracy and compliance."
  },
  { 
    name: "Telecom", 
    icon: Wifi, 
    href: "/industries/telecom", 
    color: "from-violet-400 to-purple",
    description: "24/7 telecommunications support keeping connections strong."
  },
  { 
    name: "US Title Insurance", 
    icon: Home, 
    href: "/industries/us-title-insurance", 
    color: "from-rose-400 to-red-500",
    description: "Specialized title insurance services for the US real estate market."
  },
]

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/30 to-background" />
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 mb-6">
              <span className="text-xs font-medium text-cyan uppercase tracking-wider">Industries</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Expertise Across{" "}
              <span className="bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent">
                Every Sector
              </span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Deep industry knowledge combined with innovative solutions to transform operations 
              across diverse business verticals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={industry.href} className="group block h-full">
                  <div className="relative h-full p-8 rounded-2xl bg-card/50 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 overflow-hidden">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <div className="relative flex items-start gap-6">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <industry.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {industry.name}
                        </h2>
                        <p className="text-muted-foreground text-sm mb-4">
                          {industry.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <span>Explore</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                      <div className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${industry.color} opacity-10 rotate-45`} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
