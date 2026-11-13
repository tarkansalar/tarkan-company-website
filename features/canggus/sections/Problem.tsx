import SectionIntro from "../components/SectionIntro";
import { IconTile, type IconName } from "../components/Icon";
import { Blob, PhotoStack } from "../components/Visuals";
import { PH } from "../data/visuals";

const PROBLEMS: { icon: IconName; text: string }[] = [
  { icon: "package", text: "High minimums that force you to over-order" },
  { icon: "tag", text: "Generic formulas that members can find cheaper on Amazon the next day" },
  { icon: "copy", text: "Products that look and feel interchangeable with dozens of other brands" },
  { icon: "clock", text: "Slow or unreliable production that damages trust" },
];

export default function Problem() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <Blob className="-right-48 top-10 h-[480px] w-[480px]" />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <SectionIntro
          eyebrow="The problem"
          title="Your customers are already spending money on supplements. Just not with you."
        />
        {/* items-center (Tuan 13 Nov, "no empty space"): the 4 cards sit level
            with the middle of the text + photo column, not at its top. */}
        <div className="mt-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="space-y-5 text-[17px] leading-[1.7] text-[#282828]/80">
              <p>
                They trust you with their training, recovery, health and longevity goals. But when
                they need magnesium, creatine, collagen or electrolytes, they leave and buy from
                somewhere else.
              </p>
              <p className="font-semibold text-[#282828]">Most solutions create new problems:</p>
            </div>
            {/* Interchangeable capsules and tablets (manifest canggus/process/) */}
            <PhotoStack
              photos={[PH.pillsScatter, PH.tabletsMixed, PH.softgelsAmber]}
              sizes="(min-width: 1024px) 360px, 75vw"
              className="mt-10 hidden lg:block aspect-[16/12] w-full max-w-[460px]"
            />
          </div>
          <ul className="space-y-3">
            {PROBLEMS.map((p) => (
              <li
                key={p.text}
                data-tilt="4"
                className="cg-tilt flex items-center gap-4 rounded-2xl bg-white/80 ring-1 ring-[#282828]/8 p-5 text-[16px] leading-[1.55] text-[#282828] shadow-[0_1px_2px_rgba(40,40,40,0.04),0_18px_36px_-26px_rgba(40,40,40,0.35)]"
              >
                <IconTile name={p.icon} />
                {p.text}
              </li>
            ))}
          </ul>
          {/* Phone/tablet: the same photos after the list */}
          <PhotoStack
            photos={[PH.pillsScatter, PH.tabletsMixed, PH.softgelsAmber]}
            sizes="75vw"
            className="lg:hidden mx-auto aspect-[16/12] w-full max-w-[420px]"
          />
        </div>
        <div className="mt-14 space-y-5 text-[17px] sm:text-lg leading-[1.7] text-[#282828]/80 max-w-3xl">
          <p>
            Simply re-labeling the same product everyone else sells rarely creates a real business.
            If the product is easy to compare, price becomes the only conversation - and you lose.
          </p>
          <p className="text-[#282828] font-semibold text-xl sm:text-2xl leading-[1.45] tracking-[-0.01em]">
            You already have the hardest part: a real relationship with the customer. Most
            businesses never turn that into their own product revenue.{" "}
            <span className="text-[#fb6ba8]">That’s the gap.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
