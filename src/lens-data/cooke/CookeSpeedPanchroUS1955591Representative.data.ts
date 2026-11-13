// Qualified 16mm-cinema patent representative; not factory1inch identification.
// Inferred iris/caps and strong field clipping; hidden pending integration.
import type { LensDataV2Input } from "../LensVisualizer/src/types/lensDataV2.js";
export default {
  "schema": 2,
  "key": "cooke-speed-panchro-us1955591-representative",
  "maker": "Cooke",
  "name": "Cooke Speed Panchro 1-inch f/2 (patent representative)",
  "visible": false,
  "catalog": {
    "elementCount": 6,
    "groupCount": 4,
    "imageFormat": "16mm-cinema",
    "focalLengthMm": {
      "marketing": 25.4,
      "design": 25.4
    },
    "fNumber": {
      "marketing": 2,
      "design": 2
    }
  },
  "source": {
    "patentNumber": "US 1955591",
    "patentYear": 1934,
    "authors": [
      "Horace William Lee"
    ],
    "assignees": [
      "Kapella Limited"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Spherical patent glass",
      "nd": 1.61,
      "vd": 53.3,
      "indexReference": "d",
      "glass": "Source Chance Bros 3894; historicalD/engine d approximation, not measured melt"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Spherical patent glass",
      "nd": 1.615,
      "vd": 56.1,
      "indexReference": "d",
      "glass": "Source Chance Bros 3265; historicalD/engine d approximation, not measured melt"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Spherical patent glass",
      "nd": 1.6134,
      "vd": 36.9,
      "indexReference": "d",
      "glass": "Source Chance Bros 4743; historicalD/engine d approximation, not measured melt"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Spherical patent glass",
      "nd": 1.6469,
      "vd": 33.7,
      "indexReference": "d",
      "glass": "Source Chance Bros 337; historicalD/engine d approximation, not measured melt"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Spherical patent glass",
      "nd": 1.6437,
      "vd": 48.3,
      "indexReference": "d",
      "glass": "Source Chance Bros unnumbered new glass; historicalD/engine d approximation, not measured melt"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Spherical patent glass",
      "nd": 1.6234,
      "vd": 56.3,
      "indexReference": "d",
      "glass": "Source Chance Bros 6665; historicalD/engine d approximation, not measured melt"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 19.4564,
      "d": 2.032,
      "sd": 9.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": 100.27919999999999,
      "d": 0.127,
      "sd": 9.0
    },
    {
      "label": "3",
      "R": 10.1854,
      "d": 3.8099999999999996,
      "sd": 5.0,
      "medium": 2
    },
    {
      "label": "4",
      "R": 26.288999999999998,
      "d": 1.1176,
      "sd": 5.0,
      "medium": 3
    },
    {
      "label": "5",
      "R": 6.5278,
      "d": 2.794,
      "sd": 5.0
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.794
    },
    {
      "label": "6",
      "R": -7.874,
      "d": 1.1429999999999998,
      "sd": 5.0,
      "medium": 4
    },
    {
      "label": "7",
      "R": 12.7,
      "d": 3.9878,
      "sd": 5.0,
      "medium": 5
    },
    {
      "label": "8",
      "R": -10.540999999999999,
      "d": 0.127,
      "sd": 5.0
    },
    {
      "label": "9",
      "R": 35.559999999999995,
      "d": 2.0574,
      "sd": 7.0,
      "medium": 6
    },
    {
      "label": "10",
      "R": -25.654,
      "d": 17.2312996905702,
      "sd": 7.0
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "NO_INTERNAL_RECONSTRUCTION: infinity 16mm-cinema representative only"
  },
  "aperture": {
    "nominalFNumber": 2,
    "fStops": [
      2,
      2.8,
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
    "fullFieldDeg": 35,
    "maxTraceFieldDeg": 17.5
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
