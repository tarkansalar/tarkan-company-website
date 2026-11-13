import type { Metadata } from "next";
import { greatVibes, montserrat } from "@/features/canggus/fonts";
import Header from "@/features/canggus/components/Header";
import Hero from "@/features/canggus/sections/Hero";
import TrustStrip from "@/features/canggus/sections/TrustStrip";
import Audience from "@/features/canggus/sections/Audience";
import Problem from "@/features/canggus/sections/Problem";
import Opportunity from "@/features/canggus/sections/Opportunity";
import Guide from "@/features/canggus/sections/Guide";
import ManufacturingNetwork from "@/features/canggus/sections/ManufacturingNetwork";
import Advantage from "@/features/canggus/sections/Advantage";
import Certifications from "@/features/canggus/sections/Certifications";
import HowProductionWorks from "@/features/canggus/sections/HowProductionWorks";
import Products from "@/features/canggus/sections/Products";
import Plan from "@/features/canggus/sections/Plan";
import BiggerPicture from "@/features/canggus/sections/BiggerPicture";
import Faq from "@/features/canggus/sections/Faq";
import FinalCta from "@/features/canggus/sections/FinalCta";
import Footer from "@/features/canggus/sections/Footer";

export const metadata: Metadata = {
  title: "Canggus · Private Label Supplement Partnership",
  description:
    "Your customers already buy supplements. Build your own supplement brand with products that stand apart, backed by direct factory relationships, manufacturing experience and product development designed around your customers.",
  // noindex until Tuan approves the page
  robots: { index: false, follow: false },
  // Canggus favicon for this route only. app/canggus/icon.png alone is not
  // enough: Next skips file-based icons when the root layout sets
  // metadata.icons, so the page metadata overrides them explicitly here.
  icons: {
    icon: [{ url: "/canggus/icon.png", sizes: "64x64", type: "image/png" }],
    apple: [{ url: "/canggus/icon.png", sizes: "64x64", type: "image/png" }],
  },
};

export default function CanggusPage() {
  return (
    <div
      className={`${montserrat.variable} ${greatVibes.variable} relative min-h-screen bg-white text-[#282828] font-[family-name:var(--font-cg-sans)] antialiased selection:bg-[#fb6ba8] selection:text-white`}
    >
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Audience />
        <Problem />
        <Opportunity />
        {/* Order (Tuan 13 Nov): Guide -> Manufacturing -> Certifications ->
            How Production Works -> Products -> Plan. Advantage moved up so
            that chain stays unbroken. */}
        <Advantage />
        <Guide />
        <ManufacturingNetwork />
        <Certifications />
        <HowProductionWorks />
        <Products />
        <Plan />
        <BiggerPicture />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
