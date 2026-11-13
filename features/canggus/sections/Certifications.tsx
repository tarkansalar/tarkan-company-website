import Image from "next/image";
import SectionIntro from "../components/SectionIntro";
import StandardsGrid from "../components/StandardsGrid";
import CertificateCard from "../components/CertificateCard";
import Icon from "../components/Icon";
import { Blob } from "../components/Visuals";
import { CANGGUS_ASSET_BASE } from "../data/catalog";
import { STANDARDS, VERIFIED_CERTIFICATE as CERT } from "../data/certifications";
import { PH } from "../data/visuals";
import CertificateGallery from "../components/CertificateGallery";
import { certificateStatus } from "../data/certificate-status";

// "Certifications & Standards": every certification/standard listed per
// partner facility in manifest.certifications[]. These belong to the partner
// factories, not to Canggus, and the copy says so. Only FSSC 22000 at
// Facility A is backed by a current document (marked "verified").
// Below the lab photos: a gallery of EVERY certificate scan in the manifest
// (labelled "Valid until" or "Expired" per document), then the grid of real
// logo badges per standard with Facility A/B/C chips (manifest v3 badges[]).
//
// Layout (Tuan 13 Nov): the FSSC 22000 scan sits at the TOP, level with the
// section title (right column on desktop, directly below the title on
// mobile), so the certificate is visible as soon as the section opens.
// The lab photo strip and the badge grid follow below.
export default function Certifications() {
  const total = STANDARDS.length;
  const certStatus = certificateStatus(CERT.valid_until);
  return (
    <section
      id="standards"
      aria-labelledby="standards-title"
      className="scroll-mt-20 relative overflow-hidden py-20 lg:py-32 bg-white"
    >
      <Blob className="-top-40 -right-40 h-[480px] w-[480px]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-x-16 gap-y-10 items-center">
          <div id="standards-title" className="lg:col-start-1 lg:row-start-1 lg:self-end">
            <SectionIntro
              eyebrow="Certifications & standards"
              title="Standards held across our partner manufacturing facilities."
            />
          </div>

          {/* The one standard backed by a current certificate document */}
          <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 flex justify-center pt-3">
            <div className="w-[230px] min-[400px]:w-[250px] sm:w-[280px] lg:w-[320px]">
              <CertificateCard
                src={`${CANGGUS_ASSET_BASE}${CERT.file}`}
                alt={`${CERT.label} certificate of conformity (${CERT.facility})`}
                w={954}
                h={1428}
                status={certStatus}
              />
            </div>
          </div>

          <div className="lg:col-start-1 lg:row-start-2 lg:self-start">
            <p className="text-[17px] sm:text-lg leading-[1.7] text-[#282828]/80">
              {total} standards, each listed by at least one of our partner facilities (A, B or C) in
              its own catalog. They are held by the factories, not by Canggus.
            </p>
            <div className="mt-8 rounded-[28px] bg-[linear-gradient(140deg,#fff7fb,#fdeaf3)] p-6 sm:p-8 ring-1 ring-[#fb6ba8]/15 cg-card-shadow">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#e0558f]">
                <Icon name="badgeCheck" className="h-4 w-4" />
                Verified document
              </p>
              <p className="mt-3 text-[22px] sm:text-2xl font-bold tracking-[-0.01em] text-[#282828]">
                {CERT.label}, {CERT.facility}
              </p>
              <ul className="mt-5 flex flex-wrap gap-3 text-[15px]">
                <li className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-[#fb6ba8]/15">
                  <Icon name="shieldCheck" className="h-4 w-4 text-[#fb6ba8]" />
                  {CERT.scheme}
                </li>
                <li className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-[#fb6ba8]/15">
                  <Icon name="clock" className="h-4 w-4 text-[#fb6ba8]" />
                  {certStatus.label}
                </li>
              </ul>
              <p className="mt-5 text-sm leading-[1.6] text-[#282828]/70">
                Issued by {CERT.issuer}. The other standards are shown as listed by each facility.
              </p>
            </div>
          </div>
        </div>

        {/* Lab, QC and production photos from the partner facilities */}
        <ul className="mt-14 lg:mt-16 grid grid-cols-3 gap-3 sm:gap-5">
          {[PH.qcLab, PH.cleanroomLab, PH.labTubes].map((ph, i) => (
            <li
              key={ph.src}
              className={`rounded-[18px] bg-white p-1.5 sm:p-2 ring-1 ring-[#282828]/5 cg-card-shadow ${
                i === 0 ? "-rotate-[1.5deg]" : i === 2 ? "rotate-[1.5deg]" : "lg:-translate-y-3"
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[13px] bg-[#fdf0f6]">
                <Image
                  src={`${CANGGUS_ASSET_BASE}${ph.src}`}
                  alt={ph.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1280px) 390px, 30vw"
                  className="object-cover"
                />
              </div>
            </li>
          ))}
        </ul>

        {/* Every certificate scan (valid and expired, honestly labelled), above the logo grid */}
        <CertificateGallery />

        <h3 className="mt-14 lg:mt-16 text-xs font-semibold uppercase tracking-[0.22em] text-[#e0558f]">
          Logos as shown in each facility&apos;s catalog
        </h3>
        <StandardsGrid />
      </div>
    </section>
  );
}
