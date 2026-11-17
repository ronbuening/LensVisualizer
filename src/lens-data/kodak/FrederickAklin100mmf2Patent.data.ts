import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Literal signed prescription. Midgap stop and clear rims estimated; computed D-line plane. */
const LENS_DATA = {
  "schema": 2,
  "key": "kodak-frederick-aklin-100-f2-us2158179-figure2-patent-reference",
  "maker": "Kodak",
  "name": "KODAK / FREDERICK-AKLIN 100mm f/2 PATENT REFERENCE",
  "subtitle": "1937 DESIGN / 1939 GRANT \u2014 NO PRODUCTION MATCH",
  "visible": false,
  "catalog": {
    "specs": [
      "4 ELEMENTS / 4 GROUPS",
      "PATENT-ONLY REFERENCE",
      "ESTIMATED STOP AND RIMS",
      "INFINITY ONLY"
    ],
    "elementCount": 4,
    "groupCount": 4,
    "focalLengthMm": {
      "design": 99.94187474685016
    },
    "fNumber": {
      "design": 2
    }
  },
  "source": {
    "patentNumber": "US 2,158,179",
    "example": {
      "label": "Figure 2",
      "id": "2"
    },
    "patentYear": 1939,
    "authors": [
      "Charles W. Frederick",
      "George H. Aklin"
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
      "nd": 1.9007,
      "vd": 42.5,
      "indexReference": "D",
      "role": "Literal sodium-D index and Abbe number; no factory glass identity or verified melt composition."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.8049,
      "vd": 25.5,
      "indexReference": "D",
      "role": "Literal sodium-D index and Abbe number; no factory glass identity or verified melt composition."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Meniscus Negative",
      "nd": 1.8049,
      "vd": 25.5,
      "indexReference": "D",
      "role": "Literal sodium-D index and Abbe number; no factory glass identity or verified melt composition."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.9007,
      "vd": 42.5,
      "indexReference": "D",
      "role": "Literal sodium-D index and Abbe number; no factory glass identity or verified melt composition."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 96.8,
      "d": 11.9,
      "sd": 23,
      "medium": 1
    },
    {
      "label": "2",
      "R": -174.5,
      "d": 1.55,
      "sd": 23
    },
    {
      "label": "3",
      "R": -94.1,
      "d": 4.15,
      "sd": 23,
      "medium": 2
    },
    {
      "label": "4",
      "R": 2170,
      "d": 10.9,
      "sd": 23
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 10.9
    },
    {
      "label": "5",
      "R": 882,
      "d": 4.15,
      "sd": 23,
      "medium": 3
    },
    {
      "label": "6",
      "R": 81.5,
      "d": 2.45,
      "sd": 23
    },
    {
      "label": "7",
      "R": 238,
      "d": 11.9,
      "sd": 23,
      "medium": 4
    },
    {
      "label": "8",
      "R": -84.8,
      "d": 74.87819645751735,
      "sd": 23
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity-only reference, no sourced finite focus motion."
  },
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
  "groups": [],
  "doublets": [],
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
