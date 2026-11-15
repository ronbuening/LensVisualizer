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
        "focalLengthMm": 12.674358409722041,
        "nominalFNumber": 3.7184999999999997
      },
      {
        "published": false,
        "focalLengthMm": 13.120679652117493,
        "nominalFNumber": 3.797
      },
      {
        "published": false,
        "focalLengthMm": 13.582717875599785,
        "nominalFNumber": 3.8754999999999997
      },
      {
        "published": false,
        "focalLengthMm": 14.061026545859146,
        "nominalFNumber": 3.9540000000000006
      },
      {
        "published": false,
        "focalLengthMm": 14.556178618605434,
        "nominalFNumber": 4.0325
      },
      {
        "published": false,
        "focalLengthMm": 15.068767225899563,
        "nominalFNumber": 4.111
      },
      {
        "published": false,
        "focalLengthMm": 15.599406386653639,
        "nominalFNumber": 4.1895
      },
      {
        "published": false,
        "focalLengthMm": 16.148731742151114,
        "nominalFNumber": 4.268000000000001
      },
      {
        "published": false,
        "focalLengthMm": 16.717401317467772,
        "nominalFNumber": 4.346500000000001
      },
      {
        "published": false,
        "focalLengthMm": 17.306096309705975,
        "nominalFNumber": 4.425
      },
      {
        "published": false,
        "focalLengthMm": 17.915521903986026,
        "nominalFNumber": 4.503500000000001
      },
      {
        "published": false,
        "focalLengthMm": 18.54640811817236,
        "nominalFNumber": 4.582
      },
      {
        "published": false,
        "focalLengthMm": 19.199510677346158,
        "nominalFNumber": 4.660500000000001
      },
      {
        "published": false,
        "focalLengthMm": 19.875611919072522,
        "nominalFNumber": 4.739
      },
      {
        "published": false,
        "focalLengthMm": 20.575521730545564,
        "nominalFNumber": 4.8175
      },
      {
        "published": false,
        "focalLengthMm": 21.300078518735138,
        "nominalFNumber": 4.896
      },
      {
        "published": false,
        "focalLengthMm": 22.050150214696508,
        "nominalFNumber": 4.9745
      },
      {
        "published": false,
        "focalLengthMm": 22.82663531324641,
        "nominalFNumber": 5.053
      },
      {
        "published": false,
        "focalLengthMm": 23.630463949250675,
        "nominalFNumber": 5.1315
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
        "focalLengthMm": 25.32604141862778,
        "nominalFNumber": 5.2735
      },
      {
        "published": false,
        "focalLengthMm": 26.219960259672945,
        "nominalFNumber": 5.337
      },
      {
        "published": false,
        "focalLengthMm": 27.14543124426741,
        "nominalFNumber": 5.4005
      },
      {
        "published": false,
        "focalLengthMm": 28.103568050428493,
        "nominalFNumber": 5.464
      },
      {
        "published": false,
        "focalLengthMm": 29.095523665031365,
        "nominalFNumber": 5.5275
      },
      {
        "published": false,
        "focalLengthMm": 30.122491771271516,
        "nominalFNumber": 5.591
      },
      {
        "published": false,
        "focalLengthMm": 31.1857081850993,
        "nominalFNumber": 5.6545000000000005
      },
      {
        "published": false,
        "focalLengthMm": 32.28645234235606,
        "nominalFNumber": 5.718
      },
      {
        "published": false,
        "focalLengthMm": 33.426048838400305,
        "nominalFNumber": 5.7815
      },
      {
        "published": false,
        "focalLengthMm": 34.6058690220775,
        "nominalFNumber": 5.845000000000001
      },
      {
        "published": false,
        "focalLengthMm": 35.82733264595136,
        "nominalFNumber": 5.9085
      },
      {
        "published": false,
        "focalLengthMm": 37.09190957478212,
        "nominalFNumber": 5.972
      },
      {
        "published": false,
        "focalLengthMm": 38.40112155430821,
        "nominalFNumber": 6.0355
      },
      {
        "published": false,
        "focalLengthMm": 39.75654404245964,
        "nominalFNumber": 6.099
      },
      {
        "published": false,
        "focalLengthMm": 41.159808105206416,
        "nominalFNumber": 6.1625000000000005
      },
      {
        "published": false,
        "focalLengthMm": 42.61260237932402,
        "nominalFNumber": 6.226000000000001
      },
      {
        "published": false,
        "focalLengthMm": 44.11667510443719,
        "nominalFNumber": 6.2895
      },
      {
        "published": false,
        "focalLengthMm": 45.67383622678767,
        "nominalFNumber": 6.353000000000001
      },
      {
        "published": false,
        "focalLengthMm": 47.28595957725753,
        "nominalFNumber": 6.4165
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
    "description": "The patent prints infinity and 0.35 m spacings at wide, middle and tele; those six states are exact. G2 is the focusing group and moves objectward for closer focus. The intermediate zoom positions are an inferred reconstruction, not the factory cam: G3 is the variator, G2 follows a single-reversal law (imageward, then objectward, as claim 2 states), and G4 is solved for infinity focus at each position. Between printed stations the near state is solved for the object-to-image distance interpolated between the printed near states, which the patent labels 0.35 m. The marketed minimum focus distance in normal mode is 0.35 m; the macro mode is not modeled.",
    "conjugates": [
      {
        "zoomStation": 0,
        "keyframe": 1,
        "objectDistanceMm": 350,
        "distanceReference": "image-plane",
        "source": "JP 2012-173420 A, Numerical Example 2, paragraph 0109 (PDF p. 18), various data 1 (PDF/printed p. 21), 0.35m row. WE: D6=5.3346, D8=31.3775, D14=3.8142, D18=6.8162 mm. The image-plane reference is identified by the finite-conjugate audit (audit-resolved); the patent does not explicitly define the reference."
      },
      {
        "zoomStation": 20,
        "keyframe": 1,
        "objectDistanceMm": 350,
        "distanceReference": "image-plane",
        "source": "JP 2012-173420 A, Numerical Example 2, paragraph 0109 (PDF p. 18), various data 1 (PDF/printed p. 21), 0.35m row. ST: D6=8.0933, D8=13.5815, D14=7.9355, D18=17.732 mm. The image-plane reference is identified by the finite-conjugate audit (audit-resolved); the patent does not explicitly define the reference."
      },
      {
        "zoomStation": 40,
        "keyframe": 1,
        "objectDistanceMm": 350,
        "distanceReference": "image-plane",
        "source": "JP 2012-173420 A, Numerical Example 2, paragraph 0109 (PDF p. 18), various data 1 (PDF/printed p. 21), 0.35m row. TE: D6=4.5785, D8=2.8888, D14=19.7513, D18=20.1237 mm. The image-plane reference is identified by the finite-conjugate audit (audit-resolved); the patent does not explicitly define the reference."
      }
    ]
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
          6.8688454539483965,
          5.565710653930125
        ],
        [
          7.0846977012192145,
          5.78811708248868
        ],
        [
          7.291848384871966,
          6.001508966298176
        ],
        [
          7.490023158584369,
          6.205610833612307
        ],
        [
          7.678980355723849,
          6.400180638967528
        ],
        [
          7.858509546198035,
          6.5850082339823
        ],
        [
          8.028430002713257,
          6.759913752132344
        ],
        [
          8.188589096318253,
          6.924745927470745
        ],
        [
          8.338860639139677,
          7.079380365196663
        ],
        [
          8.479143190097693,
          7.2237177797818
        ],
        [
          8.609358337181614,
          7.357682214076951
        ],
        [
          8.72944896760976,
          7.481219250507994
        ],
        [
          8.839377534924035,
          7.59429422314148
        ],
        [
          8.939124329792568,
          7.696890437074389
        ],
        [
          9.028685759014717,
          7.789007399282755
        ],
        [
          9.108072634929083,
          7.87065906272914
        ],
        [
          9.177308475088934,
          7.941872083154961
        ],
        [
          9.23642780964713,
          8.00268408551805
        ],
        [
          9.285474491320954,
          8.053141934419287
        ],
        [
          9.3245,
          8.0933
        ],
        [
          9.358083541342227,
          8.127865864907534
        ],
        [
          9.389679061298878,
          8.160374710601715
        ],
        [
          9.41796547853421,
          8.189470700460548
        ],
        [
          9.441711451243474,
          8.213890157778824
        ],
        [
          9.459762360551796,
          8.232448143416361
        ],
        [
          9.471026741182929,
          8.244024457858316
        ],
        [
          9.474315671649634,
          8.247398520869787
        ],
        [
          9.449060736123416,
          8.221432449218135
        ],
        [
          9.381326531826966,
          8.151801745902215
        ],
        [
          9.271223188056641,
          8.038611268967099
        ],
        [
          9.118834824586417,
          7.881933507232678
        ],
        [
          8.924259961039095,
          7.681850006790924
        ],
        [
          8.687659836060758,
          7.438500910137274
        ],
        [
          8.409315436875046,
          7.152143484079774
        ],
        [
          8.089693415579758,
          6.823219885285806
        ],
        [
          7.7295200819646865,
          6.4524334135364825
        ],
        [
          7.329861258568962,
          6.040831072735381
        ],
        [
          6.8922039713127505,
          5.589888403057952
        ],
        [
          6.418533849440231,
          5.101590382370349
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
          29.055765102042713,
          30.358899902060983
        ],
        [
          28.054160957247277,
          29.35074157597781
        ],
        [
          27.063483679274345,
          28.353823097848135
        ],
        [
          26.08445477905128,
          27.368867104023344
        ],
        [
          25.117724006432784,
          26.396523723189105
        ],
        [
          24.163872326792884,
          25.43737363900862
        ],
        [
          23.22341499191291,
          24.491931242493823
        ],
        [
          22.296804667553957,
          23.560647836401465
        ],
        [
          21.384434583370933,
          22.64391485731395
        ],
        [
          20.48664167419205,
          21.742067084507944
        ],
        [
          19.60370968502861,
          20.85538580813327
        ],
        [
          18.73587221539411,
          19.984101932495875
        ],
        [
          17.883315681514723,
          19.128398993297278
        ],
        [
          17.046182177736704,
          18.288416070454883
        ],
        [
          16.224572220826897,
          17.464250580558858
        ],
        [
          15.41854736286675,
          16.655960935066695
        ],
        [
          14.628132660020094,
          15.863569051954068
        ],
        [
          13.85331898555758,
          15.087062709686661
        ],
        [
          13.094065176097153,
          14.32639773299882
        ],
        [
          12.3503,
          13.5815
        ],
        [
          11.617409321980402,
          12.847626998415095
        ],
        [
          10.894901033425612,
          12.124205384122774
        ],
        [
          10.183660215421934,
          11.412154993495596
        ],
        [
          9.484440969125071,
          10.712262262589721
        ],
        [
          8.797878949144764,
          10.025193166280198
        ],
        [
          8.124503457572846,
          9.351505740897458
        ],
        [
          7.464836313637697,
          8.691753464417545
        ],
        [
          6.830765424358182,
          8.058393711263463
        ],
        [
          6.229802578002397,
          7.459327363927148
        ],
        [
          5.66104580554968,
          6.893657724639222
        ],
        [
          5.123656161966425,
          6.360557479320163
        ],
        [
          4.616835146777419,
          5.859245101025589
        ],
        [
          4.139798690963046,
          5.38895761688653
        ],
        [
          3.6917470854360293,
          4.948919038231301
        ],
        [
          3.271830497613534,
          4.538304027907485
        ],
        [
          2.879110171430984,
          4.156196839859188
        ],
        [
          2.5125160663807646,
          3.8015462522143455
        ],
        [
          2.1708025640960207,
          3.473118132350819
        ],
        [
          1.852504898279551,
          3.1694483653494334
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
          3.881215236713153,
          3.881215236713153
        ],
        [
          3.961779425892523,
          3.961779425892523
        ],
        [
          4.055935524223905,
          4.055935524223905
        ],
        [
          4.1637557203304,
          4.1637557203304
        ],
        [
          4.285342033696985,
          4.285342033696985
        ],
        [
          4.4208270541848265,
          4.4208270541848265
        ],
        [
          4.570374834463948,
          4.570374834463948
        ],
        [
          4.734181950311509,
          4.734181950311509
        ],
        [
          4.912478746648333,
          4.912478746648333
        ],
        [
          5.105530790522742,
          5.105530790522742
        ],
        [
          5.31364055611192,
          5.31364055611192
        ],
        [
          5.537149371347269,
          5.537149371347269
        ],
        [
          5.776439661154171,
          5.776439661154171
        ],
        [
          6.031937528751314,
          6.031937528751314
        ],
        [
          6.304115724254064,
          6.304115724254064
        ],
        [
          6.593497059324566,
          6.593497059324566
        ],
        [
          6.900658338254274,
          6.900658338254274
        ],
        [
          7.226234890238551,
          7.226234890238551
        ],
        [
          7.570925805465862,
          7.570925805465862
        ],
        [
          7.9355,
          7.9355
        ],
        [
          8.32347710427706,
          8.32347710427706
        ],
        [
          8.736496413375331,
          8.736496413375331
        ],
        [
          9.17542953719758,
          9.17542953719758
        ],
        [
          9.641254894099006,
          9.641254894099006
        ],
        [
          10.13506673085222,
          10.13506673085222
        ],
        [
          10.658085593779965,
          10.658085593779965
        ],
        [
          11.211598340422107,
          11.211598340422107
        ],
        [
          11.786991899934723,
          11.786991899934723
        ],
        [
          12.377379319460378,
          12.377379319460378
        ],
        [
          12.982419643490498,
          12.982419643490498
        ],
        [
          13.601694138856104,
          13.601694138856104
        ],
        [
          14.234720061950288,
          14.234720061950288
        ],
        [
          14.880975770967588,
          14.880975770967588
        ],
        [
          15.539940672973827,
          15.539940672973827
        ],
        [
          16.21115374608447,
          16.21115374608447
        ],
        [
          16.894294260606344,
          16.894294260606344
        ],
        [
          17.589287662971742,
          17.589287662971742
        ],
        [
          18.296438244268884,
          18.296438244268884
        ],
        [
          19.016588177620388,
          19.016588177620388
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
          7.536663733481369,
          7.536663733481369
        ],
        [
          8.241840991122075,
          8.241840991122075
        ],
        [
          8.931201066003432,
          8.931201066003432
        ],
        [
          9.604224610844675,
          9.604224610844675
        ],
        [
          10.260401528366323,
          10.260401528366323
        ],
        [
          10.899228698353745,
          10.899228698353745
        ],
        [
          11.52020754809854,
          11.52020754809854
        ],
        [
          12.122841469004271,
          12.122841469004271
        ],
        [
          12.706633077920294,
          12.706633077920294
        ],
        [
          13.27108131718201,
          13.27108131718201
        ],
        [
          13.815678382342632,
          13.815678382342632
        ],
        [
          14.339906461086244,
          14.339906461086244
        ],
        [
          14.843234260699404,
          14.843234260699404
        ],
        [
          15.32511329457678,
          15.32511329457678
        ],
        [
          15.784973890325926,
          15.784973890325926
        ],
        [
          16.222220872827105,
          16.222220872827105
        ],
        [
          16.636228864717808,
          16.636228864717808
        ],
        [
          17.02633713371703,
          17.02633713371703
        ],
        [
          17.391843900336852,
          17.391843900336852
        ],
        [
          17.732,
          17.732
        ],
        [
          18.043330032400313,
          18.043330032400313
        ],
        [
          18.32122349190018,
          18.32122349190018
        ],
        [
          18.565244768846277,
          18.565244768846277
        ],
        [
          18.77489268553245,
          18.77489268553245
        ],
        [
          18.949591959451222,
          18.949591959451222
        ],
        [
          19.08868420746426,
          19.08868420746426
        ],
        [
          19.191549674290563,
          19.191549674290563
        ],
        [
          19.27548193958368,
          19.27548193958368
        ],
        [
          19.35379157071026,
          19.35379157071026
        ],
        [
          19.427611362903182,
          19.427611362903182
        ],
        [
          19.498114874591057,
          19.498114874591057
        ],
        [
          19.5664848302332,
          19.5664848302332
        ],
        [
          19.63386570200861,
          19.63386570200861
        ],
        [
          19.7012968047151,
          19.7012968047151
        ],
        [
          19.76962234072224,
          19.76962234072224
        ],
        [
          19.839375485997987,
          19.839375485997987
        ],
        [
          19.910635012078533,
          19.910635012078533
        ],
        [
          19.982855220322346,
          19.982855220322346
        ],
        [
          20.05467307465983,
          20.05467307465983
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
