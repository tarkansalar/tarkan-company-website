import type { CSSProperties } from "react";
import SectionIntro from "../components/SectionIntro";
import { IconTile, type IconName } from "../components/Icon";
import { Blob, FloatingProducts, PhotoStack } from "../components/Visuals";
import { PH, VP } from "../data/visuals";

const ADVANTAGES = [
  {
    title: "Better commercial conditions",
    body: "More realistic starting quantities and stronger factory pricing than most single businesses can negotiate on their own.",
  },
  {
    title: "Room to differentiate",
    body: "The ability to develop formulations, ingredient combinations, and packaging that are actually yours, not easily compared to mass-market products.",
  },
];

const YOU_GET: { icon: IconName; text: string }[] = [
  { icon: "factory", text: "Direct access to carefully selected, quality-focused factories" },
  { icon: "handshake", text: "Stronger pricing through established relationships and combined volumes" },
  { icon: "flask", text: "Product development support focused on distinction (not just label changes)" },
  { icon: "users", text: "Men’s and women’s formulation options where it makes commercial sense" },
  { icon: "palette", text: "Branding, packaging and label design coordination" },
  { icon: "truck", text: "Full production management and delivery" },
];

export default function Advantage() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-[#fdf7fa]">
      <Blob className="-left-48 -top-24 h-[480px] w-[480px]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-12 items-center">
          <div>
            <SectionIntro
              eyebrow="How we create the advantage"
              title="Direct factory pricing. Own designs. Clear distinction."
            />
            <p className="mt-8 max-w-3xl text-[17px] sm:text-lg leading-[1.7] text-[#282828]/80">
              Because we work with multiple brands, we can access manufacturing volumes and conditions
              that individual businesses usually cannot reach alone. This delivers two practical
              advantages:
            </p>
          </div>
          {/* Factory photos (sample showroom, production) */}
          <PhotoStack
            photos={[PH.showroom, PH.gummyLine, PH.bottleLine]}
            sizes="(min-width: 1024px) 330px, 72vw"
            className="mx-auto aspect-[16/12] w-full max-w-[440px]"
          />
        </div>
        <ol className="mt-12 grid md:grid-cols-2 gap-5">
          {ADVANTAGES.map((a, i) => (
            <li
              key={a.title}
              data-reveal=""
              data-tilt="5"
              style={{ "--rd": `${i * 0.08}s` } as CSSProperties}
              className="cg-tilt relative overflow-hidden rounded-3xl bg-white/90 ring-1 ring-white p-8 lg:p-10 cg-card-shadow"
            >
              <span className="font-[family-name:var(--font-cg-script)] text-5xl text-[#fb6ba8] leading-none">
                {i + 1}.
              </span>
              <h3 className="mt-4 text-xl lg:text-2xl font-bold text-[#282828] tracking-[-0.01em]">
                {a.title}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.65] text-[#282828]/75">{a.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-16 grid lg:grid-cols-[0.5fr_1.5fr] gap-8 lg:gap-16">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#282828]">You get:</h3>
            {/* Own designs: real products in different formats */}
            <FloatingProducts
              sizes="(min-width: 1024px) 110px, 26vw"
              className="mt-6 hidden lg:block aspect-square w-full max-w-[300px]"
              items={[
                { p: VP.d3k2, pos: "left-[6%] bottom-[14%] w-[32%]", d: 0.5, r: -5, z: 1 },
                { p: VP.magnesiumDrops, pos: "left-[40%] bottom-[10%] w-[17%]", d: 1.5, r: 2, z: 2 },
                { p: VP.matcha, pos: "right-[4%] bottom-[13%] w-[34%]", d: 2.3, r: 5, z: 1 },
              ]}
            />
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
            {YOU_GET.map((y) => (
              <li key={y.text} className="flex items-center gap-4 text-[16px] leading-[1.55] text-[#282828]">
                <IconTile name={y.icon} />
                {y.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16 max-w-3xl space-y-5 text-[17px] sm:text-lg leading-[1.7] text-[#282828]/80">
          <p>
            The goal is not to sell you the same product everyone else has at a slightly better
            cost. The goal is to help you launch products that members cannot easily replace with a
            cheaper alternative - while still giving you commercial conditions strong enough to
            compete.
          </p>
          <p className="font-semibold text-[#282828]">
            You stay focused on your customers and your business. We handle the manufacturing and
            the product development side.
          </p>
        </div>
      </div>
    </section>
  );
}
