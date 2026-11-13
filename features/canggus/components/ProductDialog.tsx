"use client";

import Image, { type ImageLoader } from "next/image";
import { useEffect, useRef } from "react";
import { CANGGUS_ASSET_BASE, type CatalogProduct } from "../data/catalog-meta";
import CtaButton from "./CtaButton";
import Icon from "./Icon";

// Detail view always asks for the md variant (max 800 px wide).
const mdLoader: ImageLoader = ({ src }) => `${CANGGUS_ASSET_BASE}${src}-md.webp`;

// "MOQ 2000 bottles · 60ml/bottle": only the parts the catalog prints.
export function moqLine(p: CatalogProduct) {
  return [p.moq && `MOQ ${p.moq}`, p.spec].filter(Boolean).join(" · ");
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 border-t border-[#282828]/8 py-3 first:border-t-0">
      <dt className="w-24 shrink-0 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#282828]/55 pt-0.5">
        {label}
      </dt>
      <dd className="min-w-0 text-[15px] leading-[1.5] text-[#282828] [overflow-wrap:anywhere]">{children}</dd>
    </div>
  );
}

// Product detail as a native modal <dialog>: showModal() makes the page
// behind it inert and traps focus, Esc closes it (cancel event), focus goes
// back to the card that opened it. Phones get a bottom sheet, md+ a centered
// two-column panel.
export default function ProductDialog({
  product,
  onClose,
}: {
  product: CatalogProduct | null;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (product && !d.open) {
      opener.current = document.activeElement as HTMLElement | null;
      d.showModal();
      closeRef.current?.focus({ preventScroll: true });
      document.documentElement.style.overflow = "hidden";
    } else if (!product && d.open) {
      d.close();
    }
  }, [product]);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const onDialogClose = () => {
      document.documentElement.style.overflow = "";
      opener.current?.focus({ preventScroll: true });
      onClose();
    };
    d.addEventListener("close", onDialogClose);
    return () => d.removeEventListener("close", onDialogClose);
  }, [onClose]);

  const p = product;

  return (
    <dialog
      ref={ref}
      aria-labelledby="cg-product-title"
      aria-describedby={p?.description ? "cg-product-desc" : undefined}
      // Click on the backdrop (the dialog box itself, outside the panel) closes.
      onClick={(e) => e.target === e.currentTarget && ref.current?.close()}
      className="cg-sheet m-0 mt-auto h-fit max-h-[92dvh] w-full max-w-none overflow-hidden rounded-t-[28px] bg-white p-0 text-[#282828] shadow-[0_-24px_60px_-20px_rgba(40,40,40,0.35)] md:m-auto md:max-h-[86vh] md:w-[min(920px,calc(100%-48px))] md:rounded-[32px] md:shadow-[0_40px_90px_-30px_rgba(251,107,168,0.55),0_8px_24px_-8px_rgba(40,40,40,0.18)] backdrop:bg-[#282828]/45 backdrop:backdrop-blur-[2px]"
    >
      {p && (
        <div className="flex max-h-[92dvh] flex-col md:max-h-[86vh] md:grid md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative shrink-0 h-[30dvh] min-h-[180px] md:h-auto md:min-h-[460px] bg-[radial-gradient(80%_60%_at_50%_35%,#ffffff_0%,#fdf0f6_70%,#fbe4ef_100%)]">
            <Image
              key={p.id}
              loader={mdLoader}
              src={p.stem}
              alt={`${p.name}, ${p.label}`}
              fill
              sizes="(min-width: 768px) 440px, 100vw"
              placeholder="blur"
              blurDataURL={p.blur}
              className={`object-contain drop-shadow-[0_22px_26px_rgba(40,40,40,0.2)] ${p.lowRes ? "p-14 md:p-20" : "p-6 md:p-10"}`}
            />
            {p.tag && (
              <span className="absolute top-4 left-4 rounded-full bg-[#282828] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                {p.tag}
              </span>
            )}
          </div>

          <div className="flex min-h-0 flex-col">
            <div className="min-h-0 overflow-y-auto overscroll-contain px-6 pt-6 pb-4 sm:px-8 sm:pt-8">
              <p className="pr-12 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c93d78]">
                {p.category}
              </p>
              <h3 id="cg-product-title" className="mt-2 pr-12 text-[22px] sm:text-[26px] font-bold leading-[1.2] tracking-[-0.01em]">
                {p.name}
              </h3>
              {p.description && (
                <p id="cg-product-desc" className="mt-3 text-[15px] leading-[1.65] text-[#282828]/75">
                  {p.description}
                </p>
              )}

              {p.benefits.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Benefits">
                  {p.benefits.map((b) => (
                    <li
                      key={b}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#fff1f7] px-3 py-1.5 text-[13px] font-medium text-[#282828] ring-1 ring-[#fb6ba8]/20"
                    >
                      <Icon name="check" className="h-3.5 w-3.5 shrink-0 text-[#fb6ba8] [stroke-width:2.5]" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              <dl className="mt-5">
                <Row label="Format">{p.label}</Row>
                {p.moq && <Row label="MOQ">{p.moq}</Row>}
                {(p.spec || p.specDetail) && (
                  <Row label="Spec">{[p.spec, p.specDetail].filter(Boolean).join(" · ")}</Row>
                )}
                <Row label="Facility">{`Facility ${p.facility}`}</Row>
              </dl>
            </div>

            <div className="shrink-0 border-t border-[#282828]/8 px-6 py-4 sm:px-8 sm:py-5 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <CtaButton className="w-full" />
            </div>
          </div>

          <button
            type="button"
            onClick={() => ref.current?.close()}
            ref={closeRef}
            aria-label="Close product details"
            className="absolute top-3.5 right-3.5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#282828] ring-1 ring-[#282828]/10 shadow-[0_8px_20px_-10px_rgba(40,40,40,0.4)] transition-[color,transform] duration-200 hover:text-[#fb6ba8] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb6ba8]"
          >
            <Icon name="x" className="h-5 w-5" />
          </button>
        </div>
      )}
    </dialog>
  );
}
