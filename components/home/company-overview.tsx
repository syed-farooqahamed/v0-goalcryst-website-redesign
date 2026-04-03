"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Shield, Globe, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Rapid deployment and real-time operational efficiency that scales with your needs."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols protecting your data and ensuring compliance."
  },
  {
    icon: Globe,
    title: "Global Operations",
    description: "Seamless 24/7 coverage across multiple time zones and regions."
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "Data-driven insights and optimization to accelerate your business growth."
  },
]

export function CompanyOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-secondary/30">
      {/* Background */}
      <div className="absolute inset-0 gradient-subtle" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Who We Are</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Pioneering the Future of{" "}
              <span className="text-primary">
                Business Operations
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              At Goalcryst, we combine human expertise with cutting-edge technology to deliver 
              exceptional business process outsourcing solutions. Our mission is to transform 
              how businesses operate by providing intelligent, scalable, and cost-effective services.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer subtle shadow */}
              <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl" />
              
              {/* Main circle */}
              <div className="absolute inset-8 rounded-full bg-card border border-border flex items-center justify-center overflow-hidden shadow-xl">
                {/* Inner content */}
                <div className="text-center p-8">
                  <div className="text-6xl sm:text-7xl font-bold text-primary mb-2">
                    15+
                  </div>
                  <div className="text-muted-foreground">Years of Excellence</div>
                </div>
              </div>

              {/* Orbiting elements */}
              {[0, 72, 144, 216, 288].map((rotation, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-3 h-3"
                  style={{
                    transform: `rotate(${rotation}deg) translateX(180px)`,
                  }}
                  animate={{
                    rotate: [rotation, rotation + 360],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div 
                    className="w-3 h-3 rounded-full bg-primary"
                    style={{
                      opacity: 0.3 + (i * 0.15),
                    }}
                  />
                </motion.div>
              ))}

              {/* Corner decorations */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-border rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-border rounded-bl-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
