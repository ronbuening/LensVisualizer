import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * GB 376,044 A, sole example: the complete-lens table on p. 3 and drawing on p. 4.
 * All patent radii, thicknesses and airspaces are converted from inches to millimetres
 * by a uniform factor of 25.4; no further optical scaling or fitting is applied.
 * The stop at the midpoint of SII, all semi-diameters and the paraxial back focus
 * of 288.9792920995148 mm are inferred, not printed. L5/L6 use a common 22 mm
 * semi-diameter to follow the drawing; the other inferred rims are retained.
 * L5/L7/L8 indices and Abbe numbers are inferred from repeated Chance identifiers
 * in the table. The printed sodium-D indices are used with the d-line convention;
 * the patent supplies no measured spectral curves.
 * Only the complete lens at infinity is modeled; separate-member operating modes
 * and a minimum focus distance are not specified.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "cooke-series-xv-12-25in-f68",
  "maker": "Cooke",
  "name": "COOKE SERIES XV 12¼ in f/6.8",
  "subtitle": "GB 376,044 A, complete lens — Cooke Series XV Triple Convertible",
  "visible": true,
  "catalog": {
    "lensMounts": ["large-format-lens-board"],
    "imageFormat": "8x10",
    "specs": [
      "8 ELEMENTS / 4 GROUPS",
      "ALL SPHERICAL",
      "f/6.8",
      "CONVERTIBLE"
    ],
    "elementCount": 8,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 311.15,
      "design": 313.56
    },
    "fNumber": {
      "marketing": 6.8,
      "design": 6.8
    }
  },
  "source": {
    "patentNumber": "GB 376,044 A",
    "example": { "label": "Sole example", "id": null },
    "patentYear": 1932,
    "authors": [
      "Horace William Lee"
    ],
    "assignees": [
      "Kapella Limited"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "role": "Negative front element of the front member's outer doublet",
      "cemented": "C1",
      "nd": 1.5472,
      "vd": 45.8,
      "indexReference": "d",
      "glass": "Unmatched (nD 1.5472 / V 45.8, Chance 458)"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "role": "Positive rear element of the front member's outer doublet",
      "cemented": "C1",
      "nd": 1.5186,
      "vd": 60.3,
      "indexReference": "d",
      "glass": "Unmatched (nD 1.5186 / V 60.3, Chance 9322)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "role": "Positive front element of the front member's inner doublet",
      "cemented": "C2",
      "nd": 1.6437,
      "vd": 48.3,
      "indexReference": "d",
      "glass": "Unmatched (nD 1.6437 / V 48.3, not yet in Chance's catalogue)"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "role": "Negative rear element of the front member's inner doublet",
      "cemented": "C2",
      "nd": 1.529,
      "vd": 51.6,
      "indexReference": "d",
      "glass": "Unmatched (nD 1.5290 / V 51.6, Chance 7863)"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "role": "Negative front element of the rear member's inner doublet",
      "cemented": "C3",
      "nd": 1.529,
      "vd": 51.6,
      "indexReference": "d",
      "glass": "Unmatched (nD 1.5290 / V 51.6, Chance 7863)"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "role": "Positive rear element of the rear member's inner doublet",
      "cemented": "C3",
      "nd": 1.6437,
      "vd": 48.3,
      "indexReference": "d",
      "glass": "Unmatched (nD 1.6437 / V 48.3, not yet in Chance's catalogue)"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Positive Meniscus",
      "role": "Positive front element of the rear member's outer doublet",
      "cemented": "C4",
      "nd": 1.5186,
      "vd": 60.3,
      "indexReference": "d",
      "glass": "Unmatched (nD 1.5186 / V 60.3, Chance 9322)"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Negative Meniscus",
      "role": "Negative rear element of the rear member's outer doublet",
      "cemented": "C4",
      "nd": 1.5472,
      "vd": 45.8,
      "indexReference": "d",
      "glass": "Unmatched (nD 1.5472 / V 45.8, Chance 458)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 93.98,
      "d": 4.064,
      "sd": 30.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 39.116,
      "d": 9.652,
      "sd": 30.5,
      "medium": 2
    },
    {
      "label": "3",
      "R": 81.28,
      "d": 3.2004,
      "sd": 30.5
    },
    {
      "label": "4",
      "R": 79.9084,
      "d": 12.8778,
      "sd": 30.0,
      "medium": 3
    },
    {
      "label": "5",
      "R": -241.681,
      "d": 3.2258,
      "sd": 30.0,
      "medium": 4
    },
    {
      "label": "6",
      "R": 83.82,
      "d": 5.715,
      "sd": 30.0
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 5.715
    },
    {
      "label": "7",
      "R": -62.23,
      "d": 2.413,
      "sd": 22,
      "medium": 5
    },
    {
      "label": "8",
      "R": 180.0098,
      "d": 9.5758,
      "sd": 22,
      "medium": 6
    },
    {
      "label": "9",
      "R": -59.2074,
      "d": 2.413,
      "sd": 22
    },
    {
      "label": "10",
      "R": -60.198,
      "d": 7.1882,
      "sd": 22.5,
      "medium": 7
    },
    {
      "label": "11",
      "R": -29.21,
      "d": 3.048,
      "sd": 22.5,
      "medium": 8
    },
    {
      "label": "12",
      "R": -69.85,
      "d": 288.9792920995148,
      "sd": 22.5
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only; only the complete lens is modeled."
  },
  "aperture": {
    "nominalFNumber": 6.8,
    "fStops": [
      6.8,
      8,
      11,
      16,
      22,
      32
    ],
    "maxFNumber": 32
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 55,
    "maxTraceFieldDeg": 27.5
  },
  "doublets": [
    { "text": "C1", "fromSurface": "1", "toSurface": "3" },
    { "text": "C2", "fromSurface": "4", "toSurface": "6" },
    { "text": "C3", "fromSurface": "7", "toSurface": "9" },
    { "text": "C4", "fromSurface": "10", "toSurface": "12" }
  ],
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
