import SectionIntro from "../components/SectionIntro";
import CtaButton from "../components/CtaButton";
import ProductCarousel from "../components/ProductCarousel";
import { IconTile, type IconName } from "../components/Icon";

const CATEGORIES: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "zap",
    title: "Creatine Complexes",
    body: "Creatine is no longer only a traditional sports product. Different formulations open different customer groups.",
  },
  {
    icon: "atom",
    title: "Magnesium Complexes",
    body: "One of the most recognized and consistently purchased categories.",
  },
  {
    icon: "sparkles",
    title: "Collagen Complexes",
    body: "Strong demand across beauty, recovery, fitness and healthy aging.",
  },
  {
    icon: "droplet",
    title: "Electrolytes & Functional Hydration",
    body: "Daily-use products with high repeat-purchase potential.",
  },
  {
    icon: "leaf",
    title: "Functional Wellness & Emerging Categories",
    body: "Functional mushrooms, matcha and functional teas, probiotic blends, oregano oil capsules, and selected longevity/wellness formulas (where legally permitted in the target market).",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          <SectionIntro
            eyebrow="Product development opportunities"
            title="Your customers. Your brand. Products developed around your market."
          />
          <p className="text-[17px] sm:text-lg leading-[1.7] text-[#282828]/80">
            Start with products people already buy. Develop combinations, formulations and
            packaging that create a stronger distinction for your brand.
          </p>
        </div>

        <ProductCarousel />

        <p className="mt-10 text-center text-sm sm:text-[15px] leading-[1.6] text-[#282828]/70">
          These are visual product-development examples, not a fixed catalogue.
        </p>

        <div className="mt-20 lg:mt-28">
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#fb6ba8]">
            Current high-potential categories
          </h3>
          <ul className="mt-6 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((c) => (
              <li key={c.title} className="rounded-3xl border border-[#282828]/10 p-6">
                <IconTile name={c.icon} />
                <h4 className="mt-4 text-[16px] font-bold leading-[1.35] text-[#282828]">{c.title}</h4>
                <p className="mt-3 text-[14px] leading-[1.6] text-[#282828]/70">{c.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 rounded-[32px] bg-[#fdf7fa] px-6 py-12 sm:p-12 lg:p-16 text-center">
          <p className="font-[family-name:var(--font-cg-script)] text-[38px] sm:text-5xl text-[#fb6ba8] leading-tight">
            Your brand. Your formulations. Your positioning.
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-[17px] leading-[1.7] text-[#282828]/80">
            Start with one or two products that make sense for your customers. Learn what sells.
            Then expand.
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-[17px] leading-[1.7] font-semibold text-[#282828]">
            This is product development with positioning in mind - not just putting your logo on
            someone else’s bottle.
          </p>
          <div className="mt-10">
            <CtaButton />
          </div>
        </div>
      </div>
    </section>
  );
}
