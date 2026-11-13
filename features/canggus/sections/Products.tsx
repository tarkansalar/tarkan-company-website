import Image from "next/image";
import SectionIntro from "../components/SectionIntro";
import CtaButton from "../components/CtaButton";
import ProductCarousel from "../components/ProductCarousel";
import { IconTile, type IconName } from "../components/Icon";
import { Blob, FloatingProducts } from "../components/Visuals";
import { CANGGUS_ASSET_BASE } from "../data/catalog-meta";
import { VP, type VisualProduct } from "../data/visuals";

const CATEGORIES: { icon: IconName; title: string; body: string; p: VisualProduct }[] = [
  {
    icon: "zap",
    title: "Creatine Complexes",
    body: "Creatine is no longer only a traditional sports product. Different formulations open different customer groups.",
    p: VP.creatinePowder,
  },
  {
    icon: "atom",
    title: "Magnesium Complexes",
    body: "One of the most recognized and consistently purchased categories.",
    p: VP.magnesiumGummy,
  },
  {
    icon: "sparkles",
    title: "Collagen Complexes",
    body: "Strong demand across beauty, recovery, fitness and healthy aging.",
    p: VP.collagenPowder,
  },
  {
    icon: "droplet",
    title: "Electrolytes & Functional Hydration",
    body: "Daily-use products with high repeat-purchase potential.",
    p: VP.electrolyte,
  },
  {
    icon: "leaf",
    title: "Functional Wellness & Emerging Categories",
    body: "Functional mushrooms, matcha and functional teas, probiotic blends, oregano oil capsules, and selected longevity/wellness formulas (where legally permitted in the target market).",
    p: VP.matcha,
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-20 lg:py-32 overflow-hidden">
      <Blob className="-left-48 top-0 h-[480px] w-[480px]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
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
          {/* 1 -> 2 (md, last odd card full width) -> 3 (lg) -> 5 (xl) columns.
              5 columns only from 1280px: at 1024px a 5th of the row is too
              narrow for "longevity/wellness". */}
          <ul className="mt-6 grid md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-5 gap-4">
            {CATEGORIES.map((c) => (
              <li
                key={c.title}
                className="md:last:odd:col-span-2 lg:col-span-2 lg:[&:nth-child(n+4)]:col-span-3 xl:col-span-1 xl:[&:nth-child(n+4)]:col-span-1"
              >
                <div
                  data-tilt="7"
                  className="cg-tilt group h-full overflow-hidden rounded-3xl bg-white ring-1 ring-[#282828]/8 cg-card-shadow"
                >
                  {/* Real catalog product for the category */}
                  <div className="relative h-36 bg-[radial-gradient(70%_80%_at_50%_100%,#fde3ef_0%,#fdf7fa_60%,#ffffff_100%)]">
                    <span aria-hidden="true" className="absolute bottom-3 left-1/2 h-4 w-24 -translate-x-1/2 cg-floor" />
                    <Image
                      src={`${CANGGUS_ASSET_BASE}${c.p.stem}-md.webp`}
                      alt={c.p.name}
                      width={c.p.w}
                      height={c.p.h}
                      loading="lazy"
                      sizes="80px"
                      className="cg-prod-shadow absolute bottom-4 left-1/2 h-[118px] w-auto -translate-x-1/2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5"
                    />
                    <IconTile name={c.icon} className="absolute left-5 top-5 bg-white" />
                  </div>
                  <div className="p-6 pt-4">
                    <h4 className="text-[16px] font-bold leading-[1.35] text-[#282828]">{c.title}</h4>
                    <p className="mt-3 text-[14px] leading-[1.6] text-[#282828]/70">{c.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-20 overflow-hidden rounded-[32px] bg-[linear-gradient(140deg,#fff7fb,#fde6f0)] px-6 py-12 sm:p-12 lg:p-16 ring-1 ring-[#fb6ba8]/15 cg-card-shadow">
          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-center">
            <div className="text-center lg:text-left">
              <p className="font-[family-name:var(--font-cg-script)] text-[38px] sm:text-5xl text-[#fb6ba8] leading-tight">
                Your brand. Your formulations. Your positioning.
              </p>
              <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-[17px] leading-[1.7] text-[#282828]/80">
                Start with one or two products that make sense for your customers. Learn what sells.
                Then expand.
              </p>
              <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-[17px] leading-[1.7] font-semibold text-[#282828]">
                This is product development with positioning in mind - not just putting your logo on
                someone else’s bottle.
              </p>
              <div className="mt-10">
                <CtaButton />
              </div>
            </div>
            <FloatingProducts
              sizes="(min-width: 1024px) 140px, 30vw"
              className="mx-auto aspect-square w-full max-w-[340px]"
              items={[
                { p: VP.creatineCaps, pos: "left-[8%] bottom-[16%] w-[30%]", d: 0.4, r: -6, z: 2 },
                { p: VP.collagenGummy, pos: "left-[36%] bottom-[24%] w-[29%]", d: 1.5, r: 1, z: 1 },
                { p: VP.collagenDrops, pos: "right-[8%] bottom-[13%] w-[17%]", d: 2.3, r: 6, z: 3 },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
