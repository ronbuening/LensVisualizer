import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "sigma-24-70mm-f35-56-aspherical-hf",
  "maker": "Sigma",
  "name": "SIGMA 24-70mm f/3.5-5.6 ASPHERICAL HF",
  "subtitle": "JP 2002-236254 A — Numerical Example 2; derived back focus",
  "catalog": {
    "lensMounts": [
      "sigma-sa",
      "canon-ef",
      "nikon-f",
      "pentax-k",
      "sony-a"
    ],
    "imageFormat": "135-full-frame",
    "specs": [
      "9 ELEMENTS / 7 GROUPS",
      "DESIGN f = 25.0-67.6 mm",
      "DESIGN F/3.62-5.79",
      "1 ASPHERICAL SURFACE (HYBRID RESIN LAYER)"
    ],
    "elementCount": 9,
    "groupCount": 7,
    "focalLengthMm": {
      "marketing": [
        24,
        70
      ],
      "design": [
        25.009803031606573,
        67.58957165970368
      ]
    },
    "fNumber": {
      "marketing": 3.5,
      "design": 3.62
    }
  },
  "source": {
    "patentNumber": "JP 2002-236254 A",
    "example": { "label": "Numerical Example 2", "id": "2" },
    "patentYear": 2002,
    "authors": [
      "Norikazu Yokoi",
      "Tetsusuke Kusakawa",
      "Shizuka Takemoto"
    ],
    "assignees": [
      "Sigma Corporation"
    ],
    "errata": [
      {
        "status": "unresolved",
        "note": "The patent does not print the distance from the second flare stop SP2 to the image. The model uses 35.73 mm, derived from the printed prescription; paraxial focus at the three printed stations agrees within 0.05 mm."
      },
      {
        "status": "unresolved",
        "note": "The patent prints 1.04 for G3's tele-end lateral magnification; the printed prescription gives 1.0486. The prescription is kept as printed."
      }
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.8042,
      "vd": 46.5,
      "indexReference": "d",
      "focalLengthMm": -37.78266817161673,
      "glass": "TAF3 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Front negative meniscus of the negative first group G1, convex to the object.",
      "diagramLabel": "L1",
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.7725,
      "vd": 49.7,
      "indexReference": "d",
      "focalLengthMm": -48.698735257445264,
      "glass": "TAF1 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Glass substrate of G1's hybrid aspherical element; the resin layer R1 is bonded to its concave rear face.",
      "diagramLabel": "L2",
      "cemented": "H1",
    },
    {
      "id": 3,
      "name": "R1",
      "label": "Hybrid resin layer",
      "type": "Neg. Meniscus Resin Layer (1× Asph)",
      "nd": 1.5184,
      "vd": 52.1,
      "indexReference": "d",
      "focalLengthMm": -294.73447819939133,
      "glass": "Unmatched (hybrid optical resin; spectrum unpublished)",
      "role": "0.1 mm resin layer bonded to L2's rear face. Its air-side face, s5, is the lens's only aspherical surface; the resin's material and spectrum are not published.",
      "diagramLabel": "R1",
      "cemented": "H1"
    },
    {
      "id": 4,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 1.6727,
      "vd": 32.1,
      "indexReference": "d",
      "focalLengthMm": 46.228167796322445,
      "glass": "S-TIM25 (OHARA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Positive last element of G1, ahead of the variable G1-to-stop gap d7.",
      "diagramLabel": "L3",
    },
    {
      "id": 5,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconvex Positive",
      "nd": 1.6968,
      "vd": 55.6,
      "indexReference": "d",
      "focalLengthMm": 39.56474354543368,
      "glass": "K-LaK14 (SUMITA coordinate-equivalent class; supplier unconfirmed)",
      "role": "First positive element of the positive second group G2, behind the aperture stop SP1.",
      "diagramLabel": "L4",
    },
    {
      "id": 6,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.2,
      "indexReference": "d",
      "focalLengthMm": 29.63803029779626,
      "glass": "S-FSL5 (OHARA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Low-index positive member of G2's cemented pair D1.",
      "diagramLabel": "L5",
      "cemented": "D1",
    },
    {
      "id": 7,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.834,
      "vd": 37.3,
      "indexReference": "d",
      "focalLengthMm": -13.888182829674783,
      "glass": "NBFD10 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "role": "High-index negative member of G2's cemented pair D1.",
      "diagramLabel": "L6",
      "cemented": "D1",
    },
    {
      "id": 8,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.5168,
      "vd": 64.4,
      "indexReference": "d",
      "focalLengthMm": 40.40475130215067,
      "glass": "BSC7 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Last positive element of G2.",
      "diagramLabel": "L7",
    },
    {
      "id": 9,
      "name": "L8",
      "label": "Element 8",
      "type": "Positive Meniscus",
      "nd": 1.65844,
      "vd": 50.8,
      "indexReference": "d",
      "focalLengthMm": 31.73162975024395,
      "glass": "BACED5 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Positive member of the cemented rear group G3, which moves with the stop SP1 and also acts as a flare-cut stop for upper rays at middle focal lengths (¶0007).",
      "diagramLabel": "L8",
      "cemented": "D2",
    },
    {
      "id": 10,
      "name": "L9",
      "label": "Element 9",
      "type": "Negative Meniscus",
      "nd": 1.7725,
      "vd": 49.7,
      "indexReference": "d",
      "focalLengthMm": -31.26136140897904,
      "glass": "TAF1 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Negative member of G3. The patent makes G3 a negative meniscus concave to the object, cemented to correct lateral chromatic aberration (¶0009).",
      "diagramLabel": "L9",
      "cemented": "D2",
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 42.57,
      "d": 1.4,
      "sd": 20,
      "medium": 1
    },
    {
      "label": "2",
      "R": 17.47,
      "d": 8.72,
      "sd": 14.5,
      "rimExtensionSd": 20
    },
    {
      "label": "3",
      "R": 895.35,
      "d": 1.3,
      "sd": 15,
      "medium": 2
    },
    {
      "label": "4",
      "R": 36.08,
      "d": 0.1,
      "sd": 15,
      "medium": 3
    },
    {
      "label": "5A",
      "R": 29.16,
      "d": 3.3,
      "sd": 15,
      "asphere": {
        "K": 1.168,
        "A4": -0.00001753,
        "A6": -3.706e-8,
        "A8": 3.224e-11,
        "A10": -3.964e-13
      }
    },
    {
      "label": "6",
      "R": 35,
      "d": 5.45,
      "sd": 15,
      "medium": 4
    },
    {
      "label": "7",
      "R": -261.45,
      "sd": 15
    },
    {
      "label": "STO",
      "R": "flat"
    },
    {
      "label": "9",
      "R": 30.6,
      "d": 3.55,
      "sd": 11.5,
      "medium": 5
    },
    {
      "label": "10",
      "R": -265.04,
      "d": 0.15,
      "sd": 11.5
    },
    {
      "label": "11",
      "R": 22.07,
      "d": 7.77,
      "sd": 11,
      "medium": 6
    },
    {
      "label": "12",
      "R": -37.01,
      "d": 6.86,
      "sd": 11,
      "medium": 7
    },
    {
      "label": "13",
      "R": 18.28,
      "d": 1.82,
      "sd": 8.3,
      "rimExtensionSd": 11
    },
    {
      "label": "14",
      "R": 85.25,
      "d": 2.85,
      "sd": 8.6,
      "medium": 8
    },
    {
      "label": "15",
      "R": -27.34,
      "sd": 8.6
    },
    {
      "label": "16",
      "R": -841.7,
      "d": 3.4,
      "sd": 10,
      "medium": 9
    },
    {
      "label": "17",
      "R": -20.42,
      "d": 1,
      "sd": 10,
      "medium": 10
    },
    {
      "label": "18",
      "R": -135.05,
      "sd": 10
    }
  ],
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 25,
        "nominalFNumber": 3.62,
        "label": "Wide",
        "published": true
      },
      {
        "published": false,
        "focalLengthMm": 25.258522359948945,
        "nominalFNumber": 3.6486
      },
      {
        "published": false,
        "focalLengthMm": 25.512277955504175,
        "nominalFNumber": 3.6772
      },
      {
        "published": false,
        "focalLengthMm": 25.771224340973415,
        "nominalFNumber": 3.7058
      },
      {
        "published": false,
        "focalLengthMm": 26.03552242579883,
        "nominalFNumber": 3.7344
      },
      {
        "published": false,
        "focalLengthMm": 26.30533983958,
        "nominalFNumber": 3.763
      },
      {
        "published": false,
        "focalLengthMm": 26.58085128659802,
        "nominalFNumber": 3.7916
      },
      {
        "published": false,
        "focalLengthMm": 26.8622389230224,
        "nominalFNumber": 3.8202
      },
      {
        "published": false,
        "focalLengthMm": 27.149692758512586,
        "nominalFNumber": 3.8487999999999998
      },
      {
        "published": false,
        "focalLengthMm": 27.44341108407401,
        "nominalFNumber": 3.8774
      },
      {
        "published": false,
        "focalLengthMm": 27.74360092819418,
        "nominalFNumber": 3.9060000000000006
      },
      {
        "published": false,
        "focalLengthMm": 28.05047854346298,
        "nominalFNumber": 3.9346000000000005
      },
      {
        "published": false,
        "focalLengthMm": 28.364269926081256,
        "nominalFNumber": 3.9632000000000005
      },
      {
        "published": false,
        "focalLengthMm": 28.68521137088054,
        "nominalFNumber": 3.9917999999999996
      },
      {
        "published": false,
        "focalLengthMm": 29.013550064717855,
        "nominalFNumber": 4.0204
      },
      {
        "published": false,
        "focalLengthMm": 29.3495447213782,
        "nominalFNumber": 4.0489999999999995
      },
      {
        "published": false,
        "focalLengthMm": 29.693466261411064,
        "nominalFNumber": 4.0775999999999994
      },
      {
        "published": false,
        "focalLengthMm": 30.04559854065604,
        "nominalFNumber": 4.106199999999999
      },
      {
        "published": false,
        "focalLengthMm": 30.406239131574793,
        "nominalFNumber": 4.1348
      },
      {
        "published": false,
        "focalLengthMm": 30.77570016190905,
        "nominalFNumber": 4.1634
      },
      {
        "published": false,
        "focalLengthMm": 31.15430921563321,
        "nominalFNumber": 4.192
      },
      {
        "published": false,
        "focalLengthMm": 31.542410301666965,
        "nominalFNumber": 4.2206
      },
      {
        "published": false,
        "focalLengthMm": 31.940364896368806,
        "nominalFNumber": 4.2492
      },
      {
        "published": false,
        "focalLengthMm": 32.3485530664517,
        "nominalFNumber": 4.2778
      },
      {
        "published": false,
        "focalLengthMm": 32.767374679652036,
        "nominalFNumber": 4.3064
      },
      {
        "published": false,
        "focalLengthMm": 33.19725071125908,
        "nominalFNumber": 4.335
      },
      {
        "published": false,
        "focalLengthMm": 33.638624655478075,
        "nominalFNumber": 4.3636
      },
      {
        "published": false,
        "focalLengthMm": 34.091964051573925,
        "nominalFNumber": 4.3922
      },
      {
        "published": false,
        "focalLengthMm": 34.55776213583521,
        "nominalFNumber": 4.4208
      },
      {
        "published": false,
        "focalLengthMm": 35.036539631629346,
        "nominalFNumber": 4.4494
      },
      {
        "published": false,
        "focalLengthMm": 35.52884669120632,
        "nominalFNumber": 4.478
      },
      {
        "published": false,
        "focalLengthMm": 36.03526500447372,
        "nominalFNumber": 4.5066
      },
      {
        "published": false,
        "focalLengthMm": 36.556410091738485,
        "nominalFNumber": 4.5352
      },
      {
        "published": false,
        "focalLengthMm": 37.092933799413466,
        "nominalFNumber": 4.5638000000000005
      },
      {
        "published": false,
        "focalLengthMm": 37.64552701996655,
        "nominalFNumber": 4.5924
      },
      {
        "published": false,
        "focalLengthMm": 38.21492265997502,
        "nominalFNumber": 4.621
      },
      {
        "published": false,
        "focalLengthMm": 38.80189888309696,
        "nominalFNumber": 4.6495999999999995
      },
      {
        "published": false,
        "focalLengthMm": 39.40728265813304,
        "nominalFNumber": 4.6781999999999995
      },
      {
        "published": false,
        "focalLengthMm": 40.031953646198545,
        "nominalFNumber": 4.7068
      },
      {
        "published": false,
        "focalLengthMm": 40.676848465429835,
        "nominalFNumber": 4.7354
      },
      {
        "published": false,
        "focalLengthMm": 41.34296537670843,
        "nominalFNumber": 4.764
      },
      {
        "published": false,
        "focalLengthMm": 42.0313694397035,
        "nominalFNumber": 4.7926
      },
      {
        "published": false,
        "focalLengthMm": 42.74319819524591,
        "nominalFNumber": 4.8212
      },
      {
        "published": false,
        "focalLengthMm": 43.4796679378006,
        "nominalFNumber": 4.8498
      },
      {
        "published": false,
        "focalLengthMm": 44.24208065079051,
        "nominalFNumber": 4.8784
      },
      {
        "published": false,
        "focalLengthMm": 45.0318316879592,
        "nominalFNumber": 4.907
      },
      {
        "published": false,
        "focalLengthMm": 45.85041829610898,
        "nominalFNumber": 4.9356
      },
      {
        "published": false,
        "focalLengthMm": 46.69944908873329,
        "nominalFNumber": 4.9642
      },
      {
        "published": false,
        "focalLengthMm": 47.580654596663955,
        "nominalFNumber": 4.9928
      },
      {
        "published": false,
        "focalLengthMm": 48.495899041339214,
        "nominalFNumber": 5.0214
      },
      {
        "focalLengthMm": 49.4,
        "nominalFNumber": 5.05,
        "published": true
      },
      {
        "published": false,
        "focalLengthMm": 49.71349527057689,
        "nominalFNumber": 5.0648
      },
      {
        "published": false,
        "focalLengthMm": 49.98270500891823,
        "nominalFNumber": 5.0796
      },
      {
        "published": false,
        "focalLengthMm": 50.25487060422192,
        "nominalFNumber": 5.0944
      },
      {
        "published": false,
        "focalLengthMm": 50.53004100382056,
        "nominalFNumber": 5.1092
      },
      {
        "published": false,
        "focalLengthMm": 50.8082662417662,
        "nominalFNumber": 5.124
      },
      {
        "published": false,
        "focalLengthMm": 51.08959746915773,
        "nominalFNumber": 5.1388
      },
      {
        "published": false,
        "focalLengthMm": 51.374086985489456,
        "nominalFNumber": 5.153599999999999
      },
      {
        "published": false,
        "focalLengthMm": 51.66178827106138,
        "nominalFNumber": 5.168399999999999
      },
      {
        "published": false,
        "focalLengthMm": 51.952756020493155,
        "nominalFNumber": 5.183199999999999
      },
      {
        "published": false,
        "focalLengthMm": 52.24704617738629,
        "nominalFNumber": 5.1979999999999995
      },
      {
        "published": false,
        "focalLengthMm": 52.544715970180185,
        "nominalFNumber": 5.2128
      },
      {
        "published": false,
        "focalLengthMm": 52.84582394925115,
        "nominalFNumber": 5.2276
      },
      {
        "published": false,
        "focalLengthMm": 53.1504300253031,
        "nominalFNumber": 5.2424
      },
      {
        "published": false,
        "focalLengthMm": 53.45859550910548,
        "nominalFNumber": 5.2572
      },
      {
        "published": false,
        "focalLengthMm": 53.77038315263118,
        "nominalFNumber": 5.272
      },
      {
        "published": false,
        "focalLengthMm": 54.08585719165431,
        "nominalFNumber": 5.2868
      },
      {
        "published": false,
        "focalLengthMm": 54.40508338986721,
        "nominalFNumber": 5.3016
      },
      {
        "published": false,
        "focalLengthMm": 54.72812908458133,
        "nominalFNumber": 5.3164
      },
      {
        "published": false,
        "focalLengthMm": 55.05506323407812,
        "nominalFNumber": 5.331199999999999
      },
      {
        "published": false,
        "focalLengthMm": 55.38595646668062,
        "nominalFNumber": 5.346
      },
      {
        "published": false,
        "focalLengthMm": 55.72088113161722,
        "nominalFNumber": 5.360799999999999
      },
      {
        "published": false,
        "focalLengthMm": 56.05991135175723,
        "nominalFNumber": 5.3756
      },
      {
        "published": false,
        "focalLengthMm": 56.403123078296815,
        "nominalFNumber": 5.3904
      },
      {
        "published": false,
        "focalLengthMm": 56.750594147480996,
        "nominalFNumber": 5.4052
      },
      {
        "published": false,
        "focalLengthMm": 57.10240433945095,
        "nominalFNumber": 5.42
      },
      {
        "published": false,
        "focalLengthMm": 57.45863543930856,
        "nominalFNumber": 5.4348
      },
      {
        "published": false,
        "focalLengthMm": 57.81937130049887,
        "nominalFNumber": 5.4496
      },
      {
        "published": false,
        "focalLengthMm": 58.18469791061127,
        "nominalFNumber": 5.4643999999999995
      },
      {
        "published": false,
        "focalLengthMm": 58.55470345970884,
        "nominalFNumber": 5.4792000000000005
      },
      {
        "published": false,
        "focalLengthMm": 58.92947841130041,
        "nominalFNumber": 5.494
      },
      {
        "published": false,
        "focalLengthMm": 59.30911557607461,
        "nominalFNumber": 5.5088
      },
      {
        "published": false,
        "focalLengthMm": 59.693710188521884,
        "nominalFNumber": 5.5236
      },
      {
        "published": false,
        "focalLengthMm": 60.08335998657838,
        "nominalFNumber": 5.5384
      },
      {
        "published": false,
        "focalLengthMm": 60.47816529443057,
        "nominalFNumber": 5.5532
      },
      {
        "published": false,
        "focalLengthMm": 60.87822910862889,
        "nominalFNumber": 5.568
      },
      {
        "published": false,
        "focalLengthMm": 61.28365718766454,
        "nominalFNumber": 5.582800000000001
      },
      {
        "published": false,
        "focalLengthMm": 61.69455814517448,
        "nominalFNumber": 5.5976
      },
      {
        "published": false,
        "focalLengthMm": 62.11104354694587,
        "nominalFNumber": 5.6124
      },
      {
        "published": false,
        "focalLengthMm": 62.53322801190225,
        "nominalFNumber": 5.6272
      },
      {
        "published": false,
        "focalLengthMm": 62.96122931726492,
        "nominalFNumber": 5.642
      },
      {
        "published": false,
        "focalLengthMm": 63.395168508089554,
        "nominalFNumber": 5.6568000000000005
      },
      {
        "published": false,
        "focalLengthMm": 63.83517001139435,
        "nominalFNumber": 5.671600000000001
      },
      {
        "published": false,
        "focalLengthMm": 64.28136175510447,
        "nominalFNumber": 5.686400000000001
      },
      {
        "published": false,
        "focalLengthMm": 64.7338752920523,
        "nominalFNumber": 5.7012
      },
      {
        "published": false,
        "focalLengthMm": 65.19284592928575,
        "nominalFNumber": 5.716
      },
      {
        "published": false,
        "focalLengthMm": 65.65841286295091,
        "nominalFNumber": 5.7308
      },
      {
        "published": false,
        "focalLengthMm": 66.13071931903302,
        "nominalFNumber": 5.7456
      },
      {
        "published": false,
        "focalLengthMm": 66.60991270025373,
        "nominalFNumber": 5.7604
      },
      {
        "published": false,
        "focalLengthMm": 67.09614473944,
        "nominalFNumber": 5.7752
      },
      {
        "focalLengthMm": 67.6,
        "nominalFNumber": 5.79,
        "label": "Tele",
        "published": true
      }
    ],
    "apertureModel": "from-nominal-fno",
    "step": 0.005
  },
  "focus": {
    "closeFocusM": 0.4,
    "step": 1,
    "description": "The patent prints infinity spacings at wide, middle and tele; focusing is not modeled. The intermediate zoom positions are an inferred reconstruction, not the factory cam: the G1–stop and stop–G2 spacings follow linear laws between the printed stations, the stop moves with G3 as the printed spacings require, and the back focus follows paraxial infinity focus along the path, keeping the printed stations' focus residuals of under 0.05 mm. The patent's second flare stop is not modeled. The marketed minimum focus distance is 0.4 m."
  },
  "gaps": {
    "7": {
      "label": "d7",
      "values": [
        [
          31.97,
          31.97
        ],
        [
          31.486329999999995,
          31.486329999999995
        ],
        [
          31.00266,
          31.00266
        ],
        [
          30.518989999999995,
          30.518989999999995
        ],
        [
          30.035320000000002,
          30.035320000000002
        ],
        [
          29.55165,
          29.55165
        ],
        [
          29.06798,
          29.06798
        ],
        [
          28.58431,
          28.58431
        ],
        [
          28.10064,
          28.10064
        ],
        [
          27.616970000000002,
          27.616970000000002
        ],
        [
          27.133300000000002,
          27.133300000000002
        ],
        [
          26.64963,
          26.64963
        ],
        [
          26.16596,
          26.16596
        ],
        [
          25.68229,
          25.68229
        ],
        [
          25.19862,
          25.19862
        ],
        [
          24.714949999999998,
          24.714949999999998
        ],
        [
          24.231279999999995,
          24.231279999999995
        ],
        [
          23.747609999999998,
          23.747609999999998
        ],
        [
          23.263939999999998,
          23.263939999999998
        ],
        [
          22.78027,
          22.78027
        ],
        [
          22.296599999999998,
          22.296599999999998
        ],
        [
          21.81293,
          21.81293
        ],
        [
          21.32926,
          21.32926
        ],
        [
          20.84559,
          20.84559
        ],
        [
          20.36192,
          20.36192
        ],
        [
          19.87825,
          19.87825
        ],
        [
          19.394579999999998,
          19.394579999999998
        ],
        [
          18.91091,
          18.91091
        ],
        [
          18.427239999999998,
          18.427239999999998
        ],
        [
          17.94357,
          17.94357
        ],
        [
          17.4599,
          17.4599
        ],
        [
          16.97623,
          16.97623
        ],
        [
          16.49256,
          16.49256
        ],
        [
          16.008889999999997,
          16.008889999999997
        ],
        [
          15.525219999999997,
          15.525219999999997
        ],
        [
          15.04155,
          15.04155
        ],
        [
          14.55788,
          14.55788
        ],
        [
          14.07421,
          14.07421
        ],
        [
          13.59054,
          13.59054
        ],
        [
          13.106869999999999,
          13.106869999999999
        ],
        [
          12.623199999999999,
          12.623199999999999
        ],
        [
          12.13953,
          12.13953
        ],
        [
          11.65586,
          11.65586
        ],
        [
          11.17219,
          11.17219
        ],
        [
          10.68852,
          10.68852
        ],
        [
          10.20485,
          10.20485
        ],
        [
          9.721179999999999,
          9.721179999999999
        ],
        [
          9.237510000000002,
          9.237510000000002
        ],
        [
          8.75384,
          8.75384
        ],
        [
          8.27017,
          8.27017
        ],
        [
          7.7865,
          7.7865
        ],
        [
          7.690316,
          7.690316
        ],
        [
          7.594132,
          7.594132
        ],
        [
          7.497948,
          7.497948
        ],
        [
          7.401764,
          7.401764
        ],
        [
          7.30558,
          7.30558
        ],
        [
          7.209396,
          7.209396
        ],
        [
          7.113212000000001,
          7.113212000000001
        ],
        [
          7.017028000000001,
          7.017028000000001
        ],
        [
          6.920844000000001,
          6.920844000000001
        ],
        [
          6.824660000000001,
          6.824660000000001
        ],
        [
          6.728476000000001,
          6.728476000000001
        ],
        [
          6.6322920000000005,
          6.6322920000000005
        ],
        [
          6.5361080000000005,
          6.5361080000000005
        ],
        [
          6.4399239999999995,
          6.4399239999999995
        ],
        [
          6.34374,
          6.34374
        ],
        [
          6.247555999999999,
          6.247555999999999
        ],
        [
          6.151372,
          6.151372
        ],
        [
          6.055187999999999,
          6.055187999999999
        ],
        [
          5.959004,
          5.959004
        ],
        [
          5.862820000000001,
          5.862820000000001
        ],
        [
          5.766636,
          5.766636
        ],
        [
          5.670452000000001,
          5.670452000000001
        ],
        [
          5.574268,
          5.574268
        ],
        [
          5.478084,
          5.478084
        ],
        [
          5.3819,
          5.3819
        ],
        [
          5.285716,
          5.285716
        ],
        [
          5.189532,
          5.189532
        ],
        [
          5.093348,
          5.093348
        ],
        [
          4.997164,
          4.997164
        ],
        [
          4.90098,
          4.90098
        ],
        [
          4.804796,
          4.804796
        ],
        [
          4.7086120000000005,
          4.7086120000000005
        ],
        [
          4.612428,
          4.612428
        ],
        [
          4.516244,
          4.516244
        ],
        [
          4.42006,
          4.42006
        ],
        [
          4.323876,
          4.323876
        ],
        [
          4.227692,
          4.227692
        ],
        [
          4.131508,
          4.131508
        ],
        [
          4.035324,
          4.035324
        ],
        [
          3.9391399999999996,
          3.9391399999999996
        ],
        [
          3.8429559999999996,
          3.8429559999999996
        ],
        [
          3.7467719999999995,
          3.7467719999999995
        ],
        [
          3.6505879999999995,
          3.6505879999999995
        ],
        [
          3.554404000000001,
          3.554404000000001
        ],
        [
          3.4582200000000007,
          3.4582200000000007
        ],
        [
          3.3620360000000002,
          3.3620360000000002
        ],
        [
          3.265852,
          3.265852
        ],
        [
          3.169668,
          3.169668
        ],
        [
          3.073484,
          3.073484
        ],
        [
          2.9773,
          2.9773
        ]
      ]
    },
    "15": {
      "label": "d15",
      "values": [
        [
          0.8,
          0.8
        ],
        [
          0.920488,
          0.920488
        ],
        [
          1.0409760000000001,
          1.0409760000000001
        ],
        [
          1.161464,
          1.161464
        ],
        [
          1.281952,
          1.281952
        ],
        [
          1.4024400000000001,
          1.4024400000000001
        ],
        [
          1.522928,
          1.522928
        ],
        [
          1.6434160000000002,
          1.6434160000000002
        ],
        [
          1.7639040000000001,
          1.7639040000000001
        ],
        [
          1.884392,
          1.884392
        ],
        [
          2.00488,
          2.00488
        ],
        [
          2.125368,
          2.125368
        ],
        [
          2.245856,
          2.245856
        ],
        [
          2.366344,
          2.366344
        ],
        [
          2.486832,
          2.486832
        ],
        [
          2.60732,
          2.60732
        ],
        [
          2.727808,
          2.727808
        ],
        [
          2.848296,
          2.848296
        ],
        [
          2.968784,
          2.968784
        ],
        [
          3.089272,
          3.089272
        ],
        [
          3.20976,
          3.20976
        ],
        [
          3.3302479999999997,
          3.3302479999999997
        ],
        [
          3.450736,
          3.450736
        ],
        [
          3.571224,
          3.571224
        ],
        [
          3.691712,
          3.691712
        ],
        [
          3.8122,
          3.8122
        ],
        [
          3.9326879999999997,
          3.9326879999999997
        ],
        [
          4.053176000000001,
          4.053176000000001
        ],
        [
          4.1736640000000005,
          4.1736640000000005
        ],
        [
          4.2941519999999995,
          4.2941519999999995
        ],
        [
          4.41464,
          4.41464
        ],
        [
          4.535128,
          4.535128
        ],
        [
          4.655616,
          4.655616
        ],
        [
          4.776104,
          4.776104
        ],
        [
          4.896592,
          4.896592
        ],
        [
          5.01708,
          5.01708
        ],
        [
          5.137568,
          5.137568
        ],
        [
          5.258056,
          5.258056
        ],
        [
          5.378544,
          5.378544
        ],
        [
          5.499032000000001,
          5.499032000000001
        ],
        [
          5.6195200000000005,
          5.6195200000000005
        ],
        [
          5.7400079999999996,
          5.7400079999999996
        ],
        [
          5.8604959999999995,
          5.8604959999999995
        ],
        [
          5.980983999999999,
          5.980983999999999
        ],
        [
          6.101472,
          6.101472
        ],
        [
          6.22196,
          6.22196
        ],
        [
          6.342448,
          6.342448
        ],
        [
          6.462935999999999,
          6.462935999999999
        ],
        [
          6.583424,
          6.583424
        ],
        [
          6.703912,
          6.703912
        ],
        [
          6.8244,
          6.8244
        ],
        [
          6.893912,
          6.893912
        ],
        [
          6.963424000000001,
          6.963424000000001
        ],
        [
          7.032935999999999,
          7.032935999999999
        ],
        [
          7.102448,
          7.102448
        ],
        [
          7.17196,
          7.17196
        ],
        [
          7.241472,
          7.241472
        ],
        [
          7.3109839999999995,
          7.3109839999999995
        ],
        [
          7.380495999999999,
          7.380495999999999
        ],
        [
          7.4500079999999995,
          7.4500079999999995
        ],
        [
          7.51952,
          7.51952
        ],
        [
          7.5890320000000004,
          7.5890320000000004
        ],
        [
          7.658543999999999,
          7.658543999999999
        ],
        [
          7.7280560000000005,
          7.7280560000000005
        ],
        [
          7.797568,
          7.797568
        ],
        [
          7.8670800000000005,
          7.8670800000000005
        ],
        [
          7.936592000000001,
          7.936592000000001
        ],
        [
          8.006104,
          8.006104
        ],
        [
          8.075616,
          8.075616
        ],
        [
          8.145128,
          8.145128
        ],
        [
          8.21464,
          8.21464
        ],
        [
          8.284152,
          8.284152
        ],
        [
          8.353664,
          8.353664
        ],
        [
          8.423176,
          8.423176
        ],
        [
          8.492688,
          8.492688
        ],
        [
          8.5622,
          8.5622
        ],
        [
          8.631712,
          8.631712
        ],
        [
          8.701224,
          8.701224
        ],
        [
          8.770736,
          8.770736
        ],
        [
          8.840248,
          8.840248
        ],
        [
          8.90976,
          8.90976
        ],
        [
          8.979272000000002,
          8.979272000000002
        ],
        [
          9.048784000000001,
          9.048784000000001
        ],
        [
          9.118296,
          9.118296
        ],
        [
          9.187808,
          9.187808
        ],
        [
          9.25732,
          9.25732
        ],
        [
          9.326832,
          9.326832
        ],
        [
          9.396344000000001,
          9.396344000000001
        ],
        [
          9.465856,
          9.465856
        ],
        [
          9.535368,
          9.535368
        ],
        [
          9.60488,
          9.60488
        ],
        [
          9.674392000000001,
          9.674392000000001
        ],
        [
          9.743904,
          9.743904
        ],
        [
          9.813416000000002,
          9.813416000000002
        ],
        [
          9.882928000000001,
          9.882928000000001
        ],
        [
          9.95244,
          9.95244
        ],
        [
          10.021951999999999,
          10.021951999999999
        ],
        [
          10.091464,
          10.091464
        ],
        [
          10.160976,
          10.160976
        ],
        [
          10.230488000000001,
          10.230488000000001
        ],
        [
          10.3,
          10.3
        ]
      ]
    },
    "18": {
      "label": "d18 + derived image gap",
      "values": [
        [
          39.11,
          39.11
        ],
        [
          39.218126253793834,
          39.218126253793834
        ],
        [
          39.330978366083365,
          39.330978366083365
        ],
        [
          39.44870074707522,
          39.44870074707522
        ],
        [
          39.57144377592941,
          39.57144377592941
        ],
        [
          39.699364112365,
          39.699364112365
        ],
        [
          39.83262502799296,
          39.83262502799296
        ],
        [
          39.971396758848286,
          39.971396758848286
        ],
        [
          40.115856880720564,
          40.115856880720564
        ],
        [
          40.26619070902169,
          40.26619070902169
        ],
        [
          40.422591725084,
          40.422591725084
        ],
        [
          40.5852620309481,
          40.5852620309481
        ],
        [
          40.75441283488783,
          40.75441283488783
        ],
        [
          40.930264970123304,
          40.930264970123304
        ],
        [
          41.11304944939869,
          41.11304944939869
        ],
        [
          41.3030080583527,
          41.3030080583527
        ],
        [
          41.5003939908833,
          41.5003939908833
        ],
        [
          41.70547253001681,
          41.70547253001681
        ],
        [
          41.91852177812919,
          41.91852177812919
        ],
        [
          42.139833440742855,
          42.139833440742855
        ],
        [
          42.369713668543596,
          42.369713668543596
        ],
        [
          42.60848396272475,
          42.60848396272475
        ],
        [
          42.85648214928578,
          42.85648214928578
        ],
        [
          43.114063428492614,
          43.114063428492614
        ],
        [
          43.38160150635019,
          43.38160150635019
        ],
        [
          43.65948981566564,
          43.65948981566564
        ],
        [
          43.94814283508651,
          43.94814283508651
        ],
        [
          44.24799751541201,
          44.24799751541201
        ],
        [
          44.559514823493345,
          44.559514823493345
        ],
        [
          44.883181415192595,
          44.883181415192595
        ],
        [
          45.21951145016304,
          45.21951145016304
        ],
        [
          45.56904856267828,
          45.56904856267828
        ],
        [
          45.93236800439459,
          45.93236800439459
        ],
        [
          46.31007897680025,
          46.31007897680025
        ],
        [
          46.70282717323913,
          46.70282717323913
        ],
        [
          47.111297552809496,
          47.111297552809496
        ],
        [
          47.5362173711962,
          47.5362173711962
        ],
        [
          47.97835949663569,
          47.97835949663569
        ],
        [
          48.43854604280849,
          48.43854604280849
        ],
        [
          48.917652354569334,
          48.917652354569334
        ],
        [
          49.41661138715444,
          49.41661138715444
        ],
        [
          49.936418524940954,
          49.936418524940954
        ],
        [
          50.47813689210806,
          50.47813689210806
        ],
        [
          51.0429032147951,
          51.0429032147951
        ],
        [
          51.63193430275081,
          51.63193430275081
        ],
        [
          52.24653422821875,
          52.24653422821875
        ],
        [
          52.88810229116014,
          52.88810229116014
        ],
        [
          53.55814187316759,
          53.55814187316759
        ],
        [
          54.25827029794107,
          54.25827029794107
        ],
        [
          54.99022983440651,
          54.99022983440651
        ],
        [
          55.7559,
          55.7559
        ],
        [
          55.9342657453182,
          55.9342657453182
        ],
        [
          56.11534395774341,
          56.11534395774341
        ],
        [
          56.2991792035913,
          56.2991792035913
        ],
        [
          56.48581703318736,
          56.48581703318736
        ],
        [
          56.67530400817547,
          56.67530400817547
        ],
        [
          56.86768772974081,
          56.86768772974081
        ],
        [
          57.06301686778354,
          57.06301686778354
        ],
        [
          57.26134119108025,
          57.26134119108025
        ],
        [
          57.462711598472495,
          57.462711598472495
        ],
        [
          57.66718015112413,
          57.66718015112413
        ],
        [
          57.87480010588931,
          57.87480010588931
        ],
        [
          58.085625949837635,
          58.085625949837635
        ],
        [
          58.299713435980955,
          58.299713435980955
        ],
        [
          58.51711962025409,
          58.51711962025409
        ],
        [
          58.7379028997987,
          58.7379028997987
        ],
        [
          58.96212305260512,
          58.96212305260512
        ],
        [
          59.18984127856844,
          59.18984127856844
        ],
        [
          59.42112024201852,
          59.42112024201852
        ],
        [
          59.65602411578535,
          59.65602411578535
        ],
        [
          59.89461862686614,
          59.89461862686614
        ],
        [
          60.13697110375943,
          60.13697110375943
        ],
        [
          60.38315052554214,
          60.38315052554214
        ],
        [
          60.63322757276076,
          60.63322757276076
        ],
        [
          60.88727468021801,
          60.88727468021801
        ],
        [
          61.145366091737,
          61.145366091737
        ],
        [
          61.40757791698865,
          61.40757791698865
        ],
        [
          61.673988190476734,
          61.673988190476734
        ],
        [
          61.94467693277322,
          61.94467693277322
        ],
        [
          62.21972621410674,
          62.21972621410674
        ],
        [
          62.499220220410294,
          62.499220220410294
        ],
        [
          62.78324532193926,
          62.78324532193926
        ],
        [
          63.07189014457722,
          63.07189014457722
        ],
        [
          63.36524564395346,
          63.36524564395346
        ],
        [
          63.66340518250259,
          63.66340518250259
        ],
        [
          63.96646460960319,
          63.96646460960319
        ],
        [
          64.27452234493906,
          64.27452234493906
        ],
        [
          64.58767946523776,
          64.58767946523776
        ],
        [
          64.9060397945441,
          64.9060397945441
        ],
        [
          65.2297099981995,
          65.2297099981995
        ],
        [
          65.55879968070685,
          65.55879968070685
        ],
        [
          65.8934214876672,
          65.8934214876672
        ],
        [
          66.23369121198888,
          66.23369121198888
        ],
        [
          66.57972790457923,
          66.57972790457923
        ],
        [
          66.93165398974115,
          66.93165398974115
        ],
        [
          67.28959538550951,
          67.28959538550951
        ],
        [
          67.65368162917486,
          67.65368162917486
        ],
        [
          68.02404600825939,
          68.02404600825939
        ],
        [
          68.40082569722188,
          68.40082569722188
        ],
        [
          68.78416190018459,
          68.78416190018459
        ],
        [
          69.1742,
          69.1742
        ]
      ]
    },
    "STO": {
      "label": "d8",
      "values": [
        [
          10.6,
          10.6
        ],
        [
          10.479512,
          10.479512
        ],
        [
          10.359024,
          10.359024
        ],
        [
          10.238535999999998,
          10.238535999999998
        ],
        [
          10.118048,
          10.118048
        ],
        [
          9.99756,
          9.99756
        ],
        [
          9.877072,
          9.877072
        ],
        [
          9.756584,
          9.756584
        ],
        [
          9.636096,
          9.636096
        ],
        [
          9.515608,
          9.515608
        ],
        [
          9.39512,
          9.39512
        ],
        [
          9.274632,
          9.274632
        ],
        [
          9.154143999999999,
          9.154143999999999
        ],
        [
          9.033655999999999,
          9.033655999999999
        ],
        [
          8.913167999999999,
          8.913167999999999
        ],
        [
          8.792679999999999,
          8.792679999999999
        ],
        [
          8.672191999999999,
          8.672191999999999
        ],
        [
          8.551703999999999,
          8.551703999999999
        ],
        [
          8.431216,
          8.431216
        ],
        [
          8.310728,
          8.310728
        ],
        [
          8.19024,
          8.19024
        ],
        [
          8.069752000000001,
          8.069752000000001
        ],
        [
          7.949263999999999,
          7.949263999999999
        ],
        [
          7.8287759999999995,
          7.8287759999999995
        ],
        [
          7.708288,
          7.708288
        ],
        [
          7.5878,
          7.5878
        ],
        [
          7.467312,
          7.467312
        ],
        [
          7.346824,
          7.346824
        ],
        [
          7.226336,
          7.226336
        ],
        [
          7.105848,
          7.105848
        ],
        [
          6.98536,
          6.98536
        ],
        [
          6.864871999999999,
          6.864871999999999
        ],
        [
          6.744384,
          6.744384
        ],
        [
          6.623896,
          6.623896
        ],
        [
          6.503407999999999,
          6.503407999999999
        ],
        [
          6.38292,
          6.38292
        ],
        [
          6.2624319999999996,
          6.2624319999999996
        ],
        [
          6.141944,
          6.141944
        ],
        [
          6.021456,
          6.021456
        ],
        [
          5.900968,
          5.900968
        ],
        [
          5.780479999999999,
          5.780479999999999
        ],
        [
          5.659992,
          5.659992
        ],
        [
          5.539503999999999,
          5.539503999999999
        ],
        [
          5.419015999999999,
          5.419015999999999
        ],
        [
          5.298528,
          5.298528
        ],
        [
          5.178039999999999,
          5.178039999999999
        ],
        [
          5.057551999999999,
          5.057551999999999
        ],
        [
          4.9370639999999995,
          4.9370639999999995
        ],
        [
          4.8165759999999995,
          4.8165759999999995
        ],
        [
          4.696088,
          4.696088
        ],
        [
          4.5756,
          4.5756
        ],
        [
          4.506088,
          4.506088
        ],
        [
          4.436576,
          4.436576
        ],
        [
          4.367063999999999,
          4.367063999999999
        ],
        [
          4.297552,
          4.297552
        ],
        [
          4.22804,
          4.22804
        ],
        [
          4.158527999999999,
          4.158527999999999
        ],
        [
          4.089016,
          4.089016
        ],
        [
          4.019504,
          4.019504
        ],
        [
          3.949992,
          3.949992
        ],
        [
          3.8804799999999995,
          3.8804799999999995
        ],
        [
          3.810968,
          3.810968
        ],
        [
          3.7414559999999994,
          3.7414559999999994
        ],
        [
          3.671944,
          3.671944
        ],
        [
          3.6024319999999994,
          3.6024319999999994
        ],
        [
          3.53292,
          3.53292
        ],
        [
          3.4634079999999994,
          3.4634079999999994
        ],
        [
          3.3938959999999994,
          3.3938959999999994
        ],
        [
          3.3243839999999993,
          3.3243839999999993
        ],
        [
          3.2548719999999998,
          3.2548719999999998
        ],
        [
          3.18536,
          3.18536
        ],
        [
          3.1158479999999997,
          3.1158479999999997
        ],
        [
          3.046336,
          3.046336
        ],
        [
          2.9768239999999997,
          2.9768239999999997
        ],
        [
          2.907312,
          2.907312
        ],
        [
          2.8377999999999997,
          2.8377999999999997
        ],
        [
          2.7682879999999996,
          2.7682879999999996
        ],
        [
          2.6987759999999996,
          2.6987759999999996
        ],
        [
          2.6292639999999996,
          2.6292639999999996
        ],
        [
          2.5597519999999996,
          2.5597519999999996
        ],
        [
          2.4902399999999996,
          2.4902399999999996
        ],
        [
          2.4207279999999995,
          2.4207279999999995
        ],
        [
          2.351216,
          2.351216
        ],
        [
          2.2817040000000004,
          2.2817040000000004
        ],
        [
          2.212192,
          2.212192
        ],
        [
          2.1426800000000004,
          2.1426800000000004
        ],
        [
          2.073168,
          2.073168
        ],
        [
          2.0036560000000003,
          2.0036560000000003
        ],
        [
          1.9341439999999999,
          1.9341439999999999
        ],
        [
          1.8646319999999998,
          1.8646319999999998
        ],
        [
          1.7951199999999998,
          1.7951199999999998
        ],
        [
          1.7256079999999998,
          1.7256079999999998
        ],
        [
          1.6560959999999998,
          1.6560959999999998
        ],
        [
          1.5865839999999998,
          1.5865839999999998
        ],
        [
          1.5170720000000004,
          1.5170720000000004
        ],
        [
          1.4475600000000004,
          1.4475600000000004
        ],
        [
          1.3780480000000004,
          1.3780480000000004
        ],
        [
          1.3085360000000001,
          1.3085360000000001
        ],
        [
          1.2390240000000001,
          1.2390240000000001
        ],
        [
          1.169512,
          1.169512
        ],
        [
          1.1,
          1.1
        ]
      ]
    }
  },
  "aperture": {
    "fStops": [
      3.62,
      5.05,
      5.79,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22,
    "blades": 8
  },
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "7"
    },
    {
      "text": "G2",
      "fromSurface": "9",
      "toSurface": "15"
    },
    {
      "text": "G3",
      "fromSurface": "16",
      "toSurface": "18"
    }
  ],
  "doublets": [
    {
      "text": "H1",
      "fromSurface": "3",
      "toSurface": "5A"
    },
    {
      "text": "D1",
      "fromSurface": "11",
      "toSurface": "13"
    },
    {
      "text": "D2",
      "fromSurface": "16",
      "toSurface": "18"
    }
  ],
  "layout": {
    "scFill": 0.6,
    "yScFill": 0.6
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
