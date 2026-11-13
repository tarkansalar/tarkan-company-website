import { IconTile, type IconName } from "../components/Icon";
import { PhotoStack } from "../components/Visuals";
import { PH } from "../data/visuals";

const ITEMS: { icon: IconName; text: string }[] = [
  { icon: "award", text: "30+ years experience" },
  { icon: "factory", text: "15+ years manufacturing in China" },
  { icon: "package", text: "50M+ products" },
  { icon: "globe", text: "Worked with major international brands" },
];

export default function TrustStrip() {
  return (
    <section aria-label="Experience" className="relative border-y border-[#282828]/10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-14 items-center">
        <ul className="grid grid-cols-1 min-[440px]:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-6">
          {ITEMS.map((t) => (
            <li
              key={t.text}
              className="flex items-center gap-3 text-sm sm:text-[15px] font-semibold leading-[1.4] text-[#282828]"
            >
              <IconTile name={t.icon} />
              <span className="min-w-0">{t.text}</span>
            </li>
          ))}
        </ul>
        {/* Real partner-factory photos (manifest canggus/factory/) */}
        <PhotoStack
          photos={[PH.showroom, PH.bottleLine, PH.warehouse]}
          sizes="(min-width: 1024px) 250px, 72vw"
          className="mx-auto aspect-[16/11] w-full max-w-[340px] lg:max-w-none"
        />
      </div>
    </section>
  );
}
