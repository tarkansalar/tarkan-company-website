import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Be Unstoppable 365",
  description:
    "The 80/20 Bestseller Engine for consumer brands doing $3M-$50M+. We find the cash hiding in your business - fast.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/assets/Logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/assets/Logo.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700;800&family=Inter:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white font-inter">{children}</body>
    </html>
  );
}
