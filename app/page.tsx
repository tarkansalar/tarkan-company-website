import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingChat from "@/components/widgets/FloatingChat";
import Hero from "@/features/landing/sections/Hero";
import Credibility from "@/features/landing/sections/Credibility";
import Problem from "@/features/landing/sections/Problem";
import CaseStudyStreetwear from "@/features/landing/sections/CaseStudyStreetwear";
import CaseStudySupplements from "@/features/landing/sections/CaseStudySupplements";
import Mechanism from "@/features/landing/sections/Mechanism";
import Multiplier from "@/features/landing/sections/Multiplier";
import HowItWorks from "@/features/landing/sections/HowItWorks";
import Guarantee from "@/features/landing/sections/Guarantee";
import WhatYouGet from "@/features/landing/sections/WhatYouGet";
import Objections from "@/features/landing/sections/Objections";
import WhoFor from "@/features/landing/sections/WhoFor";
import Future from "@/features/landing/sections/Future";
import FinalClose from "@/features/landing/sections/FinalClose";
import Bio from "@/features/landing/sections/Bio";
import SecondaryCTA from "@/features/landing/sections/SecondaryCTA";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Credibility />
      <Problem />
      <CaseStudyStreetwear />
      <CaseStudySupplements />
      <Mechanism />
      <Multiplier />
      <HowItWorks />
      <Guarantee />
      <WhatYouGet />
      <Objections />
      <WhoFor />
      <Future />
      <FinalClose />
      <Bio />
      <SecondaryCTA />
      <Footer />
      <FloatingChat />
    </>
  );
}
