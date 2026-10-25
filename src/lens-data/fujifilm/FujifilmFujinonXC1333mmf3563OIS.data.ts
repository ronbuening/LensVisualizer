import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "fujifilm-fujinon-xc-13-33mm-f35-63-ois",
  "maker": "Fujifilm",
  "name": "FUJIFILM FUJINON XC 13-33mm f/3.5-6.3 OIS",
  "subtitle": "CN 122410763 A, Example 1; XC13–33 correlation, not manufacturer-confirmed prescription",
  "catalog": {
    "lensMounts": [
      "fujifilm-x"
    ],
    "imageFormat": "aps-c",
    "specs": [
      "10 ELEMENTS / 9 GROUPS",
      "8 ASPHERICAL SURFACES / 4 ASPHERICAL ELEMENTS",
      "Native source f/3.60–6.49; marketed f/3.5–6.3",
      "Three published infinity zoom states; finite focus not reconstructed"
    ],
    "elementCount": 10,
    "groupCount": 9,
    "focalLengthMm": {
      "marketing": [
        13,
        33
      ],
      "design": [
        13.392203075226611,
        32.141010944747784
      ]
    },
    "fNumber": {
      "marketing": 3.5,
      "design": 3.6
    }
  },
  "source": {
    "patentNumber": "CN 122410763 A",
    "example": { "label": "Example 1", "id": "1" },
    "patentYear": 2026,
    "authors": [
      "Takuya Tanaka"
    ],
    "assignees": [
      "Fujifilm Corporation"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L11",
      "label": "Element 1",
      "type": "Negative Meniscus (2× Asph)",
      "nd": 1.81,
      "vd": 40.99,
      "indexReference": "d",
      "focalLengthMm": -13.586003467974011,
      "glass": "D-ZLAF52LA (CDGM)",
      "apdNote": "Source θgF=0.56996; dPgF converted to project normal-line baseline. This is not an APO performance claim.",
      "role": "Source G1",
      "diagramLabel": "L11",
      "dPgF": -0.0048948200000000774
    },
    {
      "id": 2,
      "name": "L12",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.4586,
      "vd": 90.17,
      "indexReference": "d",
      "focalLengthMm": -72.03621586111832,
      "glass": "H-FK90 (NHG)",
      "apdNote": "Source θgF=0.53706; dPgF converted to project normal-line baseline. This is not an APO performance claim.",
      "role": "Source G1",
      "diagramLabel": "L12",
      "dPgF": 0.04492593999999994
    },
    {
      "id": 3,
      "name": "L13",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 2.001,
      "vd": 29.13,
      "indexReference": "d",
      "focalLengthMm": 30.495191107408086,
      "glass": "H-ZLAF82 (NHG)",
      "apdNote": "Source θgF=0.59935; dPgF converted to project normal-line baseline. This is not an APO performance claim.",
      "role": "Source G1",
      "diagramLabel": "L13",
      "dPgF": 0.004546660000000036
    },
    {
      "id": 4,
      "name": "L21",
      "label": "Element 4",
      "type": "Biconvex Positive (2× Asph)",
      "nd": 1.62263,
      "vd": 58.16,
      "indexReference": "d",
      "focalLengthMm": 23.389993742608436,
      "glass": "M-BACD15 (HOYA)",
      "apdNote": "Source θgF=0.53913; dPgF converted to project normal-line baseline. This is not an APO performance claim.",
      "role": "Source G2",
      "diagramLabel": "L21",
      "dPgF": -0.006844880000000053
    },
    {
      "id": 5,
      "name": "L22",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "nd": 1.57135,
      "vd": 52.95,
      "indexReference": "d",
      "focalLengthMm": -17.65177085518821,
      "glass": "S-BAL3 (OHARA)",
      "apdNote": "Source θgF=0.55544; dPgF converted to project normal-line baseline. This is not an APO performance claim.",
      "role": "Source G2; OIS cemented doublet",
      "diagramLabel": "L22",
      "cemented": "OIS",
      "dPgF": 0.000701900000000033
    },
    {
      "id": 6,
      "name": "L23",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.52841,
      "vd": 76.45,
      "indexReference": "d",
      "focalLengthMm": 12.584120833504851,
      "glass": "S-FPM4 (OHARA)",
      "apdNote": "Source θgF=0.53954; dPgF converted to project normal-line baseline. This is not an APO performance claim.",
      "role": "Source G2; OIS cemented doublet",
      "diagramLabel": "L23",
      "cemented": "OIS",
      "dPgF": 0.024328899999999987
    },
    {
      "id": 7,
      "name": "L24",
      "label": "Element 7",
      "type": "Biconcave Negative",
      "nd": 1.95375,
      "vd": 32.32,
      "indexReference": "d",
      "focalLengthMm": -17.836752602329938,
      "glass": "TAFD45L (HOYA)",
      "apdNote": "Source θgF=0.58998; dPgF converted to project normal-line baseline. This is not an APO performance claim.",
      "role": "Source G2",
      "diagramLabel": "L24",
      "dPgF": 0.0005422399999999161
    },
    {
      "id": 8,
      "name": "L25",
      "label": "Element 8",
      "type": "Biconvex Positive (2× Asph)",
      "nd": 1.4971,
      "vd": 81.56,
      "indexReference": "d",
      "focalLengthMm": 19.159363468251097,
      "glass": "M-FCD1 (HOYA)",
      "apdNote": "Source θgF=0.53848; dPgF converted to project normal-line baseline. This is not an APO performance claim.",
      "role": "Source G2",
      "diagramLabel": "L25",
      "dPgF": 0.031863919999999935
    },
    {
      "id": 9,
      "name": "L31",
      "label": "Element 9",
      "type": "Negative Meniscus (2× Asph)",
      "nd": 1.63858,
      "vd": 55.18,
      "indexReference": "d",
      "focalLengthMm": -42.17798614863736,
      "glass": "M-PCD55AR (HOYA)",
      "apdNote": "Source θgF=0.5532; dPgF converted to project normal-line baseline. This is not an APO performance claim.",
      "role": "Source G3 focus",
      "diagramLabel": "L31",
      "dPgF": 0.002212760000000036
    },
    {
      "id": 10,
      "name": "L41",
      "label": "Element 10",
      "type": "Positive Meniscus",
      "nd": 1.7725,
      "vd": 49.6,
      "indexReference": "d",
      "focalLengthMm": 85.32756013290177,
      "glass": "H-LAF50B (CDGM)",
      "apdNote": "Source θgF=0.55165; dPgF converted to project normal-line baseline. This is not an APO performance claim.",
      "role": "Source G4 stationary rear",
      "diagramLabel": "L41",
      "dPgF": -0.00872280000000003
    }
  ],
  "surfaces": [
    {
      "label": "1A",
      "R": 80.8179,
      "d": 1.4,
      "sd": 12.83,
      "medium": 1,
      "asphere": {
        "A4": 0.000021012568,
        "A6": 0.0000017080933,
        "A8": -8.5649329e-9,
        "A10": -1.5212747e-10,
        "A12": 1.1023665e-12,
        "A14": -1.5987029e-15,
        "A16": 2.7916685e-17,
        "A18": -2.3464908e-19,
        "A20": -5.7215952e-22,
        "A5": -0.0000077154002,
        "A7": -2.1756426e-7,
        "A9": 3.7228872e-9,
        "A11": -1.2193393e-11,
        "A13": -4.3556525e-14,
        "A15": 2.9261609e-16,
        "A17": -2.3966744e-18,
        "A19": 2.4534067e-20
      }
    },
    {
      "label": "2A",
      "R": 9.6107,
      "d": 5.75,
      "sd": 9.85,
      "asphere": {
        "K": -2.2576327000000003,
        "A4": 0.00021411688,
        "A6": -0.0000037880744,
        "A8": -4.3506732e-8,
        "A10": 4.9008102e-10,
        "A12": 9.281058e-11,
        "A14": -5.4840004e-13,
        "A16": 1.4481801e-15,
        "A18": 8.4601918e-17,
        "A20": 4.1462965e-19,
        "A5": 0.000013009244,
        "A7": 8.7137638e-8,
        "A9": 1.8733356e-8,
        "A11": -9.1230189e-10,
        "A13": 4.5369491e-12,
        "A15": -6.2891178e-14,
        "A17": 3.6553939e-16,
        "A19": -1.2480594e-17
      }
    },
    {
      "label": "3",
      "R": 337.7103,
      "d": 0.65,
      "sd": 9.765,
      "medium": 2
    },
    {
      "label": "4",
      "R": 30.0739,
      "d": 1.107,
      "sd": 9.555
    },
    {
      "label": "5",
      "R": 23.0276,
      "d": 2.809,
      "sd": 9.565,
      "medium": 3
    },
    {
      "label": "6",
      "R": 88.0276,
      "sd": 9.335
    },
    {
      "label": "7A",
      "R": 15.6344,
      "d": 2.355,
      "sd": 4.645,
      "medium": 4,
      "asphere": {
        "A4": -0.000058138832,
        "A6": 0.00015160878,
        "A8": 0.000031154018,
        "A10": -0.0000015709015,
        "A12": 2.2348371e-7,
        "A14": -4.9586463e-9,
        "A16": 7.2960752e-11,
        "A18": 1.4634253e-12,
        "A20": -4.4593199e-14,
        "A5": -0.000082599137,
        "A7": -0.00010520889,
        "A9": -4.2416426e-7,
        "A11": -1.25797e-7,
        "A13": -3.5033166e-8,
        "A15": 1.5164638e-9,
        "A17": -4.534003e-11,
        "A19": 5.5452272e-13
      }
    },
    {
      "label": "8A",
      "R": -200.2902,
      "d": 0.973,
      "sd": 4.535,
      "asphere": {
        "A4": 0.000052115154,
        "A6": 0.00026417734,
        "A8": 0.000090319412,
        "A10": 0.0000028835559,
        "A12": -1.3090376e-7,
        "A14": 4.700887e-9,
        "A16": -8.9275024e-11,
        "A18": -2.6944496e-12,
        "A20": 1.7530908e-14,
        "A5": -0.00019364378,
        "A7": -0.00019938527,
        "A9": -0.000023995235,
        "A11": 2.5102621e-7,
        "A13": 5.9270436e-9,
        "A15": -7.8665774e-10,
        "A17": 3.6713556e-11,
        "A19": -1.3378376e-13
      }
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.545
    },
    {
      "label": "10",
      "R": 25.1182,
      "d": 0.51,
      "sd": 4.16,
      "medium": 5
    },
    {
      "label": "11",
      "R": 7.1429,
      "d": 2.895,
      "sd": 4,
      "medium": 6
    },
    {
      "label": "12",
      "R": -82.789,
      "d": 1.89,
      "sd": 3.84
    },
    {
      "label": "13",
      "R": -48.8513,
      "d": 0.5,
      "sd": 3.5,
      "medium": 7
    },
    {
      "label": "14",
      "R": 26.2316,
      "d": 0.407,
      "sd": 3.67
    },
    {
      "label": "15A",
      "R": 176.4199,
      "d": 2.334,
      "sd": 3.78,
      "medium": 8,
      "asphere": {
        "A4": -0.0001139855,
        "A6": -0.00013700316,
        "A8": -0.000019158104,
        "A10": 0.0000050972752,
        "A12": 8.490822e-8,
        "A14": -1.5779686e-10,
        "A16": -2.2294729e-9,
        "A18": -8.1371143e-12,
        "A20": 4.2667275e-13,
        "A5": 0.000053420106,
        "A7": 0.00010164413,
        "A9": -0.0000093980369,
        "A11": -7.5625248e-7,
        "A13": -4.3576269e-8,
        "A15": 6.8518575e-9,
        "A17": 3.1100172e-10,
        "A19": -3.9199543e-12
      }
    },
    {
      "label": "16A",
      "R": -10.0234,
      "sd": 4.28,
      "asphere": {
        "A4": 0.00018363783,
        "A6": -0.000058001649,
        "A8": -0.000050747364,
        "A10": 0.0000035014757,
        "A12": 2.6232319e-8,
        "A14": -8.0413057e-9,
        "A16": 3.2406146e-10,
        "A18": 9.5896802e-12,
        "A20": -1.3848411e-13,
        "A5": -0.000053565754,
        "A7": 0.00010175447,
        "A9": 0.0000059385136,
        "A11": -0.0000012011516,
        "A13": 4.1927156e-8,
        "A15": 4.5258474e-10,
        "A17": -1.1569486e-10,
        "A19": 9.968471e-13
      }
    },
    {
      "label": "17A",
      "R": -17.8964,
      "d": 1,
      "sd": 5.52,
      "medium": 9,
      "asphere": {
        "A4": 0.0005748671,
        "A6": -0.00006050262,
        "A8": -0.0000022419247,
        "A10": 1.2434213e-7,
        "A12": -3.3569391e-9,
        "A14": 2.1787417e-11,
        "A16": -2.0779017e-12,
        "A18": -2.0935901e-13,
        "A20": -3.0093282e-15,
        "A5": 0.000032944246,
        "A7": 0.000021279814,
        "A9": -7.0186849e-7,
        "A11": 2.5168952e-8,
        "A13": -1.1102496e-9,
        "A15": 5.4781343e-11,
        "A17": -5.6043511e-13,
        "A19": 5.2966254e-14
      }
    },
    {
      "label": "18A",
      "R": -54.4965,
      "sd": 5.995,
      "asphere": {
        "A4": 0.00039005594,
        "A6": -0.00013511387,
        "A8": -0.000010178646,
        "A10": 1.0143922e-7,
        "A12": -2.610737e-9,
        "A14": -6.1983538e-10,
        "A16": 1.35254e-11,
        "A18": -6.7140193e-13,
        "A20": -1.6499314e-15,
        "A5": 0.0001823601,
        "A7": 0.000046377533,
        "A9": 0.0000011660027,
        "A11": -5.9809737e-8,
        "A13": 4.7845188e-9,
        "A15": -6.8386384e-11,
        "A17": 2.2469223e-12,
        "A19": 5.6640015e-14
      }
    },
    {
      "label": "19",
      "R": -64.4358,
      "d": 3.118,
      "sd": 12.045,
      "medium": 10
    },
    {
      "label": "20",
      "R": -33.2708,
      "d": 8.779,
      "sd": 12.48
    }
  ],
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 13.39,
        "nominalFNumber": 3.6,
        "label": "Wide"
      },
      {
        "published": false,
        "focalLengthMm": 13.460417087569983,
        "nominalFNumber": 3.611
      },
      {
        "published": false,
        "focalLengthMm": 13.528954477641406,
        "nominalFNumber": 3.622
      },
      {
        "published": false,
        "focalLengthMm": 13.597819157583302,
        "nominalFNumber": 3.633
      },
      {
        "published": false,
        "focalLengthMm": 13.667015058198151,
        "nominalFNumber": 3.644
      },
      {
        "published": false,
        "focalLengthMm": 13.736546130008138,
        "nominalFNumber": 3.655
      },
      {
        "published": false,
        "focalLengthMm": 13.806416344299192,
        "nominalFNumber": 3.666
      },
      {
        "published": false,
        "focalLengthMm": 13.876629694150525,
        "nominalFNumber": 3.677
      },
      {
        "published": false,
        "focalLengthMm": 13.947190195450947,
        "nominalFNumber": 3.688
      },
      {
        "published": false,
        "focalLengthMm": 14.018101887903187,
        "nominalFNumber": 3.6990000000000003
      },
      {
        "published": false,
        "focalLengthMm": 14.08936883601716,
        "nominalFNumber": 3.7100000000000004
      },
      {
        "published": false,
        "focalLengthMm": 14.160995130093333,
        "nominalFNumber": 3.721
      },
      {
        "published": false,
        "focalLengthMm": 14.232984887197198,
        "nominalFNumber": 3.732
      },
      {
        "published": false,
        "focalLengthMm": 14.30534225212572,
        "nominalFNumber": 3.7430000000000003
      },
      {
        "published": false,
        "focalLengthMm": 14.378071398366705,
        "nominalFNumber": 3.7540000000000004
      },
      {
        "published": false,
        "focalLengthMm": 14.451176529051995,
        "nominalFNumber": 3.765
      },
      {
        "published": false,
        "focalLengthMm": 14.524661877905224,
        "nominalFNumber": 3.776
      },
      {
        "published": false,
        "focalLengthMm": 14.598531710185034,
        "nominalFNumber": 3.787
      },
      {
        "published": false,
        "focalLengthMm": 14.672790323624445,
        "nominalFNumber": 3.7980000000000005
      },
      {
        "published": false,
        "focalLengthMm": 14.747442049367136,
        "nominalFNumber": 3.809
      },
      {
        "published": false,
        "focalLengthMm": 14.82249125290126,
        "nominalFNumber": 3.8200000000000003
      },
      {
        "published": false,
        "focalLengthMm": 14.897942334991663,
        "nominalFNumber": 3.8310000000000004
      },
      {
        "published": false,
        "focalLengthMm": 14.973799732610923,
        "nominalFNumber": 3.8420000000000005
      },
      {
        "published": false,
        "focalLengthMm": 15.050067919869946,
        "nominalFNumber": 3.8530000000000006
      },
      {
        "published": false,
        "focalLengthMm": 15.1267514089488,
        "nominalFNumber": 3.864
      },
      {
        "published": false,
        "focalLengthMm": 15.203854751028157,
        "nominalFNumber": 3.875
      },
      {
        "published": false,
        "focalLengthMm": 15.281382537222163,
        "nominalFNumber": 3.886
      },
      {
        "published": false,
        "focalLengthMm": 15.359339399513026,
        "nominalFNumber": 3.8970000000000002
      },
      {
        "published": false,
        "focalLengthMm": 15.437730011688075,
        "nominalFNumber": 3.9080000000000004
      },
      {
        "published": false,
        "focalLengthMm": 15.516559090279596,
        "nominalFNumber": 3.919
      },
      {
        "published": false,
        "focalLengthMm": 15.595831395508158,
        "nominalFNumber": 3.9299999999999997
      },
      {
        "published": false,
        "focalLengthMm": 15.675551732229653,
        "nominalFNumber": 3.941
      },
      {
        "published": false,
        "focalLengthMm": 15.755724950886727,
        "nominalFNumber": 3.952
      },
      {
        "published": false,
        "focalLengthMm": 15.836355948465002,
        "nominalFNumber": 3.963
      },
      {
        "published": false,
        "focalLengthMm": 15.917449669454461,
        "nominalFNumber": 3.974
      },
      {
        "published": false,
        "focalLengthMm": 15.999011106816425,
        "nominalFNumber": 3.9850000000000003
      },
      {
        "published": false,
        "focalLengthMm": 16.081045302956692,
        "nominalFNumber": 3.9960000000000004
      },
      {
        "published": false,
        "focalLengthMm": 16.16355735070502,
        "nominalFNumber": 4.007000000000001
      },
      {
        "published": false,
        "focalLengthMm": 16.246552394301556,
        "nominalFNumber": 4.018000000000001
      },
      {
        "published": false,
        "focalLengthMm": 16.330035630390455,
        "nominalFNumber": 4.029
      },
      {
        "published": false,
        "focalLengthMm": 16.41401230902107,
        "nominalFNumber": 4.04
      },
      {
        "published": false,
        "focalLengthMm": 16.49848773465724,
        "nominalFNumber": 4.051
      },
      {
        "published": false,
        "focalLengthMm": 16.583467267194763,
        "nominalFNumber": 4.062
      },
      {
        "published": false,
        "focalLengthMm": 16.66895632298772,
        "nominalFNumber": 4.073
      },
      {
        "published": false,
        "focalLengthMm": 16.754960375883705,
        "nominalFNumber": 4.0840000000000005
      },
      {
        "published": false,
        "focalLengthMm": 16.84148495826843,
        "nominalFNumber": 4.095000000000001
      },
      {
        "published": false,
        "focalLengthMm": 16.928535662120076,
        "nominalFNumber": 4.106000000000001
      },
      {
        "published": false,
        "focalLengthMm": 17.01611814007362,
        "nominalFNumber": 4.117
      },
      {
        "published": false,
        "focalLengthMm": 17.10423810649541,
        "nominalFNumber": 4.128
      },
      {
        "published": false,
        "focalLengthMm": 17.19290133856843,
        "nominalFNumber": 4.139
      },
      {
        "published": false,
        "focalLengthMm": 17.282113677388377,
        "nominalFNumber": 4.15
      },
      {
        "published": false,
        "focalLengthMm": 17.371881029071048,
        "nominalFNumber": 4.1610000000000005
      },
      {
        "published": false,
        "focalLengthMm": 17.462209365871065,
        "nominalFNumber": 4.172000000000001
      },
      {
        "published": false,
        "focalLengthMm": 17.55310472731233,
        "nominalFNumber": 4.183
      },
      {
        "published": false,
        "focalLengthMm": 17.644573221330567,
        "nominalFNumber": 4.194
      },
      {
        "published": false,
        "focalLengthMm": 17.73662102542799,
        "nominalFNumber": 4.205
      },
      {
        "published": false,
        "focalLengthMm": 17.829254387840454,
        "nominalFNumber": 4.216
      },
      {
        "published": false,
        "focalLengthMm": 17.922479628717365,
        "nominalFNumber": 4.227
      },
      {
        "published": false,
        "focalLengthMm": 18.016303141314467,
        "nominalFNumber": 4.238
      },
      {
        "published": false,
        "focalLengthMm": 18.11073139319973,
        "nominalFNumber": 4.2490000000000006
      },
      {
        "published": false,
        "focalLengthMm": 18.20577092747263,
        "nominalFNumber": 4.26
      },
      {
        "published": false,
        "focalLengthMm": 18.301428363996905,
        "nominalFNumber": 4.271
      },
      {
        "published": false,
        "focalLengthMm": 18.397710400647004,
        "nominalFNumber": 4.282
      },
      {
        "published": false,
        "focalLengthMm": 18.494623814568353,
        "nominalFNumber": 4.293
      },
      {
        "published": false,
        "focalLengthMm": 18.59217546345175,
        "nominalFNumber": 4.304
      },
      {
        "published": false,
        "focalLengthMm": 18.690372286821674,
        "nominalFNumber": 4.315
      },
      {
        "published": false,
        "focalLengthMm": 18.78922130733908,
        "nominalFNumber": 4.3260000000000005
      },
      {
        "published": false,
        "focalLengthMm": 18.888729632118384,
        "nominalFNumber": 4.337000000000001
      },
      {
        "published": false,
        "focalLengthMm": 18.988904454058964,
        "nominalFNumber": 4.348
      },
      {
        "published": false,
        "focalLengthMm": 19.08975305319114,
        "nominalFNumber": 4.359
      },
      {
        "published": false,
        "focalLengthMm": 19.191282798036706,
        "nominalFNumber": 4.37
      },
      {
        "published": false,
        "focalLengthMm": 19.293501146984106,
        "nominalFNumber": 4.381
      },
      {
        "published": false,
        "focalLengthMm": 19.3964156496781,
        "nominalFNumber": 4.392
      },
      {
        "published": false,
        "focalLengthMm": 19.50003394842404,
        "nominalFNumber": 4.4030000000000005
      },
      {
        "published": false,
        "focalLengthMm": 19.604363779606707,
        "nominalFNumber": 4.414000000000001
      },
      {
        "published": false,
        "focalLengthMm": 19.709412975123534,
        "nominalFNumber": 4.425000000000001
      },
      {
        "published": false,
        "focalLengthMm": 19.815189463832244,
        "nominalFNumber": 4.436
      },
      {
        "published": false,
        "focalLengthMm": 19.921701273012662,
        "nominalFNumber": 4.447
      },
      {
        "published": false,
        "focalLengthMm": 20.028956529842564,
        "nominalFNumber": 4.458
      },
      {
        "published": false,
        "focalLengthMm": 20.13696346288748,
        "nominalFNumber": 4.469
      },
      {
        "published": false,
        "focalLengthMm": 20.245730403603982,
        "nominalFNumber": 4.48
      },
      {
        "published": false,
        "focalLengthMm": 20.355265787856453,
        "nominalFNumber": 4.4910000000000005
      },
      {
        "published": false,
        "focalLengthMm": 20.46557815744676,
        "nominalFNumber": 4.502000000000001
      },
      {
        "published": false,
        "focalLengthMm": 20.576676161656646,
        "nominalFNumber": 4.513
      },
      {
        "published": false,
        "focalLengthMm": 20.688568558802384,
        "nominalFNumber": 4.524
      },
      {
        "published": false,
        "focalLengthMm": 20.801264217801073,
        "nominalFNumber": 4.535
      },
      {
        "published": false,
        "focalLengthMm": 20.91477211974838,
        "nominalFNumber": 4.546
      },
      {
        "published": false,
        "focalLengthMm": 21.029101359506797,
        "nominalFNumber": 4.557
      },
      {
        "published": false,
        "focalLengthMm": 21.144261147303897,
        "nominalFNumber": 4.5680000000000005
      },
      {
        "published": false,
        "focalLengthMm": 21.260260810340025,
        "nominalFNumber": 4.579
      },
      {
        "published": false,
        "focalLengthMm": 21.377109794404355,
        "nominalFNumber": 4.590000000000001
      },
      {
        "published": false,
        "focalLengthMm": 21.49481766549862,
        "nominalFNumber": 4.601
      },
      {
        "published": false,
        "focalLengthMm": 21.613394111467535,
        "nominalFNumber": 4.612000000000001
      },
      {
        "published": false,
        "focalLengthMm": 21.73284894363488,
        "nominalFNumber": 4.623
      },
      {
        "published": false,
        "focalLengthMm": 21.85319209844392,
        "nominalFNumber": 4.634
      },
      {
        "published": false,
        "focalLengthMm": 21.97443363910134,
        "nominalFNumber": 4.645
      },
      {
        "published": false,
        "focalLengthMm": 22.096583757222774,
        "nominalFNumber": 4.656
      },
      {
        "published": false,
        "focalLengthMm": 22.219652774479005,
        "nominalFNumber": 4.667
      },
      {
        "published": false,
        "focalLengthMm": 22.343651144240784,
        "nominalFNumber": 4.678
      },
      {
        "published": false,
        "focalLengthMm": 22.468589453220904,
        "nominalFNumber": 4.689
      },
      {
        "focalLengthMm": 22.59,
        "nominalFNumber": 4.7
      },
      {
        "published": false,
        "focalLengthMm": 22.676736608066463,
        "nominalFNumber": 4.7179
      },
      {
        "published": false,
        "focalLengthMm": 22.75919955193817,
        "nominalFNumber": 4.7358
      },
      {
        "published": false,
        "focalLengthMm": 22.84186908172864,
        "nominalFNumber": 4.7537
      },
      {
        "published": false,
        "focalLengthMm": 22.924747022852088,
        "nominalFNumber": 4.771599999999999
      },
      {
        "published": false,
        "focalLengthMm": 23.007835199438034,
        "nominalFNumber": 4.7895
      },
      {
        "published": false,
        "focalLengthMm": 23.09113543462803,
        "nominalFNumber": 4.8074
      },
      {
        "published": false,
        "focalLengthMm": 23.174649550866057,
        "nominalFNumber": 4.8253
      },
      {
        "published": false,
        "focalLengthMm": 23.25837937018305,
        "nominalFNumber": 4.8432
      },
      {
        "published": false,
        "focalLengthMm": 23.3423267144756,
        "nominalFNumber": 4.8611
      },
      {
        "published": false,
        "focalLengthMm": 23.42649340577916,
        "nominalFNumber": 4.8790000000000004
      },
      {
        "published": false,
        "focalLengthMm": 23.510881266535897,
        "nominalFNumber": 4.8969000000000005
      },
      {
        "published": false,
        "focalLengthMm": 23.595492119857592,
        "nominalFNumber": 4.9148
      },
      {
        "published": false,
        "focalLengthMm": 23.680327789783604,
        "nominalFNumber": 4.9327
      },
      {
        "published": false,
        "focalLengthMm": 23.76539010153411,
        "nominalFNumber": 4.9506
      },
      {
        "published": false,
        "focalLengthMm": 23.850680881759,
        "nominalFNumber": 4.9685
      },
      {
        "published": false,
        "focalLengthMm": 23.936201958782355,
        "nominalFNumber": 4.9864
      },
      {
        "published": false,
        "focalLengthMm": 24.021955162842904,
        "nominalFNumber": 5.004300000000001
      },
      {
        "published": false,
        "focalLengthMm": 24.10794232633042,
        "nominalFNumber": 5.0222
      },
      {
        "published": false,
        "focalLengthMm": 24.194165284018503,
        "nominalFNumber": 5.0401
      },
      {
        "published": false,
        "focalLengthMm": 24.28062587329357,
        "nominalFNumber": 5.058
      },
      {
        "published": false,
        "focalLengthMm": 24.367325934380492,
        "nominalFNumber": 5.075900000000001
      },
      {
        "published": false,
        "focalLengthMm": 24.454267310564823,
        "nominalFNumber": 5.0938
      },
      {
        "published": false,
        "focalLengthMm": 24.541451848411903,
        "nominalFNumber": 5.1117
      },
      {
        "published": false,
        "focalLengthMm": 24.628881397982898,
        "nominalFNumber": 5.1296
      },
      {
        "published": false,
        "focalLengthMm": 24.716557813047896,
        "nominalFNumber": 5.147500000000001
      },
      {
        "published": false,
        "focalLengthMm": 24.804482951296258,
        "nominalFNumber": 5.1654
      },
      {
        "published": false,
        "focalLengthMm": 24.89265867454422,
        "nominalFNumber": 5.1833
      },
      {
        "published": false,
        "focalLengthMm": 24.98108684894008,
        "nominalFNumber": 5.2012
      },
      {
        "published": false,
        "focalLengthMm": 25.06976934516679,
        "nominalFNumber": 5.2191
      },
      {
        "published": false,
        "focalLengthMm": 25.158708038642356,
        "nominalFNumber": 5.237
      },
      {
        "published": false,
        "focalLengthMm": 25.247904809717877,
        "nominalFNumber": 5.2549
      },
      {
        "published": false,
        "focalLengthMm": 25.337361543873627,
        "nominalFNumber": 5.2728
      },
      {
        "published": false,
        "focalLengthMm": 25.427080131912994,
        "nominalFNumber": 5.2907
      },
      {
        "published": false,
        "focalLengthMm": 25.517062470154553,
        "nominalFNumber": 5.3086
      },
      {
        "published": false,
        "focalLengthMm": 25.607310460622248,
        "nominalFNumber": 5.3265
      },
      {
        "published": false,
        "focalLengthMm": 25.697826011233953,
        "nominalFNumber": 5.3444
      },
      {
        "published": false,
        "focalLengthMm": 25.788611035988218,
        "nominalFNumber": 5.3623
      },
      {
        "published": false,
        "focalLengthMm": 25.879667455149605,
        "nominalFNumber": 5.3802
      },
      {
        "published": false,
        "focalLengthMm": 25.97099719543242,
        "nominalFNumber": 5.3980999999999995
      },
      {
        "published": false,
        "focalLengthMm": 26.06260219018309,
        "nominalFNumber": 5.416
      },
      {
        "published": false,
        "focalLengthMm": 26.154484379561215,
        "nominalFNumber": 5.4338999999999995
      },
      {
        "published": false,
        "focalLengthMm": 26.24664571071931,
        "nominalFNumber": 5.4518
      },
      {
        "published": false,
        "focalLengthMm": 26.339088137981445,
        "nominalFNumber": 5.4697
      },
      {
        "published": false,
        "focalLengthMm": 26.431813623020695,
        "nominalFNumber": 5.4876000000000005
      },
      {
        "published": false,
        "focalLengthMm": 26.52482413503557,
        "nominalFNumber": 5.5055
      },
      {
        "published": false,
        "focalLengthMm": 26.618121650925534,
        "nominalFNumber": 5.5234000000000005
      },
      {
        "published": false,
        "focalLengthMm": 26.711708155465473,
        "nominalFNumber": 5.5413
      },
      {
        "published": false,
        "focalLengthMm": 26.805585641479386,
        "nominalFNumber": 5.559200000000001
      },
      {
        "published": false,
        "focalLengthMm": 26.899756110013364,
        "nominalFNumber": 5.5771
      },
      {
        "published": false,
        "focalLengthMm": 26.994221570507694,
        "nominalFNumber": 5.595000000000001
      },
      {
        "published": false,
        "focalLengthMm": 27.088984040968338,
        "nominalFNumber": 5.6129
      },
      {
        "published": false,
        "focalLengthMm": 27.18404554813787,
        "nominalFNumber": 5.6308
      },
      {
        "published": false,
        "focalLengthMm": 27.279408127665754,
        "nominalFNumber": 5.6487
      },
      {
        "published": false,
        "focalLengthMm": 27.375073824278164,
        "nominalFNumber": 5.666600000000001
      },
      {
        "published": false,
        "focalLengthMm": 27.4710446919473,
        "nominalFNumber": 5.6845
      },
      {
        "published": false,
        "focalLengthMm": 27.56732279406037,
        "nominalFNumber": 5.7024
      },
      {
        "published": false,
        "focalLengthMm": 27.663910203588195,
        "nominalFNumber": 5.7203
      },
      {
        "published": false,
        "focalLengthMm": 27.760809003253407,
        "nominalFNumber": 5.738200000000001
      },
      {
        "published": false,
        "focalLengthMm": 27.85802128569858,
        "nominalFNumber": 5.7561
      },
      {
        "published": false,
        "focalLengthMm": 27.95554915365391,
        "nominalFNumber": 5.774
      },
      {
        "published": false,
        "focalLengthMm": 28.053394720104944,
        "nominalFNumber": 5.7919
      },
      {
        "published": false,
        "focalLengthMm": 28.151560108460103,
        "nominalFNumber": 5.8098
      },
      {
        "published": false,
        "focalLengthMm": 28.250047452718015,
        "nominalFNumber": 5.8277
      },
      {
        "published": false,
        "focalLengthMm": 28.348858897634955,
        "nominalFNumber": 5.845599999999999
      },
      {
        "published": false,
        "focalLengthMm": 28.44799659889233,
        "nominalFNumber": 5.8635
      },
      {
        "published": false,
        "focalLengthMm": 28.54746272326395,
        "nominalFNumber": 5.8814
      },
      {
        "published": false,
        "focalLengthMm": 28.64725944878365,
        "nominalFNumber": 5.8993
      },
      {
        "published": false,
        "focalLengthMm": 28.747388964912936,
        "nominalFNumber": 5.9172
      },
      {
        "published": false,
        "focalLengthMm": 28.847853472708696,
        "nominalFNumber": 5.9351
      },
      {
        "published": false,
        "focalLengthMm": 28.948655184991367,
        "nominalFNumber": 5.953
      },
      {
        "published": false,
        "focalLengthMm": 29.049796326512944,
        "nominalFNumber": 5.9709
      },
      {
        "published": false,
        "focalLengthMm": 29.151279134125627,
        "nominalFNumber": 5.9887999999999995
      },
      {
        "published": false,
        "focalLengthMm": 29.25310585695069,
        "nominalFNumber": 6.0067
      },
      {
        "published": false,
        "focalLengthMm": 29.355278756547417,
        "nominalFNumber": 6.0246
      },
      {
        "published": false,
        "focalLengthMm": 29.457800107082825,
        "nominalFNumber": 6.0424999999999995
      },
      {
        "published": false,
        "focalLengthMm": 29.560672195501514,
        "nominalFNumber": 6.0604000000000005
      },
      {
        "published": false,
        "focalLengthMm": 29.663897321695995,
        "nominalFNumber": 6.0783000000000005
      },
      {
        "published": false,
        "focalLengthMm": 29.76747779867767,
        "nominalFNumber": 6.0962000000000005
      },
      {
        "published": false,
        "focalLengthMm": 29.871415952748027,
        "nominalFNumber": 6.1141000000000005
      },
      {
        "published": false,
        "focalLengthMm": 29.975714123670667,
        "nominalFNumber": 6.132
      },
      {
        "published": false,
        "focalLengthMm": 30.08037466484371,
        "nominalFNumber": 6.149900000000001
      },
      {
        "published": false,
        "focalLengthMm": 30.185399943472817,
        "nominalFNumber": 6.167800000000001
      },
      {
        "published": false,
        "focalLengthMm": 30.290792340744975,
        "nominalFNumber": 6.1857
      },
      {
        "published": false,
        "focalLengthMm": 30.396554252002755,
        "nominalFNumber": 6.203600000000001
      },
      {
        "published": false,
        "focalLengthMm": 30.5026880869194,
        "nominalFNumber": 6.221500000000001
      },
      {
        "published": false,
        "focalLengthMm": 30.609196269674595,
        "nominalFNumber": 6.239400000000001
      },
      {
        "published": false,
        "focalLengthMm": 30.716081239130958,
        "nominalFNumber": 6.257300000000001
      },
      {
        "published": false,
        "focalLengthMm": 30.823345449011263,
        "nominalFNumber": 6.2752
      },
      {
        "published": false,
        "focalLengthMm": 30.93099136807663,
        "nominalFNumber": 6.2931
      },
      {
        "published": false,
        "focalLengthMm": 31.039021480305365,
        "nominalFNumber": 6.311
      },
      {
        "published": false,
        "focalLengthMm": 31.14743828507274,
        "nominalFNumber": 6.3289
      },
      {
        "published": false,
        "focalLengthMm": 31.256244297331637,
        "nominalFNumber": 6.3468
      },
      {
        "published": false,
        "focalLengthMm": 31.365442047794158,
        "nominalFNumber": 6.3647
      },
      {
        "published": false,
        "focalLengthMm": 31.47503408311408,
        "nominalFNumber": 6.3826
      },
      {
        "published": false,
        "focalLengthMm": 31.58502296607034,
        "nominalFNumber": 6.4005
      },
      {
        "published": false,
        "focalLengthMm": 31.695411275751514,
        "nominalFNumber": 6.4184
      },
      {
        "published": false,
        "focalLengthMm": 31.806201607741183,
        "nominalFNumber": 6.4363
      },
      {
        "published": false,
        "focalLengthMm": 31.91739657430459,
        "nominalFNumber": 6.4542
      },
      {
        "published": false,
        "focalLengthMm": 32.02899880457607,
        "nominalFNumber": 6.4721
      },
      {
        "focalLengthMm": 32.14,
        "nominalFNumber": 6.49,
        "label": "Tele"
      }
    ],
    "apertureModel": "from-nominal-fno",
    "step": 0.005
  },
  "focus": {
    "closeFocusM": 1000000000000000,
    "description": "INFERRED CONTINUOUS INFINITY CAM: three source knots exact. G1/G2 source-position interpolation drives the path; G3 displacement is solved paraxially for fixed G4/image plane with native residual retained. Intermediate nodes are unpublished and not factory cam measurements. No finite-focus reconstruction or source optics changes."
  },
  "gaps": {
    "6": {
      "label": "G1–G2",
      "values": [
        [
          19.541,
          19.541
        ],
        [
          19.405540000000002,
          19.405540000000002
        ],
        [
          19.27008,
          19.27008
        ],
        [
          19.134619999999998,
          19.134619999999998
        ],
        [
          18.99916,
          18.99916
        ],
        [
          18.863699999999998,
          18.863699999999998
        ],
        [
          18.72824,
          18.72824
        ],
        [
          18.59278,
          18.59278
        ],
        [
          18.457320000000003,
          18.457320000000003
        ],
        [
          18.32186,
          18.32186
        ],
        [
          18.1864,
          18.1864
        ],
        [
          18.05094,
          18.05094
        ],
        [
          17.915480000000002,
          17.915480000000002
        ],
        [
          17.78002,
          17.78002
        ],
        [
          17.644560000000002,
          17.644560000000002
        ],
        [
          17.5091,
          17.5091
        ],
        [
          17.373639999999998,
          17.373639999999998
        ],
        [
          17.23818,
          17.23818
        ],
        [
          17.10272,
          17.10272
        ],
        [
          16.967260000000003,
          16.967260000000003
        ],
        [
          16.8318,
          16.8318
        ],
        [
          16.69634,
          16.69634
        ],
        [
          16.56088,
          16.56088
        ],
        [
          16.425420000000003,
          16.425420000000003
        ],
        [
          16.28996,
          16.28996
        ],
        [
          16.154500000000002,
          16.154500000000002
        ],
        [
          16.01904,
          16.01904
        ],
        [
          15.88358,
          15.88358
        ],
        [
          15.748119999999998,
          15.748119999999998
        ],
        [
          15.61266,
          15.61266
        ],
        [
          15.4772,
          15.4772
        ],
        [
          15.341739999999998,
          15.341739999999998
        ],
        [
          15.20628,
          15.20628
        ],
        [
          15.07082,
          15.07082
        ],
        [
          14.935359999999998,
          14.935359999999998
        ],
        [
          14.799900000000001,
          14.799900000000001
        ],
        [
          14.664439999999999,
          14.664439999999999
        ],
        [
          14.52898,
          14.52898
        ],
        [
          14.39352,
          14.39352
        ],
        [
          14.25806,
          14.25806
        ],
        [
          14.1226,
          14.1226
        ],
        [
          13.987140000000002,
          13.987140000000002
        ],
        [
          13.851680000000002,
          13.851680000000002
        ],
        [
          13.716220000000002,
          13.716220000000002
        ],
        [
          13.580760000000001,
          13.580760000000001
        ],
        [
          13.4453,
          13.4453
        ],
        [
          13.309840000000001,
          13.309840000000001
        ],
        [
          13.174380000000001,
          13.174380000000001
        ],
        [
          13.038920000000001,
          13.038920000000001
        ],
        [
          12.90346,
          12.90346
        ],
        [
          12.768,
          12.768
        ],
        [
          12.632539999999999,
          12.632539999999999
        ],
        [
          12.49708,
          12.49708
        ],
        [
          12.36162,
          12.36162
        ],
        [
          12.22616,
          12.22616
        ],
        [
          12.0907,
          12.0907
        ],
        [
          11.95524,
          11.95524
        ],
        [
          11.81978,
          11.81978
        ],
        [
          11.684320000000001,
          11.684320000000001
        ],
        [
          11.548860000000001,
          11.548860000000001
        ],
        [
          11.413400000000001,
          11.413400000000001
        ],
        [
          11.277940000000001,
          11.277940000000001
        ],
        [
          11.142479999999999,
          11.142479999999999
        ],
        [
          11.00702,
          11.00702
        ],
        [
          10.871559999999999,
          10.871559999999999
        ],
        [
          10.7361,
          10.7361
        ],
        [
          10.60064,
          10.60064
        ],
        [
          10.46518,
          10.46518
        ],
        [
          10.329719999999998,
          10.329719999999998
        ],
        [
          10.19426,
          10.19426
        ],
        [
          10.058800000000002,
          10.058800000000002
        ],
        [
          9.92334,
          9.92334
        ],
        [
          9.787880000000001,
          9.787880000000001
        ],
        [
          9.652420000000001,
          9.652420000000001
        ],
        [
          9.516960000000001,
          9.516960000000001
        ],
        [
          9.381499999999999,
          9.381499999999999
        ],
        [
          9.24604,
          9.24604
        ],
        [
          9.110579999999999,
          9.110579999999999
        ],
        [
          8.97512,
          8.97512
        ],
        [
          8.83966,
          8.83966
        ],
        [
          8.7042,
          8.7042
        ],
        [
          8.568739999999998,
          8.568739999999998
        ],
        [
          8.43328,
          8.43328
        ],
        [
          8.29782,
          8.29782
        ],
        [
          8.16236,
          8.16236
        ],
        [
          8.026900000000001,
          8.026900000000001
        ],
        [
          7.891440000000001,
          7.891440000000001
        ],
        [
          7.75598,
          7.75598
        ],
        [
          7.62052,
          7.62052
        ],
        [
          7.485060000000001,
          7.485060000000001
        ],
        [
          7.3496,
          7.3496
        ],
        [
          7.2141399999999996,
          7.2141399999999996
        ],
        [
          7.07868,
          7.07868
        ],
        [
          6.943219999999999,
          6.943219999999999
        ],
        [
          6.807760000000001,
          6.807760000000001
        ],
        [
          6.672300000000001,
          6.672300000000001
        ],
        [
          6.536840000000001,
          6.536840000000001
        ],
        [
          6.4013800000000005,
          6.4013800000000005
        ],
        [
          6.26592,
          6.26592
        ],
        [
          6.13046,
          6.13046
        ],
        [
          5.995,
          5.995
        ],
        [
          5.9425300000000005,
          5.9425300000000005
        ],
        [
          5.89006,
          5.89006
        ],
        [
          5.8375900000000005,
          5.8375900000000005
        ],
        [
          5.78512,
          5.78512
        ],
        [
          5.73265,
          5.73265
        ],
        [
          5.68018,
          5.68018
        ],
        [
          5.6277099999999995,
          5.6277099999999995
        ],
        [
          5.57524,
          5.57524
        ],
        [
          5.52277,
          5.52277
        ],
        [
          5.470299999999999,
          5.470299999999999
        ],
        [
          5.4178299999999995,
          5.4178299999999995
        ],
        [
          5.36536,
          5.36536
        ],
        [
          5.312890000000001,
          5.312890000000001
        ],
        [
          5.26042,
          5.26042
        ],
        [
          5.20795,
          5.20795
        ],
        [
          5.155480000000001,
          5.155480000000001
        ],
        [
          5.10301,
          5.10301
        ],
        [
          5.050540000000001,
          5.050540000000001
        ],
        [
          4.99807,
          4.99807
        ],
        [
          4.945600000000001,
          4.945600000000001
        ],
        [
          4.89313,
          4.89313
        ],
        [
          4.84066,
          4.84066
        ],
        [
          4.78819,
          4.78819
        ],
        [
          4.735720000000001,
          4.735720000000001
        ],
        [
          4.68325,
          4.68325
        ],
        [
          4.630780000000001,
          4.630780000000001
        ],
        [
          4.57831,
          4.57831
        ],
        [
          4.52584,
          4.52584
        ],
        [
          4.47337,
          4.47337
        ],
        [
          4.4209,
          4.4209
        ],
        [
          4.36843,
          4.36843
        ],
        [
          4.3159600000000005,
          4.3159600000000005
        ],
        [
          4.263489999999999,
          4.263489999999999
        ],
        [
          4.2110199999999995,
          4.2110199999999995
        ],
        [
          4.15855,
          4.15855
        ],
        [
          4.1060799999999995,
          4.1060799999999995
        ],
        [
          4.05361,
          4.05361
        ],
        [
          4.00114,
          4.00114
        ],
        [
          3.9486700000000003,
          3.9486700000000003
        ],
        [
          3.8962000000000003,
          3.8962000000000003
        ],
        [
          3.8437300000000008,
          3.8437300000000008
        ],
        [
          3.7912600000000003,
          3.7912600000000003
        ],
        [
          3.7387900000000003,
          3.7387900000000003
        ],
        [
          3.6863200000000003,
          3.6863200000000003
        ],
        [
          3.6338500000000002,
          3.6338500000000002
        ],
        [
          3.5813800000000002,
          3.5813800000000002
        ],
        [
          3.52891,
          3.52891
        ],
        [
          3.4764399999999998,
          3.4764399999999998
        ],
        [
          3.42397,
          3.42397
        ],
        [
          3.3715,
          3.3715
        ],
        [
          3.3190299999999997,
          3.3190299999999997
        ],
        [
          3.26656,
          3.26656
        ],
        [
          3.21409,
          3.21409
        ],
        [
          3.1616199999999997,
          3.1616199999999997
        ],
        [
          3.1091499999999996,
          3.1091499999999996
        ],
        [
          3.05668,
          3.05668
        ],
        [
          3.0042099999999996,
          3.0042099999999996
        ],
        [
          2.9517399999999996,
          2.9517399999999996
        ],
        [
          2.8992699999999996,
          2.8992699999999996
        ],
        [
          2.8468,
          2.8468
        ],
        [
          2.7943299999999995,
          2.7943299999999995
        ],
        [
          2.7418599999999995,
          2.7418599999999995
        ],
        [
          2.6893900000000004,
          2.6893900000000004
        ],
        [
          2.636920000000001,
          2.636920000000001
        ],
        [
          2.5844500000000004,
          2.5844500000000004
        ],
        [
          2.5319800000000003,
          2.5319800000000003
        ],
        [
          2.4795100000000003,
          2.4795100000000003
        ],
        [
          2.4270400000000003,
          2.4270400000000003
        ],
        [
          2.3745700000000003,
          2.3745700000000003
        ],
        [
          2.3221000000000003,
          2.3221000000000003
        ],
        [
          2.2696300000000003,
          2.2696300000000003
        ],
        [
          2.21716,
          2.21716
        ],
        [
          2.1646900000000002,
          2.1646900000000002
        ],
        [
          2.1122199999999998,
          2.1122199999999998
        ],
        [
          2.05975,
          2.05975
        ],
        [
          2.00728,
          2.00728
        ],
        [
          1.95481,
          1.95481
        ],
        [
          1.9023400000000001,
          1.9023400000000001
        ],
        [
          1.8498699999999997,
          1.8498699999999997
        ],
        [
          1.7973999999999999,
          1.7973999999999999
        ],
        [
          1.7449299999999996,
          1.7449299999999996
        ],
        [
          1.6924599999999996,
          1.6924599999999996
        ],
        [
          1.6399899999999996,
          1.6399899999999996
        ],
        [
          1.5875199999999996,
          1.5875199999999996
        ],
        [
          1.5350499999999996,
          1.5350499999999996
        ],
        [
          1.4825799999999996,
          1.4825799999999996
        ],
        [
          1.4301099999999995,
          1.4301099999999995
        ],
        [
          1.3776400000000006,
          1.3776400000000006
        ],
        [
          1.3251700000000006,
          1.3251700000000006
        ],
        [
          1.2727000000000004,
          1.2727000000000004
        ],
        [
          1.2202300000000004,
          1.2202300000000004
        ],
        [
          1.1677600000000004,
          1.1677600000000004
        ],
        [
          1.1152900000000003,
          1.1152900000000003
        ],
        [
          1.0628200000000003,
          1.0628200000000003
        ],
        [
          1.0103500000000003,
          1.0103500000000003
        ],
        [
          0.9578800000000002,
          0.9578800000000002
        ],
        [
          0.9054100000000002,
          0.9054100000000002
        ],
        [
          0.8529400000000001,
          0.8529400000000001
        ],
        [
          0.80047,
          0.80047
        ],
        [
          0.748,
          0.748
        ]
      ]
    },
    "16A": {
      "label": "G2–G3",
      "values": [
        [
          2.103,
          2.103
        ],
        [
          2.0793502346956654,
          2.0793502346956654
        ],
        [
          2.0563021575259164,
          2.0563021575259164
        ],
        [
          2.033852344414626,
          2.033852344414626
        ],
        [
          2.011997529648653,
          2.011997529648653
        ],
        [
          1.990734602301889,
          1.990734602301889
        ],
        [
          1.9700606028347192,
          1.9700606028347192
        ],
        [
          1.949972719860856,
          1.949972719860856
        ],
        [
          1.9304682870743584,
          1.9304682870743584
        ],
        [
          1.911544780329896,
          1.911544780329896
        ],
        [
          1.893199814869762,
          1.893199814869762
        ],
        [
          1.8754311426916939,
          1.8754311426916939
        ],
        [
          1.8582366500515484,
          1.8582366500515484
        ],
        [
          1.841614355095583,
          1.841614355095583
        ],
        [
          1.8255624056172177,
          1.8255624056172177
        ],
        [
          1.8100790769335582,
          1.8100790769335582
        ],
        [
          1.7951627698771002,
          1.7951627698771002
        ],
        [
          1.7808120088984367,
          1.7808120088984367
        ],
        [
          1.7670254402760115,
          1.7670254402760115
        ],
        [
          1.753801830429131,
          1.753801830429131
        ],
        [
          1.7411400643307484,
          1.7411400643307484
        ],
        [
          1.7290391440166797,
          1.7290391440166797
        ],
        [
          1.7174981871880899,
          1.7174981871880899
        ],
        [
          1.70651642590461,
          1.70651642590461
        ],
        [
          1.6960932053648765,
          1.6960932053648765
        ],
        [
          1.6862279827723583,
          1.6862279827723583
        ],
        [
          1.67692032628376,
          1.67692032628376
        ],
        [
          1.6681699140378825,
          1.6681699140378825
        ],
        [
          1.6599765332629381,
          1.6599765332629381
        ],
        [
          1.6523400794599503,
          1.6523400794599503
        ],
        [
          1.6452605556609026,
          1.6452605556609026
        ],
        [
          1.638738071759553,
          1.638738071759553
        ],
        [
          1.6327728439134876,
          1.6327728439134876
        ],
        [
          1.627365194015864,
          1.627365194015864
        ],
        [
          1.6225155492355512,
          1.6225155492355512
        ],
        [
          1.6182244416242586,
          1.6182244416242586
        ],
        [
          1.6144925077898193,
          1.6144925077898193
        ],
        [
          1.6113204886340533,
          1.6113204886340533
        ],
        [
          1.6087092291547958,
          1.6087092291547958
        ],
        [
          1.606659678310809,
          1.606659678310809
        ],
        [
          1.6051728889490224,
          1.6051728889490224
        ],
        [
          1.6042500177933476,
          1.6042500177933476
        ],
        [
          1.603892325494403,
          1.603892325494403
        ],
        [
          1.604101176739638,
          1.604101176739638
        ],
        [
          1.604878040423479,
          1.604878040423479
        ],
        [
          1.6062244898770874,
          1.6062244898770874
        ],
        [
          1.6081422031573123,
          1.6081422031573123
        ],
        [
          1.6106329633948153,
          1.6106329633948153
        ],
        [
          1.6136986592010345,
          1.6136986592010345
        ],
        [
          1.6173412851341045,
          1.6173412851341045
        ],
        [
          1.6215629422234663,
          1.6215629422234663
        ],
        [
          1.6263658385535233,
          1.6263658385535233
        ],
        [
          1.6317522899062329,
          1.6317522899062329
        ],
        [
          1.637724720462911,
          1.637724720462911
        ],
        [
          1.6442856635656788,
          1.6442856635656788
        ],
        [
          1.651437762538551,
          1.651437762538551
        ],
        [
          1.6591837715689408,
          1.6591837715689408
        ],
        [
          1.6675265566498307,
          1.6675265566498307
        ],
        [
          1.676469096583082,
          1.676469096583082
        ],
        [
          1.6860144840448896,
          1.6860144840448896
        ],
        [
          1.6961659267135083,
          1.6961659267135083
        ],
        [
          1.7069267484604769,
          1.7069267484604769
        ],
        [
          1.7183003906058847,
          1.7183003906058847
        ],
        [
          1.7302904132386772,
          1.7302904132386772
        ],
        [
          1.7429004966029815,
          1.7429004966029815
        ],
        [
          1.7561344425513568,
          1.7561344425513568
        ],
        [
          1.769996176066412,
          1.769996176066412
        ],
        [
          1.7844897468513743,
          1.7844897468513743
        ],
        [
          1.7996193309916677,
          1.7996193309916677
        ],
        [
          1.8153892326881813,
          1.8153892326881813
        ],
        [
          1.831803886063959,
          1.831803886063959
        ],
        [
          1.8488678570458354,
          1.8488678570458354
        ],
        [
          1.8665858453224793,
          1.8665858453224793
        ],
        [
          1.8849626863806979,
          1.8849626863806979
        ],
        [
          1.904003353621592,
          1.904003353621592
        ],
        [
          1.9237129605585963,
          1.9237129605585963
        ],
        [
          1.9440967630993224,
          1.9440967630993224
        ],
        [
          1.9651601619131007,
          1.9651601619131007
        ],
        [
          1.9869087048868597,
          1.9869087048868597
        ],
        [
          2.0093480896708886,
          2.0093480896708886
        ],
        [
          2.0324841663175874,
          2.0324841663175874
        ],
        [
          2.056322940015283,
          2.056322940015283
        ],
        [
          2.0808705739198246,
          2.0808705739198246
        ],
        [
          2.1061333920867167,
          2.1061333920867167
        ],
        [
          2.1321178825066696,
          2.1321178825066696
        ],
        [
          2.1588307002475027,
          2.1588307002475027
        ],
        [
          2.1862786707055903,
          2.1862786707055903
        ],
        [
          2.2144687929700826,
          2.2144687929700826
        ],
        [
          2.2434082433034064,
          2.2434082433034064
        ],
        [
          2.273104378741495,
          2.273104378741495
        ],
        [
          2.303564740817553,
          2.303564740817553
        ],
        [
          2.334797059413429,
          2.334797059413429
        ],
        [
          2.366809256742247,
          2.366809256742247
        ],
        [
          2.3996094514671515,
          2.3996094514671515
        ],
        [
          2.433205962960006,
          2.433205962960006
        ],
        [
          2.4676073157052585,
          2.4676073157052585
        ],
        [
          2.502822243853444,
          2.502822243853444
        ],
        [
          2.53885969592959,
          2.53885969592959
        ],
        [
          2.575728839701812,
          2.575728839701812
        ],
        [
          2.6134390672156886,
          2.6134390672156886
        ],
        [
          2.652,
          2.652
        ],
        [
          2.63183144795234,
          2.63183144795234
        ],
        [
          2.6120054174542844,
          2.6120054174542844
        ],
        [
          2.5925197429211657,
          2.5925197429211657
        ],
        [
          2.5733723087095903,
          2.5733723087095903
        ],
        [
          2.554561048088022,
          2.554561048088022
        ],
        [
          2.536083942239774,
          2.536083942239774
        ],
        [
          2.517939019296854,
          2.517939019296854
        ],
        [
          2.500124353403958,
          2.500124353403958
        ],
        [
          2.482638063811244,
          2.482638063811244
        ],
        [
          2.465478313994989,
          2.465478313994989
        ],
        [
          2.4486433108054264,
          2.4486433108054264
        ],
        [
          2.432131303640354,
          2.432131303640354
        ],
        [
          2.415940583644108,
          2.415940583644108
        ],
        [
          2.400069482930796,
          2.400069482930796
        ],
        [
          2.384516373831019,
          2.384516373831019
        ],
        [
          2.369279668161397,
          2.369279668161397
        ],
        [
          2.3543578165160532,
          2.3543578165160532
        ],
        [
          2.3397493075794245,
          2.3397493075794245
        ],
        [
          2.3254526674595617,
          2.3254526674595617
        ],
        [
          2.311466459041597,
          2.311466459041597
        ],
        [
          2.2977892813602665,
          2.2977892813602665
        ],
        [
          2.2844197689913237,
          2.2844197689913237
        ],
        [
          2.271356591460968,
          2.271356591460968
        ],
        [
          2.2585984526728815,
          2.2585984526728815
        ],
        [
          2.2461440903523133,
          2.2461440903523133
        ],
        [
          2.233992275506605,
          2.233992275506605
        ],
        [
          2.222141811901782,
          2.222141811901782
        ],
        [
          2.210591535554588,
          2.210591535554588
        ],
        [
          2.199340314239688,
          2.199340314239688
        ],
        [
          2.1883870470115063,
          2.1883870470115063
        ],
        [
          2.1777306637400855,
          2.1777306637400855
        ],
        [
          2.167370124660966,
          2.167370124660966
        ],
        [
          2.15730441993826,
          2.15730441993826
        ],
        [
          2.1475325692409513,
          2.1475325692409513
        ],
        [
          2.1380536213315366,
          2.1380536213315366
        ],
        [
          2.128866653667341,
          2.128866653667341
        ],
        [
          2.119970772013442,
          2.119970772013442
        ],
        [
          2.111365110067428,
          2.111365110067428
        ],
        [
          2.103048829095478,
          2.103048829095478
        ],
        [
          2.0950211175792077,
          2.0950211175792077
        ],
        [
          2.0872811908735898,
          2.0872811908735898
        ],
        [
          2.079828290875078,
          2.079828290875078
        ],
        [
          2.0726616856999343,
          2.0726616856999343
        ],
        [
          2.065780669372458,
          2.065780669372458
        ],
        [
          2.0591845615229367,
          2.0591845615229367
        ],
        [
          2.052872707094945,
          2.052872707094945
        ],
        [
          2.0468444760618176,
          2.0468444760618176
        ],
        [
          2.041099263152102,
          2.041099263152102
        ],
        [
          2.035636487583673,
          2.035636487583673
        ],
        [
          2.030455592806536,
          2.030455592806536
        ],
        [
          2.025556046253694,
          2.025556046253694
        ],
        [
          2.0209373391004064,
          2.0209373391004064
        ],
        [
          2.0165989860312337,
          2.0165989860312337
        ],
        [
          2.0125405250147566,
          2.0125405250147566
        ],
        [
          2.0087615170861923,
          2.0087615170861923
        ],
        [
          2.0052615461370635,
          2.0052615461370635
        ],
        [
          2.0020402187123487,
          2.0020402187123487
        ],
        [
          1.9990971638146249,
          1.9990971638146249
        ],
        [
          1.9964320327151697,
          1.9964320327151697
        ],
        [
          1.9940444987720092,
          1.9940444987720092
        ],
        [
          1.9919342572543037,
          1.9919342572543037
        ],
        [
          1.9901010251736189,
          1.9901010251736189
        ],
        [
          1.9885445411212856,
          1.9885445411212856
        ],
        [
          1.987264565112337,
          1.987264565112337
        ],
        [
          1.986260878435278,
          1.986260878435278
        ],
        [
          1.9855332835080688,
          1.9855332835080688
        ],
        [
          1.9850816037400953,
          1.9850816037400953
        ],
        [
          1.984905683399763,
          1.984905683399763
        ],
        [
          1.9850053874878775,
          1.9850053874878775
        ],
        [
          1.9853806016167859,
          1.9853806016167859
        ],
        [
          1.9860312318947742,
          1.9860312318947742
        ],
        [
          1.9869572048160897,
          1.9869572048160897
        ],
        [
          1.988158467156179,
          1.988158467156179
        ],
        [
          1.9896349858723248,
          1.9896349858723248
        ],
        [
          1.9913867480092264,
          1.9913867480092264
        ],
        [
          1.9934137606098687,
          1.9934137606098687
        ],
        [
          1.9957160506313691,
          1.9957160506313691
        ],
        [
          1.9982936648656455,
          1.9982936648656455
        ],
        [
          2.001146669865154,
          2.001146669865154
        ],
        [
          2.00427515187328,
          2.00427515187328
        ],
        [
          2.0076792167594775,
          2.0076792167594775
        ],
        [
          2.0113589899593087,
          2.0113589899593087
        ],
        [
          2.015314616418749,
          2.015314616418749
        ],
        [
          2.0195462605434074,
          2.0195462605434074
        ],
        [
          2.024054106152139,
          2.024054106152139
        ],
        [
          2.0288383564349814,
          2.0288383564349814
        ],
        [
          2.033899233915786,
          2.033899233915786
        ],
        [
          2.039236980419062,
          2.039236980419062
        ],
        [
          2.0448518570411487,
          2.0448518570411487
        ],
        [
          2.050744144125879,
          2.050744144125879
        ],
        [
          2.056914141244075,
          2.056914141244075
        ],
        [
          2.063362167177818,
          2.063362167177818
        ],
        [
          2.0700885599085304,
          2.0700885599085304
        ],
        [
          2.077093676609273,
          2.077093676609273
        ],
        [
          2.084377893641303,
          2.084377893641303
        ],
        [
          2.0919416065546024,
          2.0919416065546024
        ],
        [
          2.099785230092529,
          2.099785230092529
        ],
        [
          2.107909198200602,
          2.107909198200602
        ],
        [
          2.1163139640391293,
          2.1163139640391293
        ],
        [
          2.125,
          2.125
        ]
      ]
    },
    "18A": {
      "label": "G3–G4",
      "values": [
        [
          7.159,
          7.159
        ],
        [
          7.276619765304334,
          7.276619765304334
        ],
        [
          7.393637842474083,
          7.393637842474083
        ],
        [
          7.510057655585372,
          7.510057655585372
        ],
        [
          7.625882470351346,
          7.625882470351346
        ],
        [
          7.741115397698111,
          7.741115397698111
        ],
        [
          7.855759397165281,
          7.855759397165281
        ],
        [
          7.969817280139143,
          7.969817280139143
        ],
        [
          8.083291712925643,
          8.083291712925643
        ],
        [
          8.196185219670104,
          8.196185219670104
        ],
        [
          8.308500185130239,
          8.308500185130239
        ],
        [
          8.420238857308306,
          8.420238857308306
        ],
        [
          8.531403349948452,
          8.531403349948452
        ],
        [
          8.641995644904416,
          8.641995644904416
        ],
        [
          8.752017594382782,
          8.752017594382782
        ],
        [
          8.861470923066442,
          8.861470923066442
        ],
        [
          8.9703572301229,
          8.9703572301229
        ],
        [
          9.078677991101562,
          9.078677991101562
        ],
        [
          9.186434559723988,
          9.186434559723988
        ],
        [
          9.29362816957087,
          9.29362816957087
        ],
        [
          9.400259935669252,
          9.400259935669252
        ],
        [
          9.50633085598332,
          9.50633085598332
        ],
        [
          9.61184181281191,
          9.61184181281191
        ],
        [
          9.71679357409539,
          9.71679357409539
        ],
        [
          9.821186794635123,
          9.821186794635123
        ],
        [
          9.925022017227644,
          9.925022017227644
        ],
        [
          10.028299673716239,
          10.028299673716239
        ],
        [
          10.131020085962117,
          10.131020085962117
        ],
        [
          10.233183466737064,
          10.233183466737064
        ],
        [
          10.33478992054005,
          10.33478992054005
        ],
        [
          10.435839444339097,
          10.435839444339097
        ],
        [
          10.536331928240447,
          10.536331928240447
        ],
        [
          10.636267156086511,
          10.636267156086511
        ],
        [
          10.735644805984135,
          10.735644805984135
        ],
        [
          10.834464450764449,
          10.834464450764449
        ],
        [
          10.932725558375742,
          10.932725558375742
        ],
        [
          11.030427492210183,
          11.030427492210183
        ],
        [
          11.127569511365946,
          11.127569511365946
        ],
        [
          11.224150770845204,
          11.224150770845204
        ],
        [
          11.32017032168919,
          11.32017032168919
        ],
        [
          11.415627111050979,
          11.415627111050979
        ],
        [
          11.510519982206652,
          11.510519982206652
        ],
        [
          11.6048476745056,
          11.6048476745056
        ],
        [
          11.698608823260363,
          11.698608823260363
        ],
        [
          11.791801959576524,
          11.791801959576524
        ],
        [
          11.884425510122915,
          11.884425510122915
        ],
        [
          11.976477796842689,
          11.976477796842689
        ],
        [
          12.067957036605184,
          12.067957036605184
        ],
        [
          12.158861340798968,
          12.158861340798968
        ],
        [
          12.249188714865896,
          12.249188714865896
        ],
        [
          12.338937057776533,
          12.338937057776533
        ],
        [
          12.428104161446479,
          12.428104161446479
        ],
        [
          12.516687710093768,
          12.516687710093768
        ],
        [
          12.604685279537092,
          12.604685279537092
        ],
        [
          12.692094336434323,
          12.692094336434323
        ],
        [
          12.77891223746145,
          12.77891223746145
        ],
        [
          12.865136228431062,
          12.865136228431062
        ],
        [
          12.950763443350167,
          12.950763443350167
        ],
        [
          13.035790903416919,
          13.035790903416919
        ],
        [
          13.12021551595511,
          13.12021551595511
        ],
        [
          13.204034073286493,
          13.204034073286493
        ],
        [
          13.287243251539524,
          13.287243251539524
        ],
        [
          13.369839609394118,
          13.369839609394118
        ],
        [
          13.451819586761324,
          13.451819586761324
        ],
        [
          13.533179503397019,
          13.533179503397019
        ],
        [
          13.613915557448646,
          13.613915557448646
        ],
        [
          13.69402382393359,
          13.69402382393359
        ],
        [
          13.77350025314863,
          13.77350025314863
        ],
        [
          13.852340669008335,
          13.852340669008335
        ],
        [
          13.93054076731182,
          13.93054076731182
        ],
        [
          14.008096113936041,
          14.008096113936041
        ],
        [
          14.085002142954163,
          14.085002142954163
        ],
        [
          14.161254154677522,
          14.161254154677522
        ],
        [
          14.236847313619302,
          14.236847313619302
        ],
        [
          14.31177664637841,
          14.31177664637841
        ],
        [
          14.386037039441405,
          14.386037039441405
        ],
        [
          14.459623236900677,
          14.459623236900677
        ],
        [
          14.532529838086901,
          14.532529838086901
        ],
        [
          14.604751295113141,
          14.604751295113141
        ],
        [
          14.676281910329115,
          14.676281910329115
        ],
        [
          14.747115833682415,
          14.747115833682415
        ],
        [
          14.817247059984718,
          14.817247059984718
        ],
        [
          14.886669426080175,
          14.886669426080175
        ],
        [
          14.955376607913282,
          14.955376607913282
        ],
        [
          15.023362117493331,
          15.023362117493331
        ],
        [
          15.090619299752497,
          15.090619299752497
        ],
        [
          15.157141329294411,
          15.157141329294411
        ],
        [
          15.222921207029918,
          15.222921207029918
        ],
        [
          15.287951756696597,
          15.287951756696597
        ],
        [
          15.352225621258507,
          15.352225621258507
        ],
        [
          15.415735259182448,
          15.415735259182448
        ],
        [
          15.478472940586574,
          15.478472940586574
        ],
        [
          15.540430743257755,
          15.540430743257755
        ],
        [
          15.601600548532852,
          15.601600548532852
        ],
        [
          15.661974037039997,
          15.661974037039997
        ],
        [
          15.721542684294743,
          15.721542684294743
        ],
        [
          15.780297756146556,
          15.780297756146556
        ],
        [
          15.838230304070409,
          15.838230304070409
        ],
        [
          15.89533116029819,
          15.89533116029819
        ],
        [
          15.951590932784312,
          15.951590932784312
        ],
        [
          16.007,
          16.007
        ],
        [
          16.13653855204766,
          16.13653855204766
        ],
        [
          16.265734582545715,
          16.265734582545715
        ],
        [
          16.394590257078836,
          16.394590257078836
        ],
        [
          16.523107691290413,
          16.523107691290413
        ],
        [
          16.65128895191198,
          16.65128895191198
        ],
        [
          16.77913605776023,
          16.77913605776023
        ],
        [
          16.906650980703148,
          16.906650980703148
        ],
        [
          17.033835646596042,
          17.033835646596042
        ],
        [
          17.160691936188755,
          17.160691936188755
        ],
        [
          17.28722168600501,
          17.28722168600501
        ],
        [
          17.413426689194576,
          17.413426689194576
        ],
        [
          17.539308696359647,
          17.539308696359647
        ],
        [
          17.664869416355895,
          17.664869416355895
        ],
        [
          17.790110517069206,
          17.790110517069206
        ],
        [
          17.91503362616898,
          17.91503362616898
        ],
        [
          18.0396403318386,
          18.0396403318386
        ],
        [
          18.163932183483947,
          18.163932183483947
        ],
        [
          18.287910692420578,
          18.287910692420578
        ],
        [
          18.411577332540443,
          18.411577332540443
        ],
        [
          18.534933540958406,
          18.534933540958406
        ],
        [
          18.657980718639735,
          18.657980718639735
        ],
        [
          18.780720231008676,
          18.780720231008676
        ],
        [
          18.903153408539033,
          18.903153408539033
        ],
        [
          19.02528154732712,
          19.02528154732712
        ],
        [
          19.14710590964769,
          19.14710590964769
        ],
        [
          19.2686277244934,
          19.2686277244934
        ],
        [
          19.389848188098217,
          19.389848188098217
        ],
        [
          19.510768464445412,
          19.510768464445412
        ],
        [
          19.63138968576031,
          19.63138968576031
        ],
        [
          19.751712952988495,
          19.751712952988495
        ],
        [
          19.871739336259914,
          19.871739336259914
        ],
        [
          19.991469875339035,
          19.991469875339035
        ],
        [
          20.110905580061743,
          20.110905580061743
        ],
        [
          20.23004743075905,
          20.23004743075905
        ],
        [
          20.348896378668464,
          20.348896378668464
        ],
        [
          20.46745334633266,
          20.46745334633266
        ],
        [
          20.58571922798656,
          20.58571922798656
        ],
        [
          20.703694889932574,
          20.703694889932574
        ],
        [
          20.821381170904527,
          20.821381170904527
        ],
        [
          20.93877888242079,
          20.93877888242079
        ],
        [
          21.055888809126408,
          21.055888809126408
        ],
        [
          21.172711709124922,
          21.172711709124922
        ],
        [
          21.289248314300067,
          21.289248314300067
        ],
        [
          21.405499330627542,
          21.405499330627542
        ],
        [
          21.521465438477065,
          21.521465438477065
        ],
        [
          21.637147292905052,
          21.637147292905052
        ],
        [
          21.75254552393818,
          21.75254552393818
        ],
        [
          21.8676607368479,
          21.8676607368479
        ],
        [
          21.98249351241633,
          21.98249351241633
        ],
        [
          22.097044407193465,
          22.097044407193465
        ],
        [
          22.21131395374631,
          22.21131395374631
        ],
        [
          22.325302660899595,
          22.325302660899595
        ],
        [
          22.439011013968766,
          22.439011013968766
        ],
        [
          22.552439474985245,
          22.552439474985245
        ],
        [
          22.665588482913808,
          22.665588482913808
        ],
        [
          22.77845845386294,
          22.77845845386294
        ],
        [
          22.891049781287652,
          22.891049781287652
        ],
        [
          23.003362836185378,
          23.003362836185378
        ],
        [
          23.115397967284835,
          23.115397967284835
        ],
        [
          23.22715550122799,
          23.22715550122799
        ],
        [
          23.338635742745698,
          23.338635742745698
        ],
        [
          23.44983897482638,
          23.44983897482638
        ],
        [
          23.560765458878716,
          23.560765458878716
        ],
        [
          23.671415434887663,
          23.671415434887663
        ],
        [
          23.781789121564717,
          23.781789121564717
        ],
        [
          23.89188671649193,
          23.89188671649193
        ],
        [
          24.001708396259904,
          24.001708396259904
        ],
        [
          24.111254316600238,
          24.111254316600238
        ],
        [
          24.220524612512122,
          24.220524612512122
        ],
        [
          24.329519398383212,
          24.329519398383212
        ],
        [
          24.43823876810523,
          24.43823876810523
        ],
        [
          24.54668279518391,
          24.54668279518391
        ],
        [
          24.654851532843818,
          24.654851532843818
        ],
        [
          24.762745014127677,
          24.762745014127677
        ],
        [
          24.870363251990774,
          24.870363251990774
        ],
        [
          24.977706239390134,
          24.977706239390134
        ],
        [
          25.084773949368632,
          25.084773949368632
        ],
        [
          25.191566335134358,
          25.191566335134358
        ],
        [
          25.298083330134848,
          25.298083330134848
        ],
        [
          25.40432484812672,
          25.40432484812672
        ],
        [
          25.510290783240524,
          25.510290783240524
        ],
        [
          25.61598101004069,
          25.61598101004069
        ],
        [
          25.721395383581253,
          25.721395383581253
        ],
        [
          25.826533739456593,
          25.826533739456593
        ],
        [
          25.93139589384786,
          25.93139589384786
        ],
        [
          26.035981643565016,
          26.035981643565016
        ],
        [
          26.140290766084217,
          26.140290766084217
        ],
        [
          26.244323019580936,
          26.244323019580936
        ],
        [
          26.34807814295885,
          26.34807814295885
        ],
        [
          26.45155585587412,
          26.45155585587412
        ],
        [
          26.55475585875593,
          26.55475585875593
        ],
        [
          26.65767783282218,
          26.65767783282218
        ],
        [
          26.760321440091467,
          26.760321440091467
        ],
        [
          26.86268632339073,
          26.86268632339073
        ],
        [
          26.964772106358698,
          26.964772106358698
        ],
        [
          27.066578393445397,
          27.066578393445397
        ],
        [
          27.168104769907472,
          27.168104769907472
        ],
        [
          27.269350801799398,
          27.269350801799398
        ],
        [
          27.370316035960872,
          27.370316035960872
        ],
        [
          27.471,
          27.471
        ]
      ]
    }
  },
  "aperture": {
    "fStops": [
      3.6,
      4,
      4.7,
      5.6,
      6.49,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22,
    "blades": 9
  },
  "rearPlates": [
    {
      "label": "PP",
      "thicknessMm": 2.85,
      "nd": 1.5168,
      "vd": 64.2,
      "glass": "BSC7 (HOYA)",
      "dPgF": -0.0015156000000000613,
      "gapAfterMm": 1.019,
      "source": "CN122410763A, Example1 Table1 source21–22, PDFp20"
    }
  ],
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1A",
      "toSurface": "6"
    },
    {
      "text": "G2",
      "fromSurface": "7A",
      "toSurface": "16A"
    },
    {
      "text": "G3",
      "fromSurface": "17A",
      "toSurface": "18A"
    },
    {
      "text": "G4",
      "fromSurface": "19",
      "toSurface": "20"
    }
  ],
  "doublets": [
    {
      "text": "OIS",
      "fromSurface": "10",
      "toSurface": "12"
    }
  ],
  "layout": {
    "yScFill": 0.34
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
