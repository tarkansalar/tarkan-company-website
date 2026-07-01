import { WEBINAR_REGISTRATION_URL, WEBINAR_SEAT_CAP } from "@/lib/constants";

export default function ProclamationLead() {
  return (
    <section className="py-24 lg:py-32 border-b border-neon/15">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 font-inter text-[18px] lg:text-xl leading-[1.7] text-white space-y-7">
        <p className="font-space font-bold text-xl text-neon tracking-[0.02em]">
          Read this before you decide whether to show up.
        </p>

        <p>
          Most founders blame marketing.
        </p>

        <p>
          More ads. Better agencies. More channels. New creative.
        </p>

        <p className="font-space font-bold text-2xl text-neon">
          Usually, that&apos;s not the problem.
        </p>

        <p>
          The problem is the machine behind the brand.
        </p>

        <div className="space-y-2 py-2">
          <p>
            <strong className="text-white">
              Supply chains rewarding the wrong products.
            </strong>
          </p>
          <p>
            <strong className="text-white">
              Inventory tying up cash instead of generating it.
            </strong>
          </p>
          <p>
            <strong className="text-white">
              Channels competing instead of compounding.
            </strong>
          </p>
          <p>
            <strong className="text-white">
              Product ranges where 20% of SKUs create profit and 80% consume
              attention.
            </strong>
          </p>
        </div>

        <p>
          The business works harder. The numbers don&apos;t.
        </p>

        <p>
          If the machine isn&apos;t aligned to one position, no amount of
          marketing fixes it. It just gets more expensive to run.
        </p>

        <p className="font-space font-bold text-2xl lg:text-3xl text-neon leading-[1.3] pt-4">
          That&apos;s what this session is about. The BLUE OCEAN CODE - and
          where your machine is quietly leaking margin, cash, and CAC right
          now.
        </p>

        <p className="font-space font-bold text-xl text-white">
          Fix the machine. The rest compounds.
        </p>

        <div className="pt-6">
          <a
            href={WEBINAR_REGISTRATION_URL}
            target="_blank"
            rel="noopener"
            className="bg-neon text-black font-space font-bold px-8 py-4 text-lg hover:bg-white transition-colors inline-block"
          >
            SECURE MY SEAT - {WEBINAR_SEAT_CAP} FOUNDERS ONLY
          </a>
        </div>
      </div>
    </section>
  );
}
