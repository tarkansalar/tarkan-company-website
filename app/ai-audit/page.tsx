import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingChat from "@/components/widgets/FloatingChat";
import Hero from "@/features/ai-audit/sections/Hero";
import RealProblem from "@/features/ai-audit/sections/RealProblem";
import WhatYouWalkAway from "@/features/ai-audit/sections/WhatYouWalkAway";
import WhyListen from "@/features/ai-audit/sections/WhyListen";
import WhatItIs from "@/features/ai-audit/sections/WhatItIs";
import WhatItIsNot from "@/features/ai-audit/sections/WhatItIsNot";
import WhyFree from "@/features/ai-audit/sections/WhyFree";
import WhereILook from "@/features/ai-audit/sections/WhereILook";
import BeforeAfter from "@/features/ai-audit/sections/BeforeAfter";
import HowToStart from "@/features/ai-audit/sections/HowToStart";
import ProofLens from "@/features/ai-audit/sections/ProofLens";
import WhoFor from "@/features/ai-audit/sections/WhoFor";
import WhoNotFor from "@/features/ai-audit/sections/WhoNotFor";
import FAQ from "@/features/ai-audit/sections/FAQ";
import GoDeeper from "@/features/ai-audit/sections/GoDeeper";
import FinalPromise from "@/features/ai-audit/sections/FinalPromise";
import FinalCTA from "@/features/ai-audit/sections/FinalCTA";
import PS from "@/features/ai-audit/sections/PS";

export const metadata = {
  title: "Free Profit + AI Leak Audit - Be Unstoppable 365",
  description:
    "A 30-minute live operator audit for DTC and omnichannel founders doing $3M-$50M+. Find your top 1-3 profit leaks. No tools to buy, no AI hype.",
};

export default function AiAuditPage() {
  return (
    <>
      <Header />
      <Hero />
      <RealProblem />
      <WhatYouWalkAway />
      <WhyListen />
      <WhatItIs />
      <WhatItIsNot />
      <WhyFree />
      <WhereILook />
      <BeforeAfter />
      <HowToStart />
      <ProofLens />
      <WhoFor />
      <WhoNotFor />
      <FAQ />
      <GoDeeper />
      <FinalPromise />
      <FinalCTA />
      <PS />
      <Footer />
      <FloatingChat />
    </>
  );
}
