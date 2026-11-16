import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** User-authorized derived image plane; source reference retained separately. */
const LENS_DATA = {
  "schema": 2,
  "key": "vivitar-28mm-f2-compact",
  "maker": "Vivitar",
  "name": "Vivitar 28mm f/2 Compact",
  "subtitle": "US4258980 Table 2; derived wide-open infinity image plane, not factory prescription",
  "catalog": {
    "imageFormat": "135-full-frame",
    "specs": [
      "8 ELEMENTS / 8 GROUPS",
      "TABLE 2 AT 28\u00d7",
      "72\u00b0 PATENT / 75\u00b0 RETAIL",
      "INFINITY ONLY",
      "DERIVED F/2 INFINITY IMAGE PLANE +0.113741 MM"
    ],
    "elementCount": 8,
    "groupCount": 8,
    "focalLengthMm": {
      "marketing": 28,
      "design": 28
    },
    "fNumber": {
      "marketing": 2,
      "design": 2
    }
  },
  "source": {
    "patentNumber": "US 4,258,980",
    "example": {
      "label": "Table 2",
      "id": "2"
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
      "nd": 1.517,
      "vd": 64.2,
      "focalLengthMm": 130.94651,
      "glass": "Unmatched (nd=1.517, \u03bdd=64.2)"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.678,
      "vd": 55.5,
      "focalLengthMm": -36.052717,
      "glass": "Unmatched (nd=1.678, \u03bdd=55.5)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.487,
      "vd": 70.4,
      "focalLengthMm": -63.227464,
      "glass": "Unmatched (nd=1.487, \u03bdd=70.4)"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.755,
      "vd": 27.5,
      "focalLengthMm": 40.384289,
      "glass": "Unmatched (nd=1.755, \u03bdd=27.5)"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Plano-convex Positive",
      "nd": 1.64,
      "vd": 60.2,
      "focalLengthMm": 30.1875,
      "glass": "Unmatched (nd=1.640, \u03bdd=60.2)"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.805,
      "vd": 25.5,
      "focalLengthMm": -16.605229,
      "glass": "Unmatched (nd=1.805, \u03bdd=25.5)"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Positive Meniscus",
      "nd": 1.658,
      "vd": 57.3,
      "focalLengthMm": 44.254597,
      "glass": "Unmatched (nd=1.658, \u03bdd=57.3)"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.697,
      "vd": 55.5,
      "focalLengthMm": 36.125116,
      "glass": "Unmatched (nd=1.697, \u03bdd=55.5)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 55.328,
      "d": 4.312,
      "sd": 19.1,
      "medium": 1
    },
    {
      "label": "2",
      "R": 294.728,
      "d": 0.196,
      "sd": 19.1
    },
    {
      "label": "3",
      "R": 22.232,
      "d": 1.9600000000000002,
      "sd": 14.6,
      "medium": 2
    },
    {
      "label": "4",
      "R": 11.228000000000002,
      "d": 5.684,
      "sd": 10.0,
      "rimExtensionSd": 14.6
    },
    {
      "label": "5",
      "R": 59.164,
      "d": 1.568,
      "sd": 8.1,
      "medium": 3
    },
    {
      "label": "6",
      "R": 20.076,
      "d": 5.096,
      "sd": 8.1
    },
    {
      "label": "7",
      "R": 24.584,
      "d": 5.404,
      "sd": 10.5,
      "medium": 4
    },
    {
      "label": "8",
      "R": 114.912,
      "d": 1.6720000000000002,
      "sd": 10.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.0240000000000005
    },
    {
      "label": "9",
      "R": "flat",
      "d": 5.404,
      "sd": 11.1,
      "medium": 5
    },
    {
      "label": "10",
      "R": -19.32,
      "d": 2.3800000000000003,
      "sd": 11.1
    },
    {
      "label": "11",
      "R": -16.548,
      "d": 1.484,
      "sd": 9.0,
      "medium": 6
    },
    {
      "label": "12",
      "R": 72.32400000000001,
      "d": 1.848,
      "sd": 9.0
    },
    {
      "label": "13",
      "R": -37.548,
      "d": 3.9200000000000004,
      "sd": 9.3,
      "medium": 7
    },
    {
      "label": "14",
      "R": -17.08,
      "d": 0.196,
      "sd": 9.3
    },
    {
      "label": "15",
      "R": 86.492,
      "d": 5.404,
      "sd": 13.0,
      "medium": 8
    },
    {
      "label": "16",
      "R": -34.608,
      "d": 38.19374065616819,
      "sd": 13.0
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity only. Image plane moved +0.113740656 mm from literal 38.08 mm rear gap to minimize area-weighted on-axis geometric RMS at f/2. Fixed derived plane, no automatic stopped-down refocus. Not a source plane or factory prescription."
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
