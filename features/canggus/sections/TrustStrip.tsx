import { IconTile, type IconName } from "../components/Icon";

const ITEMS: { icon: IconName; text: string }[] = [
  { icon: "award", text: "30+ years experience" },
  { icon: "factory", text: "15+ years manufacturing in China" },
  { icon: "package", text: "50M+ products" },
  { icon: "globe", text: "Worked with major international brands" },
];

export default function TrustStrip() {
  return (
    <section aria-label="Experience" className="border-y border-[#282828]/10 bg-white">
      <ul className="max-w-7xl mx-auto px-6 lg:px-12 py-8 grid grid-cols-1 min-[360px]:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6">
        {ITEMS.map((t) => (
          <li
            key={t.text}
            className="flex items-center gap-3 text-sm sm:text-[15px] font-semibold leading-[1.4] text-[#282828]"
          >
            <IconTile name={t.icon} />
            {t.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
