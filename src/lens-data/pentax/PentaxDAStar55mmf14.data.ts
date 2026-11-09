import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Qualified reconstruction. See companion analysis and evidence; inferred rims are not manufacturing dimensions. */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-da-star-55mm-f14",
  "maker": "Pentax",
  "name": "PENTAX SMC DA\u2605 55mm f/1.4",
  "subtitle": "Qualified patent reconstruction; assumed clear apertures and approximate dispersion",
  "catalog": {
    "lensMounts": [
      "pentax-k"
    ],
    "imageFormat": "aps-c",
    "elementCount": 9,
    "groupCount": 8,
    "focalLengthMm": {
      "marketing": 55,
      "design": 56.36
    },
    "fNumber": {
      "marketing": 1.4,
      "design": 1.4
    }
  },
  "source": {
    "patentNumber": "US 2010/0073777 A1",
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "patentYear": 2010,
    "authors": [
      "Jun Hirakawa"
    ],
    "assignees": [
      "Hoya Corporation"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.7725,
      "vd": 49.6,
      "focalLengthMm": 77.35148473128464,
      "glass": "Unmatched (patent coordinates)",
      "indexReferenceNote": "Published d-line index and Abbe number; supplier and partial dispersion unknown."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.8061,
      "vd": 40.9,
      "focalLengthMm": 77.92480822332072,
      "glass": "Unmatched (patent coordinates)",
      "indexReferenceNote": "Published d-line index and Abbe number; supplier and partial dispersion unknown."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.69895,
      "vd": 30.1,
      "focalLengthMm": -39.85358097541357,
      "glass": "Unmatched (patent coordinates)",
      "indexReferenceNote": "Published d-line index and Abbe number; supplier and partial dispersion unknown."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Plano-Concave",
      "nd": 1.58144,
      "vd": 40.7,
      "focalLengthMm": -257.98018712162906,
      "glass": "Unmatched (patent coordinates)",
      "indexReferenceNote": "Published d-line index and Abbe number; supplier and partial dispersion unknown."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.76182,
      "vd": 26.5,
      "focalLengthMm": -20.14549257186005,
      "glass": "Unmatched (patent coordinates)",
      "indexReferenceNote": "Published d-line index and Abbe number; supplier and partial dispersion unknown."
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.834,
      "vd": 37.2,
      "focalLengthMm": 26.09268151291995,
      "glass": "Unmatched (patent coordinates)",
      "indexReferenceNote": "Published d-line index and Abbe number; supplier and partial dispersion unknown."
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Positive Meniscus",
      "nd": 1.8061,
      "vd": 40.9,
      "focalLengthMm": 105.64833583168914,
      "glass": "Unmatched (patent coordinates)",
      "indexReferenceNote": "Published d-line index and Abbe number; supplier and partial dispersion unknown."
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.5924,
      "vd": 68.3,
      "focalLengthMm": 115.52439840620401,
      "glass": "Unmatched (patent coordinates)",
      "indexReferenceNote": "Published d-line index and Abbe number; supplier and partial dispersion unknown."
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Plano-Convex",
      "nd": 1.48749,
      "vd": 70.2,
      "focalLengthMm": 358.4688916695727,
      "glass": "Unmatched (patent coordinates)",
      "indexReferenceNote": "Published d-line index and Abbe number; supplier and partial dispersion unknown."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 50.922,
      "d": 5.5,
      "sd": 20.6,
      "medium": 1
    },
    {
      "label": "2",
      "R": 328.301,
      "d": 0.1,
      "sd": 20.6
    },
    {
      "label": "3",
      "R": 29.259,
      "d": 5.16,
      "sd": 19,
      "medium": 2
    },
    {
      "label": "4",
      "R": 50.46,
      "d": 2.66,
      "sd": 19
    },
    {
      "label": "5",
      "R": 63.688,
      "d": 1.41,
      "sd": 16.8,
      "medium": 3
    },
    {
      "label": "6",
      "R": 19.203,
      "d": 7.49,
      "sd": 16.8
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.19
    },
    {
      "label": "7",
      "R": -150,
      "d": 2,
      "sd": 13.45,
      "medium": 4
    },
    {
      "label": "8",
      "R": "flat",
      "d": 5.49,
      "sd": 13.45
    },
    {
      "label": "9",
      "R": -19.31,
      "d": 1.5,
      "sd": 17,
      "medium": 5
    },
    {
      "label": "10",
      "R": 77.297,
      "d": 9.43,
      "sd": 17.4,
      "medium": 6
    },
    {
      "label": "11",
      "R": -28.608,
      "d": 0.1,
      "sd": 17.4
    },
    {
      "label": "12",
      "R": -251.725,
      "d": 3.24,
      "sd": 17.4,
      "medium": 7
    },
    {
      "label": "13",
      "R": -64,
      "d": 0.1,
      "sd": 17.4
    },
    {
      "label": "14",
      "R": 104,
      "d": 3.42,
      "sd": 16.8,
      "medium": 8
    },
    {
      "label": "15",
      "R": -197.685,
      "sd": 16.8
    },
    {
      "label": "16",
      "R": "flat",
      "d": 3,
      "sd": 16.5,
      "medium": 9
    },
    {
      "label": "17",
      "R": -174.75,
      "d": 37.41,
      "sd": 16.5
    }
  ],
  "focus": {
    "closeFocusM": 0.45,
    "description": "Source focus motion: first eight elements and iris advance 12.27 mm; rear element and sensor cover fixed. Endpoint object distance is a catalog approximation.",
    "published": [
      1
    ]
  },
  "aperture": {
    "nominalFNumber": 1.4,
    "fStops": [
      1.4,
      2,
      2.8,
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
    "fullFieldDeg": 28.6,
    "maxTraceFieldDeg": 14.3
  },
  "layout": {
    "yScFill": 0.36
  },
  "gaps": {
    "15": {
      "label": "Front-group focus separation",
      "values": [
        [
          1,
          13.27
        ]
      ]
    }
  },
  "rearPlates": [
    {
      "label": "CG (assumed material)",
      "thicknessMm": 2,
      "nd": 1.5168,
      "vd": 64.2,
      "gapAfterMm": 0,
      "source": "US20100073777A1 Table 1 S18\u201319: thickness printed, material NOT printed; assumed nd 1.5168 / Vd 64.2."
    }
  ],
  "checks": {
    "gapSagFrac": 1
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
