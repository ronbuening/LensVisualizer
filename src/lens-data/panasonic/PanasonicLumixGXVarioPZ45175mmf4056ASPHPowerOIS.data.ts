import type { LensDataV2Input } from "../../types/lensDataV2.js";

/*
 * Semi-diameters: the patent prints none. Rims are estimated from JP 5649252 B2 Figure 1, panels (a) to (c), at 6.61
 * px/mm along the axis and 6.40 px/mm across it (the figure is 3.2 % compressed in height), and floor-checked by real-ray
 * trace. S1-S6, S9-S10 and S20-S21 stand 3 to 12 % above the figure, at values that hold every field of every zoom node
 * within 3 points of the package rims' corner light. The figure draws L2, L4 and L8 proud of their cemented partners,
 * with the junction curve ending at the partner's height, so S4, S7 and S15 stop there and the larger element's edge
 * runs straight down to them. L5, L7, L13 and L14 are inferred values within 4 % of the figure.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "panasonic-lumix-g-x-vario-pz-45-175mm-f4-56-asph-power-ois",
  "maker": "Panasonic",
  "name": "PANASONIC LUMIX G X VARIO PZ 45-175mm f/4-5.6 ASPH. POWER O.I.S.",
  "subtitle": "JP 5649252 B2, Example 1 — strong production correlation, not manufacturer-confirmed",
  "catalog": {
    "lensMounts": [
      "micro-four-thirds"
    ],
    "imageFormat": "four-thirds",
    "imageCircleMm": 21.63,
    "specs": [
      "14 ELEMENTS / 10 GROUPS",
      "DESIGN f = 45.17–167.24 mm",
      "DESIGN F/4.16–5.84",
      "3 ASPHERICAL SURFACES / 2 ELEMENTS",
      "INTERNAL ZOOM: G1, G3, G6 FIXED"
    ],
    "elementCount": 14,
    "groupCount": 10,
    "focalLengthMm": {
      "marketing": [
        45,
        175
      ],
      "design": [
        45.1684,
        167.2377
      ]
    },
    "fNumber": {
      "marketing": 4,
      "design": 4.15704
    }
  },
  "source": {
    "patentNumber": "JP 5649252 B2",
    example: {"label": "Example 1", "id": "1"},
    "patentYear": 2015,
    "authors": [
      "Isamu Izuhara",
      "Kyoichi Miyazaki"
    ],
    "assignees": [
      "Panasonic Intellectual Property Management Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Plano-Convex Positive",
      "nd": 1.48749,
      "vd": 70.4,
      "indexReference": "d",
      "focalLengthMm": 90.82647849186651,
      "glass": "FK5 (SUMITA catalog equivalent; production supplier unspecified)",
      "role": "Plano-convex front element of the fixed first group"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.801,
      "vd": 35,
      "indexReference": "d",
      "focalLengthMm": -74.85691871808652,
      "glass": "S-LAM66 (OHARA catalog equivalent; production supplier unspecified)",
      "cemented": "C1",
      "role": "Flint half of the first-group doublet, cemented to L3"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.6,
      "indexReference": "d",
      "focalLengthMm": 54.77294971031757,
      "glass": "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      "cemented": "C1",
      "apd": "inferred",
      "apdNote": "HOYA FCD1 coordinate match (νd 81.61); Panasonic's construction diagram marks this position as one of its two ED elements, and the patent itself does not call the glass anomalous.",
      "role": "ED crown half of the first-group doublet and the strongest positive element in G1"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.8045,
      "vd": 39.6,
      "indexReference": "d",
      "focalLengthMm": -15.575824506539641,
      "glass": "NBFD3 (HOYA catalog equivalent; production supplier unspecified)",
      "cemented": "C2",
      "role": "Strongest negative element of the moving second group, cemented to L5"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Positive Meniscus",
      "nd": 1.92286,
      "vd": 20.9,
      "indexReference": "d",
      "focalLengthMm": 23.432346841731288,
      "glass": "N-SF66 (SCHOTT catalog equivalent; production supplier unspecified)",
      "cemented": "C2",
      "role": "Very high-dispersion positive half of the second-group doublet, cemented to L4"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.8042,
      "vd": 46.5,
      "indexReference": "d",
      "focalLengthMm": -32.992635494787585,
      "glass": "N-LASF44 (SCHOTT catalog equivalent; production supplier unspecified)",
      "role": "Biconcave singlet closing the moving second group"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.80755,
      "vd": 40.9,
      "indexReference": "d",
      "focalLengthMm": 21.116425019309023,
      "glass": "D-ZLaF81-25 (CDGM catalog equivalent; production supplier unspecified)",
      "role": "First element of the fixed third group, aspherical on both surfaces, just ahead of the stop"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Negative Meniscus",
      "nd": 1.90366,
      "vd": 31.3,
      "indexReference": "d",
      "focalLengthMm": -15.602061248112525,
      "glass": "TAFD25 (HOYA catalog equivalent; production supplier unspecified)",
      "cemented": "C3",
      "role": "High-index flint half of the doublet behind the stop, cemented to L9"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.6,
      "indexReference": "d",
      "focalLengthMm": 29.520653133321204,
      "glass": "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      "cemented": "C3",
      "apd": "inferred",
      "apdNote": "HOYA FCD1 coordinate match (νd 81.61); Panasonic's construction diagram marks this position as one of its two ED elements, and the patent itself does not call the glass anomalous.",
      "role": "ED crown half of the doublet behind the stop, cemented to L8"
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Biconvex Positive",
      "nd": 1.5825,
      "vd": 59.4,
      "indexReference": "d",
      "focalLengthMm": 18.915687581369546,
      "glass": "L-BAL42 (OHARA moulding glass, coordinate equivalent; patent nd=1.58250, νd=59.4; production supplier unspecified)",
      "cemented": "C4",
      "role": "Crown half of the rear third-group doublet, aspherical on its front surface, cemented to L11"
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Negative Meniscus",
      "nd": 1.7552,
      "vd": 27.5,
      "indexReference": "d",
      "focalLengthMm": -74.8631384488648,
      "glass": "S-TIH4 (OHARA catalog equivalent; production supplier unspecified)",
      "cemented": "C4",
      "role": "Flint half of the rear third-group doublet, closing the fixed third group"
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "type": "Negative Meniscus",
      "nd": 1.72916,
      "vd": 54.7,
      "indexReference": "d",
      "focalLengthMm": -31.612436755286545,
      "glass": "TAC8 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Thin negative meniscus forming G4; moves during zoom and, per the patent, imageward for close focus"
    },
    {
      "id": 13,
      "name": "L13",
      "label": "Element 13",
      "type": "Negative Meniscus",
      "nd": 1.72916,
      "vd": 54.7,
      "indexReference": "d",
      "focalLengthMm": -28.69864595712889,
      "glass": "TAC8 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Thin negative meniscus forming G5; moves objectward during zoom and, per the patent, imageward for close focus"
    },
    {
      "id": 14,
      "name": "L14",
      "label": "Element 14",
      "type": "Positive Meniscus",
      "nd": 1.84666,
      "vd": 23.8,
      "indexReference": "d",
      "focalLengthMm": 32.51228295841617,
      "glass": "J-SF03 (HIKARI catalog equivalent; production supplier unspecified)",
      "role": "Positive meniscus forming the fixed rear group G6"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 44.277,
      "sd": 17.26,
      "medium": 1,
      "d": 4.2
    },
    {
      "label": "2",
      "R": "flat",
      "sd": 17.26,
      "d": 0.2
    },
    {
      "label": "3",
      "R": 38.426,
      "sd": 16.1,
      "medium": 2,
      "d": 1.2
    },
    {
      "label": "4",
      "R": 23.093,
      "sd": 15.01,
      "medium": 3,
      "d": 6
    },
    {
      "label": "5",
      "R": 139.112,
      "sd": 15.01
    },
    {
      "label": "6",
      "R": 400,
      "sd": 7.79,
      "medium": 4,
      "d": 0.6
    },
    {
      "label": "7",
      "R": 12.142,
      "sd": 7.1700720987085536,
      "medium": 5,
      "d": 2
    },
    {
      "label": "8",
      "R": 25.5,
      "sd": 7.1700720987085536,
      "d": 1.81
    },
    {
      "label": "9",
      "R": -43.775,
      "sd": 6.86,
      "medium": 6,
      "d": 0.6
    },
    {
      "label": "10",
      "R": 67.773,
      "sd": 6.86
    },
    {
      "label": "11A",
      "R": 17.735,
      "sd": 9.49,
      "asphere": {
        "K": 0,
        "A4": -0.000008988,
        "A6": -4.12e-8,
        "A8": 1.296e-10,
        "A10": -1.179e-11
      },
      "medium": 7,
      "d": 4.2
    },
    {
      "label": "12A",
      "R": -396.274,
      "sd": 9.49,
      "asphere": {
        "K": 0,
        "A4": 0.00001415,
        "A6": -1.888e-8,
        "A8": -1.017e-9,
        "A10": -3.781e-12
      },
      "d": 2
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.7
    },
    {
      "label": "14",
      "R": 75.477,
      "sd": 7.9,
      "medium": 8,
      "d": 0.6
    },
    {
      "label": "15",
      "R": 11.835,
      "sd": 7.4,
      "medium": 9,
      "d": 3.2
    },
    {
      "label": "16",
      "R": 55.716,
      "sd": 7.4,
      "d": 0.76
    },
    {
      "label": "17A",
      "R": 21.353,
      "sd": 7.3,
      "asphere": {
        "K": 0,
        "A4": -0.00001875,
        "A6": -7.53e-8,
        "A8": 2.312e-10,
        "A10": 1.938e-13
      },
      "medium": 10,
      "d": 3.6
    },
    {
      "label": "18",
      "R": -21.353,
      "sd": 7.3,
      "medium": 11,
      "d": 0.6
    },
    {
      "label": "19",
      "R": -34.727,
      "sd": 7.1
    },
    {
      "label": "20",
      "R": 44.246,
      "sd": 6.4,
      "medium": 12,
      "d": 0.5
    },
    {
      "label": "21",
      "R": 15.083,
      "sd": 6.4
    },
    {
      "label": "22",
      "R": -16.274,
      "sd": 8.65,
      "medium": 13,
      "d": 0.7
    },
    {
      "label": "23",
      "R": -74.534,
      "sd": 8.65
    },
    {
      "label": "24",
      "R": -147.971,
      "sd": 10.518,
      "medium": 14,
      "d": 3
    },
    {
      "label": "25",
      "R": -23.425,
      "sd": 10.518
    }
  ],
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 45.1684,
        "nominalFNumber": 4.15704,
        "published": true,
        "label": "Wide"
      },
      {
        "focalLengthMm": 46.27413890348373,
        "nominalFNumber": 4.208633600000001,
        "published": false
      },
      {
        "focalLengthMm": 47.41622380540251,
        "nominalFNumber": 4.2602272,
        "published": false
      },
      {
        "focalLengthMm": 48.59593962161978,
        "nominalFNumber": 4.3118208000000005,
        "published": false
      },
      {
        "focalLengthMm": 49.81473980070362,
        "nominalFNumber": 4.3634144,
        "published": false
      },
      {
        "focalLengthMm": 51.074136179076376,
        "nominalFNumber": 4.415008,
        "published": false
      },
      {
        "focalLengthMm": 52.37570095673084,
        "nominalFNumber": 4.466601600000001,
        "published": false
      },
      {
        "focalLengthMm": 53.72106866790064,
        "nominalFNumber": 4.5181952,
        "published": false
      },
      {
        "focalLengthMm": 55.11193813067192,
        "nominalFNumber": 4.5697888,
        "published": false
      },
      {
        "focalLengthMm": 56.55007435537075,
        "nominalFNumber": 4.6213824,
        "published": false
      },
      {
        "focalLengthMm": 58.037310386338795,
        "nominalFNumber": 4.672976,
        "published": false
      },
      {
        "focalLengthMm": 59.57554904513293,
        "nominalFNumber": 4.724569600000001,
        "published": false
      },
      {
        "focalLengthMm": 61.16676453485181,
        "nominalFNumber": 4.776163200000001,
        "published": false
      },
      {
        "focalLengthMm": 62.81300385482192,
        "nominalFNumber": 4.8277568,
        "published": false
      },
      {
        "focalLengthMm": 64.51638796172121,
        "nominalFNumber": 4.8793504,
        "published": false
      },
      {
        "focalLengthMm": 66.27911259664691,
        "nominalFNumber": 4.930944,
        "published": false
      },
      {
        "focalLengthMm": 68.1034486770528,
        "nominalFNumber": 4.982537600000001,
        "published": false
      },
      {
        "focalLengthMm": 69.99174212674751,
        "nominalFNumber": 5.0341312,
        "published": false
      },
      {
        "focalLengthMm": 71.946412985402,
        "nominalFNumber": 5.0857248,
        "published": false
      },
      {
        "focalLengthMm": 73.96995359994499,
        "nominalFNumber": 5.137318400000001,
        "published": false
      },
      {
        "focalLengthMm": 76.06492565256568,
        "nominalFNumber": 5.188912,
        "published": false
      },
      {
        "focalLengthMm": 78.23395572238633,
        "nominalFNumber": 5.2405056,
        "published": false
      },
      {
        "focalLengthMm": 80.47972900880845,
        "nominalFNumber": 5.2920992,
        "published": false
      },
      {
        "focalLengthMm": 82.80498076279204,
        "nominalFNumber": 5.3436928,
        "published": false
      },
      {
        "focalLengthMm": 85.21248487688172,
        "nominalFNumber": 5.395286400000001,
        "published": false
      },
      {
        "focalLengthMm": 87.7062,
        "nominalFNumber": 5.44688,
        "published": true
      },
      {
        "focalLengthMm": 89.98227257987159,
        "nominalFNumber": 5.4624604,
        "published": false
      },
      {
        "focalLengthMm": 92.33003759174217,
        "nominalFNumber": 5.4780408,
        "published": false
      },
      {
        "focalLengthMm": 94.7502325859682,
        "nominalFNumber": 5.4936212,
        "published": false
      },
      {
        "focalLengthMm": 97.24470968664423,
        "nominalFNumber": 5.5092016,
        "published": false
      },
      {
        "focalLengthMm": 99.81525096299526,
        "nominalFNumber": 5.524782,
        "published": false
      },
      {
        "focalLengthMm": 102.46354017095503,
        "nominalFNumber": 5.5403624,
        "published": false
      },
      {
        "focalLengthMm": 105.19112918591374,
        "nominalFNumber": 5.5559428,
        "published": false
      },
      {
        "focalLengthMm": 107.99939844794581,
        "nominalFNumber": 5.5715232,
        "published": false
      },
      {
        "focalLengthMm": 110.88951073921008,
        "nominalFNumber": 5.5871036,
        "published": false
      },
      {
        "focalLengthMm": 113.86235764309409,
        "nominalFNumber": 5.602684,
        "published": false
      },
      {
        "focalLengthMm": 116.9184981057499,
        "nominalFNumber": 5.6182644,
        "published": false
      },
      {
        "focalLengthMm": 120.05808864345084,
        "nominalFNumber": 5.6338448,
        "published": false
      },
      {
        "focalLengthMm": 123.28080492443678,
        "nominalFNumber": 5.6494252,
        "published": false
      },
      {
        "focalLengthMm": 126.5857547117601,
        "nominalFNumber": 5.6650056,
        "published": false
      },
      {
        "focalLengthMm": 129.9713824926386,
        "nominalFNumber": 5.680586,
        "published": false
      },
      {
        "focalLengthMm": 133.4353665455298,
        "nominalFNumber": 5.6961664,
        "published": false
      },
      {
        "focalLengthMm": 136.9745097096219,
        "nominalFNumber": 5.7117468,
        "published": false
      },
      {
        "focalLengthMm": 140.58462571764716,
        "nominalFNumber": 5.7273272,
        "published": false
      },
      {
        "focalLengthMm": 144.260423619028,
        "nominalFNumber": 5.742907600000001,
        "published": false
      },
      {
        "focalLengthMm": 147.99539353444368,
        "nominalFNumber": 5.758488,
        "published": false
      },
      {
        "focalLengthMm": 151.78169771259837,
        "nominalFNumber": 5.7740684,
        "published": false
      },
      {
        "focalLengthMm": 155.61007156297254,
        "nominalFNumber": 5.7896488,
        "published": false
      },
      {
        "focalLengthMm": 159.46973996172508,
        "nominalFNumber": 5.8052292,
        "published": false
      },
      {
        "focalLengthMm": 163.3483546112782,
        "nominalFNumber": 5.8208096,
        "published": false
      },
      {
        "focalLengthMm": 167.2377,
        "nominalFNumber": 5.83639,
        "published": true,
        "label": "Tele"
      }
    ],
    "step": 0.005
  },
  "focus": {
    "closeFocusM": 0.9,
    "description": "Not modeled: the patent moves G4 and G5 imageward for close focus but prints infinity spacings only, so the focus control changes nothing and 0.9 m is the marketed minimum, not a modeled state. G1, G3 and G6 stay fixed while zooming; spacings are printed at 45.17, 87.71 and 167.24 mm and inferred between them. The patent names no O.I.S. group, so no stabilizer shift is modeled.",
    "step": 1
  },
  "gaps": {
    "5": {
      "label": "d5",
      "values": [
        [
          1.9704,
          1.9704
        ],
        [
          2.501652,
          2.501652
        ],
        [
          3.032904,
          3.032904
        ],
        [
          3.5641559999999997,
          3.5641559999999997
        ],
        [
          4.095408,
          4.095408
        ],
        [
          4.62666,
          4.62666
        ],
        [
          5.157912,
          5.157912
        ],
        [
          5.689164,
          5.689164
        ],
        [
          6.220415999999999,
          6.220415999999999
        ],
        [
          6.751668,
          6.751668
        ],
        [
          7.282920000000001,
          7.282920000000001
        ],
        [
          7.814171999999999,
          7.814171999999999
        ],
        [
          8.345424,
          8.345424
        ],
        [
          8.876676,
          8.876676
        ],
        [
          9.407928,
          9.407928
        ],
        [
          9.939179999999999,
          9.939179999999999
        ],
        [
          10.470431999999999,
          10.470431999999999
        ],
        [
          11.001684000000001,
          11.001684000000001
        ],
        [
          11.532936,
          11.532936
        ],
        [
          12.064188,
          12.064188
        ],
        [
          12.595440000000002,
          12.595440000000002
        ],
        [
          13.126692,
          13.126692
        ],
        [
          13.657943999999999,
          13.657943999999999
        ],
        [
          14.189195999999999,
          14.189195999999999
        ],
        [
          14.720448,
          14.720448
        ],
        [
          15.2517,
          15.2517
        ],
        [
          15.72142,
          15.72142
        ],
        [
          16.19114,
          16.19114
        ],
        [
          16.66086,
          16.66086
        ],
        [
          17.13058,
          17.13058
        ],
        [
          17.6003,
          17.6003
        ],
        [
          18.07002,
          18.07002
        ],
        [
          18.539740000000002,
          18.539740000000002
        ],
        [
          19.00946,
          19.00946
        ],
        [
          19.479180000000003,
          19.479180000000003
        ],
        [
          19.9489,
          19.9489
        ],
        [
          20.41862,
          20.41862
        ],
        [
          20.88834,
          20.88834
        ],
        [
          21.358060000000002,
          21.358060000000002
        ],
        [
          21.82778,
          21.82778
        ],
        [
          22.2975,
          22.2975
        ],
        [
          22.767220000000002,
          22.767220000000002
        ],
        [
          23.23694,
          23.23694
        ],
        [
          23.70666,
          23.70666
        ],
        [
          24.17638,
          24.17638
        ],
        [
          24.6461,
          24.6461
        ],
        [
          25.115820000000003,
          25.115820000000003
        ],
        [
          25.58554,
          25.58554
        ],
        [
          26.05526,
          26.05526
        ],
        [
          26.524980000000003,
          26.524980000000003
        ],
        [
          26.9947,
          26.9947
        ]
      ]
    },
    "10": {
      "label": "d10",
      "values": [
        [
          25.7814,
          25.7814
        ],
        [
          25.250148,
          25.250148
        ],
        [
          24.718896000000004,
          24.718896000000004
        ],
        [
          24.187644,
          24.187644
        ],
        [
          23.656392,
          23.656392
        ],
        [
          23.125140000000002,
          23.125140000000002
        ],
        [
          22.593888,
          22.593888
        ],
        [
          22.062636,
          22.062636
        ],
        [
          21.531384,
          21.531384
        ],
        [
          21.000132,
          21.000132
        ],
        [
          20.46888,
          20.46888
        ],
        [
          19.937628000000004,
          19.937628000000004
        ],
        [
          19.406376,
          19.406376
        ],
        [
          18.875124,
          18.875124
        ],
        [
          18.343871999999998,
          18.343871999999998
        ],
        [
          17.812620000000003,
          17.812620000000003
        ],
        [
          17.281368,
          17.281368
        ],
        [
          16.750116,
          16.750116
        ],
        [
          16.218864,
          16.218864
        ],
        [
          15.687612,
          15.687612
        ],
        [
          15.15636,
          15.15636
        ],
        [
          14.625108,
          14.625108
        ],
        [
          14.093855999999999,
          14.093855999999999
        ],
        [
          13.562604,
          13.562604
        ],
        [
          13.031352,
          13.031352
        ],
        [
          12.5001,
          12.5001
        ],
        [
          12.03038,
          12.03038
        ],
        [
          11.560659999999999,
          11.560659999999999
        ],
        [
          11.090939999999998,
          11.090939999999998
        ],
        [
          10.621220000000001,
          10.621220000000001
        ],
        [
          10.1515,
          10.1515
        ],
        [
          9.68178,
          9.68178
        ],
        [
          9.21206,
          9.21206
        ],
        [
          8.742339999999999,
          8.742339999999999
        ],
        [
          8.272619999999998,
          8.272619999999998
        ],
        [
          7.802900000000001,
          7.802900000000001
        ],
        [
          7.3331800000000005,
          7.3331800000000005
        ],
        [
          6.86346,
          6.86346
        ],
        [
          6.393739999999999,
          6.393739999999999
        ],
        [
          5.924019999999999,
          5.924019999999999
        ],
        [
          5.454299999999998,
          5.454299999999998
        ],
        [
          4.984580000000001,
          4.984580000000001
        ],
        [
          4.5148600000000005,
          4.5148600000000005
        ],
        [
          4.04514,
          4.04514
        ],
        [
          3.57542,
          3.57542
        ],
        [
          3.1056999999999992,
          3.1056999999999992
        ],
        [
          2.635979999999999,
          2.635979999999999
        ],
        [
          2.166260000000001,
          2.166260000000001
        ],
        [
          1.6965400000000008,
          1.6965400000000008
        ],
        [
          1.2268200000000005,
          1.2268200000000005
        ],
        [
          0.7571,
          0.7571
        ]
      ]
    },
    "19": {
      "label": "d19",
      "values": [
        [
          2.9764,
          2.9764
        ],
        [
          3.120374755620643,
          3.120374755620643
        ],
        [
          3.2652793373296887,
          3.2652793373296887
        ],
        [
          3.4109855240104765,
          3.4109855240104765
        ],
        [
          3.557348074529956,
          3.557348074529956
        ],
        [
          3.7042030378112885,
          3.7042030378112885
        ],
        [
          3.851365918741664,
          3.851365918741664
        ],
        [
          3.9986296916545556,
          3.9986296916545556
        ],
        [
          4.1457626536587115,
          4.1457626536587115
        ],
        [
          4.292506110948324,
          4.292506110948324
        ],
        [
          4.4385718924982305,
          4.4385718924982305
        ],
        [
          4.5836396873204945,
          4.5836396873204945
        ],
        [
          4.727354203860051,
          4.727354203860051
        ],
        [
          4.869322153249475,
          4.869322153249475
        ],
        [
          5.009109062177587,
          5.009109062177587
        ],
        [
          5.146235926239398,
          5.146235926239398
        ],
        [
          5.280175720959554,
          5.280175720959554
        ],
        [
          5.410349795469361,
          5.410349795469361
        ],
        [
          5.536124183219761,
          5.536124183219761
        ],
        [
          5.656805875356464,
          5.656805875356464
        ],
        [
          5.771639115639793,
          5.771639115639793
        ],
        [
          5.879801791215648,
          5.879801791215648
        ],
        [
          5.980402011226521,
          5.980402011226521
        ],
        [
          6.072474985199579,
          6.072474985199579
        ],
        [
          6.154980335239531,
          6.154980335239531
        ],
        [
          6.2268,
          6.2268
        ],
        [
          6.282070908240238,
          6.282070908240238
        ],
        [
          6.327190463091368,
          6.327190463091368
        ],
        [
          6.3612293557111155,
          6.3612293557111155
        ],
        [
          6.383210978691474,
          6.383210978691474
        ],
        [
          6.392113334222794,
          6.392113334222794
        ],
        [
          6.3868718735463155,
          6.3868718735463155
        ],
        [
          6.366383392939671,
          6.366383392939671
        ],
        [
          6.329511110721981,
          6.329511110721981
        ],
        [
          6.275091044459885,
          6.275091044459885
        ],
        [
          6.201939796764466,
          6.201939796764466
        ],
        [
          6.108863840896627,
          6.108863840896627
        ],
        [
          5.994670373080032,
          5.994670373080032
        ],
        [
          5.858179766396449,
          5.858179766396449
        ],
        [
          5.6982396211585185,
          5.6982396211585185
        ],
        [
          5.51374035885683,
          5.51374035885683
        ],
        [
          5.3036322517739,
          5.3036322517739
        ],
        [
          5.066943719286184,
          5.066943719286184
        ],
        [
          4.802800656424996,
          4.802800656424996
        ],
        [
          4.510446492662512,
          4.510446492662512
        ],
        [
          4.189262611825832,
          4.189262611825832
        ],
        [
          3.838788700629217,
          3.838788700629217
        ],
        [
          3.458742536839669,
          3.458742536839669
        ],
        [
          3.049038682047627,
          3.049038682047627
        ],
        [
          2.6098055117373447,
          2.6098055117373447
        ],
        [
          2.1414,
          2.1414
        ]
      ]
    },
    "21": {
      "label": "d21",
      "values": [
        [
          23.0885,
          23.0885
        ],
        [
          22.862741244379357,
          22.862741244379357
        ],
        [
          22.636052662670313,
          22.636052662670313
        ],
        [
          22.408562475989523,
          22.408562475989523
        ],
        [
          22.180415925470044,
          22.180415925470044
        ],
        [
          21.951776962188713,
          21.951776962188713
        ],
        [
          21.722830081258337,
          21.722830081258337
        ],
        [
          21.493782308345445,
          21.493782308345445
        ],
        [
          21.264865346341285,
          21.264865346341285
        ],
        [
          21.036337889051676,
          21.036337889051676
        ],
        [
          20.80848810750177,
          20.80848810750177
        ],
        [
          20.581636312679507,
          20.581636312679507
        ],
        [
          20.35613779613995,
          20.35613779613995
        ],
        [
          20.132385846750527,
          20.132385846750527
        ],
        [
          19.910814937822416,
          19.910814937822416
        ],
        [
          19.691904073760604,
          19.691904073760604
        ],
        [
          19.476180279040445,
          19.476180279040445
        ],
        [
          19.26422220453064,
          19.26422220453064
        ],
        [
          19.056663816780237,
          19.056663816780237
        ],
        [
          18.85419812464354,
          18.85419812464354
        ],
        [
          18.657580884360204,
          18.657580884360204
        ],
        [
          18.467634208784354,
          18.467634208784354
        ],
        [
          18.28524998877348,
          18.28524998877348
        ],
        [
          18.111393014800424,
          18.111393014800424
        ],
        [
          17.94710366476047,
          17.94710366476047
        ],
        [
          17.7935,
          17.7935
        ],
        [
          17.659421091759768,
          17.659421091759768
        ],
        [
          17.535493536908632,
          17.535493536908632
        ],
        [
          17.42264664428889,
          17.42264664428889
        ],
        [
          17.321857021308524,
          17.321857021308524
        ],
        [
          17.23414666577721,
          17.23414666577721
        ],
        [
          17.160580126453688,
          17.160580126453688
        ],
        [
          17.10226060706033,
          17.10226060706033
        ],
        [
          17.060324889278018,
          17.060324889278018
        ],
        [
          17.035936955540112,
          17.035936955540112
        ],
        [
          17.03028020323553,
          17.03028020323553
        ],
        [
          17.04454815910337,
          17.04454815910337
        ],
        [
          17.07993362691997,
          17.07993362691997
        ],
        [
          17.137616233603556,
          17.137616233603556
        ],
        [
          17.21874837884148,
          17.21874837884148
        ],
        [
          17.32443964114317,
          17.32443964114317
        ],
        [
          17.455739748226097,
          17.455739748226097
        ],
        [
          17.613620280713818,
          17.613620280713818
        ],
        [
          17.798955343575006,
          17.798955343575006
        ],
        [
          18.01250150733749,
          18.01250150733749
        ],
        [
          18.25487738817417,
          18.25487738817417
        ],
        [
          18.526543299370786,
          18.526543299370786
        ],
        [
          18.82778146316033,
          18.82778146316033
        ],
        [
          19.158677317952375,
          19.158677317952375
        ],
        [
          19.519102488262657,
          19.519102488262657
        ],
        [
          19.9087,
          19.9087
        ]
      ]
    },
    "23": {
      "label": "d23",
      "values": [
        [
          1.6369,
          1.6369
        ],
        [
          1.718688,
          1.718688
        ],
        [
          1.8004760000000002,
          1.8004760000000002
        ],
        [
          1.882264,
          1.882264
        ],
        [
          1.964052,
          1.964052
        ],
        [
          2.04584,
          2.04584
        ],
        [
          2.1276279999999996,
          2.1276279999999996
        ],
        [
          2.209416,
          2.209416
        ],
        [
          2.291204,
          2.291204
        ],
        [
          2.372992,
          2.372992
        ],
        [
          2.4547800000000004,
          2.4547800000000004
        ],
        [
          2.536568,
          2.536568
        ],
        [
          2.618356,
          2.618356
        ],
        [
          2.700144,
          2.700144
        ],
        [
          2.781932,
          2.781932
        ],
        [
          2.86372,
          2.86372
        ],
        [
          2.9455080000000002,
          2.9455080000000002
        ],
        [
          3.027296,
          3.027296
        ],
        [
          3.1090839999999997,
          3.1090839999999997
        ],
        [
          3.190872,
          3.190872
        ],
        [
          3.27266,
          3.27266
        ],
        [
          3.3544479999999997,
          3.3544479999999997
        ],
        [
          3.436236,
          3.436236
        ],
        [
          3.518024,
          3.518024
        ],
        [
          3.5998119999999996,
          3.5998119999999996
        ],
        [
          3.6816,
          3.6816
        ],
        [
          3.760408,
          3.760408
        ],
        [
          3.8392160000000004,
          3.8392160000000004
        ],
        [
          3.918024,
          3.918024
        ],
        [
          3.9968319999999995,
          3.9968319999999995
        ],
        [
          4.07564,
          4.07564
        ],
        [
          4.154448,
          4.154448
        ],
        [
          4.233256,
          4.233256
        ],
        [
          4.312064,
          4.312064
        ],
        [
          4.390872,
          4.390872
        ],
        [
          4.469679999999999,
          4.469679999999999
        ],
        [
          4.548487999999999,
          4.548487999999999
        ],
        [
          4.627295999999999,
          4.627295999999999
        ],
        [
          4.706104,
          4.706104
        ],
        [
          4.784912,
          4.784912
        ],
        [
          4.863720000000001,
          4.863720000000001
        ],
        [
          4.942527999999999,
          4.942527999999999
        ],
        [
          5.021336,
          5.021336
        ],
        [
          5.100143999999999,
          5.100143999999999
        ],
        [
          5.178952,
          5.178952
        ],
        [
          5.25776,
          5.25776
        ],
        [
          5.336568,
          5.336568
        ],
        [
          5.415375999999999,
          5.415375999999999
        ],
        [
          5.494184,
          5.494184
        ],
        [
          5.572991999999999,
          5.572991999999999
        ],
        [
          5.6518,
          5.6518
        ]
      ]
    },
    "25": {
      "label": "BF",
      "values": [
        [
          14.60331,
          14.60331
        ],
        [
          14.6032928,
          14.6032928
        ],
        [
          14.603275600000002,
          14.603275600000002
        ],
        [
          14.6032584,
          14.6032584
        ],
        [
          14.6032412,
          14.6032412
        ],
        [
          14.603224,
          14.603224
        ],
        [
          14.6032068,
          14.6032068
        ],
        [
          14.6031896,
          14.6031896
        ],
        [
          14.6031724,
          14.6031724
        ],
        [
          14.6031552,
          14.6031552
        ],
        [
          14.603138000000001,
          14.603138000000001
        ],
        [
          14.603120800000001,
          14.603120800000001
        ],
        [
          14.6031036,
          14.6031036
        ],
        [
          14.603086400000002,
          14.603086400000002
        ],
        [
          14.6030692,
          14.6030692
        ],
        [
          14.603052,
          14.603052
        ],
        [
          14.6030348,
          14.6030348
        ],
        [
          14.603017600000001,
          14.603017600000001
        ],
        [
          14.603000399999999,
          14.603000399999999
        ],
        [
          14.6029832,
          14.6029832
        ],
        [
          14.602966000000002,
          14.602966000000002
        ],
        [
          14.6029488,
          14.6029488
        ],
        [
          14.602931600000002,
          14.602931600000002
        ],
        [
          14.602914400000001,
          14.602914400000001
        ],
        [
          14.602897200000001,
          14.602897200000001
        ],
        [
          14.60288,
          14.60288
        ],
        [
          14.602889600000001,
          14.602889600000001
        ],
        [
          14.602899200000001,
          14.602899200000001
        ],
        [
          14.602908800000002,
          14.602908800000002
        ],
        [
          14.6029184,
          14.6029184
        ],
        [
          14.602928000000002,
          14.602928000000002
        ],
        [
          14.6029376,
          14.6029376
        ],
        [
          14.6029472,
          14.6029472
        ],
        [
          14.602956800000001,
          14.602956800000001
        ],
        [
          14.6029664,
          14.6029664
        ],
        [
          14.602976000000002,
          14.602976000000002
        ],
        [
          14.6029856,
          14.6029856
        ],
        [
          14.602995200000002,
          14.602995200000002
        ],
        [
          14.6030048,
          14.6030048
        ],
        [
          14.6030144,
          14.6030144
        ],
        [
          14.603024000000001,
          14.603024000000001
        ],
        [
          14.6030336,
          14.6030336
        ],
        [
          14.603043200000002,
          14.603043200000002
        ],
        [
          14.6030528,
          14.6030528
        ],
        [
          14.6030624,
          14.6030624
        ],
        [
          14.603072000000001,
          14.603072000000001
        ],
        [
          14.603081600000001,
          14.603081600000001
        ],
        [
          14.603091200000001,
          14.603091200000001
        ],
        [
          14.6031008,
          14.6031008
        ],
        [
          14.603110400000002,
          14.603110400000002
        ],
        [
          14.60312,
          14.60312
        ]
      ]
    }
  },
  "aperture": {
    "fStops": [
      4.15704,
      5.6,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22
  },
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "5"
    },
    {
      "text": "G2",
      "fromSurface": "6",
      "toSurface": "10"
    },
    {
      "text": "G3",
      "fromSurface": "11A",
      "toSurface": "19"
    },
    {
      "text": "G4",
      "fromSurface": "20",
      "toSurface": "21"
    },
    {
      "text": "G5",
      "fromSurface": "22",
      "toSurface": "23"
    },
    {
      "text": "G6",
      "fromSurface": "24",
      "toSurface": "25"
    }
  ],
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "3",
      "toSurface": "5"
    },
    {
      "text": "C2",
      "fromSurface": "6",
      "toSurface": "8"
    },
    {
      "text": "C3",
      "fromSurface": "14",
      "toSurface": "16"
    },
    {
      "text": "C4",
      "fromSurface": "17A",
      "toSurface": "19"
    }
  ],
  "layout": {
    "yScFill": 0.66
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
