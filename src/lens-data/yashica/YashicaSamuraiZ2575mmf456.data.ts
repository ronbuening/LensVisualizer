import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "yashica-samurai-z-25-75mm-f4-56",
  "maker": "Yashica",
  "name": "YASHICA ZOOM 25-75mm f/4-5.6 (Yashica Samurai Z)",
  "subtitle": "JP 2706781 B2, Sole example — Kyocera Corporation",
  "catalog": {
    "lensMounts": [
      "fixed-lens-camera"
    ],
    "imageFormat": "half-frame-135",
    "specs": [
      "12 ELEMENTS / 10 GROUPS",
      "DESIGN f = 25.78–73.05 mm",
      "DESIGN F/4–5.6",
      "ALL SPHERICAL",
      "17 × 24 mm FRAME"
    ],
    "elementCount": 12,
    "groupCount": 10,
    "focalLengthMm": {
      "marketing": [
        25,
        75
      ],
      "design": [
        25.82060779338001,
        73.06394060538716
      ]
    },
    "fNumber": {
      "marketing": 4,
      "design": 4
    }
  },
  "source": {
    "patentNumber": "JP 2706781 B2",
    "example": { "label": "Sole example", "id": null },
    "patentYear": 1998,
    "authors": [
      "Eiki Matsuo",
      "Hiroyuki Minagawa",
      "Jun Ogawa"
    ],
    "assignees": [
      "Kyocera Corporation"
    ],
    "errata": [
      {
        "status": "unresolved",
        "note": "The B2 table header ‘nb’ is read as nd, as labeled in the matching A publication. The printed focal lengths are 25.78/73.05 mm; the calculated values are 25.82061/73.06394 mm. The printed image gaps of 41.4/62.7 mm are retained, leaving −0.16646/−0.07946 mm of paraxial defocus. No printed numerical value is changed or rescaled."
      }
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "d",
      "focalLengthMm": -66.458858447,
      "glass": "K-SFLD6 (SUMITA catalog-equivalent class; supplier unconfirmed)",
      "role": "Negative flint front member of G1 cemented pair.",
      "cemented": "D1",
      "nC": 1.79610255289,
      "nF": 1.82779673282,
      "ng": 1.84730936544
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.53172,
      "vd": 48.9,
      "indexReference": "d",
      "focalLengthMm": 45.47821397,
      "glass": "LLF6 (SUMITA catalog-equivalent class; supplier unconfirmed)",
      "role": "Positive low-index partner of the G1 pair.",
      "cemented": "D1",
      "nC": 1.52845717918,
      "nF": 1.5393369739,
      "ng": 1.54543474302
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.48749,
      "vd": 70.1,
      "indexReference": "d",
      "focalLengthMm": 82.618336446,
      "glass": "FSL5 (OHARA catalog-equivalent class; supplier unconfirmed)",
      "role": "Air-separated positive G1 crown meniscus.",
      "nC": 1.48534556579,
      "nF": 1.49228884699,
      "ng": 1.49596655459
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus",
      "nd": 1.834,
      "vd": 37.2,
      "indexReference": "d",
      "focalLengthMm": -17.165546628,
      "glass": "LASFN14 (SUMITA catalog-equivalent class; supplier unconfirmed)",
      "role": "Object-convex negative front singlet of G2.",
      "nC": 1.82739334262,
      "nF": 1.84981350881,
      "ng": 1.86277011639
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.60342,
      "vd": 38,
      "indexReference": "d",
      "focalLengthMm": -12.855977241,
      "glass": "F5 (SUMITA catalog-equivalent class; supplier unconfirmed)",
      "role": "Negative flint member of the central G2 cemented pair.",
      "cemented": "D2",
      "nC": 1.59874156012,
      "nF": 1.6146118859,
      "ng": 1.62380085212
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.84666,
      "vd": 23.9,
      "indexReference": "d",
      "focalLengthMm": 10.487891888,
      "glass": "SFLDN3 (SUMITA catalog-equivalent class; supplier unconfirmed)",
      "role": "Positive high-index flint partner of the G2 pair; pair net positive in air.",
      "cemented": "D2",
      "nC": 1.83654083577,
      "nF": 1.87198539009,
      "ng": 1.89399989008
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Negative Meniscus",
      "nd": 1.834,
      "vd": 37.2,
      "indexReference": "d",
      "focalLengthMm": -29.597890868,
      "glass": "LASFN14 (SUMITA catalog-equivalent class; supplier unconfirmed)",
      "role": "Image-convex negative rear singlet of G2.",
      "nC": 1.82739334262,
      "nF": 1.84981350881,
      "ng": 1.86277011639
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.5927,
      "vd": 35.3,
      "indexReference": "d",
      "focalLengthMm": 25.503236911,
      "glass": "E-F16 (HIKARI catalog-equivalent class; supplier unconfirmed)",
      "role": "First positive rear-group singlet, immediately after the source stop.",
      "nC": 1.58779167412,
      "nF": 1.60458256734,
      "ng": 1.61453978601
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Biconvex Positive",
      "nd": 1.56883,
      "vd": 56.3,
      "indexReference": "d",
      "focalLengthMm": 39.93495158,
      "glass": "E-BAK4 (HIKARI catalog-equivalent class; supplier unconfirmed)",
      "role": "Second positive rear-group singlet.",
      "nC": 1.5657742327,
      "nF": 1.57587095328,
      "ng": 1.581412029
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Biconcave Negative",
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "d",
      "focalLengthMm": -14.11000898,
      "glass": "K-SFLD6 (SUMITA catalog-equivalent class; supplier unconfirmed)",
      "role": "Thick biconcave flint required by patent d18/f3 condition.",
      "nC": 1.79610255289,
      "nF": 1.82779673282,
      "ng": 1.84730936544
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Positive Meniscus",
      "nd": 1.51112,
      "vd": 60.5,
      "indexReference": "d",
      "focalLengthMm": 42.989721813,
      "glass": "K7 (SUMITA catalog-equivalent class; supplier unconfirmed)",
      "role": "Weak-front positive meniscus; curved rear faces image.",
      "nC": 1.50854340915,
      "nF": 1.5169997351,
      "ng": 1.52160092533
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "type": "Biconvex Positive",
      "nd": 1.51112,
      "vd": 60.5,
      "indexReference": "d",
      "focalLengthMm": 41.010393587,
      "glass": "K7 (SUMITA catalog-equivalent class; supplier unconfirmed)",
      "role": "Biconvex final positive singlet.",
      "nC": 1.50854340915,
      "nF": 1.5169997351,
      "ng": 1.52160092533
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 107.06,
      "d": 1.2,
      "sd": 14.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 35.5,
      "d": 6.6,
      "sd": 14.5,
      "medium": 2
    },
    {
      "label": "3",
      "R": -70.951,
      "d": 0.15,
      "sd": 14.5
    },
    {
      "label": "4",
      "R": 21.744,
      "d": 3.2,
      "sd": 12.5,
      "medium": 3
    },
    {
      "label": "5",
      "R": 44.978,
      "sd": 12.5
    },
    {
      "label": "6",
      "R": 40.883,
      "d": 0.9,
      "sd": 7.5,
      "medium": 4
    },
    {
      "label": "7",
      "R": 10.497,
      "d": 3.3,
      "sd": 6.4
    },
    {
      "label": "8",
      "R": -27.973,
      "d": 0.8,
      "sd": 6.4,
      "medium": 5
    },
    {
      "label": "9",
      "R": 10.85,
      "d": 3.5,
      "sd": 6.4,
      "medium": 6
    },
    {
      "label": "10",
      "R": -41.666,
      "d": 0.72,
      "sd": 6.4
    },
    {
      "label": "11",
      "R": -15.759,
      "d": 0.8,
      "sd": 5.5,
      "medium": 7
    },
    {
      "label": "12",
      "R": -44.589,
      "sd": 5.8
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1
    },
    {
      "label": "14",
      "R": 19.145,
      "d": 2.3,
      "sd": 6.2,
      "medium": 8
    },
    {
      "label": "15",
      "R": -68.612,
      "d": 0.15,
      "sd": 6.2
    },
    {
      "label": "16",
      "R": 23.925,
      "d": 2,
      "sd": 6.2,
      "medium": 9
    },
    {
      "label": "17",
      "R": -435.979,
      "d": 0.5,
      "sd": 5.43
    },
    {
      "label": "18",
      "R": -30.758,
      "d": 6,
      "sd": 5.43,
      "medium": 10
    },
    {
      "label": "19",
      "R": 19.583,
      "d": 0.9,
      "sd": 5.5
    },
    {
      "label": "20",
      "R": -1011.23,
      "d": 2,
      "sd": 6.8,
      "medium": 11
    },
    {
      "label": "21",
      "R": -21.52,
      "d": 0.15,
      "sd": 6.8
    },
    {
      "label": "22",
      "R": 49.078,
      "d": 2.3,
      "sd": 8,
      "medium": 12
    },
    {
      "label": "23",
      "R": -36.008,
      "sd": 8
    }
  ],
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 25.78,
        "nominalFNumber": 4,
        "label": "Wide25.78mm",
        "published": true
      },
      {
        "published": false,
        "focalLengthMm": 25.933829063502458,
        "nominalFNumber": 4.008
      },
      {
        "published": false,
        "focalLengthMm": 26.04774848501411,
        "nominalFNumber": 4.016
      },
      {
        "published": false,
        "focalLengthMm": 26.162371356439518,
        "nominalFNumber": 4.024
      },
      {
        "published": false,
        "focalLengthMm": 26.277703021200214,
        "nominalFNumber": 4.032
      },
      {
        "published": false,
        "focalLengthMm": 26.393748867989437,
        "nominalFNumber": 4.04
      },
      {
        "published": false,
        "focalLengthMm": 26.510514331148965,
        "nominalFNumber": 4.048
      },
      {
        "published": false,
        "focalLengthMm": 26.628004891047972,
        "nominalFNumber": 4.056
      },
      {
        "published": false,
        "focalLengthMm": 26.746226074464026,
        "nominalFNumber": 4.064
      },
      {
        "published": false,
        "focalLengthMm": 26.865183454965848,
        "nominalFNumber": 4.072
      },
      {
        "published": false,
        "focalLengthMm": 26.98488265329816,
        "nominalFNumber": 4.08
      },
      {
        "published": false,
        "focalLengthMm": 27.105329337768506,
        "nominalFNumber": 4.088
      },
      {
        "published": false,
        "focalLengthMm": 27.226529224635826,
        "nominalFNumber": 4.096
      },
      {
        "published": false,
        "focalLengthMm": 27.34848807850095,
        "nominalFNumber": 4.104
      },
      {
        "published": false,
        "focalLengthMm": 27.471211712698878,
        "nominalFNumber": 4.112
      },
      {
        "published": false,
        "focalLengthMm": 27.594705989692812,
        "nominalFNumber": 4.12
      },
      {
        "published": false,
        "focalLengthMm": 27.71897682146987,
        "nominalFNumber": 4.128
      },
      {
        "published": false,
        "focalLengthMm": 27.844030169938534,
        "nominalFNumber": 4.136
      },
      {
        "published": false,
        "focalLengthMm": 27.96987204732776,
        "nominalFNumber": 4.144
      },
      {
        "published": false,
        "focalLengthMm": 28.096508516587328,
        "nominalFNumber": 4.152
      },
      {
        "published": false,
        "focalLengthMm": 28.223945691790195,
        "nominalFNumber": 4.16
      },
      {
        "published": false,
        "focalLengthMm": 28.352189738535973,
        "nominalFNumber": 4.168
      },
      {
        "published": false,
        "focalLengthMm": 28.48124687435575,
        "nominalFNumber": 4.176
      },
      {
        "published": false,
        "focalLengthMm": 28.61112336911854,
        "nominalFNumber": 4.184
      },
      {
        "published": false,
        "focalLengthMm": 28.741825545438733,
        "nominalFNumber": 4.192
      },
      {
        "published": false,
        "focalLengthMm": 28.873359779084783,
        "nominalFNumber": 4.2
      },
      {
        "published": false,
        "focalLengthMm": 29.00573249938918,
        "nominalFNumber": 4.208
      },
      {
        "published": false,
        "focalLengthMm": 29.13895018965929,
        "nominalFNumber": 4.216
      },
      {
        "published": false,
        "focalLengthMm": 29.273019387589198,
        "nominalFNumber": 4.224
      },
      {
        "published": false,
        "focalLengthMm": 29.407946685672616,
        "nominalFNumber": 4.232
      },
      {
        "published": false,
        "focalLengthMm": 29.543738731616383,
        "nominalFNumber": 4.24
      },
      {
        "published": false,
        "focalLengthMm": 29.680402228754602,
        "nominalFNumber": 4.248
      },
      {
        "published": false,
        "focalLengthMm": 29.817943936464022,
        "nominalFNumber": 4.256
      },
      {
        "published": false,
        "focalLengthMm": 29.95637067057902,
        "nominalFNumber": 4.264
      },
      {
        "published": false,
        "focalLengthMm": 30.095689303807845,
        "nominalFNumber": 4.272
      },
      {
        "published": false,
        "focalLengthMm": 30.235906766148755,
        "nominalFNumber": 4.28
      },
      {
        "published": false,
        "focalLengthMm": 30.377030045306494,
        "nominalFNumber": 4.288
      },
      {
        "published": false,
        "focalLengthMm": 30.51906618710891,
        "nominalFNumber": 4.296
      },
      {
        "published": false,
        "focalLengthMm": 30.662022295923546,
        "nominalFNumber": 4.304
      },
      {
        "published": false,
        "focalLengthMm": 30.80590553507417,
        "nominalFNumber": 4.312
      },
      {
        "published": false,
        "focalLengthMm": 30.950723127257042,
        "nominalFNumber": 4.32
      },
      {
        "published": false,
        "focalLengthMm": 31.096482354956684,
        "nominalFNumber": 4.328
      },
      {
        "published": false,
        "focalLengthMm": 31.24319056086152,
        "nominalFNumber": 4.336
      },
      {
        "published": false,
        "focalLengthMm": 31.390855148278476,
        "nominalFNumber": 4.344
      },
      {
        "published": false,
        "focalLengthMm": 31.539483581546985,
        "nominalFNumber": 4.352
      },
      {
        "published": false,
        "focalLengthMm": 31.689083386452094,
        "nominalFNumber": 4.36
      },
      {
        "published": false,
        "focalLengthMm": 31.839662150636453,
        "nominalFNumber": 4.368
      },
      {
        "published": false,
        "focalLengthMm": 31.991227524011112,
        "nominalFNumber": 4.376
      },
      {
        "published": false,
        "focalLengthMm": 32.14378721916486,
        "nominalFNumber": 4.384
      },
      {
        "published": false,
        "focalLengthMm": 32.297349011772,
        "nominalFNumber": 4.392
      },
      {
        "published": false,
        "focalLengthMm": 32.45192074099852,
        "nominalFNumber": 4.4
      },
      {
        "published": false,
        "focalLengthMm": 32.60751030990603,
        "nominalFNumber": 4.408
      },
      {
        "published": false,
        "focalLengthMm": 32.764125685853934,
        "nominalFNumber": 4.416
      },
      {
        "published": false,
        "focalLengthMm": 32.9217749008992,
        "nominalFNumber": 4.424
      },
      {
        "published": false,
        "focalLengthMm": 33.080466052193394,
        "nominalFNumber": 4.432
      },
      {
        "published": false,
        "focalLengthMm": 33.2402073023774,
        "nominalFNumber": 4.44
      },
      {
        "published": false,
        "focalLengthMm": 33.40100687997261,
        "nominalFNumber": 4.448
      },
      {
        "published": false,
        "focalLengthMm": 33.56287307976987,
        "nominalFNumber": 4.4559999999999995
      },
      {
        "published": false,
        "focalLengthMm": 33.725814263214104,
        "nominalFNumber": 4.464
      },
      {
        "published": false,
        "focalLengthMm": 33.88983885878585,
        "nominalFNumber": 4.4719999999999995
      },
      {
        "published": false,
        "focalLengthMm": 34.05495536237892,
        "nominalFNumber": 4.48
      },
      {
        "published": false,
        "focalLengthMm": 34.22117233767362,
        "nominalFNumber": 4.4879999999999995
      },
      {
        "published": false,
        "focalLengthMm": 34.388498416506096,
        "nominalFNumber": 4.496
      },
      {
        "published": false,
        "focalLengthMm": 34.556942299232496,
        "nominalFNumber": 4.504
      },
      {
        "published": false,
        "focalLengthMm": 34.72651275508862,
        "nominalFNumber": 4.5120000000000005
      },
      {
        "published": false,
        "focalLengthMm": 34.897218622544194,
        "nominalFNumber": 4.52
      },
      {
        "published": false,
        "focalLengthMm": 35.0690688096515,
        "nominalFNumber": 4.5280000000000005
      },
      {
        "published": false,
        "focalLengthMm": 35.242072294388564,
        "nominalFNumber": 4.536
      },
      {
        "published": false,
        "focalLengthMm": 35.41623812499583,
        "nominalFNumber": 4.5440000000000005
      },
      {
        "published": false,
        "focalLengthMm": 35.59157542030655,
        "nominalFNumber": 4.552
      },
      {
        "published": false,
        "focalLengthMm": 35.76809337007044,
        "nominalFNumber": 4.56
      },
      {
        "published": false,
        "focalLengthMm": 35.94580123527016,
        "nominalFNumber": 4.568
      },
      {
        "published": false,
        "focalLengthMm": 36.124708348430104,
        "nominalFNumber": 4.576
      },
      {
        "published": false,
        "focalLengthMm": 36.3048241139177,
        "nominalFNumber": 4.584
      },
      {
        "published": false,
        "focalLengthMm": 36.486158008236146,
        "nominalFNumber": 4.592
      },
      {
        "published": false,
        "focalLengthMm": 36.66871958030865,
        "nominalFNumber": 4.6
      },
      {
        "published": false,
        "focalLengthMm": 36.852518451753745,
        "nominalFNumber": 4.6080000000000005
      },
      {
        "published": false,
        "focalLengthMm": 37.037564317150824,
        "nominalFNumber": 4.616
      },
      {
        "published": false,
        "focalLengthMm": 37.22386694429624,
        "nominalFNumber": 4.6240000000000006
      },
      {
        "published": false,
        "focalLengthMm": 37.41143617444869,
        "nominalFNumber": 4.632
      },
      {
        "published": false,
        "focalLengthMm": 37.60028192256409,
        "nominalFNumber": 4.640000000000001
      },
      {
        "published": false,
        "focalLengthMm": 37.79041417751903,
        "nominalFNumber": 4.648
      },
      {
        "published": false,
        "focalLengthMm": 37.98184300232278,
        "nominalFNumber": 4.656
      },
      {
        "published": false,
        "focalLengthMm": 38.1745785343167,
        "nominalFNumber": 4.664
      },
      {
        "published": false,
        "focalLengthMm": 38.368630985361264,
        "nominalFNumber": 4.672
      },
      {
        "published": false,
        "focalLengthMm": 38.564010642009606,
        "nominalFNumber": 4.68
      },
      {
        "published": false,
        "focalLengthMm": 38.76072786566752,
        "nominalFNumber": 4.688
      },
      {
        "published": false,
        "focalLengthMm": 38.958793092738894,
        "nominalFNumber": 4.696
      },
      {
        "published": false,
        "focalLengthMm": 39.15821683475613,
        "nominalFNumber": 4.704
      },
      {
        "published": false,
        "focalLengthMm": 39.35900967849567,
        "nominalFNumber": 4.712
      },
      {
        "published": false,
        "focalLengthMm": 39.561182286076466,
        "nominalFNumber": 4.72
      },
      {
        "published": false,
        "focalLengthMm": 39.76474539504261,
        "nominalFNumber": 4.728
      },
      {
        "published": false,
        "focalLengthMm": 39.96970981842803,
        "nominalFNumber": 4.736
      },
      {
        "published": false,
        "focalLengthMm": 40.17608644480338,
        "nominalFNumber": 4.744
      },
      {
        "published": false,
        "focalLengthMm": 40.383886238304115,
        "nominalFNumber": 4.752
      },
      {
        "published": false,
        "focalLengthMm": 40.593120238639415,
        "nominalFNumber": 4.76
      },
      {
        "published": false,
        "focalLengthMm": 40.80379956108051,
        "nominalFNumber": 4.768
      },
      {
        "published": false,
        "focalLengthMm": 41.01593539642873,
        "nominalFNumber": 4.776
      },
      {
        "published": false,
        "focalLengthMm": 41.22953901096131,
        "nominalFNumber": 4.784
      },
      {
        "published": false,
        "focalLengthMm": 41.44462174635556,
        "nominalFNumber": 4.792
      },
      {
        "published": false,
        "focalLengthMm": 41.66119501958914,
        "nominalFNumber": 4.8
      },
      {
        "published": false,
        "focalLengthMm": 41.879270322816645,
        "nominalFNumber": 4.808
      },
      {
        "published": false,
        "focalLengthMm": 42.098859223221304,
        "nominalFNumber": 4.816
      },
      {
        "published": false,
        "focalLengthMm": 42.31997336284124,
        "nominalFNumber": 4.824
      },
      {
        "published": false,
        "focalLengthMm": 42.54262445836851,
        "nominalFNumber": 4.832
      },
      {
        "published": false,
        "focalLengthMm": 42.76682430092125,
        "nominalFNumber": 4.84
      },
      {
        "published": false,
        "focalLengthMm": 42.99258475578695,
        "nominalFNumber": 4.848
      },
      {
        "published": false,
        "focalLengthMm": 43.21991776213643,
        "nominalFNumber": 4.856
      },
      {
        "published": false,
        "focalLengthMm": 43.44883533270778,
        "nominalFNumber": 4.864
      },
      {
        "published": false,
        "focalLengthMm": 43.67934955345808,
        "nominalFNumber": 4.872
      },
      {
        "published": false,
        "focalLengthMm": 43.911472583183446,
        "nominalFNumber": 4.88
      },
      {
        "published": false,
        "focalLengthMm": 44.14521665310529,
        "nominalFNumber": 4.888
      },
      {
        "published": false,
        "focalLengthMm": 44.380594066421736,
        "nominalFNumber": 4.896
      },
      {
        "published": false,
        "focalLengthMm": 44.61761719782353,
        "nominalFNumber": 4.904
      },
      {
        "published": false,
        "focalLengthMm": 44.85629849297317,
        "nominalFNumber": 4.912
      },
      {
        "published": false,
        "focalLengthMm": 45.09665046794557,
        "nominalFNumber": 4.92
      },
      {
        "published": false,
        "focalLengthMm": 45.33868570862988,
        "nominalFNumber": 4.928
      },
      {
        "published": false,
        "focalLengthMm": 45.582416870090455,
        "nominalFNumber": 4.936
      },
      {
        "published": false,
        "focalLengthMm": 45.82785667588613,
        "nominalFNumber": 4.944
      },
      {
        "published": false,
        "focalLengthMm": 46.07501791734648,
        "nominalFNumber": 4.952
      },
      {
        "published": false,
        "focalLengthMm": 46.32391345280352,
        "nominalFNumber": 4.96
      },
      {
        "published": false,
        "focalLengthMm": 46.57455620677751,
        "nominalFNumber": 4.968
      },
      {
        "published": false,
        "focalLengthMm": 46.82695916911594,
        "nominalFNumber": 4.976
      },
      {
        "published": false,
        "focalLengthMm": 47.08113539408313,
        "nominalFNumber": 4.984
      },
      {
        "published": false,
        "focalLengthMm": 47.337097999400555,
        "nominalFNumber": 4.992
      },
      {
        "published": false,
        "focalLengthMm": 47.5948601652348,
        "nominalFNumber": 5
      },
      {
        "published": false,
        "focalLengthMm": 47.85443513313285,
        "nominalFNumber": 5.008
      },
      {
        "published": false,
        "focalLengthMm": 48.11583620490215,
        "nominalFNumber": 5.016
      },
      {
        "published": false,
        "focalLengthMm": 48.379076741434766,
        "nominalFNumber": 5.024
      },
      {
        "published": false,
        "focalLengthMm": 48.6441701614729,
        "nominalFNumber": 5.032
      },
      {
        "published": false,
        "focalLengthMm": 48.91112994031526,
        "nominalFNumber": 5.04
      },
      {
        "published": false,
        "focalLengthMm": 49.179969608461604,
        "nominalFNumber": 5.048
      },
      {
        "published": false,
        "focalLengthMm": 49.450702750193955,
        "nominalFNumber": 5.056
      },
      {
        "published": false,
        "focalLengthMm": 49.72334300209294,
        "nominalFNumber": 5.064
      },
      {
        "published": false,
        "focalLengthMm": 49.997904051487126,
        "nominalFNumber": 5.072
      },
      {
        "published": false,
        "focalLengthMm": 50.274399634833394,
        "nominalFNumber": 5.08
      },
      {
        "published": false,
        "focalLengthMm": 50.5528435360268,
        "nominalFNumber": 5.088
      },
      {
        "published": false,
        "focalLengthMm": 50.8332495846373,
        "nominalFNumber": 5.096
      },
      {
        "published": false,
        "focalLengthMm": 51.115631654071876,
        "nominalFNumber": 5.104
      },
      {
        "published": false,
        "focalLengthMm": 51.40000365966007,
        "nominalFNumber": 5.112
      },
      {
        "published": false,
        "focalLengthMm": 51.68637955665967,
        "nominalFNumber": 5.12
      },
      {
        "published": false,
        "focalLengthMm": 51.97477333818243,
        "nominalFNumber": 5.128
      },
      {
        "published": false,
        "focalLengthMm": 52.26519903303524,
        "nominalFNumber": 5.136
      },
      {
        "published": false,
        "focalLengthMm": 52.55767070347656,
        "nominalFNumber": 5.144
      },
      {
        "published": false,
        "focalLengthMm": 52.852202442884476,
        "nominalFNumber": 5.152
      },
      {
        "published": false,
        "focalLengthMm": 53.148808373334546,
        "nominalFNumber": 5.16
      },
      {
        "published": false,
        "focalLengthMm": 53.44750264308522,
        "nominalFNumber": 5.168
      },
      {
        "published": false,
        "focalLengthMm": 53.74829942396765,
        "nominalFNumber": 5.176
      },
      {
        "published": false,
        "focalLengthMm": 54.05121290867835,
        "nominalFNumber": 5.184
      },
      {
        "published": false,
        "focalLengthMm": 54.35625730797156,
        "nominalFNumber": 5.192
      },
      {
        "published": false,
        "focalLengthMm": 54.663446847748716,
        "nominalFNumber": 5.2
      },
      {
        "published": false,
        "focalLengthMm": 54.97279576604273,
        "nominalFNumber": 5.208
      },
      {
        "published": false,
        "focalLengthMm": 55.28431830989414,
        "nominalFNumber": 5.216
      },
      {
        "published": false,
        "focalLengthMm": 55.598028732116255,
        "nominalFNumber": 5.224
      },
      {
        "published": false,
        "focalLengthMm": 55.91394128794708,
        "nominalFNumber": 5.232
      },
      {
        "published": false,
        "focalLengthMm": 56.232070231584274,
        "nominalFNumber": 5.24
      },
      {
        "published": false,
        "focalLengthMm": 56.552429812601275,
        "nominalFNumber": 5.248
      },
      {
        "published": false,
        "focalLengthMm": 56.87503427224089,
        "nominalFNumber": 5.256
      },
      {
        "published": false,
        "focalLengthMm": 57.199897839583514,
        "nominalFNumber": 5.264
      },
      {
        "published": false,
        "focalLengthMm": 57.527034727587235,
        "nominalFNumber": 5.272
      },
      {
        "published": false,
        "focalLengthMm": 57.856459128996434,
        "nominalFNumber": 5.28
      },
      {
        "published": false,
        "focalLengthMm": 58.18818521211607,
        "nominalFNumber": 5.288
      },
      {
        "published": false,
        "focalLengthMm": 58.52222711644747,
        "nominalFNumber": 5.296
      },
      {
        "published": false,
        "focalLengthMm": 58.85859894818433,
        "nominalFNumber": 5.304
      },
      {
        "published": false,
        "focalLengthMm": 59.19731477556362,
        "nominalFNumber": 5.312
      },
      {
        "published": false,
        "focalLengthMm": 59.53838862406877,
        "nominalFNumber": 5.32
      },
      {
        "published": false,
        "focalLengthMm": 59.88183447148271,
        "nominalFNumber": 5.328
      },
      {
        "published": false,
        "focalLengthMm": 60.22766624278555,
        "nominalFNumber": 5.336
      },
      {
        "published": false,
        "focalLengthMm": 60.575897804895135,
        "nominalFNumber": 5.344
      },
      {
        "published": false,
        "focalLengthMm": 60.926542961245765,
        "nominalFNumber": 5.352
      },
      {
        "published": false,
        "focalLengthMm": 61.27961544620208,
        "nominalFNumber": 5.36
      },
      {
        "published": false,
        "focalLengthMm": 61.63512891930447,
        "nominalFNumber": 5.368
      },
      {
        "published": false,
        "focalLengthMm": 61.99309695934173,
        "nominalFNumber": 5.376
      },
      {
        "published": false,
        "focalLengthMm": 62.353533058249035,
        "nominalFNumber": 5.384
      },
      {
        "published": false,
        "focalLengthMm": 62.716450614824794,
        "nominalFNumber": 5.392
      },
      {
        "published": false,
        "focalLengthMm": 63.0818629282653,
        "nominalFNumber": 5.4
      },
      {
        "published": false,
        "focalLengthMm": 63.44978319151124,
        "nominalFNumber": 5.408
      },
      {
        "published": false,
        "focalLengthMm": 63.820224484404285,
        "nominalFNumber": 5.416
      },
      {
        "published": false,
        "focalLengthMm": 64.19319976664755,
        "nominalFNumber": 5.424
      },
      {
        "published": false,
        "focalLengthMm": 64.56872187056857,
        "nominalFNumber": 5.432
      },
      {
        "published": false,
        "focalLengthMm": 64.94680349367819,
        "nominalFNumber": 5.44
      },
      {
        "published": false,
        "focalLengthMm": 65.32745719102452,
        "nominalFNumber": 5.448
      },
      {
        "published": false,
        "focalLengthMm": 65.71069536733462,
        "nominalFNumber": 5.456
      },
      {
        "published": false,
        "focalLengthMm": 66.09653026894281,
        "nominalFNumber": 5.464
      },
      {
        "published": false,
        "focalLengthMm": 66.48497397550027,
        "nominalFNumber": 5.472
      },
      {
        "published": false,
        "focalLengthMm": 66.8760383914612,
        "nominalFNumber": 5.48
      },
      {
        "published": false,
        "focalLengthMm": 67.26973523734385,
        "nominalFNumber": 5.488
      },
      {
        "published": false,
        "focalLengthMm": 67.66607604075993,
        "nominalFNumber": 5.496
      },
      {
        "published": false,
        "focalLengthMm": 68.06507212720999,
        "nominalFNumber": 5.504
      },
      {
        "published": false,
        "focalLengthMm": 68.46673461063973,
        "nominalFNumber": 5.5120000000000005
      },
      {
        "published": false,
        "focalLengthMm": 68.87107438375453,
        "nominalFNumber": 5.52
      },
      {
        "published": false,
        "focalLengthMm": 69.27810210808644,
        "nominalFNumber": 5.5280000000000005
      },
      {
        "published": false,
        "focalLengthMm": 69.68782820381209,
        "nominalFNumber": 5.536
      },
      {
        "published": false,
        "focalLengthMm": 70.10026283931442,
        "nominalFNumber": 5.5440000000000005
      },
      {
        "published": false,
        "focalLengthMm": 70.5154159204875,
        "nominalFNumber": 5.552
      },
      {
        "published": false,
        "focalLengthMm": 70.93329707977863,
        "nominalFNumber": 5.5600000000000005
      },
      {
        "published": false,
        "focalLengthMm": 71.35391566496456,
        "nominalFNumber": 5.568
      },
      {
        "published": false,
        "focalLengthMm": 71.77728072765755,
        "nominalFNumber": 5.5760000000000005
      },
      {
        "published": false,
        "focalLengthMm": 72.20340101153869,
        "nominalFNumber": 5.584
      },
      {
        "published": false,
        "focalLengthMm": 72.6322849403135,
        "nominalFNumber": 5.5920000000000005
      },
      {
        "focalLengthMm": 73.05,
        "nominalFNumber": 5.6,
        "label": "Tele73.05mm",
        "published": true
      }
    ],
    "apertureModel": "from-nominal-fno",
    "step": 0.005
  },
  "focus": {
    "closeFocusM": 0.7,
    "description": "Only infinity focus is modeled. The patent prints the wide and tele states. The interpolated intermediate zoom path keeps G1 and G3 coupled and D5+D12 constant, with D5 varying linearly. The rear image gap is calculated for a fixed image plane while preserving the interpolated endpoint defocus. Both printed endpoint prescriptions are unchanged; intermediate positions are not published lens positions or measured factory cam motion. Aperture variation is interpolated. No finite-focus positions are modeled."
  },
  "gaps": {
    "5": {
      "label": "D5",
      "values": [
        [
          1,
          1
        ],
        [
          1.058895,
          1.058895
        ],
        [
          1.11779,
          1.11779
        ],
        [
          1.176685,
          1.176685
        ],
        [
          1.2355800000000001,
          1.2355800000000001
        ],
        [
          1.294475,
          1.294475
        ],
        [
          1.35337,
          1.35337
        ],
        [
          1.412265,
          1.412265
        ],
        [
          1.47116,
          1.47116
        ],
        [
          1.530055,
          1.530055
        ],
        [
          1.58895,
          1.58895
        ],
        [
          1.647845,
          1.647845
        ],
        [
          1.70674,
          1.70674
        ],
        [
          1.765635,
          1.765635
        ],
        [
          1.82453,
          1.82453
        ],
        [
          1.883425,
          1.883425
        ],
        [
          1.94232,
          1.94232
        ],
        [
          2.001215,
          2.001215
        ],
        [
          2.06011,
          2.06011
        ],
        [
          2.119005,
          2.119005
        ],
        [
          2.1779,
          2.1779
        ],
        [
          2.236795,
          2.236795
        ],
        [
          2.29569,
          2.29569
        ],
        [
          2.354585,
          2.354585
        ],
        [
          2.41348,
          2.41348
        ],
        [
          2.472375,
          2.472375
        ],
        [
          2.53127,
          2.53127
        ],
        [
          2.590165,
          2.590165
        ],
        [
          2.64906,
          2.64906
        ],
        [
          2.707955,
          2.707955
        ],
        [
          2.76685,
          2.76685
        ],
        [
          2.825745,
          2.825745
        ],
        [
          2.88464,
          2.88464
        ],
        [
          2.9435350000000002,
          2.9435350000000002
        ],
        [
          3.0024300000000004,
          3.0024300000000004
        ],
        [
          3.061325,
          3.061325
        ],
        [
          3.1202199999999998,
          3.1202199999999998
        ],
        [
          3.179115,
          3.179115
        ],
        [
          3.23801,
          3.23801
        ],
        [
          3.2969049999999998,
          3.2969049999999998
        ],
        [
          3.3558000000000003,
          3.3558000000000003
        ],
        [
          3.4146949999999996,
          3.4146949999999996
        ],
        [
          3.4735899999999997,
          3.4735899999999997
        ],
        [
          3.532485,
          3.532485
        ],
        [
          3.59138,
          3.59138
        ],
        [
          3.650275,
          3.650275
        ],
        [
          3.7091700000000003,
          3.7091700000000003
        ],
        [
          3.768065,
          3.768065
        ],
        [
          3.8269599999999997,
          3.8269599999999997
        ],
        [
          3.885855,
          3.885855
        ],
        [
          3.94475,
          3.94475
        ],
        [
          4.003645,
          4.003645
        ],
        [
          4.06254,
          4.06254
        ],
        [
          4.121435,
          4.121435
        ],
        [
          4.18033,
          4.18033
        ],
        [
          4.239225,
          4.239225
        ],
        [
          4.29812,
          4.29812
        ],
        [
          4.357015,
          4.357015
        ],
        [
          4.41591,
          4.41591
        ],
        [
          4.474805,
          4.474805
        ],
        [
          4.5337,
          4.5337
        ],
        [
          4.592595,
          4.592595
        ],
        [
          4.65149,
          4.65149
        ],
        [
          4.7103850000000005,
          4.7103850000000005
        ],
        [
          4.76928,
          4.76928
        ],
        [
          4.828175,
          4.828175
        ],
        [
          4.8870700000000005,
          4.8870700000000005
        ],
        [
          4.945965,
          4.945965
        ],
        [
          5.004860000000001,
          5.004860000000001
        ],
        [
          5.063755,
          5.063755
        ],
        [
          5.12265,
          5.12265
        ],
        [
          5.181545,
          5.181545
        ],
        [
          5.2404399999999995,
          5.2404399999999995
        ],
        [
          5.299334999999999,
          5.299334999999999
        ],
        [
          5.35823,
          5.35823
        ],
        [
          5.417125,
          5.417125
        ],
        [
          5.47602,
          5.47602
        ],
        [
          5.534915000000001,
          5.534915000000001
        ],
        [
          5.59381,
          5.59381
        ],
        [
          5.652705000000001,
          5.652705000000001
        ],
        [
          5.7116,
          5.7116
        ],
        [
          5.770495,
          5.770495
        ],
        [
          5.829389999999999,
          5.829389999999999
        ],
        [
          5.888285,
          5.888285
        ],
        [
          5.9471799999999995,
          5.9471799999999995
        ],
        [
          6.006075,
          6.006075
        ],
        [
          6.06497,
          6.06497
        ],
        [
          6.123865,
          6.123865
        ],
        [
          6.18276,
          6.18276
        ],
        [
          6.241655,
          6.241655
        ],
        [
          6.30055,
          6.30055
        ],
        [
          6.359445,
          6.359445
        ],
        [
          6.418340000000001,
          6.418340000000001
        ],
        [
          6.477235,
          6.477235
        ],
        [
          6.53613,
          6.53613
        ],
        [
          6.595025,
          6.595025
        ],
        [
          6.653919999999999,
          6.653919999999999
        ],
        [
          6.712814999999999,
          6.712814999999999
        ],
        [
          6.77171,
          6.77171
        ],
        [
          6.830604999999999,
          6.830604999999999
        ],
        [
          6.8895,
          6.8895
        ],
        [
          6.9483950000000005,
          6.9483950000000005
        ],
        [
          7.00729,
          7.00729
        ],
        [
          7.066185000000001,
          7.066185000000001
        ],
        [
          7.1250800000000005,
          7.1250800000000005
        ],
        [
          7.183975,
          7.183975
        ],
        [
          7.24287,
          7.24287
        ],
        [
          7.3017650000000005,
          7.3017650000000005
        ],
        [
          7.36066,
          7.36066
        ],
        [
          7.419555000000001,
          7.419555000000001
        ],
        [
          7.4784500000000005,
          7.4784500000000005
        ],
        [
          7.537345000000001,
          7.537345000000001
        ],
        [
          7.59624,
          7.59624
        ],
        [
          7.655135,
          7.655135
        ],
        [
          7.714029999999999,
          7.714029999999999
        ],
        [
          7.772924999999999,
          7.772924999999999
        ],
        [
          7.83182,
          7.83182
        ],
        [
          7.890714999999999,
          7.890714999999999
        ],
        [
          7.94961,
          7.94961
        ],
        [
          8.008505,
          8.008505
        ],
        [
          8.0674,
          8.0674
        ],
        [
          8.126294999999999,
          8.126294999999999
        ],
        [
          8.18519,
          8.18519
        ],
        [
          8.244085,
          8.244085
        ],
        [
          8.30298,
          8.30298
        ],
        [
          8.361875,
          8.361875
        ],
        [
          8.42077,
          8.42077
        ],
        [
          8.479665,
          8.479665
        ],
        [
          8.53856,
          8.53856
        ],
        [
          8.597455,
          8.597455
        ],
        [
          8.65635,
          8.65635
        ],
        [
          8.715245000000001,
          8.715245000000001
        ],
        [
          8.774140000000001,
          8.774140000000001
        ],
        [
          8.833034999999999,
          8.833034999999999
        ],
        [
          8.89193,
          8.89193
        ],
        [
          8.950825,
          8.950825
        ],
        [
          9.009720000000002,
          9.009720000000002
        ],
        [
          9.068615,
          9.068615
        ],
        [
          9.12751,
          9.12751
        ],
        [
          9.186404999999999,
          9.186404999999999
        ],
        [
          9.2453,
          9.2453
        ],
        [
          9.304195,
          9.304195
        ],
        [
          9.36309,
          9.36309
        ],
        [
          9.421985,
          9.421985
        ],
        [
          9.480879999999999,
          9.480879999999999
        ],
        [
          9.539775,
          9.539775
        ],
        [
          9.598669999999998,
          9.598669999999998
        ],
        [
          9.657565,
          9.657565
        ],
        [
          9.71646,
          9.71646
        ],
        [
          9.775355000000001,
          9.775355000000001
        ],
        [
          9.83425,
          9.83425
        ],
        [
          9.893144999999999,
          9.893144999999999
        ],
        [
          9.95204,
          9.95204
        ],
        [
          10.010935,
          10.010935
        ],
        [
          10.069830000000001,
          10.069830000000001
        ],
        [
          10.128725,
          10.128725
        ],
        [
          10.18762,
          10.18762
        ],
        [
          10.246515,
          10.246515
        ],
        [
          10.305410000000002,
          10.305410000000002
        ],
        [
          10.364305,
          10.364305
        ],
        [
          10.4232,
          10.4232
        ],
        [
          10.482095000000001,
          10.482095000000001
        ],
        [
          10.54099,
          10.54099
        ],
        [
          10.599885,
          10.599885
        ],
        [
          10.658779999999998,
          10.658779999999998
        ],
        [
          10.717675,
          10.717675
        ],
        [
          10.77657,
          10.77657
        ],
        [
          10.835465,
          10.835465
        ],
        [
          10.894359999999999,
          10.894359999999999
        ],
        [
          10.953254999999999,
          10.953254999999999
        ],
        [
          11.01215,
          11.01215
        ],
        [
          11.071045,
          11.071045
        ],
        [
          11.12994,
          11.12994
        ],
        [
          11.188835,
          11.188835
        ],
        [
          11.24773,
          11.24773
        ],
        [
          11.306625,
          11.306625
        ],
        [
          11.36552,
          11.36552
        ],
        [
          11.424415,
          11.424415
        ],
        [
          11.48331,
          11.48331
        ],
        [
          11.542205000000001,
          11.542205000000001
        ],
        [
          11.6011,
          11.6011
        ],
        [
          11.659995,
          11.659995
        ],
        [
          11.71889,
          11.71889
        ],
        [
          11.777785000000002,
          11.777785000000002
        ],
        [
          11.836680000000001,
          11.836680000000001
        ],
        [
          11.895575,
          11.895575
        ],
        [
          11.95447,
          11.95447
        ],
        [
          12.013365,
          12.013365
        ],
        [
          12.07226,
          12.07226
        ],
        [
          12.131155,
          12.131155
        ],
        [
          12.19005,
          12.19005
        ],
        [
          12.248944999999999,
          12.248944999999999
        ],
        [
          12.307839999999999,
          12.307839999999999
        ],
        [
          12.366735,
          12.366735
        ],
        [
          12.425629999999998,
          12.425629999999998
        ],
        [
          12.484525,
          12.484525
        ],
        [
          12.54342,
          12.54342
        ],
        [
          12.602315,
          12.602315
        ],
        [
          12.661209999999999,
          12.661209999999999
        ],
        [
          12.720105,
          12.720105
        ],
        [
          12.779,
          12.779
        ]
      ]
    },
    "12": {
      "label": "D12",
      "values": [
        [
          12.767,
          12.767
        ],
        [
          12.708105,
          12.708105
        ],
        [
          12.64921,
          12.64921
        ],
        [
          12.590315,
          12.590315
        ],
        [
          12.531419999999999,
          12.531419999999999
        ],
        [
          12.472525,
          12.472525
        ],
        [
          12.41363,
          12.41363
        ],
        [
          12.354735,
          12.354735
        ],
        [
          12.295839999999998,
          12.295839999999998
        ],
        [
          12.236945,
          12.236945
        ],
        [
          12.178049999999999,
          12.178049999999999
        ],
        [
          12.119155,
          12.119155
        ],
        [
          12.060259999999998,
          12.060259999999998
        ],
        [
          12.001365000000002,
          12.001365000000002
        ],
        [
          11.942469999999998,
          11.942469999999998
        ],
        [
          11.883575,
          11.883575
        ],
        [
          11.82468,
          11.82468
        ],
        [
          11.765785000000001,
          11.765785000000001
        ],
        [
          11.70689,
          11.70689
        ],
        [
          11.647995,
          11.647995
        ],
        [
          11.5891,
          11.5891
        ],
        [
          11.530205,
          11.530205
        ],
        [
          11.471309999999999,
          11.471309999999999
        ],
        [
          11.412415,
          11.412415
        ],
        [
          11.35352,
          11.35352
        ],
        [
          11.294625,
          11.294625
        ],
        [
          11.235729999999998,
          11.235729999999998
        ],
        [
          11.176835,
          11.176835
        ],
        [
          11.117939999999999,
          11.117939999999999
        ],
        [
          11.059045,
          11.059045
        ],
        [
          11.000149999999998,
          11.000149999999998
        ],
        [
          10.941255,
          10.941255
        ],
        [
          10.882359999999998,
          10.882359999999998
        ],
        [
          10.823464999999999,
          10.823464999999999
        ],
        [
          10.764569999999999,
          10.764569999999999
        ],
        [
          10.705675,
          10.705675
        ],
        [
          10.64678,
          10.64678
        ],
        [
          10.587884999999998,
          10.587884999999998
        ],
        [
          10.52899,
          10.52899
        ],
        [
          10.470094999999999,
          10.470094999999999
        ],
        [
          10.4112,
          10.4112
        ],
        [
          10.352305000000001,
          10.352305000000001
        ],
        [
          10.29341,
          10.29341
        ],
        [
          10.234515,
          10.234515
        ],
        [
          10.175619999999999,
          10.175619999999999
        ],
        [
          10.116725,
          10.116725
        ],
        [
          10.05783,
          10.05783
        ],
        [
          9.998935,
          9.998935
        ],
        [
          9.94004,
          9.94004
        ],
        [
          9.881145,
          9.881145
        ],
        [
          9.82225,
          9.82225
        ],
        [
          9.763354999999999,
          9.763354999999999
        ],
        [
          9.704460000000001,
          9.704460000000001
        ],
        [
          9.645565,
          9.645565
        ],
        [
          9.58667,
          9.58667
        ],
        [
          9.527774999999998,
          9.527774999999998
        ],
        [
          9.46888,
          9.46888
        ],
        [
          9.409985,
          9.409985
        ],
        [
          9.35109,
          9.35109
        ],
        [
          9.292195000000001,
          9.292195000000001
        ],
        [
          9.2333,
          9.2333
        ],
        [
          9.174405,
          9.174405
        ],
        [
          9.115509999999999,
          9.115509999999999
        ],
        [
          9.056615,
          9.056615
        ],
        [
          8.99772,
          8.99772
        ],
        [
          8.938825,
          8.938825
        ],
        [
          8.87993,
          8.87993
        ],
        [
          8.821035,
          8.821035
        ],
        [
          8.762139999999999,
          8.762139999999999
        ],
        [
          8.703244999999999,
          8.703244999999999
        ],
        [
          8.644350000000001,
          8.644350000000001
        ],
        [
          8.585455,
          8.585455
        ],
        [
          8.52656,
          8.52656
        ],
        [
          8.467665,
          8.467665
        ],
        [
          8.40877,
          8.40877
        ],
        [
          8.349874999999999,
          8.349874999999999
        ],
        [
          8.29098,
          8.29098
        ],
        [
          8.232085,
          8.232085
        ],
        [
          8.17319,
          8.17319
        ],
        [
          8.114295,
          8.114295
        ],
        [
          8.055399999999999,
          8.055399999999999
        ],
        [
          7.996505,
          7.996505
        ],
        [
          7.93761,
          7.93761
        ],
        [
          7.878715,
          7.878715
        ],
        [
          7.81982,
          7.81982
        ],
        [
          7.760924999999999,
          7.760924999999999
        ],
        [
          7.70203,
          7.70203
        ],
        [
          7.643134999999999,
          7.643134999999999
        ],
        [
          7.584240000000001,
          7.584240000000001
        ],
        [
          7.525344999999999,
          7.525344999999999
        ],
        [
          7.466450000000001,
          7.466450000000001
        ],
        [
          7.407554999999999,
          7.407554999999999
        ],
        [
          7.348660000000001,
          7.348660000000001
        ],
        [
          7.289764999999998,
          7.289764999999998
        ],
        [
          7.23087,
          7.23087
        ],
        [
          7.171975,
          7.171975
        ],
        [
          7.11308,
          7.11308
        ],
        [
          7.054185,
          7.054185
        ],
        [
          6.99529,
          6.99529
        ],
        [
          6.936395,
          6.936395
        ],
        [
          6.8774999999999995,
          6.8774999999999995
        ],
        [
          6.818605,
          6.818605
        ],
        [
          6.759709999999999,
          6.759709999999999
        ],
        [
          6.7008149999999995,
          6.7008149999999995
        ],
        [
          6.641919999999999,
          6.641919999999999
        ],
        [
          6.583024999999999,
          6.583024999999999
        ],
        [
          6.5241299999999995,
          6.5241299999999995
        ],
        [
          6.465234999999999,
          6.465234999999999
        ],
        [
          6.406339999999999,
          6.406339999999999
        ],
        [
          6.347444999999999,
          6.347444999999999
        ],
        [
          6.288549999999999,
          6.288549999999999
        ],
        [
          6.229654999999999,
          6.229654999999999
        ],
        [
          6.170759999999999,
          6.170759999999999
        ],
        [
          6.111865,
          6.111865
        ],
        [
          6.05297,
          6.05297
        ],
        [
          5.9940750000000005,
          5.9940750000000005
        ],
        [
          5.93518,
          5.93518
        ],
        [
          5.876285,
          5.876285
        ],
        [
          5.81739,
          5.81739
        ],
        [
          5.758495,
          5.758495
        ],
        [
          5.6996,
          5.6996
        ],
        [
          5.640705,
          5.640705
        ],
        [
          5.58181,
          5.58181
        ],
        [
          5.522914999999999,
          5.522914999999999
        ],
        [
          5.46402,
          5.46402
        ],
        [
          5.405125,
          5.405125
        ],
        [
          5.34623,
          5.34623
        ],
        [
          5.287335000000001,
          5.287335000000001
        ],
        [
          5.22844,
          5.22844
        ],
        [
          5.169545,
          5.169545
        ],
        [
          5.11065,
          5.11065
        ],
        [
          5.051755,
          5.051755
        ],
        [
          4.992859999999999,
          4.992859999999999
        ],
        [
          4.933965,
          4.933965
        ],
        [
          4.875069999999999,
          4.875069999999999
        ],
        [
          4.816174999999999,
          4.816174999999999
        ],
        [
          4.75728,
          4.75728
        ],
        [
          4.698384999999999,
          4.698384999999999
        ],
        [
          4.63949,
          4.63949
        ],
        [
          4.580595000000001,
          4.580595000000001
        ],
        [
          4.5217,
          4.5217
        ],
        [
          4.462805,
          4.462805
        ],
        [
          4.40391,
          4.40391
        ],
        [
          4.345015,
          4.345015
        ],
        [
          4.28612,
          4.28612
        ],
        [
          4.227225000000001,
          4.227225000000001
        ],
        [
          4.16833,
          4.16833
        ],
        [
          4.109435,
          4.109435
        ],
        [
          4.05054,
          4.05054
        ],
        [
          3.991645,
          3.991645
        ],
        [
          3.93275,
          3.93275
        ],
        [
          3.873855,
          3.873855
        ],
        [
          3.8149599999999997,
          3.8149599999999997
        ],
        [
          3.7560649999999995,
          3.7560649999999995
        ],
        [
          3.6971699999999994,
          3.6971699999999994
        ],
        [
          3.6382749999999993,
          3.6382749999999993
        ],
        [
          3.5793799999999996,
          3.5793799999999996
        ],
        [
          3.520485,
          3.520485
        ],
        [
          3.4615899999999997,
          3.4615899999999997
        ],
        [
          3.4026949999999996,
          3.4026949999999996
        ],
        [
          3.3437999999999994,
          3.3437999999999994
        ],
        [
          3.2849049999999993,
          3.2849049999999993
        ],
        [
          3.226009999999999,
          3.226009999999999
        ],
        [
          3.1671150000000003,
          3.1671150000000003
        ],
        [
          3.10822,
          3.10822
        ],
        [
          3.0493250000000005,
          3.0493250000000005
        ],
        [
          2.9904300000000004,
          2.9904300000000004
        ],
        [
          2.9315350000000002,
          2.9315350000000002
        ],
        [
          2.87264,
          2.87264
        ],
        [
          2.813745,
          2.813745
        ],
        [
          2.7548500000000002,
          2.7548500000000002
        ],
        [
          2.695955,
          2.695955
        ],
        [
          2.63706,
          2.63706
        ],
        [
          2.5781650000000003,
          2.5781650000000003
        ],
        [
          2.51927,
          2.51927
        ],
        [
          2.460375,
          2.460375
        ],
        [
          2.40148,
          2.40148
        ],
        [
          2.3425849999999997,
          2.3425849999999997
        ],
        [
          2.2836899999999996,
          2.2836899999999996
        ],
        [
          2.224795,
          2.224795
        ],
        [
          2.1658999999999997,
          2.1658999999999997
        ],
        [
          2.1070049999999996,
          2.1070049999999996
        ],
        [
          2.0481099999999994,
          2.0481099999999994
        ],
        [
          1.9892149999999995,
          1.9892149999999995
        ],
        [
          1.9303199999999994,
          1.9303199999999994
        ],
        [
          1.8714249999999995,
          1.8714249999999995
        ],
        [
          1.8125299999999993,
          1.8125299999999993
        ],
        [
          1.7536349999999992,
          1.7536349999999992
        ],
        [
          1.6947400000000008,
          1.6947400000000008
        ],
        [
          1.6358450000000007,
          1.6358450000000007
        ],
        [
          1.5769500000000005,
          1.5769500000000005
        ],
        [
          1.5180550000000004,
          1.5180550000000004
        ],
        [
          1.4591600000000005,
          1.4591600000000005
        ],
        [
          1.4002650000000003,
          1.4002650000000003
        ],
        [
          1.3413700000000004,
          1.3413700000000004
        ],
        [
          1.2824750000000003,
          1.2824750000000003
        ],
        [
          1.2235800000000001,
          1.2235800000000001
        ],
        [
          1.1646850000000002,
          1.1646850000000002
        ],
        [
          1.10579,
          1.10579
        ],
        [
          1.046895,
          1.046895
        ],
        [
          0.988,
          0.988
        ]
      ]
    },
    "23": {
      "label": "Printed image gap",
      "values": [
        [
          41.4,
          41.4
        ],
        [
          41.46919181289257,
          41.46919181289257
        ],
        [
          41.53867365105047,
          41.53867365105047
        ],
        [
          41.60844696385668,
          41.60844696385668
        ],
        [
          41.67851320608981,
          41.67851320608981
        ],
        [
          41.74887383787469,
          41.74887383787469
        ],
        [
          41.819530324630605,
          41.819530324630605
        ],
        [
          41.89048413701705,
          41.89048413701705
        ],
        [
          41.961736750877506,
          41.961736750877506
        ],
        [
          42.033289647180304,
          42.033289647180304
        ],
        [
          42.10514431195716,
          42.10514431195716
        ],
        [
          42.17730223623944,
          42.17730223623944
        ],
        [
          42.24976491599127,
          42.24976491599127
        ],
        [
          42.32253385204043,
          42.32253385204043
        ],
        [
          42.39561055000616,
          42.39561055000616
        ],
        [
          42.46899652022433,
          42.46899652022433
        ],
        [
          42.542693277669535,
          42.542693277669535
        ],
        [
          42.61670234187449,
          42.61670234187449
        ],
        [
          42.69102523684605,
          42.69102523684605
        ],
        [
          42.76566349097825,
          42.76566349097825
        ],
        [
          42.84061863696222,
          42.84061863696222
        ],
        [
          42.91589221169282,
          42.91589221169282
        ],
        [
          42.99148575617158,
          42.99148575617158
        ],
        [
          43.067400815406835,
          43.067400815406835
        ],
        [
          43.14363893830959,
          43.14363893830959
        ],
        [
          43.22020167758638,
          43.22020167758638
        ],
        [
          43.297090589628134,
          43.297090589628134
        ],
        [
          43.3743072343952,
          43.3743072343952
        ],
        [
          43.451853175298616,
          43.451853175298616
        ],
        [
          43.52972997907756,
          43.52972997907756
        ],
        [
          43.607939215672296,
          43.607939215672296
        ],
        [
          43.68648245809312,
          43.68648245809312
        ],
        [
          43.76536128228553,
          43.76536128228553
        ],
        [
          43.844577266990065,
          43.844577266990065
        ],
        [
          43.92413199359847,
          43.92413199359847
        ],
        [
          44.00402704600509,
          44.00402704600509
        ],
        [
          44.084264010453104,
          44.084264010453104
        ],
        [
          44.16484447537665,
          44.16484447537665
        ],
        [
          44.24577003123752,
          44.24577003123752
        ],
        [
          44.32704227035706,
          44.32704227035706
        ],
        [
          44.408662786742774,
          44.408662786742774
        ],
        [
          44.490633175909686,
          44.490633175909686
        ],
        [
          44.57295503469653,
          44.57295503469653
        ],
        [
          44.655629961075924,
          44.655629961075924
        ],
        [
          44.7386595539593,
          44.7386595539593
        ],
        [
          44.82204541299588,
          44.82204541299588
        ],
        [
          44.90578913836571,
          44.90578913836571
        ],
        [
          44.9898923305668,
          44.9898923305668
        ],
        [
          45.07435659019571,
          45.07435659019571
        ],
        [
          45.1591835177221,
          45.1591835177221
        ],
        [
          45.24437471325678,
          45.24437471325678
        ],
        [
          45.32993177631274,
          45.32993177631274
        ],
        [
          45.4158563055598,
          45.4158563055598
        ],
        [
          45.50214989857232,
          45.50214989857232
        ],
        [
          45.588814151569274,
          45.588814151569274
        ],
        [
          45.67585065914773,
          45.67585065914773
        ],
        [
          45.76326101400811,
          45.76326101400811
        ],
        [
          45.85104680667276,
          45.85104680667276
        ],
        [
          45.939209625196,
          45.939209625196
        ],
        [
          46.02775105486633,
          46.02775105486633
        ],
        [
          46.11667267790088,
          46.11667267790088
        ],
        [
          46.205976073130955,
          46.205976073130955
        ],
        [
          46.29566281567968,
          46.29566281567968
        ],
        [
          46.385734476630375,
          46.385734476630375
        ],
        [
          46.47619262268634,
          46.47619262268634
        ],
        [
          46.567038815821604,
          46.567038815821604
        ],
        [
          46.658274612921915,
          46.658274612921915
        ],
        [
          46.74990156541687,
          46.74990156541687
        ],
        [
          46.84192121890186,
          46.84192121890186
        ],
        [
          46.93433511274992,
          46.93433511274992
        ],
        [
          47.02714477971421,
          47.02714477971421
        ],
        [
          47.120351745519116,
          47.120351745519116
        ],
        [
          47.213957528441455,
          47.213957528441455
        ],
        [
          47.30796363888053,
          47.30796363888053
        ],
        [
          47.40237157891712,
          47.40237157891712
        ],
        [
          47.49718284186113,
          47.49718284186113
        ],
        [
          47.592398911787974,
          47.592398911787974
        ],
        [
          47.688021263062325,
          47.688021263062325
        ],
        [
          47.78405135985108,
          47.78405135985108
        ],
        [
          47.880490655622424,
          47.880490655622424
        ],
        [
          47.977340592633716,
          47.977340592633716
        ],
        [
          48.07460260140542,
          48.07460260140542
        ],
        [
          48.17227810018268,
          48.17227810018268
        ],
        [
          48.27036849438267,
          48.27036849438267
        ],
        [
          48.368875176029086,
          48.368875176029086
        ],
        [
          48.46779952317171,
          48.46779952317171
        ],
        [
          48.567142899292584,
          48.567142899292584
        ],
        [
          48.666906652696724,
          48.666906652696724
        ],
        [
          48.76709211588825,
          48.76709211588825
        ],
        [
          48.86770060493179,
          48.86770060493179
        ],
        [
          48.96873341879713,
          48.96873341879713
        ],
        [
          49.07019183868922,
          49.07019183868922
        ],
        [
          49.172077127361135,
          49.172077127361135
        ],
        [
          49.27439052841084,
          49.27439052841084
        ],
        [
          49.3771332655609,
          49.3771332655609
        ],
        [
          49.480306541921294,
          49.480306541921294
        ],
        [
          49.58391153923389,
          49.58391153923389
        ],
        [
          49.68794941709989,
          49.68794941709989
        ],
        [
          49.79242131218807,
          49.79242131218807
        ],
        [
          49.89732833742512,
          49.89732833742512
        ],
        [
          50.00267158116631,
          50.00267158116631
        ],
        [
          50.108452106346746,
          50.108452106346746
        ],
        [
          50.21467094961307,
          50.21467094961307
        ],
        [
          50.321329120434974,
          50.321329120434974
        ],
        [
          50.42842760019542,
          50.42842760019542
        ],
        [
          50.53596734126054,
          50.53596734126054
        ],
        [
          50.64394926602756,
          50.64394926602756
        ],
        [
          50.752374265950905,
          50.752374265950905
        ],
        [
          50.86124320054635,
          50.86124320054635
        ],
        [
          50.970556896371804,
          50.970556896371804
        ],
        [
          51.080316145985186,
          51.080316145985186
        ],
        [
          51.19052170687888,
          51.19052170687888
        ],
        [
          51.301174300389576,
          51.301174300389576
        ],
        [
          51.41227461058368,
          51.41227461058368
        ],
        [
          51.523823283118205,
          51.523823283118205
        ],
        [
          51.63582092407514,
          51.63582092407514
        ],
        [
          51.748268098770936,
          51.748268098770936
        ],
        [
          51.86116533053854,
          51.86116533053854
        ],
        [
          51.97451309948308,
          51.97451309948308
        ],
        [
          52.088311841209766,
          52.088311841209766
        ],
        [
          52.20256194552396,
          52.20256194552396
        ],
        [
          52.31726375510267,
          52.31726375510267
        ],
        [
          52.432417564137026,
          52.432417564137026
        ],
        [
          52.548023616945216,
          52.548023616945216
        ],
        [
          52.66408210655546,
          52.66408210655546
        ],
        [
          52.780593173258154,
          52.780593173258154
        ],
        [
          52.897556903127324,
          52.897556903127324
        ],
        [
          53.01497332650981,
          53.01497332650981
        ],
        [
          53.13284241648258,
          53.13284241648258
        ],
        [
          53.2511640872771,
          53.2511640872771
        ],
        [
          53.369938192670666,
          53.369938192670666
        ],
        [
          53.48916452434334,
          53.48916452434334
        ],
        [
          53.60884281020068,
          53.60884281020068
        ],
        [
          53.72897271266133,
          53.72897271266133
        ],
        [
          53.84955382690902,
          53.84955382690902
        ],
        [
          53.97058567910824,
          53.97058567910824
        ],
        [
          54.09206772458334,
          54.09206772458334
        ],
        [
          54.213999345959834,
          54.213999345959834
        ],
        [
          54.33637985126791,
          54.33637985126791
        ],
        [
          54.45920847200777,
          54.45920847200777
        ],
        [
          54.582484361174664,
          54.582484361174664
        ],
        [
          54.70620659124563,
          54.70620659124563
        ],
        [
          54.83037415212437,
          54.83037415212437
        ],
        [
          54.95498594904634,
          54.95498594904634
        ],
        [
          55.0800408004414,
          55.0800408004414
        ],
        [
          55.205537435754856,
          55.205537435754856
        ],
        [
          55.331474493225386,
          55.331474493225386
        ],
        [
          55.457850517619285,
          55.457850517619285
        ],
        [
          55.58466395792165,
          55.58466395792165
        ],
        [
          55.71191316498196,
          55.71191316498196
        ],
        [
          55.839596389114924,
          55.839596389114924
        ],
        [
          55.96771177765562,
          55.96771177765562
        ],
        [
          56.09625737246816,
          56.09625737246816
        ],
        [
          56.225231107407105,
          56.225231107407105
        ],
        [
          56.354630805731915,
          56.354630805731915
        ],
        [
          56.48445417747284,
          56.48445417747284
        ],
        [
          56.614698816748295,
          56.614698816748295
        ],
        [
          56.74536219903311,
          56.74536219903311
        ],
        [
          56.87644167837675,
          56.87644167837675
        ],
        [
          57.00793448457144,
          57.00793448457144
        ],
        [
          57.13983772026933,
          57.13983772026933
        ],
        [
          57.27214835804867,
          57.27214835804867
        ],
        [
          57.40486323742713,
          57.40486323742713
        ],
        [
          57.5379790618242,
          57.5379790618242
        ],
        [
          57.671492395469755,
          57.671492395469755
        ],
        [
          57.805399660259354,
          57.805399660259354
        ],
        [
          57.93969713255669,
          57.93969713255669
        ],
        [
          58.074380939940745,
          58.074380939940745
        ],
        [
          58.20944705789943,
          58.20944705789943
        ],
        [
          58.344891306467815,
          58.344891306467815
        ],
        [
          58.48070934681113,
          58.48070934681113
        ],
        [
          58.61689667775242,
          58.61689667775242
        ],
        [
          58.7534486322438,
          58.7534486322438
        ],
        [
          58.89036037378264,
          58.89036037378264
        ],
        [
          59.02762689277005,
          59.02762689277005
        ],
        [
          59.16524300281397,
          59.16524300281397
        ],
        [
          59.30320333697425,
          59.30320333697425
        ],
        [
          59.44150234395248,
          59.44150234395248
        ],
        [
          59.580134284223035,
          59.580134284223035
        ],
        [
          59.719093226108626,
          59.719093226108626
        ],
        [
          59.858373041797506,
          59.858373041797506
        ],
        [
          59.997967403304976,
          59.997967403304976
        ],
        [
          60.13786977837667,
          60.13786977837667
        ],
        [
          60.27807342633581,
          60.27807342633581
        ],
        [
          60.41857139387407,
          60.41857139387407
        ],
        [
          60.559356510784795,
          60.559356510784795
        ],
        [
          60.70042138564182,
          60.70042138564182
        ],
        [
          60.84175840142124,
          60.84175840142124
        ],
        [
          60.98335971106875,
          60.98335971106875
        ],
        [
          61.125217233011405,
          61.125217233011405
        ],
        [
          61.2673226466158,
          61.2673226466158
        ],
        [
          61.40966738759228,
          61.40966738759228
        ],
        [
          61.55224264334668,
          61.55224264334668
        ],
        [
          61.69503934827905,
          61.69503934827905
        ],
        [
          61.838048179032064,
          61.838048179032064
        ],
        [
          61.98125954968894,
          61.98125954968894
        ],
        [
          62.12466360692191,
          62.12466360692191
        ],
        [
          62.26825022509252,
          62.26825022509252
        ],
        [
          62.4120090013056,
          62.4120090013056
        ],
        [
          62.55592925041749,
          62.55592925041749
        ],
        [
          62.7,
          62.7
        ]
      ]
    }
  },
  "aperture": {
    "fStops": [
      4,
      5.6,
      8,
      11,
      16
    ],
    "maxFNumber": 16
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
      "toSurface": "12"
    },
    {
      "text": "G3",
      "fromSurface": "STO",
      "toSurface": "23"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "1",
      "toSurface": "3"
    },
    {
      "text": "D2",
      "fromSurface": "8",
      "toSurface": "10"
    }
  ],
  "layout": {
    "scFill": 0.65,
    "yScFill": 0.6
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
