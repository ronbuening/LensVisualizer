import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Literal nD/V and prescription, radii signs from Figure1. Heuristic mid-gap iris and rims. Calculated D-line paraxial plane, not fitted focus or factory identity. */
const LENS_DATA = {
  "schema": 2,
  "key": "kodak-ross-98-f7-us1352028-figure1-patent-reference",
  "maker": "Kodak",
  "name": "KODAK / F. E. ROSS 98mm f/7 PATENT REFERENCE",
  "subtitle": "1919 DESIGN / 1920 GRANT \u2014 NO PRODUCTION MATCH",
  "visible": false,
  "catalog": {
    "specs": [
      "5 ELEMENTS / 2 GROUPS",
      "PATENT-ONLY REFERENCE",
      "ESTIMATED STOP AND RIMS",
      "INFINITY ONLY"
    ],
    "elementCount": 5,
    "groupCount": 2,
    "focalLengthMm": {
      "design": 98.2669090047175
    },
    "fNumber": {
      "design": 7
    }
  },
  "source": {
    "patentNumber": "US 1,352,028",
    "example": {
      "label": "Figure 1",
      "id": "1"
    },
    "patentYear": 1920,
    "authors": [
      "Frank E. Ross"
    ],
    "assignees": [
      "Eastman Kodak Company"
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.6165,
      "vd": 36.5,
      "indexReference": "D",
      "cemented": "C1",
      "role": "Literal sodium-D index and V; named generic glass category only, not factory glass. G-prime source values not used."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.5265,
      "vd": 58.4,
      "indexReference": "D",
      "cemented": "C1",
      "role": "Literal sodium-D index and V; named generic glass category only, not factory glass. G-prime source values not used."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.6165,
      "vd": 36.5,
      "indexReference": "D",
      "cemented": "C1",
      "role": "Literal sodium-D index and V; named generic glass category only, not factory glass. G-prime source values not used."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.5211,
      "vd": 51.8,
      "indexReference": "D",
      "cemented": "C2",
      "role": "Literal sodium-D index and V; named generic glass category only, not factory glass. G-prime source values not used."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.61088,
      "vd": 57.2,
      "indexReference": "D",
      "cemented": "C2",
      "role": "Literal sodium-D index and V; named generic glass category only, not factory glass. G-prime source values not used."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 28.4,
      "d": 4,
      "sd": 8,
      "medium": 1
    },
    {
      "label": "2",
      "R": -24.15,
      "d": 4,
      "sd": 8,
      "medium": 2
    },
    {
      "label": "3",
      "R": -13.4,
      "d": 1,
      "sd": 8,
      "medium": 3
    },
    {
      "label": "4",
      "R": 25.3,
      "d": 1.5,
      "sd": 8
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.5
    },
    {
      "label": "5",
      "R": -27.3,
      "d": 1,
      "sd": 8,
      "medium": 4
    },
    {
      "label": "6",
      "R": 24.15,
      "d": 4,
      "sd": 8,
      "medium": 5
    },
    {
      "label": "7",
      "R": -22.22,
      "d": 90.76557645241796,
      "sd": 8
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity-only historical patent reference; no sourced finite focus motion."
  },
  "aperture": {
    "nominalFNumber": 7,
    "fStops": [
      7,
      8,
      11,
      16,
      22,
      32
    ]
  },
  "groups": [],
  "doublets": [
    {
      "text": "C1 triplet",
      "fromSurface": "1",
      "toSurface": "4"
    },
    {
      "text": "C2 doublet",
      "fromSurface": "5",
      "toSurface": "7"
    }
  ],
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
