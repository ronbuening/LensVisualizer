import type { LensDataV2Input } from "../LensVisualizer/src/types/lensDataV2.js";
export default {
  "schema": 2,
  "key": "cooke-seriesxi-gb155640-ei-representative",
  "maker": "Cooke",
  "name": "Cooke Series XI 100mm-scaled f/3 (patent EI representative)",
  "visible": false,
  "catalog": {
    "elementCount": 3,
    "groupCount": 3,
    "focalLengthMm": {
      "marketing": 100,
      "design": 100
    },
    "fNumber": {
      "marketing": 3.5,
      "design": 3
    }
  },
  "source": {
    "patentNumber": "GB 155640",
    "patentYear": 1920,
    "authors": [
      "Horace William Lee"
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
      "nd": 1.613,
      "vd": 58.5,
      "indexReference": "d",
      "glass": "Source Parra-Mantois 6540; conventional Vd interpretation, historical D/engine d approximation; no measured melt curve"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Spherical patent glass",
      "nd": 1.621,
      "vd": 36.2,
      "indexReference": "d",
      "glass": "Source Chance 361; conventional Vd interpretation, historical D/engine d approximation; no measured melt curve"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Spherical patent glass",
      "nd": 1.613,
      "vd": 58.5,
      "indexReference": "d",
      "glass": "Source Parra-Mantois 6540; conventional Vd interpretation, historical D/engine d approximation; no measured melt curve"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 40.13,
      "d": 6,
      "sd": 17,
      "medium": 1
    },
    {
      "label": "2",
      "R": -537,
      "d": 10,
      "sd": 17
    },
    {
      "label": "3",
      "R": -47.02,
      "d": 1,
      "sd": 15,
      "medium": 2
    },
    {
      "label": "4",
      "R": 40.01,
      "d": 5.38,
      "sd": 15
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 5.38
    },
    {
      "label": "5",
      "R": 234.5,
      "d": 6,
      "sd": 15,
      "medium": 3
    },
    {
      "label": "6",
      "R": -37.94,
      "d": 85.3257513035,
      "sd": 15
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "NO_INTERNAL_RECONSTRUCTION: infinity normalized representative only"
  },
  "aperture": {
    "nominalFNumber": 3,
    "fStops": [
      3,
      3.5,
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
    "fullFieldDeg": 45,
    "maxTraceFieldDeg": 22.5
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
