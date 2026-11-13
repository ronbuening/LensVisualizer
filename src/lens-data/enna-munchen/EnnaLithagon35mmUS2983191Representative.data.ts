// Qualified historical representative: source f/2.5, marketed family f/2.8.
// Hidden; inferred apertures/iris and mean-index d assumption.
import type { LensDataV2Input } from "../LensVisualizer/src/types/lensDataV2.js";
export default {
  "schema": 2,
  "key": "enna-lithagon-35mm-us2983191-representative",
  "maker": "Enna",
  "name": "Enna Lithagon 35mm (f/2.5 patent representative)",
  "visible": false,
  "catalog": {
    "elementCount": 6,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 35,
      "design": 35
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.5
    }
  },
  "source": {
    "patentNumber": "US 2983191",
    "patentYear": 1961,
    "authors": [
      "Johann Lautenbacher"
    ],
    "assignees": [
      "Enna-Werk Optische Anstalt Dr. Appelt K.G."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Spherical patent glass",
      "nd": 1.51821,
      "vd": 65.2,
      "indexReference": "d",
      "glass": "Source mean index with d-reference assumption; no exact melt"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Spherical patent glass",
      "nd": 1.744,
      "vd": 44.7,
      "indexReference": "d",
      "glass": "Source mean index with d-reference assumption; no exact melt"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Spherical patent glass",
      "nd": 1.69347,
      "vd": 53.5,
      "indexReference": "d",
      "glass": "Source mean index with d-reference assumption; no exact melt"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Spherical patent glass",
      "nd": 1.68893,
      "vd": 31.1,
      "indexReference": "d",
      "glass": "Source mean index with d-reference assumption; no exact melt"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Spherical patent glass",
      "nd": 1.6668,
      "vd": 33.1,
      "indexReference": "d",
      "glass": "Source mean index with d-reference assumption; no exact melt"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Spherical patent glass",
      "nd": 1.691,
      "vd": 54.9,
      "indexReference": "d",
      "glass": "Source mean index with d-reference assumption; no exact melt"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 101.5,
      "d": 1.4000000000000001,
      "sd": 19.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": 27.615000000000002,
      "d": 15.4,
      "sd": 19.0
    },
    {
      "label": "3",
      "R": 32.550000000000004,
      "d": 2.45,
      "sd": 9.5,
      "medium": 2
    },
    {
      "label": "4",
      "R": -206.5,
      "d": 0.07,
      "sd": 9.5
    },
    {
      "label": "5",
      "R": 21.4725,
      "d": 2.0300000000000002,
      "sd": 9.5,
      "medium": 3
    },
    {
      "label": "6",
      "R": 49.0,
      "d": 1.9775,
      "sd": 9.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.9775
    },
    {
      "label": "7",
      "R": -32.9,
      "d": 1.925,
      "sd": 9.5,
      "medium": 4
    },
    {
      "label": "8",
      "R": 18.305,
      "d": 2.87,
      "sd": 9.5
    },
    {
      "label": "9",
      "R": 134.75,
      "d": 2.45,
      "sd": 9.5,
      "medium": 5
    },
    {
      "label": "10",
      "R": 49.0,
      "d": 4.2,
      "sd": 9.5,
      "medium": 6
    },
    {
      "label": "11",
      "R": -18.515,
      "d": 35.3325,
      "sd": 9.5
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "NO_INTERNAL_RECONSTRUCTION: infinity source plane only"
  },
  "aperture": {
    "nominalFNumber": 2.5,
    "fStops": [
      2.5,
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
    "fullFieldDeg": 65,
    "maxTraceFieldDeg": 32.5
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
