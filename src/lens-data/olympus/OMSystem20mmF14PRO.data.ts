import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Literal JP2023032222A Example 1 prescription. All clear apertures inferred; no catalog glass identities claimed.
 * Stop at printed S9; radius derived by engine from F1.43, not a tabulated diameter.
 * Product identity inferred, not factory certified. Literal BF1.3929 retained; no refocus correction. */
const LENS_DATA = {
  "schema": 2,
  "key": "om-system-mzuiko-digital-ed-20mm-f14-pro",
  "maker": "Olympus",
  "name": "OM SYSTEM M.ZUIKO DIGITAL ED 20mm f/1.4 PRO",
  "subtitle": "JP 2023-32222 A Example 1 \u2014 inferred product association",
  "catalog": {
    "lensMounts": [
      "micro-four-thirds"
    ],
    "imageFormat": "four-thirds",
    "imageCircleMm": 22.3,
    "elementCount": 11,
    "groupCount": 10,
    "focalLengthMm": {
      "marketing": 20,
      "design": 20.27
    },
    "fNumber": {
      "marketing": 1.4,
      "design": 1.43
    },
    "specs": [
      "11 ELEMENTS / 10 GROUPS",
      "3 ASPHERICAL SURFACES",
      "INFERRED PRODUCT ASSOCIATION"
    ]
  },
  "source": {
    "patentNumber": "JP 2023-32222 A",
    "example": {
      "label": "Numerical Example 1",
      "id": "1"
    },
    "patentYear": 2023,
    "authors": [
      "Jumpei Nakamoto",
      "Takehisa Koyama"
    ],
    "assignees": [
      "Sigma Corporation"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 2.00069,
      "vd": 25.46,
      "glass": "Unmatched (patent nd=2.00069, vd=25.46)",
      "focalLengthMm": 133.26695515786787
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.497,
      "vd": 81.61,
      "glass": "Unmatched (patent nd=1.497, vd=81.61)",
      "focalLengthMm": -42.43223721776146
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.437,
      "vd": 95.1,
      "glass": "Unmatched (patent nd=1.437, vd=95.1)",
      "focalLengthMm": -57.12516692804971
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 2.0509,
      "vd": 26.94,
      "glass": "Unmatched (patent nd=2.0509, vd=26.94)",
      "focalLengthMm": 54.47108789711136
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.77047,
      "vd": 29.74,
      "glass": "Unmatched (patent nd=1.77047, vd=29.74)",
      "focalLengthMm": -15.790822014241082,
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive (1\u00d7 Asph)",
      "nd": 1.7645,
      "vd": 49.1,
      "glass": "Unmatched (patent nd=1.7645, vd=49.1)",
      "focalLengthMm": 21.991339995336865,
      "cemented": "D1"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.59282,
      "vd": 68.62,
      "glass": "Unmatched (patent nd=1.59282, vd=68.62)",
      "focalLengthMm": 32.92398496136109
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.59282,
      "vd": 68.62,
      "glass": "Unmatched (patent nd=1.59282, vd=68.62)",
      "focalLengthMm": 37.119948233897844
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Negative Meniscus",
      "nd": 1.73037,
      "vd": 32.23,
      "glass": "Unmatched (patent nd=1.73037, vd=32.23)",
      "focalLengthMm": -34.613382188315605
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Biconvex Positive (2\u00d7 Asph)",
      "nd": 1.8061,
      "vd": 40.73,
      "glass": "Unmatched (patent nd=1.8061, vd=40.73)",
      "focalLengthMm": 32.054909587411146
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Negative Meniscus",
      "nd": 1.48749,
      "vd": 70.44,
      "glass": "Unmatched (patent nd=1.48749, vd=70.44)",
      "focalLengthMm": -73.29568746826821
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 69.44,
      "d": 2.25,
      "sd": 16,
      "medium": 1
    },
    {
      "label": "2",
      "R": 142.53,
      "d": 0.4,
      "sd": 16
    },
    {
      "label": "3",
      "R": 33.58,
      "d": 1.2,
      "sd": 13.8,
      "medium": 2
    },
    {
      "label": "4",
      "R": 12.8,
      "d": 6.23,
      "sd": 10.2
    },
    {
      "label": "5",
      "R": -100,
      "d": 1,
      "sd": 10.2,
      "medium": 3
    },
    {
      "label": "6",
      "R": 33.37,
      "d": 2,
      "sd": 10.2
    },
    {
      "label": "7",
      "R": 75.33,
      "d": 2.35,
      "sd": 10.6,
      "medium": 4
    },
    {
      "label": "8",
      "R": -234.61,
      "d": 5.07,
      "sd": 10.6
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 4.31
    },
    {
      "label": "10",
      "R": -21.49,
      "d": 1,
      "sd": 12.5,
      "medium": 5
    },
    {
      "label": "11",
      "R": 28.61,
      "d": 5.8,
      "sd": 12.5,
      "medium": 6
    },
    {
      "label": "12",
      "R": -37.19,
      "d": 0.25,
      "sd": 12.5,
      "asphere": {
        "K": 0,
        "A4": 3.3395e-05,
        "A6": 2.8273e-08,
        "A8": -7.132e-11,
        "A10": 1.473e-14,
        "A12": -6.1036e-16,
        "A14": 0,
        "A16": 0
      }
    },
    {
      "label": "13",
      "R": 186.84,
      "d": 7.25,
      "sd": 13.5,
      "medium": 7
    },
    {
      "label": "14",
      "R": -21.48,
      "d": 0.15,
      "sd": 13.5
    },
    {
      "label": "15",
      "R": 37.87,
      "d": 6.39,
      "sd": 13.5,
      "medium": 8
    },
    {
      "label": "16",
      "R": -49.23,
      "sd": 13.5
    },
    {
      "label": "17",
      "R": 41.69,
      "d": 0.8,
      "sd": 11.1,
      "medium": 9
    },
    {
      "label": "18",
      "R": 15.61,
      "sd": 11.1
    },
    {
      "label": "19",
      "R": 35.41,
      "d": 4.65,
      "sd": 11.1,
      "medium": 10,
      "asphere": {
        "K": 0,
        "A4": 1.8844e-05,
        "A6": -1.2744e-08,
        "A8": 5.3154e-10,
        "A10": 9.6383e-13,
        "A12": -1.5147e-14,
        "A14": 1.8815e-17,
        "A16": 0
      }
    },
    {
      "label": "20",
      "R": -90,
      "d": 0.15,
      "sd": 11.1,
      "asphere": {
        "K": 0,
        "A4": 1.6312e-05,
        "A6": -1.2038e-07,
        "A8": 1.8437e-09,
        "A10": -9.7269e-12,
        "A12": 3.5206e-14,
        "A14": -1.8061e-16,
        "A16": 4.7379e-19
      }
    },
    {
      "label": "21",
      "R": 30.44,
      "d": 1,
      "sd": 11.1,
      "medium": 11
    },
    {
      "label": "22",
      "R": 16.26,
      "d": 15,
      "sd": 11.1
    }
  ],
  "rearPlates": [
    {
      "label": "FL",
      "thicknessMm": 4.14,
      "nd": 1.51633,
      "vd": 64.14,
      "gapAfterMm": 1.3929,
      "glass": "Unmatched (patent nd=1.51633, vd=64.14)",
      "source": "JP 2023-32222 A Example 1, surfaces 23\u201324, printed pages 13\u201314"
    }
  ],
  "gaps": {
    "16": {
      "label": "d16",
      "values": [
        [
          1.4,
          1.7647
        ]
      ]
    },
    "18": {
      "label": "d18",
      "values": [
        [
          6.08,
          5.7153
        ]
      ]
    }
  },
  "focus": {
    "closeFocusM": 0.8749445,
    "published": [
      1
    ],
    "conjugates": [
      {
        "zoomStation": 0,
        "keyframe": 1,
        "objectDistanceMm": 794.6816,
        "distanceReference": "first-surface",
        "source": "JP 2023-32222 A printed page 14, beta=0.025"
      }
    ],
    "description": "Only L9 (S17\u201318) translates 0.3647 mm imageward, from infinity to the published beta=0.025 state. This is not the marketed minimum focus distance."
  },
  "aperture": {
    "nominalFNumber": 1.43,
    "fStops": [
      1.43,
      2,
      2.8,
      4,
      5.6,
      8,
      11,
      16
    ],
    "maxFNumber": 16
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 59.01,
    "maxTraceFieldDeg": 29.505
  },
  "layout": {
    "yScFill": 0.4
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
