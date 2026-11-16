import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * CN 216526483 U (utility model), Table 1 (specification p. 4/5, ¶0049–0053; Fig. 1). Inventor Yunhong Li (李云洪);
 * patentee Chengdu Weizheng Digital Technology Co., Ltd. (成都威正数码科技有限公司). Application 202122816253.4,
 * filed 17 November 2021, granted 13 May 2022. The patent states f = 50 mm and a relative aperture of F = 0.95 for
 * an APS-C lens. Seven spherical glass elements in five groups: L3 + L4 and L5 + L6 are the two cemented pairs the
 * patent calls the first and second cemented lenses, and the stop lies between them.
 *
 * PRODUCT LINK: by assignee and construction. The patentee is reported as the company behind the Meike brand, and
 * the Meike 50mm f/0.95 for APS-C (announced June 2022, seven elements in five groups) followed the filing by seven
 * months. No maker construction diagram was found to compare with Fig. 1.
 *
 * SCALE: none. R and d are as printed, in millimetres; the paraxial EFL is 50.48 mm against the stated 50 mm.
 *
 * GLASS: Table 1 names the glasses and prints no indices. nd and νd are the makers' catalog d-line values for the
 * printed names: H-ZLaF55D, H-ZLaF50E, H-ZF52 and H-ZF1 (CDGM) and FCD515 (HOYA).
 *
 * STOP: Table 1 places the stop 7.85 mm behind L4 and 6.11 mm ahead of L5 with a 22.74 mm clear diameter. That
 * diameter corresponds to a paraxial F/0.985, not the stated F/0.95, so the design f-number is set to 0.9846 and the
 * engine reproduces the printed 11.37 mm stop radius. F/0.95 would need an 11.79 mm stop radius and a beam larger
 * than the printed clear diameters of surfaces 5 to 7.
 *
 * SEMI-DIAMETERS: the printed clear diameters divided by two; none is inferred. Two cemented interfaces that Table 1
 * lists twice with a zero air gap are entered once.
 *
 * IMAGE PLANE: the final spacing is the d-line paraxial back focus, 14.7591 mm, not the printed 13.89 mm. The printed
 * prescription focuses 0.87 mm behind the printed distance (marginal rays cross the axis within 0.19 mm of the
 * paraxial focus), Fig. 3 shows the on-axis focus of all four plotted wavelengths within 0.08 mm of the image plane,
 * and Fig. 1 draws the sensor as a plate about 1.4 mm thick beginning 14.4–14.8 mm behind L7. The printed 13.89 mm is
 * therefore taken as a different datum, most likely the distance to an untabulated sensor cover plate. No single
 * changed radius or thickness reconciles it: the nearest alternative, R7 = 14.59 for 14.29, gives −0.95 % distortion at
 * 15.8° where Fig. 3 shows about −2.2 % and the printed table gives −1.8 %.
 *
 * SOURCE NOTE: claim 7 and ¶0046 require 1.66 < N5 < N6 − 0.2, which no value satisfies with the tabulated L6
 * (nd 1.83481); the tabulated L5, H-ZF1, has nd 1.64769. The table is kept as printed.
 *
 * FOCUS: infinity only. The patent prints no close-focus spacing or moving group; closeFocusM is a far placeholder,
 * not a minimum focus distance. The maker's 0.45 m is catalog.closeFocusM.marketing.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "meike-50mm-f095",
  "maker": "Meike",
  "name": "MEIKE 50mm f/0.95",
  "subtitle": "CN 216526483 U, Table 1 — construction-based association with the Meike 50mm f/0.95",
  "catalog": {
    "lensMounts": [
      "sony-fe",
      "fujifilm-x",
      "nikon-z",
      "canon-ef-m",
      "micro-four-thirds"
    ],
    "imageFormat": "aps-c",
    "elementCount": 7,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 50,
      "design": 50.48
    },
    "fNumber": {
      "marketing": 0.95,
      "design": 0.9846087232798052
    },
    "closeFocusM": {
      "marketing": 0.45
    },
    "specs": [
      "7 ELEMENTS / 5 GROUPS",
      "ALL SPHERICAL",
      "F/0.95 MARKETED; PRINTED STOP GIVES F/0.99",
      "MINIMUM FOCUS 0.45 m"
    ]
  },
  "source": {
    "patentNumber": "CN 216526483 U",
    "example": {
      "label": "Table 1",
      "id": "1"
    },
    "patentYear": 2022,
    "authors": [
      "Yunhong Li"
    ],
    "assignees": [
      "Chengdu Weizheng Digital Technology Co., Ltd."
    ],
    "sdSource": "source-table"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.83481,
      "vd": 42.725177,
      "indexReference": "d",
      "focalLengthMm": 71.84,
      "glass": "H-ZLaF55D (CDGM)",
      "role": "Positive front meniscus, convex to the object; begins converging the f/0.95 beam"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.804,
      "vd": 46.574487,
      "indexReference": "d",
      "focalLengthMm": 110.54,
      "glass": "H-ZLaF50E (CDGM)",
      "role": "Second positive meniscus; shares the front positive power with L1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.59282,
      "vd": 68.62,
      "indexReference": "d",
      "focalLengthMm": 53.86,
      "glass": "FCD515 (HOYA)",
      "cemented": "C1",
      "role": "Low-dispersion positive member of the first cemented lens"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.84666,
      "vd": 23.784497,
      "indexReference": "d",
      "focalLengthMm": -19.39,
      "glass": "H-ZF52 (CDGM)",
      "cemented": "C1",
      "role": "Dense-flint negative member of the first cemented lens; its deep concave rear surface faces the stop"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.64769,
      "vd": 33.840317,
      "indexReference": "d",
      "focalLengthMm": -20.55,
      "glass": "H-ZF1 (CDGM)",
      "cemented": "C2",
      "role": "Flint negative member of the second cemented lens; its concave front surface faces the stop"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.83481,
      "vd": 42.725177,
      "indexReference": "d",
      "focalLengthMm": 21.48,
      "glass": "H-ZLaF55D (CDGM)",
      "cemented": "C2",
      "role": "High-index biconvex positive member of the second cemented lens"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Positive Meniscus",
      "nd": 1.83481,
      "vd": 42.725177,
      "indexReference": "d",
      "focalLengthMm": 44.92,
      "glass": "H-ZLaF55D (CDGM)",
      "role": "Positive rear meniscus, convex to the object; completes the convergence to the image"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 46.05,
      "d": 8.14,
      "sd": 26.845,
      "medium": 1
    },
    {
      "label": "2",
      "R": 182.38,
      "d": 0.11,
      "sd": 26.225
    },
    {
      "label": "3",
      "R": 30.28,
      "d": 5.53,
      "sd": 22.0,
      "medium": 2
    },
    {
      "label": "4",
      "R": 42.19,
      "d": 1.19,
      "sd": 20.87
    },
    {
      "label": "5",
      "R": 25.68,
      "d": 8.24,
      "sd": 18.17,
      "medium": 3
    },
    {
      "label": "6",
      "R": 115.55,
      "d": 1.46,
      "sd": 16.49,
      "medium": 4
    },
    {
      "label": "7",
      "R": 14.29,
      "d": 7.85,
      "sd": 11.795
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 6.11
    },
    {
      "label": "9",
      "R": -21.55,
      "d": 2.9,
      "sd": 10.69,
      "medium": 5
    },
    {
      "label": "10",
      "R": 36.66,
      "d": 9.79,
      "sd": 14.03,
      "medium": 6
    },
    {
      "label": "11",
      "R": -30.83,
      "d": 0.11,
      "sd": 14.98
    },
    {
      "label": "12",
      "R": 33.22,
      "d": 6.84,
      "sd": 16.21,
      "medium": 7
    },
    {
      "label": "13",
      "R": 264.02,
      "d": 14.7591,
      "sd": 15.555
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity focus only; the patent prints no close-focus spacing or moving group. The image plane is the d-line paraxial focus, 14.7591 mm behind the last surface; Table 1 prints 13.89 mm, which is not where the printed prescription focuses."
  },
  "gaps": {},
  "aperture": {
    "nominalFNumber": 0.9846087232798052,
    "fStops": [
      0.9846087232798052,
      1.4,
      2,
      2.8,
      4,
      5.6,
      8,
      11,
      16
    ]
  },
  "layout": {
    "yScFill": 0.3
  },
  "groups": [],
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "5",
      "toSurface": "7"
    },
    {
      "text": "C2",
      "fromSurface": "9",
      "toSurface": "11"
    }
  ]
} satisfies LensDataV2Input;

export default LENS_DATA;
