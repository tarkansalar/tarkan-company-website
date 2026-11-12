import SectionIntro from "../components/SectionIntro";
import AssetPlaceholder from "../components/AssetPlaceholder";

const CREDENTIALS = [
  "Over 15 years owning and operating manufacturing facilities in China",
  "More than 50 million products manufactured",
  "Worked with and supplied major international brands including Louis Vuitton, Zara, Adidas, H&M and Diesel",
  "Built and operated retail businesses in Europe",
  "Supplied leading sports and fashion retailers in Europe and the US",
  "Experience bringing health, wellness and longevity products into new markets",
];

export default function Guide() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-10">
          {/* [ASET] Founder portrait */}
          <AssetPlaceholder label="Founder portrait" className="aspect-[4/5] w-full max-w-md" />
        </div>
        <div>
          <SectionIntro
            eyebrow="Why this is different"
            title="You’re not getting another private-label catalogue. You’re getting manufacturing experience + product positioning support."
          />
          <p className="mt-8 text-[17px] sm:text-lg leading-[1.7] text-[#282828]/80">
            I’ve spent my career building, manufacturing and selling products internationally.
          </p>
          <ul className="mt-8 divide-y divide-[#282828]/10 border-y border-[#282828]/10">
            {CREDENTIALS.map((c) => (
              <li key={c} className="flex gap-4 py-4 text-[16px] leading-[1.55] text-[#282828]">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fb6ba8]" />
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-5 text-[17px] leading-[1.7] text-[#282828]/80">
            <p>
              I understand quality, compliance, human-rights standards, and the reality that your
              reputation sits on every product that carries your name.
            </p>
            <p>
              Most private-label offers stop at “here’s a formula, put your logo on it.” We go
              further: we help you develop products with clearer positioning — including distinct
              men’s and women’s versions, unique combinations, and packaging that supports a
              stronger brand story.
            </p>
            <p className="text-[#282828] font-semibold">
              That combination — direct factory access through volume + real product development
              and positioning — is what makes this different.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
