import { IndustryPageTemplate } from "@/components/industry-page-template"
import { Calculator } from "lucide-react"

export default function FinanceAccountingPage() {
  return (
    <IndustryPageTemplate
      name="Finance & Accounting"
      icon={Calculator}
      color="from-amber-400 to-orange-500"
      headline="Precision Financial Operations You Can Trust"
      description="Accurate, compliant, and efficient financial processing services that keep your books in order and your business moving forward."
      features={[
        "Accounts Payable/Receivable",
        "Financial Reporting",
        "Bookkeeping Services",
        "Tax Preparation Support",
        "Expense Management",
        "Reconciliation Services",
        "Audit Support",
        "Budgeting & Forecasting",
        "Financial Analysis",
      ]}
      benefits={[
        {
          title: "Accuracy Guaranteed",
          description: "Multi-level verification processes ensuring 99.9% accuracy in all financial transactions and reports.",
        },
        {
          title: "Compliance Assured",
          description: "Stay compliant with GAAP, IFRS, and local regulations with our trained financial specialists.",
        },
        {
          title: "Cost Efficiency",
          description: "Reduce operational costs by up to 50% while maintaining or improving financial accuracy.",
        },
        {
          title: "Real-Time Visibility",
          description: "Access to real-time financial data and reports for informed decision-making.",
        },
      ]}
      stats={[
        { value: "$5B+", label: "Transactions/Year" },
        { value: "99.9%", label: "Accuracy Rate" },
        { value: "50%", label: "Cost Savings" },
        { value: "100%", label: "On-Time Delivery" },
      ]}
    />
  )
}
