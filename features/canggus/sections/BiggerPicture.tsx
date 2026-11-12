import SectionIntro from "../components/SectionIntro";

export default function BiggerPicture() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <SectionIntro
          align="center"
          eyebrow="The bigger picture"
          title="This doesn’t have to stay at one or two products."
        />
        <div className="mt-10 space-y-5 text-[17px] sm:text-lg leading-[1.75] text-[#282828]/80">
          <p>
            As your brand gains traction, we can expand the range, develop exclusive formulations,
            and build a complete product line around the customers you already have — with
            positioning that continues to protect you from pure price comparison.
          </p>
          <p>
            You don’t need to build a manufacturing department or spend years developing supplier
            relationships. You get access to the experience, relationships and operational
            infrastructure that make it possible.
          </p>
        </div>
        <p className="mt-12 text-xl sm:text-2xl leading-[1.5] font-semibold tracking-[-0.01em] text-[#282828]">
          Your customers create the demand. Your brand owns the relationship.{" "}
          <span className="text-[#fb6ba8]">
            We provide the manufacturing capability and the product development support.
          </span>
        </p>
      </div>
    </section>
  );
}
