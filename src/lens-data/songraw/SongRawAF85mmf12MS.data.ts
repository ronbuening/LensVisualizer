import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * Source: CN 119667909 A, Example 1, Tables 1–2 and Figure 1.
 * Scale factor 1: source radii, thicknesses and gaps are already in millimetres;
 * no units conversion is applied. Even-asphere coefficients retain source mm units.
 * Rims are inferred from Figure 1 at approximately 14.6 px/mm in a 300 dpi render.
 * S7 retains its 24.17 mm optical cap with a flat land to the 31 mm drawn rim;
 * S27/S28 retain 16.16 mm caps because the full drawn curves would cross.
 * The iris is inferred paraxially from
 * the source entrance-pupil radius 34.309 mm (modeled f/1.233195, printed f/1.25).
 * The final gap is the calculated lens-only paraxial back focus, 19.813299312 mm,
 * rather than the printed 20.300 mm. Two-decimal nd precision and a non-unique
 * misprint scan leave the difference unresolved; neither a source correction
 * nor an exact filter conversion is established. No filter prescription or
 * finite-focus state is supplied. The design is associated with the product
 * family; an exact retail optical prescription is not established.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "songraw-af-85mm-f12-ms",
  "maker": "SongRaw",
  "name": "SONGRAW AF 85mm f/1.2 MS",
  "visible": true,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "type": "Positive Meniscus",
      "nd": 1.85,
      "vd": 23.8,
      "indexReference": "d",
      "label": "Element 1",
      "glass": "Unmatched (nd 1.85 / νd 23.8)",
      "role": "Front positive meniscus of fixed G1"
    },
    {
      "id": 2,
      "name": "L2",
      "type": "Positive Meniscus",
      "nd": 1.59,
      "vd": 68.3,
      "indexReference": "d",
      "label": "Element 2",
      "glass": "Unmatched (nd 1.59 / νd 68.3)",
      "role": "Second positive meniscus of fixed G1",
      "apd": "inferred",
      "apdNote": "The maker's diagram marks L2 as ED; the patent's nd/νd is consistent with a low-dispersion glass."
    },
    {
      "id": 3,
      "name": "L3",
      "type": "Positive Meniscus",
      "nd": 1.59,
      "vd": 68.3,
      "indexReference": "d",
      "label": "Element 3",
      "glass": "Unmatched (nd 1.59 / νd 68.3)",
      "role": "Positive member of the first cemented doublet in G1",
      "cemented": "C1",
      "apd": "inferred",
      "apdNote": "The maker's diagram marks L3 as ED; the patent's nd/νd is consistent with a low-dispersion glass."
    },
    {
      "id": 4,
      "name": "L4",
      "type": "Negative Meniscus",
      "nd": 1.85,
      "vd": 25.2,
      "indexReference": "d",
      "label": "Element 4",
      "glass": "Unmatched (nd 1.85 / νd 25.2)",
      "role": "Negative member of the first cemented doublet in G1",
      "cemented": "C1"
    },
    {
      "id": 5,
      "name": "L5",
      "type": "Biconvex Positive",
      "nd": 1.59,
      "vd": 68.3,
      "indexReference": "d",
      "label": "Element 5",
      "glass": "Unmatched (nd 1.59 / νd 68.3)",
      "role": "Positive member of the second cemented doublet in G1",
      "cemented": "C2",
      "apd": "inferred",
      "apdNote": "The maker's diagram marks L5 as ED; the patent's nd/νd is consistent with a low-dispersion glass."
    },
    {
      "id": 6,
      "name": "L6",
      "type": "Biconcave Negative",
      "nd": 2,
      "vd": 25.5,
      "indexReference": "d",
      "label": "Element 6",
      "glass": "Unmatched (nd 2.00 / νd 25.5)",
      "role": "Negative member of the second cemented doublet in G1",
      "cemented": "C2"
    },
    {
      "id": 7,
      "name": "L7",
      "type": "Positive Meniscus",
      "nd": 1.92,
      "vd": 20.9,
      "indexReference": "d",
      "label": "Element 7",
      "glass": "Unmatched (nd 1.92 / νd 20.9)",
      "role": "Positive member of moving focus doublet G2",
      "cemented": "C3"
    },
    {
      "id": 8,
      "name": "L8",
      "type": "Biconcave Negative",
      "nd": 1.7,
      "vd": 55.5,
      "indexReference": "d",
      "label": "Element 8",
      "glass": "Unmatched (nd 1.70 / νd 55.5)",
      "role": "Negative member of moving focus doublet G2",
      "cemented": "C3"
    },
    {
      "id": 9,
      "name": "L9",
      "type": "Biconvex Positive",
      "nd": 1.59,
      "vd": 68.3,
      "indexReference": "d",
      "label": "Element 9",
      "glass": "Unmatched (nd 1.59 / νd 68.3)",
      "role": "Front positive member of the cemented triplet in G3",
      "cemented": "C4",
      "apd": "inferred",
      "apdNote": "The maker's diagram marks L9 as ED; the patent's nd/νd is consistent with a low-dispersion glass."
    },
    {
      "id": 10,
      "name": "L10",
      "type": "Biconcave Negative",
      "nd": 1.77,
      "vd": 29.7,
      "indexReference": "d",
      "label": "Element 10",
      "glass": "Unmatched (nd 1.77 / νd 29.7)",
      "role": "Central negative member of the cemented triplet in G3",
      "cemented": "C4"
    },
    {
      "id": 11,
      "name": "L11",
      "type": "Biconvex Positive",
      "nd": 1.73,
      "vd": 54.7,
      "indexReference": "d",
      "label": "Element 11",
      "glass": "Unmatched (nd 1.73 / νd 54.7)",
      "role": "Rear positive member of the cemented triplet in G3",
      "cemented": "C4"
    },
    {
      "id": 12,
      "name": "L12",
      "type": "Biconvex Positive",
      "nd": 1.73,
      "vd": 54.7,
      "indexReference": "d",
      "label": "Element 12",
      "glass": "Unmatched (nd 1.73 / νd 54.7)",
      "role": "Positive member of the first cemented doublet in G3",
      "cemented": "C5"
    },
    {
      "id": 13,
      "name": "L13",
      "type": "Biconcave Negative",
      "nd": 1.77,
      "vd": 29.7,
      "indexReference": "d",
      "label": "Element 13",
      "glass": "Unmatched (nd 1.77 / νd 29.7)",
      "role": "Negative member of the first cemented doublet in G3",
      "cemented": "C5"
    },
    {
      "id": 14,
      "name": "L14",
      "type": "Biconvex Positive",
      "nd": 2,
      "vd": 29.1,
      "indexReference": "d",
      "label": "Element 14",
      "glass": "Unmatched (nd 2.00 / νd 29.1)",
      "role": "Positive member of the second cemented doublet in G3",
      "cemented": "C6"
    },
    {
      "id": 15,
      "name": "L15",
      "type": "Biconcave Negative",
      "nd": 1.62,
      "vd": 36.3,
      "indexReference": "d",
      "label": "Element 15",
      "glass": "Unmatched (nd 1.62 / νd 36.3)",
      "role": "Negative member of the second cemented doublet in G3",
      "cemented": "C6"
    },
    {
      "id": 16,
      "name": "L16",
      "type": "Biconvex Positive",
      "nd": 2,
      "vd": 25.5,
      "indexReference": "d",
      "label": "Element 16",
      "glass": "Unmatched (nd 2.00 / νd 25.5)",
      "role": "Positive member of the final cemented doublet in G3",
      "cemented": "C7"
    },
    {
      "id": 17,
      "name": "L17",
      "type": "Biconcave Negative",
      "nd": 1.49,
      "vd": 70.4,
      "indexReference": "d",
      "label": "Element 17",
      "glass": "Unmatched (nd 1.49 / νd 70.4)",
      "role": "Negative member of the final cemented doublet in G3",
      "cemented": "C7",
      "apd": "inferred",
      "apdNote": "The maker's diagram marks L17 as ED; the patent's nd/νd is consistent with a low-dispersion glass."
    },
    {
      "id": 18,
      "name": "L18",
      "type": "Negative Meniscus",
      "nd": 1.81,
      "vd": 40.7,
      "indexReference": "d",
      "label": "Element 18",
      "glass": "Unmatched (nd 1.81 / νd 40.7)",
      "role": "Separate rear negative meniscus with two aspherical surfaces"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 76.011,
      "d": 10.3,
      "sd": 42,
      "medium": 1
    },
    {
      "label": "2",
      "R": 215.365,
      "d": 0.15,
      "sd": 42
    },
    {
      "label": "3",
      "R": 61.477,
      "d": 5.6,
      "sd": 36,
      "medium": 2
    },
    {
      "label": "4",
      "R": 78.556,
      "d": 0.15,
      "sd": 36
    },
    {
      "label": "5",
      "R": 47.222,
      "d": 8.2,
      "sd": 31,
      "medium": 3
    },
    {
      "label": "6",
      "R": 82.8,
      "d": 1.5,
      "sd": 31,
      "medium": 4
    },
    {
      "label": "7",
      "R": 35.941,
      "d": 3.946,
      "sd": 24.17,
      "rimExtensionSd": 31
    },
    {
      "label": "8",
      "R": 53.336,
      "d": 9.5,
      "sd": 24.17,
      "medium": 5
    },
    {
      "label": "9",
      "R": -174.338,
      "d": 1.5,
      "sd": 24.5,
      "medium": 6
    },
    {
      "label": "10",
      "R": 568.322,
      "d": 2.138,
      "sd": 24.5
    },
    {
      "label": "11",
      "R": -1204.786,
      "d": 3.4,
      "sd": 22.3,
      "medium": 7
    },
    {
      "label": "12",
      "R": -163.974,
      "d": 1,
      "sd": 22.3,
      "medium": 8
    },
    {
      "label": "13",
      "R": 46.971,
      "d": 21.473,
      "sd": 22.3
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.489
    },
    {
      "label": "15",
      "R": 533.957,
      "d": 7.5,
      "sd": 18.7,
      "medium": 9
    },
    {
      "label": "16",
      "R": -35.626,
      "d": 2,
      "sd": 18.7,
      "medium": 10
    },
    {
      "label": "17",
      "R": 35.626,
      "d": 8.6,
      "sd": 18.7,
      "medium": 11
    },
    {
      "label": "18",
      "R": -135.604,
      "d": 0.15,
      "sd": 18.7
    },
    {
      "label": "19",
      "R": 46.752,
      "d": 6.5,
      "sd": 18.4,
      "medium": 12
    },
    {
      "label": "20",
      "R": -181.209,
      "d": 1.5,
      "sd": 18.4,
      "medium": 13
    },
    {
      "label": "21",
      "R": 50.08,
      "d": 0.893,
      "sd": 18.4
    },
    {
      "label": "22",
      "R": 62.431,
      "d": 6.7,
      "sd": 17.5,
      "medium": 14
    },
    {
      "label": "23",
      "R": -71.562,
      "d": 1.5,
      "sd": 17.5,
      "medium": 15
    },
    {
      "label": "24",
      "R": 46.084,
      "d": 0.903,
      "sd": 17.5
    },
    {
      "label": "25",
      "R": 56.199,
      "d": 6.4,
      "sd": 17.4,
      "medium": 16
    },
    {
      "label": "26",
      "R": -97.979,
      "d": 4,
      "sd": 17.4,
      "medium": 17
    },
    {
      "label": "27",
      "R": 43.506,
      "d": 5.208,
      "sd": 16.16
    },
    {
      "label": "28",
      "R": -119.605,
      "d": 2.5,
      "sd": 16.16,
      "medium": 18,
      "asphere": {
        "K": 0,
        "A4": -9.74182e-06,
        "A6": 1.27066e-08,
        "A8": -9.6825e-12,
        "A10": -8.09107e-15,
        "A12": 5.01459e-17
      }
    },
    {
      "label": "29",
      "R": -500,
      "d": 19.813299312326787,
      "sd": 17.2,
      "asphere": {
        "K": 0,
        "A4": -5.08406e-06,
        "A6": 1.21233e-08,
        "A8": 7.62564e-12,
        "A10": -3.92426e-14,
        "A12": 7.66722e-17
      }
    }
  ],
  "groups": [
    { "text": "G1 · FIXED FRONT", "fromSurface": "1", "toSurface": "10" },
    { "text": "G2 · FOCUS", "fromSurface": "11", "toSurface": "13" },
    { "text": "G3 · FIXED REAR", "fromSurface": "15", "toSurface": "29" }
  ],
  "doublets": [
    { "text": "C1", "fromSurface": "5", "toSurface": "7" },
    { "text": "C2", "fromSurface": "8", "toSurface": "10" },
    { "text": "C3", "fromSurface": "11", "toSurface": "13" },
    { "text": "C4 (TRIPLET)", "fromSurface": "15", "toSurface": "18" },
    { "text": "C5", "fromSurface": "19", "toSurface": "21" },
    { "text": "C6", "fromSurface": "22", "toSurface": "24" },
    { "text": "C7", "fromSurface": "25", "toSurface": "27" }
  ],
  "aperture": {
    "nominalFNumber": 1.233195000482106,
    "fStops": [
      1.233195000482106
    ]
  },
  "layout": {
    "yScFill": 0.7
  },
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity focus only; production focuses by moving G2 (the cemented L7–L8 pair) toward the image for nearer objects, while G1, the iris and G3 stay fixed. The patent supplies no finite-focus spacings or numerical travel."
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 29.147116523239816
  },
  "checks": {
    "gapSagFrac": 0.9
  },
  "subtitle": "CN 119667909 A, Example 1 — family design for the AF 85mm f/1.2 MS",
  "catalog": {
    "lensMounts": [
      "sony-fe",
      "nikon-z"
    ],
    "imageFormat": "135-full-frame",
    "imageCircleMm": 44,
    "elementCount": 18,
    "groupCount": 10,
    "focalLengthMm": {
      "marketing": 85,
      "design": 84.61937454308114
    },
    "fNumber": {
      "marketing": 1.2,
      "design": 1.233195000482106
    },
    "closeFocusM": {
      "marketing": 0.85
    },
    "specs": [
      "18 ELEMENTS / 10 GROUPS",
      "5 ED / 11 HIGH-INDEX ELEMENTS",
      "1 ASPHERICAL ELEMENT",
      "F/1.2",
      "MINIMUM FOCUS 0.85 m"
    ]
  },
  "source": {
    "patentNumber": "CN 119667909 A",
    "patentYear": 2025,
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "authors": [
      "Yuwen Chang"
    ],
    "assignees": [
      "Shenzhen Songruo Photography Equipment Co., Ltd."
    ],
    "errata": [
      {
        "status": "unresolved",
        "note": "Printed S29→IMG 20.300 mm is 0.486701 mm longer than the calculated paraxial focus without a filter, 19.813299312326787 mm. Two-decimal nd precision limits back-focus accuracy, and no unique misprint has been established. The model places the image at calculated paraxial focus; a source correction or exact filter conversion is not established."
      },
      {
        "status": "unresolved",
        "note": "The printed entrance-pupil radius of 34.309 mm and calculated EFL of 84.6193745 mm imply f/1.233195 rather than the stated f/1.25. The iris is derived from the printed pupil radius. The rounded nd/νd values do not establish catalog glass identities."
      },
      {
        "status": "unresolved",
        "note": "FIT appears in Figure 1 but has no thickness or refractive-index prescription and is omitted. Table 1 gives S2 = 215.365 mm, S10 = 568.322 mm and S28 = -119.605 mm; only S10 differs numerically from the prose value, 568.332 mm. Agreement with CN 223827884 U was previously reported but has not been independently confirmed."
      }
    ]
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
