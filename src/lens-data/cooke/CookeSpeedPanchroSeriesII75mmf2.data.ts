import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 2,502,509 A, Example II: normalized f = 1, relative aperture f/1.86.
 * Patent dimensionless radii and separations are converted to millimetres at ×75.
 * Indices and Abbe numbers are retained. The 11.7° half-field is LEN. 45's 23.4°
 * silent-frame diagonal coverage.
 * Front/rear clear semi-diameters 19.05 / 11.20 mm follow Taylor-Hobson LEN. 45;
 * the other rims use Fig. 2 proportions. The printed rear rim limits the f/1.86
 * design aperture to about f/1.97, so the working aperture is the marketed f/2.
 * The iris position is inferred: 5.279414 mm behind L4, which leaves about
 * 0.5 mm clearance to L4's rim, inside the unchanged source air gap. The
 * terminal image distance is calculated paraxial back focus, not a source
 * measurement.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "cooke-speed-panchro-series-ii-75mm-f2",
  "maker": "Cooke",
  "name": "COOKE SPEED PANCHRO SERIES II 75mm f/2",
  "subtitle": "US 2,502,509 A, Example II — Speed Panchro Series II 75mm f/2, scaled ×75",
  "visible": true,
  "catalog": {
    "specs": [
      "6 ELEMENTS / 4 GROUPS",
      "ALL SPHERICAL",
      "DESIGN F/1.86",
      "f/2–22"
    ],
    "elementCount": 6,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 75,
      "design": 75.0
    },
    "fNumber": {
      "marketing": 2,
      "design": 1.86
    },
    "imageFormat": "35mm-cinema"
  },
  "source": {
    "patentNumber": "US 2,502,509 A",
    "patentYear": 1950,
    "authors": [
      "Gordon Henry Cook"
    ],
    "assignees": [
      "Taylor, Taylor & Hobson Limited"
    ],
    "example": {
      "label": "Example II",
      "id": "2"
    }
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "focalLengthMm": 110.02,
      "label": "Element 1",
      "type": "Positive Meniscus",
      "role": "Positive front singlet ahead of the first cemented doublet.",
      "nd": 1.6909,
      "vd": 54.9,
      "indexReference": "D",
      "glass": "J-LAK9 (HIKARI catalog equivalent; production supplier unspecified)"
    },
    {
      "id": 2,
      "name": "L2",
      "focalLengthMm": 45.62,
      "label": "Element 2",
      "type": "Biconvex Positive",
      "role": "Positive front element of cemented doublet C1.",
      "nd": 1.6909,
      "vd": 54.9,
      "indexReference": "D",
      "glass": "J-LAK9 (HIKARI catalog equivalent; production supplier unspecified)",
      "cemented": "C1"
    },
    {
      "id": 3,
      "name": "L3",
      "focalLengthMm": -71.59,
      "label": "Element 3",
      "type": "Biconcave Negative",
      "role": "Negative rear element of cemented doublet C1.",
      "nd": 1.6227,
      "vd": 36,
      "indexReference": "D",
      "glass": "TIM11 (spectral proxy; patent nD 1.6227 / V 36.0; supplier and melt unspecified)",
      "cemented": "C1"
    },
    {
      "id": 4,
      "name": "L4",
      "focalLengthMm": -32.57,
      "label": "Element 4",
      "type": "Biconcave Negative",
      "role": "Negative singlet between cemented doublet C1 and the iris.",
      "nd": 1.6535,
      "vd": 33.5,
      "indexReference": "D",
      "glass": "FD9 (spectral proxy; patent nD 1.6535 / V 33.5; supplier and melt unspecified)"
    },
    {
      "id": 5,
      "name": "L5",
      "focalLengthMm": 24.38,
      "label": "Element 5",
      "type": "Biconvex Positive",
      "role": "Positive front element of rear cemented doublet C2.",
      "nd": 1.6909,
      "vd": 54.9,
      "indexReference": "D",
      "glass": "J-LAK9 (HIKARI catalog equivalent; production supplier unspecified)",
      "cemented": "C2"
    },
    {
      "id": 6,
      "name": "L6",
      "focalLengthMm": -48.37,
      "label": "Element 6",
      "type": "Negative Meniscus",
      "role": "Negative rear element of cemented doublet C2.",
      "nd": 1.589,
      "vd": 61.4,
      "indexReference": "D",
      "glass": "N-SK5 (SCHOTT catalog equivalent; production supplier unspecified)",
      "cemented": "C2"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 56.79,
      "d": 7.44,
      "sd": 19.05,
      "medium": 1
    },
    {
      "label": "2",
      "R": 212.535,
      "d": 0.15,
      "sd": 19.05
    },
    {
      "label": "3",
      "R": 36.2925,
      "d": 10.0425,
      "sd": 17.5,
      "medium": 2
    },
    {
      "label": "4",
      "R": -212.535,
      "d": 3.72,
      "sd": 17.5,
      "medium": 3
    },
    {
      "label": "5",
      "R": 56.79,
      "d": 2.9775,
      "sd": 17.5
    },
    {
      "label": "6",
      "R": -212.535,
      "d": 2.9775,
      "sd": 14.3,
      "medium": 4
    },
    {
      "label": "7",
      "R": 23.7825,
      "d": 5.279414,
      "sd": 14.3
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 3.645586
    },
    {
      "label": "8",
      "R": 68.2425,
      "d": 11.16,
      "sd": 15.0,
      "medium": 5
    },
    {
      "label": "9",
      "R": -20.865,
      "d": 3.5325,
      "sd": 15.0,
      "medium": 6
    },
    {
      "label": "10",
      "R": -82.8675,
      "d": 42.716158,
      "sd": 11.2
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only; the patent gives no close-focus spacings or focusing travel."
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
    "fullFieldDeg": 23.4,
    "maxTraceFieldDeg": 11.7
  },
  "layout": {
    "yScFill": 0.7
  },
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "3",
      "toSurface": "5"
    },
    {
      "text": "C2",
      "fromSurface": "8",
      "toSurface": "10"
    }
  ]
} satisfies LensDataV2Input;

export default LENS_DATA;
