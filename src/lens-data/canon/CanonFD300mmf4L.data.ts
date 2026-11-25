import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "canon-fd-300mm-f4l",
  "maker": "Canon",
  "visible": false,
  "name": "CANON FD 300mm f/4L",
  "subtitle": "1978 FD / 1980 New FD powered optical family; Tsuji Example 4",
  "source": {
    "patentNumber": "US 4251133 A",
    "patentYear": 1981,
    "example": {
      "label": "Example 4",
      "id": "4"
    },
    "authors": [
      "Sadahiko Tsuji"
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
    "elementCount": 6,
    "groupCount": 6,
    "focalLengthMm": {
      "marketing": 300,
      "design": 300
    },
    "fNumber": {
      "marketing": 4,
      "design": 4
    },
    "specs": [
      "Canon\u2019s seven listed elements include a protective optical flat. Patent and model contain six powered elements in six groups. The front flat and rear removable drop-in filter are excluded: thickness and glass identity are unverified.",
      "Signed US4251133 Example 4 data at 300 mm scale, d-line. Printed back focus and stop preserved; edge sizes inferred from the New FD family section and are not measured clear apertures.",
      "May 1980 New FD L production cutaway; separate named 1978 FD L production glass schedule. Example 3 is the non-L design.",
      "Infinity only. Patent aberration plot at 10f and OEM 3m do not establish displacement. No browser integration, broadband material-match or factory-vignetting claim."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "E1",
      "label": "Powered element 1",
      "type": "Lens",
      "nd": 1.497,
      "vd": 81.3,
      "indexReference": "d"
    },
    {
      "id": 2,
      "name": "E2",
      "label": "Powered element 2",
      "type": "Lens",
      "nd": 1.8061,
      "vd": 40.9,
      "indexReference": "d"
    },
    {
      "id": 3,
      "name": "E3",
      "label": "Powered element 3",
      "type": "Lens",
      "nd": 1.497,
      "vd": 81.3,
      "indexReference": "d"
    },
    {
      "id": 4,
      "name": "E4",
      "label": "Powered element 4",
      "type": "Lens",
      "nd": 1.58913,
      "vd": 61.1,
      "indexReference": "d"
    },
    {
      "id": 5,
      "name": "E5",
      "label": "Powered element 5",
      "type": "Lens",
      "nd": 1.5927,
      "vd": 35.3,
      "indexReference": "d"
    },
    {
      "id": 6,
      "name": "E6",
      "label": "Powered element 6",
      "type": "Lens",
      "nd": 1.7725,
      "vd": 49.6,
      "indexReference": "d"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 186.27,
      "d": 12.27,
      "sd": 39,
      "medium": 1
    },
    {
      "label": "2",
      "R": -126.6,
      "d": 3.4499999999999997,
      "sd": 39
    },
    {
      "label": "3",
      "R": -121.28999999999999,
      "d": 4.260000000000001,
      "sd": 37.6,
      "medium": 2
    },
    {
      "label": "4",
      "R": -1096.92,
      "d": 3.87,
      "sd": 37.6
    },
    {
      "label": "5",
      "R": 122.24999999999999,
      "d": 10.05,
      "sd": 38.2,
      "medium": 3
    },
    {
      "label": "6",
      "R": -606.93,
      "d": 63.03,
      "sd": 38.2
    },
    {
      "label": "7",
      "R": 29.07,
      "d": 4.47,
      "sd": 20.6,
      "medium": 4
    },
    {
      "label": "8",
      "R": 26.16,
      "d": 15.060000000000002,
      "sd": 20.6
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.1899999999999977
    },
    {
      "label": "9",
      "R": 75.92999999999999,
      "d": 3.66,
      "sd": 17.5,
      "medium": 5
    },
    {
      "label": "10",
      "R": -557.91,
      "d": 2.04,
      "sd": 17.5
    },
    {
      "label": "11",
      "R": -866.25,
      "d": 1.7399999999999998,
      "sd": 17.5,
      "medium": 6
    },
    {
      "label": "12",
      "R": 55.29,
      "d": 116.52000000000001,
      "sd": 17.5
    }
  ],
  "aperture": {
    "nominalFNumber": 4,
    "fStops": [
      4,
      5.6,
      8,
      11,
      16,
      22,
      32
    ],
    "maxFNumber": 32,
    "blades": 9
  },
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Static infinity only. Retail 3 m and 0.11\u00d7 are descriptive, not modeled."
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 8.25,
    "maxTraceFieldDeg": 4.125
  },
  "rays": {
    "offAxisFieldFrac": 0.25
  },
  "layout": {
    "yScFill": 0.65
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
