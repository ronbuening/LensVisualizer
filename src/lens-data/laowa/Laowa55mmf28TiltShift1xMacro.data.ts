import type { LensDataInput } from "../../types/optics.js";

/**
 * CN118671950A Example 1; native millimetres/d-line indices, no scaling.
 * Product association is construction-based, not a manufacturer-confirmed exact prescription.
 * PUBLISHED infinity/0.5x/1.0x are source labels; finite paraxial magnification differs.
 * All native spacings retained; derived endpoint conjugate is separate from marketed MFD.
 * Physical rims and the f/2.87-calibrated stop radius are inferred, not source measurements.
 * NOTE ON SEMI-DIAMETERS: no clear apertures are published. Rims are estimated from Figure 1
 * (150 dpi raster, 0.285 mm/px, axial scale checked on three vertex spans) and floor-checked by
 * exact real-ray trace at infinity, 0.5x and 1.0x. Surface 22 is 11.5 mm with 23 and 24, because
 * Figure 1 and Laowa's construction diagram both draw the L12/L13 doublet square-cut. Surface 2
 * is 29.5 mm: Figure 1 ends the L1 rear arc near 30 mm where it meets L2 (the spheres touch at
 * 29.86 mm), and the chief ray of the 33.5 mm image height needs 29.46 mm there and 29.41 mm on
 * surface 3. Surfaces 3 and 4 are both 32.5 mm, the height of L3: both drawings show L2 as a
 * square-cut block level with L3 (Figure 1 block 33.2 mm, L3 tips 33.4 mm), so surface 3 runs
 * past its drawn arc end (30.0 mm) to the block height. gapSagFrac 0.98 is the smallest
 * two-decimal cross-gap limit that admits the shared 29.5 mm height of surfaces 2 and 3
 * (combined sag 17.40 of the 17.912 mm gap); the surfaces do not cross inside it. L1 keeps
 * 38.5 / 29.5 mm and renders tapered where both drawings show a flanged block: its rear sphere
 * cannot run past 29.86 mm without passing through L2. Surfaces 20 and 21 are 11.0 mm
 * (Figure 1 11.05 mm, drawn just below the 11.45 mm rear doublet).
 * 67 mm is published coverage; exact edge transmission is not certified.
 * No aspheres or cover plate. Tilt/shift uses the official ±12 mm / ±10° limits as a rigid
 * movement of the coaxial prescription about a rear-vertex fallback pivot; no hinge is published.
 * Planes use 1e15. Native L2 nd=1.49700/vd=85.00 remains unmodified.
 * Only three authored keyframes are source states; interpolation/distance labels are estimates.
 */

const LENS_DATA = {
  "key": "laowa-55mm-f28-tilt-shift-1x-macro",
  "name": "LAOWA 55mm f/2.8 Tilt-Shift 1× Macro",
  "maker": "Laowa",
  "subtitle": "CN 118671950 A, Example 1 — construction-based product association; coaxial patent states",
  "patentNumber": "CN 118671950 A",
  "patentAuthors": [
    "Dayong Li"
  ],
  "patentAssignees": [
    "Anhui Changgeng Optics Technology Co., Ltd."
  ],
  "patentYear": 2024,
  "elementCount": 14,
  "groupCount": 11,
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
  "gapSagFrac": 0.98,
  "perspectiveControl": {
    // Official Laowa specification (full-frame mounts): shift ±12 mm, tilt ±10°.
    "shiftRangeMm": [-12, 12],
    "tiltRangeDeg": [-10, 10],
    "shiftStepMm": 0.1,
    "tiltStepDeg": 0.1,
    // The patent and Laowa publish no hinge location. The pivot is the infinity-state rear
    // vertex (source back focus 46.8077 mm): a deterministic tracing reference, not the
    // manufactured tilt axis.
    "tiltPivot": {
      "frame": "camera",
      "basis": "rear-vertex-fallback",
      "zOffsetFromImagePlaneMm": -46.8077
    }
  },
  "focalLengthMarketing": 55,
  "focalLengthDesign": 55.0179,
  "apertureMarketing": 2.8,
  "apertureDesign": 2.87,
  "nominalFno": 2.87,
  "closeFocusM": 0.2654694802105739,
  "focusPositions": [
    0,
    0.89097088434001,
    1
  ],
  "publishedStations": {
    "focus": [
      1,
      2
    ]
  },
  "focusDescription": "Floating internal focus; the patent tabulates infinity, 0.5× and 1.0×. G1 fixed. G2 with the stop advances 46.29 mm toward the object and G3 advances 37.92 mm, opening the stop-to-G3 gap from 1.47 to 9.84 mm at constant overall length. The printed 1.0× state computes to −0.96× paraxially at 265 mm object-to-image (Laowa quotes 27 cm). Spacings between the three states are interpolated, not published. All three states are coaxial; the patent gives no tilted or shifted prescription.",
  "specs": [
    "14 ELEMENTS / 11 GROUPS",
    "DESIGN f = 55.02 mm",
    "DESIGN F/2.87",
    "67 mm IMAGE CIRCLE",
    "SHIFT ±12 mm / TILT ±10°",
    "1× MACRO",
    "NO ASPHERES"
  ],
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "diagramLabel": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "fl": -81.26939830280841,
      "glass": "H-FK61 (CDGM coordinate equivalent; supplier unconfirmed)"
    },
    {
      "id": 2,
      "name": "L2",
      "diagramLabel": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.497,
      "vd": 85.0,
      "indexReference": "d",
      "fl": -100.85600044982134,
      "glass": "Unmatched (native nd=1.49700, vd=85.00; supplier unconfirmed)"
    },
    {
      "id": 3,
      "name": "L3",
      "diagramLabel": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.57371,
      "vd": 70.0,
      "indexReference": "d",
      "fl": 68.11556181506324,
      "glass": "Unmatched (native nd=1.57371, vd=70.00; supplier unconfirmed)"
    },
    {
      "id": 4,
      "name": "L4",
      "diagramLabel": "L4",
      "label": "Element 4",
      "type": "Plano-Convex",
      "nd": 1.883,
      "vd": 40.8,
      "indexReference": "d",
      "fl": 107.2462061155153,
      "glass": "883408 — coordinate class; supplier unconfirmed"
    },
    {
      "id": 5,
      "name": "L5",
      "diagramLabel": "L5",
      "label": "Element 5",
      "type": "Positive Meniscus",
      "nd": 1.883,
      "vd": 40.8,
      "indexReference": "d",
      "fl": 120.19580503575837,
      "glass": "883408 — coordinate class; supplier unconfirmed"
    },
    {
      "id": 6,
      "name": "L6",
      "diagramLabel": "L6",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.85561,
      "vd": 23.21,
      "indexReference": "d",
      "fl": -20.536958398763286,
      "glass": "Unmatched (native nd=1.85561, vd=23.21; supplier unconfirmed)",
      "cemented": "D1"
    },
    {
      "id": 7,
      "name": "L7",
      "diagramLabel": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.92286,
      "vd": 20.88,
      "indexReference": "d",
      "fl": 21.130030790231,
      "glass": "923209 — coordinate class; supplier unconfirmed",
      "cemented": "D1"
    },
    {
      "id": 8,
      "name": "L8",
      "diagramLabel": "L8",
      "label": "Element 8",
      "type": "Negative Meniscus",
      "nd": 1.84666,
      "vd": 23.78,
      "indexReference": "d",
      "fl": -30.51911337563579,
      "glass": "H-ZF52 (CDGM coordinate equivalent; supplier unconfirmed)",
      "cemented": "D2"
    },
    {
      "id": 9,
      "name": "L9",
      "diagramLabel": "L9",
      "label": "Element 9",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "fl": 38.591075452639956,
      "glass": "H-FK61 (CDGM coordinate equivalent; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "FK61-class coordinate at a position Laowa's construction diagram marks extra-low dispersion; inferred from the glass family, not a patent designation.",
      "cemented": "D2"
    },
    {
      "id": 10,
      "name": "L10",
      "diagramLabel": "L10",
      "label": "Element 10",
      "type": "Positive Meniscus",
      "nd": 1.78451,
      "vd": 48.06,
      "indexReference": "d",
      "fl": 82.75088324576981,
      "glass": "Unmatched (native nd=1.78451, vd=48.06; supplier unconfirmed)"
    },
    {
      "id": 11,
      "name": "L11",
      "diagramLabel": "L11",
      "label": "Element 11",
      "type": "Negative Meniscus",
      "nd": 1.78346,
      "vd": 32.08,
      "indexReference": "d",
      "fl": -73.18630349498171,
      "glass": "Unmatched (native nd=1.78346, vd=32.08; supplier unconfirmed)"
    },
    {
      "id": 12,
      "name": "L12",
      "diagramLabel": "L12",
      "label": "Element 12",
      "type": "Biconcave Negative",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "fl": -30.121838410732714,
      "glass": "H-FK61 (CDGM coordinate equivalent; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "FK61-class coordinate at a position Laowa's construction diagram marks extra-low dispersion; inferred from the glass family, not a patent designation.",
      "cemented": "D3"
    },
    {
      "id": 13,
      "name": "L13",
      "diagramLabel": "L13",
      "label": "Element 13",
      "type": "Positive Meniscus",
      "nd": 1.53878,
      "vd": 52.52,
      "indexReference": "d",
      "fl": 43.66580878664365,
      "glass": "Unmatched (native nd=1.53878, vd=52.52; supplier unconfirmed)",
      "cemented": "D3"
    },
    {
      "id": 14,
      "name": "L14",
      "diagramLabel": "L14",
      "label": "Element 14",
      "type": "Biconvex Positive",
      "nd": 1.883,
      "vd": 40.8,
      "indexReference": "d",
      "fl": 73.98456759319069,
      "glass": "883408 — coordinate class; supplier unconfirmed"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 20184.5897,
      "d": 1.7,
      "nd": 1.497,
      "elemId": 1,
      "sd": 38.5
    },
    {
      "label": "2",
      "R": 40.3091,
      "d": 17.9119,
      "nd": 1.0,
      "elemId": 0,
      "sd": 29.5
    },
    {
      "label": "3",
      "R": -97.6327,
      "d": 3.0,
      "nd": 1.497,
      "elemId": 2,
      "sd": 32.5
    },
    {
      "label": "4",
      "R": 104.0642,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 32.5
    },
    {
      "label": "5",
      "R": 71.4829,
      "d": 15.6337,
      "nd": 1.57371,
      "elemId": 3,
      "sd": 32.5
    },
    {
      "label": "6",
      "R": -79.3328,
      "d": 47.337,
      "nd": 1.0,
      "elemId": 0,
      "sd": 32.5
    },
    {
      "label": "7",
      "R": 94.6984,
      "d": 3.0,
      "nd": 1.883,
      "elemId": 4,
      "sd": 17
    },
    {
      "label": "8",
      "R": 1000000000000000.0,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 17
    },
    {
      "label": "9",
      "R": 34.9777,
      "d": 3.5,
      "nd": 1.883,
      "elemId": 5,
      "sd": 16
    },
    {
      "label": "10",
      "R": 49.7236,
      "d": 4.919,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16
    },
    {
      "label": "11",
      "R": -90.0223,
      "d": 3.2262,
      "nd": 1.85561,
      "elemId": 6,
      "sd": 15
    },
    {
      "label": "12",
      "R": 22.1941,
      "d": 7.2,
      "nd": 1.92286,
      "elemId": 7,
      "sd": 15
    },
    {
      "label": "13",
      "R": -135.6336,
      "d": 1.2286,
      "nd": 1.0,
      "elemId": 0,
      "sd": 15
    },
    {
      "label": "14",
      "R": 133.5702,
      "d": 1.0,
      "nd": 1.84666,
      "elemId": 8,
      "sd": 14
    },
    {
      "label": "15",
      "R": 21.5766,
      "d": 6.5,
      "nd": 1.497,
      "elemId": 9,
      "sd": 14
    },
    {
      "label": "16",
      "R": -155.3901,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 14
    },
    {
      "label": "17",
      "R": 63.0795,
      "d": 2.4964,
      "nd": 1.78451,
      "elemId": 10,
      "sd": 13
    },
    {
      "label": "18",
      "R": 2187.5692,
      "d": 1.41,
      "nd": 1.0,
      "elemId": 0,
      "sd": 13
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 1.47,
      "nd": 1.0,
      "elemId": 0,
      "sd": 10.927100395330495
    },
    {
      "label": "20",
      "R": 48.1696,
      "d": 1.0,
      "nd": 1.78346,
      "elemId": 11,
      "sd": 11
    },
    {
      "label": "21",
      "R": 25.9391,
      "d": 6.3864,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11
    },
    {
      "label": "22",
      "R": -54.2043,
      "d": 1.0,
      "nd": 1.497,
      "elemId": 12,
      "sd": 11.5
    },
    {
      "label": "23",
      "R": 20.8096,
      "d": 3.5,
      "nd": 1.53878,
      "elemId": 13,
      "sd": 11.5
    },
    {
      "label": "24",
      "R": 169.5982,
      "d": 6.4353,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.5
    },
    {
      "label": "25",
      "R": 264.9797,
      "d": 3.0,
      "nd": 1.883,
      "elemId": 14,
      "sd": 16
    },
    {
      "label": "26",
      "R": -86.2443,
      "d": 46.8077,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16
    }
  ],
  "asph": {},
  "var": {
    "6": [
      47.337,
      27.0548,
      1.05
    ],
    "STO": [
      1.47,
      6.7287,
      9.8404
    ],
    "26": [
      46.8077,
      61.8312,
      84.7243
    ]
  },
  "varLabels": [
    [
      "6",
      "D6 (G1–G2)"
    ],
    [
      "STO",
      "D19 (STO–G3)"
    ],
    [
      "26",
      "BF"
    ]
  ],
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "6"
    },
    {
      "text": "G1a",
      "fromSurface": "1",
      "toSurface": "4"
    },
    {
      "text": "G2",
      "fromSurface": "7",
      "toSurface": "18"
    },
    {
      "text": "G3",
      "fromSurface": "20",
      "toSurface": "26"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "11",
      "toSurface": "13"
    },
    {
      "text": "D2",
      "fromSurface": "14",
      "toSurface": "16"
    },
    {
      "text": "D3",
      "fromSurface": "22",
      "toSurface": "24"
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
