import SectionIntro from "../components/SectionIntro";
import ProductShowcase, { type ShowcaseItem } from "../components/ProductShowcase";
import { CATALOG } from "../data/catalog";
import { CANGGUS_ASSET_BASE } from "../data/catalog-meta";
import { SHOWCASE_IDS } from "../data/visuals";

const SHORT: Record<string, ShowcaseItem["category"]> = {
  Creatine: "Creatine",
  Magnesium: "Magnesium",
  "Electrolytes & Hydration": "Electrolytes",
};

// Server side: pick the focus products from the full catalog, so only these
// few cards (no benefit claims, no blur data) reach the browser.
const ITEMS: ShowcaseItem[] = SHOWCASE_IDS.flatMap((id) => {
  const p = CATALOG.find((x) => x.id === id);
  const category = p && SHORT[p.category];
  if (!p || !category) return [];
  return [
    {
      id: p.id,
      name: p.name,
      category,
      format: p.label.split(" · ")[0],
      src: `${CANGGUS_ASSET_BASE}${p.stem}-md.webp`,
      w: p.w,
      h: p.h,
      lowRes: p.lowRes,
    },
  ];
});

export default function Products() {
  return (
    <section id="products" className="py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionIntro eyebrow="What’s trending" title="Creatine, magnesium, electrolytes and custom blends." />
        <p className="mt-5 text-[17px] leading-[1.7] text-[#282828]/80">
          Examples, not a fixed catalogue. Opportunities, not guaranteed successes.
        </p>
        <ProductShowcase items={ITEMS} />
      </div>
    </section>
  );
}
