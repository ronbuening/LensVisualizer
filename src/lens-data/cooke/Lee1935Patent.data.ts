import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "kapella-lee-us2019985-patent-reference",
  "maker": "Kapella",
  "name": "LEE LARGE-APERTURE PATENT REFERENCE",
  "subtitle": "1935 1 INCH f/1.4; PATENT ONLY",
  "visible": false,
  "catalog": {
    "specs": [
      "7 ELEMENTS / 5 GROUPS",
      "PATENT ONLY; RETAIL IDENTITY UNPROVED",
      "ESTIMATED CENTRAL STOP AND RIMS",
      "INFINITY ONLY"
    ],
    "elementCount": 7,
    "groupCount": 5,
    "focalLengthMm": {
      "design": 26.31047996864115
    },
    "fNumber": {
      "design": 1.4
    }
  },
  "source": {
    "patentNumber": "US 2,019,985",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1935,
    "authors": [
      "Horace William Lee"
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
      "type": "Meniscus",
      "nd": 1.6135,
      "vd": 59.4,
      "indexReference": "D"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "L2",
      "type": "Biconvex",
      "nd": 1.6135,
      "vd": 59.4,
      "indexReference": "D"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "L3",
      "type": "Biconcave",
      "nd": 1.579,
      "vd": 40.4,
      "indexReference": "D"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "L4",
      "type": "Biconcave",
      "nd": 1.579,
      "vd": 40.4,
      "indexReference": "D"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "L5",
      "type": "Biconvex",
      "nd": 1.6437,
      "vd": 48.3,
      "indexReference": "D"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "L6",
      "type": "Plano-convex",
      "nd": 1.6135,
      "vd": 59.4,
      "indexReference": "D"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "L7",
      "type": "Plano-convex",
      "nd": 1.6135,
      "vd": 59.4,
      "indexReference": "D"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 22.86,
      "d": 3.8099999999999996,
      "sd": 10,
      "medium": 1
    },
    {
      "label": "2",
      "R": 154.93999999999997,
      "d": 0.127,
      "sd": 10
    },
    {
      "label": "3",
      "R": 11.176,
      "d": 4.444999999999999,
      "sd": 8,
      "medium": 2
    },
    {
      "label": "4",
      "R": -41.91,
      "d": 0.508,
      "sd": 8,
      "medium": 3
    },
    {
      "label": "5",
      "R": 7.7978,
      "d": 2.4765,
      "sd": 5.65
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.4765
    },
    {
      "label": "6",
      "R": -8.889999999999999,
      "d": 0.508,
      "sd": 5.65,
      "medium": 4
    },
    {
      "label": "7",
      "R": 96.52,
      "d": 5.334,
      "sd": 8,
      "medium": 5
    },
    {
      "label": "8",
      "R": -13.2842,
      "d": 0.127,
      "sd": 9
    },
    {
      "label": "9",
      "R": "flat",
      "d": 2.032,
      "sd": 9,
      "medium": 6
    },
    {
      "label": "10",
      "R": -28.448,
      "d": 0.127,
      "sd": 9
    },
    {
      "label": "11",
      "R": 44.196,
      "d": 1.5239999999999998,
      "sd": 9,
      "medium": 7
    },
    {
      "label": "12",
      "R": "flat",
      "d": 15.424884074336912,
      "sd": 9
    }
  ],
  "aperture": {
    "nominalFNumber": 1.4,
    "fStops": [
      1.4,
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
    "description": "Infinity-only literal 1935 patent. Source inches converted by 25.4; D-line/V approximate dispersion. Estimated stop at midpoint of 0.195 inch central air gap and estimated rims. Not factory identity. Computed EFL26.310480 mm differs3.584567% from nominal25.4 mm; no rescaling. Central90% axial scope only; full-field behavior unvalidated."
  },
  "groups": [],
  "doublets": [],
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
