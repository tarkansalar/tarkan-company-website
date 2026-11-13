import SectionIntro from "../components/SectionIntro";
import { IconTile, type IconName } from "../components/Icon";

const STEPS: { num: string; icon: IconName; title: string; body: string }[] = [
  {
    num: "01",
    icon: "search",
    title: "Choose the right products",
    body: "We look at your business, your customers, and whether real differentiation is possible in that category.",
  },
  {
    num: "02",
    icon: "flask",
    title: "Develop and manufacture",
    body: "We coordinate formulation, packaging, branding and production - with the goal of creating products that feel proprietary, not generic.",
  },
  {
    num: "03",
    icon: "rocket",
    title: "Launch and grow",
    body: "Your products arrive under your brand, ready for your customers. Start with a realistic first order and expand from there.",
  },
];

export default function Plan() {
  return (
    <section className="py-20 lg:py-32 bg-[#fdf7fa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionIntro eyebrow="The plan" title="Three steps." />
        <ol className="mt-12 grid md:grid-cols-3 gap-5">
          {STEPS.map((s) => (
            <li
              key={s.num}
              className="rounded-3xl bg-white p-8 lg:p-10 shadow-[0_20px_50px_-35px_rgba(40,40,40,0.4)]"
            >
              <div className="flex items-center justify-between">
                <IconTile name={s.icon} size="lg" />
                <span className="text-5xl font-extrabold text-[#fb6ba8]/90 leading-none tracking-[-0.03em]">
                  {s.num}
                </span>
              </div>
              <h3 className="mt-6 text-xl lg:text-2xl font-bold leading-[1.25] text-[#282828]">{s.title}</h3>
              <p className="mt-4 text-[16px] leading-[1.65] text-[#282828]/75">{s.body}</p>
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
