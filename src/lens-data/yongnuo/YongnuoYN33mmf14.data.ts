import type { LensDataV2Input } from "../../types/lensDataV2.js";
// Literal unscaled spherical prescription; all SDs inferred, native validation pending.
const LENS_DATA = {
  "layout": {
    "yScFill": 0.4
  },
  "schema": 2,
  "key": "yongnuo-yn33f14-cn220137479u",
  "maker": "Yongnuo",
  "name": "YONGNUO YN 33mm f/1.4 DA DSM WL PRO",
  "subtitle": "CN 220137479 U \u2014 qualified associated patent model",
  "catalog": {
    "elementCount": 11,
    "groupCount": 9,
    "focalLengthMm": {
      "marketing": 33,
      "design": 32.62
    },
    "fNumber": {
      "marketing": 1.4,
      "design": 1.4570119336552654
    },
    "lensMounts": ["sony-fe", "nikon-z"],
    "imageFormat": "aps-c"
  },
  "source": {
    "patentNumber": "CN 220137479 U",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 2023,
    "authors": [
      "Ying Zhuang",
      "Yuanhua Ye",
      "Yongsheng Zhuang",
      "Yongxiao Zhuang"
    ],
    "assignees": [
      "Shenzhen Yongnuo Electric Appliance Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.593,
      "vd": 68.53,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.946,
      "vd": 17.99,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.772,
      "vd": 49.6,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.883,
      "vd": 40.79,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.804,
      "vd": 46.59,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.593,
      "vd": 68.62,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconcave Negative",
      "nd": 1.762,
      "vd": 26.62,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Negative Meniscus",
      "nd": 1.808,
      "vd": 22.76,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Biconvex Positive",
      "nd": 1.883,
      "vd": 40.79,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Biconvex Positive",
      "nd": 1.883,
      "vd": 40.79,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Negative Meniscus",
      "nd": 1.855,
      "vd": 25.15,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 163.511,
      "d": 1.78,
      "medium": 1,
      "sd": 17.5
    },
    {
      "label": "2",
      "R": 25.366,
      "d": 6.35,
      "sd": 17.5
    },
    {
      "label": "3",
      "R": 44.009,
      "d": 2.9,
      "medium": 2,
      "sd": 14.926
    },
    {
      "label": "4",
      "R": 81.413,
      "d": 6.6,
      "sd": 14.926
    },
    {
      "label": "5",
      "R": -26.712,
      "d": 5.8,
      "medium": 3,
      "sd": 14.926
    },
    {
      "label": "6",
      "R": -18.108,
      "d": 1.75,
      "medium": 4,
      "sd": 14.926
    },
    {
      "label": "7",
      "R": -28.987,
      "d": 0.3,
      "sd": 14.926
    },
    {
      "label": "8",
      "R": 38.163,
      "d": 6,
      "medium": 5,
      "sd": 16
    },
    {
      "label": "9",
      "R": -114.536,
      "d": 0.3,
      "sd": 16
    },
    {
      "label": "10",
      "R": 21.857,
      "d": 7.35,
      "medium": 6,
      "sd": 13.5
    },
    {
      "label": "12",
      "R": -61.942,
      "d": 1.26,
      "medium": 7,
      "sd": 13.5
    },
    {
      "label": "13",
      "R": 15.451,
      "d": 6.48,
      "sd": 13.5
    },
    {
      "label": "STO",
      "R": "flat"
    },
    {
      "label": "15",
      "R": -16.66,
      "d": 4.5,
      "medium": 8,
      "sd": 10.5
    },
    {
      "label": "16",
      "R": -23.786,
      "d": 1.82,
      "sd": 10.5
    },
    {
      "label": "17",
      "R": 199.784,
      "d": 4.18,
      "medium": 9,
      "sd": 13.5
    },
    {
      "label": "18",
      "R": -40.07,
      "sd": 13.5
    },
    {
      "label": "19",
      "R": 80.5,
      "d": 4.24,
      "medium": 10,
      "sd": 14
    },
    {
      "label": "20",
      "R": -69.926,
      "d": 3.1,
      "sd": 14
    },
    {
      "label": "21",
      "R": -44.516,
      "d": 1.38,
      "medium": 11,
      "sd": 13.5
    },
    {
      "label": "22",
      "R": -1000,
      "d": 12.5,
      "sd": 13.5
    }
  ],
  "focus": {
    "closeFocusM": 0.4,
    "published": [
      1,
      2
    ],
    "keyframes": [
      0,
      0.5325856320096998,
      1
    ],
    "conjugates": [
      {
        "zoomStation": 0,
        "keyframe": 1,
        "objectDistanceMm": 623.757,
        "distanceReference": "first-surface",
        "source": "CN 220137479 U focus table"
      },
      {
        "zoomStation": 0,
        "keyframe": 2,
        "objectDistanceMm": 305,
        "distanceReference": "first-surface",
        "source": "CN 220137479 U focus table"
      }
    ],
    "description": "Literal three published positions. Intermediate positions interpolated; no image-plane refocus."
  },
  "gaps": {
    "STO": {
      "label": "d14",
      "values": [
        [
          11.91,
          8.396,
          5.312
        ]
      ]
    },
    "18": {
      "label": "d18",
      "values": [
        [
          1.5,
          5.014,
          8.098
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 1.4570119336552654,
    "fStops": [
      1.4570119336552654,
      2,
      2.8,
      4,
      5.6,
      8,
      11,
      16
    ]
  },
  "rearPlates": [
    {
      "label": "GL",
      "thicknessMm": 2,
      "nd": 1.517,
      "vd": 64.2,
      "gapAfterMm": 1,
      "source": "CN 220137479 U literal rear plate"
    }
  ],
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 48.74
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
