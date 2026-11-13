import type { IconName } from "../components/Icon";

// Every fact below is taken from canggus/manifest.json -> facilities[].facts[]
// (page references in the comments). Deliberately NOT used:
// - facility-c floor area (manifest flags it as inconsistent, p3)
// - facility-b certification logos and facility-c certification text claims
//   (no certificate document in the catalog -> manifest says "do not claim")
// - expired certificates (manifest.certificates_not_uploaded)
// - MOQ figures (commercial terms are for Tuan to state on the call)
// Real factory names, addresses and logos are never shown.

export type FacilityFact = { icon: IconName; text: string };

export type Facility = {
  id: string;
  label: string;
  photo: { src: string; w: number; h: number; alt: string };
  facts: FacilityFact[];
};

export const FACILITIES: Facility[] = [
  {
    id: "facility-a",
    label: "Facility A",
    photo: {
      src: "canggus/factory/facility-a-factory-campus-aerial.webp",
      w: 1170,
      h: 780,
      alt: "Facility A, factory building",
    },
    facts: [
      // p2
      { icon: "hourglass", text: "Nearly 10 years of R&D and production experience in health products" },
      // p2
      { icon: "users", text: "More than 300 employees" },
      // p2
      { icon: "shieldCheck", text: "Production workshops for 4 dosage forms, built to 100,000-class clean workshop standard" },
      // p6
      { icon: "candy", text: "Fully automatic gummy line, daily output 5 million pcs" },
      // p2
      { icon: "pill", text: "Gummies, drops, capsules, effervescent tablets, powders, shilajit" },
      // p3 + manifest.certificates[0]
      { icon: "award", text: "FSSC 22000 certified, valid until 27 Aug 2027" },
    ],
  },
  {
    id: "facility-b",
    label: "Facility B",
    photo: {
      // low-resolution source (872 px): only used at card size
      src: "canggus/factory/facility-b-clean-workshop-collage.webp",
      w: 872,
      h: 354,
      alt: "Facility B, clean workshop and production equipment",
    },
    facts: [
      // p2, 4, 7
      { icon: "hourglass", text: "Manufacturing since 2010" },
      // p2, 4, 6, 7
      { icon: "users", text: "500+ staff" },
      // p2, 4, 6, 7
      { icon: "area", text: "10,000 m² clean workshop" },
      // p2, 6
      { icon: "factory", text: "Production bases in China, Poland and the USA" },
      // p2, 6, 7
      { icon: "globe", text: "Long-term partners in 50+ countries" },
      // p2, 4, 8
      { icon: "pill", text: "Powder, tablet, capsule, gummy, liquid; stick packs, sachets, pouches" },
    ],
  },
  {
    id: "facility-c",
    label: "Facility C",
    photo: {
      src: "canggus/factory/facility-c-building-exterior.webp",
      w: 1600,
      h: 1059,
      alt: "Facility C, factory building",
    },
    facts: [
      // p1, 2, 3
      { icon: "hourglass", text: "Established 2005, 21 years of experience" },
      // p2
      { icon: "flask", text: "R&D team of over 30 professionals, including Ph.D. experts" },
      // p2, 3
      { icon: "globe", text: "Clients in more than 100 countries and regions" },
      // p2
      { icon: "pill", text: "Tablets, hard capsules, softgels, powders, granules" },
      // p6
      { icon: "package", text: "Effervescent tubes, drops and liquids, powders in jars, sachets, stand-up pouches" },
      // p7
      { icon: "layers", text: "Product development, flavor optimization, packaging design, manufacturing, delivery" },
    ],
  },
];

// Combined figures: each one is a direct manifest fact or a sum of them.
export const NETWORK_STATS: { value: string; label: string; source: string }[] = [
  { value: "3", label: "Manufacturing facilities", source: "Facility A, B and C" },
  { value: "800+", label: "Staff", source: "Facility A (300+) and B (500+)" },
  { value: "5M", label: "Gummies per day", source: "Facility A gummy line" },
  { value: "100+", label: "Countries and regions served", source: "Facility C" },
];

export const PRODUCTION_GALLERY: { src: string; w: number; h: number; caption: string }[] = [
  { src: "canggus/factory/facility-c-production-line.webp", w: 1600, h: 1045, caption: "Production line" },
  { src: "canggus/factory/facility-a-lab-cleanroom-technicians.webp", w: 693, h: 414, caption: "Cleanroom laboratory" },
  { src: "canggus/factory/facility-a-gummy-production-closeup.webp", w: 902, h: 501, caption: "Gummy production" },
  { src: "canggus/factory/facility-c-qc-laboratory.webp", w: 1600, h: 1066, caption: "QC laboratory" },
  { src: "canggus/factory/facility-a-production-line-filling.webp", w: 693, h: 415, caption: "Filling line" },
  { src: "canggus/factory/facility-c-chromatography-hplc.webp", w: 1600, h: 1066, caption: "HPLC analysis" },
];
