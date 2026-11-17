import Image from "next/image";
import SectionIntro from "../components/SectionIntro";
import Icon from "../components/Icon";
import CertificateCard from "../components/CertificateCard";
import { BADGE_LOGOS, CERTIFICATE_SCANS } from "../data/badges";
import { CANGGUS_ASSET_BASE } from "../data/catalog-meta";
import { BADGE_ROW, FACILITY_PHOTOS, PRODUCTION_PHOTOS, type VisualPhoto } from "../data/visuals";

// Tarkan 17 Nov ("make it like our original landing page, just change the
// text"): the visuals of the long version come back (backup/canggus-long-v1),
// the text stays short. Facility photos anonymised as Facility A/B/C, powder
// and capsule production photos only (no gummy line, no gummies), every
// certificate scan (redacted, no Valid/Expired label) and the existing badge
// row. Static cards: no tilt, no float, no scroll animation.

const BADGE_NAMES: Record<string, string> = {
  haccp: "HACCP",
  gmp: "GMP",
  cgmp: "cGMP",
  iso22000: "ISO 22000",
  iso9001: "ISO 9001",
  halal: "Halal",
};

function PhotoCard({ p, sizes, aspect }: { p: VisualPhoto; sizes: string; aspect: string }) {
  return (
    <figure className={`relative overflow-hidden rounded-3xl bg-[#fdf0f6] ring-1 ring-[#282828]/6 cg-card-shadow ${aspect}`}>
      <Image src={p.src} alt={p.alt} fill loading="lazy" sizes={sizes} className="object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
      <figcaption
        aria-hidden="true"
        className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 inline-flex max-w-[calc(100%-1rem)] items-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-full bg-white/92 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[12px] sm:text-sm font-semibold text-[#282828]"
      >
        <Icon name="factory" className="hidden sm:block h-4 w-4 text-[#fb6ba8]" />
        {p.caption}
      </figcaption>
    </figure>
  );
}

export default function ManufacturingNetwork() {
  const badges = BADGE_ROW.map(([id, f]) => ({ id, logo: BADGE_LOGOS[id]?.[f] })).filter((b) => b.logo);
  return (
    <section id="manufacturing" className="py-16 lg:py-24 bg-[#fdf7fa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionIntro eyebrow="Our manufacturing network" title="Carefully selected, quality-focused factories." />
        <p className="mt-5 max-w-2xl text-[17px] leading-[1.7] text-[#282828]/80">
          Three partner facilities, shown without names.
        </p>

        {/* Facilities A/B/C */}
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {FACILITY_PHOTOS.map((p, i) => (
            <li key={p.src} className={i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <PhotoCard
                p={p}
                aspect={i === 2 ? "aspect-[16/10] sm:aspect-[21/9] lg:aspect-[16/10]" : "aspect-[16/10]"}
                sizes={i === 2 ? "(min-width: 1024px) 400px, (min-width: 640px) 90vw, 100vw" : "(min-width: 1024px) 400px, (min-width: 640px) 45vw, 100vw"}
              />
            </li>
          ))}
        </ul>

        {/* Powder and capsule production */}
        <ul className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:mt-6 lg:gap-6">
          {PRODUCTION_PHOTOS.map((p) => (
            <li key={p.src}>
              <PhotoCard p={p} aspect="aspect-[4/3]" sizes="(min-width: 1024px) 300px, 45vw" />
            </li>
          ))}
        </ul>

        {/* Certificate scans (redacted), tap to enlarge */}
        <h3 className="mt-14 text-lg sm:text-xl font-bold text-[#282828]">Certificate scans</h3>
        <ul className="-mx-6 mt-6 flex snap-x snap-mandatory scroll-px-6 gap-5 overflow-x-auto px-6 pt-2 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:snap-none sm:grid-cols-4 sm:overflow-visible sm:px-0 lg:grid-cols-7 sm:gap-6">
          {CERTIFICATE_SCANS.map((c) => (
            <li key={c.id} className="w-[40vw] max-w-[170px] shrink-0 snap-start sm:w-auto sm:max-w-none">
              <CertificateCard
                src={`${CANGGUS_ASSET_BASE}${c.sm.src}`}
                w={c.sm.w}
                h={c.sm.h}
                fullSrc={`${CANGGUS_ASSET_BASE}${c.lg.src}`}
                fullW={c.lg.w}
                fullH={c.lg.h}
                alt={`${c.label} certificate scan, ${c.facility}`}
                sizes="(min-width: 1024px) 150px, (min-width: 640px) 22vw, 40vw"
              />
              <p className="mt-4 text-[14px] font-semibold leading-[1.3] text-[#282828]">{c.label}</p>
            </li>
          ))}
        </ul>

        {/* Partner facility standard logos, no text (card t_7322a56f). */}
        <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          {badges.map(({ id, logo }) => (
            <li key={id}>
              <Image
                src={`${CANGGUS_ASSET_BASE}${logo!.src}`}
                alt={`Partner facility standard: ${BADGE_NAMES[id] ?? id}`}
                width={logo!.w}
                height={logo!.h}
                loading="lazy"
                sizes="56px"
                className="h-11 w-auto sm:h-14 object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
