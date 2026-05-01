import { WHATSAPP_URL } from "@/lib/constants";

export default function FloatingChat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      aria-label="Chat with us"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[90] w-14 h-14 rounded-full bg-neon flex items-center justify-center shadow-[0_4px_16px_rgba(200,255,0,0.25)] hover:scale-110 hover:shadow-[0_6px_24px_rgba(200,255,0,0.4)] active:scale-95 transition-all duration-200"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="9" y1="10" x2="9" y2="10" />
        <line x1="12" y1="10" x2="12" y2="10" />
        <line x1="15" y1="10" x2="15" y2="10" />
      </svg>
    </a>
  );
}
