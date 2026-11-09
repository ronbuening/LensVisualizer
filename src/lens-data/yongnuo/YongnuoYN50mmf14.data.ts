import type { LensDataV2Input } from "../../types/lensDataV2.js";
// Literal source prescription. SDs inferred from Figure3 and source-aperture tracing.
// S6-S7 needs per-model gapSagFrac0.962 to clear sourcef/1.4 with the source square-cut contours.
// Default0.9 and smaller stages retained in local evidence; no global thresholds changed.
const LENS_DATA = {
  "layout": {
    "yScFill": 0.4
  },
  "schema": 2,
  "key": "yongnuo-yn-50mm-f14",
  "maker": "Yongnuo",
  "name": "YONGNUO YN 50mm f/1.4",
  "subtitle": "CN 106249387 B \u2014 qualified associated patent model",
  "catalog": {
    "elementCount": 9,
    "groupCount": 7,
    "focalLengthMm": {
      "marketing": 50,
      "design": 51.5
    },
    "fNumber": {
      "marketing": 1.4,
      "design": 1.4
    },
    "lensMounts": ["canon-ef", "nikon-f"],
    "imageFormat": "135-full-frame",
    "closeFocusM": {
      "marketing": 0.45
    }
  },
  "source": {
    "patentNumber": "CN 106249387 B",
    "example": {
      "label": "Example 2",
      "id": "2"
    },
    "patentYear": 2019,
    "authors": [
      "Yuanhua Ye"
    ],
    "assignees": [
      "Shenzhen Yongnuo Photographic Equipment Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.883,
      "vd": 40.81,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.804,
      "vd": 46.59,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.6889,
      "vd": 31.18,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.9004,
      "vd": 37.37,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 2.001,
      "vd": 29.13,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.62,
      "vd": 36.3,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.7292,
      "vd": 54.67,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconcave Negative",
      "nd": 1.7552,
      "vd": 27.55,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Biconvex Positive",
      "nd": 1.883,
      "vd": 40.81,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": -152.17,
      "d": 10,
      "medium": 1,
      "sd": 21
    },
    {
      "label": "2",
      "R": -74.48,
      "d": 0.2,
      "sd": 21
    },
    {
      "label": "3",
      "R": 42.51,
      "d": 3.2,
      "medium": 2,
      "sd": 17.859
    },
    {
      "label": "4",
      "R": 85.58,
      "d": 5,
      "sd": 17.859
    },
    {
      "label": "5",
      "R": -62.28,
      "d": 2.5,
      "medium": 3,
      "sd": 17.23
    },
    {
      "label": "6",
      "R": 33.66,
      "d": 3.9,
      "sd": 17.23
    },
    {
      "label": "7",
      "R": 171.98,
      "d": 2.5,
      "medium": 4,
      "sd": 16.97
    },
    {
      "label": "8",
      "R": -304.23,
      "d": 2.5,
      "sd": 16.97
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 9.8
    },
    {
      "label": "10",
      "R": 93.19,
      "d": 10,
      "medium": 5,
      "sd": 21.652
    },
    {
      "label": "11",
      "R": -35.38,
      "d": 2.8,
      "medium": 6,
      "sd": 21.652
    },
    {
      "label": "12",
      "R": 32.56,
      "d": 1.7,
      "sd": 21.652
    },
    {
      "label": "13",
      "R": 34.49,
      "d": 12.2,
      "medium": 7,
      "sd": 17.216
    },
    {
      "label": "14",
      "R": -34.49,
      "d": 2.5,
      "medium": 8,
      "sd": 17.216
    },
    {
      "label": "15",
      "R": 39.22,
      "d": 1.5,
      "sd": 17.216
    },
    {
      "label": "16",
      "R": 72.15,
      "d": 4,
      "medium": 9,
      "sd": 14.722
    },
    {
      "label": "17",
      "R": -101.48,
      "sd": 14.722
    }
  ],
  "focus": {
    "closeFocusM": 0.4704347,
    "published": [
      1,
      2
    ],
    "keyframes": [
      0,
      0.33002003901636334,
      1
    ],
    "conjugates": [
      {
        "zoomStation": 0,
        "keyframe": 1,
        "objectDistanceMm": 1036.73,
        "distanceReference": "first-surface",
        "source": "CN 106249387 B focus table"
      },
      {
        "zoomStation": 0,
        "keyframe": 2,
        "objectDistanceMm": 350.08,
        "distanceReference": "first-surface",
        "source": "CN 106249387 B focus table"
      }
    ],
    "description": "Published unit-focus positions; d17 extends while all inter-lens gaps remain fixed. Object-to-first-surface MOD350.08mm plus source image track120.3547mm gives modeled object-to-image470.4347mm; retail450mm is kept separately. Intermediate gaps are interpolated, with no image-plane refocus."
  },
  "gaps": {
    "17": {
      "label": "d17",
      "values": [
        [
          35.5194,
          38.0062,
          43.0547
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 1.4,
    "fStops": [
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
  "rearPlates": [
    {
      "label": "GL",
      "thicknessMm": 2,
      "nd": 1.5168,
      "vd": 64.2,
      "gapAfterMm": 1,
      "source": "CN 106249387 B literal rear plate"
    }
  ],
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 47
  },
  "checks": {
    "gapSagFrac": 0.962
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
