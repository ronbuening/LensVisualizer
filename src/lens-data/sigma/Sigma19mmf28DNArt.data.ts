import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  "schema": 2,
  "key": "sigma-19dn-family-jp2013029658-example4-stopped-f4-infinity-reference",
  "maker": null,
  "name": "SIGMA 19 DN JP2013029658 EX4 STOPPED f/4",
  "subtitle": "Strong EX/Art shared-family patent representative; not factory exact or DP1 Merrill",
  "visible": false,
  "source": {
    "patentNumber": "JP 2013029658 A",
    "patentYear": 2013,
    "example": {
      "label": "Numerical Example 4",
      "id": "4"
    },
    "authors": [
      "Atsushi Yamazaki"
    ],
    "assignees": [
      "Sigma Corporation"
    ],
    "sdSource": "heuristic"
  },
  "catalog": {
    "elementCount": 8,
    "groupCount": 6,
    "focalLengthMm": {
      "design": 18.91
    },
    "fNumber": {
      "design": 2.88
    },
    "specs": [
      "Only native f/4 through ±8° d-line static infinity. One strong patent representative for Sigma19mmf2.8EXDN/ArtDN shared8E/6G family, not a factory prescription or two distinct models; not DP1Merrill.",
      "Exact source S7irisz12.4192 and imagez61.3642 fixed; no plate, source22.2884mm rear air. Three K0 source aspheres S1/S12/S15 literal. Iris and caps estimated; no trim, override or fit.",
      "Source400mm row moves all of L2 S8–S12 (cement E4/5 plus E6) by−.5722 via d7/d12=4.4220/2.5722. Kept outside this isolated infinity import; any native/independent400 evidence is separately scoped, not a continuous cam.",
      "OEM closest20cm and source wide-open/full field, retail finite performance,200mm extrapolation, broadband/color and full coverage remain unqualified."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "Source element 1",
      "label": "E1",
      "type": "Lens",
      "nd": 1.59201,
      "vd": 67.02,
      "indexReference": "d"
    },
    {
      "id": 2,
      "name": "Source element 2",
      "label": "E2",
      "type": "Lens",
      "nd": 1.56732,
      "vd": 42.84,
      "indexReference": "d"
    },
    {
      "id": 3,
      "name": "Source element 3",
      "label": "E3",
      "type": "Lens",
      "nd": 1.883,
      "vd": 40.81,
      "indexReference": "d"
    },
    {
      "id": 4,
      "name": "Source element 4",
      "label": "E4",
      "type": "Lens",
      "nd": 1.62004,
      "vd": 36.3,
      "indexReference": "d",
      "cemented": "C1"
    },
    {
      "id": 5,
      "name": "Source element 5",
      "label": "E5",
      "type": "Lens",
      "nd": 1.8042,
      "vd": 46.5,
      "indexReference": "d",
      "cemented": "C1"
    },
    {
      "id": 6,
      "name": "Source element 6",
      "label": "E6",
      "type": "Lens",
      "nd": 1.7701,
      "vd": 49.34,
      "indexReference": "d"
    },
    {
      "id": 7,
      "name": "Source element 7",
      "label": "E7",
      "type": "Lens",
      "nd": 1.74077,
      "vd": 27.76,
      "indexReference": "d",
      "cemented": "C2"
    },
    {
      "id": 8,
      "name": "Source element 8",
      "label": "E8",
      "type": "Lens",
      "nd": 1.59201,
      "vd": 67.02,
      "indexReference": "d",
      "cemented": "C2"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 20.8128,
      "d": 1.2,
      "sd": 3.7,
      "medium": 1,
      "asphere": {
        "K": 0,
        "A4": 3.71314e-05,
        "A6": 1.26369e-07,
        "A8": -8.81328e-10,
        "A10": 9.83774e-12
      }
    },
    {
      "label": "2",
      "R": 9.3513,
      "d": 3.3434,
      "sd": 3.45
    },
    {
      "label": "3",
      "R": 37.8156,
      "d": 0.9,
      "sd": 3.4,
      "medium": 2
    },
    {
      "label": "4",
      "R": 11.8615,
      "d": 0.7997,
      "sd": 3.35
    },
    {
      "label": "5",
      "R": 17.5225,
      "d": 2.481,
      "sd": 3.4,
      "medium": 3
    },
    {
      "label": "6",
      "R": 70.0319,
      "d": 3.6951,
      "sd": 3.3
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 4.9942
    },
    {
      "label": "8",
      "R": -66.5754,
      "d": 0.85,
      "sd": 4,
      "medium": 4
    },
    {
      "label": "9",
      "R": 22.4165,
      "d": 2.7812,
      "sd": 4.2,
      "medium": 5
    },
    {
      "label": "10",
      "R": -37.3785,
      "d": 5.7525,
      "sd": 4.4
    },
    {
      "label": "11",
      "R": -308.235,
      "d": 4.4533,
      "sd": 4.9,
      "medium": 6
    },
    {
      "label": "12",
      "R": -14.5018,
      "d": 2,
      "sd": 5.1,
      "asphere": {
        "K": 0,
        "A4": 6.03409e-05,
        "A6": 2.65895e-08,
        "A8": -1.24719e-10,
        "A10": 5.67838e-12
      }
    },
    {
      "label": "13",
      "R": -22.289,
      "d": 1,
      "sd": 4.7,
      "medium": 7
    },
    {
      "label": "14",
      "R": 40.3119,
      "d": 4.8254,
      "sd": 4.7,
      "medium": 8
    },
    {
      "label": "15",
      "R": -29.5486,
      "d": 22.2884,
      "sd": 4.7,
      "asphere": {
        "K": 0,
        "A4": -8.21604e-06,
        "A6": 8.43206e-08,
        "A8": 6.20932e-10,
        "A10": -2.2885e-12
      }
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
      22
    ],
    "maxFNumber": 22
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 16,
    "maxTraceFieldDeg": 8
  },
  "rays": {
    "offAxisFieldFrac": 0.98
  },
  "focus": {
    "closeFocusM": 1000000000000000,
    "description": "Isolated static infinity reference. Exact source400mm is separately assessed; no finite or continuous motion enabled."
  },
  "groups": [],
  "layout": {
    "yScFill": 0.5
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
