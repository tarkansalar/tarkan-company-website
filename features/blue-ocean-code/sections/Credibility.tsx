import CaseStudyBlock, {
  STREETWEAR,
} from "../components/CaseStudyBlock";
import { HERO_IMG } from "../data/images";

const STATS: Array<[string, string]> = [
  ["Louis Vuitton · Zara · Diesel", "Companies I've worked with"],
  ["50M+", "Products produced"],
  ["2", "World-first inventions"],
  ["Multiple", "Eight-figure businesses"],
  ["Own factory", "Operated, not outsourced"],
];

export default function Credibility() {
  return (
    <section className="bg-dark-bg py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-bold text-3xl lg:text-4xl text-white mb-12 leading-[1.2]">
          Built on 30 years in consumer goods.
        </h2>

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {STATS.map(([value, label]) => (
            <div
              key={label}
              className="bg-card-bg border-l-4 border-neon p-6"
            >
              <div className="font-space font-extrabold text-2xl text-neon leading-[1.2]">
                {value}
              </div>
              <div className="font-inter text-sm text-supporting mt-2">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/*
          Proof slot 1 (copy: "[REAL CLIENT TESTIMONIAL - one line, specific
          result]"). Filled with the streetwear case study. If a real one-line
          client quote arrives, it can sit above this block.
        */}
        <div className="pt-4">
          <CaseStudyBlock study={STREETWEAR} />
        </div>
      </div>
    </section>
  );
}
