import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingChat from "@/components/widgets/FloatingChat";
import Hero from "@/features/webinar/sections/Hero";
import ProclamationLead from "@/features/webinar/sections/ProclamationLead";
import WhatChanged from "@/features/webinar/sections/WhatChanged";
import Framework from "@/features/webinar/sections/Framework";
import Objections from "@/features/webinar/sections/Objections";
import WhoFor from "@/features/webinar/sections/WhoFor";
import AboutHost from "@/features/webinar/sections/AboutHost";
import HowItRuns from "@/features/webinar/sections/HowItRuns";
import WhatYouGet from "@/features/webinar/sections/WhatYouGet";
import HowToRegister from "@/features/webinar/sections/HowToRegister";
import FinalClose from "@/features/webinar/sections/FinalClose";

export const metadata = {
  title:
    "The Factory That Made Your Product Is Now Building The Brand That Replaces You · Free Webinar",
  description:
    "A 90-minute live briefing for fashion, beauty, and lifestyle founders doing $2M to $50M+. Live Wednesday, September 2, 2026. 40 seats only.",
};

export default function WebinarPage() {
  return (
    <>
      <Header />
      <Hero />
      <ProclamationLead />
      <WhatChanged />
      <Framework />
      <Objections />
      <WhoFor />
      <AboutHost />
      <HowItRuns />
      <WhatYouGet />
      <HowToRegister />
      <FinalClose />
      <Footer />
      <FloatingChat />
    </>
  );
}
