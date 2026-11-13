import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * CN 115826211 A/B, Example 2, Tables 4–6; representative LAB-family model.
 * Scale s=1: source radii and distances are already millimetres; no units conversion.
 * GL retains 15.575 mm before / 2.500 mm glass / 0.500 mm after in rearPlates.
 * The pre-GL gap is fixed at both printed focus endpoints. No intermediate cam is verified.
 * Rims are inferred geometry-limited bounds; the iris radius is engine-derived for f/1.2.
 * Back focus and the 0.341084 m object-to-image near conjugate are calculated, not printed.
 * Literal source spacings and image plane are retained, including the infinity focus residual.
 * Default 90% gap-sag; see analysis/audit for severe field clipping and review status.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "viltrox-af-35f12-lab",
  "maker": "Viltrox",
  "name": "Viltrox AF 35mm f/1.2 LAB",
  "visible": false,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "type": "Lens",
      "nd": 1.487,
      "vd": 70.44,
      "indexReference": "d",
      "label": "L1",
      "glass": "Literal rounded nd/Vd; unmatched glass, approximate dispersion"
    },
    {
      "id": 2,
      "name": "L2",
      "type": "Lens",
      "nd": 1.847,
      "vd": 23.785,
      "indexReference": "d",
      "label": "L2",
      "glass": "Literal rounded nd/Vd; unmatched glass, approximate dispersion"
    },
    {
      "id": 3,
      "name": "L3",
      "type": "Lens",
      "nd": 1.883,
      "vd": 40.805,
      "indexReference": "d",
      "label": "L3",
      "glass": "Literal rounded nd/Vd; unmatched glass, approximate dispersion"
    },
    {
      "id": 4,
      "name": "L4",
      "type": "Lens",
      "nd": 1.81,
      "vd": 40.993,
      "indexReference": "d",
      "label": "L4",
      "glass": "Literal rounded nd/Vd; unmatched glass, approximate dispersion"
    },
    {
      "id": 5,
      "name": "L5",
      "type": "Lens",
      "nd": 1.946,
      "vd": 17.942,
      "indexReference": "d",
      "label": "L5",
      "glass": "Literal rounded nd/Vd; unmatched glass, approximate dispersion"
    },
    {
      "id": 6,
      "name": "L6",
      "type": "Lens",
      "nd": 1.603,
      "vd": 38.011,
      "indexReference": "d",
      "label": "L6",
      "glass": "Literal rounded nd/Vd; unmatched glass, approximate dispersion"
    },
    {
      "id": 7,
      "name": "L7",
      "type": "Lens",
      "nd": 1.593,
      "vd": 68.624,
      "indexReference": "d",
      "label": "L7",
      "glass": "Literal rounded nd/Vd; unmatched glass, approximate dispersion"
    },
    {
      "id": 8,
      "name": "L8",
      "type": "Lens",
      "nd": 1.689,
      "vd": 31.161,
      "indexReference": "d",
      "label": "L8",
      "glass": "Literal rounded nd/Vd; unmatched glass, approximate dispersion"
    },
    {
      "id": 9,
      "name": "L9",
      "type": "Lens",
      "nd": 1.593,
      "vd": 68.624,
      "indexReference": "d",
      "label": "L9",
      "glass": "Literal rounded nd/Vd; unmatched glass, approximate dispersion"
    },
    {
      "id": 10,
      "name": "L10",
      "type": "Lens",
      "nd": 1.569,
      "vd": 71.304,
      "indexReference": "d",
      "label": "L10",
      "glass": "Literal rounded nd/Vd; unmatched glass, approximate dispersion"
    },
    {
      "id": 11,
      "name": "L11",
      "type": "Lens",
      "nd": 1.847,
      "vd": 23.785,
      "indexReference": "d",
      "label": "L11",
      "glass": "Literal rounded nd/Vd; unmatched glass, approximate dispersion"
    },
    {
      "id": 12,
      "name": "L12",
      "type": "Lens",
      "nd": 1.946,
      "vd": 17.942,
      "indexReference": "d",
      "label": "L12",
      "glass": "Literal rounded nd/Vd; unmatched glass, approximate dispersion"
    },
    {
      "id": 13,
      "name": "L13",
      "type": "Lens",
      "nd": 1.593,
      "vd": 68.624,
      "indexReference": "d",
      "label": "L13",
      "glass": "Literal rounded nd/Vd; unmatched glass, approximate dispersion"
    },
    {
      "id": 14,
      "name": "L14",
      "type": "Lens",
      "nd": 1.847,
      "vd": 23.785,
      "indexReference": "d",
      "label": "L14",
      "glass": "Literal rounded nd/Vd; unmatched glass, approximate dispersion"
    },
    {
      "id": 15,
      "name": "L15",
      "type": "Lens",
      "nd": 1.81,
      "vd": 40.993,
      "indexReference": "d",
      "label": "L15",
      "glass": "Literal rounded nd/Vd; unmatched glass, approximate dispersion"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 170.905,
      "d": 1.8,
      "sd": 24,
      "medium": 1
    },
    {
      "label": "2",
      "R": 30.599,
      "d": 17.095,
      "sd": 24
    },
    {
      "label": "3",
      "R": -46.402,
      "d": 1.5,
      "sd": 22,
      "medium": 2
    },
    {
      "label": "4",
      "R": 120.719,
      "d": 11,
      "sd": 22,
      "medium": 3
    },
    {
      "label": "5",
      "R": -50.344,
      "d": 0.15,
      "sd": 22
    },
    {
      "label": "6",
      "R": 41.474,
      "d": 8,
      "sd": 22,
      "medium": 4,
      "asphere": {
        "K": 0,
        "A4": -8.851e-07,
        "A6": -3.047e-10,
        "A8": -2.722e-12,
        "A10": 7.196e-15,
        "A12": -9.418e-18
      }
    },
    {
      "label": "7",
      "R": 381.053,
      "sd": 22,
      "asphere": {
        "K": 0,
        "A4": 6.952e-07,
        "A6": -1.17e-09,
        "A8": 1.399e-12,
        "A10": -1.855e-15,
        "A12": -1.948e-18
      }
    },
    {
      "label": "8",
      "R": 83.207,
      "d": 4.4,
      "sd": 21,
      "medium": 5
    },
    {
      "label": "9",
      "R": -311.913,
      "d": 1.2,
      "sd": 21,
      "medium": 6
    },
    {
      "label": "10",
      "R": 26.572,
      "sd": 21
    },
    {
      "label": "11",
      "R": -75.964,
      "d": 8.3,
      "sd": 18,
      "medium": 7
    },
    {
      "label": "12",
      "R": -21.663,
      "d": 1.5,
      "sd": 18,
      "medium": 8
    },
    {
      "label": "13",
      "R": -124.836,
      "d": 1,
      "sd": 18
    },
    {
      "label": "STO",
      "R": "flat"
    },
    {
      "label": "15",
      "R": 200.542,
      "d": 4.79,
      "sd": 20,
      "medium": 9
    },
    {
      "label": "16",
      "R": -108.635,
      "d": 0.15,
      "sd": 20
    },
    {
      "label": "17",
      "R": 62.205,
      "d": 9.8,
      "sd": 20,
      "medium": 10
    },
    {
      "label": "18",
      "R": -35.565,
      "d": 1.3,
      "sd": 20,
      "medium": 11
    },
    {
      "label": "19",
      "R": -55.362,
      "sd": 20
    },
    {
      "label": "20",
      "R": 67.585,
      "d": 3.3,
      "sd": 20,
      "medium": 12
    },
    {
      "label": "21",
      "R": 268.402,
      "d": 0.2,
      "sd": 20
    },
    {
      "label": "22",
      "R": 34.254,
      "d": 5.4,
      "sd": 15.3,
      "medium": 13
    },
    {
      "label": "23",
      "R": 72.811,
      "d": 1.2,
      "sd": 15.3,
      "medium": 14
    },
    {
      "label": "24",
      "R": 24.934,
      "d": 6.85,
      "sd": 15.3
    },
    {
      "label": "25",
      "R": -190.27,
      "d": 1.6,
      "sd": 15.3,
      "medium": 15,
      "asphere": {
        "K": 0,
        "A4": -1.477e-05,
        "A6": 7.957e-08,
        "A8": -1.838e-10,
        "A10": 2.647e-13,
        "A12": -2.7e-16
      }
    },
    {
      "label": "26",
      "R": 637.275,
      "d": 15.575,
      "sd": 15.3,
      "asphere": {
        "K": 0,
        "A4": -5.075e-06,
        "A6": 8.786e-08,
        "A8": -1.546e-10,
        "A10": 2.816e-13,
        "A12": -2.239e-16
      }
    }
  ],
  "rearPlates": [
    {
      "label": "GL",
      "thicknessMm": 2.5,
      "nd": 1.517,
      "vd": 64.199,
      "indexReference": "d",
      "glass": "Literal rounded nd/Vd; unmatched glass, approximate dispersion",
      "gapAfterMm": 0.5,
      "sd": 23,
      "source": "CN 115826211 A/B, Example 2 Table 4, surfaces 27–28"
    }
  ],
  "gaps": {
    "7": {
      "label": "D1",
      "values": [
        [
          2.332,
          8.483
        ]
      ]
    },
    "10": {
      "label": "D2",
      "values": [
        [
          14.868,
          8.717
        ]
      ]
    },
    "STO": {
      "label": "D3",
      "values": [
        [
          7.857,
          2.791
        ]
      ]
    },
    "19": {
      "label": "D4",
      "values": [
        [
          1.901,
          6.967
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 1.2,
    "fStops": [
      1.2
    ]
  },
  "layout": {
    "yScFill": 0.7
  },
  "focus": {
    "closeFocusM": 0.341084,
    "keyframes": [
      0,
      1
    ],
    "step": 1,
    "published": [
      1
    ],
    "description": "Two literal published endpoints only: infinity and source near0.206m (datum unspecified). Engine modeled near distance341.084mm object-to-image; do not confuse with source-certified datum. Four gaps move two floating groups. No intermediate cam verified."
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 64.2
  },
  "checks": {
    "gapSagFrac": 0.9
  },
  "subtitle": "CN115826211A/B Example2 representative; literal filter and two focus stations",
  "catalog": {
    "lensMounts": [
      "sony-fe",
      "nikon-z"
    ],
    "imageFormat": "135-full-frame",
    "closeFocusM": {
      "marketing": 0.34
    },
    "elementCount": 15,
    "groupCount": 10,
    "focalLengthMm": {
      "marketing": 35,
      "design": 34.50231348501969
    },
    "fNumber": {
      "marketing": 1.2,
      "design": 1.2
    },
    "specs": [
      "15 ELEMENTS / 10 GROUPS PLUS PUBLISHED FILTER",
      "TWO PUBLISHED FOCUS ENDPOINTS",
      "INFERRED CLEAR APERTURES"
    ]
  },
  "source": {
    "patentNumber": "CN 115826211 A",
    "authors": [
      "Chen Baofeng"
    ],
    "patentYear": 2023,
    "example": {
      "label": "Example 2",
      "id": "2"
    },
    "assignees": [
      "Shenzhen Leiying Photoelectric Technology Co., Ltd."
    ],
    "errata": [
      {
        "status": "unresolved",
        "note": "Representative family-level production association only; manufacturer section does not uniquely discriminate E2 from other patent examples. No source sign repair."
      },
      {
        "status": "unresolved",
        "note": "Literal rounded nd/Vd and all source spacings retained, including filter2.5mm plus final0.5mm air. Infinity paraxial residual -0.045257835mm retained; no refocus."
      },
      {
        "status": "unresolved",
        "note": "Near source object0.206m datum unspecified. Literal gaps calculate205.016mm before first vertex /341.084mm object-to-image. This supports but does not prove datum interpretation. Endpoint-only focus, no certified conjugate or intermediate cam."
      },
      {
        "status": "unresolved",
        "note": "Clear apertures are inferred geometry-limited model bounds, not published dimensions. Finite-aperture sampled throughput is qualified in analysis; no measured illumination claim."
      }
    ]
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
