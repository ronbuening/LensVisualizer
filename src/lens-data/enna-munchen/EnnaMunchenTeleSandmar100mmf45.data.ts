import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,631,497 A, sole numerical example and repeated claim 3 table (PDF page 3).
 * 100 mm f/4.5 prescription; scale factor 1, with dimensions already in mm
 * and no units conversion. All seven radii, six glass/air intervals and four
 * sodium-D index/Abbe pairs are retained as printed.
 * The stop's 14.5/14.5 mm split of the 29 mm gap is inferred from "substantially
 * midway". The 15.1 mm front and 9 mm rear semi-diameters are inferred, with
 * square rims retained. The sole figure suggests about 11.1/6.4 mm at the axial
 * scale (arc-scale uncertainty about 6%); larger caps preserve the traced field
 * and limit corner-light loss to 2.7 percentage points against the starting rims.
 * Real-ray checks pass the f/4.5 axial beam and full-frame chief ray. The final image interval
 * is calculated back focus, not a printed source value. Only infinity is modeled.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "enna-munchen-tele-sandmar-100mm-f45",
  "maker": "Enna München",
  "name": "ENNA MÜNCHEN TELE-SANDMAR 100mm f/4.5",
  "subtitle": "US 2,631,497 A, sole example — Tele-Sandmar for the Argus C3",
  "visible": true,
  "catalog": {
    "lensMounts": ["argus-c"],
    "imageFormat": "135-full-frame",
    "specs": ["4 ELEMENTS / 3 GROUPS", "ALL SPHERICAL", "f/4.5–22", "TELEPHOTO"],
    "elementCount": 4,
    "groupCount": 3,
    "focalLengthMm": {
      "marketing": 100,
      "design": 100
    },
    "fNumber": {
      "marketing": 4.5,
      "design": 4.5
    }
  },
  "source": {
    "patentNumber": "US 2,631,497 A",
    "example": { "label": "Sole example", "id": null },
    "patentYear": 1953,
    "authors": [
      "Franz Schlegel"
    ],
    "assignees": [
      "Harry J. Graw"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "role": "Positive front element of the cemented doublet.",
      "cemented": "C1",
      "focalLengthMm": 25.77,
      "nd": 1.62398,
      "vd": 47,
      "indexReference": "D",
      "glass": "E-BAF8 (spectral proxy; patent nD 1.62398 / V 47.0; supplier and melt unspecified)"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "role": "Negative element of the positive front doublet.",
      "cemented": "C1",
      "focalLengthMm": -34.86,
      "nd": 1.74066,
      "vd": 27.2,
      "indexReference": "D",
      "glass": "Unmatched (nD 1.74066 / V 27.2)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "role": "Negative front element of the air-spaced rear pair.",
      "focalLengthMm": -25.54,
      "nd": 1.61008,
      "vd": 46,
      "indexReference": "D",
      "glass": "H-BaF6 (spectral proxy; patent nD 1.61008 / V 46.0; supplier and melt unspecified)"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Plano-Convex Positive",
      "role": "Positive rear singlet with a flat front surface.",
      "focalLengthMm": 37.99,
      "nd": 1.72719,
      "vd": 28,
      "indexReference": "D",
      "glass": "Unmatched (nD 1.72719 / V 28.0)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 24.01,
      "d": 10,
      "sd": 15.1,
      "medium": 1
    },
    {
      "label": "2",
      "R": -40.877,
      "d": 1.2,
      "sd": 15.1,
      "medium": 2
    },
    {
      "label": "3",
      "R": 70.942,
      "d": 14.5,
      "sd": 15.1
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 14.5
    },
    {
      "label": "4",
      "R": -13.395,
      "d": 0.8,
      "sd": 9,
      "medium": 3
    },
    {
      "label": "5",
      "R": -97.629,
      "d": 0.03,
      "sd": 9
    },
    {
      "label": "6",
      "R": "flat",
      "d": 1.7,
      "sd": 9,
      "medium": 4
    },
    {
      "label": "7",
      "R": -27.623,
      "d": 39.07198037168,
      "sd": 9
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only; the production lens couples to the Argus C3 rangefinder."
  },
  "aperture": {
    "nominalFNumber": 4.5,
    "fStops": [
      4.5,
      5.6,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22
  },
  "projection": {
    "kind": "rectilinear"
  },
  "doublets": [
    { "text": "C1", "fromSurface": "1", "toSurface": "3" }
  ],
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
