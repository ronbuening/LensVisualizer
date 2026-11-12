import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-smc-30mm-f28-representative",
  "maker": "Pentax",
  "name": "SMC Pentax 30mm f/2.8",
  "visible": false,
  "subtitle": "US3975091 Example 2 representative; inferred iris/rims, fixed published back-focus ratio",
  "catalog": {
    "imageFormat": "135-full-frame",
    "elementCount": 7,
    "groupCount": 7,
    "focalLengthMm": {
      "marketing": 30,
      "design": 30
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.8
    },
    "specs": [
      "Whole Table2 at nominal0.3scale, not factory exact",
      "Native sodium-D, fixed source back focal gap37.2mm",
      "Inferred central-gap iris/rims; infinity-only"
    ]
  },
  "source": {
    "patentNumber": "US 3,975,091 A",
    "patentYear": 1976,
    "example": {
      "label": "Example 2",
      "id": "2"
    },
    "authors": [
      "Yasuo Takahashi"
    ],
    "assignees": [
      "Asahi Kogaku Kogyo Kabushiki Kaisha"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Patent spherical singlet",
      "nd": 1.54869,
      "vd": 45.6,
      "indexReference": "D",
      "glass": "Literal sodium-D n and Abbe; no exact melt or partial dispersion supplied"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Patent spherical singlet",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "D",
      "glass": "Literal sodium-D n and Abbe; no exact melt or partial dispersion supplied"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Patent spherical singlet",
      "nd": 1.48749,
      "vd": 70.1,
      "indexReference": "D",
      "glass": "Literal sodium-D n and Abbe; no exact melt or partial dispersion supplied"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Patent spherical singlet",
      "nd": 1.8061,
      "vd": 40.8,
      "indexReference": "D",
      "glass": "Literal sodium-D n and Abbe; no exact melt or partial dispersion supplied"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Patent spherical singlet",
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "D",
      "glass": "Literal sodium-D n and Abbe; no exact melt or partial dispersion supplied"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Patent spherical singlet",
      "nd": 1.6516,
      "vd": 58.6,
      "indexReference": "D",
      "glass": "Literal sodium-D n and Abbe; no exact melt or partial dispersion supplied"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Patent spherical singlet",
      "nd": 1.6516,
      "vd": 58.6,
      "indexReference": "D",
      "glass": "Literal sodium-D n and Abbe; no exact melt or partial dispersion supplied"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 30.918,
      "d": 5.4959999999999996,
      "sd": 17.7,
      "medium": 1
    },
    {
      "label": "2",
      "R": 72.85499999999999,
      "d": 0.201,
      "sd": 17.7
    },
    {
      "label": "3",
      "R": 40.32599999999999,
      "d": 1.998,
      "sd": 15.0,
      "medium": 2
    },
    {
      "label": "4",
      "R": 12.939,
      "d": 6.087,
      "sd": 10.8
    },
    {
      "label": "5",
      "R": 21.791999999999998,
      "d": 2.997,
      "sd": 9.7,
      "medium": 3
    },
    {
      "label": "6",
      "R": 12.531,
      "d": 3.1335,
      "sd": 9.7
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 3.1335
    },
    {
      "label": "7",
      "R": 28.215,
      "d": 7.286999999999999,
      "sd": 6.7,
      "medium": 4
    },
    {
      "label": "8",
      "R": -35.136,
      "d": 2.16,
      "sd": 6.7
    },
    {
      "label": "9",
      "R": -22.326,
      "d": 2.6279999999999997,
      "sd": 6.4,
      "medium": 5
    },
    {
      "label": "10",
      "R": 42.663000000000004,
      "d": 1.2179999999999997,
      "sd": 6.4
    },
    {
      "label": "11",
      "R": -66.96,
      "d": 5.238,
      "sd": 8.3,
      "medium": 6
    },
    {
      "label": "12",
      "R": -16.191,
      "d": 0.099,
      "sd": 8.3
    },
    {
      "label": "13",
      "R": -101.94,
      "d": 3.6869999999999994,
      "sd": 10.2,
      "medium": 7
    },
    {
      "label": "14",
      "R": -25.904999999999998,
      "d": 37.2,
      "sd": 10.2
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "NO_INTERNAL_RECONSTRUCTION: static infinity-only sentinel; retail0.30m is not a reconstructed focus law."
  },
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
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 72,
    "maxTraceFieldDeg": 36
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
