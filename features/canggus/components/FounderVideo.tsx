"use client";

import { useRef } from "react";
import Icon from "./Icon";
import { FOUNDER_VSL_SRC } from "../data/visuals";

// Founder VSL as a small 9:16 thumbnail (Tarkan 17 Nov: the founder portrait
// is the main visual again, the video stays but smaller). The thumbnail is
// the frame at 1 s (preload="metadata", no download of the whole file);
// clicking it opens the full video with controls in a native <dialog>
// (Esc / backdrop / close button). Closing pauses playback.
export default function FounderVideo({ className = "" }: { className?: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const player = useRef<HTMLVideoElement>(null);

  const open = () => {
    dialog.current?.showModal();
    player.current?.play().catch(() => {});
  };
  const close = () => dialog.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        aria-label="Play founder video"
        className={`group block rounded-[20px] bg-white p-1.5 ring-1 ring-[#282828]/8 cg-card-shadow transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fb6ba8] ${className}`}
      >
        <span className="relative block aspect-[9/16] overflow-hidden rounded-[15px] bg-[#fde3ef]">
          <video
            src={`${FOUNDER_VSL_SRC}#t=1`}
            muted
            playsInline
            preload="metadata"
            tabIndex={-1}
            aria-hidden="true"
            className="pointer-events-none h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <span className="absolute left-1/2 top-1/2 inline-flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#fb6ba8] text-white shadow-[0_10px_24px_-8px_rgba(251,107,168,0.9)] transition-transform duration-200 group-hover:scale-105">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-current">
              <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
            </svg>
          </span>
        </span>
      </button>

      <dialog
        ref={dialog}
        aria-label="Founder video"
        onClose={() => player.current?.pause()}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className="cg-dialog m-auto w-[min(88vw,380px)] overflow-visible bg-transparent p-0 backdrop:bg-black/80"
      >
        <div className="relative rounded-[24px] bg-white p-2 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute -top-4 -right-2 sm:-right-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#fb6ba8] text-white shadow-[0_10px_24px_-8px_rgba(251,107,168,0.8)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Icon name="x" className="h-5 w-5" strokeWidth={2.25} />
          </button>
          <video
            ref={player}
            src={FOUNDER_VSL_SRC}
            controls
            playsInline
            preload="none"
            className="block aspect-[9/16] max-h-[82vh] w-full rounded-[18px] bg-[#fde3ef] object-cover"
          />
        </div>
      </dialog>
    </>
  );
}
