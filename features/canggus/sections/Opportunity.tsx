import SectionIntro from "../components/SectionIntro";
import { IconTile, type IconName } from "../components/Icon";
import { Blob, FloatingProducts } from "../components/Visuals";
import { VP } from "../data/visuals";

const BENEFITS: { icon: IconName; text: string }[] = [
  { icon: "trendingUp", text: "Additional revenue from customers you already have" },
  { icon: "tag", text: "Your own brand instead of promoting someone else’s" },
  { icon: "users", text: "Products built around your actual customers’ needs" },
  { icon: "gem", text: "Clearer differentiation and higher loyalty" },
  { icon: "repeat", text: "New membership, bundle and recurring purchase opportunities" },
];

export default function Opportunity() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-[#282828] text-white">
      <Blob strong className="-right-40 -top-32 h-[480px] w-[480px]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-center">
          <div>
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
          </div>
          {/* Creatine, magnesium, collagen, hydration: real catalog products */}
          <FloatingProducts
            dark
            sizes="(min-width: 1024px) 150px, 30vw"
            className="mx-auto aspect-[5/4] w-full max-w-[500px]"
            items={[
              { p: VP.creatineCaps, pos: "left-[4%] bottom-[14%] w-[22%]", d: 0.2, r: -6, z: 2 },
              { p: VP.magnesiumGummy, pos: "left-[25%] bottom-[22%] w-[22%]", d: 1.4, r: -1, z: 1 },
              { p: VP.collagenGummy, pos: "left-[47%] bottom-[19%] w-[21%]", d: 2.2, r: 3, z: 2 },
              { p: VP.electrolyte, pos: "right-[3%] bottom-[12%] w-[26%]", d: 0.8, r: 6, z: 3 },
            ]}
          />
        </div>
        <p className="mt-14 text-xs font-semibold uppercase tracking-[0.22em] text-[#fb6ba8]">
          What that creates
        </p>
        <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {BENEFITS.map((b) => (
            <li
              key={b.text}
              data-tilt="7"
              className="cg-tilt rounded-3xl bg-[linear-gradient(160deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))] ring-1 ring-white/12 p-6 cg-card-shadow-dark"
            >
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
