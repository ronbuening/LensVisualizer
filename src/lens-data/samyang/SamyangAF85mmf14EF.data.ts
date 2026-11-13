import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * Source: KR 10-2213072 B1, Example 2, Tables 4–6; both printed focus states.
 * Scale factor 1: source radii, thicknesses and gaps are already in mm; no units conversion.
 * The iris and clear rims are inferred; source back-focus gaps remain literal, not re-solved.
 * The camera-side 2.5 mm filter remains explicit because rearPlates.gapAfterMm is scalar,
 * while source D4 varies from 0.507836 to 0.687847 mm; no physical gaps are redistributed.
 * Actual Image follows D4; D5 after Image stays metadata and is not propagated.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "samyang-af-85mm-f14-ef",
  "maker": "Samyang",
  "name": "Samyang AF 85mm f/1.4 EF",
  "visible": false,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "type": "Lens",
      "nd": 1.7725,
      "vd": 49.62,
      "indexReference": "d",
      "label": "L1",
      "glass": "Published nd/Vd, unassigned catalogue glass; approximate dispersion"
    },
    {
      "id": 2,
      "name": "L2",
      "type": "Lens",
      "nd": 1.7433,
      "vd": 49.22,
      "indexReference": "d",
      "label": "L2",
      "glass": "Published nd/Vd, unassigned catalogue glass; approximate dispersion"
    },
    {
      "id": 3,
      "name": "L3",
      "type": "Lens",
      "nd": 1.72825,
      "vd": 28.32,
      "indexReference": "d",
      "label": "L3",
      "glass": "Published nd/Vd, unassigned catalogue glass; approximate dispersion"
    },
    {
      "id": 4,
      "name": "L4",
      "type": "Lens",
      "nd": 1.7725,
      "vd": 49.62,
      "indexReference": "d",
      "label": "L4",
      "glass": "Published nd/Vd, unassigned catalogue glass; approximate dispersion"
    },
    {
      "id": 5,
      "name": "L5",
      "type": "Lens",
      "nd": 1.8061,
      "vd": 33.27,
      "indexReference": "d",
      "label": "L5",
      "glass": "Published nd/Vd, unassigned catalogue glass; approximate dispersion"
    },
    {
      "id": 6,
      "name": "L6",
      "type": "Lens",
      "nd": 1.54814,
      "vd": 45.82,
      "indexReference": "d",
      "label": "L6",
      "glass": "Published nd/Vd, unassigned catalogue glass; approximate dispersion"
    },
    {
      "id": 7,
      "name": "L7",
      "type": "Lens",
      "nd": 1.7859,
      "vd": 43.93,
      "indexReference": "d",
      "label": "L7",
      "glass": "Published nd/Vd, unassigned catalogue glass; approximate dispersion"
    },
    {
      "id": 8,
      "name": "Hybrid layer on L8",
      "type": "Lens",
      "nd": 1.517,
      "vd": 52,
      "indexReference": "d",
      "label": "Hybrid layer on L8",
      "glass": "Published nd/Vd, unassigned catalogue glass; approximate dispersion"
    },
    {
      "id": 9,
      "name": "L8",
      "type": "Lens",
      "nd": 1.7725,
      "vd": 49.62,
      "indexReference": "d",
      "label": "L8",
      "glass": "Published nd/Vd, unassigned catalogue glass; approximate dispersion"
    },
    {
      "id": 10,
      "name": "L9",
      "type": "Lens",
      "nd": 1.64769,
      "vd": 33.84,
      "indexReference": "d",
      "label": "L9",
      "glass": "Published nd/Vd, unassigned catalogue glass; approximate dispersion"
    },
    {
      "id": 11,
      "name": "Published rear filter",
      "type": "Lens",
      "nd": 1.5168,
      "vd": 64.2,
      "indexReference": "d",
      "label": "Published rear filter",
      "glass": "Published nd/Vd, unassigned catalogue glass; approximate dispersion"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 73.203,
      "d": 8.141,
      "sd": 30,
      "medium": 1
    },
    {
      "label": "2",
      "R": 3101.022,
      "d": 0.4,
      "sd": 30
    },
    {
      "label": "3",
      "R": 41.863,
      "d": 7.398,
      "sd": 28,
      "medium": 2
    },
    {
      "label": "4",
      "R": 101.422,
      "d": 4.5,
      "sd": 28
    },
    {
      "label": "5",
      "R": 312.179,
      "d": 1.8,
      "sd": 27,
      "medium": 3
    },
    {
      "label": "6",
      "R": 35.337,
      "d": 7,
      "sd": 27
    },
    {
      "label": "7",
      "R": 52.741,
      "d": 5,
      "sd": 23,
      "medium": 4
    },
    {
      "label": "8",
      "R": 426.864,
      "sd": 23
    },
    {
      "label": "9",
      "R": 551.865,
      "d": 1.8,
      "sd": 23,
      "medium": 5
    },
    {
      "label": "10",
      "R": 32.423,
      "sd": 23
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 6.487
    },
    {
      "label": "12",
      "R": -39.898,
      "d": 1.8,
      "sd": 18,
      "medium": 6
    },
    {
      "label": "13",
      "R": 32.185,
      "d": 8.833,
      "sd": 18,
      "medium": 7
    },
    {
      "label": "14",
      "R": -52.239,
      "d": 0.465,
      "sd": 18
    },
    {
      "label": "15",
      "R": 159.245,
      "d": 0.13,
      "sd": 18,
      "medium": 8,
      "asphere": {
        "K": -1,
        "A4": -3.2762714e-06,
        "A6": -1.057203e-08,
        "A8": 5.094887e-11,
        "A10": -1.935791e-13,
        "A12": 2.319653e-16
      }
    },
    {
      "label": "16",
      "R": 273.038,
      "d": 4.568,
      "sd": 18,
      "medium": 9
    },
    {
      "label": "17",
      "R": -72.483,
      "d": 1.8,
      "sd": 18,
      "medium": 10
    },
    {
      "label": "18",
      "R": -300.832,
      "sd": 18
    },
    {
      "label": "19",
      "R": "flat",
      "d": 2.5,
      "sd": 24,
      "medium": 11
    },
    {
      "label": "20",
      "R": "flat",
      "sd": 24
    }
  ],
  "gaps": {
    "8": {
      "label": "D1",
      "values": [
        [
          1.6125,
          6.541152
        ]
      ]
    },
    "10": {
      "label": "D2",
      "values": [
        [
          10.4271,
          5.498448
        ]
      ]
    },
    "18": {
      "label": "D3",
      "values": [
        [
          37.3,
          37.3
        ]
      ]
    },
    "20": {
      "label": "D4",
      "values": [
        [
          0.507836,
          0.687847
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 1.479,
    "fStops": [
      1.479
    ]
  },
  "layout": {
    "yScFill": 0.7
  },
  "focus": {
    "closeFocusM": 0.926326,
    "keyframes": [
      0,
      1
    ],
    "step": 1,
    "published": [
      1
    ],
    "description": "Literal source gap endpoints; near D0=813.676935mm beforefirstvertex, not certified0.90m retail. ImageafterD4; D5retained metadata not propagated."
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 28.478
  },
  "checks": {
    "gapSagFrac": 0.9
  },
  "catalog": {
    "lensMounts": [
      "canon-ef"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 9,
    "groupCount": 7,
    "focalLengthMm": {
      "marketing": 85,
      "design": 84.54865074703312
    },
    "fNumber": {
      "marketing": 1.4,
      "design": 1.479
    },
    "closeFocusM": {
      "marketing": 0.9
    },
    "specs": [
      "9 GLASS / 7 GROUPS PLUS HYBRID LAYER AND FILTER",
      "TWO LITERAL FOCUS ENDPOINTS",
      "INFERRED CLEAR APERTURES"
    ]
  },
  "source": {
    "patentNumber": "KR 10-2213072 B1",
    "authors": ["Jae Myung Ryu", "Hae Jin Lee", "Jeong Du Lee"],
    "patentYear": 2021,
    "example": {
      "label": "Example 2",
      "id": "2"
    },
    "assignees": [
      "Samyang Optics Co., Ltd."
    ],
    "errata": [
      {
        "status": "unresolved",
        "note": "D5 printed after Image: retained -0.005027/-0.133249mm as source metadata, not propagated into Image. Actual Image afterD4 used; purpose of D5 unresolved."
      },
      {
        "status": "unresolved",
        "note": "Source Table6 f84.499585 conflicts Table10 84.548355 and prose84.54. Native84.548650747 retained, no rescale."
      },
      {
        "status": "unresolved",
        "note": "Literal nearD0=813.676935mm and Image track112.649447 yield926.326382mm, not label0.9m. Source nearF1.584 retained as claim; physical iris fixed from infinityF1.479."
      },
      {
        "status": "unresolved",
        "note": "Primary catalogue supports family pairing not exact factory E2. Caps geometry-limited assumptions, not factory dimensions; full application/current-main/browser QA deferred integration."
      }
    ]
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
