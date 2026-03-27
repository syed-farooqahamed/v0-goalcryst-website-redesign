import { IndustryPageTemplate } from "@/components/industry-page-template"
import { Brain } from "lucide-react"

export default function AiMlDataSolutionsPage() {
  return (
    <IndustryPageTemplate
      name="AI/ML Data Solutions"
      icon={Brain}
      color="from-cyan to-purple"
      headline="Powering AI with Premium Data Solutions"
      description="High-quality data annotation, labeling, and processing services that fuel the next generation of artificial intelligence and machine learning models."
      features={[
        "Image & Video Annotation",
        "Natural Language Processing",
        "Audio Transcription",
        "Semantic Segmentation",
        "Object Detection Labeling",
        "Sentiment Analysis",
        "Data Validation & QA",
        "Custom Taxonomy Development",
        "Multi-language Data Services",
      ]}
      benefits={[
        {
          title: "Superior Data Quality",
          description: "Multi-tier quality assurance processes ensuring accuracy rates exceeding 99% for your ML models.",
        },
        {
          title: "Scalable Workforce",
          description: "Rapidly scale annotation teams to meet project deadlines without compromising on quality standards.",
        },
        {
          title: "Domain Expertise",
          description: "Specialized teams trained in specific domains including medical, autonomous vehicles, and NLP.",
        },
        {
          title: "Secure Infrastructure",
          description: "Enterprise-grade security for handling sensitive training data with full compliance certifications.",
        },
      ]}
      stats={[
        { value: "100M+", label: "Data Points Labeled" },
        { value: "99.5%", label: "Accuracy Rate" },
        { value: "50+", label: "AI Companies" },
        { value: "10x", label: "Faster Delivery" },
      ]}
    />
  )
}
