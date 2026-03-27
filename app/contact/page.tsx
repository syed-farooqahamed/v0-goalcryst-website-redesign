"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Linkedin, Twitter } from "lucide-react"

const offices = [
  {
    city: "New York",
    address: "350 Fifth Avenue, Suite 5100",
    country: "United States",
    phone: "+1 (555) 123-4567",
  },
  {
    city: "London",
    address: "30 St Mary Axe",
    country: "United Kingdom",
    phone: "+44 20 7123 4567",
  },
  {
    city: "Singapore",
    address: "1 Raffles Place, Tower 2",
    country: "Singapore",
    phone: "+65 6123 4567",
  },
  {
    city: "Mumbai",
    address: "Bandra Kurla Complex",
    country: "India",
    phone: "+91 22 1234 5678",
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setFormState("success")
    
    // Reset after delay
    setTimeout(() => {
      setFormState("idle")
      setFormData({ name: "", email: "", company: "", phone: "", subject: "", message: "" })
    }, 3000)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/30 to-background" />
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple/10 border border-purple/20 mb-6">
              <span className="text-xs font-medium text-purple uppercase tracking-wider">Contact</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              {"Let's Start a"}{" "}
              <span className="bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Ready to transform your business operations? Get in touch with our team 
              and discover how Goalcryst can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="bg-card/50 border-border/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="bg-card/50 border-border/50"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your Company"
                      className="bg-card/50 border-border/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="bg-card/50 border-border/50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="How can we help?"
                    className="bg-card/50 border-border/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project or requirements..."
                    className="bg-card/50 border-border/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={formState !== "idle"}
                  className="w-full bg-gradient-to-r from-cyan to-purple text-white hover:opacity-90 glow-cyan"
                >
                  {formState === "idle" && (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                  {formState === "submitting" && "Sending..."}
                  {formState === "success" && (
                    <>
                      Message Sent!
                      <CheckCircle className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

              {/* Quick contact */}
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-purple/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-muted-foreground">contact@goalcryst.com</p>
                    <p className="text-muted-foreground">sales@goalcryst.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-purple/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground/70">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-purple/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">24/7 Support</h3>
                    <p className="text-muted-foreground">Our global teams are available around the clock.</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mb-12">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Global offices */}
              <div>
                <h3 className="font-semibold mb-4">Global Offices</h3>
                <div className="grid grid-cols-2 gap-4">
                  {offices.map((office) => (
                    <div 
                      key={office.city}
                      className="p-4 rounded-xl bg-card/50 border border-border/30"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-cyan" />
                        <span className="font-medium">{office.city}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{office.address}</p>
                      <p className="text-xs text-muted-foreground">{office.country}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-20 bg-gradient-to-b from-background via-deep-blue/10 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden border border-border/30 bg-card/50"
          >
            <div className="aspect-[21/9] flex items-center justify-center bg-gradient-to-br from-deep-blue/30 to-card">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/20 to-purple/20 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-cyan" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Presence</h3>
                <p className="text-muted-foreground">Offices in 8+ cities across 4 continents</p>
              </div>
            </div>
            
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan/30 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple/30 rounded-br-3xl" />
          </motion.div>
        </div>
      </section>
    </>
  )
}
