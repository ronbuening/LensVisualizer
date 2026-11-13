// Qualified patent-example reconstruction; hidden pending integration.
// Inferred apertures/iris and assumed mean-index d reference; not factory identity.
import type { LensDataV2Input } from "../LensVisualizer/src/types/lensDataV2.js";
export default {
  "schema": 2,
  "key": "wray-unilite-50mm-f2-us2499264-table-a-representative",
  "maker": "Wray",
  "name": "Wray Unilite 50mm f/2 (Table A representative)",
  "visible": false,
  "catalog": {
    "elementCount": 5,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 50,
      "design": 50
    },
    "fNumber": {
      "marketing": 2,
      "design": 2
    }
  },
  "source": {
    "patentNumber": "US 2499264",
    "patentYear": 1950,
    "example": {
      "label": "Table A",
      "id": "A"
    },
    "authors": [
      "Charles Gorrie Wynne"
    ],
    "assignees": [
      "Wray Optical Works Limited"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Spherical patent glass",
      "nd": 1.613,
      "vd": 59.9,
      "indexReference": "d",
      "glass": "Mean source index; d reference assumed, not source-defined"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Spherical patent glass",
      "nd": 1.613,
      "vd": 59.9,
      "indexReference": "d",
      "glass": "Mean source index; d reference assumed, not source-defined"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Spherical patent glass",
      "nd": 1.7,
      "vd": 30.3,
      "indexReference": "d",
      "glass": "Mean source index; d reference assumed, not source-defined"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Spherical patent glass",
      "nd": 1.613,
      "vd": 59.9,
      "indexReference": "d",
      "glass": "Mean source index; d reference assumed, not source-defined"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Spherical patent glass",
      "nd": 1.613,
      "vd": 59.9,
      "indexReference": "d",
      "glass": "Mean source index; d reference assumed, not source-defined"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 27.605,
      "d": 4.765,
      "sd": 17,
      "medium": 1
    },
    {
      "label": "2",
      "R": 96.5,
      "d": 0,
      "sd": 17
    },
    {
      "label": "3",
      "R": 14.21,
      "d": 5.945,
      "sd": 11.5,
      "medium": 2
    },
    {
      "label": "4",
      "R": 34.599999999999994,
      "d": 0.75,
      "sd": 11.5,
      "medium": 3
    },
    {
      "label": "5",
      "R": 10.84,
      "d": 6.065723228865576,
      "sd": 9.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 4.974276771134424
    },
    {
      "label": "6",
      "R": -12.23,
      "d": 4.515000000000001,
      "sd": 9.5,
      "medium": 4
    },
    {
      "label": "7",
      "R": -14.854999999999999,
      "d": 0,
      "sd": 9.5
    },
    {
      "label": "8",
      "R": 63.824999999999996,
      "d": 2.5100000000000002,
      "sd": 11.5,
      "medium": 5
    },
    {
      "label": "9",
      "R": -81.2,
      "d": 28.547653358699996,
      "sd": 11.5
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "NO_INTERNAL_RECONSTRUCTION: infinity pilot only"
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
    "fullFieldDeg": 46,
    "maxTraceFieldDeg": 23
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
