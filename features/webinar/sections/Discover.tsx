const POINTS = [
  '"We run great ads" is no longer a moat - and what is quietly replacing it in the brands pulling away.',
  "Your factory is no longer just a vendor - and how to spot the ones already preparing to compete with you.",
  "AI marketing parity is closer than your team thinks - and where the new asymmetry actually lives.",
  'Community is not engagement - and why most "communities" in fashion and beauty would die without paid traffic.',
  "Speed and vertical integration are now defensive assets, not just operational ones.",
  "Most brands will recognize the shift 18 months too late - and what early movers are quietly building right now.",
  "The BYD pattern repeats in every commoditized industry - and what the playbook looks like in apparel, beauty, and accessories.",
  "The next era rewards identity over performance - and what that means for your hiring, your supply, and your P&L.",
];

export default function Discover() {
  return (
    <section className="bg-dark-bg py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="font-space font-bold text-[11px] tracking-[0.2em] uppercase text-neon mb-6">
          WHAT YOU&apos;LL DISCOVER
        </div>
        <h2 className="font-space font-extrabold text-3xl lg:text-5xl text-white leading-[1.1] tracking-[-0.02em] mb-12">
          Eight things most brands will not see coming.
        </h2>
        <ul className="space-y-6">
          {POINTS.map((p, i) => (
            <li
              key={i}
              className="border-l-4 border-neon pl-6 font-inter text-[17px] lg:text-lg leading-[1.6] text-white"
            >
              <span className="text-neon font-semibold">Why </span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
