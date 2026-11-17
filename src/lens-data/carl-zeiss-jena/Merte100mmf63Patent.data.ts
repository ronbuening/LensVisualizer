import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 1,485,515 A (Willy Merté, assigned to the firm of Carl Zeiss, Jena; granted 1924), sole numerical example:
 * a four-element telephoto objective, f/6.3.
 * Radii, thicknesses, air spaces and sodium-D indices are transcribed as printed for focal length 100 and read as
 * millimetres; no scale factor is applied.
 * The patent prints nD and nG′ indices but no Abbe numbers, so no νd is authored and the model is monochromatic.
 * The diaphragm position is printed: the air space is given as b2 = 5.66 behind r4 and b3 = 18.25 ahead of r5.
 * Inferred: the stop diameter (from f/6.3), all clear semi-diameters, and the back focus (computed paraxial value).
 * Infinity focus only; the patent gives no close-focus data.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "zeiss-merte-100-f63-us1485515-patent-reference",
  "maker": "Carl Zeiss Jena",
  "name": "ZEISS MERTÉ 100mm f/6.3 PATENT REFERENCE",
  "subtitle": "US 1,485,515 \u2014 MONOCHROMATIC SODIUM D",
  "visible": false,
  "catalog": {
    "specs": [
      "4 ELEMENTS / 3 GROUPS",
      "PATENT-ONLY MONOCHROME REFERENCE",
      "NO RETAIL FOCAL-LENGTH IDENTITY",
      "ESTIMATED CLEAR APERTURES"
    ],
    "elementCount": 4,
    "groupCount": 3,
    "focalLengthMm": {
      "design": 99.98
    },
    "fNumber": {
      "design": 6.3
    }
  },
  "source": {
    "patentNumber": "US 1,485,515 A",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1924,
    "authors": [
      "Willy Mert\u00e9"
    ],
    "assignees": [
      "Carl-Zeiss-Stiftung"
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.59234,
      "indexReference": "D",
      "role": "Front biconvex collective lens of the positive front member"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.59704,
      "indexReference": "D",
      "role": "Biconcave dispersive lens of the front member, behind a thin air lens"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.6241,
      "indexReference": "D",
      "role": "Positive front lens of the cemented negative rear member",
      "cemented": "C1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.499,
      "indexReference": "D",
      "role": "Negative rear lens of the cemented negative rear member",
      "cemented": "C1"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 18.091,
      "d": 3.329,
      "sd": 8.3,
      "medium": 1
    },
    {
      "label": "2",
      "R": -38.834,
      "d": 0.13,
      "sd": 8.1
    },
    {
      "label": "3",
      "R": -36.679,
      "d": 0.83,
      "sd": 8.1,
      "medium": 2
    },
    {
      "label": "4",
      "R": 38.74,
      "d": 5.66,
      "sd": 8.1
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 18.25
    },
    {
      "label": "5",
      "R": -10.396,
      "d": 1.89,
      "sd": 5.2,
      "medium": 3
    },
    {
      "label": "6",
      "R": -9.426,
      "d": 0.75,
      "sd": 5.2,
      "medium": 4
    },
    {
      "label": "7",
      "R": -17.13,
      "d": 49.6286724892259,
      "sd": 5.2
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity-only patent reference; no finite-focus motion modeled."
  },
  "aperture": {
    "nominalFNumber": 6.3,
    "fStops": [
      6.3,
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
      "fromSurface": "5",
      "toSurface": "7"
    }
  ],
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
