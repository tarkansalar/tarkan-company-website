import Link from "next/link";
import { ARCHIVE_QUIZ_URL } from "@/lib/constants";

export default function SecondaryCTA() {
  return (
    <section className="bg-dark-bg border-t border-neon/20 py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-space font-bold text-3xl lg:text-4xl mb-10 leading-[1.2]">
          Not ready to book a call?
        </h2>
        <Link
          href={ARCHIVE_QUIZ_URL}
          className="border-2 border-neon text-neon font-space font-bold px-8 py-4 text-lg hover:bg-neon hover:text-black transition-colors inline-block"
        >
          TAKE MY FREE PROFIT CHECK
        </Link>
        <p className="font-inter text-sm text-neon mt-4">
          3 minutes · 8 questions · Find your trapped cash
        </p>
      </div>
    </section>
  );
}
