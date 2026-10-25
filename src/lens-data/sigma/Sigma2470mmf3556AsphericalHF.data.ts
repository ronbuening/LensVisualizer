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
      "label": "Glass body 1",
      "type": "Negative Meniscus",
      "nd": 1.8042,
      "vd": 46.5,
      "indexReference": "d",
      "focalLengthMm": -37.78266817161673,
      "glass": "TAF3 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Source material in G1. Standalone in-air focal length does not isolate individual aberration contribution.",
      "diagramLabel": "L1",
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Glass body 2",
      "type": "Negative Meniscus",
      "nd": 1.7725,
      "vd": 49.7,
      "indexReference": "d",
      "focalLengthMm": -48.698735257445264,
      "glass": "TAF1 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Source material in G1. Standalone in-air focal length does not isolate individual aberration contribution.",
      "diagramLabel": "L2",
      "cemented": "H1",
    },
    {
      "id": 3,
      "name": "R1",
      "label": "Hybrid resin layer",
      "type": "Hybrid resin negative meniscus",
      "nd": 1.5184,
      "vd": 52.1,
      "indexReference": "d",
      "focalLengthMm": -294.73447819939133,
      "glass": "Unmatched (hybrid optical resin; spectrum unpublished)",
      "role": "Separate source resin film; spectrum not supplied.",
      "diagramLabel": "R1",
      "cemented": "H1"
    },
    {
      "id": 4,
      "name": "L3",
      "label": "Glass body 3",
      "type": "Biconvex Positive",
      "nd": 1.6727,
      "vd": 32.1,
      "indexReference": "d",
      "focalLengthMm": 46.228167796322445,
      "glass": "S-TIM25 (OHARA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Source material in G1. Standalone in-air focal length does not isolate individual aberration contribution.",
      "diagramLabel": "L3",
    },
    {
      "id": 5,
      "name": "L4",
      "label": "Glass body 4",
      "type": "Biconvex Positive",
      "nd": 1.6968,
      "vd": 55.6,
      "indexReference": "d",
      "focalLengthMm": 39.56474354543368,
      "glass": "K-LaK14 (SUMITA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Source material in G2. Standalone in-air focal length does not isolate individual aberration contribution.",
      "diagramLabel": "L4",
    },
    {
      "id": 6,
      "name": "L5",
      "label": "Glass body 5",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.2,
      "indexReference": "d",
      "focalLengthMm": 29.63803029779626,
      "glass": "S-FSL5 (OHARA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Source material in G2. Standalone in-air focal length does not isolate individual aberration contribution.",
      "diagramLabel": "L5",
      "cemented": "D1",
    },
    {
      "id": 7,
      "name": "L6",
      "label": "Glass body 6",
      "type": "Biconcave Negative",
      "nd": 1.834,
      "vd": 37.3,
      "indexReference": "d",
      "focalLengthMm": -13.888182829674783,
      "glass": "NBFD10 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Source material in G2. Standalone in-air focal length does not isolate individual aberration contribution.",
      "diagramLabel": "L6",
      "cemented": "D1",
    },
    {
      "id": 8,
      "name": "L7",
      "label": "Glass body 7",
      "type": "Biconvex Positive",
      "nd": 1.5168,
      "vd": 64.4,
      "indexReference": "d",
      "focalLengthMm": 40.40475130215067,
      "glass": "BSC7 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Source material in G2. Standalone in-air focal length does not isolate individual aberration contribution.",
      "diagramLabel": "L7",
    },
    {
      "id": 9,
      "name": "L8",
      "label": "Glass body 8",
      "type": "Positive Meniscus",
      "nd": 1.65844,
      "vd": 50.8,
      "indexReference": "d",
      "focalLengthMm": 31.73162975024395,
      "glass": "BACED5 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Source material in G3. Standalone in-air focal length does not isolate individual aberration contribution.",
      "diagramLabel": "L8",
      "cemented": "D2",
    },
    {
      "id": 10,
      "name": "L9",
      "label": "Glass body 9",
      "type": "Negative Meniscus",
      "nd": 1.7725,
      "vd": 49.7,
      "indexReference": "d",
      "focalLengthMm": -31.26136140897904,
      "glass": "TAF1 (HOYA coordinate-equivalent class; supplier unconfirmed)",
      "role": "Source material in G3. Standalone in-air focal length does not isolate individual aberration contribution.",
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
      "sd": 14.5
    },
    {
      "label": "3",
      "R": 895.35,
      "d": 1.3,
      "sd": 14.5,
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
      "sd": 8.3
    },
    {
      "label": "14",
      "R": 85.25,
      "d": 2.85,
      "sd": 8.3,
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
        "label": "Wide native25.0mm",
        "published": true
      },
      {
        "published": false,
        "focalLengthMm": 25.133542579270635,
        "nominalFNumber": 3.6343
      },
      {
        "published": false,
        "focalLengthMm": 25.258522359948945,
        "nominalFNumber": 3.6486
      },
      {
        "published": false,
        "focalLengthMm": 25.384761112575884,
        "nominalFNumber": 3.6629
      },
      {
        "published": false,
        "focalLengthMm": 25.512277955504175,
        "nominalFNumber": 3.6772
      },
      {
        "published": false,
        "focalLengthMm": 25.641092396156477,
        "nominalFNumber": 3.6915
      },
      {
        "published": false,
        "focalLengthMm": 25.771224340973415,
        "nominalFNumber": 3.7058
      },
      {
        "published": false,
        "focalLengthMm": 25.90269410566812,
        "nominalFNumber": 3.7201
      },
      {
        "published": false,
        "focalLengthMm": 26.03552242579883,
        "nominalFNumber": 3.7344
      },
      {
        "published": false,
        "focalLengthMm": 26.169730467670814,
        "nominalFNumber": 3.7487
      },
      {
        "published": false,
        "focalLengthMm": 26.30533983958,
        "nominalFNumber": 3.763
      },
      {
        "published": false,
        "focalLengthMm": 26.442372603410206,
        "nominalFNumber": 3.7773
      },
      {
        "published": false,
        "focalLengthMm": 26.58085128659802,
        "nominalFNumber": 3.7916
      },
      {
        "published": false,
        "focalLengthMm": 26.720798894477856,
        "nominalFNumber": 3.8059
      },
      {
        "published": false,
        "focalLengthMm": 26.8622389230224,
        "nominalFNumber": 3.8202
      },
      {
        "published": false,
        "focalLengthMm": 27.005195371992567,
        "nominalFNumber": 3.8345
      },
      {
        "published": false,
        "focalLengthMm": 27.149692758512586,
        "nominalFNumber": 3.8487999999999998
      },
      {
        "published": false,
        "focalLengthMm": 27.295756131086762,
        "nominalFNumber": 3.8631
      },
      {
        "published": false,
        "focalLengthMm": 27.44341108407401,
        "nominalFNumber": 3.8774
      },
      {
        "published": false,
        "focalLengthMm": 27.592683772638523,
        "nominalFNumber": 3.8917
      },
      {
        "published": false,
        "focalLengthMm": 27.74360092819418,
        "nominalFNumber": 3.9060000000000006
      },
      {
        "published": false,
        "focalLengthMm": 27.896189874362346,
        "nominalFNumber": 3.9203
      },
      {
        "published": false,
        "focalLengthMm": 28.05047854346298,
        "nominalFNumber": 3.9346000000000005
      },
      {
        "published": false,
        "focalLengthMm": 28.206495493559732,
        "nominalFNumber": 3.9489
      },
      {
        "published": false,
        "focalLengthMm": 28.364269926081256,
        "nominalFNumber": 3.9632000000000005
      },
      {
        "published": false,
        "focalLengthMm": 28.523831704041104,
        "nominalFNumber": 3.9775
      },
      {
        "published": false,
        "focalLengthMm": 28.68521137088054,
        "nominalFNumber": 3.9917999999999996
      },
      {
        "published": false,
        "focalLengthMm": 28.848440169958888,
        "nominalFNumber": 4.0061
      },
      {
        "published": false,
        "focalLengthMm": 29.013550064717855,
        "nominalFNumber": 4.0204
      },
      {
        "published": false,
        "focalLengthMm": 29.18057375954686,
        "nominalFNumber": 4.0347
      },
      {
        "published": false,
        "focalLengthMm": 29.3495447213782,
        "nominalFNumber": 4.0489999999999995
      },
      {
        "published": false,
        "focalLengthMm": 29.52049720204173,
        "nominalFNumber": 4.0633
      },
      {
        "published": false,
        "focalLengthMm": 29.693466261411064,
        "nominalFNumber": 4.0775999999999994
      },
      {
        "published": false,
        "focalLengthMm": 29.868487791372992,
        "nominalFNumber": 4.0919
      },
      {
        "published": false,
        "focalLengthMm": 30.04559854065604,
        "nominalFNumber": 4.106199999999999
      },
      {
        "published": false,
        "focalLengthMm": 30.224836140552803,
        "nominalFNumber": 4.1205
      },
      {
        "published": false,
        "focalLengthMm": 30.406239131574793,
        "nominalFNumber": 4.1348
      },
      {
        "published": false,
        "focalLengthMm": 30.589846991079188,
        "nominalFNumber": 4.1491
      },
      {
        "published": false,
        "focalLengthMm": 30.77570016190905,
        "nominalFNumber": 4.1634
      },
      {
        "published": false,
        "focalLengthMm": 30.963840082090513,
        "nominalFNumber": 4.1777
      },
      {
        "published": false,
        "focalLengthMm": 31.15430921563321,
        "nominalFNumber": 4.192
      },
      {
        "published": false,
        "focalLengthMm": 31.347151084481418,
        "nominalFNumber": 4.206300000000001
      },
      {
        "published": false,
        "focalLengthMm": 31.542410301666965,
        "nominalFNumber": 4.2206
      },
      {
        "published": false,
        "focalLengthMm": 31.74013260571636,
        "nominalFNumber": 4.2349
      },
      {
        "published": false,
        "focalLengthMm": 31.940364896368806,
        "nominalFNumber": 4.2492
      },
      {
        "published": false,
        "focalLengthMm": 32.14315527166247,
        "nominalFNumber": 4.2635000000000005
      },
      {
        "published": false,
        "focalLengthMm": 32.3485530664517,
        "nominalFNumber": 4.2778
      },
      {
        "published": false,
        "focalLengthMm": 32.556608892419256,
        "nominalFNumber": 4.2921
      },
      {
        "published": false,
        "focalLengthMm": 32.767374679652036,
        "nominalFNumber": 4.3064
      },
      {
        "published": false,
        "focalLengthMm": 32.98090371985232,
        "nominalFNumber": 4.3207
      },
      {
        "published": false,
        "focalLengthMm": 33.19725071125908,
        "nominalFNumber": 4.335
      },
      {
        "published": false,
        "focalLengthMm": 33.41647180536016,
        "nominalFNumber": 4.3492999999999995
      },
      {
        "published": false,
        "focalLengthMm": 33.638624655478075,
        "nominalFNumber": 4.3636
      },
      {
        "published": false,
        "focalLengthMm": 33.86376846731854,
        "nominalFNumber": 4.3779
      },
      {
        "published": false,
        "focalLengthMm": 34.091964051573925,
        "nominalFNumber": 4.3922
      },
      {
        "published": false,
        "focalLengthMm": 34.32327387868099,
        "nominalFNumber": 4.4065
      },
      {
        "published": false,
        "focalLengthMm": 34.55776213583521,
        "nominalFNumber": 4.4208
      },
      {
        "published": false,
        "focalLengthMm": 34.79549478637193,
        "nominalFNumber": 4.4351
      },
      {
        "published": false,
        "focalLengthMm": 35.036539631629346,
        "nominalFNumber": 4.4494
      },
      {
        "published": false,
        "focalLengthMm": 35.2809663754153,
        "nominalFNumber": 4.4637
      },
      {
        "published": false,
        "focalLengthMm": 35.52884669120632,
        "nominalFNumber": 4.478
      },
      {
        "published": false,
        "focalLengthMm": 35.78025429221567,
        "nominalFNumber": 4.4923
      },
      {
        "published": false,
        "focalLengthMm": 36.03526500447372,
        "nominalFNumber": 4.5066
      },
      {
        "published": false,
        "focalLengthMm": 36.2939568430729,
        "nominalFNumber": 4.520899999999999
      },
      {
        "published": false,
        "focalLengthMm": 36.556410091738485,
        "nominalFNumber": 4.5352
      },
      {
        "published": false,
        "focalLengthMm": 36.822707385895704,
        "nominalFNumber": 4.5495
      },
      {
        "published": false,
        "focalLengthMm": 37.092933799413466,
        "nominalFNumber": 4.5638000000000005
      },
      {
        "published": false,
        "focalLengthMm": 37.36717693521624,
        "nominalFNumber": 4.5781
      },
      {
        "published": false,
        "focalLengthMm": 37.64552701996655,
        "nominalFNumber": 4.5924
      },
      {
        "published": false,
        "focalLengthMm": 37.92807700303353,
        "nominalFNumber": 4.6067
      },
      {
        "published": false,
        "focalLengthMm": 38.21492265997502,
        "nominalFNumber": 4.621
      },
      {
        "published": false,
        "focalLengthMm": 38.50616270077552,
        "nominalFNumber": 4.6353
      },
      {
        "published": false,
        "focalLengthMm": 38.80189888309696,
        "nominalFNumber": 4.6495999999999995
      },
      {
        "published": false,
        "focalLengthMm": 39.10223613081539,
        "nominalFNumber": 4.6639
      },
      {
        "published": false,
        "focalLengthMm": 39.40728265813304,
        "nominalFNumber": 4.6781999999999995
      },
      {
        "published": false,
        "focalLengthMm": 39.71715009957515,
        "nominalFNumber": 4.6925
      },
      {
        "published": false,
        "focalLengthMm": 40.031953646198545,
        "nominalFNumber": 4.7068
      },
      {
        "published": false,
        "focalLengthMm": 40.351812188362054,
        "nominalFNumber": 4.7211
      },
      {
        "published": false,
        "focalLengthMm": 40.676848465429835,
        "nominalFNumber": 4.7354
      },
      {
        "published": false,
        "focalLengthMm": 41.00718922280403,
        "nominalFNumber": 4.7497
      },
      {
        "published": false,
        "focalLengthMm": 41.34296537670843,
        "nominalFNumber": 4.764
      },
      {
        "published": false,
        "focalLengthMm": 41.684312187173546,
        "nominalFNumber": 4.778300000000001
      },
      {
        "published": false,
        "focalLengthMm": 42.0313694397035,
        "nominalFNumber": 4.7926
      },
      {
        "published": false,
        "focalLengthMm": 42.38428163613615,
        "nominalFNumber": 4.8069
      },
      {
        "published": false,
        "focalLengthMm": 42.74319819524591,
        "nominalFNumber": 4.8212
      },
      {
        "published": false,
        "focalLengthMm": 43.10827366367218,
        "nominalFNumber": 4.8355
      },
      {
        "published": false,
        "focalLengthMm": 43.4796679378006,
        "nominalFNumber": 4.8498
      },
      {
        "published": false,
        "focalLengthMm": 43.8575464972656,
        "nominalFNumber": 4.8641
      },
      {
        "published": false,
        "focalLengthMm": 44.24208065079051,
        "nominalFNumber": 4.8784
      },
      {
        "published": false,
        "focalLengthMm": 44.63344779513327,
        "nominalFNumber": 4.8927
      },
      {
        "published": false,
        "focalLengthMm": 45.0318316879592,
        "nominalFNumber": 4.907
      },
      {
        "published": false,
        "focalLengthMm": 45.437422735523455,
        "nominalFNumber": 4.9213000000000005
      },
      {
        "published": false,
        "focalLengthMm": 45.85041829610898,
        "nominalFNumber": 4.9356
      },
      {
        "published": false,
        "focalLengthMm": 46.27102300023563,
        "nominalFNumber": 4.9499
      },
      {
        "published": false,
        "focalLengthMm": 46.69944908873329,
        "nominalFNumber": 4.9642
      },
      {
        "published": false,
        "focalLengthMm": 47.13591676985068,
        "nominalFNumber": 4.9784999999999995
      },
      {
        "published": false,
        "focalLengthMm": 47.580654596663955,
        "nominalFNumber": 4.9928
      },
      {
        "published": false,
        "focalLengthMm": 48.033899866142775,
        "nominalFNumber": 5.007099999999999
      },
      {
        "published": false,
        "focalLengthMm": 48.495899041339214,
        "nominalFNumber": 5.0214
      },
      {
        "published": false,
        "focalLengthMm": 48.96690819827637,
        "nominalFNumber": 5.035699999999999
      },
      {
        "focalLengthMm": 49.4,
        "nominalFNumber": 5.05,
        "published": true
      },
      {
        "published": false,
        "focalLengthMm": 49.57998384163444,
        "nominalFNumber": 5.0573999999999995
      },
      {
        "published": false,
        "focalLengthMm": 49.71349527057689,
        "nominalFNumber": 5.0648
      },
      {
        "published": false,
        "focalLengthMm": 49.847733675194505,
        "nominalFNumber": 5.0722
      },
      {
        "published": false,
        "focalLengthMm": 49.98270500891823,
        "nominalFNumber": 5.0796
      },
      {
        "published": false,
        "focalLengthMm": 50.11841529036292,
        "nominalFNumber": 5.087
      },
      {
        "published": false,
        "focalLengthMm": 50.25487060422192,
        "nominalFNumber": 5.0944
      },
      {
        "published": false,
        "focalLengthMm": 50.3920771021766,
        "nominalFNumber": 5.1018
      },
      {
        "published": false,
        "focalLengthMm": 50.53004100382056,
        "nominalFNumber": 5.1092
      },
      {
        "published": false,
        "focalLengthMm": 50.668768597599396,
        "nominalFNumber": 5.1166
      },
      {
        "published": false,
        "focalLengthMm": 50.8082662417662,
        "nominalFNumber": 5.124
      },
      {
        "published": false,
        "focalLengthMm": 50.94854036535284,
        "nominalFNumber": 5.1314
      },
      {
        "published": false,
        "focalLengthMm": 51.08959746915773,
        "nominalFNumber": 5.1388
      },
      {
        "published": false,
        "focalLengthMm": 51.23144412674968,
        "nominalFNumber": 5.146199999999999
      },
      {
        "published": false,
        "focalLengthMm": 51.374086985489456,
        "nominalFNumber": 5.153599999999999
      },
      {
        "published": false,
        "focalLengthMm": 51.51753276756779,
        "nominalFNumber": 5.161
      },
      {
        "published": false,
        "focalLengthMm": 51.66178827106138,
        "nominalFNumber": 5.168399999999999
      },
      {
        "published": false,
        "focalLengthMm": 51.806860371006984,
        "nominalFNumber": 5.1758
      },
      {
        "published": false,
        "focalLengthMm": 51.952756020493155,
        "nominalFNumber": 5.183199999999999
      },
      {
        "published": false,
        "focalLengthMm": 52.09948225177154,
        "nominalFNumber": 5.1906
      },
      {
        "published": false,
        "focalLengthMm": 52.24704617738629,
        "nominalFNumber": 5.1979999999999995
      },
      {
        "published": false,
        "focalLengthMm": 52.39545499132352,
        "nominalFNumber": 5.2054
      },
      {
        "published": false,
        "focalLengthMm": 52.544715970180185,
        "nominalFNumber": 5.2128
      },
      {
        "published": false,
        "focalLengthMm": 52.69483647435369,
        "nominalFNumber": 5.2202
      },
      {
        "published": false,
        "focalLengthMm": 52.84582394925115,
        "nominalFNumber": 5.2276
      },
      {
        "published": false,
        "focalLengthMm": 52.99768592652055,
        "nominalFNumber": 5.234999999999999
      },
      {
        "published": false,
        "focalLengthMm": 53.1504300253031,
        "nominalFNumber": 5.2424
      },
      {
        "published": false,
        "focalLengthMm": 53.30406395350728,
        "nominalFNumber": 5.2498
      },
      {
        "published": false,
        "focalLengthMm": 53.45859550910548,
        "nominalFNumber": 5.2572
      },
      {
        "published": false,
        "focalLengthMm": 53.61403258145306,
        "nominalFNumber": 5.2646
      },
      {
        "published": false,
        "focalLengthMm": 53.77038315263118,
        "nominalFNumber": 5.272
      },
      {
        "published": false,
        "focalLengthMm": 53.92765529881306,
        "nominalFNumber": 5.2794
      },
      {
        "published": false,
        "focalLengthMm": 54.08585719165431,
        "nominalFNumber": 5.2868
      },
      {
        "published": false,
        "focalLengthMm": 54.244997099708456,
        "nominalFNumber": 5.2942
      },
      {
        "published": false,
        "focalLengthMm": 54.40508338986721,
        "nominalFNumber": 5.3016
      },
      {
        "published": false,
        "focalLengthMm": 54.566124528826954,
        "nominalFNumber": 5.308999999999999
      },
      {
        "published": false,
        "focalLengthMm": 54.72812908458133,
        "nominalFNumber": 5.3164
      },
      {
        "published": false,
        "focalLengthMm": 54.89110572794039,
        "nominalFNumber": 5.3238
      },
      {
        "published": false,
        "focalLengthMm": 55.05506323407812,
        "nominalFNumber": 5.331199999999999
      },
      {
        "published": false,
        "focalLengthMm": 55.22001048410685,
        "nominalFNumber": 5.3386
      },
      {
        "published": false,
        "focalLengthMm": 55.38595646668062,
        "nominalFNumber": 5.346
      },
      {
        "published": false,
        "focalLengthMm": 55.55291027962864,
        "nominalFNumber": 5.3534
      },
      {
        "published": false,
        "focalLengthMm": 55.72088113161722,
        "nominalFNumber": 5.360799999999999
      },
      {
        "published": false,
        "focalLengthMm": 55.88987834384298,
        "nominalFNumber": 5.3682
      },
      {
        "published": false,
        "focalLengthMm": 56.05991135175723,
        "nominalFNumber": 5.3756
      },
      {
        "published": false,
        "focalLengthMm": 56.230989706821624,
        "nominalFNumber": 5.383
      },
      {
        "published": false,
        "focalLengthMm": 56.403123078296815,
        "nominalFNumber": 5.3904
      },
      {
        "published": false,
        "focalLengthMm": 56.57632125506412,
        "nominalFNumber": 5.3978
      },
      {
        "published": false,
        "focalLengthMm": 56.750594147480996,
        "nominalFNumber": 5.4052
      },
      {
        "published": false,
        "focalLengthMm": 56.92595178927132,
        "nominalFNumber": 5.412599999999999
      },
      {
        "published": false,
        "focalLengthMm": 57.10240433945095,
        "nominalFNumber": 5.42
      },
      {
        "published": false,
        "focalLengthMm": 57.27996208428924,
        "nominalFNumber": 5.4274000000000004
      },
      {
        "published": false,
        "focalLengthMm": 57.45863543930856,
        "nominalFNumber": 5.4348
      },
      {
        "published": false,
        "focalLengthMm": 57.63843495131998,
        "nominalFNumber": 5.4422
      },
      {
        "published": false,
        "focalLengthMm": 57.81937130049887,
        "nominalFNumber": 5.4496
      },
      {
        "published": false,
        "focalLengthMm": 58.00145530249994,
        "nominalFNumber": 5.457
      },
      {
        "published": false,
        "focalLengthMm": 58.18469791061127,
        "nominalFNumber": 5.4643999999999995
      },
      {
        "published": false,
        "focalLengthMm": 58.369110217951786,
        "nominalFNumber": 5.4718
      },
      {
        "published": false,
        "focalLengthMm": 58.55470345970884,
        "nominalFNumber": 5.4792000000000005
      },
      {
        "published": false,
        "focalLengthMm": 58.741489015420356,
        "nominalFNumber": 5.4866
      },
      {
        "published": false,
        "focalLengthMm": 58.92947841130041,
        "nominalFNumber": 5.494
      },
      {
        "published": false,
        "focalLengthMm": 59.11868332261014,
        "nominalFNumber": 5.5014
      },
      {
        "published": false,
        "focalLengthMm": 59.30911557607461,
        "nominalFNumber": 5.5088
      },
      {
        "published": false,
        "focalLengthMm": 59.5007871523472,
        "nominalFNumber": 5.5161999999999995
      },
      {
        "published": false,
        "focalLengthMm": 59.693710188521884,
        "nominalFNumber": 5.5236
      },
      {
        "published": false,
        "focalLengthMm": 59.88789698069522,
        "nominalFNumber": 5.531
      },
      {
        "published": false,
        "focalLengthMm": 60.08335998657838,
        "nominalFNumber": 5.5384
      },
      {
        "published": false,
        "focalLengthMm": 60.280111828161516,
        "nominalFNumber": 5.5458
      },
      {
        "published": false,
        "focalLengthMm": 60.47816529443057,
        "nominalFNumber": 5.5532
      },
      {
        "published": false,
        "focalLengthMm": 60.67753334413788,
        "nominalFNumber": 5.5606
      },
      {
        "published": false,
        "focalLengthMm": 60.87822910862889,
        "nominalFNumber": 5.568
      },
      {
        "published": false,
        "focalLengthMm": 61.08026589472501,
        "nominalFNumber": 5.5754
      },
      {
        "published": false,
        "focalLengthMm": 61.28365718766454,
        "nominalFNumber": 5.582800000000001
      },
      {
        "published": false,
        "focalLengthMm": 61.4884166541031,
        "nominalFNumber": 5.5902
      },
      {
        "published": false,
        "focalLengthMm": 61.69455814517448,
        "nominalFNumber": 5.5976
      },
      {
        "published": false,
        "focalLengthMm": 61.90209569961415,
        "nominalFNumber": 5.605
      },
      {
        "published": false,
        "focalLengthMm": 62.11104354694587,
        "nominalFNumber": 5.6124
      },
      {
        "published": false,
        "focalLengthMm": 62.32141611073397,
        "nominalFNumber": 5.619800000000001
      },
      {
        "published": false,
        "focalLengthMm": 62.53322801190225,
        "nominalFNumber": 5.6272
      },
      {
        "published": false,
        "focalLengthMm": 62.74649407212117,
        "nominalFNumber": 5.634600000000001
      },
      {
        "published": false,
        "focalLengthMm": 62.96122931726492,
        "nominalFNumber": 5.642
      },
      {
        "published": false,
        "focalLengthMm": 63.177448980940376,
        "nominalFNumber": 5.6494
      },
      {
        "published": false,
        "focalLengthMm": 63.395168508089554,
        "nominalFNumber": 5.6568000000000005
      },
      {
        "published": false,
        "focalLengthMm": 63.61440355866692,
        "nominalFNumber": 5.6642
      },
      {
        "published": false,
        "focalLengthMm": 63.83517001139435,
        "nominalFNumber": 5.671600000000001
      },
      {
        "published": false,
        "focalLengthMm": 64.05748396759428,
        "nominalFNumber": 5.679
      },
      {
        "published": false,
        "focalLengthMm": 64.28136175510447,
        "nominalFNumber": 5.686400000000001
      },
      {
        "published": false,
        "focalLengthMm": 64.50681993227539,
        "nominalFNumber": 5.6938
      },
      {
        "published": false,
        "focalLengthMm": 64.7338752920523,
        "nominalFNumber": 5.7012
      },
      {
        "published": false,
        "focalLengthMm": 64.96254486614502,
        "nominalFNumber": 5.7086
      },
      {
        "published": false,
        "focalLengthMm": 65.19284592928575,
        "nominalFNumber": 5.716
      },
      {
        "published": false,
        "focalLengthMm": 65.42479600358028,
        "nominalFNumber": 5.7234
      },
      {
        "published": false,
        "focalLengthMm": 65.65841286295091,
        "nominalFNumber": 5.7308
      },
      {
        "published": false,
        "focalLengthMm": 65.89371453767697,
        "nominalFNumber": 5.7382
      },
      {
        "published": false,
        "focalLengthMm": 66.13071931903302,
        "nominalFNumber": 5.7456
      },
      {
        "published": false,
        "focalLengthMm": 66.36944576402924,
        "nominalFNumber": 5.753
      },
      {
        "published": false,
        "focalLengthMm": 66.60991270025373,
        "nominalFNumber": 5.7604
      },
      {
        "published": false,
        "focalLengthMm": 66.85213923082297,
        "nominalFNumber": 5.7678
      },
      {
        "published": false,
        "focalLengthMm": 67.09614473944,
        "nominalFNumber": 5.7752
      },
      {
        "published": false,
        "focalLengthMm": 67.34194889556589,
        "nominalFNumber": 5.7826
      },
      {
        "focalLengthMm": 67.6,
        "nominalFNumber": 5.79,
        "label": "Tele native67.6mm",
        "published": true
      }
    ],
    "apertureModel": "from-nominal-fno",
    "step": 0.005
  },
  "focus": {
    "closeFocusM": 0.4,
    "step": 1,
    "description": "The patent prints infinity spacings at wide, middle and tele; focusing is not modeled. The intermediate zoom positions are an inferred reconstruction, not the factory cam: the G1–stop and stop–G2 spacings follow linear laws between the printed stations, the stop moves with G3 as the printed spacings require, and the back focus is solved for infinity focus at each position. The patent's second flare stop is not modeled. The marketed minimum focus distance is 0.4 m."
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
          31.728164999999997,
          31.728164999999997
        ],
        [
          31.486329999999995,
          31.486329999999995
        ],
        [
          31.244495,
          31.244495
        ],
        [
          31.00266,
          31.00266
        ],
        [
          30.760824999999997,
          30.760824999999997
        ],
        [
          30.518989999999995,
          30.518989999999995
        ],
        [
          30.277154999999997,
          30.277154999999997
        ],
        [
          30.035320000000002,
          30.035320000000002
        ],
        [
          29.793485,
          29.793485
        ],
        [
          29.55165,
          29.55165
        ],
        [
          29.309815,
          29.309815
        ],
        [
          29.06798,
          29.06798
        ],
        [
          28.826145,
          28.826145
        ],
        [
          28.58431,
          28.58431
        ],
        [
          28.342474999999997,
          28.342474999999997
        ],
        [
          28.10064,
          28.10064
        ],
        [
          27.858804999999997,
          27.858804999999997
        ],
        [
          27.616970000000002,
          27.616970000000002
        ],
        [
          27.375135,
          27.375135
        ],
        [
          27.133300000000002,
          27.133300000000002
        ],
        [
          26.891465,
          26.891465
        ],
        [
          26.64963,
          26.64963
        ],
        [
          26.407795,
          26.407795
        ],
        [
          26.16596,
          26.16596
        ],
        [
          25.924125,
          25.924125
        ],
        [
          25.68229,
          25.68229
        ],
        [
          25.440454999999996,
          25.440454999999996
        ],
        [
          25.19862,
          25.19862
        ],
        [
          24.956785,
          24.956785
        ],
        [
          24.714949999999998,
          24.714949999999998
        ],
        [
          24.473114999999996,
          24.473114999999996
        ],
        [
          24.231279999999995,
          24.231279999999995
        ],
        [
          23.989445,
          23.989445
        ],
        [
          23.747609999999998,
          23.747609999999998
        ],
        [
          23.505775,
          23.505775
        ],
        [
          23.263939999999998,
          23.263939999999998
        ],
        [
          23.022104999999996,
          23.022104999999996
        ],
        [
          22.78027,
          22.78027
        ],
        [
          22.538435,
          22.538435
        ],
        [
          22.296599999999998,
          22.296599999999998
        ],
        [
          22.054765,
          22.054765
        ],
        [
          21.81293,
          21.81293
        ],
        [
          21.571095000000003,
          21.571095000000003
        ],
        [
          21.32926,
          21.32926
        ],
        [
          21.087425,
          21.087425
        ],
        [
          20.84559,
          20.84559
        ],
        [
          20.603755,
          20.603755
        ],
        [
          20.36192,
          20.36192
        ],
        [
          20.120085,
          20.120085
        ],
        [
          19.87825,
          19.87825
        ],
        [
          19.636415,
          19.636415
        ],
        [
          19.394579999999998,
          19.394579999999998
        ],
        [
          19.152745,
          19.152745
        ],
        [
          18.91091,
          18.91091
        ],
        [
          18.669075,
          18.669075
        ],
        [
          18.427239999999998,
          18.427239999999998
        ],
        [
          18.185405000000003,
          18.185405000000003
        ],
        [
          17.94357,
          17.94357
        ],
        [
          17.701735,
          17.701735
        ],
        [
          17.4599,
          17.4599
        ],
        [
          17.218065,
          17.218065
        ],
        [
          16.97623,
          16.97623
        ],
        [
          16.734395,
          16.734395
        ],
        [
          16.49256,
          16.49256
        ],
        [
          16.250725,
          16.250725
        ],
        [
          16.008889999999997,
          16.008889999999997
        ],
        [
          15.767055,
          15.767055
        ],
        [
          15.525219999999997,
          15.525219999999997
        ],
        [
          15.283385000000003,
          15.283385000000003
        ],
        [
          15.04155,
          15.04155
        ],
        [
          14.799714999999999,
          14.799714999999999
        ],
        [
          14.55788,
          14.55788
        ],
        [
          14.316044999999999,
          14.316044999999999
        ],
        [
          14.07421,
          14.07421
        ],
        [
          13.832374999999999,
          13.832374999999999
        ],
        [
          13.59054,
          13.59054
        ],
        [
          13.348704999999999,
          13.348704999999999
        ],
        [
          13.106869999999999,
          13.106869999999999
        ],
        [
          12.865034999999999,
          12.865034999999999
        ],
        [
          12.623199999999999,
          12.623199999999999
        ],
        [
          12.381364999999999,
          12.381364999999999
        ],
        [
          12.13953,
          12.13953
        ],
        [
          11.897695,
          11.897695
        ],
        [
          11.65586,
          11.65586
        ],
        [
          11.414025,
          11.414025
        ],
        [
          11.17219,
          11.17219
        ],
        [
          10.930355,
          10.930355
        ],
        [
          10.68852,
          10.68852
        ],
        [
          10.446684999999999,
          10.446684999999999
        ],
        [
          10.20485,
          10.20485
        ],
        [
          9.963014999999999,
          9.963014999999999
        ],
        [
          9.721179999999999,
          9.721179999999999
        ],
        [
          9.479344999999999,
          9.479344999999999
        ],
        [
          9.237510000000002,
          9.237510000000002
        ],
        [
          8.995675000000002,
          8.995675000000002
        ],
        [
          8.75384,
          8.75384
        ],
        [
          8.512005,
          8.512005
        ],
        [
          8.27017,
          8.27017
        ],
        [
          8.028335,
          8.028335
        ],
        [
          7.7865,
          7.7865
        ],
        [
          7.738408,
          7.738408
        ],
        [
          7.690316,
          7.690316
        ],
        [
          7.642224,
          7.642224
        ],
        [
          7.594132,
          7.594132
        ],
        [
          7.54604,
          7.54604
        ],
        [
          7.497948,
          7.497948
        ],
        [
          7.449856,
          7.449856
        ],
        [
          7.401764,
          7.401764
        ],
        [
          7.3536719999999995,
          7.3536719999999995
        ],
        [
          7.30558,
          7.30558
        ],
        [
          7.2574879999999995,
          7.2574879999999995
        ],
        [
          7.209396,
          7.209396
        ],
        [
          7.161304,
          7.161304
        ],
        [
          7.113212000000001,
          7.113212000000001
        ],
        [
          7.06512,
          7.06512
        ],
        [
          7.017028000000001,
          7.017028000000001
        ],
        [
          6.968936,
          6.968936
        ],
        [
          6.920844000000001,
          6.920844000000001
        ],
        [
          6.872752,
          6.872752
        ],
        [
          6.824660000000001,
          6.824660000000001
        ],
        [
          6.776568,
          6.776568
        ],
        [
          6.728476000000001,
          6.728476000000001
        ],
        [
          6.680384,
          6.680384
        ],
        [
          6.6322920000000005,
          6.6322920000000005
        ],
        [
          6.5842,
          6.5842
        ],
        [
          6.5361080000000005,
          6.5361080000000005
        ],
        [
          6.488016,
          6.488016
        ],
        [
          6.4399239999999995,
          6.4399239999999995
        ],
        [
          6.391832,
          6.391832
        ],
        [
          6.34374,
          6.34374
        ],
        [
          6.295648,
          6.295648
        ],
        [
          6.247555999999999,
          6.247555999999999
        ],
        [
          6.199464,
          6.199464
        ],
        [
          6.151372,
          6.151372
        ],
        [
          6.10328,
          6.10328
        ],
        [
          6.055187999999999,
          6.055187999999999
        ],
        [
          6.007096,
          6.007096
        ],
        [
          5.959004,
          5.959004
        ],
        [
          5.910912000000001,
          5.910912000000001
        ],
        [
          5.862820000000001,
          5.862820000000001
        ],
        [
          5.814728000000001,
          5.814728000000001
        ],
        [
          5.766636,
          5.766636
        ],
        [
          5.7185440000000005,
          5.7185440000000005
        ],
        [
          5.670452000000001,
          5.670452000000001
        ],
        [
          5.6223600000000005,
          5.6223600000000005
        ],
        [
          5.574268,
          5.574268
        ],
        [
          5.526176,
          5.526176
        ],
        [
          5.478084,
          5.478084
        ],
        [
          5.429992,
          5.429992
        ],
        [
          5.3819,
          5.3819
        ],
        [
          5.333808,
          5.333808
        ],
        [
          5.285716,
          5.285716
        ],
        [
          5.237624,
          5.237624
        ],
        [
          5.189532,
          5.189532
        ],
        [
          5.141439999999999,
          5.141439999999999
        ],
        [
          5.093348,
          5.093348
        ],
        [
          5.045256,
          5.045256
        ],
        [
          4.997164,
          4.997164
        ],
        [
          4.949071999999999,
          4.949071999999999
        ],
        [
          4.90098,
          4.90098
        ],
        [
          4.852888,
          4.852888
        ],
        [
          4.804796,
          4.804796
        ],
        [
          4.756704000000001,
          4.756704000000001
        ],
        [
          4.7086120000000005,
          4.7086120000000005
        ],
        [
          4.660520000000001,
          4.660520000000001
        ],
        [
          4.612428,
          4.612428
        ],
        [
          4.564336000000001,
          4.564336000000001
        ],
        [
          4.516244,
          4.516244
        ],
        [
          4.468152,
          4.468152
        ],
        [
          4.42006,
          4.42006
        ],
        [
          4.371968000000001,
          4.371968000000001
        ],
        [
          4.323876,
          4.323876
        ],
        [
          4.275784,
          4.275784
        ],
        [
          4.227692,
          4.227692
        ],
        [
          4.179600000000001,
          4.179600000000001
        ],
        [
          4.131508,
          4.131508
        ],
        [
          4.083416,
          4.083416
        ],
        [
          4.035324,
          4.035324
        ],
        [
          3.987232,
          3.987232
        ],
        [
          3.9391399999999996,
          3.9391399999999996
        ],
        [
          3.8910479999999996,
          3.8910479999999996
        ],
        [
          3.8429559999999996,
          3.8429559999999996
        ],
        [
          3.7948639999999996,
          3.7948639999999996
        ],
        [
          3.7467719999999995,
          3.7467719999999995
        ],
        [
          3.6986799999999995,
          3.6986799999999995
        ],
        [
          3.6505879999999995,
          3.6505879999999995
        ],
        [
          3.6024959999999995,
          3.6024959999999995
        ],
        [
          3.554404000000001,
          3.554404000000001
        ],
        [
          3.5063120000000008,
          3.5063120000000008
        ],
        [
          3.4582200000000007,
          3.4582200000000007
        ],
        [
          3.4101280000000003,
          3.4101280000000003
        ],
        [
          3.3620360000000002,
          3.3620360000000002
        ],
        [
          3.3139440000000002,
          3.3139440000000002
        ],
        [
          3.265852,
          3.265852
        ],
        [
          3.21776,
          3.21776
        ],
        [
          3.169668,
          3.169668
        ],
        [
          3.121576,
          3.121576
        ],
        [
          3.073484,
          3.073484
        ],
        [
          3.025392,
          3.025392
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
          0.860244,
          0.860244
        ],
        [
          0.920488,
          0.920488
        ],
        [
          0.980732,
          0.980732
        ],
        [
          1.0409760000000001,
          1.0409760000000001
        ],
        [
          1.10122,
          1.10122
        ],
        [
          1.161464,
          1.161464
        ],
        [
          1.221708,
          1.221708
        ],
        [
          1.281952,
          1.281952
        ],
        [
          1.342196,
          1.342196
        ],
        [
          1.4024400000000001,
          1.4024400000000001
        ],
        [
          1.462684,
          1.462684
        ],
        [
          1.522928,
          1.522928
        ],
        [
          1.583172,
          1.583172
        ],
        [
          1.6434160000000002,
          1.6434160000000002
        ],
        [
          1.7036600000000002,
          1.7036600000000002
        ],
        [
          1.7639040000000001,
          1.7639040000000001
        ],
        [
          1.824148,
          1.824148
        ],
        [
          1.884392,
          1.884392
        ],
        [
          1.944636,
          1.944636
        ],
        [
          2.00488,
          2.00488
        ],
        [
          2.065124,
          2.065124
        ],
        [
          2.125368,
          2.125368
        ],
        [
          2.185612,
          2.185612
        ],
        [
          2.245856,
          2.245856
        ],
        [
          2.3061,
          2.3061
        ],
        [
          2.366344,
          2.366344
        ],
        [
          2.426588,
          2.426588
        ],
        [
          2.486832,
          2.486832
        ],
        [
          2.5470759999999997,
          2.5470759999999997
        ],
        [
          2.60732,
          2.60732
        ],
        [
          2.667564,
          2.667564
        ],
        [
          2.727808,
          2.727808
        ],
        [
          2.788052,
          2.788052
        ],
        [
          2.848296,
          2.848296
        ],
        [
          2.90854,
          2.90854
        ],
        [
          2.968784,
          2.968784
        ],
        [
          3.029028,
          3.029028
        ],
        [
          3.089272,
          3.089272
        ],
        [
          3.149516,
          3.149516
        ],
        [
          3.20976,
          3.20976
        ],
        [
          3.2700039999999997,
          3.2700039999999997
        ],
        [
          3.3302479999999997,
          3.3302479999999997
        ],
        [
          3.3904919999999996,
          3.3904919999999996
        ],
        [
          3.450736,
          3.450736
        ],
        [
          3.51098,
          3.51098
        ],
        [
          3.571224,
          3.571224
        ],
        [
          3.6314679999999995,
          3.6314679999999995
        ],
        [
          3.691712,
          3.691712
        ],
        [
          3.751956,
          3.751956
        ],
        [
          3.8122,
          3.8122
        ],
        [
          3.8724439999999998,
          3.8724439999999998
        ],
        [
          3.9326879999999997,
          3.9326879999999997
        ],
        [
          3.992932,
          3.992932
        ],
        [
          4.053176000000001,
          4.053176000000001
        ],
        [
          4.1134200000000005,
          4.1134200000000005
        ],
        [
          4.1736640000000005,
          4.1736640000000005
        ],
        [
          4.233908,
          4.233908
        ],
        [
          4.2941519999999995,
          4.2941519999999995
        ],
        [
          4.354396,
          4.354396
        ],
        [
          4.41464,
          4.41464
        ],
        [
          4.474884,
          4.474884
        ],
        [
          4.535128,
          4.535128
        ],
        [
          4.595372,
          4.595372
        ],
        [
          4.655616,
          4.655616
        ],
        [
          4.71586,
          4.71586
        ],
        [
          4.776104,
          4.776104
        ],
        [
          4.836348,
          4.836348
        ],
        [
          4.896592,
          4.896592
        ],
        [
          4.956836,
          4.956836
        ],
        [
          5.01708,
          5.01708
        ],
        [
          5.077324,
          5.077324
        ],
        [
          5.137568,
          5.137568
        ],
        [
          5.197812,
          5.197812
        ],
        [
          5.258056,
          5.258056
        ],
        [
          5.3183,
          5.3183
        ],
        [
          5.378544,
          5.378544
        ],
        [
          5.438788,
          5.438788
        ],
        [
          5.499032000000001,
          5.499032000000001
        ],
        [
          5.5592760000000006,
          5.5592760000000006
        ],
        [
          5.6195200000000005,
          5.6195200000000005
        ],
        [
          5.6797640000000005,
          5.6797640000000005
        ],
        [
          5.7400079999999996,
          5.7400079999999996
        ],
        [
          5.8002519999999995,
          5.8002519999999995
        ],
        [
          5.8604959999999995,
          5.8604959999999995
        ],
        [
          5.9207399999999994,
          5.9207399999999994
        ],
        [
          5.980983999999999,
          5.980983999999999
        ],
        [
          6.041228,
          6.041228
        ],
        [
          6.101472,
          6.101472
        ],
        [
          6.161716,
          6.161716
        ],
        [
          6.22196,
          6.22196
        ],
        [
          6.282204,
          6.282204
        ],
        [
          6.342448,
          6.342448
        ],
        [
          6.402692,
          6.402692
        ],
        [
          6.462935999999999,
          6.462935999999999
        ],
        [
          6.52318,
          6.52318
        ],
        [
          6.583424,
          6.583424
        ],
        [
          6.643668,
          6.643668
        ],
        [
          6.703912,
          6.703912
        ],
        [
          6.764156,
          6.764156
        ],
        [
          6.8244,
          6.8244
        ],
        [
          6.859156,
          6.859156
        ],
        [
          6.893912,
          6.893912
        ],
        [
          6.928668,
          6.928668
        ],
        [
          6.963424000000001,
          6.963424000000001
        ],
        [
          6.9981800000000005,
          6.9981800000000005
        ],
        [
          7.032935999999999,
          7.032935999999999
        ],
        [
          7.067692,
          7.067692
        ],
        [
          7.102448,
          7.102448
        ],
        [
          7.1372040000000005,
          7.1372040000000005
        ],
        [
          7.17196,
          7.17196
        ],
        [
          7.206716,
          7.206716
        ],
        [
          7.241472,
          7.241472
        ],
        [
          7.276228,
          7.276228
        ],
        [
          7.3109839999999995,
          7.3109839999999995
        ],
        [
          7.345739999999999,
          7.345739999999999
        ],
        [
          7.380495999999999,
          7.380495999999999
        ],
        [
          7.415252,
          7.415252
        ],
        [
          7.4500079999999995,
          7.4500079999999995
        ],
        [
          7.484764,
          7.484764
        ],
        [
          7.51952,
          7.51952
        ],
        [
          7.554276,
          7.554276
        ],
        [
          7.5890320000000004,
          7.5890320000000004
        ],
        [
          7.623787999999999,
          7.623787999999999
        ],
        [
          7.658543999999999,
          7.658543999999999
        ],
        [
          7.6933,
          7.6933
        ],
        [
          7.7280560000000005,
          7.7280560000000005
        ],
        [
          7.762812,
          7.762812
        ],
        [
          7.797568,
          7.797568
        ],
        [
          7.832324,
          7.832324
        ],
        [
          7.8670800000000005,
          7.8670800000000005
        ],
        [
          7.901836000000001,
          7.901836000000001
        ],
        [
          7.936592000000001,
          7.936592000000001
        ],
        [
          7.971348,
          7.971348
        ],
        [
          8.006104,
          8.006104
        ],
        [
          8.04086,
          8.04086
        ],
        [
          8.075616,
          8.075616
        ],
        [
          8.110372,
          8.110372
        ],
        [
          8.145128,
          8.145128
        ],
        [
          8.179884000000001,
          8.179884000000001
        ],
        [
          8.21464,
          8.21464
        ],
        [
          8.249396,
          8.249396
        ],
        [
          8.284152,
          8.284152
        ],
        [
          8.318908,
          8.318908
        ],
        [
          8.353664,
          8.353664
        ],
        [
          8.38842,
          8.38842
        ],
        [
          8.423176,
          8.423176
        ],
        [
          8.457932,
          8.457932
        ],
        [
          8.492688,
          8.492688
        ],
        [
          8.527444000000001,
          8.527444000000001
        ],
        [
          8.5622,
          8.5622
        ],
        [
          8.596956,
          8.596956
        ],
        [
          8.631712,
          8.631712
        ],
        [
          8.666468,
          8.666468
        ],
        [
          8.701224,
          8.701224
        ],
        [
          8.735980000000001,
          8.735980000000001
        ],
        [
          8.770736,
          8.770736
        ],
        [
          8.805492000000001,
          8.805492000000001
        ],
        [
          8.840248,
          8.840248
        ],
        [
          8.875004,
          8.875004
        ],
        [
          8.90976,
          8.90976
        ],
        [
          8.944516,
          8.944516
        ],
        [
          8.979272000000002,
          8.979272000000002
        ],
        [
          9.014028,
          9.014028
        ],
        [
          9.048784000000001,
          9.048784000000001
        ],
        [
          9.08354,
          9.08354
        ],
        [
          9.118296,
          9.118296
        ],
        [
          9.153052,
          9.153052
        ],
        [
          9.187808,
          9.187808
        ],
        [
          9.222564,
          9.222564
        ],
        [
          9.25732,
          9.25732
        ],
        [
          9.292076,
          9.292076
        ],
        [
          9.326832,
          9.326832
        ],
        [
          9.361588000000001,
          9.361588000000001
        ],
        [
          9.396344000000001,
          9.396344000000001
        ],
        [
          9.4311,
          9.4311
        ],
        [
          9.465856,
          9.465856
        ],
        [
          9.500612,
          9.500612
        ],
        [
          9.535368,
          9.535368
        ],
        [
          9.570124,
          9.570124
        ],
        [
          9.60488,
          9.60488
        ],
        [
          9.639636000000001,
          9.639636000000001
        ],
        [
          9.674392000000001,
          9.674392000000001
        ],
        [
          9.709148,
          9.709148
        ],
        [
          9.743904,
          9.743904
        ],
        [
          9.77866,
          9.77866
        ],
        [
          9.813416000000002,
          9.813416000000002
        ],
        [
          9.848172000000002,
          9.848172000000002
        ],
        [
          9.882928000000001,
          9.882928000000001
        ],
        [
          9.917684000000001,
          9.917684000000001
        ],
        [
          9.95244,
          9.95244
        ],
        [
          9.987195999999999,
          9.987195999999999
        ],
        [
          10.021951999999999,
          10.021951999999999
        ],
        [
          10.056708,
          10.056708
        ],
        [
          10.091464,
          10.091464
        ],
        [
          10.12622,
          10.12622
        ],
        [
          10.160976,
          10.160976
        ],
        [
          10.195732,
          10.195732
        ],
        [
          10.230488000000001,
          10.230488000000001
        ],
        [
          10.265244000000001,
          10.265244000000001
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
          39.16348119519874,
          39.16348119519874
        ],
        [
          39.218126253793834,
          39.218126253793834
        ],
        [
          39.27395268836313,
          39.27395268836313
        ],
        [
          39.330978366083365,
          39.330978366083365
        ],
        [
          39.38922151775007,
          39.38922151775007
        ],
        [
          39.44870074707522,
          39.44870074707522
        ],
        [
          39.509435040270695,
          39.509435040270695
        ],
        [
          39.57144377592941,
          39.57144377592941
        ],
        [
          39.63474673521396,
          39.63474673521396
        ],
        [
          39.699364112365,
          39.699364112365
        ],
        [
          39.765316525539404,
          39.765316525539404
        ],
        [
          39.83262502799296,
          39.83262502799296
        ],
        [
          39.90131111961756,
          39.90131111961756
        ],
        [
          39.971396758848286,
          39.971396758848286
        ],
        [
          40.04290437495327,
          40.04290437495327
        ],
        [
          40.115856880720564,
          40.115856880720564
        ],
        [
          40.190277685558186,
          40.190277685558186
        ],
        [
          40.26619070902169,
          40.26619070902169
        ],
        [
          40.343620394786925,
          40.343620394786925
        ],
        [
          40.422591725084,
          40.422591725084
        ],
        [
          40.5031302356114,
          40.5031302356114
        ],
        [
          40.5852620309481,
          40.5852620309481
        ],
        [
          40.66901380048389,
          40.66901380048389
        ],
        [
          40.75441283488783,
          40.75441283488783
        ],
        [
          40.84148704313628,
          40.84148704313628
        ],
        [
          40.930264970123304,
          40.930264970123304
        ],
        [
          41.0207758148757,
          41.0207758148757
        ],
        [
          41.11304944939869,
          41.11304944939869
        ],
        [
          41.20711643817604,
          41.20711643817604
        ],
        [
          41.3030080583527,
          41.3030080583527
        ],
        [
          41.40075632062708,
          41.40075632062708
        ],
        [
          41.5003939908833,
          41.5003939908833
        ],
        [
          41.60195461259234,
          41.60195461259234
        ],
        [
          41.70547253001681,
          41.70547253001681
        ],
        [
          41.81098291225042,
          41.81098291225042
        ],
        [
          41.91852177812919,
          41.91852177812919
        ],
        [
          42.02812602205112,
          42.02812602205112
        ],
        [
          42.139833440742855,
          42.139833440742855
        ],
        [
          42.25368276101416,
          42.25368276101416
        ],
        [
          42.369713668543596,
          42.369713668543596
        ],
        [
          42.48796683773962,
          42.48796683773962
        ],
        [
          42.60848396272475,
          42.60848396272475
        ],
        [
          42.73130778949184,
          42.73130778949184
        ],
        [
          42.85648214928578,
          42.85648214928578
        ],
        [
          42.98405199326374,
          42.98405199326374
        ],
        [
          43.114063428492614,
          43.114063428492614
        ],
        [
          43.246563755343985,
          43.246563755343985
        ],
        [
          43.38160150635019,
          43.38160150635019
        ],
        [
          43.51922648658886,
          43.51922648658886
        ],
        [
          43.65948981566564,
          43.65948981566564
        ],
        [
          43.80244397137074,
          43.80244397137074
        ],
        [
          43.94814283508651,
          43.94814283508651
        ],
        [
          44.09664173902935,
          44.09664173902935
        ],
        [
          44.24799751541201,
          44.24799751541201
        ],
        [
          44.40226854761938,
          44.40226854761938
        ],
        [
          44.559514823493345,
          44.559514823493345
        ],
        [
          44.71979799082934,
          44.71979799082934
        ],
        [
          44.883181415192595,
          44.883181415192595
        ],
        [
          45.049730240167996,
          45.049730240167996
        ],
        [
          45.21951145016304,
          45.21951145016304
        ],
        [
          45.3925939358925,
          45.3925939358925
        ],
        [
          45.56904856267828,
          45.56904856267828
        ],
        [
          45.74894824170682,
          45.74894824170682
        ],
        [
          45.93236800439459,
          45.93236800439459
        ],
        [
          46.11938508002153,
          46.11938508002153
        ],
        [
          46.31007897680025,
          46.31007897680025
        ],
        [
          46.50453156656081,
          46.50453156656081
        ],
        [
          46.70282717323913,
          46.70282717323913
        ],
        [
          46.90505266537198,
          46.90505266537198
        ],
        [
          47.111297552809496,
          47.111297552809496
        ],
        [
          47.321654087872716,
          47.321654087872716
        ],
        [
          47.5362173711962,
          47.5362173711962
        ],
        [
          47.75508546251056,
          47.75508546251056
        ],
        [
          47.97835949663569,
          47.97835949663569
        ],
        [
          48.20614380497396,
          48.20614380497396
        ],
        [
          48.43854604280849,
          48.43854604280849
        ],
        [
          48.67567732273443,
          48.67567732273443
        ],
        [
          48.917652354569334,
          48.917652354569334
        ],
        [
          49.16458959211353,
          49.16458959211353
        ],
        [
          49.41661138715444,
          49.41661138715444
        ],
        [
          49.673844151135796,
          49.673844151135796
        ],
        [
          49.936418524940954,
          49.936418524940954
        ],
        [
          50.204469557267494,
          50.204469557267494
        ],
        [
          50.47813689210806,
          50.47813689210806
        ],
        [
          50.757564965880526,
          50.757564965880526
        ],
        [
          51.0429032147951,
          51.0429032147951
        ],
        [
          51.33430629308219,
          51.33430629308219
        ],
        [
          51.63193430275081,
          51.63193430275081
        ],
        [
          51.93595303559541,
          51.93595303559541
        ],
        [
          52.24653422821875,
          52.24653422821875
        ],
        [
          52.56385583089532,
          52.56385583089532
        ],
        [
          52.88810229116014,
          52.88810229116014
        ],
        [
          53.21946485307119,
          53.21946485307119
        ],
        [
          53.55814187316759,
          53.55814187316759
        ],
        [
          53.904339154218,
          53.904339154218
        ],
        [
          54.25827029794107,
          54.25827029794107
        ],
        [
          54.620157077966475,
          54.620157077966475
        ],
        [
          54.99022983440651,
          54.99022983440651
        ],
        [
          55.36872789151123,
          55.36872789151123
        ],
        [
          55.7559,
          55.7559
        ],
        [
          55.844746561956036,
          55.844746561956036
        ],
        [
          55.9342657453182,
          55.9342657453182
        ],
        [
          56.02446303049652,
          56.02446303049652
        ],
        [
          56.11534395774341,
          56.11534395774341
        ],
        [
          56.20691412797257,
          56.20691412797257
        ],
        [
          56.2991792035913,
          56.2991792035913
        ],
        [
          56.39214490934698,
          56.39214490934698
        ],
        [
          56.48581703318736,
          56.48581703318736
        ],
        [
          56.58020142713475,
          56.58020142713475
        ],
        [
          56.67530400817547,
          56.67530400817547
        ],
        [
          56.7711307591637,
          56.7711307591637
        ],
        [
          56.86768772974081,
          56.86768772974081
        ],
        [
          56.96498103726921,
          56.96498103726921
        ],
        [
          57.06301686778354,
          57.06301686778354
        ],
        [
          57.161801476956185,
          57.161801476956185
        ],
        [
          57.26134119108025,
          57.26134119108025
        ],
        [
          57.36164240806917,
          57.36164240806917
        ],
        [
          57.462711598472495,
          57.462711598472495
        ],
        [
          57.564555306510336,
          57.564555306510336
        ],
        [
          57.66718015112413,
          57.66718015112413
        ],
        [
          57.77059282704662,
          57.77059282704662
        ],
        [
          57.87480010588931,
          57.87480010588931
        ],
        [
          57.97980883724998,
          57.97980883724998
        ],
        [
          58.085625949837635,
          58.085625949837635
        ],
        [
          58.19225845261839,
          58.19225845261839
        ],
        [
          58.299713435980955,
          58.299713435980955
        ],
        [
          58.40799807292221,
          58.40799807292221
        ],
        [
          58.51711962025409,
          58.51711962025409
        ],
        [
          58.627085419830834,
          58.627085419830834
        ],
        [
          58.7379028997987,
          58.7379028997987
        ],
        [
          58.84957957586771,
          58.84957957586771
        ],
        [
          58.96212305260512,
          58.96212305260512
        ],
        [
          59.075541024752994,
          59.075541024752994
        ],
        [
          59.18984127856844,
          59.18984127856844
        ],
        [
          59.30503169318837,
          59.30503169318837
        ],
        [
          59.42112024201852,
          59.42112024201852
        ],
        [
          59.538114994147165,
          59.538114994147165
        ],
        [
          59.65602411578535,
          59.65602411578535
        ],
        [
          59.774855871732065,
          59.774855871732065
        ],
        [
          59.89461862686614,
          59.89461862686614
        ],
        [
          60.01532084766665,
          60.01532084766665
        ],
        [
          60.13697110375943,
          60.13697110375943
        ],
        [
          60.25957806949275,
          60.25957806949275
        ],
        [
          60.38315052554214,
          60.38315052554214
        ],
        [
          60.507697360544114,
          60.507697360544114
        ],
        [
          60.63322757276076,
          60.63322757276076
        ],
        [
          60.75975027177523,
          60.75975027177523
        ],
        [
          60.88727468021801,
          60.88727468021801
        ],
        [
          61.015810135526614,
          61.015810135526614
        ],
        [
          61.145366091737,
          61.145366091737
        ],
        [
          61.27595212130932,
          61.27595212130932
        ],
        [
          61.40757791698865,
          61.40757791698865
        ],
        [
          61.54025329369938,
          61.54025329369938
        ],
        [
          61.673988190476734,
          61.673988190476734
        ],
        [
          61.80879267243529,
          61.80879267243529
        ],
        [
          61.94467693277322,
          61.94467693277322
        ],
        [
          62.08165129481767,
          62.08165129481767
        ],
        [
          62.21972621410674,
          62.21972621410674
        ],
        [
          62.35891228051354,
          62.35891228051354
        ],
        [
          62.499220220410294,
          62.499220220410294
        ],
        [
          62.64066089887469,
          62.64066089887469
        ],
        [
          62.78324532193926,
          62.78324532193926
        ],
        [
          62.92698463888457,
          62.92698463888457
        ],
        [
          63.07189014457722,
          63.07189014457722
        ],
        [
          63.21797328185417,
          63.21797328185417
        ],
        [
          63.36524564395346,
          63.36524564395346
        ],
        [
          63.51371897699377,
          63.51371897699377
        ],
        [
          63.66340518250259,
          63.66340518250259
        ],
        [
          63.81431631999484,
          63.81431631999484
        ],
        [
          63.96646460960319,
          63.96646460960319
        ],
        [
          64.11986243476095,
          64.11986243476095
        ],
        [
          64.27452234493906,
          64.27452234493906
        ],
        [
          64.43045705843835,
          64.43045705843835
        ],
        [
          64.58767946523776,
          64.58767946523776
        ],
        [
          64.74620262990146,
          64.74620262990146
        ],
        [
          64.9060397945441,
          64.9060397945441
        ],
        [
          65.06720438185752,
          65.06720438185752
        ],
        [
          65.2297099981995,
          65.2297099981995
        ],
        [
          65.39357043674562,
          65.39357043674562
        ],
        [
          65.55879968070685,
          65.55879968070685
        ],
        [
          65.72541190661337,
          65.72541190661337
        ],
        [
          65.8934214876672,
          65.8934214876672
        ],
        [
          66.06284299716424,
          66.06284299716424
        ],
        [
          66.23369121198888,
          66.23369121198888
        ],
        [
          66.405981116181,
          66.405981116181
        ],
        [
          66.57972790457923,
          66.57972790457923
        ],
        [
          66.75494698654099,
          66.75494698654099
        ],
        [
          66.93165398974115,
          66.93165398974115
        ],
        [
          67.1098647640529,
          67.1098647640529
        ],
        [
          67.28959538550951,
          67.28959538550951
        ],
        [
          67.47086216035427,
          67.47086216035427
        ],
        [
          67.65368162917486,
          67.65368162917486
        ],
        [
          67.83807057112868,
          67.83807057112868
        ],
        [
          68.02404600825939,
          68.02404600825939
        ],
        [
          68.21162520990866,
          68.21162520990866
        ],
        [
          68.40082569722188,
          68.40082569722188
        ],
        [
          68.59166524775557,
          68.59166524775557
        ],
        [
          68.78416190018459,
          68.78416190018459
        ],
        [
          68.97833395911476,
          68.97833395911476
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
          10.539756,
          10.539756
        ],
        [
          10.479512,
          10.479512
        ],
        [
          10.419268,
          10.419268
        ],
        [
          10.359024,
          10.359024
        ],
        [
          10.298779999999999,
          10.298779999999999
        ],
        [
          10.238535999999998,
          10.238535999999998
        ],
        [
          10.178291999999999,
          10.178291999999999
        ],
        [
          10.118048,
          10.118048
        ],
        [
          10.057804,
          10.057804
        ],
        [
          9.99756,
          9.99756
        ],
        [
          9.937316,
          9.937316
        ],
        [
          9.877072,
          9.877072
        ],
        [
          9.816828,
          9.816828
        ],
        [
          9.756584,
          9.756584
        ],
        [
          9.69634,
          9.69634
        ],
        [
          9.636096,
          9.636096
        ],
        [
          9.575852,
          9.575852
        ],
        [
          9.515608,
          9.515608
        ],
        [
          9.455364,
          9.455364
        ],
        [
          9.39512,
          9.39512
        ],
        [
          9.334876000000001,
          9.334876000000001
        ],
        [
          9.274632,
          9.274632
        ],
        [
          9.214388,
          9.214388
        ],
        [
          9.154143999999999,
          9.154143999999999
        ],
        [
          9.0939,
          9.0939
        ],
        [
          9.033655999999999,
          9.033655999999999
        ],
        [
          8.973412,
          8.973412
        ],
        [
          8.913167999999999,
          8.913167999999999
        ],
        [
          8.852924,
          8.852924
        ],
        [
          8.792679999999999,
          8.792679999999999
        ],
        [
          8.732436,
          8.732436
        ],
        [
          8.672191999999999,
          8.672191999999999
        ],
        [
          8.611948,
          8.611948
        ],
        [
          8.551703999999999,
          8.551703999999999
        ],
        [
          8.49146,
          8.49146
        ],
        [
          8.431216,
          8.431216
        ],
        [
          8.370972,
          8.370972
        ],
        [
          8.310728,
          8.310728
        ],
        [
          8.250484,
          8.250484
        ],
        [
          8.19024,
          8.19024
        ],
        [
          8.129996,
          8.129996
        ],
        [
          8.069752000000001,
          8.069752000000001
        ],
        [
          8.009508,
          8.009508
        ],
        [
          7.949263999999999,
          7.949263999999999
        ],
        [
          7.88902,
          7.88902
        ],
        [
          7.8287759999999995,
          7.8287759999999995
        ],
        [
          7.768532,
          7.768532
        ],
        [
          7.708288,
          7.708288
        ],
        [
          7.648044,
          7.648044
        ],
        [
          7.5878,
          7.5878
        ],
        [
          7.527556,
          7.527556
        ],
        [
          7.467312,
          7.467312
        ],
        [
          7.407067999999999,
          7.407067999999999
        ],
        [
          7.346824,
          7.346824
        ],
        [
          7.286579999999999,
          7.286579999999999
        ],
        [
          7.226336,
          7.226336
        ],
        [
          7.166092000000001,
          7.166092000000001
        ],
        [
          7.105848,
          7.105848
        ],
        [
          7.045603999999999,
          7.045603999999999
        ],
        [
          6.98536,
          6.98536
        ],
        [
          6.925116,
          6.925116
        ],
        [
          6.864871999999999,
          6.864871999999999
        ],
        [
          6.804627999999999,
          6.804627999999999
        ],
        [
          6.744384,
          6.744384
        ],
        [
          6.684139999999999,
          6.684139999999999
        ],
        [
          6.623896,
          6.623896
        ],
        [
          6.563651999999999,
          6.563651999999999
        ],
        [
          6.503407999999999,
          6.503407999999999
        ],
        [
          6.4431639999999994,
          6.4431639999999994
        ],
        [
          6.38292,
          6.38292
        ],
        [
          6.3226759999999995,
          6.3226759999999995
        ],
        [
          6.2624319999999996,
          6.2624319999999996
        ],
        [
          6.202188,
          6.202188
        ],
        [
          6.141944,
          6.141944
        ],
        [
          6.0817,
          6.0817
        ],
        [
          6.021456,
          6.021456
        ],
        [
          5.961212,
          5.961212
        ],
        [
          5.900968,
          5.900968
        ],
        [
          5.840724,
          5.840724
        ],
        [
          5.780479999999999,
          5.780479999999999
        ],
        [
          5.720236,
          5.720236
        ],
        [
          5.659992,
          5.659992
        ],
        [
          5.599748,
          5.599748
        ],
        [
          5.539503999999999,
          5.539503999999999
        ],
        [
          5.47926,
          5.47926
        ],
        [
          5.419015999999999,
          5.419015999999999
        ],
        [
          5.358771999999999,
          5.358771999999999
        ],
        [
          5.298528,
          5.298528
        ],
        [
          5.238284,
          5.238284
        ],
        [
          5.178039999999999,
          5.178039999999999
        ],
        [
          5.117795999999999,
          5.117795999999999
        ],
        [
          5.057551999999999,
          5.057551999999999
        ],
        [
          4.997307999999999,
          4.997307999999999
        ],
        [
          4.9370639999999995,
          4.9370639999999995
        ],
        [
          4.8768199999999995,
          4.8768199999999995
        ],
        [
          4.8165759999999995,
          4.8165759999999995
        ],
        [
          4.7563320000000004,
          4.7563320000000004
        ],
        [
          4.696088,
          4.696088
        ],
        [
          4.635844,
          4.635844
        ],
        [
          4.5756,
          4.5756
        ],
        [
          4.540844,
          4.540844
        ],
        [
          4.506088,
          4.506088
        ],
        [
          4.471332,
          4.471332
        ],
        [
          4.436576,
          4.436576
        ],
        [
          4.401819999999999,
          4.401819999999999
        ],
        [
          4.367063999999999,
          4.367063999999999
        ],
        [
          4.332307999999999,
          4.332307999999999
        ],
        [
          4.297552,
          4.297552
        ],
        [
          4.262796,
          4.262796
        ],
        [
          4.22804,
          4.22804
        ],
        [
          4.193283999999999,
          4.193283999999999
        ],
        [
          4.158527999999999,
          4.158527999999999
        ],
        [
          4.123772,
          4.123772
        ],
        [
          4.089016,
          4.089016
        ],
        [
          4.05426,
          4.05426
        ],
        [
          4.019504,
          4.019504
        ],
        [
          3.9847479999999997,
          3.9847479999999997
        ],
        [
          3.949992,
          3.949992
        ],
        [
          3.915236,
          3.915236
        ],
        [
          3.8804799999999995,
          3.8804799999999995
        ],
        [
          3.8457239999999997,
          3.8457239999999997
        ],
        [
          3.810968,
          3.810968
        ],
        [
          3.776212,
          3.776212
        ],
        [
          3.7414559999999994,
          3.7414559999999994
        ],
        [
          3.7066999999999997,
          3.7066999999999997
        ],
        [
          3.671944,
          3.671944
        ],
        [
          3.6371879999999996,
          3.6371879999999996
        ],
        [
          3.6024319999999994,
          3.6024319999999994
        ],
        [
          3.5676759999999996,
          3.5676759999999996
        ],
        [
          3.53292,
          3.53292
        ],
        [
          3.4981639999999996,
          3.4981639999999996
        ],
        [
          3.4634079999999994,
          3.4634079999999994
        ],
        [
          3.4286519999999996,
          3.4286519999999996
        ],
        [
          3.3938959999999994,
          3.3938959999999994
        ],
        [
          3.3591399999999996,
          3.3591399999999996
        ],
        [
          3.3243839999999993,
          3.3243839999999993
        ],
        [
          3.2896279999999996,
          3.2896279999999996
        ],
        [
          3.2548719999999998,
          3.2548719999999998
        ],
        [
          3.220116,
          3.220116
        ],
        [
          3.18536,
          3.18536
        ],
        [
          3.1506040000000004,
          3.1506040000000004
        ],
        [
          3.1158479999999997,
          3.1158479999999997
        ],
        [
          3.081092,
          3.081092
        ],
        [
          3.046336,
          3.046336
        ],
        [
          3.01158,
          3.01158
        ],
        [
          2.9768239999999997,
          2.9768239999999997
        ],
        [
          2.942068,
          2.942068
        ],
        [
          2.907312,
          2.907312
        ],
        [
          2.872556,
          2.872556
        ],
        [
          2.8377999999999997,
          2.8377999999999997
        ],
        [
          2.803044,
          2.803044
        ],
        [
          2.7682879999999996,
          2.7682879999999996
        ],
        [
          2.733532,
          2.733532
        ],
        [
          2.6987759999999996,
          2.6987759999999996
        ],
        [
          2.66402,
          2.66402
        ],
        [
          2.6292639999999996,
          2.6292639999999996
        ],
        [
          2.594508,
          2.594508
        ],
        [
          2.5597519999999996,
          2.5597519999999996
        ],
        [
          2.524996,
          2.524996
        ],
        [
          2.4902399999999996,
          2.4902399999999996
        ],
        [
          2.4554839999999998,
          2.4554839999999998
        ],
        [
          2.4207279999999995,
          2.4207279999999995
        ],
        [
          2.385972,
          2.385972
        ],
        [
          2.351216,
          2.351216
        ],
        [
          2.31646,
          2.31646
        ],
        [
          2.2817040000000004,
          2.2817040000000004
        ],
        [
          2.246948,
          2.246948
        ],
        [
          2.212192,
          2.212192
        ],
        [
          2.177436,
          2.177436
        ],
        [
          2.1426800000000004,
          2.1426800000000004
        ],
        [
          2.107924,
          2.107924
        ],
        [
          2.073168,
          2.073168
        ],
        [
          2.038412,
          2.038412
        ],
        [
          2.0036560000000003,
          2.0036560000000003
        ],
        [
          1.9689,
          1.9689
        ],
        [
          1.9341439999999999,
          1.9341439999999999
        ],
        [
          1.899388,
          1.899388
        ],
        [
          1.8646319999999998,
          1.8646319999999998
        ],
        [
          1.8298759999999998,
          1.8298759999999998
        ],
        [
          1.7951199999999998,
          1.7951199999999998
        ],
        [
          1.7603639999999998,
          1.7603639999999998
        ],
        [
          1.7256079999999998,
          1.7256079999999998
        ],
        [
          1.6908519999999998,
          1.6908519999999998
        ],
        [
          1.6560959999999998,
          1.6560959999999998
        ],
        [
          1.6213399999999996,
          1.6213399999999996
        ],
        [
          1.5865839999999998,
          1.5865839999999998
        ],
        [
          1.5518279999999995,
          1.5518279999999995
        ],
        [
          1.5170720000000004,
          1.5170720000000004
        ],
        [
          1.4823160000000004,
          1.4823160000000004
        ],
        [
          1.4475600000000004,
          1.4475600000000004
        ],
        [
          1.4128040000000002,
          1.4128040000000002
        ],
        [
          1.3780480000000004,
          1.3780480000000004
        ],
        [
          1.3432920000000002,
          1.3432920000000002
        ],
        [
          1.3085360000000001,
          1.3085360000000001
        ],
        [
          1.2737800000000001,
          1.2737800000000001
        ],
        [
          1.2390240000000001,
          1.2390240000000001
        ],
        [
          1.2042680000000001,
          1.2042680000000001
        ],
        [
          1.169512,
          1.169512
        ],
        [
          1.134756,
          1.134756
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
      "text": "Hybrid1",
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
