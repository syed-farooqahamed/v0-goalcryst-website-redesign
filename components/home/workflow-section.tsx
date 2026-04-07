"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Search, Settings, Rocket, BarChart3 } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discovery & Analysis",
    description: "We dive deep into your business processes, identifying opportunities for optimization and growth.",
    icon: Search,
  },
  {
    number: "02",
    title: "Custom Configuration",
    description: "Our team designs and configures solutions tailored specifically to your operational needs.",
    icon: Settings,
  },
  {
    number: "03",
    title: "Seamless Deployment",
    description: "Rapid implementation with minimal disruption, ensuring business continuity throughout.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Continuous Optimization",
    description: "Ongoing monitoring, analysis, and refinement to maximize efficiency and results.",
    icon: BarChart3,
  },
]

export function WorkflowSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            How We{" "}
            <span className="text-primary">
              Transform
            </span>
            {" "}Your Operations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            A proven methodology that delivers measurable results through strategic implementation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 bg-border">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full bg-primary/50 origin-left"
            />
          </div>

          {/* Connection line - Mobile */}
          <div className="lg:hidden absolute top-0 bottom-0 left-8 w-px bg-border">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full bg-primary/50 origin-top"
            />
          </div>

          {/* Steps */}
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                className="relative pl-20 lg:pl-0"
              >
                {/* Mobile step indicator */}
                <div className="lg:hidden absolute left-0 top-0">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Card */}
                <div className="group relative">
                  {/* Desktop step indicator */}
                  <div className="hidden lg:flex absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary items-center justify-center text-primary-foreground text-xs font-bold z-10 shadow-lg">
                    {parseInt(step.number)}
                  </div>

                  <div className="lg:mt-8 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg h-56">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
