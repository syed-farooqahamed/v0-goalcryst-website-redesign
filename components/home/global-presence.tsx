"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const locations = [
  { name: "New York", x: 25, y: 35, delay: 0 },
  { name: "London", x: 47, y: 30, delay: 0.1 },
  { name: "Dubai", x: 58, y: 42, delay: 0.2 },
  { name: "Singapore", x: 75, y: 52, delay: 0.3 },
  { name: "Sydney", x: 85, y: 70, delay: 0.4 },
  { name: "Mumbai", x: 68, y: 45, delay: 0.15 },
  { name: "Tokyo", x: 83, y: 38, delay: 0.25 },
  { name: "San Francisco", x: 15, y: 38, delay: 0.35 },
]

const connections = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 2, to: 5 },
  { from: 5, to: 6 },
  { from: 0, to: 7 },
]

export function GlobalPresence() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Global Reach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Worldwide{" "}
            <span className="text-primary">
              Operations
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Strategically positioned across the globe to provide 24/7 support and local expertise.
          </p>
        </motion.div>

        {/* Map container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[2/1] max-w-5xl mx-auto"
        >
          {/* Map background */}
          <div className="absolute inset-0 rounded-3xl bg-card border border-border overflow-hidden shadow-lg">
            {/* Grid pattern */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            />

            {/* World map dots - simplified representation */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
              {/* Connection lines */}
              {connections.map((conn, i) => {
                const from = locations[conn.from]
                const to = locations[conn.to]
                return (
                  <motion.line
                    key={i}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke="currentColor"
                    strokeWidth="0.15"
                    className="text-primary"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 0.3 } : {}}
                    transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                  />
                )
              })}
            </svg>

            {/* Location nodes */}
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                className="absolute group"
                style={{ left: `${location.x}%`, top: `${location.y}%` }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + location.delay }}
              >
                {/* Pulse effect */}
                <div className="absolute -inset-3 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: "3s", animationDelay: `${index * 0.3}s` }} />
                
                {/* Node */}
                <div className="relative w-2.5 h-2.5 rounded-full bg-primary shadow-md cursor-pointer" />

                {/* Label */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="px-2 py-1 rounded bg-card border border-border text-xs font-medium whitespace-nowrap shadow-md">
                    {location.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative corners */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-border rounded-tl-xl" />
          <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-border rounded-tr-xl" />
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-border rounded-bl-xl" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-border rounded-br-xl" />
        </motion.div>

        {/* Stats below map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center"
        >
          {[
            { value: "8+", label: "Global Offices" },
            { value: "24/7", label: "Operations" },
            { value: "50+", label: "Countries" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
