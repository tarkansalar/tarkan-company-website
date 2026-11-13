// GENERATED from canggus/manifest.json v6 (generated 2026-11-13).
// Small, client-safe part of the product catalog: filter lists, exact counts
// per category x format, and the first 12 cards (rendered on first paint).
// The full list (172 items) is in catalog.ts and reaches the browser as
// static JSON from /canggus/catalog.json, fetched after the page has loaded.

export const CANGGUS_ASSET_BASE = "https://wobiecnlwkpkjseambzd.supabase.co/storage/v1/object/public/tarkan-company-asset/";

export const PRODUCT_CATEGORIES = [
  "Creatine",
  "Magnesium",
  "Collagen",
  "Electrolytes & Hydration",
  "Gummies",
  "Functional Wellness",
  "Protein & Sports Nutrition"
] as const;

export const PRODUCT_FORMATS = [
  "Gummies",
  "Capsules",
  "Softgels",
  "Drops",
  "Powder",
  "Tablets",
  "Other"
] as const;

export type CatalogProduct = {
  id: string;
  name: string;
  category: (typeof PRODUCT_CATEGORIES)[number];
  format: (typeof PRODUCT_FORMATS)[number];
  label: string;
  tag: "For Men" | "For Women" | null;
  facility: string;
  stem: string;
  w: number;
  h: number;
  lowRes: boolean;
  blur: string;
  /** Up to 4, as printed in the catalog (claims removed). [] = none printed. */
  benefits: string[];
  /** e.g. "2000 bottles". "" = catalog prints no MOQ. */
  moq: string;
  /** e.g. "60ml/bottle". "" = none. */
  spec: string;
  specDetail: string;
  /** One sentence, only when the catalog prints one. */
  description: string;
};

export const CATALOG_TOTAL = 172;

// COUNTS[category][format] = number of products
export const CATALOG_COUNTS: Record<(typeof PRODUCT_CATEGORIES)[number], Record<(typeof PRODUCT_FORMATS)[number], number>> = {
  "Creatine": {
    "Gummies": 2,
    "Capsules": 1,
    "Softgels": 0,
    "Drops": 0,
    "Powder": 3,
    "Tablets": 0,
    "Other": 0
  },
  "Magnesium": {
    "Gummies": 4,
    "Capsules": 4,
    "Softgels": 0,
    "Drops": 1,
    "Powder": 0,
    "Tablets": 2,
    "Other": 0
  },
  "Collagen": {
    "Gummies": 2,
    "Capsules": 2,
    "Softgels": 0,
    "Drops": 1,
    "Powder": 2,
    "Tablets": 1,
    "Other": 1
  },
  "Electrolytes & Hydration": {
    "Gummies": 0,
    "Capsules": 0,
    "Softgels": 0,
    "Drops": 0,
    "Powder": 4,
    "Tablets": 2,
    "Other": 0
  },
  "Gummies": {
    "Gummies": 43,
    "Capsules": 0,
    "Softgels": 0,
    "Drops": 0,
    "Powder": 0,
    "Tablets": 0,
    "Other": 0
  },
  "Functional Wellness": {
    "Gummies": 0,
    "Capsules": 34,
    "Softgels": 14,
    "Drops": 18,
    "Powder": 6,
    "Tablets": 12,
    "Other": 2
  },
  "Protein & Sports Nutrition": {
    "Gummies": 0,
    "Capsules": 0,
    "Softgels": 0,
    "Drops": 0,
    "Powder": 8,
    "Tablets": 0,
    "Other": 3
  }
};

export const CATALOG_HEAD: CatalogProduct[] = [
  {
    "id": "p-creatine-monohydrate-powder-300-g-powder",
    "name": "Creatine Monohydrate Powder 300 g",
    "category": "Creatine",
    "format": "Powder",
    "label": "Powder · tub",
    "tag": null,
    "facility": "C",
    "stem": "canggus/products/creatine-monohydrate-powder-300-g-powder",
    "w": 800,
    "h": 1443,
    "lowRes": false,
    "blur": "data:image/webp;base64,UklGRqwAAABXRUJQVlA4WAoAAAAQAAAACAAADwAAQUxQSD8AAAABYBvZtpIGGRq0KrSOH+Lu8P8nv++hGQVExARYol72pRau4vdjAIgImCQTMxPL/9i/JEBEgJT8Ls0oW+QcewYAVlA4IEYAAACwAQCdASoJABAAA4BaJQAAVWOU2TkAAP70fR4N0A6ih2QGHv/VAoJ++r8OZ7rlFXYWkYS1li4k9ABLPw2XyMi1EKbocQAA",
    "benefits": [
      "Muscle strength",
      "Exercise performance",
      "Strength & power"
    ],
    "moq": "",
    "spec": "300 g",
    "specDetail": "Unflavored creatine monohydrate",
    "description": ""
  },
  {
    "id": "p-creatine-powder-powder",
    "name": "Creatine Powder",
    "category": "Creatine",
    "format": "Powder",
    "label": "Powder · tub",
    "tag": null,
    "facility": "A",
    "stem": "canggus/products/creatine-powder-powder",
    "w": 625,
    "h": 1063,
    "lowRes": false,
    "blur": "data:image/webp;base64,UklGRroAAABXRUJQVlA4WAoAAAAQAAAACAAADwAAQUxQSD4AAAABYFTbtpKwLKKwqPatAO4y+wS49z10RoCImIAsFOMyFj43+m4MISKgjyqqKnp8xR8hRYSMi76viWvXfWlsClZQOCBWAAAA0AEAnQEqCQAQAAOAWiWUAALmM7Z9VwAA/uDbQiCSa7jBqRucT4zOm3ly+WPt2B1N1isxowd/DhecKx4UKdGdzyNE6hsZvKh+ciaxILqLqtbcAIEAAAA=",
    "benefits": [
      "Boost Recovery",
      "Increase Strength",
      "Build Muscle"
    ],
    "moq": "2000 bottles",
    "spec": "300g/bottle",
    "specDetail": "",
    "description": ""
  },
  {
    "id": "p-creatine-monohydrate-capsule",
    "name": "Creatine Monohydrate",
    "category": "Creatine",
    "format": "Capsules",
    "label": "Capsules · bottle",
    "tag": null,
    "facility": "A",
    "stem": "canggus/products/creatine-monohydrate-capsule",
    "w": 554,
    "h": 1061,
    "lowRes": false,
    "blur": "data:image/webp;base64,UklGRsoAAABXRUJQVlA4WAoAAAAQAAAABwAADwAAQUxQSFQAAAABYFpr25L//FtikQGof6TTWcQGse7u8T/fh+sEETEBRAmiKFQJNZZlWUxKNOQcGWEVLAvUerPgsuAy13jArloOS38xlL8pABAB2mQ5bQTLiyPfFQFWUDggUAAAAPABAJ0BKggAEAADgFoliAJ0APPbiRvMIAD8EyIXLIz+JO7LdJ+TkEHm5z36fFggmn5GafVFdtbUoqN/cyfa4iEbON2afoJSMm+BbkYj5MAA",
    "benefits": [
      "Endurance Enhance",
      "Support Muscle Building",
      "Support Strength And Performance"
    ],
    "moq": "2000 bottles",
    "spec": "120 counts/bottle",
    "specDetail": "",
    "description": ""
  },
  {
    "id": "p-creatine-gummies-gummy",
    "name": "Creatine Gummies",
    "category": "Creatine",
    "format": "Gummies",
    "label": "Gummies · jar",
    "tag": null,
    "facility": "A",
    "stem": "canggus/products/creatine-gummies-gummy",
    "w": 679,
    "h": 724,
    "lowRes": false,
    "blur": "data:image/webp;base64,UklGRsoAAABXRUJQVlA4WAoAAAAQAAAADgAADwAAQUxQSD0AAAABuTJE9D/AJrJtJ/f8RDKCfyUMCrCRb/V+SR0xAROwXRgkNBxWAokhODWGyHCB/FOzHoiMBB0iza4yRBADAFZQOCBmAAAAEAIAnQEqDwAQAAOAWiWwAnQA9FSqL5IDuAD8CJArEc5ctl4IeAoBL2VcfiZX0adw4qBOOATRvxvNwv5TNI16HzDVhKrjIyvTPAPLOUNj0Ss38mVZADyCDhfvynh/Tv/x/A3n04AA",
    "benefits": [],
    "moq": "",
    "spec": "120 count/bottle",
    "specDetail": "",
    "description": "Contains 5g pure creatine monohydrate per serving combined with L-Taurine, Vitamin B12 for Maximum Benefits."
  },
  {
    "id": "p-magnesium-glycinate-gummy",
    "name": "Magnesium Glycinate",
    "category": "Magnesium",
    "format": "Gummies",
    "label": "Gummies · bottle",
    "tag": null,
    "facility": "A",
    "stem": "canggus/products/magnesium-glycinate-gummy",
    "w": 571,
    "h": 1050,
    "lowRes": false,
    "blur": "data:image/webp;base64,UklGRtwAAABXRUJQVlA4WAoAAAAQAAAACAAADwAAQUxQSF8AAAABcFpr29qEaRVcBaeKyhJRcT3VOACpKuaq+jbvF8YJImIC+Gh7uB43IaN9s+pHZBL86YeYsVeEDDTT9xmyLEO2/oCyLCM8nllNdn013MaGlIhS3N5Z/T2Y7o6383biAABWUDggVgAAABACAJ0BKgkAEAADgFolsAJ0ARAS7Bl8GSAA/vAaOuwcgL8KLIX79a8h+Bnkj5/zmlrINRvub/cU+KpeVV1d4zO1wGO+0wdyC3mozsJIP8uTM0EkAAAA",
    "benefits": [
      "Support Nervous System",
      "Help Brain Health"
    ],
    "moq": "2000 bottles",
    "spec": "60 counts/bottle",
    "specDetail": "",
    "description": ""
  },
  {
    "id": "p-magnesium-glycinate-liquid-drops",
    "name": "Magnesium Glycinate",
    "category": "Magnesium",
    "format": "Drops",
    "label": "Liquid drops · dropper bottle",
    "tag": null,
    "facility": "A",
    "stem": "canggus/products/magnesium-glycinate-liquid-drops",
    "w": 353,
    "h": 1074,
    "lowRes": false,
    "blur": "data:image/webp;base64,UklGRrQAAABXRUJQVlA4WAoAAAAQAAAABAAADwAAQUxQSEcAAAAJcFvbthIdXFKvAiKLKI0OaMQrgDZoQmcid2shIiaAoM9GXNsFDx89p7AOC9PelMAoo0vYpUjEAsCbyJ/3G3fuAgLCMM3zAABWUDggRgAAALABAJ0BKgUAEAADgFolmAACmmVJzwAA/vFCxnGlb+Cs2+UrxypQr39kc8jlC13qZoo/iItqFrVvg537+v5VFIvTMhxAAAA=",
    "benefits": [
      "Good Sleep & Relax",
      "Muscles Support",
      "Heart Health Support"
    ],
    "moq": "2000 bottles",
    "spec": "60ml/bottle",
    "specDetail": "",
    "description": ""
  },
  {
    "id": "p-magnesium-citrate-gummy",
    "name": "Kids Magnesium Citrate",
    "category": "Magnesium",
    "format": "Gummies",
    "label": "Kids gummies · bottle",
    "tag": null,
    "facility": "A",
    "stem": "canggus/products/magnesium-citrate-gummy",
    "w": 761,
    "h": 1075,
    "lowRes": false,
    "blur": "data:image/webp;base64,UklGRtAAAABXRUJQVlA4WAoAAAAQAAAACgAADwAAQUxQSFMAAAABcBvbtlI1hlRJC5RARkQBRO7uHl/BvlYQEROglk3btk1dZsrAr72IkO5AZsHEd2TLYHyh5UwPxNH+xri80f3X/Ea7I9IdcUz5tSPrQV41be7qAgBWUDggVgAAADACAJ0BKgsAEAADgFolsAJ0fwAYEO454JgAAP704o7kGlEFG3FSdRvKbQJ5Jv8b6mzIETFuDzH8d/Imrtz4kWCVR2YqNFr5EkeiRS/PYF6bXWr0ZCwA",
    "benefits": [
      "Stress Relief",
      "Supports Healthy Bones",
      "Supports Muscle & Nerve Health"
    ],
    "moq": "2000 bottles",
    "spec": "60 counts/bottle",
    "specDetail": "",
    "description": ""
  },
  {
    "id": "p-magnesium-glycinate-500-mg-capsules-capsule",
    "name": "Magnesium Glycinate 500 mg Capsules",
    "category": "Magnesium",
    "format": "Capsules",
    "label": "Capsules · bottle",
    "tag": null,
    "facility": "C",
    "stem": "canggus/products/magnesium-glycinate-500-mg-capsules-capsule",
    "w": 800,
    "h": 1552,
    "lowRes": false,
    "blur": "data:image/webp;base64,UklGRsQAAABXRUJQVlA4WAoAAAAQAAAABwAADwAAQUxQSFkAAAABcFzbttIsKMIdZlTJiDYYOXXERlnpwd099+HQQkRMADdYHvbLiWznjY66JIC2FuPn/38essEfeQ5kt5zynPL3pum4azq3nHqd+20AIuB4zxs/7nR+OCxmHgBWUDggRAAAAJABAJ0BKggAEAADgFoljAAC5oMeUAD+9ODOHqRBRyfsxNeXaefA7Nz9ueHxveZYuqoFn34Yix1+/uFZzOwdzm0zx+AA",
    "benefits": [
      "Sleep support",
      "Relaxation support"
    ],
    "moq": "",
    "spec": "60 capsules, 500 mg",
    "specDetail": "Magnesium glycinate formula",
    "description": ""
  },
  {
    "id": "p-magnesium-capsule",
    "name": "Magnesium",
    "category": "Magnesium",
    "format": "Capsules",
    "label": "Capsules · bottle",
    "tag": null,
    "facility": "A",
    "stem": "canggus/products/magnesium-capsule",
    "w": 554,
    "h": 1061,
    "lowRes": false,
    "blur": "data:image/webp;base64,UklGRsQAAABXRUJQVlA4WAoAAAAQAAAABwAADwAAQUxQSFQAAAABYFpr25L//FtikQGof6TTWcQGse7u8T/fh+sEETEBRAmiKFQJNZZlWUxKNOQcGWEVLAvUerPgsuAy13jArloOS38xlL8pABAB2mQ5bQTLiyPfFQFWUDggSgAAAPABAJ0BKggAEAADgFollAJ0ARSkRdjsmAD8EyIXLIz+i+dRQc9jBKsTD8orLi41xjLsVev5DAW0fikE+NyTDWZ3pvTmUz3s74AA",
    "benefits": [
      "Supports Healthy Nerve Function",
      "Vital to Cellular Energy Production",
      "Supports Bone Strength & Density"
    ],
    "moq": "2000 bottles",
    "spec": "90 counts/bottle",
    "specDetail": "",
    "description": ""
  },
  {
    "id": "p-calcium-magnesium-zinc-gummy-2",
    "name": "Kids Calcium Magnesium & Zinc",
    "category": "Magnesium",
    "format": "Gummies",
    "label": "Kids gummies · bottle",
    "tag": null,
    "facility": "A",
    "stem": "canggus/products/calcium-magnesium-zinc-gummy-2",
    "w": 761,
    "h": 1075,
    "lowRes": false,
    "blur": "data:image/webp;base64,UklGRtYAAABXRUJQVlA4WAoAAAAQAAAACgAADwAAQUxQSFIAAAABcBvbtlJVhlRJC5RARkZO5O6u8RX8SwURMQFqUTdt2zRlqgz87EWEdAUyCya+IlsG44OWMd0Qh9uLYX7R/tf0otkQ6Yo4pPzsyHqQVU2bO7oAVlA4IF4AAAAQAgCdASoLABAAA4BaJbACdH8AGZLtDubwAP708aJlHJHSqsycX428H4snn0OIbsfA5ayWfDuTqBzSuCnekA/jyy4GUYsF6LIe+Kat6Q6C3c+EiwL2sPsn+qWimgAA",
    "benefits": [
      "Bone Health",
      "Energy Boost & Immune Health",
      "High Absorption Supplement"
    ],
    "moq": "2000 bottles",
    "spec": "60 counts/bottle",
    "specDetail": "",
    "description": ""
  },
  {
    "id": "p-zma-capsule-capsule",
    "name": "ZMA Capsule",
    "category": "Magnesium",
    "format": "Capsules",
    "label": "Capsules · bottle",
    "tag": null,
    "facility": "A",
    "stem": "canggus/products/zma-capsule-capsule",
    "w": 554,
    "h": 1061,
    "lowRes": false,
    "blur": "data:image/webp;base64,UklGRsQAAABXRUJQVlA4WAoAAAAQAAAABwAADwAAQUxQSFQAAAABYFpr25L//FtikQGof6TTWcQGse7u8T/fh+sEETEBRAmiKFQJNZZlWUxKNOQcGWEVLAvUerPgsuAy13jArloOS38xlL8pABAB2mQ5bQTLiyPfFQFWUDggSgAAABACAJ0BKggAEAADgFoljAJ0APSW/gASMgAA/BMiFyyM/iTuy3Sfk4geb0LhEWNRsa9K7AsAsVbbmPYEFa3rForoXfk+nNrmLgAA",
    "benefits": [
      "Zinc Magnesium B-6",
      "Muscle Strength",
      "Enhanced Absorption"
    ],
    "moq": "2000 bottles",
    "spec": "60 counts/bottle",
    "specDetail": "",
    "description": ""
  },
  {
    "id": "p-ashwagandha-magnesium-capsule",
    "name": "Ashwagandha Magnesium",
    "category": "Magnesium",
    "format": "Capsules",
    "label": "Capsules · bottle",
    "tag": null,
    "facility": "A",
    "stem": "canggus/products/ashwagandha-magnesium-capsule",
    "w": 549,
    "h": 1058,
    "lowRes": false,
    "blur": "data:image/webp;base64,UklGRsYAAABXRUJQVlA4WAoAAAAQAAAABwAADwAAQUxQSFIAAAABcBvbtqq8/7v8kf8eLEQ6sEagEQ+Zl+Ku924cSoiICTDp2NpRZJw2QMM1pV6vmpn6TECmlSOActgpgG73vN38SVn/byeiKrJa8Xbud3p20ut6VlA4IE4AAAAwAgCdASoIABAAA4BaJYwC7AEfblnbt1DbAAD2vmnByV4cypci6zvCo61kZ7t5h2ahpREW5iJ85Goq983Ce7YKREDn6wI6MIqqYomwAAA=",
    "benefits": [
      "Quality Sleep",
      "Memory And Cognition"
    ],
    "moq": "2000 bottles",
    "spec": "60 counts/bottle",
    "specDetail": "",
    "description": ""
  }
];
