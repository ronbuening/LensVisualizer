import type { LensDataV2Input } from "../../types/lensDataV2.js";
/**
 * NOTE ON SEMI-DIAMETERS: the patent prints no clear apertures. The values are estimated from the wide-state
 * cross-section (Figure 1 of JP H02-39116 A, the same example as JP 2706781 B2) and floor-checked by real-ray trace
 * at every zoom position. S18 is 5.65 mm, the height of the F4/F5.6 axial marginal ray. L10's concave front face
 * there nearly touches L9's rear face, as the figure draws it. checks.gapSagFrac is therefore 0.98 for the whole lens
 * (0.97 refuses S18). S11 = 5.8 mm and S19 = 5.7 mm also use the raised allowance where they nearly meet S10
 * and S20; the literal spherical faces remain separated. L12 is held at 7.1 mm, above the drawn 6.5 mm, so
 * the engine's traced field is not reduced at any zoom position.
 */
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
      "glass": "S-FSL5 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Air-separated positive G1 crown meniscus.",
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
      "glass": "F5 (Schott catalog equivalent; production supplier unspecified)",
      "role": "Negative flint member of the central G2 cemented pair.",
      "cemented": "D2",
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
      "glass": "S-FTM16 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "First positive rear-group singlet, immediately after the source stop.",
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
      "glass": "S-BAL14 (OHARA catalog equivalent; production supplier unspecified)",
      "role": "Second positive rear-group singlet.",
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
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 107.06,
      "d": 1.2,
      "sd": 17.7,
      "medium": 1
    },
    {
      "label": "2",
      "R": 35.5,
      "d": 6.6,
      "sd": 16.1,
      "medium": 2
    },
    {
      "label": "3",
      "R": -70.951,
      "d": 0.15,
      "sd": 16.1
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
      "sd": 9.2,
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
      "sd": 5.8,
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
      "sd": 6.2
    },
    {
      "label": "18",
      "R": -30.758,
      "d": 6,
      "sd": 5.65,
      "medium": 10
    },
    {
      "label": "19",
      "R": 19.583,
      "d": 0.9,
      "sd": 5.7
    },
    {
      "label": "20",
      "R": -1011.23,
      "d": 2,
      "sd": 6.2,
      "medium": 11
    },
    {
      "label": "21",
      "R": -21.52,
      "d": 0.15,
      "sd": 6.2
    },
    {
      "label": "22",
      "R": 49.078,
      "d": 2.3,
      "sd": 7.1,
      "medium": 12
    },
    {
      "label": "23",
      "R": -36.008,
      "sd": 7.1
    }
  ],
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 25.78,
        "nominalFNumber": 4,
        "label": "Wide 25.78 mm",
        "published": true
      },
      {
        "published": false,
        "focalLengthMm": 26.98488265329816,
        "nominalFNumber": 4.08
      },
      {
        "published": false,
        "focalLengthMm": 28.223945691790195,
        "nominalFNumber": 4.16
      },
      {
        "published": false,
        "focalLengthMm": 29.543738731616383,
        "nominalFNumber": 4.24
      },
      {
        "published": false,
        "focalLengthMm": 30.950723127257042,
        "nominalFNumber": 4.32
      },
      {
        "published": false,
        "focalLengthMm": 32.45192074099852,
        "nominalFNumber": 4.4
      },
      {
        "published": false,
        "focalLengthMm": 34.05495536237892,
        "nominalFNumber": 4.48
      },
      {
        "published": false,
        "focalLengthMm": 35.76809337007044,
        "nominalFNumber": 4.56
      },
      {
        "published": false,
        "focalLengthMm": 37.60028192256409,
        "nominalFNumber": 4.640000000000001
      },
      {
        "published": false,
        "focalLengthMm": 39.561182286076466,
        "nominalFNumber": 4.72
      },
      {
        "published": false,
        "focalLengthMm": 41.66119501958914,
        "nominalFNumber": 4.8
      },
      {
        "published": false,
        "focalLengthMm": 43.911472583183446,
        "nominalFNumber": 4.88
      },
      {
        "published": false,
        "focalLengthMm": 46.32391345280352,
        "nominalFNumber": 4.96
      },
      {
        "published": false,
        "focalLengthMm": 48.91112994031526,
        "nominalFNumber": 5.04
      },
      {
        "published": false,
        "focalLengthMm": 51.68637955665967,
        "nominalFNumber": 5.12
      },
      {
        "published": false,
        "focalLengthMm": 54.663446847748716,
        "nominalFNumber": 5.2
      },
      {
        "published": false,
        "focalLengthMm": 57.856459128996434,
        "nominalFNumber": 5.28
      },
      {
        "published": false,
        "focalLengthMm": 61.27961544620208,
        "nominalFNumber": 5.36
      },
      {
        "published": false,
        "focalLengthMm": 64.94680349367819,
        "nominalFNumber": 5.44
      },
      {
        "published": false,
        "focalLengthMm": 68.87107438375453,
        "nominalFNumber": 5.52
      },
      {
        "focalLengthMm": 73.05,
        "nominalFNumber": 5.6,
        "label": "Tele 73.05 mm",
        "published": true
      }
    ],
    "apertureModel": "from-nominal-fno",
    "step": 0.005
  },
  "focus": {
    "closeFocusM": 0.7,
    "description": "Only infinity focus is modeled. The patent describes near focusing by moving G3 toward the image, but supplies no quantitative near-focus travel. The patent prints the wide and tele states. The interpolated intermediate zoom path keeps G1 and G3 coupled and D5+D12 constant, with D5 varying linearly. The rear image gap is calculated for a fixed image plane while preserving the interpolated endpoint defocus. Both printed endpoint prescriptions are unchanged; intermediate positions are not published lens positions or measured factory cam motion. Aperture variation is interpolated. No finite-focus positions are modeled."
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
          1.58895,
          1.58895
        ],
        [
          2.1779,
          2.1779
        ],
        [
          2.76685,
          2.76685
        ],
        [
          3.3558000000000003,
          3.3558000000000003
        ],
        [
          3.94475,
          3.94475
        ],
        [
          4.5337,
          4.5337
        ],
        [
          5.12265,
          5.12265
        ],
        [
          5.7116,
          5.7116
        ],
        [
          6.30055,
          6.30055
        ],
        [
          6.8895,
          6.8895
        ],
        [
          7.4784500000000005,
          7.4784500000000005
        ],
        [
          8.0674,
          8.0674
        ],
        [
          8.65635,
          8.65635
        ],
        [
          9.2453,
          9.2453
        ],
        [
          9.83425,
          9.83425
        ],
        [
          10.4232,
          10.4232
        ],
        [
          11.01215,
          11.01215
        ],
        [
          11.6011,
          11.6011
        ],
        [
          12.19005,
          12.19005
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
          12.178049999999999,
          12.178049999999999
        ],
        [
          11.5891,
          11.5891
        ],
        [
          11.000149999999998,
          11.000149999999998
        ],
        [
          10.4112,
          10.4112
        ],
        [
          9.82225,
          9.82225
        ],
        [
          9.2333,
          9.2333
        ],
        [
          8.644350000000001,
          8.644350000000001
        ],
        [
          8.055399999999999,
          8.055399999999999
        ],
        [
          7.466450000000001,
          7.466450000000001
        ],
        [
          6.8774999999999995,
          6.8774999999999995
        ],
        [
          6.288549999999999,
          6.288549999999999
        ],
        [
          5.6996,
          5.6996
        ],
        [
          5.11065,
          5.11065
        ],
        [
          4.5217,
          4.5217
        ],
        [
          3.93275,
          3.93275
        ],
        [
          3.3437999999999994,
          3.3437999999999994
        ],
        [
          2.7548500000000002,
          2.7548500000000002
        ],
        [
          2.1658999999999997,
          2.1658999999999997
        ],
        [
          1.5769500000000005,
          1.5769500000000005
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
          42.10514431195716,
          42.10514431195716
        ],
        [
          42.84061863696222,
          42.84061863696222
        ],
        [
          43.607939215672296,
          43.607939215672296
        ],
        [
          44.408662786742774,
          44.408662786742774
        ],
        [
          45.24437471325678,
          45.24437471325678
        ],
        [
          46.11667267790088,
          46.11667267790088
        ],
        [
          47.02714477971421,
          47.02714477971421
        ],
        [
          47.977340592633716,
          47.977340592633716
        ],
        [
          48.96873341879713,
          48.96873341879713
        ],
        [
          50.00267158116631,
          50.00267158116631
        ],
        [
          51.080316145985186,
          51.080316145985186
        ],
        [
          52.20256194552396,
          52.20256194552396
        ],
        [
          53.369938192670666,
          53.369938192670666
        ],
        [
          54.582484361174664,
          54.582484361174664
        ],
        [
          55.839596389114924,
          55.839596389114924
        ],
        [
          57.13983772026933,
          57.13983772026933
        ],
        [
          58.48070934681113,
          58.48070934681113
        ],
        [
          59.858373041797506,
          59.858373041797506
        ],
        [
          61.2673226466158,
          61.2673226466158
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
      "text": "G1 (f1)",
      "fromSurface": "1",
      "toSurface": "5"
    },
    {
      "text": "G2 (f2)",
      "fromSurface": "6",
      "toSurface": "12"
    },
    {
      "text": "G3 (f3)",
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
  },
  "checks": {
    "gapSagFrac": 0.98
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
