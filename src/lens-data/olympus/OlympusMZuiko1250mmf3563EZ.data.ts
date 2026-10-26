import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "olympus-mzuiko-digital-ed-12-50mm-f35-63-ez",
  "maker": "Olympus",
  "name": "OLYMPUS M.ZUIKO DIGITAL ED 12-50mm f/3.5-6.3 EZ",
  "subtitle": "JP 2012-173420 A — Numerical Example 2; inferred continuous zoom path",
  "catalog": {
    "lensMounts": [
      "micro-four-thirds"
    ],
    "imageFormat": "four-thirds",
    "imageCircleMm": 21.63,
    "specs": [
      "10 ELEMENTS / 9 GROUPS",
      "DESIGN f = 12.24-48.96 mm",
      "DESIGN F/3.64-6.48",
      "6 ASPHERICAL SURFACES / 3 ELEMENTS",
      "1 ED / 1 HR ELEMENT",
      "MACRO MODE NOT MODELED"
    ],
    "elementCount": 10,
    "groupCount": 9,
    "focalLengthMm": {
      "marketing": [
        12,
        50
      ],
      "design": [
        12.243,
        48.956
      ]
    },
    "fNumber": {
      "marketing": 3.5,
      "design": 3.64
    }
  },
  "source": {
    "patentNumber": "JP 2012-173420 A",
    "example": { "label": "Numerical Example 2", "id": "2" },
    "patentYear": 2012,
    "authors": [
      "Koji Ogata",
      "Kazuteru Kawamura",
      "Yasuharu Yamada",
      "Hirohiko Kimata"
    ],
    "assignees": [
      "Olympus Imaging Corporation"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.7725,
      "vd": 49.6,
      "focalLengthMm": -34.18123423341846,
      "glass": "S-LAH66 (OHARA catalog equivalent; production supplier unspecified)",
      "diagramLabel": "L1"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Aspherical Negative Meniscus",
      "nd": 1.58313,
      "vd": 59.38,
      "focalLengthMm": -38.69072688087463,
      "glass": "S-BAL42 (OHARA catalog equivalent; production supplier unspecified)",
      "diagramLabel": "L2"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.8081,
      "vd": 22.76,
      "focalLengthMm": 37.80697787335052,
      "glass": "S-NPH1 (OHARA catalog equivalent; production supplier unspecified)",
      "diagramLabel": "L3"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.741,
      "vd": 52.64,
      "focalLengthMm": -44.91069995481106,
      "glass": "S-LAL61 (OHARA catalog equivalent; production supplier unspecified)",
      "diagramLabel": "L4"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Aspherical Biconvex Positive",
      "nd": 1.58313,
      "vd": 59.38,
      "focalLengthMm": 17.308549105053068,
      "glass": "S-BAL42 (OHARA catalog equivalent; production supplier unspecified)",
      "diagramLabel": "L5"
    },
    {
      "id": 6,
      "name": "L6a",
      "label": "Element 6",
      "type": "Negative Meniscus",
      "nd": 1.834,
      "vd": 37.16,
      "focalLengthMm": -13.930980901118598,
      "glass": "S-LAH60 (OHARA catalog equivalent; production supplier unspecified)",
      "diagramLabel": "L6a",
      "cemented": "L6"
    },
    {
      "id": 7,
      "name": "L6b",
      "label": "Element 7",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.54,
      "focalLengthMm": 14.725694632982725,
      "glass": "S-FPL51 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "OHARA S-FPL51 coordinate match (νd 81.54); OM Digital Solutions' construction diagram shades this position as the lens's one ED element, cemented to the HR element ahead of it.",
      "diagramLabel": "L6b",
      "cemented": "L6"
    },
    {
      "id": 8,
      "name": "L7",
      "label": "Element 8",
      "type": "Negative Meniscus",
      "nd": 1.83481,
      "vd": 42.71,
      "focalLengthMm": -20.848917424112646,
      "glass": "S-LAH55 (OHARA catalog equivalent; production supplier unspecified)",
      "diagramLabel": "L7"
    },
    {
      "id": 9,
      "name": "L8",
      "label": "Element 9",
      "type": "Aspherical Positive Meniscus",
      "nd": 1.53071,
      "vd": 55.69,
      "focalLengthMm": 192.15112696695476,
      "glass": "Unmatched (optical plastic per the patent; polymer unpublished)",
      "diagramLabel": "L8"
    },
    {
      "id": 10,
      "name": "L9",
      "label": "Element 10",
      "type": "Positive Meniscus",
      "nd": 1.75211,
      "vd": 25.05,
      "focalLengthMm": 45.18047371631902,
      "glass": "FF8 (HOYA catalog equivalent; production supplier unspecified)",
      "diagramLabel": "L9"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 45.2207,
      "d": 2.14,
      "sd": 18,
      "medium": 1
    },
    {
      "label": "2",
      "R": 16.3269,
      "d": 5.12,
      "sd": 14
    },
    {
      "label": "3A",
      "R": 41.8793,
      "d": 1.5,
      "sd": 13,
      "medium": 2,
      "asphere": {
        "K": 1.2447,
        "A4": 0.000020075,
        "A6": -2.7611e-7,
        "A8": 2.4894e-10,
        "A10": 3.5331e-12,
        "A12": -9.3037e-15
      }
    },
    {
      "label": "4A",
      "R": 14.4691,
      "d": 3.85,
      "sd": 13,
      "asphere": {
        "K": -1.0662,
        "A4": 0.000021822,
        "A6": -3.0982e-7,
        "A8": -1.7795e-9,
        "A10": 1.984e-11,
        "A12": -5.0306e-14
      }
    },
    {
      "label": "5",
      "R": 23.9939,
      "d": 3.8,
      "sd": 12.3,
      "medium": 3
    },
    {
      "label": "6",
      "R": 103.8698,
      "sd": 12.3
    },
    {
      "label": "7",
      "R": -24.8418,
      "d": 1.2,
      "sd": 9.6,
      "medium": 4
    },
    {
      "label": "8",
      "R": -100,
      "sd": 9.6
    },
    {
      "label": "9A",
      "R": 14.0498,
      "d": 4.3,
      "sd": 7.3,
      "medium": 5,
      "asphere": {
        "A4": -0.000038287,
        "A6": -4.3941e-8,
        "A8": 1.5034e-10,
        "A10": 1.3526e-11
      }
    },
    {
      "label": "10A",
      "R": -31.7996,
      "d": 1.3,
      "sd": 7.3,
      "asphere": {
        "A4": 0.000066094,
        "A6": -2.9345e-8,
        "A8": -1.6201e-9,
        "A10": 3.6897e-11
      }
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.9
    },
    {
      "label": "12",
      "R": 179.0098,
      "d": 1,
      "sd": 6.6,
      "medium": 6
    },
    {
      "label": "13",
      "R": 10.8826,
      "d": 5,
      "sd": 6.4,
      "medium": 7
    },
    {
      "label": "14",
      "R": -18.939,
      "sd": 6.4
    },
    {
      "label": "15",
      "R": 128.8505,
      "d": 1,
      "sd": 6.3,
      "medium": 8
    },
    {
      "label": "16",
      "R": 15.2795,
      "d": 1.58,
      "sd": 6.3
    },
    {
      "label": "17A",
      "R": 37.2148,
      "d": 2,
      "sd": 7,
      "medium": 9,
      "asphere": {
        "K": -82.6051,
        "A4": 0.00029743,
        "A6": -0.0000073765,
        "A8": 9.2595e-8,
        "A10": -8.7606e-10
      }
    },
    {
      "label": "18A",
      "R": 57.5081,
      "sd": 7,
      "asphere": {
        "K": -271.4873,
        "A4": 0.00028604,
        "A6": -0.0000068173,
        "A8": 8.5146e-8,
        "A10": -7.3142e-10
      }
    },
    {
      "label": "19",
      "R": -75.0639,
      "d": 2.48,
      "sd": 11.2,
      "medium": 10
    },
    {
      "label": "20",
      "R": -23.7233,
      "d": 11.1634,
      "sd": 11.2
    }
  ],
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 12.243,
        "nominalFNumber": 3.64,
        "label": "Wide",
        "published": true,
        "publishedFocus": [
          1
        ]
      },
      {
        "published": false,
        "focalLengthMm": 12.32825774889004,
        "nominalFNumber": 3.6557
      },
      {
        "published": false,
        "focalLengthMm": 12.41388664165749,
        "nominalFNumber": 3.6714
      },
      {
        "published": false,
        "focalLengthMm": 12.500110290588054,
        "nominalFNumber": 3.6871
      },
      {
        "published": false,
        "focalLengthMm": 12.586932826704352,
        "nominalFNumber": 3.7028000000000003
      },
      {
        "published": false,
        "focalLengthMm": 12.674358409722041,
        "nominalFNumber": 3.7184999999999997
      },
      {
        "published": false,
        "focalLengthMm": 12.762391228249058,
        "nominalFNumber": 3.7341999999999995
      },
      {
        "published": false,
        "focalLengthMm": 12.851035499986347,
        "nominalFNumber": 3.7499
      },
      {
        "published": false,
        "focalLengthMm": 12.940295471929927,
        "nominalFNumber": 3.7656
      },
      {
        "published": false,
        "focalLengthMm": 13.03017542057432,
        "nominalFNumber": 3.7813000000000003
      },
      {
        "published": false,
        "focalLengthMm": 13.120679652117493,
        "nominalFNumber": 3.797
      },
      {
        "published": false,
        "focalLengthMm": 13.21181250266715,
        "nominalFNumber": 3.8127000000000004
      },
      {
        "published": false,
        "focalLengthMm": 13.303578338448483,
        "nominalFNumber": 3.8284000000000002
      },
      {
        "published": false,
        "focalLengthMm": 13.395981556013352,
        "nominalFNumber": 3.8441
      },
      {
        "published": false,
        "focalLengthMm": 13.489026582450917,
        "nominalFNumber": 3.8598
      },
      {
        "published": false,
        "focalLengthMm": 13.582717875599785,
        "nominalFNumber": 3.8754999999999997
      },
      {
        "published": false,
        "focalLengthMm": 13.677059924261528,
        "nominalFNumber": 3.8912
      },
      {
        "published": false,
        "focalLengthMm": 13.772057248415795,
        "nominalFNumber": 3.9069
      },
      {
        "published": false,
        "focalLengthMm": 13.86771439943683,
        "nominalFNumber": 3.9226
      },
      {
        "published": false,
        "focalLengthMm": 13.964035960311556,
        "nominalFNumber": 3.9383000000000004
      },
      {
        "published": false,
        "focalLengthMm": 14.061026545859146,
        "nominalFNumber": 3.9540000000000006
      },
      {
        "published": false,
        "focalLengthMm": 14.158690802952087,
        "nominalFNumber": 3.9697000000000005
      },
      {
        "published": false,
        "focalLengthMm": 14.257033410738858,
        "nominalFNumber": 3.9854000000000003
      },
      {
        "published": false,
        "focalLengthMm": 14.356059080868139,
        "nominalFNumber": 4.0011
      },
      {
        "published": false,
        "focalLengthMm": 14.455772557714415,
        "nominalFNumber": 4.0168
      },
      {
        "published": false,
        "focalLengthMm": 14.556178618605434,
        "nominalFNumber": 4.0325
      },
      {
        "published": false,
        "focalLengthMm": 14.657282074051007,
        "nominalFNumber": 4.0482
      },
      {
        "published": false,
        "focalLengthMm": 14.759087767973512,
        "nominalFNumber": 4.0639
      },
      {
        "published": false,
        "focalLengthMm": 14.861600577939946,
        "nominalFNumber": 4.0796
      },
      {
        "published": false,
        "focalLengthMm": 14.964825415395644,
        "nominalFNumber": 4.0953
      },
      {
        "published": false,
        "focalLengthMm": 15.068767225899563,
        "nominalFNumber": 4.111
      },
      {
        "published": false,
        "focalLengthMm": 15.173430989361233,
        "nominalFNumber": 4.1267
      },
      {
        "published": false,
        "focalLengthMm": 15.27882172027934,
        "nominalFNumber": 4.1424
      },
      {
        "published": false,
        "focalLengthMm": 15.384944467981997,
        "nominalFNumber": 4.158099999999999
      },
      {
        "published": false,
        "focalLengthMm": 15.491804316868647,
        "nominalFNumber": 4.1738
      },
      {
        "published": false,
        "focalLengthMm": 15.599406386653639,
        "nominalFNumber": 4.1895
      },
      {
        "published": false,
        "focalLengthMm": 15.707755832611575,
        "nominalFNumber": 4.2052
      },
      {
        "published": false,
        "focalLengthMm": 15.816857845824194,
        "nominalFNumber": 4.2209
      },
      {
        "published": false,
        "focalLengthMm": 15.926717653429206,
        "nominalFNumber": 4.2366
      },
      {
        "published": false,
        "focalLengthMm": 16.037340518870653,
        "nominalFNumber": 4.2523
      },
      {
        "published": false,
        "focalLengthMm": 16.148731742151114,
        "nominalFNumber": 4.268000000000001
      },
      {
        "published": false,
        "focalLengthMm": 16.260896660085557,
        "nominalFNumber": 4.2837
      },
      {
        "published": false,
        "focalLengthMm": 16.373840646557163,
        "nominalFNumber": 4.2994
      },
      {
        "published": false,
        "focalLengthMm": 16.487569112774676,
        "nominalFNumber": 4.3151
      },
      {
        "published": false,
        "focalLengthMm": 16.602087507531703,
        "nominalFNumber": 4.3308
      },
      {
        "published": false,
        "focalLengthMm": 16.717401317467772,
        "nominalFNumber": 4.346500000000001
      },
      {
        "published": false,
        "focalLengthMm": 16.833516067331175,
        "nominalFNumber": 4.3622000000000005
      },
      {
        "published": false,
        "focalLengthMm": 16.950437320243694,
        "nominalFNumber": 4.3779
      },
      {
        "published": false,
        "focalLengthMm": 17.06817067796711,
        "nominalFNumber": 4.3936
      },
      {
        "published": false,
        "focalLengthMm": 17.1867217811716,
        "nominalFNumber": 4.4093
      },
      {
        "published": false,
        "focalLengthMm": 17.306096309705975,
        "nominalFNumber": 4.425
      },
      {
        "published": false,
        "focalLengthMm": 17.4262999828698,
        "nominalFNumber": 4.4407000000000005
      },
      {
        "published": false,
        "focalLengthMm": 17.547338559687436,
        "nominalFNumber": 4.4564
      },
      {
        "published": false,
        "focalLengthMm": 17.669217839183926,
        "nominalFNumber": 4.4721
      },
      {
        "published": false,
        "focalLengthMm": 17.791943660662835,
        "nominalFNumber": 4.4878
      },
      {
        "published": false,
        "focalLengthMm": 17.915521903986026,
        "nominalFNumber": 4.503500000000001
      },
      {
        "published": false,
        "focalLengthMm": 18.03995848985539,
        "nominalFNumber": 4.5192
      },
      {
        "published": false,
        "focalLengthMm": 18.165259380096447,
        "nominalFNumber": 4.5348999999999995
      },
      {
        "published": false,
        "focalLengthMm": 18.29143057794403,
        "nominalFNumber": 4.5506
      },
      {
        "published": false,
        "focalLengthMm": 18.418478128329905,
        "nominalFNumber": 4.5663
      },
      {
        "published": false,
        "focalLengthMm": 18.54640811817236,
        "nominalFNumber": 4.582
      },
      {
        "published": false,
        "focalLengthMm": 18.67522667666779,
        "nominalFNumber": 4.5977
      },
      {
        "published": false,
        "focalLengthMm": 18.804939975584535,
        "nominalFNumber": 4.6134
      },
      {
        "published": false,
        "focalLengthMm": 18.935554229558296,
        "nominalFNumber": 4.6291
      },
      {
        "published": false,
        "focalLengthMm": 19.06707569639015,
        "nominalFNumber": 4.6448
      },
      {
        "published": false,
        "focalLengthMm": 19.199510677346158,
        "nominalFNumber": 4.660500000000001
      },
      {
        "published": false,
        "focalLengthMm": 19.332865517459407,
        "nominalFNumber": 4.6762
      },
      {
        "published": false,
        "focalLengthMm": 19.46714660583389,
        "nominalFNumber": 4.6919
      },
      {
        "published": false,
        "focalLengthMm": 19.602360375950706,
        "nominalFNumber": 4.7076
      },
      {
        "published": false,
        "focalLengthMm": 19.738513305976227,
        "nominalFNumber": 4.7233
      },
      {
        "published": false,
        "focalLengthMm": 19.875611919072522,
        "nominalFNumber": 4.739
      },
      {
        "published": false,
        "focalLengthMm": 20.013662783709826,
        "nominalFNumber": 4.7547
      },
      {
        "published": false,
        "focalLengthMm": 20.152672513981273,
        "nominalFNumber": 4.7704
      },
      {
        "published": false,
        "focalLengthMm": 20.29264776991983,
        "nominalFNumber": 4.786099999999999
      },
      {
        "published": false,
        "focalLengthMm": 20.433595257817277,
        "nominalFNumber": 4.8018
      },
      {
        "published": false,
        "focalLengthMm": 20.575521730545564,
        "nominalFNumber": 4.8175
      },
      {
        "published": false,
        "focalLengthMm": 20.718433987880378,
        "nominalFNumber": 4.8332
      },
      {
        "published": false,
        "focalLengthMm": 20.862338876826872,
        "nominalFNumber": 4.8489
      },
      {
        "published": false,
        "focalLengthMm": 21.00724329194772,
        "nominalFNumber": 4.8646
      },
      {
        "published": false,
        "focalLengthMm": 21.153154175693466,
        "nominalFNumber": 4.8803
      },
      {
        "published": false,
        "focalLengthMm": 21.300078518735138,
        "nominalFNumber": 4.896
      },
      {
        "published": false,
        "focalLengthMm": 21.448023360299082,
        "nominalFNumber": 4.911700000000001
      },
      {
        "published": false,
        "focalLengthMm": 21.596995788504387,
        "nominalFNumber": 4.9274000000000004
      },
      {
        "published": false,
        "focalLengthMm": 21.7470029407023,
        "nominalFNumber": 4.9431
      },
      {
        "published": false,
        "focalLengthMm": 21.89805200381835,
        "nominalFNumber": 4.958799999999999
      },
      {
        "published": false,
        "focalLengthMm": 22.050150214696508,
        "nominalFNumber": 4.9745
      },
      {
        "published": false,
        "focalLengthMm": 22.203304860446064,
        "nominalFNumber": 4.9902
      },
      {
        "published": false,
        "focalLengthMm": 22.357523278790644,
        "nominalFNumber": 5.0059000000000005
      },
      {
        "published": false,
        "focalLengthMm": 22.512812858419842,
        "nominalFNumber": 5.0216
      },
      {
        "published": false,
        "focalLengthMm": 22.669181039343133,
        "nominalFNumber": 5.0373
      },
      {
        "published": false,
        "focalLengthMm": 22.82663531324641,
        "nominalFNumber": 5.053
      },
      {
        "published": false,
        "focalLengthMm": 22.985183223850868,
        "nominalFNumber": 5.0687
      },
      {
        "published": false,
        "focalLengthMm": 23.14483236727444,
        "nominalFNumber": 5.0844000000000005
      },
      {
        "published": false,
        "focalLengthMm": 23.30559039239576,
        "nominalFNumber": 5.100099999999999
      },
      {
        "published": false,
        "focalLengthMm": 23.46746500122053,
        "nominalFNumber": 5.115799999999999
      },
      {
        "published": false,
        "focalLengthMm": 23.630463949250675,
        "nominalFNumber": 5.1315
      },
      {
        "published": false,
        "focalLengthMm": 23.794595045855758,
        "nominalFNumber": 5.1472
      },
      {
        "published": false,
        "focalLengthMm": 23.959866154647266,
        "nominalFNumber": 5.1629000000000005
      },
      {
        "published": false,
        "focalLengthMm": 24.126285193855267,
        "nominalFNumber": 5.178599999999999
      },
      {
        "published": false,
        "focalLengthMm": 24.293860136707806,
        "nominalFNumber": 5.1943
      },
      {
        "focalLengthMm": 24.463,
        "nominalFNumber": 5.21,
        "published": true,
        "publishedFocus": [
          1
        ]
      },
      {
        "published": false,
        "focalLengthMm": 24.632899770019925,
        "nominalFNumber": 5.2227
      },
      {
        "published": false,
        "focalLengthMm": 24.804386107413816,
        "nominalFNumber": 5.235399999999999
      },
      {
        "published": false,
        "focalLengthMm": 24.977066277616178,
        "nominalFNumber": 5.2481
      },
      {
        "published": false,
        "focalLengthMm": 25.150948591707596,
        "nominalFNumber": 5.2608
      },
      {
        "published": false,
        "focalLengthMm": 25.32604141862778,
        "nominalFNumber": 5.2735
      },
      {
        "published": false,
        "focalLengthMm": 25.502353185578276,
        "nominalFNumber": 5.2862
      },
      {
        "published": false,
        "focalLengthMm": 25.67989237842811,
        "nominalFNumber": 5.298900000000001
      },
      {
        "published": false,
        "focalLengthMm": 25.85866754212224,
        "nominalFNumber": 5.3116
      },
      {
        "published": false,
        "focalLengthMm": 26.03868728109271,
        "nominalFNumber": 5.3243
      },
      {
        "published": false,
        "focalLengthMm": 26.219960259672945,
        "nominalFNumber": 5.337
      },
      {
        "published": false,
        "focalLengthMm": 26.402495202514604,
        "nominalFNumber": 5.3497
      },
      {
        "published": false,
        "focalLengthMm": 26.586300895007618,
        "nominalFNumber": 5.3624
      },
      {
        "published": false,
        "focalLengthMm": 26.771386183702926,
        "nominalFNumber": 5.3751
      },
      {
        "published": false,
        "focalLengthMm": 26.957759976738384,
        "nominalFNumber": 5.3878
      },
      {
        "published": false,
        "focalLengthMm": 27.14543124426741,
        "nominalFNumber": 5.4005
      },
      {
        "published": false,
        "focalLengthMm": 27.33440901889072,
        "nominalFNumber": 5.4132
      },
      {
        "published": false,
        "focalLengthMm": 27.524702396091136,
        "nominalFNumber": 5.4258999999999995
      },
      {
        "published": false,
        "focalLengthMm": 27.71632053467129,
        "nominalFNumber": 5.4386
      },
      {
        "published": false,
        "focalLengthMm": 27.909272657194467,
        "nominalFNumber": 5.4513
      },
      {
        "published": false,
        "focalLengthMm": 28.103568050428493,
        "nominalFNumber": 5.464
      },
      {
        "published": false,
        "focalLengthMm": 28.29921606579261,
        "nominalFNumber": 5.476699999999999
      },
      {
        "published": false,
        "focalLengthMm": 28.496226119807773,
        "nominalFNumber": 5.489400000000001
      },
      {
        "published": false,
        "focalLengthMm": 28.6946076945496,
        "nominalFNumber": 5.5021
      },
      {
        "published": false,
        "focalLengthMm": 28.894370338104945,
        "nominalFNumber": 5.5148
      },
      {
        "published": false,
        "focalLengthMm": 29.095523665031365,
        "nominalFNumber": 5.5275
      },
      {
        "published": false,
        "focalLengthMm": 29.29807735681989,
        "nominalFNumber": 5.5402000000000005
      },
      {
        "published": false,
        "focalLengthMm": 29.502041162360904,
        "nominalFNumber": 5.5529
      },
      {
        "published": false,
        "focalLengthMm": 29.70742489841357,
        "nominalFNumber": 5.5656
      },
      {
        "published": false,
        "focalLengthMm": 29.914238450078077,
        "nominalFNumber": 5.5783000000000005
      },
      {
        "published": false,
        "focalLengthMm": 30.122491771271516,
        "nominalFNumber": 5.591
      },
      {
        "published": false,
        "focalLengthMm": 30.332194885206953,
        "nominalFNumber": 5.6037
      },
      {
        "published": false,
        "focalLengthMm": 30.543357884875938,
        "nominalFNumber": 5.6164000000000005
      },
      {
        "published": false,
        "focalLengthMm": 30.755990933534015,
        "nominalFNumber": 5.6291
      },
      {
        "published": false,
        "focalLengthMm": 30.97010426519019,
        "nominalFNumber": 5.6418
      },
      {
        "published": false,
        "focalLengthMm": 31.1857081850993,
        "nominalFNumber": 5.6545000000000005
      },
      {
        "published": false,
        "focalLengthMm": 31.40281307025808,
        "nominalFNumber": 5.6672
      },
      {
        "published": false,
        "focalLengthMm": 31.62142936990453,
        "nominalFNumber": 5.6799
      },
      {
        "published": false,
        "focalLengthMm": 31.84156760602097,
        "nominalFNumber": 5.6926
      },
      {
        "published": false,
        "focalLengthMm": 32.0632383738403,
        "nominalFNumber": 5.7053
      },
      {
        "published": false,
        "focalLengthMm": 32.28645234235606,
        "nominalFNumber": 5.718
      },
      {
        "published": false,
        "focalLengthMm": 32.51122025483593,
        "nominalFNumber": 5.730700000000001
      },
      {
        "published": false,
        "focalLengthMm": 32.73755292933873,
        "nominalFNumber": 5.743399999999999
      },
      {
        "published": false,
        "focalLengthMm": 32.96546125923517,
        "nominalFNumber": 5.7561
      },
      {
        "published": false,
        "focalLengthMm": 33.19495621373204,
        "nominalFNumber": 5.768800000000001
      },
      {
        "published": false,
        "focalLengthMm": 33.426048838400305,
        "nominalFNumber": 5.7815
      },
      {
        "published": false,
        "focalLengthMm": 33.658750255706565,
        "nominalFNumber": 5.7942
      },
      {
        "published": false,
        "focalLengthMm": 33.89307166554854,
        "nominalFNumber": 5.806900000000001
      },
      {
        "published": false,
        "focalLengthMm": 34.12902434579397,
        "nominalFNumber": 5.8196
      },
      {
        "published": false,
        "focalLengthMm": 34.3666196528236,
        "nominalFNumber": 5.8323
      },
      {
        "published": false,
        "focalLengthMm": 34.6058690220775,
        "nominalFNumber": 5.845000000000001
      },
      {
        "published": false,
        "focalLengthMm": 34.8467839686057,
        "nominalFNumber": 5.8576999999999995
      },
      {
        "published": false,
        "focalLengthMm": 35.0893760876223,
        "nominalFNumber": 5.8704
      },
      {
        "published": false,
        "focalLengthMm": 35.33365705506355,
        "nominalFNumber": 5.883100000000001
      },
      {
        "published": false,
        "focalLengthMm": 35.57963862814978,
        "nominalFNumber": 5.8958
      },
      {
        "published": false,
        "focalLengthMm": 35.82733264595136,
        "nominalFNumber": 5.9085
      },
      {
        "published": false,
        "focalLengthMm": 36.076751029958466,
        "nominalFNumber": 5.921200000000001
      },
      {
        "published": false,
        "focalLengthMm": 36.32790578465482,
        "nominalFNumber": 5.9338999999999995
      },
      {
        "published": false,
        "focalLengthMm": 36.580808998095534,
        "nominalFNumber": 5.9466
      },
      {
        "published": false,
        "focalLengthMm": 36.835472842488876,
        "nominalFNumber": 5.959300000000001
      },
      {
        "published": false,
        "focalLengthMm": 37.09190957478212,
        "nominalFNumber": 5.972
      },
      {
        "published": false,
        "focalLengthMm": 37.35013153725146,
        "nominalFNumber": 5.9847
      },
      {
        "published": false,
        "focalLengthMm": 37.61015115809609,
        "nominalFNumber": 5.9974
      },
      {
        "published": false,
        "focalLengthMm": 37.87198095203623,
        "nominalFNumber": 6.0101
      },
      {
        "published": false,
        "focalLengthMm": 38.135633520915675,
        "nominalFNumber": 6.0228
      },
      {
        "published": false,
        "focalLengthMm": 38.40112155430821,
        "nominalFNumber": 6.0355
      },
      {
        "published": false,
        "focalLengthMm": 38.66845783012828,
        "nominalFNumber": 6.0482
      },
      {
        "published": false,
        "focalLengthMm": 38.93765521524613,
        "nominalFNumber": 6.0609
      },
      {
        "published": false,
        "focalLengthMm": 39.208726666106976,
        "nominalFNumber": 6.0736
      },
      {
        "published": false,
        "focalLengthMm": 39.48168522935468,
        "nominalFNumber": 6.0863
      },
      {
        "published": false,
        "focalLengthMm": 39.75654404245964,
        "nominalFNumber": 6.099
      },
      {
        "published": false,
        "focalLengthMm": 40.033316334351056,
        "nominalFNumber": 6.111700000000001
      },
      {
        "published": false,
        "focalLengthMm": 40.312015426053826,
        "nominalFNumber": 6.1244000000000005
      },
      {
        "published": false,
        "focalLengthMm": 40.59265473132935,
        "nominalFNumber": 6.1371
      },
      {
        "published": false,
        "focalLengthMm": 40.87524775732148,
        "nominalFNumber": 6.149800000000001
      },
      {
        "published": false,
        "focalLengthMm": 41.159808105206416,
        "nominalFNumber": 6.1625000000000005
      },
      {
        "published": false,
        "focalLengthMm": 41.44634947084734,
        "nominalFNumber": 6.1752
      },
      {
        "published": false,
        "focalLengthMm": 41.734885645453716,
        "nominalFNumber": 6.1879
      },
      {
        "published": false,
        "focalLengthMm": 42.025430516244874,
        "nominalFNumber": 6.2006
      },
      {
        "published": false,
        "focalLengthMm": 42.31799806711859,
        "nominalFNumber": 6.2133
      },
      {
        "published": false,
        "focalLengthMm": 42.61260237932402,
        "nominalFNumber": 6.226000000000001
      },
      {
        "published": false,
        "focalLengthMm": 42.909257632139486,
        "nominalFNumber": 6.238700000000001
      },
      {
        "published": false,
        "focalLengthMm": 43.2079781035548,
        "nominalFNumber": 6.2514
      },
      {
        "published": false,
        "focalLengthMm": 43.508778170958664,
        "nominalFNumber": 6.264100000000001
      },
      {
        "published": false,
        "focalLengthMm": 43.81167231183046,
        "nominalFNumber": 6.276800000000001
      },
      {
        "published": false,
        "focalLengthMm": 44.11667510443719,
        "nominalFNumber": 6.2895
      },
      {
        "published": false,
        "focalLengthMm": 44.42380122853502,
        "nominalFNumber": 6.3022
      },
      {
        "published": false,
        "focalLengthMm": 44.733065466075914,
        "nominalFNumber": 6.314900000000001
      },
      {
        "published": false,
        "focalLengthMm": 45.04448270191899,
        "nominalFNumber": 6.3276
      },
      {
        "published": false,
        "focalLengthMm": 45.35806792454698,
        "nominalFNumber": 6.3403
      },
      {
        "published": false,
        "focalLengthMm": 45.67383622678767,
        "nominalFNumber": 6.353000000000001
      },
      {
        "published": false,
        "focalLengthMm": 45.991802806540214,
        "nominalFNumber": 6.3657
      },
      {
        "published": false,
        "focalLengthMm": 46.31198296750669,
        "nominalFNumber": 6.3784
      },
      {
        "published": false,
        "focalLengthMm": 46.63439211992862,
        "nominalFNumber": 6.3911
      },
      {
        "published": false,
        "focalLengthMm": 46.95904578132869,
        "nominalFNumber": 6.4038
      },
      {
        "published": false,
        "focalLengthMm": 47.28595957725753,
        "nominalFNumber": 6.4165
      },
      {
        "published": false,
        "focalLengthMm": 47.61514924204597,
        "nominalFNumber": 6.429200000000001
      },
      {
        "published": false,
        "focalLengthMm": 47.946630619562086,
        "nominalFNumber": 6.4419
      },
      {
        "published": false,
        "focalLengthMm": 48.280419663973866,
        "nominalFNumber": 6.454600000000001
      },
      {
        "published": false,
        "focalLengthMm": 48.616532440517226,
        "nominalFNumber": 6.467300000000001
      },
      {
        "focalLengthMm": 48.956,
        "nominalFNumber": 6.48,
        "label": "Tele",
        "published": true,
        "publishedFocus": [
          1
        ]
      }
    ],
    "apertureModel": "from-nominal-fno",
    "step": 0.005
  },
  "focus": {
    "closeFocusM": 0.35,
    "description": "The patent prints infinity and 0.35 m spacings at wide, middle and tele; those six states are exact. G2 is the focusing group and moves objectward for closer focus. The intermediate zoom positions are an inferred reconstruction, not the factory cam: G3 is the variator, G2 follows a single-reversal law (imageward, then objectward, as claim 2 states), and G4 is solved for infinity focus at each position. Between printed stations the near state is solved for the object-to-image distance interpolated between the printed near states, which the patent labels 0.35 m. The marketed minimum focus distance in normal mode is 0.35 m; the macro mode is not modeled."
  },
  "gaps": {
    "6": {
      "label": "D6",
      "values": [
        [
          6.6446,
          5.3346
        ],
        [
          6.690104572127584,
          5.381502368905433
        ],
        [
          6.735284179827907,
          5.428067418844775
        ],
        [
          6.780136018191361,
          5.474292320268038
        ],
        [
          6.8246573397108055,
          5.520174302610883
        ],
        [
          6.8688454539483965,
          5.565710653930125
        ],
        [
          6.912697727191585,
          5.61089872052786
        ],
        [
          6.956211582098608,
          5.655735906566729
        ],
        [
          6.99938449733379,
          5.700219673674339
        ],
        [
          7.042214007192939,
          5.744347540537534
        ],
        [
          7.0846977012192145,
          5.78811708248868
        ],
        [
          7.1268332238097125,
          5.831525931082147
        ],
        [
          7.168618273813098,
          5.8745717736618035
        ],
        [
          7.210050604118635,
          5.917252352921041
        ],
        [
          7.251128021236806,
          5.959565466453777
        ],
        [
          7.291848384871966,
          6.001508966298176
        ],
        [
          7.332209607487198,
          6.0430807584731685
        ],
        [
          7.372209653861762,
          6.084278802507318
        ],
        [
          7.411846540641357,
          6.125101110960823
        ],
        [
          7.451118335881503,
          6.165545748941058
        ],
        [
          7.490023158584369,
          6.205610833612307
        ],
        [
          7.528559178229238,
          6.245294533698297
        ],
        [
          7.566724614296983,
          6.284595068980146
        ],
        [
          7.60451773578874,
          6.323510709788372
        ],
        [
          7.641936860739052,
          6.362039776489375
        ],
        [
          7.678980355723849,
          6.400180638967528
        ],
        [
          7.71564663536334,
          6.437931716102371
        ],
        [
          7.751934161820235,
          6.475291475241147
        ],
        [
          7.787841444293443,
          6.512258431667517
        ],
        [
          7.823367038507506,
          6.548831148065805
        ],
        [
          7.858509546198035,
          6.5850082339823
        ],
        [
          7.893267614593347,
          6.620788345282111
        ],
        [
          7.927639935892534,
          6.656170183603733
        ],
        [
          7.961625246740176,
          6.691152495809612
        ],
        [
          7.9952223276979435,
          6.725734073434868
        ],
        [
          8.028430002713257,
          6.759913752132344
        ],
        [
          8.061247138585227,
          6.793690411116245
        ],
        [
          8.093672644428061,
          6.827062972602415
        ],
        [
          8.125705471132159,
          6.8600304012481175
        ],
        [
          8.157344610823026,
          6.892591703588105
        ],
        [
          8.188589096318253,
          6.924745927470745
        ],
        [
          8.219438000582645,
          6.956492161491349
        ],
        [
          8.249890436181795,
          6.9878295344248675
        ],
        [
          8.279945554734129,
          7.0187572146571435
        ],
        [
          8.309602546361678,
          7.049274409615162
        ],
        [
          8.338860639139677,
          7.079380365196663
        ],
        [
          8.36771909854515,
          7.109074365198593
        ],
        [
          8.396177226904646,
          7.138355730745133
        ],
        [
          8.424234362841196,
          7.167223819715401
        ],
        [
          8.451889880720676,
          7.195678026170823
        ],
        [
          8.479143190097693,
          7.2237177797818
        ],
        [
          8.505993735161077,
          7.2513425452551985
        ],
        [
          8.532440994179096,
          7.2785518217604155
        ],
        [
          8.558484478944548,
          7.305345142357178
        ],
        [
          8.584123734219757,
          7.331722073422194
        ],
        [
          8.609358337181614,
          7.357682214076951
        ],
        [
          8.63418789686673,
          7.383225195615096
        ],
        [
          8.658612053616768,
          7.4083506809310755
        ],
        [
          8.6826304785241,
          7.433058363948788
        ],
        [
          8.70624287287775,
          7.457347969050702
        ],
        [
          8.72944896760976,
          7.481219250507994
        ],
        [
          8.752248522742029,
          7.504671991911062
        ],
        [
          8.774641326833665,
          7.527706005600971
        ],
        [
          8.796627196428869,
          7.550321132101452
        ],
        [
          8.818205975505467,
          7.572517239552055
        ],
        [
          8.839377534924035,
          7.59429422314148
        ],
        [
          8.860141771877709,
          7.615652004542634
        ],
        [
          8.880498609342654,
          7.636590531347917
        ],
        [
          8.900447995529294,
          7.657109776505443
        ],
        [
          8.919989903334164,
          7.677209737756756
        ],
        [
          8.939124329792568,
          7.696890437074389
        ],
        [
          8.95785129553189,
          7.716151920101453
        ],
        [
          8.976170844225646,
          7.7349942555911095
        ],
        [
          8.994083042048215,
          7.753417534847587
        ],
        [
          9.011587977130246,
          7.771421871167547
        ],
        [
          9.028685759014717,
          7.789007399282755
        ],
        [
          9.045376518113619,
          7.806174274802791
        ],
        [
          9.061660405165199,
          7.822922673659267
        ],
        [
          9.07753759069174,
          7.8392527915500905
        ],
        [
          9.093008264457838,
          7.855164843384589
        ],
        [
          9.108072634929083,
          7.87065906272914
        ],
        [
          9.122730928731105,
          7.8857357012532034
        ],
        [
          9.136983390108917,
          7.900395028175961
        ],
        [
          9.15083028038644,
          7.914637329712917
        ],
        [
          9.164271877426186,
          7.9284629085228495
        ],
        [
          9.177308475088934,
          7.941872083154961
        ],
        [
          9.189940382693358,
          7.954865187496022
        ],
        [
          9.202167924475471,
          7.9674425702171945
        ],
        [
          9.213991439047767,
          7.979604594220809
        ],
        [
          9.225411278857955,
          7.991351636086682
        ],
        [
          9.23642780964713,
          8.00268408551805
        ],
        [
          9.247041409907277,
          8.013602344786571
        ],
        [
          9.2572524703379,
          8.02410682817683
        ],
        [
          9.267061393301685,
          8.034197961429664
        ],
        [
          9.276468592278983,
          8.043876181184295
        ],
        [
          9.285474491320954,
          8.053141934419287
        ],
        [
          9.294079524501198,
          8.061995677891794
        ],
        [
          9.302284135365628,
          8.070437877575214
        ],
        [
          9.310088776380445,
          8.07846900809477
        ],
        [
          9.317493908377957,
          8.086089552160846
        ],
        [
          9.3245,
          8.0933
        ],
        [
          9.331309001255631,
          8.1003092263467
        ],
        [
          9.338083319009227,
          8.107282191545597
        ],
        [
          9.344811403021627,
          8.114207040408422
        ],
        [
          9.351481878311652,
          8.1210720978392
        ],
        [
          9.358083541342227,
          8.127865864907534
        ],
        [
          9.364605356167443,
          8.134577014880724
        ],
        [
          9.371036450541956,
          8.141194389216224
        ],
        [
          9.377366111993863,
          8.14770699351593
        ],
        [
          9.383583783862047,
          8.154103993442828
        ],
        [
          9.389679061298878,
          8.160374710601715
        ],
        [
          9.395641687238866,
          8.16650861838372
        ],
        [
          9.401461548333797,
          8.172495337776066
        ],
        [
          9.407128670854657,
          8.17832463313702
        ],
        [
          9.412633216560508,
          8.183986407936239
        ],
        [
          9.41796547853421,
          8.189470700460548
        ],
        [
          9.423115876984896,
          8.19476767948496
        ],
        [
          9.428074955016712,
          8.199867639908723
        ],
        [
          9.432833374363286,
          8.204760998355368
        ],
        [
          9.437381911087199,
          8.2094382887366
        ],
        [
          9.441711451243474,
          8.213890157778824
        ],
        [
          9.44581298650599,
          8.218107360510821
        ],
        [
          9.449677609755481,
          8.222080755711989
        ],
        [
          9.453296510627593,
          8.225801301318798
        ],
        [
          9.45666097101931,
          8.229260049788316
        ],
        [
          9.459762360551796,
          8.232448143416361
        ],
        [
          9.462592131987508,
          8.235356809608538
        ],
        [
          9.465141816599246,
          8.237977356101084
        ],
        [
          9.467403019488568,
          8.240301166129854
        ],
        [
          9.469367414850693,
          8.242319693543513
        ],
        [
          9.471026741182929,
          8.244024457858316
        ],
        [
          9.472372796433255,
          8.24540703925115
        ],
        [
          9.473397433085543,
          8.246459073486943
        ],
        [
          9.474092553177552,
          8.247172246776383
        ],
        [
          9.474450103247648,
          8.247538290560282
        ],
        [
          9.474315671649634,
          8.247398520869787
        ],
        [
          9.47267007538116,
          8.245705510157253
        ],
        [
          9.469320389090337,
          8.242260981781023
        ],
        [
          9.464268068788417,
          8.237066419177333
        ],
        [
          9.457514445886279,
          8.230123168781562
        ],
        [
          9.449060736123416,
          8.221432449218135
        ],
        [
          9.438908048813305,
          8.210995360808647
        ],
        [
          9.42705739642223,
          8.1988128954164
        ],
        [
          9.413509704498704,
          8.184885946645231
        ],
        [
          9.398265821970586,
          8.169215320410792
        ],
        [
          9.381326531826966,
          8.151801745902215
        ],
        [
          9.362692562201737,
          8.132645886951604
        ],
        [
          9.342364597875676,
          8.111748353829503
        ],
        [
          9.320343292213515,
          8.089109715483541
        ],
        [
          9.296629279552272,
          8.064730512237425
        ],
        [
          9.271223188056641,
          8.038611268967099
        ],
        [
          9.244125653056779,
          8.010752508770313
        ],
        [
          9.21533733088327,
          7.981154767145321
        ],
        [
          9.184858913213295,
          7.94981860669366
        ],
        [
          9.152691141941295,
          7.916744632361527
        ],
        [
          9.118834824586417,
          7.881933507232678
        ],
        [
          9.083290850247996,
          7.845385968885237
        ],
        [
          9.046060206119172,
          7.807102846323502
        ],
        [
          9.007143994567244,
          7.7670850774945785
        ],
        [
          8.96654345078794,
          7.725333727397315
        ],
        [
          8.924259961039095,
          7.681850006790924
        ],
        [
          8.880295081457248,
          7.636635291506902
        ],
        [
          8.834650557458732,
          7.589691142367528
        ],
        [
          8.787328343724427,
          7.541019325710074
        ],
        [
          8.738330624765016,
          7.490621834515773
        ],
        [
          8.687659836060758,
          7.438500910137274
        ],
        [
          8.635318685767016,
          7.3846590646168435
        ],
        [
          8.581310176973552,
          7.329099103584825
        ],
        [
          8.52563763050225,
          7.271824149722967
        ],
        [
          8.468304708224444,
          7.212837666774615
        ],
        [
          8.409315436875046,
          7.152143484079774
        ],
        [
          8.348674232336684,
          7.0897458216086555
        ],
        [
          8.286385924362868,
          7.025649315463163
        ],
        [
          8.222455781704479,
          6.959859043810438
        ],
        [
          8.156889537599369,
          6.892380553209748
        ],
        [
          8.089693415579758,
          6.823219885285806
        ],
        [
          8.020874155547082,
          6.752383603699383
        ],
        [
          7.950439040058596,
          6.67987882135894
        ],
        [
          7.87839592076462,
          6.605713227811556
        ],
        [
          7.804753244929611,
          6.529895116746321
        ],
        [
          7.7295200819646865,
          6.4524334135364825
        ],
        [
          7.652706149893352,
          6.373337702742136
        ],
        [
          7.574321841666353,
          6.292618255487089
        ],
        [
          7.494378251235856,
          6.210286056620019
        ],
        [
          7.412887199293178,
          6.126352831561583
        ],
        [
          7.329861258568962,
          6.040831072735381
        ],
        [
          7.245313778588697,
          5.95373406547302
        ],
        [
          7.159258909771477,
          5.865075913279666
        ],
        [
          7.071711626754739,
          5.774871562339256
        ],
        [
          6.98268775082279,
          5.683136825135431
        ],
        [
          6.8922039713127505,
          5.589888403057952
        ],
        [
          6.800277865867563,
          5.4951439078614275
        ],
        [
          6.706927919402191,
          5.398921881838367
        ],
        [
          6.612173541646463,
          5.301241816566458
        ],
        [
          6.5160350831259075,
          5.202124170087101
        ],
        [
          6.418533849440231,
          5.101590382370349
        ],
        [
          6.319692113698948,
          4.999662888920994
        ],
        [
          6.219533126973484,
          4.896365132380308
        ],
        [
          6.118081126626582,
          4.791721571978834
        ],
        [
          6.015361342381902,
          4.68575769069789
        ],
        [
          5.9114,
          4.5785
        ]
      ]
    },
    "8": {
      "label": "D8",
      "values": [
        [
          30.0675,
          31.3775
        ],
        [
          29.86438334934486,
          31.17298555256701
        ],
        [
          29.66164448641326,
          30.96886124739639
        ],
        [
          29.459290521975273,
          30.765134219898595
        ],
        [
          29.257328440720677,
          30.561811477820598
        ],
        [
          29.055765102042713,
          30.358899902060983
        ],
        [
          28.854607240837424,
          30.15640624750115
        ],
        [
          28.653861468317725,
          29.954337143849603
        ],
        [
          28.453534272841868,
          29.752699096501317
        ],
        [
          28.25363202075559,
          29.551498487410992
        ],
        [
          28.054160957247277,
          29.35074157597781
        ],
        [
          27.85512720721573,
          29.150434499943294
        ],
        [
          27.65653677614989,
          28.950583276301185
        ],
        [
          27.458395551019777,
          28.751193802217372
        ],
        [
          27.260709301178526,
          28.552271855961553
        ],
        [
          27.063483679274345,
          28.353823097848135
        ],
        [
          26.866724222172426,
          28.155853071186456
        ],
        [
          26.670436351885765,
          27.95836720324021
        ],
        [
          26.47462537651476,
          27.761370806195295
        ],
        [
          26.279296491194785,
          27.564869078135228
        ],
        [
          26.08445477905128,
          27.368867104023344
        ],
        [
          25.89010521216195,
          27.17336985669289
        ],
        [
          25.69625265252525,
          26.978382197842087
        ],
        [
          25.502901853035063,
          26.78390887903543
        ],
        [
          25.310057458460903,
          26.58995454271058
        ],
        [
          25.117724006432784,
          26.396523723189105
        ],
        [
          24.925905928431035,
          26.203620847692005
        ],
        [
          24.734607550779852,
          26.01125023735894
        ],
        [
          24.543833095644494,
          25.81941610827042
        ],
        [
          24.353586682031754,
          25.628122572473455
        ],
        [
          24.163872326792884,
          25.43737363900862
        ],
        [
          23.974693945628886,
          25.247173214940123
        ],
        [
          23.78605535409754,
          25.057525106386343
        ],
        [
          23.59796026862191,
          24.868433019552477
        ],
        [
          23.41041230749962,
          24.679900561762697
        ],
        [
          23.22341499191291,
          24.491931242493823
        ],
        [
          23.036971746938693,
          24.304528474407675
        ],
        [
          22.85108590255851,
          24.117695574384154
        ],
        [
          22.665760694667746,
          23.931435764551786
        ],
        [
          22.48099926608399,
          23.745752173318913
        ],
        [
          22.296804667553957,
          23.560647836401465
        ],
        [
          22.113179858758873,
          23.376125697850167
        ],
        [
          21.930127709317645,
          23.192188611074574
        ],
        [
          21.74765099978776,
          23.008839339864743
        ],
        [
          21.565752422663454,
          22.82608055940997
        ],
        [
          21.384434583370933,
          22.64391485731395
        ],
        [
          21.20370000126016,
          22.462344734606717
        ],
        [
          21.023551110593047,
          22.281372606752562
        ],
        [
          20.84399026152773,
          22.101000804653523
        ],
        [
          20.665019721098645,
          21.9212315756485
        ],
        [
          20.48664167419205,
          21.742067084507944
        ],
        [
          20.30885822451679,
          21.56350941442267
        ],
        [
          20.13167139557008,
          21.38556056798876
        ],
        [
          19.955083131597895,
          21.208222468185266
        ],
        [
          19.779095298549933,
          21.031496959347496
        ],
        [
          19.60370968502861,
          20.85538580813327
        ],
        [
          19.42892800323221,
          20.679890704483842
        ],
        [
          19.254751889891697,
          20.50501326257739
        ],
        [
          19.081182907200986,
          20.330755021776298
        ],
        [
          18.90822254374053,
          20.157117447567575
        ],
        [
          18.73587221539411,
          19.984101932495875
        ],
        [
          18.564133266258324,
          19.811709797089293
        ],
        [
          18.39300696954478,
          19.639942290777473
        ],
        [
          18.222494528474922,
          19.46880059280234
        ],
        [
          18.05259707716689,
          19.2982858131203
        ],
        [
          17.883315681514723,
          19.128398993297278
        ],
        [
          17.71465134005922,
          18.959141107394295
        ],
        [
          17.54660498485088,
          18.79051306284562
        ],
        [
          17.379177482303977,
          18.622515701327828
        ],
        [
          17.212369634042446,
          18.455149799619853
        ],
        [
          17.046182177736704,
          18.288416070454883
        ],
        [
          16.88061578793174,
          18.122315163362174
        ],
        [
          16.71567107686597,
          17.956847665500504
        ],
        [
          16.551348595280885,
          17.792014102481513
        ],
        [
          16.387648833221498,
          17.627814939184194
        ],
        [
          16.224572220826897,
          17.464250580558858
        ],
        [
          16.062119129111394,
          17.301321372422223
        ],
        [
          15.900289870735726,
          17.139027602241658
        ],
        [
          15.73908470076831,
          16.97736949990996
        ],
        [
          15.578503817436369,
          16.816347238509618
        ],
        [
          15.41854736286675,
          16.655960935066695
        ],
        [
          15.259215423816489,
          16.49621065129439
        ],
        [
          15.100508032392646,
          16.337096394325602
        ],
        [
          14.942425166761648,
          16.17861811743517
        ],
        [
          14.784966751847643,
          16.02077572075098
        ],
        [
          14.628132660020094,
          15.863569051954068
        ],
        [
          14.471922711770134,
          15.70699790696747
        ],
        [
          14.316336676375716,
          15.551062030633993
        ],
        [
          14.161374272555491,
          15.395761117382449
        ],
        [
          14.007035169111063,
          15.241094811882336
        ],
        [
          13.85331898555758,
          15.087062709686661
        ],
        [
          13.700225292742607,
          14.933664357863313
        ],
        [
          13.547753613452986,
          14.780899255614056
        ],
        [
          13.395903423009539,
          14.62876685488156
        ],
        [
          13.244674149849642,
          14.47726656094433
        ],
        [
          13.094065176097153,
          14.32639773299882
        ],
        [
          12.944075838119973,
          14.176159684729377
        ],
        [
          12.794705427074664,
          14.026551684865078
        ],
        [
          12.645953189438197,
          13.877572957723872
        ],
        [
          12.497818327526543,
          13.729222683743654
        ],
        [
          12.3503,
          13.5815
        ],
        [
          12.20293848581713,
          13.43393826072606
        ],
        [
          12.055960320147586,
          13.286761447611216
        ],
        [
          11.909373964708042,
          13.139978327321247
        ],
        [
          11.763187638492546,
          12.993597418964999
        ],
        [
          11.617409321980402,
          12.847626998415095
        ],
        [
          11.47204676133361,
          12.702075102620329
        ],
        [
          11.327107472581291,
          12.556949533907023
        ],
        [
          11.18259874578908,
          12.412257864267014
        ],
        [
          11.03852764921157,
          12.26800743963079
        ],
        [
          10.894901033425612,
          12.124205384122774
        ],
        [
          10.751725535443233,
          11.98085860429838
        ],
        [
          10.609007582802208,
          11.83797379335994
        ],
        [
          10.466753397633052,
          11.69555743535069
        ],
        [
          10.324969000700989,
          11.553615809325258
        ],
        [
          10.183660215421934,
          11.412154993495596
        ],
        [
          10.04283267185127,
          11.271180869351207
        ],
        [
          9.902491810644449,
          11.130699125752438
        ],
        [
          9.762642886988926,
          10.990715262996844
        ],
        [
          9.623290974506391,
          10.85123459685699
        ],
        [
          9.484440969125071,
          10.712262262589721
        ],
        [
          9.346097592921433,
          10.573803218916602
        ],
        [
          9.208265397931067,
          10.435862251974559
        ],
        [
          9.070948769928735,
          10.29844397923753
        ],
        [
          8.934151932177137,
          10.161552853408132
        ],
        [
          8.797878949144764,
          10.025193166280198
        ],
        [
          8.662133730192847,
          9.889369052571817
        ],
        [
          8.526920033231729,
          9.754084493729891
        ],
        [
          8.39224146834685,
          9.619343321705564
        ],
        [
          8.258101501395283,
          9.485149222702463
        ],
        [
          8.124503457572846,
          9.351505740897458
        ],
        [
          7.991450524953052,
          9.218416282135157
        ],
        [
          7.858945757998351,
          9.085884117596951
        ],
        [
          7.726992081044973,
          8.953912387446142
        ],
        [
          7.595592291762053,
          8.822504104449418
        ],
        [
          7.464836313637697,
          8.691753464417545
        ],
        [
          7.335327561020975,
          8.562292126244882
        ],
        [
          7.207174033690263,
          8.434233440999577
        ],
        [
          7.080367718988537,
          8.307569368599621
        ],
        [
          6.954900754906756,
          8.182292032011473
        ],
        [
          6.830765424358182,
          8.058393711263463
        ],
        [
          6.7079541493554,
          7.935866837360058
        ],
        [
          6.586459485079578,
          7.814703986085407
        ],
        [
          6.4662741138310444,
          7.6948978716845176
        ],
        [
          6.347390838850856,
          7.57644134041065
        ],
        [
          6.229802578002397,
          7.459327363927148
        ],
        [
          6.113502357302629,
          7.343549032552763
        ],
        [
          5.998483304292275,
          7.229099548338449
        ],
        [
          5.884738641234502,
          7.115972217964476
        ],
        [
          5.772261678131626,
          7.004160445446473
        ],
        [
          5.66104580554968,
          6.893657724639222
        ],
        [
          5.551084487240674,
          6.7844576315271405
        ],
        [
          5.442371252552675,
          6.676553816290624
        ],
        [
          5.33489968861822,
          6.569939995137855
        ],
        [
          5.228663432311629,
          6.464609941891397
        ],
        [
          5.123656161966425,
          6.360557479320163
        ],
        [
          5.019871588844287,
          6.257776470207046
        ],
        [
          4.9173034483477736,
          6.156260808143443
        ],
        [
          4.815945490969163,
          6.0560044080418285
        ],
        [
          4.715791472968869,
          5.957001196359494
        ],
        [
          4.616835146777419,
          5.859245101025589
        ],
        [
          4.519070251115682,
          5.762730041066028
        ],
        [
          4.422490500829381,
          5.667449915920585
        ],
        [
          4.327089576434277,
          5.57339859444863
        ],
        [
          4.23286111337023,
          5.4805699036194735
        ],
        [
          4.139798690963046,
          5.38895761688653
        ],
        [
          4.047895821094686,
          5.298555442244859
        ],
        [
          3.9571459365835686,
          5.209357009972296
        ],
        [
          3.8675423792785146,
          5.121355860057797
        ],
        [
          3.7790783878715004,
          5.03454542932133
        ],
        [
          3.6917470854360293,
          4.948919038231301
        ],
        [
          3.605541466700103,
          4.864469877428132
        ],
        [
          3.520454385064607,
          4.781190993964312
        ],
        [
          3.4364785393802784,
          4.69907527727432
        ],
        [
          3.3536064604984652,
          4.618115444888086
        ],
        [
          3.271830497613534,
          4.538304027907485
        ],
        [
          3.191142804417021,
          4.45963335626472
        ],
        [
          3.1115353250864484,
          4.382095543786104
        ],
        [
          3.032999780134209,
          4.305682473087273
        ],
        [
          2.955527652144731,
          4.230385780328021
        ],
        [
          2.879110171430984,
          4.156196839859188
        ],
        [
          2.8037383016441977,
          4.083106748795414
        ],
        [
          2.729402725373494,
          4.011106311552758
        ],
        [
          2.656093829775129,
          3.9401860243909663
        ],
        [
          2.5838016922736946,
          3.87033606000529
        ],
        [
          2.5125160663807646,
          3.8015462522143455
        ],
        [
          2.442226367678826,
          3.733806080794503
        ],
        [
          2.372921660021266,
          3.6671046565130765
        ],
        [
          2.304590642001587,
          3.6014307064170703
        ],
        [
          2.237221633747283,
          3.5367725594346417
        ],
        [
          2.1708025640960207,
          3.473118132350819
        ],
        [
          2.1053209582136754,
          3.410454916219811
        ],
        [
          2.0407639257151926,
          3.348769963279016
        ],
        [
          1.9771181493506873,
          3.2880498744306923
        ],
        [
          1.914369874320026,
          3.2282807873588317
        ],
        [
          1.852504898279551,
          3.1694483653494334
        ],
        [
          1.7915085621047817,
          3.1115377868827356
        ],
        [
          1.731365741472347,
          3.0545337360655234
        ],
        [
          1.6720608393234633,
          2.9984203939712115
        ],
        [
          1.6135777792697512,
          2.9431814309537634
        ],
        [
          1.5559,
          2.8888
        ]
      ]
    },
    "14": {
      "label": "D14",
      "values": [
        [
          3.8142,
          3.8142
        ],
        [
          3.826520223469089,
          3.826520223469089
        ],
        [
          3.839381768468975,
          3.839381768468975
        ],
        [
          3.8527847025761233,
          3.8527847025761233
        ],
        [
          3.8667291390040006,
          3.8667291390040006
        ],
        [
          3.881215236713153,
          3.881215236713153
        ],
        [
          3.8962432005289855,
          3.8962432005289855
        ],
        [
          3.911813281267456,
          3.911813281267456
        ],
        [
          3.9279257758684025,
          3.9279257758684025
        ],
        [
          3.944581027536877,
          3.944581027536877
        ],
        [
          3.961779425892523,
          3.961779425892523
        ],
        [
          3.979521407127109,
          3.979521407127109
        ],
        [
          3.997807454170079,
          3.997807454170079
        ],
        [
          4.0166380968626925,
          4.0166380968626925
        ],
        [
          4.036013912140405,
          4.036013912140405
        ],
        [
          4.055935524223905,
          4.055935524223905
        ],
        [
          4.0764036048188785,
          4.0764036048188785
        ],
        [
          4.097418873324486,
          4.097418873324486
        ],
        [
          4.118982097050875,
          4.118982097050875
        ],
        [
          4.14109409144578,
          4.14109409144578
        ],
        [
          4.1637557203304,
          4.1637557203304
        ],
        [
          4.186967896144623,
          4.186967896144623
        ],
        [
          4.210731580201944,
          4.210731580201944
        ],
        [
          4.2350477829540125,
          4.2350477829540125
        ],
        [
          4.259917564265152,
          4.259917564265152
        ],
        [
          4.285342033696985,
          4.285342033696985
        ],
        [
          4.311322350803394,
          4.311322350803394
        ],
        [
          4.337859725435877,
          4.337859725435877
        ],
        [
          4.364955418059743,
          4.364955418059743
        ],
        [
          4.392610740081054,
          4.392610740081054
        ],
        [
          4.4208270541848265,
          4.4208270541848265
        ],
        [
          4.449605774684535,
          4.449605774684535
        ],
        [
          4.478948367883227,
          4.478948367883227
        ],
        [
          4.508856352446472,
          4.508856352446472
        ],
        [
          4.539331299787371,
          4.539331299787371
        ],
        [
          4.570374834463948,
          4.570374834463948
        ],
        [
          4.6019886345891905,
          4.6019886345891905
        ],
        [
          4.634174432253793,
          4.634174432253793
        ],
        [
          4.666934013962489,
          4.666934013962489
        ],
        [
          4.700269221083396,
          4.700269221083396
        ],
        [
          4.734181950311509,
          4.734181950311509
        ],
        [
          4.768674154146083,
          4.768674154146083
        ],
        [
          4.803747841382602,
          4.803747841382602
        ],
        [
          4.839405077619418,
          4.839405077619418
        ],
        [
          4.875647985779622,
          4.875647985779622
        ],
        [
          4.912478746648333,
          4.912478746648333
        ],
        [
          4.949899599425898,
          4.949899599425898
        ],
        [
          4.987912842297291,
          4.987912842297291
        ],
        [
          5.026520833018296,
          5.026520833018296
        ],
        [
          5.065725989518654,
          5.065725989518654
        ],
        [
          5.105530790522742,
          5.105530790522742
        ],
        [
          5.145937776188283,
          5.145937776188283
        ],
        [
          5.186949548763295,
          5.186949548763295
        ],
        [
          5.228568773262133,
          5.228568773262133
        ],
        [
          5.270798178160739,
          5.270798178160739
        ],
        [
          5.31364055611192,
          5.31364055611192
        ],
        [
          5.357098764680835,
          5.357098764680835
        ],
        [
          5.401175727101652,
          5.401175727101652
        ],
        [
          5.445874433055636,
          5.445874433055636
        ],
        [
          5.491197939471306,
          5.491197939471306
        ],
        [
          5.537149371347269,
          5.537149371347269
        ],
        [
          5.583731922598503,
          5.583731922598503
        ],
        [
          5.630948856926551,
          5.630948856926551
        ],
        [
          5.6788035087142745,
          5.6788035087142745
        ],
        [
          5.727299283946117,
          5.727299283946117
        ],
        [
          5.776439661154171,
          5.776439661154171
        ],
        [
          5.826228192391426,
          5.826228192391426
        ],
        [
          5.876668504232114,
          5.876668504232114
        ],
        [
          5.927764298800831,
          5.927764298800831
        ],
        [
          5.97951935483065,
          5.97951935483065
        ],
        [
          6.031937528751314,
          6.031937528751314
        ],
        [
          6.085022755808442,
          6.085022755808442
        ],
        [
          6.138779051214513,
          6.138779051214513
        ],
        [
          6.193210511332808,
          6.193210511332808
        ],
        [
          6.248321314895065,
          6.248321314895065
        ],
        [
          6.304115724254064,
          6.304115724254064
        ],
        [
          6.360598086672098,
          6.360598086672098
        ],
        [
          6.417772835646563,
          6.417772835646563
        ],
        [
          6.4756444922736875,
          6.4756444922736875
        ],
        [
          6.534217666651674,
          6.534217666651674
        ],
        [
          6.593497059324566,
          6.593497059324566
        ],
        [
          6.653487462767895,
          6.653487462767895
        ],
        [
          6.714193762917944,
          6.714193762917944
        ],
        [
          6.775620940745352,
          6.775620940745352
        ],
        [
          6.837774073875142,
          6.837774073875142
        ],
        [
          6.900658338254274,
          6.900658338254274
        ],
        [
          6.9642790098686085,
          6.9642790098686085
        ],
        [
          7.0286414665106385,
          7.0286414665106385
        ],
        [
          7.093751189599914,
          7.093751189599914
        ],
        [
          7.159613766057792,
          7.159613766057792
        ],
        [
          7.226234890238551,
          7.226234890238551
        ],
        [
          7.293620365918628,
          7.293620365918628
        ],
        [
          7.361776108346,
          7.361776108346
        ],
        [
          7.430708146351993,
          7.430708146351993
        ],
        [
          7.500422624527452,
          7.500422624527452
        ],
        [
          7.570925805465862,
          7.570925805465862
        ],
        [
          7.642224072075393,
          7.642224072075393
        ],
        [
          7.714323929962834,
          7.714323929962834
        ],
        [
          7.787232009891614,
          7.787232009891614
        ],
        [
          7.86095507031682,
          7.86095507031682
        ],
        [
          7.9355,
          7.9355
        ],
        [
          8.011130497081599,
          8.011130497081599
        ],
        [
          8.087737357494088,
          8.087737357494088
        ],
        [
          8.16532660377684,
          8.16532660377684
        ],
        [
          8.24390441007677,
          8.24390441007677
        ],
        [
          8.32347710427706,
          8.32347710427706
        ],
        [
          8.404051170191057,
          8.404051170191057
        ],
        [
          8.485633249823316,
          8.485633249823316
        ],
        [
          8.568230145699708,
          8.568230145699708
        ],
        [
          8.651848823268612,
          8.651848823268612
        ],
        [
          8.736496413375331,
          8.736496413375331
        ],
        [
          8.822180214811713,
          8.822180214811713
        ],
        [
          8.908907696943384,
          8.908907696943384
        ],
        [
          8.996686502416686,
          8.996686502416686
        ],
        [
          9.08552444994804,
          9.08552444994804
        ],
        [
          9.17542953719758,
          9.17542953719758
        ],
        [
          9.266409943730164,
          9.266409943730164
        ],
        [
          9.358474034066056,
          9.358474034066056
        ],
        [
          9.451630360823891,
          9.451630360823891
        ],
        [
          9.545887667958883,
          9.545887667958883
        ],
        [
          9.641254894099006,
          9.641254894099006
        ],
        [
          9.737741175981942,
          9.737741175981942
        ],
        [
          9.835355851996148,
          9.835355851996148
        ],
        [
          9.934108465828661,
          9.934108465828661
        ],
        [
          10.034008770223306,
          10.034008770223306
        ],
        [
          10.13506673085222,
          10.13506673085222
        ],
        [
          10.237292530304174,
          10.237292530304174
        ],
        [
          10.340696572193202,
          10.340696572193202
        ],
        [
          10.445289485391157,
          10.445289485391157
        ],
        [
          10.551082128387385,
          10.551082128387385
        ],
        [
          10.658085593779965,
          10.658085593779965
        ],
        [
          10.766311212901634,
          10.766311212901634
        ],
        [
          10.875770560584854,
          10.875770560584854
        ],
        [
          10.986475460069514,
          10.986475460069514
        ],
        [
          11.098437988057977,
          11.098437988057977
        ],
        [
          11.211598340422107,
          11.211598340422107
        ],
        [
          11.325463963504017,
          11.325463963504017
        ],
        [
          11.439938124720701,
          11.439938124720701
        ],
        [
          11.555018897811532,
          11.555018897811532
        ],
        [
          11.670704221635745,
          11.670704221635745
        ],
        [
          11.786991899934723,
          11.786991899934723
        ],
        [
          11.903879601403371,
          11.903879601403371
        ],
        [
          12.021364860097307,
          12.021364860097307
        ],
        [
          12.139445076203565,
          12.139445076203565
        ],
        [
          12.25811751720369,
          12.25811751720369
        ],
        [
          12.377379319460378,
          12.377379319460378
        ],
        [
          12.497227490258773,
          12.497227490258773
        ],
        [
          12.617658910336711,
          12.617658910336711
        ],
        [
          12.738670336937872,
          12.738670336937872
        ],
        [
          12.86025840742506,
          12.86025840742506
        ],
        [
          12.982419643490498,
          12.982419643490498
        ],
        [
          13.10515045600264,
          13.10515045600264
        ],
        [
          13.228447150530016,
          13.228447150530016
        ],
        [
          13.352305933583558,
          13.352305933583558
        ],
        [
          13.476722919620808,
          13.476722919620808
        ],
        [
          13.601694138856104,
          13.601694138856104
        ],
        [
          13.727215545922121,
          13.727215545922121
        ],
        [
          13.853283029428962,
          13.853283029428962
        ],
        [
          13.979892422468701,
          13.979892422468701
        ],
        [
          14.107039514112547,
          14.107039514112547
        ],
        [
          14.234720061950288,
          14.234720061950288
        ],
        [
          14.362929805720295,
          14.362929805720295
        ],
        [
          14.491664482080445,
          14.491664482080445
        ],
        [
          14.620919840568401,
          14.620919840568401
        ],
        [
          14.750691660802001,
          14.750691660802001
        ],
        [
          14.880975770967588,
          14.880975770967588
        ],
        [
          15.011768067644926,
          15.011768067644926
        ],
        [
          15.143064537016876,
          15.143064537016876
        ],
        [
          15.274861277508865,
          15.274861277508865
        ],
        [
          15.407154523903678,
          15.407154523903678
        ],
        [
          15.539940672973827,
          15.539940672973827
        ],
        [
          15.673216310672132,
          15.673216310672132
        ],
        [
          15.806978240918589,
          15.806978240918589
        ],
        [
          15.941223516017633,
          15.941223516017633
        ],
        [
          16.0759494687384,
          16.0759494687384
        ],
        [
          16.21115374608447,
          16.21115374608447
        ],
        [
          16.34683434477731,
          16.34683434477731
        ],
        [
          16.482989648472003,
          16.482989648472003
        ],
        [
          16.61961846671911,
          16.61961846671911
        ],
        [
          16.756720075681145,
          16.756720075681145
        ],
        [
          16.894294260606344,
          16.894294260606344
        ],
        [
          17.03234136005688,
          17.03234136005688
        ],
        [
          17.170862311880782,
          17.170862311880782
        ],
        [
          17.309858700912468,
          17.309858700912468
        ],
        [
          17.449332808377434,
          17.449332808377434
        ],
        [
          17.589287662971742,
          17.589287662971742
        ],
        [
          17.729727093578198,
          17.729727093578198
        ],
        [
          17.8706557835752,
          17.8706557835752
        ],
        [
          18.012079326685893,
          18.012079326685893
        ],
        [
          18.154004284309483,
          18.154004284309483
        ],
        [
          18.296438244268884,
          18.296438244268884
        ],
        [
          18.439389880903274,
          18.439389880903274
        ],
        [
          18.582869016427406,
          18.582869016427406
        ],
        [
          18.726886683475254,
          18.726886683475254
        ],
        [
          18.87145518874012,
          18.87145518874012
        ],
        [
          19.016588177620388,
          19.016588177620388
        ],
        [
          19.16230069977701,
          19.16230069977701
        ],
        [
          19.308609275507763,
          19.308609275507763
        ],
        [
          19.455531962843388,
          19.455531962843388
        ],
        [
          19.60308842527178,
          19.60308842527178
        ],
        [
          19.7513,
          19.7513
        ]
      ]
    },
    "18A": {
      "label": "D18",
      "values": [
        [
          6.8162,
          6.8162
        ],
        [
          6.9614897587768425,
          6.9614897587768425
        ],
        [
          7.10618537342917,
          7.10618537342917
        ],
        [
          7.250282470577325,
          7.250282470577325
        ],
        [
          7.393776699881556,
          7.393776699881556
        ],
        [
          7.536663733481369,
          7.536663733481369
        ],
        [
          7.6789392654224145,
          7.6789392654224145
        ],
        [
          7.820599011071238,
          7.820599011071238
        ],
        [
          7.961638706518173,
          7.961638706518173
        ],
        [
          8.102054107968513,
          8.102054107968513
        ],
        [
          8.241840991122075,
          8.241840991122075
        ],
        [
          8.38099515054131,
          8.38099515054131
        ],
        [
          8.519512399008455,
          8.519512399008455
        ],
        [
          8.657388566871369,
          8.657388566871369
        ],
        [
          8.794619501378541,
          8.794619501378541
        ],
        [
          8.931201066003432,
          8.931201066003432
        ],
        [
          9.06712913975796,
          9.06712913975796
        ],
        [
          9.202399616495754,
          9.202399616495754
        ],
        [
          9.337008404204788,
          9.337008404204788
        ],
        [
          9.470951424289836,
          9.470951424289836
        ],
        [
          9.604224610844675,
          9.604224610844675
        ],
        [
          9.736823909914229,
          9.736823909914229
        ],
        [
          9.86874527874663,
          9.86874527874663
        ],
        [
          9.999984685035429,
          9.999984685035429
        ],
        [
          10.13053810615164,
          10.13053810615164
        ],
        [
          10.260401528366323,
          10.260401528366323
        ],
        [
          10.389570946062904,
          10.389570946062904
        ],
        [
          10.518042360940086,
          10.518042360940086
        ],
        [
          10.645811781204706,
          10.645811781204706
        ],
        [
          10.77287522075494,
          10.77287522075494
        ],
        [
          10.899228698353745,
          10.899228698353745
        ],
        [
          11.024868236792408,
          11.024868236792408
        ],
        [
          11.149789862044365,
          11.149789862044365
        ],
        [
          11.273989602409038,
          11.273989602409038
        ],
        [
          11.397463487645929,
          11.397463487645929
        ],
        [
          11.52020754809854,
          11.52020754809854
        ],
        [
          11.642217813808344,
          11.642217813808344
        ],
        [
          11.76349031361869,
          11.76349031361869
        ],
        [
          11.884021074268134,
          11.884021074268134
        ],
        [
          12.003806119473857,
          12.003806119473857
        ],
        [
          12.122841469004271,
          12.122841469004271
        ],
        [
          12.241123137741134,
          12.241123137741134
        ],
        [
          12.358647134730823,
          12.358647134730823
        ],
        [
          12.475409462224768,
          12.475409462224768
        ],
        [
          12.591406114708647,
          12.591406114708647
        ],
        [
          12.706633077920294,
          12.706633077920294
        ],
        [
          12.8210863278561,
          12.8210863278561
        ],
        [
          12.93476182976574,
          12.93476182976574
        ],
        [
          13.047655537134723,
          13.047655537134723
        ],
        [
          13.159763390654824,
          13.159763390654824
        ],
        [
          13.27108131718201,
          13.27108131718201
        ],
        [
          13.381605228681472,
          13.381605228681472
        ],
        [
          13.491331021159674,
          13.491331021159674
        ],
        [
          13.600254573582859,
          13.600254573582859
        ],
        [
          13.708371746781829,
          13.708371746781829
        ],
        [
          13.815678382342632,
          13.815678382342632
        ],
        [
          13.922170301482794,
          13.922170301482794
        ],
        [
          14.027843303912483,
          14.027843303912483
        ],
        [
          14.132693166680575,
          14.132693166680575
        ],
        [
          14.236715643004885,
          14.236715643004885
        ],
        [
          14.339906461086244,
          14.339906461086244
        ],
        [
          14.442261322905864,
          14.442261322905864
        ],
        [
          14.543775903005596,
          14.543775903005596
        ],
        [
          14.644445847250509,
          14.644445847250509
        ],
        [
          14.744266771573194,
          14.744266771573194
        ],
        [
          14.843234260699404,
          14.843234260699404
        ],
        [
          14.941343866854133,
          14.941343866854133
        ],
        [
          15.038591108447854,
          15.038591108447854
        ],
        [
          15.134971468742101,
          15.134971468742101
        ],
        [
          15.230480394493647,
          15.230480394493647
        ],
        [
          15.32511329457678,
          15.32511329457678
        ],
        [
          15.418865538582782,
          15.418865538582782
        ],
        [
          15.511732455395936,
          15.511732455395936
        ],
        [
          15.603709331745307,
          15.603709331745307
        ],
        [
          15.694791410731199,
          15.694791410731199
        ],
        [
          15.784973890325926,
          15.784973890325926
        ],
        [
          15.874251921847566,
          15.874251921847566
        ],
        [
          15.96262060840591,
          15.96262060840591
        ],
        [
          16.050075003319677,
          16.050075003319677
        ],
        [
          16.136610108504012,
          16.136610108504012
        ],
        [
          16.222220872827105,
          16.222220872827105
        ],
        [
          16.306902190434915,
          16.306902190434915
        ],
        [
          16.390648899042766,
          16.390648899042766
        ],
        [
          16.473455778192854,
          16.473455778192854
        ],
        [
          16.555317547476196,
          16.555317547476196
        ],
        [
          16.636228864717808,
          16.636228864717808
        ],
        [
          16.716184324123734,
          16.716184324123734
        ],
        [
          16.795178454388765,
          16.795178454388765
        ],
        [
          16.873205716762975,
          16.873205716762975
        ],
        [
          16.95026050307597,
          16.95026050307597
        ],
        [
          17.02633713371703,
          17.02633713371703
        ],
        [
          17.1014298555695,
          17.1014298555695
        ],
        [
          17.175532839897905,
          17.175532839897905
        ],
        [
          17.248640180185784,
          17.248640180185784
        ],
        [
          17.320745889922463,
          17.320745889922463
        ],
        [
          17.391843900336852,
          17.391843900336852
        ],
        [
          17.461928058076246,
          17.461928058076246
        ],
        [
          17.530992122827836,
          17.530992122827836
        ],
        [
          17.59902976488102,
          17.59902976488102
        ],
        [
          17.666034562627956,
          17.666034562627956
        ],
        [
          17.732,
          17.732
        ],
        [
          17.79692201584564,
          17.79692201584564
        ],
        [
          17.8605190033491,
          17.8605190033491
        ],
        [
          17.922788028493493,
          17.922788028493493
        ],
        [
          17.983726073119033,
          17.983726073119033
        ],
        [
          18.043330032400313,
          18.043330032400313
        ],
        [
          18.10159671230789,
          18.10159671230789
        ],
        [
          18.15852282705344,
          18.15852282705344
        ],
        [
          18.21410499651735,
          18.21410499651735
        ],
        [
          18.268339743657773,
          18.268339743657773
        ],
        [
          18.32122349190018,
          18.32122349190018
        ],
        [
          18.37275256250619,
          18.37275256250619
        ],
        [
          18.422923171920612,
          18.422923171920612
        ],
        [
          18.471731429095605,
          18.471731429095605
        ],
        [
          18.519173332790466,
          18.519173332790466
        ],
        [
          18.565244768846277,
          18.565244768846277
        ],
        [
          18.60994150743367,
          18.60994150743367
        ],
        [
          18.653259200272785,
          18.653259200272785
        ],
        [
          18.695193377823898,
          18.695193377823898
        ],
        [
          18.73573944644753,
          18.73573944644753
        ],
        [
          18.77489268553245,
          18.77489268553245
        ],
        [
          18.812648244590637,
          18.812648244590637
        ],
        [
          18.849001140317306,
          18.849001140317306
        ],
        [
          18.88394625361501,
          18.88394625361501
        ],
        [
          18.917478326580248,
          18.917478326580248
        ],
        [
          18.949591959451222,
          18.949591959451222
        ],
        [
          18.980281607515472,
          18.980281607515472
        ],
        [
          19.009541577975824,
          19.009541577975824
        ],
        [
          19.037366026773427,
          19.037366026773427
        ],
        [
          19.06374895536664,
          19.06374895536664
        ],
        [
          19.08868420746426,
          19.08868420746426
        ],
        [
          19.11216546571206,
          19.11216546571206
        ],
        [
          19.134186248331254,
          19.134186248331254
        ],
        [
          19.154739905707963,
          19.154739905707963
        ],
        [
          19.173819616932324,
          19.173819616932324
        ],
        [
          19.191549674290563,
          19.191549674290563
        ],
        [
          19.20883840009385,
          19.20883840009385
        ],
        [
          19.2258674524987,
          19.2258674524987
        ],
        [
          19.242645314411515,
          19.242645314411515
        ],
        [
          19.25918057757122,
          19.25918057757122
        ],
        [
          19.27548193958368,
          19.27548193958368
        ],
        [
          19.291558200427925,
          19.291558200427925
        ],
        [
          19.307418258400887,
          19.307418258400887
        ],
        [
          19.32307110546669,
          19.32307110546669
        ],
        [
          19.33852582197487,
          19.33852582197487
        ],
        [
          19.35379157071026,
          19.35379157071026
        ],
        [
          19.368877590236863,
          19.368877590236863
        ],
        [
          19.38379318749534,
          19.38379318749534
        ],
        [
          19.398547729614112,
          19.398547729614112
        ],
        [
          19.413150634891043,
          19.413150634891043
        ],
        [
          19.427611362903182,
          19.427611362903182
        ],
        [
          19.44193940369991,
          19.44193940369991
        ],
        [
          19.45614426603404,
          19.45614426603404
        ],
        [
          19.470235464584928,
          19.470235464584928
        ],
        [
          19.48422250612627,
          19.48422250612627
        ],
        [
          19.498114874591057,
          19.498114874591057
        ],
        [
          19.511922014985597,
          19.511922014985597
        ],
        [
          19.525653316104094,
          19.525653316104094
        ],
        [
          19.539318091994893,
          19.539318091994893
        ],
        [
          19.552925562130646,
          19.552925562130646
        ],
        [
          19.5664848302332,
          19.5664848302332
        ],
        [
          19.580004861706776,
          19.580004861706776
        ],
        [
          19.593494459631444,
          19.593494459631444
        ],
        [
          19.606962239272896,
          19.606962239272896
        ],
        [
          19.620416601062754,
          19.620416601062754
        ],
        [
          19.63386570200861,
          19.63386570200861
        ],
        [
          19.647317425493373,
          19.647317425493373
        ],
        [
          19.660779349426004,
          19.660779349426004
        ],
        [
          19.674258712710373,
          19.674258712710373
        ],
        [
          19.68776238000038,
          19.68776238000038
        ],
        [
          19.7012968047151,
          19.7012968047151
        ],
        [
          19.714867990291083,
          19.714867990291083
        ],
        [
          19.728481449653938,
          19.728481449653938
        ],
        [
          19.74214216289761,
          19.74214216289761
        ],
        [
          19.755854533163767,
          19.755854533163767
        ],
        [
          19.76962234072224,
          19.76962234072224
        ],
        [
          19.78344869525859,
          19.78344869525859
        ],
        [
          19.797335986382954,
          19.797335986382954
        ],
        [
          19.81128583238206,
          19.81128583238206
        ],
        [
          19.825299027244515,
          19.825299027244515
        ],
        [
          19.839375485997987,
          19.839375485997987
        ],
        [
          19.853514188405573,
          19.853514188405573
        ],
        [
          19.867713121079372,
          19.867713121079372
        ],
        [
          19.88196921807655,
          19.88196921807655
        ],
        [
          19.896278300055695,
          19.896278300055695
        ],
        [
          19.910635012078533,
          19.910635012078533
        ],
        [
          19.92503276015428,
          19.92503276015428
        ],
        [
          19.93946364663206,
          19.93946364663206
        ],
        [
          19.953918404557783,
          19.953918404557783
        ],
        [
          19.968386331120445,
          19.968386331120445
        ],
        [
          19.982855220322346,
          19.982855220322346
        ],
        [
          19.99731129501549,
          19.99731129501549
        ],
        [
          20.011739138455212,
          20.011739138455212
        ],
        [
          20.026121625527598,
          20.026121625527598
        ],
        [
          20.040439853813947,
          20.040439853813947
        ],
        [
          20.05467307465983,
          20.05467307465983
        ],
        [
          20.068798624419262,
          20.068798624419262
        ],
        [
          20.082791856046406,
          20.082791856046406
        ],
        [
          20.09662607120657,
          20.09662607120657
        ],
        [
          20.11027245307657,
          20.11027245307657
        ],
        [
          20.1237,
          20.1237
        ]
      ]
    }
  },
  "aperture": {
    "fStops": [
      3.64,
      4,
      5.21,
      5.6,
      6.48,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22
  },
  "rearPlates": [
    {
      "label": "C",
      "thicknessMm": 4.08,
      "nd": 1.51633,
      "vd": 64.14,
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "gapAfterMm": 0.745,
      "source": "JP 2012-173420 A Numerical Example 2, surfaces 21–22: camera-side plate C (¶0121) at its printed thickness and image gap"
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
      "toSurface": "8"
    },
    {
      "text": "G3",
      "fromSurface": "9A",
      "toSurface": "14"
    },
    {
      "text": "G4",
      "fromSurface": "15",
      "toSurface": "18A"
    },
    {
      "text": "G5",
      "fromSurface": "19",
      "toSurface": "20"
    }
  ],
  "doublets": [
    {
      "text": "L6",
      "fromSurface": "12",
      "toSurface": "14"
    }
  ],
  "layout": {
    "yScFill": 0.3
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
