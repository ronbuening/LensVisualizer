import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "astrhori-40mm-f56-representative",
  "maker": "AstrHori",
  "name": "ASTRHORI 40mm f/5.6 M (representative patent)",
  "subtitle": "CN221175107U; inferred stop and derived infinity image plane",
  "visible": false,
  "catalog": {
    "lensMounts": [
      "leica-m"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 7,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 40,
      "design": 40.430566
    },
    "fNumber": {
      "marketing": 5.6,
      "design": 5.775795
    },
    "specs": [
      "7 ELEMENTS / 5 GROUPS",
      "INFERRED STOP / CAPS; DERIVED IMAGE PLANE",
      "REPRESENTATIVE, NOT FACTORY-EXACT"
    ]
  },
  "source": {
    "patentNumber": "CN 221175107 U",
    "patentYear": 2024,
    "example": {
      "label": "Sole example",
      "id": null
    },
    "authors": [
      "Changjia Liu"
    ],
    "assignees": [
      "Shenzhen Seven Artisans Photoelectric Technology Co., Ltd."
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.755,
      "vd": 52.33,
      "glass": "Literal patent nd/Vd; catalog identity not substituted"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.6,
      "glass": "Literal patent nd/Vd; catalog identity not substituted",
      "cemented": "D1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.62,
      "vd": 36.35,
      "glass": "Literal patent nd/Vd; catalog identity not substituted",
      "cemented": "D1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 2,
      "vd": 28.32,
      "glass": "Literal patent nd/Vd; catalog identity not substituted",
      "cemented": "D2"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.728,
      "vd": 28.3,
      "glass": "Literal patent nd/Vd; catalog identity not substituted",
      "cemented": "D2"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Negative Meniscus",
      "nd": 2,
      "vd": 28.32,
      "glass": "Literal patent nd/Vd; catalog identity not substituted"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Negative Meniscus",
      "nd": 1.805,
      "vd": 25.4,
      "glass": "Literal patent nd/Vd; catalog identity not substituted"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 15.63,
      "d": 2.43,
      "sd": 6.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 22.3,
      "d": 1.565,
      "sd": 6.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.565
    },
    {
      "label": "3",
      "R": 146.2,
      "d": 6,
      "sd": 5.2,
      "medium": 2
    },
    {
      "label": "4",
      "R": -8.2,
      "d": 1,
      "sd": 5.2,
      "medium": 3
    },
    {
      "label": "5",
      "R": 28.9,
      "d": 0.1,
      "sd": 6.5
    },
    {
      "label": "6",
      "R": 32.6,
      "d": 4.26,
      "sd": 6.5,
      "medium": 4
    },
    {
      "label": "7",
      "R": -10.5,
      "d": 2.6,
      "sd": 6.5,
      "medium": 5
    },
    {
      "label": "8",
      "R": 58.77,
      "d": 0.94,
      "sd": 7
    },
    {
      "label": "9",
      "R": -60,
      "d": 2.73,
      "sd": 7,
      "medium": 6
    },
    {
      "label": "10",
      "R": -19.19,
      "d": 1.3,
      "sd": 7
    },
    {
      "label": "11",
      "R": -11.6,
      "d": 3,
      "sd": 9.8,
      "medium": 7
    },
    {
      "label": "12",
      "R": -27.63,
      "d": 23.834523458021135,
      "sd": 9.8
    }
  ],
  "focus": {
    "closeFocusM": 1000000000.0,
    "description": "Infinity only; stop placement and image plane inferred. No factory or finite-focus claim."
  },
  "aperture": {
    "nominalFNumber": 5.775795142857143,
    "fStops": [
      5.775795,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22
  },
  "layout": {
    "yScFill": 0.4
  },
  "groups": [],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "3",
      "toSurface": "5"
    },
    {
      "text": "D2",
      "fromSurface": "6",
      "toSurface": "8"
    }
  ]
} satisfies LensDataV2Input;
export default LENS_DATA;
