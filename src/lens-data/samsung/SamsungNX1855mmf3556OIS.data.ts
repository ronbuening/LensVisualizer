import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 8,385,002 B2, Embodiment 1, Tables 1–4 and Figure 2; scale 1, millimetres.
 * The radii, thicknesses, helium-d indices, Abbe numbers, asphere and three printed zoom states are unchanged.
 * The construction supports an association with the original Samsung S1855SB family; the factory prescription
 * and later OIS II/III versions are not established. Fourteen intermediate L3 positions are calculated rather
 * than published cam data; the printed-state and interpolation defocus are retained.
 * Infinity focus only: the printed finite-focus movements do not reproduce the stated 450 mm object distance.
 * Semi-diameters are estimated from Figure 2 (PDF p. 3), with axial and
 * APS-C corner-chief clearance checked at all 17 zoom stations. S5 has a curved-face endpoint and an extension treated
 * as opaque, although the patent does not specify its opacity. The stop remains at S12; its radius follows an
 * inferred schedule between the marketed f/3.5 and f/5.6 endpoints. The gap-sag allowance is 0.96, the smallest
 * two-decimal value covering the calculated intrusion; no source radius or spacing has been adjusted.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "samsung-nx-18-55mm-f35-56-ois",
  "maker": "Samsung",
  "name": "SAMSUNG 18-55mm f/3.5-5.6 OIS",
  "visible": true,
  "subtitle": "US 8,385,002 B2, Embodiment 1 — probable match to the original S1855SB family",
  "elements": [
    {
      "id": 1,
      "name": "1",
      "diagramLabel": "1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.84666,
      "vd": 23.78,
      "glass": "FDS90 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -135.40,
      "role": "Negative front member of the first cemented doublet.",
      "cemented": "C1",
      "indexReference": "d"
    },
    {
      "id": 2,
      "name": "2",
      "diagramLabel": "2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.6968,
      "vd": 55.46,
      "glass": "LAC14 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 56.64,
      "role": "Positive rear member of the first cemented doublet.",
      "cemented": "C1",
      "indexReference": "d"
    },
    {
      "id": 3,
      "name": "3",
      "diagramLabel": "3",
      "label": "Element 3",
      "type": "Negative Meniscus",
      "nd": 1.713,
      "vd": 53.94,
      "glass": "LAC8 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -17.95,
      "role": "Negative meniscus at the front of the second zoom group.",
      "indexReference": "d"
    },
    {
      "id": 4,
      "name": "4",
      "diagramLabel": "4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.6968,
      "vd": 55.46,
      "glass": "LAC14 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -24.43,
      "role": "Biconcave negative singlet in the second zoom group.",
      "indexReference": "d"
    },
    {
      "id": 5,
      "name": "5",
      "diagramLabel": "5",
      "label": "Element 5",
      "type": "Positive Meniscus",
      "nd": 1.80518,
      "vd": 25.46,
      "glass": "FD60 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 30.11,
      "role": "Positive rear singlet of the second zoom group.",
      "indexReference": "d"
    },
    {
      "id": 6,
      "name": "6",
      "diagramLabel": "6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.60311,
      "vd": 60.69,
      "glass": "BACD14 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 34.64,
      "role": "Positive focusing singlet immediately ahead of the iris.",
      "indexReference": "d"
    },
    {
      "id": 7,
      "name": "7",
      "diagramLabel": "7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.44,
      "glass": "FC5 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 20.88,
      "role": "Low-dispersion positive member of the first post-stop doublet.",
      "cemented": "C2",
      "indexReference": "d"
    },
    {
      "id": 8,
      "name": "8",
      "diagramLabel": "8",
      "label": "Element 8",
      "type": "Biconcave Negative",
      "nd": 1.84666,
      "vd": 23.78,
      "glass": "FDS90 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -31.98,
      "role": "Negative member of the first post-stop doublet.",
      "cemented": "C2",
      "indexReference": "d"
    },
    {
      "id": 9,
      "name": "9",
      "diagramLabel": "9",
      "label": "Element 9",
      "type": "Positive Meniscus",
      "nd": 1.70154,
      "vd": 41.15,
      "glass": "BAFD7 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 27.48,
      "role": "Positive member of the doublet that shifts laterally for image stabilization.",
      "cemented": "C3",
      "indexReference": "d"
    },
    {
      "id": 10,
      "name": "10",
      "diagramLabel": "10",
      "label": "Element 10",
      "type": "Biconcave Negative",
      "nd": 1.63854,
      "vd": 55.45,
      "glass": "K-SK18 (Sumita catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -19.27,
      "role": "Negative member of the doublet that shifts laterally for image stabilization.",
      "cemented": "C3",
      "indexReference": "d"
    },
    {
      "id": 11,
      "name": "11",
      "diagramLabel": "11",
      "label": "Element 11",
      "type": "Biconvex Positive (1× Asph)",
      "nd": 1.58313,
      "vd": 59.46,
      "glass": "M-BACD12 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": 25.56,
      "role": "Positive rear singlet with an aspherical image-side face.",
      "indexReference": "d"
    },
    {
      "id": 12,
      "name": "12",
      "diagramLabel": "12",
      "label": "Element 12",
      "type": "Negative Meniscus",
      "nd": 1.80611,
      "vd": 40.73,
      "glass": "NBFD13 (HOYA catalog equivalent; production supplier unspecified)",
      "focalLengthMm": -40.18,
      "role": "Final negative meniscus ahead of the camera-side low-pass plate.",
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
      "label": "20A",
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
        "label": "Wide",
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
        "label": "Tele",
        "published": true
      }
    ]
  },
  "focus": {
    "closeFocusM": 1e15,
    "description": "Infinity focus only; the patent focuses by moving group L3 (element 6), the single positive element ahead of the iris, toward the image. Its printed movements do not reproduce the stated 450 mm object distance. Samsung lists a production minimum focus distance of 0.28 m."
  },
  "rearPlates": [
    {
      "label": "LPF",
      "thicknessMm": 2.24,
      "nd": 1.51633,
      "vd": 64.14,
      "glass": "S-BSL7 (Ohara catalog equivalent; production supplier unspecified)",
      "gapAfterMm": 0.1,
      "source": "US 8,385,002 B2, Embodiment 1, Table 1, surfaces 23–24."
    }
  ],
  "aperture": {
    "fStops": [
      3.5,
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
    "kind": "rectilinear"
  },
  "groups": [
    {
      "text": "L1 (+)",
      "fromSurface": "1",
      "toSurface": "3"
    },
    {
      "text": "L2 (−)",
      "fromSurface": "4",
      "toSurface": "9"
    },
    {
      "text": "L3 (+)",
      "fromSurface": "10",
      "toSurface": "11"
    },
    {
      "text": "L4 (−)",
      "fromSurface": "13",
      "toSurface": "18"
    },
    {
      "text": "L5 (+)",
      "fromSurface": "19",
      "toSurface": "22"
    }
  ],
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "1",
      "toSurface": "3"
    },
    {
      "text": "C2",
      "fromSurface": "13",
      "toSurface": "15"
    },
    {
      "text": "C3 OIS",
      "fromSurface": "16",
      "toSurface": "18"
    }
  ],
  "layout": {
    "yScFill": 0.7
  },
  "catalog": {
    "elementCount": 12,
    "groupCount": 9,
    "specs": [
      "12 ELEMENTS / 9 GROUPS",
      "1 ASPHERICAL SURFACE / 1 ELEMENT",
      "F/3.5–5.6",
      "OPTICAL IMAGE STABILIZATION",
      "CLOSE FOCUS 0.28 m"
    ],
    "imageFormat": "aps-c",
    "lensMounts": [
      "samsung-nx"
    ],
    "closeFocusM": {
      "marketing": 0.28
    },
    "fNumber": {
      "marketing": 3.5
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
    "gapSagFrac": 0.96
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
