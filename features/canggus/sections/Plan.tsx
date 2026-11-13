import type { CSSProperties } from "react";
import Image from "next/image";
import SectionIntro from "../components/SectionIntro";
import { IconTile, type IconName } from "../components/Icon";
import { Blob } from "../components/Visuals";
import { CANGGUS_ASSET_BASE } from "../data/catalog-meta";
import { PH, type VisualPhoto } from "../data/visuals";

const STEPS: { num: string; icon: IconName; title: string; body: string; photo: VisualPhoto }[] = [
  {
    num: "01",
    icon: "search",
    title: "Choose the right products",
    body: "We look at your business, your customers, and whether real differentiation is possible in that category.",
    photo: PH.showroom,
  },
  {
    num: "02",
    icon: "flask",
    title: "Develop and manufacture",
    body: "We coordinate formulation, packaging, branding and production - with the goal of creating products that feel proprietary, not generic.",
    photo: PH.productionLine,
  },
  {
    num: "03",
    icon: "rocket",
    title: "Launch and grow",
    body: "Your products arrive under your brand, ready for your customers. Start with a realistic first order and expand from there.",
    photo: PH.warehouse,
  },
];

export default function Plan() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-[#fdf7fa]">
      <Blob className="-right-48 top-1/4 h-[480px] w-[480px]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <SectionIntro eyebrow="The plan" title="Three steps." />
        <ol className="mt-12 grid md:grid-cols-3 gap-6 lg:gap-8">
          {STEPS.map((s, i) => (
            <li
              key={s.num}
              data-reveal=""
              style={{ "--rd": `${i * 0.1}s` } as CSSProperties}
            >
              <div
                data-tilt="6"
                className="cg-tilt h-full overflow-hidden rounded-3xl bg-white ring-1 ring-white cg-card-shadow"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={`${CANGGUS_ASSET_BASE}${s.photo.src}`}
                    alt={s.photo.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1280px) 380px, (min-width: 768px) 31vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
                </div>
                <div className="relative -mt-10 p-8 pt-0 lg:p-10 lg:pt-0">
                  <div className="flex items-end justify-between">
                    <IconTile name={s.icon} size="lg" className="shadow-[0_14px_28px_-14px_rgba(251,107,168,0.8)]" />
                    <span className="text-5xl font-extrabold text-[#fb6ba8]/90 leading-none tracking-[-0.03em]">
                      {s.num}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl lg:text-2xl font-bold leading-[1.25] text-[#282828]">{s.title}</h3>
                  <p className="mt-4 text-[16px] leading-[1.65] text-[#282828]/75">{s.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-12 text-lg sm:text-xl leading-[1.6] font-semibold text-[#282828] max-w-3xl">
          You focus on the relationship with your customers. We focus on the products and the
          positioning.
        </p>
      </div>
    </section>
  );
}
