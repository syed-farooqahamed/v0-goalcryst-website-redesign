"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-deep-blue/20 to-background" />
      
      {/* Animated mesh gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-deep-blue/30 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-[20%] left-[10%] hidden lg:block"
        >
          <div className="animate-float">
            <div className="w-48 h-32 rounded-xl bg-card/50 backdrop-blur-sm border border-border/30 p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-cyan" />
                <span className="text-xs text-muted-foreground">Live Operations</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-gradient-to-r from-cyan/50 to-transparent rounded-full w-full" />
                <div className="h-2 bg-gradient-to-r from-purple/50 to-transparent rounded-full w-3/4" />
                <div className="h-2 bg-gradient-to-r from-cyan/30 to-transparent rounded-full w-1/2" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute top-[30%] right-[8%] hidden lg:block"
        >
          <div className="animate-float-delayed">
            <div className="w-56 h-36 rounded-xl bg-card/50 backdrop-blur-sm border border-border/30 p-4 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-muted-foreground">Global Reach</span>
                <span className="text-xs font-mono text-cyan">24/7</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="h-4 rounded bg-gradient-to-r from-purple/30 to-cyan/30"
                    style={{ opacity: 0.3 + (i * 0.1) }}
                  />
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan to-purple" />
                <div className="flex-1 h-1.5 rounded-full bg-gradient-to-r from-cyan/50 to-purple/50" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute bottom-[25%] left-[15%] hidden lg:block"
        >
          <div className="animate-float" style={{ animationDelay: "1s" }}>
            <div className="w-40 h-24 rounded-xl bg-card/50 backdrop-blur-sm border border-border/30 p-3 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-3 h-3 text-purple" />
                <span className="text-xs text-muted-foreground">AI-Powered</span>
              </div>
              <div className="flex items-end gap-1 h-10">
                {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-purple/60 to-cyan/60"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full hidden lg:block" style={{ opacity: 0.1 }}>
          <motion.path
            d="M200,200 Q400,100 600,300 T1000,200"
            stroke="url(#cyan-gradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          <motion.path
            d="M100,400 Q300,300 500,400 T900,350"
            stroke="url(#purple-gradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
          />
          <defs>
            <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="oklch(0.75 0.18 195)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="oklch(0.65 0.25 300)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 2 === 0 ? "oklch(0.75 0.18 195)" : "oklch(0.65 0.25 300)",
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/30 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
            </span>
            <span className="text-sm text-muted-foreground">Next-Generation BPO Solutions</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-balance">Redefining</span>
            <br />
            <span className="bg-gradient-to-r from-cyan via-purple to-cyan bg-clip-text text-transparent animate-gradient text-balance">
              Intelligent Business
            </span>
            <br />
            <span className="text-balance">Operations</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
          >
            Transform your business operations with cutting-edge AI-powered solutions. 
            We deliver seamless, scalable, and intelligent outsourcing that drives growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan to-purple text-white hover:opacity-90 transition-opacity glow-cyan px-8 h-12"
            >
              <Link href="/solutions">
                Explore Solutions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 px-8 h-12"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>

          {/* Stats preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8"
          >
            {[
              { value: "500+", label: "Global Clients" },
              { value: "10M+", label: "Interactions/Month" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Coverage" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
