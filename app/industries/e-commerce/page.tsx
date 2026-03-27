import { IndustryPageTemplate } from "@/components/industry-page-template"
import { ShoppingCart } from "lucide-react"

export default function EcommercePage() {
  return (
    <IndustryPageTemplate
      name="E-Commerce"
      icon={ShoppingCart}
      color="from-green-400 to-cyan"
      headline="Driving E-Commerce Success at Scale"
      description="Comprehensive e-commerce support solutions that enhance customer satisfaction, boost conversions, and streamline operations."
      features={[
        "Order Management",
        "Customer Inquiries",
        "Returns & Refunds Processing",
        "Product Information Support",
        "Live Chat Support",
        "Social Media Management",
        "Review Management",
        "Inventory Support",
        "Marketplace Integration",
      ]}
      benefits={[
        {
          title: "Increased Conversions",
          description: "Real-time support and proactive engagement that turns browsers into buyers and reduces cart abandonment.",
        },
        {
          title: "Peak Season Ready",
          description: "Scalable teams ready to handle holiday rushes and flash sales without service degradation.",
        },
        {
          title: "Multi-Platform Excellence",
          description: "Seamless support across marketplaces, social commerce, and your direct channels.",
        },
        {
          title: "Brand Protection",
          description: "Consistent brand voice and quality across all customer interactions and touchpoints.",
        },
      ]}
      stats={[
        { value: "30M+", label: "Orders Processed" },
        { value: "25%", label: "Higher CSAT" },
        { value: "60%", label: "Faster Response" },
        { value: "15%", label: "Sales Increase" },
      ]}
    />
  )
}
