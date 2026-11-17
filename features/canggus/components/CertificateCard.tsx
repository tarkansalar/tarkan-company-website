"use client";

import Image from "next/image";
import { useRef } from "react";
import Icon from "./Icon";

// Certificate scan as a static stacked document card (restored from
// backup/canggus-long-v1 without the tilt). Click opens the full scan in a
// native <dialog> (Esc / backdrop / close button). The large image is a plain
// lazy <img>, only requested when the dialog opens. No status, validity or
// expiry label (Tuan 13 + 17 Nov).
export default function CertificateCard({
  src,
  fullSrc,
  alt,
  w,
  h,
  fullW,
  fullH,
  sizes = "(min-width: 1024px) 150px, 44vw",
}: {
  src: string;
  fullSrc?: string;
  alt: string;
  w: number;
  h: number;
  fullW?: number;
  fullH?: number;
  sizes?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = () => ref.current?.showModal();
  const close = () => ref.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        className="group relative block w-full rounded-[18px] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fb6ba8]"
      >
        <span className="sr-only">Enlarge: </span>
        {/* paper stack behind the scan */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-[18px] bg-white ring-1 ring-[#282828]/8 shadow-[0_20px_40px_-26px_rgba(40,40,40,0.45)] translate-x-2 translate-y-2 rotate-[3deg]"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-[18px] bg-[#fdf0f6] ring-1 ring-[#fb6ba8]/15 translate-x-1 translate-y-1 rotate-[1.5deg]"
        />
        <span className="relative block rounded-[18px] bg-white p-1.5 ring-1 ring-[#282828]/8 cg-card-shadow rotate-[-1.5deg] transition-transform duration-300 group-hover:rotate-0">
          <span
            className="relative block overflow-hidden rounded-[12px] bg-[#fafafa]"
            style={{ aspectRatio: `${w} / ${h}` }}
          >
            <Image src={src} alt={alt} fill loading="lazy" sizes={sizes} className="object-cover object-top" />
          </span>
        </span>
        <span className="absolute bottom-2.5 right-2.5 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#282828] ring-1 ring-[#282828]/10 shadow-[0_10px_24px_-10px_rgba(40,40,40,0.5)]">
          <Icon name="scanSearch" className="h-4 w-4 text-[#fb6ba8]" />
        </span>
      </button>

      <dialog
        ref={ref}
        aria-label={alt}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className="cg-dialog m-auto max-h-[92vh] w-[min(92vw,720px)] overflow-visible bg-transparent p-0 backdrop:bg-black/80"
      >
        <div className="relative rounded-2xl bg-white p-2 sm:p-3 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute -top-4 -right-2 sm:-right-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#fb6ba8] text-white shadow-[0_10px_24px_-8px_rgba(251,107,168,0.8)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Icon name="x" className="h-5 w-5" strokeWidth={2.25} />
          </button>
          <div className="max-h-[calc(92vh-64px)] overflow-auto rounded-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={fullSrc ?? src}
              alt={alt}
              width={fullW ?? w}
              height={fullH ?? h}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </dialog>
    </>
  );
}
