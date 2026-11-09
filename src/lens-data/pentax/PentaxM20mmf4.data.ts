import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 4,062,622 (Sugiyama, Asahi Kogaku Kogyo), Example 2 and Fig. 3, associated with the SMC Pentax-M 20mm f/4.
 * The association rests on construction (eight air-spaced singlets in eight groups, with a very thick fourth element),
 * F/4, the 94° field and timing; this is a patent design, not a confirmed factory prescription. Example 1 cements L6
 * to L7 and so does not fit the eight-group production lens. DE 2620571 C3 is the German family member.
 *
 * Scale: the patent is normalized to F = 100. Every printed R and d, and every semi-diameter, is multiplied by exactly
 * s = 0.2 for f = 20.0 mm; nd and νd are as printed. All surfaces are spherical, so no coefficient transform applies.
 * Printed: R, d, n, ν, F/4, field angle 94°, back focus 180.770 (36.154 mm here).
 * Source inconsistency: claim 6 repeats Example 2 with r12 = 38.348 and d12 = 44.878. The descriptive Example 2 and
 * both German occurrences print 138.348 and 4.878, which the file follows.
 * Index line: the table prints n and ν without naming a line. They are read as d-line: every pair matches a d-line
 * catalog glass (SK16, SK15, SF1, SK18, SF6, FK5 and BK7 types), and Fig. 4 plots the d and g lines.
 * Image plane: the final gap keeps the printed back focus. The paraxial focus is 36.1535 mm, 0.0005 mm in front of it.
 * Stop: the patent puts diaphragm 80 between L4 and L5 and prints no position. The model splits d8 (1.9514 mm) at its
 * midpoint, and the stop radius follows F/4 from the paraxial entrance pupil.
 * Semi-diameters are inferred from Fig. 3 (38.25 px/mm at 600 dpi over the S1 to S16 vertex span); none is printed.
 * L1 is 16 mm, inside the 14.8 to 17.2 mm the figure supports. S4 is 7.4 mm, where Fig. 3 ends that face (about 7.4
 * to 7.7 mm); for its 7.884 mm radius that is a 69.8° rim slope, so checks.maxRimAngleDeg is 70 (default ≈ 64.2°).
 * A flat rear land square to the axis then runs out to L2's edge: `rimExtensionSd` 10.7 mm on S4, level with S3,
 * draws it. S6 is 5.6 mm, where Fig. 3 ends that face and bevels L3 up to its 6.7 mm front rim, clear
 * of L4's front corner. The other rims follow the figure's outlines.
 * Field: `projection` declares the patent's 94°. The 47° chief ray lands at 20.98 mm, 97 % of the format corner.
 * Focus: the patent prints the infinity state only, so no gap varies and the model stays at infinity; the 0.25 m
 * maker's minimum focus is catalog metadata only.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-m-20mm-f4",
  "maker": "Pentax",
  "name": "PENTAX SMC M 20mm f/4",
  "subtitle": "US 4,062,622, Example 2 — small retrofocus wide-angle lens; probable production match",
  "catalog": {
    "lensMounts": [
      "pentax-k"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 8,
    "groupCount": 8,
    "focalLengthMm": {
      "marketing": 20,
      "design": 20
    },
    "fNumber": {
      "marketing": 4,
      "design": 4
    },
    "closeFocusM": {
      "marketing": 0.25
    },
    "specs": [
      "8 ELEMENTS / 8 GROUPS",
      "DESIGN f = 20 mm",
      "DESIGN F/4",
      "ALL SPHERICAL",
      "PATENT f = 100 SCALED × 0.2"
    ]
  },
  "source": {
    "patentNumber": "US 4,062,622",
    "example": {
      "label": "Example 2",
      "id": "2"
    },
    "patentYear": 1977,
    "authors": [
      "Takahiro Sugiyama"
    ],
    "assignees": [
      "Asahi Kogaku Kogyo Co., Ltd."
    ]
  },
  "checks": {
    "maxRimAngleDeg": 70
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.62041,
      "vd": 60.3,
      "indexReference": "d",
      "glass": "S-BSM16 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 110.794682,
      "role": "Weak positive front meniscus, convex to the object; the largest element, ahead of the two negative menisci"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.62041,
      "vd": 60.3,
      "indexReference": "d",
      "glass": "S-BSM16 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -22.785521,
      "role": "First negative meniscus, convex to the object; its steep rear face S4 opens the strong negative front that gives the long back focus"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.62299,
      "vd": 58.1,
      "indexReference": "d",
      "glass": "BACD15 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -21.581969,
      "role": "Second negative meniscus, convex to the object; completes the negative front, F1,2,3 = −11.61 mm"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.71736,
      "vd": 29.5,
      "indexReference": "d",
      "glass": "E-FD1L (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 23.831718,
      "role": "Very thick biconvex flint, 10.44 mm on the axis, directly ahead of the stop; the patent's fourth group"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Positive Meniscus",
      "nd": 1.63854,
      "vd": 55.4,
      "indexReference": "d",
      "glass": "S-BSM18 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 30.33626,
      "role": "Positive meniscus, convex to the image, directly behind the stop; the patent's fifth group"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "d",
      "glass": "K-SFLD6 (SUMITA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -21.28105,
      "role": "Dense-flint negative of the sixth group, air-spaced from L7 in this example"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.1,
      "indexReference": "d",
      "glass": "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 23.822571,
      "role": "Low-dispersion crown of the sixth group; with L6 it forms a weakly positive pair"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Positive Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "glass": "K-BK7 (SUMITA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 101.195971,
      "role": "Weak positive meniscus, convex to the image, closing the lens; condition (3) sets its strength to control coma at wide field angles"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 46.3242,
      "d": 3.4148,
      "sd": 16,
      "medium": 1
    },
    {
      "label": "2",
      "R": 138.0556,
      "d": 0.0976,
      "sd": 16
    },
    {
      "label": "3",
      "R": 18.84,
      "d": 1.1708,
      "sd": 10.7,
      "medium": 2
    },
    {
      "label": "4",
      "R": 7.8842,
      "d": 4.9758,
      "sd": 7.4,
      "rimExtensionSd": 10.7
    },
    {
      "label": "5",
      "R": 20.9766,
      "d": 1.1708,
      "sd": 6.7,
      "medium": 3
    },
    {
      "label": "6",
      "R": 8.018,
      "d": 1.9514,
      "sd": 5.6
    },
    {
      "label": "7",
      "R": 32.1966,
      "d": 10.4396,
      "sd": 5.1,
      "medium": 4
    },
    {
      "label": "8",
      "R": -31.5138,
      "d": 0.9757,
      "sd": 5.1
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 0.9757
    },
    {
      "label": "9",
      "R": -97.5658,
      "d": 2.7904,
      "sd": 5.1,
      "medium": 5
    },
    {
      "label": "10",
      "R": -16.3422,
      "d": 0.1074,
      "sd": 5.1
    },
    {
      "label": "11",
      "R": -45.8558,
      "d": 1.1708,
      "sd": 5.1,
      "medium": 6
    },
    {
      "label": "12",
      "R": 27.6696,
      "d": 0.9756,
      "sd": 5.1
    },
    {
      "label": "13",
      "R": 1924.1202,
      "d": 2.605,
      "sd": 6.6,
      "medium": 7
    },
    {
      "label": "14",
      "R": -11.6786,
      "d": 0.0976,
      "sd": 6.6
    },
    {
      "label": "15",
      "R": -76.1012,
      "d": 1.6684,
      "sd": 7.1,
      "medium": 8
    },
    {
      "label": "16",
      "R": -31.2112,
      "d": 36.154,
      "sd": 7.1
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "PUBLISHED infinity state only. The patent names no focusing group or motion and prints no close-distance spacings, so no gap varies and the lens is modeled at infinity. Pentax's 0.25 m minimum focus is not modeled."
  },
  "aperture": {
    "nominalFNumber": 4,
    "fStops": [
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
    "fullFieldDeg": 94
  },
  "layout": {
    "yScFill": 0.78
  },
  "groups": [
    {
      "text": "G1–G4 (−)",
      "fromSurface": "1",
      "toSurface": "8"
    },
    {
      "text": "G5–G7 (+)",
      "fromSurface": "9",
      "toSurface": "16"
    },
    {
      "text": "G6",
      "fromSurface": "11",
      "toSurface": "14"
    }
  ]
} satisfies LensDataV2Input;

export default LENS_DATA;
