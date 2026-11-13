import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * DE 436,260 C, Example II, page 2 and Abb. 2 on page 4 of the complete four-page patent.
 * Uniform scale factor 1.05 maps the patent's f = 100 mm normalisation to the Ernostar
 * 10.5 cm f/1.8 of the Ermanox 4.5 x 6 cm. Its public section shares Example II's 6/4
 * layout; the exact factory radii, glasses and clear apertures are not established.
 * The 8.5, 12.5 and 16.5 cm f/1.8 lenses share the design family. All radii, thicknesses,
 * gaps (including the image interval) and inferred rims use that same factor in mm;
 * no units conversion is needed. Angles, nD, nu and f-numbers are unchanged. The catalog
 * design focal length is the computed paraxial EFL rounded to two decimals, 104.71 mm.
 * The printed nD and nu pairs are represented as nd and conventional Vd; the spectral
 * convention is discussed in the analysis. No inventor is printed; Ludwig Bertele is
 * retained as a historical attribution, not a name transcribed from this patent.
 * The printed stop split 5.87 + 6.62 = 12.49 mm becomes 6.1635 + 6.951 = 13.1145 mm;
 * the engine derives its radius for f/1.8, so it scales with the prescription.
 * All optical semi-diameters are inferred. The earlier surface-7 correction from 17.5
 * to 18.4 mm scales to 19.32 mm; all other rims receive the same factor. The calculated
 * paraxial back-focus interval 56.83526107 mm becomes 59.677024 mm, not a printed value.
 * Only infinity is modeled; closeFocusM = 1e15 is a placeholder, and the range to f/22
 * is authored. The source field remains approximately 50 degrees.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "ernemann-ernostar-10-5cm-f18",
  "maker": "Ernemann",
  "name": "ERNEMANN ERNOSTAR 10.5cm f/1.8",
  "subtitle": "DE 436,260 C, Example II — Ernostar 10.5cm f/1.8 of the Ermanox",
  "visible": true,
  "catalog": {
    "lensMounts": ["fixed-lens-camera"],
    "imageFormat": "645",
    "specs": ["6 ELEMENTS / 4 GROUPS", "ALL SPHERICAL", "f/1.8"],
    "elementCount": 6,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 105,
      "design": 104.71
    },
    "fNumber": {
      "marketing": 1.8,
      "design": 1.8
    }
  },
  "source": {
    "patentNumber": "DE 436,260 C",
    "patentYear": 1926,
    "example": {
      "id": "2",
      "label": "Example II"
    },
    "authors": [
      "Ludwig Bertele"
    ],
    "assignees": [
      "Ernemann-Werke AG"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "role": "Positive front singlet ahead of the cemented triplet.",
      "nd": 1.5638,
      "vd": 60.75,
      "indexReference": "d",
      "glass": "Schott N-SK11"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "role": "Positive front element of the cemented second group.",
      "cemented": "C1",
      "nd": 1.6053,
      "vd": 59.4,
      "indexReference": "d",
      "glass": "Unmatched (nD 1.6053 / V 59.4)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "role": "Positive meniscus between the two other glasses of the cemented second group.",
      "cemented": "C1",
      "nd": 1.6485,
      "vd": 33.8,
      "indexReference": "d",
      "glass": "Unmatched (nD 1.6485 / V 33.8)"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "role": "Negative rear element of the cemented second group.",
      "cemented": "C1",
      "nd": 1.627,
      "vd": 39,
      "indexReference": "d",
      "glass": "Unmatched (nD 1.6270 / V 39.0)"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "role": "Negative singlet immediately ahead of the diaphragm.",
      "nd": 1.6223,
      "vd": 36,
      "indexReference": "d",
      "glass": "Unmatched (nD 1.6223 / V 36.0)"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "role": "Positive rear singlet behind the diaphragm.",
      "nd": 1.622,
      "vd": 53.15,
      "indexReference": "d",
      "glass": "Unmatched (nD 1.6220 / V 53.15)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 52.71,
      "d": 7.623,
      "sd": 29.4,
      "medium": 1
    },
    {
      "label": "2",
      "R": 190.575,
      "d": 0.5565,
      "sd": 29.4
    },
    {
      "label": "3",
      "R": 47.67,
      "d": 12.327,
      "sd": 26.25,
      "medium": 2
    },
    {
      "label": "4",
      "R": -112.14,
      "d": 7.287,
      "sd": 26.25,
      "medium": 3
    },
    {
      "label": "5",
      "R": -43.68,
      "d": 1.1235,
      "sd": 26.25,
      "medium": 4
    },
    {
      "label": "6",
      "R": 96.6,
      "d": 4.683,
      "sd": 26.25
    },
    {
      "label": "7",
      "R": -187.95,
      "d": 1.1235,
      "sd": 19.32,
      "medium": 5
    },
    {
      "label": "8",
      "R": 31.92,
      "d": 6.1635,
      "sd": 18.375
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 6.951
    },
    {
      "label": "9",
      "R": 89.67,
      "d": 5.607,
      "sd": 21.0,
      "medium": 6
    },
    {
      "label": "10",
      "R": -89.67,
      "d": 59.677024,
      "sd": 21.0
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only; the patent provides no focusing data. Production Ermanox cameras used helical lens focusing."
  },
  "aperture": {
    "nominalFNumber": 1.8,
    "fStops": [
      1.8,
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
  "groups": [
    { "text": "G1", "fromSurface": "1", "toSurface": "2" },
    { "text": "G2", "fromSurface": "3", "toSurface": "6" },
    { "text": "G3", "fromSurface": "7", "toSurface": "8" },
    { "text": "G4", "fromSurface": "9", "toSurface": "10" }
  ],
  "doublets": [
    { "text": "C1 (TRIPLET)", "fromSurface": "3", "toSurface": "6" }
  ],
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
