import { WEBINAR_REGISTRATION_URL, WEBINAR_SEAT_CAP } from "@/lib/constants";

const STEPS = [
  {
    n: "1",
    h: "Complete the 5-minute founder diagnostic.",
  },
  {
    n: "2",
    h: "Get your personalized result.",
    p: "Where the machine is likely leaking - product, supply chain, pricing, inventory, or channels - and how far it is from your BLUE OCEAN CODE.",
  },
  {
    n: "3",
    h: "If you qualify, you get your seat and the private Zoom link.",
  },
];

export default function HowToRegister() {
  return (
    <section className="bg-dark-bg py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <p className="font-space font-bold text-xl text-neon tracking-[0.02em] mb-6">
          How to register.
        </p>
        <h2 className="font-space font-extrabold text-3xl lg:text-5xl text-white leading-[1.1] tracking-[-0.02em] mb-6">
          This isn&apos;t a standard webinar.
        </h2>
        <p className="font-inter text-[18px] lg:text-xl leading-[1.6] text-supporting mb-12">
          It&apos;s a Founders Roundtable - and I only want serious operators
          in the room.
        </p>

        <ol className="space-y-5 mb-12">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="bg-card-bg border-l-4 border-neon p-6 lg:p-7 flex gap-5 items-start"
            >
              <div className="font-space font-extrabold text-3xl text-neon leading-none flex-shrink-0">
                {s.n}
              </div>
              <div>
                <div className="font-space font-bold text-lg lg:text-xl text-white leading-[1.3]">
                  {s.h}
                </div>
                {s.p && (
                  <p className="font-inter text-[16px] leading-[1.6] text-supporting mt-2">
                    {s.p}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>

        <p className="font-inter text-[17px] leading-[1.65] text-white mb-10">
          The questionnaire isn&apos;t to keep people out. It&apos;s to make
          sure the {WEBINAR_SEAT_CAP} in the room are the right{" "}
          {WEBINAR_SEAT_CAP} - the ones who&apos;ll get the most from the Q&amp;A.
        </p>

        <a
          href={WEBINAR_REGISTRATION_URL}
          target="_blank"
          rel="noopener"
          className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block"
        >
          START MY FOUNDER DIAGNOSTIC - CLAIM MY SEAT
        </a>
      </div>
    </section>
  );
}
