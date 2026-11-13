"use client";

import Image from "next/image";
import { useRef } from "react";
import Icon from "./Icon";

export type CertificateStatus = { valid: boolean; label: string };

// Certificate scan as a tilted 3D document card. Click opens the full scan in
// a native <dialog> (Esc / backdrop / close button to dismiss). The large
// image is a plain lazy <img>, only requested when the dialog opens.
// The status chip is honest: "Verified document" only for a document that is
// still valid; an expired scan shows "Expired <date>" in a muted style.
export default function CertificateCard({
  src,
  fullSrc,
  alt,
  w,
  h,
  fullW,
  fullH,
  status,
  size = "lg",
  sizes = "(min-width: 1024px) 300px, 60vw",
}: {
  src: string;
  fullSrc?: string;
  alt: string;
  w: number;
  h: number;
  fullW?: number;
  fullH?: number;
  status: CertificateStatus;
  size?: "lg" | "sm";
  sizes?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = () => ref.current?.showModal();
  const close = () => ref.current?.close();
  const big = size === "lg";

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
          className={`absolute inset-0 rounded-[18px] bg-white ring-1 ring-[#282828]/8 shadow-[0_20px_40px_-26px_rgba(40,40,40,0.45)] ${
            big ? "translate-x-3 translate-y-3 rotate-[4deg]" : "translate-x-2 translate-y-2 rotate-[3deg]"
          }`}
        />
        <span
          aria-hidden="true"
          className={`absolute inset-0 rounded-[18px] bg-[#fdf0f6] ring-1 ring-[#fb6ba8]/15 ${
            big ? "translate-x-1.5 translate-y-1.5 rotate-[2deg]" : "translate-x-1 translate-y-1 rotate-[1.5deg]"
          }`}
        />
        <span data-tilt="8" className="cg-tilt relative block">
          <span
            className={`block rounded-[18px] bg-white ring-1 ring-[#282828]/8 cg-card-shadow transition-transform duration-300 ${
              big ? "p-2 rotate-[-3deg] group-hover:rotate-[-1deg]" : "p-1.5 rotate-[-1.5deg] group-hover:rotate-0"
            }`}
          >
            <span className="relative block overflow-hidden rounded-[12px] bg-[#fafafa]" style={{ aspectRatio: `${w} / ${h}` }}>
              <Image
                src={src}
                alt={alt}
                fill
                loading="lazy"
                sizes={sizes}
                className={`object-cover object-top ${status.valid ? "" : "saturate-[0.55]"}`}
              />
              <span aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0)_35%,rgba(255,255,255,0.45)_50%,rgba(255,255,255,0)_65%)]" />
            </span>
          </span>
        </span>
        <span
          className={`absolute -top-3 left-3 z-10 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full font-bold uppercase shadow-[0_10px_20px_-10px_rgba(0,0,0,0.6)] ${
            big ? "px-3 py-1.5 text-[11px] tracking-[0.12em]" : "px-2.5 py-1 text-[10px] tracking-[0.06em]"
          } ${status.valid ? "bg-[#282828] text-white" : "bg-white text-[#282828]/80 ring-1 ring-[#282828]/12"}`}
        >
          <Icon
            name={status.valid ? "badgeCheck" : "clock"}
            className={`h-3.5 w-3.5 ${status.valid ? "text-[#fb6ba8]" : "text-[#282828]/55"}`}
          />
          {status.valid ? "Verified" : "Expired"}
        </span>
        <span
          className={`absolute z-10 inline-flex items-center justify-center rounded-full bg-white/90 text-[#282828] ring-1 ring-[#282828]/10 shadow-[0_10px_24px_-10px_rgba(40,40,40,0.5)] ${
            big ? "bottom-4 right-4 h-11 w-11" : "bottom-2.5 right-2.5 h-9 w-9"
          }`}
        >
          <Icon name="scanSearch" className={`${big ? "h-5 w-5" : "h-4 w-4"} text-[#fb6ba8]`} />
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
          <p
            className={`mb-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
              status.valid ? "bg-[#282828] text-white" : "bg-[#f1f1f1] text-[#282828]/80"
            }`}
          >
            <Icon name={status.valid ? "badgeCheck" : "clock"} className={`h-3.5 w-3.5 ${status.valid ? "text-[#fb6ba8]" : ""}`} />
            {status.label}
          </p>
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
