import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "repp-1922-100-f2-2-projection-patent-reference",
  "maker": "Projection Optics",
  "name": "REPP 1922 100mm f/2.2 PROJECTION PATENT REFERENCE",
  "subtitle": "1920 DESIGN / 1922 GRANT \u2014 RECIPROCAL INFINITY REFERENCE",
  "visible": false,
  "catalog": {
    "specs": [
      "4 ELEMENTS / 3 GROUPS",
      "PROJECTION PATENT; NO RETAIL MATCH",
      "ESTIMATED STOP AND RIMS",
      "RECIPROCAL INFINITY ONLY"
    ],
    "elementCount": 4,
    "groupCount": 3,
    "focalLengthMm": {
      "design": 99.99812523504964
    },
    "fNumber": {
      "design": 2.2
    }
  },
  "source": {
    "patentNumber": "US 1,415,002",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1922,
    "authors": [
      "William H. Repp"
    ],
    "assignees": [
      "Projection Optics Company Inc."
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.516,
      "vd": 63.8,
      "indexReference": "D",
      "indexReferenceNote": "Literal sodium D index and dispersion reciprocal V in patent table.",
      "cemented": "C1"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Plano-concave Negative",
      "nd": 1.6182,
      "vd": 36.4,
      "indexReference": "D",
      "indexReferenceNote": "Literal sodium D index and dispersion reciprocal V in patent table.",
      "cemented": "C1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.6182,
      "vd": 36.4,
      "indexReference": "D",
      "indexReferenceNote": "Literal sodium D index and dispersion reciprocal V in patent table."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Plano-convex Positive",
      "nd": 1.516,
      "vd": 63.8,
      "indexReference": "D",
      "indexReferenceNote": "Literal sodium D index and dispersion reciprocal V in patent table."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 57.111,
      "d": 10.798,
      "sd": 23,
      "medium": 1
    },
    {
      "label": "2",
      "R": -57.111,
      "d": 4.515,
      "sd": 23,
      "medium": 2
    },
    {
      "label": "3",
      "R": "flat",
      "d": 14.047,
      "sd": 23
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 14.047
    },
    {
      "label": "4",
      "R": 57.111,
      "d": 3.141,
      "sd": 23,
      "medium": 3
    },
    {
      "label": "5",
      "R": 38.314,
      "d": 5.595,
      "sd": 23
    },
    {
      "label": "6",
      "R": 57.111,
      "d": 6.086,
      "sd": 23,
      "medium": 4
    },
    {
      "label": "7",
      "R": "flat",
      "d": 61.62195513337301,
      "sd": 23
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Reciprocal infinity-only reference; patent intended for projection. Film at right focal plane in original orientation. No finite theater conjugate validation."
  },
  "aperture": {
    "nominalFNumber": 2.2,
    "fStops": [
      2.2,
      2.8,
      4,
      5.6,
      8,
      11,
      16,
      22
    ]
  },
  "groups": [],
  "doublets": [
    {
      "text": "C1 doublet",
      "fromSurface": "1",
      "toSurface": "3"
    }
  ],
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
