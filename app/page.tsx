import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingChat from "@/components/widgets/FloatingChat";
import Hero from "@/features/blue-ocean-code/sections/Hero";
import Credibility from "@/features/blue-ocean-code/sections/Credibility";
import BezosQuestion from "@/features/blue-ocean-code/sections/BezosQuestion";
import NeedsACode from "@/features/blue-ocean-code/sections/NeedsACode";
import WithWithoutCode from "@/features/blue-ocean-code/sections/WithWithoutCode";
import MissionVision from "@/features/blue-ocean-code/sections/MissionVision";
import WhyIBuiltThis from "@/features/blue-ocean-code/sections/WhyIBuiltThis";
import WhatYouGet from "@/features/blue-ocean-code/sections/WhatYouGet";
import HowItWorks from "@/features/blue-ocean-code/sections/HowItWorks";
import FinalClose from "@/features/blue-ocean-code/sections/FinalClose";

export const metadata = {
  title: "The Blue Ocean Code™ · Why Customers Choose Your Brand In 3 Seconds",
  description:
    "For consumer brands that want to stop competing on price, ads and discounts. 30-minute session, your Blue Ocean Code™ and a 30-day activation plan. $499, one time, guaranteed.",
};

export default function BlueOceanCodePage() {
  return (
    <>
      <Header />
      <Hero />
      <Credibility />
      <BezosQuestion />
      <NeedsACode />
      <WithWithoutCode />
      <MissionVision />
      <WhyIBuiltThis />
      <WhatYouGet />
      <HowItWorks />
      <FinalClose />
      <Footer />
      <FloatingChat />
    </>
  );
}
