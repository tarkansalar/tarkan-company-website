import { WEBINAR_REGISTRATION_URL, WEBINAR_SEAT_CAP } from "@/lib/constants";

export default function ProclamationLead() {
  return (
    <section className="py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 font-inter text-[18px] lg:text-xl leading-[1.7] text-white space-y-7">
        <p className="font-space font-bold text-xl text-neon tracking-[0.02em]">
          Read this before you decide whether to show up.
        </p>

        <p>
          There&apos;s a shift in consumer brands that most founders won&apos;t
          say out loud - because once you see it, you have to act on it.
        </p>

        <p>
          In one sentence: the people who used to cut, sew, mold, and ship your
          product are now your competitors. Their kids - with American
          passports, German degrees, UK companies, and Dubai bank accounts -
          are building the brands about to eat your lunch.
        </p>

        <p>
          You know the names.{" "}
          <strong className="text-neon font-semibold">
            Shein. Temu. Anker. Cider. Halara. Quince.
          </strong>{" "}
          And twenty more you haven&apos;t heard of, run by 27-year-olds in
          Shenzhen, Yiwu, Istanbul, Ho Chi Minh City - factory behind them,
          TikTok account in front of them.
        </p>

        <p>
          The old deal -{" "}
          <em className="text-white not-italic font-medium">
            they make, we brand
          </em>{" "}
          - is over.
        </p>

        <p>
          Their kids didn&apos;t want to inherit the factory. They wanted the
          brand. The Delaware LLCs are incorporated. The New Jersey and
          Rotterdam warehouses are leased. The Meta accounts are warmed up.
        </p>

        <div className="space-y-2 py-2">
          <p>
            <strong className="text-white">
              They have the cost base you can&apos;t match.
            </strong>
          </p>
          <p>
            <strong className="text-white">
              The speed you can&apos;t match.
            </strong>
          </p>
          <p>
            <strong className="text-white">
              The flexibility you can&apos;t match.
            </strong>
          </p>
        </div>

        <p>
          And now, thanks to AI, the marketing parity you used to count on as
          your last edge.
        </p>

        <p className="font-space font-bold text-2xl lg:text-3xl text-neon leading-[1.3] pt-4">
          If &ldquo;we run good ads and I have loyal fans&rdquo; is still your
          moat in 2026, you&apos;re on borrowed time.
        </p>

        <p className="font-space font-bold text-xl text-white">
          Your category is next.
        </p>

        <div className="pt-6">
          <a
            href={WEBINAR_REGISTRATION_URL}
            className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block"
          >
            SECURE MY SEAT - {WEBINAR_SEAT_CAP} FOUNDERS ONLY
          </a>
        </div>
      </div>
    </section>
  );
}
