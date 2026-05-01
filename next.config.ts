import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "wobiecnlwkpkjseambzd.supabase.co" },
      { protocol: "https", hostname: "42ogbgr1y1.ucarecd.net" },
    ],
  },
};

export default nextConfig;
