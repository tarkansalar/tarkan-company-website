import SectionIntro from "../components/SectionIntro";
import ProductionFlows from "../components/ProductionFlows";
import { Blob, PhotoStack } from "../components/Visuals";
import { PH } from "../data/visuals";

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
      <Blob className="-right-48 -top-24 h-[480px] w-[480px]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          <div>
            <div id="production-title">
              <SectionIntro eyebrow="How production works" title="From customer requirements to delivery." />
            </div>
            <p className="mt-8 text-[17px] sm:text-lg leading-[1.7] text-[#282828]/80">
              The service and production flows below are taken from our partner facilities&rsquo; own
              process documentation.
            </p>
          </div>
          {/* Production line, processing and powder mixing (manifest canggus/factory/) */}
          <PhotoStack
            photos={[PH.productionLine, PH.processing, PH.mixingTank]}
            sizes="(min-width: 1024px) 380px, 75vw"
            className="mx-auto aspect-[16/12] w-full max-w-[480px]"
          />
        </div>
        <ProductionFlows />
      </div>
    </section>
  );
}
