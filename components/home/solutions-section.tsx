"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"
import { MessageCircle, Phone, Mail, Server, Users, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const solutions = [
  {
    id: "chat",
    name: "Chat Support",
    icon: MessageCircle,
    href: "/solutions/chat-support",
    description: "Real-time intelligent chat solutions powered by AI and human expertise.",
    features: ["24/7 Availability", "Multi-language Support", "AI-Assisted Responses", "Seamless Escalation"],
  },
  {
    id: "phone",
    name: "Phone Support",
    icon: Phone,
    href: "/solutions/phone-support",
    description: "Professional voice support that enhances customer experience.",
    features: ["Trained Specialists", "Quality Monitoring", "Call Analytics", "Callback Options"],
  },
  {
    id: "email",
    name: "Email Support",
    icon: Mail,
    href: "/solutions/email-support",
    description: "Efficient email management with quick turnaround times.",
    features: ["Smart Routing", "Template Management", "SLA Tracking", "Sentiment Analysis"],
  },
  {
    id: "backend",
    name: "Backend Office Support",
    icon: Server,
    href: "/solutions/backend-office-support",
    description: "Comprehensive back-office operations that keep your business running.",
    features: ["Data Processing", "Document Management", "Quality Assurance", "Reporting"],
  },
  {
    id: "customer",
    name: "Customer Support",
    icon: Users,
    href: "/solutions/customer-support",
    description: "End-to-end customer service solutions tailored to your needs.",
    features: ["Omnichannel Support", "CRM Integration", "Customer Analytics", "Retention Programs"],
  },
]

export function SolutionsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Comprehensive Support{" "}
            <span className="text-primary">
              Solutions
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            From chat to voice to backend operations, we provide end-to-end support services 
            that seamlessly integrate with your business.
          </p>
        </motion.div>

        {/* Solutions cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(solution.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative group ${index === solutions.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <Link href={solution.href} className="block h-full">
                <div className={`
                  relative h-full rounded-2xl border transition-all duration-300
                  ${hoveredId === solution.id 
                    ? "bg-card border-primary/30 shadow-xl" 
                    : "bg-card border-border"
                  }
                `}>
                  <div className="relative p-6 h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 bg-primary/10 border border-primary/20">
                      <solution.icon className="w-7 h-7 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {solution.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {solution.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:gap-4">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/solutions">
              View All Solutions
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
