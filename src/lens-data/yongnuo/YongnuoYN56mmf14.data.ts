import type { LensDataV2Input } from "../../types/lensDataV2.js";

// Literal unscaled table; S11 absent in source. SDs inferred from Fig.1, not published.
// Stop uses Fig.2 pupil radius 19.4398 mm, not nominal marketing f/1.4.
const LENS_DATA = {
  "schema": 2,
  "key": "yongnuo-yn56f14-cn220171327u",
  "maker": "Yongnuo",
  "name": "YONGNUO YN 56mm f/1.4 S DA DSM WL PRO",
  "subtitle": "CN 220171327 U \u2014 associated patent model, not factory-certified",
  "catalog": {
    "lensMounts": [
      "sony-fe"
    ],
    "imageFormat": "aps-c",
    "specs": [
      "10 ELEMENTS / 9 GROUPS",
      "PATENT-ASSOCIATED MODEL",
      "SOURCE PUPIL \u2248 f/1.494"
    ],
    "elementCount": 10,
    "groupCount": 9,
    "focalLengthMm": {
      "marketing": 56,
      "design": 58.09575357151464
    },
    "fNumber": {
      "marketing": 1.4,
      "design": 1.4942477178652722
    }
  },
  "source": {
    "patentNumber": "CN 220171327 U",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 2023,
    "errata": [{"status": "unresolved", "note": "Header 56mm f/1.4 differs from infinity table 58.066mm and Fig.2 pupil radius 19.4398mm. Literal rounded prescription gives 58.095754mm and f/1.494248; preserve source pupil and literal image gap, with calculated paraxial focus 0.032832mm behind it."}],
    "authors": [
      "Ying Zhuang",
      "Yuanhua Ye",
      "Yongsheng Zhuang",
      "Yongxiao Zhuang"
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
      "nd": 1.847,
      "vd": 23.79,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.603,
      "vd": 38,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.883,
      "vd": 39.23,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.569,
      "vd": 71.31,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.847,
      "vd": 23.79,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Negative Meniscus",
      "nd": 1.438,
      "vd": 94.58,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.883,
      "vd": 40.79,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.835,
      "vd": 42.73,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Biconcave Negative",
      "nd": 1.62,
      "vd": 36.33,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Biconvex Positive",
      "nd": 1.883,
      "vd": 39.23,
      "glass": "Unidentified patent glass (rounded nd/vd)"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 58.916,
      "d": 4.5,
      "sd": 20,
      "medium": 1
    },
    {
      "label": "2",
      "R": 300.632,
      "d": 1.15,
      "sd": 20
    },
    {
      "label": "3",
      "R": -584.681,
      "d": 2,
      "sd": 20,
      "medium": 2
    },
    {
      "label": "4",
      "R": 41.371,
      "d": 7.05,
      "sd": 20
    },
    {
      "label": "5",
      "R": 34.59,
      "d": 7.06,
      "sd": 19,
      "medium": 3
    },
    {
      "label": "6",
      "R": 951.839,
      "d": 0.2,
      "sd": 19
    },
    {
      "label": "7",
      "R": 26.744,
      "d": 8,
      "sd": 16,
      "medium": 4
    },
    {
      "label": "8",
      "R": -108,
      "d": 1.51,
      "sd": 16,
      "medium": 5
    },
    {
      "label": "9",
      "R": 18.127,
      "d": 7,
      "sd": 16
    },
    {
      "label": "STO",
      "R": "flat"
    },
    {
      "label": "12",
      "R": -18.9,
      "d": 4,
      "sd": 12.5,
      "medium": 6
    },
    {
      "label": "13",
      "R": -25.576,
      "d": 3.6,
      "sd": 12.5
    },
    {
      "label": "14",
      "R": 65.85,
      "d": 4,
      "sd": 13,
      "medium": 7
    },
    {
      "label": "15",
      "R": -65.85,
      "sd": 13
    },
    {
      "label": "16",
      "R": 1162.805,
      "d": 3.4,
      "sd": 13,
      "medium": 8
    },
    {
      "label": "17",
      "R": -47.445,
      "d": 2.39,
      "sd": 13
    },
    {
      "label": "18",
      "R": -34.532,
      "d": 1.26,
      "sd": 12.5,
      "medium": 9
    },
    {
      "label": "19",
      "R": 24.876,
      "d": 3.24,
      "sd": 12.5
    },
    {
      "label": "20",
      "R": 44.54,
      "d": 4.95,
      "sd": 14,
      "medium": 10
    },
    {
      "label": "21",
      "R": -266.251,
      "d": 11.5,
      "sd": 14
    }
  ],
  "focus": {
    "closeFocusM": 0.6,
    "keyframes": [
      0,
      0.475755343,
      1
    ],
    "published": [
      1,
      2
    ],
    "description": "Published internal-focus positions: GR2 (L6\u2013L7) translates 6.785 mm objectward. Source object distances 1127.602 and 505 mm are object-to-first-surface; approximate object-to-image MOD 599.998 mm.",
    "conjugates": [
      {
        "zoomStation": 0,
        "keyframe": 1,
        "objectDistanceMm": 1127.602,
        "distanceReference": "first-surface",
        "source": "CN220171327U Table 2, object-space surface distance"
      },
      {
        "zoomStation": 0,
        "keyframe": 2,
        "objectDistanceMm": 505,
        "distanceReference": "first-surface",
        "source": "CN220171327U Table 2, object-space surface distance"
      }
    ]
  },
  "gaps": {
    "STO": {
      "label": "D10",
      "values": [
        [
          12.688,
          9.46,
          5.903
        ]
      ]
    },
    "15": {
      "label": "D15",
      "values": [
        [
          2.5,
          5.728,
          9.285
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 1.4942477178652722,
    "fStops": [
      1.4942477178652722,
      2,
      2.8,
      4,
      5.6,
      8,
      11,
      16
    ]
  },
  "projection": {"kind": "rectilinear", "fullFieldDeg": 25.52},
  "rearPlates": [
    {
      "label": "GL",
      "thicknessMm": 2,
      "nd": 1.517,
      "vd": 64.2,
      "gapAfterMm": 1,
      "source": "CN220171327U Table 1 S22\u2013S23; literal physical plate and image spacing"
    }
  ],
  "groups": [
    {
      "text": "GR1",
      "fromSurface": "1",
      "toSurface": "9"
    },
    {
      "text": "GR2 FOCUS",
      "fromSurface": "12",
      "toSurface": "15"
    },
    {
      "text": "GR3",
      "fromSurface": "16",
      "toSurface": "21"
    }
  ],
  "doublets": [
    {
      "text": "L4/L5",
      "fromSurface": "7",
      "toSurface": "9"
    }
  ],
  "layout": {
    "yScFill": 0.32
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
