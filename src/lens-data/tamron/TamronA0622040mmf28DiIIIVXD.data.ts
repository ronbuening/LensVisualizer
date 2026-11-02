import type { LensDataV2Input } from "../../types/lensDataV2.js";
const DATA={
  "schema": 2,
  "key": "tamron-a062-20-40mm-f28-di-iii-vxd",
  "maker": "Tamron",
  "name": "TAMRON 20-40mm f/2.8 Di III VXD (A062)",
  "subtitle": "JP 2022-131391 A — Numerical Example 5",
  "catalog": {
    "lensMounts": [
      "sony-fe",
      "nikon-z"
    ],
    "imageFormat": "135-full-frame",
    "specs": [
      "12 ELEMENTS / 11 GROUPS",
      "DESIGN f = 20.60-38.80 mm",
      "DESIGN F/2.91",
      "5 ASPHERICAL SURFACES / 3 ELEMENTS",
      "4 LD ELEMENTS"
    ],
    "elementCount": 12,
    "groupCount": 11,
    "focalLengthMm": {
      "marketing": [
        20,
        40
      ],
      "design": [
        20.60156173537533,
        38.80068674478797
      ]
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.91
    }
  },
  "source": {
    "patentNumber": "JP 2022-131391 A",
    "example": { "label": "Numerical Example 5", "id": "5" },
    "patentYear": 2022,
    "authors": [
      "Shingo Abe"
    ],
    "assignees": [
      "Tamron Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.72916,
      "vd": 54.67,
      "focalLengthMm": -49.89929345288407,
      "glass": "TAC8 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "G1 front negative meniscus, concave to the image; opens the negative front group."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.497,
      "vd": 81.61,
      "focalLengthMm": -52.31959972018939,
      "glass": "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "HOYA FCD1 coordinate match (νd 81.61); Tamron's construction diagram shades this position as one of four LD elements.",
      "role": "G1 second negative meniscus, concave to the image; one of the four positions Tamron's construction diagram marks LD."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Pos. Meniscus (1× Asph)",
      "nd": 1.58144,
      "vd": 40.75,
      "focalLengthMm": 126.48267384422047,
      "glass": "S-TIL25 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "G1 positive meniscus carrying asphere 5A; Tamron marks this position as its hybrid aspherical element, which the patent tabulates as one medium."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.85025,
      "vd": 30.05,
      "focalLengthMm": 66.02907421354634,
      "glass": "S-NBH57 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "G2 positive meniscus, concave to the image; largely offset by L5, leaving G2 weakly positive."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "nd": 1.6516,
      "vd": 58.55,
      "focalLengthMm": -76.96522678681352,
      "glass": "S-LAL7 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "G2 negative meniscus, convex to the image; the last element ahead of the stop."
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive (2× Asph)",
      "nd": 1.4971,
      "vd": 81.56,
      "focalLengthMm": 36.43101522806286,
      "glass": "M-FCD1 (HOYA catalog equivalent; production supplier unspecified; molded aspherical element)",
      "apd": "inferred",
      "apdNote": "HOYA M-FCD1 coordinate match (νd 81.56); Tamron's construction diagram shades this position as one of four LD elements.",
      "role": "First element after the stop: G3 biconvex positive with aspheres 12A and 13A."
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Negative Meniscus",
      "nd": 1.69895,
      "vd": 30.05,
      "focalLengthMm": -45.66592211032496,
      "glass": "E-FD15 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Front negative meniscus of the D1 cemented pair in G3, concave to the image.",
      "cemented": "D1"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.61,
      "focalLengthMm": 26.067886715609546,
      "glass": "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "HOYA FCD1 coordinate match (νd 81.61); Tamron's construction diagram shades this position as one of four LD elements.",
      "role": "Rear biconvex positive of the D1 cemented pair; completes G3.",
      "cemented": "D1"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Biconcave Negative",
      "nd": 1.48749,
      "vd": 70.44,
      "focalLengthMm": -38.22117924030606,
      "glass": "FC5 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "G4, the single-element negative focus group; moves toward the image for close focus."
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.61,
      "focalLengthMm": 28.618098139383818,
      "glass": "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "HOYA FCD1 coordinate match (νd 81.61); Tamron's construction diagram shades this position as one of four LD elements.",
      "role": "G5 front biconvex positive."
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Biconcave Negative",
      "nd": 1.48749,
      "vd": 70.44,
      "focalLengthMm": -63.054076627358306,
      "glass": "FC5 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "G5 biconcave negative."
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "type": "Neg. Meniscus (2× Asph)",
      "nd": 1.6935,
      "vd": 53.2,
      "focalLengthMm": -78.56422180333739,
      "glass": "M-LAC130 (HOYA catalog equivalent; production supplier unspecified; molded aspherical element)",
      "role": "G5 rear negative meniscus, convex to the image, with aspheres 23A and 24A."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 40.431,
      "d": 1.5,
      "sd": 21.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 18.851,
      "d": 8.3,
      "sd": 15.8,
      "rimExtensionSd": 21.5
    },
    {
      "label": "3",
      "R": 206.724,
      "d": 1.2,
      "sd": 17.4,
      "medium": 2
    },
    {
      "label": "4",
      "R": 23.053,
      "d": 4.75,
      "sd": 14.2,
      "rimExtensionSd": 17.4
    },
    {
      "label": "5A",
      "R": 63.842,
      "d": 3.6,
      "sd": 15,
      "medium": 3,
      "asphere": {
        "A4": 0.0000150123,
        "A6": 1.01378e-8,
        "A8": 1.54171e-10,
        "A10": -5.82881e-13,
        "A12": 1.29706e-15
      }
    },
    {
      "label": "6",
      "R": 473.989,
      "sd": 15
    },
    {
      "label": "7",
      "R": 44.365,
      "d": 2.6,
      "sd": 11.3,
      "medium": 4
    },
    {
      "label": "8",
      "R": 205.807,
      "d": 2.3,
      "sd": 11.3
    },
    {
      "label": "9",
      "R": -26.627,
      "d": 1,
      "sd": 10.18,
      "medium": 5
    },
    {
      "label": "10",
      "R": -57.608,
      "sd": 11.5
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1
    },
    {
      "label": "12A",
      "R": 30.005,
      "d": 5.5,
      "sd": 12.7,
      "medium": 6,
      "asphere": {
        "A4": -0.0000135562,
        "A6": 1.42835e-8,
        "A8": 2.01889e-10,
        "A10": -8.41463e-13,
        "A12": 5.67008e-15
      }
    },
    {
      "label": "13A",
      "R": -42.901,
      "d": 0.2,
      "sd": 12.7,
      "asphere": {
        "A4": 0.0000203313,
        "A6": 2.56042e-8,
        "A8": 7.97875e-12,
        "A10": 6.50224e-13,
        "A12": 2.72603e-15
      }
    },
    {
      "label": "14",
      "R": 67.771,
      "d": 1,
      "sd": 12.7,
      "medium": 7
    },
    {
      "label": "15",
      "R": 21.567,
      "d": 8.3,
      "sd": 12.7,
      "medium": 8
    },
    {
      "label": "16",
      "R": -28.302,
      "sd": 12.7
    },
    {
      "label": "17",
      "R": -225.29,
      "d": 0.8,
      "sd": 10.4,
      "medium": 9
    },
    {
      "label": "18",
      "R": 20.336,
      "sd": 9,
      "rimExtensionSd": 10.4
    },
    {
      "label": "19",
      "R": 28.053,
      "d": 9,
      "sd": 14.2,
      "medium": 10
    },
    {
      "label": "20",
      "R": -25.778,
      "d": 0.36,
      "sd": 14.2
    },
    {
      "label": "21",
      "R": -199.876,
      "d": 1,
      "sd": 13,
      "medium": 11
    },
    {
      "label": "22",
      "R": 36.384,
      "d": 5.6,
      "sd": 13,
      "rimCutDepthMm": 2.05
    },
    {
      "label": "23A",
      "R": -46.528,
      "d": 1.5,
      "sd": 12,
      "rimExtensionSd": 14.5,
      "medium": 12,
      "asphere": {
        "A4": -0.00010439,
        "A6": 3.52369e-7,
        "A8": 8.34182e-12,
        "A10": -5.6518e-12,
        "A12": 4.03488e-15
      }
    },
    {
      "label": "24A",
      "R": -322.828,
      "sd": 14.5,
      "asphere": {
        "A4": -0.0000741185,
        "A6": 4.30076e-7,
        "A8": -4.27344e-10,
        "A10": -3.46987e-12,
        "A12": 8.46178e-15
      }
    }
  ],
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 20.603,
        "published": true
      },
      {
        "focalLengthMm": 20.728476606822753,
        "published": false
      },
      {
        "focalLengthMm": 20.856244413652973,
        "published": false
      },
      {
        "focalLengthMm": 20.98487835956142,
        "published": false
      },
      {
        "focalLengthMm": 21.114391822156577,
        "published": false
      },
      {
        "focalLengthMm": 21.244798358094116,
        "published": false
      },
      {
        "focalLengthMm": 21.37611170829973,
        "published": false
      },
      {
        "focalLengthMm": 21.50834580326604,
        "published": false
      },
      {
        "focalLengthMm": 21.641514768445745,
        "published": false
      },
      {
        "focalLengthMm": 21.77563292972782,
        "published": false
      },
      {
        "focalLengthMm": 21.910714819019077,
        "published": false
      },
      {
        "focalLengthMm": 22.046775179923998,
        "published": false
      },
      {
        "focalLengthMm": 22.183828973530538,
        "published": false
      },
      {
        "focalLengthMm": 22.32189138431501,
        "published": false
      },
      {
        "focalLengthMm": 22.46097782615415,
        "published": false
      },
      {
        "focalLengthMm": 22.60110394846953,
        "published": false
      },
      {
        "focalLengthMm": 22.74228564249718,
        "published": false
      },
      {
        "focalLengthMm": 22.88453904768545,
        "published": false
      },
      {
        "focalLengthMm": 23.02788055824439,
        "published": false
      },
      {
        "focalLengthMm": 23.172326829829643,
        "published": false
      },
      {
        "focalLengthMm": 23.317894786377707,
        "published": false
      },
      {
        "focalLengthMm": 23.464601627112543,
        "published": false
      },
      {
        "focalLengthMm": 23.612464833693423,
        "published": false
      },
      {
        "focalLengthMm": 23.761502177550085,
        "published": false
      },
      {
        "focalLengthMm": 23.911731727392038,
        "published": false
      },
      {
        "focalLengthMm": 24.063171856891614,
        "published": false
      },
      {
        "focalLengthMm": 24.2158412525674,
        "published": false
      },
      {
        "focalLengthMm": 24.36975892186082,
        "published": false
      },
      {
        "focalLengthMm": 24.524944201418634,
        "published": false
      },
      {
        "focalLengthMm": 24.681416765586974,
        "published": false
      },
      {
        "focalLengthMm": 24.8391966351291,
        "published": false
      },
      {
        "focalLengthMm": 24.99830418616662,
        "published": false
      },
      {
        "focalLengthMm": 25.15876015936405,
        "published": false
      },
      {
        "focalLengthMm": 25.320585669354486,
        "published": false
      },
      {
        "focalLengthMm": 25.48380221442345,
        "published": false
      },
      {
        "focalLengthMm": 25.648431686456362,
        "published": false
      },
      {
        "focalLengthMm": 25.814496381157838,
        "published": false
      },
      {
        "focalLengthMm": 25.9820190085606,
        "published": false
      },
      {
        "focalLengthMm": 26.151022703823756,
        "published": false
      },
      {
        "focalLengthMm": 26.321531038341732,
        "published": false
      },
      {
        "focalLengthMm": 26.493568031163633,
        "published": false
      },
      {
        "focalLengthMm": 26.667158160746936,
        "published": false
      },
      {
        "focalLengthMm": 26.842326377052316,
        "published": false
      },
      {
        "focalLengthMm": 27.01909811398305,
        "published": false
      },
      {
        "focalLengthMm": 27.19749930220516,
        "published": false
      },
      {
        "focalLengthMm": 27.377556382330667,
        "published": false
      },
      {
        "focalLengthMm": 27.559296318512665,
        "published": false
      },
      {
        "focalLengthMm": 27.742746612435567,
        "published": false
      },
      {
        "focalLengthMm": 27.927935317729705,
        "published": false
      },
      {
        "focalLengthMm": 28.11489105484368,
        "published": false
      },
      {
        "focalLengthMm": 28.305,
        "published": true
      },
      {
        "focalLengthMm": 28.469716205972176,
        "published": false
      },
      {
        "focalLengthMm": 28.637173319355355,
        "published": false
      },
      {
        "focalLengthMm": 28.806034407301254,
        "published": false
      },
      {
        "focalLengthMm": 28.97631986881767,
        "published": false
      },
      {
        "focalLengthMm": 29.148050469655658,
        "published": false
      },
      {
        "focalLengthMm": 29.321247351076977,
        "published": false
      },
      {
        "focalLengthMm": 29.495932038866385,
        "published": false
      },
      {
        "focalLengthMm": 29.67212645259771,
        "published": false
      },
      {
        "focalLengthMm": 29.84985291514488,
        "published": false
      },
      {
        "focalLengthMm": 30.02913416247638,
        "published": false
      },
      {
        "focalLengthMm": 30.20999335371198,
        "published": false
      },
      {
        "focalLengthMm": 30.392454081467235,
        "published": false
      },
      {
        "focalLengthMm": 30.576540382501577,
        "published": false
      },
      {
        "focalLengthMm": 30.762276748655395,
        "published": false
      },
      {
        "focalLengthMm": 30.94968813811343,
        "published": false
      },
      {
        "focalLengthMm": 31.138799986997213,
        "published": false
      },
      {
        "focalLengthMm": 31.329638221280987,
        "published": false
      },
      {
        "focalLengthMm": 31.522229269070053,
        "published": false
      },
      {
        "focalLengthMm": 31.716600073232428,
        "published": false
      },
      {
        "focalLengthMm": 31.912778104413135,
        "published": false
      },
      {
        "focalLengthMm": 32.11079137442725,
        "published": false
      },
      {
        "focalLengthMm": 32.31066845005526,
        "published": false
      },
      {
        "focalLengthMm": 32.51243846725946,
        "published": false
      },
      {
        "focalLengthMm": 32.71613114582938,
        "published": false
      },
      {
        "focalLengthMm": 32.92177680446764,
        "published": false
      },
      {
        "focalLengthMm": 33.12940637633909,
        "published": false
      },
      {
        "focalLengthMm": 33.339051425105424,
        "published": false
      },
      {
        "focalLengthMm": 33.55074416144973,
        "published": false
      },
      {
        "focalLengthMm": 33.7645174601177,
        "published": false
      },
      {
        "focalLengthMm": 33.98040487748706,
        "published": false
      },
      {
        "focalLengthMm": 34.198440669705036,
        "published": false
      },
      {
        "focalLengthMm": 34.41865981137724,
        "published": false
      },
      {
        "focalLengthMm": 34.64109801487156,
        "published": false
      },
      {
        "focalLengthMm": 34.86579175023108,
        "published": false
      },
      {
        "focalLengthMm": 35.09277826572877,
        "published": false
      },
      {
        "focalLengthMm": 35.3220956090823,
        "published": false
      },
      {
        "focalLengthMm": 35.5537826493735,
        "published": false
      },
      {
        "focalLengthMm": 35.787879099675465,
        "published": false
      },
      {
        "focalLengthMm": 36.024425540421504,
        "published": false
      },
      {
        "focalLengthMm": 36.26346344355382,
        "published": false
      },
      {
        "focalLengthMm": 36.50503519747919,
        "published": false
      },
      {
        "focalLengthMm": 36.74918413285411,
        "published": false
      },
      {
        "focalLengthMm": 36.99595454923674,
        "published": false
      },
      {
        "focalLengthMm": 37.24539174265615,
        "published": false
      },
      {
        "focalLengthMm": 37.497542034104754,
        "published": false
      },
      {
        "focalLengthMm": 37.752452799011095,
        "published": false
      },
      {
        "focalLengthMm": 38.01017249774041,
        "published": false
      },
      {
        "focalLengthMm": 38.270750707138845,
        "published": false
      },
      {
        "focalLengthMm": 38.53423815318446,
        "published": false
      },
      {
        "focalLengthMm": 38.803,
        "published": true
      }
    ],
    "apertureModel": "from-nominal-fno"
  },
  "focus": {
    "closeFocusM": 0.3,
    "keyframes": [
      0,
      1
    ],
    "description": "The patent prints infinity and 300 mm spacings at wide, middle and tele; those six states are exact. The intermediate zoom positions are an inferred reconstruction, not the factory cam: G4 is solved for infinity focus between the printed stations and the other groups follow interpolated laws. Between printed stations the near state is interpolated and is illustrative only. Tamron's minimum focus distance is 0.17 m at wide and 0.29 m at tele; the model's near state is the patent's 300 mm."
  },
  "gaps": {
    "6": {
      "label": "D6",
      "values": [
        [
          12.353,
          12.353
        ],
        [
          12.22856,
          12.22856
        ],
        [
          12.10412,
          12.10412
        ],
        [
          11.97968,
          11.97968
        ],
        [
          11.85524,
          11.85524
        ],
        [
          11.730799999999999,
          11.730799999999999
        ],
        [
          11.60636,
          11.60636
        ],
        [
          11.48192,
          11.48192
        ],
        [
          11.357479999999999,
          11.357479999999999
        ],
        [
          11.233039999999999,
          11.233039999999999
        ],
        [
          11.108600000000001,
          11.108600000000001
        ],
        [
          10.98416,
          10.98416
        ],
        [
          10.85972,
          10.85972
        ],
        [
          10.735280000000001,
          10.735280000000001
        ],
        [
          10.61084,
          10.61084
        ],
        [
          10.4864,
          10.4864
        ],
        [
          10.36196,
          10.36196
        ],
        [
          10.23752,
          10.23752
        ],
        [
          10.11308,
          10.11308
        ],
        [
          9.98864,
          9.98864
        ],
        [
          9.8642,
          9.8642
        ],
        [
          9.73976,
          9.73976
        ],
        [
          9.61532,
          9.61532
        ],
        [
          9.49088,
          9.49088
        ],
        [
          9.36644,
          9.36644
        ],
        [
          9.242,
          9.242
        ],
        [
          9.11756,
          9.11756
        ],
        [
          8.99312,
          8.99312
        ],
        [
          8.86868,
          8.86868
        ],
        [
          8.744240000000001,
          8.744240000000001
        ],
        [
          8.6198,
          8.6198
        ],
        [
          8.49536,
          8.49536
        ],
        [
          8.37092,
          8.37092
        ],
        [
          8.24648,
          8.24648
        ],
        [
          8.122039999999998,
          8.122039999999998
        ],
        [
          7.9976,
          7.9976
        ],
        [
          7.87316,
          7.87316
        ],
        [
          7.7487200000000005,
          7.7487200000000005
        ],
        [
          7.62428,
          7.62428
        ],
        [
          7.49984,
          7.49984
        ],
        [
          7.3754,
          7.3754
        ],
        [
          7.250960000000001,
          7.250960000000001
        ],
        [
          7.12652,
          7.12652
        ],
        [
          7.00208,
          7.00208
        ],
        [
          6.87764,
          6.87764
        ],
        [
          6.7532,
          6.7532
        ],
        [
          6.62876,
          6.62876
        ],
        [
          6.504320000000001,
          6.504320000000001
        ],
        [
          6.379880000000001,
          6.379880000000001
        ],
        [
          6.25544,
          6.25544
        ],
        [
          6.131,
          6.131
        ],
        [
          6.03064,
          6.03064
        ],
        [
          5.930280000000001,
          5.930280000000001
        ],
        [
          5.8299199999999995,
          5.8299199999999995
        ],
        [
          5.729559999999999,
          5.729559999999999
        ],
        [
          5.6292,
          5.6292
        ],
        [
          5.52884,
          5.52884
        ],
        [
          5.428480000000001,
          5.428480000000001
        ],
        [
          5.32812,
          5.32812
        ],
        [
          5.22776,
          5.22776
        ],
        [
          5.127400000000001,
          5.127400000000001
        ],
        [
          5.02704,
          5.02704
        ],
        [
          4.92668,
          4.92668
        ],
        [
          4.826320000000001,
          4.826320000000001
        ],
        [
          4.72596,
          4.72596
        ],
        [
          4.6255999999999995,
          4.6255999999999995
        ],
        [
          4.52524,
          4.52524
        ],
        [
          4.42488,
          4.42488
        ],
        [
          4.32452,
          4.32452
        ],
        [
          4.22416,
          4.22416
        ],
        [
          4.123800000000001,
          4.123800000000001
        ],
        [
          4.02344,
          4.02344
        ],
        [
          3.9230800000000006,
          3.9230800000000006
        ],
        [
          3.8227200000000003,
          3.8227200000000003
        ],
        [
          3.72236,
          3.72236
        ],
        [
          3.622,
          3.622
        ],
        [
          3.52164,
          3.52164
        ],
        [
          3.42128,
          3.42128
        ],
        [
          3.32092,
          3.32092
        ],
        [
          3.22056,
          3.22056
        ],
        [
          3.1201999999999996,
          3.1201999999999996
        ],
        [
          3.0198399999999994,
          3.0198399999999994
        ],
        [
          2.919480000000001,
          2.919480000000001
        ],
        [
          2.8191200000000003,
          2.8191200000000003
        ],
        [
          2.7187600000000005,
          2.7187600000000005
        ],
        [
          2.6184000000000003,
          2.6184000000000003
        ],
        [
          2.51804,
          2.51804
        ],
        [
          2.41768,
          2.41768
        ],
        [
          2.31732,
          2.31732
        ],
        [
          2.21696,
          2.21696
        ],
        [
          2.1166,
          2.1166
        ],
        [
          2.01624,
          2.01624
        ],
        [
          1.9158799999999996,
          1.9158799999999996
        ],
        [
          1.8155199999999996,
          1.8155199999999996
        ],
        [
          1.7151600000000005,
          1.7151600000000005
        ],
        [
          1.6148000000000002,
          1.6148000000000002
        ],
        [
          1.5144400000000005,
          1.5144400000000005
        ],
        [
          1.4140800000000002,
          1.4140800000000002
        ],
        [
          1.31372,
          1.31372
        ],
        [
          1.2133600000000002,
          1.2133600000000002
        ],
        [
          1.113,
          1.113
        ]
      ]
    },
    "10": {
      "label": "D10",
      "values": [
        [
          12.197,
          12.197
        ],
        [
          12.08588,
          12.08588
        ],
        [
          11.974759999999998,
          11.974759999999998
        ],
        [
          11.863639999999998,
          11.863639999999998
        ],
        [
          11.75252,
          11.75252
        ],
        [
          11.641399999999999,
          11.641399999999999
        ],
        [
          11.53028,
          11.53028
        ],
        [
          11.41916,
          11.41916
        ],
        [
          11.308039999999998,
          11.308039999999998
        ],
        [
          11.19692,
          11.19692
        ],
        [
          11.0858,
          11.0858
        ],
        [
          10.97468,
          10.97468
        ],
        [
          10.86356,
          10.86356
        ],
        [
          10.75244,
          10.75244
        ],
        [
          10.641319999999999,
          10.641319999999999
        ],
        [
          10.530199999999999,
          10.530199999999999
        ],
        [
          10.419079999999997,
          10.419079999999997
        ],
        [
          10.307959999999998,
          10.307959999999998
        ],
        [
          10.19684,
          10.19684
        ],
        [
          10.085719999999998,
          10.085719999999998
        ],
        [
          9.974599999999999,
          9.974599999999999
        ],
        [
          9.863480000000001,
          9.863480000000001
        ],
        [
          9.75236,
          9.75236
        ],
        [
          9.64124,
          9.64124
        ],
        [
          9.53012,
          9.53012
        ],
        [
          9.419,
          9.419
        ],
        [
          9.307879999999999,
          9.307879999999999
        ],
        [
          9.19676,
          9.19676
        ],
        [
          9.08564,
          9.08564
        ],
        [
          8.97452,
          8.97452
        ],
        [
          8.8634,
          8.8634
        ],
        [
          8.752279999999999,
          8.752279999999999
        ],
        [
          8.64116,
          8.64116
        ],
        [
          8.53004,
          8.53004
        ],
        [
          8.41892,
          8.41892
        ],
        [
          8.3078,
          8.3078
        ],
        [
          8.19668,
          8.19668
        ],
        [
          8.085560000000001,
          8.085560000000001
        ],
        [
          7.9744399999999995,
          7.9744399999999995
        ],
        [
          7.86332,
          7.86332
        ],
        [
          7.752199999999999,
          7.752199999999999
        ],
        [
          7.6410800000000005,
          7.6410800000000005
        ],
        [
          7.52996,
          7.52996
        ],
        [
          7.41884,
          7.41884
        ],
        [
          7.30772,
          7.30772
        ],
        [
          7.1966,
          7.1966
        ],
        [
          7.08548,
          7.08548
        ],
        [
          6.974360000000001,
          6.974360000000001
        ],
        [
          6.86324,
          6.86324
        ],
        [
          6.752120000000001,
          6.752120000000001
        ],
        [
          6.641,
          6.641
        ],
        [
          6.5381800000000005,
          6.5381800000000005
        ],
        [
          6.435359999999999,
          6.435359999999999
        ],
        [
          6.33254,
          6.33254
        ],
        [
          6.2297199999999995,
          6.2297199999999995
        ],
        [
          6.1269,
          6.1269
        ],
        [
          6.02408,
          6.02408
        ],
        [
          5.92126,
          5.92126
        ],
        [
          5.818440000000001,
          5.818440000000001
        ],
        [
          5.71562,
          5.71562
        ],
        [
          5.6128,
          5.6128
        ],
        [
          5.5099800000000005,
          5.5099800000000005
        ],
        [
          5.40716,
          5.40716
        ],
        [
          5.30434,
          5.30434
        ],
        [
          5.2015199999999995,
          5.2015199999999995
        ],
        [
          5.0987,
          5.0987
        ],
        [
          4.99588,
          4.99588
        ],
        [
          4.893059999999999,
          4.893059999999999
        ],
        [
          4.79024,
          4.79024
        ],
        [
          4.687420000000001,
          4.687420000000001
        ],
        [
          4.584600000000001,
          4.584600000000001
        ],
        [
          4.4817800000000005,
          4.4817800000000005
        ],
        [
          4.37896,
          4.37896
        ],
        [
          4.27614,
          4.27614
        ],
        [
          4.17332,
          4.17332
        ],
        [
          4.0705,
          4.0705
        ],
        [
          3.9676799999999997,
          3.9676799999999997
        ],
        [
          3.8648599999999997,
          3.8648599999999997
        ],
        [
          3.76204,
          3.76204
        ],
        [
          3.6592199999999995,
          3.6592199999999995
        ],
        [
          3.556399999999999,
          3.556399999999999
        ],
        [
          3.4535799999999997,
          3.4535799999999997
        ],
        [
          3.3507600000000006,
          3.3507600000000006
        ],
        [
          3.2479400000000003,
          3.2479400000000003
        ],
        [
          3.1451200000000004,
          3.1451200000000004
        ],
        [
          3.0423,
          3.0423
        ],
        [
          2.9394800000000005,
          2.9394800000000005
        ],
        [
          2.83666,
          2.83666
        ],
        [
          2.73384,
          2.73384
        ],
        [
          2.6310199999999995,
          2.6310199999999995
        ],
        [
          2.5282,
          2.5282
        ],
        [
          2.4253799999999996,
          2.4253799999999996
        ],
        [
          2.3225599999999997,
          2.3225599999999997
        ],
        [
          2.2197399999999994,
          2.2197399999999994
        ],
        [
          2.1169200000000004,
          2.1169200000000004
        ],
        [
          2.0141000000000004,
          2.0141000000000004
        ],
        [
          1.9112800000000003,
          1.9112800000000003
        ],
        [
          1.8084600000000002,
          1.8084600000000002
        ],
        [
          1.7056400000000003,
          1.7056400000000003
        ],
        [
          1.6028200000000001,
          1.6028200000000001
        ],
        [
          1.5,
          1.5
        ]
      ]
    },
    "16": {
      "label": "D16",
      "values": [
        [
          2.959,
          4.05
        ],
        [
          2.9233065207952373,
          4.04528
        ],
        [
          2.8884393450747208,
          4.04056
        ],
        [
          2.8543963762994573,
          4.035839999999999
        ],
        [
          2.821175745337782,
          4.03112
        ],
        [
          2.7887758077468767,
          4.0264
        ],
        [
          2.7571951412498312,
          4.02168
        ],
        [
          2.726432543432805,
          4.01696
        ],
        [
          2.696487029629539,
          4.012239999999999
        ],
        [
          2.6673578310150594,
          4.00752
        ],
        [
          2.6390443928776324,
          4.002800000000001
        ],
        [
          2.6115463730817225,
          3.99808
        ],
        [
          2.584863640714663,
          3.99336
        ],
        [
          2.558996274900673,
          3.98864
        ],
        [
          2.533944563804054,
          3.9839200000000003
        ],
        [
          2.5097090037888163,
          3.9791999999999996
        ],
        [
          2.4862902987511073,
          3.97448
        ],
        [
          2.46368935962445,
          3.96976
        ],
        [
          2.4419073040304946,
          3.96504
        ],
        [
          2.4209454561062156,
          3.9603199999999994
        ],
        [
          2.4008053464893586,
          3.9555999999999996
        ],
        [
          2.3814887124421342,
          3.95088
        ],
        [
          2.3629974981622617,
          3.9461600000000003
        ],
        [
          2.345333855224987,
          3.94144
        ],
        [
          2.328500143183345,
          3.9367199999999998
        ],
        [
          2.3124989303357797,
          3.932
        ],
        [
          2.2973329946338117,
          3.92728
        ],
        [
          2.2830053247497903,
          3.92256
        ],
        [
          2.269519121297435,
          3.91784
        ],
        [
          2.2568777982088095,
          3.91312
        ],
        [
          2.2450849842622715,
          3.9084
        ],
        [
          2.234144524774136,
          3.9036799999999996
        ],
        [
          2.22406048343949,
          3.8989599999999998
        ],
        [
          2.214837144338538,
          3.89424
        ],
        [
          2.206479014099383,
          3.88952
        ],
        [
          2.19899082422451,
          3.8848000000000003
        ],
        [
          2.192377533584624,
          3.8800800000000004
        ],
        [
          2.1866443310725523,
          3.87536
        ],
        [
          2.181796638433595,
          3.87064
        ],
        [
          2.1778401132614,
          3.86592
        ],
        [
          2.1747806521775535,
          3.8612
        ],
        [
          2.172624394182163,
          3.85648
        ],
        [
          2.17137772418633,
          3.85176
        ],
        [
          2.171047276741084,
          3.8470400000000002
        ],
        [
          2.1716399399391078,
          3.84232
        ],
        [
          2.173162859531118,
          3.8376
        ],
        [
          2.175623443220492,
          3.83288
        ],
        [
          2.1790293651780046,
          3.82816
        ],
        [
          2.183388570765741,
          3.8234399999999997
        ],
        [
          2.1887092814556466,
          3.81872
        ],
        [
          2.195,
          3.814
        ],
        [
          2.198437952008891,
          3.85898
        ],
        [
          2.202621464976203,
          3.90396
        ],
        [
          2.2075561841419167,
          3.94894
        ],
        [
          2.213247924336761,
          3.9939200000000006
        ],
        [
          2.2197026728098326,
          4.0389
        ],
        [
          2.22692659217172,
          4.083880000000001
        ],
        [
          2.2349260234449497,
          4.1288599999999995
        ],
        [
          2.243707489223571,
          4.17384
        ],
        [
          2.253277696963707,
          4.21882
        ],
        [
          2.26364354237597,
          4.2638
        ],
        [
          2.2748121129561194,
          4.30878
        ],
        [
          2.286790691639413,
          4.353759999999999
        ],
        [
          2.2995867605768288,
          4.39874
        ],
        [
          2.31320800506226,
          4.44372
        ],
        [
          2.3276623175870466,
          4.4887
        ],
        [
          2.3429578020345634,
          4.53368
        ],
        [
          2.3591027780366978,
          4.57866
        ],
        [
          2.3761057854685754,
          4.62364
        ],
        [
          2.3939755891088095,
          4.66862
        ],
        [
          2.412721183452547,
          4.7136
        ],
        [
          2.4323517977009566,
          4.758579999999999
        ],
        [
          2.452876900921701,
          4.80356
        ],
        [
          2.4743062073822157,
          4.84854
        ],
        [
          2.4966496820685213,
          4.8935200000000005
        ],
        [
          2.5199175464004875,
          4.9384999999999994
        ],
        [
          2.544120284141732,
          4.98348
        ],
        [
          2.5692686475077853,
          5.02846
        ],
        [
          2.5953736634907165,
          5.07344
        ],
        [
          2.622446640400221,
          5.11842
        ],
        [
          2.650499174635716,
          5.1634
        ],
        [
          2.679543157678538,
          5.20838
        ],
        [
          2.709590783347888,
          5.25336
        ],
        [
          2.7406545552896158,
          5.29834
        ],
        [
          2.772747294734205,
          5.343319999999999
        ],
        [
          2.8058821485239767,
          5.388299999999999
        ],
        [
          2.840072597425869,
          5.43328
        ],
        [
          2.875332464722524,
          5.47826
        ],
        [
          2.911675925114425,
          5.5232399999999995
        ],
        [
          2.9491175139385297,
          5.56822
        ],
        [
          2.987672136707056,
          5.6132
        ],
        [
          3.0273550789827697,
          5.65818
        ],
        [
          3.068182016610806,
          5.7031600000000005
        ],
        [
          3.110169026317916,
          5.74814
        ],
        [
          3.153332596679156,
          5.79312
        ],
        [
          3.1976896394938477,
          5.838099999999999
        ],
        [
          3.2432575015689897,
          5.88308
        ],
        [
          3.290053976921039,
          5.928059999999999
        ],
        [
          3.33809731943426,
          5.97304
        ],
        [
          3.3874062559774543,
          6.018019999999999
        ],
        [
          3.438,
          6.063
        ]
      ]
    },
    "18": {
      "label": "D18",
      "values": [
        [
          6.456,
          5.365
        ],
        [
          6.491673479204763,
          5.3697
        ],
        [
          6.52652065492528,
          5.3744000000000005
        ],
        [
          6.560543623700543,
          5.3791
        ],
        [
          6.5937442546622185,
          5.383800000000001
        ],
        [
          6.6261241922531235,
          5.3885
        ],
        [
          6.6576848587501685,
          5.3932
        ],
        [
          6.6884274565671955,
          5.3979
        ],
        [
          6.718352970370461,
          5.4026
        ],
        [
          6.747462168984942,
          5.4073
        ],
        [
          6.775755607122369,
          5.412000000000001
        ],
        [
          6.803233626918278,
          5.4167000000000005
        ],
        [
          6.829896359285338,
          5.4214
        ],
        [
          6.855743725099328,
          5.4261
        ],
        [
          6.880775436195946,
          5.4308
        ],
        [
          6.9049909962111835,
          5.4355
        ],
        [
          6.928389701248893,
          5.440199999999999
        ],
        [
          6.95097064037555,
          5.4449
        ],
        [
          6.972732695969506,
          5.4496
        ],
        [
          6.993674543893785,
          5.4543
        ],
        [
          7.013794653510642,
          5.459
        ],
        [
          7.033091287557866,
          5.4637
        ],
        [
          7.051562501837739,
          5.468400000000001
        ],
        [
          7.0692061447750145,
          5.4731000000000005
        ],
        [
          7.086019856816655,
          5.4778
        ],
        [
          7.102001069664221,
          5.4825
        ],
        [
          7.1171470053661885,
          5.4872
        ],
        [
          7.13145467525021,
          5.491899999999999
        ],
        [
          7.144920878702566,
          5.4966
        ],
        [
          7.157542201791191,
          5.5013000000000005
        ],
        [
          7.169315015737729,
          5.506
        ],
        [
          7.180235475225865,
          5.5107
        ],
        [
          7.19029951656051,
          5.5154
        ],
        [
          7.199502855661462,
          5.520099999999999
        ],
        [
          7.207840985900617,
          5.5248
        ],
        [
          7.21530917577549,
          5.5295
        ],
        [
          7.221902466415377,
          5.5342
        ],
        [
          7.227615668927448,
          5.5389
        ],
        [
          7.232443361566405,
          5.5436
        ],
        [
          7.236379886738601,
          5.548299999999999
        ],
        [
          7.239419347822447,
          5.552999999999999
        ],
        [
          7.241555605817838,
          5.5577
        ],
        [
          7.24278227581367,
          5.5624
        ],
        [
          7.243092723258916,
          5.5671
        ],
        [
          7.242480060060893,
          5.5718
        ],
        [
          7.2409371404688825,
          5.5765
        ],
        [
          7.238456556779508,
          5.5812
        ],
        [
          7.235030634821995,
          5.5859
        ],
        [
          7.230651429234259,
          5.590599999999999
        ],
        [
          7.225310718544354,
          5.5953
        ],
        [
          7.219,
          5.6
        ],
        [
          7.215582047991109,
          5.55502
        ],
        [
          7.211418535023798,
          5.510039999999999
        ],
        [
          7.206503815858083,
          5.465059999999999
        ],
        [
          7.200832075663239,
          5.42008
        ],
        [
          7.194397327190168,
          5.3751
        ],
        [
          7.18719340782828,
          5.330119999999999
        ],
        [
          7.17921397655505,
          5.285139999999999
        ],
        [
          7.170452510776429,
          5.2401599999999995
        ],
        [
          7.160902303036293,
          5.19518
        ],
        [
          7.150556457624031,
          5.150199999999999
        ],
        [
          7.139407887043881,
          5.105219999999999
        ],
        [
          7.127449308360586,
          5.060239999999999
        ],
        [
          7.114673239423172,
          5.0152600000000005
        ],
        [
          7.10107199493774,
          4.97028
        ],
        [
          7.086637682412954,
          4.9253
        ],
        [
          7.0713621979654375,
          4.880319999999999
        ],
        [
          7.055237221963303,
          4.8353399999999995
        ],
        [
          7.038254214531424,
          4.79036
        ],
        [
          7.0204044108911905,
          4.74538
        ],
        [
          7.001678816547454,
          4.7004
        ],
        [
          6.982068202299043,
          4.6554199999999994
        ],
        [
          6.961563099078299,
          4.61044
        ],
        [
          6.940153792617784,
          4.56546
        ],
        [
          6.917830317931479,
          4.52048
        ],
        [
          6.894582453599513,
          4.4755
        ],
        [
          6.870399715858269,
          4.43052
        ],
        [
          6.845271352492215,
          4.38554
        ],
        [
          6.819186336509284,
          4.34056
        ],
        [
          6.792133359599779,
          4.295579999999999
        ],
        [
          6.7641008253642845,
          4.2505999999999995
        ],
        [
          6.735076842321463,
          4.20562
        ],
        [
          6.705049216652112,
          4.160640000000001
        ],
        [
          6.674005444710384,
          4.11566
        ],
        [
          6.641932705265795,
          4.070679999999999
        ],
        [
          6.608817851476024,
          4.0257000000000005
        ],
        [
          6.574647402574132,
          3.98072
        ],
        [
          6.539407535277476,
          3.93574
        ],
        [
          6.503084074885576,
          3.8907599999999998
        ],
        [
          6.46566248606147,
          3.84578
        ],
        [
          6.427127863292944,
          3.8007999999999997
        ],
        [
          6.387464921017231,
          3.75582
        ],
        [
          6.3466579833891945,
          3.7108399999999997
        ],
        [
          6.304690973682085,
          3.6658599999999995
        ],
        [
          6.2615474033208445,
          3.62088
        ],
        [
          6.217210360506153,
          3.5759000000000003
        ],
        [
          6.171662498431011,
          3.53092
        ],
        [
          6.124886023078962,
          3.4859400000000003
        ],
        [
          6.07686268056574,
          3.44096
        ],
        [
          6.027573744022546,
          3.39598
        ],
        [
          5.977,
          3.351
        ]
      ]
    },
    "24A": {
      "label": "D24",
      "values": [
        [
          13.001,
          13.001
        ],
        [
          13.158619999999999,
          13.158619999999999
        ],
        [
          13.31624,
          13.31624
        ],
        [
          13.473859999999998,
          13.473859999999998
        ],
        [
          13.63148,
          13.63148
        ],
        [
          13.7891,
          13.7891
        ],
        [
          13.94672,
          13.94672
        ],
        [
          14.10434,
          14.10434
        ],
        [
          14.261959999999998,
          14.261959999999998
        ],
        [
          14.419580000000002,
          14.419580000000002
        ],
        [
          14.577200000000001,
          14.577200000000001
        ],
        [
          14.73482,
          14.73482
        ],
        [
          14.89244,
          14.89244
        ],
        [
          15.05006,
          15.05006
        ],
        [
          15.20768,
          15.20768
        ],
        [
          15.365300000000001,
          15.365300000000001
        ],
        [
          15.52292,
          15.52292
        ],
        [
          15.680539999999999,
          15.680539999999999
        ],
        [
          15.838159999999998,
          15.838159999999998
        ],
        [
          15.99578,
          15.99578
        ],
        [
          16.153399999999998,
          16.153399999999998
        ],
        [
          16.31102,
          16.31102
        ],
        [
          16.46864,
          16.46864
        ],
        [
          16.626260000000002,
          16.626260000000002
        ],
        [
          16.78388,
          16.78388
        ],
        [
          16.9415,
          16.9415
        ],
        [
          17.09912,
          17.09912
        ],
        [
          17.25674,
          17.25674
        ],
        [
          17.414360000000002,
          17.414360000000002
        ],
        [
          17.57198,
          17.57198
        ],
        [
          17.7296,
          17.7296
        ],
        [
          17.887220000000003,
          17.887220000000003
        ],
        [
          18.04484,
          18.04484
        ],
        [
          18.202460000000002,
          18.202460000000002
        ],
        [
          18.36008,
          18.36008
        ],
        [
          18.5177,
          18.5177
        ],
        [
          18.67532,
          18.67532
        ],
        [
          18.83294,
          18.83294
        ],
        [
          18.990560000000002,
          18.990560000000002
        ],
        [
          19.14818,
          19.14818
        ],
        [
          19.305799999999998,
          19.305799999999998
        ],
        [
          19.46342,
          19.46342
        ],
        [
          19.62104,
          19.62104
        ],
        [
          19.77866,
          19.77866
        ],
        [
          19.936280000000004,
          19.936280000000004
        ],
        [
          20.0939,
          20.0939
        ],
        [
          20.251520000000003,
          20.251520000000003
        ],
        [
          20.40914,
          20.40914
        ],
        [
          20.566760000000002,
          20.566760000000002
        ],
        [
          20.724380000000004,
          20.724380000000004
        ],
        [
          20.882,
          20.882
        ],
        [
          21.023540000000004,
          21.023540000000004
        ],
        [
          21.165080000000003,
          21.165080000000003
        ],
        [
          21.306620000000002,
          21.306620000000002
        ],
        [
          21.44816,
          21.44816
        ],
        [
          21.589700000000004,
          21.589700000000004
        ],
        [
          21.73124,
          21.73124
        ],
        [
          21.872780000000002,
          21.872780000000002
        ],
        [
          22.014319999999998,
          22.014319999999998
        ],
        [
          22.15586,
          22.15586
        ],
        [
          22.2974,
          22.2974
        ],
        [
          22.438940000000002,
          22.438940000000002
        ],
        [
          22.58048,
          22.58048
        ],
        [
          22.72202,
          22.72202
        ],
        [
          22.86356,
          22.86356
        ],
        [
          23.0051,
          23.0051
        ],
        [
          23.14664,
          23.14664
        ],
        [
          23.28818,
          23.28818
        ],
        [
          23.429720000000003,
          23.429720000000003
        ],
        [
          23.571260000000002,
          23.571260000000002
        ],
        [
          23.7128,
          23.7128
        ],
        [
          23.85434,
          23.85434
        ],
        [
          23.99588,
          23.99588
        ],
        [
          24.13742,
          24.13742
        ],
        [
          24.278959999999998,
          24.278959999999998
        ],
        [
          24.4205,
          24.4205
        ],
        [
          24.562040000000003,
          24.562040000000003
        ],
        [
          24.703580000000002,
          24.703580000000002
        ],
        [
          24.84512,
          24.84512
        ],
        [
          24.98666,
          24.98666
        ],
        [
          25.1282,
          25.1282
        ],
        [
          25.26974,
          25.26974
        ],
        [
          25.411279999999998,
          25.411279999999998
        ],
        [
          25.55282,
          25.55282
        ],
        [
          25.694360000000003,
          25.694360000000003
        ],
        [
          25.8359,
          25.8359
        ],
        [
          25.97744,
          25.97744
        ],
        [
          26.11898,
          26.11898
        ],
        [
          26.26052,
          26.26052
        ],
        [
          26.40206,
          26.40206
        ],
        [
          26.543599999999998,
          26.543599999999998
        ],
        [
          26.68514,
          26.68514
        ],
        [
          26.826680000000003,
          26.826680000000003
        ],
        [
          26.96822,
          26.96822
        ],
        [
          27.109759999999998,
          27.109759999999998
        ],
        [
          27.251299999999997,
          27.251299999999997
        ],
        [
          27.39284,
          27.39284
        ],
        [
          27.53438,
          27.53438
        ],
        [
          27.675919999999998,
          27.675919999999998
        ],
        [
          27.817459999999997,
          27.817459999999997
        ],
        [
          27.959,
          27.959
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 2.91,
    "fStops": [
      2.91,
      4,
      5.6,
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
      "label": "CG",
      "thicknessMm": 2.5,
      "nd": 1.5168,
      "vd": 64.17,
      "glass": "N-BK7 (SCHOTT catalog equivalent; production supplier unspecified)",
      "gapAfterMm": 1,
      "source": "JP 2022-131391 A Numerical Example 5, surfaces 25–26: camera-side cover glass (¶0071) at its printed thickness and image gap"
    }
  ],
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "6"
    },
    {
      "text": "G2",
      "fromSurface": "7",
      "toSurface": "10"
    },
    {
      "text": "G3",
      "fromSurface": "STO",
      "toSurface": "16"
    },
    {
      "text": "G4",
      "fromSurface": "17",
      "toSurface": "18"
    },
    {
      "text": "G5",
      "fromSurface": "19",
      "toSurface": "24A"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "14",
      "toSurface": "16"
    }
  ],
  "layout": {
    "yScFill": 0.32
  },
  "checks": {
    "gapSagFrac": 0.99
  }
} satisfies LensDataV2Input;
export default DATA;
