import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "fujifilm-fujinon-xc-13-33mm-f35-63-ois",
  "maker": "Fujifilm",
  "name": "FUJIFILM FUJINON XC 13-33mm f/3.5-6.3 OIS",
  "subtitle": "CN 122410763 A — Example 1",
  "catalog": {
    "lensMounts": [
      "fujifilm-x"
    ],
    "imageFormat": "aps-c",
    "specs": [
      "10 ELEMENTS / 9 GROUPS",
      "DESIGN f = 13.39-32.14 mm",
      "DESIGN F/3.60-6.49",
      "8 ASPHERICAL SURFACES / 4 ELEMENTS",
      "3 ED ELEMENTS"
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
      "apdNote": "Patent θgF 0.56996, stored as dPgF against the normal line.",
      "role": "Front negative meniscus of the negative first group G1, convex to the object; both faces aspherical.",
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
      "apd": "inferred",
      "apdNote": "Fujifilm's construction diagram marks this position as one of three ED elements. Patent θgF 0.53706, stored as dPgF against the normal line.",
      "role": "Second negative meniscus of G1, convex to the object.",
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
      "apdNote": "Patent θgF 0.59935, stored as dPgF against the normal line.",
      "role": "Positive meniscus that closes G1, convex to the object.",
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
      "apdNote": "Patent θgF 0.53913, stored as dPgF against the normal line.",
      "role": "Biconvex positive lens that opens the positive second group G2, just ahead of the aperture stop; both faces aspherical.",
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
      "apdNote": "Patent θgF 0.55544, stored as dPgF against the normal line.",
      "role": "Negative meniscus at the front of the cemented pair just behind the stop; the L22–L23 pair is the OIS group, which shifts across the axis for image stabilization.",
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
      "apd": "inferred",
      "apdNote": "Fujifilm's construction diagram marks this position as one of three ED elements. Patent θgF 0.53954, stored as dPgF against the normal line.",
      "role": "Biconvex positive rear member of the cemented L22–L23 OIS pair.",
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
      "apdNote": "Patent θgF 0.58998, stored as dPgF against the normal line.",
      "role": "Thin biconcave negative lens behind the OIS pair, inside G2.",
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
      "apd": "inferred",
      "apdNote": "Fujifilm's construction diagram marks this position as one of three ED elements. Patent θgF 0.53848, stored as dPgF against the normal line.",
      "role": "Biconvex positive lens that closes G2; both faces aspherical.",
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
      "apdNote": "Patent θgF 0.5532, stored as dPgF against the normal line.",
      "role": "Negative meniscus, concave to the object, that forms the third group G3: the focus group, which moves toward the image for closer subjects (focus travel is not modeled).",
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
      "apdNote": "Patent θgF 0.55165, stored as dPgF against the normal line.",
      "role": "Positive meniscus, convex to the image, that forms the fourth group G4; fixed relative to the image during zoom.",
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
      "sd": 4.645,
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
      "sd": 4.28,
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
      "sd": 5.995,
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
      "sd": 12.48,
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
        "focalLengthMm": 13.736546130008138,
        "nominalFNumber": 3.655
      },
      {
        "published": false,
        "focalLengthMm": 14.08936883601716,
        "nominalFNumber": 3.7100000000000004
      },
      {
        "published": false,
        "focalLengthMm": 14.451176529051995,
        "nominalFNumber": 3.765
      },
      {
        "published": false,
        "focalLengthMm": 14.82249125290126,
        "nominalFNumber": 3.8200000000000003
      },
      {
        "published": false,
        "focalLengthMm": 15.203854751028157,
        "nominalFNumber": 3.875
      },
      {
        "published": false,
        "focalLengthMm": 15.595831395508158,
        "nominalFNumber": 3.9299999999999997
      },
      {
        "published": false,
        "focalLengthMm": 15.999011106816425,
        "nominalFNumber": 3.9850000000000003
      },
      {
        "published": false,
        "focalLengthMm": 16.41401230902107,
        "nominalFNumber": 4.04
      },
      {
        "published": false,
        "focalLengthMm": 16.84148495826843,
        "nominalFNumber": 4.095000000000001
      },
      {
        "published": false,
        "focalLengthMm": 17.282113677388377,
        "nominalFNumber": 4.15
      },
      {
        "published": false,
        "focalLengthMm": 17.73662102542799,
        "nominalFNumber": 4.205
      },
      {
        "published": false,
        "focalLengthMm": 18.20577092747263,
        "nominalFNumber": 4.26
      },
      {
        "published": false,
        "focalLengthMm": 18.690372286821674,
        "nominalFNumber": 4.315
      },
      {
        "published": false,
        "focalLengthMm": 19.191282798036706,
        "nominalFNumber": 4.37
      },
      {
        "published": false,
        "focalLengthMm": 19.709412975123534,
        "nominalFNumber": 4.425000000000001
      },
      {
        "published": false,
        "focalLengthMm": 20.245730403603982,
        "nominalFNumber": 4.48
      },
      {
        "published": false,
        "focalLengthMm": 20.801264217801073,
        "nominalFNumber": 4.535
      },
      {
        "published": false,
        "focalLengthMm": 21.377109794404355,
        "nominalFNumber": 4.590000000000001
      },
      {
        "published": false,
        "focalLengthMm": 21.97443363910134,
        "nominalFNumber": 4.645
      },
      {
        "focalLengthMm": 22.59,
        "nominalFNumber": 4.7
      },
      {
        "published": false,
        "focalLengthMm": 23.007835199438034,
        "nominalFNumber": 4.7895
      },
      {
        "published": false,
        "focalLengthMm": 23.42649340577916,
        "nominalFNumber": 4.8790000000000004
      },
      {
        "published": false,
        "focalLengthMm": 23.850680881759,
        "nominalFNumber": 4.9685
      },
      {
        "published": false,
        "focalLengthMm": 24.28062587329357,
        "nominalFNumber": 5.058
      },
      {
        "published": false,
        "focalLengthMm": 24.716557813047896,
        "nominalFNumber": 5.147500000000001
      },
      {
        "published": false,
        "focalLengthMm": 25.158708038642356,
        "nominalFNumber": 5.237
      },
      {
        "published": false,
        "focalLengthMm": 25.607310460622248,
        "nominalFNumber": 5.3265
      },
      {
        "published": false,
        "focalLengthMm": 26.06260219018309,
        "nominalFNumber": 5.416
      },
      {
        "published": false,
        "focalLengthMm": 26.52482413503557,
        "nominalFNumber": 5.5055
      },
      {
        "published": false,
        "focalLengthMm": 26.994221570507694,
        "nominalFNumber": 5.595000000000001
      },
      {
        "published": false,
        "focalLengthMm": 27.4710446919473,
        "nominalFNumber": 5.6845
      },
      {
        "published": false,
        "focalLengthMm": 27.95554915365391,
        "nominalFNumber": 5.774
      },
      {
        "published": false,
        "focalLengthMm": 28.44799659889233,
        "nominalFNumber": 5.8635
      },
      {
        "published": false,
        "focalLengthMm": 28.948655184991367,
        "nominalFNumber": 5.953
      },
      {
        "published": false,
        "focalLengthMm": 29.457800107082825,
        "nominalFNumber": 6.0424999999999995
      },
      {
        "published": false,
        "focalLengthMm": 29.975714123670667,
        "nominalFNumber": 6.132
      },
      {
        "published": false,
        "focalLengthMm": 30.5026880869194,
        "nominalFNumber": 6.221500000000001
      },
      {
        "published": false,
        "focalLengthMm": 31.039021480305365,
        "nominalFNumber": 6.311
      },
      {
        "published": false,
        "focalLengthMm": 31.58502296607034,
        "nominalFNumber": 6.4005
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
    "closeFocusM": 0.2,
    "description": "The patent prints infinity spacings at wide, middle and tele; focusing is not modeled. The intermediate zoom positions are an inferred reconstruction, not the factory cam: G1 and G2 follow interpolated laws between the printed stations and G3 is solved for infinity focus at each position. The marketed minimum focus distance is 0.2 m."
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
          18.863699999999998,
          18.863699999999998
        ],
        [
          18.1864,
          18.1864
        ],
        [
          17.5091,
          17.5091
        ],
        [
          16.8318,
          16.8318
        ],
        [
          16.154500000000002,
          16.154500000000002
        ],
        [
          15.4772,
          15.4772
        ],
        [
          14.799900000000001,
          14.799900000000001
        ],
        [
          14.1226,
          14.1226
        ],
        [
          13.4453,
          13.4453
        ],
        [
          12.768,
          12.768
        ],
        [
          12.0907,
          12.0907
        ],
        [
          11.413400000000001,
          11.413400000000001
        ],
        [
          10.7361,
          10.7361
        ],
        [
          10.058800000000002,
          10.058800000000002
        ],
        [
          9.381499999999999,
          9.381499999999999
        ],
        [
          8.7042,
          8.7042
        ],
        [
          8.026900000000001,
          8.026900000000001
        ],
        [
          7.3496,
          7.3496
        ],
        [
          6.672300000000001,
          6.672300000000001
        ],
        [
          5.995,
          5.995
        ],
        [
          5.73265,
          5.73265
        ],
        [
          5.470299999999999,
          5.470299999999999
        ],
        [
          5.20795,
          5.20795
        ],
        [
          4.945600000000001,
          4.945600000000001
        ],
        [
          4.68325,
          4.68325
        ],
        [
          4.4209,
          4.4209
        ],
        [
          4.15855,
          4.15855
        ],
        [
          3.8962000000000003,
          3.8962000000000003
        ],
        [
          3.6338500000000002,
          3.6338500000000002
        ],
        [
          3.3715,
          3.3715
        ],
        [
          3.1091499999999996,
          3.1091499999999996
        ],
        [
          2.8468,
          2.8468
        ],
        [
          2.5844500000000004,
          2.5844500000000004
        ],
        [
          2.3221000000000003,
          2.3221000000000003
        ],
        [
          2.05975,
          2.05975
        ],
        [
          1.7973999999999999,
          1.7973999999999999
        ],
        [
          1.5350499999999996,
          1.5350499999999996
        ],
        [
          1.2727000000000004,
          1.2727000000000004
        ],
        [
          1.0103500000000003,
          1.0103500000000003
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
          1.990734602301889,
          1.990734602301889
        ],
        [
          1.893199814869762,
          1.893199814869762
        ],
        [
          1.8100790769335582,
          1.8100790769335582
        ],
        [
          1.7411400643307484,
          1.7411400643307484
        ],
        [
          1.6862279827723583,
          1.6862279827723583
        ],
        [
          1.6452605556609026,
          1.6452605556609026
        ],
        [
          1.6182244416242586,
          1.6182244416242586
        ],
        [
          1.6051728889490224,
          1.6051728889490224
        ],
        [
          1.6062244898770874,
          1.6062244898770874
        ],
        [
          1.6215629422234663,
          1.6215629422234663
        ],
        [
          1.651437762538551,
          1.651437762538551
        ],
        [
          1.6961659267135083,
          1.6961659267135083
        ],
        [
          1.7561344425513568,
          1.7561344425513568
        ],
        [
          1.831803886063959,
          1.831803886063959
        ],
        [
          1.9237129605585963,
          1.9237129605585963
        ],
        [
          2.0324841663175874,
          2.0324841663175874
        ],
        [
          2.1588307002475027,
          2.1588307002475027
        ],
        [
          2.303564740817553,
          2.303564740817553
        ],
        [
          2.4676073157052585,
          2.4676073157052585
        ],
        [
          2.652,
          2.652
        ],
        [
          2.554561048088022,
          2.554561048088022
        ],
        [
          2.465478313994989,
          2.465478313994989
        ],
        [
          2.384516373831019,
          2.384516373831019
        ],
        [
          2.311466459041597,
          2.311466459041597
        ],
        [
          2.2461440903523133,
          2.2461440903523133
        ],
        [
          2.1883870470115063,
          2.1883870470115063
        ],
        [
          2.1380536213315366,
          2.1380536213315366
        ],
        [
          2.0950211175792077,
          2.0950211175792077
        ],
        [
          2.0591845615229367,
          2.0591845615229367
        ],
        [
          2.030455592806536,
          2.030455592806536
        ],
        [
          2.0087615170861923,
          2.0087615170861923
        ],
        [
          1.9940444987720092,
          1.9940444987720092
        ],
        [
          1.986260878435278,
          1.986260878435278
        ],
        [
          1.9853806016167859,
          1.9853806016167859
        ],
        [
          1.9913867480092264,
          1.9913867480092264
        ],
        [
          2.00427515187328,
          2.00427515187328
        ],
        [
          2.024054106152139,
          2.024054106152139
        ],
        [
          2.050744144125879,
          2.050744144125879
        ],
        [
          2.084377893641303,
          2.084377893641303
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
          7.741115397698111,
          7.741115397698111
        ],
        [
          8.308500185130239,
          8.308500185130239
        ],
        [
          8.861470923066442,
          8.861470923066442
        ],
        [
          9.400259935669252,
          9.400259935669252
        ],
        [
          9.925022017227644,
          9.925022017227644
        ],
        [
          10.435839444339097,
          10.435839444339097
        ],
        [
          10.932725558375742,
          10.932725558375742
        ],
        [
          11.415627111050979,
          11.415627111050979
        ],
        [
          11.884425510122915,
          11.884425510122915
        ],
        [
          12.338937057776533,
          12.338937057776533
        ],
        [
          12.77891223746145,
          12.77891223746145
        ],
        [
          13.204034073286493,
          13.204034073286493
        ],
        [
          13.613915557448646,
          13.613915557448646
        ],
        [
          14.008096113936041,
          14.008096113936041
        ],
        [
          14.386037039441405,
          14.386037039441405
        ],
        [
          14.747115833682415,
          14.747115833682415
        ],
        [
          15.090619299752497,
          15.090619299752497
        ],
        [
          15.415735259182448,
          15.415735259182448
        ],
        [
          15.721542684294743,
          15.721542684294743
        ],
        [
          16.007,
          16.007
        ],
        [
          16.65128895191198,
          16.65128895191198
        ],
        [
          17.28722168600501,
          17.28722168600501
        ],
        [
          17.91503362616898,
          17.91503362616898
        ],
        [
          18.534933540958406,
          18.534933540958406
        ],
        [
          19.14710590964769,
          19.14710590964769
        ],
        [
          19.751712952988495,
          19.751712952988495
        ],
        [
          20.348896378668464,
          20.348896378668464
        ],
        [
          20.93877888242079,
          20.93877888242079
        ],
        [
          21.521465438477065,
          21.521465438477065
        ],
        [
          22.097044407193465,
          22.097044407193465
        ],
        [
          22.665588482913808,
          22.665588482913808
        ],
        [
          23.22715550122799,
          23.22715550122799
        ],
        [
          23.781789121564717,
          23.781789121564717
        ],
        [
          24.329519398383212,
          24.329519398383212
        ],
        [
          24.870363251990774,
          24.870363251990774
        ],
        [
          25.40432484812672,
          25.40432484812672
        ],
        [
          25.93139589384786,
          25.93139589384786
        ],
        [
          26.45155585587412,
          26.45155585587412
        ],
        [
          26.964772106358698,
          26.964772106358698
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
      "source": "CN 122410763 A Example 1, Table 1, surfaces 21–22: camera-side plate at its printed thickness and image gap"
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
