/*
  BEFORE LAUNCH - highest-priority content gap on this page.

  The spec calls for showing the ACTUAL anonymised one-page Blue Ocean Code
  here: "the single biggest conversion improvement ... showing the actual
  one-page Blue Ocean Code before asking for the $499."

  What is rendered below is the ANATOMY of the deliverable - the real
  structure of the one-pager, with the client-specific lines left as short
  neutral descriptions rather than invented content. Nothing here is
  presented as a real client's Code, because inventing one would be a
  fabricated record.

  To finish: replace `ROWS` with the real anonymised Code from a past
  session (brand name removed), keeping the same row structure.
*/

const ROWS: Array<{ label: string; hint: string }> = [
  {
    label: "THE CODE",
    hint: "The 2-3 words the whole company runs on.",
  },
  {
    label: "WHAT IT MEANS",
    hint: "One sentence anyone in the business can repeat without notes.",
  },
  {
    label: "WHAT WE ALWAYS DO",
    hint: "The commitments that hold, whatever the quarter looks like.",
  },
  {
    label: "WHAT WE NEVER DO",
    hint: "The trade-offs the brand refuses, even when they would pay.",
  },
  {
    label: "THE DECISION TEST",
    hint: "The single question every decision is measured against.",
  },
  {
    label: "HOW THE CUSTOMER FEELS IT",
    hint: "Where the standard becomes visible at each touchpoint.",
  },
];

export default function CodeExample() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="font-space font-bold text-3xl lg:text-4xl text-white mb-3 leading-[1.2]">
          This is the one page you receive.
        </h2>
        <p className="font-inter text-[17px] lg:text-lg leading-[1.6] text-supporting mb-12">
          Six lines. Your team reads it in ten seconds and knows how to decide.
        </p>

        {/* The one-pager */}
        <div className="bg-card-bg border-2 border-neon p-8 lg:p-12">
          <div className="font-space font-bold text-[11px] tracking-[0.18em] uppercase text-neon mb-2">
            BLUE OCEAN CODE&trade;
          </div>
          <div className="font-inter text-sm text-supporting mb-10">
            [Your brand]
          </div>

          <div className="divide-y divide-white/10">
            {ROWS.map((row) => (
              <div key={row.label} className="py-6 first:pt-0 last:pb-0">
                <div className="font-space font-bold text-[11px] tracking-[0.14em] uppercase text-neon mb-3">
                  {row.label}
                </div>
                <div className="border-l-4 border-white/15 pl-5 py-3">
                  <p className="font-inter text-[16px] leading-[1.6] text-supporting italic">
                    {row.hint}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="font-inter text-sm text-supporting mt-6">
          Structure of the deliverable. Your own Code is written in your words,
          from your session.
        </p>
      </div>
    </section>
  );
}
