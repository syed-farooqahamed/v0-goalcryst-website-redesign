import { SolutionPageTemplate } from "@/components/solution-page-template"
import { Phone } from "lucide-react"

export default function PhoneSupportPage() {
  return (
    <SolutionPageTemplate
      name="Phone Support"
      icon={Phone}
      headline="Professional Voice Support That Builds Trust"
      description="Expert phone support with trained specialists who represent your brand with professionalism and care."
      features={[
        {
          title: "Trained Specialists",
          description: "Skilled agents trained on your products, processes, and brand standards."
        },
        {
          title: "Quality Monitoring",
          description: "Continuous call monitoring and coaching to maintain service excellence."
        },
        {
          title: "IVR Integration",
          description: "Smart routing that connects customers to the right agent faster."
        },
        {
          title: "Call Analytics",
          description: "Comprehensive insights into call patterns, resolution rates, and agent performance."
        },
        {
          title: "Callback Options",
          description: "Reduce wait times with intelligent callback scheduling."
        },
        {
          title: "Multi-channel Support",
          description: "Seamless integration with chat, email, and other support channels."
        },
      ]}
      benefits={[
        "Improve first-call resolution rates",
        "Reduce average handle time",
        "Enhance customer satisfaction",
        "Scale quickly during peak periods",
        "Maintain consistent brand voice",
        "Access detailed performance analytics",
      ]}
      process={[
        {
          step: "1",
          title: "Discovery",
          description: "Understanding your products, processes, and customer needs."
        },
        {
          step: "2",
          title: "Setup",
          description: "Infrastructure setup and agent training customized for you."
        },
        {
          step: "3",
          title: "Pilot",
          description: "Controlled launch with close monitoring and adjustments."
        },
        {
          step: "4",
          title: "Scale",
          description: "Full deployment with ongoing optimization and reporting."
        },
      ]}
    />
  )
}
