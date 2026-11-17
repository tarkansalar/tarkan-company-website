import SectionIntro from "../components/SectionIntro";
import { IconTile } from "../components/Icon";

const BENEFITS = [
  "Extra revenue from existing customers",
  "More relevant products for your audience",
  "Control over your product offering",
  "Your own supplement brand, if you want one",
  "Competitive manufacturing access",
  "Less time researching and negotiating",
];

export default function Benefits() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16 items-start">
        <div>
          <SectionIntro eyebrow="The benefit" title="Built around customers you already have." />
          <p className="mt-5 text-[17px] leading-[1.7] text-[#282828]/80">
            Stronger relationships. Never selling people things they don’t need.
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-3">
          {BENEFITS.map((b) => (
            <li
              key={b}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-[#282828]/8 text-[16px] leading-[1.45] text-[#282828]"
            >
              <IconTile name="check" size="sm" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
