import Link from "next/link";
import { BOOKING_URL, AUDIT_QUIZ_URL } from "@/lib/constants";

export default function HowToStart() {
  const primaryItems = [
    "Your business",
    "Your current problems",
    "Your numbers, if you want to share them",
    "Your tools",
    "Your AI setup",
    "Your bottlenecks",
    "Where things feel messy",
    "Where profit may be leaking",
    "What I would fix first",
  ];

  const secondaryItems = [
    "Margin",
    "Inventory",
    "SKUs",
    "Tools",
    "AI confusion",
    "Supplier issues",
    "Launch speed",
    "Decision bottlenecks",
  ];

  return (
    <section className="py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <p className="font-space font-bold text-xl text-neon tracking-[0.02em] mb-6">
          Choose how you want to start.
        </p>

        <h2 className="font-space font-bold text-3xl lg:text-4xl mb-12 leading-[1.2] text-white">
          Two ways to start.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Primary card */}
          <div className="bg-card-bg border-2 border-neon p-7 lg:p-8">
            <p className="font-space font-bold text-[10px] tracking-[0.18em] uppercase text-neon mb-3">
              Best option
            </p>
            <h3 className="font-space font-bold text-xl text-white mb-4 leading-[1.3]">
              Book the free 30-minute audit call.
            </h3>
            <p className="font-inter text-[17px] leading-[1.6] text-supporting mb-5">
              Choose this if you want direct feedback from me.
            </p>
            <p className="font-inter text-[17px] leading-[1.6] text-white mb-4">
              We will go through:
            </p>
            <ul className="space-y-3 pl-0 mb-6">
              {primaryItems.map((item) => (
                <li
                  key={item}
                  className="border-l-4 border-neon pl-5 font-inter text-[15px] text-supporting leading-[1.6]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-space font-bold text-white text-[17px] leading-[1.3]">
              By the end, you will know what I see.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener"
              className="bg-neon text-black font-space font-bold px-6 py-4 text-base hover:bg-white transition-colors inline-block mt-6"
            >
              Book My Free 30-Minute Profit + AI Audit Call
            </a>
          </div>

          {/* Secondary card */}
          <div className="bg-card-bg border-l-4 border-neon p-7 lg:p-8">
            <p className="font-space font-bold text-[10px] tracking-[0.18em] uppercase text-neon mb-3">
              Not ready for a call?
            </p>
            <h3 className="font-space font-bold text-xl text-white mb-4 leading-[1.3]">
              Take the 5-minute quiz.
            </h3>
            <p className="font-inter text-[17px] leading-[1.6] text-supporting mb-5">
              It helps identify where your likely leaks may be hiding across:
            </p>
            <ul className="space-y-3 pl-0 mb-6">
              {secondaryItems.map((item) => (
                <li
                  key={item}
                  className="border-l-4 border-supporting/40 pl-5 font-inter text-[15px] text-supporting leading-[1.6]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-inter text-[17px] text-supporting">
              It takes about 5 minutes.
            </p>
            <Link
              href={AUDIT_QUIZ_URL}
              className="border-2 border-neon text-neon font-space font-bold px-6 py-4 text-base hover:bg-neon hover:text-black transition-colors inline-block mt-6"
            >
              Take The 5-Minute Profit + AI Leak Quiz
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
