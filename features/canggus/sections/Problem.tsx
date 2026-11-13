import SectionIntro from "../components/SectionIntro";
import { IconTile, type IconName } from "../components/Icon";

const PROBLEMS: { icon: IconName; text: string }[] = [
  { icon: "package", text: "High minimums that force you to over-order" },
  { icon: "tag", text: "Generic formulas that members can find cheaper on Amazon the next day" },
  { icon: "copy", text: "Products that look and feel interchangeable with dozens of other brands" },
  { icon: "clock", text: "Slow or unreliable production that damages trust" },
];

export default function Problem() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <SectionIntro
          eyebrow="The problem"
          title="Your customers are already spending money on supplements. Just not with you."
        />
        <div className="mt-10 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-5 text-[17px] leading-[1.7] text-[#282828]/80">
            <p>
              They trust you with their training, recovery, health and longevity goals. But when
              they need magnesium, creatine, collagen or electrolytes, they leave and buy from
              somewhere else.
            </p>
            <p className="font-semibold text-[#282828]">Most solutions create new problems:</p>
          </div>
          <ul className="space-y-3">
            {PROBLEMS.map((p) => (
              <li
                key={p.text}
                className="flex items-center gap-4 rounded-2xl border border-[#282828]/10 p-5 text-[16px] leading-[1.55] text-[#282828]"
              >
                <IconTile name={p.icon} />
                {p.text}
              </li>
            ))}
          </ul>
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
