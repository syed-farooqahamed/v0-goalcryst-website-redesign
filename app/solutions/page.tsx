"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageCircle, Phone, Mail, Server, Users, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const iconMap = {
  "message-circle": MessageCircle,
  phone: Phone,
  mail: Mail,
  server: Server,
  users: Users,
}

type IconName = keyof typeof iconMap

const solutions: {
  name: string
  iconName: IconName
  href: string
  description: string
  features: string[]
}[] = [
  {
    name: "Chat Support",
    iconName: "message-circle",
    href: "/solutions/chat-support",
    description: "Real-time intelligent chat solutions powered by AI and human expertise for instant customer engagement.",
    features: ["24/7 Availability", "Multi-language Support", "AI-Assisted Responses", "Seamless Escalation", "Proactive Engagement"],
  },
  {
    name: "Phone Support",
    iconName: "phone",
    href: "/solutions/phone-support",
    description: "Professional voice support with trained specialists delivering exceptional customer experiences.",
    features: ["Trained Specialists", "Quality Monitoring", "Call Analytics", "IVR Integration", "Callback Options"],
  },
  {
    name: "Email Support",
    iconName: "mail",
    href: "/solutions/email-support",
    description: "Efficient email management with quick turnaround times and intelligent prioritization.",
    features: ["Smart Routing", "Template Management", "SLA Tracking", "Sentiment Analysis", "Priority Queuing"],
  },
  {
    name: "Backend Office Support",
    iconName: "server",
    href: "/solutions/backend-office-support",
    description: "Comprehensive back-office operations that streamline processes and improve efficiency.",
    features: ["Data Processing", "Document Management", "Quality Assurance", "Process Automation", "Reporting"],
  },
  {
    name: "Customer Support",
    iconName: "users",
    href: "/solutions/customer-support",
    description: "End-to-end customer service solutions delivering omnichannel excellence.",
    features: ["Omnichannel Support", "CRM Integration", "Customer Analytics", "Retention Programs", "Feedback Management"],
  },
]

export default function SolutionsPage() {
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
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Comprehensive Support{" "}
              <span className="text-primary">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              From chat to voice to backend operations, we provide end-to-end support services 
              that seamlessly integrate with your business and drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {solutions.map((solution, index) => {
              const Icon = iconMap[solution.iconName]
              return (
                <motion.div
                  key={solution.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={solution.href} className="group block">
                    <div className="relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg overflow-hidden">
                      <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                          {/* Icon */}
                          <div className="inline-flex w-16 h-16 rounded-2xl bg-primary items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-8 h-8 text-primary-foreground" />
                          </div>
                          
                          <h2 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                            {solution.name}
                          </h2>
                          <p className="text-lg text-muted-foreground mb-6">
                            {solution.description}
                          </p>
                          
                          <div className="flex items-center gap-2 text-primary font-medium">
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                        
                        {/* Features */}
                        <div className="grid sm:grid-cols-2 gap-3">
                          {solution.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-3 p-3 rounded-xl bg-secondary">
                              <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center flex-shrink-0">
                                <Check className="w-3 h-3 text-primary-foreground" />
                              </div>
                              <span className="text-sm font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
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
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We tailor our services to meet your specific business needs. Let us create the perfect solution for you.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">
                Contact Our Team
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
