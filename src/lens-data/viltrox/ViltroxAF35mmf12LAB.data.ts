import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * CN 115826211 A/B, Example 2, Tables 4–6; construction matches the LAB optical family.
 * Scale s=1: source radii and distances are already millimetres; no units conversion.
 * GL retains 15.575 mm before / 2.500 mm glass / 0.500 mm after in rearPlates.
 * The pre-GL gap is fixed at both printed focus endpoints. No intermediate focus cam is published.
 * Rims are inferred geometry-limited bounds; the iris radius is derived from f/1.2.
 * Back focus and the 0.341084 m object-to-image near conjugate are calculated, not printed.
 * Source spacings and image plane are retained, including the infinity focus residual.
 * Facing-surface sag is limited to 90% of each gap; the model has heavy corner vignetting.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "viltrox-af-35mm-f12-lab",
  "maker": "Viltrox",
  "name": "VILTROX AF 35mm f/1.2 LAB",
  "visible": true,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "type": "Negative Meniscus",
      "nd": 1.487,
      "vd": 70.44,
      "indexReference": "d",
      "label": "Element 1",
      "glass": "FC5 (Hoya)",
      "apd": "inferred",
      "apdNote": "The maker marks L1 as ED; its printed nd/νd is consistent with low-dispersion glass.",
      "role": "Negative front element of the fixed first group."
    },
    {
      "id": 2,
      "name": "L2",
      "type": "Biconcave Negative",
      "nd": 1.847,
      "vd": 23.785,
      "indexReference": "d",
      "label": "Element 2",
      "glass": "FDS90 (Hoya)",
      "cemented": "C1",
      "role": "Dispersive negative partner to L3 in the fixed first group."
    },
    {
      "id": 3,
      "name": "L3",
      "type": "Biconvex Positive",
      "nd": 1.883,
      "vd": 40.805,
      "indexReference": "d",
      "label": "Element 3",
      "glass": "TAFD30 (Hoya)",
      "cemented": "C1",
      "role": "High-index positive partner to L2 in the fixed first group."
    },
    {
      "id": 4,
      "name": "L4",
      "type": "Positive Meniscus",
      "nd": 1.81,
      "vd": 40.993,
      "indexReference": "d",
      "label": "Element 4",
      "glass": "D-ZLaF52LA (CDGM)",
      "role": "Double-sided aspherical element ending the fixed first group."
    },
    {
      "id": 5,
      "name": "L5",
      "type": "Biconvex Positive",
      "nd": 1.946,
      "vd": 17.942,
      "indexReference": "d",
      "label": "Element 5",
      "glass": "H-ZF88 (CDGM)",
      "cemented": "C2",
      "role": "High-index positive member of the first floating focus group."
    },
    {
      "id": 6,
      "name": "L6",
      "type": "Biconcave Negative",
      "nd": 1.603,
      "vd": 38.011,
      "indexReference": "d",
      "label": "Element 6",
      "glass": "E-F5 (Hoya)",
      "cemented": "C2",
      "role": "Negative partner to L5 in the first floating focus group."
    },
    {
      "id": 7,
      "name": "L7",
      "type": "Positive Meniscus",
      "nd": 1.593,
      "vd": 68.624,
      "indexReference": "d",
      "label": "Element 7",
      "glass": "FCD515 (Hoya)",
      "cemented": "C3",
      "apd": "inferred",
      "apdNote": "The maker marks L7 as ED; its printed nd/νd is consistent with low-dispersion glass.",
      "role": "Low-dispersion positive member of the fixed group before the stop."
    },
    {
      "id": 8,
      "name": "L8",
      "type": "Negative Meniscus",
      "nd": 1.689,
      "vd": 31.161,
      "indexReference": "d",
      "label": "Element 8",
      "glass": "E-FD8 (Hoya)",
      "cemented": "C3",
      "role": "Dispersive negative partner to L7 immediately before the stop."
    },
    {
      "id": 9,
      "name": "L9",
      "type": "Biconvex Positive",
      "nd": 1.593,
      "vd": 68.624,
      "indexReference": "d",
      "label": "Element 9",
      "glass": "FCD515 (Hoya)",
      "apd": "inferred",
      "apdNote": "The maker marks L9 as ED; its printed nd/νd is consistent with low-dispersion glass.",
      "role": "Low-dispersion positive element beginning the second floating focus group."
    },
    {
      "id": 10,
      "name": "L10",
      "type": "Biconvex Positive",
      "nd": 1.569,
      "vd": 71.304,
      "indexReference": "d",
      "label": "Element 10",
      "glass": "K-GFK70 (Sumita)",
      "cemented": "C4",
      "apd": "inferred",
      "apdNote": "The maker marks L10 as ED; its printed nd/νd is consistent with low-dispersion glass.",
      "role": "Low-dispersion positive partner to L11 in the second floating focus group."
    },
    {
      "id": 11,
      "name": "L11",
      "type": "Negative Meniscus",
      "nd": 1.847,
      "vd": 23.785,
      "indexReference": "d",
      "label": "Element 11",
      "glass": "FDS90 (Hoya)",
      "cemented": "C4",
      "role": "Dispersive negative element ending the second floating focus group."
    },
    {
      "id": 12,
      "name": "L12",
      "type": "Positive Meniscus",
      "nd": 1.946,
      "vd": 17.942,
      "indexReference": "d",
      "label": "Element 12",
      "glass": "H-ZF88 (CDGM)",
      "role": "High-index positive element beginning the fixed rear group."
    },
    {
      "id": 13,
      "name": "L13",
      "type": "Positive Meniscus",
      "nd": 1.593,
      "vd": 68.624,
      "indexReference": "d",
      "label": "Element 13",
      "glass": "FCD515 (Hoya)",
      "cemented": "C5",
      "apd": "inferred",
      "apdNote": "The maker marks L13 as ED; its printed nd/νd is consistent with low-dispersion glass.",
      "role": "Low-dispersion positive member of the final cemented pair."
    },
    {
      "id": 14,
      "name": "L14",
      "type": "Negative Meniscus",
      "nd": 1.847,
      "vd": 23.785,
      "indexReference": "d",
      "label": "Element 14",
      "glass": "FDS90 (Hoya)",
      "cemented": "C5",
      "role": "Dispersive negative partner to L13 in the fixed rear group."
    },
    {
      "id": 15,
      "name": "L15",
      "type": "Biconcave Negative",
      "nd": 1.81,
      "vd": 40.993,
      "indexReference": "d",
      "label": "Element 15",
      "glass": "D-ZLaF52LA (CDGM)",
      "role": "Double-sided aspherical negative element ending the fixed rear group."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 170.905,
      "d": 1.8,
      "sd": 24,
      "medium": 1
    },
    {
      "label": "2",
      "R": 30.599,
      "d": 17.095,
      "sd": 24
    },
    {
      "label": "3",
      "R": -46.402,
      "d": 1.5,
      "sd": 22,
      "medium": 2
    },
    {
      "label": "4",
      "R": 120.719,
      "d": 11,
      "sd": 22,
      "medium": 3
    },
    {
      "label": "5",
      "R": -50.344,
      "d": 0.15,
      "sd": 22
    },
    {
      "label": "6",
      "R": 41.474,
      "d": 8,
      "sd": 22,
      "medium": 4,
      "asphere": {
        "K": 0,
        "A4": -8.851e-07,
        "A6": -3.047e-10,
        "A8": -2.722e-12,
        "A10": 7.196e-15,
        "A12": -9.418e-18
      }
    },
    {
      "label": "7",
      "R": 381.053,
      "sd": 22,
      "asphere": {
        "K": 0,
        "A4": 6.952e-07,
        "A6": -1.17e-09,
        "A8": 1.399e-12,
        "A10": -1.855e-15,
        "A12": -1.948e-18
      }
    },
    {
      "label": "8",
      "R": 83.207,
      "d": 4.4,
      "sd": 21,
      "medium": 5
    },
    {
      "label": "9",
      "R": -311.913,
      "d": 1.2,
      "sd": 21,
      "medium": 6
    },
    {
      "label": "10",
      "R": 26.572,
      "sd": 21
    },
    {
      "label": "11",
      "R": -75.964,
      "d": 8.3,
      "sd": 18,
      "medium": 7
    },
    {
      "label": "12",
      "R": -21.663,
      "d": 1.5,
      "sd": 18,
      "medium": 8
    },
    {
      "label": "13",
      "R": -124.836,
      "d": 1,
      "sd": 18
    },
    {
      "label": "STO",
      "R": "flat"
    },
    {
      "label": "15",
      "R": 200.542,
      "d": 4.79,
      "sd": 20,
      "medium": 9
    },
    {
      "label": "16",
      "R": -108.635,
      "d": 0.15,
      "sd": 20
    },
    {
      "label": "17",
      "R": 62.205,
      "d": 9.8,
      "sd": 20,
      "medium": 10
    },
    {
      "label": "18",
      "R": -35.565,
      "d": 1.3,
      "sd": 20,
      "medium": 11
    },
    {
      "label": "19",
      "R": -55.362,
      "sd": 20
    },
    {
      "label": "20",
      "R": 67.585,
      "d": 3.3,
      "sd": 20,
      "medium": 12
    },
    {
      "label": "21",
      "R": 268.402,
      "d": 0.2,
      "sd": 20
    },
    {
      "label": "22",
      "R": 34.254,
      "d": 5.4,
      "sd": 15.3,
      "medium": 13
    },
    {
      "label": "23",
      "R": 72.811,
      "d": 1.2,
      "sd": 15.3,
      "medium": 14
    },
    {
      "label": "24",
      "R": 24.934,
      "d": 6.85,
      "sd": 15.3
    },
    {
      "label": "25",
      "R": -190.27,
      "d": 1.6,
      "sd": 15.3,
      "medium": 15,
      "asphere": {
        "K": 0,
        "A4": -1.477e-05,
        "A6": 7.957e-08,
        "A8": -1.838e-10,
        "A10": 2.647e-13,
        "A12": -2.7e-16
      }
    },
    {
      "label": "26",
      "R": 637.275,
      "d": 15.575,
      "sd": 15.3,
      "asphere": {
        "K": 0,
        "A4": -5.075e-06,
        "A6": 8.786e-08,
        "A8": -1.546e-10,
        "A10": 2.816e-13,
        "A12": -2.239e-16
      }
    }
  ],
  "rearPlates": [
    {
      "label": "GL",
      "thicknessMm": 2.5,
      "nd": 1.517,
      "vd": 64.199,
      "indexReference": "d",
      "glass": "H-K9L (CDGM)",
      "gapAfterMm": 0.5,
      "sd": 23,
      "source": "CN 115826211 A/B, Example 2 Table 4, surfaces 27–28"
    }
  ],
  "gaps": {
    "7": {
      "label": "D1",
      "values": [
        [
          2.332,
          8.483
        ]
      ]
    },
    "10": {
      "label": "D2",
      "values": [
        [
          14.868,
          8.717
        ]
      ]
    },
    "STO": {
      "label": "D3",
      "values": [
        [
          7.857,
          2.791
        ]
      ]
    },
    "19": {
      "label": "D4",
      "values": [
        [
          1.901,
          6.967
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 1.2,
    "fStops": [
      1.2,
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
  "groups": [
    { "text": "G1 — Fixed front", "fromSurface": "1", "toSurface": "7" },
    { "text": "G2 — Floating focus", "fromSurface": "8", "toSurface": "10" },
    { "text": "G3 — Fixed", "fromSurface": "11", "toSurface": "13" },
    { "text": "G4 — Floating focus", "fromSurface": "15", "toSurface": "19" },
    { "text": "G5 — Fixed rear", "fromSurface": "20", "toSurface": "26" }
  ],
  "doublets": [
    { "text": "C1", "fromSurface": "3", "toSurface": "5" },
    { "text": "C2", "fromSurface": "8", "toSurface": "10" },
    { "text": "C3", "fromSurface": "11", "toSurface": "13" },
    { "text": "C4", "fromSurface": "17", "toSurface": "19" },
    { "text": "C5", "fromSurface": "22", "toSurface": "24" }
  ],
  "layout": {
    "yScFill": 0.7
  },
  "focus": {
    "closeFocusM": 0.341084,
    "keyframes": [
      0,
      1
    ],
    "step": 1,
    "published": [
      1
    ],
    "description": "PUBLISHED infinity and near focus states. Two floating groups move: G2 shifts 6.151 mm toward the image and G4 shifts 5.066 mm toward the object. The printed near gaps focus an object 0.205016 m before the first lens vertex, or 0.341084 m from the image plane. The patent labels this state 0.206 m without specifying its measurement origin; a first-vertex reference is plausible but unproved. The maker specifies a 0.34 m minimum focus distance. Only the two printed endpoints are modeled; no intermediate focus cam is published."
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 64.2
  },
  "checks": {
    "gapSagFrac": 0.9
  },
  "subtitle": "CN 115826211 A, Example 2 — Viltrox AF 35mm f/1.2 LAB construction",
  "catalog": {
    "lensMounts": [
      "sony-fe",
      "nikon-z"
    ],
    "imageFormat": "135-full-frame",
    "closeFocusM": {
      "marketing": 0.34
    },
    "elementCount": 15,
    "groupCount": 10,
    "focalLengthMm": {
      "marketing": 35,
      "design": 34.50231348501969
    },
    "fNumber": {
      "marketing": 1.2,
      "design": 1.2
    },
    "specs": [
      "15 ELEMENTS / 10 GROUPS",
      "5 ED / 3 HIGH-REFRACTIVE / 2 ASPHERICAL",
      "F/1.2–16",
      "MINIMUM FOCUS 0.34 m"
    ]
  },
  "source": {
    "patentNumber": "CN 115826211 A",
    "authors": [
      "Chen Baofeng"
    ],
    "patentYear": 2023,
    "example": {
      "label": "Example 2",
      "id": "2"
    },
    "assignees": [
      "Shenzhen Leiying Photoelectric Technology Co., Ltd."
    ],
    "errata": [
      {
        "status": "unresolved",
        "note": "The manufacturer section supports the LAB optical family but does not uniquely identify Example 2 as the retail prescription. Source signs are retained."
      },
      {
        "status": "unresolved",
        "note": "Printed nd/νd and all source spacings are retained, including the 2.5 mm filter and final 0.5 mm air space. Catalog dispersion curves match the printed glass coordinates at their stated precision; supplier identities remain unknown. The infinity paraxial residual is -0.045257835 mm with no refocus."
      },
      {
        "status": "unresolved",
        "note": "The patent's 0.206 m near distance has no specified measurement origin. The printed gaps give 205.016 mm before the first vertex and 341.084 mm object-to-image. A first-vertex reference is plausible but unproved. Only the printed endpoints are modeled; neither the finite conjugate nor an intermediate focus cam is published."
      },
      {
        "status": "unresolved",
        "note": "Clear apertures are inferred geometry-limited bounds, not published dimensions. Heavy corner vignetting is described in the analysis; it is a property of these inferred rims, not a measured retail illumination result."
      }
    ]
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
