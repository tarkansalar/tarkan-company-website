import SectionIntro from "../components/SectionIntro";

const MODULES = [
  { title: "Existing products", body: "Start with products your customers already use." },
  { title: "Your own brand", body: "Develop your private-label line." },
  { title: "Expand", body: "Add complementary products and formulations." },
  { title: "Grow", body: "Scale as demand and volumes increase." },
];

export default function StartSmall() {
  return (
    <section className="py-16 lg:py-24 bg-[#fdf7fa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionIntro eyebrow="Start small" title="Start with one product. Grow from there." />
        <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MODULES.map((m, i) => (
            <li key={m.title} className="rounded-3xl bg-white p-6 lg:p-7 ring-1 ring-[#282828]/6 cg-card-shadow">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fb6ba8]">{`Module ${i + 1}`}</p>
              <h3 className="mt-3 text-lg font-bold text-[#282828]">{m.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-[#282828]/75">{m.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-[17px] font-semibold text-[#282828]">No obligation to develop an entire range.</p>
      </div>
    </section>
  );
}
