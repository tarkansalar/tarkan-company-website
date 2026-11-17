import { Montserrat } from "next/font/google";

// Fonts are loaded with next/font and exposed as CSS variables on the
// /canggus wrapper only, so the rest of the site is untouched.
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cg-sans",
  display: "swap",
});
