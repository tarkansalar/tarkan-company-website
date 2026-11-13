import SectionIntro from "../components/SectionIntro";
import { IconTile, type IconName } from "../components/Icon";

const BENEFITS: { icon: IconName; text: string }[] = [
  { icon: "trendingUp", text: "Additional revenue from customers you already have" },
  { icon: "tag", text: "Your own brand instead of promoting someone else’s" },
  { icon: "users", text: "Products built around your actual customers’ needs" },
  { icon: "gem", text: "Clearer differentiation and higher loyalty" },
  { icon: "repeat", text: "New membership, bundle and recurring purchase opportunities" },
];

export default function Opportunity() {
  return (
    <section className="py-20 lg:py-32 bg-[#282828] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionIntro
          invert
          eyebrow="The opportunity"
          title="Turn the trust you’ve already built into your own product line - with real distinction."
        />
        <p className="mt-8 max-w-3xl text-[17px] sm:text-lg leading-[1.7] text-white/75">
          Imagine your members buying creatine, magnesium, collagen and hydration products under
          your brand - formulated, packaged and positioned in a way that feels specific to your
          community, not like a generic Amazon alternative.
        </p>
        <p className="mt-14 text-xs font-semibold uppercase tracking-[0.22em] text-[#fb6ba8]">
          What that creates
        </p>
        <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {BENEFITS.map((b) => (
            <li key={b.text} className="rounded-3xl bg-white/[0.06] border border-white/10 p-6">
              <IconTile name={b.icon} dark className="mb-5" />
              <span className="block text-[16px] leading-[1.5] font-medium">{b.text}</span>
            </li>
          ))}
        </ul>
        <p className="mt-14 max-w-3xl text-[17px] sm:text-lg leading-[1.7] text-white/75">
          You don’t need to become a manufacturer. You already built the community.{" "}
          <span className="text-white font-semibold">
            Now give that community a brand of its own - with products that stand apart.
          </span>
        </p>
      </div>
    </section>
  );
}
