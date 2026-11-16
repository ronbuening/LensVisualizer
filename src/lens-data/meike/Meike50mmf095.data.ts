import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Representative Table 1. Derived paraxial image plane; source final gap 13.89 mm retained in audit. No source radii, internal gaps, glasses, clear apertures or stop changed. */
const LENS_DATA = {
  "schema": 2,
  "key": "meike-50mm-f095",
  "maker": "Meike",
  "name": "MEIKE 50mm f/0.95",
  "subtitle": "CN216526483U Table 1 \u2014 derived paraxial infinity image plane; retail identity unconfirmed",
  "catalog": {
    "imageFormat": "aps-c",
    "elementCount": 7,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 50,
      "design": 50.48152158616866
    },
    "fNumber": {
      "marketing": 0.95,
      "design": 0.9846087232798052
    },
    "specs": [
      "7 ELEMENTS / 5 GROUPS",
      "SOURCE OPTICS; DERIVED INFINITY IMAGE PLANE",
      "PRINTED FINAL GAP 13.89 mm; MODELED 14.759083 mm",
      "RETAIL IDENTITY UNCONFIRMED"
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
      "glass": "H-ZLAF55D (CDGM)"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.804,
      "vd": 46.574487,
      "glass": "H-ZLAF50E (CDGM)"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.59282,
      "vd": 68.62,
      "glass": "FCD515 (HOYA)",
      "cemented": "D1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.84666,
      "vd": 23.784497,
      "glass": "H-ZF52 (CDGM)",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.64769,
      "vd": 33.840317,
      "glass": "H-ZF1 (CDGM)",
      "cemented": "D2"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.83481,
      "vd": 42.725177,
      "glass": "H-ZLAF55D (CDGM)",
      "cemented": "D2"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Positive Meniscus",
      "nd": 1.83481,
      "vd": 42.725177,
      "glass": "H-ZLAF55D (CDGM)"
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
      "d": 14.759082880782302,
      "sd": 15.555
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity only. Source final image interval 13.89 mm retained in audit; modeled 14.759082880782301 mm is computed d-line paraxial focus (+0.869082880782301 mm). Authorized derived adjustment, not a source correction. No close-focus reconstruction."
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
      "text": "D1",
      "fromSurface": "5",
      "toSurface": "7"
    },
    {
      "text": "D2",
      "fromSurface": "9",
      "toSurface": "11"
    }
  ]
} satisfies LensDataV2Input;
export default LENS_DATA;
