// Qualified patent representative, hidden pending integration.
// Inferred caps and exact-midpoint realization; source sodiumD approximation.
import type { LensDataV2Input } from "../LensVisualizer/src/types/lensDataV2.js";
export default {
  "schema": 2,
  "key": "enna-tele-sandmar100-us2631497-representative",
  "maker": "Enna",
  "name": "Enna Tele-Sandmar 100mm f/4.5 (patent representative)",
  "visible": false,
  "catalog": {
    "elementCount": 4,
    "groupCount": 3,
    "focalLengthMm": {
      "marketing": 100,
      "design": 100
    },
    "fNumber": {
      "marketing": 4.5,
      "design": 4.5
    }
  },
  "source": {
    "patentNumber": "US 2631497",
    "patentYear": 1953,
    "authors": [
      "Franz Schlegel"
    ],
    "assignees": [
      "Harry J. Graw"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Spherical patent glass",
      "nd": 1.62398,
      "vd": 47,
      "indexReference": "d",
      "glass": "Source sodiumD589.3nm; d-reference engine approximation, no exact melt"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Spherical patent glass",
      "nd": 1.74066,
      "vd": 27.2,
      "indexReference": "d",
      "glass": "Source sodiumD589.3nm; d-reference engine approximation, no exact melt"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Spherical patent glass",
      "nd": 1.61008,
      "vd": 46,
      "indexReference": "d",
      "glass": "Source sodiumD589.3nm; d-reference engine approximation, no exact melt"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Spherical patent glass",
      "nd": 1.72719,
      "vd": 28,
      "indexReference": "d",
      "glass": "Source sodiumD589.3nm; d-reference engine approximation, no exact melt"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 24.01,
      "d": 10,
      "sd": 15.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": -40.877,
      "d": 1.2,
      "sd": 15.5,
      "medium": 2
    },
    {
      "label": "3",
      "R": 70.942,
      "d": 14.5,
      "sd": 15.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 14.5
    },
    {
      "label": "4",
      "R": -13.395,
      "d": 0.8,
      "sd": 9.0,
      "medium": 3
    },
    {
      "label": "5",
      "R": -97.629,
      "d": 0.03,
      "sd": 9.0
    },
    {
      "label": "6",
      "R": "flat",
      "d": 1.7,
      "sd": 9.0,
      "medium": 4
    },
    {
      "label": "7",
      "R": -27.623,
      "d": 39.07198037168,
      "sd": 9.0
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "NO_INTERNAL_RECONSTRUCTION: infinity representative only"
  },
  "aperture": {
    "nominalFNumber": 4.5,
    "fStops": [
      4.5,
      5.6,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22
  },
  "projection": {
    "kind": "rectilinear"
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
