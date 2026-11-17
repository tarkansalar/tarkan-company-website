import { EYEBROW_BASE } from "../components/eyebrow";

export default function Principles() {
  return (
    <section className="py-14 lg:py-20 bg-[#fb6ba8] text-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {/* Same eyebrow style; white because the band itself is pink. */}
        <p className={EYEBROW_BASE}>Our principles</p>
        <h2 className="mt-4 text-[clamp(1.25rem,0.9rem+1.6vw,2rem)] font-extrabold uppercase leading-[1.3] tracking-[0.01em]">
          Quality. Transparency. Fair pricing. Open communication. Long-term relationships.
        </h2>
        <p className="mt-4 text-[16px] sm:text-lg leading-[1.6] text-white/90">
          No hidden service charges. No unnecessary complexity. No exaggerated promises. No pressure.
        </p>
      </div>
    </section>
  );
}
