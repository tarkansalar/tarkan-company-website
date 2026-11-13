// GENERATED from canggus/manifest.json v2 processes[] + kind=process assets.
// Step names are the manifest's English translations (name_en). Notes are
// shown only when they describe the step (translator remarks are dropped).
// qc: "ccp" = critical control point (CCP1/CCP2), "inspection" = inspection step.
// unqualified: the step routes unqualified product to unqualified treatment.
// No step diagram exists for gummies in any catalog (manifest notes), so the
// Gummies tab shows the Facility A gummy line facts instead.
import type { IconName } from "../components/Icon";

export type ProcessStep = {
  name: string;
  note: string | null;
  pass: string | null;
  fail: string | null;
  icon: IconName;
  qc: { kind: "ccp" | "inspection"; label: string } | null;
  unqualified: boolean;
  lane: string | null;
  joinsAt: string | null;
};

export type ProcessPhoto = { src: string; w: number; h: number; blur: string; alt: string };

export type ProcessFlow = {
  id: string;
  label: string;
  title: string;
  facility: string;
  steps: ProcessStep[];
  photos: ProcessPhoto[];
};

export const SERVICE_FLOWS: ProcessFlow[] = [
  {
    "id": "oem-customization-flow",
    "label": "OEM process",
    "title": "OEM processing process (one-step service customization)",
    "facility": "Facility A",
    "steps": [
      {
        "name": "Customer requirements",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "clipboardCheck",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Solution set",
        "note": "Formula / solution proposed",
        "pass": null,
        "fail": null,
        "icon": "flask",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Customer review",
        "note": "Client approves the proposal",
        "pass": null,
        "fail": null,
        "icon": "check",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Sample making",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "flask",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Customer trial",
        "note": "Client tests the sample",
        "pass": null,
        "fail": null,
        "icon": "flask",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Sample confirmed",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "flask",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Product planning",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "calendar",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Packaging review",
        "note": "Packaging design check",
        "pass": null,
        "fail": null,
        "icon": "palette",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Packaging material order",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "fileText",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Packaging material inspection",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "scanSearch",
        "qc": {
          "kind": "inspection",
          "label": "Inspection"
        },
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Packaging material warehouse",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "warehouse",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Production order",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "fileText",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Product production",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "factory",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Finished product delivery",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "truck",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Delivery to client",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "truck",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Tracking service",
        "note": "After-sales follow-up",
        "pass": null,
        "fail": null,
        "icon": "repeat",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      }
    ],
    "photos": []
  },
  {
    "id": "one-stop-service-8-steps",
    "label": "One-stop service",
    "title": "One-stop service customization process",
    "facility": "Facility A",
    "steps": [
      {
        "name": "Custom request",
        "note": "Client submits manufacturing needs",
        "pass": null,
        "fail": null,
        "icon": "clipboardCheck",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Sign the contract",
        "note": "Both parties sign the OEM contract",
        "pass": null,
        "fail": null,
        "icon": "fileText",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Deposit",
        "note": "Deposit paid according to the contract",
        "pass": null,
        "fail": null,
        "icon": "wallet",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Confirm the template",
        "note": "OEM custom design confirmed",
        "pass": null,
        "fail": null,
        "icon": "palette",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Factory production",
        "note": "Order released, production starts",
        "pass": null,
        "fail": null,
        "icon": "factory",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Product quality inspection",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "scanSearch",
        "qc": {
          "kind": "inspection",
          "label": "Inspection"
        },
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Balance payment",
        "note": "Balance paid according to the contract",
        "pass": null,
        "fail": null,
        "icon": "wallet",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Outbound shipment",
        "note": "Logistics delivery completed",
        "pass": null,
        "fail": null,
        "icon": "truck",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      }
    ],
    "photos": []
  },
  {
    "id": "one-stop-oem-odm-6-steps",
    "label": "OEM / ODM journey",
    "title": "One-stop OEM / ODM service journey",
    "facility": "Facility C",
    "steps": [
      {
        "name": "Product development",
        "note": "Product concepts and formulation development",
        "pass": null,
        "fail": null,
        "icon": "sparkles",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Flavor optimization",
        "note": "Fine-tuning taste and mouthfeel",
        "pass": null,
        "fail": null,
        "icon": "sparkles",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Packaging design",
        "note": "Label and packaging artwork",
        "pass": null,
        "fail": null,
        "icon": "palette",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Packaging sourcing",
        "note": "Bottles, tubes, pouches and other pack materials",
        "pass": null,
        "fail": null,
        "icon": "package",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Manufacturing",
        "note": "Producing and packing finished products",
        "pass": null,
        "fail": null,
        "icon": "factory",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Delivery",
        "note": "Dispatch and shipment",
        "pass": null,
        "fail": null,
        "icon": "truck",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      }
    ],
    "photos": []
  },
  {
    "id": "concept-to-market-4-steps",
    "label": "Concept to market",
    "title": "From concept to market",
    "facility": "Facility B",
    "steps": [
      {
        "name": "Idea",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "sparkles",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Formula",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "flask",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Manufacture",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "factory",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Deliver",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "truck",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      }
    ],
    "photos": []
  }
];

export const FORMAT_FLOWS: ProcessFlow[] = [
  {
    "id": "capsule-making",
    "label": "Capsules",
    "title": "Capsule making process",
    "facility": "Facility A",
    "steps": [
      {
        "name": "Dosing",
        "note": "Filling powder into capsules",
        "pass": null,
        "fail": null,
        "icon": "droplet",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Pill picking",
        "note": "Sorting out defective capsules",
        "pass": null,
        "fail": null,
        "icon": "search",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Inner packing",
        "note": "Bottle or blister",
        "pass": null,
        "fail": null,
        "icon": "package",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Quality inspection",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "scanSearch",
        "qc": {
          "kind": "inspection",
          "label": "Inspection"
        },
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Outer packing",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "package",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      }
    ],
    "photos": [
      {
        "src": "canggus/process/dosage-hard-capsules.webp",
        "w": 1347,
        "h": 1168,
        "blur": "data:image/webp;base64,UklGRoQBAABXRUJQVlA4WAoAAAAQAAAADwAADQAAQUxQSL0AAAABgKtt//nl/er3//+zPddquyaOTdaug+gQjMnabEy2XWubXe/w6yAiYgJglwirj4SEXUippVjijZ+UNrvQa7/sgQIgIsbnSgyiv76YCUsCzSS3y9DE7z0LECLpnCSnMMVN5CUAJrdulWSAW2nxGL+TvdZ+BqMye8uFaXoimRL2RT6WAXqIf5/rBUDhPX/ZD0z+fPYoSIHAdpKNLYc/7y89SkIB+VMn/PcMAhASKCO/HnZGEyABQCmrojIuCHYAVlA4IKAAAACQAgCdASoQAA4AA4BaJbACdDiK94pK8D2ZpMOwgADh6M/sFr9+fhLpeMMdwtsT5xHqO/BeXQDKYe8ef8uOT6Y/cjEfOeRrhJDdgIxHxran9o1iua51FrdlF9x7nLzrqoyOgn8CSK1Knn1K6TvIXcvPn33gP7RrTStLkWNxHLiQnaKE1n1TxeBzT3+yZ+a3p9ML3v2jsPTAG3mF26YsAAAA",
        "alt": "Dosage hard capsules"
      },
      {
        "src": "canggus/process/capsules-falling.webp",
        "w": 1600,
        "h": 1746,
        "blur": "data:image/webp;base64,UklGRoQBAABXRUJQVlA4WAoAAAAQAAAADgAADwAAQUxQSLMAAAABgLJt2/lX+f3q/5/NvPRPa7adbNtWNNIi06rjvoXtpR3rxm8//34RMQEARVkbYTDn2NgEqBlDbV+YP7gJQJBxHQcrLpY2uZ4FpiNwv4rBzJQPIToAfoLCpijyJiaM++bjpI4KAwJEDRQ0UuipwPhE1638OhwZTjgBVmT5V/6XZfnQCUQsS3/fsiRJP9Lb2lBQ9Yssy3+y8W0AXItLD/Lb8/7B5dFCKCiAlK3E0MJkd3eAAABWUDggqgAAALACAJ0BKg8AEAADgFolsAJ0fwPYuIgXSACRYP31AAD+sPVsEls4RpXP2lxswlpXcWijCH2B/V7nnGQZMYTP3tlbHk3FTftmYy6o5+/HG256hvxpigEHLsDSuRRRP0oCT7DTaEXNZlvhvfR5Bid6tw1wWNqiEz+cuDX6vRbmJXEd/K9BsfmJSoeu+hOdFAMu74JvFuqzoVJJIuIBardV+V8L/dFZkwT9gAAA",
        "alt": "Capsules falling"
      },
      {
        "src": "canggus/process/capsules-blue-white-closeup.webp",
        "w": 1254,
        "h": 1254,
        "blur": "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAAAwAgCdASoQABAAA4BaJbACdAYuvvEelTNb4AD+9+mZqqCdbmfdMqTCG0sISF+qyF7Nfj8OvE2gGRgHsJGOfE+H7mg4dBluWmcQpx1kCVku0jZ5yPl58br3D0hfiskCzTsMtCA5neTHbG3vACY72QCZzcAAAA==",
        "alt": "Capsules blue white closeup"
      }
    ]
  },
  {
    "id": "drops-production",
    "label": "Drops",
    "title": "Production process for drops",
    "facility": "Facility A",
    "steps": [
      {
        "name": "Inner caps: rough cleaning, fine cleaning, sterilization",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "thermometer",
        "qc": null,
        "unqualified": false,
        "lane": "inner-cap",
        "joinsAt": "Seal"
      },
      {
        "name": "Glass bottles: rough cleaning, fine cleaning, dry sterilization",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "thermometer",
        "qc": null,
        "unqualified": false,
        "lane": "bottle",
        "joinsAt": "Filling"
      },
      {
        "name": "Raw material",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "leaf",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Compounding",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "blend",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Filtration",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "filter",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Filling",
        "note": "Clean sterile bottles join here",
        "pass": null,
        "fail": null,
        "icon": "droplet",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Sealing",
        "note": "Sterile inner caps join here",
        "pass": null,
        "fail": null,
        "icon": "lock",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Sterilization",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "thermometer",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Light inspection",
        "note": "Visual inspection against light",
        "pass": null,
        "fail": null,
        "icon": "scanSearch",
        "qc": {
          "kind": "inspection",
          "label": "Inspection"
        },
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Packaging",
        "note": "Packaging materials join here",
        "pass": null,
        "fail": null,
        "icon": "package",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Warehouse",
        "note": "Finished goods storage",
        "pass": null,
        "fail": null,
        "icon": "warehouse",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      }
    ],
    "photos": [
      {
        "src": "canggus/process/dosage-liquid-splash.webp",
        "w": 1600,
        "h": 1456,
        "blur": "data:image/webp;base64,UklGRl4BAABXRUJQVlA4WAoAAAAQAAAADwAADgAAQUxQSMEAAAABgJtt27Hnet7fim3btlP9bczaTmvukA1SfunUaQB26ZIuC/z2v0JETAARlYnY9clV2BMVIiDYzQ6jHX2jIzkFAUkszxanBTKLU8tRJgU2WbGPVJVnUIPozZ0plokXw3muMjYPQ9Fs01r5rf/uuGlbO0BHS8/o06Hm8Ydfi57GgZY//7/P4/G9jyQIoM+99/t9XpfnbblEBJHEb+3X7/f7n0/H0SEkOkm9uV/4eQchoonzUawFekW4WAxiN+iJW1QYAFZQOCB2AAAAUAIAnQEqEAAPAAOAWiWwAnQwRMGSW8TBDe6wAP7vw/UwO+hQLsB9QGA50wVaIPMY8yCGlZjmDwLj4FLDV8SIhXbeqvjLna/mtRCibx/46pMVuV/9lAYZLaX81HRYUBsZ0ypse39RnX54qrOw5WvIPhFu+KwAAA==",
        "alt": "Dosage liquid splash"
      },
      {
        "src": "canggus/process/dropper-bottle-amber-1.webp",
        "w": 1079,
        "h": 593,
        "blur": "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoQAAkAA4BaJaACdAELZFyYeAD+7alC46E05oyY0ndF5wD41xc+eyzdSK/mxBleYMHjt825F0oT4EEhhcgAAA==",
        "alt": "Dropper bottle amber 1"
      },
      {
        "src": "canggus/process/dropper-drop-green.webp",
        "w": 403,
        "h": 529,
        "blur": "data:image/webp;base64,UklGRvwAAABXRUJQVlA4WAoAAAAQAAAACwAADwAAQUxQSGgAAAABcBvbtqrsey8S/yEidsi8AfeUaoipwjWkEWjCoQr90kJETADuYsRWbgad+9vFcKbvY+VPGb7eYwVEGb1PBcRAZX+uGSH+ZZJFFHcxE9y1HMZdcA5RxAUsEcZTiOdRN6Vax9yCivjxBlZQOCBuAAAA0AIAnQEqDAAQAAOAWiUAWHbFfPNnqAbxWX6XcJE9aADu8ez0R/kcebLyEOZCYRp0h2awhlEFUlZtMxe3jJjvthFCdfqRYKKMxLcXPHk6n8B/L/ziw3oJ3uiFPrfulG3V4eZ2AJFnUEvMjFcdAAA=",
        "alt": "Dropper drop green"
      }
    ]
  },
  {
    "id": "powder-production",
    "label": "Powder",
    "title": "Production process for powder",
    "facility": "Facility A",
    "steps": [
      {
        "name": "Raw material and excipient acceptance",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "clipboardCheck",
        "qc": {
          "kind": "ccp",
          "label": "CCP1"
        },
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Mixing",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "blend",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Sterilization",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "thermometer",
        "qc": {
          "kind": "ccp",
          "label": "CCP2"
        },
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Packaging material acceptance and disinfection",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "clipboardCheck",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Weighing and packaging",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "droplet",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Inspection",
        "note": null,
        "pass": "continue",
        "fail": "unqualified treatment",
        "icon": "scanSearch",
        "qc": {
          "kind": "inspection",
          "label": "Inspection"
        },
        "unqualified": true,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Bagging and coding",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "package",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Packing (cartons)",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "package",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Finished product inspection",
        "note": null,
        "pass": "storage",
        "fail": "unqualified treatment",
        "icon": "scanSearch",
        "qc": {
          "kind": "inspection",
          "label": "Inspection"
        },
        "unqualified": true,
        "lane": null,
        "joinsAt": null
      },
      {
        "name": "Storage",
        "note": null,
        "pass": null,
        "fail": null,
        "icon": "warehouse",
        "qc": null,
        "unqualified": false,
        "lane": null,
        "joinsAt": null
      }
    ],
    "photos": [
      {
        "src": "canggus/process/dosage-powder-pile.webp",
        "w": 1600,
        "h": 1201,
        "blur": "data:image/webp;base64,UklGRhYBAABXRUJQVlA4WAoAAAAQAAAADwAACwAAQUxQSIUAAAABgFvbtmplXfkWaaiQEbp1QO7uEtGFuzfgFEIBFOEUoE82XkNETAC/W8//HVjzD2MpLYD9w8Hgra6y+B/GkzmUAt00YAwWGq8VRPrQfbfBUL/7okCSImk9yeSLpCgMgiD8iHRR7JpbOnnW76/HU2WASs/44tbaxHArYL23/O2dAbDO/+oAAFZQOCBqAAAA8AEAnQEqEAAMAAOAWiWwAnQwTMiGw1mIANnnjODFG5GJinl/LfAH4k6Kbn0rlV3hB9DVZ/OyJYzf0+HGEnSxSa3RvRWdDCHwp5oauHa24izPcg0ulWJTt9NmS0RlWUO+DKdgp3nki7AAAA==",
        "alt": "Dosage powder pile"
      },
      {
        "src": "canggus/process/powder-scoop-texture.webp",
        "w": 1080,
        "h": 593,
        "blur": "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAAAwAgCdASoQAAkAA4BaJbACdAERH8Y+cUKEAAD+9w7zIRU8IRD4TBwNQ1eC72D2YH+CTnxuecmHdgAA",
        "alt": "Powder scoop texture"
      },
      {
        "src": "canggus/process/green-powder-matcha.webp",
        "w": 433,
        "h": 508,
        "blur": "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAADwAQCdASoOABAAA4BaJbACdAYsiglX1wAAzj1J+kTG1kBJP0/DTN0jqUK04INQ+jGmk0u8Z9XBM63pYfvpivMOc/JPENCyQkTC6bJ7nE10u779m5MbzBCXj4F2Lf6+8ogw7PAi6mKgAA==",
        "alt": "Green powder matcha"
      }
    ]
  }
];

export const GUMMY_LINE: { id: string; label: string; title: string; facility: string; facts: string[]; photos: ProcessPhoto[] } = {
  "id": "gummies",
  "label": "Gummies",
  "title": "Gummy production",
  "facility": "Facility A",
  "facts": [
    "Gummy line: fully automatic production line, daily output 5 million pcs",
    "Gummy shapes available: bear, koala, mushroom, raspberry, semicircle, bullet, heart, flower, apple, button, star, diamond, cube (2-4 g)"
  ],
  "photos": [
    {
      "src": "canggus/process/gummies-assorted-shapes.webp",
      "w": 1510,
      "h": 1509,
      "blur": "data:image/webp;base64,UklGRpIAAABXRUJQVlA4IIYAAABwAgCdASoQABAAA4BaJbACdH8AgljLuL80HJgAAP7yNVW8FODp017KCsnZwmjxgI8gLF3tW49CBp0w9MM6QF6YN3LWBhHNp65TKNL/l8cg79IS6xPpiYPu2AVFlRu7w53hY5VJpCon7qoJpVIWRZGDMsZJu0tN73dKlrGCwEahnRfADT4AAA==",
      "alt": "Gummies assorted shapes"
    },
    {
      "src": "canggus/process/gummies-pile.webp",
      "w": 593,
      "h": 1080,
      "blur": "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAAAwAgCdASoJABAAA4BaJbACdLoAEJeVjLQdcAD2HAN3o7Q7NXKTA9/1GD7j2GZhBu/4Wzt3Fc/6ujyj3Yajx+QgI8NW1ZvWzf9blDoj+8HBMoL4ZCmL5+6sirX8rCQMgxg8nGpfSIIYAA==",
      "alt": "Gummies pile"
    },
    {
      "src": "canggus/process/gummy-shape-ridged.webp",
      "w": 461,
      "h": 206,
      "blur": "data:image/webp;base64,UklGRuoAAABXRUJQVlA4WAoAAAAQAAAADwAABgAAQUxQSFMAAAABcFPbthOd+z4ZAVQIQActBuhwGhVMqkZC6jNRRERMAICcZ+wLEIDtASIt6xwBRoGUH6bpWeFAZBjj9HlNV2cCEOnt95s+U4MHCLN2+k7f/yWSAABWUDggcAAAAPABAJ0BKhAABwADgFolsAJ0BivE5M0JoAD+xP8IPOs0SxrX2QzBch9mbbl+ed8AdPpeMIIgb0WmabN2a1EbluqZlvKTTuAm5fFmt2I8RGMBvJp/2Wf8m/33sXXHN+Jdvdls09fRMLR22wXr//AAAAA=",
      "alt": "Gummy shape ridged"
    }
  ]
};
