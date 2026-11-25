import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Private production-correlated reconstruction; literal source and estimated stop/rims. */
const LENS_DATA = {
  "schema": 2,
  "checks": {"gapSagFrac": 0.91},
  "key": "canon-new-fd-35mm-f28",
  "maker": "Canon",
  "visible": false,
  "name": "CANON New FD 35mm f/2.8",
  "subtitle": "June1979 C21-5241-201; US4257678 Example1, production-correlated patent reconstruction",
  "source": {
    "patentNumber": "US 4257678 A",
    "patentYear": 1981,
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "authors": [
      "Kikuo Momiyama",
      "Hideo Yokota"
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
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 35,
      "design": 35.00676922439152
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.8
    },
    "closeFocusM": {
      "marketing": 0.35
    },
    "specs": [
      "June1979 C21-5241-201 New FD35/2.8,6elements/5groups.",
      "MIR mechanical cutaway one-transform correlation; upstream print origin unknown.",
      "Literal signed Example1 at35mm/f normalization; printed1.1033f image air retained.",
      "Stop within sourceD5, axial0.70f diagram estimate; rims/iris control estimated.",
      "Static infinity only; no measured finite focus schedule or factory illumination claim.",
      "Browser QA deferred to integration."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "E1",
      "label": "Element1",
      "type": "Lens",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d"
    },
    {
      "id": 2,
      "name": "E2",
      "label": "Element2",
      "type": "Lens",
      "nd": 1.8061,
      "vd": 40.9,
      "indexReference": "d"
    },
    {
      "id": 3,
      "name": "E3",
      "label": "Element3",
      "type": "Lens",
      "nd": 1.60342,
      "vd": 38.0,
      "indexReference": "d"
    },
    {
      "id": 4,
      "name": "E4",
      "label": "Element4",
      "type": "Lens",
      "nd": 1.74077,
      "vd": 27.8,
      "indexReference": "d"
    },
    {
      "id": 5,
      "name": "E5",
      "label": "Element5",
      "type": "Lens",
      "nd": 1.6935,
      "vd": 53.3,
      "indexReference": "d"
    },
    {
      "id": 6,
      "name": "E6",
      "label": "Element6",
      "type": "Lens",
      "nd": 1.6935,
      "vd": 53.3,
      "indexReference": "d"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 21.196,
      "d": 1.7745,
      "sd": 13,
      "medium": 1
    },
    {
      "label": "2",
      "R": 12.369,
      "d": 15.099,
      "sd": 10.8
    },
    {
      "label": "3",
      "R": 34.5695,
      "d": 4.1335,
      "sd": 8,
      "medium": 2
    },
    {
      "label": "4",
      "R": -17.1815,
      "d": 2.17,
      "sd": 8,
      "medium": 3
    },
    {
      "label": "5",
      "R": 142.737,
      "d": 1.3229999999999942,
      "sd": 8
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 5.176500000000005
    },
    {
      "label": "6",
      "R": -18.935000000000002,
      "d": 1.498,
      "sd": 7.7,
      "medium": 4
    },
    {
      "label": "7",
      "R": 77.78399999999999,
      "d": 0.7875,
      "sd": 7.02
    },
    {
      "label": "8",
      "R": -61.999,
      "d": 2.786,
      "sd": 7.04,
      "medium": 5
    },
    {
      "label": "9",
      "R": -16.688,
      "d": 0.147,
      "sd": 7.6
    },
    {
      "label": "10",
      "R": 225.5715,
      "d": 2.3659999999999997,
      "sd": 9.2,
      "medium": 6
    },
    {
      "label": "11",
      "R": -41.0725,
      "d": 38.6155,
      "sd": 9.2
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
    "maxFNumber": 22,
    "blades": 5
  },
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Static printed infinity prescription only. Retail0.35m is documentary, no finite prescription or focus cam inferred."
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 64,
    "maxTraceFieldDeg": 32
  },
  "doublets": [
    {
      "text": "E2/E3",
      "fromSurface": "3",
      "toSurface": "5"
    }
  ],
  "rays": {
    "offAxisFieldFrac": 0.09375
  },
  "layout": {
    "yScFill": 0.65
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
