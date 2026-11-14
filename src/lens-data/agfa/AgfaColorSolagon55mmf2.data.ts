import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,784,646, Example 1 (the two printed tables on PDF pp. 3–4), normalized to f = 1.
 * All printed radii, thicknesses and air spaces are multiplied by 55 to convert the
 * normalized source lengths to millimetres; the d-line indices and Abbe values are unchanged.
 * The source does not print clear semi-diameters, an exact stop station or back focus.
 * Rims are inferred; S3/S4 are raised together from 12.5 to 12.9 mm to clear the axial f/2 beam.
 * The central 13.1802 mm air space is split at an inferred stop,
 * 8.376374101204 mm after S5 and 4.803825898796 mm before S6. The iris radius is derived
 * from f/2, and the unprinted final gap is the calculated paraxial back focus.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "agfa-color-solagon-55mm-f2",
  "maker": "Agfa",
  "name": "AGFA COLOR-SOLAGON 55mm f/2",
  "subtitle": "US 2,784,646, Example 1 — Color-Solagon 55mm f/2 of the Agfa Ambiflex, scaled ×55",
  "visible": true,
  "catalog": {
    "imageFormat": "135-full-frame",
    "specs": [
      "6 ELEMENTS / 4 GROUPS",
      "ALL SPHERICAL",
      "F/2"
    ],
    "elementCount": 6,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 55,
      "design": 55
    },
    "fNumber": {
      "marketing": 2,
      "design": 2
    }
  },
  "source": {
    "patentNumber": "US 2,784,646",
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "patentYear": 1957,
    "authors": [
      "Theodor Brendel",
      "Hans Lautenbacher"
    ],
    "assignees": [
      "Agfa Camera-Werk AG"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "role": "Front positive singlet; begins convergence before the front cemented component.",
      "nd": 1.72253,
      "vd": 37.8,
      "indexReference": "d",
      "glass": "Unmatched (nd 1.72253 / νd 37.8)"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Plano-Convex Positive",
      "role": "Positive member of the front cemented component; plane rear cemented face.",
      "cemented": "C1",
      "nd": 1.66972,
      "vd": 47.4,
      "indexReference": "d",
      "glass": "Unmatched (nd 1.66972 / νd 47.4)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Plano-Concave Negative",
      "role": "Negative member of the front cemented component; concave rear face toward the stop.",
      "cemented": "C1",
      "nd": 1.65456,
      "vd": 33.9,
      "indexReference": "d",
      "glass": "Unmatched (nd 1.65456 / νd 33.9)"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Plano-Concave Negative",
      "role": "Negative member of the rear cemented component; concave front face toward the stop.",
      "cemented": "C2",
      "nd": 1.69915,
      "vd": 30.1,
      "indexReference": "d",
      "glass": "Unmatched (nd 1.69915 / νd 30.1)"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Plano-Convex Positive",
      "role": "Positive member of the rear cemented component; plane front cemented face.",
      "cemented": "C2",
      "nd": 1.69086,
      "vd": 54.7,
      "indexReference": "d",
      "glass": "Unmatched (nd 1.69086 / νd 54.7)"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "role": "Rear positive singlet; completes convergence toward the image plane.",
      "nd": 1.72253,
      "vd": 37.8,
      "indexReference": "d",
      "glass": "Unmatched (nd 1.72253 / νd 37.8)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 43.00395,
      "d": 3.839,
      "sd": 20.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": 122.9591,
      "d": 0.0583,
      "sd": 20.0
    },
    {
      "label": "3",
      "R": 18.8804,
      "d": 5.87455,
      "sd": 12.9,
      "medium": 2
    },
    {
      "label": "4",
      "R": "flat",
      "d": 0.9889,
      "sd": 12.9,
      "medium": 3
    },
    {
      "label": "5",
      "R": 13.9832,
      "d": 8.376374101204,
      "sd": 12.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 4.803825898796
    },
    {
      "label": "6",
      "R": -18.0312,
      "d": 4.94395,
      "sd": 11.5,
      "medium": 4
    },
    {
      "label": "7",
      "R": "flat",
      "d": 3.2923,
      "sd": 11.5,
      "medium": 5
    },
    {
      "label": "8",
      "R": -24.2605,
      "d": 0.20955,
      "sd": 11.5
    },
    {
      "label": "9",
      "R": 333.5409,
      "d": 3.2923,
      "sd": 14.5,
      "medium": 6
    },
    {
      "label": "10",
      "R": -43.27125,
      "d": 39.88816497223844,
      "sd": 14.5
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity focus only; the patent gives no close-focus spacings or focus travel."
  },
  "aperture": {
    "nominalFNumber": 2,
    "fStops": [
      2,
      2.8,
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
    "fullFieldDeg": 50,
    "maxTraceFieldDeg": 25
  },
  "doublets": [
    { "text": "C1", "fromSurface": "3", "toSurface": "5" },
    { "text": "C2", "fromSurface": "6", "toSurface": "8" }
  ],
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
