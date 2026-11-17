import SectionIntro from "../components/SectionIntro";
import { IconTile, type IconName } from "../components/Icon";

const STEPS: { icon: IconName; title: string; body: string }[] = [
  { icon: "handshake", title: "We negotiate", body: "Direct manufacturer relationships and pooled purchasing volumes." },
  { icon: "package", title: "You get access", body: "Quality products at competitive, agreed supply prices." },
  { icon: "wallet", title: "We earn the difference", body: "Our compensation comes from the purchasing arrangement." },
];

export default function HowWeMakeMoney() {
  return (
    <section id="model" className="py-16 lg:py-24 bg-[#fdf7fa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionIntro eyebrow="Radical transparency" title="How we make money" />
        <p className="mt-5 max-w-2xl text-[17px] leading-[1.7] text-[#282828]/80">
          We don’t charge for consulting, sourcing, product selection, factory introductions or
          branding guidance.
        </p>
        <ol className="mt-10 grid md:grid-cols-3 gap-4 lg:gap-6">
          {STEPS.map((s, i) => (
            <li key={s.title} className="rounded-3xl bg-white p-7 lg:p-8 ring-1 ring-[#282828]/6 cg-card-shadow">
              <div className="flex items-center justify-between">
                <IconTile name={s.icon} />
                <span aria-hidden="true" className="text-4xl font-extrabold leading-none text-[#fb6ba8]/80">
                  {`0${i + 1}`}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#282828]">{s.title}</h3>
              <p className="mt-2 text-[16px] leading-[1.6] text-[#282828]/75">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
