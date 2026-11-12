// [TUAN ISI link booking] - temporary anchor until the real booking URL is provided.
// Points to the final CTA section (id="book") on this page.
export const CANGGUS_BOOKING_HREF = "#book";

export const CTA_LABEL = "Book Your Free 15–20 Minute Call";

export type ProductFormat = "tub" | "bottle" | "pouch" | "sachet" | "gummies" | "jar";

export type Product = {
  num: string;
  name: string;
  category: string;
  format: ProductFormat;
  tag?: "For Women" | "For Men";
  tint: string; // placeholder colour only, replace with the real mockup
};

// Visual product-development examples (revisi-instruksi.md), not a fixed catalogue.
// Formats/tints are placeholders until real packaging mockups are supplied.
export const PRODUCTS: Product[] = [
  { num: "01", name: "Pure Creatine Monohydrate", category: "Creatine", format: "tub", tint: "#f4f1ec" },
  { num: "02", name: "Creatine Complex", category: "Creatine", format: "pouch", tint: "#ece8f4" },
  { num: "03", name: "Creatine Gummies", category: "Creatine", format: "gummies", tint: "#fde7f1" },
  { num: "04", name: "Women’s Creatine Complex", category: "Creatine", format: "tub", tag: "For Women", tint: "#fde2ee" },
  { num: "05", name: "Men’s Performance Complex", category: "Creatine", format: "tub", tag: "For Men", tint: "#e6ebef" },
  { num: "06", name: "Magnesium Complex", category: "Magnesium", format: "bottle", tint: "#e9f1ee" },
  { num: "07", name: "Magnesium Citrate", category: "Magnesium", format: "bottle", tint: "#f1f0e6" },
  { num: "08", name: "Pure Collagen Powder", category: "Collagen", format: "jar", tint: "#fbefe8" },
  { num: "09", name: "Collagen + Electrolytes", category: "Collagen", format: "sachet", tint: "#fde9e4" },
  { num: "10", name: "Supplement Gummies", category: "Functional Nutrition", format: "gummies", tint: "#f3eafa" },
  { num: "11", name: "Electrolyte Powder", category: "Hydration", format: "sachet", tint: "#e5f2f6" },
  { num: "12", name: "Functional Wellness Complex", category: "Wellness", format: "bottle", tint: "#eef1e6" },
];
