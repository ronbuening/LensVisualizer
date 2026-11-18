import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "goerz-weidert-us1643865-example1-patent-reference",
  "maker": "C. P. Goerz",
  "name": "WEIDERT TWO-LENS PATENT REFERENCE",
  "subtitle": "1927 EXAMPLE 1; PATENT ONLY",
  "visible": false,
  "catalog": {
    "specs": [
      "2 ELEMENTS / 1 GROUP",
      "PATENT ONLY; RETAIL IDENTITY UNPROVED",
      "LITERAL REAR STOP AND CLEAR DIAMETER",
      "INFINITY ONLY"
    ],
    "elementCount": 2,
    "groupCount": 1,
    "focalLengthMm": {
      "design": 100.0023971751592
    },
    "fNumber": {
      "design": 9
    }
  },
  "source": {
    "patentNumber": "US 1,643,865",
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "patentYear": 1927,
    "authors": [
      "Franz Weidert"
    ],
    "assignees": [
      "Optische Anstalt C. P. Goerz AG"
    ],
    "sdSource": "source-table"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "L1",
      "type": "Biconvex",
      "nd": 1.5096,
      "vd": 63.4,
      "indexReference": "D"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "L2",
      "type": "Biconcave",
      "nd": 1.549,
      "vd": 47.1,
      "indexReference": "D"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 21,
      "d": 3,
      "sd": 7.35,
      "medium": 1
    },
    {
      "label": "2",
      "R": -35,
      "d": 1.25,
      "sd": 7.35,
      "medium": 2
    },
    {
      "label": "3",
      "R": 38.82,
      "d": 11.5,
      "sd": 7.35
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 81.80797572679677
    }
  ],
  "aperture": {
    "nominalFNumber": 8.989887442505141,
    "fStops": [
      8.989887442505141,
      11,
      16,
      22,
      32
    ]
  },
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity-only patent Example1. Literal D-line indices and V, source 14.7mm clear lens diameter and 9.1mm diaphragm 11.5mm behind last vertex. Calculated paraxial image plane. No factory identity; deliberate source spherical undercorrection."
  },
  "groups": [],
  "doublets": [],
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
