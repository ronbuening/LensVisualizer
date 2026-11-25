import type { LensDataV2Input } from "../../types/lensDataV2.js";
const DATA = {
  "schema": 2,
  "key": "canon-28mm-f28-ltm",
  "maker": "Canon",
  "name": "CANON 28mm f/2.8 LTM",
  "visible": false,
  "subtitle": "Hiroshi Ito US2779239 sole example; production-correlated static infinity model",
  "source": {
    "patentNumber": "US 2779239 A",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "authors": [
      "Hiroshi Ito"
    ],
    "assignees": [
      "Canon Camera Company, Inc."
    ],
    "sdSource": "heuristic",
    "patentYear": 1957
  },
  "catalog": {
    "lensMounts": [
      "leica-ltm"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 6,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 28,
      "design": 28
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.8
    },
    "specs": [
      "Period Canon 28mm f/2.8 LTM, not the Serenar 28mm f/3.5 or Canon FD 28mm f/2.8",
      "Canon period production cutaway confirms distinctive 6/4 topology",
      "Uniform ×28, signed geometry and glass unchanged; suggested L2 retail glass change unverified",
      "Computed d-line infinity plane; no signed finite movement",
      "Central diaphragm and clear semi-diameters are estimated",
      "Scoped stopped-down validation; not qualified at nominal f/2.8 across the frame"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "E1",
      "label": "Element1",
      "type": "Lens",
      "nd": 1.6166,
      "vd": 36.6,
      "indexReference": "d"
    },
    {
      "id": 2,
      "name": "E2",
      "label": "Element2",
      "type": "Lens",
      "nd": 1.697,
      "vd": 54.7,
      "indexReference": "d"
    },
    {
      "id": 3,
      "name": "E3",
      "label": "Element3",
      "type": "Lens",
      "nd": 1.74,
      "vd": 28.2,
      "indexReference": "d"
    },
    {
      "id": 4,
      "name": "E4",
      "label": "Element4",
      "type": "Lens",
      "nd": 1.6889,
      "vd": 31.1,
      "indexReference": "d"
    },
    {
      "id": 5,
      "name": "E5",
      "label": "Element5",
      "type": "Lens",
      "nd": 1.6583,
      "vd": 57.1,
      "indexReference": "d"
    },
    {
      "id": 6,
      "name": "E6",
      "label": "Element6",
      "type": "Lens",
      "nd": 1.5673,
      "vd": 42.8,
      "indexReference": "d"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 12.1212,
      "d": 1.316,
      "sd": 6.2,
      "medium": 1
    },
    {
      "label": "2",
      "R": 6.902,
      "d": 1.764,
      "sd": 5.1,
      "medium": 2
    },
    {
      "label": "3",
      "R": 23.072,
      "d": 0.056,
      "sd": 5.1
    },
    {
      "label": "4",
      "R": 8.12,
      "d": 1.9600000000000002,
      "sd": 4.7,
      "medium": 3
    },
    {
      "label": "5",
      "R": 5.6588,
      "d": 2.66,
      "sd": 3.9
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.66
    },
    {
      "label": "6",
      "R": -5.851999999999999,
      "d": 0.5880000000000001,
      "sd": 3.9,
      "medium": 4
    },
    {
      "label": "7",
      "R": -7.4788,
      "d": 0.028,
      "sd": 4.7
    },
    {
      "label": "8",
      "R": -36.147999999999996,
      "d": 3.668,
      "sd": 5,
      "medium": 5
    },
    {
      "label": "9",
      "R": -6.888,
      "d": 0.812,
      "sd": 5,
      "medium": 6
    },
    {
      "label": "10",
      "R": -10.976,
      "d": 20.189698071760965,
      "sd": 5.5
    }
  ],
  "aperture": {
    "nominalFNumber": 2.8,
    "fStops": [
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
  "focus": {
    "closeFocusM": 1000000000000000,
    "description": "Static infinity only; no signed finite position or movement is available."
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 50,
    "maxTraceFieldDeg": 25
  },
  "rays": {
    "offAxisFieldFrac": 0.2
  },
  "layout": {
    "yScFill": 0.65
  },
  "doublets": [
    {
      "text": "Front cemented doublet",
      "fromSurface": "1",
      "toSurface": "3"
    },
    {
      "text": "Rear cemented doublet",
      "fromSurface": "8",
      "toSurface": "10"
    }
  ]
} satisfies LensDataV2Input;
export default DATA;
