"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, ArrowLeft } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface IndustryPageProps {
  name: string
  icon: LucideIcon
  color: string
  headline: string
  description: string
  features: string[]
  benefits: {
    title: string
    description: string
  }[]
  stats: {
    value: string
    label: string
  }[]
}

export function IndustryPageTemplate({
  name,
  icon: Icon,
  color,
  headline,
  description,
  features,
  benefits,
  stats,
}: IndustryPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/30 to-background" />
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        
        {/* Decorative elements */}
        <div className={`absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br ${color} opacity-10 blur-3xl`} />
        <div className={`absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-gradient-to-br ${color} opacity-10 blur-3xl`} />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link 
              href="/industries" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Industries
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Icon badge */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${color} mb-6`}>
                <Icon className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                {headline}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                {description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyan to-purple text-white hover:opacity-90 glow-cyan"
                >
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/solutions">View Solutions</Link>
                </Button>
              </div>
            </motion.div>

            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl bg-card/50 border border-border/30 p-8 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-6">Impact at a Glance</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 rounded-xl bg-secondary/30">
                      <div className={`text-3xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative corners */}
              <div className={`absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 rounded-tr-xl opacity-50`} style={{ borderColor: `var(--cyan)` }} />
              <div className={`absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 rounded-bl-xl opacity-50`} style={{ borderColor: `var(--purple)` }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent">
                {name}
              </span>
              {" "}Capabilities
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/30"
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-background via-deep-blue/10 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose Goalcryst for{" "}
              <span className="bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent">
                {name}
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card/50 border border-border/30"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} opacity-20 flex items-center justify-center mb-4`}>
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
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
              Ready to Transform Your {name} Operations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let us show you how Goalcryst can elevate your business to new heights.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan to-purple text-white hover:opacity-90 glow-cyan"
            >
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
