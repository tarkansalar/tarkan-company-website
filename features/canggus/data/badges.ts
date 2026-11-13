// GENERATED from canggus/manifest.json v3 (badges[] + certifications[] + certificates[]).
// BADGE_LOGOS: logo badge per standard per facility, taken from the badge_id each
// facility's certifications[] row points to (-sm.webp, 240 px). Facility B logos
// are low_res (upscaled from ~48 px catalog crops): never show them above 96 px.
// CERTIFICATE_SCANS: every uploaded certificate scan (redacted). Status is derived
// from validUntil at build time; only a current document may be called verified.
// Paths are relative to CANGGUS_ASSET_BASE (Supabase public bucket).

export type BadgeLogo = { src: string; w: number; h: number; lowRes: boolean };

export const BADGE_LOGOS: Record<string, Partial<Record<"A" | "B" | "C", BadgeLogo>>> = {
  "fssc": {
    "A": {
      "src": "canggus/badges/fssc-22000-facility-b-sm.webp",
      "w": 240,
      "h": 239,
      "lowRes": true
    },
    "B": {
      "src": "canggus/badges/fssc-22000-facility-b-sm.webp",
      "w": 240,
      "h": 239,
      "lowRes": true
    }
  },
  "haccp": {
    "A": {
      "src": "canggus/badges/haccp-facility-a-sm.webp",
      "w": 240,
      "h": 231,
      "lowRes": false
    },
    "B": {
      "src": "canggus/badges/haccp-facility-b-sm.webp",
      "w": 240,
      "h": 204,
      "lowRes": true
    },
    "C": {
      "src": "canggus/badges/haccp-facility-c-sm.webp",
      "w": 240,
      "h": 240,
      "lowRes": false
    }
  },
  "iso22000": {
    "A": {
      "src": "canggus/badges/iso-facility-a-sm.webp",
      "w": 240,
      "h": 198,
      "lowRes": false
    },
    "B": {
      "src": "canggus/badges/iso-22000-facility-b-sm.webp",
      "w": 240,
      "h": 229,
      "lowRes": true
    },
    "C": {
      "src": "canggus/badges/iso-22000-facility-c-sm.webp",
      "w": 240,
      "h": 225,
      "lowRes": false
    }
  },
  "gmp": {
    "A": {
      "src": "canggus/badges/gmp-facility-a-sm.webp",
      "w": 240,
      "h": 240,
      "lowRes": false
    },
    "B": {
      "src": "canggus/badges/gmp-facility-b-sm.webp",
      "w": 240,
      "h": 237,
      "lowRes": true
    },
    "C": {
      "src": "canggus/badges/gmp-facility-c-sm.webp",
      "w": 240,
      "h": 240,
      "lowRes": false
    }
  },
  "nsf": {
    "A": {
      "src": "canggus/badges/nsf-facility-a-sm.webp",
      "w": 240,
      "h": 240,
      "lowRes": false
    },
    "B": {
      "src": "canggus/badges/nsf-facility-b-sm.webp",
      "w": 240,
      "h": 240,
      "lowRes": true
    }
  },
  "brcgs": {
    "A": {
      "src": "canggus/badges/brc-facility-b-sm.webp",
      "w": 174,
      "h": 240,
      "lowRes": true
    },
    "B": {
      "src": "canggus/badges/brc-facility-b-sm.webp",
      "w": 174,
      "h": 240,
      "lowRes": true
    }
  },
  "halal": {
    "A": {
      "src": "canggus/badges/halal-facility-a-sm.webp",
      "w": 240,
      "h": 240,
      "lowRes": false
    },
    "B": {
      "src": "canggus/badges/halal-facility-b-sm.webp",
      "w": 239,
      "h": 240,
      "lowRes": true
    },
    "C": {
      "src": "canggus/badges/halal-facility-c-sm.webp",
      "w": 240,
      "h": 240,
      "lowRes": false
    }
  },
  "fda": {
    "A": {
      "src": "canggus/badges/fda-registered-facility-a-sm.webp",
      "w": 240,
      "h": 240,
      "lowRes": false
    },
    "B": {
      "src": "canggus/badges/fda-registered-facility-b-sm.webp",
      "w": 240,
      "h": 102,
      "lowRes": true
    },
    "C": {
      "src": "canggus/badges/fda-registered-facility-c-sm.webp",
      "w": 240,
      "h": 240,
      "lowRes": false
    }
  },
  "nongmo": {
    "A": {
      "src": "canggus/badges/non-gmo-facility-a-sm.webp",
      "w": 240,
      "h": 240,
      "lowRes": false
    }
  },
  "glutenfree": {
    "A": {
      "src": "canggus/badges/gluten-free-facility-a-sm.webp",
      "w": 240,
      "h": 240,
      "lowRes": false
    },
    "B": {
      "src": "canggus/badges/gluten-free-facility-b-sm.webp",
      "w": 239,
      "h": 240,
      "lowRes": true
    }
  },
  "vegan": {
    "A": {
      "src": "canggus/badges/vegan-facility-a-sm.webp",
      "w": 240,
      "h": 240,
      "lowRes": false
    }
  },
  "iso9001": {
    "B": {
      "src": "canggus/badges/iso-9001-facility-b-sm.webp",
      "w": 240,
      "h": 237,
      "lowRes": true
    },
    "C": {
      "src": "canggus/badges/iso-9001-facility-c-sm.webp",
      "w": 240,
      "h": 240,
      "lowRes": false
    }
  },
  "usda": {
    "B": {
      "src": "canggus/badges/usda-organic-facility-b-sm.webp",
      "w": 239,
      "h": 240,
      "lowRes": true
    }
  },
  "cgmp": {
    "B": {
      "src": "canggus/badges/cgmp-facility-b-sm.webp",
      "w": 240,
      "h": 238,
      "lowRes": true
    },
    "C": {
      "src": "canggus/badges/cgmp-facility-c-sm.webp",
      "w": 240,
      "h": 240,
      "lowRes": false
    }
  }
};

// Logo shown under "All facilities": manifest badge_types[].default_badge_id
// (sharpest variant, vector first).
export const DEFAULT_BADGE_FACILITY: Record<string, "A" | "B" | "C"> = {
  "fssc": "B",
  "haccp": "A",
  "gmp": "A",
  "nsf": "A",
  "brcgs": "B",
  "halal": "A",
  "fda": "A",
  "nongmo": "A",
  "glutenfree": "A",
  "vegan": "A",
  "usda": "B",
  "cgmp": "C",
  "iso9001": "C",
  "iso22000": "C"
};

export type CertificateScan = {
  id: string;
  label: string;
  title: string;
  facility: string;
  issuer: string;
  validUntil: string;
  sm: { src: string; w: number; h: number };
  lg: { src: string; w: number; h: number };
};

export const CERTIFICATE_SCANS: CertificateScan[] = [
  {
    "id": "fssc-22000-facility-a",
    "label": "FSSC 22000",
    "title": "FSSC 22000 (Food Safety System Certification 22000), ISO 22000:2018 + ISO/TS 22002-1:2009 + FSSC Additional Requirements v6.0",
    "facility": "Facility A",
    "issuer": "NSF Certification UK Ltd (UKAS accredited)",
    "validUntil": "2027-08-27",
    "sm": {
      "src": "canggus/certificates/fssc-22000-facility-a-sm.webp",
      "w": 318,
      "h": 476
    },
    "lg": {
      "src": "canggus/certificates/fssc-22000-facility-a-lg.webp",
      "w": 954,
      "h": 1428
    }
  },
  {
    "id": "halal-facility-a",
    "label": "Halal",
    "title": "Halal Certificate",
    "facility": "Facility A",
    "issuer": "Halal Development Institute of Indonesia",
    "validUntil": "2026-03-11",
    "sm": {
      "src": "canggus/certificates/halal-facility-a-sm.webp",
      "w": 308,
      "h": 468
    },
    "lg": {
      "src": "canggus/certificates/halal-facility-a-lg.webp",
      "w": 924,
      "h": 1404
    }
  },
  {
    "id": "nsf-455-2-gmp-facility-a",
    "label": "NSF GMP (dietary supplements)",
    "title": "NSF/ANSI 455-2-2021 GMP for Dietary Supplements",
    "facility": "Facility A",
    "issuer": "NSF International (ANAB accredited)",
    "validUntil": "2025-07-19",
    "sm": {
      "src": "canggus/certificates/nsf-455-2-gmp-facility-a-sm.webp",
      "w": 320,
      "h": 469
    },
    "lg": {
      "src": "canggus/certificates/nsf-455-2-gmp-facility-a-lg.webp",
      "w": 960,
      "h": 1407
    }
  },
  {
    "id": "brcgs-food-safety-facility-a",
    "label": "BRCGS Food Safety",
    "title": "BRCGS Global Standard Food Safety Issue 9",
    "facility": "Facility A",
    "issuer": "NSF Certification LLC (ANAB accredited)",
    "validUntil": "2025-06-30",
    "sm": {
      "src": "canggus/certificates/brcgs-food-safety-facility-a-sm.webp",
      "w": 314,
      "h": 475
    },
    "lg": {
      "src": "canggus/certificates/brcgs-food-safety-facility-a-lg.webp",
      "w": 942,
      "h": 1425
    }
  },
  {
    "id": "fda-food-facility-registration-facility-a",
    "label": "FDA food facility registration",
    "title": "US FDA Food Facility Registration (fiscal year 2023-2024)",
    "facility": "Facility A",
    "issuer": "verification by OUA",
    "validUntil": "2024-12-31",
    "sm": {
      "src": "canggus/certificates/fda-food-facility-registration-facility-a-sm.webp",
      "w": 314,
      "h": 477
    },
    "lg": {
      "src": "canggus/certificates/fda-food-facility-registration-facility-a-lg.webp",
      "w": 942,
      "h": 1431
    }
  },
  {
    "id": "iso-22000-facility-a",
    "label": "ISO 22000",
    "title": "Food Safety Management System ISO 22000:2018",
    "facility": "Facility A",
    "issuer": "NGV (CNAS / IAF)",
    "validUntil": "2024-09-28",
    "sm": {
      "src": "canggus/certificates/iso-22000-facility-a-sm.webp",
      "w": 314,
      "h": 474
    },
    "lg": {
      "src": "canggus/certificates/iso-22000-facility-a-lg.webp",
      "w": 942,
      "h": 1422
    }
  },
  {
    "id": "haccp-facility-a",
    "label": "HACCP",
    "title": "HACCP System Certificate (GB/T 27341-2009, GB 14881-2013)",
    "facility": "Facility A",
    "issuer": "NGV (CNAS)",
    "validUntil": "2024-09-28",
    "sm": {
      "src": "canggus/certificates/haccp-facility-a-sm.webp",
      "w": 314,
      "h": 476
    },
    "lg": {
      "src": "canggus/certificates/haccp-facility-a-lg.webp",
      "w": 942,
      "h": 1428
    }
  }
];
