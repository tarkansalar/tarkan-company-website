import SectionIntro from "../components/SectionIntro";

// Revised target audience (revisi-instruksi.md): Fitness Coaches removed.
const AUDIENCE = [
  "Gyms and fitness clubs",
  "Health and wellness brands",
  "Longevity clinics",
  "Wellness clinics",
  "Spas and wellness resorts",
  "Established supplement and nutrition businesses",
  "Fitness and wellness franchises",
];

export default function Audience() {
  return (
    <section className="py-20 lg:py-28 bg-[#fdf7fa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <SectionIntro
          eyebrow="Who it’s for"
          title="For established health, fitness and wellness businesses that already have customers and want to develop their own supplement brand."
        />
        <ul className="grid sm:grid-cols-2 gap-3">
          {AUDIENCE.map((a) => (
            <li
              key={a}
              className="rounded-2xl bg-white px-5 py-4 text-[15px] font-medium leading-[1.4] text-[#282828] shadow-[0_8px_24px_-16px_rgba(40,40,40,0.25)]"
            >
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
