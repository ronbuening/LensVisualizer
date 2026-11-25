import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Private source-preserving reconstruction. Estimated rims/stop and derived infinity plane; see paired analysis. */
const LENS_DATA = {
  "schema": 2,
  "key": "canon-new-fd-24mm-f2",
  "maker": "Canon",
  "visible": false,
  "name": "CANON New FD 24mm f/2",
  "subtitle": "June1979 variant; US4188092A Example1, production-correlated patent reconstruction",
  "source": {
    "patentNumber": "US 4188092 A",
    "patentYear": 1980,
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "authors": [
      "Kikuo Momiyama"
    ],
    "assignees": [
      "Canon Kabushiki Kaisha"
    ],
    "sdSource": "heuristic"
  },
  "catalog": {
    "lensMounts": [
      "canon-fd"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 11,
    "groupCount": 9,
    "focalLengthMm": {
      "marketing": 24,
      "design": 23.99264253394198
    },
    "fNumber": {
      "marketing": 2,
      "design": 2
    },
    "closeFocusM": {
      "marketing": 0.3
    },
    "specs": [
      "June1979 New FD24/2, not the f/2.8 S.S.C.",
      "MIR mechanical section with rear biconcave cement seam supports Example1; print origin unknown.",
      "All signed normalized radii and thicknesses scaled uniformly by24; no plate or baffle.",
      "Image plane derived from exact d-line Gaussian infinity focus; not a printed terminal distance.",
      "Iris midpoint and optical caps estimated; full-field diagnostic may clip or fail.",
      "No finite floating-focus cam modeled; browser QA deferred."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "E1",
      "label": "Element 1",
      "type": "Lens",
      "nd": 1.58913,
      "vd": 61.1,
      "indexReference": "d"
    },
    {
      "id": 2,
      "name": "E2",
      "label": "Element 2",
      "type": "Lens",
      "nd": 1.68893,
      "vd": 31.1,
      "indexReference": "d"
    },
    {
      "id": 3,
      "name": "E3",
      "label": "Element 3",
      "type": "Lens",
      "nd": 1.59551,
      "vd": 39.2,
      "indexReference": "d"
    },
    {
      "id": 4,
      "name": "E4",
      "label": "Element 4",
      "type": "Lens",
      "nd": 1.58913,
      "vd": 61.1,
      "indexReference": "d"
    },
    {
      "id": 5,
      "name": "E5",
      "label": "Element 5",
      "type": "Lens",
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "d"
    },
    {
      "id": 6,
      "name": "E6",
      "label": "Element 6",
      "type": "Lens",
      "nd": 1.62041,
      "vd": 60.3,
      "indexReference": "d"
    },
    {
      "id": 7,
      "name": "E7",
      "label": "Element 7",
      "type": "Lens",
      "nd": 1.804,
      "vd": 46.6,
      "indexReference": "d"
    },
    {
      "id": 8,
      "name": "E8",
      "label": "Element 8",
      "type": "Lens",
      "nd": 1.6968,
      "vd": 55.5,
      "indexReference": "d"
    },
    {
      "id": 9,
      "name": "E9",
      "label": "Element 9",
      "type": "Lens",
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "d"
    },
    {
      "id": 10,
      "name": "E10",
      "label": "Element 10",
      "type": "Lens",
      "nd": 1.6968,
      "vd": 55.5,
      "indexReference": "d"
    },
    {
      "id": 11,
      "name": "E11",
      "label": "Element 11",
      "type": "Lens",
      "nd": 1.7725,
      "vd": 49.6,
      "indexReference": "d"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 82.02720000000001,
      "d": 3.2304,
      "sd": 18,
      "medium": 1
    },
    {
      "label": "2",
      "R": 354.30240000000003,
      "d": 0.19680000000000003,
      "sd": 18
    },
    {
      "label": "3",
      "R": 30.458399999999997,
      "d": 1.4687999999999999,
      "sd": 13,
      "medium": 2
    },
    {
      "label": "4",
      "R": 13.5408,
      "d": 4.5408,
      "sd": 11.3
    },
    {
      "label": "5",
      "R": 31.437600000000003,
      "d": 2.3496,
      "sd": 12,
      "medium": 3
    },
    {
      "label": "6",
      "R": 67.4232,
      "d": 2.2512,
      "sd": 12
    },
    {
      "label": "7",
      "R": 62.7312,
      "d": 0.9792000000000001,
      "sd": 9.7,
      "medium": 4
    },
    {
      "label": "8",
      "R": 13.005600000000001,
      "d": 4.1856,
      "sd": 9.7
    },
    {
      "label": "9",
      "R": 45.3024,
      "d": 3.1344,
      "sd": 10.6,
      "medium": 5
    },
    {
      "label": "10",
      "R": -70.93199999999999,
      "d": 12.4872,
      "sd": 10.6,
      "medium": 6
    },
    {
      "label": "11",
      "R": -166.02,
      "d": 0.9792000000000001,
      "sd": 10.6
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 0.9792000000000001
    },
    {
      "label": "12",
      "R": 461.2224,
      "d": 4.1136,
      "sd": 10.3,
      "medium": 7
    },
    {
      "label": "13",
      "R": -21.787200000000002,
      "d": 2.9088000000000003,
      "sd": 10.3
    },
    {
      "label": "14",
      "R": -27.554399999999998,
      "d": 2.0568,
      "sd": 10,
      "medium": 8
    },
    {
      "label": "15",
      "R": -18.8856,
      "d": 0.9792000000000001,
      "sd": 10,
      "medium": 9
    },
    {
      "label": "16",
      "R": 50.304,
      "d": 1.3224,
      "sd": 9
    },
    {
      "label": "17",
      "R": -116.184,
      "d": 3.036,
      "sd": 9,
      "medium": 10
    },
    {
      "label": "18",
      "R": -22.514400000000002,
      "d": 0.1464,
      "sd": 10.1
    },
    {
      "label": "19",
      "R": 284.44320000000005,
      "d": 2.6448,
      "sd": 10.1,
      "medium": 11
    },
    {
      "label": "20",
      "R": -49.8576,
      "d": 36.05336462192678,
      "sd": 10.1
    }
  ],
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
    "maxFNumber": 22,
    "blades": 8
  },
  "focus": {
    "closeFocusM": 1000000000000000,
    "description": "Static infinity only. Source qualitatively increases D6 while advancing the whole lens for near focus; no numeric finite prescription or focus cam inferred."
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 84,
    "maxTraceFieldDeg": 42
  },
  "doublets": [
    {
      "text": "E5/E6",
      "fromSurface": "9",
      "toSurface": "11"
    },
    {
      "text": "E8/E9",
      "fromSurface": "14",
      "toSurface": "16"
    }
  ],
  "rays": {
    "offAxisFieldFrac": 0.07142857142857142
  },
  "layout": {
    "yScFill": 0.65
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
