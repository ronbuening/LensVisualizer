import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 2,231,699 A (Harold F. Bennett, Eastman Kodak Company, granted 1941), Figure 1 example: a four-element,
 * two-group telephoto objective, f = 100 mm, f/3.8. Radii, thicknesses, the 39.5 mm group separation and the sodium-D
 * indices and Abbe numbers are copied unchanged at the patent's own f = 100 mm scale (no scaling).
 *
 * Inferred, not printed: the stop sits at the middle of the 39.5 mm air space (the patent shows no diaphragm); the clear
 * semi-diameters (13.5 mm front, 10 mm rear) are estimates; the image plane is the computed paraxial back focus at the
 * D line (33.45 mm), since the patent prints no back focus. No production lens is identified with this example.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "kodak-bennett-100-f38-us2231699-figure1-patent-reference",
  "maker": "Kodak",
  "name": "KODAK BENNETT 100mm f/3.8 PATENT REFERENCE",
  "subtitle": "1939 DESIGN / 1941 GRANT \u2014 NO PRODUCTION MATCH",
  "visible": false,
  "catalog": {
    "specs": [
      "4 ELEMENTS / 2 GROUPS",
      "PATENT-ONLY REFERENCE",
      "ESTIMATED STOP AND RIMS",
      "INFINITY ONLY"
    ],
    "elementCount": 4,
    "groupCount": 2,
    "focalLengthMm": {
      "design": 100.06
    },
    "fNumber": {
      "design": 3.8
    }
  },
  "source": {
    "patentNumber": "US 2,231,699 A",
    "example": {
      "label": "Figure 1",
      "id": "1"
    },
    "patentYear": 1941,
    "authors": [
      "Harold F. Bennett"
    ],
    "assignees": [
      "Eastman Kodak Company"
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.498,
      "vd": 67,
      "indexReference": "D",
      "cemented": "C1",
      "role": "Positive crown of the front cemented doublet."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Plano-concave Negative",
      "nd": 1.664,
      "vd": 35.9,
      "indexReference": "D",
      "cemented": "C1",
      "role": "Negative flint of the front cemented doublet, with a flat rear face."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.516,
      "vd": 64.1,
      "indexReference": "D",
      "cemented": "C2",
      "role": "Negative crown at the front of the rear cemented doublet."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.639,
      "vd": 55.5,
      "indexReference": "D",
      "cemented": "C2",
      "role": "Higher-index positive rear element; its cemented face R5 carries the patent's distortion-reducing index step."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 29.18,
      "d": 7.3,
      "sd": 13.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": -47.45,
      "d": 2.1,
      "sd": 13.5,
      "medium": 2
    },
    {
      "label": "3",
      "R": "flat",
      "d": 19.75,
      "sd": 13.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 19.75
    },
    {
      "label": "4",
      "R": -16.45,
      "d": 2.9,
      "sd": 10,
      "medium": 3
    },
    {
      "label": "5",
      "R": 52.5,
      "d": 5.5,
      "sd": 10,
      "medium": 4
    },
    {
      "label": "6",
      "R": -33.58,
      "d": 33.452186952425265,
      "sd": 10
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity-only patent reference. No sourced finite-focus motion."
  },
  "aperture": {
    "nominalFNumber": 3.8,
    "fStops": [
      3.8,
      5.6,
      8,
      11,
      16,
      22
    ]
  },
  "groups": [],
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "1",
      "toSurface": "3"
    },
    {
      "text": "C2",
      "fromSurface": "4",
      "toSurface": "6"
    }
  ],
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
