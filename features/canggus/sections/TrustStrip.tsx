const ITEMS = [
  "30+ years experience",
  "15+ years manufacturing in China",
  "50M+ products",
  "Worked with major international brands",
];

export default function TrustStrip() {
  return (
    <section aria-label="Experience" className="border-y border-[#282828]/10 bg-white">
      <ul className="max-w-7xl mx-auto px-6 lg:px-12 py-8 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
        {ITEMS.map((t) => (
          <li
            key={t}
            className="flex items-start gap-3 text-sm sm:text-[15px] font-semibold leading-[1.4] text-[#282828]"
          >
            <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#fb6ba8]" />
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
}
