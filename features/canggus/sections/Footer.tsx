import Image from "next/image";
import Link from "next/link";
import { CANGGUS_LOGO_SRC } from "../data/assets";

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-white/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
        <Image
          src={CANGGUS_LOGO_SRC}
          alt="Canggus Community"
          width={1024}
          height={243}
          sizes="135px"
          className="h-8 w-auto"
        />
        <nav className="flex gap-6 text-sm">
          <Link
            href="/privacy"
            className="transition-colors hover:text-[#fb6ba8] focus-visible:outline-2 focus-visible:outline-[#fb6ba8]"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="transition-colors hover:text-[#fb6ba8] focus-visible:outline-2 focus-visible:outline-[#fb6ba8]"
          >
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
