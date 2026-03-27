import { IndustryPageTemplate } from "@/components/industry-page-template"
import { Plane } from "lucide-react"

export default function AviationPage() {
  return (
    <IndustryPageTemplate
      name="Aviation"
      icon={Plane}
      color="from-cyan to-blue-500"
      headline="Elevating Aviation Operations to New Heights"
      description="From booking management to in-flight services, we provide comprehensive aviation support that enhances passenger experience and operational efficiency."
      features={[
        "Reservation & Booking Management",
        "Flight Status Updates",
        "Baggage Handling Support",
        "Loyalty Program Management",
        "Cargo Operations Support",
        "Crew Scheduling Assistance",
        "Customer Complaint Resolution",
        "Multi-language Support",
        "24/7 Operations Center",
      ]}
      benefits={[
        {
          title: "Enhanced Passenger Experience",
          description: "Deliver exceptional service at every touchpoint, from booking to arrival, ensuring passengers choose you again.",
        },
        {
          title: "Operational Excellence",
          description: "Streamline operations with intelligent automation and skilled professionals working around the clock.",
        },
        {
          title: "Cost Optimization",
          description: "Reduce operational costs while maintaining the highest standards of service quality and compliance.",
        },
        {
          title: "Scalable Solutions",
          description: "Easily scale operations during peak seasons without compromising service quality or response times.",
        },
      ]}
      stats={[
        { value: "50M+", label: "Passengers Served" },
        { value: "99.9%", label: "Uptime" },
        { value: "40%", label: "Cost Reduction" },
        { value: "24/7", label: "Support" },
      ]}
    />
  )
}
