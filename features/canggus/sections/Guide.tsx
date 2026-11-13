import Image from "next/image";
import SectionIntro from "../components/SectionIntro";
import { IconTile } from "../components/Icon";
import { Blob, FloatingProducts } from "../components/Visuals";
import { FOUNDER_PHOTO, VP } from "../data/visuals";

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
    <section className="relative overflow-hidden py-20 lg:py-32">
      <Blob className="-left-40 top-20 h-[480px] w-[480px]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-28">
          {/* Founder portrait (real photo from Tuan) as a tilted 3D card */}
          <div data-reveal="" className="relative mx-auto w-full max-w-[360px] lg:max-w-md pb-10">
            <div data-tilt="6" className="cg-tilt">
              <div className="rotate-[-2.5deg] rounded-[30px] bg-white p-2 ring-1 ring-[#282828]/5 cg-card-shadow">
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
                    sizes="(min-width: 1024px) 420px, (min-width: 400px) 340px, 85vw"
                    className="absolute bottom-0 left-1/2 w-[98%] max-w-none -translate-x-1/2 h-auto"
                  />
                </div>
              </div>
            </div>
            <span
              aria-hidden="true"
              className="absolute -right-3 top-8 h-16 w-16 rounded-2xl bg-[#fb6ba8] rotate-12 shadow-[0_18px_30px_-12px_rgba(251,107,168,0.8)]"
            />
            <FloatingProducts
              disc={false}
              sizes="96px"
              className="pointer-events-none absolute -left-4 bottom-0 h-[34%] w-[34%]"
              items={[{ p: VP.coq10, pos: "left-0 bottom-0 w-[62%]", d: 1, r: -8, z: 2 }]}
            />
          </div>
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
                <IconTile name="check" size="sm" />
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
              further: we help you develop products with clearer positioning - including distinct
              men’s and women’s versions, unique combinations, and packaging that supports a
              stronger brand story.
            </p>
            <p className="text-[#282828] font-semibold">
              That combination - direct factory access through volume + real product development
              and positioning - is what makes this different.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
