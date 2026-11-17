import { CANGGUS_BOOKING_HREF } from "../data/content";
import Icon from "./Icon";

type Props = { label: string; className?: string };

// Pink pill that opens the real booking page in a new tab.
export default function CtaButton({ label, className = "" }: Props) {
  return (
    <a
      href={CANGGUS_BOOKING_HREF}
      target="_blank"
      rel="noopener"
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-[#fb6ba8] px-7 py-3.5 text-[15px] sm:text-base font-semibold text-white shadow-[0_10px_30px_-12px_rgba(251,107,168,0.7)] transition-colors duration-200 hover:bg-[#f466a2] active:bg-[#e85a96] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fb6ba8] ${className}`}
    >
      {label}
      <Icon name="arrowRight" className="h-5 w-5" />
    </a>
  );
}
