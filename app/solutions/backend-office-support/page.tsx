import { SolutionPageTemplate } from "@/components/solution-page-template"
import { Server } from "lucide-react"

export default function BackendOfficeSupportPage() {
  return (
    <SolutionPageTemplate
      name="Backend Office Support"
      icon={Server}
      color="from-green-400 to-cyan"
      headline="Streamlined Back-Office Operations"
      description="Comprehensive back-office support that handles the heavy lifting so you can focus on growing your business."
      features={[
        {
          title: "Data Processing",
          description: "Accurate and timely processing of high-volume data across systems."
        },
        {
          title: "Document Management",
          description: "Organized storage, retrieval, and processing of business documents."
        },
        {
          title: "Quality Assurance",
          description: "Multi-tier QA processes ensuring accuracy and compliance."
        },
        {
          title: "Process Automation",
          description: "Intelligent automation of repetitive tasks for efficiency gains."
        },
        {
          title: "Reporting & Analytics",
          description: "Comprehensive reporting on operations, productivity, and quality."
        },
        {
          title: "System Integration",
          description: "Seamless integration with your existing tools and platforms."
        },
      ]}
      benefits={[
        "Reduce operational costs significantly",
        "Improve accuracy and consistency",
        "Scale operations on demand",
        "Free up internal resources",
        "Access specialized expertise",
        "Enhance compliance and security",
      ]}
      process={[
        {
          step: "1",
          title: "Assess",
          description: "Detailed analysis of current processes and requirements."
        },
        {
          step: "2",
          title: "Design",
          description: "Create optimized workflows and SOPs for your operations."
        },
        {
          step: "3",
          title: "Implement",
          description: "Gradual transition with parallel runs for quality assurance."
        },
        {
          step: "4",
          title: "Manage",
          description: "Ongoing operations with continuous improvement initiatives."
        },
      ]}
    />
  )
}
