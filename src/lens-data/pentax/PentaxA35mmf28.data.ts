import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Hidden whole JP soleexample representative: literal.35R/d/nV, no USsignrepair. JPd interpretedheliumd, USsodium wordingconflicts. SourceF1 ancillarycontradiction retained. Figurecaps/hypothesizedstop andcomputedimagegap, no rayfit/override. */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-a-35mm-f28-jp-representative",
  "maker": "Pentax",
  "name": "SMC Pentax-A 35mm f/2.8",
  "visible": false,
  "subtitle": "Whole JPS50138824 sole example; qualified representative, explicit spectral-convention conflict",
  "catalog": {
    "imageFormat": "135-full-frame",
    "lensMounts": [
      "pentax-k"
    ],
    "elementCount": 6,
    "groupCount": 6,
    "focalLengthMm": {
      "marketing": 35,
      "design": 35
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.8
    },
    "specs": [
      "Literal.35scale; computedEFL35.0838986 notforced35",
      "JP negativeR7/R9; US conflicting signs notused",
      "Infinity-only; d-line choice versus USsodium wording qualified"
    ],
    "closeFocusM": {
      "marketing": 0.3
    }
  },
  "source": {
    "patentNumber": "JP S50-138824 A",
    "patentYear": 1975,
    "example": {
      "label": "Sole example",
      "id": null
    },
    "authors": [
      "Yasuo Takahashi"
    ],
    "assignees": [
      "Asahi Kogaku Kogyo Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Patent spherical singlet",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "glass": "Literal JP d-line n/V; helium-d interpretation explicit, US sodium wording conflicts"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Patent spherical singlet",
      "nd": 1.8061,
      "vd": 40.8,
      "indexReference": "d",
      "glass": "Literal JP d-line n/V; helium-d interpretation explicit, US sodium wording conflicts"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Patent spherical singlet",
      "nd": 1.757,
      "vd": 47.9,
      "indexReference": "d",
      "glass": "Literal JP d-line n/V; helium-d interpretation explicit, US sodium wording conflicts"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Patent spherical singlet",
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "d",
      "glass": "Literal JP d-line n/V; helium-d interpretation explicit, US sodium wording conflicts"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Patent spherical singlet",
      "nd": 1.757,
      "vd": 47.9,
      "indexReference": "d",
      "glass": "Literal JP d-line n/V; helium-d interpretation explicit, US sodium wording conflicts"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Patent spherical singlet",
      "nd": 1.7432,
      "vd": 49.4,
      "indexReference": "d",
      "glass": "Literal JP d-line n/V; helium-d interpretation explicit, US sodium wording conflicts"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 79.723,
      "d": 2.4989999999999997,
      "sd": 13.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 15.561,
      "d": 10.122,
      "sd": 10.8
    },
    {
      "label": "3",
      "R": 44.876999999999995,
      "d": 4.140499999999999,
      "sd": 9.2,
      "medium": 2
    },
    {
      "label": "4",
      "R": 5090.589,
      "d": 3.29,
      "sd": 9.2
    },
    {
      "label": "5",
      "R": 32.3855,
      "d": 6.471499999999999,
      "sd": 8.3,
      "medium": 3
    },
    {
      "label": "6",
      "R": -48.28249999999999,
      "d": 1.5294999999999999,
      "sd": 8.3
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.5294999999999999
    },
    {
      "label": "7",
      "R": -28.608999999999995,
      "d": 2.8805,
      "sd": 6.8,
      "medium": 4
    },
    {
      "label": "8",
      "R": 30.94,
      "d": 2.079,
      "sd": 6.8
    },
    {
      "label": "9",
      "R": -34.1075,
      "d": 3.1814999999999998,
      "sd": 7.0,
      "medium": 5
    },
    {
      "label": "10",
      "R": -16.9015,
      "d": 0.19949999999999998,
      "sd": 7.0
    },
    {
      "label": "11",
      "R": 352.905,
      "d": 3.9794999999999994,
      "sd": 8.8,
      "medium": 6
    },
    {
      "label": "12",
      "R": -70.007,
      "d": 37.470603853258716,
      "sd": 8.8
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "NO_INTERNAL_RECONSTRUCTION: static infinity-only, no finite-focus law"
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
    "fullFieldDeg": 63,
    "maxTraceFieldDeg": 31.5
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
