import type { LensDataV2Input } from "../LensVisualizer/src/types/lensDataV2.js";
export default {
  "schema": 2,
  "key": "kodak-medalist-us2279384-e10-representative",
  "maker": "Kodak",
  "name": "Kodak Medalist 100mm f/3.5 (patent E10 representative)",
  "visible": false,
  "catalog": {
    "elementCount": 5,
    "groupCount": 3,
    "focalLengthMm": {
      "marketing": 100,
      "design": 100
    },
    "fNumber": {
      "marketing": 3.5,
      "design": 3.5
    }
  },
  "source": {
    "patentNumber": "US 2279384",
    "patentYear": 1942,
    "authors": [
      "Fred E. Altman"
    ],
    "assignees": [
      "Eastman Kodak Company"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Spherical patent glass",
      "nd": 1.611,
      "vd": 57.2,
      "indexReference": "d",
      "glass": "Source nD/nu interpreted conventional Abbe; historical D/engine d approximation, no measured full melt curve"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Spherical patent glass",
      "nd": 1.573,
      "vd": 57.5,
      "indexReference": "d",
      "glass": "Source nD/nu interpreted conventional Abbe; historical D/engine d approximation, no measured full melt curve"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Spherical patent glass",
      "nd": 1.605,
      "vd": 38.2,
      "indexReference": "d",
      "glass": "Source nD/nu interpreted conventional Abbe; historical D/engine d approximation, no measured full melt curve"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Spherical patent glass",
      "nd": 1.605,
      "vd": 38.2,
      "indexReference": "d",
      "glass": "Source nD/nu interpreted conventional Abbe; historical D/engine d approximation, no measured full melt curve"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Spherical patent glass",
      "nd": 1.744,
      "vd": 45.7,
      "indexReference": "d",
      "glass": "Source nD/nu interpreted conventional Abbe; historical D/engine d approximation, no measured full melt curve"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 30.7,
      "d": 8.49,
      "sd": 16.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": -44.6,
      "d": 1.55,
      "sd": 16.0,
      "medium": 2
    },
    {
      "label": "3",
      "R": 727.1,
      "d": 2.86,
      "sd": 16.0
    },
    {
      "label": "4",
      "R": -71.3,
      "d": 1.8,
      "sd": 13.5,
      "medium": 3
    },
    {
      "label": "5",
      "R": 29.9,
      "d": 3.27,
      "sd": 13.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 3.27
    },
    {
      "label": "6",
      "R": -751.7,
      "d": 1.59,
      "sd": 15.5,
      "medium": 4
    },
    {
      "label": "7",
      "R": 40.5,
      "d": 6.0,
      "sd": 15.5,
      "medium": 5
    },
    {
      "label": "8",
      "R": -56.7,
      "d": 84.173575804,
      "sd": 15.5
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "NO_INTERNAL_RECONSTRUCTION: infinity E10 representative, not finite-conjugate E6 enlarger"
  },
  "aperture": {
    "nominalFNumber": 3.5,
    "fStops": [
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
    "fullFieldDeg": 52,
    "maxTraceFieldDeg": 26
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
