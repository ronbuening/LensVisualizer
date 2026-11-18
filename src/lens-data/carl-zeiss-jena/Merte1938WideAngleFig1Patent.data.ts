import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "zeiss-merte-us2126126-fig1-patent-reference",
  "maker": "Carl Zeiss Jena",
  "name": "MERTE WIDE-ANGLE FIGURE 1 PATENT REFERENCE",
  "subtitle": "1938 f/8 FOUR-ELEMENT PATENT REFERENCE; NOT FACTORY IDENTITY",
  "visible": false,
  "catalog": {
    "specs": [
      "4 ELEMENTS / 3 GROUPS",
      "PATENT FIGURE 1; NOT PROVEN RETAIL IDENTITY",
      "SOURCE STOP DISTANCES; ESTIMATED RIMS",
      "INFINITY ONLY; FULL FIELD UNVERIFIED"
    ],
    "elementCount": 4,
    "groupCount": 3,
    "focalLengthMm": {
      "design": 100.11860590080387
    },
    "fNumber": {
      "design": 8
    }
  },
  "source": {
    "patentNumber": "US 2,126,126",
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "patentYear": 1938,
    "authors": [
      "Willy Mert\u00e9"
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
      "type": "Patent element",
      "nd": 1.62313,
      "vd": 57,
      "indexReference": "d"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "L2",
      "type": "Patent element",
      "nd": 1.51746,
      "vd": 58.9,
      "indexReference": "d"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "L3",
      "type": "Patent element",
      "nd": 1.55088,
      "vd": 49.6,
      "indexReference": "d"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "L4",
      "type": "Patent element",
      "nd": 1.60284,
      "vd": 60.6,
      "indexReference": "d"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": "flat",
      "d": 6.55,
      "sd": 30,
      "medium": 1
    },
    {
      "label": "2",
      "R": 215.58,
      "d": 110.28,
      "sd": 30
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.36
    },
    {
      "label": "3",
      "R": -42.7,
      "d": 6.81,
      "sd": 10,
      "medium": 2
    },
    {
      "label": "4",
      "R": -21.2,
      "d": 1.31,
      "sd": 10
    },
    {
      "label": "5",
      "R": -16.15,
      "d": 2.99,
      "sd": 10,
      "medium": 3
    },
    {
      "label": "6",
      "R": 100.88,
      "d": 6.42,
      "sd": 10,
      "medium": 4
    },
    {
      "label": "7",
      "R": -23.08,
      "d": 157.8809275731288,
      "sd": 10
    }
  ],
  "aperture": {
    "nominalFNumber": 8,
    "fStops": [
      8,
      11,
      16,
      22
    ]
  },
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity-only patent Figure1: literal d-line glasses and stop distances110.28/2.36mm; estimated rims; computed paraxial BFD. Source approximately180-degree field is not validated; no retail identity."
  },
  "groups": [],
  "doublets": [],
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
