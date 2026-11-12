import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Literal whole Table A x1.35; fixed printed BF57.78. Inferred figure boundaries, not factory exact; infinity only, no overrides. */
export default {
  "schema": 2,
  "key": "isco-tele-iscaron-135mm-f28-representative",
  "maker": "ISCO",
  "name": "ISCO Tele-Iscaron 135mm f/2.8 (patent-family representative)",
  "visible": false,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "nd": 1.58913,
      "vd": 61.2,
      "indexReference": "d",
      "glass": "Literal patent n/Abbe pair; conventional helium-d interpretation, no melt identity",
      "label": "Element 1",
      "type": "Patent spherical glass"
    },
    {
      "id": 2,
      "name": "L2",
      "nd": 1.589,
      "vd": 48.6,
      "indexReference": "d",
      "glass": "Literal patent n/Abbe pair; conventional helium-d interpretation, no melt identity",
      "label": "Element 2",
      "type": "Patent spherical glass"
    },
    {
      "id": 3,
      "name": "L3",
      "nd": 1.74077,
      "vd": 27.7,
      "indexReference": "d",
      "glass": "Literal patent n/Abbe pair; conventional helium-d interpretation, no melt identity",
      "label": "Element 3",
      "type": "Patent spherical glass"
    },
    {
      "id": 4,
      "name": "L4",
      "nd": 1.6727,
      "vd": 32.2,
      "indexReference": "d",
      "glass": "Literal patent n/Abbe pair; conventional helium-d interpretation, no melt identity",
      "label": "Element 4",
      "type": "Patent spherical glass"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 98.0235,
      "d": 5.3325,
      "sd": 25.785,
      "medium": 1
    },
    {
      "label": "2",
      "R": 619.7175,
      "d": 0.81,
      "sd": 25.785
    },
    {
      "label": "3",
      "R": 48.5325,
      "d": 30.3075,
      "sd": 23.625,
      "medium": 2
    },
    {
      "label": "4",
      "R": -160.5825,
      "d": 11.6775,
      "sd": 23.625,
      "medium": 3
    },
    {
      "label": "5",
      "R": 31.32,
      "d": 16.47,
      "sd": 18.63
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 9.5175
    },
    {
      "label": "6",
      "R": 77.085,
      "d": 5.805,
      "sd": 18.9,
      "medium": 4
    },
    {
      "label": "7",
      "R": "flat",
      "d": 57.78,
      "sd": 18.9
    }
  ],
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "NO_INTERNAL_RECONSTRUCTION: infinity-only sentinel; no published finite travel law."
  },
  "aperture": {
    "nominalFNumber": 2.8,
    "fStops": [
      2.8
    ]
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 18.2,
    "maxTraceFieldDeg": 9.1
  },
  "layout": {
    "yScFill": 0.7
  },
  "subtitle": "US2972285 Table A x1.35; probable family, no auto/preset assignment; inferred boundaries",
  "catalog": {
    "elementCount": 4,
    "groupCount": 3,
    "focalLengthMm": {
      "marketing": 135,
      "design": 134.98933622256
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.8
    },
    "specs": [
      "Table A first-embodiment representative, not factory auto/preset mapping",
      "Fixed published image plane137.7mm; no refocus",
      "Dealer18.2degree field differs from patent28degree full field"
    ]
  },
  "source": {
    "patentNumber": "US 2,972,285",
    "patentYear": 1961,
    "example": {
      "label": "Table A",
      "id": "A"
    },
    "authors": [
      "Rudolf Solisch"
    ],
    "assignees": [
      "Isco Optische Werke GmbH"
    ]
  }
} satisfies LensDataV2Input;
