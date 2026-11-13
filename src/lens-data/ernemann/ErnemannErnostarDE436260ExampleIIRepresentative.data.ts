// Qualified source-example reconstruction, not exact retail85mm or factory100mm.
// Inferred conventionalVd and caps; strong source-field clipping/blocking retained.
import type { LensDataV2Input } from "../LensVisualizer/src/types/lensDataV2.js";
export default {
  "schema": 2,
  "key": "ernemann-ernostar-de436260-eii-representative",
  "maker": "Ernemann",
  "name": "Ernemann Ernostar 100mm f/1.8 (Example II representative)",
  "visible": false,
  "catalog": {
    "elementCount": 6,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 100,
      "design": 100
    },
    "fNumber": {
      "marketing": 1.8,
      "design": 1.8
    }
  },
  "source": {
    "patentNumber": "DE 436260",
    "patentYear": 1926,
    "example": {
      "id": "2",
      "label": "Example II"
    },
    "authors": [
      "Ludwig Bertele"
    ],
    "assignees": [
      "Ernemann-Werke A.G."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Spherical patent glass",
      "nd": 1.5638,
      "vd": 60.75,
      "indexReference": "d",
      "glass": "Patent nu interpreted as conventional Vd; formula not explicit in DE reproduction; no glass identity"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Spherical patent glass",
      "nd": 1.6053,
      "vd": 59.4,
      "indexReference": "d",
      "glass": "Patent nu interpreted as conventional Vd; formula not explicit in DE reproduction; no glass identity"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Spherical patent glass",
      "nd": 1.6485,
      "vd": 33.8,
      "indexReference": "d",
      "glass": "Patent nu interpreted as conventional Vd; formula not explicit in DE reproduction; no glass identity"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Spherical patent glass",
      "nd": 1.627,
      "vd": 39,
      "indexReference": "d",
      "glass": "Patent nu interpreted as conventional Vd; formula not explicit in DE reproduction; no glass identity"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Spherical patent glass",
      "nd": 1.6223,
      "vd": 36,
      "indexReference": "d",
      "glass": "Patent nu interpreted as conventional Vd; formula not explicit in DE reproduction; no glass identity"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Spherical patent glass",
      "nd": 1.622,
      "vd": 53.15,
      "indexReference": "d",
      "glass": "Patent nu interpreted as conventional Vd; formula not explicit in DE reproduction; no glass identity"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 50.2,
      "d": 7.26,
      "sd": 28.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": 181.5,
      "d": 0.53,
      "sd": 28.0
    },
    {
      "label": "3",
      "R": 45.4,
      "d": 11.74,
      "sd": 25.0,
      "medium": 2
    },
    {
      "label": "4",
      "R": -106.8,
      "d": 6.94,
      "sd": 25.0,
      "medium": 3
    },
    {
      "label": "5",
      "R": -41.6,
      "d": 1.07,
      "sd": 25.0,
      "medium": 4
    },
    {
      "label": "6",
      "R": 92,
      "d": 4.46,
      "sd": 25.0
    },
    {
      "label": "7",
      "R": -179,
      "d": 1.07,
      "sd": 17.5,
      "medium": 5
    },
    {
      "label": "8",
      "R": 30.4,
      "d": 5.87,
      "sd": 17.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 6.62
    },
    {
      "label": "9",
      "R": 85.4,
      "d": 5.34,
      "sd": 20.0,
      "medium": 6
    },
    {
      "label": "10",
      "R": -85.4,
      "d": 56.83526107,
      "sd": 20.0
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "NO_INTERNAL_RECONSTRUCTION: infinity representative only"
  },
  "aperture": {
    "nominalFNumber": 1.8,
    "fStops": [
      1.8,
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
    "fullFieldDeg": 50,
    "maxTraceFieldDeg": 25
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
