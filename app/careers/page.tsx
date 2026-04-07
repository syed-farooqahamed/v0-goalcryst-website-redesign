"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  MapPin,
  Briefcase,
  Heart,
  GraduationCap,
  Globe,
  Coffee,
  Laptop,
  Plane,
  Search,
  Filter
} from "lucide-react"
import { useState, useRef, useEffect } from "react"

const departments = ["Engineering", "Operations", "Sales", "Support", "Marketing", "HR"]
const workModes = ["Remote", "On-site"]
const jobTypes = ["Full-time", "Part-time"]

const jobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote / New York",
    type: "Full-time",
    workMode: "Remote",
    description: "Build and scale our intelligent operations platform.",
  },
  {
    id: 2,
    title: "Customer Success Manager",
    department: "Support",
    location: "London",
    type: "Full-time",
    workMode: "On-site",
    description: "Drive customer satisfaction and retention across our enterprise clients.",
  },
  {
    id: 3,
    title: "Operations Team Lead",
    department: "Operations",
    location: "Mumbai",
    type: "Full-time",
    workMode: "On-site",
    description: "Lead a team of specialists delivering world-class BPO services.",
  },
  {
    id: 4,
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    workMode: "Remote",
    description: "Develop AI solutions that power our intelligent automation tools.",
  },
  {
    id: 5,
    title: "Business Development Manager",
    department: "Sales",
    location: "Singapore",
    type: "Full-time",
    workMode: "On-site",
    description: "Expand our client portfolio across Asia-Pacific markets.",
  },
  {
    id: 6,
    title: "Quality Assurance Specialist",
    department: "Operations",
    location: "Manila",
    type: "Full-time",
    workMode: "On-site",
    description: "Ensure service excellence through rigorous quality monitoring.",
  },
  {
    id: 7,
    title: "Marketing Manager",
    department: "Marketing",
    location: "Dubai",
    type: "Full-time",
    workMode: "On-site",
    description: "Drive brand awareness and lead generation campaigns.",
  },
  {
    id: 8,
    title: "HR Business Partner",
    department: "HR",
    location: "Remote / Global",
    type: "Full-time",
    workMode: "Remote",
    description: "Support our growing teams with strategic HR initiatives.",
  },
]

const benefits = [
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive medical, dental, and vision coverage" },
  { icon: GraduationCap, title: "Learning & Development", description: "Continuous learning programs and certifications" },
  { icon: Laptop, title: "Remote Flexibility", description: "Work from anywhere with flexible hours" },
  { icon: Plane, title: "Paid Time Off", description: "Generous vacation and personal days" },
  { icon: Coffee, title: "Team Events", description: "Regular team building and social events" },
  { icon: Globe, title: "Global Opportunities", description: "Career growth across our worldwide offices" },
]

const culture = [
  {
    title: "Innovation First",
    description: "We encourage experimentation and embrace new ideas that push boundaries.",
  },
  {
    title: "Diverse & Inclusive",
    description: "We celebrate diversity and create an environment where everyone belongs.",
  },
  {
    title: "Growth Mindset",
    description: "We invest in our people and provide opportunities for continuous development.",
  },
  {
    title: "Work-Life Balance",
    description: "We believe in sustainable work practices that support well-being.",
  },
]

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([])
  const [selectedWorkModes, setSelectedWorkModes] = useState<string[]>([])
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([])
  const filterPanelRef = useRef<HTMLDivElement>(null)

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = searchQuery === "" ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDepartment = selectedDepartments.length === 0 || selectedDepartments.includes(job.department)
    const matchesWorkMode = selectedWorkModes.length === 0 || selectedWorkModes.includes(job.workMode)
    const matchesJobType = selectedJobTypes.length === 0 || selectedJobTypes.includes(job.type)
    return matchesSearch && matchesDepartment && matchesWorkMode && matchesJobType
  })

  const activeFiltersCount = selectedDepartments.length + selectedWorkModes.length + selectedJobTypes.length

  // Close filter panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterPanelRef.current && !filterPanelRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false)
      }
    }

    if (isFilterOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isFilterOpen])

  const handleApplyFilters = () => {
    setIsFilterOpen(false)
  }

  const handleClearAll = () => {
    setSelectedDepartments([])
    setSelectedWorkModes([])
    setSelectedJobTypes([])
  }

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
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Careers</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Build the Future of{" "}
              <span className="text-primary">
                Business Operations
              </span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Join our team of innovators, problem-solvers, and industry experts 
              shaping the future of intelligent business operations.
            </p>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex flex-wrap justify-center gap-8"
          >
            {[
              { value: "5,000+", label: "Team Members" },
              { value: "50+", label: "Countries" },
              { value: "8+", label: "Global Offices" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Culture */}
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
              <span className="text-primary">
                Culture
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What makes Goalcryst a great place to work.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {culture.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                  <span className="text-primary-foreground font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Benefits &{" "}
              <span className="text-primary">
                Perks
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We take care of our team so they can take care of our clients.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
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
              Open{" "}
              <span className="text-primary">
                Positions
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find your next opportunity at Goalcryst.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search roles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2 rounded-lg bg-card border border-border focus:border-primary focus:outline-none text-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1">
                <Search className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="px-4 py-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          {/* Filter Panel */}
          {isFilterOpen && (
            <div ref={filterPanelRef} className="mb-8 p-6 rounded-lg bg-card border border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Department */}
                <div>
                  <h4 className="font-medium mb-3">Department</h4>
                  <div className="space-y-2">
                    {departments.map((dept) => (
                      <label key={dept} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedDepartments.includes(dept)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedDepartments([...selectedDepartments, dept])
                            } else {
                              setSelectedDepartments(selectedDepartments.filter(d => d !== dept))
                            }
                          }}
                          className="rounded border-border"
                        />
                        <span className="text-sm">{dept}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Work Mode */}
                <div>
                  <h4 className="font-medium mb-3">Work Mode</h4>
                  <div className="space-y-2">
                    {workModes.map((mode) => (
                      <label key={mode} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedWorkModes.includes(mode)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedWorkModes([...selectedWorkModes, mode])
                            } else {
                              setSelectedWorkModes(selectedWorkModes.filter(m => m !== mode))
                            }
                          }}
                          className="rounded border-border"
                        />
                        <span className="text-sm">{mode}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Job Type */}
                <div>
                  <h4 className="font-medium mb-3">Job Type</h4>
                  <div className="space-y-2">
                    {jobTypes.map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedJobTypes.includes(type)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedJobTypes([...selectedJobTypes, type])
                            } else {
                              setSelectedJobTypes(selectedJobTypes.filter(t => t !== type))
                            }
                          }}
                          className="rounded border-border"
                        />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Filter Actions */}
              <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleClearAll}
                  className="px-4 py-2"
                >
                  Clear All
                </Button>
                <Button
                  size="sm"
                  onClick={handleApplyFilters}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2"
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          )}

          {/* Job list */}
          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary">
                        {job.department}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 lg:mb-0">
                      {job.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Briefcase className="w-4 h-4" />
                      {job.type}
                    </div>
                    <Button
                      asChild
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Link href="/contact">
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No positions available in this department currently.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {"Don't See the Right Role?"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {"We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities."}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">
                Submit Your Resume
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
