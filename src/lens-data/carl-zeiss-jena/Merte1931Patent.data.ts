import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "zeiss-merte-us1792917-patent-reference",
  "maker": "Carl Zeiss Jena",
  "name": "MERTE DOUBLE OBJECTIVE PATENT REFERENCE",
  "subtitle": "1931 100 mm f/4.5; PATENT ONLY",
  "visible": false,
  "catalog": {
    "specs": [
      "6 ELEMENTS / 4 GROUPS",
      "PATENT ONLY; RETAIL IDENTITY UNPROVED",
      "LITERAL STOP POSITION; ESTIMATED RIMS",
      "INFINITY ONLY"
    ],
    "elementCount": 6,
    "groupCount": 4,
    "focalLengthMm": {
      "design": 100.15266512809436
    },
    "fNumber": {
      "design": 4.5
    }
  },
  "source": {
    "patentNumber": "US 1,792,917",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1931,
    "authors": [
      "Willy Merte"
    ],
    "assignees": [
      "Carl Zeiss Jena"
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "L1",
      "type": "Biconvex",
      "nd": 1.61087,
      "vd": 55.8,
      "indexReference": "D"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "L2",
      "type": "Biconcave",
      "nd": 1.53994,
      "vd": 47.4,
      "indexReference": "D"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "L3",
      "type": "Meniscus",
      "nd": 1.56064,
      "vd": 61.1,
      "indexReference": "D"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "L4",
      "type": "Meniscus",
      "nd": 1.56064,
      "vd": 61.1,
      "indexReference": "D"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "L5",
      "type": "Biconcave",
      "nd": 1.53994,
      "vd": 47.4,
      "indexReference": "D"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "L6",
      "type": "Biconvex",
      "nd": 1.61087,
      "vd": 55.8,
      "indexReference": "D"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 25.9,
      "d": 5.12,
      "sd": 12,
      "medium": 1
    },
    {
      "label": "2",
      "R": -96.1,
      "d": 2.31,
      "sd": 12,
      "medium": 2
    },
    {
      "label": "3",
      "R": 18.41,
      "d": 0.75,
      "sd": 9
    },
    {
      "label": "4",
      "R": 23.78,
      "d": 3.48,
      "sd": 9,
      "medium": 3
    },
    {
      "label": "5",
      "R": 35.54,
      "d": 2.9,
      "sd": 9
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.8
    },
    {
      "label": "6",
      "R": -33.12,
      "d": 3.96,
      "sd": 9,
      "medium": 4
    },
    {
      "label": "7",
      "R": -22.74,
      "d": 1.57,
      "sd": 9
    },
    {
      "label": "8",
      "R": -18.14,
      "d": 1.88,
      "sd": 10,
      "medium": 5
    },
    {
      "label": "9",
      "R": 77.38,
      "d": 5.56,
      "sd": 12,
      "medium": 6
    },
    {
      "label": "10",
      "R": -25.37,
      "d": 86.74126880899716,
      "sd": 12
    }
  ],
  "aperture": {
    "nominalFNumber": 4.5,
    "fStops": [
      4.5,
      5.6,
      8,
      11,
      16,
      22
    ]
  },
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity-only literal 1931 patent. Source nD and V; calculated image plane. Literal b1/b2 stop position; estimated rims, stop diameter inferred from source f/4.5. Not factory identity."
  },
  "groups": [],
  "doublets": [],
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
