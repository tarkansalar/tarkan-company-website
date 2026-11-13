import SectionIntro from "../components/SectionIntro";
import ProductionFlows from "../components/ProductionFlows";

// "How Production Works": service and production flows transcribed from the
// partner facilities' catalogs (manifest.processes[], translated by Backend).
// Step text comes only from the manifest; no new claims.
export default function HowProductionWorks() {
  return (
    <section
      id="production"
      aria-labelledby="production-title"
      className="scroll-mt-20 relative overflow-hidden py-20 lg:py-32 bg-[#fdf7fa]"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          <div id="production-title">
            <SectionIntro eyebrow="How production works" title="From customer requirements to delivery." />
          </div>
          <p className="text-[17px] sm:text-lg leading-[1.7] text-[#282828]/80">
            The service and production flows below are taken from our partner facilities&rsquo; own
            process documentation.
          </p>
        </div>
        <ProductionFlows />
      </div>
    </section>
  );
}
