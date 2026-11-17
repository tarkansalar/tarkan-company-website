// Visual assets for the short /canggus page. All real files from the public
// Supabase bucket (canggus/manifest.json, ai_generated: false). No key needed.
import { CANGGUS_ASSET_BASE } from "./catalog-meta";

export type VisualProduct = { src: string; w: number; h: number; alt: string };

const product = (slug: string, w: number, h: number, alt: string): VisualProduct => ({
  src: `${CANGGUS_ASSET_BASE}canggus/products/${slug}-md.webp`,
  w,
  h,
  alt,
});

// Hero composition: one product per focus category.
export const HERO_PRODUCTS = {
  creatine: product("creatine-powder-powder", 625, 1063, "Creatine powder tub"),
  magnesium: product("magnesium-glycinate-500-mg-capsules-capsule", 800, 1552, "Magnesium glycinate capsules"),
  electrolyte: product("electrolyte-powder", 625, 1062, "Electrolyte powder tub"),
} as const;

// Founder VSL supplied by Tuan (13 Nov 2026). Public bucket URL, original file
// (not re-encoded): 1080x1920 portrait, about 89 s, about 10 MB.
export const FOUNDER_VSL_SRC =
  "https://wobiecnlwkpkjseambzd.supabase.co/storage/v1/object/public/tarkan-company-asset/Teaser.mp4";

// Product showcase: only the focus categories (Creatine, Magnesium,
// Electrolytes & Hydration). No gummies, no kids products, no protein,
// collagen or other functional products. Ids from data/catalog.ts; the
// catalog itself stays complete in that file.
export const SHOWCASE_IDS = [
  "p-creatine-monohydrate-powder-300-g-powder",
  "p-magnesium-glycinate-500-mg-capsules-capsule",
  "p-electrolyte-drink-mix-sachets-sachet",
  "p-creatine-powder-powder",
  "p-magnesium-glycinate-liquid-drops",
  "p-electrolyte-powder",
  "p-creatine-monohydrate-capsule",
  "p-zma-capsule-capsule",
  "p-electrolyte-effervescent-tablets-tablet",
  "p-magnesium-capsule",
] as const;

// Partner facility standards shown as one row of logos (no text) in "Why me".
// [standard id, facility] pairs into BADGE_LOGOS (data/badges.ts), sharp variants only.
export const BADGE_ROW: [string, "A" | "B" | "C"][] = [
  ["haccp", "A"],
  ["gmp", "A"],
  ["cgmp", "C"],
  ["iso22000", "C"],
  ["iso9001", "C"],
  ["halal", "A"],
];
