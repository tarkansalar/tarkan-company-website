import Image from "next/image";
import { CANGGUS_LOGO_SRC } from "../data/assets";
import { CANGGUS_BOOKING_HREF, CTA_LABEL } from "../data/content";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <a
          href="#top"
          className="inline-flex items-center rounded transition-opacity hover:opacity-85 active:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fb6ba8]"
        >
          <Image
            src={CANGGUS_LOGO_SRC}
            alt="Canggus Community"
            width={1024}
            height={243}
            priority
            sizes="(min-width: 1024px) 160px, 135px"
            className="h-8 w-auto lg:h-9"
          />
        </a>
        {/* [TUAN ISI link booking] */}
        <a
          href={CANGGUS_BOOKING_HREF}
          className="hidden md:inline-flex rounded-full border border-[#282828]/15 px-5 py-2.5 text-sm font-semibold text-[#282828] transition-colors hover:border-[#fb6ba8] hover:text-[#f466a2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb6ba8]"
        >
          {CTA_LABEL}
        </a>
      </div>
    </header>
  );
}
