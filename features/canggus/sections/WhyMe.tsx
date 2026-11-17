import Image from "next/image";
import SectionIntro from "../components/SectionIntro";
import { IconTile } from "../components/Icon";
import FounderVideo from "../components/FounderVideo";
import { FOUNDER_PHOTO } from "../data/visuals";

// Founder points from brief v2, kept factual (no compliance claims).
const POINTS = [
  "26+ years in international product development and manufacturing",
  "Ran my own manufacturing operation in China for 16+ years",
  "Built and operated businesses in Germany",
  "Worked with Adidas, Zara, H&M and Louis Vuitton",
  "Involved in 50+ million manufactured products",
];

// Tarkan 17 Nov: the founder portrait is the main visual again (as in the
// long version, static card, no tilt). The VSL stays, smaller: a 9:16 play
// card on the portrait corner that opens the video in a dialog. The badge
// logo row moved to the new ManufacturingNetwork section.
export default function WhyMe() {
  return (
    <section id="why-me" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
        <div className="relative mx-auto w-full max-w-[340px] pr-8 pb-10 sm:max-w-[400px] lg:max-w-[460px]">
          <div className="rotate-[-2deg] rounded-[30px] bg-white p-2 ring-1 ring-[#282828]/6 cg-card-shadow">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[radial-gradient(80%_60%_at_50%_35%,#ffffff_0%,#fde3ef_55%,#f9c6dc_100%)]">
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-[14%] h-[62%] aspect-square -translate-x-1/2 rounded-full border-2 border-dashed border-[#fb6ba8]/35"
              />
              <Image
                src={FOUNDER_PHOTO.src}
                alt={FOUNDER_PHOTO.alt}
                width={FOUNDER_PHOTO.w}
                height={FOUNDER_PHOTO.h}
                loading="lazy"
                sizes="(min-width: 1024px) 440px, (min-width: 400px) 380px, 85vw"
                className="absolute bottom-0 left-1/2 w-[98%] max-w-none -translate-x-1/2 h-auto"
              />
            </div>
          </div>
          <span
            aria-hidden="true"
            className="absolute -left-2 top-8 h-12 w-12 rounded-2xl bg-[#fb6ba8] -rotate-12 shadow-[0_18px_30px_-12px_rgba(251,107,168,0.8)]"
          />
          <FounderVideo className="absolute bottom-0 right-0 w-[32%] max-w-[140px] rotate-[3deg]" />
        </div>

        <div>
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
        </div>
      </div>
    </section>
  );
}
