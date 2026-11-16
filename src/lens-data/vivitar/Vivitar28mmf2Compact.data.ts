import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * Vivitar 28mm f/2 Compact — US 4,258,980 A (Jacob Moskovich; Vivitar Corporation), Table 2 (repeated in claim 6).
 *
 * SCALE: the patent tabulates the design at unit focal length; every radius, thickness and air space is the
 * printed value multiplied by 28 (mm). The scaled prescription computes to f = 28.0137 mm.
 *
 * IMAGE PLANE: the patent prints BFL = 1.36 F (two decimals). The last gap here is the paraxial back focus of the
 * printed prescription, 38.3273 mm (1.3688 F). The patent's printed back focal lengths are truncated paraxial
 * values (Table 1 computes 1.5969 against a printed 1.59), and its astigmatism plots are zeroed on the axial focus.
 *
 * INFERRED VALUES: the stop station (the patent places the iris between L4 and L5 without a distance; the
 * 3.696 mm air space is split 1.672 + 2.024 mm) and every semi-diameter. The stop is sized paraxially for f/2
 * (8.62 mm); by exact ray trace it admits an axial beam of 6.46 mm radius, about f/2.17, because the printed
 * three-decimal prescription has strong marginal spherical aberration. L6 and L7 reach edge contact at a 9.50 mm
 * semi-diameter, the height of the real f/2 marginal ray, so their rims cannot grow to pass it.
 *
 * FOCUS: infinity only. The patent's 1:10 close-focus state (Table 7: S4 = 0.116 F with L5-L8 moving
 * differentially) is not modeled; closeFocusM = 1e15 marks focus as not modeled and the maker's minimum focus
 * distance is carried in catalog.closeFocusM.marketing.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "vivitar-28mm-f2-compact",
  "maker": "Vivitar",
  "name": "Vivitar 28mm f/2 Compact",
  "subtitle": "US4258980 Table 2; paraxial infinity image plane, not factory prescription",
  "catalog": {
    "lensMounts": ["pentax-k"],
    "imageFormat": "135-full-frame",
    "specs": [
      "8 ELEMENTS / 8 GROUPS",
      "TABLE 2 AT 28\u00d7",
      "72\u00b0 PATENT / 75\u00b0 RETAIL",
      "INFINITY ONLY",
      "PARAXIAL INFINITY IMAGE PLANE 38.3273 MM"
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
    },
    "closeFocusM": {
      "marketing": 0.3
    }
  },
  "source": {
    "patentNumber": "US 4,258,980 A",
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
      "d": 1.96,
      "sd": 14.6,
      "medium": 2
    },
    {
      "label": "4",
      "R": 11.228,
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
      "d": 1.672,
      "sd": 10.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.024
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
      "d": 2.38,
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
      "R": 72.324,
      "d": 1.848,
      "sd": 9.0
    },
    {
      "label": "13",
      "R": -37.548,
      "d": 3.92,
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
      "d": 38.3273,
      "sd": 13.0
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity only. The image plane is the paraxial back focus of the printed Table 2 prescription, 38.3273 mm (1.3688 F); the patent prints BFL = 1.36 F, a truncated paraxial value. The patent's 1:10 close-focus state is not modeled. Not a factory prescription."
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
