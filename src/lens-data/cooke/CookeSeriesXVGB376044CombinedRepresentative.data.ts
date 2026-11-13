import type { LensDataV2Input } from "../LensVisualizer/src/types/lensDataV2.js";
export default {
  "schema": 2,
  "key": "cooke-seriesxv-gb376044-combined-representative",
  "maker": "Cooke",
  "name": "Cooke Series XV 12.25-inch f/6.8 (combined patent representative)",
  "visible": false,
  "catalog": {
    "elementCount": 8,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 311.15,
      "design": 311.15
    },
    "fNumber": {
      "marketing": 6.8,
      "design": 6.8
    }
  },
  "source": {
    "patentNumber": "GB 376044",
    "patentYear": 1932,
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
      "nd": 1.5472,
      "vd": 45.8,
      "indexReference": "d",
      "glass": "Source Chance458; historical D/engine d approximation, not measured melt"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Spherical patent glass",
      "nd": 1.5186,
      "vd": 60.3,
      "indexReference": "d",
      "glass": "Source Chance9322; historical D/engine d approximation, not measured melt"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Spherical patent glass",
      "nd": 1.6437,
      "vd": 48.3,
      "indexReference": "d",
      "glass": "Source not yet in catalogue; historical D/engine d approximation, not measured melt"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Spherical patent glass",
      "nd": 1.529,
      "vd": 51.6,
      "indexReference": "d",
      "glass": "Source Chance7863; historical D/engine d approximation, not measured melt"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Spherical patent glass",
      "nd": 1.529,
      "vd": 51.6,
      "indexReference": "d",
      "glass": "Source Chance7863: blank nD/V matched to earlier identifier; historical D/engine d approximation, not measured melt"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Spherical patent glass",
      "nd": 1.6437,
      "vd": 48.3,
      "indexReference": "d",
      "glass": "Source not yet in catalogue; historical D/engine d approximation, not measured melt"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Spherical patent glass",
      "nd": 1.5186,
      "vd": 60.3,
      "indexReference": "d",
      "glass": "Source Chance9322: blank nD/V matched to earlier identifier; historical D/engine d approximation, not measured melt"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Spherical patent glass",
      "nd": 1.5472,
      "vd": 45.8,
      "indexReference": "d",
      "glass": "Source Chance458: blank nD/V matched to earlier identifier; historical D/engine d approximation, not measured melt"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 93.98,
      "d": 4.064,
      "sd": 30.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 39.116,
      "d": 9.652,
      "sd": 30.5,
      "medium": 2
    },
    {
      "label": "3",
      "R": 81.28,
      "d": 3.2003999999999997,
      "sd": 30.5
    },
    {
      "label": "4",
      "R": 79.90839999999999,
      "d": 12.877799999999999,
      "sd": 30.0,
      "medium": 3
    },
    {
      "label": "5",
      "R": -241.681,
      "d": 3.2258,
      "sd": 30.0,
      "medium": 4
    },
    {
      "label": "6",
      "R": 83.82,
      "d": 5.715,
      "sd": 30.0
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 5.715
    },
    {
      "label": "7",
      "R": -62.230000000000004,
      "d": 2.413,
      "sd": 26.0,
      "medium": 5
    },
    {
      "label": "8",
      "R": 180.00979999999998,
      "d": 9.5758,
      "sd": 26.0,
      "medium": 6
    },
    {
      "label": "9",
      "R": -59.20739999999999,
      "d": 2.413,
      "sd": 26.0
    },
    {
      "label": "10",
      "R": -60.198,
      "d": 7.188199999999999,
      "sd": 22.5,
      "medium": 7
    },
    {
      "label": "11",
      "R": -29.209999999999997,
      "d": 3.0479999999999996,
      "sd": 22.5,
      "medium": 8
    },
    {
      "label": "12",
      "R": -69.85,
      "d": 288.9792920995148,
      "sd": 22.5
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "NO_INTERNAL_RECONSTRUCTION: combined infinity only; separate member operating modes not modeled"
  },
  "aperture": {
    "nominalFNumber": 6.8,
    "fStops": [
      6.8,
      8,
      11,
      16,
      22,
      32
    ],
    "maxFNumber": 32
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 55,
    "maxTraceFieldDeg": 27.5
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
