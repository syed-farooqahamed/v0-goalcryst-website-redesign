import { IndustryPageTemplate } from "@/components/industry-page-template"
import { Home } from "lucide-react"

export default function UsTitleInsurancePage() {
  return (
    <IndustryPageTemplate
      name="US Title Insurance"
      icon={Home}
      headline="Expert US Title Insurance Solutions"
      description="Specialized title insurance services supporting the US real estate market with accuracy, speed, and compliance."
      features={[
        "Title Search & Examination",
        "Document Preparation",
        "Escrow Support",
        "Closing Coordination",
        "Policy Issuance",
        "Lien Resolution",
        "Recording Services",
        "Post-Closing Support",
        "Curative Services",
      ]}
      benefits={[
        {
          title: "Industry Expertise",
          description: "Deep knowledge of US title insurance regulations and practices across all 50 states.",
        },
        {
          title: "Faster Closings",
          description: "Streamlined processes that accelerate closing timelines without compromising accuracy.",
        },
        {
          title: "Reduced Risk",
          description: "Thorough title searches and examinations that identify and resolve issues early.",
        },
        {
          title: "Cost Effective",
          description: "Significant cost savings while maintaining the highest quality standards in the industry.",
        },
      ]}
      stats={[
        { value: "1M+", label: "Titles Processed" },
        { value: "48hr", label: "Avg. Turnaround" },
        { value: "99.5%", label: "Accuracy Rate" },
        { value: "50", label: "States Covered" },
      ]}
    />
  )
}
