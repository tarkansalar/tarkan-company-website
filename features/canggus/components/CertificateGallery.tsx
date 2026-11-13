import CertificateCard from "./CertificateCard";
import { CANGGUS_ASSET_BASE } from "../data/catalog-meta";
import { CERTIFICATE_SCANS } from "../data/badges";
import { certificateStatus } from "../data/certificate-status";

// Every uploaded certificate scan (manifest certificates[], redacted) as a
// small 3D document card: standard and facility only. No validity dates or
// expired labels (Tuan 13 Nov); a document that is still valid keeps the
// small "Verified" mark. Thumbnails are the -sm.webp (about 315 px wide); the
// lightbox loads -lg.webp on open. Horizontal scroll-snap row on phones,
// grid from sm up.
export default function CertificateGallery() {
  return (
    <div className="mt-14 lg:mt-16">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
        <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e0558f]">
          Certificate scans from partner catalogs
        </h3>
        <p className="text-sm text-[#282828]/70">{CERTIFICATE_SCANS.length} documents. Tap to enlarge.</p>
      </div>
      <ul className="-mx-6 mt-6 flex snap-x snap-mandatory scroll-px-6 gap-5 overflow-x-auto px-6 pt-4 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:snap-none sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-4 xl:grid-cols-7 sm:gap-6">
        {CERTIFICATE_SCANS.map((c) => (
          <li key={c.id} className="w-[44vw] max-w-[180px] shrink-0 snap-start sm:w-auto sm:max-w-none">
            <CertificateCard
              size="sm"
              src={`${CANGGUS_ASSET_BASE}${c.sm.src}`}
              w={c.sm.w}
              h={c.sm.h}
              fullSrc={`${CANGGUS_ASSET_BASE}${c.lg.src}`}
              fullW={c.lg.w}
              fullH={c.lg.h}
              alt={`${c.label} certificate scan, ${c.facility}`}
              verified={certificateStatus(c.validUntil).valid}
              sizes="(min-width: 1280px) 150px, (min-width: 640px) 25vw, 44vw"
            />
            <p className="mt-4 text-[15px] font-bold leading-[1.3] text-[#282828]">{c.label}</p>
            <p className="mt-1 text-[13px] text-[#282828]/70">{c.facility}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
