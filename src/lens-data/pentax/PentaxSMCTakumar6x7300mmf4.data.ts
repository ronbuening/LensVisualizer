import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Qualified reconstruction. See companion analysis and evidence; inferred rims are not manufacturing dimensions. */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-smc-takumar-6x7-300mm-f4",
  "maker": "Pentax",
  "name": "PENTAX SMC TAKUMAR 6x7 300mm f/4",
  "subtitle": "Qualified patent reconstruction; assumed clear apertures and approximate dispersion",
  "catalog": {
    "lensMounts": [
      "pentax-67"
    ],
    "imageFormat": "6x7",
    "elementCount": 5,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 300,
      "design": 300
    },
    "fNumber": {
      "marketing": 4,
      "design": 4
    }
  },
  "source": {
    "patentNumber": "US 3,467,462 A",
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "patentYear": 1969,
    "authors": [
      "Tomokazu Kazamaki",
      "Tohru Matsumoto"
    ],
    "assignees": [
      "Asahi Kogaku Kogyo Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.5163,
      "vd": 64.0,
      "focalLengthMm": 200.01146150119362,
      "glass": "Unmatched (patent coordinates)",
      "indexReferenceNote": "Published d-line index and Abbe number; supplier and partial dispersion unknown."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.7174,
      "vd": 29.5,
      "focalLengthMm": -207.70248975602266,
      "glass": "Unmatched (patent coordinates)",
      "indexReferenceNote": "Published d-line index and Abbe number; supplier and partial dispersion unknown."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.5163,
      "vd": 64.0,
      "focalLengthMm": 339.59205118328293,
      "glass": "Unmatched (patent coordinates)",
      "indexReferenceNote": "Published d-line index and Abbe number; supplier and partial dispersion unknown."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.6034,
      "vd": 38.0,
      "focalLengthMm": 242.26211796647434,
      "glass": "Unmatched (patent coordinates)",
      "indexReferenceNote": "Published d-line index and Abbe number; supplier and partial dispersion unknown."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "nd": 1.5111,
      "vd": 60.5,
      "focalLengthMm": -154.2481512198764,
      "glass": "Unmatched (patent coordinates)",
      "indexReferenceNote": "Published d-line index and Abbe number; supplier and partial dispersion unknown."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 107.7,
      "d": 15,
      "sd": 37.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": -2389.29,
      "d": 9,
      "sd": 37.5
    },
    {
      "label": "3",
      "R": -351.0,
      "d": 4.5,
      "sd": 35.43,
      "medium": 2
    },
    {
      "label": "4",
      "R": 260.31,
      "d": 0.6,
      "sd": 35.43
    },
    {
      "label": "5",
      "R": 79.8,
      "d": 12,
      "sd": 34.295,
      "medium": 3
    },
    {
      "label": "6",
      "R": 138.96,
      "d": 60,
      "sd": 34.295
    },
    {
      "label": "7",
      "R": 156.0,
      "d": 12,
      "sd": 25.47,
      "medium": 4
    },
    {
      "label": "8",
      "R": -2255.22,
      "d": 3,
      "sd": 25.47
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 30
    },
    {
      "label": "9",
      "R": -54.0,
      "d": 3,
      "sd": 17.25,
      "medium": 5
    },
    {
      "label": "10",
      "R": -174.63,
      "d": 120.48,
      "sd": 17.25
    }
  ],
  "focus": {
    "closeFocusM": 10,
    "description": "Static infinity prescription. closeFocusM is an inactive schema placeholder, not product specification."
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
    "fullFieldDeg": 16,
    "maxTraceFieldDeg": 8
  },
  "layout": {
    "yScFill": 0.36
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
