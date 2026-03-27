import { HeroSection } from "@/components/home/hero-section"
import { CompanyOverview } from "@/components/home/company-overview"
import { IndustriesSection } from "@/components/home/industries-section"
import { SolutionsSection } from "@/components/home/solutions-section"
import { WorkflowSection } from "@/components/home/workflow-section"
import { StatsSection } from "@/components/home/stats-section"
import { GlobalPresence } from "@/components/home/global-presence"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CompanyOverview />
      <IndustriesSection />
      <SolutionsSection />
      <WorkflowSection />
      <StatsSection />
      <GlobalPresence />
      <CtaSection />
    </>
  )
}
