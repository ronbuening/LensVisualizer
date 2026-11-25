import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Private source-normalized numerical prototype only; actual browser QA not passed. */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-super-takumar-24mm-f35-m42",
  "visible": false,
  "maker": "Pentax",
  "name": "ASAHI SUPER-TAKUMAR 24mm f/3.5 M42",
  "subtitle": "US3545845A sole Table I; parent production-overlay witness, not factory exact",
  "source": {
    "patentNumber": "US 3545845 A",
    "patentYear": 1970,
    "authors": [
      "Yasuo Takahashi"
    ],
    "assignees": [
      "Asahi Kogaku Kogyo Co., Ltd."
    ],
    "example": {
      "label": "Sole example",
      "id": null
    },
    "sdSource": "heuristic"
  },
  "catalog": {
    "lensMounts": [
      "m42"
    ],
    "elementCount": 9,
    "groupCount": 8,
    "focalLengthMm": {
      "marketing": 24,
      "design": 24
    },
    "fNumber": {
      "marketing": 3.5,
      "design": 3.5
    },
    "specs": [
      "Exact M42 Super-Takumar 9/8 variant, not K-mount24/2.8 or third-party smc label.",
      "One uniform scale24/98.5649413980 from literal source; no individual prescription fit.",
      "Unpublished image gap: derived monochromatic infinity plane; no factory flange or close-focus claim.",
      "Source stop axial offset4 behind face10; radius and optical clear caps estimated."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "E1",
      "label": "Element 1",
      "type": "Lens",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d"
    },
    {
      "id": 2,
      "name": "E2",
      "label": "Element 2",
      "type": "Lens",
      "nd": 1.8363,
      "vd": 30.4,
      "indexReference": "d"
    },
    {
      "id": 3,
      "name": "E3",
      "label": "Element 3",
      "type": "Lens",
      "nd": 1.62041,
      "vd": 60.3,
      "indexReference": "d"
    },
    {
      "id": 4,
      "name": "E4",
      "label": "Element 4",
      "type": "Lens",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d"
    },
    {
      "id": 5,
      "name": "E5",
      "label": "Element 5",
      "type": "Lens",
      "nd": 1.5569,
      "vd": 48.5,
      "indexReference": "d"
    },
    {
      "id": 6,
      "name": "E6",
      "label": "Element 6",
      "type": "Lens",
      "nd": 1.56883,
      "vd": 56.0,
      "indexReference": "d",
      "cemented": "D1"
    },
    {
      "id": 7,
      "name": "E7",
      "label": "Element 7",
      "type": "Lens",
      "nd": 1.69895,
      "vd": 30.0,
      "indexReference": "d",
      "cemented": "D1"
    },
    {
      "id": 8,
      "name": "E8",
      "label": "Element 8",
      "type": "Lens",
      "nd": 1.58487,
      "vd": 53.0,
      "indexReference": "d"
    },
    {
      "id": 9,
      "name": "E9",
      "label": "Element 9",
      "type": "Lens",
      "nd": 1.56732,
      "vd": 42.8,
      "indexReference": "d"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 53.81223713796705,
      "d": 2.434942856921586,
      "sd": 5.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 26.68697371186058,
      "d": 5.843862856611807,
      "sd": 5.25
    },
    {
      "label": "3",
      "R": 55.516697137812166,
      "d": 5.722115713765727,
      "sd": 5.05,
      "medium": 2
    },
    {
      "label": "4",
      "R": 607.664339373351,
      "d": 0.1217471428460793,
      "sd": 4.7
    },
    {
      "label": "5",
      "R": 32.50648713990317,
      "d": 1.8262071426911897,
      "sd": 4.65,
      "medium": 3
    },
    {
      "label": "6",
      "R": 10.616350856178116,
      "d": 8.52229999922555,
      "sd": 4.36
    },
    {
      "label": "7",
      "R": -26.784371426137447,
      "d": 8.52229999922555,
      "sd": 4.9,
      "medium": 4
    },
    {
      "label": "8",
      "R": -33.6265608540871,
      "d": 0.1217471428460793,
      "sd": 5.82
    },
    {
      "label": "9",
      "R": 43.585477138896394,
      "d": 4.869885713843172,
      "sd": 5.9,
      "medium": 5
    },
    {
      "label": "10",
      "R": -60.362233423086124,
      "d": 0.9739771427686345,
      "sd": 5.9
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 0.2434942856921586
    },
    {
      "label": "11",
      "R": 16.679358569912864,
      "d": 5.356874285227489,
      "sd": 5.9,
      "medium": 6
    },
    {
      "label": "12",
      "R": -28.2453371402904,
      "d": 1.0957242856147138,
      "sd": 5.5,
      "medium": 7
    },
    {
      "label": "13",
      "R": 15.364489427175208,
      "d": 2.6784371426137445,
      "sd": 5.3
    },
    {
      "label": "14",
      "R": -30.315038568673746,
      "d": 2.434942856921586,
      "sd": 5.46,
      "medium": 8
    },
    {
      "label": "15",
      "R": -17.872480569804445,
      "d": 0.1217471428460793,
      "sd": 5.75
    },
    {
      "label": "16",
      "R": "flat",
      "d": 2.3131957140755066,
      "sd": 5.8,
      "medium": 9
    },
    {
      "label": "17",
      "R": -25.907791997645678,
      "d": 36.01366246074525,
      "sd": 5.82
    }
  ],
  "aperture": {
    "nominalFNumber": 3.5,
    "fStops": [3.5, 8],
    "maxFNumber": 8
  },
  "focus": {
    "closeFocusM": 1000000000000000.0,
    "description": "Static infinity only. No finite prescription or focus travel sourced."
  },
  "projection": {
    "kind": "rectilinear",
    "fullFieldDeg": 10,
    "maxTraceFieldDeg": 5
  },
  "rays": {
    "offAxisFieldFrac": 0.98
  },
  "layout": {
    "yScFill": 0.65
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
