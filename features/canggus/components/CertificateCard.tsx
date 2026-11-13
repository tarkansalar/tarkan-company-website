"use client";

import Image from "next/image";
import { useRef } from "react";
import Icon from "./Icon";

// Verified certificate scan as a tilted 3D document card. Click opens the
// full scan in a native <dialog> (Esc / backdrop / close button to dismiss).
// The large image only mounts when the dialog is opened.
export default function CertificateCard({
  src,
  alt,
  w,
  h,
}: {
  src: string;
  alt: string;
  w: number;
  h: number;
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
        <span aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rotate-[4deg] rounded-[18px] bg-white ring-1 ring-[#282828]/8 shadow-[0_20px_40px_-26px_rgba(40,40,40,0.45)]" />
        <span aria-hidden="true" className="absolute inset-0 translate-x-1.5 translate-y-1.5 rotate-[2deg] rounded-[18px] bg-[#fdf0f6] ring-1 ring-[#fb6ba8]/15" />
        <span data-tilt="8" className="cg-tilt relative block">
          <span className="block rotate-[-3deg] rounded-[18px] bg-white p-2 ring-1 ring-[#282828]/8 cg-card-shadow transition-transform duration-300 group-hover:rotate-[-1deg]">
            <span className="relative block overflow-hidden rounded-[12px]" style={{ aspectRatio: `${w} / ${h}` }}>
              <Image src={src} alt={alt} fill loading="lazy" sizes="(min-width: 1024px) 300px, 60vw" className="object-cover object-top" />
              <span aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0)_35%,rgba(255,255,255,0.45)_50%,rgba(255,255,255,0)_65%)]" />
            </span>
          </span>
        </span>
        <span className="absolute -top-3 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-[#282828] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_10px_20px_-10px_rgba(0,0,0,0.6)]">
          <Icon name="badgeCheck" className="h-3.5 w-3.5 text-[#fb6ba8]" />
          Verified document
        </span>
        <span className="absolute bottom-4 right-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#282828] ring-1 ring-[#282828]/10 shadow-[0_10px_24px_-10px_rgba(40,40,40,0.5)]">
          <Icon name="scanSearch" className="h-5 w-5 text-[#fb6ba8]" />
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
          <div className="max-h-[calc(92vh-24px)] overflow-auto rounded-xl">
            {/* Plain img: only requested when the dialog is open (lazy, below fold). */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} width={w} height={h} loading="lazy" decoding="async" className="block h-auto w-full" />
          </div>
        </div>
      </dialog>
    </>
  );
}
