import type { ReactNode } from "react";

type Objection = {
  title: string;
  body: ReactNode;
};

const OBJECTIONS: Objection[] = [
  {
    title: "“I don’t have time”",
    body: (
      <>
        <blockquote className="font-inter text-[17px] text-supporting italic leading-[1.6] border-l-2 border-neon/40 pl-4">
          &ldquo;I uploaded my data during a lunch break. 48 hours later I had
          a kill list that would&apos;ve taken my team 3 months to figure
          out.&rdquo;
        </blockquote>
        <p className="font-space font-semibold text-sm text-neon mt-4">
          - James, Founder, $15M supplements brand
        </p>
      </>
    ),
  },
  {
    title: "“I have a team already”",
    body: (
      <>
        <blockquote className="font-inter text-[17px] text-supporting italic leading-[1.6] border-l-2 border-neon/40 pl-4">
          &ldquo;My team is smart. They were optimizing the wrong things. This
          showed us what actually mattered - the whole system, not just the
          parts we could see.&rdquo;
        </blockquote>
        <p className="font-space font-semibold text-sm text-neon mt-4">
          - Sofia, Founder, $25M streetwear brand
        </p>
      </>
    ),
  },
  {
    title: "“We’re different”",
    body: (
      <div className="font-inter text-[17px] text-white leading-[1.6] space-y-4">
        <p>
          Every brand thinks their business is the exception. Here&apos;s
          what&apos;s actually true:
        </p>
        <p>
          If you have products, customers, and inventory - the math works the
          same way. SKUs either make money or they don&apos;t. Cash is either
          moving or it&apos;s trapped. Customers either pay back their
          acquisition cost or they don&apos;t.
        </p>
        <p>The variables change. The structure doesn&apos;t.</p>
        <p>
          And if after 48 hours we haven&apos;t found $25K in margin, cash, or
          inventory - you pay nothing. That&apos;s not a pitch. That&apos;s a
          guarantee.
        </p>
      </div>
    ),
  },
  {
    title: "“Is this just another tool?”",
    body: (
      <>
        <blockquote className="font-inter text-[17px] text-supporting italic leading-[1.6] border-l-2 border-neon/40 pl-4">
          &ldquo;I&apos;ve tried dashboards, BI tools, consultants. This was
          the first time someone showed me a ranked list of exactly what to
          do, not just what was happening.&rdquo;
        </blockquote>
        <p className="font-space font-semibold text-sm text-neon mt-4">
          - Michael, Operator, $8M omnichannel brand
        </p>
      </>
    ),
  },
  {
    title: "“Is $4,997 worth it?”",
    body: (
      <div className="font-inter text-[17px] text-white leading-[1.6] space-y-4">
        <p>
          The average brand we work with finds $200K–$1.2M in trapped cash,
          dead inventory, or margin leakage in the first session.
        </p>
        <p>The question isn&apos;t whether $4,997 is worth it.</p>
        <p className="font-space font-bold text-xl text-white pt-2">
          The question is: what is one more month of scaling without this
          clarity actually costing you?
        </p>
      </div>
    ),
  },
];

export default function Objections() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="space-y-6">
          {OBJECTIONS.map((o) => (
            <div key={o.title} className="bg-card-bg border-l-4 border-neon p-8">
              <h3 className="font-space font-bold text-2xl text-white mb-5 leading-[1.3]">
                {o.title}
              </h3>
              {o.body}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
