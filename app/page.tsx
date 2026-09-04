import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingChat from "@/components/widgets/FloatingChat";
import Hero from "@/features/blue-ocean-code/sections/Hero";
import Problem from "@/features/blue-ocean-code/sections/Problem";
import WhatIsACode from "@/features/blue-ocean-code/sections/WhatIsACode";
import WithWithoutCode from "@/features/blue-ocean-code/sections/WithWithoutCode";
import CaseStudyBlock, {
  STREETWEAR,
  SUPPLEMENTS,
} from "@/features/blue-ocean-code/components/CaseStudyBlock";
import Credibility from "@/features/blue-ocean-code/sections/Credibility";
import MissionVision from "@/features/blue-ocean-code/sections/MissionVision";
import WhyIBuiltThis from "@/features/blue-ocean-code/sections/WhyIBuiltThis";
import WhatYouGet from "@/features/blue-ocean-code/sections/WhatYouGet";
import CodeExample from "@/features/blue-ocean-code/sections/CodeExample";
import AgencyComparison from "@/features/blue-ocean-code/sections/AgencyComparison";
import GuaranteeCTA from "@/features/blue-ocean-code/sections/GuaranteeCTA";
import HowItWorks from "@/features/blue-ocean-code/sections/HowItWorks";
import Faq from "@/features/blue-ocean-code/sections/Faq";
import FinalClose from "@/features/blue-ocean-code/sections/FinalClose";

export const metadata = {
  title: "The Blue Ocean Code™ · The One Standard Your Whole Company Runs On",
  description:
    "In one 30-minute session we find the one thing your customers will always want from you, then turn it into a 1-page standard your whole company can run on. $499, one time, guaranteed.",
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Problem />
      <WhatIsACode />
      <WithWithoutCode />
      <CaseStudyBlock study={STREETWEAR} />
      <CaseStudyBlock study={SUPPLEMENTS} dark />
      <Credibility />
      <MissionVision />
      <WhyIBuiltThis />
      <WhatYouGet />
      <CodeExample />
      <AgencyComparison />
      <GuaranteeCTA />
      <HowItWorks />
      <Faq />
      <FinalClose />
      <Footer />
      <FloatingChat />
    </>
  );
}
