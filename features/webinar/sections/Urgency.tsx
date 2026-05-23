import { WEBINAR_REGISTRATION_URL } from "@/lib/constants";

export default function Urgency() {
  return (
    <section id="register" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <p className="font-inter text-[18px] lg:text-xl text-supporting leading-[1.6] mb-10">
          This is a live session, not a recording. Seats are limited to keep
          the Q&amp;A useful.{" "}
          <span className="text-white font-medium">
            Once the room is full, registration closes.
          </span>
        </p>

        <a
          href={WEBINAR_REGISTRATION_URL}
          className="bg-neon text-black font-space font-bold px-10 py-5 text-lg lg:text-xl hover:bg-white transition-colors inline-block"
        >
          RESERVE MY SPOT - FREE
        </a>

        <p className="font-inter text-sm text-supporting mt-5">
          Free to attend · No replay guaranteed · Live Q&amp;A
        </p>
      </div>
    </section>
  );
}
