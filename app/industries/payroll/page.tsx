import { IndustryPageTemplate } from "@/components/industry-page-template"

export default function PayrollPage() {
  return (
    <IndustryPageTemplate
      name="Payroll"
      iconName="wallet"
      headline="Reliable Payroll Processing Excellence"
      description="Accurate, timely, and compliant payroll processing services that ensure your employees are paid right, every time."
      features={[
        "Payroll Processing",
        "Tax Calculations",
        "Benefits Administration",
        "Time & Attendance",
        "Statutory Compliance",
        "Pay Stub Generation",
        "Year-End Processing",
        "Multi-State Payroll",
        "Employee Self-Service Support",
      ]}
      benefits={[
        {
          title: "Zero-Error Processing",
          description: "Multi-tier verification ensuring 100% accuracy in every payroll run, every time.",
        },
        {
          title: "Tax Compliance",
          description: "Stay compliant with federal, state, and local tax requirements across all jurisdictions.",
        },
        {
          title: "On-Time, Every Time",
          description: "Guaranteed on-time processing meeting all pay dates and regulatory deadlines.",
        },
        {
          title: "Employee Satisfaction",
          description: "Accurate pay and responsive support that keeps your workforce happy and productive.",
        },
      ]}
      stats={[
        { value: "500K+", label: "Employees Processed" },
        { value: "100%", label: "On-Time Rate" },
        { value: "99.99%", label: "Accuracy" },
        { value: "50%", label: "Cost Reduction" },
      ]}
    />
  )
}
