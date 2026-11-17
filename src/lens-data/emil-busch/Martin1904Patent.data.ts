import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "busch-martin-1904-210-f11-patent-reference",
  "maker": "Emil Busch",
  "name": "BUSCH / MARTIN 210mm f/11 PATENT REFERENCE",
  "subtitle": "1901 DESIGN / 1904 GRANT \u2014 MONOCHROME REFERENCE",
  "visible": false,
  "catalog": {
    "specs": [
      "2 ELEMENTS / 2 GROUPS",
      "PATENT ONLY; NO RETAIL MATCH",
      "ESTIMATED STOP OFFSET AND RIMS",
      "INFINITY ONLY"
    ],
    "elementCount": 2,
    "groupCount": 2,
    "focalLengthMm": {
      "design": 210.19329162195746
    },
    "fNumber": {
      "design": 11
    }
  },
  "source": {
    "patentNumber": "US 759,537",
    "example": {
      "label": "Figure 1",
      "id": "1"
    },
    "patentYear": 1904,
    "authors": [
      "Karl Martin"
    ],
    "assignees": [
      "Rathenower Optische Industrie Anstalt vormals Emil Busch AG"
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.6031,
      "indexReference": "D",
      "indexReferenceNote": "Literal sodium D index; no V supplied. Reference-line-only analysis. Source also gives nG-prime but no C/F dispersion."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.4967,
      "indexReference": "D",
      "indexReferenceNote": "Literal sodium D index; no V supplied. Reference-line-only analysis. Source also gives nG-prime but no C/F dispersion."
    }
  ],
  "surfaces": [
    {
      "label": "STO",
      "R": "flat",
      "d": 3
    },
    {
      "label": "1",
      "R": -22.36,
      "d": 6.15,
      "sd": 12,
      "medium": 1
    },
    {
      "label": "2",
      "R": -42.56,
      "d": 3.31,
      "sd": 12
    },
    {
      "label": "3",
      "R": -383.35,
      "d": 5.73,
      "sd": 12,
      "medium": 2
    },
    {
      "label": "4",
      "R": -33.64,
      "d": 250.14071037005343,
      "sd": 12
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity-only literal Figure 1 patent reference; no exact production identity."
  },
  "aperture": {
    "nominalFNumber": 11,
    "fStops": [
      11,
      16,
      22,
      32
    ]
  },
  "groups": [],
  "doublets": [],
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
