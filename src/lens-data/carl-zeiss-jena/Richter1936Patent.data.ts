import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "zeiss-richter-1936-66-f6-3-patent-reference",
  "maker": "Carl Zeiss Jena",
  "name": "ZEISS / RICHTER 66mm f/6.3 PATENT REFERENCE",
  "subtitle": "1933 PRIORITY / 1936 GRANT \u2014 FIGURE 1",
  "visible": false,
  "catalog": {
    "specs": [
      "4 ELEMENTS / 4 GROUPS",
      "PATENT ONLY; NO RETAIL MATCH",
      "ESTIMATED STOP AND RIMS",
      "INFINITY ONLY"
    ],
    "elementCount": 4,
    "groupCount": 4,
    "focalLengthMm": {
      "design": 66.03779478699285
    },
    "fNumber": {
      "design": 6.3
    }
  },
  "source": {
    "patentNumber": "US 2,031,792",
    "example": {
      "label": "Figure 1",
      "id": "1"
    },
    "patentYear": 1936,
    "authors": [
      "Robert Richter"
    ],
    "assignees": [
      "Carl Zeiss, Jena"
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.6201,
      "vd": 60.4,
      "indexReference": "D",
      "indexReferenceNote": "Literal sodium D index and dispersion reciprocal V in patent table."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.7172,
      "vd": 29.5,
      "indexReference": "D",
      "indexReferenceNote": "Literal sodium D index and dispersion reciprocal V in patent table."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.7172,
      "vd": 29.5,
      "indexReference": "D",
      "indexReferenceNote": "Literal sodium D index and dispersion reciprocal V in patent table."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.6201,
      "vd": 60.4,
      "indexReference": "D",
      "indexReferenceNote": "Literal sodium D index and dispersion reciprocal V in patent table."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 11.25,
      "d": 4.44,
      "sd": 10,
      "medium": 1
    },
    {
      "label": "2",
      "R": 16.55,
      "d": 0.02,
      "sd": 10
    },
    {
      "label": "3",
      "R": 9.094,
      "d": 0.5,
      "sd": 6.5,
      "medium": 2
    },
    {
      "label": "4",
      "R": 7.35,
      "d": 6.49,
      "sd": 6.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 6.49
    },
    {
      "label": "5",
      "R": -7.35,
      "d": 0.5,
      "sd": 6.5,
      "medium": 3
    },
    {
      "label": "6",
      "R": -9.094,
      "d": 0.02,
      "sd": 6.5
    },
    {
      "label": "7",
      "R": -16.55,
      "d": 4.44,
      "sd": 10,
      "medium": 4
    },
    {
      "label": "8",
      "R": -11.25,
      "d": 51.94152153724732,
      "sd": 10
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity-only literal Figure 1 patent reference; no exact production identity."
  },
  "aperture": {
    "nominalFNumber": 6.3,
    "fStops": [
      6.3,
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
