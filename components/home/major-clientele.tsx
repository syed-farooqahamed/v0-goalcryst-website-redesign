"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const clients = [
  { id: 1, src: "/1.png", alt: "Client 1" },
  { id: 2, src: "/2.jpg", alt: "Client 2" },
  { id: 3, src: "/3.jpg", alt: "Client 3" },
  { id: 4, src: "/4.png", alt: "Client 4" },
  { id: 5, src: "/5.jpg", alt: "Client 5" },
  { id: 6, src: "/6.jpg", alt: "Client 6" },
]

export function MajorClientele() {
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
            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              Major Clientele
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Trusted by{" "}
            <span className="text-primary">Leading Companies</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            We proudly serve some of the world's most recognized brands and organizations.
          </p>
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-hidden"
        >
          <div className="relative w-full max-w-6xl mx-auto">
            <motion.div
              className="flex gap-8"
              animate={{ x: [0, -1600] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            >
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0 w-64 h-32 bg-white rounded-lg shadow-md border border-border flex items-center justify-center p-4"
                >
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}