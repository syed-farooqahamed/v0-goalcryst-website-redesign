import { SolutionPageTemplate } from "@/components/solution-page-template"
import { MessageCircle } from "lucide-react"

export default function ChatSupportPage() {
  return (
    <SolutionPageTemplate
      name="Chat Support"
      icon={MessageCircle}
      color="from-cyan to-blue-500"
      headline="Intelligent Chat Support That Never Sleeps"
      description="Deliver instant, personalized customer experiences with our AI-powered chat support solutions backed by human expertise."
      features={[
        {
          title: "24/7 Availability",
          description: "Round-the-clock support ensuring your customers get help whenever they need it."
        },
        {
          title: "AI-Powered Responses",
          description: "Intelligent automation handles routine queries while seamlessly escalating complex issues."
        },
        {
          title: "Multi-language Support",
          description: "Support customers in their preferred language with native speakers and translation tech."
        },
        {
          title: "Proactive Engagement",
          description: "Intelligent triggers that initiate conversations at the right moment to boost conversions."
        },
        {
          title: "Seamless Escalation",
          description: "Smooth handoff to human agents with full conversation context preserved."
        },
        {
          title: "Analytics & Insights",
          description: "Deep insights into customer behavior, satisfaction, and support performance."
        },
      ]}
      benefits={[
        "Reduce response time by up to 90%",
        "Handle unlimited concurrent conversations",
        "Increase customer satisfaction scores",
        "Lower support costs significantly",
        "Convert more visitors into customers",
        "Build stronger customer relationships",
      ]}
      process={[
        {
          step: "1",
          title: "Integration",
          description: "Quick setup with your existing platforms and tools."
        },
        {
          step: "2",
          title: "Training",
          description: "AI and agents trained on your products and brand voice."
        },
        {
          step: "3",
          title: "Launch",
          description: "Go live with full support coverage and monitoring."
        },
        {
          step: "4",
          title: "Optimize",
          description: "Continuous improvement based on analytics and feedback."
        },
      ]}
    />
  )
}
