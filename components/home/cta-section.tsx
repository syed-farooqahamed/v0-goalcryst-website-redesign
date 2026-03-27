"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-deep-blue via-background to-deep-blue" />
            <div className="absolute inset-0 gradient-mesh opacity-50" />
            <div className="absolute inset-0 rounded-3xl border border-border/30" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple to-transparent" />

            <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/20 to-purple/20 border border-border/30 mb-8"
              >
                <Sparkles className="w-8 h-8 text-cyan" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance"
              >
                Ready to Transform Your{" "}
                <span className="bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent">
                  Operations
                </span>
                ?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
              >
                Join hundreds of forward-thinking companies that have revolutionized their 
                business processes with Goalcryst. Let us build the future together.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyan to-purple text-white hover:opacity-90 transition-opacity glow-cyan px-8 h-12"
                >
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 px-8 h-12"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </motion.div>
            </div>

            <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-cyan/10 blur-2xl" />
            <div className="absolute bottom-8 right-8 w-32 h-32 rounded-full bg-purple/10 blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
