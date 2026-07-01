import {
  WEBINAR_REGISTRATION_URL,
  WEBINAR_SEAT_CAP,
  WEBINAR_HOT_SEATS,
} from "@/lib/constants";

const OUTCOMES = [
  "3x lower CAC",
  "15-20% higher margins",
  "Better cash flow",
  "Less dead stock",
  "Less firefighting",
  "More value compounding",
];

export default function FinalClose() {
  return (
    <section id="register" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <p className="font-space font-bold text-xl text-neon tracking-[0.02em] mb-6">
          One last thing.
        </p>
        <h2 className="font-space font-extrabold text-3xl lg:text-5xl text-white leading-[1.1] tracking-[-0.02em] mb-10">
          You can ignore this. A lot will.
        </h2>

        <div className="font-inter text-[18px] lg:text-xl leading-[1.7] text-white space-y-6 mb-10">
          <p>
            In 18 months, most founders will still be blaming marketing.
          </p>
          <p className="text-supporting">
            More ads. Better agencies. New channels.
            <br />
            Still wondering why CAC keeps climbing while margins slip and cash
            gets tighter.
          </p>
          <p className="pt-2">
            The ones who moved early will have built a different machine. One
            aligned behind their BLUE OCEAN CODE. One that delivers:
          </p>
        </div>

        <ul className="space-y-3 mb-10">
          {OUTCOMES.map((o) => (
            <li
              key={o}
              className="border-l-4 border-neon pl-5 font-space font-bold text-xl lg:text-2xl text-white leading-[1.3]"
            >
              {o}
            </li>
          ))}
        </ul>

        <div className="font-inter text-[18px] lg:text-xl leading-[1.7] text-white space-y-5 mb-12">
          <p className="text-supporting">
            One kept optimizing tactics.
            <br />
            The other built leverage.
          </p>
          <p className="font-space font-bold text-2xl lg:text-3xl text-neon leading-[1.3] pt-2">
            In 18 months, you&apos;ll either be the founder whose machine
            compounds - or the one still firefighting the same leaks.
          </p>
        </div>

        <div className="border-l-4 border-neon pl-5 mb-12">
          <div className="font-space font-extrabold text-3xl lg:text-4xl text-white leading-none">
            {WEBINAR_SEAT_CAP} seats.
          </div>
          <div className="font-space font-bold text-lg text-supporting mt-2">
            When it&apos;s full, it&apos;s closed.
          </div>
        </div>

        <a
          href={WEBINAR_REGISTRATION_URL}
          target="_blank"
          rel="noopener"
          className="bg-neon text-black font-space font-bold px-10 py-5 text-lg lg:text-xl hover:bg-white transition-colors inline-block"
        >
          CLAIM MY SPOT BEFORE REGISTRATION CLOSES
        </a>

        <p className="font-inter text-sm text-supporting mt-6 leading-[1.6]">
          Free to attend · No replay guaranteed · Live Q&amp;A ·{" "}
          {WEBINAR_HOT_SEATS} founder hot seats · Founder diagnostic included
        </p>
      </div>
    </section>
  );
}
