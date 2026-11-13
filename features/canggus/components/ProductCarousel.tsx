"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { CANGGUS_ASSET_BASE, CATALOG, PRODUCT_CATEGORIES } from "../data/catalog";
import Icon, { type IconName } from "./Icon";

type Filter = "All" | (typeof PRODUCT_CATEGORIES)[number];

const FILTERS: { label: Filter; icon: IconName }[] = [
  { label: "All", icon: "grid" },
  { label: "Creatine", icon: "zap" },
  { label: "Magnesium", icon: "atom" },
  { label: "Collagen", icon: "sparkles" },
  { label: "Electrolytes & Hydration", icon: "droplet" },
  { label: "Gummies", icon: "candy" },
  { label: "Functional Wellness", icon: "leaf" },
];

// Scroll-snap carousel: native swipe on touch, arrows + dots on desktop,
// arrow keys / Home / End when the track has focus. Images are lazy loaded
// by next/image (only the first visible cards are in the viewport anyway).
export default function ProductCarousel() {
  const [filter, setFilter] = useState<Filter>("All");
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);
  const [progress, setProgress] = useState(0);
  const trackRef = useRef<HTMLUListElement>(null);

  const items = useMemo(
    () => (filter === "All" ? CATALOG : CATALOG.filter((p) => p.category === filter)),
    [filter],
  );

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const total = max <= 2 ? 1 : Math.ceil(el.scrollWidth / el.clientWidth - 0.05);
    setPages(total);
    const ratio = max <= 0 ? 1 : el.scrollLeft / max;
    setProgress(ratio);
    setPage(max <= 0 ? 0 : Math.min(total - 1, Math.round(ratio * (total - 1))));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: 0 });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [items, measure]);

  const scrollByPage = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  const goToPage = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: pages <= 1 ? 0 : (max * i) / (pages - 1), behavior: "smooth" });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 16 : 240;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      el.scrollBy({ left: step, behavior: "smooth" });
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      el.scrollBy({ left: -step, behavior: "smooth" });
    } else if (e.key === "Home") {
      e.preventDefault();
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else if (e.key === "End") {
      e.preventDefault();
      el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    }
  };

  const atStart = progress <= 0.001;
  const atEnd = progress >= 0.999 || pages <= 1;

  return (
    <div className="mt-12 lg:mt-14">
      {/* Filter chips: scroll sideways on phones, wrap on desktop */}
      <div
        role="group"
        aria-label="Filter product examples by category"
        className="-mx-6 px-6 flex gap-2.5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:px-0 lg:flex-wrap"
      >
        {FILTERS.map((f) => {
          const active = f.label === filter;
          const count = f.label === "All" ? CATALOG.length : CATALOG.filter((p) => p.category === f.label).length;
          return (
            <button
              key={f.label}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f.label)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb6ba8] ${
                active
                  ? "border-[#282828] bg-[#282828] text-white"
                  : "border-[#282828]/12 bg-white text-[#282828] hover:border-[#fb6ba8] hover:text-[#e0558f]"
              }`}
            >
              <Icon name={f.icon} className={`h-4 w-4 ${active ? "text-[#fb6ba8]" : "text-[#fb6ba8]"}`} />
              {f.label}
              <span className={`text-xs font-medium ${active ? "text-white/70" : "text-[#282828]/65"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="relative mt-8">
        <p className="sr-only" aria-live="polite">
          {`Showing ${items.length} ${filter === "All" ? "" : `${filter} `}product examples`}
        </p>
        <ul
          ref={trackRef}
          tabIndex={0}
          onScroll={measure}
          onKeyDown={onKeyDown}
          aria-label="Product examples carousel. Use the left and right arrow keys to scroll."
          className="-mx-6 px-6 lg:mx-0 lg:px-0 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-6 lg:scroll-px-0 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fb6ba8]"
        >
          {items.map((p, i) => (
            <li
              key={p.id}
              aria-label={`${i + 1} of ${items.length}: ${p.name}`}
              className="group snap-start shrink-0 w-[70%] min-[480px]:w-[46%] md:w-[31%] lg:w-[calc((100%-48px)/4)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[radial-gradient(80%_60%_at_50%_30%,#ffffff_0%,#fdf0f6_70%,#fbe4ef_100%)] ring-1 ring-[#fb6ba8]/10 shadow-[0_24px_48px_-32px_rgba(251,107,168,0.55),0_2px_6px_-2px_rgba(40,40,40,0.06)]">
                <Image
                  src={`${CANGGUS_ASSET_BASE}${p.src}`}
                  alt={`${p.name}, ${p.format}`}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1280px) 280px, (min-width: 1024px) 22vw, (min-width: 768px) 30vw, (min-width: 480px) 45vw, 70vw"
                  className="object-contain p-7 sm:p-8 drop-shadow-[0_18px_22px_rgba(40,40,40,0.18)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
                {p.tag && (
                  <span className="absolute top-3.5 left-3.5 rounded-full bg-[#282828] px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                    {p.tag}
                  </span>
                )}
                <span className="absolute top-3.5 right-3.5 rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#e0558f] backdrop-blur-sm">
                  {p.category}
                </span>
              </div>
              <h3 className="mt-4 text-[16px] sm:text-[17px] font-semibold leading-[1.35] text-[#282828]">
                {p.name}
              </h3>
              <p className="mt-1 text-[13px] sm:text-sm leading-[1.5] text-[#282828]/70">{p.format}</p>
            </li>
          ))}
        </ul>

        {/* Arrows: desktop only (phones swipe) */}
        <button
          type="button"
          onClick={() => scrollByPage(-1)}
          disabled={atStart}
          aria-label="Previous products"
          className="hidden md:flex absolute -left-5 top-[calc(50%-48px)] -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white text-[#282828] ring-1 ring-[#282828]/10 shadow-[0_12px_30px_-12px_rgba(40,40,40,0.35)] transition-[opacity,transform,color] duration-200 hover:text-[#fb6ba8] hover:scale-105 active:scale-95 disabled:pointer-events-none disabled:opacity-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb6ba8]"
        >
          <Icon name="chevronLeft" className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByPage(1)}
          disabled={atEnd}
          aria-label="Next products"
          className="hidden md:flex absolute -right-5 top-[calc(50%-48px)] -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white text-[#282828] ring-1 ring-[#282828]/10 shadow-[0_12px_30px_-12px_rgba(40,40,40,0.35)] transition-[opacity,transform,color] duration-200 hover:text-[#fb6ba8] hover:scale-105 active:scale-95 disabled:pointer-events-none disabled:opacity-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb6ba8]"
        >
          <Icon name="chevronRight" className="h-5 w-5" />
        </button>
      </div>

      {/* Progress: thin bar on phones, dots on desktop */}
      <div className="mt-4 md:hidden h-1 rounded-full bg-[#282828]/8 overflow-hidden" aria-hidden="true">
        <div
          className="h-full rounded-full bg-[#fb6ba8] origin-left transition-transform duration-200"
          style={{
            transform: `scaleX(${pages <= 1 ? 1 : Math.max(0.12, progress)})`,
          }}
        />
      </div>
      {pages > 1 && (
        <div className="mt-4 hidden md:flex justify-center gap-1" role="group" aria-label="Carousel pages">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToPage(i)}
              aria-label={`Go to page ${i + 1} of ${pages}`}
              aria-current={i === page ? "true" : undefined}
              className="group/dot flex h-6 min-w-6 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb6ba8] rounded-full"
            >
              <span
                className={`block h-2 rounded-full transition-[width,background-color] duration-300 ${
                  i === page ? "w-7 bg-[#fb6ba8]" : "w-2 bg-[#282828]/20 group-hover/dot:bg-[#fb6ba8]/50"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
