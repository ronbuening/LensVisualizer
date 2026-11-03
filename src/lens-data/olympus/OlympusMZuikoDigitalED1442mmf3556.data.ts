import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  "schema": 2,
  "key": "olympus-mzuiko-digital-ed-14-42mm-f35-56",
  "maker": "Olympus",
  "name": "OLYMPUS M.ZUIKO DIGITAL ED 14-42mm f/3.5-5.6",
  "subtitle": "JP 2010-186010 A — Numerical Example 1",
  "catalog": {
    "lensMounts": [
      "micro-four-thirds"
    ],
    "imageFormat": "four-thirds",
    "imageCircleMm": 22.9,
    "specs": [
      "9 ELEMENTS / 8 GROUPS",
      "DESIGN f = 14.29-41.19 mm",
      "DESIGN F/3.63-5.76",
      "4 ASPHERICAL SURFACES / 2 ELEMENTS",
      "1 ED / 1 HR ELEMENT"
    ],
    "elementCount": 9,
    "groupCount": 8,
    "focalLengthMm": {
      "marketing": [
        14,
        42
      ],
      "design": [
        14.29,
        41.19
      ]
    },
    "fNumber": {
      "marketing": 3.5,
      "design": 3.63
    }
  },
  "source": {
    "patentNumber": "JP 2010-186010 A",
    "example": { "label": "Numerical Example 1", "id": "1" },
    "patentYear": 2010,
    "authors": [
      "Yasuharu Yamada",
      "Takeshi Hosoya"
    ],
    "assignees": [
      "Olympus Imaging Corporation"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L11",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.7725,
      "vd": 49.6,
      "focalLengthMm": -21.639763838755105,
      "glass": "S-LAH66 (OHARA catalog equivalent; production supplier unspecified)",
      "diagramLabel": "L11"
    },
    {
      "id": 2,
      "name": "L12",
      "label": "Element 2",
      "type": "Aspherical Negative Meniscus",
      "nd": 1.52542,
      "vd": 55.78,
      "focalLengthMm": -58.67273621458309,
      "glass": "Unmatched (optical plastic, printed nd 1.52542 / νd 55.78; polymer unpublished)",
      "diagramLabel": "L12"
    },
    {
      "id": 3,
      "name": "L13",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.84666,
      "vd": 23.78,
      "focalLengthMm": 54.926922872691904,
      "glass": "FDS90 (HOYA catalog equivalent; production supplier unspecified)",
      "diagramLabel": "L13"
    },
    {
      "id": 4,
      "name": "L21",
      "label": "Element 4",
      "type": "Plano-Convex Positive",
      "nd": 1.83481,
      "vd": 42.71,
      "focalLengthMm": 25.43213425809466,
      "glass": "S-LAH55 (OHARA catalog equivalent; production supplier unspecified)",
      "diagramLabel": "L21"
    },
    {
      "id": 5,
      "name": "L22",
      "label": "Element 5",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.54,
      "focalLengthMm": 19.963449311075887,
      "glass": "S-FPL51 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": "inferred",
      "apdNote": "OHARA S-FPL51 coordinate match (νd 81.54), a fluorophosphate ED glass; Olympus lists one ED element, cemented to the HR element that follows.",
      "diagramLabel": "L22",
      "cemented": "L22 + L23"
    },
    {
      "id": 6,
      "name": "L23",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.90366,
      "vd": 31.32,
      "focalLengthMm": -10.450922563072584,
      "glass": "TAFD25 (HOYA catalog equivalent; production supplier unspecified)",
      "diagramLabel": "L23",
      "cemented": "L22 + L23"
    },
    {
      "id": 7,
      "name": "L24",
      "label": "Element 7",
      "type": "Positive Meniscus",
      "nd": 1.70154,
      "vd": 41.24,
      "focalLengthMm": 45.386577118549035,
      "glass": "S-BAH27 (OHARA catalog equivalent; production supplier unspecified)",
      "diagramLabel": "L24"
    },
    {
      "id": 8,
      "name": "L25",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.51823,
      "vd": 58.9,
      "focalLengthMm": 55.19778960378632,
      "glass": "S-NSL3 (OHARA catalog equivalent; production supplier unspecified)",
      "diagramLabel": "L25"
    },
    {
      "id": 9,
      "name": "L3",
      "label": "Element 9",
      "type": "Aspherical Positive Meniscus",
      "nd": 1.52542,
      "vd": 55.78,
      "focalLengthMm": 489.85113733436145,
      "glass": "Unmatched (optical plastic, printed nd 1.52542 / νd 55.78; polymer unpublished)",
      "diagramLabel": "L3"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 622.057,
      "d": 1.95,
      "sd": 14.5,
      "medium": 1
    },
    {
      "label": "2",
      "R": 16.257,
      "d": 1.163,
      "sd": 12.6
    },
    {
      "label": "3A",
      "R": 24.068,
      "d": 2,
      "sd": 12.2,
      "medium": 2,
      "asphere": {
        "K": 2.0761,
        "A4": 0.000094881,
        "A6": -0.0000010061,
        "A8": 5.5441e-9,
        "A10": -1.5976e-11
      }
    },
    {
      "label": "4A",
      "R": 13.129,
      "d": 5.26,
      "sd": 11.5,
      "asphere": {
        "A4": 0.000066885,
        "A6": -0.0000013641,
        "A8": 7.5439e-9,
        "A10": -3.0175e-11
      }
    },
    {
      "label": "5",
      "R": 20.929,
      "d": 3.122,
      "sd": 11.4,
      "medium": 3
    },
    {
      "label": "6",
      "R": 35.453,
      "sd": 11.4
    },
    {
      "label": "7",
      "R": 21.231,
      "d": 2.719,
      "sd": 6.7,
      "medium": 4
    },
    {
      "label": "8",
      "R": "flat",
      "d": 3.245,
      "sd": 6.7
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 0.9
    },
    {
      "label": "10",
      "R": 19.264,
      "d": 3.39,
      "sd": 5.8,
      "medium": 5
    },
    {
      "label": "11",
      "R": -19.264,
      "d": 1.615,
      "sd": 5.8,
      "medium": 6
    },
    {
      "label": "12",
      "R": 19.264,
      "d": 3.564,
      "sd": 5.8
    },
    {
      "label": "13",
      "R": -357.683,
      "d": 2.113,
      "sd": 7.1,
      "medium": 7
    },
    {
      "label": "14",
      "R": -29.309,
      "d": 1.672,
      "sd": 7.1
    },
    {
      "label": "15",
      "R": 88.348,
      "d": 2.652,
      "sd": 8.1,
      "medium": 8
    },
    {
      "label": "16",
      "R": -41.868,
      "sd": 8.1
    },
    {
      "label": "17A",
      "R": -25.613,
      "d": 2.2,
      "sd": 10.4,
      "medium": 9,
      "asphere": {
        "K": -3.3181,
        "A4": 0.000051432,
        "A6": -6.3896e-8,
        "A8": -1.7711e-10
      }
    },
    {
      "label": "18A",
      "R": -23.984,
      "d": 11.3,
      "sd": 10.4,
      "asphere": {
        "K": -1.92,
        "A4": 0.000087907,
        "A6": -8.3092e-8,
        "A8": -1.11376e-10,
        "A10": 2.4384e-13
      }
    }
  ],
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 14.29,
        "nominalFNumber": 3.63,
        "label": "Wide"
      },
      {
        "published": false,
        "focalLengthMm": 14.584319879690902,
        "nominalFNumber": 3.6725
      },
      {
        "published": false,
        "focalLengthMm": 14.896639813310895,
        "nominalFNumber": 3.715
      },
      {
        "published": false,
        "focalLengthMm": 15.222631319989242,
        "nominalFNumber": 3.7575
      },
      {
        "published": false,
        "focalLengthMm": 15.563212181769622,
        "nominalFNumber": 3.8
      },
      {
        "published": false,
        "focalLengthMm": 15.919384209446072,
        "nominalFNumber": 3.8425000000000002
      },
      {
        "published": false,
        "focalLengthMm": 16.292243084541152,
        "nominalFNumber": 3.885
      },
      {
        "published": false,
        "focalLengthMm": 16.682989617771387,
        "nominalFNumber": 3.9275
      },
      {
        "published": false,
        "focalLengthMm": 17.092942667687907,
        "nominalFNumber": 3.97
      },
      {
        "published": false,
        "focalLengthMm": 17.52355401229993,
        "nominalFNumber": 4.012500000000001
      },
      {
        "published": false,
        "focalLengthMm": 17.97642552703447,
        "nominalFNumber": 4.055
      },
      {
        "published": false,
        "focalLengthMm": 18.453329097390373,
        "nominalFNumber": 4.0975
      },
      {
        "published": false,
        "focalLengthMm": 18.956229788047057,
        "nominalFNumber": 4.140000000000001
      },
      {
        "published": false,
        "focalLengthMm": 19.487312907146478,
        "nominalFNumber": 4.1825
      },
      {
        "published": false,
        "focalLengthMm": 20.049015751768238,
        "nominalFNumber": 4.2250000000000005
      },
      {
        "published": false,
        "focalLengthMm": 20.64406500727128,
        "nominalFNumber": 4.2675
      },
      {
        "published": false,
        "focalLengthMm": 21.27552101121909,
        "nominalFNumber": 4.3100000000000005
      },
      {
        "published": false,
        "focalLengthMm": 21.946830398255337,
        "nominalFNumber": 4.3525
      },
      {
        "published": false,
        "focalLengthMm": 22.661889037583787,
        "nominalFNumber": 4.3950000000000005
      },
      {
        "published": false,
        "focalLengthMm": 23.42511768982133,
        "nominalFNumber": 4.4375
      },
      {
        "focalLengthMm": 24.24,
        "nominalFNumber": 4.48
      },
      {
        "published": false,
        "focalLengthMm": 24.75078185157625,
        "nominalFNumber": 4.5440000000000005
      },
      {
        "published": false,
        "focalLengthMm": 25.281849100398947,
        "nominalFNumber": 4.6080000000000005
      },
      {
        "published": false,
        "focalLengthMm": 25.83619089937415,
        "nominalFNumber": 4.672000000000001
      },
      {
        "published": false,
        "focalLengthMm": 26.41537157298883,
        "nominalFNumber": 4.736000000000001
      },
      {
        "published": false,
        "focalLengthMm": 27.021098846565874,
        "nominalFNumber": 4.800000000000001
      },
      {
        "published": false,
        "focalLengthMm": 27.65524066352429,
        "nominalFNumber": 4.864000000000001
      },
      {
        "published": false,
        "focalLengthMm": 28.319844426165744,
        "nominalFNumber": 4.928000000000001
      },
      {
        "published": false,
        "focalLengthMm": 29.017159077476823,
        "nominalFNumber": 4.992
      },
      {
        "published": false,
        "focalLengthMm": 29.749660525702907,
        "nominalFNumber": 5.056
      },
      {
        "published": false,
        "focalLengthMm": 30.520081017346346,
        "nominalFNumber": 5.12
      },
      {
        "published": false,
        "focalLengthMm": 31.33144319298426,
        "nominalFNumber": 5.184
      },
      {
        "published": false,
        "focalLengthMm": 32.18709972067059,
        "nominalFNumber": 5.248
      },
      {
        "published": false,
        "focalLengthMm": 33.09077960256126,
        "nominalFNumber": 5.311999999999999
      },
      {
        "published": false,
        "focalLengthMm": 34.04664250347135,
        "nominalFNumber": 5.376
      },
      {
        "published": false,
        "focalLengthMm": 35.059342770859736,
        "nominalFNumber": 5.44
      },
      {
        "published": false,
        "focalLengthMm": 36.13410522499051,
        "nominalFNumber": 5.504
      },
      {
        "published": false,
        "focalLengthMm": 37.27681532370199,
        "nominalFNumber": 5.568
      },
      {
        "published": false,
        "focalLengthMm": 38.49412698633405,
        "nominalFNumber": 5.632
      },
      {
        "published": false,
        "focalLengthMm": 39.7935922480311,
        "nominalFNumber": 5.696
      },
      {
        "focalLengthMm": 41.19,
        "nominalFNumber": 5.76,
        "label": "Tele"
      }
    ],
    "apertureModel": "from-nominal-fno"
  },
  "focus": {
    "closeFocusM": 0.25,
    "description": "The patent prints infinity spacings at wide, middle and tele only. It focuses by moving G1 alone toward the object (claim 3) but prints no near-focus spacings, so focusing is not modeled. The intermediate zoom positions are an inferred reconstruction, not the factory cam: the G1–G2 spacing follows a piecewise-linear law between the printed stations and the G2–G3 spacing is solved for infinity focus at each position. The marketed minimum focus distance is 0.25 m."
  },
  "gaps": {
    "6": {
      "label": "D6",
      "values": [
        [
          30.536,
          30.536
        ],
        [
          29.6326,
          29.6326
        ],
        [
          28.729200000000002,
          28.729200000000002
        ],
        [
          27.8258,
          27.8258
        ],
        [
          26.922400000000003,
          26.922400000000003
        ],
        [
          26.019000000000002,
          26.019000000000002
        ],
        [
          25.1156,
          25.1156
        ],
        [
          24.212200000000003,
          24.212200000000003
        ],
        [
          23.3088,
          23.3088
        ],
        [
          22.4054,
          22.4054
        ],
        [
          21.502000000000002,
          21.502000000000002
        ],
        [
          20.598599999999998,
          20.598599999999998
        ],
        [
          19.6952,
          19.6952
        ],
        [
          18.791800000000002,
          18.791800000000002
        ],
        [
          17.8884,
          17.8884
        ],
        [
          16.985,
          16.985
        ],
        [
          16.0816,
          16.0816
        ],
        [
          15.1782,
          15.1782
        ],
        [
          14.274799999999999,
          14.274799999999999
        ],
        [
          13.371400000000001,
          13.371400000000001
        ],
        [
          12.468,
          12.468
        ],
        [
          11.9351,
          11.9351
        ],
        [
          11.4022,
          11.4022
        ],
        [
          10.8693,
          10.8693
        ],
        [
          10.336400000000001,
          10.336400000000001
        ],
        [
          9.8035,
          9.8035
        ],
        [
          9.270599999999998,
          9.270599999999998
        ],
        [
          8.737699999999998,
          8.737699999999998
        ],
        [
          8.2048,
          8.2048
        ],
        [
          7.6719,
          7.6719
        ],
        [
          7.139,
          7.139
        ],
        [
          6.6061,
          6.6061
        ],
        [
          6.073199999999999,
          6.073199999999999
        ],
        [
          5.540300000000001,
          5.540300000000001
        ],
        [
          5.0074000000000005,
          5.0074000000000005
        ],
        [
          4.4745,
          4.4745
        ],
        [
          3.9415999999999993,
          3.9415999999999993
        ],
        [
          3.408699999999999,
          3.408699999999999
        ],
        [
          2.875800000000001,
          2.875800000000001
        ],
        [
          2.3429000000000006,
          2.3429000000000006
        ],
        [
          1.81,
          1.81
        ]
      ]
    },
    "16": {
      "label": "D16",
      "values": [
        [
          12.365,
          12.365
        ],
        [
          12.714470560914757,
          12.714470560914757
        ],
        [
          13.078984596115662,
          13.078984596115662
        ],
        [
          13.459529881753316,
          13.459529881753316
        ],
        [
          13.85718260742914,
          13.85718260742914
        ],
        [
          14.273117494708595,
          14.273117494708595
        ],
        [
          14.708619337807455,
          14.708619337807455
        ],
        [
          15.165096205248428,
          15.165096205248428
        ],
        [
          15.644094588236337,
          15.644094588236337
        ],
        [
          16.14731683909752,
          16.14731683909752
        ],
        [
          16.676641314125003,
          16.676641314125003
        ],
        [
          17.234145723121458,
          17.234145723121458
        ],
        [
          17.822134297455037,
          17.822134297455037
        ],
        [
          18.44316952558865,
          18.44316952558865
        ],
        [
          19.100109377767893,
          19.100109377767893
        ],
        [
          19.796151160423015,
          19.796151160423015
        ],
        [
          20.53488341996932,
          20.53488341996932
        ],
        [
          21.32034767409523,
          21.32034767409523
        ],
        [
          22.15711221214,
          22.15711221214
        ],
        [
          23.050360810185758,
          23.050360810185758
        ],
        [
          24.006,
          24.006
        ],
        [
          24.609142058759993,
          24.609142058759993
        ],
        [
          25.23787320492765,
          25.23787320492765
        ],
        [
          25.89387565051151,
          25.89387565051151
        ],
        [
          26.57898236018972,
          26.57898236018972
        ],
        [
          27.295194325586394,
          27.295194325586394
        ],
        [
          28.04470027054633,
          28.04470027054633
        ],
        [
          28.829899196126494,
          28.829899196126494
        ],
        [
          29.65342625448821,
          29.65342625448821
        ],
        [
          30.518182539612795,
          30.518182539612795
        ],
        [
          31.42736950450085,
          31.42736950450085
        ],
        [
          32.38452886536848,
          32.38452886536848
        ],
        [
          33.3935890412614,
          33.3935890412614
        ],
        [
          34.45891941287957,
          34.45891941287957
        ],
        [
          35.58539398093366,
          35.58539398093366
        ],
        [
          36.77846638023042,
          36.77846638023042
        ],
        [
          38.04425868521702,
          38.04425868521702
        ],
        [
          39.38966705867358,
          39.38966705867358
        ],
        [
          40.822488092156654,
          40.822488092156654
        ],
        [
          42.351570725731044,
          42.351570725731044
        ],
        [
          43.987,
          43.987
        ]
      ]
    }
  },
  "aperture": {
    "fStops": [
      3.63,
      4,
      4.48,
      5.6,
      5.76,
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
      "thicknessMm": 4.082,
      "nd": 1.51633,
      "vd": 64.14,
      "glass": "S-BSL7 (OHARA catalog equivalent; production supplier unspecified)",
      "gapAfterMm": 0.745,
      "source": "JP 2010-186010 A Numerical Example 1, surfaces 19–20: camera-side plate at its printed thickness and image gap"
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
      "toSurface": "16"
    },
    {
      "text": "G3",
      "fromSurface": "17A",
      "toSurface": "18A"
    }
  ],
  "doublets": [
    {
      "text": "L22 + L23",
      "fromSurface": "10",
      "toSurface": "12"
    }
  ],
  "layout": {
    "yScFill": 0.3
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
