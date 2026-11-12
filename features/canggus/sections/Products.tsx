import SectionIntro from "../components/SectionIntro";
import CtaButton from "../components/CtaButton";
import { PRODUCTS, type Product } from "../data/content";

const CATEGORIES = [
  {
    num: "01",
    title: "Creatine Complexes",
    body: "Creatine is no longer only a traditional sports product. Different formulations open different customer groups.",
  },
  {
    num: "02",
    title: "Magnesium Complexes",
    body: "One of the most recognized and consistently purchased categories.",
  },
  {
    num: "03",
    title: "Collagen Complexes",
    body: "Strong demand across beauty, recovery, fitness and healthy aging.",
  },
  {
    num: "04",
    title: "Electrolytes & Functional Hydration",
    body: "Daily-use products with high repeat-purchase potential.",
  },
  {
    num: "05",
    title: "Functional Wellness & Emerging Categories",
    body: "Functional mushrooms, matcha and functional teas, probiotic blends, oregano oil capsules, and selected longevity/wellness formulas (where legally permitted in the target market).",
  },
];

// Simple packaging silhouettes so the grid reads as a portfolio until real mockups arrive.
function Silhouette({ format }: { format: Product["format"] }) {
  const body = "bg-white/90 shadow-[0_18px_30px_-18px_rgba(40,40,40,0.45)]";
  switch (format) {
    case "bottle":
      return (
        <div className="flex flex-col items-center">
          <div className="h-4 w-9 rounded-t-md bg-[#282828]/80" />
          <div className={`h-24 w-16 sm:h-28 sm:w-20 rounded-2xl ${body}`} />
        </div>
      );
    case "pouch":
      return <div className={`h-28 w-20 sm:h-32 sm:w-24 rounded-t-[28px] rounded-b-lg ${body}`} />;
    case "sachet":
      return (
        <div className="flex gap-1.5 sm:gap-2 items-end">
          <div className={`h-20 w-9 sm:h-24 sm:w-12 rounded-md -rotate-6 ${body}`} />
          <div className={`h-24 w-9 sm:h-28 sm:w-12 rounded-md ${body}`} />
          <div className={`h-20 w-9 sm:h-24 sm:w-12 rounded-md rotate-6 ${body}`} />
        </div>
      );
    case "gummies":
      return (
        <div className="flex flex-col items-center">
          <div className="h-5 w-16 sm:w-20 rounded-t-lg bg-[#fb6ba8]" />
          <div className={`h-20 w-20 sm:h-24 sm:w-24 rounded-3xl ${body}`} />
        </div>
      );
    case "jar":
      return (
        <div className="flex flex-col items-center">
          <div className="h-5 w-24 sm:w-28 rounded-t-xl bg-[#282828]/80" />
          <div className={`h-16 w-24 sm:h-20 sm:w-28 rounded-b-2xl ${body}`} />
        </div>
      );
    default:
      return (
        <div className="flex flex-col items-center">
          <div className="h-5 w-20 sm:w-24 rounded-t-xl bg-[#282828]/80" />
          <div className={`h-24 w-20 sm:h-28 sm:w-24 rounded-b-2xl ${body}`} />
        </div>
      );
  }
}

export default function Products() {
  return (
    <section id="products" className="py-20 lg:py-32">
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

        <ul className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-10">
          {PRODUCTS.map((p) => (
            <li key={p.num} className="group">
              {/* [ASET] product mockup: replace this block with the real image */}
              <div
                role="img"
                aria-label={`Placeholder: product ${p.num} - ${p.name}`}
                className="relative aspect-[4/5] rounded-3xl flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:-translate-y-1"
                style={{ backgroundColor: p.tint }}
              >
                <Silhouette format={p.format} />
                {p.tag && (
                  <span className="absolute top-3 left-3 rounded-full bg-[#282828] px-2.5 py-1 text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                    {p.tag}
                  </span>
                )}
                <span className="absolute bottom-2.5 inset-x-2 text-center text-[8px] sm:text-[10px] font-semibold uppercase tracking-[0.1em] text-[#282828]/45">
                  product {p.num} - {p.name}
                </span>
              </div>
              <p className="mt-4 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-[#fb6ba8]">
                {p.category}
              </p>
              <h3 className="mt-1 text-[15px] sm:text-[17px] font-semibold leading-[1.35] text-[#282828]">
                {p.name}
              </h3>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-center text-sm sm:text-[15px] leading-[1.6] text-[#282828]/60">
          These are visual product-development examples, not a fixed catalogue.
        </p>

        <div className="mt-20 lg:mt-28">
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#fb6ba8]">
            Current high-potential categories
          </h3>
          <ul className="mt-6 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((c) => (
              <li key={c.num} className="rounded-3xl border border-[#282828]/10 p-6">
                <span className="text-sm font-bold text-[#fb6ba8]">{c.num}.</span>
                <h4 className="mt-2 text-[16px] font-bold leading-[1.35] text-[#282828]">{c.title}</h4>
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
            This is product development with positioning in mind — not just putting your logo on
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
