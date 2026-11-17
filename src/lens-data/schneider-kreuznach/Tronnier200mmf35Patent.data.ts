import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "schneider-tronnier-200-f3-5-us2084714-patent-reference",
  "maker": "Schneider",
  "name": "SCHNEIDER / TRONNIER 200mm f/3.5 PATENT REFERENCE",
  "subtitle": "1935 DESIGN / 1937 GRANT \u2014 NO PRODUCTION MATCH",
  "visible": false,
  "catalog": {
    "specs": [
      "4 ELEMENTS / 3 GROUPS",
      "PATENT-ONLY REFERENCE",
      "ESTIMATED STOP AND RIMS",
      "INFINITY ONLY"
    ],
    "elementCount": 4,
    "groupCount": 3,
    "focalLengthMm": {
      "design": 200.21812162868986
    },
    "fNumber": {
      "design": 3.5
    }
  },
  "source": {
    "patentNumber": "US 2,084,714",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1937,
    "authors": [
      "Albrecht Wilhelm Tronnier"
    ],
    "assignees": [
      "Jos. Schneider & Co."
    ],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.6202,
      "vd": 60,
      "indexReference": "D",
      "indexReferenceNote": "Source says yellow ray; sodium D used as explicit historical convention, not named factory glass."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.5785,
      "vd": 42.3,
      "indexReference": "D",
      "indexReferenceNote": "Source says yellow ray; sodium D used as explicit historical convention, not named factory glass."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.5315,
      "vd": 49.1,
      "indexReference": "D",
      "indexReferenceNote": "Source says yellow ray; sodium D used as explicit historical convention, not named factory glass.",
      "cemented": "C1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.6202,
      "vd": 60,
      "indexReference": "D",
      "indexReferenceNote": "Source says yellow ray; sodium D used as explicit historical convention, not named factory glass.",
      "cemented": "C1"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 64.84,
      "d": 11.98,
      "sd": 31,
      "medium": 1
    },
    {
      "label": "2",
      "R": -1159.6,
      "d": 13.1,
      "sd": 31
    },
    {
      "label": "3",
      "R": -117,
      "d": 5.76,
      "sd": 31,
      "medium": 2
    },
    {
      "label": "4",
      "R": 55.22,
      "d": 6.55,
      "sd": 31
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 6.55
    },
    {
      "label": "5",
      "R": -1159.6,
      "d": 4.3,
      "sd": 31,
      "medium": 3
    },
    {
      "label": "6",
      "R": 52.36,
      "d": 17.58,
      "sd": 31,
      "medium": 4
    },
    {
      "label": "7",
      "R": -84.72,
      "d": 163.94874503753675,
      "sd": 31
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity-only patent reference."
  },
  "aperture": {
    "nominalFNumber": 3.5,
    "fStops": [
      3.5,
      4,
      5.6,
      8,
      11,
      16,
      22
    ]
  },
  "groups": [],
  "doublets": [
    {
      "text": "C1 doublet",
      "fromSurface": "5",
      "toSurface": "7"
    }
  ],
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
