import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Literal source diameters / 2. S8 published clear envelope diameter 17.43 mm; ordinary-prime iris derives from F1.85, not this envelope. No repaired asphere coefficients or rear plate. */
const LENS_DATA = {
  "schema": 2,
  "key": "canon-rf-24mm-f18-macro-is-stm",
  "maker": "Canon",
  "name": "Canon RF 24mm f/1.8 Macro IS STM",
  "subtitle": "US 12066598 B2 Numerical Example 3 \u2014 inferred product association",
  "catalog": {
    "lensMounts": [
      "canon-rf"
    ],
    "imageFormat": "135-full-frame",
    "imageCircleMm": 38.68,
    "elementCount": 11,
    "groupCount": 9,
    "focalLengthMm": {
      "marketing": 24,
      "design": 24.72
    },
    "fNumber": {
      "marketing": 1.8,
      "design": 1.85
    }
  },
  "source": {
    "patentNumber": "US 12066598 B2",
    "example": {
      "label": "Numerical Example 3",
      "id": "3"
    },
    "patentYear": 2024,
    "authors": [
      "Yuki Shinzato"
    ],
    "assignees": [
      "Canon Inc."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "glass": "Unmatched (patent nd=1.51633, vd=64.1)",
      "focalLengthMm": -34.08
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.91082,
      "vd": 35.3,
      "glass": "Unmatched (patent nd=1.91082, vd=35.3)",
      "focalLengthMm": 27.61
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.90043,
      "vd": 37.4,
      "glass": "Unmatched (patent nd=1.90043, vd=37.4)",
      "focalLengthMm": 24.97,
      "cemented": "D1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.72825,
      "vd": 28.5,
      "glass": "Unmatched (patent nd=1.72825, vd=28.5)",
      "focalLengthMm": -22.58,
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.6779,
      "vd": 55.3,
      "glass": "Unmatched (patent nd=1.6779, vd=55.3)",
      "focalLengthMm": 81.14
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.85478,
      "vd": 24.8,
      "glass": "Unmatched (patent nd=1.85478, vd=24.8)",
      "focalLengthMm": -15.2,
      "cemented": "D2"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.5,
      "glass": "Unmatched (patent nd=1.497, vd=81.5)",
      "focalLengthMm": 41.28,
      "cemented": "D2"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.91082,
      "vd": 35.3,
      "glass": "Unmatched (patent nd=1.91082, vd=35.3)",
      "focalLengthMm": 52.33
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Positive Meniscus",
      "nd": 1.5311,
      "vd": 55.9,
      "glass": "Unmatched (patent nd=1.5311, vd=55.9)",
      "focalLengthMm": 215.73
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Positive Meniscus",
      "nd": 1.72916,
      "vd": 54.7,
      "glass": "Unmatched (patent nd=1.72916, vd=54.7)",
      "focalLengthMm": 143.27
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Negative Meniscus",
      "nd": 1.51742,
      "vd": 52.4,
      "glass": "Unmatched (patent nd=1.51742, vd=52.4)",
      "focalLengthMm": -104.12
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 352.223,
      "d": 1.57,
      "sd": 16.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 16.734,
      "d": 15.32,
      "sd": 12.845
    },
    {
      "label": "3",
      "R": 32.834,
      "d": 3.88,
      "sd": 10.27,
      "medium": 2
    },
    {
      "label": "4",
      "R": -101.361,
      "d": 2.45,
      "sd": 10.195
    },
    {
      "label": "5",
      "R": -173.026,
      "d": 3.85,
      "sd": 9.715,
      "medium": 3
    },
    {
      "label": "6",
      "R": -20.106,
      "d": 1,
      "sd": 9.605,
      "medium": 4
    },
    {
      "label": "7",
      "R": 92.116,
      "d": 2.92,
      "sd": 9.095
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 3.4
    },
    {
      "label": "9",
      "R": 70.143,
      "d": 1.65,
      "sd": 8.12,
      "medium": 5
    },
    {
      "label": "10",
      "R": -252.397,
      "d": 3.51,
      "sd": 7.975
    },
    {
      "label": "11",
      "R": -15.958,
      "d": 1,
      "sd": 7.515,
      "medium": 6
    },
    {
      "label": "12",
      "R": 71.9,
      "d": 3.99,
      "sd": 9.75,
      "medium": 7
    },
    {
      "label": "13",
      "R": -28.609,
      "d": 0.15,
      "sd": 9.495
    },
    {
      "label": "14",
      "R": 162.276,
      "d": 5.15,
      "sd": 11.4,
      "medium": 8
    },
    {
      "label": "15",
      "R": -27.659,
      "d": 0.15,
      "sd": 12.035
    },
    {
      "label": "16",
      "R": -83.02,
      "d": 2.5,
      "sd": 12.4,
      "medium": 9
    },
    {
      "label": "17",
      "R": -48.642,
      "sd": 12.775,
      "asphere": {
        "K": 0,
        "A4": 1.70126e-05,
        "A6": -2.50325e-09,
        "A8": 1.03885e-10,
        "A10": -5.41918e-13,
        "A12": 1.15952e-15
      }
    },
    {
      "label": "18",
      "R": -79.703,
      "d": 2.09,
      "sd": 14.3,
      "medium": 10
    },
    {
      "label": "19",
      "R": -45.71,
      "d": 10.3,
      "sd": 14.5
    },
    {
      "label": "20",
      "R": -24.031,
      "d": 2.55,
      "sd": 15.205,
      "medium": 11
    },
    {
      "label": "21",
      "R": -44.953,
      "d": 11,
      "sd": 16.73
    }
  ],
  "gaps": {
    "17": {
      "label": "d17",
      "values": [
        [
          2.56,
          15.56
        ]
      ]
    }
  },
  "focus": {
    "closeFocusM": 0.1360021203856951,
    "published": [
      1
    ],
    "description": "Literal published d17 expands 13 mm. Close distance calculated from this prescription, not marketed MFD; intermediate states are interpolation."
  },
  "aperture": {
    "nominalFNumber": 1.85,
    "fStops": [
      1.85,
      2,
      2.8,
      4,
      5.6,
      8,
      11,
      16
    ],
    "maxFNumber": 16
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 82.4,
    "maxTraceFieldDeg": 41.2
  },
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
