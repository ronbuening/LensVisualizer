import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Primary radii, spacings and glass coordinates preserved. Stop and apertures from P2P, not primary measurements. Final image distance is computed paraxial BFD, not a printed source plane. See companion analysis. */
const LENS_DATA = {
  "schema": 2,
  "key": "olympus-300mm-f45",
  "maker": "Olympus",
  "name": "Olympus F.Zuiko Auto-T 300mm f/4.5",
  "subtitle": "Qualified patent reconstruction; secondary stop and apertures",
  "catalog": {
    "imageFormat": "135-full-frame",
    "elementCount": 6,
    "groupCount": 4,
    "focalLengthMm": {
      "marketing": 300,
      "design": 299.8453294278061
    },
    "fNumber": {
      "marketing": 4.5,
      "design": 4.5
    }
  },
  "source": {
    "patentNumber": "US 3819253 A",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1974,
    "authors": [
      "Keiichi Itoh"
    ],
    "assignees": [
      "Olympus Optical Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.1,
      "focalLengthMm": 136.04118781234996,
      "glass": "Unmatched (patent nd=1.48749, Vd=70.1)",
      "indexReferenceNote": "Patent nd/Vd only. Abbe approximation does not establish secondary-spectrum accuracy."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.6935,
      "vd": 53.3,
      "focalLengthMm": -217.8000672085772,
      "glass": "Unmatched (patent nd=1.6935, Vd=53.3)",
      "indexReferenceNote": "Patent nd/Vd only. Abbe approximation does not establish secondary-spectrum accuracy."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.618,
      "vd": 63.4,
      "focalLengthMm": 134.46145637091107,
      "glass": "Unmatched (patent nd=1.618, Vd=63.4)",
      "indexReferenceNote": "Patent nd/Vd only. Abbe approximation does not establish secondary-spectrum accuracy."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.7398,
      "vd": 31.7,
      "focalLengthMm": -191.70224728860555,
      "glass": "KzSF class, supplier unknown",
      "indexReferenceNote": "Patent nd/Vd only. Abbe approximation does not establish secondary-spectrum accuracy."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.713,
      "vd": 54.0,
      "focalLengthMm": -43.90970018269279,
      "glass": "Unmatched (patent nd=1.713, Vd=54.0)",
      "indexReferenceNote": "Patent nd/Vd only. Abbe approximation does not establish secondary-spectrum accuracy."
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.5927,
      "vd": 35.6,
      "focalLengthMm": 67.18435005020238,
      "glass": "Unmatched (patent nd=1.5927, Vd=35.6)",
      "indexReferenceNote": "Patent nd/Vd only. Abbe approximation does not establish secondary-spectrum accuracy."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 89.944,
      "d": 13,
      "sd": 35.73,
      "medium": 1
    },
    {
      "label": "2",
      "R": -240.523,
      "d": 4,
      "sd": 35.73
    },
    {
      "label": "3",
      "R": -234.162,
      "d": 3,
      "sd": 35.95,
      "medium": 2
    },
    {
      "label": "4",
      "R": 427.76,
      "d": 0.1,
      "sd": 32.96
    },
    {
      "label": "5",
      "R": 95.45,
      "d": 11,
      "sd": 33.39,
      "medium": 3
    },
    {
      "label": "6",
      "R": -613.827,
      "d": 3,
      "sd": 33.39,
      "medium": 4
    },
    {
      "label": "7",
      "R": 184.817,
      "d": 50,
      "sd": 31.04
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 50
    },
    {
      "label": "8",
      "R": -41.868,
      "d": 2,
      "sd": 13.76,
      "medium": 5
    },
    {
      "label": "9",
      "R": 126.591,
      "d": 4,
      "sd": 14.83,
      "medium": 6
    },
    {
      "label": "10",
      "R": -57.411,
      "d": 84.78659413475056,
      "sd": 14.83
    }
  ],
  "focus": {
    "closeFocusM": 10,
    "description": "Static infinity-only patent reconstruction. No source-backed focusing travel; inactive close-focus schema placeholder is not a product specification."
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
    "kind": "rectilinear",
    "fullFieldDeg": 8,
    "maxTraceFieldDeg": 4
  },
  "layout": {
    "yScFill": 0.36
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
