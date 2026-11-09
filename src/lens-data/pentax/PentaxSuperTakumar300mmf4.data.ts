import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Primary radii, spacings and glass coordinates preserved. Stop and apertures from P2P, not primary measurements. Final image distance is computed paraxial BFD, not a printed source plane. See companion analysis. */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-super-takumar-300mm-f4",
  "maker": "Pentax",
  "name": "PENTAX SUPER-TAKUMAR 300mm f/4",
  "subtitle": "Qualified patent reconstruction; secondary stop and apertures",
  "catalog": {
    "lensMounts": [
      "m42"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 5,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 300,
      "design": 300.02206554077543
    },
    "fNumber": {
      "marketing": 4,
      "design": 4
    }
  },
  "source": {
    "patentNumber": "US 3,502,394",
    "example": {
      "label": "Sole example",
      "id": null
    },
    "patentYear": 1970,
    "authors": [
      "Koichi Kobayashi"
    ],
    "assignees": [
      "Asahi Kogaku Kogyo Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Biconvex Positive",
      "nd": 1.50977,
      "vd": 61.9,
      "focalLengthMm": 208.2465135101512,
      "glass": "Unmatched (patent nd=1.50977, Vd=61.9)",
      "indexReferenceNote": "Patent nd/Vd only. Abbe approximation does not establish secondary-spectrum accuracy."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.71736,
      "vd": 29.5,
      "focalLengthMm": -212.3487324375536,
      "glass": "Unmatched (patent nd=1.71736, Vd=29.5)",
      "indexReferenceNote": "Patent nd/Vd only. Abbe approximation does not establish secondary-spectrum accuracy."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.48749,
      "vd": 70.0,
      "focalLengthMm": 188.4629126819168,
      "glass": "Unmatched (patent nd=1.48749, Vd=70.0)",
      "indexReferenceNote": "Patent nd/Vd only. Abbe approximation does not establish secondary-spectrum accuracy."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.72916,
      "vd": 54.8,
      "focalLengthMm": -43.68532962600018,
      "glass": "Unmatched (patent nd=1.72916, Vd=54.8)",
      "indexReferenceNote": "Patent nd/Vd only. Abbe approximation does not establish secondary-spectrum accuracy."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.762,
      "vd": 40.3,
      "focalLengthMm": 67.4850902838996,
      "glass": "Unmatched (patent nd=1.762, Vd=40.3)",
      "indexReferenceNote": "Patent nd/Vd only. Abbe approximation does not establish secondary-spectrum accuracy."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 120.75,
      "d": 13.2,
      "sd": 37.575,
      "medium": 1
    },
    {
      "label": "2",
      "R": -846.03,
      "d": 16.05,
      "sd": 37.575
    },
    {
      "label": "3",
      "R": -223.515,
      "d": 3,
      "sd": 34.145,
      "medium": 2
    },
    {
      "label": "4",
      "R": 480.99,
      "d": 0.3,
      "sd": 34.145
    },
    {
      "label": "5",
      "R": 84.666,
      "d": 10.5,
      "sd": 33.775,
      "medium": 3
    },
    {
      "label": "6",
      "R": 1035.33,
      "d": 82,
      "sd": 33.775
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 29
    },
    {
      "label": "7",
      "R": -37.65,
      "d": 1.5,
      "sd": 11.04,
      "medium": 4
    },
    {
      "label": "8",
      "R": 210.378,
      "d": 2.628,
      "sd": 11.04
    },
    {
      "label": "9",
      "R": 122.4,
      "d": 3,
      "sd": 11.04,
      "medium": 5
    },
    {
      "label": "10",
      "R": -87.741,
      "d": 74.83838581587443,
      "sd": 11.04
    }
  ],
  "focus": {
    "closeFocusM": 10,
    "description": "Static infinity-only patent reconstruction. No source-backed focusing travel; inactive close-focus schema placeholder is not a product specification."
  },
  "aperture": {
    "nominalFNumber": 4,
    "fStops": [
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
    "fullFieldDeg": 9,
    "maxTraceFieldDeg": 4.5
  },
  "layout": {
    "yScFill": 0.36
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
