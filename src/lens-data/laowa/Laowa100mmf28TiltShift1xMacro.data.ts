import type { LensDataInput } from "../../types/optics.js";

/**
 * CN118584637A Example 1; native millimetres/d-line indices, no scaling.
 * Product association is construction-based, not a manufacturer-confirmed exact prescription.
 * PUBLISHED infinity/0.5x/1.0x are source labels; finite paraxial magnification differs.
 * All native spacings retained; derived endpoint conjugate is separate from marketed MFD.
 * Physical rims and the f/2.87-calibrated stop radius are inferred, not source measurements.
 * Semi-diameters are estimated from Figure 1 (0.121 mm/px at 300 dpi) and floor-checked by real-ray trace at
 * all three keyframes. Figure 1 draws L1 and L10 square-cut, so both faces of each carry the drawn outer
 * height (35 / 16 mm); L10's flat mounting annulus begins at about 12.2 mm, so its modeled rim is thicker than
 * drawn. L12's concave front stops at 18.9 mm, where the figure's flat annulus begins, which keeps its rim near the
 * drawn thickness and renders the step as a chamfer. L13 is 24 mm (drawn about 1.2 mm taller than L12).
 * Surface 3 stays at 30.197 mm although the figure draws L2 square-cut at about 34.5 mm: prescription faces 2 and 3
 * meet at 32.2 mm and the default cross-gap policy admits 30.5 mm.
 * 67 mm is published coverage; exact edge transmission is not certified.
 * No aspheres or cover plate. The patent gives no noncoaxial prescription or hinge; perspectiveControl
 * uses Laowa's published shift/tilt ranges with a rear-vertex fallback pivot.
 * Planes use 1e15. R22 retains literal 0.0000 in source evidence; Figure1 and first order justify the explicit plane convention.
 * Only three authored keyframes are source states; interpolation/distance labels are estimates.
 */

const LENS_DATA = {
  "key": "laowa-100mm-f28-tilt-shift-1x-macro",
  "name": "LAOWA 100mm f/2.8 Tilt-Shift 1× Macro",
  "maker": "Laowa",
  "subtitle": "CN 118584637 A, Example 1 — construction-based product association; coaxial patent states",
  "patentNumber": "CN 118584637 A",
  "patentAuthors": [
    "Dayong Li"
  ],
  "patentAssignees": [
    "Anhui Changgeng Optics Technology Co., Ltd."
  ],
  "patentYear": 2024,
  "elementCount": 13,
  "groupCount": 10,
  "lensMounts": [
    "sony-fe",
    "canon-rf",
    "nikon-z",
    "l-mount",
    "fujifilm-g",
    "hasselblad-xcd"
  ],
  "imageFormat": "135-full-frame",
  "imageCircleMm": 67,
  "perspectiveControl": {
    // Official Laowa specification (full-frame mounts): shift ±12 mm, tilt ±10°.
    "shiftRangeMm": [-12, 12],
    "tiltRangeDeg": [-10, 10],
    "shiftStepMm": 0.1,
    "tiltStepDeg": 0.1,
    // The patent and Laowa publish no hinge location. The pivot is the infinity-state rear
    // vertex (source back focus 40.3171 mm): a deterministic tracing reference, not the
    // manufactured tilt axis.
    "tiltPivot": {
      "frame": "camera",
      "basis": "rear-vertex-fallback",
      "zOffsetFromImagePlaneMm": -40.3171
    }
  },
  "focalLengthMarketing": 100,
  "focalLengthDesign": 101.9933,
  "apertureMarketing": 2.8,
  "apertureDesign": 2.87,
  "nominalFno": 2.87,
  "closeFocusM": 0.3369669890357154,
  "focusPositions": [
    0,
    0.8118878142481926,
    1
  ],
  "publishedStations": {
    "focus": [
      1,
      2
    ]
  },
  "focusDescription": "PUBLISHED coaxial spacings at infinity, source 0.5x and source 1.0x labels. G1 fixed; G2/G3 independently move objectward. Source labels retained; Gaussian endpoint magnification -0.956664. closeFocusM is the calculated source-endpoint object-to-image distance, not marketed MFD. Intermediate focusT is the derived endpoint/intermediate object-to-image distance ratio; interpolated gaps and distance labels do not certify focus. No noncoaxial prescription or mechanical hinge is supplied.",
  "specs": [
    "13 ELEMENTS / 10 GROUPS",
    "DESIGN f = 101.99 mm",
    "DESIGN F/2.87",
    "67 mm IMAGE CIRCLE",
    "SHIFT ±12 mm / TILT ±10°"
  ],
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "diagramLabel": "L1",
      "label": "Element 1",
      "type": "Biconcave Negative",
      "nd": 1.53031,
      "vd": 67.42,
      "indexReference": "d",
      "fl": -395.02051423442265,
      "glass": "Unmatched (native nd=1.53031, vd=67.42; supplier unconfirmed)"
    },
    {
      "id": 2,
      "name": "L2",
      "diagramLabel": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.8751,
      "vd": 45.25,
      "indexReference": "d",
      "fl": 356.8158527823303,
      "glass": "Unmatched (native nd=1.87510, vd=45.25; supplier unconfirmed)"
    },
    {
      "id": 3,
      "name": "L3",
      "diagramLabel": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.89141,
      "vd": 33.77,
      "indexReference": "d",
      "fl": 59.64140196534804,
      "glass": "Unmatched (native nd=1.89141, vd=33.77; supplier unconfirmed)"
    },
    {
      "id": 4,
      "name": "L4",
      "diagramLabel": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.78737,
      "vd": 23.92,
      "indexReference": "d",
      "fl": -27.76533464639603,
      "glass": "Unmatched (native nd=1.78737, vd=23.92; supplier unconfirmed)",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L5",
      "diagramLabel": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.92286,
      "vd": 20.88,
      "indexReference": "d",
      "fl": 24.547727131410593,
      "glass": "E-FDS1 (HOYA, coordinate equivalent; supplier unconfirmed)",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L6",
      "diagramLabel": "L6",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.91392,
      "vd": 23.35,
      "indexReference": "d",
      "fl": -24.172157010124067,
      "glass": "Unmatched (native nd=1.91392, vd=23.35; supplier unconfirmed)",
      "cemented": "D2"
    },
    {
      "id": 7,
      "name": "L7",
      "diagramLabel": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "fl": 45.818330889507834,
      "glass": "FCD1 (HOYA, coordinate equivalent; supplier unconfirmed)",
      "cemented": "D2",
      "apd": "inferred",
      "apdNote": "ED fluorophosphate class inferred from nd=1.49700 and νd=81.61; Laowa markets two ED elements. The patent publishes no partial-dispersion data."
    },
    {
      "id": 8,
      "name": "L8",
      "diagramLabel": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.881,
      "vd": 40.15,
      "indexReference": "d",
      "fl": 84.36477713341789,
      "glass": "TAFD33 (HOYA, coordinate equivalent; supplier unconfirmed)"
    },
    {
      "id": 9,
      "name": "L9",
      "diagramLabel": "L9",
      "label": "Element 9",
      "type": "Negative Meniscus",
      "nd": 1.88564,
      "vd": 21.55,
      "indexReference": "d",
      "fl": -69.21717873930125,
      "glass": "Unmatched (native nd=1.88564, vd=21.55; supplier unconfirmed)"
    },
    {
      "id": 10,
      "name": "L10",
      "diagramLabel": "L10",
      "label": "Element 10",
      "type": "Biconcave Negative",
      "nd": 1.68893,
      "vd": 31.16,
      "indexReference": "d",
      "fl": -36.148975419961516,
      "glass": "E-FD8 (HOYA, coordinate equivalent; supplier unconfirmed)",
      "cemented": "D3"
    },
    {
      "id": 11,
      "name": "L11",
      "diagramLabel": "L11",
      "label": "Element 11",
      "type": "Biconvex Positive",
      "nd": 1.90326,
      "vd": 27.29,
      "indexReference": "d",
      "fl": 31.521008241786298,
      "glass": "Unmatched (native nd=1.90326, vd=27.29; supplier unconfirmed)",
      "cemented": "D3"
    },
    {
      "id": 12,
      "name": "L12",
      "diagramLabel": "L12",
      "label": "Element 12",
      "type": "Plano-Concave",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "fl": -65.84889336016094,
      "glass": "FCD1 (HOYA, coordinate equivalent; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "ED fluorophosphate class inferred from nd=1.49700 and νd=81.61; Laowa markets two ED elements. The patent publishes no partial-dispersion data."
    },
    {
      "id": 13,
      "name": "L13",
      "diagramLabel": "L13",
      "label": "Element 13",
      "type": "Biconvex Positive",
      "nd": 1.87156,
      "vd": 41.46,
      "indexReference": "d",
      "fl": 68.25456716098005,
      "glass": "Unmatched (native nd=1.87156, vd=41.46; supplier unconfirmed)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": -419.2264,
      "d": 1.5,
      "nd": 1.53031,
      "elemId": 1,
      "sd": 35
    },
    {
      "label": "2",
      "R": 419.2264,
      "d": 1.7626,
      "nd": 1.0,
      "elemId": 0,
      "sd": 35
    },
    {
      "label": "3",
      "R": -988.9355,
      "d": 4.5,
      "nd": 1.8751,
      "elemId": 2,
      "sd": 30.197
    },
    {
      "label": "4",
      "R": -237.822,
      "d": 49.302,
      "nd": 1.0,
      "elemId": 0,
      "sd": 35
    },
    {
      "label": "5",
      "R": 49.5786,
      "d": 4.7304,
      "nd": 1.89141,
      "elemId": 3,
      "sd": 19
    },
    {
      "label": "6",
      "R": 701.9177,
      "d": 6.8233,
      "nd": 1.0,
      "elemId": 0,
      "sd": 19
    },
    {
      "label": "7",
      "R": -74.359,
      "d": 1.0,
      "nd": 1.78737,
      "elemId": 4,
      "sd": 17
    },
    {
      "label": "8",
      "R": 31.1489,
      "d": 6.8677,
      "nd": 1.92286,
      "elemId": 5,
      "sd": 16.645
    },
    {
      "label": "9",
      "R": -74.2786,
      "d": 0.9579,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16.645
    },
    {
      "label": "10",
      "R": -91.0272,
      "d": 4.9298,
      "nd": 1.91392,
      "elemId": 6,
      "sd": 15.5
    },
    {
      "label": "11",
      "R": 29.9253,
      "d": 5.3509,
      "nd": 1.497,
      "elemId": 7,
      "sd": 14.863
    },
    {
      "label": "12",
      "R": -89.6049,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 14.863
    },
    {
      "label": "13",
      "R": 96.4295,
      "d": 2.6436,
      "nd": 1.881,
      "elemId": 8,
      "sd": 14
    },
    {
      "label": "14",
      "R": -320.0818,
      "d": 0.85,
      "nd": 1.0,
      "elemId": 0,
      "sd": 14
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 1.9,
      "nd": 1.0,
      "elemId": 0,
      "sd": 12.468768131654118
    },
    {
      "label": "16",
      "R": 131.5759,
      "d": 1.0,
      "nd": 1.88564,
      "elemId": 9,
      "sd": 12
    },
    {
      "label": "17",
      "R": 41.669,
      "d": 9.7523,
      "nd": 1.0,
      "elemId": 0,
      "sd": 12
    },
    {
      "label": "18",
      "R": -38.7618,
      "d": 1.0,
      "nd": 1.68893,
      "elemId": 10,
      "sd": 16
    },
    {
      "label": "19",
      "R": 70.3932,
      "d": 9.0476,
      "nd": 1.90326,
      "elemId": 11,
      "sd": 16
    },
    {
      "label": "20",
      "R": -44.8924,
      "d": 16.6161,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16
    },
    {
      "label": "21",
      "R": -32.7269,
      "d": 1.0,
      "nd": 1.497,
      "elemId": 12,
      "sd": 18.9
    },
    {
      "label": "22",
      "R": 1000000000000000.0,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 23
    },
    {
      "label": "23",
      "R": 218.2766,
      "d": 5.9427,
      "nd": 1.87156,
      "elemId": 13,
      "sd": 24
    },
    {
      "label": "24",
      "R": -80.7375,
      "d": 40.3171,
      "nd": 1.0,
      "elemId": 0,
      "sd": 24
    }
  ],
  "asph": {},
  "var": {
    "4": [
      49.302,
      22.8415,
      1.0
    ],
    "STO": [
      1.9,
      15.0845,
      27.2633
    ],
    "24": [
      40.3171,
      53.5931,
      63.2558
    ]
  },
  "varLabels": [
    [
      "4",
      "D12"
    ],
    [
      "STO",
      "D15"
    ],
    [
      "24",
      "BF"
    ]
  ],
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "4"
    },
    {
      "text": "G2",
      "fromSurface": "5",
      "toSurface": "14"
    },
    {
      "text": "G3",
      "fromSurface": "16",
      "toSurface": "24"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "7",
      "toSurface": "9"
    },
    {
      "text": "D2",
      "fromSurface": "10",
      "toSurface": "12"
    },
    {
      "text": "D3",
      "fromSurface": "18",
      "toSurface": "20"
    }
  ],
  "fstopSeries": [
    2.87,
    4,
    5.6,
    8,
    11,
    16,
    22
  ],
  "maxFstop": 22,
  "apertureBlades": 15,
  "scFill": 0.75,
  "yScFill": 0.6
} satisfies LensDataInput;

export default LENS_DATA;
