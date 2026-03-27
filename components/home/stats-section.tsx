"use client"

import { motion, useInView, useSpring, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const stats = [
  { value: 500, suffix: "+", label: "Global Clients", description: "Trusted by enterprises worldwide" },
  { value: 10, suffix: "M+", label: "Monthly Interactions", description: "Handled with precision" },
  { value: 98, suffix: "%", label: "Client Satisfaction", description: "Consistently exceeding expectations" },
  { value: 50, suffix: "+", label: "Countries Served", description: "Global reach, local expertise" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayed, setDisplayed] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setDisplayed(value)
          clearInterval(timer)
        } else {
          setDisplayed(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {displayed}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/50 via-background to-deep-blue/50" />
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple/50 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Impact That{" "}
            <span className="bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent">
              Speaks
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
            Numbers that reflect our commitment to excellence and client success.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="text-center p-6 rounded-2xl bg-card/30 border border-border/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Value */}
                <div className="relative text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent mb-2">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                
                {/* Label */}
                <div className="relative font-semibold mb-1">{stat.label}</div>
                
                {/* Description */}
                <div className="relative text-sm text-muted-foreground">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
