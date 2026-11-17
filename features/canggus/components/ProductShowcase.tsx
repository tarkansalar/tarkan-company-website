"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Icon, { type IconName } from "./Icon";

export type ShowcaseItem = {
  id: string;
  name: string;
  category: "Creatine" | "Magnesium" | "Electrolytes";
  format: string;
  src: string;
  w: number;
  h: number;
  lowRes: boolean;
};

type Filter = "All" | ShowcaseItem["category"] | "Blends";

const FILTERS: { id: Filter; icon: IconName }[] = [
  { id: "All", icon: "grid" },
  { id: "Creatine", icon: "zap" },
  { id: "Magnesium", icon: "atom" },
  { id: "Electrolytes", icon: "droplet" },
  { id: "Blends", icon: "blend" },
];

// Scroll-snap carousel of example products (focus categories only) with a
// category filter. Native swipe on touch, arrow buttons on md+. The custom
// blends card closes every view. Static: no animation besides smooth scroll.
export default function ProductShowcase({ items }: { items: ShowcaseItem[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const track = useRef<HTMLUListElement>(null);

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    track.current?.scrollTo({ left: 0 });
    measure();
  }, [filter, measure]);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  const page = (dir: 1 | -1) =>
    track.current?.scrollBy({ left: dir * track.current.clientWidth * 0.9, behavior: "smooth" });

  const visible = (c: ShowcaseItem["category"]) => filter === "All" || filter === c;

  return (
    <div className="mt-10">
      <div
        role="group"
        aria-label="Filter product examples"
        className="cg-row -mx-6 px-6 flex gap-2 overflow-x-auto pb-1 lg:mx-0 lg:px-0"
      >
        {FILTERS.map((f) => {
          const active = f.id === filter;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f.id)}
              className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb6ba8] ${
                active
                  ? "border-[#282828] bg-[#282828] text-white"
                  : "border-[#282828]/12 bg-white text-[#282828] hover:border-[#fb6ba8] active:bg-[#fff1f7]"
              }`}
            >
              <Icon name={f.icon} className="h-4 w-4 text-[#fb6ba8]" />
              {f.id}
            </button>
          );
        })}
      </div>

      <ul
        ref={track}
        onScroll={measure}
        tabIndex={0}
        aria-label="Product examples"
        className="cg-row mt-6 -mx-6 px-6 scroll-px-6 lg:mx-0 lg:px-0 lg:scroll-px-0 flex gap-4 overflow-x-auto overscroll-x-contain snap-x snap-mandatory pb-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fb6ba8] rounded-3xl"
      >
        {items.map((p) => (
          <li
            key={p.id}
            className={`${visible(p.category) ? "flex" : "hidden"} snap-start shrink-0 flex-col w-[72%] min-[480px]:w-[calc((100%-16px)/2)] md:w-[calc((100%-32px)/3)] lg:w-[calc((100%-48px)/4)]`}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[radial-gradient(80%_60%_at_50%_30%,#ffffff_0%,#fdf0f6_70%,#fbe4ef_100%)] ring-1 ring-[#fb6ba8]/10">
              <Image
                src={p.src}
                alt={p.name}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 280px, (min-width: 768px) 30vw, (min-width: 480px) 46vw, 72vw"
                className={`object-contain drop-shadow-[0_18px_22px_rgba(40,40,40,0.16)] ${p.lowRes ? "p-14" : "p-7"}`}
              />
              <span className="absolute top-3.5 left-3.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#c93d78]">
                {p.category}
              </span>
            </div>
            <h3 className="mt-3 text-[16px] font-semibold leading-[1.35] text-[#282828]">{p.name}</h3>
            <p className="mt-0.5 text-[13px] text-[#282828]/65">{p.format}</p>
          </li>
        ))}
        {/* Custom powder blends: no fixed product, so a text card. */}
        <li className="flex snap-start shrink-0 w-[72%] min-[480px]:w-[calc((100%-16px)/2)] md:w-[calc((100%-32px)/3)] lg:w-[calc((100%-48px)/4)]">
          <div className="flex aspect-[4/5] w-full flex-col justify-end rounded-3xl bg-[#282828] p-7 text-white">
            <Icon name="blend" className="h-8 w-8 text-[#fb6ba8]" />
            <h3 className="mt-4 text-xl font-bold leading-[1.25]">Custom powder blends</h3>
            <p className="mt-2 text-[15px] leading-[1.6] text-white/75">
              Creatine coffee, magnesium evening drinks, hydration mixes. Your formula.
            </p>
          </div>
        </li>
      </ul>

      <div className="mt-4 hidden md:flex justify-end gap-3">
        {([-1, 1] as const).map((dir) => (
          <button
            key={dir}
            type="button"
            onClick={() => page(dir)}
            disabled={dir === -1 ? atStart : atEnd}
            aria-label={dir === -1 ? "Previous products" : "Next products"}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#282828] ring-1 ring-[#282828]/12 transition-colors duration-200 hover:text-[#fb6ba8] active:bg-[#fff1f7] disabled:opacity-35 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb6ba8]"
          >
            <Icon name={dir === -1 ? "chevronLeft" : "chevronRight"} className="h-5 w-5" />
          </button>
        ))}
      </div>
    </div>
  );
}
