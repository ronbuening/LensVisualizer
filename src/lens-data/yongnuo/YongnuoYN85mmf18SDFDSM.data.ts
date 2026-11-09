import type { LensDataV2Input } from "../../types/lensDataV2.js";
// Literal CN110146970B Example 1; PDF pp. 9–10, Figs. 1, 2A–B.
// Production association is plausible, not proven. No radii, thicknesses or image gap repaired.
// Apertures are reconstructed, not source measurements; see analysis and evidence.
// Synthetic nd/vd dispersion only: no catalog glass identification claimed.
// The source pupil radius 23.5425 mm defines the derived nominal f-number.
// Derived physical stop diameter ~28.089637 mm is inferred, not printed.
const LENS_DATA = {
  "schema": 2,
  "key": "yongnuo-yn-85mm-f18s-df-dsm",
  "maker": "Yongnuo",
  "name": "YONGNUO YN 85mm f/1.8 S DF DSM",
  "subtitle": "CN 110146970 B \u2014 associated patent design, production identity unconfirmed",
  "catalog": {
    "lensMounts": [
      "sony-fe"
    ],
    "imageFormat": "135-full-frame",
    "specs": [
      "9 ELEMENTS / 8 GROUPS",
      "f = 84.67 mm (source)",
      "F/1.8",
      "2\u03c9 = 27.338\u00b0"
    ],
    "elementCount": 9,
    "groupCount": 8,
    "focalLengthMm": {
      "marketing": 85,
      "design": 84.67
    },
    "fNumber": {
      "marketing": 1.8,
      "design": 1.7998650289768992
    }
  },
  "source": {
    "patentNumber": "CN 110146970 B",
    "example": {
      "label": "Example 1",
      "id": "1"
    },
    "patentYear": 2023,
    "authors": [
      "Yuanhua Ye",
      "Yongsheng Zhuang",
      "Jiannan Zhuang",
      "Qiyun Zhu"
    ],
    "assignees": [
      "Shenzhen Yongnuo Electric Appliance Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L11",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.8213,
      "vd": 42.73
    },
    {
      "id": 2,
      "name": "L12",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.53775,
      "vd": 74.7
    },
    {
      "id": 3,
      "name": "L13",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.8061,
      "vd": 33.27
    },
    {
      "id": 4,
      "name": "L14",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.61
    },
    {
      "id": 5,
      "name": "L21",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.6127,
      "vd": 58.7169
    },
    {
      "id": 6,
      "name": "L31",
      "label": "Element 6",
      "type": "Positive Meniscus",
      "nd": 1.7865,
      "vd": 50
    },
    {
      "id": 7,
      "name": "L32",
      "label": "Element 7",
      "type": "Negative Meniscus",
      "nd": 1.5955,
      "vd": 38.77
    },
    {
      "id": 8,
      "name": "L33",
      "label": "Element 8",
      "type": "Positive Meniscus",
      "nd": 1.7555,
      "vd": 25.07
    },
    {
      "id": 9,
      "name": "L34",
      "label": "Element 9",
      "type": "Negative Meniscus",
      "nd": 1.72825,
      "vd": 28.41
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 58.558,
      "d": 9.48,
      "sd": 30,
      "medium": 1
    },
    {
      "label": "2",
      "R": 298.95,
      "d": 0.394,
      "sd": 30
    },
    {
      "label": "3",
      "R": 41.031,
      "d": 8.337,
      "sd": 24,
      "medium": 2
    },
    {
      "label": "4",
      "R": 171.722,
      "d": 1.17,
      "sd": 24
    },
    {
      "label": "5",
      "R": 412.741,
      "d": 1.5,
      "sd": 21,
      "medium": 3
    },
    {
      "label": "6",
      "R": 27.251,
      "d": 8.09,
      "sd": 21,
      "medium": 4
    },
    {
      "label": "7",
      "R": 107.846,
      "sd": 21
    },
    {
      "label": "8",
      "R": -442.29,
      "d": 1.4,
      "sd": 17,
      "medium": 5
    },
    {
      "label": "9",
      "R": 49.317,
      "sd": 17
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 3.26
    },
    {
      "label": "11",
      "R": 36.369,
      "d": 4.83,
      "sd": 15,
      "medium": 6
    },
    {
      "label": "12",
      "R": 1864.782,
      "d": 0.15,
      "sd": 15
    },
    {
      "label": "13",
      "R": 24.546,
      "d": 1.55,
      "sd": 14,
      "medium": 7
    },
    {
      "label": "14",
      "R": 21.181,
      "d": 5.47,
      "sd": 14
    },
    {
      "label": "15",
      "R": -122.605,
      "d": 3.17,
      "sd": 12,
      "medium": 8
    },
    {
      "label": "16",
      "R": -81.169,
      "d": 15,
      "sd": 12
    },
    {
      "label": "17",
      "R": -22.324,
      "d": 1.448,
      "sd": 14,
      "medium": 9
    },
    {
      "label": "18",
      "R": -36.525,
      "d": 14.718,
      "sd": 14
    }
  ],
  "focus": {
    "closeFocusM": 0.800397,
 "conjugates": [{"zoomStation":0,"keyframe":1,"objectDistanceMm":697,"distanceReference":"first-surface","source":"CN 110146970 B Example 1 focus table, PDF p. 10"}],
    "description": "Published inner focus: L21 alone moves 14.5 mm toward the image; object is 697 mm before first vertex at close focus. No refocus correction.",
    "published": [
      1
    ]
  },
  "gaps": {
    "7": {
      "label": "D(1)",
      "values": [
        [
          2.95,
          17.45
        ]
      ]
    },
    "9": {
      "label": "D(2)",
      "values": [
        [
          17.28,
          2.78
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 1.7998650289768992,
    "fStops": [
      1.8,
      2,
      2.8,
      4,
      5.6,
      8,
      11,
      16
    ]
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 27.338
  },
  "rearPlates": [
    {
      "label": "GL",
      "thicknessMm": 2.2,
      "nd": 1.5168,
      "vd": 64.2,
      "gapAfterMm": 1,
      "source": "CN 110146970 B Example 1, surfaces 19\u201320, PDF p. 9"
    }
  ],
  "groups": [
    {
      "text": "GR1",
      "fromSurface": "1",
      "toSurface": "7"
    },
    {
      "text": "GR2 FOCUS",
      "fromSurface": "8",
      "toSurface": "9"
    },
    {
      "text": "GR3",
      "fromSurface": "11",
      "toSurface": "18"
    }
  ],
  "doublets": [
    {
      "text": "L13 / L14",
      "fromSurface": "5",
      "toSurface": "7"
    }
  ],
  "layout": {
    "scFill": 0.55,
    "yScFill": 0.3
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
