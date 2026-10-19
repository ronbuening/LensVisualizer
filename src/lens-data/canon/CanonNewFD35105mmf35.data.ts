import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * US 4,432,615 A, Numerical Example 2 (FIG. 5), Keiji Ikemori / Canon.
 * Probably the Canon New FD 35-105mm f/3.5. All 28 radii and the fixed gaps are as printed.
 * Group brackets use the patent's FIG. 5 notation I-IV; the cemented pairs are C1 (R1-R3) and
 * C2 (R20-R22), because the patent's D1, D2 ... name axial thicknesses.
 * At infinity the patent places the stop 0.87 mm ahead of R18. The patent prints no back
 * focal distance; the model uses 56.56200155 mm, the mean paraxial BFD of the three printed
 * zoom positions. Those three positions are unchanged; the intermediate group II/III positions
 * are computed to keep the total track and are not Canon's cam.
 * Infinity focus only: the stop shift for finite focus and the macro setting are not modelled.
 * Semi-diameters are estimated from FIG. 5 (wide position, about 0.094 mm/px from the R1-R28
 * vertex span) and checked by real-ray trace. FIG. 5 draws L6's front rim meeting L5's R9;
 * at 12.9 mm the two faces are 0.07 mm apart, which needs checks.gapSagFrac 0.97.
 * L7 is 11.7 mm, level with L8 as FIG. 5 draws them; there R11 and R12 are 0.21 mm apart.
 * R24/R25 stay at 9.9 mm: those faces would touch at about 10.5 mm, and FIG. 5 draws them crossing.
 * Glass names are catalogue equivalents chosen from nd/vd, not Canon's melt identities.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "canon-new-fd-35-105mm-f35",
  "maker": "Canon",
  "name": "CANON NEW FD 35-105mm f/3.5",
  "subtitle": "US 4,432,615 A \u2014 Numerical Example 2; infinity focus only",
  "catalog": {
    "lensMounts": [
      "canon-fd"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 15,
    "groupCount": 13,
    "focalLengthMm": {
      "marketing": [
        35,
        105
      ],
      "design": [
        36.2,
        102
      ]
    },
    "fNumber": {
      "marketing": 3.5,
      "design": 3.5
    },
    "specs": [
      "15 ELEMENTS / 13 GROUPS",
      "DESIGN f = 36.2-102 mm",
      "DESIGN F/3.5",
      "ALL SPHERICAL"
    ]
  },
  "source": {
    "patentNumber": "US 4,432,615 A",
    "patentYear": 1984,
    "authors": [
      "Keiji Ikemori"
    ],
    "assignees": [
      "Canon Inc."
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
      "glass": "FD60 (Hoya equivalent)",
      "focalLengthMm": -96.332802,
      "cemented": "C1"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.65844,
      "vd": 50.9,
      "glass": "BACED5 (Hoya equivalent)",
      "focalLengthMm": 107.350319,
      "cemented": "C1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.6968,
      "vd": 55.5,
      "glass": "LAC14 (Hoya equivalent)",
      "focalLengthMm": 162.543108
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.6968,
      "vd": 55.5,
      "glass": "LAC14 (Hoya equivalent)",
      "focalLengthMm": 89.104561
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "nd": 1.83481,
      "vd": 42.7,
      "glass": "TAFD5F (Hoya equivalent)",
      "focalLengthMm": -32.236439
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Negative Meniscus",
      "nd": 1.804,
      "vd": 46.6,
      "glass": "S-LAH65 (Ohara equivalent)",
      "focalLengthMm": -44.603151
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconcave Negative",
      "nd": 1.6968,
      "vd": 55.5,
      "glass": "LAC14 (Hoya equivalent)",
      "focalLengthMm": -52.674359
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.84666,
      "vd": 23.9,
      "glass": "PBH53 (Ohara equivalent)",
      "focalLengthMm": 33.404655
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Negative Meniscus",
      "nd": 1.6968,
      "vd": 55.5,
      "glass": "LAC14 (Hoya equivalent)",
      "focalLengthMm": -80.010488
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Biconvex Positive",
      "nd": 1.6968,
      "vd": 55.5,
      "glass": "LAC14 (Hoya equivalent)",
      "focalLengthMm": 45.82099
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Biconvex Positive",
      "nd": 1.54072,
      "vd": 47.2,
      "glass": "E-FEL2 (Hoya equivalent)",
      "focalLengthMm": 30.235963,
      "cemented": "C2"
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "type": "Plano-Concave Negative",
      "nd": 1.804,
      "vd": 46.6,
      "glass": "S-LAH65 (Ohara equivalent)",
      "focalLengthMm": -44.619403,
      "cemented": "C2"
    },
    {
      "id": 13,
      "name": "L13",
      "label": "Element 13",
      "type": "Biconcave Negative",
      "nd": 1.84666,
      "vd": 23.9,
      "glass": "PBH53 (Ohara equivalent)",
      "focalLengthMm": -31.720912
    },
    {
      "id": 14,
      "name": "L14",
      "label": "Element 14",
      "type": "Positive Meniscus",
      "nd": 1.60311,
      "vd": 60.7,
      "glass": "BACD14 (Hoya equivalent)",
      "focalLengthMm": 61.914803
    },
    {
      "id": 15,
      "name": "L15",
      "label": "Element 15",
      "type": "Positive Meniscus",
      "nd": 1.60311,
      "vd": 60.7,
      "glass": "BACD14 (Hoya equivalent)",
      "focalLengthMm": 70.916557
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 118.603,
      "sd": 31,
      "d": 2.8,
      "medium": 1
    },
    {
      "label": "2",
      "R": 46.402,
      "sd": 29,
      "d": 6.97,
      "medium": 2
    },
    {
      "label": "3",
      "R": 127.02,
      "sd": 29,
      "d": 0.1
    },
    {
      "label": "4",
      "R": 71.531,
      "sd": 28,
      "d": 4.24,
      "medium": 3
    },
    {
      "label": "5",
      "R": 189.422,
      "sd": 28,
      "d": 0.1
    },
    {
      "label": "6",
      "R": 46.371,
      "sd": 26,
      "d": 6.26,
      "medium": 4
    },
    {
      "label": "7",
      "R": 173.027,
      "sd": 26
    },
    {
      "label": "8",
      "R": 220.423,
      "sd": 16,
      "d": 1.6,
      "medium": 5
    },
    {
      "label": "9",
      "R": 23.904,
      "sd": 16,
      "d": 1.81
    },
    {
      "label": "10",
      "R": 41.883,
      "sd": 12.9,
      "d": 1.5,
      "medium": 6
    },
    {
      "label": "11",
      "R": 19.011,
      "sd": 12.9,
      "d": 4.6
    },
    {
      "label": "12",
      "R": -189.831,
      "sd": 11.7,
      "d": 1.3,
      "medium": 7
    },
    {
      "label": "13",
      "R": 45.629,
      "sd": 11.7,
      "d": 0.39
    },
    {
      "label": "14",
      "R": 28.39,
      "sd": 12,
      "d": 4.04,
      "medium": 8
    },
    {
      "label": "15",
      "R": -6974.39,
      "sd": 12
    },
    {
      "label": "16",
      "R": -34.387,
      "sd": 9.9,
      "d": 1.4,
      "medium": 9
    },
    {
      "label": "17",
      "R": -91.235,
      "sd": 9.9
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 0.87
    },
    {
      "label": "18",
      "R": 63.15,
      "sd": 10.6,
      "d": 2.92,
      "medium": 10
    },
    {
      "label": "19",
      "R": -63.352,
      "sd": 10.6,
      "d": 0.1
    },
    {
      "label": "20",
      "R": 28.661,
      "sd": 10.4,
      "d": 4.69,
      "medium": 11
    },
    {
      "label": "21",
      "R": -35.874,
      "sd": 10.4,
      "d": 1.2,
      "medium": 12
    },
    {
      "label": "22",
      "R": "flat",
      "sd": 10.4,
      "d": 6.68
    },
    {
      "label": "23",
      "R": -159.879,
      "sd": 11.6,
      "d": 1.5,
      "medium": 13
    },
    {
      "label": "24",
      "R": 32.418,
      "sd": 9.9,
      "d": 2.3
    },
    {
      "label": "25",
      "R": -96.759,
      "sd": 9.9,
      "d": 3.07,
      "medium": 14
    },
    {
      "label": "26",
      "R": -27.265,
      "sd": 12.2,
      "d": 0.16
    },
    {
      "label": "27",
      "R": 42.353,
      "sd": 14.2,
      "d": 3.3,
      "medium": 15
    },
    {
      "label": "28",
      "R": 4211.79,
      "sd": 14.2,
      "d": 56.562001547735385
    }
  ],
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 36.2,
        "published": true
      },
      {
        "focalLengthMm": 37.89,
        "published": false
      },
      {
        "focalLengthMm": 39.580000000000005,
        "published": false
      },
      {
        "focalLengthMm": 41.27,
        "published": false
      },
      {
        "focalLengthMm": 42.96,
        "published": false
      },
      {
        "focalLengthMm": 44.650000000000006,
        "published": false
      },
      {
        "focalLengthMm": 46.34,
        "published": false
      },
      {
        "focalLengthMm": 48.03,
        "published": false
      },
      {
        "focalLengthMm": 49.72,
        "published": false
      },
      {
        "focalLengthMm": 51.410000000000004,
        "published": false
      },
      {
        "focalLengthMm": 53.1,
        "published": false
      },
      {
        "focalLengthMm": 54.790000000000006,
        "published": false
      },
      {
        "focalLengthMm": 56.480000000000004,
        "published": false
      },
      {
        "focalLengthMm": 58.17,
        "published": false
      },
      {
        "focalLengthMm": 59.86,
        "published": false
      },
      {
        "focalLengthMm": 61.55,
        "published": false
      },
      {
        "focalLengthMm": 63.24,
        "published": false
      },
      {
        "focalLengthMm": 64.93,
        "published": false
      },
      {
        "focalLengthMm": 66.62,
        "published": false
      },
      {
        "focalLengthMm": 68.31,
        "published": false
      },
      {
        "focalLengthMm": 70,
        "published": true
      },
      {
        "focalLengthMm": 71.6,
        "published": false
      },
      {
        "focalLengthMm": 73.2,
        "published": false
      },
      {
        "focalLengthMm": 74.80000000000001,
        "published": false
      },
      {
        "focalLengthMm": 76.4,
        "published": false
      },
      {
        "focalLengthMm": 78,
        "published": false
      },
      {
        "focalLengthMm": 79.6,
        "published": false
      },
      {
        "focalLengthMm": 81.2,
        "published": false
      },
      {
        "focalLengthMm": 82.80000000000001,
        "published": false
      },
      {
        "focalLengthMm": 84.4,
        "published": false
      },
      {
        "focalLengthMm": 86,
        "published": false
      },
      {
        "focalLengthMm": 87.6,
        "published": false
      },
      {
        "focalLengthMm": 89.2,
        "published": false
      },
      {
        "focalLengthMm": 90.80000000000001,
        "published": false
      },
      {
        "focalLengthMm": 92.4,
        "published": false
      },
      {
        "focalLengthMm": 94,
        "published": false
      },
      {
        "focalLengthMm": 95.6,
        "published": false
      },
      {
        "focalLengthMm": 97.2,
        "published": false
      },
      {
        "focalLengthMm": 98.80000000000001,
        "published": false
      },
      {
        "focalLengthMm": 100.4,
        "published": false
      },
      {
        "focalLengthMm": 102,
        "published": true
      }
    ]
  },
  "focus": {
    "closeFocusM": 1000000000000000,
    "description": "Only the infinity focus state is modelled. The patent's front-group focusing movement and the macro setting are not reproduced. Canon lists 1.5 m as the production minimum focus distance."
  },
  "gaps": {
    "7": {
      "label": "D7",
      "values": [
        [
          1.444,
          1.444
        ],
        [
          2.744069971668023,
          2.744069971668023
        ],
        [
          3.931518784495249,
          3.931518784495249
        ],
        [
          5.043184187406128,
          5.043184187406128
        ],
        [
          6.086714997754926,
          6.086714997754926
        ],
        [
          7.068702091948909,
          7.068702091948909
        ],
        [
          7.994857809473739,
          7.994857809473739
        ],
        [
          8.870159907841964,
          8.870159907841964
        ],
        [
          9.698968034037552,
          9.698968034037552
        ],
        [
          10.485118681890826,
          10.485118681890826
        ],
        [
          11.232003156886453,
          11.232003156886453
        ],
        [
          11.942632007394874,
          11.942632007394874
        ],
        [
          12.619688593184689,
          12.619688593184689
        ],
        [
          13.265573871573752,
          13.265573871573752
        ],
        [
          13.882444034971451,
          13.882444034971451
        ],
        [
          14.472242292795487,
          14.472242292795487
        ],
        [
          15.036725828559272,
          15.036725828559272
        ],
        [
          15.57748875960355,
          15.57748875960355
        ],
        [
          16.095981768081508,
          16.095981768081508
        ],
        [
          16.593528946797058,
          16.593528946797058
        ],
        [
          17.051,
          17.051
        ],
        [
          17.50647267025927,
          17.50647267025927
        ],
        [
          17.925786490834454,
          17.925786490834454
        ],
        [
          18.330090200354597,
          18.330090200354597
        ],
        [
          18.72013250990198,
          18.72013250990198
        ],
        [
          19.096609969084664,
          19.096609969084664
        ],
        [
          19.460171871692488,
          19.460171871692488
        ],
        [
          19.811424592898035,
          19.811424592898035
        ],
        [
          20.150935432737214,
          20.150935432737214
        ],
        [
          20.47923602986404,
          20.47923602986404
        ],
        [
          20.79682540051724,
          20.79682540051724
        ],
        [
          21.104172649972725,
          21.104172649972725
        ],
        [
          21.401719397249245,
          21.401719397249245
        ],
        [
          21.689881948294694,
          21.689881948294694
        ],
        [
          21.96905324814939,
          21.96905324814939
        ],
        [
          22.239604638532562,
          22.239604638532562
        ],
        [
          22.501887443825247,
          22.501887443825247
        ],
        [
          22.756234405433315,
          22.756234405433315
        ],
        [
          23.002960981943364,
          23.002960981943364
        ],
        [
          23.242366530261762,
          23.242366530261762
        ],
        [
          23.459,
          23.459
        ]
      ]
    },
    "15": {
      "label": "D15",
      "values": [
        [
          16.612,
          16.612
        ],
        [
          15.170501896299783,
          15.170501896299783
        ],
        [
          13.880913790535423,
          13.880913790535423
        ],
        [
          12.700165225821426,
          12.700165225821426
        ],
        [
          11.618531901241349,
          11.618531901241349
        ],
        [
          10.627514191203637,
          10.627514191203637
        ],
        [
          9.71963438492411,
          9.71963438492411
        ],
        [
          8.88827372296014,
          8.88827372296014
        ],
        [
          8.127540395373696,
          8.127540395373696
        ],
        [
          7.432161851514576,
          7.432161851514576
        ],
        [
          6.797396361933152,
          6.797396361933152
        ],
        [
          6.218959944220738,
          6.218959944220738
        ],
        [
          5.6929656367264485,
          5.6929656367264485
        ],
        [
          5.2158727602857695,
          5.2158727602857695
        ],
        [
          4.784444306660111,
          4.784444306660111
        ],
        [
          4.395710974719116,
          4.395710974719116
        ],
        [
          4.046940671179561,
          4.046940671179561
        ],
        [
          3.735612523440188,
          3.735612523440188
        ],
        [
          3.4593946334609793,
          3.4593946334609793
        ],
        [
          3.216124945289336,
          3.216124945289336
        ],
        [
          3.009,
          3.009
        ],
        [
          2.8291002702191657,
          2.8291002702191657
        ],
        [
          2.6789769195443265,
          2.6789769195443265
        ],
        [
          2.552036267058464,
          2.552036267058464
        ],
        [
          2.4469756660203257,
          2.4469756660203257
        ],
        [
          2.3625716118115645,
          2.3625716118115645
        ],
        [
          2.2976738363247247,
          2.2976738363247247
        ],
        [
          2.2512000057190438,
          2.2512000057190438
        ],
        [
          2.2221309401433076,
          2.2221309401433076
        ],
        [
          2.209506286634732,
          2.209506286634732
        ],
        [
          2.2124205869642823,
          2.2124205869642823
        ],
        [
          2.2300196910465484,
          2.2300196910465484
        ],
        [
          2.261497473966414,
          2.261497473966414
        ],
        [
          2.3060928209122,
          2.3060928209122
        ],
        [
          2.3630868495481487,
          2.3630868495481487
        ],
        [
          2.431800343776978,
          2.431800343776978
        ],
        [
          2.5115913765456708,
          2.5115913765456708
        ],
        [
          2.6018531024809626,
          2.6018531024809626
        ],
        [
          2.702011703764685,
          2.702011703764685
        ],
        [
          2.811524474885871,
          2.811524474885871
        ],
        [
          2.924,
          2.924
        ]
      ]
    },
    "17": {
      "label": "D17",
      "values": [
        [
          9.53,
          9.53
        ],
        [
          9.671628132032193,
          9.671628132032193
        ],
        [
          9.773967424969324,
          9.773967424969324
        ],
        [
          9.843250586772442,
          9.843250586772442
        ],
        [
          9.881553101003723,
          9.881553101003723
        ],
        [
          9.890783716847452,
          9.890783716847452
        ],
        [
          9.872707805602149,
          9.872707805602149
        ],
        [
          9.828966369197893,
          9.828966369197893
        ],
        [
          9.76109157058875,
          9.76109157058875
        ],
        [
          9.670519466594596,
          9.670519466594596
        ],
        [
          9.558600481180394,
          9.558600481180394
        ],
        [
          9.426608048384388,
          9.426608048384388
        ],
        [
          9.27574577008886,
          9.27574577008886
        ],
        [
          9.10715336814048,
          9.10715336814048
        ],
        [
          8.921911658368435,
          8.921911658368435
        ],
        [
          8.721046732485394,
          8.721046732485394
        ],
        [
          8.505533500261167,
          8.505533500261167
        ],
        [
          8.27629871695626,
          8.27629871695626
        ],
        [
          8.034223598457514,
          8.034223598457514
        ],
        [
          7.780146107913606,
          7.780146107913606
        ],
        [
          7.53,
          7.53
        ],
        [
          7.25422705952156,
          7.25422705952156
        ],
        [
          6.98483658962122,
          6.98483658962122
        ],
        [
          6.707273532586939,
          6.707273532586939
        ],
        [
          6.422091824077691,
          6.422091824077691
        ],
        [
          6.129818419103768,
          6.129818419103768
        ],
        [
          5.830954291982787,
          5.830954291982787
        ],
        [
          5.525975401382918,
          5.525975401382918
        ],
        [
          5.215333627119478,
          5.215333627119478
        ],
        [
          4.899457683501227,
          4.899457683501227
        ],
        [
          4.578754012518479,
          4.578754012518479
        ],
        [
          4.253607658980726,
          4.253607658980726
        ],
        [
          3.924383128784341,
          3.924383128784341
        ],
        [
          3.5914252307931047,
          3.5914252307931047
        ],
        [
          3.2550599023024622,
          3.2550599023024622
        ],
        [
          2.915595017690461,
          2.915595017690461
        ],
        [
          2.573321179629079,
          2.573321179629079
        ],
        [
          2.2285124920857196,
          2.2285124920857196
        ],
        [
          1.8814273142919524,
          1.8814273142919524
        ],
        [
          1.5323089948523652,
          1.5323089948523652
        ],
        [
          1.203,
          1.203
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 3.5,
    "fStops": [
      3.5,
      4,
      5.6,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22
  },
  "layout": {
    "yScFill": 0.3
  },
  "checks": {
    "gapSagFrac": 0.97
  },
  "groups": [
    {
      "text": "I",
      "fromSurface": "1",
      "toSurface": "7"
    },
    {
      "text": "II",
      "fromSurface": "8",
      "toSurface": "15"
    },
    {
      "text": "III",
      "fromSurface": "16",
      "toSurface": "17"
    },
    {
      "text": "IV",
      "fromSurface": "18",
      "toSurface": "28"
    }
  ],
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "1",
      "toSurface": "3"
    },
    {
      "text": "C2",
      "fromSurface": "20",
      "toSurface": "22"
    }
  ],
  "rays": {
    "offAxisFieldFrac": 0.3
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
