import { SolutionPageTemplate } from "@/components/solution-page-template"
import { Mail } from "lucide-react"

export default function EmailSupportPage() {
  return (
    <SolutionPageTemplate
      name="Email Support"
      icon={Mail}
      headline="Efficient Email Management at Scale"
      description="Professional email support with quick turnaround times, intelligent routing, and consistent quality."
      features={[
        {
          title: "Smart Routing",
          description: "AI-powered email categorization and routing to the right team."
        },
        {
          title: "Template Management",
          description: "Consistent, on-brand responses with customizable templates."
        },
        {
          title: "SLA Tracking",
          description: "Real-time monitoring ensuring response times meet your standards."
        },
        {
          title: "Sentiment Analysis",
          description: "Identify urgent issues and escalate critical emails automatically."
        },
        {
          title: "Priority Queuing",
          description: "Smart prioritization based on customer value and issue severity."
        },
        {
          title: "Knowledge Integration",
          description: "Seamless access to knowledge bases for accurate responses."
        },
      ]}
      benefits={[
        "Reduce email response time dramatically",
        "Maintain consistent quality across all emails",
        "Handle high volumes efficiently",
        "Improve customer satisfaction scores",
        "Track and meet SLA commitments",
        "Gain insights from email analytics",
      ]}
      process={[
        {
          step: "1",
          title: "Analysis",
          description: "Review current email workflows and volume patterns."
        },
        {
          step: "2",
          title: "Configure",
          description: "Set up routing rules, templates, and integrations."
        },
        {
          step: "3",
          title: "Train",
          description: "Team training on your products and communication standards."
        },
        {
          step: "4",
          title: "Execute",
          description: "Launch with monitoring and continuous improvement."
        },
      ]}
    />
  )
}
