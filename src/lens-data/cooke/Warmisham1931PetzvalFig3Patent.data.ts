import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "warmisham-us1797202-fig3-patent-reference",
  "maker": "Kapella / Arthur Warmisham",
  "name": "WARMISHAM PETZVAL FIGURE 3 PATENT REFERENCE",
  "subtitle": "1931 f/1.5; PATENT ONLY; NOT MAXIMUM RETAIL IDENTITY",
  "visible": false,
  "catalog": {
    "specs": [
      "6 ELEMENTS / 5 GROUPS",
      "PATENT FIGURE 3; NO PROVEN RETAIL IDENTITY",
      "ESTIMATED STOP AND RIMS",
      "LITERAL ZERO-AXIS AIR; INFINITY ONLY"
    ],
    "elementCount": 6,
    "groupCount": 5,
    "focalLengthMm": {
      "design": 108.35141906269206
    },
    "fNumber": {
      "design": 1.5
    }
  },
  "source": {
    "patentNumber": "US 1,797,202",
    "example": {
      "label": "Figure 3",
      "id": "3"
    },
    "patentYear": 1931,
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
      "type": "Patent element",
      "nd": 1.5736,
      "vd": 57.7,
      "indexReference": "D"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "L2",
      "type": "Patent element",
      "nd": 1.529,
      "vd": 51.6,
      "indexReference": "D"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "L3",
      "type": "Patent element",
      "nd": 1.6512,
      "vd": 33.5,
      "indexReference": "D"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "L4",
      "type": "Patent element",
      "nd": 1.6512,
      "vd": 33.5,
      "indexReference": "D"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "L5",
      "type": "Patent element",
      "nd": 1.6129,
      "vd": 59.3,
      "indexReference": "D"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "L6",
      "type": "Patent element",
      "nd": 1.6129,
      "vd": 59.3,
      "indexReference": "D"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 101.03,
      "d": 8.200000000000001,
      "sd": 40,
      "medium": 1
    },
    {
      "label": "2",
      "R": 193.79999999999998,
      "d": 0.2,
      "sd": 40
    },
    {
      "label": "3",
      "R": 71.43,
      "d": 21.0,
      "sd": 40,
      "medium": 2
    },
    {
      "label": "4",
      "R": -119.04999999999998,
      "d": 3.2,
      "sd": 40,
      "medium": 3
    },
    {
      "label": "5",
      "R": 200,
      "d": 16.3,
      "sd": 40
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 16.3
    },
    {
      "label": "6",
      "R": 116.93,
      "d": 4.7,
      "sd": 32,
      "medium": 4
    },
    {
      "label": "7",
      "R": 47.11,
      "d": 4.7,
      "sd": 32
    },
    {
      "label": "8",
      "R": 62.5,
      "d": 8.0,
      "sd": 32,
      "medium": 5
    },
    {
      "label": "9",
      "R": 211.90000000000003,
      "d": 0,
      "sd": 32
    },
    {
      "label": "10",
      "R": 59.099999999999994,
      "d": 8.0,
      "sd": 32,
      "medium": 6
    },
    {
      "label": "11",
      "R": 133.29999999999998,
      "d": 51.291493748071446,
      "sd": 32
    }
  ],
  "aperture": {
    "nominalFNumber": 1.5,
    "fStops": [
      1.5,
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
    "description": "Infinity-only patent Figure3; all source normalized lengths uniformly x100mm; literal sodiumD/V, estimated central iris and rims; source zero AIR afterR9 retained; calculated paraxial BFD. No retail identity."
  },
  "groups": [],
  "doublets": [],
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
