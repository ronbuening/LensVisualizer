import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "warmisham-us1361207-example2-patent-reference",
  "maker": "Taylor, Taylor & Hobson",
  "name": "WARMISHAM FOUR-SINGLET PATENT",
  "subtitle": "1920 Example II 100 mm f/4.5; PATENT ONLY",
  "visible": false,
  "catalog": {
    "specs": [
      "4 ELEMENTS / 4 GROUPS",
      "PATENT ONLY; NO RETAIL IDENTITY",
      "ESTIMATED MIDPOINT IRIS AND RIMS"
    ],
    "elementCount": 4,
    "groupCount": 4,
    "focalLengthMm": {
      "design": 101.56052899987043
    },
    "fNumber": {
      "design": 4.5
    }
  },
  "source": {
    "patentNumber": "US 1,361,207",
    "example": {
      "label": "Example 2",
      "id": "2"
    },
    "patentYear": 1920,
    "authors": [
      "Arthur Warmisham"
    ],
    "assignees": [
      "Taylor, Taylor & Hobson Ltd."
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "L1",
      "type": "Biconvex",
      "nd": 1.6116,
      "vd": 56.4,
      "indexReference": "D",
      "indexReferenceNote": "Literal source nD and V; native dispersion approximation."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "L2",
      "type": "Biconcave",
      "nd": 1.6206,
      "vd": 36.2,
      "indexReference": "D",
      "indexReferenceNote": "Literal source nD and V; native dispersion approximation."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "L3",
      "type": "Biconcave",
      "nd": 1.6206,
      "vd": 36.2,
      "indexReference": "D",
      "indexReferenceNote": "Literal source nD and V; native dispersion approximation."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "L4",
      "type": "Biconvex",
      "nd": 1.6116,
      "vd": 56.4,
      "indexReference": "D",
      "indexReferenceNote": "Literal source nD and V; native dispersion approximation."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 34.09,
      "d": 2.57,
      "sd": 11.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": -408.1,
      "d": 10.89,
      "sd": 11.5
    },
    {
      "label": "3",
      "R": -41.43,
      "d": 0.9,
      "sd": 11.5,
      "medium": 2
    },
    {
      "label": "4",
      "R": 104.9,
      "d": 0.71,
      "sd": 11.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 0.71
    },
    {
      "label": "5",
      "R": -1440,
      "d": 0.9,
      "sd": 11.5,
      "medium": 3
    },
    {
      "label": "6",
      "R": 36.98,
      "d": 9.09,
      "sd": 11.5
    },
    {
      "label": "7",
      "R": 133.6,
      "d": 2.65,
      "sd": 11.5,
      "medium": 4
    },
    {
      "label": "8",
      "R": -33.52,
      "d": 85.61779647354736,
      "sd": 11.5
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
    "description": "Infinity-only patent reconstruction. Source nominal 100 mm versus literal computed D EFL 101.560529 mm (+1.56%); calculated BFD 85.617796 mm. No optics fitted. Iris midpoint of 1.42 mm middle air gap is estimated (0.71/0.71); 11.5 mm rims estimated. Not factory identity or published field reproduction."
  },
  "groups": [],
  "doublets": [],
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
