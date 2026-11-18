import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "warmisham-us1484853-fig1-patent-reference",
  "maker": "Arthur Warmisham",
  "name": "WARMISHAM PROJECTION FIGURE 1 PATENT REFERENCE",
  "subtitle": "1924; SOURCE COMPARISON APERTURE; NOT MAXIMUM RETAIL IDENTITY",
  "visible": false,
  "catalog": {
    "specs": [
      "4 ELEMENTS / 2 GROUPS",
      "PATENT FIGURE 1; NO RETAIL IDENTITY",
      "SOURCE 3.20-INCH COMPARISON APERTURE",
      "ESTIMATED IRIS PLANE/RIMS; INFINITY ONLY"
    ],
    "elementCount": 4,
    "groupCount": 2,
    "focalLengthMm": {
      "design": 254.19707874143657
    },
    "fNumber": {
      "design": 3.127424689240115
    }
  },
  "source": {
    "patentNumber": "US 1,484,853",
    "example": {
      "label": "Figure 1",
      "id": "1"
    },
    "patentYear": 1924,
    "authors": [
      "Arthur Warmisham"
    ],
    "assignees": [],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "L1",
      "type": "Patent element",
      "nd": 1.509,
      "vd": 64.3,
      "indexReference": "D"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "L2",
      "type": "Patent element",
      "nd": 1.651,
      "vd": 33.5,
      "indexReference": "D"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "L3",
      "type": "Patent element",
      "nd": 1.509,
      "vd": 64.3,
      "indexReference": "D"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "L4",
      "type": "Patent element",
      "nd": 1.651,
      "vd": 33.5,
      "indexReference": "D"
    }
  ],
  "surfaces": [
    {
      "label": "STO",
      "R": "flat",
      "d": 1
    },
    {
      "label": "1",
      "R": 271.78,
      "d": 17.7292,
      "sd": 42,
      "medium": 1
    },
    {
      "label": "2",
      "R": -227.07599999999996,
      "d": 8.839199999999998,
      "sd": 42,
      "medium": 2
    },
    {
      "label": "3",
      "R": -1005.84,
      "d": 332.73999999999995,
      "sd": 42
    },
    {
      "label": "4",
      "R": 74.6252,
      "d": 28.651199999999996,
      "sd": 24,
      "medium": 3
    },
    {
      "label": "5",
      "R": -127.762,
      "d": 5.232399999999999,
      "sd": 24,
      "medium": 4
    },
    {
      "label": "6",
      "R": "flat",
      "d": 63.47700618775093,
      "sd": 24
    }
  ],
  "aperture": {
    "nominalFNumber": 3.127424689240115,
    "fStops": [
      3.127424689240115,
      4,
      5.6,
      8,
      11,
      16
    ]
  },
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity-only reciprocal patent Figure 1; inch dimensions x25.4 mm; source D/V retained; 3.20-inch effective front aperture; estimated iris 1 mm before first vertex and rims; calculated BFD. Not Maximum f/2 or a factory match."
  },
  "groups": [],
  "doublets": [],
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
