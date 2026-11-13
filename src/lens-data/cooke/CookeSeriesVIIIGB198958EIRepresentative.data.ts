import type { LensDataV2Input } from "../LensVisualizer/src/types/lensDataV2.js";
export default {
  "schema": 2,
  "key": "cooke-seriesviii-gb198958-ei-representative",
  "maker": "Cooke",
  "name": "Cooke Series VIII 12-inch f/6 (patent EI representative)",
  "visible": false,
  "catalog": {
    "elementCount": 4,
    "groupCount": 2,
    "focalLengthMm": {
      "marketing": 304.8,
      "design": 304.8
    },
    "fNumber": {
      "marketing": 5.6,
      "design": 6
    }
  },
  "source": {
    "patentNumber": "GB 198958",
    "patentYear": 1923,
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
      "nd": 1.5744,
      "vd": 57.7,
      "indexReference": "d",
      "glass": "Chance9002; conventional Vd interpretation, historical D/engine d approximation, no melt equivalence"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Spherical patent glass",
      "nd": 1.6515,
      "vd": 33.4,
      "indexReference": "d",
      "glass": "Parra-Mantois6661; conventional Vd interpretation, historical D/engine d approximation, no melt equivalence"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Spherical patent glass",
      "nd": 1.5732,
      "vd": 51.9,
      "indexReference": "d",
      "glass": "Parra-Mantois6062; conventional Vd interpretation, historical D/engine d approximation, no melt equivalence"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Spherical patent glass",
      "nd": 1.6117,
      "vd": 37.4,
      "indexReference": "d",
      "glass": "Parra-Mantois6695 sourceEI, vs6675 sourceEII; conventional Vd interpretation, historical D/engine d approximation, no melt equivalence"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 54.60999999999999,
      "d": 10.668,
      "sd": 26.034999999999997,
      "medium": 1
    },
    {
      "label": "2",
      "R": -157.98799999999997,
      "d": 3.0479999999999996,
      "sd": 26.034999999999997,
      "medium": 2
    },
    {
      "label": "3",
      "R": 143.51,
      "d": 34.671,
      "sd": 26.034999999999997
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 34.671
    },
    {
      "label": "4",
      "R": -34.29,
      "d": 2.032,
      "sd": 19.049999999999997,
      "medium": 3
    },
    {
      "label": "5",
      "R": "flat",
      "d": 5.08,
      "sd": 19.049999999999997,
      "medium": 4
    },
    {
      "label": "6",
      "R": -54.102,
      "d": 151.80322609880798,
      "sd": 19.049999999999997
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "NO_INTERNAL_RECONSTRUCTION: source infinity representative; magnification2 is not macro2to1"
  },
  "aperture": {
    "nominalFNumber": 6,
    "fStops": [
      6,
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
    "fullFieldDeg": 20,
    "maxTraceFieldDeg": 10
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
