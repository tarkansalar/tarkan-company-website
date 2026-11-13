// Images used as section visuals on /canggus. Every file is a real asset
// from canggus/manifest.json (ai_generated: false); nothing here is AI art.
// Products: transparent cut-outs, md variant (max 800 px wide), sensitive_claim
// false (all are in the carousel catalog too). w/h = md size.
// Photos: canggus/factory/ and canggus/process/, original size.

export type VisualProduct = { stem: string; w: number; h: number; name: string };
export type VisualPhoto = { src: string; w: number; h: number; alt: string };

const product = (slug: string, w: number, h: number, name: string): VisualProduct => ({
  stem: `canggus/products/${slug}`,
  w,
  h,
  name,
});

export const VP = {
  collagenGummy: product("collagen-gummy", 551, 1075, "Collagen gummies"),
  magnesiumGummy: product("magnesium-glycinate-gummy", 571, 1050, "Magnesium glycinate gummies"),
  creatineCaps: product("creatine-monohydrate-capsule", 554, 1061, "Creatine monohydrate capsules"),
  electrolyte: product("electrolyte-powder", 625, 1062, "Electrolyte powder"),
  magnesiumDrops: product("magnesium-glycinate-liquid-drops", 353, 1074, "Magnesium glycinate liquid drops"),
  omega: product("omega-3-fish-oil-softgels-softgel", 800, 1504, "Omega-3 fish oil softgels"),
  d3k2: product("vitamin-d3-k2-softgels-softgel", 800, 1464, "Vitamin D3 + K2 softgels"),
  ashwagandha: product("ashwagandha-gummy", 551, 1076, "Ashwagandha gummies"),
  coq10: product("coq10-softgels-softgel", 800, 1456, "CoQ10 softgels"),
  matcha: product("matcha-powder", 625, 1062, "Matcha powder"),
  collagenDrops: product("collagen-biotin-liquid-drops", 353, 1074, "Collagen and biotin liquid drops"),
  creatinePowder: product("creatine-powder-powder", 625, 1063, "Creatine powder"),
  collagenPowder: product("collagen-powder", 625, 1062, "Collagen powder"),
  turmeric: product("turmeric-curcumin-capsule", 554, 1061, "Turmeric curcumin capsules"),
} as const;

const photo = (src: string, w: number, h: number, alt: string): VisualPhoto => ({ src: `canggus/${src}.webp`, w, h, alt });

export const PH = {
  campus: photo("factory/facility-a-factory-campus-aerial", 1170, 780, "Facility A, factory campus"),
  showroom: photo("factory/facility-a-sample-showroom", 1005, 535, "Facility A, sample showroom"),
  warehouse: photo("factory/facility-a-warehouse-finished-goods", 471, 228, "Facility A, finished goods warehouse"),
  bottleLine: photo("factory/facility-a-bottle-filling-line", 471, 265, "Facility A, bottle filling line"),
  labTubes: photo("factory/facility-a-lab-test-tubes", 827, 1218, "Facility A, laboratory test tubes"),
  cleanroomLab: photo("factory/facility-a-lab-cleanroom-technicians", 693, 414, "Facility A, cleanroom laboratory"),
  gummyLine: photo("factory/facility-a-gummy-production-closeup", 902, 501, "Facility A, gummy production"),
  mixingTank: photo("factory/facility-b-cleanroom-mixing-tank", 435, 209, "Facility B, cleanroom mixing tank"),
  powderMixer: photo("factory/facility-b-powder-mixer-cleanroom", 259, 354, "Facility B, powder mixer in cleanroom"),
  productionLine: photo("factory/facility-c-production-line", 1600, 1045, "Facility C, production line"),
  qcLab: photo("factory/facility-c-qc-laboratory", 1600, 1066, "Facility C, QC laboratory"),
  hplc: photo("factory/facility-c-chromatography-hplc", 1600, 1066, "Facility C, HPLC analysis"),
  analytical: photo("factory/facility-c-analytical-instrument", 1600, 1066, "Facility C, analytical instrument"),
  processing: photo("factory/facility-c-processing-equipment", 1600, 1007, "Facility C, processing equipment"),
  pillsBanner: photo("process/pills-assorted-banner", 1078, 593, "Assorted capsules and tablets"),
  pillsScatter: photo("process/capsules-tablets-scatter", 1600, 1179, "Capsules and tablets"),
  tabletsMixed: photo("process/tablets-capsules-mixed", 1509, 925, "Mixed tablets and capsules"),
  gummies: photo("process/gummies-assorted-shapes", 1510, 1509, "Gummies in assorted shapes"),
  softgels: photo("process/softgels-mixed", 1336, 908, "Softgels"),
  powderBowls: photo("process/powder-glass-bowls-1", 1600, 1179, "Powders in glass bowls"),
  droppers: photo("process/dropper-bottles-eucalyptus", 1600, 1179, "Amber dropper bottles"),
  softgelsAmber: photo("process/softgels-amber-closeup", 1254, 1254, "Amber softgels"),
} as const;

// Founder portrait supplied by Tuan (real photo, public bucket URL, not AI).
export const FOUNDER_PHOTO = {
  src: "https://wobiecnlwkpkjseambzd.supabase.co/storage/v1/object/public/tarkan-company-asset/img%201.png",
  w: 499,
  h: 500,
  alt: "Portrait of the Canggus founder in a dark navy shirt",
};
