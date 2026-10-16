import type { LensDataInput } from "../../types/optics.js";

/**
 * CN103823292B native Example 3, original millimetres; NO optical rescaling or fitting.
 * User-selected qualified Laowa CF60mm f/2.8 2xMacro patent model; factory identity unconfirmed.
 * Printed infinity EFL61.0269mm and FNO2.90 stay distinct from marketed60mm and f/2.8.
 * Native 2x object–image200.020210mm differs from manual185mm by15.020210mm.
 * Two moving groups (L1–L7 plus STO, and L8) with stationary rear L9; D17 fixed39.2744mm.
 * All three published spacing states preserved. Intermediate spacing interpolation is not a
 * source cam law or a verified conjugate schedule. Source-derived inverse-distance coordinates
 * place 1x very close to 2x in canonical focusT; station-based UI travel spreads the three
 * states evenly without changing those coordinates. Intermediate distance readouts use the
 * current paraxial conjugate; finiteConjugates still certifies only source states for MTF.
 * Physical stop radius calibrated by exact axial Snell tracing to source FNO2.90.
 * All glass semi-diameters are inferred, guided by Figure5 and source-aperture/field checks.
 * The modeled L4 rear rim is8.2mm versus9.0mm at its cemented front, keeping S7/S8
 * below default gapSagFrac0.90 while passing the full stated axial beam. No override used.
 * Unresolved printed condition summaries1.123 and2.152 differ from native movement
 * calculations1.128345164 and2.165837448; no optical value is changed to repair them.
 * Exact native nd/vd retained. L2 uses a qualified K-PFK80 spectral proxy; the other
 * eight glasses remain Unmatched. No production supplier or spectral measurement is inferred.
 */
const LENS_DATA = {
  "key": "laowa-cf-60f28-macro-example-3",
  "name": "LAOWA 60mm f/2.8 2X Ultra-Macro",
  "maker": "Laowa",
  "subtitle": "CN103823292B — native Example 3; qualified patent model, production identity unconfirmed",
  "specs": [
    "9 elements / 7 components",
    "Native Example 3: 61.0269 mm, f/2.90",
    "Published infinity / nominal 1x / nominal 2x states",
    "Native 2x object–image 200.020210 mm; manual 185 mm discrepancy unresolved"
  ],
  "focalLengthMarketing": 60,
  "focalLengthDesign": 61.02644595128692,
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
    "fullFieldDeg": 26.14,
    "maxTraceFieldDeg": 13.07
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
  "sourceErrata": [
    {
      "status": "unresolved",
      "note": "Example 3 condition-summary table (PDF p10): printed movement ratio1.123 versus1.128345164 from native gaps, and auxiliary-travel ratio2.152 versus2.165837448. Both computed values satisfy source inequalities; cause unisolated, every optical prescription value retained."
    }
  ],
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.77965,
      "vd": 46.35,
      "indexReference": "d",
      "fl": 48.34154622803858,
      "glass": "Unmatched (high-index moderate-dispersion crown/flint boundary; supplier and melt unproven)",
      "role": "Positive main focus assembly"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.49787,
      "vd": 81.39,
      "indexReference": "d",
      "fl": 58.07637692064494,
      "glass": "K-PFK80 (Sumita spectral proxy; source 1.49787/81.39 retained; supplier and melt unproven)",
      "role": "Positive main focus assembly"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.83868,
      "vd": 26.75,
      "indexReference": "d",
      "fl": -11.590302212415924,
      "glass": "Unmatched (dense flint class; supplier and melt unproven)",
      "role": "Positive main focus assembly",
      "cemented": "L3–L4"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.91782,
      "vd": 20.98,
      "indexReference": "d",
      "fl": 23.29425021416224,
      "glass": "Unmatched (very-high-index dense flint class; supplier and melt unproven)",
      "role": "Positive main focus assembly",
      "cemented": "L3–L4"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.6317,
      "vd": 34.87,
      "indexReference": "d",
      "fl": -26.68735395942266,
      "glass": "Unmatched (flint class; supplier and melt unproven)",
      "role": "Positive main focus assembly",
      "cemented": "L5–L6"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.72325,
      "vd": 54.99,
      "indexReference": "d",
      "fl": 24.544548106814748,
      "glass": "Unmatched (high-index crown class; supplier and melt unproven)",
      "role": "Positive main focus assembly",
      "cemented": "L5–L6"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.87481,
      "vd": 41.28,
      "indexReference": "d",
      "fl": 39.614157745947324,
      "glass": "Unmatched (very-high-index moderate-dispersion glass; supplier and melt unproven)",
      "role": "Positive main focus assembly"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Plano-Concave",
      "nd": 1.49861,
      "vd": 79.98,
      "indexReference": "d",
      "fl": -53.246625619222854,
      "glass": "Unmatched (low-index low-dispersion fluor-crown class; supplier and melt unproven)",
      "role": "Negative auxiliary focus singlet"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Positive Meniscus",
      "nd": 1.88768,
      "vd": 36.55,
      "indexReference": "d",
      "fl": 141.61070389036405,
      "glass": "Unmatched (very-high-index flint class; supplier and melt unproven)",
      "role": "Stationary positive rear singlet"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 51.186,
      "d": 6.1051,
      "nd": 1.77965,
      "elemId": 1,
      "sd": 11
    },
    {
      "label": "2",
      "R": -135.4698,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11
    },
    {
      "label": "3",
      "R": 24.5141,
      "d": 2.9486,
      "nd": 1.49787,
      "elemId": 2,
      "sd": 10
    },
    {
      "label": "4",
      "R": 154.6397,
      "d": 2.1524,
      "nd": 1.0,
      "elemId": 0,
      "sd": 10
    },
    {
      "label": "5",
      "R": -54.599,
      "d": 0.5,
      "nd": 1.83868,
      "elemId": 3,
      "sd": 9
    },
    {
      "label": "6",
      "R": 11.8754,
      "d": 2.8627,
      "nd": 1.91782,
      "elemId": 4,
      "sd": 9
    },
    {
      "label": "7",
      "R": 23.6313,
      "d": 2.9043,
      "nd": 1.0,
      "elemId": 0,
      "sd": 8.2
    },
    {
      "label": "8",
      "R": -31.546,
      "d": 1.2338,
      "nd": 1.6317,
      "elemId": 5,
      "sd": 8.4
    },
    {
      "label": "9",
      "R": 36.7567,
      "d": 3.6423,
      "nd": 1.72325,
      "elemId": 6,
      "sd": 8.4
    },
    {
      "label": "10",
      "R": -32.9054,
      "d": 0.3166,
      "nd": 1.0,
      "elemId": 0,
      "sd": 8.4
    },
    {
      "label": "11",
      "R": 151.0997,
      "d": 2.8085,
      "nd": 1.87481,
      "elemId": 7,
      "sd": 8.5
    },
    {
      "label": "12",
      "R": -44.5784,
      "d": 1.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 8.5
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 1.0,
      "nd": 1.0,
      "elemId": 0,
      "sd": 7.733738454799935
    },
    {
      "label": "14",
      "R": 1000000000000000.0,
      "d": 0.8,
      "nd": 1.49861,
      "elemId": 8,
      "sd": 8
    },
    {
      "label": "15",
      "R": 26.5493,
      "d": 2.3259,
      "nd": 1.0,
      "elemId": 0,
      "sd": 8
    },
    {
      "label": "16",
      "R": -138.923,
      "d": 2.0,
      "nd": 1.88768,
      "elemId": 9,
      "sd": 12
    },
    {
      "label": "17",
      "R": -66.4387,
      "d": 39.2744,
      "nd": 1.0,
      "elemId": 0,
      "sd": 12
    }
  ],
  "asph": {},
  "var": {
    "STO": [
      1.0,
      23.1591,
      40.9245
    ],
    "15": [
      2.3259,
      12.9182,
      25.2671
    ]
  },
  "focusPositions": [
    0,
    0.9998792550876074,
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
      "focusT": 0.9998792550876074,
      "zoomT": 0,
      "objectDistanceMm": 200.04436417227996,
      "distanceReference": "image-plane",
      "nominalMagnification": 1,
      "source": "CN103823292B Example3 PDF pp9-10 nominal1x published gaps; object–image conjugate computed from unchanged d-line prescription at source image plane."
    },
    {
      "focusT": 1,
      "zoomT": 0,
      "objectDistanceMm": 200.02020983305334,
      "distanceReference": "image-plane",
      "nominalMagnification": 2,
      "source": "CN103823292B Example3 PDF pp9-10 nominal2x published gaps; object–image conjugate computed from unchanged d-line prescription at source image plane."
    }
  ],
  "varLabels": [
    [
      "STO",
      "D13"
    ],
    [
      "15",
      "D15"
    ]
  ],
  "groups": [
    {
      "text": "G1 — main moving",
      "fromSurface": "1",
      "toSurface": "STO"
    },
    {
      "text": "G2 — auxiliary moving",
      "fromSurface": "14",
      "toSurface": "15"
    },
    {
      "text": "G3 — fixed",
      "fromSurface": "16",
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
  "closeFocusM": 0.20002020983305335,
  "focusControl": "stations",
  "focusDescription": "PUBLISHED: G1 (L1–L7 plus stop) and G2 (L8) move objectward; L9 is stationary. Native infinity / nominal 1× / nominal 2× spacings occupy 0% / 50% / 100% of the control. Between these states, group spacings are interpolated and focus distance follows the current prescription. Distances are measured from the object to the image plane.",
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
  "yScFill": 0.3
} satisfies LensDataInput;

export default LENS_DATA;
