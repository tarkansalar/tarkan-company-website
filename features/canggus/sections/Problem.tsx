import SectionIntro from "../components/SectionIntro";

export default function Problem() {
  return (
    <section className="py-16 lg:py-24 bg-[#fdf7fa]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <SectionIntro eyebrow="The problem" title="A quotation doesn’t tell you everything." />
        <p className="mt-6 text-[17px] sm:text-lg leading-[1.75] text-[#282828]/80">
          Visiting the Canton Fair or emailing factories is easy. Finding the right manufacturer,
          product and commercial opportunity is not. You need to judge specifications, ingredients,
          quality documents, certifications, MOQs and real production costs. That takes
          experience, time and focus.{" "}
          <span className="font-semibold text-[#282828]">That’s what I bring.</span>
        </p>
      </div>
    </section>
  );
}
