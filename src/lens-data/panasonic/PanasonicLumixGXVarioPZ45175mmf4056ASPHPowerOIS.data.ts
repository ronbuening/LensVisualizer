import type { LensDataV2Input } from "../../types/lensDataV2.js";
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
      "glass": "Unmatched (printed nd/νd; no catalog row at these coordinates)",
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
      "sd": 18.67393879207889,
      "medium": 1,
      "d": 4.2
    },
    {
      "label": "2",
      "R": "flat",
      "sd": 18.67393879207889,
      "d": 0.2
    },
    {
      "label": "3",
      "R": 38.426,
      "sd": 16.5129308585494,
      "medium": 2,
      "d": 1.2
    },
    {
      "label": "4",
      "R": 23.093,
      "sd": 16.5129308585494,
      "medium": 3,
      "d": 6
    },
    {
      "label": "5",
      "R": 139.112,
      "sd": 16.5129308585494
    },
    {
      "label": "6",
      "R": 400,
      "sd": 8.5,
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
      "sd": 9.12,
      "medium": 6,
      "d": 0.6
    },
    {
      "label": "10",
      "R": 67.773,
      "sd": 9.12
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
      "sd": 7.678,
      "medium": 8,
      "d": 0.6
    },
    {
      "label": "15",
      "R": 11.835,
      "sd": 7.678,
      "medium": 9,
      "d": 3.2
    },
    {
      "label": "16",
      "R": 55.716,
      "sd": 7.678,
      "d": 0.76
    },
    {
      "label": "17A",
      "R": 21.353,
      "sd": 7.801,
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
      "sd": 7.801,
      "medium": 11,
      "d": 0.6
    },
    {
      "label": "19",
      "R": -34.727,
      "sd": 7.801
    },
    {
      "label": "20",
      "R": 44.246,
      "sd": 7.225,
      "medium": 12,
      "d": 0.5
    },
    {
      "label": "21",
      "R": 15.083,
      "sd": 7.225
    },
    {
      "label": "22",
      "R": -16.274,
      "sd": 8.959,
      "medium": 13,
      "d": 0.7
    },
    {
      "label": "23",
      "R": -74.534,
      "sd": 8.959
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
        "focalLengthMm": 45.44142804832053,
        "nominalFNumber": 4.1699384,
        "published": false
      },
      {
        "focalLengthMm": 45.71676932348696,
        "nominalFNumber": 4.1828368000000005,
        "published": false
      },
      {
        "focalLengthMm": 45.99433258231285,
        "nominalFNumber": 4.1957352000000006,
        "published": false
      },
      {
        "focalLengthMm": 46.27413890348373,
        "nominalFNumber": 4.208633600000001,
        "published": false
      },
      {
        "focalLengthMm": 46.55620957655388,
        "nominalFNumber": 4.221532,
        "published": false
      },
      {
        "focalLengthMm": 46.840566103830035,
        "nominalFNumber": 4.2344304,
        "published": false
      },
      {
        "focalLengthMm": 47.127230202273815,
        "nominalFNumber": 4.2473288,
        "published": false
      },
      {
        "focalLengthMm": 47.41622380540251,
        "nominalFNumber": 4.2602272,
        "published": false
      },
      {
        "focalLengthMm": 47.70756906519992,
        "nominalFNumber": 4.2731256,
        "published": false
      },
      {
        "focalLengthMm": 48.00128835402584,
        "nominalFNumber": 4.286024,
        "published": false
      },
      {
        "focalLengthMm": 48.29740426654029,
        "nominalFNumber": 4.2989224,
        "published": false
      },
      {
        "focalLengthMm": 48.59593962161978,
        "nominalFNumber": 4.3118208000000005,
        "published": false
      },
      {
        "focalLengthMm": 48.896917464286766,
        "nominalFNumber": 4.3247192000000005,
        "published": false
      },
      {
        "focalLengthMm": 49.20036106763543,
        "nominalFNumber": 4.337617600000001,
        "published": false
      },
      {
        "focalLengthMm": 49.50629393476451,
        "nominalFNumber": 4.350516,
        "published": false
      },
      {
        "focalLengthMm": 49.81473980070362,
        "nominalFNumber": 4.3634144,
        "published": false
      },
      {
        "focalLengthMm": 50.125722634352364,
        "nominalFNumber": 4.3763128,
        "published": false
      },
      {
        "focalLengthMm": 50.43926664040481,
        "nominalFNumber": 4.3892112,
        "published": false
      },
      {
        "focalLengthMm": 50.75539626128581,
        "nominalFNumber": 4.402109600000001,
        "published": false
      },
      {
        "focalLengthMm": 51.074136179076376,
        "nominalFNumber": 4.415008,
        "published": false
      },
      {
        "focalLengthMm": 51.395511317443905,
        "nominalFNumber": 4.4279064,
        "published": false
      },
      {
        "focalLengthMm": 51.71954684355635,
        "nominalFNumber": 4.4408048,
        "published": false
      },
      {
        "focalLengthMm": 52.046268170010265,
        "nominalFNumber": 4.4537032000000005,
        "published": false
      },
      {
        "focalLengthMm": 52.37570095673084,
        "nominalFNumber": 4.466601600000001,
        "published": false
      },
      {
        "focalLengthMm": 52.70787111288427,
        "nominalFNumber": 4.4795,
        "published": false
      },
      {
        "focalLengthMm": 53.04280479876963,
        "nominalFNumber": 4.492398400000001,
        "published": false
      },
      {
        "focalLengthMm": 53.38052842770407,
        "nominalFNumber": 4.5052968,
        "published": false
      },
      {
        "focalLengthMm": 53.72106866790064,
        "nominalFNumber": 4.5181952,
        "published": false
      },
      {
        "focalLengthMm": 54.06445244432515,
        "nominalFNumber": 4.5310936,
        "published": false
      },
      {
        "focalLengthMm": 54.410706940549765,
        "nominalFNumber": 4.543991999999999,
        "published": false
      },
      {
        "focalLengthMm": 54.75985960058021,
        "nominalFNumber": 4.5568904,
        "published": false
      },
      {
        "focalLengthMm": 55.11193813067192,
        "nominalFNumber": 4.5697888,
        "published": false
      },
      {
        "focalLengthMm": 55.46697050112424,
        "nominalFNumber": 4.5826872,
        "published": false
      },
      {
        "focalLengthMm": 55.824984948054286,
        "nominalFNumber": 4.5955856,
        "published": false
      },
      {
        "focalLengthMm": 56.18600997514502,
        "nominalFNumber": 4.608484000000001,
        "published": false
      },
      {
        "focalLengthMm": 56.55007435537075,
        "nominalFNumber": 4.6213824,
        "published": false
      },
      {
        "focalLengthMm": 56.91720713269124,
        "nominalFNumber": 4.6342808,
        "published": false
      },
      {
        "focalLengthMm": 57.287437623717494,
        "nominalFNumber": 4.6471792,
        "published": false
      },
      {
        "focalLengthMm": 57.660795419343636,
        "nominalFNumber": 4.660077600000001,
        "published": false
      },
      {
        "focalLengthMm": 58.037310386338795,
        "nominalFNumber": 4.672976,
        "published": false
      },
      {
        "focalLengthMm": 58.4170126689115,
        "nominalFNumber": 4.6858744,
        "published": false
      },
      {
        "focalLengthMm": 58.79993269021368,
        "nominalFNumber": 4.6987728,
        "published": false
      },
      {
        "focalLengthMm": 59.18610115381825,
        "nominalFNumber": 4.7116712000000005,
        "published": false
      },
      {
        "focalLengthMm": 59.57554904513293,
        "nominalFNumber": 4.724569600000001,
        "published": false
      },
      {
        "focalLengthMm": 59.9683076327692,
        "nominalFNumber": 4.737468000000001,
        "published": false
      },
      {
        "focalLengthMm": 60.36440846985137,
        "nominalFNumber": 4.750366400000001,
        "published": false
      },
      {
        "focalLengthMm": 60.763883395268046,
        "nominalFNumber": 4.7632648,
        "published": false
      },
      {
        "focalLengthMm": 61.16676453485181,
        "nominalFNumber": 4.776163200000001,
        "published": false
      },
      {
        "focalLengthMm": 61.57308430249278,
        "nominalFNumber": 4.7890616,
        "published": false
      },
      {
        "focalLengthMm": 61.98287540118358,
        "nominalFNumber": 4.80196,
        "published": false
      },
      {
        "focalLengthMm": 62.39617082396891,
        "nominalFNumber": 4.8148584,
        "published": false
      },
      {
        "focalLengthMm": 62.81300385482192,
        "nominalFNumber": 4.8277568,
        "published": false
      },
      {
        "focalLengthMm": 63.23340806942264,
        "nominalFNumber": 4.8406552000000005,
        "published": false
      },
      {
        "focalLengthMm": 63.65741733584363,
        "nominalFNumber": 4.853553600000001,
        "published": false
      },
      {
        "focalLengthMm": 64.08506581512034,
        "nominalFNumber": 4.866452000000001,
        "published": false
      },
      {
        "focalLengthMm": 64.51638796172121,
        "nominalFNumber": 4.8793504,
        "published": false
      },
      {
        "focalLengthMm": 64.95141852389524,
        "nominalFNumber": 4.892248800000001,
        "published": false
      },
      {
        "focalLengthMm": 65.39019254388695,
        "nominalFNumber": 4.9051472,
        "published": false
      },
      {
        "focalLengthMm": 65.83274535802201,
        "nominalFNumber": 4.9180456,
        "published": false
      },
      {
        "focalLengthMm": 66.27911259664691,
        "nominalFNumber": 4.930944,
        "published": false
      },
      {
        "focalLengthMm": 66.72933018391454,
        "nominalFNumber": 4.9438424,
        "published": false
      },
      {
        "focalLengthMm": 67.18343433740735,
        "nominalFNumber": 4.9567408,
        "published": false
      },
      {
        "focalLengthMm": 67.64146156758467,
        "nominalFNumber": 4.9696392000000005,
        "published": false
      },
      {
        "focalLengthMm": 68.1034486770528,
        "nominalFNumber": 4.982537600000001,
        "published": false
      },
      {
        "focalLengthMm": 68.56943275962317,
        "nominalFNumber": 4.995436,
        "published": false
      },
      {
        "focalLengthMm": 69.03945119918141,
        "nominalFNumber": 5.008334400000001,
        "published": false
      },
      {
        "focalLengthMm": 69.5135416683211,
        "nominalFNumber": 5.0212328,
        "published": false
      },
      {
        "focalLengthMm": 69.99174212674751,
        "nominalFNumber": 5.0341312,
        "published": false
      },
      {
        "focalLengthMm": 70.47409081943093,
        "nominalFNumber": 5.0470296,
        "published": false
      },
      {
        "focalLengthMm": 70.96062627449788,
        "nominalFNumber": 5.059928,
        "published": false
      },
      {
        "focalLengthMm": 71.4513873008349,
        "nominalFNumber": 5.0728264,
        "published": false
      },
      {
        "focalLengthMm": 71.946412985402,
        "nominalFNumber": 5.0857248,
        "published": false
      },
      {
        "focalLengthMm": 72.44574269022874,
        "nominalFNumber": 5.0986232000000005,
        "published": false
      },
      {
        "focalLengthMm": 72.94941604907191,
        "nominalFNumber": 5.1115216,
        "published": false
      },
      {
        "focalLengthMm": 73.45747296372409,
        "nominalFNumber": 5.124420000000001,
        "published": false
      },
      {
        "focalLengthMm": 73.96995359994499,
        "nominalFNumber": 5.137318400000001,
        "published": false
      },
      {
        "focalLengthMm": 74.48689838299639,
        "nominalFNumber": 5.1502168,
        "published": false
      },
      {
        "focalLengthMm": 75.0083479927575,
        "nominalFNumber": 5.1631152,
        "published": false
      },
      {
        "focalLengthMm": 75.5343433583948,
        "nominalFNumber": 5.1760136,
        "published": false
      },
      {
        "focalLengthMm": 76.06492565256568,
        "nominalFNumber": 5.188912,
        "published": false
      },
      {
        "focalLengthMm": 76.60013628512074,
        "nominalFNumber": 5.201810399999999,
        "published": false
      },
      {
        "focalLengthMm": 77.14001689628425,
        "nominalFNumber": 5.2147087999999995,
        "published": false
      },
      {
        "focalLengthMm": 77.68460934928393,
        "nominalFNumber": 5.2276072000000005,
        "published": false
      },
      {
        "focalLengthMm": 78.23395572238633,
        "nominalFNumber": 5.2405056,
        "published": false
      },
      {
        "focalLengthMm": 78.78809830032431,
        "nominalFNumber": 5.253404,
        "published": false
      },
      {
        "focalLengthMm": 79.34707956506708,
        "nominalFNumber": 5.266302400000001,
        "published": false
      },
      {
        "focalLengthMm": 79.9109421859049,
        "nominalFNumber": 5.2792008,
        "published": false
      },
      {
        "focalLengthMm": 80.47972900880845,
        "nominalFNumber": 5.2920992,
        "published": false
      },
      {
        "focalLengthMm": 81.0534830450246,
        "nominalFNumber": 5.3049976,
        "published": false
      },
      {
        "focalLengthMm": 81.6322474588672,
        "nominalFNumber": 5.317896,
        "published": false
      },
      {
        "focalLengthMm": 82.21606555465988,
        "nominalFNumber": 5.3307944,
        "published": false
      },
      {
        "focalLengthMm": 82.80498076279204,
        "nominalFNumber": 5.3436928,
        "published": false
      },
      {
        "focalLengthMm": 83.39903662482284,
        "nominalFNumber": 5.3565912,
        "published": false
      },
      {
        "focalLengthMm": 83.99827677761567,
        "nominalFNumber": 5.3694896000000005,
        "published": false
      },
      {
        "focalLengthMm": 84.60274493642247,
        "nominalFNumber": 5.382388,
        "published": false
      },
      {
        "focalLengthMm": 85.21248487688172,
        "nominalFNumber": 5.395286400000001,
        "published": false
      },
      {
        "focalLengthMm": 85.82754041586881,
        "nominalFNumber": 5.4081848,
        "published": false
      },
      {
        "focalLengthMm": 86.44795539115482,
        "nominalFNumber": 5.4210832,
        "published": false
      },
      {
        "focalLengthMm": 87.07377363978428,
        "nominalFNumber": 5.4339816,
        "published": false
      },
      {
        "focalLengthMm": 87.7062,
        "nominalFNumber": 5.44688,
        "published": true
      },
      {
        "focalLengthMm": 88.2678400586215,
        "nominalFNumber": 5.4507750999999995,
        "published": false
      },
      {
        "focalLengthMm": 88.83495926706696,
        "nominalFNumber": 5.454670200000001,
        "published": false
      },
      {
        "focalLengthMm": 89.40642674825618,
        "nominalFNumber": 5.4585653,
        "published": false
      },
      {
        "focalLengthMm": 89.98227257987159,
        "nominalFNumber": 5.4624604,
        "published": false
      },
      {
        "focalLengthMm": 90.56252675350032,
        "nominalFNumber": 5.4663555,
        "published": false
      },
      {
        "focalLengthMm": 91.14721915781541,
        "nominalFNumber": 5.470250600000001,
        "published": false
      },
      {
        "focalLengthMm": 91.73637956090815,
        "nominalFNumber": 5.4741457,
        "published": false
      },
      {
        "focalLengthMm": 92.33003759174217,
        "nominalFNumber": 5.4780408,
        "published": false
      },
      {
        "focalLengthMm": 92.92822272070171,
        "nominalFNumber": 5.4819359,
        "published": false
      },
      {
        "focalLengthMm": 93.53096423917982,
        "nominalFNumber": 5.485831,
        "published": false
      },
      {
        "focalLengthMm": 94.13829123819235,
        "nominalFNumber": 5.4897261,
        "published": false
      },
      {
        "focalLengthMm": 94.7502325859682,
        "nominalFNumber": 5.4936212,
        "published": false
      },
      {
        "focalLengthMm": 95.36681690448327,
        "nominalFNumber": 5.4975163,
        "published": false
      },
      {
        "focalLengthMm": 95.98807254489833,
        "nominalFNumber": 5.5014114,
        "published": false
      },
      {
        "focalLengthMm": 96.61402756186155,
        "nominalFNumber": 5.5053065000000005,
        "published": false
      },
      {
        "focalLengthMm": 97.24470968664423,
        "nominalFNumber": 5.5092016,
        "published": false
      },
      {
        "focalLengthMm": 97.88014629905231,
        "nominalFNumber": 5.5130967,
        "published": false
      },
      {
        "focalLengthMm": 98.52036439809444,
        "nominalFNumber": 5.5169918,
        "published": false
      },
      {
        "focalLengthMm": 99.16539057134713,
        "nominalFNumber": 5.5208869,
        "published": false
      },
      {
        "focalLengthMm": 99.81525096299526,
        "nominalFNumber": 5.524782,
        "published": false
      },
      {
        "focalLengthMm": 100.46997124047998,
        "nominalFNumber": 5.5286770999999995,
        "published": false
      },
      {
        "focalLengthMm": 101.1295765597392,
        "nominalFNumber": 5.532572200000001,
        "published": false
      },
      {
        "focalLengthMm": 101.79409152898096,
        "nominalFNumber": 5.5364673,
        "published": false
      },
      {
        "focalLengthMm": 102.46354017095503,
        "nominalFNumber": 5.5403624,
        "published": false
      },
      {
        "focalLengthMm": 103.1379458836768,
        "nominalFNumber": 5.5442575000000005,
        "published": false
      },
      {
        "focalLengthMm": 103.81733139956572,
        "nominalFNumber": 5.5481526,
        "published": false
      },
      {
        "focalLengthMm": 104.50171874295185,
        "nominalFNumber": 5.5520477,
        "published": false
      },
      {
        "focalLengthMm": 105.19112918591374,
        "nominalFNumber": 5.5559428,
        "published": false
      },
      {
        "focalLengthMm": 105.88558320240332,
        "nominalFNumber": 5.5598379,
        "published": false
      },
      {
        "focalLengthMm": 106.58510042062044,
        "nominalFNumber": 5.563733,
        "published": false
      },
      {
        "focalLengthMm": 107.28969957359577,
        "nominalFNumber": 5.5676281,
        "published": false
      },
      {
        "focalLengthMm": 107.99939844794581,
        "nominalFNumber": 5.5715232,
        "published": false
      },
      {
        "focalLengthMm": 108.7142138307619,
        "nominalFNumber": 5.5754183,
        "published": false
      },
      {
        "focalLengthMm": 109.43416145459814,
        "nominalFNumber": 5.5793134,
        "published": false
      },
      {
        "focalLengthMm": 110.15925594052392,
        "nominalFNumber": 5.5832085000000005,
        "published": false
      },
      {
        "focalLengthMm": 110.88951073921008,
        "nominalFNumber": 5.5871036,
        "published": false
      },
      {
        "focalLengthMm": 111.6249380700175,
        "nominalFNumber": 5.5909987,
        "published": false
      },
      {
        "focalLengthMm": 112.36554885806096,
        "nominalFNumber": 5.5948937999999995,
        "published": false
      },
      {
        "focalLengthMm": 113.11135266922291,
        "nominalFNumber": 5.598788900000001,
        "published": false
      },
      {
        "focalLengthMm": 113.86235764309409,
        "nominalFNumber": 5.602684,
        "published": false
      },
      {
        "focalLengthMm": 114.61857042382421,
        "nominalFNumber": 5.606579099999999,
        "published": false
      },
      {
        "focalLengthMm": 115.3799960888621,
        "nominalFNumber": 5.6104742000000005,
        "published": false
      },
      {
        "focalLengthMm": 116.14663807557683,
        "nominalFNumber": 5.6143693,
        "published": false
      },
      {
        "focalLengthMm": 116.9184981057499,
        "nominalFNumber": 5.6182644,
        "published": false
      },
      {
        "focalLengthMm": 117.69557610793295,
        "nominalFNumber": 5.6221595,
        "published": false
      },
      {
        "focalLengthMm": 118.47787013767324,
        "nominalFNumber": 5.6260546,
        "published": false
      },
      {
        "focalLengthMm": 119.26537629561055,
        "nominalFNumber": 5.629949699999999,
        "published": false
      },
      {
        "focalLengthMm": 120.05808864345084,
        "nominalFNumber": 5.6338448,
        "published": false
      },
      {
        "focalLengthMm": 120.85599911785026,
        "nominalFNumber": 5.6377399,
        "published": false
      },
      {
        "focalLengthMm": 121.65909744220045,
        "nominalFNumber": 5.641635,
        "published": false
      },
      {
        "focalLengthMm": 122.46737103637332,
        "nominalFNumber": 5.6455301,
        "published": false
      },
      {
        "focalLengthMm": 123.28080492443678,
        "nominalFNumber": 5.6494252,
        "published": false
      },
      {
        "focalLengthMm": 124.09938164039866,
        "nominalFNumber": 5.653320300000001,
        "published": false
      },
      {
        "focalLengthMm": 124.92308113201474,
        "nominalFNumber": 5.6572154,
        "published": false
      },
      {
        "focalLengthMm": 125.75188066272354,
        "nominalFNumber": 5.6611104999999995,
        "published": false
      },
      {
        "focalLengthMm": 126.5857547117601,
        "nominalFNumber": 5.6650056,
        "published": false
      },
      {
        "focalLengthMm": 127.42467487255166,
        "nominalFNumber": 5.6689007,
        "published": false
      },
      {
        "focalLengthMm": 128.26860974942338,
        "nominalFNumber": 5.672795799999999,
        "published": false
      },
      {
        "focalLengthMm": 129.1175248527515,
        "nominalFNumber": 5.6766909000000005,
        "published": false
      },
      {
        "focalLengthMm": 129.9713824926386,
        "nominalFNumber": 5.680586,
        "published": false
      },
      {
        "focalLengthMm": 130.8301416712206,
        "nominalFNumber": 5.684481099999999,
        "published": false
      },
      {
        "focalLengthMm": 131.6937579737256,
        "nominalFNumber": 5.6883762,
        "published": false
      },
      {
        "focalLengthMm": 132.5621834584141,
        "nominalFNumber": 5.6922713,
        "published": false
      },
      {
        "focalLengthMm": 133.4353665455298,
        "nominalFNumber": 5.6961664,
        "published": false
      },
      {
        "focalLengthMm": 134.313251905421,
        "nominalFNumber": 5.7000614999999994,
        "published": false
      },
      {
        "focalLengthMm": 135.19578034597328,
        "nominalFNumber": 5.7039566,
        "published": false
      },
      {
        "focalLengthMm": 136.08288869955734,
        "nominalFNumber": 5.7078517,
        "published": false
      },
      {
        "focalLengthMm": 136.9745097096219,
        "nominalFNumber": 5.7117468,
        "published": false
      },
      {
        "focalLengthMm": 137.8705719171719,
        "nominalFNumber": 5.7156419,
        "published": false
      },
      {
        "focalLengthMm": 138.7709995473049,
        "nominalFNumber": 5.719537,
        "published": false
      },
      {
        "focalLengthMm": 139.6757123960414,
        "nominalFNumber": 5.723432099999999,
        "published": false
      },
      {
        "focalLengthMm": 140.58462571764716,
        "nominalFNumber": 5.7273272,
        "published": false
      },
      {
        "focalLengthMm": 141.49765011271023,
        "nominalFNumber": 5.7312223,
        "published": false
      },
      {
        "focalLengthMm": 142.4146914172258,
        "nominalFNumber": 5.7351174,
        "published": false
      },
      {
        "focalLengthMm": 143.33565059290532,
        "nominalFNumber": 5.739012499999999,
        "published": false
      },
      {
        "focalLengthMm": 144.260423619028,
        "nominalFNumber": 5.742907600000001,
        "published": false
      },
      {
        "focalLengthMm": 145.1889013861083,
        "nominalFNumber": 5.7468027,
        "published": false
      },
      {
        "focalLengthMm": 146.12096959162992,
        "nominalFNumber": 5.750697799999999,
        "published": false
      },
      {
        "focalLengthMm": 147.05650863820728,
        "nominalFNumber": 5.7545929000000005,
        "published": false
      },
      {
        "focalLengthMm": 147.99539353444368,
        "nominalFNumber": 5.758488,
        "published": false
      },
      {
        "focalLengthMm": 148.9374937988287,
        "nominalFNumber": 5.762383099999999,
        "published": false
      },
      {
        "focalLengthMm": 149.88267336698607,
        "nominalFNumber": 5.7662781999999995,
        "published": false
      },
      {
        "focalLengthMm": 150.8307905026367,
        "nominalFNumber": 5.7701733,
        "published": false
      },
      {
        "focalLengthMm": 151.78169771259837,
        "nominalFNumber": 5.7740684,
        "published": false
      },
      {
        "focalLengthMm": 152.73524166618793,
        "nominalFNumber": 5.777963499999999,
        "published": false
      },
      {
        "focalLengthMm": 153.69126311938112,
        "nominalFNumber": 5.7818586000000005,
        "published": false
      },
      {
        "focalLengthMm": 154.6495968440968,
        "nominalFNumber": 5.7857537,
        "published": false
      },
      {
        "focalLengthMm": 155.61007156297254,
        "nominalFNumber": 5.7896488,
        "published": false
      },
      {
        "focalLengthMm": 156.57250989000786,
        "nominalFNumber": 5.7935438999999995,
        "published": false
      },
      {
        "focalLengthMm": 157.53672827744603,
        "nominalFNumber": 5.797439,
        "published": false
      },
      {
        "focalLengthMm": 158.50253696927493,
        "nominalFNumber": 5.801334099999999,
        "published": false
      },
      {
        "focalLengthMm": 159.46973996172508,
        "nominalFNumber": 5.8052292,
        "published": false
      },
      {
        "focalLengthMm": 160.43813497113524,
        "nominalFNumber": 5.8091243,
        "published": false
      },
      {
        "focalLengthMm": 161.40751340957286,
        "nominalFNumber": 5.813019399999999,
        "published": false
      },
      {
        "focalLengthMm": 162.37766036855356,
        "nominalFNumber": 5.8169145,
        "published": false
      },
      {
        "focalLengthMm": 163.3483546112782,
        "nominalFNumber": 5.8208096,
        "published": false
      },
      {
        "focalLengthMm": 164.31936857367552,
        "nominalFNumber": 5.8247047,
        "published": false
      },
      {
        "focalLengthMm": 165.29046837466714,
        "nominalFNumber": 5.828599799999999,
        "published": false
      },
      {
        "focalLengthMm": 166.26141383596985,
        "nominalFNumber": 5.8324949,
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
          2.1032129999999998,
          2.1032129999999998
        ],
        [
          2.236026,
          2.236026
        ],
        [
          2.368839,
          2.368839
        ],
        [
          2.501652,
          2.501652
        ],
        [
          2.6344649999999996,
          2.6344649999999996
        ],
        [
          2.7672779999999997,
          2.7672779999999997
        ],
        [
          2.9000909999999998,
          2.9000909999999998
        ],
        [
          3.032904,
          3.032904
        ],
        [
          3.165717,
          3.165717
        ],
        [
          3.2985300000000004,
          3.2985300000000004
        ],
        [
          3.431343,
          3.431343
        ],
        [
          3.5641559999999997,
          3.5641559999999997
        ],
        [
          3.696969,
          3.696969
        ],
        [
          3.829782,
          3.829782
        ],
        [
          3.9625949999999994,
          3.9625949999999994
        ],
        [
          4.095408,
          4.095408
        ],
        [
          4.228221,
          4.228221
        ],
        [
          4.361034,
          4.361034
        ],
        [
          4.493847,
          4.493847
        ],
        [
          4.62666,
          4.62666
        ],
        [
          4.759473,
          4.759473
        ],
        [
          4.892286,
          4.892286
        ],
        [
          5.025099,
          5.025099
        ],
        [
          5.157912,
          5.157912
        ],
        [
          5.290725,
          5.290725
        ],
        [
          5.423538,
          5.423538
        ],
        [
          5.556350999999999,
          5.556350999999999
        ],
        [
          5.689164,
          5.689164
        ],
        [
          5.8219769999999995,
          5.8219769999999995
        ],
        [
          5.954789999999999,
          5.954789999999999
        ],
        [
          6.087603,
          6.087603
        ],
        [
          6.220415999999999,
          6.220415999999999
        ],
        [
          6.353229,
          6.353229
        ],
        [
          6.486042,
          6.486042
        ],
        [
          6.618854999999999,
          6.618854999999999
        ],
        [
          6.751668,
          6.751668
        ],
        [
          6.884481,
          6.884481
        ],
        [
          7.017294,
          7.017294
        ],
        [
          7.150107,
          7.150107
        ],
        [
          7.282920000000001,
          7.282920000000001
        ],
        [
          7.4157329999999995,
          7.4157329999999995
        ],
        [
          7.548546,
          7.548546
        ],
        [
          7.6813590000000005,
          7.6813590000000005
        ],
        [
          7.814171999999999,
          7.814171999999999
        ],
        [
          7.946985,
          7.946985
        ],
        [
          8.079798,
          8.079798
        ],
        [
          8.212610999999999,
          8.212610999999999
        ],
        [
          8.345424,
          8.345424
        ],
        [
          8.478237,
          8.478237
        ],
        [
          8.61105,
          8.61105
        ],
        [
          8.743863000000001,
          8.743863000000001
        ],
        [
          8.876676,
          8.876676
        ],
        [
          9.009489,
          9.009489
        ],
        [
          9.142301999999999,
          9.142301999999999
        ],
        [
          9.275115000000001,
          9.275115000000001
        ],
        [
          9.407928,
          9.407928
        ],
        [
          9.540740999999999,
          9.540740999999999
        ],
        [
          9.673554,
          9.673554
        ],
        [
          9.806367,
          9.806367
        ],
        [
          9.939179999999999,
          9.939179999999999
        ],
        [
          10.071993,
          10.071993
        ],
        [
          10.204806,
          10.204806
        ],
        [
          10.337619,
          10.337619
        ],
        [
          10.470431999999999,
          10.470431999999999
        ],
        [
          10.603245000000001,
          10.603245000000001
        ],
        [
          10.736058,
          10.736058
        ],
        [
          10.868870999999999,
          10.868870999999999
        ],
        [
          11.001684000000001,
          11.001684000000001
        ],
        [
          11.134497,
          11.134497
        ],
        [
          11.267309999999998,
          11.267309999999998
        ],
        [
          11.400122999999999,
          11.400122999999999
        ],
        [
          11.532936,
          11.532936
        ],
        [
          11.665748999999998,
          11.665748999999998
        ],
        [
          11.798562,
          11.798562
        ],
        [
          11.931375,
          11.931375
        ],
        [
          12.064188,
          12.064188
        ],
        [
          12.197001,
          12.197001
        ],
        [
          12.329814,
          12.329814
        ],
        [
          12.462627,
          12.462627
        ],
        [
          12.595440000000002,
          12.595440000000002
        ],
        [
          12.728253,
          12.728253
        ],
        [
          12.861066,
          12.861066
        ],
        [
          12.993879,
          12.993879
        ],
        [
          13.126692,
          13.126692
        ],
        [
          13.259504999999999,
          13.259504999999999
        ],
        [
          13.392318,
          13.392318
        ],
        [
          13.525131,
          13.525131
        ],
        [
          13.657943999999999,
          13.657943999999999
        ],
        [
          13.790757,
          13.790757
        ],
        [
          13.92357,
          13.92357
        ],
        [
          14.056383,
          14.056383
        ],
        [
          14.189195999999999,
          14.189195999999999
        ],
        [
          14.322009000000001,
          14.322009000000001
        ],
        [
          14.454821999999998,
          14.454821999999998
        ],
        [
          14.587634999999999,
          14.587634999999999
        ],
        [
          14.720448,
          14.720448
        ],
        [
          14.853261,
          14.853261
        ],
        [
          14.986073999999999,
          14.986073999999999
        ],
        [
          15.118887,
          15.118887
        ],
        [
          15.2517,
          15.2517
        ],
        [
          15.36913,
          15.36913
        ],
        [
          15.486559999999999,
          15.486559999999999
        ],
        [
          15.60399,
          15.60399
        ],
        [
          15.72142,
          15.72142
        ],
        [
          15.838849999999999,
          15.838849999999999
        ],
        [
          15.95628,
          15.95628
        ],
        [
          16.073710000000002,
          16.073710000000002
        ],
        [
          16.19114,
          16.19114
        ],
        [
          16.30857,
          16.30857
        ],
        [
          16.426000000000002,
          16.426000000000002
        ],
        [
          16.54343,
          16.54343
        ],
        [
          16.66086,
          16.66086
        ],
        [
          16.77829,
          16.77829
        ],
        [
          16.895719999999997,
          16.895719999999997
        ],
        [
          17.01315,
          17.01315
        ],
        [
          17.13058,
          17.13058
        ],
        [
          17.24801,
          17.24801
        ],
        [
          17.36544,
          17.36544
        ],
        [
          17.48287,
          17.48287
        ],
        [
          17.6003,
          17.6003
        ],
        [
          17.71773,
          17.71773
        ],
        [
          17.835160000000002,
          17.835160000000002
        ],
        [
          17.95259,
          17.95259
        ],
        [
          18.07002,
          18.07002
        ],
        [
          18.18745,
          18.18745
        ],
        [
          18.30488,
          18.30488
        ],
        [
          18.42231,
          18.42231
        ],
        [
          18.539740000000002,
          18.539740000000002
        ],
        [
          18.65717,
          18.65717
        ],
        [
          18.7746,
          18.7746
        ],
        [
          18.89203,
          18.89203
        ],
        [
          19.00946,
          19.00946
        ],
        [
          19.12689,
          19.12689
        ],
        [
          19.244320000000002,
          19.244320000000002
        ],
        [
          19.36175,
          19.36175
        ],
        [
          19.479180000000003,
          19.479180000000003
        ],
        [
          19.596610000000002,
          19.596610000000002
        ],
        [
          19.714039999999997,
          19.714039999999997
        ],
        [
          19.831469999999996,
          19.831469999999996
        ],
        [
          19.9489,
          19.9489
        ],
        [
          20.06633,
          20.06633
        ],
        [
          20.18376,
          20.18376
        ],
        [
          20.30119,
          20.30119
        ],
        [
          20.41862,
          20.41862
        ],
        [
          20.536050000000003,
          20.536050000000003
        ],
        [
          20.653480000000002,
          20.653480000000002
        ],
        [
          20.77091,
          20.77091
        ],
        [
          20.88834,
          20.88834
        ],
        [
          21.005770000000002,
          21.005770000000002
        ],
        [
          21.1232,
          21.1232
        ],
        [
          21.24063,
          21.24063
        ],
        [
          21.358060000000002,
          21.358060000000002
        ],
        [
          21.47549,
          21.47549
        ],
        [
          21.59292,
          21.59292
        ],
        [
          21.710350000000002,
          21.710350000000002
        ],
        [
          21.82778,
          21.82778
        ],
        [
          21.945210000000003,
          21.945210000000003
        ],
        [
          22.062640000000002,
          22.062640000000002
        ],
        [
          22.18007,
          22.18007
        ],
        [
          22.2975,
          22.2975
        ],
        [
          22.414930000000002,
          22.414930000000002
        ],
        [
          22.53236,
          22.53236
        ],
        [
          22.64979,
          22.64979
        ],
        [
          22.767220000000002,
          22.767220000000002
        ],
        [
          22.88465,
          22.88465
        ],
        [
          23.00208,
          23.00208
        ],
        [
          23.11951,
          23.11951
        ],
        [
          23.23694,
          23.23694
        ],
        [
          23.35437,
          23.35437
        ],
        [
          23.4718,
          23.4718
        ],
        [
          23.58923,
          23.58923
        ],
        [
          23.70666,
          23.70666
        ],
        [
          23.824089999999998,
          23.824089999999998
        ],
        [
          23.94152,
          23.94152
        ],
        [
          24.058950000000003,
          24.058950000000003
        ],
        [
          24.17638,
          24.17638
        ],
        [
          24.293810000000004,
          24.293810000000004
        ],
        [
          24.41124,
          24.41124
        ],
        [
          24.52867,
          24.52867
        ],
        [
          24.6461,
          24.6461
        ],
        [
          24.763530000000003,
          24.763530000000003
        ],
        [
          24.88096,
          24.88096
        ],
        [
          24.998390000000004,
          24.998390000000004
        ],
        [
          25.115820000000003,
          25.115820000000003
        ],
        [
          25.23325,
          25.23325
        ],
        [
          25.35068,
          25.35068
        ],
        [
          25.468110000000003,
          25.468110000000003
        ],
        [
          25.58554,
          25.58554
        ],
        [
          25.70297,
          25.70297
        ],
        [
          25.820400000000003,
          25.820400000000003
        ],
        [
          25.937829999999998,
          25.937829999999998
        ],
        [
          26.05526,
          26.05526
        ],
        [
          26.17269,
          26.17269
        ],
        [
          26.29012,
          26.29012
        ],
        [
          26.40755,
          26.40755
        ],
        [
          26.524980000000003,
          26.524980000000003
        ],
        [
          26.642409999999998,
          26.642409999999998
        ],
        [
          26.75984,
          26.75984
        ],
        [
          26.87727,
          26.87727
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
          25.648587000000003,
          25.648587000000003
        ],
        [
          25.515774,
          25.515774
        ],
        [
          25.382961,
          25.382961
        ],
        [
          25.250148,
          25.250148
        ],
        [
          25.117335,
          25.117335
        ],
        [
          24.984522,
          24.984522
        ],
        [
          24.851709,
          24.851709
        ],
        [
          24.718896000000004,
          24.718896000000004
        ],
        [
          24.586083000000002,
          24.586083000000002
        ],
        [
          24.45327,
          24.45327
        ],
        [
          24.320457,
          24.320457
        ],
        [
          24.187644,
          24.187644
        ],
        [
          24.054831,
          24.054831
        ],
        [
          23.922018,
          23.922018
        ],
        [
          23.789205000000003,
          23.789205000000003
        ],
        [
          23.656392,
          23.656392
        ],
        [
          23.523579,
          23.523579
        ],
        [
          23.390766000000003,
          23.390766000000003
        ],
        [
          23.257953,
          23.257953
        ],
        [
          23.125140000000002,
          23.125140000000002
        ],
        [
          22.992327000000003,
          22.992327000000003
        ],
        [
          22.859514000000004,
          22.859514000000004
        ],
        [
          22.726701000000002,
          22.726701000000002
        ],
        [
          22.593888,
          22.593888
        ],
        [
          22.461075,
          22.461075
        ],
        [
          22.328262000000002,
          22.328262000000002
        ],
        [
          22.195449,
          22.195449
        ],
        [
          22.062636,
          22.062636
        ],
        [
          21.929823,
          21.929823
        ],
        [
          21.79701,
          21.79701
        ],
        [
          21.664196999999998,
          21.664196999999998
        ],
        [
          21.531384,
          21.531384
        ],
        [
          21.398570999999997,
          21.398570999999997
        ],
        [
          21.265757999999998,
          21.265757999999998
        ],
        [
          21.132945000000003,
          21.132945000000003
        ],
        [
          21.000132,
          21.000132
        ],
        [
          20.867319,
          20.867319
        ],
        [
          20.734506000000003,
          20.734506000000003
        ],
        [
          20.601693,
          20.601693
        ],
        [
          20.46888,
          20.46888
        ],
        [
          20.336067,
          20.336067
        ],
        [
          20.203254,
          20.203254
        ],
        [
          20.070441000000002,
          20.070441000000002
        ],
        [
          19.937628000000004,
          19.937628000000004
        ],
        [
          19.804815,
          19.804815
        ],
        [
          19.672002000000003,
          19.672002000000003
        ],
        [
          19.539189,
          19.539189
        ],
        [
          19.406376,
          19.406376
        ],
        [
          19.273563,
          19.273563
        ],
        [
          19.14075,
          19.14075
        ],
        [
          19.007937000000002,
          19.007937000000002
        ],
        [
          18.875124,
          18.875124
        ],
        [
          18.742311,
          18.742311
        ],
        [
          18.609498000000002,
          18.609498000000002
        ],
        [
          18.476685,
          18.476685
        ],
        [
          18.343871999999998,
          18.343871999999998
        ],
        [
          18.211059000000002,
          18.211059000000002
        ],
        [
          18.078246,
          18.078246
        ],
        [
          17.945433,
          17.945433
        ],
        [
          17.812620000000003,
          17.812620000000003
        ],
        [
          17.679807,
          17.679807
        ],
        [
          17.546993999999998,
          17.546993999999998
        ],
        [
          17.414181,
          17.414181
        ],
        [
          17.281368,
          17.281368
        ],
        [
          17.148555,
          17.148555
        ],
        [
          17.015742,
          17.015742
        ],
        [
          16.882928999999997,
          16.882928999999997
        ],
        [
          16.750116,
          16.750116
        ],
        [
          16.617303,
          16.617303
        ],
        [
          16.48449,
          16.48449
        ],
        [
          16.351677000000002,
          16.351677000000002
        ],
        [
          16.218864,
          16.218864
        ],
        [
          16.086051,
          16.086051
        ],
        [
          15.953238,
          15.953238
        ],
        [
          15.820425,
          15.820425
        ],
        [
          15.687612,
          15.687612
        ],
        [
          15.554799,
          15.554799
        ],
        [
          15.421986,
          15.421986
        ],
        [
          15.289172999999998,
          15.289172999999998
        ],
        [
          15.15636,
          15.15636
        ],
        [
          15.023546999999999,
          15.023546999999999
        ],
        [
          14.890734,
          14.890734
        ],
        [
          14.757921000000001,
          14.757921000000001
        ],
        [
          14.625108,
          14.625108
        ],
        [
          14.492295000000002,
          14.492295000000002
        ],
        [
          14.359482,
          14.359482
        ],
        [
          14.226669000000001,
          14.226669000000001
        ],
        [
          14.093855999999999,
          14.093855999999999
        ],
        [
          13.961042999999998,
          13.961042999999998
        ],
        [
          13.82823,
          13.82823
        ],
        [
          13.695416999999999,
          13.695416999999999
        ],
        [
          13.562604,
          13.562604
        ],
        [
          13.429790999999998,
          13.429790999999998
        ],
        [
          13.296978000000001,
          13.296978000000001
        ],
        [
          13.164165,
          13.164165
        ],
        [
          13.031352,
          13.031352
        ],
        [
          12.898539000000001,
          12.898539000000001
        ],
        [
          12.765726,
          12.765726
        ],
        [
          12.632913,
          12.632913
        ],
        [
          12.5001,
          12.5001
        ],
        [
          12.382670000000001,
          12.382670000000001
        ],
        [
          12.26524,
          12.26524
        ],
        [
          12.14781,
          12.14781
        ],
        [
          12.03038,
          12.03038
        ],
        [
          11.91295,
          11.91295
        ],
        [
          11.79552,
          11.79552
        ],
        [
          11.67809,
          11.67809
        ],
        [
          11.560659999999999,
          11.560659999999999
        ],
        [
          11.44323,
          11.44323
        ],
        [
          11.3258,
          11.3258
        ],
        [
          11.208369999999999,
          11.208369999999999
        ],
        [
          11.090939999999998,
          11.090939999999998
        ],
        [
          10.973510000000001,
          10.973510000000001
        ],
        [
          10.856080000000002,
          10.856080000000002
        ],
        [
          10.73865,
          10.73865
        ],
        [
          10.621220000000001,
          10.621220000000001
        ],
        [
          10.50379,
          10.50379
        ],
        [
          10.386360000000002,
          10.386360000000002
        ],
        [
          10.26893,
          10.26893
        ],
        [
          10.1515,
          10.1515
        ],
        [
          10.03407,
          10.03407
        ],
        [
          9.916640000000001,
          9.916640000000001
        ],
        [
          9.799209999999999,
          9.799209999999999
        ],
        [
          9.68178,
          9.68178
        ],
        [
          9.56435,
          9.56435
        ],
        [
          9.44692,
          9.44692
        ],
        [
          9.32949,
          9.32949
        ],
        [
          9.21206,
          9.21206
        ],
        [
          9.09463,
          9.09463
        ],
        [
          8.9772,
          8.9772
        ],
        [
          8.85977,
          8.85977
        ],
        [
          8.742339999999999,
          8.742339999999999
        ],
        [
          8.62491,
          8.62491
        ],
        [
          8.50748,
          8.50748
        ],
        [
          8.390049999999999,
          8.390049999999999
        ],
        [
          8.272619999999998,
          8.272619999999998
        ],
        [
          8.155189999999997,
          8.155189999999997
        ],
        [
          8.037760000000002,
          8.037760000000002
        ],
        [
          7.920330000000002,
          7.920330000000002
        ],
        [
          7.802900000000001,
          7.802900000000001
        ],
        [
          7.685470000000001,
          7.685470000000001
        ],
        [
          7.568040000000001,
          7.568040000000001
        ],
        [
          7.450610000000001,
          7.450610000000001
        ],
        [
          7.3331800000000005,
          7.3331800000000005
        ],
        [
          7.215750000000001,
          7.215750000000001
        ],
        [
          7.09832,
          7.09832
        ],
        [
          6.9808900000000005,
          6.9808900000000005
        ],
        [
          6.86346,
          6.86346
        ],
        [
          6.74603,
          6.74603
        ],
        [
          6.6286,
          6.6286
        ],
        [
          6.51117,
          6.51117
        ],
        [
          6.393739999999999,
          6.393739999999999
        ],
        [
          6.27631,
          6.27631
        ],
        [
          6.158879999999999,
          6.158879999999999
        ],
        [
          6.041449999999999,
          6.041449999999999
        ],
        [
          5.924019999999999,
          5.924019999999999
        ],
        [
          5.806589999999999,
          5.806589999999999
        ],
        [
          5.689159999999998,
          5.689159999999998
        ],
        [
          5.571729999999999,
          5.571729999999999
        ],
        [
          5.454299999999998,
          5.454299999999998
        ],
        [
          5.3368699999999984,
          5.3368699999999984
        ],
        [
          5.219439999999999,
          5.219439999999999
        ],
        [
          5.102010000000002,
          5.102010000000002
        ],
        [
          4.984580000000001,
          4.984580000000001
        ],
        [
          4.867150000000001,
          4.867150000000001
        ],
        [
          4.749720000000001,
          4.749720000000001
        ],
        [
          4.632290000000001,
          4.632290000000001
        ],
        [
          4.5148600000000005,
          4.5148600000000005
        ],
        [
          4.397430000000001,
          4.397430000000001
        ],
        [
          4.28,
          4.28
        ],
        [
          4.1625700000000005,
          4.1625700000000005
        ],
        [
          4.04514,
          4.04514
        ],
        [
          3.9277100000000003,
          3.9277100000000003
        ],
        [
          3.81028,
          3.81028
        ],
        [
          3.69285,
          3.69285
        ],
        [
          3.57542,
          3.57542
        ],
        [
          3.4579899999999997,
          3.4579899999999997
        ],
        [
          3.3405599999999995,
          3.3405599999999995
        ],
        [
          3.2231299999999994,
          3.2231299999999994
        ],
        [
          3.1056999999999992,
          3.1056999999999992
        ],
        [
          2.988269999999999,
          2.988269999999999
        ],
        [
          2.870839999999999,
          2.870839999999999
        ],
        [
          2.7534099999999992,
          2.7534099999999992
        ],
        [
          2.635979999999999,
          2.635979999999999
        ],
        [
          2.518549999999999,
          2.518549999999999
        ],
        [
          2.401119999999999,
          2.401119999999999
        ],
        [
          2.2836899999999987,
          2.2836899999999987
        ],
        [
          2.166260000000001,
          2.166260000000001
        ],
        [
          2.048830000000001,
          2.048830000000001
        ],
        [
          1.9314000000000011,
          1.9314000000000011
        ],
        [
          1.813970000000001,
          1.813970000000001
        ],
        [
          1.6965400000000008,
          1.6965400000000008
        ],
        [
          1.5791100000000007,
          1.5791100000000007
        ],
        [
          1.4616800000000005,
          1.4616800000000005
        ],
        [
          1.3442500000000006,
          1.3442500000000006
        ],
        [
          1.2268200000000005,
          1.2268200000000005
        ],
        [
          1.1093900000000003,
          1.1093900000000003
        ],
        [
          0.9919600000000002,
          0.9919600000000002
        ],
        [
          0.8745300000000001,
          0.8745300000000001
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
          3.012300100938986,
          3.012300100938986
        ],
        [
          3.048263757184442,
          3.048263757184442
        ],
        [
          3.0842892381151974,
          3.0842892381151974
        ],
        [
          3.120374755620643,
          3.120374755620643
        ],
        [
          3.156518462691143,
          3.156518462691143
        ],
        [
          3.192718451982705,
          3.192718451982705
        ],
        [
          3.2289727543465463,
          3.2289727543465463
        ],
        [
          3.2652793373296887,
          3.2652793373296887
        ],
        [
          3.301636103641933,
          3.301636103641933
        ],
        [
          3.3380408895923126,
          3.3380408895923126
        ],
        [
          3.374491463489208,
          3.374491463489208
        ],
        [
          3.4109855240104765,
          3.4109855240104765
        ],
        [
          3.447520698536373,
          3.447520698536373
        ],
        [
          3.4840945414496987,
          3.4840945414496987
        ],
        [
          3.520704532399256,
          3.520704532399256
        ],
        [
          3.557348074529956,
          3.557348074529956
        ],
        [
          3.594022492672908,
          3.594022492672908
        ],
        [
          3.6307250315032182,
          3.6307250315032182
        ],
        [
          3.6674528536567017,
          3.6674528536567017
        ],
        [
          3.7042030378112885,
          3.7042030378112885
        ],
        [
          3.740972576728267,
          3.740972576728267
        ],
        [
          3.777758375258316,
          3.777758375258316
        ],
        [
          3.814557248302739,
          3.814557248302739
        ],
        [
          3.851365918741664,
          3.851365918741664
        ],
        [
          3.888181015316582,
          3.888181015316582
        ],
        [
          3.9249990704757964,
          3.9249990704757964
        ],
        [
          3.961816518178145,
          3.961816518178145
        ],
        [
          3.9986296916545556,
          3.9986296916545556
        ],
        [
          4.035434821130171,
          4.035434821130171
        ],
        [
          4.072228031501595,
          4.072228031501595
        ],
        [
          4.109005339974826,
          4.109005339974826
        ],
        [
          4.1457626536587115,
          4.1457626536587115
        ],
        [
          4.182495767116389,
          4.182495767116389
        ],
        [
          4.219200359873435,
          4.219200359873435
        ],
        [
          4.255871993883232,
          4.255871993883232
        ],
        [
          4.292506110948324,
          4.292506110948324
        ],
        [
          4.3290980300987725,
          4.3290980300987725
        ],
        [
          4.36564294492685,
          4.36564294492685
        ],
        [
          4.402135920877776,
          4.402135920877776
        ],
        [
          4.4385718924982305,
          4.4385718924982305
        ],
        [
          4.474945660638123,
          4.474945660638123
        ],
        [
          4.511251889613803,
          4.511251889613803
        ],
        [
          4.547485104322969,
          4.547485104322969
        ],
        [
          4.5836396873204945,
          4.5836396873204945
        ],
        [
          4.619709875849424,
          4.619709875849424
        ],
        [
          4.655689758830373,
          4.655689758830373
        ],
        [
          4.691573273808451,
          4.691573273808451
        ],
        [
          4.727354203860051,
          4.727354203860051
        ],
        [
          4.763026174458251,
          4.763026174458251
        ],
        [
          4.798582650296076,
          4.798582650296076
        ],
        [
          4.834016932074674,
          4.834016932074674
        ],
        [
          4.869322153249475,
          4.869322153249475
        ],
        [
          4.90449127674064,
          4.90449127674064
        ],
        [
          4.939517091605611,
          4.939517091605611
        ],
        [
          4.9743922096793645,
          4.9743922096793645
        ],
        [
          5.009109062177587,
          5.009109062177587
        ],
        [
          5.04365989626834,
          5.04365989626834
        ],
        [
          5.07803677161451,
          5.07803677161451
        ],
        [
          5.112231556884958,
          5.112231556884958
        ],
        [
          5.146235926239398,
          5.146235926239398
        ],
        [
          5.180041355787671,
          5.180041355787671
        ],
        [
          5.213639120025787,
          5.213639120025787
        ],
        [
          5.247020288251454,
          5.247020288251454
        ],
        [
          5.280175720959554,
          5.280175720959554
        ],
        [
          5.313096066225545,
          5.313096066225545
        ],
        [
          5.345771756071278,
          5.345771756071278
        ],
        [
          5.378193002824305,
          5.378193002824305
        ],
        [
          5.410349795469361,
          5.410349795469361
        ],
        [
          5.442231895996803,
          5.442231895996803
        ],
        [
          5.473828835750987,
          5.473828835750987
        ],
        [
          5.505129911784622,
          5.505129911784622
        ],
        [
          5.536124183219761,
          5.536124183219761
        ],
        [
          5.566800467622303,
          5.566800467622303
        ],
        [
          5.5971473373948015,
          5.5971473373948015
        ],
        [
          5.627153116190717,
          5.627153116190717
        ],
        [
          5.656805875356464,
          5.656805875356464
        ],
        [
          5.6860934304066175,
          5.6860934304066175
        ],
        [
          5.71500333753761,
          5.71500333753761
        ],
        [
          5.743522890186467,
          5.743522890186467
        ],
        [
          5.771639115639793,
          5.771639115639793
        ],
        [
          5.799338771701621,
          5.799338771701621
        ],
        [
          5.8266083434251685,
          5.8266083434251685
        ],
        [
          5.853434039915814,
          5.853434039915814
        ],
        [
          5.879801791215648,
          5.879801791215648
        ],
        [
          5.905697245273369,
          5.905697245273369
        ],
        [
          5.93110576501136,
          5.93110576501136
        ],
        [
          5.956012425496816,
          5.956012425496816
        ],
        [
          5.980402011226521,
          5.980402011226521
        ],
        [
          6.00425901353473,
          6.00425901353473
        ],
        [
          6.02756762813374,
          6.02756762813374
        ],
        [
          6.050311752797861,
          6.050311752797861
        ],
        [
          6.072474985199579,
          6.072474985199579
        ],
        [
          6.094040620913415,
          6.094040620913415
        ],
        [
          6.114991651591882,
          6.114991651591882
        ],
        [
          6.135310763331746,
          6.135310763331746
        ],
        [
          6.154980335239531,
          6.154980335239531
        ],
        [
          6.1739824382097375,
          6.1739824382097375
        ],
        [
          6.192298833926469,
          6.192298833926469
        ],
        [
          6.209910974108069,
          6.209910974108069
        ],
        [
          6.2268,
          6.2268
        ],
        [
          6.241520408454046,
          6.241520408454046
        ],
        [
          6.255648174156115,
          6.255648174156115
        ],
        [
          6.269169627477016,
          6.269169627477016
        ],
        [
          6.282070908240238,
          6.282070908240238
        ],
        [
          6.294337966176969,
          6.294337966176969
        ],
        [
          6.305956561542578,
          6.305956561542578
        ],
        [
          6.31691226590215,
          6.31691226590215
        ],
        [
          6.327190463091368,
          6.327190463091368
        ],
        [
          6.336776350358855,
          6.336776350358855
        ],
        [
          6.345654939700554,
          6.345654939700554
        ],
        [
          6.353811059389569,
          6.353811059389569
        ],
        [
          6.3612293557111155,
          6.3612293557111155
        ],
        [
          6.367894294909548,
          6.367894294909548
        ],
        [
          6.373790165354795,
          6.373790165354795
        ],
        [
          6.378901079936428,
          6.378901079936428
        ],
        [
          6.383210978691474,
          6.383210978691474
        ],
        [
          6.386703631676404,
          6.386703631676404
        ],
        [
          6.389362642087956,
          6.389362642087956
        ],
        [
          6.391171449643101,
          6.391171449643101
        ],
        [
          6.392113334222794,
          6.392113334222794
        ],
        [
          6.392171419791857,
          6.392171419791857
        ],
        [
          6.391328678597582,
          6.391328678597582
        ],
        [
          6.389567935658057,
          6.389567935658057
        ],
        [
          6.3868718735463155,
          6.3868718735463155
        ],
        [
          6.3832230374781735,
          6.3832230374781735
        ],
        [
          6.378603840710802,
          6.378603840710802
        ],
        [
          6.372996570259591,
          6.372996570259591
        ],
        [
          6.366383392939671,
          6.366383392939671
        ],
        [
          6.358746361739714,
          6.358746361739714
        ],
        [
          6.350067422533888,
          6.350067422533888
        ],
        [
          6.340328421138914,
          6.340328421138914
        ],
        [
          6.329511110721981,
          6.329511110721981
        ],
        [
          6.317597159565528,
          6.317597159565528
        ],
        [
          6.304568159194359,
          6.304568159194359
        ],
        [
          6.29040563287045,
          6.29040563287045
        ],
        [
          6.275091044459885,
          6.275091044459885
        ],
        [
          6.258605807676789,
          6.258605807676789
        ],
        [
          6.240931295707908,
          6.240931295707908
        ],
        [
          6.222048851221663,
          6.222048851221663
        ],
        [
          6.201939796764466,
          6.201939796764466
        ],
        [
          6.180585445546878,
          6.180585445546878
        ],
        [
          6.157967112621913,
          6.157967112621913
        ],
        [
          6.134066126456416,
          6.134066126456416
        ],
        [
          6.108863840896627,
          6.108863840896627
        ],
        [
          6.082341647527948,
          6.082341647527948
        ],
        [
          6.054480988428501,
          6.054480988428501
        ],
        [
          6.025263369314979,
          6.025263369314979
        ],
        [
          5.994670373080032,
          5.994670373080032
        ],
        [
          5.962683673715187,
          5.962683673715187
        ],
        [
          5.929285050621085,
          5.929285050621085
        ],
        [
          5.894456403295227,
          5.894456403295227
        ],
        [
          5.858179766396449,
          5.858179766396449
        ],
        [
          5.820437325176602,
          5.820437325176602
        ],
        [
          5.781211431275188,
          5.781211431275188
        ],
        [
          5.740484618867314,
          5.740484618867314
        ],
        [
          5.6982396211585185,
          5.6982396211585185
        ],
        [
          5.65445938721138,
          5.65445938721138
        ],
        [
          5.6091270991014195,
          5.6091270991014195
        ],
        [
          5.5622261893831,
          5.5622261893831
        ],
        [
          5.51374035885683,
          5.51374035885683
        ],
        [
          5.463653594622599,
          5.463653594622599
        ],
        [
          5.411950188405541,
          5.411950188405541
        ],
        [
          5.358614755136697,
          5.358614755136697
        ],
        [
          5.3036322517739,
          5.3036322517739
        ],
        [
          5.246987996342609,
          5.246987996342609
        ],
        [
          5.1886676871807955,
          5.1886676871807955
        ],
        [
          5.1286574223623616,
          5.1286574223623616
        ],
        [
          5.066943719286184,
          5.066943719286184
        ],
        [
          5.003513534400977,
          5.003513534400977
        ],
        [
          4.93835428304758,
          4.93835428304758
        ],
        [
          4.871453859391578,
          4.871453859391578
        ],
        [
          4.802800656424996,
          4.802800656424996
        ],
        [
          4.732383586007356,
          4.732383586007356
        ],
        [
          4.660192098918658,
          4.660192098918658
        ],
        [
          4.586216204902315,
          4.586216204902315
        ],
        [
          4.510446492662512,
          4.510446492662512
        ],
        [
          4.432874149787587,
          4.432874149787587
        ],
        [
          4.353490982574877,
          4.353490982574877
        ],
        [
          4.272289435717264,
          4.272289435717264
        ],
        [
          4.189262611825832,
          4.189262611825832
        ],
        [
          4.104404290752821,
          4.104404290752821
        ],
        [
          4.01770894868444,
          4.01770894868444
        ],
        [
          3.9291717769661387,
          3.9291717769661387
        ],
        [
          3.838788700629217,
          3.838788700629217
        ],
        [
          3.7465563965827426,
          3.7465563965827426
        ],
        [
          3.652472311435849,
          3.652472311435849
        ],
        [
          3.5565346789147823,
          3.5565346789147823
        ],
        [
          3.458742536839669,
          3.458742536839669
        ],
        [
          3.359095743624366,
          3.359095743624366
        ],
        [
          3.257594994264122,
          3.257594994264122
        ],
        [
          3.1542418357747968,
          3.1542418357747968
        ],
        [
          3.049038682047627,
          3.049038682047627
        ],
        [
          2.9419888280842708,
          2.9419888280842708
        ],
        [
          2.8330964635752496,
          2.8330964635752496
        ],
        [
          2.7223666857901034,
          2.7223666857901034
        ],
        [
          2.6098055117373447,
          2.6098055117373447
        ],
        [
          2.4954198895692237,
          2.4954198895692237
        ],
        [
          2.379217709189725,
          2.379217709189725
        ],
        [
          2.261207812035507,
          2.261207812035507
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
          23.032153899061015,
          23.032153899061015
        ],
        [
          22.975744242815555,
          22.975744242815555
        ],
        [
          22.919272761884802,
          22.919272761884802
        ],
        [
          22.862741244379357,
          22.862741244379357
        ],
        [
          22.806151537308857,
          22.806151537308857
        ],
        [
          22.749505548017297,
          22.749505548017297
        ],
        [
          22.692805245653453,
          22.692805245653453
        ],
        [
          22.636052662670313,
          22.636052662670313
        ],
        [
          22.579249896358068,
          22.579249896358068
        ],
        [
          22.522399110407687,
          22.522399110407687
        ],
        [
          22.46550253651079,
          22.46550253651079
        ],
        [
          22.408562475989523,
          22.408562475989523
        ],
        [
          22.351581301463625,
          22.351581301463625
        ],
        [
          22.2945614585503,
          22.2945614585503
        ],
        [
          22.237505467600744,
          22.237505467600744
        ],
        [
          22.180415925470044,
          22.180415925470044
        ],
        [
          22.123295507327093,
          22.123295507327093
        ],
        [
          22.06614696849678,
          22.06614696849678
        ],
        [
          22.0089731463433,
          22.0089731463433
        ],
        [
          21.951776962188713,
          21.951776962188713
        ],
        [
          21.894561423271732,
          21.894561423271732
        ],
        [
          21.837329624741685,
          21.837329624741685
        ],
        [
          21.78008475169726,
          21.78008475169726
        ],
        [
          21.722830081258337,
          21.722830081258337
        ],
        [
          21.665568984683418,
          21.665568984683418
        ],
        [
          21.608304929524202,
          21.608304929524202
        ],
        [
          21.551041481821855,
          21.551041481821855
        ],
        [
          21.493782308345445,
          21.493782308345445
        ],
        [
          21.436531178869828,
          21.436531178869828
        ],
        [
          21.3792919684984,
          21.3792919684984
        ],
        [
          21.32206866002517,
          21.32206866002517
        ],
        [
          21.264865346341285,
          21.264865346341285
        ],
        [
          21.20768623288361,
          21.20768623288361
        ],
        [
          21.150535640126563,
          21.150535640126563
        ],
        [
          21.093418006116767,
          21.093418006116767
        ],
        [
          21.036337889051676,
          21.036337889051676
        ],
        [
          20.97929996990123,
          20.97929996990123
        ],
        [
          20.92230905507315,
          20.92230905507315
        ],
        [
          20.865370079122226,
          20.865370079122226
        ],
        [
          20.80848810750177,
          20.80848810750177
        ],
        [
          20.751668339361878,
          20.751668339361878
        ],
        [
          20.6949161103862,
          20.6949161103862
        ],
        [
          20.638236895677032,
          20.638236895677032
        ],
        [
          20.581636312679507,
          20.581636312679507
        ],
        [
          20.52512012415058,
          20.52512012415058
        ],
        [
          20.46869424116963,
          20.46869424116963
        ],
        [
          20.41236472619155,
          20.41236472619155
        ],
        [
          20.35613779613995,
          20.35613779613995
        ],
        [
          20.30001982554175,
          20.30001982554175
        ],
        [
          20.244017349703928,
          20.244017349703928
        ],
        [
          20.188137067925325,
          20.188137067925325
        ],
        [
          20.132385846750527,
          20.132385846750527
        ],
        [
          20.07677072325936,
          20.07677072325936
        ],
        [
          20.02129890839439,
          20.02129890839439
        ],
        [
          19.965977790320636,
          19.965977790320636
        ],
        [
          19.910814937822416,
          19.910814937822416
        ],
        [
          19.85581810373166,
          19.85581810373166
        ],
        [
          19.800995228385492,
          19.800995228385492
        ],
        [
          19.74635444311504,
          19.74635444311504
        ],
        [
          19.691904073760604,
          19.691904073760604
        ],
        [
          19.63765264421233,
          19.63765264421233
        ],
        [
          19.583608879974214,
          19.583608879974214
        ],
        [
          19.529781711748548,
          19.529781711748548
        ],
        [
          19.476180279040445,
          19.476180279040445
        ],
        [
          19.422813933774457,
          19.422813933774457
        ],
        [
          19.369692243928725,
          19.369692243928725
        ],
        [
          19.316824997175694,
          19.316824997175694
        ],
        [
          19.26422220453064,
          19.26422220453064
        ],
        [
          19.211894104003196,
          19.211894104003196
        ],
        [
          19.159851164249016,
          19.159851164249016
        ],
        [
          19.10810408821538,
          19.10810408821538
        ],
        [
          19.056663816780237,
          19.056663816780237
        ],
        [
          19.0055415323777,
          19.0055415323777
        ],
        [
          18.9547486626052,
          18.9547486626052
        ],
        [
          18.904296883809284,
          18.904296883809284
        ],
        [
          18.85419812464354,
          18.85419812464354
        ],
        [
          18.80446456959338,
          18.80446456959338
        ],
        [
          18.75510866246239,
          18.75510866246239
        ],
        [
          18.706143109813535,
          18.706143109813535
        ],
        [
          18.657580884360204,
          18.657580884360204
        ],
        [
          18.60943522829838,
          18.60943522829838
        ],
        [
          18.561719656574834,
          18.561719656574834
        ],
        [
          18.514447960084187,
          18.514447960084187
        ],
        [
          18.467634208784354,
          18.467634208784354
        ],
        [
          18.42129275472663,
          18.42129275472663
        ],
        [
          18.375438234988643,
          18.375438234988643
        ],
        [
          18.330085574503183,
          18.330085574503183
        ],
        [
          18.28524998877348,
          18.28524998877348
        ],
        [
          18.240946986465268,
          18.240946986465268
        ],
        [
          18.197192371866258,
          18.197192371866258
        ],
        [
          18.15400224720214,
          18.15400224720214
        ],
        [
          18.111393014800424,
          18.111393014800424
        ],
        [
          18.069381379086586,
          18.069381379086586
        ],
        [
          18.02798434840812,
          18.02798434840812
        ],
        [
          17.987219236668256,
          17.987219236668256
        ],
        [
          17.94710366476047,
          17.94710366476047
        ],
        [
          17.907655561790264,
          17.907655561790264
        ],
        [
          17.868893166073534,
          17.868893166073534
        ],
        [
          17.830835025891933,
          17.830835025891933
        ],
        [
          17.7935,
          17.7935
        ],
        [
          17.759077591545953,
          17.759077591545953
        ],
        [
          17.725247825843887,
          17.725247825843887
        ],
        [
          17.692024372522983,
          17.692024372522983
        ],
        [
          17.659421091759768,
          17.659421091759768
        ],
        [
          17.627452033823033,
          17.627452033823033
        ],
        [
          17.596131438457423,
          17.596131438457423
        ],
        [
          17.565473734097854,
          17.565473734097854
        ],
        [
          17.535493536908632,
          17.535493536908632
        ],
        [
          17.506205649641146,
          17.506205649641146
        ],
        [
          17.47762506029945,
          17.47762506029945
        ],
        [
          17.449766940610434,
          17.449766940610434
        ],
        [
          17.42264664428889,
          17.42264664428889
        ],
        [
          17.396279705090453,
          17.396279705090453
        ],
        [
          17.370681834645207,
          17.370681834645207
        ],
        [
          17.34586892006357,
          17.34586892006357
        ],
        [
          17.321857021308524,
          17.321857021308524
        ],
        [
          17.298662368323594,
          17.298662368323594
        ],
        [
          17.276301357912043,
          17.276301357912043
        ],
        [
          17.2547905503569,
          17.2547905503569
        ],
        [
          17.23414666577721,
          17.23414666577721
        ],
        [
          17.214386580208146,
          17.214386580208146
        ],
        [
          17.195527321402423,
          17.195527321402423
        ],
        [
          17.17758606434194,
          17.17758606434194
        ],
        [
          17.160580126453688,
          17.160580126453688
        ],
        [
          17.14452696252183,
          17.14452696252183
        ],
        [
          17.1294441592892,
          17.1294441592892
        ],
        [
          17.11534942974041,
          17.11534942974041
        ],
        [
          17.10226060706033,
          17.10226060706033
        ],
        [
          17.090195638260287,
          17.090195638260287
        ],
        [
          17.079172577466114,
          17.079172577466114
        ],
        [
          17.069209578861088,
          17.069209578861088
        ],
        [
          17.060324889278018,
          17.060324889278018
        ],
        [
          17.052536840434474,
          17.052536840434474
        ],
        [
          17.04586384080564,
          17.04586384080564
        ],
        [
          17.040324367129553,
          17.040324367129553
        ],
        [
          17.035936955540112,
          17.035936955540112
        ],
        [
          17.03272019232321,
          17.03272019232321
        ],
        [
          17.030692704292093,
          17.030692704292093
        ],
        [
          17.02987314877834,
          17.02987314877834
        ],
        [
          17.03028020323553,
          17.03028020323553
        ],
        [
          17.03193255445312,
          17.03193255445312
        ],
        [
          17.034848887378086,
          17.034848887378086
        ],
        [
          17.039047873543584,
          17.039047873543584
        ],
        [
          17.04454815910337,
          17.04454815910337
        ],
        [
          17.05136835247205,
          17.05136835247205
        ],
        [
          17.0595270115715,
          17.0595270115715
        ],
        [
          17.069042630685022,
          17.069042630685022
        ],
        [
          17.07993362691997,
          17.07993362691997
        ],
        [
          17.092218326284815,
          17.092218326284815
        ],
        [
          17.105914949378917,
          17.105914949378917
        ],
        [
          17.121041596704774,
          17.121041596704774
        ],
        [
          17.137616233603556,
          17.137616233603556
        ],
        [
          17.155656674823398,
          17.155656674823398
        ],
        [
          17.17518056872481,
          17.17518056872481
        ],
        [
          17.196205381132685,
          17.196205381132685
        ],
        [
          17.21874837884148,
          17.21874837884148
        ],
        [
          17.24282661278862,
          17.24282661278862
        ],
        [
          17.26845690089858,
          17.26845690089858
        ],
        [
          17.2956558106169,
          17.2956558106169
        ],
        [
          17.32443964114317,
          17.32443964114317
        ],
        [
          17.3548244053774,
          17.3548244053774
        ],
        [
          17.38682581159446,
          17.38682581159446
        ],
        [
          17.4204592448633,
          17.4204592448633
        ],
        [
          17.455739748226097,
          17.455739748226097
        ],
        [
          17.49268200365739,
          17.49268200365739
        ],
        [
          17.531300312819205,
          17.531300312819205
        ],
        [
          17.57160857763764,
          17.57160857763764
        ],
        [
          17.613620280713818,
          17.613620280713818
        ],
        [
          17.65734846559902,
          17.65734846559902
        ],
        [
          17.70280571695242,
          17.70280571695242
        ],
        [
          17.75000414060842,
          17.75000414060842
        ],
        [
          17.798955343575006,
          17.798955343575006
        ],
        [
          17.849670413992644,
          17.849670413992644
        ],
        [
          17.90215990108134,
          17.90215990108134
        ],
        [
          17.956433795097684,
          17.956433795097684
        ],
        [
          18.01250150733749,
          18.01250150733749
        ],
        [
          18.070371850212414,
          18.070371850212414
        ],
        [
          18.130053017425123,
          18.130053017425123
        ],
        [
          18.191552564282738,
          18.191552564282738
        ],
        [
          18.25487738817417,
          18.25487738817417
        ],
        [
          18.32003370924718,
          18.32003370924718
        ],
        [
          18.38702705131556,
          18.38702705131556
        ],
        [
          18.455862223033858,
          18.455862223033858
        ],
        [
          18.526543299370786,
          18.526543299370786
        ],
        [
          18.599073603417256,
          18.599073603417256
        ],
        [
          18.67345568856415,
          18.67345568856415
        ],
        [
          18.74969132108522,
          18.74969132108522
        ],
        [
          18.82778146316033,
          18.82778146316033
        ],
        [
          18.907726256375632,
          18.907726256375632
        ],
        [
          18.989525005735878,
          18.989525005735878
        ],
        [
          19.073176164225202,
          19.073176164225202
        ],
        [
          19.158677317952375,
          19.158677317952375
        ],
        [
          19.246025171915726,
          19.246025171915726
        ],
        [
          19.335215536424748,
          19.335215536424748
        ],
        [
          19.426243314209895,
          19.426243314209895
        ],
        [
          19.519102488262657,
          19.519102488262657
        ],
        [
          19.613786110430777,
          19.613786110430777
        ],
        [
          19.710286290810274,
          19.710286290810274
        ],
        [
          19.808594187964495,
          19.808594187964495
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
          1.657347,
          1.657347
        ],
        [
          1.677794,
          1.677794
        ],
        [
          1.698241,
          1.698241
        ],
        [
          1.718688,
          1.718688
        ],
        [
          1.7391349999999999,
          1.7391349999999999
        ],
        [
          1.759582,
          1.759582
        ],
        [
          1.7800289999999999,
          1.7800289999999999
        ],
        [
          1.8004760000000002,
          1.8004760000000002
        ],
        [
          1.820923,
          1.820923
        ],
        [
          1.8413700000000002,
          1.8413700000000002
        ],
        [
          1.861817,
          1.861817
        ],
        [
          1.882264,
          1.882264
        ],
        [
          1.902711,
          1.902711
        ],
        [
          1.923158,
          1.923158
        ],
        [
          1.9436049999999998,
          1.9436049999999998
        ],
        [
          1.964052,
          1.964052
        ],
        [
          1.984499,
          1.984499
        ],
        [
          2.0049460000000003,
          2.0049460000000003
        ],
        [
          2.025393,
          2.025393
        ],
        [
          2.04584,
          2.04584
        ],
        [
          2.066287,
          2.066287
        ],
        [
          2.086734,
          2.086734
        ],
        [
          2.107181,
          2.107181
        ],
        [
          2.1276279999999996,
          2.1276279999999996
        ],
        [
          2.148075,
          2.148075
        ],
        [
          2.1685220000000003,
          2.1685220000000003
        ],
        [
          2.188969,
          2.188969
        ],
        [
          2.209416,
          2.209416
        ],
        [
          2.229863,
          2.229863
        ],
        [
          2.25031,
          2.25031
        ],
        [
          2.2707569999999997,
          2.2707569999999997
        ],
        [
          2.291204,
          2.291204
        ],
        [
          2.311651,
          2.311651
        ],
        [
          2.3320980000000002,
          2.3320980000000002
        ],
        [
          2.352545,
          2.352545
        ],
        [
          2.372992,
          2.372992
        ],
        [
          2.393439,
          2.393439
        ],
        [
          2.4138859999999998,
          2.4138859999999998
        ],
        [
          2.434333,
          2.434333
        ],
        [
          2.4547800000000004,
          2.4547800000000004
        ],
        [
          2.4752270000000003,
          2.4752270000000003
        ],
        [
          2.495674,
          2.495674
        ],
        [
          2.516121,
          2.516121
        ],
        [
          2.536568,
          2.536568
        ],
        [
          2.557015,
          2.557015
        ],
        [
          2.577462,
          2.577462
        ],
        [
          2.597909,
          2.597909
        ],
        [
          2.618356,
          2.618356
        ],
        [
          2.6388030000000002,
          2.6388030000000002
        ],
        [
          2.65925,
          2.65925
        ],
        [
          2.679697,
          2.679697
        ],
        [
          2.700144,
          2.700144
        ],
        [
          2.720591,
          2.720591
        ],
        [
          2.741038,
          2.741038
        ],
        [
          2.761485,
          2.761485
        ],
        [
          2.781932,
          2.781932
        ],
        [
          2.802379,
          2.802379
        ],
        [
          2.822826,
          2.822826
        ],
        [
          2.843273,
          2.843273
        ],
        [
          2.86372,
          2.86372
        ],
        [
          2.8841669999999997,
          2.8841669999999997
        ],
        [
          2.904614,
          2.904614
        ],
        [
          2.9250610000000004,
          2.9250610000000004
        ],
        [
          2.9455080000000002,
          2.9455080000000002
        ],
        [
          2.965955,
          2.965955
        ],
        [
          2.986402,
          2.986402
        ],
        [
          3.006849,
          3.006849
        ],
        [
          3.027296,
          3.027296
        ],
        [
          3.047743,
          3.047743
        ],
        [
          3.06819,
          3.06819
        ],
        [
          3.088637,
          3.088637
        ],
        [
          3.1090839999999997,
          3.1090839999999997
        ],
        [
          3.1295309999999996,
          3.1295309999999996
        ],
        [
          3.149978,
          3.149978
        ],
        [
          3.1704250000000003,
          3.1704250000000003
        ],
        [
          3.190872,
          3.190872
        ],
        [
          3.211319,
          3.211319
        ],
        [
          3.231766,
          3.231766
        ],
        [
          3.252213,
          3.252213
        ],
        [
          3.27266,
          3.27266
        ],
        [
          3.293107,
          3.293107
        ],
        [
          3.313554,
          3.313554
        ],
        [
          3.3340009999999998,
          3.3340009999999998
        ],
        [
          3.3544479999999997,
          3.3544479999999997
        ],
        [
          3.3748949999999995,
          3.3748949999999995
        ],
        [
          3.3953420000000003,
          3.3953420000000003
        ],
        [
          3.415789,
          3.415789
        ],
        [
          3.436236,
          3.436236
        ],
        [
          3.456683,
          3.456683
        ],
        [
          3.47713,
          3.47713
        ],
        [
          3.4975769999999997,
          3.4975769999999997
        ],
        [
          3.518024,
          3.518024
        ],
        [
          3.5384710000000004,
          3.5384710000000004
        ],
        [
          3.558918,
          3.558918
        ],
        [
          3.5793649999999997,
          3.5793649999999997
        ],
        [
          3.5998119999999996,
          3.5998119999999996
        ],
        [
          3.6202590000000003,
          3.6202590000000003
        ],
        [
          3.640706,
          3.640706
        ],
        [
          3.661153,
          3.661153
        ],
        [
          3.6816,
          3.6816
        ],
        [
          3.701302,
          3.701302
        ],
        [
          3.721004,
          3.721004
        ],
        [
          3.7407060000000003,
          3.7407060000000003
        ],
        [
          3.760408,
          3.760408
        ],
        [
          3.78011,
          3.78011
        ],
        [
          3.799812,
          3.799812
        ],
        [
          3.8195140000000003,
          3.8195140000000003
        ],
        [
          3.8392160000000004,
          3.8392160000000004
        ],
        [
          3.858918,
          3.858918
        ],
        [
          3.8786199999999997,
          3.8786199999999997
        ],
        [
          3.8983220000000003,
          3.8983220000000003
        ],
        [
          3.918024,
          3.918024
        ],
        [
          3.9377259999999996,
          3.9377259999999996
        ],
        [
          3.957428,
          3.957428
        ],
        [
          3.97713,
          3.97713
        ],
        [
          3.9968319999999995,
          3.9968319999999995
        ],
        [
          4.016534,
          4.016534
        ],
        [
          4.036236,
          4.036236
        ],
        [
          4.055938,
          4.055938
        ],
        [
          4.07564,
          4.07564
        ],
        [
          4.095342,
          4.095342
        ],
        [
          4.115043999999999,
          4.115043999999999
        ],
        [
          4.134746,
          4.134746
        ],
        [
          4.154448,
          4.154448
        ],
        [
          4.17415,
          4.17415
        ],
        [
          4.193852,
          4.193852
        ],
        [
          4.213554,
          4.213554
        ],
        [
          4.233256,
          4.233256
        ],
        [
          4.252958,
          4.252958
        ],
        [
          4.27266,
          4.27266
        ],
        [
          4.292362,
          4.292362
        ],
        [
          4.312064,
          4.312064
        ],
        [
          4.331766,
          4.331766
        ],
        [
          4.351468,
          4.351468
        ],
        [
          4.37117,
          4.37117
        ],
        [
          4.390872,
          4.390872
        ],
        [
          4.410574,
          4.410574
        ],
        [
          4.430275999999999,
          4.430275999999999
        ],
        [
          4.449978,
          4.449978
        ],
        [
          4.469679999999999,
          4.469679999999999
        ],
        [
          4.489381999999999,
          4.489381999999999
        ],
        [
          4.509084,
          4.509084
        ],
        [
          4.528786,
          4.528786
        ],
        [
          4.548487999999999,
          4.548487999999999
        ],
        [
          4.5681899999999995,
          4.5681899999999995
        ],
        [
          4.587892,
          4.587892
        ],
        [
          4.607594,
          4.607594
        ],
        [
          4.627295999999999,
          4.627295999999999
        ],
        [
          4.646998,
          4.646998
        ],
        [
          4.6667,
          4.6667
        ],
        [
          4.686402,
          4.686402
        ],
        [
          4.706104,
          4.706104
        ],
        [
          4.725806,
          4.725806
        ],
        [
          4.745508,
          4.745508
        ],
        [
          4.76521,
          4.76521
        ],
        [
          4.784912,
          4.784912
        ],
        [
          4.804614,
          4.804614
        ],
        [
          4.824316,
          4.824316
        ],
        [
          4.844018,
          4.844018
        ],
        [
          4.863720000000001,
          4.863720000000001
        ],
        [
          4.8834219999999995,
          4.8834219999999995
        ],
        [
          4.903124,
          4.903124
        ],
        [
          4.922826,
          4.922826
        ],
        [
          4.942527999999999,
          4.942527999999999
        ],
        [
          4.96223,
          4.96223
        ],
        [
          4.981932,
          4.981932
        ],
        [
          5.001633999999999,
          5.001633999999999
        ],
        [
          5.021336,
          5.021336
        ],
        [
          5.0410379999999995,
          5.0410379999999995
        ],
        [
          5.060739999999999,
          5.060739999999999
        ],
        [
          5.080442,
          5.080442
        ],
        [
          5.100143999999999,
          5.100143999999999
        ],
        [
          5.119846,
          5.119846
        ],
        [
          5.139548,
          5.139548
        ],
        [
          5.159249999999999,
          5.159249999999999
        ],
        [
          5.178952,
          5.178952
        ],
        [
          5.198653999999999,
          5.198653999999999
        ],
        [
          5.218356,
          5.218356
        ],
        [
          5.238058,
          5.238058
        ],
        [
          5.25776,
          5.25776
        ],
        [
          5.277462,
          5.277462
        ],
        [
          5.297164,
          5.297164
        ],
        [
          5.316865999999999,
          5.316865999999999
        ],
        [
          5.336568,
          5.336568
        ],
        [
          5.356269999999999,
          5.356269999999999
        ],
        [
          5.375972,
          5.375972
        ],
        [
          5.395674,
          5.395674
        ],
        [
          5.415375999999999,
          5.415375999999999
        ],
        [
          5.435078,
          5.435078
        ],
        [
          5.4547799999999995,
          5.4547799999999995
        ],
        [
          5.474482,
          5.474482
        ],
        [
          5.494184,
          5.494184
        ],
        [
          5.513886,
          5.513886
        ],
        [
          5.533588,
          5.533588
        ],
        [
          5.55329,
          5.55329
        ],
        [
          5.572991999999999,
          5.572991999999999
        ],
        [
          5.592694,
          5.592694
        ],
        [
          5.6123959999999995,
          5.6123959999999995
        ],
        [
          5.632098,
          5.632098
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
          14.6033057,
          14.6033057
        ],
        [
          14.6033014,
          14.6033014
        ],
        [
          14.603297099999999,
          14.603297099999999
        ],
        [
          14.6032928,
          14.6032928
        ],
        [
          14.603288500000001,
          14.603288500000001
        ],
        [
          14.603284200000001,
          14.603284200000001
        ],
        [
          14.6032799,
          14.6032799
        ],
        [
          14.603275600000002,
          14.603275600000002
        ],
        [
          14.603271300000001,
          14.603271300000001
        ],
        [
          14.603267,
          14.603267
        ],
        [
          14.6032627,
          14.6032627
        ],
        [
          14.6032584,
          14.6032584
        ],
        [
          14.603254100000001,
          14.603254100000001
        ],
        [
          14.6032498,
          14.6032498
        ],
        [
          14.6032455,
          14.6032455
        ],
        [
          14.6032412,
          14.6032412
        ],
        [
          14.6032369,
          14.6032369
        ],
        [
          14.603232600000002,
          14.603232600000002
        ],
        [
          14.603228300000001,
          14.603228300000001
        ],
        [
          14.603224,
          14.603224
        ],
        [
          14.6032197,
          14.6032197
        ],
        [
          14.603215400000002,
          14.603215400000002
        ],
        [
          14.603211100000001,
          14.603211100000001
        ],
        [
          14.6032068,
          14.6032068
        ],
        [
          14.6032025,
          14.6032025
        ],
        [
          14.603198200000001,
          14.603198200000001
        ],
        [
          14.6031939,
          14.6031939
        ],
        [
          14.6031896,
          14.6031896
        ],
        [
          14.6031853,
          14.6031853
        ],
        [
          14.603181,
          14.603181
        ],
        [
          14.6031767,
          14.6031767
        ],
        [
          14.6031724,
          14.6031724
        ],
        [
          14.6031681,
          14.6031681
        ],
        [
          14.6031638,
          14.6031638
        ],
        [
          14.6031595,
          14.6031595
        ],
        [
          14.6031552,
          14.6031552
        ],
        [
          14.6031509,
          14.6031509
        ],
        [
          14.603146600000002,
          14.603146600000002
        ],
        [
          14.603142300000002,
          14.603142300000002
        ],
        [
          14.603138000000001,
          14.603138000000001
        ],
        [
          14.6031337,
          14.6031337
        ],
        [
          14.6031294,
          14.6031294
        ],
        [
          14.603125100000002,
          14.603125100000002
        ],
        [
          14.603120800000001,
          14.603120800000001
        ],
        [
          14.6031165,
          14.6031165
        ],
        [
          14.603112200000002,
          14.603112200000002
        ],
        [
          14.603107900000001,
          14.603107900000001
        ],
        [
          14.6031036,
          14.6031036
        ],
        [
          14.6030993,
          14.6030993
        ],
        [
          14.603095,
          14.603095
        ],
        [
          14.6030907,
          14.6030907
        ],
        [
          14.603086400000002,
          14.603086400000002
        ],
        [
          14.603082100000002,
          14.603082100000002
        ],
        [
          14.603077800000001,
          14.603077800000001
        ],
        [
          14.6030735,
          14.6030735
        ],
        [
          14.6030692,
          14.6030692
        ],
        [
          14.603064900000001,
          14.603064900000001
        ],
        [
          14.603060600000001,
          14.603060600000001
        ],
        [
          14.6030563,
          14.6030563
        ],
        [
          14.603052,
          14.603052
        ],
        [
          14.603047700000001,
          14.603047700000001
        ],
        [
          14.6030434,
          14.6030434
        ],
        [
          14.6030391,
          14.6030391
        ],
        [
          14.6030348,
          14.6030348
        ],
        [
          14.603030500000001,
          14.603030500000001
        ],
        [
          14.6030262,
          14.6030262
        ],
        [
          14.6030219,
          14.6030219
        ],
        [
          14.603017600000001,
          14.603017600000001
        ],
        [
          14.6030133,
          14.6030133
        ],
        [
          14.603009,
          14.603009
        ],
        [
          14.6030047,
          14.6030047
        ],
        [
          14.603000399999999,
          14.603000399999999
        ],
        [
          14.6029961,
          14.6029961
        ],
        [
          14.602991800000002,
          14.602991800000002
        ],
        [
          14.602987500000001,
          14.602987500000001
        ],
        [
          14.6029832,
          14.6029832
        ],
        [
          14.6029789,
          14.6029789
        ],
        [
          14.6029746,
          14.6029746
        ],
        [
          14.602970299999999,
          14.602970299999999
        ],
        [
          14.602966000000002,
          14.602966000000002
        ],
        [
          14.602961700000002,
          14.602961700000002
        ],
        [
          14.602957400000001,
          14.602957400000001
        ],
        [
          14.6029531,
          14.6029531
        ],
        [
          14.6029488,
          14.6029488
        ],
        [
          14.6029445,
          14.6029445
        ],
        [
          14.6029402,
          14.6029402
        ],
        [
          14.6029359,
          14.6029359
        ],
        [
          14.602931600000002,
          14.602931600000002
        ],
        [
          14.602927300000001,
          14.602927300000001
        ],
        [
          14.602923,
          14.602923
        ],
        [
          14.6029187,
          14.6029187
        ],
        [
          14.602914400000001,
          14.602914400000001
        ],
        [
          14.6029101,
          14.6029101
        ],
        [
          14.6029058,
          14.6029058
        ],
        [
          14.6029015,
          14.6029015
        ],
        [
          14.602897200000001,
          14.602897200000001
        ],
        [
          14.602892900000002,
          14.602892900000002
        ],
        [
          14.602888600000002,
          14.602888600000002
        ],
        [
          14.602884300000001,
          14.602884300000001
        ],
        [
          14.60288,
          14.60288
        ],
        [
          14.6028824,
          14.6028824
        ],
        [
          14.602884800000002,
          14.602884800000002
        ],
        [
          14.602887200000001,
          14.602887200000001
        ],
        [
          14.602889600000001,
          14.602889600000001
        ],
        [
          14.602892,
          14.602892
        ],
        [
          14.6028944,
          14.6028944
        ],
        [
          14.602896800000002,
          14.602896800000002
        ],
        [
          14.602899200000001,
          14.602899200000001
        ],
        [
          14.602901600000001,
          14.602901600000001
        ],
        [
          14.602904,
          14.602904
        ],
        [
          14.6029064,
          14.6029064
        ],
        [
          14.602908800000002,
          14.602908800000002
        ],
        [
          14.602911200000001,
          14.602911200000001
        ],
        [
          14.6029136,
          14.6029136
        ],
        [
          14.602916,
          14.602916
        ],
        [
          14.6029184,
          14.6029184
        ],
        [
          14.6029208,
          14.6029208
        ],
        [
          14.602923200000001,
          14.602923200000001
        ],
        [
          14.6029256,
          14.6029256
        ],
        [
          14.602928000000002,
          14.602928000000002
        ],
        [
          14.6029304,
          14.6029304
        ],
        [
          14.602932800000001,
          14.602932800000001
        ],
        [
          14.602935200000001,
          14.602935200000001
        ],
        [
          14.6029376,
          14.6029376
        ],
        [
          14.60294,
          14.60294
        ],
        [
          14.602942400000002,
          14.602942400000002
        ],
        [
          14.6029448,
          14.6029448
        ],
        [
          14.6029472,
          14.6029472
        ],
        [
          14.6029496,
          14.6029496
        ],
        [
          14.602952000000002,
          14.602952000000002
        ],
        [
          14.602954400000002,
          14.602954400000002
        ],
        [
          14.602956800000001,
          14.602956800000001
        ],
        [
          14.6029592,
          14.6029592
        ],
        [
          14.6029616,
          14.6029616
        ],
        [
          14.602964,
          14.602964
        ],
        [
          14.6029664,
          14.6029664
        ],
        [
          14.602968800000001,
          14.602968800000001
        ],
        [
          14.602971199999999,
          14.602971199999999
        ],
        [
          14.6029736,
          14.6029736
        ],
        [
          14.602976000000002,
          14.602976000000002
        ],
        [
          14.602978400000001,
          14.602978400000001
        ],
        [
          14.602980800000001,
          14.602980800000001
        ],
        [
          14.6029832,
          14.6029832
        ],
        [
          14.6029856,
          14.6029856
        ],
        [
          14.602988,
          14.602988
        ],
        [
          14.6029904,
          14.6029904
        ],
        [
          14.6029928,
          14.6029928
        ],
        [
          14.602995200000002,
          14.602995200000002
        ],
        [
          14.6029976,
          14.6029976
        ],
        [
          14.603000000000002,
          14.603000000000002
        ],
        [
          14.603002400000001,
          14.603002400000001
        ],
        [
          14.6030048,
          14.6030048
        ],
        [
          14.6030072,
          14.6030072
        ],
        [
          14.6030096,
          14.6030096
        ],
        [
          14.603012,
          14.603012
        ],
        [
          14.6030144,
          14.6030144
        ],
        [
          14.603016800000002,
          14.603016800000002
        ],
        [
          14.6030192,
          14.6030192
        ],
        [
          14.6030216,
          14.6030216
        ],
        [
          14.603024000000001,
          14.603024000000001
        ],
        [
          14.603026400000001,
          14.603026400000001
        ],
        [
          14.6030288,
          14.6030288
        ],
        [
          14.6030312,
          14.6030312
        ],
        [
          14.6030336,
          14.6030336
        ],
        [
          14.603036000000001,
          14.603036000000001
        ],
        [
          14.603038399999999,
          14.603038399999999
        ],
        [
          14.603040800000002,
          14.603040800000002
        ],
        [
          14.603043200000002,
          14.603043200000002
        ],
        [
          14.6030456,
          14.6030456
        ],
        [
          14.603048000000001,
          14.603048000000001
        ],
        [
          14.6030504,
          14.6030504
        ],
        [
          14.6030528,
          14.6030528
        ],
        [
          14.6030552,
          14.6030552
        ],
        [
          14.6030576,
          14.6030576
        ],
        [
          14.60306,
          14.60306
        ],
        [
          14.6030624,
          14.6030624
        ],
        [
          14.6030648,
          14.6030648
        ],
        [
          14.603067200000002,
          14.603067200000002
        ],
        [
          14.603069600000001,
          14.603069600000001
        ],
        [
          14.603072000000001,
          14.603072000000001
        ],
        [
          14.6030744,
          14.6030744
        ],
        [
          14.6030768,
          14.6030768
        ],
        [
          14.6030792,
          14.6030792
        ],
        [
          14.603081600000001,
          14.603081600000001
        ],
        [
          14.603083999999999,
          14.603083999999999
        ],
        [
          14.603086400000002,
          14.603086400000002
        ],
        [
          14.6030888,
          14.6030888
        ],
        [
          14.603091200000001,
          14.603091200000001
        ],
        [
          14.603093600000001,
          14.603093600000001
        ],
        [
          14.603096,
          14.603096
        ],
        [
          14.6030984,
          14.6030984
        ],
        [
          14.6031008,
          14.6031008
        ],
        [
          14.6031032,
          14.6031032
        ],
        [
          14.603105600000001,
          14.603105600000001
        ],
        [
          14.603108,
          14.603108
        ],
        [
          14.603110400000002,
          14.603110400000002
        ],
        [
          14.603112800000002,
          14.603112800000002
        ],
        [
          14.6031152,
          14.6031152
        ],
        [
          14.603117600000001,
          14.603117600000001
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
  "layout": {
    "yScFill": 0.66
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
