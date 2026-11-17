import { CANGGUS_WHATSAPP_URL } from "../data/content";
import { WhatsAppIcon } from "./WhatsAppIcon";

// Floating WhatsApp button for /canggus and its legal pages (Tuan 17 Nov 2026).
// 56px circle, WhatsApp green #25D366 (instantly recognisable on the white
// page and next to the pink accent), bottom/right 24px (32px from lg) plus
// the iOS safe area. z-40: above page content, below the fixed header (z-50)
// and native <dialog> lightboxes (top layer).
export default function FloatingWhatsApp() {
  return (
    <a
      href={CANGGUS_WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed z-40 right-[calc(24px+env(safe-area-inset-right))] bottom-[calc(24px+env(safe-area-inset-bottom))] lg:right-[calc(32px+env(safe-area-inset-right))] lg:bottom-[calc(32px+env(safe-area-inset-bottom))] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_-8px_rgba(18,140,74,0.55),0_2px_6px_rgba(40,40,40,0.12)] transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fb6ba8] print:hidden"
    >
      <WhatsAppIcon className="h-7 w-7 fill-white" />
    </a>
  );
}
