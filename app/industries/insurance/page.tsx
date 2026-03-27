import { IndustryPageTemplate } from "@/components/industry-page-template"
import { Shield } from "lucide-react"

export default function InsurancePage() {
  return (
    <IndustryPageTemplate
      name="Insurance"
      icon={Shield}
      color="from-blue-400 to-indigo-500"
      headline="Streamlined Insurance Operations"
      description="End-to-end insurance support from policy administration to claims processing, delivering efficiency and customer satisfaction."
      features={[
        "Policy Administration",
        "Claims Processing",
        "Underwriting Support",
        "Customer Service",
        "Premium Collections",
        "Policy Renewals",
        "Documentation Management",
        "Compliance Support",
        "Agent Support Services",
      ]}
      benefits={[
        {
          title: "Faster Claims Processing",
          description: "Reduce claims processing time by up to 60% while maintaining accuracy and compliance.",
        },
        {
          title: "Improved Customer Retention",
          description: "Proactive service and quick resolution times that keep policyholders satisfied and loyal.",
        },
        {
          title: "Regulatory Compliance",
          description: "Stay compliant with insurance regulations across different states and countries.",
        },
        {
          title: "Scalable Operations",
          description: "Handle volume fluctuations from catastrophic events or seasonal peaks seamlessly.",
        },
      ]}
      stats={[
        { value: "10M+", label: "Claims Processed" },
        { value: "60%", label: "Faster Processing" },
        { value: "95%", label: "First Contact Resolution" },
        { value: "$500M+", label: "Premiums Managed" },
      ]}
    />
  )
}
