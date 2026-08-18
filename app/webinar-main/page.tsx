import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingChat from "@/components/widgets/FloatingChat";
import HeroMain from "@/features/webinar-main/sections/Hero";
import CodeExplainer from "@/features/webinar-main/sections/CodeExplainer";
import Credibility from "@/features/webinar-main/sections/Credibility";
import WalkAways from "@/features/webinar-main/sections/WalkAways";
import WhatCodeChanges from "@/features/webinar-main/sections/WhatCodeChanges";
import WhyLive from "@/features/webinar-main/sections/WhyLive";
import Qualification from "@/features/webinar-main/sections/Qualification";
import FinalClose from "@/features/webinar-main/sections/FinalClose";

export const metadata = {
  title:
    "The Blue Ocean Code™ Live Event - Free Webinar for Consumer Brand Founders",
  description:
    "60-minute live event for founders of consumer brands. Find the 2–3 words your entire company should run on. Live only. Free. 3 Hot Seats.",
};

export default function WebinarMainPage() {
  return (
    <>
      <div className="bg-dark-bg text-white min-h-screen">
        <Header />
        <HeroMain />
        <CodeExplainer />
        <Credibility />
        <WalkAways />
        <WhatCodeChanges />
        <WhyLive />
        <Qualification />
        <FinalClose />
        <Footer />
      </div>
      <FloatingChat />
    </>
  );
}
