import type { LensDataV2Input } from "../LensVisualizer/src/types/lensDataV2.js";
export default {
  "schema": 2,
  "key": "cooke-s2-us2502509-eii-representative",
  "maker": "Cooke",
  "name": "Cooke S2 25mm-scaled f/1.86 (patent EII representative)",
  "visible": false,
  "catalog": {
    "elementCount": 6,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 25,
      "design": 25
    },
    "fNumber": {
      "marketing": 1.8,
      "design": 1.86
    }
  },
  "source": {
    "patentNumber": "US 2502509",
    "patentYear": 1950,
    "authors": [
      "Gordon Henry Cook"
    ],
    "assignees": [
      "Taylor, Taylor and Hobson"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Spherical patent glass",
      "nd": 1.6909,
      "vd": 54.9,
      "indexReference": "d",
      "glass": "Source Chance Bros unspecified; historicalD/engine d approximation, not measured melt"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Spherical patent glass",
      "nd": 1.6909,
      "vd": 54.9,
      "indexReference": "d",
      "glass": "Source Chance Bros unspecified; historicalD/engine d approximation, not measured melt"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Spherical patent glass",
      "nd": 1.6227,
      "vd": 36,
      "indexReference": "d",
      "glass": "Source Chance Bros unspecified; historicalD/engine d approximation, not measured melt"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Spherical patent glass",
      "nd": 1.6535,
      "vd": 33.5,
      "indexReference": "d",
      "glass": "Source Chance Bros unspecified; historicalD/engine d approximation, not measured melt"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Spherical patent glass",
      "nd": 1.6909,
      "vd": 54.9,
      "indexReference": "d",
      "glass": "Source Chance Bros unspecified; historicalD/engine d approximation, not measured melt"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Spherical patent glass",
      "nd": 1.589,
      "vd": 61.4,
      "indexReference": "d",
      "glass": "Source Chance Bros unspecified; historicalD/engine d approximation, not measured melt"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 18.93,
      "d": 2.48,
      "sd": 10.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": 70.845,
      "d": 0.05,
      "sd": 10.0
    },
    {
      "label": "3",
      "R": 12.0975,
      "d": 3.3474999999999997,
      "sd": 7.5,
      "medium": 2
    },
    {
      "label": "4",
      "R": -70.845,
      "d": 1.24,
      "sd": 7.5,
      "medium": 3
    },
    {
      "label": "5",
      "R": 18.93,
      "d": 0.9924999999999999,
      "sd": 7.5
    },
    {
      "label": "6",
      "R": -70.845,
      "d": 0.9924999999999999,
      "sd": 4.5,
      "medium": 4
    },
    {
      "label": "7",
      "R": 7.9275,
      "d": 1.4874999999999998,
      "sd": 4.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.4874999999999998
    },
    {
      "label": "8",
      "R": 22.747500000000002,
      "d": 3.7199999999999998,
      "sd": 5.0,
      "medium": 5
    },
    {
      "label": "9",
      "R": -6.955,
      "d": 1.1775,
      "sd": 5.0,
      "medium": 6
    },
    {
      "label": "10",
      "R": -27.6225,
      "d": 14.23871924715,
      "sd": 5.0
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "NO_INTERNAL_RECONSTRUCTION: infinity scaled normalized EII representative only"
  },
  "aperture": {
    "nominalFNumber": 1.86,
    "fStops": [
      1.86,
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
    "fullFieldDeg": 40,
    "maxTraceFieldDeg": 20
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
