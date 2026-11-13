import SectionIntro from "../components/SectionIntro";
import StandardsGrid from "../components/StandardsGrid";
import CertificateCard from "../components/CertificateCard";
import Icon from "../components/Icon";
import { Blob, PhotoStack } from "../components/Visuals";
import { CANGGUS_ASSET_BASE } from "../data/catalog";
import { STANDARDS, VERIFIED_CERTIFICATE as CERT } from "../data/certifications";
import { PH } from "../data/visuals";

// "Certifications & Standards": every certification/standard listed per
// partner facility in manifest.certifications[]. These belong to the partner
// factories, not to Canggus, and the copy says so. Only FSSC 22000 at
// Facility A is backed by a current document (marked "verified"); it is the
// only scan shown. No third-party logos, no expired scans.
export default function Certifications() {
  const total = STANDARDS.length;
  return (
    <section
      id="standards"
      aria-labelledby="standards-title"
      className="scroll-mt-20 relative overflow-hidden py-20 lg:py-32 bg-white"
    >
      <Blob className="-top-40 -right-40 h-[480px] w-[480px]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          <div>
            <div id="standards-title">
              <SectionIntro
                eyebrow="Certifications & standards"
                title="Standards held across our partner manufacturing facilities."
              />
            </div>
            <p className="mt-8 text-[17px] sm:text-lg leading-[1.7] text-[#282828]/80">
              {total} standards, each listed by at least one of our partner facilities (A, B or C) in
              its own catalog. They are held by the factories, not by Canggus.
            </p>
          </div>
          {/* Lab, QC and production photos from the partner facilities */}
          <PhotoStack
            photos={[PH.qcLab, PH.cleanroomLab, PH.labTubes]}
            sizes="(min-width: 1024px) 380px, 75vw"
            className="mx-auto aspect-[16/12] w-full max-w-[480px]"
          />
        </div>

        <StandardsGrid />

        {/* The one standard backed by a current certificate document */}
        <div
          data-reveal=""
          className="mt-16 grid md:grid-cols-[minmax(0,300px)_1fr] gap-12 md:gap-12 lg:gap-16 items-center rounded-[32px] bg-[linear-gradient(140deg,#fff7fb,#fdeaf3)] p-8 pt-12 sm:p-10 sm:pt-14 lg:p-14 ring-1 ring-[#fb6ba8]/15 cg-card-shadow"
        >
          <div className="mx-auto w-[220px] sm:w-[260px] md:w-full">
            <CertificateCard
              src={`${CANGGUS_ASSET_BASE}${CERT.file}`}
              alt={`${CERT.label} certificate of conformity (${CERT.facility})`}
              w={954}
              h={1428}
            />
          </div>
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#e0558f]">
              <Icon name="badgeCheck" className="h-4 w-4" />
              Verified document
            </p>
            <p className="mt-3 text-[22px] sm:text-2xl lg:text-3xl font-bold tracking-[-0.01em] text-[#282828]">
              {CERT.label}, {CERT.facility}
            </p>
            <ul className="mt-5 flex flex-wrap gap-3 text-[15px]">
              <li className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-[#fb6ba8]/15">
                <Icon name="shieldCheck" className="h-4 w-4 text-[#fb6ba8]" />
                {CERT.scheme}
              </li>
              <li className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-[#fb6ba8]/15">
                <Icon name="clock" className="h-4 w-4 text-[#fb6ba8]" />
                Valid until 27 Aug 2027
              </li>
            </ul>
            <p className="mt-5 text-sm leading-[1.6] text-[#282828]/70">
              Issued by {CERT.issuer}. The other standards are shown as listed by each facility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
