import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2001/0006433 A1 (Hiroyasu Ozaki), Embodiment 1, Table 1 (PDF p. 19): R, d, nd, νd and the printed fB values are
 * transcribed as printed, without scaling. Front page field (73) prints the assignee as "ASAHI KOGAKU KOGYO KABUSHIKI
 * KAISHA"; the catalog uses the corpus spelling "Asahi Kogaku Kogyo Co., Ltd." for the same company.
 * Groups G1/G2/G3 hold 3/3/5 elements: 11 elements in 9 air-separated groups. Fig. 1 labels only the groups
 * (10/20/30), so the elements are named L1–L11 in order.
 * Indices are d-line (¶0065). The patent names no glasses and has no aspheres or cover-glass plates.
 * Table 1 has no object-distance row; it is read as infinity focus because the printed fB agrees with the paraxial
 * image distance.
 * Stop: D11 runs from S11 to the diaphragm; the printed 0.750 mm diaphragm-to-S12 spacing is kept and not subtracted
 * from D11.
 * The printed states are 103.00/160.00/290.04 mm at f/4.8/5.3/6.0; the marketed 100-300mm f/4.7-5.8 is rounded.
 * Zoom: 65 positions evenly spaced in zoom; only indices 0, 32 and 64 are the printed states (published: true). The
 * others are interpolated and carry calculated focal lengths; this is not the production cam. D11 and BF interpolate
 * the printed values; D6 is solved so the paraxial image keeps the interpolated offset of the printed states. The
 * printed image planes sit +0.000367/+0.002762/-0.006871 mm from paraxial focus and are left as printed.
 * Semi-diameters are estimated from Fig. 1 (wide state) and floor-checked by real-ray trace; the patent prints no
 * clear apertures. Re-measured on the scan, every element is within 2% of the figure except L6, which Fig. 1 draws
 * square at about 12.45 mm with r9 and r10 meeting at the rim. In the prescription S9 and S10 meet at 12.13 mm, so
 * S10 is 12.0 mm, the least rim that passes the 290 mm f/6.0 axial beam by the repo's aperture audit; it leaves the
 * faces apart but needs checks.gapSagFrac 0.98. About 97% of the tele axial entrance area passes.
 * Focus: infinity only; both focus positions repeat the infinity spacings. ¶0058 describes focusing by G1. closeFocusM
 * 1.5 is the published minimum focus distance; moving G1 about 19 mm forward at 290 mm reaches it at 0.26×.
 * Product: Pentax lists the SMC P-FA 100-300mm f/4.7-5.8 (product no. 27610) with 11 elements / 9 groups and no power
 * zoom; the earlier FA 100-300mm f/4.5-5.6 power zoom (27927) is a different lens. The patent does not name the
 * product, so the correlation is qualified. No teleconverter support is declared.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-fa-100-300mm-f47-58",
  "maker": "Pentax",
  "name": "PENTAX SMC FA 100-300mm f/4.7-5.8",
  "subtitle": "US 2001/0006433 A1, Embodiment 1 \u2014 qualified production correlation",
  "catalog": {
    "lensMounts": [
      "pentax-k"
    ],
    "imageFormat": "135-full-frame",
    "specs": [
      "11 ELEMENTS / 9 GROUPS",
      "DESIGN f = 103.00–290.04 mm",
      "DESIGN F/4.8–6.0",
      "ALL SPHERICAL"
    ],
    "elementCount": 11,
    "groupCount": 9,
    "focalLengthMm": {
      "marketing": [
        100,
        300
      ],
      "design": [
        103,
        290.04
      ]
    },
    "fNumber": {
      "marketing": 4.7,
      "design": 4.8
    }
  },
  "source": {
    "patentNumber": "US 2001/0006433 A1",
    "example": {
      "label": "Embodiment 1",
      "id": "1"
    },
    "patentYear": 2001,
    "authors": [
      "Hiroyasu Ozaki"
    ],
    "assignees": [
      "Asahi Kogaku Kogyo Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "diagramLabel": "L1",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.2,
      "indexReference": "d",
      "focalLengthMm": 205.315293866,
      "glass": "S-FSL5 (catalog equivalent; supplier unconfirmed)",
      "role": "Positive front element of the focusing first group (G1)",
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "diagramLabel": "L2",
      "type": "Negative Meniscus",
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "d",
      "focalLengthMm": -232.869744075,
      "glass": "S-TIH6 (catalog equivalent; supplier unconfirmed)",
      "role": "Dense-flint negative element correcting G1's color",
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "diagramLabel": "L3",
      "type": "Positive Meniscus",
      "nd": 1.48749,
      "vd": 70.2,
      "indexReference": "d",
      "focalLengthMm": 158.73575657,
      "glass": "S-FSL5 (catalog equivalent; supplier unconfirmed)",
      "role": "Rear positive meniscus of the first group",
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "diagramLabel": "L4",
      "type": "Negative Meniscus",
      "nd": 1.744,
      "vd": 44.8,
      "indexReference": "d",
      "focalLengthMm": -25.106735512,
      "glass": "S-LAM2 (catalog equivalent; supplier unconfirmed)",
      "role": "Strongest negative element; front of the second-group (G2) doublet",
      "cemented": "C1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "diagramLabel": "L5",
      "type": "Positive Meniscus",
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "d",
      "focalLengthMm": 30.753682284,
      "glass": "S-TIH6 (catalog equivalent; supplier unconfirmed)",
      "role": "Positive flint partner correcting the color of the G2 doublet",
      "cemented": "C1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "diagramLabel": "L6",
      "type": "Biconcave Negative",
      "nd": 1.804,
      "vd": 46.6,
      "indexReference": "d",
      "focalLengthMm": -48.035351512,
      "glass": "S-LAH65 (catalog equivalent; supplier unconfirmed)",
      "role": "Rear negative element of the stationary second group",
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "diagramLabel": "L7",
      "type": "Biconvex Positive",
      "nd": 1.6516,
      "vd": 58.5,
      "indexReference": "d",
      "focalLengthMm": 58.645236298,
      "glass": "S-LAL7 (catalog equivalent; supplier unconfirmed)",
      "role": "Equiconvex front element of the third group (G3), just behind the stop",
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "diagramLabel": "L8",
      "type": "Biconvex Positive",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "focalLengthMm": 43.170651179,
      "glass": "S-BSL7 (catalog equivalent; supplier unconfirmed)",
      "role": "Positive crown of the G3 cemented doublet",
      "cemented": "C2"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "diagramLabel": "L9",
      "type": "Biconcave Negative",
      "nd": 1.84666,
      "vd": 23.8,
      "indexReference": "d",
      "focalLengthMm": -59.621754206,
      "glass": "S-TIH53 (catalog equivalent; supplier unconfirmed)",
      "role": "Dense-flint negative partner of the G3 doublet",
      "cemented": "C2"
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "diagramLabel": "L10",
      "type": "Biconvex Positive",
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "d",
      "focalLengthMm": 69.578729056,
      "glass": "S-TIH6 (catalog equivalent; supplier unconfirmed)",
      "role": "Positive element ahead of the rear meniscus, after the long G3 air space",
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "diagramLabel": "L11",
      "type": "Negative Meniscus",
      "nd": 1.804,
      "vd": 46.6,
      "indexReference": "d",
      "focalLengthMm": -43.593120239,
      "glass": "S-LAH65 (catalog equivalent; supplier unconfirmed)",
      "role": "Rear negative meniscus, concave to the object, giving G3 its telephoto form",
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 146.86,
      "sd": 25.5,
      "medium": 1,
      "d": 5.672
    },
    {
      "label": "2",
      "R": -310.301,
      "sd": 25.5,
      "d": 0.15
    },
    {
      "label": "3",
      "R": 83.006,
      "sd": 24.9,
      "medium": 2,
      "d": 1.9
    },
    {
      "label": "4",
      "R": 56.948,
      "sd": 24.9,
      "d": 0.184
    },
    {
      "label": "5",
      "R": 57.774,
      "sd": 24.2,
      "medium": 3,
      "d": 6.301
    },
    {
      "label": "6",
      "R": 219.852,
      "sd": 24.2
    },
    {
      "label": "7",
      "R": 547.113,
      "sd": 13.0,
      "medium": 4,
      "d": 1.4
    },
    {
      "label": "8",
      "R": 18.043,
      "sd": 13.0,
      "medium": 5,
      "d": 5.271
    },
    {
      "label": "9",
      "R": 57.829,
      "sd": 13.0,
      "d": 2.684
    },
    {
      "label": "10",
      "R": -53.299,
      "sd": 12.0,
      "medium": 6,
      "d": 1.3
    },
    {
      "label": "11",
      "R": 141.758,
      "sd": 12.3
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 0.75
    },
    {
      "label": "12",
      "R": 75.674,
      "sd": 13.1,
      "medium": 7,
      "d": 3.777
    },
    {
      "label": "13",
      "R": -75.674,
      "sd": 13.1,
      "d": 0.1
    },
    {
      "label": "14",
      "R": 35.935,
      "sd": 13.0,
      "medium": 8,
      "d": 5.354
    },
    {
      "label": "15",
      "R": -55.726,
      "sd": 13.0,
      "medium": 9,
      "d": 1.3
    },
    {
      "label": "16",
      "R": 541.889,
      "sd": 13.0,
      "d": 42.454
    },
    {
      "label": "17",
      "R": 65.681,
      "sd": 10.2,
      "medium": 10,
      "d": 2.564
    },
    {
      "label": "18",
      "R": -374.379,
      "sd": 10.2,
      "d": 3.329
    },
    {
      "label": "19",
      "R": -31.064,
      "sd": 10.5,
      "medium": 11,
      "d": 1.2
    },
    {
      "label": "20",
      "R": -277.927,
      "sd": 10.5
    }
  ],
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 103.0,
        "nominalFNumber": 4.8,
        "published": true
      },
      {
        "focalLengthMm": 104.575738826,
        "nominalFNumber": 4.815625,
        "published": false
      },
      {
        "focalLengthMm": 106.16397126,
        "nominalFNumber": 4.83125,
        "published": false
      },
      {
        "focalLengthMm": 107.765527973,
        "nominalFNumber": 4.846875,
        "published": false
      },
      {
        "focalLengthMm": 109.380408966,
        "nominalFNumber": 4.8625,
        "published": false
      },
      {
        "focalLengthMm": 111.008614239,
        "nominalFNumber": 4.878125,
        "published": false
      },
      {
        "focalLengthMm": 112.650143791,
        "nominalFNumber": 4.89375,
        "published": false
      },
      {
        "focalLengthMm": 114.304997622,
        "nominalFNumber": 4.909375,
        "published": false
      },
      {
        "focalLengthMm": 115.973175733,
        "nominalFNumber": 4.925,
        "published": false
      },
      {
        "focalLengthMm": 117.654678123,
        "nominalFNumber": 4.940625,
        "published": false
      },
      {
        "focalLengthMm": 119.349504793,
        "nominalFNumber": 4.95625,
        "published": false
      },
      {
        "focalLengthMm": 121.057655742,
        "nominalFNumber": 4.971875,
        "published": false
      },
      {
        "focalLengthMm": 122.779130971,
        "nominalFNumber": 4.9875,
        "published": false
      },
      {
        "focalLengthMm": 124.513930479,
        "nominalFNumber": 5.003125,
        "published": false
      },
      {
        "focalLengthMm": 126.262054266,
        "nominalFNumber": 5.01875,
        "published": false
      },
      {
        "focalLengthMm": 128.023502333,
        "nominalFNumber": 5.034375,
        "published": false
      },
      {
        "focalLengthMm": 129.798274679,
        "nominalFNumber": 5.05,
        "published": false
      },
      {
        "focalLengthMm": 131.586371305,
        "nominalFNumber": 5.065625,
        "published": false
      },
      {
        "focalLengthMm": 133.38779221,
        "nominalFNumber": 5.08125,
        "published": false
      },
      {
        "focalLengthMm": 135.202537395,
        "nominalFNumber": 5.096875,
        "published": false
      },
      {
        "focalLengthMm": 137.030606859,
        "nominalFNumber": 5.1125,
        "published": false
      },
      {
        "focalLengthMm": 138.872000602,
        "nominalFNumber": 5.128125,
        "published": false
      },
      {
        "focalLengthMm": 140.726718625,
        "nominalFNumber": 5.14375,
        "published": false
      },
      {
        "focalLengthMm": 142.594760927,
        "nominalFNumber": 5.159375,
        "published": false
      },
      {
        "focalLengthMm": 144.476127509,
        "nominalFNumber": 5.175,
        "published": false
      },
      {
        "focalLengthMm": 146.37081837,
        "nominalFNumber": 5.190625,
        "published": false
      },
      {
        "focalLengthMm": 148.278833511,
        "nominalFNumber": 5.20625,
        "published": false
      },
      {
        "focalLengthMm": 150.200172931,
        "nominalFNumber": 5.221875,
        "published": false
      },
      {
        "focalLengthMm": 152.134836631,
        "nominalFNumber": 5.2375,
        "published": false
      },
      {
        "focalLengthMm": 154.082824609,
        "nominalFNumber": 5.253125,
        "published": false
      },
      {
        "focalLengthMm": 156.044136868,
        "nominalFNumber": 5.26875,
        "published": false
      },
      {
        "focalLengthMm": 158.018773406,
        "nominalFNumber": 5.284375,
        "published": false
      },
      {
        "focalLengthMm": 160.0,
        "nominalFNumber": 5.3,
        "published": true
      },
      {
        "focalLengthMm": 163.459046992,
        "nominalFNumber": 5.321875,
        "published": false
      },
      {
        "focalLengthMm": 166.950799226,
        "nominalFNumber": 5.34375,
        "published": false
      },
      {
        "focalLengthMm": 170.481990927,
        "nominalFNumber": 5.365625,
        "published": false
      },
      {
        "focalLengthMm": 174.052622094,
        "nominalFNumber": 5.3875,
        "published": false
      },
      {
        "focalLengthMm": 177.662692727,
        "nominalFNumber": 5.409375,
        "published": false
      },
      {
        "focalLengthMm": 181.312202826,
        "nominalFNumber": 5.43125,
        "published": false
      },
      {
        "focalLengthMm": 185.001152391,
        "nominalFNumber": 5.453125,
        "published": false
      },
      {
        "focalLengthMm": 188.729541422,
        "nominalFNumber": 5.475,
        "published": false
      },
      {
        "focalLengthMm": 192.497369919,
        "nominalFNumber": 5.496875,
        "published": false
      },
      {
        "focalLengthMm": 196.304637883,
        "nominalFNumber": 5.51875,
        "published": false
      },
      {
        "focalLengthMm": 200.151345312,
        "nominalFNumber": 5.540625,
        "published": false
      },
      {
        "focalLengthMm": 204.037492207,
        "nominalFNumber": 5.5625,
        "published": false
      },
      {
        "focalLengthMm": 207.963078569,
        "nominalFNumber": 5.584375,
        "published": false
      },
      {
        "focalLengthMm": 211.928104396,
        "nominalFNumber": 5.60625,
        "published": false
      },
      {
        "focalLengthMm": 215.932569689,
        "nominalFNumber": 5.628125,
        "published": false
      },
      {
        "focalLengthMm": 219.976474449,
        "nominalFNumber": 5.65,
        "published": false
      },
      {
        "focalLengthMm": 224.059818674,
        "nominalFNumber": 5.671875,
        "published": false
      },
      {
        "focalLengthMm": 228.182602366,
        "nominalFNumber": 5.69375,
        "published": false
      },
      {
        "focalLengthMm": 232.344825524,
        "nominalFNumber": 5.715625,
        "published": false
      },
      {
        "focalLengthMm": 236.546488147,
        "nominalFNumber": 5.7375,
        "published": false
      },
      {
        "focalLengthMm": 240.787590237,
        "nominalFNumber": 5.759375,
        "published": false
      },
      {
        "focalLengthMm": 245.068131793,
        "nominalFNumber": 5.78125,
        "published": false
      },
      {
        "focalLengthMm": 249.388112815,
        "nominalFNumber": 5.803125,
        "published": false
      },
      {
        "focalLengthMm": 253.747533303,
        "nominalFNumber": 5.825,
        "published": false
      },
      {
        "focalLengthMm": 258.146393257,
        "nominalFNumber": 5.846875,
        "published": false
      },
      {
        "focalLengthMm": 262.584692677,
        "nominalFNumber": 5.86875,
        "published": false
      },
      {
        "focalLengthMm": 267.062431563,
        "nominalFNumber": 5.890625,
        "published": false
      },
      {
        "focalLengthMm": 271.579609915,
        "nominalFNumber": 5.9125,
        "published": false
      },
      {
        "focalLengthMm": 276.136227733,
        "nominalFNumber": 5.934375,
        "published": false
      },
      {
        "focalLengthMm": 280.732285017,
        "nominalFNumber": 5.95625,
        "published": false
      },
      {
        "focalLengthMm": 285.367781767,
        "nominalFNumber": 5.978125,
        "published": false
      },
      {
        "focalLengthMm": 290.04,
        "nominalFNumber": 6.0,
        "published": true
      }
    ]
  },
  "focus": {
    "closeFocusM": 1.5,
    "keyframes": [
      0,
      1
    ],
    "description": "Front-group focusing to 1.5 m: ¶0058 describes focusing by moving the whole first group (G1), but Table 1 prints no close-focus spacings. The model covers zooming at infinity only; optical spacings remain unchanged with the focus control. At 290 mm, moving G1 about 19 mm toward the object reaches the published 1.5 m minimum focus distance at 0.26×, the published maximum magnification; this travel is calculated, not printed."
  },
  "gaps": {
    "6": {
      "label": "D6",
      "values": [
        [
          14.662,
          14.662
        ],
        [
          15.595382776743,
          15.595382776743
        ],
        [
          16.511175804891,
          16.511175804891
        ],
        [
          17.409817100024,
          17.409817100024
        ],
        [
          18.291731666744,
          18.291731666744
        ],
        [
          19.15733192708,
          19.15733192708
        ],
        [
          20.007018134591,
          20.007018134591
        ],
        [
          20.841178774427,
          20.841178774427
        ],
        [
          21.660190949884,
          21.660190949884
        ],
        [
          22.464420755789,
          22.464420755789
        ],
        [
          23.254223639123,
          23.254223639123
        ],
        [
          24.029944747295,
          24.029944747295
        ],
        [
          24.79191926446,
          24.79191926446
        ],
        [
          25.540472736215,
          25.540472736215
        ],
        [
          26.275921383169,
          26.275921383169
        ],
        [
          26.998572403583,
          26.998572403583
        ],
        [
          27.708724265616,
          27.708724265616
        ],
        [
          28.406666989388,
          28.406666989388
        ],
        [
          29.092682419324,
          29.092682419324
        ],
        [
          29.767044487005,
          29.767044487005
        ],
        [
          30.430019464946,
          30.430019464946
        ],
        [
          31.081866211536,
          31.081866211536
        ],
        [
          31.722836407475,
          31.722836407475
        ],
        [
          32.353174784114,
          32.353174784114
        ],
        [
          32.973119343745,
          32.973119343745
        ],
        [
          33.582901572371,
          33.582901572371
        ],
        [
          34.182746645099,
          34.182746645099
        ],
        [
          34.772873624388,
          34.772873624388
        ],
        [
          35.353495651558,
          35.353495651558
        ],
        [
          35.924820131599,
          35.924820131599
        ],
        [
          36.487048911686,
          36.487048911686
        ],
        [
          37.040378453564,
          37.040378453564
        ],
        [
          37.585,
          37.585
        ],
        [
          38.502583956782,
          38.502583956782
        ],
        [
          39.395827964931,
          39.395827964931
        ],
        [
          40.265607659522,
          40.265607659522
        ],
        [
          41.112759914055,
          41.112759914055
        ],
        [
          41.938084834775,
          41.938084834775
        ],
        [
          42.742347640601,
          42.742347640601
        ],
        [
          43.526280435717,
          43.526280435717
        ],
        [
          44.29058388138,
          44.29058388138
        ],
        [
          45.035928773229,
          45.035928773229
        ],
        [
          45.762957529722,
          45.762957529722
        ],
        [
          46.472285597276,
          46.472285597276
        ],
        [
          47.164502777076,
          47.164502777076
        ],
        [
          47.84017447834,
          47.84017447834
        ],
        [
          48.499842902504,
          48.499842902504
        ],
        [
          49.14402816244,
          49.14402816244
        ],
        [
          49.773229340666,
          49.773229340666
        ],
        [
          50.387925490156,
          50.387925490156
        ],
        [
          50.988576581182,
          50.988576581182
        ],
        [
          51.575624397357,
          51.575624397357
        ],
        [
          52.149493383969,
          52.149493383969
        ],
        [
          52.710591451268,
          52.710591451268
        ],
        [
          53.259310735483,
          53.259310735483
        ],
        [
          53.796028319946,
          53.796028319946
        ],
        [
          54.321106918649,
          54.321106918649
        ],
        [
          54.834895524414,
          54.834895524414
        ],
        [
          55.337730023728,
          55.337730023728
        ],
        [
          55.82993378008,
          55.82993378008
        ],
        [
          56.311818187671,
          56.311818187671
        ],
        [
          56.783683197084,
          56.783683197084
        ],
        [
          57.245817814603,
          57.245817814603
        ],
        [
          57.698500576529,
          57.698500576529
        ],
        [
          58.142,
          58.142
        ]
      ]
    },
    "11": {
      "label": "D11",
      "values": [
        [
          21.956,
          21.956
        ],
        [
          21.72565625,
          21.72565625
        ],
        [
          21.4953125,
          21.4953125
        ],
        [
          21.26496875,
          21.26496875
        ],
        [
          21.034625,
          21.034625
        ],
        [
          20.80428125,
          20.80428125
        ],
        [
          20.5739375,
          20.5739375
        ],
        [
          20.34359375,
          20.34359375
        ],
        [
          20.11325,
          20.11325
        ],
        [
          19.88290625,
          19.88290625
        ],
        [
          19.6525625,
          19.6525625
        ],
        [
          19.42221875,
          19.42221875
        ],
        [
          19.191875,
          19.191875
        ],
        [
          18.96153125,
          18.96153125
        ],
        [
          18.7311875,
          18.7311875
        ],
        [
          18.50084375,
          18.50084375
        ],
        [
          18.2705,
          18.2705
        ],
        [
          18.04015625,
          18.04015625
        ],
        [
          17.8098125,
          17.8098125
        ],
        [
          17.57946875,
          17.57946875
        ],
        [
          17.349125,
          17.349125
        ],
        [
          17.11878125,
          17.11878125
        ],
        [
          16.8884375,
          16.8884375
        ],
        [
          16.65809375,
          16.65809375
        ],
        [
          16.42775,
          16.42775
        ],
        [
          16.19740625,
          16.19740625
        ],
        [
          15.9670625,
          15.9670625
        ],
        [
          15.73671875,
          15.73671875
        ],
        [
          15.506375,
          15.506375
        ],
        [
          15.27603125,
          15.27603125
        ],
        [
          15.0456875,
          15.0456875
        ],
        [
          14.81534375,
          14.81534375
        ],
        [
          14.585,
          14.585
        ],
        [
          14.18859375,
          14.18859375
        ],
        [
          13.7921875,
          13.7921875
        ],
        [
          13.39578125,
          13.39578125
        ],
        [
          12.999375,
          12.999375
        ],
        [
          12.60296875,
          12.60296875
        ],
        [
          12.2065625,
          12.2065625
        ],
        [
          11.81015625,
          11.81015625
        ],
        [
          11.41375,
          11.41375
        ],
        [
          11.01734375,
          11.01734375
        ],
        [
          10.6209375,
          10.6209375
        ],
        [
          10.22453125,
          10.22453125
        ],
        [
          9.828125,
          9.828125
        ],
        [
          9.43171875,
          9.43171875
        ],
        [
          9.0353125,
          9.0353125
        ],
        [
          8.63890625,
          8.63890625
        ],
        [
          8.2425,
          8.2425
        ],
        [
          7.84609375,
          7.84609375
        ],
        [
          7.4496875,
          7.4496875
        ],
        [
          7.05328125,
          7.05328125
        ],
        [
          6.656875,
          6.656875
        ],
        [
          6.26046875,
          6.26046875
        ],
        [
          5.8640625,
          5.8640625
        ],
        [
          5.46765625,
          5.46765625
        ],
        [
          5.07125,
          5.07125
        ],
        [
          4.67484375,
          4.67484375
        ],
        [
          4.2784375,
          4.2784375
        ],
        [
          3.88203125,
          3.88203125
        ],
        [
          3.485625,
          3.485625
        ],
        [
          3.08921875,
          3.08921875
        ],
        [
          2.6928125,
          2.6928125
        ],
        [
          2.29640625,
          2.29640625
        ],
        [
          1.9,
          1.9
        ]
      ]
    },
    "20": {
      "label": "BF",
      "values": [
        [
          49.71,
          49.71
        ],
        [
          49.9403125,
          49.9403125
        ],
        [
          50.170625,
          50.170625
        ],
        [
          50.4009375,
          50.4009375
        ],
        [
          50.63125,
          50.63125
        ],
        [
          50.8615625,
          50.8615625
        ],
        [
          51.091875,
          51.091875
        ],
        [
          51.3221875,
          51.3221875
        ],
        [
          51.5525,
          51.5525
        ],
        [
          51.7828125,
          51.7828125
        ],
        [
          52.013125,
          52.013125
        ],
        [
          52.2434375,
          52.2434375
        ],
        [
          52.47375,
          52.47375
        ],
        [
          52.7040625,
          52.7040625
        ],
        [
          52.934375,
          52.934375
        ],
        [
          53.1646875,
          53.1646875
        ],
        [
          53.395,
          53.395
        ],
        [
          53.6253125,
          53.6253125
        ],
        [
          53.855625,
          53.855625
        ],
        [
          54.0859375,
          54.0859375
        ],
        [
          54.31625,
          54.31625
        ],
        [
          54.5465625,
          54.5465625
        ],
        [
          54.776875,
          54.776875
        ],
        [
          55.0071875,
          55.0071875
        ],
        [
          55.2375,
          55.2375
        ],
        [
          55.4678125,
          55.4678125
        ],
        [
          55.698125,
          55.698125
        ],
        [
          55.9284375,
          55.9284375
        ],
        [
          56.15875,
          56.15875
        ],
        [
          56.3890625,
          56.3890625
        ],
        [
          56.619375,
          56.619375
        ],
        [
          56.8496875,
          56.8496875
        ],
        [
          57.08,
          57.08
        ],
        [
          57.4765625,
          57.4765625
        ],
        [
          57.873125,
          57.873125
        ],
        [
          58.2696875,
          58.2696875
        ],
        [
          58.66625,
          58.66625
        ],
        [
          59.0628125,
          59.0628125
        ],
        [
          59.459375,
          59.459375
        ],
        [
          59.8559375,
          59.8559375
        ],
        [
          60.2525,
          60.2525
        ],
        [
          60.6490625,
          60.6490625
        ],
        [
          61.045625,
          61.045625
        ],
        [
          61.4421875,
          61.4421875
        ],
        [
          61.83875,
          61.83875
        ],
        [
          62.2353125,
          62.2353125
        ],
        [
          62.631875,
          62.631875
        ],
        [
          63.0284375,
          63.0284375
        ],
        [
          63.425,
          63.425
        ],
        [
          63.8215625,
          63.8215625
        ],
        [
          64.218125,
          64.218125
        ],
        [
          64.6146875,
          64.6146875
        ],
        [
          65.01125,
          65.01125
        ],
        [
          65.4078125,
          65.4078125
        ],
        [
          65.804375,
          65.804375
        ],
        [
          66.2009375,
          66.2009375
        ],
        [
          66.5975,
          66.5975
        ],
        [
          66.9940625,
          66.9940625
        ],
        [
          67.390625,
          67.390625
        ],
        [
          67.7871875,
          67.7871875
        ],
        [
          68.18375,
          68.18375
        ],
        [
          68.5803125,
          68.5803125
        ],
        [
          68.976875,
          68.976875
        ],
        [
          69.3734375,
          69.3734375
        ],
        [
          69.77,
          69.77
        ]
      ]
    }
  },
  "aperture": {
    "fStops": [
      4.8,
      5.6,
      8,
      11,
      16,
      22,
      32
    ],
    "maxFNumber": 32
  },
  "groups": [
    {
      "text": "G1 (+), focus",
      "fromSurface": "1",
      "toSurface": "6"
    },
    {
      "text": "G2 (-)",
      "fromSurface": "7",
      "toSurface": "11"
    },
    {
      "text": "G3 (+)",
      "fromSurface": "12",
      "toSurface": "20"
    }
  ],
  "doublets": [
    {
      "text": "C1",
      "fromSurface": "7",
      "toSurface": "9"
    },
    {
      "text": "C2",
      "fromSurface": "14",
      "toSurface": "16"
    }
  ],
  "layout": {
    "yScFill": 0.72
  },
  "checks": {
    "gapSagFrac": 0.98
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
