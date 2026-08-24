"use client";

import { useEffect, useState } from "react";

type Props = {
  targetIso?: string;
};

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const ZERO: Remaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function diff(targetMs: number): Remaining {
  const ms = Math.max(0, targetMs - Date.now());
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

export default function CountdownTimer({ targetIso }: Props) {
  const targetMs = targetIso ? new Date(targetIso).getTime() : null;
  const isValid = targetMs !== null && !Number.isNaN(targetMs);

  const [remaining, setRemaining] = useState<Remaining>(ZERO);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!isValid) return;
    setMounted(true);
    setRemaining(diff(targetMs!));
    const id = setInterval(() => setRemaining(diff(targetMs!)), 1000);
    return () => clearInterval(id);
  }, [isValid, targetMs]);

  if (!isValid) {
    return (
      <div className="border border-neon/30 bg-neon/5 px-6 py-5 inline-block">
        <div className="font-space font-bold text-[11px] tracking-[0.18em] uppercase text-neon mb-1">
          LIVE EVENT
        </div>
        <div className="font-space font-bold text-2xl text-white">
          Date &amp; time - TBA
        </div>
      </div>
    );
  }

  const display = mounted ? remaining : ZERO;
  const cells: Array<[number, string]> = [
    [display.days, "DAYS"],
    [display.hours, "HRS"],
    [display.minutes, "MIN"],
    [display.seconds, "SEC"],
  ];

  return (
    <div
      className="inline-flex gap-3 sm:gap-4 flex-wrap"
      suppressHydrationWarning
    >
      {cells.map(([n, label]) => (
        <div
          key={label}
          className="bg-card-bg border-l-4 border-neon px-4 py-3 sm:px-6 sm:py-4 min-w-[72px] sm:min-w-[92px] text-center"
        >
          <div
            className="font-space font-extrabold text-2xl sm:text-4xl text-neon leading-none"
            suppressHydrationWarning
          >
            {n.toString().padStart(2, "0")}
          </div>
          <div className="font-space font-bold text-[10px] tracking-[0.18em] uppercase text-supporting mt-2">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
