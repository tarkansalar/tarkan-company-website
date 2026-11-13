// GENERATED from canggus/manifest.json v2 certifications[] (33 rows,
// grouped into 16 standards). Every row is a standard a partner facility lists in
// its own catalog. verified=true only where evidence_status is document_valid
// (FSSC 22000, Facility A). These are the partner facilities' standards, never
// Canggus' own certification. FDA: "FDA-registered facility", never "approved".
import type { IconName } from "../components/Icon";

export type StandardFacility = { facility: string; verified: boolean };

export type Standard = {
  id: string;
  label: string;
  emblem: string[];
  icon: IconName;
  group: string;
  facilities: StandardFacility[];
};

export const STANDARDS: Standard[] = [
  {
    "id": "fssc",
    "label": "FSSC 22000",
    "emblem": [
      "FSSC",
      "22000"
    ],
    "icon": "shieldCheck",
    "group": "Food safety",
    "facilities": [
      {
        "facility": "A",
        "verified": true
      },
      {
        "facility": "B",
        "verified": false
      }
    ]
  },
  {
    "id": "haccp",
    "label": "HACCP",
    "emblem": [
      "HACCP"
    ],
    "icon": "clipboardCheck",
    "group": "Food safety",
    "facilities": [
      {
        "facility": "A",
        "verified": false
      },
      {
        "facility": "B",
        "verified": false
      },
      {
        "facility": "C",
        "verified": false
      }
    ]
  },
  {
    "id": "iso22000",
    "label": "ISO 22000",
    "emblem": [
      "ISO",
      "22000"
    ],
    "icon": "shieldCheck",
    "group": "Food safety",
    "facilities": [
      {
        "facility": "A",
        "verified": false
      },
      {
        "facility": "B",
        "verified": false
      },
      {
        "facility": "C",
        "verified": false
      }
    ]
  },
  {
    "id": "brcgs",
    "label": "BRCGS",
    "emblem": [
      "BRCGS"
    ],
    "icon": "shieldCheck",
    "group": "Food safety",
    "facilities": [
      {
        "facility": "A",
        "verified": false
      },
      {
        "facility": "B",
        "verified": false
      }
    ]
  },
  {
    "id": "gmp",
    "label": "GMP",
    "emblem": [
      "GMP"
    ],
    "icon": "factory",
    "group": "Manufacturing practice",
    "facilities": [
      {
        "facility": "A",
        "verified": false
      },
      {
        "facility": "B",
        "verified": false
      },
      {
        "facility": "C",
        "verified": false
      }
    ]
  },
  {
    "id": "cgmp",
    "label": "cGMP",
    "emblem": [
      "cGMP"
    ],
    "icon": "factory",
    "group": "Manufacturing practice",
    "facilities": [
      {
        "facility": "B",
        "verified": false
      },
      {
        "facility": "C",
        "verified": false
      }
    ]
  },
  {
    "id": "nsf",
    "label": "NSF",
    "emblem": [
      "NSF"
    ],
    "icon": "badgeCheck",
    "group": "Manufacturing practice",
    "facilities": [
      {
        "facility": "A",
        "verified": false
      },
      {
        "facility": "B",
        "verified": false
      }
    ]
  },
  {
    "id": "iso9001",
    "label": "ISO 9001",
    "emblem": [
      "ISO",
      "9001"
    ],
    "icon": "award",
    "group": "Quality management",
    "facilities": [
      {
        "facility": "B",
        "verified": false
      },
      {
        "facility": "C",
        "verified": false
      }
    ]
  },
  {
    "id": "fda",
    "label": "FDA-registered facility",
    "emblem": [
      "FDA",
      "registered"
    ],
    "icon": "landmark",
    "group": "Registration & licensing",
    "facilities": [
      {
        "facility": "A",
        "verified": false
      },
      {
        "facility": "B",
        "verified": false
      },
      {
        "facility": "C",
        "verified": false
      }
    ]
  },
  {
    "id": "sc",
    "label": "China SC food production license",
    "emblem": [
      "SC"
    ],
    "icon": "fileText",
    "group": "Registration & licensing",
    "facilities": [
      {
        "facility": "A",
        "verified": false
      },
      {
        "facility": "C",
        "verified": false
      }
    ]
  },
  {
    "id": "export",
    "label": "Export qualification",
    "emblem": [
      "EXPORT"
    ],
    "icon": "globe",
    "group": "Registration & licensing",
    "facilities": [
      {
        "facility": "C",
        "verified": false
      }
    ]
  },
  {
    "id": "halal",
    "label": "Halal",
    "emblem": [
      "HALAL"
    ],
    "icon": "badgeCheck",
    "group": "Ingredients & diets",
    "facilities": [
      {
        "facility": "A",
        "verified": false
      },
      {
        "facility": "B",
        "verified": false
      },
      {
        "facility": "C",
        "verified": false
      }
    ]
  },
  {
    "id": "usda",
    "label": "USDA Organic",
    "emblem": [
      "ORGANIC"
    ],
    "icon": "leaf",
    "group": "Ingredients & diets",
    "facilities": [
      {
        "facility": "B",
        "verified": false
      }
    ]
  },
  {
    "id": "nongmo",
    "label": "Non-GMO",
    "emblem": [
      "NON",
      "GMO"
    ],
    "icon": "sprout",
    "group": "Ingredients & diets",
    "facilities": [
      {
        "facility": "A",
        "verified": false
      }
    ]
  },
  {
    "id": "glutenfree",
    "label": "Gluten Free",
    "emblem": [
      "GLUTEN",
      "FREE"
    ],
    "icon": "ban",
    "group": "Ingredients & diets",
    "facilities": [
      {
        "facility": "A",
        "verified": false
      },
      {
        "facility": "B",
        "verified": false
      }
    ]
  },
  {
    "id": "vegan",
    "label": "Vegan",
    "emblem": [
      "VEGAN"
    ],
    "icon": "sprout",
    "group": "Ingredients & diets",
    "facilities": [
      {
        "facility": "A",
        "verified": false
      }
    ]
  }
];

export const VERIFIED_CERTIFICATE = {
  "label": "FSSC 22000",
  "facility": "Facility A",
  "file": "canggus/certificates/fssc-22000-facility-a.webp",
  "issuer": "NSF Certification UK Ltd (UKAS accredited)",
  "valid_until": "2027-08-27",
  "scheme": "ISO 22000:2018 + ISO/TS 22002-1"
};
