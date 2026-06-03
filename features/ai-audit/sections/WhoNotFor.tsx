export default function WhoNotFor() {
  const items = [
    "Early-stage brands with no real revenue yet",
    "People who want to debate AI model architecture",
    "Agencies trying to white-label this",
    "Founders looking for magic automation",
    "Teams who want another dashboard but no decision",
    "People who think AI can fix a bad product",
    "Anyone who wants theory instead of direct feedback",
  ];

  return (
    <section className="py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <p className="font-space font-bold text-xl text-neon tracking-[0.02em] mb-6">
          Who this is not for.
        </p>

        <h2 className="font-space font-bold text-3xl lg:text-4xl mb-10 leading-[1.2] text-white">
          This is not for:
        </h2>

        <ul className="space-y-4 pl-0">
          {items.map((item) => (
            <li
              key={item}
              className="border-l-4 border-supporting/40 pl-6 font-inter text-[17px] text-supporting leading-[1.6]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
