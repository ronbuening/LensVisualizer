import type { LensDataV2Input } from "../../types/lensDataV2.js";

// Private staging-only descendant. Optical fields are identical to the verified research input.
// visible:true enables local integration/viewer QA; no publication is authorized.
const LENS_DATA = {
  "schema": 2,
  "key": "konica-hexanon-ar-200mm-f4",
  "maker": "Konica",
  "name": "KONICA HEXANON AR 200mm f/4",
  "subtitle": "JPS5455424A Example 1; nominal200x scale; frozen figure-ratio aperture hypothesis",
  "visible": true,
  "catalog": {
    "lensMounts": [
      "konica-ar"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 5,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 200,
      "design": 200
    },
    "fNumber": {
      "marketing": 4,
      "design": 4
    }
  },
  "source": {
    "patentNumber": "JP S54-55424 A",
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "patentYear": 1979,
    "authors": [
      "Toshiko Shimokura"
    ],
    "assignees": [
      "Konishiroku Photo Industry Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 116.01039307706606
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.7552,
      "vd": 27.5,
      "indexReference": "d",
      "glass": "S-TIH4 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -135.20815500989173
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 170.82047086561317
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.7725,
      "vd": 49.6,
      "indexReference": "d",
      "glass": "S-LAH66 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -56.092163749199194
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "d",
      "glass": "S-TIH6 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 104.74473250107187
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 76.44,
      "d": 8.5,
      "sd": 27.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": -266.34,
      "d": 16.0,
      "sd": 27.0
    },
    {
      "label": "3",
      "R": -144.54,
      "d": 3.0,
      "sd": 22.815,
      "medium": 2
    },
    {
      "label": "4",
      "R": 350.94,
      "d": 2.0,
      "sd": 22.815
    },
    {
      "label": "5",
      "R": 47.5,
      "d": 6.5,
      "sd": 22.113,
      "medium": 3
    },
    {
      "label": "6",
      "R": 98.14,
      "d": 30.0,
      "sd": 22.113
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 37.0
    },
    {
      "label": "7",
      "R": -28.22,
      "d": 2.0,
      "sd": 13.581,
      "medium": 4
    },
    {
      "label": "8",
      "R": -83.42,
      "d": 1.0,
      "sd": 13.581
    },
    {
      "label": "9",
      "R": 462.9,
      "d": 3.5,
      "sd": 14.445,
      "medium": 5
    },
    {
      "label": "10",
      "R": -102.78,
      "d": 52.2,
      "sd": 14.445
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Hypothetical patent reconstruction; exact retail prescription pairing is unproven. Infinity-only model. Clear apertures are inferred from a schematic figure; the stop plane is patent-sourced and the iris opening follows the native f-number assumption. The retail 2.5m minimum focus is descriptive metadata: finite focus motion and performance are not modeled. The printed back-focus gap and source-derived image plane are retained. Scalar MTF is an estimate, not factory performance."
  },
  "aperture": {
    "nominalFNumber": 4,
    "fStops": [
      4,
      5.6,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 12,
    "maxTraceFieldDeg": 6
  },
  "layout": {
    "yScFill": 0.38
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
