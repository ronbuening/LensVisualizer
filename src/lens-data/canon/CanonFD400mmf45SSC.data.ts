import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 4,045,128 A, Table 1: lengths scaled uniformly ×4 from f = 100 mm to nominal
 * 400 mm, with the image plane fixed at the resulting 320.04 mm distance.
 * R4 follows Table 1 (-258.3399 before scaling), rather than claim 1 (-258.3899).
 * Semi-diameters are estimated from Figure 1, with rear rims bounded by the
 * f/4.5 axial beam; figure differences remain within scan/schematic uncertainty.
 * Exact rays through the engine iris clear every rim. Stop position is inferred
 * from Figure 1; stop radius is derived from f/4.5.
 * Printed glass coordinates are treated as helium d on catalog evidence, despite
 * the patent's sodium wording; catalog equivalents do not identify production melts.
 * Infinity focus only: closeFocusM = 1e15 is a placeholder, not a finite focus distance.
 * The production lens's 34 mm filter is omitted because Table 1 supplies no plate
 * prescription. The production association is probable; stop placement remains uncertain.
 * Element focal lengths are isolated thick-lens values in air at the model scale.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "canon-fd-400mm-f45-ssc",
  "maker": "Canon",
  "name": "CANON FD 400mm f/4.5 S.S.C.",
  "visible": true,
  "subtitle": "US 4,045,128 A, Table 1 — probable match to the 1975 production lens",
  "catalog": {
    "imageFormat": "135-full-frame",
    "lensMounts": [
      "canon-fd"
    ],
    "closeFocusM": {
      "marketing": 4
    },
    "elementCount": 6,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 400,
      "design": 400
    },
    "fNumber": {
      "marketing": 4.5,
      "design": 4.5
    },
    "specs": [
      "6 ELEMENTS / 5 GROUPS",
      "ALL SPHERICAL",
      "f/4.5–22",
      "REAR FOCUSING",
      "4 m CLOSE FOCUS"
    ]
  },
  "source": {
    "patentNumber": "US 4,045,128 A",
    "patentYear": 1977,
    "example": {
      "label": "Table 1",
      "id": "1"
    },
    "authors": [
      "Kikuo Momiyama"
    ],
    "assignees": [
      "Canon Inc."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "role": "Front collector of the fixed positive group",
      "focalLengthMm": 184.25,
      "nd": 1.48749,
      "vd": 70.1,
      "indexReference": "d",
      "glass": "S-FSL5 (Ohara catalog equivalent; production supplier unspecified)"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "role": "Negative element within the fixed front positive group",
      "focalLengthMm": -156.60,
      "nd": 1.8061,
      "vd": 40.9,
      "indexReference": "d",
      "glass": "LAH53 (Ohara catalog equivalent; production supplier unspecified)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "role": "Rear positive element of the fixed front group",
      "focalLengthMm": 195.72,
      "nd": 1.48749,
      "vd": 70.1,
      "indexReference": "d",
      "glass": "S-FSL5 (Ohara catalog equivalent; production supplier unspecified)"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "role": "Fixed negative member ahead of the rear focusing doublet",
      "focalLengthMm": -1151.57,
      "nd": 1.58913,
      "vd": 61.1,
      "indexReference": "d",
      "glass": "BACD5 (Hoya catalog equivalent; production supplier unspecified)"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Positive Meniscus",
      "role": "Positive component of the rear focusing doublet",
      "focalLengthMm": 287.10,
      "cemented": "C1",
      "nd": 1.7552,
      "vd": 27.5,
      "indexReference": "d",
      "glass": "SF4 (Schott catalog equivalent; production supplier unspecified)"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Negative Meniscus",
      "role": "Negative component of the rear focusing doublet",
      "focalLengthMm": -130.01,
      "cemented": "C1",
      "nd": 1.713,
      "vd": 53.9,
      "indexReference": "d",
      "glass": "LAC8 (Hoya catalog equivalent; production supplier unspecified)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 275.3224,
      "d": 14.5,
      "sd": 45.7,
      "medium": 1
    },
    {
      "label": "2",
      "R": -131.0104,
      "d": 8.936,
      "sd": 45.7
    },
    {
      "label": "3",
      "R": -112.2528,
      "d": 5.0,
      "sd": 44.6,
      "medium": 2
    },
    {
      "label": "4",
      "R": -1033.3596,
      "d": 0.5,
      "sd": 44.6
    },
    {
      "label": "5",
      "R": 163.858,
      "d": 13.0,
      "sd": 43.4,
      "medium": 3
    },
    {
      "label": "6",
      "R": -222.4844,
      "d": 100.02,
      "sd": 43.4
    },
    {
      "label": "7",
      "R": 34.1476,
      "d": 5.0,
      "sd": 20.9,
      "medium": 4
    },
    {
      "label": "8",
      "R": 30.7464,
      "d": 9.0,
      "sd": 20.9
    },
    {
      "label": "9",
      "R": 145.2136,
      "d": 3.0,
      "sd": 18.5,
      "medium": 5
    },
    {
      "label": "10",
      "R": 435.794,
      "d": 2.5,
      "sd": 18.5,
      "medium": 6
    },
    {
      "label": "11",
      "R": 76.2564,
      "d": 33.46542545454545,
      "sd": 18.1
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 125.11857454545458
    }
  ],
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only; the production lens uses rear focusing to 4 m according to Canon. The patent moves the rear cemented doublet toward the image for close focus, but that movement is not modeled."
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
    "kind": "rectilinear",
    "fullFieldDeg": 6.166666666666667,
    "maxTraceFieldDeg": 3.0833333333333335
  },
  "groups": [
    { "text": "A (fixed positive)", "fromSurface": "1", "toSurface": "6" },
    { "text": "B (fixed negative)", "fromSurface": "7", "toSurface": "8" },
    { "text": "C (rear focusing)", "fromSurface": "9", "toSurface": "11" }
  ],
  "doublets": [
    { "text": "C1", "fromSurface": "9", "toSurface": "11" }
  ],
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
