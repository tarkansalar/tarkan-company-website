type Props = { label: string; className?: string; dark?: boolean };

// Clearly-named placeholder for an asset that does not exist yet.
export default function AssetPlaceholder({ label, className = "", dark = false }: Props) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={`flex items-center justify-center rounded-3xl border-2 border-dashed p-6 text-center ${dark ? "border-white/30 bg-white/5 text-white/70" : "border-[#fb6ba8]/40 bg-[#fff5f9] text-[#282828]/60"} ${className}`}
    >
      <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em]">{label}</span>
    </div>
  );
}
