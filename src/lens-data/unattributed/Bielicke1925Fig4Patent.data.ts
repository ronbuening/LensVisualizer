import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "bielicke-us1540752-fig4-patent-reference",
  "maker": "William F. Bielicke",
  "name": "BIELICKE FOUR-SINGLET PATENT REFERENCE",
  "subtitle": "1925 Fig.4 100 mm nominal f/2; PATENT ONLY",
  "visible": false,
  "catalog": {
    "specs": [
      "4 ELEMENTS / 4 GROUPS",
      "PATENT ONLY; NO RETAIL IDENTITY",
      "ESTIMATED MIDGAP STOP AND 50MM RIMS",
      "D-LINE ONLY; INFINITY ONLY"
    ],
    "elementCount": 4,
    "groupCount": 4,
    "focalLengthMm": {
      "design": 100.40491043206832
    },
    "fNumber": {
      "design": 2
    }
  },
  "source": {
    "patentNumber": "US 1,540,752",
    "example": {
      "label": "Figure 4",
      "id": "4"
    },
    "patentYear": 1925,
    "authors": [
      "William F. Bielicke"
    ],
    "assignees": [],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "L1",
      "type": "Biconvex",
      "nd": 1.60958,
      "indexReference": "D",
      "indexReferenceNote": "Literal source nD. Source nG-prime preserved in analysis, no invented modern V number."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "L2",
      "type": "Biconcave",
      "nd": 1.6733,
      "indexReference": "D",
      "indexReferenceNote": "Literal source nD. Source nG-prime preserved in analysis, no invented modern V number."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "L3",
      "type": "Meniscus",
      "nd": 1.60958,
      "indexReference": "D",
      "indexReferenceNote": "Literal source nD. Source nG-prime preserved in analysis, no invented modern V number."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "L4",
      "type": "Biconvex",
      "nd": 1.60958,
      "indexReference": "D",
      "indexReferenceNote": "Literal source nD. Source nG-prime preserved in analysis, no invented modern V number."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 56,
      "d": 9,
      "sd": 25,
      "medium": 1
    },
    {
      "label": "2",
      "R": -1500,
      "d": 17,
      "sd": 25
    },
    {
      "label": "3",
      "R": -55,
      "d": 2.5,
      "sd": 25,
      "medium": 2
    },
    {
      "label": "4",
      "R": 80,
      "d": 6,
      "sd": 25
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 6
    },
    {
      "label": "5",
      "R": -373,
      "d": 7,
      "sd": 25,
      "medium": 3
    },
    {
      "label": "6",
      "R": -48,
      "d": 1.5,
      "sd": 25
    },
    {
      "label": "7",
      "R": 194,
      "d": 5,
      "sd": 25,
      "medium": 4
    },
    {
      "label": "8",
      "R": -194,
      "d": 79.04572679936774,
      "sd": 25
    }
  ],
  "aperture": {
    "nominalFNumber": 2,
    "fStops": [
      2,
      2.8,
      4,
      5.6,
      8,
      11,
      16,
      22
    ]
  },
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity-only patent Fig.4; source D-line prescription. Image plane computed, not a flange distance. 100mm focus / 50mm diameter interpreted nominal f/2; midgap stop and 25mm semi-diameter rims are modeling estimates. No chromatic or factory-identity claim."
  },
  "groups": [],
  "doublets": [],
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
