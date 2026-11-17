import type { Metadata } from "next";
import { montserrat } from "@/features/canggus/fonts";
import "@/features/canggus/visual.css";
import Header from "@/features/canggus/components/Header";
import Hero from "@/features/canggus/sections/Hero";
import HowWeMakeMoney from "@/features/canggus/sections/HowWeMakeMoney";
import WhyMe from "@/features/canggus/sections/WhyMe";
import ManufacturingNetwork from "@/features/canggus/sections/ManufacturingNetwork";
import Problem from "@/features/canggus/sections/Problem";
import Products from "@/features/canggus/sections/Products";
import StartSmall from "@/features/canggus/sections/StartSmall";
import Benefits from "@/features/canggus/sections/Benefits";
import Principles from "@/features/canggus/sections/Principles";
import FinalCta from "@/features/canggus/sections/FinalCta";
import Footer from "@/features/canggus/sections/Footer";

export const metadata: Metadata = {
  // Tab title = canggus.com exactly (Tuan 13 Nov), typographic apostrophe.
  title: "Welcome to Canggu’s",
  openGraph: { title: "Welcome to Canggu’s" },
  twitter: { title: "Welcome to Canggu’s" },
  description:
    "Your customers already buy supplements. Build your own creatine, magnesium and electrolyte range through our manufacturing network. No consulting, development or service fees.",
  // noindex until Tuan approves the page
  robots: { index: false, follow: false },
  // Canggus favicon for this route only (the root layout sets metadata.icons,
  // so file-based icons are skipped; set them explicitly here).
  icons: {
    icon: [{ url: "/canggus/icon.png", sizes: "64x64", type: "image/png" }],
    apple: [{ url: "/canggus/icon.png", sizes: "64x64", type: "image/png" }],
  },
};

// Short version (Tarkan voice note 15 Nov 2026): max 600 words in <main>,
// focus on creatine, magnesium, electrolytes and custom powder blends.
// The long version can be restored from commit cbfc658.
export default function CanggusPage() {
  return (
    <div
      data-cg-root
      className={`cg-root ${montserrat.variable} relative min-h-screen overflow-x-clip bg-white text-[#282828] font-[family-name:var(--font-cg-sans)] antialiased`}
    >
      <Header />
      <main>
        <Hero />
        <HowWeMakeMoney />
        <WhyMe />
        <ManufacturingNetwork />
        <Problem />
        <Products />
        <StartSmall />
        <Benefits />
        <Principles />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
