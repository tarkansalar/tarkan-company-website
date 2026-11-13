"use client";

import Image, { type ImageLoader } from "next/image";
import { memo, startTransition, useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import {
  CANGGUS_ASSET_BASE,
  CATALOG_COUNTS,
  CATALOG_HEAD,
  PRODUCT_CATEGORIES,
  type CatalogProduct,
} from "../data/catalog-meta";
import Icon, { type IconName } from "./Icon";

// Full list (all non-sensitive products) is a static JSON route, fetched once
// when the carousel nears the viewport or a filter is used. Until then the
// first cards (CATALOG_HEAD) render, so first-load JS stays small.
const CATALOG_URL = "/canggus/catalog.json";

type Category = "All" | (typeof PRODUCT_CATEGORIES)[number];

// Products per category (every format summed), from the generated count table.
function countFor(category: Category) {
  let n = 0;
  for (const c of PRODUCT_CATEGORIES) {
    if (category !== "All" && c !== category) continue;
    for (const v of Object.values(CATALOG_COUNTS[c])) n += v;
  }
  return n;
}

const CATEGORY_ICON: Record<string, IconName> = {
  All: "grid",
  Creatine: "zap",
  Magnesium: "atom",
  Collagen: "sparkles",
  "Electrolytes & Hydration": "droplet",
  Gummies: "candy",
  "Functional Wellness": "leaf",
  "Protein & Sports Nutrition": "dumbbell",
};

// Exact counts come from the generated count table, so the chips are right
// before the full list has arrived.
const CATEGORY_COUNTS: Record<string, number> = Object.fromEntries(
  (["All", ...PRODUCT_CATEGORIES] as Category[]).map((c) => [c, countFor(c)]),
);

// Backend ships two resized variants per product: <stem>-sm.webp (max 400 px
// wide) and <stem>-md.webp (max 800 px wide). Serve them straight from the
// public bucket: sm for 1x phones, md for wider slots and retina.
const variantLoader: ImageLoader = ({ src, width }) =>
  `${CANGGUS_ASSET_BASE}${src}-${width <= 400 ? "sm" : "md"}.webp`;

const SIZES =
  "(min-width: 1280px) 280px, (min-width: 1024px) 22vw, (min-width: 768px) 30vw, (min-width: 390px) 46vw, 84vw";

// Cards are mounted in batches: the first BATCH on load, then STEP more cards
// whenever the end of the track comes within ~1.5 screens. Images inside the
// mounted cards are native lazy, so only cards near the viewport download.
const BATCH = 12;
const STEP = 4;

const Card = memo(function Card({ p, index, total }: { p: CatalogProduct; index: number; total: number }) {
  return (
    <li
      aria-label={`${index + 1} of ${total}: ${p.name}`}
      // Cards per screen: ~1.2 on small phones, 2 on large phones (>= 390px),
      // 3 on tablets (md), 4 on desktop (lg). The 16px terms are the gaps.
      className="group snap-start shrink-0 w-[84%] min-[390px]:w-[calc((100%-16px)/2)] md:w-[calc((100%-32px)/3)] lg:w-[calc((100%-48px)/4)] [contain:layout_paint]"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[radial-gradient(80%_60%_at_50%_30%,#ffffff_0%,#fdf0f6_70%,#fbe4ef_100%)] ring-1 ring-[#fb6ba8]/10 shadow-[0_24px_48px_-32px_rgba(251,107,168,0.55),0_2px_6px_-2px_rgba(40,40,40,0.06)]">
        {p.lowRes ? (
          // Small source image: shown near its own size instead of stretched.
          <div className="absolute inset-0 flex items-center justify-center p-10">
            <Image
              loader={variantLoader}
              src={p.stem}
              alt={`${p.name}, ${p.label}`}
              width={p.w}
              height={p.h}
              loading="lazy"
              sizes="200px"
              placeholder="blur"
              blurDataURL={p.blur}
              style={{ width: Math.min(p.w * 1.6, 200), height: "auto", maxHeight: "100%" }}
              className="object-contain drop-shadow-[0_18px_22px_rgba(40,40,40,0.18)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
          </div>
        ) : (
          <Image
            loader={variantLoader}
            src={p.stem}
            alt={`${p.name}, ${p.label}`}
            fill
            loading="lazy"
            sizes={SIZES}
            placeholder="blur"
            blurDataURL={p.blur}
            className="object-contain p-7 sm:p-8 drop-shadow-[0_18px_22px_rgba(40,40,40,0.18)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
        )}
        {p.tag && (
          <span className="absolute top-3.5 left-3.5 rounded-full bg-[#282828] px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
            {p.tag}
          </span>
        )}
        <span className="absolute top-3.5 right-3.5 max-w-[70%] truncate rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#c93d78]">
          {p.category}
        </span>
      </div>
      <h3 className="mt-4 text-[16px] sm:text-[17px] font-semibold leading-[1.35] text-[#282828]">{p.name}</h3>
      <p className="mt-1 text-[13px] sm:text-sm leading-[1.5] text-[#282828]/70">
        {p.label}
        <span className="text-[#282828]/45"> · </span>
        {`Facility ${p.facility}`}
      </p>
    </li>
  );
});

function Chip({
  active,
  disabled,
  icon,
  label,
  count,
  onClick,
}: {
  active: boolean;
  disabled: boolean;
  icon: IconName;
  label: string;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-[background-color,border-color,color,transform,opacity] duration-200 active:scale-[0.97] disabled:opacity-40 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb6ba8] ${
        active
          ? "border-[#282828] bg-[#282828] text-white"
          : "border-[#282828]/12 bg-white text-[#282828] hover:border-[#fb6ba8] hover:text-[#e0558f]"
      }`}
    >
      <Icon name={icon} className="h-4 w-4 text-[#fb6ba8]" />
      {label}
      <span className={`text-xs font-medium ${active ? "text-white/70" : "text-[#282828]/65"}`}>{count}</span>
    </button>
  );
}

const CHIP_ROW =
  "-mx-6 px-6 flex gap-2.5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:px-0 lg:flex-wrap";

// Scroll-snap carousel: native swipe on touch, arrows on desktop, arrow keys /
// Home / End when the track has focus.
export default function ProductCarousel() {
  const [category, setCategory] = useState<Category>("All");
  const [mounted, setMounted] = useState(BATCH);
  const [first, setFirst] = useState(0);
  const [perView, setPerView] = useState(4);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [catalog, setCatalog] = useState<CatalogProduct[] | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const sentinelRef = useRef<HTMLLIElement>(null);
  const frame = useRef(0);
  const loading = useRef(false);

  const load = useCallback(() => {
    if (loading.current) return;
    loading.current = true;
    fetch(CATALOG_URL)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((list: CatalogProduct[]) => setCatalog(list))
      .catch(() => {
        loading.current = false;
      });
  }, []);

  // Fetch the full list once the carousel is within ~1 screen of the viewport
  useEffect(() => {
    const el = rootRef.current;
    if (!el || catalog) return;
    const io = new IntersectionObserver((e) => e.some((x) => x.isIntersecting) && load(), {
      rootMargin: "100% 0px 100% 0px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, [catalog, load]);

  const items = useMemo(
    () =>
      (catalog ?? CATALOG_HEAD).filter((p) => category === "All" || p.category === category),
    [catalog, category],
  );

  const pickCategory = (c: Category) => {
    load();
    setCategory(c);
  };

  // Read scroll position at most once per frame; only set state on change.
  const measure = useCallback(() => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const el = trackRef.current;
      if (!el) return;
      const card = el.firstElementChild as HTMLElement | null;
      const step = card ? card.offsetWidth + 16 : el.clientWidth;
      const max = el.scrollWidth - el.clientWidth;
      setFirst(Math.round(el.scrollLeft / step));
      setPerView(Math.max(1, Math.round(el.clientWidth / step)));
      setAtStart(el.scrollLeft <= 2);
      setAtEnd(el.scrollLeft >= max - 2);
    });
  }, []);

  // Reset on filter change (not when the full list arrives)
  useEffect(() => {
    setMounted(BATCH);
    trackRef.current?.scrollTo({ left: 0 });
    measure();
  }, [category, measure]);

  useEffect(() => {
    measure();
  }, [items, measure]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(frame.current);
    };
  }, [measure]);

  // Mount the next batch when the end sentinel nears the visible track
  useEffect(() => {
    const root = trackRef.current;
    const target = sentinelRef.current;
    if (!root || !target || mounted >= items.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        // Transition: React renders the new cards in small slices, so a swipe
        // never waits on one long task.
        if (entries.some((e) => e.isIntersecting))
          startTransition(() => setMounted((n) => Math.min(items.length, n + STEP)));
      },
      { root, rootMargin: "0px 150% 0px 0px" },
    );
    io.observe(target);
    return () => io.disconnect();
  }, [items.length, mounted]);

  const scrollByPage = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
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
      setMounted(items.length);
      requestAnimationFrame(() => el.scrollTo({ left: el.scrollWidth, behavior: "smooth" }));
    }
  };

  const shown = items.slice(0, mounted);
  const total = countFor(category);
  const from = total ? Math.min(first + 1, total) : 0;
  const to = Math.min(first + perView, total);
  const progress = total ? Math.min(1, to / total) : 1;

  return (
    <div ref={rootRef} className="mt-12 lg:mt-14">
      <div role="group" aria-label="Filter product examples by category" className={CHIP_ROW}>
        {(["All", ...PRODUCT_CATEGORIES] as Category[]).map((c) => (
          <Chip
            key={c}
            active={c === category}
            disabled={c !== category && !CATEGORY_COUNTS[c]}
            icon={CATEGORY_ICON[c]}
            label={c}
            count={CATEGORY_COUNTS[c] ?? 0}
            onClick={() => pickCategory(c)}
          />
        ))}
      </div>

      <div className="relative mt-8">
        <p className="sr-only" aria-live="polite">
          {`Showing ${total} product examples${category === "All" ? "" : ` in ${category}`}`}
        </p>
        <ul
          ref={trackRef}
          tabIndex={0}
          onScroll={measure}
          onKeyDown={onKeyDown}
          aria-label="Product examples carousel. Use the left and right arrow keys to scroll."
          className="-mx-6 px-6 lg:mx-0 lg:px-0 flex gap-4 overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-px-6 lg:scroll-px-0 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fb6ba8]"
        >
          {shown.map((p, i) => (
            <Card key={p.id} p={p} index={i} total={total} />
          ))}
          {mounted < items.length && <li ref={sentinelRef} aria-hidden="true" className="shrink-0 w-px" />}
        </ul>
      </div>

      {/* Progress + arrows. Arrows sit in this row (tablet/desktop; phones
          swipe) so they never cover a card at any width. */}
      <div className="mt-4 flex items-center gap-4">
        <div className="h-1 flex-1 rounded-full bg-[#282828]/8 overflow-hidden" aria-hidden="true">
          <div
            className="h-full rounded-full bg-[#fb6ba8] origin-left transition-transform duration-200"
            style={{ transform: `scaleX(${Math.max(0.04, progress)})` }}
          />
        </div>
        <p className="shrink-0 text-[13px] font-semibold tabular-nums text-[#282828]/70">
          {total ? `${from}-${to} of ${total}` : "0 of 0"}
        </p>
        <div className="hidden md:flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => scrollByPage(-1)}
            disabled={atStart}
            aria-label="Previous products"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#282828] ring-1 ring-[#282828]/10 shadow-[0_12px_30px_-12px_rgba(40,40,40,0.35)] transition-[opacity,transform,color] duration-200 hover:text-[#fb6ba8] hover:scale-105 active:scale-95 disabled:pointer-events-none disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb6ba8]"
          >
            <Icon name="chevronLeft" className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByPage(1)}
            disabled={atEnd && mounted >= items.length && items.length >= total}
            aria-label="Next products"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#282828] ring-1 ring-[#282828]/10 shadow-[0_12px_30px_-12px_rgba(40,40,40,0.35)] transition-[opacity,transform,color] duration-200 hover:text-[#fb6ba8] hover:scale-105 active:scale-95 disabled:pointer-events-none disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb6ba8]"
          >
            <Icon name="chevronRight" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
