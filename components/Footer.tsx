import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black relative border-t border-neon/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mb-10">
          <div className="space-y-4 max-w-sm">
            <a
              href="#"
              className="inline-flex items-center gap-2.5 font-space font-extrabold text-xl text-neon"
            >
              <Image
                src="https://wobiecnlwkpkjseambzd.supabase.co/storage/v1/object/public/tarkan-company-asset/Logo.png"
                alt="Be Unstoppable 365"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span>BE UNSTOPPABLE 365</span>
            </a>
            <p className="font-inter text-sm text-supporting leading-[1.7]">
              The 80/20 Bestseller Engine for consumer brands doing $3M-$50M+. We
              find the cash hiding in your business - fast.
            </p>
          </div>

          <div>
            <h4 className="font-space font-bold text-[11px] tracking-[0.18em] uppercase text-neon mb-6">
              Connect with Us
            </h4>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.linkedin.com/in/tarkansalar?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-3 px-4 py-3 border border-white/10 bg-white/[0.02] hover:bg-card-bg hover:border-white/20 hover:-translate-y-0.5 transition-all"
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#0A66C2] text-white">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span className="flex flex-col leading-tight">
                  <span className="font-space font-semibold text-[10px] tracking-wide uppercase text-supporting">
                    LinkedIn
                  </span>
                  <span className="font-inter text-xs text-white">Tarkan Salar</span>
                </span>
              </a>

              <a
                href="mailto:tarkan@beunstoppable365.com"
                className="flex items-center gap-3 px-4 py-3 border border-white/10 bg-white/[0.02] hover:bg-card-bg hover:border-white/20 hover:-translate-y-0.5 transition-all"
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-neon text-black">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <span className="flex flex-col leading-tight min-w-0">
                  <span className="font-space font-semibold text-[10px] tracking-wide uppercase text-supporting">
                    Email
                  </span>
                  <span className="font-inter text-xs text-white truncate">
                    tarkan@beunstoppable365.com
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-4 gap-y-1">
            <p className="font-inter text-xs text-supporting">
              &copy; 2026 Be Unstoppable 365. All rights reserved.
            </p>
            <span className="text-supporting/30 text-xs hidden sm:inline">|</span>
            <Link
              href="/terms"
              className="font-inter text-xs text-supporting hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <span className="text-supporting/30 text-xs">|</span>
            <Link
              href="/privacy"
              className="font-inter text-xs text-supporting hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="font-space text-[10px] tracking-[0.12em] text-supporting/60 uppercase">
            Simplicity · Speed · Results · Honesty · Loyalty
          </p>
        </div>
      </div>
    </footer>
  );
}
