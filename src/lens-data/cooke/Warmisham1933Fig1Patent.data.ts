import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "kapella-warmisham-us1926569-fig1-patent-reference",
  "maker": "Kapella",
  "name": "WARMISHAM f/1 PATENT REFERENCE",
  "subtitle": "1933 FIGURE 1; PATENT ONLY",
  "visible": false,
  "catalog": {
    "specs": [
      "7 ELEMENTS / 5 GROUPS",
      "PATENT ONLY; RETAIL IDENTITY UNPROVED",
      "LITERAL FRONT APERTURE; ESTIMATED RIMS",
      "INFINITY ONLY"
    ],
    "elementCount": 7,
    "groupCount": 5,
    "focalLengthMm": {
      "design": 97.06160617195864
    },
    "fNumber": {
      "design": 1
    }
  },
  "source": {
    "patentNumber": "US 1,926,569",
    "example": {
      "label": "Figure 1",
      "id": "1"
    },
    "patentYear": 1933,
    "authors": [
      "Arthur Warmisham"
    ],
    "assignees": [
      "Kapella Limited"
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "L1",
      "type": "Biconvex",
      "nd": 1.6234,
      "vd": 56.3,
      "indexReference": "d"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "L2",
      "type": "Negative meniscus",
      "nd": 1.529,
      "vd": 51.6,
      "indexReference": "d"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "L3",
      "type": "Biconcave",
      "nd": 1.694,
      "vd": 30.7,
      "indexReference": "d"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "L4",
      "type": "Biconcave",
      "nd": 1.694,
      "vd": 30.7,
      "indexReference": "d"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "L5",
      "type": "Biconvex",
      "nd": 1.6437,
      "vd": 48.3,
      "indexReference": "d"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "L6",
      "type": "Biconvex",
      "nd": 1.6234,
      "vd": 56.3,
      "indexReference": "d"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "L7",
      "type": "Negative meniscus",
      "nd": 1.529,
      "vd": 51.6,
      "indexReference": "d"
    }
  ],
  "surfaces": [
    {
      "label": "STO",
      "R": "flat",
      "d": 0
    },
    {
      "label": "1",
      "R": 84.3,
      "d": 30.5,
      "sd": 48.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": -111.1,
      "d": 3,
      "sd": 48.5,
      "medium": 2
    },
    {
      "label": "3",
      "R": -666.6,
      "d": 15,
      "sd": 48.5
    },
    {
      "label": "4",
      "R": -95.24,
      "d": 3,
      "sd": 42,
      "medium": 3
    },
    {
      "label": "5",
      "R": 666.6,
      "d": 7.5,
      "sd": 42
    },
    {
      "label": "6",
      "R": -175.5,
      "d": 3,
      "sd": 42,
      "medium": 4
    },
    {
      "label": "7",
      "R": 71.43,
      "d": 15,
      "sd": 42
    },
    {
      "label": "8",
      "R": 833.3,
      "d": 22,
      "sd": 42,
      "medium": 5
    },
    {
      "label": "9",
      "R": -71.01,
      "d": 0.2,
      "sd": 42
    },
    {
      "label": "10",
      "R": 100,
      "d": 47,
      "sd": 42,
      "medium": 6
    },
    {
      "label": "11",
      "R": -63.05,
      "d": 4.9,
      "sd": 42,
      "medium": 7
    },
    {
      "label": "12",
      "R": -161.1,
      "d": 60.549840526808296,
      "sd": 42
    }
  ],
  "aperture": {
    "nominalFNumber": 1.0006351151748314,
    "fStops": [
      1.0006351151748314,
      1.4,
      2,
      2.8,
      4,
      5.6,
      8,
      11,
      16
    ]
  },
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity-only patent Fig1; literal nD/V and 97mm front aperture at 100x scale. Computed BFD; estimated rims; no production identity."
  },
  "groups": [],
  "doublets": [],
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
