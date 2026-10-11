import type { LensDataInput } from "../../types/optics.js";

/**
 * SIGMA APO MACRO 180mm f/5.6 UC: JPH04110811A, Example 3.
 * Nine elements, six air-separated groups, four functional groups; all spherical.
 * Native prescription retained at f = 174.86 mm; no scaling to marketed 180 mm.
 * Source row 9 is the actual iris; source r = 0.0 maps to a flat STO.
 * Source terminal d16 = 0.0 is a placeholder; separate infinity fb = 40.08 mm
 * supplies the fixed image gap. G4 is fixed relative to image. No rear plate.
 * Both printed focus states remain unchanged. Macro object distance is 403.0 mm
 * from S1. Its paraxial image lies 0.288342 mm behind the retained fixed plane.
 * This accepted defocus is disclosed, not corrected or attributed to rounding.
 * closeFocusM = (403.0 + 103.29 + 40.08)/1000; marketed MFD is 0.55 m.
 * Intermediate linear gap interpolation is not source-certified focus travel.
 * NOTE ON SEMI-DIAMETERS: inferred from Figure 5 optical rims (PDF p6),
 * refined/checked against exact rays; no source clear radii are published.
 * Native approximate figure radii: 19.8,17.9,13.8,11.1,13.8,15.8 mm by component.
 * Conservative rounded model radii: 20,18,14,11.31,14,16 mm respectively.
 * The 11.31 mm G3 rims also contain the directly published 7-degree
 * infinity-field beam at its cemented interface; edge-exit vignetting remains.
 * The STO radius 9.1943879049 mm uses the current runtime exact on-axis
 * entrance beam EFL/(2*5.71), not the 9.048929 mm paraxial-only estimate.
 * This is F-number calibration, not independent evidence of diaphragm size.
 * The inferred iris is fixed with focus. Its macro working F-number differs
 * from printed 5.98; no invented iris schedule is used to force agreement.
 * Glass names and C/F/g/dPgF fields are catalog-equivalent spectral proxies
 * from HOYA formula-1 coefficients, not historical supplier/melt identification.
 * No apochromatic performance claim follows from the commercial APO name.
 * Figure-based rims retain modeled edge vignetting. Geometry uses default
 * gapSagFrac 0.90; no hidden trim or relaxed slope/conic policy is intended.
 */

const LENS_DATA = {
  "key": "sigma-apo-macro-180mm-f56-uc",
  "name": "SIGMA APO MACRO 180mm f/5.6 UC",
  "maker": "Sigma",
  "sourceErrata": [
    {
      "status": "unresolved",
      "note": "Example 3 printed macro gaps and object distance 403.0 mm give paraxial image gap 40.368342 mm, 0.288342 mm behind the retained 40.080 mm plane inferred from the fixed rear-group/image mechanism. The cause remains unresolved; retained defocus is accepted. No prescription value is corrected. The modeled fixed infinity-calibrated iris also does not reproduce printed macro effective F/5.98; no physical iris law is published."
    }
  ],
  "subtitle": "JPH04110811A Example 3; production correlation, not manufacturer-confirmed attribution",
  "specs": [
    "9 ELEMENTS / 6 GROUPS",
    "Design f = 174.86 mm; marketed 180 mm",
    "Design F/5.71; marketed f/5.6",
    "Published 0.5x state; retained macro defocus"
  ],
  "focalLengthMarketing": 180,
  "focalLengthDesign": 174.86,
  "apertureMarketing": 5.6,
  "apertureDesign": 5.71,
  "lensMounts": [
    "sigma-sa",
    "sony-a",
    "nikon-f",
    "canon-ef"
  ],
  "imageFormat": "135-full-frame",
  "imageCircleMm": 43.2,
  "patentNumber": "JP H04-110811 A",
  "patentAuthors": [
    "Takehisa Koyama"
  ],
  "patentAssignees": [
    "Sigma Corporation"
  ],
  "patentYear": 1992,
  "elementCount": 9,
  "groupCount": 6,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.6,
      "indexReference": "d",
      "fl": 96.787955,
      "glass": "FCD1 equivalent (HOYA)",
      "nC": 1.4951374776,
      "nF": 1.5012275046,
      "ng": 1.5045091267,
      "dPgF": 0.03230303,
      "apdNote": "Catalog-equivalent spectral proxy; historical supplier and melt unconfirmed.",
      "role": "Fixed front positive collector; high-Abbe catalog-equivalent material.",
      "apd": "inferred"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.6,
      "indexReference": "d",
      "fl": 62.489491,
      "glass": "FCD1 equivalent (HOYA)",
      "nC": 1.4951374776,
      "nF": 1.5012275046,
      "ng": 1.5045091267,
      "dPgF": 0.03230303,
      "apdNote": "Catalog-equivalent spectral proxy; historical supplier and melt unconfirmed.",
      "role": "Positive component of fixed front cemented pair D1.",
      "apd": "inferred",
      "cemented": "D1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.834,
      "vd": 37.3,
      "indexReference": "d",
      "fl": -79.321595,
      "glass": "NBFD10 equivalent (HOYA)",
      "nC": 1.8274203039,
      "nF": 1.8497525931,
      "ng": 1.8626842428,
      "dPgF": -0.00200524,
      "apdNote": "Catalog-equivalent spectral proxy; historical supplier and melt unconfirmed.",
      "role": "Negative component of fixed front cemented pair D1.",
      "cemented": "D1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.84666,
      "vd": 23.8,
      "indexReference": "d",
      "fl": 51.082468,
      "glass": "FDS90-SG equivalent (HOYA)",
      "nC": 1.8364919125,
      "nF": 1.8720887041,
      "ng": 1.8941303413,
      "dPgF": 0.01543452,
      "apdNote": "Catalog-equivalent spectral proxy; historical supplier and melt unconfirmed.",
      "role": "Positive standalone component of moving net-negative focus group D2.",
      "cemented": "D2"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.7859,
      "vd": 43.9,
      "indexReference": "d",
      "fl": -26.220349,
      "glass": "NBFD11 equivalent (HOYA)",
      "nC": 1.7805325504,
      "nF": 1.7984205191,
      "ng": 1.8084583793,
      "dPgF": -0.00880871,
      "apdNote": "Catalog-equivalent spectral proxy; historical supplier and melt unconfirmed.",
      "role": "Negative component of moving net-negative focus group D2.",
      "cemented": "D2"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Negative Meniscus",
      "nd": 1.7552,
      "vd": 27.5,
      "indexReference": "d",
      "fl": -114.01841,
      "glass": "E-FD4L equivalent (HOYA)",
      "nC": 1.7472969243,
      "nF": 1.7747285905,
      "ng": 1.7914574687,
      "dPgF": 0.01229321,
      "apdNote": "Catalog-equivalent spectral proxy; historical supplier and melt unconfirmed.",
      "role": "Negative component of moving net-positive focus group D3.",
      "cemented": "D3"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.4,
      "indexReference": "d",
      "fl": 51.422609,
      "glass": "FC5 equivalent (HOYA)",
      "nC": 1.485350004,
      "nF": 1.4922705241,
      "ng": 1.4959425074,
      "dPgF": 0.00520634,
      "apdNote": "Catalog-equivalent spectral proxy; historical supplier and melt unconfirmed.",
      "role": "Positive component of moving net-positive focus group D3.",
      "cemented": "D3"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconcave Negative",
      "nd": 1.713,
      "vd": 53.9,
      "indexReference": "d",
      "fl": -42.963168,
      "glass": "LAC8 equivalent (HOYA)",
      "nC": 1.7089785191,
      "nF": 1.7221971878,
      "ng": 1.7293910485,
      "dPgF": -0.00892045,
      "apdNote": "Catalog-equivalent spectral proxy; historical supplier and melt unconfirmed.",
      "role": "Negative element in the fixed rear group."
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Positive Meniscus",
      "nd": 1.84666,
      "vd": 23.8,
      "indexReference": "d",
      "fl": 97.666352,
      "glass": "FDS90-SG equivalent (HOYA)",
      "nC": 1.8364919125,
      "nF": 1.8720887041,
      "ng": 1.8941303413,
      "dPgF": 0.01543452,
      "apdNote": "Catalog-equivalent spectral proxy; historical supplier and melt unconfirmed.",
      "role": "Positive meniscus in the fixed rear group."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 81.37,
      "d": 6.17,
      "nd": 1.497,
      "elemId": 1,
      "sd": 20
    },
    {
      "label": "2",
      "R": -114.7,
      "d": 0.26,
      "nd": 1,
      "elemId": 0,
      "sd": 20
    },
    {
      "label": "3",
      "R": 46.72,
      "d": 7.17,
      "nd": 1.497,
      "elemId": 2,
      "sd": 18
    },
    {
      "label": "4",
      "R": -87.92,
      "d": 2.3,
      "nd": 1.834,
      "elemId": 3,
      "sd": 18
    },
    {
      "label": "5",
      "R": 270.4,
      "d": 12.48,
      "nd": 1,
      "elemId": 0,
      "sd": 18
    },
    {
      "label": "6",
      "R": -411.0,
      "d": 2.94,
      "nd": 1.84666,
      "elemId": 4,
      "sd": 14
    },
    {
      "label": "7",
      "R": -39.26,
      "d": 1.5,
      "nd": 1.7859,
      "elemId": 5,
      "sd": 14
    },
    {
      "label": "8",
      "R": 44.1,
      "d": 14.5,
      "nd": 1,
      "elemId": 0,
      "sd": 14
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 11.63,
      "nd": 1,
      "elemId": 0,
      "sd": 9.1943879049
    },
    {
      "label": "10",
      "R": 258.5,
      "d": 1.5,
      "nd": 1.7552,
      "elemId": 6,
      "sd": 11.31
    },
    {
      "label": "11",
      "R": 64.43,
      "d": 3.99,
      "nd": 1.48749,
      "elemId": 7,
      "sd": 11.31
    },
    {
      "label": "12",
      "R": -40.2,
      "d": 33.45,
      "nd": 1,
      "elemId": 0,
      "sd": 11.31
    },
    {
      "label": "13",
      "R": -35.97,
      "d": 1.5,
      "nd": 1.713,
      "elemId": 8,
      "sd": 14
    },
    {
      "label": "14",
      "R": 210.03,
      "d": 1.19,
      "nd": 1,
      "elemId": 0,
      "sd": 14
    },
    {
      "label": "15",
      "R": 67.68,
      "d": 2.71,
      "nd": 1.84666,
      "elemId": 9,
      "sd": 16
    },
    {
      "label": "16",
      "R": 366.0,
      "d": 40.08,
      "nd": 1,
      "elemId": 0,
      "sd": 16
    }
  ],
  "asph": {},
  "var": {
    "5": [
      12.48,
      23.66
    ],
    "8": [
      14.5,
      3.32
    ],
    "STO": [
      11.63,
      3.38
    ],
    "12": [
      33.45,
      41.7
    ]
  },
  "publishedStations": {
    "focus": [
      1
    ]
  },
  "finiteConjugates": [
    {
      "focusT": 1,
      "zoomT": 0,
      "objectDistanceMm": 403.0,
      "distanceReference": "first-surface",
      "source": "JPH04110811A, Example 3, PDF p4 macro gap row; object reference defined p3. Printed state retained at fixed image plane with approximately +0.288 mm paraxial defocus; no automatic refocus."
    }
  ],
  "varLabels": [
    [
      "5",
      "D5"
    ],
    [
      "8",
      "D8"
    ],
    [
      "STO",
      "D9"
    ],
    [
      "12",
      "D12"
    ]
  ],
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "5"
    },
    {
      "text": "G2",
      "fromSurface": "6",
      "toSurface": "8"
    },
    {
      "text": "G3",
      "fromSurface": "10",
      "toSurface": "12"
    },
    {
      "text": "G4",
      "fromSurface": "13",
      "toSurface": "16"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "3",
      "toSurface": "5"
    },
    {
      "text": "D2",
      "fromSurface": "6",
      "toSurface": "8"
    },
    {
      "text": "D3",
      "fromSurface": "10",
      "toSurface": "12"
    }
  ],
  "closeFocusM": 0.54637,
  "nominalFno": 5.71,
  "fstopSeries": [
    5.71,
    8,
    11,
    16,
    22
  ],
  "maxFstop": 22,
  "yScFill": 0.32,
  "focusDescription": "Published endpoints: G1/G4 and the image reference remain fixed; G2 moves imageward 11.18 mm and G3 objectward 8.25 mm. Both printed gap states are unchanged. Intermediate gaps are linear interpolation, not published or solved focus travel. At object 403.0 mm, the fixed plane retains +0.288 mm paraxial defocus. Iris radius is inferred by exact infinity F/5.71 calibration and held fixed; printed macro F/5.98 is not reproduced."
} satisfies LensDataInput;
export default LENS_DATA;
