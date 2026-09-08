import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingChat from "@/components/widgets/FloatingChat";
import Hero from "@/features/offer-499/sections/Hero";
import Problem from "@/features/offer-499/sections/Problem";
import WhatIsACode from "@/features/offer-499/sections/WhatIsACode";
import WithWithoutCode from "@/features/offer-499/sections/WithWithoutCode";
import CaseStudyBlock, {
  STREETWEAR,
  SUPPLEMENTS,
} from "@/features/offer-499/components/CaseStudyBlock";
import Credibility from "@/features/offer-499/sections/Credibility";
import MissionVision from "@/features/offer-499/sections/MissionVision";
import WhyIBuiltThis from "@/features/offer-499/sections/WhyIBuiltThis";
import WhatYouGet from "@/features/offer-499/sections/WhatYouGet";
import CodeExample from "@/features/offer-499/sections/CodeExample";
import AgencyComparison from "@/features/offer-499/sections/AgencyComparison";
import GuaranteeCTA from "@/features/offer-499/sections/GuaranteeCTA";
import HowItWorks from "@/features/offer-499/sections/HowItWorks";
import Faq from "@/features/offer-499/sections/Faq";
import FinalClose from "@/features/offer-499/sections/FinalClose";

export const metadata = {
  title: "The Blue Ocean Code™ · The One Standard Your Whole Company Runs On",
  description:
    "In one 30-minute session we find the one thing your customers will always want from you, then turn it into a 1-page standard your whole company can run on. $499, one time, guaranteed.",
};

export default function OfferPage() {
  return (
    <>
      <Header ctaLabel="Find My Blue Ocean Code" />
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
