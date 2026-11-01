import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "tamron-18-270mm-f35-63-di-ii-vc-pzd-b008",
  "maker": "Tamron",
  "name": "TAMRON 18-270mm f/3.5-6.3 DI II VC PZD (B008)",
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
        "focalLengthMm": 18.87568022079367,
        "nominalFNumber": 3.4658999999999995
      },
      {
        "published": false,
        "focalLengthMm": 19.253666450637276,
        "nominalFNumber": 3.4918
      },
      {
        "published": false,
        "focalLengthMm": 19.63442134433457,
        "nominalFNumber": 3.5176999999999996
      },
      {
        "published": false,
        "focalLengthMm": 20.017943632593983,
        "nominalFNumber": 3.5436
      },
      {
        "published": false,
        "focalLengthMm": 20.404232580179375,
        "nominalFNumber": 3.5694999999999997
      },
      {
        "published": false,
        "focalLengthMm": 20.793287971833305,
        "nominalFNumber": 3.5953999999999997
      },
      {
        "published": false,
        "focalLengthMm": 21.185110098579802,
        "nominalFNumber": 3.6212999999999997
      },
      {
        "published": false,
        "focalLengthMm": 21.579699744954556,
        "nominalFNumber": 3.6472
      },
      {
        "published": false,
        "focalLengthMm": 21.977058176768587,
        "nominalFNumber": 3.6731
      },
      {
        "published": false,
        "focalLengthMm": 22.377187129497635,
        "nominalFNumber": 3.6990000000000003
      },
      {
        "published": false,
        "focalLengthMm": 22.780088797249768,
        "nominalFNumber": 3.7249
      },
      {
        "published": false,
        "focalLengthMm": 23.18576582228355,
        "nominalFNumber": 3.7508
      },
      {
        "published": false,
        "focalLengthMm": 23.594221285050793,
        "nominalFNumber": 3.7767
      },
      {
        "published": false,
        "focalLengthMm": 24.00545869474051,
        "nominalFNumber": 3.8026
      },
      {
        "published": false,
        "focalLengthMm": 24.419481980299572,
        "nominalFNumber": 3.8285
      },
      {
        "published": false,
        "focalLengthMm": 24.836295481910895,
        "nominalFNumber": 3.8544
      },
      {
        "published": false,
        "focalLengthMm": 25.25590394290752,
        "nominalFNumber": 3.8803
      },
      {
        "published": false,
        "focalLengthMm": 25.678312501995723,
        "nominalFNumber": 3.9062
      },
      {
        "published": false,
        "focalLengthMm": 26.103526686264345,
        "nominalFNumber": 3.9321
      },
      {
        "published": false,
        "focalLengthMm": 26.531552403954922,
        "nominalFNumber": 3.958
      },
      {
        "published": false,
        "focalLengthMm": 26.962395938111836,
        "nominalFNumber": 3.9839
      },
      {
        "published": false,
        "focalLengthMm": 27.396063940359333,
        "nominalFNumber": 4.0098
      },
      {
        "published": false,
        "focalLengthMm": 27.832563425051273,
        "nominalFNumber": 4.0357
      },
      {
        "published": false,
        "focalLengthMm": 28.271901763741088,
        "nominalFNumber": 4.0616
      },
      {
        "published": false,
        "focalLengthMm": 28.714086679959344,
        "nominalFNumber": 4.0875
      },
      {
        "published": false,
        "focalLengthMm": 29.159126244285794,
        "nominalFNumber": 4.1134
      },
      {
        "published": false,
        "focalLengthMm": 29.607028869705275,
        "nominalFNumber": 4.1393
      },
      {
        "published": false,
        "focalLengthMm": 30.05780330723617,
        "nominalFNumber": 4.1652000000000005
      },
      {
        "published": false,
        "focalLengthMm": 30.511458641820614,
        "nominalFNumber": 4.1911
      },
      {
        "published": false,
        "focalLengthMm": 30.96800428846761,
        "nominalFNumber": 4.217
      },
      {
        "published": false,
        "focalLengthMm": 31.4274499886389,
        "nominalFNumber": 4.2429
      },
      {
        "published": false,
        "focalLengthMm": 31.88980580686965,
        "nominalFNumber": 4.268800000000001
      },
      {
        "published": false,
        "focalLengthMm": 32.355082127614374,
        "nominalFNumber": 4.2947
      },
      {
        "published": false,
        "focalLengthMm": 32.823289652312845,
        "nominalFNumber": 4.3206
      },
      {
        "published": false,
        "focalLengthMm": 33.29443939666482,
        "nominalFNumber": 4.346500000000001
      },
      {
        "published": false,
        "focalLengthMm": 33.76854268811031,
        "nominalFNumber": 4.3724
      },
      {
        "published": false,
        "focalLengthMm": 34.245611163506574,
        "nominalFNumber": 4.3983
      },
      {
        "published": false,
        "focalLengthMm": 34.72565676699589,
        "nominalFNumber": 4.424200000000001
      },
      {
        "published": false,
        "focalLengthMm": 35.20869174805929,
        "nominalFNumber": 4.4501
      },
      {
        "published": false,
        "focalLengthMm": 35.6947286597491,
        "nominalFNumber": 4.476000000000001
      },
      {
        "published": false,
        "focalLengthMm": 36.18378035709621,
        "nominalFNumber": 4.501900000000001
      },
      {
        "published": false,
        "focalLengthMm": 36.6758599956869,
        "nominalFNumber": 4.5278
      },
      {
        "published": false,
        "focalLengthMm": 37.17098103040391,
        "nominalFNumber": 4.5537
      },
      {
        "published": false,
        "focalLengthMm": 37.66915721432794,
        "nominalFNumber": 4.5796
      },
      {
        "published": false,
        "focalLengthMm": 38.17040259779587,
        "nominalFNumber": 4.6055
      },
      {
        "published": false,
        "focalLengthMm": 38.67473152761014,
        "nominalFNumber": 4.6314
      },
      {
        "published": false,
        "focalLengthMm": 39.18215864639749,
        "nominalFNumber": 4.6573
      },
      {
        "published": false,
        "focalLengthMm": 39.69269889211268,
        "nominalFNumber": 4.6832
      },
      {
        "published": false,
        "focalLengthMm": 40.206367497683125,
        "nominalFNumber": 4.709099999999999
      },
      {
        "published": false,
        "focalLengthMm": 40.72317999079373,
        "nominalFNumber": 4.735
      },
      {
        "published": false,
        "focalLengthMm": 41.24315219380708,
        "nominalFNumber": 4.7609
      },
      {
        "published": false,
        "focalLengthMm": 41.766300223815875,
        "nominalFNumber": 4.7868
      },
      {
        "published": false,
        "focalLengthMm": 42.2926404928277,
        "nominalFNumber": 4.8127
      },
      {
        "published": false,
        "focalLengthMm": 42.82218970807776,
        "nominalFNumber": 4.8386
      },
      {
        "published": false,
        "focalLengthMm": 43.35496487246717,
        "nominalFNumber": 4.8645000000000005
      },
      {
        "published": false,
        "focalLengthMm": 43.89098328512646,
        "nominalFNumber": 4.8904
      },
      {
        "published": false,
        "focalLengthMm": 44.43026254210151,
        "nominalFNumber": 4.9163
      },
      {
        "published": false,
        "focalLengthMm": 44.972820537159365,
        "nominalFNumber": 4.9422
      },
      {
        "published": false,
        "focalLengthMm": 45.51867546271491,
        "nominalFNumber": 4.9681
      },
      {
        "published": false,
        "focalLengthMm": 46.06784581087373,
        "nominalFNumber": 4.994
      },
      {
        "published": false,
        "focalLengthMm": 46.62035037459278,
        "nominalFNumber": 5.0199
      },
      {
        "published": false,
        "focalLengthMm": 47.17620824895541,
        "nominalFNumber": 5.0458
      },
      {
        "published": false,
        "focalLengthMm": 47.73543883256201,
        "nominalFNumber": 5.0717
      },
      {
        "published": false,
        "focalLengthMm": 48.29806182903299,
        "nominalFNumber": 5.0976
      },
      {
        "published": false,
        "focalLengthMm": 48.8640972486254,
        "nominalFNumber": 5.1235
      },
      {
        "published": false,
        "focalLengthMm": 49.43356540996056,
        "nominalFNumber": 5.1494
      },
      {
        "published": false,
        "focalLengthMm": 50.0064869418648,
        "nominalFNumber": 5.1753
      },
      {
        "published": false,
        "focalLengthMm": 50.58288278531894,
        "nominalFNumber": 5.2012
      },
      {
        "published": false,
        "focalLengthMm": 51.16277419552086,
        "nominalFNumber": 5.2271
      },
      {
        "published": false,
        "focalLengthMm": 51.746182744057194,
        "nominalFNumber": 5.253
      },
      {
        "published": false,
        "focalLengthMm": 52.3331303211847,
        "nominalFNumber": 5.2789
      },
      {
        "published": false,
        "focalLengthMm": 52.923639138224466,
        "nominalFNumber": 5.3048
      },
      {
        "published": false,
        "focalLengthMm": 53.5177317301088,
        "nominalFNumber": 5.3307
      },
      {
        "published": false,
        "focalLengthMm": 54.115430957779864,
        "nominalFNumber": 5.3566
      },
      {
        "published": false,
        "focalLengthMm": 54.71676001131231,
        "nominalFNumber": 5.3825
      },
      {
        "published": false,
        "focalLengthMm": 55.3217424124,
        "nominalFNumber": 5.4084
      },
      {
        "published": false,
        "focalLengthMm": 55.930402017434126,
        "nominalFNumber": 5.4343
      },
      {
        "published": false,
        "focalLengthMm": 56.54276302055584,
        "nominalFNumber": 5.4602
      },
      {
        "published": false,
        "focalLengthMm": 57.15884995693147,
        "nominalFNumber": 5.4860999999999995
      },
      {
        "published": false,
        "focalLengthMm": 57.778687705507046,
        "nominalFNumber": 5.5120000000000005
      },
      {
        "published": false,
        "focalLengthMm": 58.402301493467135,
        "nominalFNumber": 5.5379000000000005
      },
      {
        "published": false,
        "focalLengthMm": 59.029716898690495,
        "nominalFNumber": 5.5638000000000005
      },
      {
        "published": false,
        "focalLengthMm": 59.66095985391104,
        "nominalFNumber": 5.589700000000001
      },
      {
        "published": false,
        "focalLengthMm": 60.29605665036206,
        "nominalFNumber": 5.6156
      },
      {
        "published": false,
        "focalLengthMm": 60.93503394164095,
        "nominalFNumber": 5.6415
      },
      {
        "published": false,
        "focalLengthMm": 61.57791874769827,
        "nominalFNumber": 5.667400000000001
      },
      {
        "published": false,
        "focalLengthMm": 62.22473845894579,
        "nominalFNumber": 5.6933
      },
      {
        "published": false,
        "focalLengthMm": 62.87552084048675,
        "nominalFNumber": 5.7192
      },
      {
        "published": false,
        "focalLengthMm": 63.530294036472,
        "nominalFNumber": 5.745100000000001
      },
      {
        "published": false,
        "focalLengthMm": 64.18908657458076,
        "nominalFNumber": 5.771000000000001
      },
      {
        "published": false,
        "focalLengthMm": 64.85192737063012,
        "nominalFNumber": 5.7969
      },
      {
        "published": false,
        "focalLengthMm": 65.51884573331286,
        "nominalFNumber": 5.8228
      },
      {
        "published": false,
        "focalLengthMm": 66.18987136906755,
        "nominalFNumber": 5.848700000000001
      },
      {
        "published": false,
        "focalLengthMm": 66.8650343870824,
        "nominalFNumber": 5.8746
      },
      {
        "published": false,
        "focalLengthMm": 67.54436530443493,
        "nominalFNumber": 5.900500000000001
      },
      {
        "published": false,
        "focalLengthMm": 68.22789505146466,
        "nominalFNumber": 5.9264
      },
      {
        "published": false,
        "focalLengthMm": 68.91565497671789,
        "nominalFNumber": 5.9523
      },
      {
        "published": false,
        "focalLengthMm": 69.60767685342445,
        "nominalFNumber": 5.9782
      },
      {
        "published": false,
        "focalLengthMm": 70.30399288433857,
        "nominalFNumber": 6.0041
      },
      {
        "focalLengthMm": 71,
        "nominalFNumber": 6.03,
        "published": true
      },
      {
        "published": false,
        "focalLengthMm": 71.51630369133375,
        "nominalFNumber": 6.034700000000001
      },
      {
        "published": false,
        "focalLengthMm": 72.0342415262788,
        "nominalFNumber": 6.0394
      },
      {
        "published": false,
        "focalLengthMm": 72.55857405880661,
        "nominalFNumber": 6.0441
      },
      {
        "published": false,
        "focalLengthMm": 73.08942971742667,
        "nominalFNumber": 6.0488
      },
      {
        "published": false,
        "focalLengthMm": 73.62694065053321,
        "nominalFNumber": 6.0535000000000005
      },
      {
        "published": false,
        "focalLengthMm": 74.1712428702303,
        "nominalFNumber": 6.0582
      },
      {
        "published": false,
        "focalLengthMm": 74.72247640394802,
        "nominalFNumber": 6.0629
      },
      {
        "published": false,
        "focalLengthMm": 75.28078545251078,
        "nominalFNumber": 6.0676000000000005
      },
      {
        "published": false,
        "focalLengthMm": 75.84631855700073,
        "nominalFNumber": 6.0723
      },
      {
        "published": false,
        "focalLengthMm": 76.41922877372477,
        "nominalFNumber": 6.077
      },
      {
        "published": false,
        "focalLengthMm": 76.99967385820962,
        "nominalFNumber": 6.0817000000000005
      },
      {
        "published": false,
        "focalLengthMm": 77.58781645873567,
        "nominalFNumber": 6.086400000000001
      },
      {
        "published": false,
        "focalLengthMm": 78.18382432000783,
        "nominalFNumber": 6.091100000000001
      },
      {
        "published": false,
        "focalLengthMm": 78.78787049761982,
        "nominalFNumber": 6.0958
      },
      {
        "published": false,
        "focalLengthMm": 79.40013358400722,
        "nominalFNumber": 6.1005
      },
      {
        "published": false,
        "focalLengthMm": 80.02079794664698,
        "nominalFNumber": 6.1052
      },
      {
        "published": false,
        "focalLengthMm": 80.65005397931428,
        "nominalFNumber": 6.1099000000000006
      },
      {
        "published": false,
        "focalLengthMm": 81.28809836727717,
        "nominalFNumber": 6.114599999999999
      },
      {
        "published": false,
        "focalLengthMm": 81.93513436737271,
        "nominalFNumber": 6.1193
      },
      {
        "published": false,
        "focalLengthMm": 82.59137210399348,
        "nominalFNumber": 6.1240000000000006
      },
      {
        "published": false,
        "focalLengthMm": 83.25702888209022,
        "nominalFNumber": 6.1287
      },
      {
        "published": false,
        "focalLengthMm": 83.93232951839197,
        "nominalFNumber": 6.1334
      },
      {
        "published": false,
        "focalLengthMm": 84.61750669214751,
        "nominalFNumber": 6.1381000000000006
      },
      {
        "published": false,
        "focalLengthMm": 85.31280131679767,
        "nominalFNumber": 6.142800000000001
      },
      {
        "published": false,
        "focalLengthMm": 86.01846293411558,
        "nominalFNumber": 6.1475
      },
      {
        "published": false,
        "focalLengthMm": 86.7347501324817,
        "nominalFNumber": 6.152200000000001
      },
      {
        "published": false,
        "focalLengthMm": 87.46193099111481,
        "nominalFNumber": 6.1569
      },
      {
        "published": false,
        "focalLengthMm": 88.20028355223207,
        "nominalFNumber": 6.1616
      },
      {
        "published": false,
        "focalLengthMm": 88.95009632330719,
        "nominalFNumber": 6.1663
      },
      {
        "published": false,
        "focalLengthMm": 89.71166881177815,
        "nominalFNumber": 6.171
      },
      {
        "published": false,
        "focalLengthMm": 90.48531209479528,
        "nominalFNumber": 6.175700000000001
      },
      {
        "published": false,
        "focalLengthMm": 91.27134942682767,
        "nominalFNumber": 6.180400000000001
      },
      {
        "published": false,
        "focalLengthMm": 92.0701168880383,
        "nominalFNumber": 6.1851
      },
      {
        "published": false,
        "focalLengthMm": 92.8819640778904,
        "nominalFNumber": 6.1898
      },
      {
        "published": false,
        "focalLengthMm": 93.70725485528371,
        "nominalFNumber": 6.1945
      },
      {
        "published": false,
        "focalLengthMm": 94.54636813236003,
        "nominalFNumber": 6.1992
      },
      {
        "published": false,
        "focalLengthMm": 95.39969872440344,
        "nominalFNumber": 6.203900000000001
      },
      {
        "published": false,
        "focalLengthMm": 96.26765826163937,
        "nominalFNumber": 6.208600000000001
      },
      {
        "published": false,
        "focalLengthMm": 97.15067616835653,
        "nominalFNumber": 6.2133
      },
      {
        "published": false,
        "focalLengthMm": 98.04920071548241,
        "nominalFNumber": 6.218
      },
      {
        "published": false,
        "focalLengthMm": 98.96370015342826,
        "nominalFNumber": 6.2227
      },
      {
        "published": false,
        "focalLengthMm": 99.89466393276957,
        "nominalFNumber": 6.2274
      },
      {
        "published": false,
        "focalLengthMm": 100.8426040211771,
        "nominalFNumber": 6.2321
      },
      {
        "published": false,
        "focalLengthMm": 101.8080563259983,
        "nominalFNumber": 6.2368
      },
      {
        "published": false,
        "focalLengthMm": 102.79158223297081,
        "nominalFNumber": 6.2415
      },
      {
        "published": false,
        "focalLengthMm": 103.79377027281514,
        "nominalFNumber": 6.2462
      },
      {
        "published": false,
        "focalLengthMm": 104.8152379288659,
        "nominalFNumber": 6.2509
      },
      {
        "published": false,
        "focalLengthMm": 105.85663360053904,
        "nominalFNumber": 6.2556
      },
      {
        "published": false,
        "focalLengthMm": 106.91863873929783,
        "nominalFNumber": 6.260300000000001
      },
      {
        "published": false,
        "focalLengthMm": 108.00197017591596,
        "nominalFNumber": 6.265000000000001
      },
      {
        "published": false,
        "focalLengthMm": 109.10738266030458,
        "nominalFNumber": 6.2697
      },
      {
        "published": false,
        "focalLengthMm": 110.23567163801927,
        "nominalFNumber": 6.2744
      },
      {
        "published": false,
        "focalLengthMm": 111.38767629085609,
        "nominalFNumber": 6.2791
      },
      {
        "published": false,
        "focalLengthMm": 112.56428287276482,
        "nominalFNumber": 6.2838
      },
      {
        "published": false,
        "focalLengthMm": 113.76642837676586,
        "nominalFNumber": 6.2885
      },
      {
        "published": false,
        "focalLengthMm": 114.99510457376077,
        "nominalFNumber": 6.293200000000001
      },
      {
        "published": false,
        "focalLengthMm": 116.2513624702069,
        "nominalFNumber": 6.2979
      },
      {
        "published": false,
        "focalLengthMm": 117.53631723881297,
        "nominalFNumber": 6.3026
      },
      {
        "published": false,
        "focalLengthMm": 118.85115368485481,
        "nominalFNumber": 6.3073
      },
      {
        "published": false,
        "focalLengthMm": 120.19713232073055,
        "nominalFNumber": 6.311999999999999
      },
      {
        "published": false,
        "focalLengthMm": 121.57559613329347,
        "nominalFNumber": 6.316700000000001
      },
      {
        "published": false,
        "focalLengthMm": 122.98797814271398,
        "nominalFNumber": 6.321400000000001
      },
      {
        "published": false,
        "focalLengthMm": 124.43580986868795,
        "nominalFNumber": 6.326099999999999
      },
      {
        "published": false,
        "focalLengthMm": 125.92073084033919,
        "nominalFNumber": 6.3308
      },
      {
        "published": false,
        "focalLengthMm": 127.44449931104555,
        "nominalFNumber": 6.3355
      },
      {
        "published": false,
        "focalLengthMm": 129.00900436964463,
        "nominalFNumber": 6.340199999999999
      },
      {
        "published": false,
        "focalLengthMm": 130.61627967646604,
        "nominalFNumber": 6.3449
      },
      {
        "published": false,
        "focalLengthMm": 132.2685190980974,
        "nominalFNumber": 6.349600000000001
      },
      {
        "published": false,
        "focalLengthMm": 133.96809457102714,
        "nominalFNumber": 6.3543
      },
      {
        "published": false,
        "focalLengthMm": 135.7175765942866,
        "nominalFNumber": 6.359
      },
      {
        "published": false,
        "focalLengthMm": 137.51975783887156,
        "nominalFNumber": 6.363700000000001
      },
      {
        "published": false,
        "focalLengthMm": 139.37768047231816,
        "nominalFNumber": 6.368399999999999
      },
      {
        "published": false,
        "focalLengthMm": 141.2946679373319,
        "nominalFNumber": 6.3731
      },
      {
        "published": false,
        "focalLengthMm": 143.27436210343677,
        "nominalFNumber": 6.3778
      },
      {
        "published": false,
        "focalLengthMm": 145.32076694319687,
        "nominalFNumber": 6.3825
      },
      {
        "published": false,
        "focalLengthMm": 147.43830018785442,
        "nominalFNumber": 6.3872
      },
      {
        "published": false,
        "focalLengthMm": 149.63185481651757,
        "nominalFNumber": 6.3919
      },
      {
        "published": false,
        "focalLengthMm": 151.9068727643112,
        "nominalFNumber": 6.3966
      },
      {
        "published": false,
        "focalLengthMm": 154.26943394989217,
        "nominalFNumber": 6.401299999999999
      },
      {
        "published": false,
        "focalLengthMm": 156.72636469689851,
        "nominalFNumber": 6.406
      },
      {
        "published": false,
        "focalLengthMm": 159.28537096912368,
        "nominalFNumber": 6.4107
      },
      {
        "published": false,
        "focalLengthMm": 161.95520372427012,
        "nominalFNumber": 6.4154
      },
      {
        "published": false,
        "focalLengthMm": 164.74586637539298,
        "nominalFNumber": 6.4201
      },
      {
        "published": false,
        "focalLengthMm": 167.6688782398395,
        "nominalFNumber": 6.4248
      },
      {
        "published": false,
        "focalLengthMm": 170.7376136062056,
        "nominalFNumber": 6.4295
      },
      {
        "published": false,
        "focalLengthMm": 173.9677447376227,
        "nominalFNumber": 6.434200000000001
      },
      {
        "published": false,
        "focalLengthMm": 177.37783057929434,
        "nominalFNumber": 6.4389
      },
      {
        "published": false,
        "focalLengthMm": 180.99011434264622,
        "nominalFNumber": 6.4436
      },
      {
        "published": false,
        "focalLengthMm": 184.83162829025264,
        "nominalFNumber": 6.4483
      },
      {
        "published": false,
        "focalLengthMm": 188.93576389808302,
        "nominalFNumber": 6.453
      },
      {
        "published": false,
        "focalLengthMm": 193.34457185254087,
        "nominalFNumber": 6.4577
      },
      {
        "published": false,
        "focalLengthMm": 198.11225463949708,
        "nominalFNumber": 6.4624
      },
      {
        "published": false,
        "focalLengthMm": 203.31070706893615,
        "nominalFNumber": 6.4671
      },
      {
        "published": false,
        "focalLengthMm": 209.03879572980406,
        "nominalFNumber": 6.4718
      },
      {
        "published": false,
        "focalLengthMm": 215.43901655542757,
        "nominalFNumber": 6.4765
      },
      {
        "published": false,
        "focalLengthMm": 222.73028224272426,
        "nominalFNumber": 6.4812
      },
      {
        "published": false,
        "focalLengthMm": 231.2813688201091,
        "nominalFNumber": 6.4859
      },
      {
        "published": false,
        "focalLengthMm": 241.81151259314518,
        "nominalFNumber": 6.490600000000001
      },
      {
        "published": false,
        "focalLengthMm": 256.175681000553,
        "nominalFNumber": 6.495299999999999
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
        [
          1.6998,
          1.6998
        ],
        [
          2.2220438755718983,
          2.2220438755718983
        ],
        [
          2.733601256605017,
          2.733601256605017
        ],
        [
          3.2348656034923726,
          3.2348656034923726
        ],
        [
          3.726211387612503,
          3.726211387612503
        ],
        [
          4.207995225018424,
          4.207995225018424
        ],
        [
          4.680556930048645,
          4.680556930048645
        ],
        [
          5.144220494835404,
          5.144220494835404
        ],
        [
          5.599295001284818,
          5.599295001284818
        ],
        [
          6.046075470561801,
          6.046075470561801
        ],
        [
          6.484843655135151,
          6.484843655135151
        ],
        [
          6.915868777849927,
          6.915868777849927
        ],
        [
          7.33940822211669,
          7.33940822211669
        ],
        [
          7.755708176950732,
          7.755708176950732
        ],
        [
          8.165004240272424,
          8.165004240272424
        ],
        [
          8.567521983586794,
          8.567521983586794
        ],
        [
          8.963477480899858,
          8.963477480899858
        ],
        [
          9.353077804486887,
          9.353077804486887
        ],
        [
          9.73652148983644,
          9.73652148983644
        ],
        [
          10.113998972331132,
          10.113998972331132
        ],
        [
          10.485692996957741,
          10.485692996957741
        ],
        [
          10.851779003736258,
          10.851779003736258
        ],
        [
          11.212425490043364,
          11.212425490043364
        ],
        [
          11.56779435159995,
          11.56779435159995
        ],
        [
          11.918041203550525,
          11.918041203550525
        ],
        [
          12.263315682978753,
          12.263315682978753
        ],
        [
          12.60376173409938,
          12.60376173409938
        ],
        [
          12.939517877274646,
          12.939517877274646
        ],
        [
          13.270717462915881,
          13.270717462915881
        ],
        [
          13.597488911252338,
          13.597488911252338
        ],
        [
          13.919955938877896,
          13.919955938877896
        ],
        [
          14.238237772918612,
          14.238237772918612
        ],
        [
          14.552449353604205,
          14.552449353604205
        ],
        [
          14.862701525969545,
          14.862701525969545
        ],
        [
          15.1691012213621,
          15.1691012213621
        ],
        [
          15.471751629381327,
          15.471751629381327
        ],
        [
          15.770752360835179,
          15.770752360835179
        ],
        [
          16.066199602256486,
          16.066199602256486
        ],
        [
          16.358186262484963,
          16.358186262484963
        ],
        [
          16.646802111787327,
          16.646802111787327
        ],
        [
          16.932133913954843,
          16.932133913954843
        ],
        [
          17.214265551789016,
          17.214265551789016
        ],
        [
          17.49327814635895,
          17.49327814635895
        ],
        [
          17.769250170387966,
          17.769250170387966
        ],
        [
          18.04225755610493,
          18.04225755610493
        ],
        [
          18.312373797872926,
          18.312373797872926
        ],
        [
          18.579670049888364,
          18.579670049888364
        ],
        [
          18.84421521922514,
          18.84421521922514
        ],
        [
          19.106076054480962,
          19.106076054480962
        ],
        [
          19.365317230266125,
          19.365317230266125
        ],
        [
          19.622001427761887,
          19.622001427761887
        ],
        [
          19.876189411559704,
          19.876189411559704
        ],
        [
          20.1279401029802,
          20.1279401029802
        ],
        [
          20.3773106500598,
          20.3773106500598
        ],
        [
          20.62435649438006,
          20.62435649438006
        ],
        [
          20.869131434904936,
          20.869131434904936
        ],
        [
          21.111687688981668,
          21.111687688981668
        ],
        [
          21.3520759506516,
          21.3520759506516
        ],
        [
          21.590345446407966,
          21.590345446407966
        ],
        [
          21.826543988531522,
          21.826543988531522
        ],
        [
          22.060718026124917,
          22.060718026124917
        ],
        [
          22.292912693962247,
          22.292912693962247
        ],
        [
          22.523171859261446,
          22.523171859261446
        ],
        [
          22.751538166482906,
          22.751538166482906
        ],
        [
          22.97805308025067,
          22.97805308025067
        ],
        [
          23.202756926487734,
          23.202756926487734
        ],
        [
          23.42568893185172,
          23.42568893185172
        ],
        [
          23.64688726155299,
          23.64688726155299
        ],
        [
          23.866389055631636,
          23.866389055631636
        ],
        [
          24.08423046376726,
          24.08423046376726
        ],
        [
          24.30044667868985,
          24.30044667868985
        ],
        [
          24.515071968257516,
          24.515071968257516
        ],
        [
          24.728139706263292,
          24.728139706263292
        ],
        [
          24.939682402038777,
          24.939682402038777
        ],
        [
          25.14973172884408,
          25.14973172884408
        ],
        [
          25.358318551288065,
          25.358318551288065
        ],
        [
          25.565472951530086,
          25.565472951530086
        ],
        [
          25.77122425458066,
          25.77122425458066
        ],
        [
          25.97560105260981,
          25.97560105260981
        ],
        [
          26.17863122835813,
          26.17863122835813
        ],
        [
          26.380341977544223,
          26.380341977544223
        ],
        [
          26.580759830745873,
          26.580759830745873
        ],
        [
          26.77991067405999,
          26.77991067405999
        ],
        [
          26.97781976930765,
          26.97781976930765
        ],
        [
          27.17451177337834,
          27.17451177337834
        ],
        [
          27.370010756890885,
          27.370010756890885
        ],
        [
          27.564340222180988,
          27.564340222180988
        ],
        [
          27.75752312064317,
          27.75752312064317
        ],
        [
          27.949581869454455,
          27.949581869454455
        ],
        [
          28.14053836770592,
          28.14053836770592
        ],
        [
          28.3304140119665,
          28.3304140119665
        ],
        [
          28.519229711302714,
          28.519229711302714
        ],
        [
          28.707005901776576,
          28.707005901776576
        ],
        [
          28.893762560443157,
          28.893762560443157
        ],
        [
          29.079519218868146,
          29.079519218868146
        ],
        [
          29.264294976184964,
          29.264294976184964
        ],
        [
          29.448108511723895,
          29.448108511723895
        ],
        [
          29.63097809713271,
          29.63097809713271
        ],
        [
          29.812921608295984,
          29.812921608295984
        ],
        [
          29.9939565365988,
          29.9939565365988
        ],
        [
          30.1741,
          30.1741
        ],
        [
          30.46261654511675,
          30.46261654511675
        ],
        [
          30.751360620589764,
          30.751360620589764
        ],
        [
          31.040337976970175,
          31.040337976970175
        ],
        [
          31.32955452542632,
          31.32955452542632
        ],
        [
          31.619016344006706,
          31.619016344006706
        ],
        [
          31.90872968417909,
          31.90872968417909
        ],
        [
          32.19870097778917,
          32.19870097778917
        ],
        [
          32.488936844223566,
          32.488936844223566
        ],
        [
          32.77944409804947,
          32.77944409804947
        ],
        [
          33.07022975699632,
          33.07022975699632
        ],
        [
          33.361301050357206,
          33.361301050357206
        ],
        [
          33.65266542782868,
          33.65266542782868
        ],
        [
          33.94433056881655,
          33.94433056881655
        ],
        [
          34.236304392237905,
          34.236304392237905
        ],
        [
          34.52859506685177,
          34.52859506685177
        ],
        [
          34.82121102215297,
          34.82121102215297
        ],
        [
          35.11416095986738,
          35.11416095986738
        ],
        [
          35.40745386608864,
          35.40745386608864
        ],
        [
          35.70109902410042,
          35.70109902410042
        ],
        [
          35.995106027931776,
          35.995106027931776
        ],
        [
          36.289484796696776,
          36.289484796696776
        ],
        [
          36.58424558977393,
          36.58424558977393
        ],
        [
          36.87939902288633,
          36.87939902288633
        ],
        [
          37.1749560851471,
          37.1749560851471
        ],
        [
          37.470928157142154,
          37.470928157142154
        ],
        [
          37.767327030126985,
          37.767327030126985
        ],
        [
          38.06416492642253,
          38.06416492642253
        ],
        [
          38.36145452110111,
          38.36145452110111
        ],
        [
          38.65920896506368,
          38.65920896506368
        ],
        [
          38.95744190961725,
          38.95744190961725
        ],
        [
          39.25616753267296,
          39.25616753267296
        ],
        [
          39.555400566695745,
          39.555400566695745
        ],
        [
          39.85515632853002,
          39.85515632853002
        ],
        [
          40.1554507513683,
          40.1554507513683
        ],
        [
          40.456300418786,
          40.456300418786
        ],
        [
          40.75772260134478,
          40.75772260134478
        ],
        [
          41.059735295757726,
          41.059735295757726
        ],
        [
          41.36235726693173,
          41.36235726693173
        ],
        [
          41.66560809313238,
          41.66560809313238
        ],
        [
          41.969508214557166,
          41.969508214557166
        ],
        [
          42.27407898563433,
          42.27407898563433
        ],
        [
          42.57934273140041,
          42.57934273140041
        ],
        [
          42.88532280834843,
          42.88532280834843
        ],
        [
          43.19204367018559,
          43.19204367018559
        ],
        [
          43.49953093898914,
          43.49953093898914
        ],
        [
          43.80781148230904,
          43.80781148230904
        ],
        [
          44.11691349683146,
          44.11691349683146
        ],
        [
          44.426866599294414,
          44.426866599294414
        ],
        [
          44.73770192543391,
          44.73770192543391
        ],
        [
          45.04945223783919,
          45.04945223783919
        ],
        [
          45.362152043710886,
          45.362152043710886
        ],
        [
          45.67583772365034,
          45.67583772365034
        ],
        [
          45.9905476727618,
          45.9905476727618
        ],
        [
          46.30632245552902,
          46.30632245552902
        ],
        [
          46.62320497613636,
          46.62320497613636
        ],
        [
          46.94124066614946,
          46.94124066614946
        ],
        [
          47.26047769175507,
          47.26047769175507
        ],
        [
          47.580967183097776,
          47.580967183097776
        ],
        [
          47.90276348864755,
          47.90276348864755
        ],
        [
          48.22592445800278,
          48.22592445800278
        ],
        [
          48.55051175709399,
          48.55051175709399
        ],
        [
          48.876591220420714,
          48.876591220420714
        ],
        [
          49.20423324575767,
          49.20423324575767
        ],
        [
          49.53351323773075,
          49.53351323773075
        ],
        [
          49.864512107835196,
          49.864512107835196
        ],
        [
          50.197316839889844,
          50.197316839889844
        ],
        [
          50.53202113166344,
          50.53202113166344
        ],
        [
          50.8687261255493,
          50.8687261255493
        ],
        [
          51.20754124381354,
          51.20754124381354
        ],
        [
          51.54858514723957,
          51.54858514723957
        ],
        [
          51.8919868401225,
          51.8919868401225
        ],
        [
          52.237886949781135,
          52.237886949781135
        ],
        [
          52.58643921538215,
          52.58643921538215
        ],
        [
          52.93781222936491,
          52.93781222936491
        ],
        [
          53.29219148573019,
          53.29219148573019
        ],
        [
          53.649781803770914,
          53.649781803770914
        ],
        [
          54.0108102146748,
          54.0108102146748
        ],
        [
          54.3755294235194,
          54.3755294235194
        ],
        [
          54.74422199295654,
          54.74422199295654
        ],
        [
          55.11720544091692,
          55.11720544091692
        ],
        [
          55.49483850825272,
          55.49483850825272
        ],
        [
          55.877528941366094,
          55.877528941366094
        ],
        [
          56.26574326182868,
          56.26574326182868
        ],
        [
          56.66001917906718,
          56.66001917906718
        ],
        [
          57.06098157434371,
          57.06098157434371
        ],
        [
          57.46936339552923,
          57.46936339552923
        ],
        [
          57.886033439051666,
          57.886033439051666
        ],
        [
          58.31203400927481,
          58.31203400927481
        ],
        [
          58.74863311112169,
          58.74863311112169
        ],
        [
          59.1973986685336,
          59.1973986685336
        ],
        [
          59.66030730021514,
          59.66030730021514
        ],
        [
          60.13990958854668,
          60.13990958854668
        ],
        [
          60.639592401868356,
          60.639592401868356
        ],
        [
          61.164018486101,
          61.164018486101
        ],
        [
          61.71991602210503,
          61.71991602210503
        ],
        [
          62.317633617430026,
          62.317633617430026
        ],
        [
          62.97462565562035,
          62.97462565562035
        ],
        [
          63.72497723763201,
          63.72497723763201
        ],
        [
          64.6567156373698,
          64.6567156373698
        ],
        [
          66.5707,
          66.5707
        ]
      ]
    },
    "14": {
      "label": "D14",
      "values": [
        [
          30.7371,
          30.7371
        ],
        [
          30.319002124428103,
          30.319002124428103
        ],
        [
          29.91159074339498,
          29.91159074339498
        ],
        [
          29.514472396507628,
          29.514472396507628
        ],
        [
          29.127272612387497,
          29.127272612387497
        ],
        [
          28.749634774981576,
          28.749634774981576
        ],
        [
          28.381219069951353,
          28.381219069951353
        ],
        [
          28.021701505164597,
          28.021701505164597
        ],
        [
          27.670772998715186,
          27.670772998715186
        ],
        [
          27.328138529438203,
          27.328138529438203
        ],
        [
          26.99351634486485,
          26.99351634486485
        ],
        [
          26.666637222150076,
          26.666637222150076
        ],
        [
          26.347243777883307,
          26.347243777883307
        ],
        [
          26.03508982304927,
          26.03508982304927
        ],
        [
          25.72993975972758,
          25.72993975972758
        ],
        [
          25.43156801641321,
          25.43156801641321
        ],
        [
          25.13975851910014,
          25.13975851910014
        ],
        [
          24.854304195513116,
          24.854304195513116
        ],
        [
          24.575006510163565,
          24.575006510163565
        ],
        [
          24.30167502766887,
          24.30167502766887
        ],
        [
          24.034127003042258,
          24.034127003042258
        ],
        [
          23.772186996263745,
          23.772186996263745
        ],
        [
          23.51568650995664,
          23.51568650995664
        ],
        [
          23.264463648400053,
          23.264463648400053
        ],
        [
          23.018362796449477,
          23.018362796449477
        ],
        [
          22.77723431702125,
          22.77723431702125
        ],
        [
          22.54093426590062,
          22.54093426590062
        ],
        [
          22.309324122725354,
          22.309324122725354
        ],
        [
          22.082270537084117,
          22.082270537084117
        ],
        [
          21.85964508874766,
          21.85964508874766
        ],
        [
          21.641324061122102,
          21.641324061122102
        ],
        [
          21.427188227081388,
          21.427188227081388
        ],
        [
          21.217122646395794,
          21.217122646395794
        ],
        [
          21.011016474030455,
          21.011016474030455
        ],
        [
          20.8087627786379,
          20.8087627786379
        ],
        [
          20.61025837061867,
          20.61025837061867
        ],
        [
          20.41540363916482,
          20.41540363916482
        ],
        [
          20.224102397743515,
          20.224102397743515
        ],
        [
          20.036261737515037,
          20.036261737515037
        ],
        [
          19.851791888212674,
          19.851791888212674
        ],
        [
          19.670606086045158,
          19.670606086045158
        ],
        [
          19.49262044821099,
          19.49262044821099
        ],
        [
          19.317753853641054,
          19.317753853641054
        ],
        [
          19.145927829612035,
          19.145927829612035
        ],
        [
          18.977066443895072,
          18.977066443895072
        ],
        [
          18.81109620212708,
          18.81109620212708
        ],
        [
          18.64794595011164,
          18.64794595011164
        ],
        [
          18.48754678077486,
          18.48754678077486
        ],
        [
          18.32983194551904,
          18.32983194551904
        ],
        [
          18.174736769733876,
          18.174736769733876
        ],
        [
          18.022198572238114,
          18.022198572238114
        ],
        [
          17.872156588440298,
          17.872156588440298
        ],
        [
          17.7245518970198,
          17.7245518970198
        ],
        [
          17.579327349940197,
          17.579327349940197
        ],
        [
          17.436427505619942,
          17.436427505619942
        ],
        [
          17.295798565095065,
          17.295798565095065
        ],
        [
          17.15738831101833,
          17.15738831101833
        ],
        [
          17.0211460493484,
          17.0211460493484
        ],
        [
          16.887022553592036,
          16.887022553592036
        ],
        [
          16.75497001146848,
          16.75497001146848
        ],
        [
          16.62494197387508,
          16.62494197387508
        ],
        [
          16.49689330603775,
          16.49689330603775
        ],
        [
          16.37078014073856,
          16.37078014073856
        ],
        [
          16.246559833517097,
          16.246559833517097
        ],
        [
          16.124190919749324,
          16.124190919749324
        ],
        [
          16.003633073512265,
          16.003633073512265
        ],
        [
          15.884847068148282,
          15.884847068148282
        ],
        [
          15.767794738447012,
          15.767794738447012
        ],
        [
          15.652438944368363,
          15.652438944368363
        ],
        [
          15.538743536232746,
          15.538743536232746
        ],
        [
          15.426673321310151,
          15.426673321310151
        ],
        [
          15.316194031742485,
          15.316194031742485
        ],
        [
          15.207272293736704,
          15.207272293736704
        ],
        [
          15.099875597961223,
          15.099875597961223
        ],
        [
          14.99397227115592,
          14.99397227115592
        ],
        [
          14.889531448711935,
          14.889531448711935
        ],
        [
          14.786523048469913,
          14.786523048469913
        ],
        [
          14.684917745419343,
          14.684917745419343
        ],
        [
          14.584686947390187,
          14.584686947390187
        ],
        [
          14.485802771641868,
          14.485802771641868
        ],
        [
          14.388238022455777,
          14.388238022455777
        ],
        [
          14.291966169254131,
          14.291966169254131
        ],
        [
          14.19696132594001,
          14.19696132594001
        ],
        [
          14.103198230692351,
          14.103198230692351
        ],
        [
          14.01065222662166,
          14.01065222662166
        ],
        [
          13.919299243109116,
          13.919299243109116
        ],
        [
          13.82911577781901,
          13.82911577781901
        ],
        [
          13.740078879356826,
          13.740078879356826
        ],
        [
          13.652166130545545,
          13.652166130545545
        ],
        [
          13.565355632294086,
          13.565355632294086
        ],
        [
          13.4796259880335,
          13.4796259880335
        ],
        [
          13.394956288697287,
          13.394956288697287
        ],
        [
          13.311326098223423,
          13.311326098223423
        ],
        [
          13.228715439556842,
          13.228715439556842
        ],
        [
          13.147104781131851,
          13.147104781131851
        ],
        [
          13.066475023815038,
          13.066475023815038
        ],
        [
          12.986807488276103,
          12.986807488276103
        ],
        [
          12.90808390286729,
          12.90808390286729
        ],
        [
          12.830286391704012,
          12.830286391704012
        ],
        [
          12.753397463401198,
          12.753397463401198
        ],
        [
          12.6774,
          12.6774
        ],
        [
          12.641075454883255,
          12.641075454883255
        ],
        [
          12.604523379410237,
          12.604523379410237
        ],
        [
          12.567738023029827,
          12.567738023029827
        ],
        [
          12.530713474573677,
          12.530713474573677
        ],
        [
          12.49344365599329,
          12.49344365599329
        ],
        [
          12.455922315820915,
          12.455922315820915
        ],
        [
          12.418143022210831,
          12.418143022210831
        ],
        [
          12.380099155776433,
          12.380099155776433
        ],
        [
          12.341783901950535,
          12.341783901950535
        ],
        [
          12.303190243003685,
          12.303190243003685
        ],
        [
          12.264310949642804,
          12.264310949642804
        ],
        [
          12.225138572171321,
          12.225138572171321
        ],
        [
          12.185665431183448,
          12.185665431183448
        ],
        [
          12.145883607762086,
          12.145883607762086
        ],
        [
          12.105784933148225,
          12.105784933148225
        ],
        [
          12.065360977847028,
          12.065360977847028
        ],
        [
          12.024603040132618,
          12.024603040132618
        ],
        [
          11.983502133911363,
          11.983502133911363
        ],
        [
          11.942048975899583,
          11.942048975899583
        ],
        [
          11.900233972068218,
          11.900233972068218
        ],
        [
          11.858047203303224,
          11.858047203303224
        ],
        [
          11.815478410226067,
          11.815478410226067
        ],
        [
          11.77251697711367,
          11.77251697711367
        ],
        [
          11.7291519148529,
          11.7291519148529
        ],
        [
          11.685371842857851,
          11.685371842857851
        ],
        [
          11.641164969873019,
          11.641164969873019
        ],
        [
          11.596519073577475,
          11.596519073577475
        ],
        [
          11.551421478898897,
          11.551421478898897
        ],
        [
          11.505859034936321,
          11.505859034936321
        ],
        [
          11.459818090382749,
          11.459818090382749
        ],
        [
          11.41328446732704,
          11.41328446732704
        ],
        [
          11.366243433304259,
          11.366243433304259
        ],
        [
          11.318679671469981,
          11.318679671469981
        ],
        [
          11.270577248631705,
          11.270577248631705
        ],
        [
          11.221919581213996,
          11.221919581213996
        ],
        [
          11.17268939865522,
          11.17268939865522
        ],
        [
          11.122868704242277,
          11.122868704242277
        ],
        [
          11.07243873306827,
          11.07243873306827
        ],
        [
          11.02137990686763,
          11.02137990686763
        ],
        [
          10.96967178544283,
          10.96967178544283
        ],
        [
          10.917293014365669,
          10.917293014365669
        ],
        [
          10.864221268599596,
          10.864221268599596
        ],
        [
          10.810433191651564,
          10.810433191651564
        ],
        [
          10.75590432981441,
          10.75590432981441
        ],
        [
          10.700609061010862,
          10.700609061010862
        ],
        [
          10.64452051769096,
          10.64452051769096
        ],
        [
          10.58761050316854,
          10.58761050316854
        ],
        [
          10.529849400705588,
          10.529849400705588
        ],
        [
          10.47120607456609,
          10.47120607456609
        ],
        [
          10.41164776216081,
          10.41164776216081
        ],
        [
          10.35113995628911,
          10.35113995628911
        ],
        [
          10.289646276349664,
          10.289646276349664
        ],
        [
          10.227128327238198,
          10.227128327238198
        ],
        [
          10.163545544470985,
          10.163545544470985
        ],
        [
          10.098855023863644,
          10.098855023863644
        ],
        [
          10.033011333850546,
          10.033011333850546
        ],
        [
          9.96596630824493,
          9.96596630824493
        ],
        [
          9.897668816902225,
          9.897668816902225
        ],
        [
          9.828064511352459,
          9.828064511352459
        ],
        [
          9.757095541997225,
          9.757095541997225
        ],
        [
          9.684700242906018,
          9.684700242906018
        ],
        [
          9.610812779579284,
          9.610812779579284
        ],
        [
          9.535362754242323,
          9.535362754242323
        ],
        [
          9.458274762269246,
          9.458274762269246
        ],
        [
          9.3794678921648,
          9.3794678921648
        ],
        [
          9.29885516011016,
          9.29885516011016
        ],
        [
          9.216342868336554,
          9.216342868336554
        ],
        [
          9.131829874450704,
          9.131829874450704
        ],
        [
          9.045206756186463,
          9.045206756186463
        ],
        [
          8.956354852760429,
          8.956354852760429
        ],
        [
          8.8651451598775,
          8.8651451598775
        ],
        [
          8.771437050218864,
          8.771437050218864
        ],
        [
          8.675076784617854,
          8.675076784617854
        ],
        [
          8.575895770635096,
          8.575895770635096
        ],
        [
          8.473708514269816,
          8.473708514269816
        ],
        [
          8.368310196229082,
          8.368310196229082
        ],
        [
          8.259473785325206,
          8.259473785325206
        ],
        [
          8.146946576480596,
          8.146946576480596
        ],
        [
          8.030446007043459,
          8.030446007043459
        ],
        [
          7.909654559083081,
          7.909654559083081
        ],
        [
          7.784213491747284,
          7.784213491747284
        ],
        [
          7.653715058633901,
          7.653715058633901
        ],
        [
          7.517692738171319,
          7.517692738171319
        ],
        [
          7.375608820932824,
          7.375608820932824
        ],
        [
          7.2268384256563,
          7.2268384256563
        ],
        [
          7.0706486044707715,
          7.0706486044707715
        ],
        [
          6.9061705609483415,
          6.9061705609483415
        ],
        [
          6.7323619907251935,
          6.7323619907251935
        ],
        [
          6.547954888878309,
          6.547954888878309
        ],
        [
          6.3513813314664045,
          6.3513813314664045
        ],
        [
          6.140664699784866,
          6.140664699784866
        ],
        [
          5.913254411453326,
          5.913254411453326
        ],
        [
          5.6657635981316385,
          5.6657635981316385
        ],
        [
          5.393529513899004,
          5.393529513899004
        ],
        [
          5.089823977894975,
          5.089823977894975
        ],
        [
          4.74429838256997,
          4.74429838256997
        ],
        [
          4.339498344379654,
          4.339498344379654
        ],
        [
          3.841338762367996,
          3.841338762367996
        ],
        [
          3.1617923626302185,
          3.1617923626302185
        ],
        [
          1.5,
          1.5
        ]
      ]
    },
    "25": {
      "label": "D25",
      "values": [
        [
          7.4142,
          7.4142
        ],
        [
          7.361656,
          7.361656
        ],
        [
          7.309112,
          7.309112
        ],
        [
          7.256568,
          7.256568
        ],
        [
          7.2040239999999995,
          7.2040239999999995
        ],
        [
          7.151479999999999,
          7.151479999999999
        ],
        [
          7.098936,
          7.098936
        ],
        [
          7.046392,
          7.046392
        ],
        [
          6.993848000000001,
          6.993848000000001
        ],
        [
          6.941304000000001,
          6.941304000000001
        ],
        [
          6.88876,
          6.88876
        ],
        [
          6.836216,
          6.836216
        ],
        [
          6.783672,
          6.783672
        ],
        [
          6.731128,
          6.731128
        ],
        [
          6.678584,
          6.678584
        ],
        [
          6.62604,
          6.62604
        ],
        [
          6.573496,
          6.573496
        ],
        [
          6.520952,
          6.520952
        ],
        [
          6.468408000000001,
          6.468408000000001
        ],
        [
          6.415864000000001,
          6.415864000000001
        ],
        [
          6.363320000000001,
          6.363320000000001
        ],
        [
          6.310776000000001,
          6.310776000000001
        ],
        [
          6.2582320000000005,
          6.2582320000000005
        ],
        [
          6.205688,
          6.205688
        ],
        [
          6.153144,
          6.153144
        ],
        [
          6.1006,
          6.1006
        ],
        [
          6.048056,
          6.048056
        ],
        [
          5.995512,
          5.995512
        ],
        [
          5.9429680000000005,
          5.9429680000000005
        ],
        [
          5.890424,
          5.890424
        ],
        [
          5.83788,
          5.83788
        ],
        [
          5.785336,
          5.785336
        ],
        [
          5.732792,
          5.732792
        ],
        [
          5.680248,
          5.680248
        ],
        [
          5.627704,
          5.627704
        ],
        [
          5.57516,
          5.57516
        ],
        [
          5.522616,
          5.522616
        ],
        [
          5.470072,
          5.470072
        ],
        [
          5.417528,
          5.417528
        ],
        [
          5.364984000000001,
          5.364984000000001
        ],
        [
          5.3124400000000005,
          5.3124400000000005
        ],
        [
          5.259896000000001,
          5.259896000000001
        ],
        [
          5.207352000000001,
          5.207352000000001
        ],
        [
          5.154808000000001,
          5.154808000000001
        ],
        [
          5.102264000000001,
          5.102264000000001
        ],
        [
          5.049720000000001,
          5.049720000000001
        ],
        [
          4.9971760000000005,
          4.9971760000000005
        ],
        [
          4.944632,
          4.944632
        ],
        [
          4.892088,
          4.892088
        ],
        [
          4.839544,
          4.839544
        ],
        [
          4.787,
          4.787
        ],
        [
          4.734456,
          4.734456
        ],
        [
          4.681912,
          4.681912
        ],
        [
          4.629368,
          4.629368
        ],
        [
          4.576824,
          4.576824
        ],
        [
          4.52428,
          4.52428
        ],
        [
          4.471736,
          4.471736
        ],
        [
          4.419192000000001,
          4.419192000000001
        ],
        [
          4.366648,
          4.366648
        ],
        [
          4.314104,
          4.314104
        ],
        [
          4.26156,
          4.26156
        ],
        [
          4.209016,
          4.209016
        ],
        [
          4.156472,
          4.156472
        ],
        [
          4.103928,
          4.103928
        ],
        [
          4.0513840000000005,
          4.0513840000000005
        ],
        [
          3.9988400000000004,
          3.9988400000000004
        ],
        [
          3.9462960000000002,
          3.9462960000000002
        ],
        [
          3.893752,
          3.893752
        ],
        [
          3.841208,
          3.841208
        ],
        [
          3.7886640000000003,
          3.7886640000000003
        ],
        [
          3.7361200000000006,
          3.7361200000000006
        ],
        [
          3.6835760000000004,
          3.6835760000000004
        ],
        [
          3.6310320000000003,
          3.6310320000000003
        ],
        [
          3.578488,
          3.578488
        ],
        [
          3.525944,
          3.525944
        ],
        [
          3.4734,
          3.4734
        ],
        [
          3.420856,
          3.420856
        ],
        [
          3.3683120000000004,
          3.3683120000000004
        ],
        [
          3.3157680000000003,
          3.3157680000000003
        ],
        [
          3.263224,
          3.263224
        ],
        [
          3.21068,
          3.21068
        ],
        [
          3.158136,
          3.158136
        ],
        [
          3.1055920000000006,
          3.1055920000000006
        ],
        [
          3.0530480000000004,
          3.0530480000000004
        ],
        [
          3.0005040000000003,
          3.0005040000000003
        ],
        [
          2.94796,
          2.94796
        ],
        [
          2.895416,
          2.895416
        ],
        [
          2.8428720000000003,
          2.8428720000000003
        ],
        [
          2.790328,
          2.790328
        ],
        [
          2.737784,
          2.737784
        ],
        [
          2.68524,
          2.68524
        ],
        [
          2.632696,
          2.632696
        ],
        [
          2.580152,
          2.580152
        ],
        [
          2.527608,
          2.527608
        ],
        [
          2.4750640000000006,
          2.4750640000000006
        ],
        [
          2.4225200000000005,
          2.4225200000000005
        ],
        [
          2.3699760000000003,
          2.3699760000000003
        ],
        [
          2.317432,
          2.317432
        ],
        [
          2.2648880000000005,
          2.2648880000000005
        ],
        [
          2.2123440000000003,
          2.2123440000000003
        ],
        [
          2.1598,
          2.1598
        ],
        [
          2.147202,
          2.147202
        ],
        [
          2.1346040000000004,
          2.1346040000000004
        ],
        [
          2.1220060000000003,
          2.1220060000000003
        ],
        [
          2.109408,
          2.109408
        ],
        [
          2.09681,
          2.09681
        ],
        [
          2.084212,
          2.084212
        ],
        [
          2.0716140000000003,
          2.0716140000000003
        ],
        [
          2.0590159999999997,
          2.0590159999999997
        ],
        [
          2.046418,
          2.046418
        ],
        [
          2.03382,
          2.03382
        ],
        [
          2.021222,
          2.021222
        ],
        [
          2.008624,
          2.008624
        ],
        [
          1.9960260000000003,
          1.9960260000000003
        ],
        [
          1.9834280000000002,
          1.9834280000000002
        ],
        [
          1.9708300000000003,
          1.9708300000000003
        ],
        [
          1.9582320000000002,
          1.9582320000000002
        ],
        [
          1.9456340000000003,
          1.9456340000000003
        ],
        [
          1.9330360000000002,
          1.9330360000000002
        ],
        [
          1.9204380000000003,
          1.9204380000000003
        ],
        [
          1.9078400000000002,
          1.9078400000000002
        ],
        [
          1.8952420000000003,
          1.8952420000000003
        ],
        [
          1.8826440000000002,
          1.8826440000000002
        ],
        [
          1.8700460000000003,
          1.8700460000000003
        ],
        [
          1.8574480000000002,
          1.8574480000000002
        ],
        [
          1.84485,
          1.84485
        ],
        [
          1.832252,
          1.832252
        ],
        [
          1.819654,
          1.819654
        ],
        [
          1.807056,
          1.807056
        ],
        [
          1.794458,
          1.794458
        ],
        [
          1.78186,
          1.78186
        ],
        [
          1.7692620000000001,
          1.7692620000000001
        ],
        [
          1.756664,
          1.756664
        ],
        [
          1.7440660000000001,
          1.7440660000000001
        ],
        [
          1.731468,
          1.731468
        ],
        [
          1.7188700000000001,
          1.7188700000000001
        ],
        [
          1.706272,
          1.706272
        ],
        [
          1.6936740000000001,
          1.6936740000000001
        ],
        [
          1.6810760000000002,
          1.6810760000000002
        ],
        [
          1.6684780000000003,
          1.6684780000000003
        ],
        [
          1.6558800000000002,
          1.6558800000000002
        ],
        [
          1.6432820000000004,
          1.6432820000000004
        ],
        [
          1.6306840000000002,
          1.6306840000000002
        ],
        [
          1.6180860000000001,
          1.6180860000000001
        ],
        [
          1.605488,
          1.605488
        ],
        [
          1.5928900000000001,
          1.5928900000000001
        ],
        [
          1.580292,
          1.580292
        ],
        [
          1.5676940000000001,
          1.5676940000000001
        ],
        [
          1.555096,
          1.555096
        ],
        [
          1.5424980000000001,
          1.5424980000000001
        ],
        [
          1.5299,
          1.5299
        ],
        [
          1.5173020000000002,
          1.5173020000000002
        ],
        [
          1.504704,
          1.504704
        ],
        [
          1.4921060000000002,
          1.4921060000000002
        ],
        [
          1.479508,
          1.479508
        ],
        [
          1.46691,
          1.46691
        ],
        [
          1.454312,
          1.454312
        ],
        [
          1.4417140000000002,
          1.4417140000000002
        ],
        [
          1.429116,
          1.429116
        ],
        [
          1.416518,
          1.416518
        ],
        [
          1.40392,
          1.40392
        ],
        [
          1.3913220000000002,
          1.3913220000000002
        ],
        [
          1.378724,
          1.378724
        ],
        [
          1.3661260000000004,
          1.3661260000000004
        ],
        [
          1.3535280000000003,
          1.3535280000000003
        ],
        [
          1.3409300000000002,
          1.3409300000000002
        ],
        [
          1.328332,
          1.328332
        ],
        [
          1.3157340000000002,
          1.3157340000000002
        ],
        [
          1.3031360000000003,
          1.3031360000000003
        ],
        [
          1.2905380000000002,
          1.2905380000000002
        ],
        [
          1.27794,
          1.27794
        ],
        [
          1.2653420000000002,
          1.2653420000000002
        ],
        [
          1.252744,
          1.252744
        ],
        [
          1.2401460000000002,
          1.2401460000000002
        ],
        [
          1.227548,
          1.227548
        ],
        [
          1.21495,
          1.21495
        ],
        [
          1.202352,
          1.202352
        ],
        [
          1.189754,
          1.189754
        ],
        [
          1.177156,
          1.177156
        ],
        [
          1.164558,
          1.164558
        ],
        [
          1.15196,
          1.15196
        ],
        [
          1.139362,
          1.139362
        ],
        [
          1.126764,
          1.126764
        ],
        [
          1.114166,
          1.114166
        ],
        [
          1.1015679999999999,
          1.1015679999999999
        ],
        [
          1.08897,
          1.08897
        ],
        [
          1.0763719999999999,
          1.0763719999999999
        ],
        [
          1.063774,
          1.063774
        ],
        [
          1.051176,
          1.051176
        ],
        [
          1.0385780000000002,
          1.0385780000000002
        ],
        [
          1.0259800000000001,
          1.0259800000000001
        ],
        [
          1.0133820000000002,
          1.0133820000000002
        ],
        [
          1.0007840000000001,
          1.0007840000000001
        ],
        [
          0.9881860000000001,
          0.9881860000000001
        ],
        [
          0.9755880000000001,
          0.9755880000000001
        ],
        [
          0.9629900000000001,
          0.9629900000000001
        ],
        [
          0.9503920000000001,
          0.9503920000000001
        ],
        [
          0.937794,
          0.937794
        ],
        [
          0.925196,
          0.925196
        ],
        [
          0.912598,
          0.912598
        ],
        [
          0.9,
          0.9
        ]
      ]
    },
    "31": {
      "label": "Printed image gap",
      "values": [
        [
          39.055,
          39.055
        ],
        [
          39.484724,
          39.484724
        ],
        [
          39.914448,
          39.914448
        ],
        [
          40.344172,
          40.344172
        ],
        [
          40.77389599999999,
          40.77389599999999
        ],
        [
          41.20362,
          41.20362
        ],
        [
          41.633344,
          41.633344
        ],
        [
          42.063067999999994,
          42.063067999999994
        ],
        [
          42.492792,
          42.492792
        ],
        [
          42.922516,
          42.922516
        ],
        [
          43.35224,
          43.35224
        ],
        [
          43.781964,
          43.781964
        ],
        [
          44.211688,
          44.211688
        ],
        [
          44.641411999999995,
          44.641411999999995
        ],
        [
          45.071136,
          45.071136
        ],
        [
          45.50086,
          45.50086
        ],
        [
          45.930583999999996,
          45.930583999999996
        ],
        [
          46.360308,
          46.360308
        ],
        [
          46.790032000000004,
          46.790032000000004
        ],
        [
          47.219756000000004,
          47.219756000000004
        ],
        [
          47.64948,
          47.64948
        ],
        [
          48.079204000000004,
          48.079204000000004
        ],
        [
          48.508928,
          48.508928
        ],
        [
          48.938652000000005,
          48.938652000000005
        ],
        [
          49.368376,
          49.368376
        ],
        [
          49.7981,
          49.7981
        ],
        [
          50.227824,
          50.227824
        ],
        [
          50.657548000000006,
          50.657548000000006
        ],
        [
          51.087272,
          51.087272
        ],
        [
          51.51699599999999,
          51.51699599999999
        ],
        [
          51.94672,
          51.94672
        ],
        [
          52.376444,
          52.376444
        ],
        [
          52.806168,
          52.806168
        ],
        [
          53.23589199999999,
          53.23589199999999
        ],
        [
          53.665616,
          53.665616
        ],
        [
          54.09534,
          54.09534
        ],
        [
          54.525064,
          54.525064
        ],
        [
          54.954788,
          54.954788
        ],
        [
          55.384512,
          55.384512
        ],
        [
          55.814236,
          55.814236
        ],
        [
          56.24396,
          56.24396
        ],
        [
          56.673684,
          56.673684
        ],
        [
          57.103408,
          57.103408
        ],
        [
          57.53313200000001,
          57.53313200000001
        ],
        [
          57.962856,
          57.962856
        ],
        [
          58.39258000000001,
          58.39258000000001
        ],
        [
          58.822304,
          58.822304
        ],
        [
          59.252027999999996,
          59.252027999999996
        ],
        [
          59.681752,
          59.681752
        ],
        [
          60.111476,
          60.111476
        ],
        [
          60.5412,
          60.5412
        ],
        [
          60.970924,
          60.970924
        ],
        [
          61.400648000000004,
          61.400648000000004
        ],
        [
          61.830372,
          61.830372
        ],
        [
          62.260096000000004,
          62.260096000000004
        ],
        [
          62.68982,
          62.68982
        ],
        [
          63.119544000000005,
          63.119544000000005
        ],
        [
          63.549268,
          63.549268
        ],
        [
          63.978992,
          63.978992
        ],
        [
          64.408716,
          64.408716
        ],
        [
          64.83843999999999,
          64.83843999999999
        ],
        [
          65.268164,
          65.268164
        ],
        [
          65.697888,
          65.697888
        ],
        [
          66.127612,
          66.127612
        ],
        [
          66.557336,
          66.557336
        ],
        [
          66.98706,
          66.98706
        ],
        [
          67.41678399999999,
          67.41678399999999
        ],
        [
          67.846508,
          67.846508
        ],
        [
          68.276232,
          68.276232
        ],
        [
          68.705956,
          68.705956
        ],
        [
          69.13568,
          69.13568
        ],
        [
          69.565404,
          69.565404
        ],
        [
          69.995128,
          69.995128
        ],
        [
          70.424852,
          70.424852
        ],
        [
          70.85457600000001,
          70.85457600000001
        ],
        [
          71.2843,
          71.2843
        ],
        [
          71.714024,
          71.714024
        ],
        [
          72.143748,
          72.143748
        ],
        [
          72.573472,
          72.573472
        ],
        [
          73.003196,
          73.003196
        ],
        [
          73.43292,
          73.43292
        ],
        [
          73.862644,
          73.862644
        ],
        [
          74.292368,
          74.292368
        ],
        [
          74.722092,
          74.722092
        ],
        [
          75.151816,
          75.151816
        ],
        [
          75.58153999999999,
          75.58153999999999
        ],
        [
          76.01126400000001,
          76.01126400000001
        ],
        [
          76.440988,
          76.440988
        ],
        [
          76.870712,
          76.870712
        ],
        [
          77.30043599999999,
          77.30043599999999
        ],
        [
          77.73016000000001,
          77.73016000000001
        ],
        [
          78.159884,
          78.159884
        ],
        [
          78.589608,
          78.589608
        ],
        [
          79.019332,
          79.019332
        ],
        [
          79.449056,
          79.449056
        ],
        [
          79.87878,
          79.87878
        ],
        [
          80.308504,
          80.308504
        ],
        [
          80.73822799999999,
          80.73822799999999
        ],
        [
          81.167952,
          81.167952
        ],
        [
          81.597676,
          81.597676
        ],
        [
          82.0274,
          82.0274
        ],
        [
          82.12581800000001,
          82.12581800000001
        ],
        [
          82.224236,
          82.224236
        ],
        [
          82.322654,
          82.322654
        ],
        [
          82.421072,
          82.421072
        ],
        [
          82.51949,
          82.51949
        ],
        [
          82.617908,
          82.617908
        ],
        [
          82.71632600000001,
          82.71632600000001
        ],
        [
          82.81474399999999,
          82.81474399999999
        ],
        [
          82.913162,
          82.913162
        ],
        [
          83.01158000000001,
          83.01158000000001
        ],
        [
          83.109998,
          83.109998
        ],
        [
          83.208416,
          83.208416
        ],
        [
          83.30683400000001,
          83.30683400000001
        ],
        [
          83.40525199999999,
          83.40525199999999
        ],
        [
          83.50367,
          83.50367
        ],
        [
          83.60208800000001,
          83.60208800000001
        ],
        [
          83.700506,
          83.700506
        ],
        [
          83.798924,
          83.798924
        ],
        [
          83.897342,
          83.897342
        ],
        [
          83.99576,
          83.99576
        ],
        [
          84.094178,
          84.094178
        ],
        [
          84.192596,
          84.192596
        ],
        [
          84.291014,
          84.291014
        ],
        [
          84.389432,
          84.389432
        ],
        [
          84.48785000000001,
          84.48785000000001
        ],
        [
          84.586268,
          84.586268
        ],
        [
          84.684686,
          84.684686
        ],
        [
          84.78310400000001,
          84.78310400000001
        ],
        [
          84.881522,
          84.881522
        ],
        [
          84.97994,
          84.97994
        ],
        [
          85.078358,
          85.078358
        ],
        [
          85.176776,
          85.176776
        ],
        [
          85.275194,
          85.275194
        ],
        [
          85.37361200000001,
          85.37361200000001
        ],
        [
          85.47203,
          85.47203
        ],
        [
          85.570448,
          85.570448
        ],
        [
          85.66886600000001,
          85.66886600000001
        ],
        [
          85.767284,
          85.767284
        ],
        [
          85.865702,
          85.865702
        ],
        [
          85.96412000000001,
          85.96412000000001
        ],
        [
          86.062538,
          86.062538
        ],
        [
          86.160956,
          86.160956
        ],
        [
          86.25937400000001,
          86.25937400000001
        ],
        [
          86.357792,
          86.357792
        ],
        [
          86.45621,
          86.45621
        ],
        [
          86.55462800000001,
          86.55462800000001
        ],
        [
          86.653046,
          86.653046
        ],
        [
          86.751464,
          86.751464
        ],
        [
          86.84988200000001,
          86.84988200000001
        ],
        [
          86.9483,
          86.9483
        ],
        [
          87.046718,
          87.046718
        ],
        [
          87.14513600000001,
          87.14513600000001
        ],
        [
          87.243554,
          87.243554
        ],
        [
          87.341972,
          87.341972
        ],
        [
          87.44039000000001,
          87.44039000000001
        ],
        [
          87.538808,
          87.538808
        ],
        [
          87.637226,
          87.637226
        ],
        [
          87.73564400000001,
          87.73564400000001
        ],
        [
          87.834062,
          87.834062
        ],
        [
          87.93248,
          87.93248
        ],
        [
          88.03089800000001,
          88.03089800000001
        ],
        [
          88.129316,
          88.129316
        ],
        [
          88.227734,
          88.227734
        ],
        [
          88.32615200000001,
          88.32615200000001
        ],
        [
          88.42457,
          88.42457
        ],
        [
          88.522988,
          88.522988
        ],
        [
          88.62140600000001,
          88.62140600000001
        ],
        [
          88.719824,
          88.719824
        ],
        [
          88.818242,
          88.818242
        ],
        [
          88.91666000000001,
          88.91666000000001
        ],
        [
          89.015078,
          89.015078
        ],
        [
          89.11349600000001,
          89.11349600000001
        ],
        [
          89.21191400000001,
          89.21191400000001
        ],
        [
          89.310332,
          89.310332
        ],
        [
          89.40875000000001,
          89.40875000000001
        ],
        [
          89.50716800000001,
          89.50716800000001
        ],
        [
          89.60558600000002,
          89.60558600000002
        ],
        [
          89.704004,
          89.704004
        ],
        [
          89.802422,
          89.802422
        ],
        [
          89.90084,
          89.90084
        ],
        [
          89.99925800000001,
          89.99925800000001
        ],
        [
          90.097676,
          90.097676
        ],
        [
          90.196094,
          90.196094
        ],
        [
          90.29451200000001,
          90.29451200000001
        ],
        [
          90.39293,
          90.39293
        ],
        [
          90.49134800000002,
          90.49134800000002
        ],
        [
          90.589766,
          90.589766
        ],
        [
          90.688184,
          90.688184
        ],
        [
          90.786602,
          90.786602
        ],
        [
          90.88502,
          90.88502
        ],
        [
          90.983438,
          90.983438
        ],
        [
          91.08185600000002,
          91.08185600000002
        ],
        [
          91.180274,
          91.180274
        ],
        [
          91.278692,
          91.278692
        ],
        [
          91.37711,
          91.37711
        ],
        [
          91.47552800000001,
          91.47552800000001
        ],
        [
          91.573946,
          91.573946
        ],
        [
          91.672364,
          91.672364
        ],
        [
          91.770782,
          91.770782
        ],
        [
          91.8692,
          91.8692
        ]
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
