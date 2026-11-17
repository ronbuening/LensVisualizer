import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Literal signed prescription. Midgap stop and clear rims estimated; computed D-line plane. */
const LENS_DATA = {
  "schema": 2,
  "key": "goerz-zschokke-100-f3-5-us912352-patent-reference",
  "maker": "Goerz",
  "name": "GOERZ / ZSCHOKKE 100mm f/3.5 PATENT REFERENCE",
  "subtitle": "1908 DESIGN / 1909 GRANT \u2014 NO PRODUCTION MATCH",
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
      "design": 100.00160777409897
    },
    "fNumber": {
      "design": 3.5
    }
  },
  "source": {
    "patentNumber": "US 912,352",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1909,
    "authors": [
      "Walther Zschokke"
    ],
    "assignees": [
      "C. P. Goerz"
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.6141,
      "vd": 56.443014705882355,
      "indexReference": "D",
      "role": "Literal sodium-D index; V derived from printed F minus C difference. G-prime index retained in source audit, not fitted. No factory glass identification."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.6051,
      "vd": 38.15258511979823,
      "indexReference": "D",
      "role": "Literal sodium-D index; V derived from printed F minus C difference. G-prime index retained in source audit, not fitted. No factory glass identification."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.5513,
      "vd": 45.18852459016392,
      "indexReference": "D",
      "role": "Literal sodium-D index; V derived from printed F minus C difference. G-prime index retained in source audit, not fitted. No factory glass identification."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.6141,
      "vd": 56.443014705882355,
      "indexReference": "D",
      "role": "Literal sodium-D index; V derived from printed F minus C difference. G-prime index retained in source audit, not fitted. No factory glass identification."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 43.478,
      "d": 5.2,
      "sd": 15,
      "medium": 1
    },
    {
      "label": "2",
      "R": -70.423,
      "d": 1.6,
      "sd": 15
    },
    {
      "label": "3",
      "R": -55.866,
      "d": 2.1,
      "sd": 15,
      "medium": 2
    },
    {
      "label": "4",
      "R": 163.934,
      "d": 6,
      "sd": 15
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 6
    },
    {
      "label": "5",
      "R": -41.667,
      "d": 1.8,
      "sd": 15,
      "medium": 3
    },
    {
      "label": "6",
      "R": 41.667,
      "d": 3.6,
      "sd": 15
    },
    {
      "label": "7",
      "R": 78.126,
      "d": 5.7,
      "sd": 15,
      "medium": 4
    },
    {
      "label": "8",
      "R": -34.439,
      "d": 85.47978363727191,
      "sd": 15
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity-only reference, no sourced finite focus motion."
  },
  "aperture": {
    "nominalFNumber": 3.5,
    "fStops": [
      3.5,
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
