import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "wobiecnlwkpkjseambzd.supabase.co" },
      { protocol: "https", hostname: "42ogbgr1y1.ucarecd.net" },
    ],
  },
  // canggus.tarkansalar.com serves the Canggus LP at "/" (rewrite, URL stays clean).
  // Other hosts (www.tarkansalar.com, previews, localhost) are unaffected.
  async rewrites() {
    const canggusHost = [{ type: "host" as const, value: "canggus.tarkansalar.com" }];
    return {
      beforeFiles: [
        { source: "/", has: canggusHost, destination: "/canggus" },
        { source: "/privacy", has: canggusHost, destination: "/canggus/privacy" },
        { source: "/terms", has: canggusHost, destination: "/canggus/terms" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
