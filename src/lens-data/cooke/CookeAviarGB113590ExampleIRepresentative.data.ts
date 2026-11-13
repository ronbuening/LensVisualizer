// GB Example I representative, not a correction of US1361207 or exact factory model.
// Inferred caps/iris; +0.637% focal residual retained; hidden pending integration.
import type { LensDataV2Input } from "../LensVisualizer/src/types/lensDataV2.js";
export default {
  "schema": 2,
  "key": "cooke-aviar-gb113590-ei-representative",
  "maker": "Cooke",
  "name": "Cooke Aviar 100mm-class f/4.5 (GB Example I representative)",
  "visible": false,
  "catalog": {
    "elementCount": 4,
    "groupCount": 4,
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
    "example": {
      "id": "1",
      "label": "Example I"
    },
    "patentNumber": "GB 113590",
    "patentYear": 1918,
    "authors": [
      "Arthur Warmisham"
    ],
    "assignees": [
      "Taylor, Taylor & Hobson Limited"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Spherical patent glass",
      "nd": 1.6116,
      "vd": 56.400000000000006,
      "indexReference": "d",
      "glass": "Source sodiumD/V explicitly defined; d-reference engine approximation"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Spherical patent glass",
      "nd": 1.5682,
      "vd": 43.4,
      "indexReference": "d",
      "glass": "Source sodiumD/V explicitly defined; d-reference engine approximation"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Spherical patent glass",
      "nd": 1.5502,
      "vd": 45.8,
      "indexReference": "d",
      "glass": "Source sodiumD/V explicitly defined; d-reference engine approximation"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Spherical patent glass",
      "nd": 1.6116,
      "vd": 56.400000000000006,
      "indexReference": "d",
      "glass": "Source sodiumD/V explicitly defined; d-reference engine approximation"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 29.76,
      "d": 4.55,
      "sd": 12.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": -81.52,
      "d": 2.03,
      "sd": 12.0
    },
    {
      "label": "3",
      "R": -42.85,
      "d": 1.0,
      "sd": 12.0,
      "medium": 2
    },
    {
      "label": "4",
      "R": 44.64,
      "d": 1.81,
      "sd": 12.0
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.81
    },
    {
      "label": "5",
      "R": -50.41,
      "d": 1.0,
      "sd": 12.0,
      "medium": 3
    },
    {
      "label": "6",
      "R": 43.3,
      "d": 1.93,
      "sd": 12.0
    },
    {
      "label": "7",
      "R": 81.52,
      "d": 4.55,
      "sd": 12.0,
      "medium": 4
    },
    {
      "label": "8",
      "R": -29.76,
      "d": 92.278731268,
      "sd": 12.0
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
