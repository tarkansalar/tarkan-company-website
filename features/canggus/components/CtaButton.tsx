import { CANGGUS_BOOKING_HREF, CTA_LABEL } from "../data/content";

type Props = { variant?: "pink" | "light"; className?: string };

// [TUAN ISI link booking] - href is a temporary anchor (#book).
export default function CtaButton({ variant = "pink", className = "" }: Props) {
  const tone =
    variant === "pink"
      ? "bg-[#fb6ba8] text-white hover:bg-[#f466a2] shadow-[0_10px_30px_-10px_rgba(251,107,168,0.7)]"
      : "bg-white text-[#282828] hover:bg-[#fff1f7]";
  return (
    <a
      href={CANGGUS_BOOKING_HREF}
      className={`inline-flex items-center justify-center gap-3 rounded-full px-7 sm:px-8 py-4 text-[15px] sm:text-base font-semibold tracking-[0.01em] transition-[background-color,transform] duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fb6ba8] ${tone} ${className}`}
    >
      {CTA_LABEL}
      <span aria-hidden="true">&rarr;</span>
    </a>
  );
}
