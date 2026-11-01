import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "tamron-18-270mm-f35-63-di-ii-vc-pzd-b008",
  "maker": "Tamron",
  "name": "TAMRON 18-270mm f/3.5-6.3 Di II VC PZD (B008)",
  "subtitle": "JP 2011-248219 A; INFERRED continuous zoom path; native source knots preserved",
  "catalog": {
    "lensMounts": [
      "canon-ef",
      "nikon-f",
      "sony-a"
    ],
    "imageFormat": "aps-c",
    "specs": [
      "16 PHYSICAL ELEMENTS / 13 GROUPS",
      "17 MEDIA INCLUDING HYBRID RESIN",
      "NATIVE 18.5000 / 71.000 / 291.2015mm",
      "NATIVE f/3.44 / 6.03 / 6.50",
      "APPROVED STANDARD-CONIC INTERPRETATION"
    ],
    "elementCount": 16,
    "groupCount": 13,
    "focalLengthMm": {
      "marketing": [
        18,
        270
      ],
      "design": [
        18.500464473201987,
        291.21696059407367
      ]
    },
    "fNumber": {
      "marketing": 3.5,
      "design": 3.44
    }
  },
  "source": {
    "patentNumber": "JP 2011-248219 A",
    example: {"label": "Example 1", "id": "1"},
    "patentYear": 2011,
    "authors": [
      "Dayong Li"
    ],
    "assignees": [
      "Tamron Co., Ltd."
    ],
    "errata": [
      {
        "status": "unresolved",
        "note": "The native para0019 equation has unsquared y under the radical and a trailing squared parenthesis. Owner-approved standard conic interpretation preserves K/A4–A12. Original facsimile remains in dossier; no source numerical coefficient is repaired."
      },
      {
        "status": "unresolved",
        "note": "Direct-gap image-fixed G4 motion differs from para0026 by0.0266/0.0598 at middle/tele. Direct gaps control; no image-plane-drift explanation or continuous cam law is inferred."
      }
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Physical element 1",
      "type": "Negative Meniscus",
      "nd": 1.90366,
      "vd": 31.31,
      "indexReference": "d",
      "focalLengthMm": -152.47573110204135,
      "glass": "TAFD25L (HOYA coordinate-compatible class; supplier unproven)",
      "role": "Native material interval in G1. Standalone-in-air power does not describe its in-situ contribution.",
      "diagramLabel": "1",
      "cemented": "D1"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Physical element 2",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "focalLengthMm": 116.17383249292503,
      "glass": "FCD1 (HOYA coordinate-compatible class; supplier unproven)",
      "role": "Native material interval in G1. Standalone-in-air power does not describe its in-situ contribution.",
      "diagramLabel": "2",
      "cemented": "D1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Physical element 3",
      "type": "Positive Meniscus",
      "nd": 1.618,
      "vd": 63.39,
      "indexReference": "d",
      "focalLengthMm": 127.5569444219475,
      "glass": "PCD4 (HOYA coordinate-compatible class; supplier unproven)",
      "role": "Native material interval in G1. Standalone-in-air power does not describe its in-situ contribution.",
      "diagramLabel": "3"
    },
    {
      "id": 4,
      "name": "L4r",
      "label": "Hybrid resin layer",
      "type": "Hybrid Aspheric Resin",
      "nd": 1.5146,
      "vd": 49.96,
      "indexReference": "d",
      "focalLengthMm": -1362.9735960478474,
      "glass": "Unmatched (hybrid optical resin; nd 1.51460 / vd 49.96)",
      "role": "Explicit thin front resin of the G2 hybrid; not an extra physical lens body.",
      "diagramLabel": "4r",
      "cemented": "H1"
    },
    {
      "id": 5,
      "name": "L4",
      "label": "Physical element 4",
      "type": "Negative Meniscus",
      "nd": 1.883,
      "vd": 40.8,
      "indexReference": "d",
      "focalLengthMm": -20.201293061846116,
      "glass": "TAFD30 (HOYA coordinate-compatible class; supplier unproven)",
      "role": "Native material interval in G2. Standalone-in-air power does not describe its in-situ contribution.",
      "diagramLabel": "4",
      "cemented": "H1"
    },
    {
      "id": 6,
      "name": "L5",
      "label": "Physical element 5",
      "type": "Biconcave Negative",
      "nd": 1.7725,
      "vd": 49.62,
      "indexReference": "d",
      "focalLengthMm": -25.69121615341672,
      "glass": "TAF1 (HOYA coordinate-compatible class; supplier unproven)",
      "role": "Native material interval in G2. Standalone-in-air power does not describe its in-situ contribution.",
      "diagramLabel": "5"
    },
    {
      "id": 7,
      "name": "L6",
      "label": "Physical element 6",
      "type": "Biconvex Positive",
      "nd": 1.84666,
      "vd": 23.78,
      "indexReference": "d",
      "focalLengthMm": 18.28240014250227,
      "glass": "FDS90 (HOYA coordinate-compatible class; supplier unproven)",
      "role": "Native material interval in G2. Standalone-in-air power does not describe its in-situ contribution.",
      "diagramLabel": "6"
    },
    {
      "id": 8,
      "name": "L7",
      "label": "Physical element 7",
      "type": "Negative Meniscus",
      "nd": 1.83481,
      "vd": 42.72,
      "indexReference": "d",
      "focalLengthMm": -29.547990933264042,
      "glass": "TAFD5G (HOYA coordinate-compatible class; supplier unproven)",
      "role": "Native material interval in G2. Standalone-in-air power does not describe its in-situ contribution.",
      "diagramLabel": "7"
    },
    {
      "id": 9,
      "name": "L8",
      "label": "Physical element 8",
      "type": "Positive Meniscus",
      "nd": 1.72916,
      "vd": 54.67,
      "indexReference": "d",
      "focalLengthMm": 76.18480987141733,
      "glass": "TAC8 (HOYA coordinate-compatible class; supplier unproven)",
      "role": "Native material interval in G3. Standalone-in-air power does not describe its in-situ contribution.",
      "diagramLabel": "8"
    },
    {
      "id": 10,
      "name": "L9",
      "label": "Physical element 9",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "focalLengthMm": 46.92762835778839,
      "glass": "FCD1 (HOYA coordinate-compatible class; supplier unproven)",
      "role": "Native material interval in G3. Standalone-in-air power does not describe its in-situ contribution.",
      "diagramLabel": "9"
    },
    {
      "id": 11,
      "name": "L10",
      "label": "Physical element 10",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.44,
      "indexReference": "d",
      "focalLengthMm": 33.85335657076644,
      "glass": "FC5 (HOYA coordinate-compatible class; supplier unproven)",
      "role": "Native material interval in G3. Standalone-in-air power does not describe its in-situ contribution.",
      "diagramLabel": "10",
      "cemented": "D3"
    },
    {
      "id": 12,
      "name": "L11",
      "label": "Physical element 11",
      "type": "Negative Meniscus",
      "nd": 1.92286,
      "vd": 20.88,
      "indexReference": "d",
      "focalLengthMm": -59.62207517829984,
      "glass": "E-FDS1 (HOYA coordinate-compatible class; supplier unproven)",
      "role": "Native material interval in G3. Standalone-in-air power does not describe its in-situ contribution.",
      "diagramLabel": "11",
      "cemented": "D3"
    },
    {
      "id": 13,
      "name": "L12",
      "label": "Physical element 12",
      "type": "Biconcave Negative (Aspheric)",
      "nd": 1.85135,
      "vd": 40.1,
      "indexReference": "d",
      "focalLengthMm": -14.44910412241646,
      "glass": "M-TAFD305 (HOYA coordinate-compatible class; supplier unproven)",
      "role": "Native material interval in G3. Standalone-in-air power does not describe its in-situ contribution.",
      "diagramLabel": "12",
      "cemented": "D4"
    },
    {
      "id": 14,
      "name": "L13",
      "label": "Physical element 13",
      "type": "Positive Meniscus",
      "nd": 1.80809,
      "vd": 22.76,
      "indexReference": "d",
      "focalLengthMm": 28.030239304747706,
      "glass": "FD225 (HOYA coordinate-compatible class; supplier unproven)",
      "role": "Native material interval in G3. Standalone-in-air power does not describe its in-situ contribution.",
      "diagramLabel": "13",
      "cemented": "D4"
    },
    {
      "id": 15,
      "name": "L14",
      "label": "Physical element 14",
      "type": "Biconvex Positive (Aspheric)",
      "nd": 1.59201,
      "vd": 67.02,
      "indexReference": "d",
      "focalLengthMm": 22.376659002975163,
      "glass": "M-PCD51 (HOYA coordinate-compatible class; supplier unproven)",
      "role": "Native material interval in G4. Standalone-in-air power does not describe its in-situ contribution.",
      "diagramLabel": "14"
    },
    {
      "id": 16,
      "name": "L15",
      "label": "Physical element 15",
      "type": "Biconcave Negative",
      "nd": 1.90366,
      "vd": 31.31,
      "indexReference": "d",
      "focalLengthMm": -21.28185708375934,
      "glass": "TAFD25L (HOYA coordinate-compatible class; supplier unproven)",
      "role": "Native material interval in G4. Standalone-in-air power does not describe its in-situ contribution.",
      "diagramLabel": "15"
    },
    {
      "id": 17,
      "name": "L16",
      "label": "Physical element 16",
      "type": "Biconvex Positive",
      "nd": 1.69895,
      "vd": 30.05,
      "indexReference": "d",
      "focalLengthMm": 51.250087074146336,
      "glass": "E-FD15L (HOYA coordinate-compatible class; supplier unproven)",
      "role": "Native material interval in G4. Standalone-in-air power does not describe its in-situ contribution.",
      "diagramLabel": "16"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 141.1468,
      "d": 1.5,
      "sd": 27.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 69.3714,
      "d": 7.1,
      "sd": 27.5,
      "medium": 2
    },
    {
      "label": "3",
      "R": -332.6134,
      "d": 0.15,
      "sd": 27.5
    },
    {
      "label": "4",
      "R": 63.9453,
      "d": 5.1,
      "sd": 25.5,
      "medium": 3
    },
    {
      "label": "5",
      "R": 328.3371,
      "sd": 25.5
    },
    {
      "label": "6A",
      "R": 120.1024,
      "d": 0.2,
      "sd": 13.5,
      "medium": 4,
      "asphere": {
        "A4": 0.0000100848,
        "A6": -8.23992e-8,
        "A8": 7.73802e-10,
        "A10": -3.65697e-12,
        "A12": 7.40459e-15
      }
    },
    {
      "label": "7",
      "R": 102.4853,
      "d": 1,
      "sd": 13.5,
      "medium": 5
    },
    {
      "label": "8",
      "R": 15.1238,
      "d": 5.3047,
      "sd": 13.5
    },
    {
      "label": "9",
      "R": -39.8665,
      "d": 0.8,
      "sd": 9.7,
      "medium": 6
    },
    {
      "label": "10",
      "R": 39.8665,
      "d": 0.15,
      "sd": 9.7
    },
    {
      "label": "11",
      "R": 27.9302,
      "d": 4.6,
      "sd": 10,
      "medium": 7
    },
    {
      "label": "12",
      "R": -32.1001,
      "d": 0.6619,
      "sd": 10
    },
    {
      "label": "13",
      "R": -22.8444,
      "d": 0.8,
      "sd": 9.2,
      "medium": 8
    },
    {
      "label": "14",
      "R": -314.1081,
      "sd": 9.2
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1
    },
    {
      "label": "16",
      "R": 43.5895,
      "d": 2.1,
      "sd": 10,
      "medium": 9
    },
    {
      "label": "17",
      "R": 198.3247,
      "d": 0.15,
      "sd": 10
    },
    {
      "label": "18",
      "R": 31.5974,
      "d": 3.3,
      "sd": 10,
      "medium": 10
    },
    {
      "label": "19",
      "R": -85.9757,
      "d": 0.15,
      "sd": 10
    },
    {
      "label": "20",
      "R": 32.4055,
      "d": 3.6,
      "sd": 9.8,
      "medium": 11
    },
    {
      "label": "21",
      "R": -32.4055,
      "d": 0.8,
      "sd": 9.8,
      "medium": 12
    },
    {
      "label": "22",
      "R": -79.7693,
      "d": 1.5829,
      "sd": 9.8
    },
    {
      "label": "23A",
      "R": -45.2054,
      "d": 0.9,
      "sd": 9.5,
      "medium": 13,
      "asphere": {
        "A4": 0.0000120221,
        "A6": -1.69654e-8,
        "A8": 3.67494e-10,
        "A10": -2.56282e-12
      }
    },
    {
      "label": "24",
      "R": 17.0548,
      "d": 2.8885,
      "sd": 9.5,
      "medium": 14
    },
    {
      "label": "25",
      "R": 63.8056,
      "sd": 9.5
    },
    {
      "label": "26A",
      "R": 19.156,
      "d": 5.2913,
      "sd": 10.5,
      "medium": 15,
      "asphere": {
        "A4": -0.000021329,
        "A6": 1.07151e-7,
        "A8": -1.36111e-9,
        "A10": 1.05249e-11
      }
    },
    {
      "label": "27A",
      "R": -38.5354,
      "d": 0.15,
      "sd": 10.5,
      "asphere": {
        "K": -8.6353,
        "A4": 0.00000938555,
        "A6": 7.1772e-8,
        "A8": -8.25848e-10,
        "A10": 8.21363e-12
      }
    },
    {
      "label": "28",
      "R": -487.7854,
      "d": 0.8,
      "sd": 8.4,
      "medium": 16
    },
    {
      "label": "29",
      "R": 20.0365,
      "d": 1.5195,
      "sd": 8.4
    },
    {
      "label": "30",
      "R": 71.1245,
      "d": 2.5,
      "sd": 8.4,
      "medium": 17
    },
    {
      "label": "31",
      "R": -71.1245,
      "sd": 8.4
    }
  ],
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 18.5,
        "nominalFNumber": 3.44,
        "label": "Wide 18.5000mm",
        "published": true
      },
      {
        "published": false,
        "focalLengthMm": 19.0608,
        "nominalFNumber": 3.485,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 19.6382,
        "nominalFNumber": 3.5332,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 20.233,
        "nominalFNumber": 3.5832,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 20.8459,
        "nominalFNumber": 3.6336,
        "label": "Solved cam node"
      },
      {
        "focalLengthMm": 21.477,
        "nominalFNumber": 3.6828,
        "label": "21.477mm (para. 0026 movement table)",
        "published": true
      },
      {
        "published": false,
        "focalLengthMm": 22.1889,
        "nominalFNumber": 3.7346,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 22.9242,
        "nominalFNumber": 3.7857,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 23.6838,
        "nominalFNumber": 3.836,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 24.4686,
        "nominalFNumber": 3.8858,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 25.2795,
        "nominalFNumber": 3.9353,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 26.1172,
        "nominalFNumber": 3.9846,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 26.9826,
        "nominalFNumber": 4.034,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 27.8768,
        "nominalFNumber": 4.0836,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 28.8006,
        "nominalFNumber": 4.1337,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 29.755,
        "nominalFNumber": 4.1844,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 30.741,
        "nominalFNumber": 4.2361,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 31.7597,
        "nominalFNumber": 4.2888,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 32.8121,
        "nominalFNumber": 4.343,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 33.8994,
        "nominalFNumber": 4.3988,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 35.0227,
        "nominalFNumber": 4.4564,
        "label": "Solved cam node"
      },
      {
        "focalLengthMm": 36.181,
        "nominalFNumber": 4.5162,
        "label": "36.181mm (para. 0026 movement table)",
        "published": true
      },
      {
        "published": false,
        "focalLengthMm": 37.4236,
        "nominalFNumber": 4.5826,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 38.7066,
        "nominalFNumber": 4.6553,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 40.0335,
        "nominalFNumber": 4.7335,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 41.406,
        "nominalFNumber": 4.8164,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 42.8255,
        "nominalFNumber": 4.9031,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 44.2936,
        "nominalFNumber": 4.9927,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 45.8121,
        "nominalFNumber": 5.0844,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 47.3826,
        "nominalFNumber": 5.1773,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 49.007,
        "nominalFNumber": 5.2703,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 50.687,
        "nominalFNumber": 5.3627,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 52.4247,
        "nominalFNumber": 5.4534,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 54.2219,
        "nominalFNumber": 5.5415,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 56.0807,
        "nominalFNumber": 5.6259,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 58.0033,
        "nominalFNumber": 5.7057,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 59.9917,
        "nominalFNumber": 5.7798,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 62.0484,
        "nominalFNumber": 5.8473,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 64.1756,
        "nominalFNumber": 5.9071,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 66.3756,
        "nominalFNumber": 5.9581,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 68.6512,
        "nominalFNumber": 5.9994,
        "label": "Solved cam node"
      },
      {
        "focalLengthMm": 71,
        "nominalFNumber": 6.03,
        "label": "Middle 71.000mm",
        "published": true
      },
      {
        "published": false,
        "focalLengthMm": 72.63,
        "nominalFNumber": 6.0462,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 74.2925,
        "nominalFNumber": 6.0614,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 75.9932,
        "nominalFNumber": 6.0757,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 77.7328,
        "nominalFNumber": 6.0892,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 79.5122,
        "nominalFNumber": 6.1018,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 81.3324,
        "nominalFNumber": 6.1137,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 83.1943,
        "nominalFNumber": 6.1248,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 85.0987,
        "nominalFNumber": 6.1353,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 87.0468,
        "nominalFNumber": 6.1451,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 89.0395,
        "nominalFNumber": 6.1543,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 91.0778,
        "nominalFNumber": 6.163,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 93.1627,
        "nominalFNumber": 6.1711,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 95.2954,
        "nominalFNumber": 6.1789,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 97.477,
        "nominalFNumber": 6.1862,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 99.7084,
        "nominalFNumber": 6.1932,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 101.991,
        "nominalFNumber": 6.1998,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 104.3258,
        "nominalFNumber": 6.2062,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 106.714,
        "nominalFNumber": 6.2124,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 109.157,
        "nominalFNumber": 6.2185,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 111.6557,
        "nominalFNumber": 6.2244,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 114.2118,
        "nominalFNumber": 6.2302,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 116.8263,
        "nominalFNumber": 6.2361,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 119.5006,
        "nominalFNumber": 6.2419,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 122.2362,
        "nominalFNumber": 6.2479,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 125.0344,
        "nominalFNumber": 6.254,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 127.8966,
        "nominalFNumber": 6.2602,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 130.8243,
        "nominalFNumber": 6.2667,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 133.819,
        "nominalFNumber": 6.2735,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 136.8822,
        "nominalFNumber": 6.2805,
        "label": "Solved cam node"
      },
      {
        "focalLengthMm": 140.001,
        "nominalFNumber": 6.288,
        "label": "140.001mm (para. 0026 movement table)",
        "published": true
      },
      {
        "published": false,
        "focalLengthMm": 142.2625,
        "nominalFNumber": 6.2934,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 144.5456,
        "nominalFNumber": 6.2987,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 146.8653,
        "nominalFNumber": 6.304,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 149.2222,
        "nominalFNumber": 6.3093,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 151.617,
        "nominalFNumber": 6.3145,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 154.0501,
        "nominalFNumber": 6.3197,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 156.5224,
        "nominalFNumber": 6.3249,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 159.0342,
        "nominalFNumber": 6.33,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 161.5865,
        "nominalFNumber": 6.3352,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 164.1795,
        "nominalFNumber": 6.3402,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 166.8143,
        "nominalFNumber": 6.3453,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 169.4912,
        "nominalFNumber": 6.3503,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 172.2112,
        "nominalFNumber": 6.3553,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 174.9748,
        "nominalFNumber": 6.3602,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 177.7828,
        "nominalFNumber": 6.3651,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 180.6359,
        "nominalFNumber": 6.37,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 183.5346,
        "nominalFNumber": 6.3748,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 186.4799,
        "nominalFNumber": 6.3796,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 189.4724,
        "nominalFNumber": 6.3844,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 192.5129,
        "nominalFNumber": 6.3891,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 195.6022,
        "nominalFNumber": 6.3938,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 198.7411,
        "nominalFNumber": 6.3985,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 201.9304,
        "nominalFNumber": 6.4031,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 205.1709,
        "nominalFNumber": 6.4077,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 208.4632,
        "nominalFNumber": 6.4123,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 211.8086,
        "nominalFNumber": 6.4168,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 215.2073,
        "nominalFNumber": 6.4213,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 218.6609,
        "nominalFNumber": 6.4258,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 222.1697,
        "nominalFNumber": 6.4302,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 225.735,
        "nominalFNumber": 6.4346,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 229.3571,
        "nominalFNumber": 6.439,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 233.0378,
        "nominalFNumber": 6.4433,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 236.7773,
        "nominalFNumber": 6.4476,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 240.5768,
        "nominalFNumber": 6.4518,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 244.4372,
        "nominalFNumber": 6.456,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 248.3597,
        "nominalFNumber": 6.4602,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 252.345,
        "nominalFNumber": 6.4643,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 256.3943,
        "nominalFNumber": 6.4685,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 260.5086,
        "nominalFNumber": 6.4725,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 264.6887,
        "nominalFNumber": 6.4766,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 268.936,
        "nominalFNumber": 6.4805,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 273.2515,
        "nominalFNumber": 6.4845,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 277.6362,
        "nominalFNumber": 6.4884,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 282.0914,
        "nominalFNumber": 6.4923,
        "label": "Solved cam node"
      },
      {
        "published": false,
        "focalLengthMm": 286.6179,
        "nominalFNumber": 6.4962,
        "label": "Solved cam node"
      },
      {
        "focalLengthMm": 291.2015,
        "nominalFNumber": 6.5,
        "label": "Tele 291.2015mm",
        "published": true
      }
    ],
    "apertureModel": "from-nominal-fno",
    "step": 0.005
  },
  "focus": {
    "closeFocusM": 0.49,
    "description": "INFERRED CONTINUOUS ZOOM CANDIDATE, NOT FACTORY CAM. Source knots and fixed optics unchanged. Non-compensating gaps are piecewise-linear drivers; {\"5\":1,\"14\":-1} gives the source-group compensator gap signs, solved for the interpolated native image-plane residual. Near-focus deltas, when present, retained at native knots and interpolated; finite conjugates not newly certified. This candidate remains subject to full validation."
  },
  "gaps": {
    "5": {
      "label": "D5",
      "values": [
        [1.6998, 1.6998],
        [1.99084, 1.99084],
        [2.19537, 2.19537],
        [2.38667, 2.38667],
        [2.63347, 2.63347],
        [3, 3],
        [3.53782, 3.53782],
        [4.16476, 4.16476],
        [4.86561, 4.86561],
        [5.62642, 5.62642],
        [6.43441, 6.43441],
        [7.27794, 7.27794],
        [8.14642, 8.14642],
        [9.03028, 9.03028],
        [9.92086, 9.92086],
        [10.81041, 10.81041],
        [11.69201, 11.69201],
        [12.55948, 12.55948],
        [13.4074, 13.4074],
        [14.23097, 14.23097],
        [15.02603, 15.02603],
        [15.789, 15.789],
        [16.49203, 16.49203],
        [17.08016, 17.08016],
        [17.58326, 17.58326],
        [18.02811, 18.02811],
        [18.43866, 18.43866],
        [18.83625, 18.83625],
        [19.23977, 19.23977],
        [19.66586, 19.66586],
        [20.12909, 20.12909],
        [20.64208, 20.64208],
        [21.21569, 21.21569],
        [21.85913, 21.85913],
        [22.58009, 22.58009],
        [23.38485, 23.38485],
        [24.2784, 24.2784],
        [25.26454, 25.26454],
        [26.34595, 26.34595],
        [27.52432, 27.52432],
        [28.8004, 28.8004],
        [30.1741, 30.1741],
        [31.12548, 31.12548],
        [32.06909, 32.06909],
        [33.00408, 33.00408],
        [33.9297, 33.9297],
        [34.84523, 34.84523],
        [35.75003, 35.75003],
        [36.6435, 36.6435],
        [37.52512, 37.52512],
        [38.3944, 38.3944],
        [39.2509, 39.2509],
        [40.09423, 40.09423],
        [40.92406, 40.92406],
        [41.74007, 41.74007],
        [42.54202, 42.54202],
        [43.32966, 43.32966],
        [44.10281, 44.10281],
        [44.86132, 44.86132],
        [45.60505, 45.60505],
        [46.33391, 46.33391],
        [47.04783, 47.04783],
        [47.74678, 47.74678],
        [48.43072, 48.43072],
        [49.09968, 49.09968],
        [49.75366, 49.75366],
        [50.39272, 50.39272],
        [51.01692, 51.01692],
        [51.62634, 51.62634],
        [52.22109, 52.22109],
        [52.80127, 52.80127],
        [53.367, 53.367],
        [53.75709, 53.75709],
        [54.14158, 54.14158],
        [54.52054, 54.52054],
        [54.89405, 54.89405],
        [55.26219, 55.26219],
        [55.62504, 55.62504],
        [55.98269, 55.98269],
        [56.33519, 56.33519],
        [56.68263, 56.68263],
        [57.02508, 57.02508],
        [57.36262, 57.36262],
        [57.69531, 57.69531],
        [58.02323, 58.02323],
        [58.34644, 58.34644],
        [58.66502, 58.66502],
        [58.97903, 58.97903],
        [59.28853, 59.28853],
        [59.59359, 59.59359],
        [59.89428, 59.89428],
        [60.19067, 60.19067],
        [60.4828, 60.4828],
        [60.77074, 60.77074],
        [61.05456, 61.05456],
        [61.33432, 61.33432],
        [61.61007, 61.61007],
        [61.88186, 61.88186],
        [62.14977, 62.14977],
        [62.41384, 62.41384],
        [62.67413, 62.67413],
        [62.9307, 62.9307],
        [63.18359, 63.18359],
        [63.43286, 63.43286],
        [63.67857, 63.67857],
        [63.92077, 63.92077],
        [64.1595, 64.1595],
        [64.39481, 64.39481],
        [64.62676, 64.62676],
        [64.8554, 64.8554],
        [65.08077, 65.08077],
        [65.30291, 65.30291],
        [65.52188, 65.52188],
        [65.73772, 65.73772],
        [65.95048, 65.95048],
        [66.1602, 66.1602],
        [66.36693, 66.36693],
        [66.5707, 66.5707]
      ]
    },
    "14": {
      "label": "D14",
      "values": [
        [30.7371, 30.7371],
        [29.95071, 29.95071],
        [29.16037, 29.16037],
        [28.39217, 28.39217],
        [27.66675, 27.66675],
        [27, 27],
        [26.33387, 26.33387],
        [25.71348, 25.71348],
        [25.13203, 25.13203],
        [24.58369, 24.58369],
        [24.06345, 24.06345],
        [23.56696, 23.56696],
        [23.09048, 23.09048],
        [22.63076, 22.63076],
        [22.185, 22.185],
        [21.75077, 21.75077],
        [21.32601, 21.32601],
        [20.90895, 20.90895],
        [20.49813, 20.49813],
        [20.09231, 20.09231],
        [19.69052, 19.69052],
        [19.292, 19.292],
        [18.87187, 18.87187],
        [18.43844, 18.43844],
        [17.99946, 17.99946],
        [17.56144, 17.56144],
        [17.12972, 17.12972],
        [16.70855, 16.70855],
        [16.30117, 16.30117],
        [15.90997, 15.90997],
        [15.53661, 15.53661],
        [15.18215, 15.18215],
        [14.84717, 14.84717],
        [14.53186, 14.53186],
        [14.23613, 14.23613],
        [13.95968, 13.95968],
        [13.70207, 13.70207],
        [13.46276, 13.46276],
        [13.24119, 13.24119],
        [13.03679, 13.03679],
        [12.84901, 12.84901],
        [12.6774, 12.6774],
        [12.56756, 12.56756],
        [12.4577, 12.4577],
        [12.34764, 12.34764],
        [12.2372, 12.2372],
        [12.12623, 12.12623],
        [12.01456, 12.01456],
        [11.90204, 11.90204],
        [11.78852, 11.78852],
        [11.67385, 11.67385],
        [11.55789, 11.55789],
        [11.44051, 11.44051],
        [11.32157, 11.32157],
        [11.20095, 11.20095],
        [11.07852, 11.07852],
        [10.95418, 10.95418],
        [10.82779, 10.82779],
        [10.69925, 10.69925],
        [10.56847, 10.56847],
        [10.43532, 10.43532],
        [10.29974, 10.29974],
        [10.16161, 10.16161],
        [10.02085, 10.02085],
        [9.8774, 9.8774],
        [9.73116, 9.73116],
        [9.58208, 9.58208],
        [9.43008, 9.43008],
        [9.27512, 9.27512],
        [9.11715, 9.11715],
        [8.95612, 8.95612],
        [8.792, 8.792],
        [8.67473, 8.67473],
        [8.55598, 8.55598],
        [8.43575, 8.43575],
        [8.314, 8.314],
        [8.19072, 8.19072],
        [8.06589, 8.06589],
        [7.93947, 7.93947],
        [7.81146, 7.81146],
        [7.68182, 7.68182],
        [7.55054, 7.55054],
        [7.41758, 7.41758],
        [7.28294, 7.28294],
        [7.14657, 7.14657],
        [7.00846, 7.00846],
        [6.86858, 6.86858],
        [6.7269, 6.7269],
        [6.58341, 6.58341],
        [6.43807, 6.43807],
        [6.29086, 6.29086],
        [6.14175, 6.14175],
        [5.99071, 5.99071],
        [5.83772, 5.83772],
        [5.68274, 5.68274],
        [5.52575, 5.52575],
        [5.36673, 5.36673],
        [5.20563, 5.20563],
        [5.04244, 5.04244],
        [4.87711, 4.87711],
        [4.70963, 4.70963],
        [4.53995, 4.53995],
        [4.36806, 4.36806],
        [4.1939, 4.1939],
        [4.01746, 4.01746],
        [3.8387, 3.8387],
        [3.65759, 3.65759],
        [3.47409, 3.47409],
        [3.28817, 3.28817],
        [3.09979, 3.09979],
        [2.90892, 2.90892],
        [2.71553, 2.71553],
        [2.51957, 2.51957],
        [2.32101, 2.32101],
        [2.11981, 2.11981],
        [1.91593, 1.91593],
        [1.70934, 1.70934],
        [1.5, 1.5]
      ]
    },
    "25": {
      "label": "D25",
      "values": [
        [7.4142, 7.4142],
        [7.21052, 7.21052],
        [6.97347, 6.97347],
        [6.72683, 6.72683],
        [6.49441, 6.49441],
        [6.3, 6.3],
        [6.1217, 6.1217],
        [5.95222, 5.95222],
        [5.79093, 5.79093],
        [5.63719, 5.63719],
        [5.49036, 5.49036],
        [5.34982, 5.34982],
        [5.21492, 5.21492],
        [5.08503, 5.08503],
        [4.95952, 4.95952],
        [4.83775, 4.83775],
        [4.71907, 4.71907],
        [4.60287, 4.60287],
        [4.48849, 4.48849],
        [4.37531, 4.37531],
        [4.26269, 4.26269],
        [4.15, 4.15],
        [4.03229, 4.03229],
        [3.91311, 3.91311],
        [3.79302, 3.79302],
        [3.67259, 3.67259],
        [3.55239, 3.55239],
        [3.43297, 3.43297],
        [3.31491, 3.31491],
        [3.19877, 3.19877],
        [3.0851, 3.0851],
        [2.97448, 2.97448],
        [2.86746, 2.86746],
        [2.76462, 2.76462],
        [2.66652, 2.66652],
        [2.57371, 2.57371],
        [2.48678, 2.48678],
        [2.40627, 2.40627],
        [2.33275, 2.33275],
        [2.26679, 2.26679],
        [2.20895, 2.20895],
        [2.1598, 2.1598],
        [2.13057, 2.13057],
        [2.10273, 2.10273],
        [2.07622, 2.07622],
        [2.05096, 2.05096],
        [2.02687, 2.02687],
        [2.00387, 2.00387],
        [1.98189, 1.98189],
        [1.96085, 1.96085],
        [1.94068, 1.94068],
        [1.92129, 1.92129],
        [1.90262, 1.90262],
        [1.88458, 1.88458],
        [1.8671, 1.8671],
        [1.85009, 1.85009],
        [1.8335, 1.8335],
        [1.81723, 1.81723],
        [1.80121, 1.80121],
        [1.78537, 1.78537],
        [1.76963, 1.76963],
        [1.7539, 1.7539],
        [1.73812, 1.73812],
        [1.72222, 1.72222],
        [1.7061, 1.7061],
        [1.68969, 1.68969],
        [1.67293, 1.67293],
        [1.65573, 1.65573],
        [1.63801, 1.63801],
        [1.6197, 1.6197],
        [1.60072, 1.60072],
        [1.581, 1.581],
        [1.56683, 1.56683],
        [1.55264, 1.55264],
        [1.53841, 1.53841],
        [1.52416, 1.52416],
        [1.50987, 1.50987],
        [1.49556, 1.49556],
        [1.48122, 1.48122],
        [1.46685, 1.46685],
        [1.45245, 1.45245],
        [1.43803, 1.43803],
        [1.42358, 1.42358],
        [1.40909, 1.40909],
        [1.39458, 1.39458],
        [1.38004, 1.38004],
        [1.36547, 1.36547],
        [1.35088, 1.35088],
        [1.33625, 1.33625],
        [1.3216, 1.3216],
        [1.30692, 1.30692],
        [1.29221, 1.29221],
        [1.27748, 1.27748],
        [1.26271, 1.26271],
        [1.24792, 1.24792],
        [1.2331, 1.2331],
        [1.21825, 1.21825],
        [1.20337, 1.20337],
        [1.18847, 1.18847],
        [1.17353, 1.17353],
        [1.15857, 1.15857],
        [1.14358, 1.14358],
        [1.12857, 1.12857],
        [1.11352, 1.11352],
        [1.09845, 1.09845],
        [1.08335, 1.08335],
        [1.06822, 1.06822],
        [1.05307, 1.05307],
        [1.03788, 1.03788],
        [1.02267, 1.02267],
        [1.00744, 1.00744],
        [0.99217, 0.99217],
        [0.97688, 0.97688],
        [0.96156, 0.96156],
        [0.94621, 0.94621],
        [0.93083, 0.93083],
        [0.91543, 0.91543],
        [0.9, 0.9]
      ]
    },
    "31": {
      "label": "Printed image gap",
      "values": [
        [39.055, 39.055],
        [39.89738, 39.89738],
        [40.79333, 40.79333],
        [41.71325, 41.71325],
        [42.62754, 42.62754],
        [43.5066, 43.5066],
        [44.42282, 44.42282],
        [45.31374, 45.31374],
        [46.18361, 46.18361],
        [47.03669, 47.03669],
        [47.87719, 47.87719],
        [48.70938, 48.70938],
        [49.53748, 49.53748],
        [50.36573, 50.36573],
        [51.19836, 51.19836],
        [52.03963, 52.03963],
        [52.89376, 52.89376],
        [53.76501, 53.76501],
        [54.65757, 54.65757],
        [55.57574, 55.57574],
        [56.52371, 56.52371],
        [57.5057, 57.5057],
        [58.59923, 58.59923],
        [59.80027, 59.80027],
        [61.09321, 61.09321],
        [62.46247, 62.46247],
        [63.89249, 63.89249],
        [65.36763, 65.36763],
        [66.87232, 66.87232],
        [68.39098, 68.39098],
        [69.908, 69.908],
        [71.40779, 71.40779],
        [72.87474, 72.87474],
        [74.29327, 74.29327],
        [75.6478, 75.6478],
        [76.92273, 76.92273],
        [78.10245, 78.10245],
        [79.17142, 79.17142],
        [80.11398, 80.11398],
        [80.91454, 80.91454],
        [81.55758, 81.55758],
        [82.0274, 82.0274],
        [82.27419, 82.27419],
        [82.50739, 82.50739],
        [82.72773, 82.72773],
        [82.93602, 82.93602],
        [83.13289, 83.13289],
        [83.31914, 83.31914],
        [83.49548, 83.49548],
        [83.66266, 83.66266],
        [83.82143, 83.82143],
        [83.97256, 83.97256],
        [84.11673, 84.11673],
        [84.25474, 84.25474],
        [84.38728, 84.38728],
        [84.51515, 84.51515],
        [84.63896, 84.63896],
        [84.75963, 84.75963],
        [84.87783, 84.87783],
        [84.99419, 84.99419],
        [85.10967, 85.10967],
        [85.22477, 85.22477],
        [85.34041, 85.34041],
        [85.45731, 85.45731],
        [85.57605, 85.57605],
        [85.69759, 85.69759],
        [85.8225, 85.8225],
        [85.95168, 85.95168],
        [86.08574, 86.08574],
        [86.22542, 86.22542],
        [86.37153, 86.37153],
        [86.5248, 86.5248],
        [86.63537, 86.63537],
        [86.74627, 86.74627],
        [86.85736, 86.85736],
        [86.96876, 86.96876],
        [87.0804, 87.0804],
        [87.19225, 87.19225],
        [87.30441, 87.30441],
        [87.41678, 87.41678],
        [87.52944, 87.52944],
        [87.64229, 87.64229],
        [87.75545, 87.75545],
        [87.86878, 87.86878],
        [87.98242, 87.98242],
        [88.09629, 88.09629],
        [88.21041, 88.21041],
        [88.32481, 88.32481],
        [88.43941, 88.43941],
        [88.55429, 88.55429],
        [88.66939, 88.66939],
        [88.7847, 88.7847],
        [88.90032, 88.90032],
        [89.01617, 89.01617],
        [89.1323, 89.1323],
        [89.24864, 89.24864],
        [89.36516, 89.36516],
        [89.48205, 89.48205],
        [89.59906, 89.59906],
        [89.71642, 89.71642],
        [89.83395, 89.83395],
        [89.95176, 89.95176],
        [90.06974, 90.06974],
        [90.18811, 90.18811],
        [90.30663, 90.30663],
        [90.42536, 90.42536],
        [90.54435, 90.54435],
        [90.66363, 90.66363],
        [90.78312, 90.78312],
        [90.90283, 90.90283],
        [91.02278, 91.02278],
        [91.14297, 91.14297],
        [91.26342, 91.26342],
        [91.38411, 91.38411],
        [91.50503, 91.50503],
        [91.62623, 91.62623],
        [91.74758, 91.74758],
        [91.8692, 91.8692]
      ]
    }
  },
  "aperture": {
    "fStops": [
      3.44,
      4,
      5.6,
      6.03,
      6.5,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22,
    "blades": 7
  },
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "5"
    },
    {
      "text": "G2",
      "fromSurface": "6A",
      "toSurface": "14"
    },
    {
      "text": "G3",
      "fromSurface": "16",
      "toSurface": "25"
    },
    {
      "text": "G4",
      "fromSurface": "26A",
      "toSurface": "31"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "1",
      "toSurface": "3"
    },
    {
      "text": "H1",
      "fromSurface": "6A",
      "toSurface": "8"
    },
    {
      "text": "D3",
      "fromSurface": "20",
      "toSurface": "22"
    },
    {
      "text": "D4",
      "fromSurface": "23A",
      "toSurface": "25"
    }
  ],
  "layout": {
    "scFill": 0.6,
    "yScFill": 0.6
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
