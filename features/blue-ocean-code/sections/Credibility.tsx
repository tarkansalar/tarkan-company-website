import { HERO_IMG } from "../data/images";

const FACTS = [
  "30 years building and advising consumer brands.",
  "50M+ products produced.",
  "Experience across brands including Louis Vuitton · Zara · Adidas · Diesel",
  "Built and operated 8-figure businesses.",
  "Worked across product, sourcing, manufacturing, retail and DTC.",
];

export default function Credibility() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-bold text-3xl lg:text-4xl text-white mb-3 leading-[1.2]">
          Built on 30 years in consumer goods.
        </h2>
        <p className="font-inter text-[17px] lg:text-lg text-neon mb-12">
          Operated. Not theorized.
        </p>

        <div className="bg-card-bg border-l-4 border-neon overflow-hidden w-full max-w-[360px] mx-auto mb-12">
          <img
            src={HERO_IMG}
            alt="Tarkan Salar"
            className="w-full aspect-[4/5] object-cover"
            style={{ objectPosition: "center 15%" }}
          />
          <div className="border-t border-white/10 bg-white/[0.03] px-5 py-3 text-center">
            <p className="font-inter text-sm text-white font-medium tracking-wide">
              Tarkan Salar
            </p>
          </div>
        </div>

        <ul className="space-y-5 mb-12">
          {FACTS.map((f) => (
            <li
              key={f}
              className="border-l-4 border-neon pl-5 font-inter text-[17px] lg:text-lg leading-[1.6] text-white"
            >
              {f}
            </li>
          ))}
        </ul>

        <div className="font-space font-bold text-2xl lg:text-3xl leading-[1.3]">
          <p className="text-supporting">
            I&apos;m not a consultant who&apos;s studied brands.
          </p>
          <p className="text-white mt-2">
            I&apos;m an operator who&apos;s built them.
          </p>
        </div>
      </div>
    </section>
  );
}
