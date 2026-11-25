import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Private late5/5 numerical prototype, exact Example3 geometry.
 * Estimated f8 iris/rims only; actual browserQA deferred, not passed. */
const LENS_DATA = {
  "schema": 2,
  "key": "konica-hexanon-ar-28mm-f35-late",
  "maker": "Konica",
  "visible": false,
  "name": "KONICA HEXANON AR 28mm f/3.5 (Late 5/5)",
  "subtitle": "US4170403A Example3; production-correlated patent reconstruction, not factory exact",
  "source": {
    "patentNumber": "US 4170403 A",
    "patentYear": 1979,
    "example": {
      "label": "Example 3",
      "id": "3"
    },
    "authors": [
      "Toshiko Shimokura"
    ],
    "assignees": [
      "Konishiroku Photo Industry Co., Ltd."
    ],
    "sdSource": "heuristic"
  },
  "catalog": {
    "lensMounts": [
      "konica-ar"
    ],
    "elementCount": 5,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 28,
      "design": 28.00745874232808
    },
    "fNumber": {
      "marketing": 3.5,
      "design": 3.5
    },
    "specs": [
      "Late5/5 f/22 dealer703-191, not earlier7-glass releases, sibling35/2.8 Example1 or f/2.8 Example2.",
      "Registered exact source numeric profiles vs factory page6, one uniform transform, no distorted match.",
      "One nominal sourcef1\u219228mm scale; literal1.241\u00d728 rear air retained, no refocus.",
      "Private f/8 control through\u00b15deg static helium-d infinity only; estimated iris and inner optical rims.",
      "BrowserQA deferred to integration per user, not passed."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "E1",
      "label": "Element 1",
      "type": "Lens",
      "nd": 1.5891,
      "vd": 61.1,
      "indexReference": "d"
    },
    {
      "id": 2,
      "name": "E2",
      "label": "Element 2",
      "type": "Lens",
      "nd": 1.72,
      "vd": 43.7,
      "indexReference": "d"
    },
    {
      "id": 3,
      "name": "E3",
      "label": "Element 3",
      "type": "Lens",
      "nd": 1.7847,
      "vd": 26.2,
      "indexReference": "d"
    },
    {
      "id": 4,
      "name": "E4",
      "label": "Element 4",
      "type": "Lens",
      "nd": 1.8061,
      "vd": 40.9,
      "indexReference": "d"
    },
    {
      "id": 5,
      "name": "E5",
      "label": "Element 5",
      "type": "Lens",
      "nd": 1.623,
      "vd": 58.2,
      "indexReference": "d"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 30.2652,
      "d": 1.4644,
      "sd": 3.12,
      "medium": 1
    },
    {
      "label": "2",
      "R": 12.2808,
      "d": 13.6808,
      "sd": 2.97
    },
    {
      "label": "3",
      "R": 22.6128,
      "d": 5.8632,
      "sd": 2.88,
      "medium": 2
    },
    {
      "label": "4",
      "R": -40.642,
      "d": 2.436,
      "sd": 2.56
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.2540000000000004
    },
    {
      "label": "5",
      "R": -15.3048,
      "d": 1.9544000000000001,
      "sd": 2.2,
      "medium": 3
    },
    {
      "label": "6",
      "R": 42.0252,
      "d": 0.5851999999999999,
      "sd": 2.34
    },
    {
      "label": "7",
      "R": -55.2944,
      "d": 1.9544000000000001,
      "sd": 2.42,
      "medium": 4
    },
    {
      "label": "8",
      "R": -16.4332,
      "d": 0.098,
      "sd": 2.62
    },
    {
      "label": "9",
      "R": -64.3104,
      "d": 1.9544000000000001,
      "sd": 2.63,
      "medium": 5
    },
    {
      "label": "10",
      "R": -17.368399999999998,
      "d": 34.748000000000005,
      "sd": 2.74
    }
  ],
  "aperture": {
    "nominalFNumber": 8,
    "fStops": [
      8
    ],
    "maxFNumber": 8
  },
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Literal stationary infinity state only. No finite focus travel or factorycam modeled."
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 75,
    "maxTraceFieldDeg": 5
  },
  "rays": {
    "offAxisFieldFrac": 0.98
  },
  "layout": {
    "yScFill": 0.65
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
