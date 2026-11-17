import { CANGGUS_WHATSAPP_URL } from "../data/content";
import { WhatsAppIcon } from "./WhatsAppIcon";

// Visible WhatsApp contact in the final CTA. Canggus number from Tuan
// (17 Nov 2026), see CANGGUS_WHATSAPP_URL in data/content.ts.
export default function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={CANGGUS_WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-white/25 px-7 py-3.5 text-[15px] sm:text-base font-semibold text-white transition-colors duration-200 hover:border-[#25D366] hover:bg-white/5 active:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fb6ba8] ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5 fill-[#25D366]" />
      Chat on WhatsApp
    </a>
  );
}
