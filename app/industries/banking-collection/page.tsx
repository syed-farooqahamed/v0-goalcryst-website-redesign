import { IndustryPageTemplate } from "@/components/industry-page-template"

export default function BankingCollectionPage() {
  return (
    <IndustryPageTemplate
      name="Banking & Collection"
      iconName="landmark"
      headline="Secure Banking Solutions & Professional Collections"
      description="Compliant, secure, and efficient banking operations paired with professional collection services that maintain customer relationships."
      features={[
        "Account Management Support",
        "Loan Processing Assistance",
        "Payment Processing",
        "Fraud Detection Support",
        "Collections Management",
        "KYC/AML Compliance",
        "Customer Onboarding",
        "Dispute Resolution",
        "Credit Card Services",
      ]}
      benefits={[
        {
          title: "Regulatory Compliance",
          description: "Stay compliant with ever-changing banking regulations through our trained specialists and updated processes.",
        },
        {
          title: "Improved Recovery Rates",
          description: "Professional, respectful collection practices that maintain customer relationships while improving recovery rates.",
        },
        {
          title: "Enhanced Security",
          description: "Bank-grade security protocols and infrastructure to protect sensitive financial data and transactions.",
        },
        {
          title: "Customer Retention",
          description: "Balanced approach to collections that preserves customer relationships and protects your brand reputation.",
        },
      ]}
      stats={[
        { value: "$2B+", label: "Processed Monthly" },
        { value: "35%", label: "Better Recovery" },
        { value: "100%", label: "Compliance Rate" },
        { value: "15+", label: "Years Experience" },
      ]}
    />
  )
}
