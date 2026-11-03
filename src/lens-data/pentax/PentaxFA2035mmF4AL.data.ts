import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-fa-20-35mm-f4-al",
  "maker": "Pentax",
  "name": "PENTAX SMC FA 20-35mm f/4 AL",
  "subtitle": "US 6,246,529 B1 — Example 5; inferred continuous zoom path",
  "catalog": {
    "lensMounts": [
      "pentax-k"
    ],
    "imageFormat": "135-full-frame",
    "specs": [
      "10 ELEMENTS / 8 GROUPS",
      "DESIGN f = 20.60-34.01 mm",
      "DESIGN F/4",
      "2 ASPHERICAL SURFACES / 2 ELEMENTS (1 HYBRID)"
    ],
    "elementCount": 10,
    "groupCount": 8,
    "focalLengthMm": {
      "marketing": [
        20,
        35
      ],
      "design": [
        20.603183309270964,
        34.01115328433953
      ]
    },
    "fNumber": {
      "marketing": 4,
      "design": 4
    }
  },
  "source": {
    "patentNumber": "US 6,246,529 B1",
    "example": { "label": "Example 5", "id": "5" },
    "patentYear": 2001,
    "authors": [
      "Takayuki Sensui"
    ],
    "assignees": [
      "Asahi Kogaku Kogyo Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Physical element 1",
      "type": "Negative Meniscus",
      "nd": 1.7725,
      "vd": 49.6,
      "indexReference": "d",
      "focalLengthMm": -35.0846234981279,
      "glass": "S-LAH66 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Front negative meniscus of the negative first lens group (G1), convex to the object.",
      "diagramLabel": "L1"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Physical element 2",
      "type": "Negative Meniscus",
      "nd": 1.804,
      "vd": 46.6,
      "indexReference": "d",
      "focalLengthMm": -47.24823990417244,
      "glass": "S-LAH65V (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Glass body of G1's hybrid lens element; its concave rear face carries the resin layer L2R.",
      "diagramLabel": "L2",
      "cemented": "HYBRID"
    },
    {
      "id": 3,
      "name": "L2R",
      "label": "Hybrid resin layer",
      "type": "Negative Meniscus (1× Asph)",
      "nd": 1.53256,
      "vd": 45.9,
      "indexReference": "d",
      "focalLengthMm": -183.77490988630186,
      "glass": "Unmatched (patent resin; supplier unconfirmed)",
      "role": "Resin layer, 0.28 mm on axis, bonded to L2; its air-side surface 5A is the hybrid element's aspherical image-side surface.",
      "diagramLabel": "L2R",
      "cemented": "HYBRID"
    },
    {
      "id": 4,
      "name": "L3",
      "label": "Physical element 3",
      "type": "Positive Meniscus",
      "nd": 1.84666,
      "vd": 23.8,
      "indexReference": "d",
      "focalLengthMm": 76.9056719815398,
      "glass": "S-TIH53 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Positive meniscus that closes G1 and partly offsets the group's negative power.",
      "diagramLabel": "L3"
    },
    {
      "id": 5,
      "name": "L4",
      "label": "Physical element 4",
      "type": "Biconvex Positive",
      "nd": 1.51742,
      "vd": 52.4,
      "indexReference": "d",
      "focalLengthMm": 32.9606513464054,
      "glass": "S-NSL36 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Biconvex positive front member of the cemented second lens group (G2).",
      "diagramLabel": "L4",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L5",
      "label": "Physical element 5",
      "type": "Negative Meniscus",
      "nd": 1.804,
      "vd": 46.6,
      "indexReference": "d",
      "focalLengthMm": -50.1520691279464,
      "glass": "S-LAH65V (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Negative meniscus cemented behind L4, completing the weakly positive G2.",
      "diagramLabel": "L5",
      "cemented": "D1"
    },
    {
      "id": 7,
      "name": "L6",
      "label": "Physical element 6",
      "type": "Plano-convex Positive",
      "nd": 1.61772,
      "vd": 49.8,
      "indexReference": "d",
      "focalLengthMm": 53.76060350967903,
      "glass": "S-BSM28 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Plano-convex positive element just behind the diaphragm; first element of the positive third lens group (G3), which moves with the stop.",
      "diagramLabel": "L6"
    },
    {
      "id": 8,
      "name": "L7",
      "label": "Physical element 7",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.2,
      "indexReference": "d",
      "focalLengthMm": 25.97402009804842,
      "glass": "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Biconvex positive crown (νd 70.2) of G3's cemented sub-group.",
      "diagramLabel": "L7",
      "cemented": "D2"
    },
    {
      "id": 9,
      "name": "L8",
      "label": "Physical element 8",
      "type": "Biconcave Negative",
      "nd": 1.8061,
      "vd": 40.9,
      "indexReference": "d",
      "focalLengthMm": -25.53386972420641,
      "glass": "S-LAH53 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Biconcave negative flint (νd 40.9) cemented behind L7.",
      "diagramLabel": "L8",
      "cemented": "D2"
    },
    {
      "id": 10,
      "name": "L9",
      "label": "Physical element 9",
      "type": "Negative Meniscus",
      "nd": 1.84666,
      "vd": 23.8,
      "indexReference": "d",
      "focalLengthMm": -49.3670331338058,
      "glass": "S-TIH53 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Air-spaced negative meniscus near the rear of G3, convex to the object.",
      "diagramLabel": "L9"
    },
    {
      "id": 11,
      "name": "L10",
      "label": "Physical element 10",
      "type": "Positive Meniscus (1× Asph)",
      "nd": 1.58913,
      "vd": 61.2,
      "indexReference": "d",
      "focalLengthMm": 43.954356462003815,
      "glass": "J-SK5 (HIKARI catalog equivalent; production supplier unspecified)",
      "role": "Final positive meniscus, convex to the image; its rear surface 19A is aspherical.",
      "diagramLabel": "L10"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 54.9,
      "d": 1.5,
      "sd": 17.6,
      "medium": 1
    },
    {
      "label": "2",
      "R": 17.929,
      "d": 7.3,
      "sd": 14.3
    },
    {
      "label": "3",
      "R": 71.7,
      "d": 1.5,
      "sd": 14,
      "medium": 2
    },
    {
      "label": "4",
      "R": 24.6,
      "d": 0.28,
      "sd": 14,
      "medium": 3
    },
    {
      "label": "5A",
      "R": 19.581,
      "d": 8.93,
      "sd": 14,
      "asphere": {
        "K": -1,
        "A4": -0.00000967,
        "A6": -1.87e-8,
        "A8": -8.47e-11
      }
    },
    {
      "label": "6",
      "R": 37.35,
      "d": 3.05,
      "sd": 12.3,
      "medium": 4
    },
    {
      "label": "7",
      "R": 84.318,
      "sd": 12.3
    },
    {
      "label": "8",
      "R": 56.405,
      "d": 5,
      "sd": 8.9,
      "medium": 5
    },
    {
      "label": "9",
      "R": -23.707,
      "d": 1.5,
      "sd": 8.9,
      "medium": 6
    },
    {
      "label": "10",
      "R": -59.155,
      "sd": 8.9
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 1.7
    },
    {
      "label": "11",
      "R": "flat",
      "d": 2.73,
      "sd": 9,
      "medium": 7
    },
    {
      "label": "12",
      "R": -33.209,
      "d": 0.1,
      "sd": 9
    },
    {
      "label": "13",
      "R": 24.406,
      "d": 5.4,
      "sd": 8.7,
      "medium": 8
    },
    {
      "label": "14",
      "R": -24.406,
      "d": 1.5,
      "sd": 8.7,
      "medium": 9
    },
    {
      "label": "15",
      "R": 135,
      "d": 8.38,
      "sd": 8.7
    },
    {
      "label": "16",
      "R": 46.238,
      "d": 2.08,
      "sd": 7.1,
      "medium": 10
    },
    {
      "label": "17",
      "R": 21.5,
      "d": 1.73,
      "sd": 7.1
    },
    {
      "label": "18",
      "R": -139,
      "d": 3,
      "sd": 7.9,
      "medium": 11
    },
    {
      "label": "19A",
      "R": -22.003,
      "sd": 7.9,
      "asphere": {
        "A4": 0.00000253,
        "A6": -6.23e-9,
        "A8": -2.97e-10
      }
    }
  ],
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 20.6,
        "label": "Wide"
      },
      {
        "published": false,
        "focalLengthMm": 21.239460409898676
      },
      {
        "published": false,
        "focalLengthMm": 21.879329236645432
      },
      {
        "published": false,
        "focalLengthMm": 22.522789789528936
      },
      {
        "published": false,
        "focalLengthMm": 23.16984206849123
      },
      {
        "published": false,
        "focalLengthMm": 23.820486073592576
      },
      {
        "published": false,
        "focalLengthMm": 24.474721804812457
      },
      {
        "published": false,
        "focalLengthMm": 25.132549262150967
      },
      {
        "published": false,
        "focalLengthMm": 25.79396844560799
      },
      {
        "published": false,
        "focalLengthMm": 26.458979355212403
      },
      {
        "published": false,
        "focalLengthMm": 27.127581990877786
      },
      {
        "published": false,
        "focalLengthMm": 27.79977635269052
      },
      {
        "published": false,
        "focalLengthMm": 28.475562440621836
      },
      {
        "published": false,
        "focalLengthMm": 29.15494025467171
      },
      {
        "published": false,
        "focalLengthMm": 29.83790979484017
      },
      {
        "published": false,
        "focalLengthMm": 30.524471061127176
      },
      {
        "published": false,
        "focalLengthMm": 31.214624053532795
      },
      {
        "published": false,
        "focalLengthMm": 31.90836877210872
      },
      {
        "published": false,
        "focalLengthMm": 32.60570521670306
      },
      {
        "published": false,
        "focalLengthMm": 33.306633387460984
      },
      {
        "focalLengthMm": 34.01,
        "label": "Tele"
      }
    ],
    "apertureModel": "from-nominal-fno",
    "step": 0.005
  },
  "focus": {
    "closeFocusM": 0.3,
    "description": "The patent prints infinity spacings at wide and tele only; focusing is not modeled. The intermediate zoom positions are an inferred reconstruction, not the factory cam: the G2–stop spacing and the back focus follow linear laws between the printed stations and the G1–G2 spacing is solved for infinity focus at each position. The marketed minimum focus distance is 0.3 m."
  },
  "gaps": {
    "7": {
      "label": "G1–G2",
      "values": [
        [
          14.851,
          14.851
        ],
        [
          13.70673763899026,
          13.70673763899026
        ],
        [
          12.63464424167495,
          12.63464424167495
        ],
        [
          11.6290817847615,
          11.6290817847615
        ],
        [
          10.68497492117853,
          10.68497492117853
        ],
        [
          9.797742634936503,
          9.797742634936503
        ],
        [
          8.963239619613457,
          8.963239619613457
        ],
        [
          8.177705802980476,
          8.177705802980476
        ],
        [
          7.437722727595122,
          7.437722727595122
        ],
        [
          6.740175724806301,
          6.740175724806301
        ],
        [
          6.082221004199856,
          6.082221004199856
        ],
        [
          5.461256928446222,
          5.461256928446222
        ],
        [
          4.874898866537804,
          4.874898866537804
        ],
        [
          4.320957114949499,
          4.320957114949499
        ],
        [
          3.797417459368858,
          3.797417459368858
        ],
        [
          3.3024240156001445,
          3.3024240156001445
        ],
        [
          2.8342640438949447,
          2.8342640438949447
        ],
        [
          2.391354476889096,
          2.391354476889096
        ],
        [
          1.9722299400129693,
          1.9722299400129693
        ],
        [
          1.575532074209945,
          1.575532074209945
        ],
        [
          1.2,
          1.2
        ]
      ]
    },
    "10": {
      "label": "G2–STO",
      "values": [
        [
          8.485,
          8.485
        ],
        [
          8.130749999999999,
          8.130749999999999
        ],
        [
          7.7764999999999995,
          7.7764999999999995
        ],
        [
          7.422249999999999,
          7.422249999999999
        ],
        [
          7.0680000000000005,
          7.0680000000000005
        ],
        [
          6.713749999999999,
          6.713749999999999
        ],
        [
          6.359499999999999,
          6.359499999999999
        ],
        [
          6.00525,
          6.00525
        ],
        [
          5.650999999999999,
          5.650999999999999
        ],
        [
          5.29675,
          5.29675
        ],
        [
          4.9425,
          4.9425
        ],
        [
          4.5882499999999995,
          4.5882499999999995
        ],
        [
          4.234,
          4.234
        ],
        [
          3.8797499999999996,
          3.8797499999999996
        ],
        [
          3.5255,
          3.5255
        ],
        [
          3.1712499999999997,
          3.1712499999999997
        ],
        [
          2.8169999999999993,
          2.8169999999999993
        ],
        [
          2.4627499999999998,
          2.4627499999999998
        ],
        [
          2.1085,
          2.1085
        ],
        [
          1.7542500000000003,
          1.7542500000000003
        ],
        [
          1.4,
          1.4
        ]
      ]
    },
    "19A": {
      "label": "BF",
      "values": [
        [
          36.9,
          36.9
        ],
        [
          37.7125,
          37.7125
        ],
        [
          38.525,
          38.525
        ],
        [
          39.3375,
          39.3375
        ],
        [
          40.15,
          40.15
        ],
        [
          40.9625,
          40.9625
        ],
        [
          41.775,
          41.775
        ],
        [
          42.5875,
          42.5875
        ],
        [
          43.4,
          43.4
        ],
        [
          44.212500000000006,
          44.212500000000006
        ],
        [
          45.025,
          45.025
        ],
        [
          45.8375,
          45.8375
        ],
        [
          46.65,
          46.65
        ],
        [
          47.4625,
          47.4625
        ],
        [
          48.275,
          48.275
        ],
        [
          49.0875,
          49.0875
        ],
        [
          49.9,
          49.9
        ],
        [
          50.7125,
          50.7125
        ],
        [
          51.525,
          51.525
        ],
        [
          52.3375,
          52.3375
        ],
        [
          53.15,
          53.15
        ]
      ]
    }
  },
  "aperture": {
    "nominalFNumber": 4,
    "fStops": [
      4,
      5.6,
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
      "text": "G1 (−)",
      "fromSurface": "1",
      "toSurface": "7"
    },
    {
      "text": "G2 (+)",
      "fromSurface": "8",
      "toSurface": "10"
    },
    {
      "text": "G3 (+)",
      "fromSurface": "11",
      "toSurface": "19A"
    }
  ],
  "doublets": [
    {
      "text": "HYBRID",
      "fromSurface": "3",
      "toSurface": "5A"
    },
    {
      "text": "D1",
      "fromSurface": "8",
      "toSurface": "10"
    },
    {
      "text": "D2",
      "fromSurface": "13",
      "toSurface": "15"
    }
  ],
  "layout": {
    "yScFill": 0.3
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
