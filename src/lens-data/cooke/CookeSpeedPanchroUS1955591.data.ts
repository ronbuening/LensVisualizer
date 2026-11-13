import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,955,591 A, sole numerical example: a 1-inch f/2 lens for 16 mm motion-picture cameras with a 35-degree field.
 * Cooke's manufacturer history links this patent to the Speed Panchro family; it does not identify this example
 * as a specific retail lens.
 *
 * All radii, thicknesses and air gaps are converted from inches to millimetres by multiplying by 25.4, without
 * further scaling. The calculated paraxial EFL is 25.385 mm; no focal-length fitting is applied.
 *
 * INFERRED: the iris lies midway through the 0.22-inch central air gap, 2.794 mm from either adjacent surface;
 * its radius is derived for f/2. All semi-diameters are inferred. S3 and S4 have radii of 6 mm and 5.1 mm to pass
 * the axial beam; the patent figure suggests approximately 6.9 mm for the front-doublet outer rim. The inferred
 * rims differ from the drawing and are not measured mechanical apertures. The final 17.2312996905702 mm
 * image interval is calculated paraxial back focus, not a printed patent value. Only infinity focus is modeled.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "cooke-speed-panchro-us1955591",
  "maker": "Cooke",
  "name": "COOKE SPEED PANCHRO f/2 (US 1,955,591 Design)",
  "subtitle": "US 1,955,591 A, sole example — Speed Panchro family design for 16 mm",
  "visible": true,
  "catalog": {
    "specs": [
      "6 ELEMENTS / 4 GROUPS",
      "ALL SPHERICAL",
      "f/2"
    ],
    "elementCount": 6,
    "groupCount": 4,
    "imageFormat": "16mm-cinema",
    "focalLengthMm": {
      "marketing": 25.4,
      "design": 25.385
    },
    "fNumber": {
      "marketing": 2,
      "design": 2
    }
  },
  "source": {
    "patentNumber": "US 1,955,591 A",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1934,
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
      "type": "Positive Meniscus",
      "role": "Positive front singlet",
      "nd": 1.61,
      "vd": 53.3,
      "indexReference": "d",
      "glass": "Unmatched (Chance 8894, nD 1.6100 / V 53.3)"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "role": "Positive front element of the front cemented pair",
      "cemented": "C1",
      "nd": 1.615,
      "vd": 56.1,
      "indexReference": "d",
      "glass": "Unmatched (Chance 3265, nD 1.6150 / V 56.1)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "role": "Negative rear element of the front cemented pair",
      "cemented": "C1",
      "nd": 1.6134,
      "vd": 36.9,
      "indexReference": "d",
      "glass": "Unmatched (Chance 4743, nD 1.6134 / V 36.9)"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "role": "Negative front element of the rear cemented pair",
      "cemented": "C2",
      "nd": 1.6469,
      "vd": 33.7,
      "indexReference": "d",
      "glass": "Unmatched (Chance 337, nD 1.6469 / V 33.7)"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "role": "Positive rear element of the rear cemented pair",
      "cemented": "C2",
      "nd": 1.6437,
      "vd": 48.3,
      "indexReference": "d",
      "glass": "Unmatched (Chance unnumbered new glass, nD 1.6437 / V 48.3)"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "role": "Positive rear singlet",
      "nd": 1.6234,
      "vd": 56.3,
      "indexReference": "d",
      "glass": "Unmatched (Chance 6665, nD 1.6234 / V 56.3)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 19.4564,
      "d": 2.032,
      "sd": 9.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": 100.2792,
      "d": 0.127,
      "sd": 9.0
    },
    {
      "label": "3",
      "R": 10.1854,
      "d": 3.81,
      "sd": 6.0,
      "medium": 2
    },
    {
      "label": "4",
      "R": 26.289,
      "d": 1.1176,
      "sd": 5.1,
      "medium": 3
    },
    {
      "label": "5",
      "R": 6.5278,
      "d": 2.794,
      "sd": 5.0
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.794
    },
    {
      "label": "6",
      "R": -7.874,
      "d": 1.143,
      "sd": 5.0,
      "medium": 4
    },
    {
      "label": "7",
      "R": 12.7,
      "d": 3.9878,
      "sd": 5.0,
      "medium": 5
    },
    {
      "label": "8",
      "R": -10.541,
      "d": 0.127,
      "sd": 5.0
    },
    {
      "label": "9",
      "R": 35.56,
      "d": 2.0574,
      "sd": 7.0,
      "medium": 6
    },
    {
      "label": "10",
      "R": -25.654,
      "d": 17.2312996905702,
      "sd": 7.0
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only; the patent supplies no finite-focus spacings or focusing mechanism."
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
    "fullFieldDeg": 35,
    "maxTraceFieldDeg": 17.5
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
