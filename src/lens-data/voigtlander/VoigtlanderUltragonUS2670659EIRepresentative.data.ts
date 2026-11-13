import type { LensDataV2Input } from "../LensVisualizer/src/types/lensDataV2.js";
export default {
  "schema": 2,
  "key": "voigtlander-ultragon-us2670659-ei-representative",
  "maker": "Voigtl\u00e4nder",
  "name": "Voigtl\u00e4nder Ultragon 115mm-scaled f/5.5 (patent EI representative)",
  "visible": false,
  "catalog": {
    "elementCount": 5,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 115,
      "design": 115
    },
    "fNumber": {
      "marketing": 5.5,
      "design": 5.5
    }
  },
  "source": {
    "patentNumber": "US 2670659",
    "patentYear": 1954,
    "authors": [
      "Albrecht Wilhelm Tronnier"
    ],
    "assignees": [
      "Voigtl\u00e4nder AG"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Spherical patent glass",
      "nd": 1.62095,
      "vd": 60.3,
      "indexReference": "d",
      "glass": "Source helium-d and Abbe nu; actual glass melt/full dispersion unspecified"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Spherical patent glass",
      "nd": 1.728,
      "vd": 28.4,
      "indexReference": "d",
      "glass": "Source helium-d and Abbe nu; actual glass melt/full dispersion unspecified"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Spherical patent glass",
      "nd": 1.51443,
      "vd": 54.7,
      "indexReference": "d",
      "glass": "Source helium-d and Abbe nu; actual glass melt/full dispersion unspecified"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Spherical patent glass",
      "nd": 1.60921,
      "vd": 58.8,
      "indexReference": "d",
      "glass": "Source helium-d and Abbe nu; actual glass melt/full dispersion unspecified"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Spherical patent glass",
      "nd": 1.56866,
      "vd": 56.2,
      "indexReference": "d",
      "glass": "Source helium-d and Abbe nu; actual glass melt/full dispersion unspecified"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 28.13015,
      "d": 5.335999999999999,
      "sd": 20.0,
      "medium": 1
    },
    {
      "label": "2",
      "R": 54.8872,
      "d": 0.0322,
      "sd": 20.0
    },
    {
      "label": "3",
      "R": 24.71005,
      "d": 1.96075,
      "sd": 15.0,
      "medium": 2
    },
    {
      "label": "4",
      "R": 19.40625,
      "d": 7.514099999999999,
      "sd": 15.0
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 7.514099999999999
    },
    {
      "label": "5",
      "R": -26.568450000000002,
      "d": 1.3064,
      "sd": 11.5,
      "medium": 3
    },
    {
      "label": "6",
      "R": 62.020649999999996,
      "d": 5.8811,
      "sd": 11.5,
      "medium": 4
    },
    {
      "label": "7",
      "R": -18.67715,
      "d": 1.1431,
      "sd": 11.5
    },
    {
      "label": "8",
      "R": -17.1419,
      "d": 2.3954500000000003,
      "sd": 15.0,
      "medium": 5
    },
    {
      "label": "9",
      "R": -27.8691,
      "d": 94.9969,
      "sd": 15.0
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "NO_INTERNAL_RECONSTRUCTION: representative infinity only, separate component modes not modeled"
  },
  "aperture": {
    "nominalFNumber": 5.5,
    "fStops": [
      5.5,
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
    "fullFieldDeg": 85,
    "maxTraceFieldDeg": 42.5
  },
  "layout": {
    "yScFill": 0.7
  }
} satisfies LensDataV2Input;
