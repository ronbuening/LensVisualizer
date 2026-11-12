import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Qualified representative, not exact factory prescription. Literal US8385002 Embodiment1 R/d/nd/vd/asphere and three published zoom states. Fourteen intermediate G3 translations are inferred illustrative cam nodes, not source/factory motion; baseline and interpolation defocus retained. Infinity only; published finite-conjugate inconsistency unresolved. Source-figure semi-diameters, S5 curved-face endpoint plus opaque modeled peripheral extension, inferred marketing F-number schedule. Smallest .001-step gap-sag allowance .951 used; no source optics repair. */
const LENS_DATA = {
  "schema": 2,
  "key": "samsung-nx-18-55mm-f35-56-ois",
  "maker": "Samsung",
  "name": "SAMSUNG 18-55mm f/3.5-5.6 OIS",
  "visible": true,
  "subtitle": "US8385002 Embodiment 1 representative; original S1855SB family, infinity-only illustrative cam",
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Literal source glass",
      "nd": 1.84666,
      "vd": 23.78,
      "glass": "Unmatched (literal patent nd/vd; supplier and melt unknown)",
      "indexReference": "d"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Literal source glass",
      "nd": 1.6968,
      "vd": 55.46,
      "glass": "Unmatched (literal patent nd/vd; supplier and melt unknown)",
      "indexReference": "d"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Literal source glass",
      "nd": 1.713,
      "vd": 53.94,
      "glass": "Unmatched (literal patent nd/vd; supplier and melt unknown)",
      "indexReference": "d"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Literal source glass",
      "nd": 1.6968,
      "vd": 55.46,
      "glass": "Unmatched (literal patent nd/vd; supplier and melt unknown)",
      "indexReference": "d"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Literal source glass",
      "nd": 1.80518,
      "vd": 25.46,
      "glass": "Unmatched (literal patent nd/vd; supplier and melt unknown)",
      "indexReference": "d"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Literal source glass",
      "nd": 1.60311,
      "vd": 60.69,
      "glass": "Unmatched (literal patent nd/vd; supplier and melt unknown)",
      "indexReference": "d"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Literal source glass",
      "nd": 1.48749,
      "vd": 70.44,
      "glass": "Unmatched (literal patent nd/vd; supplier and melt unknown)",
      "indexReference": "d"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Literal source glass",
      "nd": 1.84666,
      "vd": 23.78,
      "glass": "Unmatched (literal patent nd/vd; supplier and melt unknown)",
      "indexReference": "d"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Literal source glass",
      "nd": 1.70154,
      "vd": 41.15,
      "glass": "Unmatched (literal patent nd/vd; supplier and melt unknown)",
      "indexReference": "d"
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Literal source glass",
      "nd": 1.63854,
      "vd": 55.45,
      "glass": "Unmatched (literal patent nd/vd; supplier and melt unknown)",
      "indexReference": "d"
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Literal source glass",
      "nd": 1.58313,
      "vd": 59.46,
      "glass": "Unmatched (literal patent nd/vd; supplier and melt unknown)",
      "indexReference": "d"
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "type": "Literal source glass",
      "nd": 1.80611,
      "vd": 40.73,
      "glass": "Unmatched (literal patent nd/vd; supplier and melt unknown)",
      "indexReference": "d"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 52.409,
      "d": 2.0,
      "medium": 1,
      "sd": 21.34
    },
    {
      "label": "2",
      "R": 35.337,
      "d": 6.5,
      "medium": 2,
      "sd": 20.21
    },
    {
      "label": "3",
      "R": 312.4,
      "sd": 20.21
    },
    {
      "label": "4",
      "R": 79.275,
      "d": 1.25,
      "medium": 3,
      "sd": 13.93
    },
    {
      "label": "5",
      "R": 10.946,
      "d": 7.1,
      "sd": 9.75,
      "rimExtensionSd": 13.93
    },
    {
      "label": "6",
      "R": -61.407,
      "d": 2.1,
      "medium": 4,
      "sd": 9.75
    },
    {
      "label": "7",
      "R": 23.884,
      "d": 0.27,
      "sd": 9.75
    },
    {
      "label": "8",
      "R": 18.0,
      "d": 3.8,
      "medium": 5,
      "sd": 9.58
    },
    {
      "label": "9",
      "R": 63.286,
      "sd": 9.58
    },
    {
      "label": "10",
      "R": 37.784,
      "d": 2.0,
      "medium": 6,
      "sd": 6.44
    },
    {
      "label": "11",
      "R": -45.794,
      "sd": 6.44
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 0.1
    },
    {
      "label": "13",
      "R": 13.511,
      "d": 3.35,
      "medium": 7,
      "sd": 6.18
    },
    {
      "label": "14",
      "R": -37.908,
      "d": 0.7,
      "medium": 8,
      "sd": 6.18
    },
    {
      "label": "15",
      "R": 95.533,
      "d": 3.84,
      "sd": 6.18
    },
    {
      "label": "16",
      "R": -306.745,
      "d": 1.75,
      "medium": 9,
      "sd": 5.31
    },
    {
      "label": "17",
      "R": -18.178,
      "d": 0.55,
      "medium": 10,
      "sd": 5.31
    },
    {
      "label": "18",
      "R": 38.555,
      "sd": 5.31
    },
    {
      "label": "19",
      "R": 30.717,
      "d": 3.25,
      "medium": 11,
      "sd": 7.32
    },
    {
      "label": "20",
      "R": -27.831,
      "d": 1.51,
      "sd": 7.32,
      "asphere": {
        "K": 0,
        "A4": 7.44814e-05,
        "A6": 4.32792e-07,
        "A8": 0,
        "A10": 0
      }
    },
    {
      "label": "21",
      "R": -23.23,
      "d": 1.8,
      "medium": 12,
      "sd": 8.1
    },
    {
      "label": "22",
      "R": -84.987,
      "sd": 8.1
    }
  ],
  "gaps": {
    "3": {
      "label": "D1",
      "values": [
        [
          0.861,
          0.861
        ],
        [
          1.954125,
          1.954125
        ],
        [
          3.04725,
          3.04725
        ],
        [
          4.140375,
          4.140375
        ],
        [
          5.2335,
          5.2335
        ],
        [
          6.326625,
          6.326625
        ],
        [
          7.41975,
          7.41975
        ],
        [
          8.512875000000001,
          8.512875000000001
        ],
        [
          9.606,
          9.606
        ],
        [
          11.381875,
          11.381875
        ],
        [
          13.15775,
          13.15775
        ],
        [
          14.933625,
          14.933625
        ],
        [
          16.7095,
          16.7095
        ],
        [
          18.485374999999998,
          18.485374999999998
        ],
        [
          20.261249999999997,
          20.261249999999997
        ],
        [
          22.037125,
          22.037125
        ],
        [
          23.813,
          23.813
        ]
      ]
    },
    "9": {
      "label": "D2",
      "values": [
        [
          15.334999999999985,
          15.334999999999985
        ],
        [
          14.342206861712482,
          14.342206861712482
        ],
        [
          13.425389724442326,
          13.425389724442326
        ],
        [
          12.573764518598633,
          12.573764518598633
        ],
        [
          11.778851196754449,
          11.778851196754449
        ],
        [
          11.033839302966065,
          11.033839302966065
        ],
        [
          10.333158635713758,
          10.333158635713758
        ],
        [
          9.672179813594243,
          9.672179813594243
        ],
        [
          9.046999999999999,
          9.046999999999999
        ],
        [
          7.934227369765489,
          7.934227369765489
        ],
        [
          6.931210641741048,
          6.931210641741048
        ],
        [
          6.018544089223498,
          6.018544089223498
        ],
        [
          5.181307206468361,
          5.181307206468361
        ],
        [
          4.407683469860537,
          4.407683469860537
        ],
        [
          3.688064382462448,
          3.688064382462448
        ],
        [
          3.0144447958366807,
          3.0144447958366807
        ],
        [
          2.3799999999999986,
          2.3799999999999986
        ]
      ]
    },
    "11": {
      "label": "D3",
      "values": [
        [
          4.196000000000017,
          4.196000000000017
        ],
        [
          4.451418138287519,
          4.451418138287519
        ],
        [
          4.630860275557676,
          4.630860275557676
        ],
        [
          4.745110481401368,
          4.745110481401368
        ],
        [
          4.802648803245552,
          4.802648803245552
        ],
        [
          4.810285697033937,
          4.810285697033937
        ],
        [
          4.773591364286241,
          4.773591364286241
        ],
        [
          4.69719518640576,
          4.69719518640576
        ],
        [
          4.585000000000001,
          4.585000000000001
        ],
        [
          5.021022630234512,
          5.021022630234512
        ],
        [
          5.347289358258951,
          5.347289358258951
        ],
        [
          5.583205910776501,
          5.583205910776501
        ],
        [
          5.74369279353164,
          5.74369279353164
        ],
        [
          5.840566530139464,
          5.840566530139464
        ],
        [
          5.883435617537552,
          5.883435617537552
        ],
        [
          5.88030520416332,
          5.88030520416332
        ],
        [
          5.838000000000002,
          5.838000000000002
        ]
      ]
    },
    "18": {
      "label": "D4",
      "values": [
        [
          4.53,
          4.53
        ],
        [
          4.379125,
          4.379125
        ],
        [
          4.22825,
          4.22825
        ],
        [
          4.077375,
          4.077375
        ],
        [
          3.9265,
          3.9265
        ],
        [
          3.775625,
          3.775625
        ],
        [
          3.6247499999999997,
          3.6247499999999997
        ],
        [
          3.473875,
          3.473875
        ],
        [
          3.323,
          3.323
        ],
        [
          3.148875,
          3.148875
        ],
        [
          2.97475,
          2.97475
        ],
        [
          2.8006249999999997,
          2.8006249999999997
        ],
        [
          2.6265,
          2.6265
        ],
        [
          2.452375,
          2.452375
        ],
        [
          2.27825,
          2.27825
        ],
        [
          2.104125,
          2.104125
        ],
        [
          1.93,
          1.93
        ]
      ]
    },
    "22": {
      "label": "D5",
      "values": [
        [
          20.963,
          20.963
        ],
        [
          21.902,
          21.902
        ],
        [
          22.841,
          22.841
        ],
        [
          23.78,
          23.78
        ],
        [
          24.719,
          24.719
        ],
        [
          25.658,
          25.658
        ],
        [
          26.597,
          26.597
        ],
        [
          27.536,
          27.536
        ],
        [
          28.475,
          28.475
        ],
        [
          30.293875000000003,
          30.293875000000003
        ],
        [
          32.112750000000005,
          32.112750000000005
        ],
        [
          33.931625,
          33.931625
        ],
        [
          35.7505,
          35.7505
        ],
        [
          37.56937500000001,
          37.56937500000001
        ],
        [
          39.38825,
          39.38825
        ],
        [
          41.207125000000005,
          41.207125000000005
        ],
        [
          43.026,
          43.026
        ]
      ]
    }
  },
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 18.55,
        "nominalFNumber": 3.5,
        "published": true
      },
      {
        "focalLengthMm": 19.65257359525975,
        "nominalFNumber": 3.5711800573888093,
        "published": false
      },
      {
        "focalLengthMm": 20.75201517380964,
        "nominalFNumber": 3.6423601147776186,
        "published": false
      },
      {
        "focalLengthMm": 21.877664052700275,
        "nominalFNumber": 3.7135401721664274,
        "published": false
      },
      {
        "focalLengthMm": 23.033534683463,
        "nominalFNumber": 3.7847202295552367,
        "published": false
      },
      {
        "focalLengthMm": 24.223393744006895,
        "nominalFNumber": 3.855900286944046,
        "published": false
      },
      {
        "focalLengthMm": 25.450861163790698,
        "nominalFNumber": 3.927080344332855,
        "published": false
      },
      {
        "focalLengthMm": 26.71948458523668,
        "nominalFNumber": 3.998260401721664,
        "published": false
      },
      {
        "focalLengthMm": 28.0,
        "nominalFNumber": 4.069440459110473,
        "published": true
      },
      {
        "focalLengthMm": 30.615052103197097,
        "nominalFNumber": 4.260760401721664,
        "published": false
      },
      {
        "focalLengthMm": 33.32736974490627,
        "nominalFNumber": 4.452080344332854,
        "published": false
      },
      {
        "focalLengthMm": 36.18832622477235,
        "nominalFNumber": 4.643400286944045,
        "published": false
      },
      {
        "focalLengthMm": 39.216940452349135,
        "nominalFNumber": 4.834720229555236,
        "published": false
      },
      {
        "focalLengthMm": 42.43320986225284,
        "nominalFNumber": 5.026040172166427,
        "published": false
      },
      {
        "focalLengthMm": 45.858577070491954,
        "nominalFNumber": 5.217360114777618,
        "published": false
      },
      {
        "focalLengthMm": 49.51637802510177,
        "nominalFNumber": 5.408680057388809,
        "published": false
      },
      {
        "focalLengthMm": 53.4,
        "nominalFNumber": 5.6,
        "published": true
      }
    ]
  },
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity only; finite source movements not implemented because published conjugate conflicts"
  },
  "rearPlates": [
    {
      "label": "LPF",
      "thicknessMm": 2.24,
      "nd": 1.51633,
      "vd": 64.14,
      "gapAfterMm": 0.1,
      "source": "US8385002 E1 S23/S24"
    }
  ],
  "aperture": {
    "fStops": [
      3.5,
      4,
      5.6,
      8,
      11,
      16
    ]
  },
  "projection": {
    "kind": "rectilinear"
  },
  "layout": {
    "yScFill": 0.7
  },
  "catalog": {
    "elementCount": 12,
    "groupCount": 9,
    "specs": [
      "NX100 23.4x15.6mm format boundary from maker camera manual; format target not certified image-circle coverage",
      "Aperture inferred from marketing endpoints, middle linearly interpolated, not patentcertified",
      "Source S5 peripheral straight extension represented as opaque modeled land; opacity inferred",
      "Published image gaps unchanged; no refocus correction",
      "Three literal source stations with fourteen inferred illustrative infinity cam stations; continuous focus not certified",
      "Unpublished focal labels use computed paraxial EFL; source focal labels retained at three published rows",
      "Canonical APS-C format is23.6x15.7mm; source NX100 sensor23.4x15.6mm used for separate physical-format test; no published circular image diameter",
      "Marketed aperture range f/3.5\u20135.6; endpoints represented in zoom station aperture schedule"
    ],
    "imageFormat": "aps-c",
    "lensMounts": [
      "samsung-nx"
    ],
    "closeFocusM": {
      "marketing": 0.28
    },
    "focalLengthMm": {
      "marketing": [
        18,
        55
      ],
      "design": [
        18.55,
        53.4
      ]
    }
  },
  "checks": {
    "gapSagFrac": 0.951
  },
  "source": {
    "patentNumber": "US 8,385,002 B2",
    "example": {
      "label": "Embodiment 1",
      "id": "1"
    },
    "patentYear": 2013,
    "authors": [
      "Makoto Misaka"
    ],
    "assignees": [
      "Samsung Electronics Co., Ltd."
    ]
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
