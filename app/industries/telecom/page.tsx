import { IndustryPageTemplate } from "@/components/industry-page-template"

export default function TelecomPage() {
  return (
    <IndustryPageTemplate
      name="Telecom"
      iconName="wifi"
      headline="Keeping the World Connected"
      description="24/7 telecommunications support that ensures seamless connectivity and exceptional customer experiences across all channels."
      features={[
        "Technical Support",
        "Billing Inquiries",
        "Service Activation",
        "Plan Changes & Upgrades",
        "Network Troubleshooting",
        "Device Support",
        "Retention Programs",
        "Sales Support",
        "Social Media Support",
      ]}
      benefits={[
        {
          title: "24/7 Availability",
          description: "Round-the-clock support ensuring customers get help whenever they need it, anywhere in the world.",
        },
        {
          title: "Reduced Churn",
          description: "Proactive retention programs and exceptional service that keep customers loyal.",
        },
        {
          title: "Multi-Channel Excellence",
          description: "Consistent quality across voice, chat, social, and self-service channels.",
        },
        {
          title: "Technical Expertise",
          description: "Trained specialists who can resolve complex technical issues on the first contact.",
        },
      ]}
      stats={[
        { value: "100M+", label: "Calls Handled" },
        { value: "85%", label: "First Call Resolution" },
        { value: "20%", label: "Churn Reduction" },
        { value: "4.8/5", label: "Customer Rating" },
      ]}
    />
  )
}
