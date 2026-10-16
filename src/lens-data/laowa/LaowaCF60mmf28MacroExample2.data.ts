import type { LensDataInput } from "../../types/optics.js";

/**
 * CN 103823292 B, native Example 2 (PDF pp.7–8, Figure 3 p.13).
 * Closest production match among all three embodiments: 60.0408 mm, nine elements/seven
 * components, two moving assemblies including the rear pair. Factory identity remains unconfirmed.
 * Every printed R/d/nd/vd and all three D13/D17 rows are retained without scaling or fitting.
 * G1 (L1–L7 plus stop) and G2 (L8–L9) move objectward; D15 is fixed at 1.4858 mm.
 * Source 2× object–image distance is 227.315598 mm, versus production 185 mm. The 1×
 * state is 216.296448 mm: object–image distance is not a monotonic focus coordinate.
 * Ordered source states use focusT 0/0.5/1, with continuous piecewise-linear group travel.
 * Readouts follow the current prescription; only the two source states certify finite MTF.
 * Stop and clear radii are inferred from Figure 3 and source f/2.90; see the audit sidecar.
 * Three catalog curves are qualified spectral proxies; no production supplier is identified.
 */
const LENS_DATA = {
  "key": "laowa-cf-60f28-macro-example-2",
  "name": "LAOWA 60mm f/2.8 2X Ultra-Macro",
  "maker": "Laowa",
  "subtitle": "CN 103823292 B — Example 2; closest patent match, production prescription unconfirmed",
  "specs": [
    "9 elements / 7 components; two moving focus assemblies",
    "Native Example 2: 60.0408 mm, f/2.90",
    "Published infinity / nominal 1× / nominal 2× states",
    "Native 2× object–image 22.73 cm; production minimum 18.5 cm"
  ],
  "focalLengthMarketing": 60,
  "focalLengthDesign": 60.04044915450675,
  "apertureMarketing": 2.8,
  "apertureDesign": 2.9,
  "lensMounts": [
    "canon-ef",
    "nikon-f",
    "sony-fe",
    "sony-a",
    "pentax-k"
  ],
  "imageFormat": "aps-c",
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 26.88,
    "maxTraceFieldDeg": 13.44
  },
  "patentNumber": "CN 103823292 B",
  "patentAuthors": [
    "Xiaohua Zhang"
  ],
  "patentAssignees": [
    "Anhui Changgeng Optics Technology Co., Ltd."
  ],
  "patentYear": 2016,
  "elementCount": 9,
  "groupCount": 7,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.77159,
      "vd": 49.71,
      "indexReference": "d",
      "fl": 78.3233620161442,
      "glass": "Unmatched (high-index crown; catalog identity ambiguous; supplier and melt unproven)",
      "role": "Positive main focus assembly"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "fl": 64.96101107280484,
      "glass": "FCD1 (HOYA spectral proxy; source coordinates retained; supplier and melt unproven)",
      "role": "Positive main focus assembly"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.83147,
      "vd": 29.38,
      "indexReference": "d",
      "fl": -12.515790955873523,
      "glass": "Unmatched (dense flint; no close catalog match; supplier and melt unproven)",
      "role": "Positive main focus assembly",
      "cemented": "L3–L4"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.92286,
      "vd": 20.88,
      "indexReference": "d",
      "fl": 27.98795863249085,
      "glass": "N-SF66 (SCHOTT spectral proxy; source coordinates retained; supplier and melt unproven)",
      "role": "Positive main focus assembly",
      "cemented": "L3–L4"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.69895,
      "vd": 31.75,
      "indexReference": "d",
      "fl": -21.50867436366637,
      "glass": "Unmatched (flint; catalog Abbe numbers differ; supplier and melt unproven)",
      "role": "Positive main focus assembly",
      "cemented": "L5–L6"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.77084,
      "vd": 49.79,
      "indexReference": "d",
      "fl": 20.786970024599732,
      "glass": "Unmatched (high-index crown; catalog identity ambiguous; supplier and melt unproven)",
      "role": "Positive main focus assembly",
      "cemented": "L5–L6"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.8834,
      "vd": 40.41,
      "indexReference": "d",
      "fl": 34.47057818413436,
      "glass": "Unmatched (very-high-index crown; catalog identity ambiguous; supplier and melt unproven)",
      "role": "Positive main focus assembly"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Plano-Concave",
      "nd": 1.52003,
      "vd": 63.8,
      "indexReference": "d",
      "fl": -75.15874084187747,
      "glass": "Unmatched (crown; source does not identify a radiation-resistant formulation; supplier and melt unproven)",
      "role": "Negative singlet in the moving rear assembly"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Biconvex Positive",
      "nd": 1.883,
      "vd": 40.8,
      "indexReference": "d",
      "fl": 108.71687221351364,
      "glass": "TAFD30 (HOYA spectral proxy; source coordinates retained; supplier and melt unproven)",
      "role": "Positive singlet in the moving rear assembly"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 100.3338,
      "d": 2.1209,
      "nd": 1.77159,
      "elemId": 1,
      "sd": 13
    },
    {
      "label": "2",
      "R": -150.5679,
      "d": 0.15,
      "nd": 1,
      "elemId": 0,
      "sd": 13
    },
    {
      "label": "3",
      "R": 24.0098,
      "d": 6.2492,
      "nd": 1.497,
      "elemId": 2,
      "sd": 12
    },
    {
      "label": "4",
      "R": 85.5731,
      "d": 3.1358,
      "nd": 1,
      "elemId": 0,
      "sd": 12
    },
    {
      "label": "5",
      "R": -49.3609,
      "d": 0.5,
      "nd": 1.83147,
      "elemId": 3,
      "sd": 10
    },
    {
      "label": "6",
      "R": 13.2472,
      "d": 2.6316,
      "nd": 1.92286,
      "elemId": 4,
      "sd": 10
    },
    {
      "label": "7",
      "R": 24.6022,
      "d": 2.4505,
      "nd": 1,
      "elemId": 0,
      "sd": 8.2
    },
    {
      "label": "8",
      "R": -45.3794,
      "d": 0.646,
      "nd": 1.69895,
      "elemId": 5,
      "sd": 8.2
    },
    {
      "label": "9",
      "R": 22.6128,
      "d": 5.0984,
      "nd": 1.77084,
      "elemId": 6,
      "sd": 8.6
    },
    {
      "label": "10",
      "R": -49.591,
      "d": 0.15,
      "nd": 1,
      "elemId": 0,
      "sd": 8.6
    },
    {
      "label": "11",
      "R": 124.3883,
      "d": 2.4448,
      "nd": 1.8834,
      "elemId": 7,
      "sd": 10
    },
    {
      "label": "12",
      "R": -39.9509,
      "d": 1.15,
      "nd": 1,
      "elemId": 0,
      "sd": 10
    },
    {
      "label": "STO",
      "R": 1000000000000000,
      "d": 1,
      "nd": 1,
      "elemId": 0,
      "sd": 8.157120606988457
    },
    {
      "label": "14",
      "R": 1000000000000000,
      "d": 0.8,
      "nd": 1.52003,
      "elemId": 8,
      "sd": 9.5
    },
    {
      "label": "15",
      "R": 39.0848,
      "d": 1.4858,
      "nd": 1,
      "elemId": 0,
      "sd": 9.5
    },
    {
      "label": "16",
      "R": 470.3733,
      "d": 1.7182,
      "nd": 1.883,
      "elemId": 9,
      "sd": 12
    },
    {
      "label": "17",
      "R": -120.4058,
      "d": 42.9988,
      "nd": 1,
      "elemId": 0,
      "sd": 12
    }
  ],
  "asph": {},
  "var": {
    "17": [
      42.9988,
      50.1709,
      53.2876
    ],
    "STO": [
      1,
      37.226,
      75.5119
    ]
  },
  "focusPositions": [
    0,
    0.5,
    1
  ],
  "publishedStations": {
    "focus": [
      1,
      2
    ]
  },
  "finiteConjugates": [
    {
      "focusT": 0.5,
      "zoomT": 0,
      "objectDistanceMm": 216.29644836751106,
      "distanceReference": "image-plane",
      "nominalMagnification": 1,
      "source": "CN 103823292 B Example 2, PDF pp.7–8, published nominal 1× D13/D17 spacings; object–image conjugate calculated from the unchanged d-line prescription and authored image plane."
    },
    {
      "focusT": 1,
      "zoomT": 0,
      "objectDistanceMm": 227.31559783108827,
      "distanceReference": "image-plane",
      "nominalMagnification": 2,
      "source": "CN 103823292 B Example 2, PDF pp.7–8, published nominal 2× D13/D17 spacings; object–image conjugate calculated from the unchanged d-line prescription and authored image plane."
    }
  ],
  "varLabels": [
    [
      "STO",
      "D13"
    ],
    [
      "17",
      "D17"
    ]
  ],
  "groups": [
    {
      "text": "G1 — main moving",
      "fromSurface": "1",
      "toSurface": "STO"
    },
    {
      "text": "G2 — rear moving",
      "fromSurface": "14",
      "toSurface": "17"
    }
  ],
  "doublets": [
    {
      "text": "L3–L4",
      "fromSurface": "5",
      "toSurface": "7"
    },
    {
      "text": "L5–L6",
      "fromSurface": "8",
      "toSurface": "10"
    }
  ],
  "closeFocusM": 0.22731559783108826,
  "focusControl": "stations",
  "focusDescription": "PUBLISHED: G1 (L1–L7 plus stop) and G2 (L8–L9) move objectward by different amounts. The rear pair stays rigid; no element is stationary. Infinity / nominal 1× / nominal 2× occupy 0% / 50% / 100% of the control. Between them, group spacings are interpolated. Distances are measured from the object to the image plane.",
  "focusStep": 0.004,
  "nominalFno": 2.9,
  "fstopSeries": [
    2.9,
    4,
    5.6,
    8,
    11,
    16,
    22
  ],
  "maxFstop": 22,
  "apertureBlades": 14,
  "yScFill": 0.3,
  "scFill": 0.32
} satisfies LensDataInput;

export default LENS_DATA;
