export default function FinalPromise() {
  const items = [
    "If I see a leak, I will tell you.",
    "If I see tool waste, I will tell you.",
    "If I think your AI stack is nonsense, I will tell you.",
    "If I think you should ignore 90% of what people are saying about AI, I will tell you.",
    "And if I do not see a clear opportunity, I will tell you that too.",
  ];

  return (
    <section className="py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <p className="font-space font-bold text-xl text-neon tracking-[0.02em] mb-6">
          Final promise.
        </p>

        <h2 className="font-space font-bold text-3xl lg:text-4xl mb-10 leading-[1.2] text-white">
          My promise is simple.
        </h2>

        <p className="font-space font-bold text-2xl text-neon mb-8 leading-[1.3]">
          I will not waste your time.
        </p>

        <ul className="space-y-4 pl-0 mb-8">
          {items.map((item) => (
            <li
              key={item}
              className="border-l-4 border-neon pl-6 font-inter text-[17px] text-white leading-[1.6]"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="font-space font-bold text-xl text-white mt-8 leading-[1.3]">
          That is what an operator does.
        </p>
      </div>
    </section>
  );
}
