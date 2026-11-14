import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** CN 122469500 A, Table 1, the sole numerical example.
 * Figure 2 pupil radius 36.8167 mm determines f-number from the paraxial EFL.
 * Scale factor 1; R, d and semi-diameters are in mm, with no units conversion.
 * Stop position and back focus are tabulated; the stop radius is inferred from the pupil.
 * Clear semi-diameters are inferred from Figure 1 and checked against the iris-admitted beam.
 * L4 has a 24.5 mm rim with a 22.5 mm rear optical cap and land; S7/S8 require gapSagFrac 0.99.
 * S26–S30 use 18.0 mm rims, capped below the S28/S29 crossing rather than the drawing's ~19.0 mm.
 * Printed nd/νd are retained; matching catalog curves do not establish factory glass identity.
 * L5 borrows S-FPL55 dispersion within the site's proxy tolerance; its printed nd/νd are retained.
 * Prose ED ordinal contradiction preserved in source.errata. Infinity-only. */
const LENS_DATA = {
  "checks": {
    "gapSagFrac": 0.99
  },
  "layout": {
    "yScFill": 0.35,
    "scFill": 0.5
  },
  "schema": 2,
  "key": "7artisans-af-135mm-f18-max",
  "maker": "7Artisans",
  "name": "7ARTISANS AF 135mm f/1.8 MAX",
  "subtitle": "CN 122469500 A, Table 1 — the maker's own application",
  "visible": true,
  "catalog": {
    "specs": [
      "16 ELEMENTS / 13 GROUPS",
      "6 ED / 5 HIGH-INDEX",
      "ALL SPHERICAL",
      "F/1.8–16",
      "0.68 m MFD"
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
        "note": "Prose and claims assign Abbe numbers 80–90 to L9/L11; Table 1 instead places 81.612838 at L10/L12. The tabulated values are retained."
      }
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "1001",
      "diagramLabel": "1001",
      "focalLengthMm": 100.12,
      "label": "Element 1",
      "type": "Positive Meniscus",
      "role": "Positive front element of the front group",
      "nd": 1.84666,
      "vd": 23.784497,
      "indexReference": "d",
      "glass": "CDGM H-ZF52"
    },
    {
      "id": 2,
      "name": "1002",
      "diagramLabel": "1002",
      "focalLengthMm": 101.78,
      "label": "Element 2",
      "type": "Biconvex Positive",
      "role": "ED positive member of the first cemented pair",
      "cemented": "C1",
      "apd": "inferred",
      "apdNote": "The maker marks L2 as ED; its printed nd/νd agree with H-FK61.",
      "nd": 1.497,
      "vd": 81.612838,
      "indexReference": "d",
      "glass": "CDGM H-FK61"
    },
    {
      "id": 3,
      "name": "1003",
      "diagramLabel": "1003",
      "focalLengthMm": -90.80,
      "label": "Element 3",
      "type": "Biconcave Negative",
      "role": "Negative member of the first cemented pair",
      "cemented": "C1",
      "nd": 1.74077,
      "vd": 27.760063,
      "indexReference": "d",
      "glass": "Hoya E-FD13"
    },
    {
      "id": 4,
      "name": "1004",
      "diagramLabel": "1004",
      "focalLengthMm": -119.65,
      "label": "Element 4",
      "type": "Negative Meniscus",
      "role": "Air-spaced negative meniscus in the front group",
      "nd": 1.7552,
      "vd": 27.530047,
      "indexReference": "d",
      "glass": "CDGM H-ZF6"
    },
    {
      "id": 5,
      "name": "1005",
      "diagramLabel": "1005",
      "focalLengthMm": 65.90,
      "label": "Element 5",
      "type": "Biconvex Positive",
      "role": "ED positive member of the second cemented pair",
      "cemented": "C2",
      "apd": "inferred",
      "apdNote": "The maker marks L5 as ED; its low index and Abbe number 94.523389 support that designation.",
      "nd": 1.4378,
      "vd": 94.523389,
      "indexReference": "d",
      "glass": "S-FPL55 (spectral proxy; patent nd 1.4378 / V 94.523389; supplier and melt unspecified)"
    },
    {
      "id": 6,
      "name": "1006",
      "diagramLabel": "1006",
      "focalLengthMm": -187.13,
      "label": "Element 6",
      "type": "Negative Meniscus",
      "role": "High-index negative member of the second cemented pair",
      "cemented": "C2",
      "nd": 1.84666,
      "vd": 23.784497,
      "indexReference": "d",
      "glass": "CDGM H-ZF52"
    },
    {
      "id": 7,
      "name": "103",
      "diagramLabel": "103",
      "focalLengthMm": -59.67,
      "label": "Element 7",
      "type": "Plano-Concave Negative",
      "role": "Single negative focusing element behind the iris",
      "nd": 1.713,
      "vd": 53.832974,
      "indexReference": "d",
      "glass": "Schott N-LAK8"
    },
    {
      "id": 8,
      "name": "1008",
      "diagramLabel": "1008",
      "focalLengthMm": 55.41,
      "label": "Element 8",
      "type": "Biconvex Positive",
      "role": "Positive front element of the rear group",
      "nd": 1.52307,
      "vd": 58.639792,
      "indexReference": "d",
      "glass": "Hoya C12"
    },
    {
      "id": 9,
      "name": "1009",
      "diagramLabel": "1009",
      "focalLengthMm": -37.50,
      "label": "Element 9",
      "type": "Negative Meniscus",
      "role": "High-index negative meniscus in the rear group",
      "nd": 1.84666,
      "vd": 23.784497,
      "indexReference": "d",
      "glass": "CDGM H-ZF52"
    },
    {
      "id": 10,
      "name": "1010",
      "diagramLabel": "1010",
      "focalLengthMm": 44.10,
      "label": "Element 10",
      "type": "Biconvex Positive",
      "role": "Air-spaced ED positive element in the rear group",
      "apd": "inferred",
      "apdNote": "The maker marks element 10 (1010 / L10) as ED; Table 1 agrees with H-FK61. The prose instead assigns the 80–90 Abbe interval to L9, so this tag remains inferred.",
      "nd": 1.497,
      "vd": 81.612838,
      "indexReference": "d",
      "glass": "CDGM H-FK61"
    },
    {
      "id": 11,
      "name": "1011",
      "diagramLabel": "1011",
      "focalLengthMm": -71.02,
      "label": "Element 11",
      "type": "Biconcave Negative",
      "role": "Air-spaced negative element between L10 and L12",
      "nd": 1.72825,
      "vd": 28.318797,
      "indexReference": "d",
      "glass": "CDGM H-ZF4A"
    },
    {
      "id": 12,
      "name": "1012",
      "diagramLabel": "1012",
      "focalLengthMm": -48.44,
      "label": "Element 12",
      "type": "Biconcave Negative",
      "role": "ED negative element preceding the high-index L13",
      "apd": "inferred",
      "apdNote": "The maker marks element 12 (1012 / L12) as ED; Table 1 agrees with H-FK61. The prose instead assigns the 80–90 Abbe interval to L11, so this tag remains inferred.",
      "nd": 1.497,
      "vd": 81.612838,
      "indexReference": "d",
      "glass": "CDGM H-FK61"
    },
    {
      "id": 13,
      "name": "1013",
      "diagramLabel": "1013",
      "focalLengthMm": 33.90,
      "label": "Element 13",
      "type": "Biconvex Positive",
      "role": "High-index positive element ahead of the rear cemented pair",
      "nd": 2.0033,
      "vd": 28.316305,
      "indexReference": "d",
      "glass": "Ohara S-LAH79"
    },
    {
      "id": 14,
      "name": "1014",
      "diagramLabel": "1014",
      "focalLengthMm": 63.72,
      "label": "Element 14",
      "type": "Biconvex Positive",
      "role": "High-index positive member of the rear cemented pair",
      "cemented": "C3",
      "nd": 1.84666,
      "vd": 23.784497,
      "indexReference": "d",
      "glass": "CDGM H-ZF52"
    },
    {
      "id": 15,
      "name": "1015",
      "diagramLabel": "1015",
      "focalLengthMm": -89.11,
      "label": "Element 15",
      "type": "Biconcave Negative",
      "role": "ED negative member of the rear cemented pair",
      "cemented": "C3",
      "apd": "inferred",
      "apdNote": "The maker marks L15 as ED; its nd/νd fit the low-dispersion N-PSK53A catalog row.",
      "nd": 1.618,
      "vd": 63.392702,
      "indexReference": "d",
      "glass": "Schott N-PSK53A"
    },
    {
      "id": 16,
      "name": "1016",
      "diagramLabel": "1016",
      "focalLengthMm": -103.81,
      "label": "Element 16",
      "type": "Negative Meniscus",
      "role": "Air-spaced ED negative meniscus nearest the image",
      "apd": "inferred",
      "apdNote": "The maker marks L16 as ED; its nd/νd fit the low-dispersion H-ZPK5 catalog row.",
      "nd": 1.5928,
      "vd": 68.342024,
      "indexReference": "d",
      "glass": "CDGM H-ZPK5"
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
      "sd": 24.5,
      "medium": 4
    },
    {
      "label": "7",
      "R": 33.291838,
      "d": 1.247481,
      "sd": 22.5,
      "rimExtensionSd": 24.5
    },
    {
      "label": "8",
      "R": 37.391229,
      "d": 11.27,
      "sd": 22.5,
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
      "sd": 18.0,
      "medium": 14
    },
    {
      "label": "27",
      "R": -505.402597,
      "d": 1.0,
      "sd": 18.0,
      "medium": 15
    },
    {
      "label": "28",
      "R": 61.850131,
      "d": 8.328738,
      "sd": 18.0
    },
    {
      "label": "29",
      "R": -32.701218,
      "d": 1.0,
      "sd": 18.0,
      "medium": 16
    },
    {
      "label": "30",
      "R": -70.574457,
      "d": 19.533382,
      "sd": 18.0
    }
  ],
  "rearPlates": [
    {
      "label": "31\u201332",
      "thicknessMm": 2.5,
      "nd": 1.5168,
      "vd": 64.198732,
      "glass": "CDGM H-K9L",
      "gapAfterMm": 1,
      "source": "CN 122469500 A, Table 1, surfaces 31–32; physical plate thickness and air gaps as printed"
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only. The patent states 0–17 mm axial travel of L7 (103), but gives no travel direction or finite-focus spacing table (paragraphs 0007 and 0033, pages 3 and 5). The marketed minimum focus distance is 0.68 m."
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
  "groups": [
    { "text": "101 (+)", "fromSurface": "1", "toSurface": "10" },
    { "text": "103 (−)", "fromSurface": "12", "toSurface": "13" },
    { "text": "104 (+)", "fromSurface": "14", "toSurface": "30" }
  ],
  "doublets": [
    { "text": "C1", "fromSurface": "3", "toSurface": "5" },
    { "text": "C2", "fromSurface": "8", "toSurface": "10" },
    { "text": "C3", "fromSurface": "26", "toSurface": "28" }
  ],
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 18.65650222861097,
    "maxTraceFieldDeg": 9.328251114305486
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
