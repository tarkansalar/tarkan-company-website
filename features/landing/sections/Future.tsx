const OUTCOMES = ["Less inventory", "Better cash flow", "Clear priorities"];

export default function Future() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-bold text-4xl lg:text-5xl mb-12 leading-[1.2]">
          90 days from now:
        </h2>
        <div className="space-y-6 mb-6">
          {OUTCOMES.map((o) => (
            <div
              key={o}
              className="border-l-4 border-neon pl-6 font-space font-bold text-2xl lg:text-3xl text-white"
            >
              {o}
            </div>
          ))}
        </div>
        <p className="font-space font-bold text-2xl lg:text-3xl text-white pt-6">
          No guessing
        </p>
      </div>
    </section>
  );
}
