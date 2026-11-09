import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Whole Example 2; all lengths uniformly scaled 2x as a retail-scale hypothesis.
 * Derived paraxial infinity plane 159.20915733549794 mm is frozen, not fitted.
 * Stop at midpoint of d6 is inferred, not shown in Figure 3. Radius follows F/4.
 * Caps follow Figure 3; native geometry/aperture pass with zero hidden trim.
 * Probable association, not confirmed factory prescription. Infinity-only model.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-m-200mm-f4",
  "maker": "Pentax",
  "name": "PENTAX SMC M 200mm f/4",
  "subtitle": "US 4,139,264 A; probable association, 2x retail-scale hypothesis",
  "catalog": {
    "lensMounts": [
      "pentax-k"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 6,
    "groupCount": 5,
    "focalLengthMm": {
      "marketing": 200,
      "design": 200
    },
    "fNumber": {
      "marketing": 4,
      "design": 4
    },
    "specs": [
      "6 ELEMENTS / 5 GROUPS",
      "QUALIFIED PATENT RECONSTRUCTION"
    ]
  },
  "source": {
    "patentNumber": "US 4,139,264 A",
    "example": {
      "label": "Example 2",
      "id": "2"
    },
    "patentYear": 1979,
    "authors": [
      "Yasuo Takahashi"
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
      "type": "Positive Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "focalLengthMm": 133.6277711641613,
      "glass": "Unmatched (patent nd=1.51633, Vd=64.1)",
      "indexReference": "d"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconcave Negative",
      "nd": 1.76182,
      "vd": 26.6,
      "focalLengthMm": -162.35491198135534,
      "glass": "Unmatched (patent nd=1.76182, Vd=26.6)",
      "indexReference": "d"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "focalLengthMm": 170.63370099339184,
      "glass": "Unmatched (patent nd=1.51633, Vd=64.1)",
      "indexReference": "d"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "focalLengthMm": 353.7291817849575,
      "glass": "Unmatched (patent nd=1.51633, Vd=64.1)",
      "indexReference": "d"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.762,
      "vd": 40.2,
      "focalLengthMm": -33.96778905642974,
      "glass": "Unmatched (patent nd=1.762, Vd=40.2)",
      "indexReference": "d"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.76182,
      "vd": 26.6,
      "focalLengthMm": 60.78151494666458,
      "glass": "Unmatched (patent nd=1.76182, Vd=26.6)",
      "indexReference": "d"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 59.82,
      "d": 7.06,
      "sd": 25.2,
      "medium": 1
    },
    {
      "label": "2",
      "R": 431.72,
      "d": 8.4,
      "sd": 25.2
    },
    {
      "label": "3",
      "R": -392.52,
      "d": 2.06,
      "sd": 23.6,
      "medium": 2
    },
    {
      "label": "4",
      "R": 181.0,
      "d": 0.1,
      "sd": 23.6
    },
    {
      "label": "5",
      "R": 56.72,
      "d": 6.54,
      "sd": 23,
      "medium": 3
    },
    {
      "label": "6",
      "R": 152.98,
      "d": 16.61,
      "sd": 23
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 16.61
    },
    {
      "label": "7",
      "R": 53.38,
      "d": 3.5,
      "sd": 15.6,
      "medium": 4
    },
    {
      "label": "8",
      "R": 73.74,
      "d": 28.68,
      "sd": 15.6
    },
    {
      "label": "9",
      "R": -28.36,
      "d": 2.88,
      "sd": 12.5,
      "medium": 5
    },
    {
      "label": "10",
      "R": 309.42,
      "d": 4.12,
      "sd": 12.5,
      "medium": 6
    },
    {
      "label": "11",
      "R": -54.14,
      "d": 62.64915733549794,
      "sd": 12.5
    }
  ],
  "focus": {
    "closeFocusM": 2,
    "description": "Infinity-only static prescription. Maker 2 m minimum focus is metadata, not modeled motion."
  },
  "aperture": {
    "nominalFNumber": 4,
    "fStops": [
      4,
      5.6,
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
    "fullFieldDeg": 12.4,
    "maxTraceFieldDeg": 6.2
  },
  "doublets": [
    {
      "text": "REAR DOUBLET",
      "fromSurface": "9",
      "toSurface": "11"
    }
  ],
  "layout": {
    "yScFill": 0.36
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
