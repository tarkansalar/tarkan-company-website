import CtaButton from "../components/CtaButton";
import { EYEBROW } from "../components/eyebrow";
import WhatsAppButton from "../components/WhatsAppButton";

export default function FinalCta() {
  return (
    <section id="book" className="py-16 lg:py-24 bg-[#282828] text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <p className={EYEBROW}>
          Start with a conversation
        </p>
        <h2 className="mt-4 text-[clamp(1.75rem,1.1rem+2.6vw,3rem)] font-bold leading-[1.12] tracking-[-0.02em]">
          Let’s explore what we can build together.
        </h2>
        <p className="mt-5 text-[17px] sm:text-lg leading-[1.7] text-white/75">
          You don’t need a product list, manufacturing knowledge or your own brand yet.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <CtaButton label="Book a free call" />
          <WhatsAppButton />
        </div>
        <p className="mt-5 text-sm text-white/60">15 to 20 minutes. No obligation.</p>
      </div>
    </section>
  );
}
