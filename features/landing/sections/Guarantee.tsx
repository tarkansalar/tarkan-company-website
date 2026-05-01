export default function Guarantee() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-bold text-4xl lg:text-5xl text-white mb-12 leading-[1.2]">
          Find $25,000 - or pay nothing.
        </h2>
        <div className="font-inter text-[17px] leading-[1.6] space-y-6">
          <p>If 80/20 Profit AI does not identify at least $25K in:</p>
          <ul className="space-y-3">
            {["Margin", "Cash", "Inventory"].map((t) => (
              <li
                key={t}
                className="border-l-4 border-neon pl-6 font-space font-bold text-xl text-white"
              >
                {t}
              </li>
            ))}
          </ul>
          <p className="pt-4">You get a full refund.</p>
          <p className="font-space font-bold text-2xl text-white">No friction.</p>
        </div>
      </div>
    </section>
  );
}
