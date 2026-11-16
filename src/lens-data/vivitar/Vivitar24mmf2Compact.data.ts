import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Table 1 literal R/T/S/nd/vd, all normalized lengths scaled exactly 24x.
 * Representative 24mm f/2 Compact association; not confirmed factory identity.
 * Figure 1 locates iris between L4/L5; midpoint split is inferred, not tabulated.
 * Clear semi-diameters heuristic from schematic proportions, not patent dimensions.
 * L2 rear cap11.4mm has outer14mm opaque vertical land suggested by Figure1.
 * L6/L7 paired9.2mm rims retain default90% gap-sag clearance; no override.
 * Infinity only: no reproduction of Table 7 close-focus motion or retail 0.3m endpoint.
 * All eight elements spherical, air-spaced. No glass supplier inferred.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "vivitar-24mm-f2-compact",
  "maker": "Vivitar",
  "name": "VIVITAR 24mm f/2 Compact",
  "subtitle": "US 4,258,980 Table 1 — representative patent, production identity unconfirmed",
  "catalog": {
    "imageFormat": "135-full-frame",
    "specs": [
      "8 ELEMENTS / 8 GROUPS",
      "24× NORMALIZED TABLE 1",
      "F/2",
      "84° PATENT FIELD",
      "INFINITY ONLY"
    ],
    "elementCount": 8,
    "groupCount": 8,
    "focalLengthMm": {
      "marketing": 24,
      "design": 24
    },
    "fNumber": {
      "marketing": 2,
      "design": 2
    }
  },
  "source": {
    "patentNumber": "US 4,258,980",
    "example": {
      "label": "Table 1",
      "id": "1"
    },
    "patentYear": 1981,
    "authors": [
      "Jacob Moskovich"
    ],
    "assignees": [
      "Vivitar Corporation"
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.697,
      "vd": 55.5,
      "focalLengthMm": 127.332994,
      "glass": "Unmatched (nd=1.697, νd=55.5)"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.697,
      "vd": 55.5,
      "focalLengthMm": -30.248592,
      "glass": "Unmatched (nd=1.697, νd=55.5)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.603,
      "vd": 60.7,
      "focalLengthMm": -41.968903,
      "glass": "Unmatched (nd=1.603, νd=60.7)"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.717,
      "vd": 29.5,
      "focalLengthMm": 31.591273,
      "glass": "Unmatched (nd=1.717, νd=29.5)"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Plano-convex Positive",
      "nd": 1.603,
      "vd": 60.7,
      "focalLengthMm": 31.800995,
      "glass": "Unmatched (nd=1.603, νd=60.7)"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.805,
      "vd": 25.5,
      "focalLengthMm": -17.331699,
      "glass": "Unmatched (nd=1.805, νd=25.5)"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Positive Meniscus",
      "nd": 1.64,
      "vd": 60.2,
      "focalLengthMm": 38.469982,
      "glass": "Unmatched (nd=1.640, νd=60.2)"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.64,
      "vd": 60.2,
      "focalLengthMm": 39.888336,
      "glass": "Unmatched (nd=1.640, νd=60.2)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 66.048,
      "d": 4.008,
      "sd": 18.4,
      "medium": 1
    },
    {
      "label": "2",
      "R": 251.76,
      "d": 0.192,
      "sd": 18.4
    },
    {
      "label": "3",
      "R": 34.104,
      "d": 1.968,
      "sd": 14,
      "medium": 2
    },
    {
      "label": "4",
      "R": 12.72,
      "d": 9.288,
      "sd": 11.4,
      "rimExtensionSd": 14
    },
    {
      "label": "5",
      "R": 32.16,
      "d": 1.464,
      "sd": 7.8,
      "medium": 3
    },
    {
      "label": "6",
      "R": 13.92,
      "d": 4.224,
      "sd": 7.8
    },
    {
      "label": "7",
      "R": 24.768,
      "d": 5.88,
      "sd": 10,
      "medium": 4
    },
    {
      "label": "8",
      "R": -238.728,
      "d": 1.86,
      "sd": 10
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.86
    },
    {
      "label": "9",
      "R": "flat",
      "d": 5.304,
      "sd": 10.5,
      "medium": 5
    },
    {
      "label": "10",
      "R": -19.176,
      "d": 2.424,
      "sd": 10.5
    },
    {
      "label": "11",
      "R": -18.72,
      "d": 1.776,
      "sd": 9.2,
      "medium": 6
    },
    {
      "label": "12",
      "R": 57.096,
      "d": 1.656,
      "sd": 9.2
    },
    {
      "label": "13",
      "R": -58.344,
      "d": 4.056,
      "sd": 9.2,
      "medium": 7
    },
    {
      "label": "14",
      "R": -17.784,
      "d": 0.192,
      "sd": 9.2
    },
    {
      "label": "15",
      "R": 105.048,
      "d": 3.864,
      "sd": 12.5,
      "medium": 8
    },
    {
      "label": "16",
      "R": -33.24,
      "d": 38.16,
      "sd": 12.5
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity prescription only. Close-focus motion is not modeled."
  },
  "gaps": {},
  "aperture": {
    "nominalFNumber": 2,
    "fStops": [
      2,
      2.8,
      4,
      5.6,
      8,
      11,
      16
    ]
  },
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "6"
    },
    {
      "text": "G2",
      "fromSurface": "7",
      "toSurface": "16"
    }
  ],
  "doublets": [],
  "layout": {
    "yScFill": 0.3
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
