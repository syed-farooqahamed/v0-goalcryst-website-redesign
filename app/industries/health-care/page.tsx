import { IndustryPageTemplate } from "@/components/industry-page-template"
import { Heart } from "lucide-react"

export default function HealthCarePage() {
  return (
    <IndustryPageTemplate
      name="Health Care"
      icon={Heart}
      color="from-red-400 to-pink-500"
      headline="Compassionate Care, Efficient Operations"
      description="HIPAA-compliant healthcare support services that combine compassion with precision, enhancing patient experience while streamlining operations."
      features={[
        "Patient Scheduling",
        "Insurance Verification",
        "Medical Billing Support",
        "Claims Processing",
        "Prior Authorization",
        "Patient Follow-up",
        "Prescription Refill Support",
        "Medical Records Management",
        "Telehealth Support",
      ]}
      benefits={[
        {
          title: "HIPAA Compliant",
          description: "Fully compliant infrastructure and trained staff ensuring patient data protection at every step.",
        },
        {
          title: "Enhanced Patient Experience",
          description: "Compassionate, knowledgeable support that improves patient satisfaction and outcomes.",
        },
        {
          title: "Revenue Cycle Optimization",
          description: "Reduce claim denials and accelerate reimbursements with accurate coding and processing.",
        },
        {
          title: "Reduced Administrative Burden",
          description: "Free your clinical staff to focus on patient care while we handle administrative tasks.",
        },
      ]}
      stats={[
        { value: "5M+", label: "Patients Served" },
        { value: "98%", label: "CSAT Score" },
        { value: "30%", label: "Faster Processing" },
        { value: "100%", label: "HIPAA Compliant" },
      ]}
    />
  )
}
