import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "hasselkus-richmond-us2116264-patent-reference",
  "maker": "Hasselkus & Richmond",
  "name": "FIVE-MENISCUS WIDE-ANGLE PATENT REFERENCE",
  "subtitle": "1938 f/5.6; PATENT ONLY",
  "visible": false,
  "catalog": {
    "specs": [
      "5 ELEMENTS / 5 GROUPS",
      "PATENT ONLY; RETAIL IDENTITY UNPROVED",
      "ESTIMATED STOP AND RIMS",
      "INFINITY ONLY"
    ],
    "elementCount": 5,
    "groupCount": 5,
    "focalLengthMm": {
      "design": 194.92710999441644
    },
    "fNumber": {
      "design": 5.6
    }
  },
  "source": {
    "patentNumber": "US 2,116,264",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1938,
    "authors": [
      "John William Hasselkus",
      "George Arthur Richmond"
    ],
    "assignees": [],
    "sdSource": "heuristic"
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "L1",
      "type": "Meniscus",
      "nd": 1.6202,
      "vd": 60.4,
      "indexReference": "d"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "L2",
      "type": "Meniscus",
      "nd": 1.7174,
      "vd": 29.5,
      "indexReference": "d"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "L3",
      "type": "Meniscus",
      "nd": 1.7174,
      "vd": 29.5,
      "indexReference": "d"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "L4",
      "type": "Meniscus",
      "nd": 1.6202,
      "vd": 60.4,
      "indexReference": "d"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "L5",
      "type": "Meniscus",
      "nd": 1.6202,
      "vd": 60.4,
      "indexReference": "d"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 36.15,
      "d": 14.33,
      "sd": 28,
      "medium": 1
    },
    {
      "label": "2",
      "R": 54.15,
      "d": 0.06,
      "sd": 28
    },
    {
      "label": "3",
      "R": 29.45,
      "d": 1.61,
      "sd": 20,
      "medium": 2
    },
    {
      "label": "4",
      "R": 23.75,
      "d": 20.28,
      "sd": 20
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 20.28
    },
    {
      "label": "5",
      "R": -23.75,
      "d": 1.61,
      "sd": 20,
      "medium": 3
    },
    {
      "label": "6",
      "R": -29.45,
      "d": 0.06,
      "sd": 20
    },
    {
      "label": "7",
      "R": -55.65,
      "d": 6.2,
      "sd": 28,
      "medium": 4
    },
    {
      "label": "8",
      "R": -44.05,
      "d": 0.06,
      "sd": 28
    },
    {
      "label": "9",
      "R": -47.9,
      "d": 10.7,
      "sd": 28,
      "medium": 5
    },
    {
      "label": "10",
      "R": -38.95,
      "d": 152.9768202512519,
      "sd": 28
    }
  ],
  "aperture": {
    "nominalFNumber": 5.6,
    "fStops": [
      5.6,
      8,
      11,
      16,
      22
    ]
  },
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Infinity-only; literal source nd/V, radii/thickness/air gaps preserved; calculated paraxial BFD; estimated central iris and rim diameters; source 100-degree field not verified. No production identity."
  },
  "groups": [],
  "doublets": [],
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
