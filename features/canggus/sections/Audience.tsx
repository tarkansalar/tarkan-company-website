import SectionIntro from "../components/SectionIntro";
import { IconTile, type IconName } from "../components/Icon";
import { Blob, FloatingProducts } from "../components/Visuals";
import { VP } from "../data/visuals";

// Revised target audience (revisi-instruksi.md): Fitness Coaches removed.
const AUDIENCE: { icon: IconName; text: string }[] = [
  { icon: "dumbbell", text: "Gyms and fitness clubs" },
  { icon: "leaf", text: "Health and wellness brands" },
  { icon: "hourglass", text: "Longevity clinics" },
  { icon: "stethoscope", text: "Wellness clinics" },
  { icon: "waves", text: "Spas and wellness resorts" },
  { icon: "pill", text: "Established supplement and nutrition businesses" },
  { icon: "network", text: "Fitness and wellness franchises" },
];

export default function Audience() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-[#fdf7fa]">
      <Blob className="-left-48 top-1/3 h-[480px] w-[480px]" />
      {/* Layout (Tuan 13 Nov, "no empty space"): title left, cards right with
          the product composition as a short band under the cards, both columns
          centred, so neither column ends far above the other at >= lg. The
          7th card spans both card columns (no orphan). Phones/tablets stack:
          title, cards, products. */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 xl:gap-20 items-center">
        <SectionIntro
          eyebrow="Who it’s for"
          title="For established health, fitness and wellness businesses that already have customers and want to develop their own supplement brand."
        />
        <div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {AUDIENCE.map((a, i) => (
              <li
                key={a.text}
                className={`flex items-center gap-4 rounded-2xl bg-white/85 px-5 py-4 text-[15px] font-medium leading-[1.4] text-[#282828] ring-1 ring-white shadow-[0_1px_2px_rgba(40,40,40,0.05),0_16px_32px_-20px_rgba(40,40,40,0.32)] ${
                  i === AUDIENCE.length - 1 && AUDIENCE.length % 2 ? "sm:col-span-2" : ""
                }`}
              >
                <IconTile name={a.icon} />
                <span className="min-w-0">{a.text}</span>
              </li>
            ))}
          </ul>
          {/* Real catalog products (gym, wellness and clinic categories), a low
              wide band instead of the tall 5:4 composition */}
          <FloatingProducts
            disc={false}
            sizes="(min-width: 1024px) 120px, 22vw"
            className="mt-8 mx-auto aspect-[5/2] w-full max-w-[520px]"
            items={[
              { p: VP.creatinePowder, pos: "left-[10%] bottom-[8%] w-[20%]", d: 0.4, r: -5, z: 2 },
              { p: VP.ashwagandha, pos: "left-[29%] bottom-[14%] w-[16%]", d: 1.6, r: 2, z: 1 },
              { p: VP.collagenDrops, pos: "left-[46%] bottom-[6%] w-[9%]", d: 2.4, r: -2, z: 3 },
              { p: VP.omega, pos: "right-[14%] bottom-[9%] w-[19%]", d: 0.9, r: 5, z: 2 },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
