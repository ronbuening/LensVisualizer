import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Whole literal US4468100 Example 1. No normalization, splicing or optical fitting.
 * Source d-line indices; dispersion estimated from nd/Vd, no identified supplier glass.
 * Source plane z=80.51 mm retained. Collimated conjugate is an interpretation.
 * Initial inferred stop at midpoint of d6, z=23.14 mm; caps are mechanical hypotheses.
 * Native geometry and axial f/2.8 pass; integration outcomes recorded separately.
 * No geometry-threshold overrides and no hidden render trimming authorized by this file.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-a-28mm-f28",
  "maker": "Pentax",
  "name": "PENTAX SMC PENTAX-A 28mm f/2.8",
  "subtitle": "US 4,468,100 A; probable design-family representative, not a factory-exact prescription",
  "catalog": {
    "lensMounts": [
      "pentax-k"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 7,
    "groupCount": 7,
    "focalLengthMm": {
      "marketing": 28,
      "design": 28.78
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.8
    },
    "specs": [
      "7 ELEMENTS / 7 GROUPS",
      "QUALIFIED PATENT RECONSTRUCTION",
      "LITERAL 28.78 mm EXAMPLE"
    ]
  },
  "source": {
    "patentNumber": "US 4,468,100 A",
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "patentYear": 1984,
    "authors": [
      "Takayuki Itoh",
      "Yasunori Arai"
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
      "type": "Negative Meniscus",
      "nd": 1.58913,
      "vd": 61,
      "indexReference": "d",
      "focalLengthMm": -51.355499325419395,
      "glass": "Unmatched (patent nd=1.58913, Vd=61)"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "focalLengthMm": -52.27164053291961,
      "glass": "Unmatched (patent nd=1.51633, Vd=64.1)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.7,
      "vd": 48.1,
      "indexReference": "d",
      "focalLengthMm": 31.68885818332139,
      "glass": "Unmatched (patent nd=1.7, Vd=48.1)"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.65844,
      "vd": 50.9,
      "indexReference": "d",
      "focalLengthMm": 33.427441803070295,
      "glass": "Unmatched (patent nd=1.65844, Vd=50.9)"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.76182,
      "vd": 26.6,
      "indexReference": "d",
      "focalLengthMm": -16.796166117917668,
      "glass": "Unmatched (patent nd=1.76182, Vd=26.6)"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Positive Meniscus",
      "nd": 1.6935,
      "vd": 53.2,
      "indexReference": "d",
      "focalLengthMm": 42.54909133483346,
      "glass": "Unmatched (patent nd=1.6935, Vd=53.2)"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Positive Meniscus",
      "nd": 1.6935,
      "vd": 53.2,
      "indexReference": "d",
      "focalLengthMm": 45.14533510266766,
      "glass": "Unmatched (patent nd=1.6935, Vd=53.2)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 38,
      "d": 1.4,
      "sd": 14.9,
      "medium": 1
    },
    {
      "label": "2",
      "R": 16.614,
      "d": 6.46,
      "sd": 14.9
    },
    {
      "label": "3",
      "R": 34,
      "d": 1.3,
      "sd": 12,
      "medium": 2
    },
    {
      "label": "4",
      "R": 14.85,
      "d": 7.17,
      "sd": 12
    },
    {
      "label": "5",
      "R": 25.674,
      "d": 4.5,
      "sd": 9.5,
      "medium": 3
    },
    {
      "label": "6",
      "R": -151.327,
      "d": 2.31,
      "sd": 9.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.31
    },
    {
      "label": "7",
      "R": 94.86,
      "d": 4.75,
      "sd": 8.5,
      "medium": 4
    },
    {
      "label": "8",
      "R": -28.09,
      "d": 4,
      "sd": 8.5
    },
    {
      "label": "9",
      "R": -17.929,
      "d": 3.33,
      "sd": 6.45,
      "medium": 5
    },
    {
      "label": "10",
      "R": 48.28,
      "d": 1.19,
      "sd": 6.45
    },
    {
      "label": "11",
      "R": -33.552,
      "d": 2.4,
      "sd": 8.5,
      "medium": 6
    },
    {
      "label": "12",
      "R": -16.16,
      "d": 0.1,
      "sd": 8.5
    },
    {
      "label": "13",
      "R": -1141.732,
      "d": 2.5,
      "sd": 9.5,
      "medium": 7
    },
    {
      "label": "14",
      "R": -30.5,
      "d": 36.79,
      "sd": 9.5
    }
  ],
  "focus": {
    "closeFocusM": 0.3,
    "description": "Collimated conjugate interpreted from printed backfocus; no source-backed close-focus motion. Maker 0.30 m is metadata only."
  },
  "aperture": {
    "nominalFNumber": 2.8,
    "fStops": [
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
    "fullFieldDeg": 75.2,
    "maxTraceFieldDeg": 37.6
  },
  "layout": {
    "yScFill": 0.36
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
