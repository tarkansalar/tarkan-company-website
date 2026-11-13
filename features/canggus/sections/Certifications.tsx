import Image from "next/image";
import SectionIntro from "../components/SectionIntro";
import StandardsGrid from "../components/StandardsGrid";
import Icon from "../components/Icon";
import { CANGGUS_ASSET_BASE } from "../data/catalog";
import { STANDARDS, VERIFIED_CERTIFICATE as CERT } from "../data/certifications";

// "Certifications & Standards": every certification/standard listed per
// partner facility in manifest.certifications[]. These belong to the partner
// factories, not to Canggus, and the copy says so. Only FSSC 22000 at
// Facility A is backed by a current document (marked "verified").
export default function Certifications() {
  const total = STANDARDS.length;
  return (
    <section
      id="standards"
      aria-labelledby="standards-title"
      className="scroll-mt-20 relative overflow-hidden py-20 lg:py-32 bg-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-[460px] w-[460px] rounded-full bg-[#fb6ba8]/10 blur-3xl"
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          <div id="standards-title">
            <SectionIntro
              eyebrow="Certifications & standards"
              title="Standards held across our partner manufacturing facilities."
            />
          </div>
          <p className="text-[17px] sm:text-lg leading-[1.7] text-[#282828]/80">
            {total} standards, each listed by at least one of our partner facilities (A, B or C) in
            its own catalog. They are held by the factories, not by Canggus.
          </p>
        </div>

        <StandardsGrid />

        {/* The one standard backed by a current certificate document */}
        <div className="mt-16 grid lg:grid-cols-[auto_1fr] gap-6 lg:gap-10 items-center rounded-3xl bg-[#fdf7fa] p-6 sm:p-8 lg:p-10 ring-1 ring-[#fb6ba8]/15">
          <div className="relative mx-auto lg:mx-0 h-44 w-[124px] sm:h-52 sm:w-[146px] overflow-hidden rounded-xl bg-white ring-1 ring-[#282828]/10 shadow-[0_20px_40px_-24px_rgba(40,40,40,0.5)] rotate-[-2deg]">
            <Image
              src={`${CANGGUS_ASSET_BASE}${CERT.file}`}
              alt={`${CERT.label} certificate of conformity (${CERT.facility})`}
              fill
              loading="lazy"
              sizes="150px"
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#e0558f]">
              <Icon name="badgeCheck" className="h-4 w-4" />
              Verified document
            </p>
            <p className="mt-3 text-[22px] sm:text-2xl font-bold tracking-[-0.01em] text-[#282828]">
              {CERT.label}, {CERT.facility}
            </p>
            <ul className="mt-4 flex flex-wrap gap-3 text-[15px]">
              <li className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-[#fb6ba8]/15">
                <Icon name="shieldCheck" className="h-4 w-4 text-[#fb6ba8]" />
                {CERT.scheme}
              </li>
              <li className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-[#fb6ba8]/15">
                <Icon name="clock" className="h-4 w-4 text-[#fb6ba8]" />
                Valid until 27 Aug 2027
              </li>
            </ul>
            <p className="mt-4 text-sm leading-[1.6] text-[#282828]/70">
              Issued by {CERT.issuer}. The other standards are shown as listed by each facility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
