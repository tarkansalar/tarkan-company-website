import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingChat from "@/components/widgets/FloatingChat";
import Hero from "@/features/webinar/sections/Hero";
import ProclamationLead from "@/features/webinar/sections/ProclamationLead";
import Discover from "@/features/webinar/sections/Discover";
import WhoFor from "@/features/webinar/sections/WhoFor";
import AboutHost from "@/features/webinar/sections/AboutHost";
import Urgency from "@/features/webinar/sections/Urgency";

export const metadata = {
  title:
    "The Factories You Outsourced To Are Now Your Competitors · Free Webinar",
  description:
    "A 90-minute live briefing for fashion, beauty, and lifestyle founders on the four new moats replacing marketing.",
};

export default function WebinarPage() {
  return (
    <>
      <Header />
      <Hero />
      <ProclamationLead />
      <Discover />
      <WhoFor />
      <AboutHost />
      <Urgency />
      <Footer />
      <FloatingChat />
    </>
  );
}
