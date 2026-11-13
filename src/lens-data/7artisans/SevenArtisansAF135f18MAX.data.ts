import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Literal CN122469500A Table1, verified from CN 122469500 A, Table 1.
 * Original Fig2 pupil radius36.8167mm determines f-number from literal paraxial EFL.
 * Scale factor 1; R, d and semi-diameters are in mm, with no units conversion.
 * Stop position and back focus are tabulated; the stop radius is inferred from the pupil.
 * Clear caps are inferred from Fig1; S26–S30 use 17.4 mm for corner chief-ray clearance.
 * Glass nd/vd retained literally with approximate dispersion; factory identity unproven.
 * Prose ED ordinal contradiction preserved in source.errata. Infinity-only. */
const LENS_DATA = {
  "checks": {
    "gapSagFrac": 0.97
  },
  "layout": {
    "yScFill": 0.35,
    "scFill": 0.5
  },
  "schema": 2,
  "key": "7artisans-af-135mm-f18-max",
  "maker": "7Artisans",
  "name": "7ARTISANS AF 135mm f/1.8 MAX",
  "subtitle": "CN 122469500 A \u2014 sole numerical prescription",
  "visible": true,
  "catalog": {
    "specs": [
      "16 ELEMENTS / 13 GROUPS",
      "132.106 mm PATENT EFL"
    ],
    "elementCount": 16,
    "groupCount": 13,
    "focalLengthMm": {
      "marketing": 135,
      "design": 132.1055284533858
    },
    "fNumber": {
      "marketing": 1.8,
      "design": 1.7940979019491945
    },
    "closeFocusM": {
      "marketing": 0.68
    },
    "lensMounts": [
      "sony-fe",
      "nikon-z",
      "l-mount"
    ],
    "imageFormat": "135-full-frame"
  },
  "source": {
    "patentNumber": "CN 122469500 A",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 2026,
    "authors": [
      "Liu Changjia",
      "Luo Xiangshi",
      "Yang Xijing"
    ],
    "assignees": [
      "Shenzhen 7Artisans Photoelectric Technology Co., Ltd."
    ],
    "errata": [
      {
        "status": "unresolved",
        "note": "Original prose/claims assign V80\u201390 to E9/E11; Table1 instead places V81.612838 at E10/E12. Literal table retained without repair."
      }
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Lens",
      "nd": 1.84666,
      "vd": 23.784497,
      "indexReference": "d",
      "glass": "Unmatched (literal patent index/Abbe pair; estimated dispersion)"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Lens",
      "nd": 1.497,
      "vd": 81.612838,
      "indexReference": "d",
      "glass": "Unmatched (literal patent index/Abbe pair; estimated dispersion)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Lens",
      "nd": 1.74077,
      "vd": 27.760063,
      "indexReference": "d",
      "glass": "Unmatched (literal patent index/Abbe pair; estimated dispersion)"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Lens",
      "nd": 1.7552,
      "vd": 27.530047,
      "indexReference": "d",
      "glass": "Unmatched (literal patent index/Abbe pair; estimated dispersion)"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Lens",
      "nd": 1.4378,
      "vd": 94.523389,
      "indexReference": "d",
      "glass": "Unmatched (literal patent index/Abbe pair; estimated dispersion)"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Lens",
      "nd": 1.84666,
      "vd": 23.784497,
      "indexReference": "d",
      "glass": "Unmatched (literal patent index/Abbe pair; estimated dispersion)"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Lens",
      "nd": 1.713,
      "vd": 53.832974,
      "indexReference": "d",
      "glass": "Unmatched (literal patent index/Abbe pair; estimated dispersion)"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Lens",
      "nd": 1.52307,
      "vd": 58.639792,
      "indexReference": "d",
      "glass": "Unmatched (literal patent index/Abbe pair; estimated dispersion)"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Lens",
      "nd": 1.84666,
      "vd": 23.784497,
      "indexReference": "d",
      "glass": "Unmatched (literal patent index/Abbe pair; estimated dispersion)"
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Lens",
      "nd": 1.497,
      "vd": 81.612838,
      "indexReference": "d",
      "glass": "Unmatched (literal patent index/Abbe pair; estimated dispersion)"
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Lens",
      "nd": 1.72825,
      "vd": 28.318797,
      "indexReference": "d",
      "glass": "Unmatched (literal patent index/Abbe pair; estimated dispersion)"
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "type": "Lens",
      "nd": 1.497,
      "vd": 81.612838,
      "indexReference": "d",
      "glass": "Unmatched (literal patent index/Abbe pair; estimated dispersion)"
    },
    {
      "id": 13,
      "name": "L13",
      "label": "Element 13",
      "type": "Lens",
      "nd": 2.0033,
      "vd": 28.316305,
      "indexReference": "d",
      "glass": "Unmatched (literal patent index/Abbe pair; estimated dispersion)"
    },
    {
      "id": 14,
      "name": "L14",
      "label": "Element 14",
      "type": "Lens",
      "nd": 1.84666,
      "vd": 23.784497,
      "indexReference": "d",
      "glass": "Unmatched (literal patent index/Abbe pair; estimated dispersion)"
    },
    {
      "id": 15,
      "name": "L15",
      "label": "Element 15",
      "type": "Lens",
      "nd": 1.618,
      "vd": 63.392702,
      "indexReference": "d",
      "glass": "Unmatched (literal patent index/Abbe pair; estimated dispersion)"
    },
    {
      "id": 16,
      "name": "L16",
      "label": "Element 16",
      "type": "Lens",
      "nd": 1.5928,
      "vd": 68.342024,
      "indexReference": "d",
      "glass": "Unmatched (literal patent index/Abbe pair; estimated dispersion)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 75.124012,
      "d": 9.55,
      "sd": 36.8,
      "medium": 1
    },
    {
      "label": "2",
      "R": 621.808057,
      "d": 2.550614,
      "sd": 36.8
    },
    {
      "label": "3",
      "R": 54.576179,
      "d": 11.9,
      "sd": 31.2,
      "medium": 2
    },
    {
      "label": "4",
      "R": -641.734658,
      "d": 1.2,
      "sd": 30.8,
      "medium": 3
    },
    {
      "label": "5",
      "R": 75.194356,
      "d": 5.483578,
      "sd": 30.8
    },
    {
      "label": "6",
      "R": 53.531364,
      "d": 1.2,
      "sd": 27,
      "medium": 4
    },
    {
      "label": "7",
      "R": 33.291838,
      "d": 1.247481,
      "sd": 22.396398402970696
    },
    {
      "label": "8",
      "R": 37.391229,
      "d": 11.27,
      "sd": 22.396398402970696,
      "medium": 5
    },
    {
      "label": "9",
      "R": -114.706728,
      "d": 0.999828,
      "sd": 22.5,
      "medium": 6
    },
    {
      "label": "10",
      "R": -417.233367,
      "d": 1.85381,
      "sd": 22.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.580306
    },
    {
      "label": "12",
      "R": "flat",
      "d": 1.0,
      "sd": 19.4,
      "medium": 7
    },
    {
      "label": "13",
      "R": 42.544681,
      "d": 20.355072,
      "sd": 19.4
    },
    {
      "label": "14",
      "R": 30.318203,
      "d": 6.945,
      "sd": 17.1,
      "medium": 8
    },
    {
      "label": "15",
      "R": -605.83027,
      "d": 0.148624,
      "sd": 17.1
    },
    {
      "label": "16",
      "R": 213.51871,
      "d": 1.0,
      "sd": 16.2,
      "medium": 9
    },
    {
      "label": "17",
      "R": 27.577831,
      "d": 3.063717,
      "sd": 16.2
    },
    {
      "label": "18",
      "R": 33.03517,
      "d": 7.16,
      "sd": 15,
      "medium": 10
    },
    {
      "label": "19",
      "R": -60.45662,
      "d": 0.149719,
      "sd": 15
    },
    {
      "label": "20",
      "R": -399.188809,
      "d": 1.0,
      "sd": 15,
      "medium": 11
    },
    {
      "label": "21",
      "R": 59.482037,
      "d": 10.123746,
      "sd": 15
    },
    {
      "label": "22",
      "R": -27.868276,
      "d": 1.0,
      "sd": 18.7,
      "medium": 12
    },
    {
      "label": "23",
      "R": 178.876739,
      "d": 0.149033,
      "sd": 18.7
    },
    {
      "label": "24",
      "R": 106.308882,
      "d": 7.264506,
      "sd": 19.4,
      "medium": 13
    },
    {
      "label": "25",
      "R": -48.309236,
      "d": 0.149637,
      "sd": 19.4
    },
    {
      "label": "26",
      "R": 60.116289,
      "d": 5.1,
      "sd": 17.4,
      "medium": 14
    },
    {
      "label": "27",
      "R": -505.402597,
      "d": 1.0,
      "sd": 17.4,
      "medium": 15
    },
    {
      "label": "28",
      "R": 61.850131,
      "d": 8.328738,
      "sd": 17.4
    },
    {
      "label": "29",
      "R": -32.701218,
      "d": 1.0,
      "sd": 17.4,
      "medium": 16
    },
    {
      "label": "30",
      "R": -70.574457,
      "d": 19.533382,
      "sd": 17.4
    }
  ],
  "rearPlates": [
    {
      "label": "31\u201332",
      "thicknessMm": 2.5,
      "nd": 1.5168,
      "vd": 64.198732,
      "gapAfterMm": 1,
      "source": "CN122469500A Table1 surfaces31\u201332; literal physical plate and gaps"
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity-only source Table1. Product MOD is metadata; no inferred finite-focus law."
  },
  "aperture": {
    "nominalFNumber": 1.7940979019491945,
    "fStops": [
      1.7940979019491945,
      2,
      2.8,
      4,
      5.6,
      8,
      11,
      16
    ],
    "blades": 12
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 18.65650222861097,
    "maxTraceFieldDeg": 9.328251114305486
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
