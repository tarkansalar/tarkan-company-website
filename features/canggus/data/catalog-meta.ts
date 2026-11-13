// GENERATED from canggus/manifest.json v2 (generated 2026-11-13).
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
    "blur": "data:image/webp;base64,UklGRqwAAABXRUJQVlA4WAoAAAAQAAAACAAADwAAQUxQSD8AAAABYBvZtpIGGRq0KrSOH+Lu8P8nv++hGQVExARYol72pRau4vdjAIgImCQTMxPL/9i/JEBEgJT8Ls0oW+QcewYAVlA4IEYAAACwAQCdASoJABAAA4BaJQAAVWOU2TkAAP70fR4N0A6ih2QGHv/VAu0TTI21Z87+Ln1pp3IKYYQ9fAAX78Nl8jItRCm6HEAA"
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
    "blur": "data:image/webp;base64,UklGRroAAABXRUJQVlA4WAoAAAAQAAAACAAADwAAQUxQSD4AAAABYFTbtpKwLKKwqPatAO4y+wS49z10RoCImIAsFOMyFj43+m4MISKgjyqqKnp8xR8hRYSMi76viWvXfWlsClZQOCBWAAAA0AEAnQEqCQAQAAOAWiWUAALmM7Z9VwAA/uDbQiCSa7jBqRucT4zOm3ly+WPt2B1N1isxowd/DhecKx4UKdGdzyNE6hsZvKh+ciaxILqLqtbcAIEAAAA="
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
    "blur": "data:image/webp;base64,UklGRsoAAABXRUJQVlA4WAoAAAAQAAAABwAADwAAQUxQSFQAAAABYFpr25L//FtikQGof6TTWcQGse7u8T/fh+sEETEBRAmiKFQJNZZlWUxKNOQcGWEVLAvUerPgsuAy13jArloOS38xlL8pABAB2mQ5bQTLiyPfFQFWUDggUAAAAPABAJ0BKggAEAADgFoliAJ0APPbiRvMIAD8EyIXLIz+JO7LdJ+TkEHm5z36fFggmn5GafVFdtbUoqN/cyfa4iEbON2afoJSMm+BbkYj5MAA"
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
    "blur": "data:image/webp;base64,UklGRsoAAABXRUJQVlA4WAoAAAAQAAAADgAADwAAQUxQSD0AAAABuTJE9D/AJrJtJ/f8RDKCfyUMCrCRb/V+SR0xAROwXRgkNBxWAokhODWGyHCB/FOzHoiMBB0iza4yRBADAFZQOCBmAAAAEAIAnQEqDwAQAAOAWiWwAnQA9FSqL5IDuAD8CJArEc5ctl4IeAoBL2VcfiZX0adw4qBOOATRvxvNwv5TNI16HzDVhKrjIyvTPAPLOUNj0Ss38mVZADyCDhfvynh/Tv/x/A3n04AA"
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
    "blur": "data:image/webp;base64,UklGRtwAAABXRUJQVlA4WAoAAAAQAAAACAAADwAAQUxQSF8AAAABcFpr29qEaRVcBaeKyhJRcT3VOACpKuaq+jbvF8YJImIC+Gh7uB43IaN9s+pHZBL86YeYsVeEDDTT9xmyLEO2/oCyLCM8nllNdn013MaGlIhS3N5Z/T2Y7o6383biAABWUDggVgAAABACAJ0BKgkAEAADgFolsAJ0ARAS7Bl8GSAA/vAaOuwcgL8KLIX79a8h+Bnkj5/zmlrINRvub/cU+KpeVV1d4zO1wGO+0wdyC3mozsJIP8uTM0EkAAAA"
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
    "blur": "data:image/webp;base64,UklGRrQAAABXRUJQVlA4WAoAAAAQAAAABAAADwAAQUxQSEcAAAAJcFvbthIdXFKvAiKLKI0OaMQrgDZoQmcid2shIiaAoM9GXNsFDx89p7AOC9PelMAoo0vYpUjEAsCbyJ/3G3fuAgLCMM3zAABWUDggRgAAALABAJ0BKgUAEAADgFolmAACmmVJzwAA/vFCxnGlb+Cs2+UrxypQr39kc8jlC13qZoo/iItqFrVvg537+v5VFIvTMhxAAAA="
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
    "blur": "data:image/webp;base64,UklGRtAAAABXRUJQVlA4WAoAAAAQAAAACgAADwAAQUxQSFMAAAABcBvbtlI1hlRJC5RARkQBRO7uHl/BvlYQEROglk3btk1dZsrAr72IkO5AZsHEd2TLYHyh5UwPxNH+xri80f3X/Ea7I9IdcUz5tSPrQV41be7qAgBWUDggVgAAADACAJ0BKgsAEAADgFolsAJ0fwAYEO454JgAAP704o7kGlEFG3FSdRvKbQJ5Jv8b6mzIETFuDzH8d/Imrtz4kWCVR2YqNFr5EkeiRS/PYF6bXWr0ZCwA"
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
    "blur": "data:image/webp;base64,UklGRsQAAABXRUJQVlA4WAoAAAAQAAAABwAADwAAQUxQSFkAAAABcFzbttIsKMIdZlTJiDYYOXXERlnpwd099+HQQkRMADdYHvbLiWznjY66JIC2FuPn/38essEfeQ5kt5zynPL3pum4azq3nHqd+20AIuB4zxs/7nR+OCxmHgBWUDggRAAAAJABAJ0BKggAEAADgFoljAAC5oMeUAD+9ODOHqRBRyfsxNeXaefA7Nz9ueHxveZYuqoFn34Yix1+/uFZzOwdzm0zx+AA"
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
    "blur": "data:image/webp;base64,UklGRsQAAABXRUJQVlA4WAoAAAAQAAAABwAADwAAQUxQSFQAAAABYFpr25L//FtikQGof6TTWcQGse7u8T/fh+sEETEBRAmiKFQJNZZlWUxKNOQcGWEVLAvUerPgsuAy13jArloOS38xlL8pABAB2mQ5bQTLiyPfFQFWUDggSgAAAPABAJ0BKggAEAADgFollAJ0ARSkRdjsmAD8EyIXLIz+i+dRQc9jBKsTD8orLi41xjLsVev5DAW0fikE+NyTDWZ3pvTmUz3s74AA"
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
    "blur": "data:image/webp;base64,UklGRtYAAABXRUJQVlA4WAoAAAAQAAAACgAADwAAQUxQSFIAAAABcBvbtlJVhlRJC5RARkZO5O6u8RX8SwURMQFqUTdt2zRlqgz87EWEdAUyCya+IlsG44OWMd0Qh9uLYX7R/tf0otkQ6Yo4pPzsyHqQVU2bO7oAVlA4IF4AAAAQAgCdASoLABAAA4BaJbACdH8AGZLtDubwAP708aJlHJHSqsycX428H4snn0OIbsfA5ayWfDuTqBzSuCnekA/jyy4GUYsF6LIe+Kat6Q6C3c+EiwL2sPsn+qWimgAA"
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
    "blur": "data:image/webp;base64,UklGRsQAAABXRUJQVlA4WAoAAAAQAAAABwAADwAAQUxQSFQAAAABYFpr25L//FtikQGof6TTWcQGse7u8T/fh+sEETEBRAmiKFQJNZZlWUxKNOQcGWEVLAvUerPgsuAy13jArloOS38xlL8pABAB2mQ5bQTLiyPfFQFWUDggSgAAABACAJ0BKggAEAADgFoljAJ0APSW/gASMgAA/BMiFyyM/iTuy3Sfk4geb0LhEWNRsa9K7AsAsVbbmPYEFa3rForoXfk+nNrmLgAA"
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
    "blur": "data:image/webp;base64,UklGRsYAAABXRUJQVlA4WAoAAAAQAAAABwAADwAAQUxQSFIAAAABcBvbtqq8/7v8kf8eLEQ6sEagEQ+Zl+Ku924cSoiICTDp2NpRZJw2QMM1pV6vmpn6TECmlSOActgpgG73vN38SVn/byeiKrJa8Xbud3p20ut6VlA4IE4AAAAwAgCdASoIABAAA4BaJYwC7AEfblnbt1DbAAD2vmnByV4cypci6zvCo61kZ7t5h2ahpREW5iJ85Goq983Ce7YKREDn6wI6MIqqYomwAAA="
  }
];
