import { SolutionPageTemplate } from "@/components/solution-page-template"

export default function CustomerSupportPage() {
  return (
    <SolutionPageTemplate
      name="Customer Support"
      iconName="users"
      headline="End-to-End Customer Support Excellence"
      description="Comprehensive omnichannel support solutions that deliver exceptional experiences across every touchpoint."
      features={[
        {
          title: "Omnichannel Support",
          description: "Unified support across voice, chat, email, social, and self-service."
        },
        {
          title: "CRM Integration",
          description: "Deep integration with your CRM for personalized service."
        },
        {
          title: "Customer Analytics",
          description: "Rich insights into customer behavior, preferences, and satisfaction."
        },
        {
          title: "Retention Programs",
          description: "Proactive outreach and programs to reduce churn."
        },
        {
          title: "Feedback Management",
          description: "Capture, analyze, and act on customer feedback systematically."
        },
        {
          title: "Self-Service Enablement",
          description: "Build and maintain knowledge bases and self-service tools."
        },
      ]}
      benefits={[
        "Deliver consistent omnichannel experiences",
        "Improve customer retention rates",
        "Reduce support costs while improving quality",
        "Gain actionable customer insights",
        "Build brand loyalty through service excellence",
        "Scale support as your business grows",
      ]}
      process={[
        {
          step: "1",
          title: "Discover",
          description: "Map customer journeys and identify support requirements."
        },
        {
          step: "2",
          title: "Build",
          description: "Design and implement your tailored support program."
        },
        {
          step: "3",
          title: "Launch",
          description: "Phased rollout with comprehensive training and support."
        },
        {
          step: "4",
          title: "Evolve",
          description: "Data-driven optimization and program enhancements."
        },
      ]}
    />
  )
}
