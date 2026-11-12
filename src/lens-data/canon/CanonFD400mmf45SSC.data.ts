import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Hidden whole Table1, helium d-line (catalog line test), literal4x scaling; fixed source imageplane. Figure-derived rims/stop, no fit/override. Retail filter omitted as unprescribed; mechanical correspondence qualified. */
const LENS_DATA = {
  "schema": 2,
  "key": "canon-fd-400mm-f45-ssc-representative",
  "maker": "Canon",
  "name": "Canon FD 400mm f/4.5 S.S.C.",
  "visible": false,
  "subtitle": "US4045128 Table1 representative; patent stop topology, omitted unprescribed retail filter",
  "catalog": {
    "imageFormat": "135-full-frame",
    "lensMounts": [
      "canon-fd"
    ],
    "closeFocusM": {
      "marketing": 4
    },
    "elementCount": 6,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 400,
      "design": 400
    },
    "fNumber": {
      "marketing": 4.5,
      "design": 4.5
    },
    "specs": [
      "Literal4x nominal scale, not factory prescription",
      "Fixed source imageplane320.04; no refocus",
      "Inferred figure caps and iris; infinity-only"
    ]
  },
  "source": {
    "patentNumber": "US 4,045,128 A",
    "patentYear": 1977,
    "example": {
      "label": "Table 1",
      "id": "1"
    },
    "authors": [
      "Kikuo Momiyama"
    ],
    "assignees": [
      "Canon Inc."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Patent spherical element",
      "nd": 1.48749,
      "vd": 70.1,
      "indexReference": "d",
      "glass": "Literal d-line n and Abbe; no verified melt or partial dispersion"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Patent spherical element",
      "nd": 1.8061,
      "vd": 40.9,
      "indexReference": "d",
      "glass": "Literal d-line n and Abbe; no verified melt or partial dispersion"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Patent spherical element",
      "nd": 1.48749,
      "vd": 70.1,
      "indexReference": "d",
      "glass": "Literal d-line n and Abbe; no verified melt or partial dispersion"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Patent spherical element",
      "nd": 1.58913,
      "vd": 61.1,
      "indexReference": "d",
      "glass": "Literal d-line n and Abbe; no verified melt or partial dispersion"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Patent spherical element",
      "nd": 1.7552,
      "vd": 27.5,
      "indexReference": "d",
      "glass": "Literal d-line n and Abbe; no verified melt or partial dispersion"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Patent spherical element",
      "nd": 1.713,
      "vd": 53.9,
      "indexReference": "d",
      "glass": "Literal d-line n and Abbe; no verified melt or partial dispersion"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 275.3224,
      "d": 14.5,
      "sd": 45.7,
      "medium": 1
    },
    {
      "label": "2",
      "R": -131.0104,
      "d": 8.936,
      "sd": 45.7
    },
    {
      "label": "3",
      "R": -112.2528,
      "d": 5.0,
      "sd": 44.6,
      "medium": 2
    },
    {
      "label": "4",
      "R": -1033.3596,
      "d": 0.5,
      "sd": 44.6
    },
    {
      "label": "5",
      "R": 163.858,
      "d": 13.0,
      "sd": 43.4,
      "medium": 3
    },
    {
      "label": "6",
      "R": -222.4844,
      "d": 100.02,
      "sd": 43.4
    },
    {
      "label": "7",
      "R": 34.1476,
      "d": 5.0,
      "sd": 20.9,
      "medium": 4
    },
    {
      "label": "8",
      "R": 30.7464,
      "d": 9.0,
      "sd": 20.9
    },
    {
      "label": "9",
      "R": 145.2136,
      "d": 3.0,
      "sd": 18.5,
      "medium": 5
    },
    {
      "label": "10",
      "R": 435.794,
      "d": 2.5,
      "sd": 18.5,
      "medium": 6
    },
    {
      "label": "11",
      "R": 76.2564,
      "d": 33.46542545454545,
      "sd": 18.1
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 125.11857454545458
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "NO_INTERNAL_RECONSTRUCTION: static infinity-only sentinel; published finite endpoint retained in audit, no continuous cam claimed."
  },
  "aperture": {
    "nominalFNumber": 4.5,
    "fStops": [
      4.5,
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
    "fullFieldDeg": 6.166666666666667,
    "maxTraceFieldDeg": 3.0833333333333335
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
