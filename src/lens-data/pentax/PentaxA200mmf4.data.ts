import type { LensDataV2Input } from "../../types/lensDataV2.js";

// Private staging-only descendant. Optical fields are identical to the verified research input.
// visible:true enables local integration/viewer QA; no publication is authorized.
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-a-200f4-us4550987-private-row1004",
  "maker": "Pentax",
  "name": "SMC PENTAX-A 200mm f/4 — hypothetical patent reconstruction (inferred apertures and stop; infinity only; private)",
  "subtitle": "US4550987 Example1; inferred uniform2xscale and figure-based apertures; factory pairing unproven",
  "visible": true,
  "catalog": {
    "lensMounts": [
      "pentax-k"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 6,
    "groupCount": 6,
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
    "patentNumber": "US 4,550,987",
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "patentYear": 1985,
    "authors": [
      "Satoru Tachihara"
    ],
    "assignees": [
      "Asahi Optical Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "indexReferenceNote": "Table prints n/nu without explicit d subscript; d-line assignment is conventional and contextually supported by Fig2 d/g labels, not an explicit table declaration. Literal indices retained; vendor/full dispersion unresolved.",
      "glass": "Unmatched (1.51633/64.1; literal source coordinate, d convention inferred)",
      "focalLengthMm": 145.92203627488792
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.76182,
      "vd": 26.6,
      "indexReference": "d",
      "indexReferenceNote": "Table prints n/nu without explicit d subscript; d-line assignment is conventional and contextually supported by Fig2 d/g labels, not an explicit table declaration. Literal indices retained; vendor/full dispersion unresolved.",
      "glass": "Unmatched (1.76182/26.6; literal source coordinate, d convention inferred)",
      "focalLengthMm": -190.37649653114062
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "indexReferenceNote": "Table prints n/nu without explicit d subscript; d-line assignment is conventional and contextually supported by Fig2 d/g labels, not an explicit table declaration. Literal indices retained; vendor/full dispersion unresolved.",
      "glass": "Unmatched (1.51633/64.1; literal source coordinate, d convention inferred)",
      "focalLengthMm": 169.1358878956531
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "indexReferenceNote": "Table prints n/nu without explicit d subscript; d-line assignment is conventional and contextually supported by Fig2 d/g labels, not an explicit table declaration. Literal indices retained; vendor/full dispersion unresolved.",
      "glass": "Unmatched (1.51633/64.1; literal source coordinate, d convention inferred)",
      "focalLengthMm": 241.74669877532375
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.744,
      "vd": 44.7,
      "indexReference": "d",
      "indexReferenceNote": "Table prints n/nu without explicit d subscript; d-line assignment is conventional and contextually supported by Fig2 d/g labels, not an explicit table declaration. Literal indices retained; vendor/full dispersion unresolved.",
      "glass": "Unmatched (1.744/44.7; literal source coordinate, d convention inferred)",
      "focalLengthMm": -29.786987881614447
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.64769,
      "vd": 33.8,
      "indexReference": "d",
      "indexReferenceNote": "Table prints n/nu without explicit d subscript; d-line assignment is conventional and contextually supported by Fig2 d/g labels, not an explicit table declaration. Literal indices retained; vendor/full dispersion unresolved.",
      "glass": "Unmatched (1.64769/33.8; literal source coordinate, d convention inferred)",
      "focalLengthMm": 54.62088903995451
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 71.812,
      "d": 6.32,
      "sd": 27.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": 1486.004,
      "d": 2.02,
      "sd": 27.0
    },
    {
      "label": "3",
      "R": -391.918,
      "d": 2.26,
      "sd": 26.73,
      "medium": 2
    },
    {
      "label": "4",
      "R": 230.806,
      "d": 0.1,
      "sd": 26.73
    },
    {
      "label": "5",
      "R": 56.59,
      "d": 5.82,
      "sd": 26.46,
      "medium": 3
    },
    {
      "label": "6",
      "R": 155.138,
      "d": 46.24,
      "sd": 26.19
    },
    {
      "label": "7",
      "R": 66.83,
      "d": 2.92,
      "sd": 15.93,
      "medium": 4
    },
    {
      "label": "8",
      "R": 141.706,
      "d": 2.128,
      "sd": 15.93
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 19.152
    },
    {
      "label": "9",
      "R": -35.892,
      "d": 1.84,
      "sd": 12.15,
      "medium": 5
    },
    {
      "label": "10",
      "R": 59.198,
      "d": 3.02,
      "sd": 12.15
    },
    {
      "label": "11",
      "R": 70.032,
      "d": 3.64,
      "sd": 13.5,
      "medium": 6
    },
    {
      "label": "12",
      "R": -70.032,
      "d": 65.0,
      "sd": 13.5
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Hypothetical patent reconstruction; exact retail prescription pairing is unproven. Infinity-only model, using inferred infinity and reference-index wavelength conventions. Clear apertures and stop position/opening are modeling hypotheses. The retail 1.9m minimum focus is descriptive metadata: finite focus motion and performance are not modeled. The printed back-focus gap and source-derived image plane are retained. Scalar MTF is an estimate, not factory performance."
  },
  "aperture": {
    "nominalFNumber": 4,
    "fStops": [
      4,
      5.6,
      8,
      11,
      16,
      22,
      32
    ],
    "maxFNumber": 32
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 12.6,
    "maxTraceFieldDeg": 6.3
  },
  "layout": {
    "yScFill": 0.38
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
