import { BOOKING_URL } from "@/lib/constants";

type LineItem = {
  name: string;
  desc: string;
  value: string;
};

const ITEMS: LineItem[] = [
  {
    name: "80/20 Bestseller Engine™",
    desc: "We find your trapped cash, tell you exactly what to do with it, and build the system so it never leaks again. For the first time, every number in your business talks to each other.",
    value: "$15,000",
  },
  {
    name: "The Clarity Report™",
    desc: "Your exact carry / kill / test / bet list",
    value: "$5,000",
  },
  {
    name: "90-Minute Strategy Intensive",
    desc: "Your numbers + 30 years of operator context",
    value: "$7,500",
  },
  {
    name: "6 Months Access to 80/20 Profit AI",
    desc: "Re-run as your business evolves",
    value: "$12,000",
  },
  {
    name: "Implementation Check-In",
    desc: "Keep execution tight",
    value: "$2,500",
  },
];

export default function WhatYouGet() {
  return (
    <section className="bg-dark-bg py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-bold text-3xl lg:text-4xl mb-12 leading-[1.2]">
          Here&apos;s everything included at $4,997:
        </h2>

        <div className="hidden md:block mb-12">
          <div className="bg-card-bg border-l-4 border-neon">
            <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-neon/20">
              <div className="col-span-4 font-space font-bold text-[11px] tracking-wide uppercase text-neon">
                WHAT YOU GET
              </div>
              <div className="col-span-6 font-space font-bold text-[11px] tracking-wide uppercase text-neon">
                WHAT IT DOES
              </div>
              <div className="col-span-2 font-space font-bold text-[11px] tracking-wide uppercase text-neon text-right">
                VALUE
              </div>
            </div>
            {ITEMS.map((item, i) => (
              <div
                key={item.name}
                className={`grid grid-cols-12 gap-4 px-6 py-5 ${
                  i < ITEMS.length - 1 ? "border-b border-white/5" : ""
                }`}
              >
                <div className="col-span-4 font-space font-bold text-white">
                  {item.name}
                </div>
                <div className="col-span-6 font-inter text-sm text-supporting leading-[1.5]">
                  {item.desc}
                </div>
                <div className="col-span-2 font-space font-bold text-neon text-right">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden space-y-4 mb-12">
          {ITEMS.map((item) => (
            <div
              key={item.name}
              className="bg-card-bg border-l-4 border-neon p-6"
            >
              <div className="font-space font-bold text-white mb-2">
                {item.name}
              </div>
              <p className="font-inter text-sm text-supporting mb-3 leading-[1.5]">
                {item.desc}
              </p>
              <div className="font-space font-bold text-neon">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="mb-10 space-y-3">
          <div className="font-space font-extrabold text-3xl lg:text-4xl text-white">
            Total Value: $42,000
          </div>
          <div className="font-space font-extrabold text-5xl lg:text-[64px] text-white leading-[1.1]">
            Your Investment: $4,997
          </div>
          <p className="font-inter text-sm text-supporting">
            Backed by the $25K guarantee. If we don&apos;t find it, you don&apos;t pay.
          </p>
        </div>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener"
          className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block"
        >
          FIND MY TRAPPED CASH
        </a>
      </div>
    </section>
  );
}
