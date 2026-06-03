import Link from "next/link";
import { BOOKING_URL, AUDIT_QUIZ_URL } from "@/lib/constants";

export default function PS() {
  const fourLines = [
    "Your business.",
    "Your numbers.",
    "Your tools.",
    "Your bottlenecks.",
  ];

  return (
    <section className="bg-dark-bg py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <p className="font-space font-bold text-xl text-neon tracking-[0.02em] mb-6">
          PS.
        </p>

        <h2 className="font-space font-bold text-3xl lg:text-4xl mb-6 leading-[1.2] text-white">
          If you have ever looked at your numbers and thought:
        </h2>

        <p className="font-space font-extrabold text-3xl lg:text-5xl text-neon italic my-8 leading-[1.2]">
          &quot;I don&apos;t trust this fully.&quot;
        </p>

        <div className="font-inter text-[17px] leading-[1.6] space-y-3 mb-8">
          <p className="font-space font-bold text-xl text-white">
            This is for you.
          </p>
          <p className="text-supporting">Not because the numbers are wrong.</p>
          <p className="font-space font-bold text-white text-xl">
            Because the context is missing.
          </p>
        </div>

        <div className="font-space font-bold text-xl text-white space-y-1 mb-6 leading-[1.3]">
          {fourLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="font-space font-bold text-2xl text-neon mt-6 space-y-1 leading-[1.3]">
          <p>I look for the leak.</p>
          <p>You decide what to do next.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener"
            className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block"
          >
            Book Free 30-Min Audit
          </a>
          <Link
            href={AUDIT_QUIZ_URL}
            className="border-2 border-neon text-neon font-space font-bold px-8 py-4 text-lg hover:bg-neon hover:text-black transition-colors inline-block"
          >
            Take The 5-Min Quiz
          </Link>
        </div>
      </div>
    </section>
  );
}
