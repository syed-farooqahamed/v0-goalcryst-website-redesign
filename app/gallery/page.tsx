"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const categories = ["All", "Office", "Events", "Team", "Workspace", "Awards"]

const galleryItems = [
  { id: 1, category: "Office", title: "Global HQ Lobby", size: "large", image: "/g1.jpg" },
  { id: 2, category: "Team", title: "Customer Success Team", size: "small", image: "/g2.jpg" },
  { id: 3, category: "Events", title: "Annual Summit 2024", size: "medium", image: "/g3.jpg" },
  { id: 4, category: "Workspace", title: "Operations Center", size: "small", image: "/g4.jpg" },
  { id: 5, category: "Awards", title: "Excellence Award 2024", size: "medium", image: "/g5.jpg" },
  { id: 6, category: "Office", title: "Singapore Office", size: "small", image: "/g6.jpg" },
  { id: 7, category: "Team", title: "Engineering Team", size: "large", image: "/g7.jpg" },
  { id: 8, category: "Events", title: "Team Building", size: "small", image: "/g8.jpg" },
  { id: 9, category: "Workspace", title: "Collaboration Space", size: "medium", image: "/g9.jpg" },
  { id: 10, category: "Office", title: "London Office", size: "small", image: "/g10.jpg" },
  { id: 11, category: "Awards", title: "Best Employer 2024", size: "small", image: "/g11.jpg" },
  { id: 12, category: "Events", title: "Client Summit", size: "large", image: "/g12.jpg" },
  { id: 13, category: "Team", title: "Support Team", size: "medium", image: "/g13.jpg" },
  { id: 14, category: "Workspace", title: "Training Room", size: "small", image: "/g14.jpg" },
  { id: 15, category: "Office", title: "Mumbai Office", size: "small", image: "/g15.jpg" },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const currentIndex = selectedImage !== null 
    ? filteredItems.findIndex(item => item.id === selectedImage)
    : -1

  const goToPrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredItems[currentIndex - 1].id)
    }
  }

  const goToNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedImage(filteredItems[currentIndex + 1].id)
    }
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
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Gallery</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Life at{" "}
              <span className="text-primary">
                Goalcryst
              </span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Explore our offices, events, and the amazing people who make Goalcryst special.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="break-inside-avoid"
              >
                <button
                  onClick={() => setSelectedImage(item.id)}
                  className="group relative w-full rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full object-cover ${
                      item.size === "large" ? "h-80" : item.size === "medium" ? "h-64" : "h-48"
                    }`}
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 w-full">
                      <span className="text-xs text-primary uppercase tracking-wider">{item.category}</span>
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            disabled={currentIndex === 0}
            className="absolute left-6 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            disabled={currentIndex === filteredItems.length - 1}
            className="absolute right-6 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content */}
          <div 
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-2xl overflow-hidden bg-card border border-border">
              <img
                src={filteredItems[currentIndex]?.image}
                alt={filteredItems[currentIndex]?.title}
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <span className="text-xs text-primary uppercase tracking-wider">
                  {filteredItems[currentIndex]?.category}
                </span>
                <h3 className="text-xl font-semibold mt-1">
                  {filteredItems[currentIndex]?.title}
                </h3>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
