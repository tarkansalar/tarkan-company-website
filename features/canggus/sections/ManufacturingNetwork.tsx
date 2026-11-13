import Image from "next/image";
import SectionIntro from "../components/SectionIntro";
import Icon, { IconTile } from "../components/Icon";
import { CANGGUS_ASSET_BASE, CERTIFICATE } from "../data/catalog";
import { FACILITIES, NETWORK_STATS, PRODUCTION_GALLERY } from "../data/network";

// "Our manufacturing network": several factories, anonymised as Facility A/B/C.
// Data: features/canggus/data/network.ts (sourced from canggus/manifest.json).
// Only the copy line "direct access to carefully selected, quality-focused
// factories" comes from copy-lp.md; everything else is manifest data.
export default function ManufacturingNetwork() {
  return (
    <section
      id="manufacturing"
      aria-labelledby="manufacturing-title"
      className="relative overflow-hidden py-20 lg:py-32 bg-[#1f1f1f] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 -left-40 h-[520px] w-[520px] rounded-full bg-[#fb6ba8]/15 blur-3xl"
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          <div id="manufacturing-title">
            <SectionIntro invert eyebrow="Our manufacturing network" title="Carefully selected, quality-focused factories." />
          </div>
          <p className="text-[17px] sm:text-lg leading-[1.7] text-white/70">
            Direct access to carefully selected, quality-focused factories. Three of the facilities
            we work with:
          </p>
        </div>

        {/* Combined figures */}
        <dl className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-3xl bg-white/10 ring-1 ring-white/10">
          {NETWORK_STATS.map((s) => (
            <div key={s.label} className="bg-[#1f1f1f] p-6 sm:p-8">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-[#fb6ba8]">
                  {s.value}
                </span>
                <span className="mt-2 block text-sm sm:text-[15px] font-semibold text-white">{s.label}</span>
                <span className="mt-1 block text-xs text-white/65">{s.source}</span>
              </dd>
            </div>
          ))}
        </dl>

        {/* One card per facility */}
        <ul className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FACILITIES.map((f) => (
            <li
              key={f.id}
              className="flex flex-col overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.8)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={`${CANGGUS_ASSET_BASE}${f.photo.src}`}
                  alt={f.photo.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute bottom-4 left-5 inline-flex items-center gap-2 rounded-full bg-black/55 px-3.5 py-1.5 text-sm font-bold tracking-[0.02em] backdrop-blur-sm">
                  <Icon name="factory" className="h-4 w-4 text-[#fb6ba8]" />
                  {f.label}
                </span>
              </div>
              <ul className="flex-1 space-y-3.5 p-6 sm:p-7">
                {f.facts.map((x) => (
                  <li key={x.text} className="flex items-start gap-3 text-[15px] leading-[1.5] text-white/85">
                    <IconTile name={x.icon} size="sm" dark className="mt-0.5" />
                    {x.text}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Production & lab gallery */}
        <div className="mt-16">
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#fb6ba8]">
            Production &amp; laboratories
          </h3>
          <ul className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {PRODUCTION_GALLERY.map((g) => (
              <li key={g.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl group">
                {/* Caption below is the visible label; alt stays empty to avoid reading it twice. */}
                <Image
                  src={`${CANGGUS_ASSET_BASE}${g.src}`}
                  alt=""
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 380px, 50vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-xs sm:text-sm font-semibold">
                  {g.caption}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Certificate strip: only certificates with a current document */}
        <div className="mt-16 grid lg:grid-cols-[auto_1fr] gap-6 lg:gap-10 items-center rounded-3xl bg-white text-[#282828] p-6 sm:p-8 lg:p-10">
          <div className="relative mx-auto lg:mx-0 h-44 w-[124px] sm:h-52 sm:w-[146px] overflow-hidden rounded-xl ring-1 ring-[#282828]/10 shadow-[0_20px_40px_-24px_rgba(40,40,40,0.5)] rotate-[-2deg]">
            <Image
              src={`${CANGGUS_ASSET_BASE}${CERTIFICATE.file}`}
              alt="FSSC 22000 certificate of conformity (Facility A)"
              fill
              loading="lazy"
              sizes="150px"
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#fb6ba8]">Certification</p>
            <ul className="mt-4 flex flex-wrap gap-3">
              <li className="inline-flex items-center gap-3 rounded-2xl bg-[#fdf7fa] px-4 py-3 ring-1 ring-[#fb6ba8]/15">
                <IconTile name="shieldCheck" />
                <span className="flex flex-col leading-tight">
                  <span className="text-[17px] font-bold">FSSC 22000</span>
                  <span className="text-xs text-[#282828]/70">ISO 22000:2018 + ISO/TS 22002-1</span>
                </span>
              </li>
              <li className="inline-flex items-center gap-3 rounded-2xl bg-[#fdf7fa] px-4 py-3 ring-1 ring-[#fb6ba8]/15">
                <IconTile name="clock" />
                <span className="flex flex-col leading-tight">
                  <span className="text-[17px] font-bold">Valid until 27 Aug 2027</span>
                  <span className="text-xs text-[#282828]/70">Facility A</span>
                </span>
              </li>
            </ul>
            <p className="mt-4 text-sm leading-[1.6] text-[#282828]/70">
              Issued by {CERTIFICATE.issuer}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
