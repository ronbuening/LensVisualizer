import type { LensDataV2Input } from "../../LensVisualizer/src/types/lensDataV2.js";
export default {
  "schema": 2,
  "key": "agfa-colorsolagon55-us2784646-e1-representative",
  "maker": "Agfa",
  "name": "Agfa Color-Solagon 55mm f/2 patent E1 representative",
  "visible": false,
  "catalog": {
    "elementCount": 6,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 55,
      "design": 55
    },
    "fNumber": {
      "marketing": 2,
      "design": 2
    }
  },
  "source": {
    "patentNumber": "US 2784646",
    "patentYear": 1957,
    "authors": [
      "Theodor Brendel",
      "Hans Lautenbacher"
    ],
    "assignees": [
      "Agfa Camera-Werk"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Spherical patent glass",
      "nd": 1.72253,
      "vd": 37.8,
      "indexReference": "d",
      "glass": "Literal source d-line and Abbe values; no factory glass or measured curve"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Spherical patent glass",
      "nd": 1.66972,
      "vd": 47.4,
      "indexReference": "d",
      "glass": "Literal source d-line and Abbe values; no factory glass or measured curve"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Spherical patent glass",
      "nd": 1.65456,
      "vd": 33.9,
      "indexReference": "d",
      "glass": "Literal source d-line and Abbe values; no factory glass or measured curve"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Spherical patent glass",
      "nd": 1.69915,
      "vd": 30.1,
      "indexReference": "d",
      "glass": "Literal source d-line and Abbe values; no factory glass or measured curve"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Spherical patent glass",
      "nd": 1.69086,
      "vd": 54.7,
      "indexReference": "d",
      "glass": "Literal source d-line and Abbe values; no factory glass or measured curve"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Spherical patent glass",
      "nd": 1.72253,
      "vd": 37.8,
      "indexReference": "d",
      "glass": "Literal source d-line and Abbe values; no factory glass or measured curve"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 43.003949999999996,
      "d": 3.839,
      "sd": 20.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": 122.95909999999999,
      "d": 0.0583,
      "sd": 20.0
    },
    {
      "label": "3",
      "R": 18.880399999999998,
      "d": 5.87455,
      "sd": 12.5,
      "medium": 2
    },
    {
      "label": "4",
      "R": "flat",
      "d": 0.9889,
      "sd": 12.5,
      "medium": 3
    },
    {
      "label": "5",
      "R": 13.983200000000002,
      "d": 8.376374101204,
      "sd": 12.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 4.803825898795999
    },
    {
      "label": "6",
      "R": -18.031200000000002,
      "d": 4.94395,
      "sd": 11.5,
      "medium": 4
    },
    {
      "label": "7",
      "R": "flat",
      "d": 3.2923,
      "sd": 11.5,
      "medium": 5
    },
    {
      "label": "8",
      "R": -24.2605,
      "d": 0.20955000000000001,
      "sd": 11.5
    },
    {
      "label": "9",
      "R": 333.54089999999997,
      "d": 3.2923,
      "sd": 14.5,
      "medium": 6
    },
    {
      "label": "10",
      "R": -43.271249999999995,
      "d": 39.88816497223844,
      "sd": 14.5
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "NO_INTERNAL_RECONSTRUCTION: infinity normalized representative only"
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
    ],
    "maxFNumber": 22
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 50,
    "maxTraceFieldDeg": 25
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
