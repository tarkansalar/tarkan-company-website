const CRITERIA = [
  "$3M+ brands",
  "DTC or omnichannel",
  "Paid acquisition",
  "Inventory complexity",
];

export default function WhoFor() {
  return (
    <section className="bg-dark-bg py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="font-space font-bold text-[11px] tracking-[0.12em] uppercase text-neon mb-8">
          WHO THIS IS FOR
        </div>
        <ul className="space-y-4 mb-10">
          {CRITERIA.map((t) => (
            <li
              key={t}
              className="border-l-4 border-neon pl-6 font-space font-bold text-2xl text-white"
            >
              {t}
            </li>
          ))}
        </ul>
        <p className="font-inter text-lg text-supporting italic">
          Not for early-stage brands
        </p>
      </div>
    </section>
  );
}
