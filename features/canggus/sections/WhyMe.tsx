import Image from "next/image";
import SectionIntro from "../components/SectionIntro";
import { IconTile } from "../components/Icon";
import { BADGE_LOGOS } from "../data/badges";
import { CANGGUS_ASSET_BASE } from "../data/catalog-meta";
import { BADGE_ROW, FOUNDER_VSL_SRC } from "../data/visuals";

// Founder points from brief v2, kept factual (no compliance claims).
const POINTS = [
  "26+ years in international product development and manufacturing",
  "Ran my own manufacturing operation in China for 16+ years",
  "Built and operated businesses in Germany",
  "Worked with Adidas, Zara, H&M and Louis Vuitton",
  "Involved in 50+ million manufactured products",
];

const BADGE_NAMES: Record<string, string> = {
  haccp: "HACCP",
  gmp: "GMP",
  cgmp: "cGMP",
  iso22000: "ISO 22000",
  iso9001: "ISO 9001",
  halal: "Halal",
};

export default function WhyMe() {
  const badges = BADGE_ROW.map(([id, f]) => ({ id, logo: BADGE_LOGOS[id]?.[f] })).filter((b) => b.logo);
  return (
    <section id="why-me" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16 items-center">
        {/* Founder VSL (Teaser.mp4 from Tuan, 9:16). Cover = frame at 1 s,
            the file only streams on play. */}
        <div className="order-2 lg:order-1 mx-auto w-full max-w-[300px] lg:max-w-[340px]">
          <div className="rounded-[28px] bg-white p-2 ring-1 ring-[#282828]/6 cg-card-shadow">
            <video
              src={`${FOUNDER_VSL_SRC}#t=1`}
              controls
              playsInline
              preload="metadata"
              aria-label="Founder video"
              className="block aspect-[9/16] w-full rounded-[22px] bg-[#fde3ef] object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionIntro eyebrow="Why me" title="I understand both sides." />
          <ul className="mt-8 divide-y divide-[#282828]/10 border-y border-[#282828]/10">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-4 py-3.5 text-[16px] leading-[1.5] text-[#282828]">
                <IconTile name="check" size="sm" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[17px] leading-[1.7] text-[#282828]/80">
            Most sourcing agents understand factories. Most Western businesses understand their
            customers. <span className="font-semibold text-[#282828]">I know both.</span>
          </p>
          <p className="mt-3 text-sm font-semibold text-[#282828]">Tarkan Salar, Founder</p>

          {/* One row of partner facility standard logos, no text (card t_7322a56f). */}
          <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            {badges.map(({ id, logo }) => (
              <li key={id}>
                <Image
                  src={`${CANGGUS_ASSET_BASE}${logo!.src}`}
                  alt={`Partner facility standard: ${BADGE_NAMES[id] ?? id}`}
                  width={logo!.w}
                  height={logo!.h}
                  loading="lazy"
                  sizes="48px"
                  className="h-10 w-auto sm:h-12 object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
