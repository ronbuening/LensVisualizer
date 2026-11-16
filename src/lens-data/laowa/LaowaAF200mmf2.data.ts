import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Hidden representative E2; literal filter, plane and two focus states retained. */
const LENS_DATA = {
  "schema": 2,
  "key": "laowa-af-200mm-f2",
  "maker": "Laowa",
  "name": "Laowa AF 200mm f/2",
  "visible": false,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "type": "Lens",
      "nd": 1.92286,
      "vd": 20.88,
      "indexReference": "d",
      "label": "L1",
      "glass": "Published nd/Vd, unassigned catalogue glass; approximate dispersion"
    },
    {
      "id": 2,
      "name": "L2",
      "type": "Lens",
      "nd": 1.4586,
      "vd": 90.19,
      "indexReference": "d",
      "label": "L2",
      "glass": "Published nd/Vd, unassigned catalogue glass; approximate dispersion"
    },
    {
      "id": 3,
      "name": "L3",
      "type": "Lens",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "label": "L3",
      "glass": "Published nd/Vd, unassigned catalogue glass; approximate dispersion"
    },
    {
      "id": 4,
      "name": "L4",
      "type": "Lens",
      "nd": 1.89663,
      "vd": 22.56,
      "indexReference": "d",
      "label": "L4",
      "glass": "Published nd/Vd, unassigned catalogue glass; approximate dispersion"
    },
    {
      "id": 5,
      "name": "L5",
      "type": "Lens",
      "nd": 1.87022,
      "vd": 21.86,
      "indexReference": "d",
      "label": "L5",
      "glass": "Published nd/Vd, unassigned catalogue glass; approximate dispersion"
    },
    {
      "id": 6,
      "name": "L6",
      "type": "Lens",
      "nd": 1.78225,
      "vd": 24.07,
      "indexReference": "d",
      "label": "L6",
      "glass": "Published nd/Vd, unassigned catalogue glass; approximate dispersion"
    },
    {
      "id": 7,
      "name": "L7",
      "type": "Lens",
      "nd": 1.72916,
      "vd": 54.67,
      "indexReference": "d",
      "label": "L7",
      "glass": "Published nd/Vd, unassigned catalogue glass; approximate dispersion"
    },
    {
      "id": 8,
      "name": "L8",
      "type": "Lens",
      "nd": 1.61467,
      "vd": 62.96,
      "indexReference": "d",
      "label": "L8",
      "glass": "Published nd/Vd, unassigned catalogue glass; approximate dispersion"
    },
    {
      "id": 9,
      "name": "L9",
      "type": "Lens",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "label": "L9",
      "glass": "Published nd/Vd, unassigned catalogue glass; approximate dispersion"
    },
    {
      "id": 10,
      "name": "L10",
      "type": "Lens",
      "nd": 1.77236,
      "vd": 33.4,
      "indexReference": "d",
      "label": "L10",
      "glass": "Published nd/Vd, unassigned catalogue glass; approximate dispersion"
    },
    {
      "id": 11,
      "name": "L11",
      "type": "Lens",
      "nd": 1.64378,
      "vd": 30.7,
      "indexReference": "d",
      "label": "L11",
      "glass": "Published nd/Vd, unassigned catalogue glass; approximate dispersion"
    },
    {
      "id": 12,
      "name": "Source filter",
      "type": "Lens",
      "nd": 1.5168,
      "vd": 64.2,
      "indexReference": "d",
      "label": "Source filter",
      "glass": "Published nd/Vd, unassigned catalogue glass; approximate dispersion"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 168.8618,
      "d": 7.75,
      "sd": 51,
      "medium": 1
    },
    {
      "label": "2",
      "R": 1328.2996,
      "d": 1.9605,
      "sd": 51
    },
    {
      "label": "3",
      "R": 102.227,
      "d": 9.7,
      "sd": 47,
      "medium": 2
    },
    {
      "label": "4",
      "R": 501.0536,
      "d": 6.1762,
      "sd": 47
    },
    {
      "label": "5",
      "R": 69.5912,
      "d": 17.0,
      "sd": 40,
      "medium": 3
    },
    {
      "label": "6",
      "R": -252.742,
      "d": 1.8,
      "sd": 40,
      "medium": 4
    },
    {
      "label": "7",
      "R": 64.722,
      "d": 35.2569,
      "sd": 40
    },
    {
      "label": "8",
      "R": 79.8776,
      "d": 6.9842,
      "sd": 29,
      "medium": 5
    },
    {
      "label": "9",
      "R": -346.0254,
      "d": 0.15,
      "sd": 29
    },
    {
      "label": "10",
      "R": 151.5812,
      "d": 1.25,
      "sd": 27,
      "medium": 6
    },
    {
      "label": "11",
      "R": 37.2175,
      "d": 8.4354,
      "sd": 27
    },
    {
      "label": "12",
      "R": 42.4578,
      "d": 4.8,
      "sd": 24,
      "medium": 7
    },
    {
      "label": "13",
      "R": 98.5474,
      "d": 5.5519,
      "sd": 24
    },
    {
      "label": "STO",
      "R": "flat"
    },
    {
      "label": "15",
      "R": 178.4986,
      "d": 1.0,
      "sd": 22,
      "medium": 8
    },
    {
      "label": "16",
      "R": 35.9698,
      "sd": 22
    },
    {
      "label": "17",
      "R": 644.0417,
      "d": 1.0,
      "sd": 16,
      "medium": 9
    },
    {
      "label": "18",
      "R": 103.3711,
      "d": 2.0,
      "sd": 16
    },
    {
      "label": "19",
      "R": 81.4531,
      "d": 5.8,
      "sd": 16,
      "medium": 10
    },
    {
      "label": "20",
      "R": -36.0146,
      "d": 1.0,
      "sd": 16,
      "medium": 11
    },
    {
      "label": "21",
      "R": 566.4761,
      "d": 3.0,
      "sd": 16
    },
    {
      "label": "22",
      "R": "flat",
      "d": 2.0,
      "sd": 22,
      "medium": 12
    },
    {
      "label": "23",
      "R": "flat",
      "d": 45.2069,
      "sd": 22
    }
  ],
  "gaps": {
    "STO": {
      "label": "D14",
      "values": [
        [
          1.7,
          6.2603
        ]
      ]
    },
    "16": {
      "label": "D16",
      "values": [
        [
          30.4956,
          25.9353
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 2.06,
    "fStops": [
      2.06
    ]
  },
  "layout": {
    "yScFill": 0.7
  },
  "focus": {
    "closeFocusM": 4.199386517866485,
    "keyframes": [
      0,
      1
    ],
    "step": 1,
    "published": [
      1
    ],
    "description": "Both literal patent states; closeFocusM is native computed conjugate distance. Source near object4000mm before first vertex gives literal object-to-image4.2000176m, not retail1.5m."
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 12.606
  },
  "checks": {
    "gapSagFrac": 0.9
  },
  "catalog": {
    "lensMounts": [
      "sony-fe",
      "nikon-z",
      "canon-ef"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 11,
    "groupCount": 9,
    "focalLengthMm": {
      "marketing": 200,
      "design": 194.5237291877607
    },
    "fNumber": {
      "marketing": 2,
      "design": 2.06
    },
    "specs": [
      "11 GLASS / 9 GROUPS PLUS SOURCE FILTER",
      "BOTH LITERAL FOCUS ENDPOINTS",
      "INFERRED CLEAR APERTURES"
    ]
  },
  "source": {
    "patentNumber": "CN 120949408 A",
    "authors": [
      "Dayong Li"
    ],
    "patentYear": 2025,
    "example": {
      "label": "Example 2",
      "id": "2"
    },
    "assignees": [
      "Anhui Changgeng Optics Technology Co., Ltd."
    ],
    "errata": [
      {
        "status": "unresolved",
        "note": "Original EPO page images verified; full original PDF not recovered. Cover inventor \u674e\u5927\u52c7 is rendered Dayong Li as a transliteration, not an official English spelling."
      },
      {
        "status": "unresolved",
        "note": "Source 2mm filter n1.51680/V64.20 and BF45.2069mm retained; maker recommends1.5mm rearfilter, exact factory identity not claimed."
      },
      {
        "status": "unresolved",
        "note": "Source S15 V62.96 controls; summary62.900 differs."
      },
      {
        "status": "unresolved",
        "note": "Near source object4000mm before first vertex; no extrapolation to retail1.5m."
      },
      {
        "status": "unresolved",
        "note": "Geometry-limited inferred caps, not measured. Default90% sag. Quantified off-axis sampled clipping in analysis; full application/current-main/browser QA deferred integration."
      }
    ]
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
