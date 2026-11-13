"use client";

import Image from "next/image";
import { useMemo, useState, type ReactElement } from "react";
import { STANDARDS, type Standard } from "../data/certifications";
import { CANGGUS_ASSET_BASE } from "../data/catalog-meta";
import { FACILITIES } from "../data/network";
import { BADGE_LOGOS, DEFAULT_BADGE_FACILITY } from "../data/badges";
import Icon from "./Icon";

const FACILITY_IDS = ["A", "B", "C"] as const;
// Facility filter chips show a small photo of that facility (manifest canggus/factory/).
const FACILITY_THUMB: Record<string, { src: string; alt: string }> = Object.fromEntries(
  FACILITIES.map((f) => [f.label.replace("Facility ", ""), { src: f.photo.src, alt: f.photo.alt }]),
);
type FacilityFilter = "All" | (typeof FACILITY_IDS)[number];

const GROUPS = Array.from(new Set(STANDARDS.map((s) => s.group)));

const VerifiedDot = () => (
  <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#282828] text-white ring-4 ring-white">
    <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.5} />
  </span>
);

// Five-pointed star, radius 1, centred on 0,0, one point straight up.
const STAR =
  "M0,-1 L0.2245,-0.309 L0.9511,-0.309 L0.3633,0.118 L0.5878,0.809 L0,0.382 L-0.5878,0.809 L-0.3633,0.118 L-0.9511,-0.309 L-0.2245,-0.309 Z";

// Flag of the People's Republic of China, drawn to the official construction
// sheet: 3:2 field on a 30 x 20 grid, red #EE1C25, yellow #FFFF00 stars. Big
// star r=3 at (5,5); small stars r=1 at (10,2) (12,4) (12,7) (10,9), each
// turned so one point aims at the big star's centre.
function ChinaFlag({ label }: { label: string }) {
  const small: [number, number, number][] = [
    [10, 2, -120.96],
    [12, 4, -98.13],
    [12, 7, -74.05],
    [10, 9, -51.34],
  ];
  return (
    <svg
      viewBox="0 0 30 20"
      role="img"
      aria-label={`Flag of China (${label})`}
      className="block w-full h-auto rounded-[4px] shadow-[0_6px_14px_-8px_rgba(40,40,40,0.55)] ring-1 ring-black/5"
    >
      <rect width="30" height="20" fill="#EE1C25" />
      <path d={STAR} fill="#FFFF00" transform="translate(5 5) scale(3)" />
      {small.map(([x, y, r]) => (
        <path key={`${x}-${y}`} d={STAR} fill="#FFFF00" transform={`translate(${x} ${y}) rotate(${r})`} />
      ))}
    </svg>
  );
}

// Export qualification: globe with a cargo arrow leaving it (line style, dark
// navy like the FDA logo). Drawn by Canggus, no third-party artwork.
function ExportMark({ label }: { label: string }) {
  return (
    <svg
      viewBox="0 0 88 88"
      role="img"
      aria-label={`Export icon: globe with outgoing arrow (${label})`}
      fill="none"
      stroke="#1d2b4f"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="block h-full w-full"
    >
      {/* globe */}
      <circle cx="38" cy="48" r="26" />
      <ellipse cx="38" cy="48" rx="11" ry="26" />
      <path d="M12 48h52M16 35h44M16 61h44" />
      {/* outgoing arrow, on a white halo so it reads over the globe */}
      <path d="M44 42 L76 12" stroke="#ffffff" strokeWidth="11" />
      <path d="M44 42 L76 12" />
      <path d="M58 12 H76 V30" />
      {/* cargo box at the arrow's base */}
      <rect x="62" y="56" width="20" height="16" rx="2" fill="#ffffff" />
      <path d="M62 62h20M72 56v6" />
    </svg>
  );
}

const DRAWN_BADGES: Record<string, (p: { label: string }) => ReactElement> = {
  sc: ChinaFlag,
  export: ExportMark,
};

// Real logo badge from manifest badges[] (transparent -sm.webp, 240 px), in a
// fixed 88 px box so every logo reads the same size. Facility B logos are
// low-res upscales, so the box never exceeds 96 px. Under a facility filter
// the logo is that facility's own variant; under "All" it is the manifest
// default (sharpest) variant. The SC license and export qualification have no
// catalog artwork: they get a Canggus-drawn inline SVG (Tuan 13 Nov) in the
// same 88 px box. Any other standard without a logo keeps the text seal.
function Emblem({ s, verified, facility }: { s: Standard; verified: boolean; facility: FacilityFilter }) {
  const Drawn = DRAWN_BADGES[s.id];
  if (Drawn) {
    return (
      <span className="relative flex h-[104px] w-[104px] shrink-0 items-center justify-center rounded-full bg-[radial-gradient(70%_70%_at_50%_30%,#ffffff_0%,#fdf6fa_80%,#fbeef5_100%)] ring-1 ring-[#fb6ba8]/15">
        <span className="relative flex h-[80px] w-[80px] sm:h-[88px] sm:w-[88px] items-center justify-center">
          <Drawn label={s.label} />
        </span>
        {verified && <VerifiedDot />}
      </span>
    );
  }
  const logos = BADGE_LOGOS[s.id];
  const key = facility !== "All" && logos?.[facility] ? facility : DEFAULT_BADGE_FACILITY[s.id];
  const logo = key ? logos?.[key] : undefined;
  if (logo) {
    return (
      <span className="relative flex h-[104px] w-[104px] shrink-0 items-center justify-center rounded-full bg-[radial-gradient(70%_70%_at_50%_30%,#ffffff_0%,#fdf6fa_80%,#fbeef5_100%)] ring-1 ring-[#fb6ba8]/15">
        <span className="relative block h-[80px] w-[80px] sm:h-[88px] sm:w-[88px]">
          <Image
            src={`${CANGGUS_ASSET_BASE}${logo.src}`}
            alt={s.label}
            fill
            loading="lazy"
            sizes="88px"
            className="object-contain"
          />
        </span>
        {verified && <VerifiedDot />}
      </span>
    );
  }
  return <TextSeal s={s} verified={verified} />;
}

// Canggus-drawn seal for standards that have no logo artwork in the catalogs:
// the standard's name inside a blush seal with a line icon.
function TextSeal({ s, verified }: { s: Standard; verified: boolean }) {
  return (
    <span
      aria-hidden="true"
      className="relative flex h-[92px] w-[92px] sm:h-[104px] sm:w-[104px] shrink-0 flex-col items-center justify-center rounded-full bg-[radial-gradient(70%_70%_at_50%_30%,#ffffff_0%,#fdf0f6_75%,#fbe4ef_100%)] text-[#282828] ring-1 ring-[#fb6ba8]/25 shadow-[0_18px_36px_-24px_rgba(251,107,168,0.7),inset_0_0_0_6px_rgba(255,255,255,0.9)]"
    >
      <span className="absolute inset-[9px] rounded-full border border-dashed border-[#fb6ba8]/35" />
      <Icon name={s.icon} className="h-[18px] w-[18px] text-[#fb6ba8]" />
      {s.emblem.map((line, i) => (
        <span
          key={line}
          className={`relative block leading-[1.05] ${
            i === 0
              ? `${line.length > 5 ? "text-[11px] sm:text-[12px]" : "text-[15px] sm:text-[17px]"} font-extrabold tracking-[0.02em]`
              : "text-[10px] sm:text-[11px] font-semibold tracking-[0.06em] text-[#282828]/70"
          } ${i === 0 ? "mt-1" : ""}`}
        >
          {line}
        </span>
      ))}
      {verified && (
        <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#282828] text-white ring-4 ring-white">
          <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.5} />
        </span>
      )}
    </span>
  );
}

export default function StandardsGrid() {
  const [facility, setFacility] = useState<FacilityFilter>("All");

  const visible = useMemo(
    () =>
      facility === "All"
        ? STANDARDS
        : STANDARDS.filter((s) => s.facilities.some((f) => f.facility === facility)),
    [facility],
  );

  const chips: { id: FacilityFilter; label: string; count: number }[] = [
    { id: "All", label: "All facilities", count: STANDARDS.length },
    ...FACILITY_IDS.map((id) => ({
      id,
      label: `Facility ${id}`,
      count: STANDARDS.filter((s) => s.facilities.some((f) => f.facility === id)).length,
    })),
  ];

  return (
    <div className="mt-12 lg:mt-14">
      <div
        role="group"
        aria-label="Filter standards by facility"
        className="-mx-6 px-6 flex gap-2.5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:px-0 lg:flex-wrap"
      >
        {chips.map((c) => {
          const active = c.id === facility;
          return (
            <button
              key={c.id}
              type="button"
              aria-pressed={active}
              onClick={() => setFacility(c.id)}
              className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb6ba8] ${
                active
                  ? "border-[#282828] bg-[#282828] text-white"
                  : "border-[#282828]/12 bg-white text-[#282828] hover:border-[#fb6ba8] hover:text-[#e0558f]"
              }`}
            >
              {c.id !== "All" && FACILITY_THUMB[c.id] ? (
                <span className="relative -ml-2 h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-white">
                  <Image
                    src={`${CANGGUS_ASSET_BASE}${FACILITY_THUMB[c.id].src}`}
                    alt=""
                    fill
                    loading="lazy"
                    sizes="32px"
                    className="object-cover"
                  />
                </span>
              ) : (
                <Icon name="network" className="h-4 w-4 text-[#fb6ba8]" />
              )}
              {c.label}
              <span className={`text-xs font-medium ${active ? "text-white/70" : "text-[#282828]/65"}`}>{c.count}</span>
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        {`Showing ${visible.length} standards${facility === "All" ? "" : ` listed by Facility ${facility}`}`}
      </p>

      <div className="mt-10 space-y-12">
        {GROUPS.map((g) => {
          const items = visible.filter((s) => s.group === g);
          if (!items.length) return null;
          return (
            <div key={g}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e0558f]">{g}</h3>
              <ul className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                {items.map((s) => {
                  const shown = facility === "All" ? s.facilities : s.facilities.filter((f) => f.facility === facility);
                  const verified = shown.some((f) => f.verified);
                  return (
                    <li
                      key={s.id}
                      data-tilt="8"
                      className="cg-tilt flex flex-col items-center rounded-3xl bg-white px-3 py-6 sm:px-4 text-center ring-1 ring-[#282828]/8 shadow-[0_24px_48px_-36px_rgba(40,40,40,0.35)]"
                    >
                      <Emblem s={s} verified={verified} facility={facility} />
                      <p className="mt-4 text-[14px] sm:text-[15px] font-bold leading-[1.3] text-[#282828]">{s.label}</p>
                      <ul className="mt-3 flex flex-wrap justify-center gap-1.5" aria-label={`Listed by ${shown.map((f) => `Facility ${f.facility}`).join(", ")}`}>
                        {shown.map((f) => (
                          <li
                            key={f.facility}
                            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                              f.verified ? "bg-[#282828] text-white" : "bg-[#fdf0f6] text-[#282828]/80"
                            }`}
                          >
                            {`Facility ${f.facility}`}
                            {f.verified && (
                              <>
                                <Icon name="check" className="h-3 w-3 text-[#fb6ba8]" strokeWidth={2.5} />
                                <span>verified</span>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
