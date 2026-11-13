import Image from "next/image";
import type { CSSProperties } from "react";
import { CANGGUS_ASSET_BASE } from "../data/catalog-meta";
import type { VisualPhoto, VisualProduct } from "../data/visuals";

// Shared 3D-style section visuals for /canggus (server components).
// Real manifest assets only (no AI images). All images go through next/image
// (WebP/AVIF, resized per `sizes`) and are lazy unless `eager` (hero only).
// Motion: CSS only (visual.css). Each visual root carries data-reveal, so
// Fx.tsx fades it in once and starts the float; the tilt layer is a separate
// inner element so the two transforms never fight.

export type FloatItem = {
  p: VisualProduct;
  // Position + width inside the composition box (Tailwind classes).
  pos: string;
  // Float animation delay (s), static tilt (deg), stacking order.
  d?: number;
  r?: number;
  z?: number;
};

export function FloatingProducts({
  items,
  className = "",
  sizes,
  eager = false,
  dark = false,
  disc = true,
}: {
  items: FloatItem[];
  className?: string;
  sizes: string;
  eager?: boolean;
  dark?: boolean;
  disc?: boolean;
}) {
  return (
    <div {...(eager ? {} : { "data-reveal": "" })} className={`relative ${eager ? "cg-float-now" : ""} ${className}`}>
      {disc && (
        <>
          <span
            aria-hidden="true"
            className={`absolute left-1/2 top-[50%] aspect-square w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full ${
              dark
                ? "bg-[radial-gradient(closest-side,rgba(251,107,168,0.34),rgba(251,107,168,0.08)_62%,transparent)]"
                : "bg-[radial-gradient(closest-side,rgba(251,107,168,0.30),rgba(253,240,246,0.75)_58%,transparent)]"
            }`}
          />
          <span
            aria-hidden="true"
            className={`absolute left-1/2 bottom-[3%] h-[16%] w-[86%] -translate-x-1/2 rounded-[50%] border ${
              dark
                ? "border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02))]"
                : "border-white bg-[linear-gradient(180deg,rgba(255,255,255,0.85),rgba(253,240,246,0.6))] shadow-[0_20px_40px_-24px_rgba(251,107,168,0.6)]"
            }`}
          />
        </>
      )}
      {items.map(({ p, pos, d = 0, r = 0, z = 1 }) => (
        <div key={p.stem + pos} className={`absolute ${pos}`} style={{ zIndex: z }}>
          <span
            aria-hidden="true"
            className={`absolute -bottom-[5%] left-1/2 h-[10%] w-[95%] -translate-x-1/2 ${dark ? "cg-floor-dark" : "cg-floor"}`}
          />
          <div className="cg-float" style={{ "--d": `${d}s` } as CSSProperties}>
            <Image
              src={`${CANGGUS_ASSET_BASE}${p.stem}-md.webp`}
              alt={p.name}
              width={p.w}
              height={p.h}
              sizes={sizes}
              loading={eager ? "eager" : "lazy"}
              // Hero products: decorative, must not compete with the H1 (LCP) and font.
              fetchPriority={eager ? "low" : undefined}
              className={`relative block h-auto w-full ${dark ? "cg-prod-shadow-dark" : "cg-prod-shadow"}`}
              style={r ? { rotate: `${r}deg` } : undefined}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// Photo cards stacked at slight angles (back, middle, front).
const STACK = [
  "left-[20%] top-0 w-[76%] rotate-[5deg]",
  "left-0 top-[22%] w-[70%] rotate-[-4deg]",
  "right-[2%] bottom-0 w-[46%] rotate-[3deg]",
];

export function PhotoStack({
  photos,
  className = "",
  sizes,
  dark = false,
  tilt = 6,
}: {
  photos: VisualPhoto[];
  className?: string;
  sizes: string;
  dark?: boolean;
  tilt?: number;
}) {
  return (
    <div data-reveal="" className={`relative ${className}`}>
      <div data-tilt={tilt} className="cg-tilt absolute inset-0">
        {photos.slice(0, 3).map((ph, i) => (
          <figure
            key={ph.src}
            className={`absolute ${STACK[i]} m-0 rounded-[22px] p-1.5 sm:p-2 ${
              dark ? "bg-white/10 ring-1 ring-white/15 cg-card-shadow-dark" : "bg-white ring-1 ring-[#282828]/5 cg-card-shadow"
            }`}
            style={{ zIndex: i + 1 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] bg-[#fdf0f6]">
              <Image
                src={`${CANGGUS_ASSET_BASE}${ph.src}`}
                alt={ph.alt}
                fill
                loading="lazy"
                sizes={i === 2 ? "(min-width: 1024px) 240px, 45vw" : sizes}
                className="object-cover"
              />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}

// Single photo framed as a 3D card (white frame, layered shadow, tilt).
export function PhotoCard({
  photo,
  sizes,
  className = "",
  aspect = "aspect-[16/10]",
  tilt = 5,
  rotate = "",
}: {
  photo: VisualPhoto;
  sizes: string;
  className?: string;
  aspect?: string;
  tilt?: number;
  rotate?: string;
}) {
  return (
    <div data-reveal="" className={className}>
      <div data-tilt={tilt} className="cg-tilt">
        <div className={`rounded-[22px] bg-white p-1.5 ring-1 ring-[#282828]/5 cg-card-shadow ${rotate}`}>
          <div className={`relative ${aspect} overflow-hidden rounded-[16px] bg-[#fdf0f6]`}>
            <Image
              src={`${CANGGUS_ASSET_BASE}${photo.src}`}
              alt={photo.alt}
              fill
              loading="lazy"
              sizes={sizes}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Soft pink blob for section backgrounds (radial gradient, no blur filter).
export function Blob({ className = "", strong = false }: { className?: string; strong?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full ${
        strong
          ? "bg-[radial-gradient(closest-side,rgba(251,107,168,0.28),rgba(251,107,168,0)_100%)]"
          : "bg-[radial-gradient(closest-side,rgba(251,107,168,0.16),rgba(251,107,168,0)_100%)]"
      } ${className}`}
    />
  );
}
