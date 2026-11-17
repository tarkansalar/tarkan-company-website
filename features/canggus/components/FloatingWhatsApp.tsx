"use client";

import { useEffect, useRef, useState } from "react";
import { CANGGUS_WHATSAPP_URL } from "../data/content";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Props = {
  // id of an element the button must never cover (e.g. the hero CTA).
  // While the button's box would overlap it, the button fades out.
  avoidId?: string;
};

// Floating WhatsApp button for /canggus and its legal pages (Tuan 17 Nov 2026).
// 56px circle, WhatsApp green #25D366 (instantly recognisable on the white
// page and next to the pink accent), bottom/right 24px (32px from lg) plus
// the iOS safe area. z-40: above page content, below the fixed header (z-50)
// and native <dialog> lightboxes (top layer).
// QA 17 Nov: on short phones (375x667) it covered the hero CTA on first load,
// so it hides only while it would overlap the element passed in avoidId.
export default function FloatingWhatsApp({ avoidId }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [hidden, setHidden] = useState(Boolean(avoidId));

  useEffect(() => {
    if (!avoidId) return;
    const target = document.getElementById(avoidId);
    const btn = ref.current;
    if (!target || !btn) {
      setHidden(false);
      return;
    }
    const GAP = 12;
    let frame = 0;
    const check = () => {
      frame = 0;
      const a = btn.getBoundingClientRect();
      const b = target.getBoundingClientRect();
      const overlap =
        a.left - GAP < b.right &&
        a.right + GAP > b.left &&
        a.top - GAP < b.bottom &&
        a.bottom + GAP > b.top;
      setHidden(overlap);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [avoidId]);

  return (
    <a
      ref={ref}
      href={CANGGUS_WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      data-hidden={hidden || undefined}
      className="fixed z-40 right-[calc(24px+env(safe-area-inset-right))] bottom-[calc(24px+env(safe-area-inset-bottom))] lg:right-[calc(32px+env(safe-area-inset-right))] lg:bottom-[calc(32px+env(safe-area-inset-bottom))] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_-8px_rgba(18,140,74,0.55),0_2px_6px_rgba(40,40,40,0.12)] transition-[transform,opacity] duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fb6ba8] data-[hidden]:pointer-events-none data-[hidden]:translate-y-3 data-[hidden]:opacity-0 print:hidden"
    >
      <WhatsAppIcon className="h-7 w-7 fill-white" />
    </a>
  );
}
