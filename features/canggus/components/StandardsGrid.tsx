"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { STANDARDS, type Standard } from "../data/certifications";
import { CANGGUS_ASSET_BASE } from "../data/catalog-meta";
import { FACILITIES } from "../data/network";
import Icon from "./Icon";

const FACILITY_IDS = ["A", "B", "C"] as const;
// Facility filter chips show a small photo of that facility (manifest canggus/factory/).
const FACILITY_THUMB: Record<string, { src: string; alt: string }> = Object.fromEntries(
  FACILITIES.map((f) => [f.label.replace("Facility ", ""), { src: f.photo.src, alt: f.photo.alt }]),
);
type FacilityFilter = "All" | (typeof FACILITY_IDS)[number];

const GROUPS = Array.from(new Set(STANDARDS.map((s) => s.group)));

// Canggus-drawn emblem: no third-party logo artwork, just the standard's
// name set in Montserrat inside a blush seal with a line icon.
function Emblem({ s, verified }: { s: Standard; verified: boolean }) {
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
                      <Emblem s={s} verified={verified} />
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
