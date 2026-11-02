import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JP S55-124116 A, sole numerical example. The printed Z9 index n = 6.71300 is read as 1.71300, corroborated by all 24 nonzero Petzval rows and the three focal lengths. Unprinted d24 = 2.8 mm is inferred from the rounded 42.8 mm stop-to-rear length minus 40.0 mm of listed intervals. Both are model interpretations of the printed data. The three printed zoom states and normal/soft limits are retained. Between them, the 101-station zoom path satisfies focal-length and image-distance constraints at fixed total length; intermediate mechanical travel is not published. Soft motion shifts the rear element 9.22 mm forward; terminal-gap compensation holds the sensor fixed. The model covers infinity only. Semi-diameters are estimated from the patent's Fig. 1 (wide state, about 0.136 mm/px) and floor-checked by exact real-ray trace at every zoom station, normal and soft, without changing thresholds. Surfaces 7|8 and 10|11 face each other across air gaps whose faces cross at about 16.6 and 16.5 mm, below the f/2.8 marginal ray at the long end, so S7 and S11 stay at the default cross-gap limit and the axial beam is rim-limited to about f/2.9–3.0 above 137 mm. The optical construction supports association with the Tamron 51A, but does not establish an exact production prescription.
 * The original prescription identifies 14 elements, replacing an earlier triplet interpretation. Geometry sampled at 201 zoom × 21 soft settings has no rendered trim across 4,221 states. Outer off-axis rays vignette at the front clear aperture, the variator and G14; wide open, geometric transmission at the format corner is about 44–47 % at the three printed focal lengths. Where an outer ray finds no accepted intersection at surface 1, exact line/sphere intersection places the hit outside the front clear aperture. Failed rays are not counted as transmitted; chief rays and transmitted image-plane projections remain finite. The field and displayed rays are retained. MTF calculations cover 375 field/spectrum combinations at printed, quartile and intermediate zoom settings, including five soft settings. Numerical convergence reaches at least 50 lp/mm throughout, but not uniformly 100 lp/mm. A 1,001-point paraxial calculation gives maximum EFL and BFL interpolation residuals below 0.00077 mm. These samples do not establish behavior at every continuous setting or measured production performance.
 */
const LENS_DATA = {
  "schema": 2,
  "key": "tamron-sp-70-150mm-f28-soft-51a",
  "maker": "Tamron",
  "name": "TAMRON SP 70-150mm f/2.8 SOFT (51A)",
  "subtitle": "JP S55-124116 A, Sole example — Tamron Co., Ltd.",
  "catalog": {
    "specs": [
      "14 ELEMENTS / 10 GROUPS",
      "DESIGN f = 71.72–147.36 mm",
      "DESIGN F/2.8",
      "ALL SPHERICAL",
      "SOFT-FOCUS CONTROL"
    ],
    "imageFormat": "135-full-frame",
    "elementCount": 14,
    "groupCount": 10,
    "focalLengthMm": {
      "marketing": [
        70,
        150
      ],
      "design": [
        71.72,
        147.36
      ]
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.8
    }
  },
  "source": {
    "patentNumber": "JP S55-124116 A",
    "example": { "label": "Sole example", "id": null },
    "patentYear": 1980,
    "authors": [
      "Eiichi Takano"
    ],
    "assignees": [
      "Tamron Co., Ltd."
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "Z1",
      "diagramLabel": "Z1",
      "cemented": "D1",
      "label": "Element 1",
      "type": "Meniscus Negative",
      "nd": 1.80518,
      "vd": 25.43,
      "glass": "S-TIH6 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": -155.28227557589014,
      "role": "Negative front element of the first cemented doublet"
    },
    {
      "id": 2,
      "name": "Z2",
      "diagramLabel": "Z2",
      "cemented": "D1",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.61272,
      "vd": 58.75,
      "glass": "BSM4 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": 93.47398902709126,
      "role": "Positive rear element of the first cemented doublet"
    },
    {
      "id": 3,
      "name": "Z3",
      "diagramLabel": "Z3",
      "label": "Element 3",
      "type": "Meniscus Positive",
      "nd": 1.61272,
      "vd": 58.75,
      "glass": "BSM4 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": 171.08083500785227,
      "role": "Positive front-section singlet ahead of the first variable zoom gap"
    },
    {
      "id": 4,
      "name": "Z4",
      "diagramLabel": "Z4",
      "label": "Element 4",
      "type": "Plano-concave Negative",
      "nd": 1.6968,
      "vd": 55.52,
      "glass": "S-LAL14 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": -101.46383467278989,
      "role": "Negative singlet at the front of the central zoom section"
    },
    {
      "id": 5,
      "name": "Z5",
      "diagramLabel": "Z5",
      "cemented": "D2",
      "label": "Element 5",
      "type": "Meniscus Positive",
      "nd": 1.80518,
      "vd": 25.43,
      "glass": "S-TIH6 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": 99.73004522444305,
      "role": "Positive front element of the second cemented doublet"
    },
    {
      "id": 6,
      "name": "Z6",
      "diagramLabel": "Z6",
      "cemented": "D2",
      "label": "Element 6",
      "type": "Biconcave Negative",
      "nd": 1.6968,
      "vd": 55.52,
      "glass": "S-LAL14 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": -54.34481584697868,
      "role": "Negative rear element of the second cemented doublet"
    },
    {
      "id": 7,
      "name": "Z7",
      "diagramLabel": "Z7",
      "cemented": "D3",
      "label": "Element 7",
      "type": "Biconcave Negative",
      "nd": 1.6968,
      "vd": 55.52,
      "glass": "S-LAL14 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": -57.21648808067711,
      "role": "Negative front element of the third cemented doublet"
    },
    {
      "id": 8,
      "name": "Z8",
      "diagramLabel": "Z8",
      "cemented": "D3",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.80518,
      "vd": 25.43,
      "glass": "S-TIH6 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": 108.6459935155907,
      "role": "Positive rear element of the third cemented doublet"
    },
    {
      "id": 9,
      "name": "Z9",
      "diagramLabel": "Z9",
      "label": "Element 9",
      "type": "Biconvex Positive",
      "nd": 1.713,
      "vd": 53.89,
      "glass": "S-LAL8 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": 98.44468368607889,
      "role": "Positive zoom singlet between the second and third variable gaps"
    },
    {
      "id": 10,
      "name": "M10",
      "diagramLabel": "M10",
      "cemented": "D4",
      "label": "Element 10",
      "type": "Biconvex Positive",
      "nd": 1.6968,
      "vd": 55.52,
      "glass": "S-LAL14 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": 50.15235370823882,
      "role": "Positive front element of the fixed master doublet ahead of the stop"
    },
    {
      "id": 11,
      "name": "M11",
      "diagramLabel": "M11",
      "cemented": "D4",
      "label": "Element 11",
      "type": "Biconcave Negative",
      "nd": 1.80518,
      "vd": 25.43,
      "glass": "S-TIH6 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": -108.87006926210447,
      "role": "Negative rear element of the fixed master doublet ahead of the stop"
    },
    {
      "id": 12,
      "name": "G12",
      "diagramLabel": "G12",
      "label": "Element 12",
      "type": "Meniscus Negative",
      "nd": 1.80518,
      "vd": 25.43,
      "glass": "S-TIH6 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": -149.24629265176299,
      "role": "Negative relay singlet moving forward with the soft-focus control"
    },
    {
      "id": 13,
      "name": "G13",
      "diagramLabel": "G13",
      "label": "Element 13",
      "type": "Meniscus Negative",
      "nd": 1.80518,
      "vd": 25.43,
      "glass": "S-TIH6 (OHARA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": -228.07138121486557,
      "role": "Second negative relay singlet moving forward with the soft-focus control"
    },
    {
      "id": 14,
      "name": "G14",
      "diagramLabel": "G14",
      "label": "Element 14",
      "type": "Biconvex Positive",
      "nd": 1.7725,
      "vd": 49.68,
      "glass": "TAF1 (HOYA catalog equivalent; production supplier unspecified)",
      "apd": false,
      "focalLengthMm": 94.86410839737981,
      "role": "Positive rear relay singlet with additional forward soft-focus travel"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 207.5,
      "medium": 1,
      "sd": 28,
      "d": 2.5
    },
    {
      "label": "2",
      "R": 77.6,
      "medium": 2,
      "sd": 28,
      "d": 7.8
    },
    {
      "label": "3",
      "R": -210.3,
      "sd": 28,
      "d": 0.15
    },
    {
      "label": "4",
      "R": 82.9,
      "medium": 3,
      "sd": 26,
      "d": 4.6
    },
    {
      "label": "5",
      "R": 388,
      "sd": 26
    },
    {
      "label": "6",
      "R": "flat",
      "medium": 4,
      "sd": 17.5,
      "d": 1.4
    },
    {
      "label": "7",
      "R": 70.7,
      "sd": 15.8,
      "d": 2.75
    },
    {
      "label": "8",
      "R": -184,
      "medium": 5,
      "sd": 17,
      "d": 3
    },
    {
      "label": "9",
      "R": -56.31,
      "medium": 6,
      "sd": 17,
      "d": 1.4
    },
    {
      "label": "10",
      "R": 116.8,
      "sd": 17,
      "d": 3.39
    },
    {
      "label": "11",
      "R": -62.45,
      "medium": 7,
      "sd": 15.6,
      "d": 1.3
    },
    {
      "label": "12",
      "R": 111.2,
      "medium": 8,
      "sd": 17.6,
      "d": 3.1
    },
    {
      "label": "13",
      "R": -405,
      "sd": 17.6
    },
    {
      "label": "14",
      "R": 186,
      "medium": 9,
      "sd": 18.3,
      "d": 3.7
    },
    {
      "label": "15",
      "R": -111.8,
      "sd": 18.3
    },
    {
      "label": "16",
      "R": 50.5,
      "medium": 10,
      "sd": 18.3,
      "d": 6.3
    },
    {
      "label": "17",
      "R": -107.65,
      "medium": 11,
      "sd": 18.3,
      "d": 1.5
    },
    {
      "label": "18",
      "R": 475,
      "sd": 18.3,
      "d": 2
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 8.5
    },
    {
      "label": "20",
      "R": -89.61,
      "medium": 12,
      "sd": 17.1,
      "d": 1.5
    },
    {
      "label": "21",
      "R": -355,
      "sd": 17.1,
      "d": 11
    },
    {
      "label": "22",
      "R": 36,
      "medium": 13,
      "sd": 16,
      "d": 1.5
    },
    {
      "label": "23",
      "R": 29.54,
      "sd": 16,
      "d": 17.5
    },
    {
      "label": "24",
      "R": 380,
      "medium": 14,
      "sd": 14.9,
      "d": 2.8
    },
    {
      "label": "25",
      "R": -90.5,
      "sd": 14.9
    }
  ],
  "groups": [
    { "text": "Z", "fromSurface": "1", "toSurface": "15" },
    { "text": "M", "fromSurface": "16", "toSurface": "25" }
  ],
  "doublets": [
    { "text": "D1", "fromSurface": "1", "toSurface": "3" },
    { "text": "D2", "fromSurface": "8", "toSurface": "10" },
    { "text": "D3", "fromSurface": "11", "toSurface": "13" },
    { "text": "D4", "fromSurface": "16", "toSurface": "18" }
  ],
  "focus": {
    "closeFocusM": 0.98,
    "description": "The model covers infinity only. Tamron's 0.98 m minimum focus distance is catalog metadata; the patent gives no finite-focus travel. The zoom path between the three printed states is interpolated with fixed total length and paraxial image-plane constraints. The soft control moves the rear relay elements while holding the sensor fixed, without refocusing the soft image."
  },
  "aperture": {
    "nominalFNumber": 2.8,
    "fStops": [
      2.8,
      4,
      5.6,
      8,
      11,
      16,
      22,
      32
    ],
    "maxFNumber": 32
  },
  "layout": {
    "yScFill": 0.65
  },
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 71.7149937647984,
        "published": true
      },
      {
        "focalLengthMm": 72.33670480807949,
        "published": false
      },
      {
        "focalLengthMm": 72.95841585136057,
        "published": false
      },
      {
        "focalLengthMm": 73.58012689464165,
        "published": false
      },
      {
        "focalLengthMm": 74.20183793792275,
        "published": false
      },
      {
        "focalLengthMm": 74.82354898120383,
        "published": false
      },
      {
        "focalLengthMm": 75.44526002448492,
        "published": false
      },
      {
        "focalLengthMm": 76.066971067766,
        "published": false
      },
      {
        "focalLengthMm": 76.68868211104709,
        "published": false
      },
      {
        "focalLengthMm": 77.31039315432818,
        "published": false
      },
      {
        "focalLengthMm": 77.93210419760928,
        "published": false
      },
      {
        "focalLengthMm": 78.55381524089036,
        "published": false
      },
      {
        "focalLengthMm": 79.17552628417144,
        "published": false
      },
      {
        "focalLengthMm": 79.79723732745254,
        "published": false
      },
      {
        "focalLengthMm": 80.41894837073362,
        "published": false
      },
      {
        "focalLengthMm": 81.0406594140147,
        "published": false
      },
      {
        "focalLengthMm": 81.66237045729578,
        "published": false
      },
      {
        "focalLengthMm": 82.28408150057687,
        "published": false
      },
      {
        "focalLengthMm": 82.90579254385796,
        "published": false
      },
      {
        "focalLengthMm": 83.52750358713905,
        "published": false
      },
      {
        "focalLengthMm": 84.14921463042015,
        "published": false
      },
      {
        "focalLengthMm": 84.77092567370123,
        "published": false
      },
      {
        "focalLengthMm": 85.39263671698231,
        "published": false
      },
      {
        "focalLengthMm": 86.0143477602634,
        "published": false
      },
      {
        "focalLengthMm": 86.63605880354449,
        "published": false
      },
      {
        "focalLengthMm": 87.25776984682557,
        "published": false
      },
      {
        "focalLengthMm": 87.87948089010666,
        "published": false
      },
      {
        "focalLengthMm": 88.50119193338776,
        "published": false
      },
      {
        "focalLengthMm": 89.12290297666884,
        "published": false
      },
      {
        "focalLengthMm": 89.74461401994992,
        "published": false
      },
      {
        "focalLengthMm": 90.36632506323102,
        "published": false
      },
      {
        "focalLengthMm": 90.9880361065121,
        "published": false
      },
      {
        "focalLengthMm": 91.60974714979318,
        "published": false
      },
      {
        "focalLengthMm": 92.23145819307427,
        "published": false
      },
      {
        "focalLengthMm": 92.85316923635536,
        "published": false
      },
      {
        "focalLengthMm": 93.47488027963644,
        "published": false
      },
      {
        "focalLengthMm": 94.09659132291753,
        "published": false
      },
      {
        "focalLengthMm": 94.71830236619863,
        "published": false
      },
      {
        "focalLengthMm": 95.34001340947971,
        "published": false
      },
      {
        "focalLengthMm": 95.9617244527608,
        "published": false
      },
      {
        "focalLengthMm": 96.58343549604189,
        "published": false
      },
      {
        "focalLengthMm": 97.20514653932297,
        "published": false
      },
      {
        "focalLengthMm": 97.82685758260406,
        "published": false
      },
      {
        "focalLengthMm": 98.44856862588514,
        "published": false
      },
      {
        "focalLengthMm": 99.07027966916623,
        "published": false
      },
      {
        "focalLengthMm": 99.69199071244732,
        "published": false
      },
      {
        "focalLengthMm": 100.3137017557284,
        "published": false
      },
      {
        "focalLengthMm": 100.93541279900948,
        "published": false
      },
      {
        "focalLengthMm": 101.55712384229058,
        "published": false
      },
      {
        "focalLengthMm": 102.17883488557166,
        "published": false
      },
      {
        "focalLengthMm": 102.80054592885276,
        "published": true
      },
      {
        "focalLengthMm": 103.6917392582155,
        "published": false
      },
      {
        "focalLengthMm": 104.58293258757827,
        "published": false
      },
      {
        "focalLengthMm": 105.47412591694103,
        "published": false
      },
      {
        "focalLengthMm": 106.36531924630378,
        "published": false
      },
      {
        "focalLengthMm": 107.25651257566656,
        "published": false
      },
      {
        "focalLengthMm": 108.14770590502931,
        "published": false
      },
      {
        "focalLengthMm": 109.03889923439205,
        "published": false
      },
      {
        "focalLengthMm": 109.93009256375481,
        "published": false
      },
      {
        "focalLengthMm": 110.82128589311758,
        "published": false
      },
      {
        "focalLengthMm": 111.71247922248034,
        "published": false
      },
      {
        "focalLengthMm": 112.60367255184309,
        "published": false
      },
      {
        "focalLengthMm": 113.49486588120584,
        "published": false
      },
      {
        "focalLengthMm": 114.38605921056862,
        "published": false
      },
      {
        "focalLengthMm": 115.27725253993137,
        "published": false
      },
      {
        "focalLengthMm": 116.16844586929412,
        "published": false
      },
      {
        "focalLengthMm": 117.05963919865688,
        "published": false
      },
      {
        "focalLengthMm": 117.95083252801965,
        "published": false
      },
      {
        "focalLengthMm": 118.84202585738241,
        "published": false
      },
      {
        "focalLengthMm": 119.73321918674515,
        "published": false
      },
      {
        "focalLengthMm": 120.62441251610791,
        "published": false
      },
      {
        "focalLengthMm": 121.51560584547067,
        "published": false
      },
      {
        "focalLengthMm": 122.40679917483342,
        "published": false
      },
      {
        "focalLengthMm": 123.29799250419619,
        "published": false
      },
      {
        "focalLengthMm": 124.18918583355894,
        "published": false
      },
      {
        "focalLengthMm": 125.0803791629217,
        "published": false
      },
      {
        "focalLengthMm": 125.97157249228447,
        "published": false
      },
      {
        "focalLengthMm": 126.86276582164722,
        "published": false
      },
      {
        "focalLengthMm": 127.75395915100998,
        "published": false
      },
      {
        "focalLengthMm": 128.64515248037273,
        "published": false
      },
      {
        "focalLengthMm": 129.5363458097355,
        "published": false
      },
      {
        "focalLengthMm": 130.42753913909826,
        "published": false
      },
      {
        "focalLengthMm": 131.318732468461,
        "published": false
      },
      {
        "focalLengthMm": 132.20992579782376,
        "published": false
      },
      {
        "focalLengthMm": 133.1011191271865,
        "published": false
      },
      {
        "focalLengthMm": 133.99231245654929,
        "published": false
      },
      {
        "focalLengthMm": 134.88350578591204,
        "published": false
      },
      {
        "focalLengthMm": 135.7746991152748,
        "published": false
      },
      {
        "focalLengthMm": 136.66589244463756,
        "published": false
      },
      {
        "focalLengthMm": 137.5570857740003,
        "published": false
      },
      {
        "focalLengthMm": 138.44827910336306,
        "published": false
      },
      {
        "focalLengthMm": 139.33947243272584,
        "published": false
      },
      {
        "focalLengthMm": 140.2306657620886,
        "published": false
      },
      {
        "focalLengthMm": 141.12185909145134,
        "published": false
      },
      {
        "focalLengthMm": 142.0130524208141,
        "published": false
      },
      {
        "focalLengthMm": 142.90424575017684,
        "published": false
      },
      {
        "focalLengthMm": 143.79543907953962,
        "published": false
      },
      {
        "focalLengthMm": 144.68663240890237,
        "published": false
      },
      {
        "focalLengthMm": 145.57782573826512,
        "published": false
      },
      {
        "focalLengthMm": 146.46901906762787,
        "published": false
      },
      {
        "focalLengthMm": 147.36021239699065,
        "published": true
      }
    ]
  },
  "gaps": {
    "5": {
      "label": "D5",
      "values": [
        [
          2.3413,
          2.3413
        ],
        [
          2.7860938025389568,
          2.7860938025389568
        ],
        [
          3.2233070421597865,
          3.2233070421597865
        ],
        [
          3.653131873158511,
          3.653131873158511
        ],
        [
          4.075754009868651,
          4.075754009868651
        ],
        [
          4.491352994209656,
          4.491352994209656
        ],
        [
          4.900102450007359,
          4.900102450007359
        ],
        [
          5.302170324842613,
          5.302170324842613
        ],
        [
          5.69771912013607,
          5.69771912013607
        ],
        [
          6.086906110131078,
          6.086906110131078
        ],
        [
          6.469883550395247,
          6.469883550395247
        ],
        [
          6.846798876420422,
          6.846798876420422
        ],
        [
          7.21779489286629,
          7.21779489286629
        ],
        [
          7.583009953957371,
          7.583009953957371
        ],
        [
          7.9425781355120195,
          7.9425781355120195
        ],
        [
          8.296629399053373,
          8.296629399053373
        ],
        [
          8.64528974842344,
          8.64528974842344
        ],
        [
          8.988681379297663,
          8.988681379297663
        ],
        [
          9.326922821972044,
          9.326922821972044
        ],
        [
          9.66012907777317,
          9.66012907777317
        ],
        [
          9.988411749422829,
          9.988411749422829
        ],
        [
          10.311879165662726,
          10.311879165662726
        ],
        [
          10.630636500439527,
          10.630636500439527
        ],
        [
          10.94478588691771,
          10.94478588691771
        ],
        [
          11.254426526584776,
          11.254426526584776
        ],
        [
          11.559654793692179,
          11.559654793692179
        ],
        [
          11.860564335262424,
          11.860564335262424
        ],
        [
          12.157246166881922,
          12.157246166881922
        ],
        [
          12.44978876448339,
          12.44978876448339
        ],
        [
          12.738278152313917,
          12.738278152313917
        ],
        [
          13.02279798727154,
          13.02279798727154
        ],
        [
          13.303429639784397,
          13.303429639784397
        ],
        [
          13.58025227139626,
          13.58025227139626
        ],
        [
          13.853342909214557,
          13.853342909214557
        ],
        [
          14.12277651736724,
          14.12277651736724
        ],
        [
          14.388626065608173,
          14.388626065608173
        ],
        [
          14.650962595202543,
          14.650962595202543
        ],
        [
          14.909855282218318,
          14.909855282218318
        ],
        [
          15.165371498340209,
          15.165371498340209
        ],
        [
          15.41757686932059,
          15.41757686932059
        ],
        [
          15.666535331172499,
          15.666535331172499
        ],
        [
          15.912309184206343,
          15.912309184206343
        ],
        [
          16.15495914500597,
          16.15495914500597
        ],
        [
          16.394544396435474,
          16.394544396435474
        ],
        [
          16.631122635763244,
          16.631122635763244
        ],
        [
          16.86475012098493,
          16.86475012098493
        ],
        [
          17.095481715424228,
          17.095481715424228
        ],
        [
          17.32337093068511,
          17.32337093068511
        ],
        [
          17.548469968026506,
          17.548469968026506
        ],
        [
          17.770829758226498,
          17.770829758226498
        ],
        [
          17.9905,
          17.9905
        ],
        [
          18.30078821690923,
          18.30078821690923
        ],
        [
          18.60578825254924,
          18.60578825254924
        ],
        [
          18.905634153083586,
          18.905634153083586
        ],
        [
          19.2004554721863,
          19.2004554721863
        ],
        [
          19.49037745768275,
          19.49037745768275
        ],
        [
          19.775521228961978,
          19.775521228961978
        ],
        [
          20.056003945688957,
          20.056003945688957
        ],
        [
          20.33193896831073,
          20.33193896831073
        ],
        [
          20.6034360108176,
          20.6034360108176
        ],
        [
          20.870601286192734,
          20.870601286192734
        ],
        [
          21.13353764495465,
          21.13353764495465
        ],
        [
          21.39234470717247,
          21.39234470717247
        ],
        [
          21.647118988309934,
          21.647118988309934
        ],
        [
          21.897954019232177,
          21.897954019232177
        ],
        [
          22.144940460688396,
          22.144940460688396
        ],
        [
          22.38816621256543,
          22.38816621256543
        ],
        [
          22.62771651818813,
          22.62771651818813
        ],
        [
          22.863674063927043,
          22.863674063927043
        ],
        [
          23.0961190743576,
          23.0961190743576
        ],
        [
          23.325129403201093,
          23.325129403201093
        ],
        [
          23.5507806202638,
          23.5507806202638
        ],
        [
          23.77314609457829,
          23.77314609457829
        ],
        [
          23.992297073939202,
          23.992297073939202
        ],
        [
          24.208302761014284,
          24.208302761014284
        ],
        [
          24.421230386201756,
          24.421230386201756
        ],
        [
          24.63114527739534,
          24.63114527739534
        ],
        [
          24.83811092680828,
          24.83811092680828
        ],
        [
          25.04218905500069,
          25.04218905500069
        ],
        [
          25.243439672245664,
          25.243439672245664
        ],
        [
          25.441921137362097,
          25.441921137362097
        ],
        [
          25.6376902141355,
          25.6376902141355
        ],
        [
          25.830802125441544,
          25.830802125441544
        ],
        [
          26.021310605180485,
          26.021310605180485
        ],
        [
          26.20926794812525,
          26.20926794812525
        ],
        [
          26.394725057780338,
          26.394725057780338
        ],
        [
          26.577731492343215,
          26.577731492343215
        ],
        [
          26.758335508855875,
          26.758335508855875
        ],
        [
          26.936584105628807,
          26.936584105628807
        ],
        [
          27.11252306301592,
          27.11252306301592
        ],
        [
          27.28619698261458,
          27.28619698261458
        ],
        [
          27.45764932496132,
          27.45764932496132
        ],
        [
          27.626922445790267,
          27.626922445790267
        ],
        [
          27.79405763091771,
          27.79405763091771
        ],
        [
          27.95909512981302,
          27.95909512981302
        ],
        [
          28.12207418791368,
          28.12207418791368
        ],
        [
          28.283033077738388,
          28.283033077738388
        ],
        [
          28.442009128850355,
          28.442009128850355
        ],
        [
          28.599038756720386,
          28.599038756720386
        ],
        [
          28.754157490535686,
          28.754157490535686
        ],
        [
          28.9074,
          28.9074
        ]
      ]
    },
    "13": {
      "label": "D13",
      "values": [
        [
          28.5813,
          28.5813
        ],
        [
          28.36296034880279,
          28.36296034880279
        ],
        [
          28.144620682595292,
          28.144620682595292
        ],
        [
          27.92628100142593,
          27.92628100142593
        ],
        [
          27.70794130534298,
          27.70794130534298
        ],
        [
          27.489601594394863,
          27.489601594394863
        ],
        [
          27.271261868629825,
          27.271261868629825
        ],
        [
          27.052922128096217,
          27.052922128096217
        ],
        [
          26.83458237284248,
          26.83458237284248
        ],
        [
          26.616242602916756,
          26.616242602916756
        ],
        [
          26.397902818367548,
          26.397902818367548
        ],
        [
          26.179563019243158,
          26.179563019243158
        ],
        [
          25.96122320559189,
          25.96122320559189
        ],
        [
          25.74288337746208,
          25.74288337746208
        ],
        [
          25.524543534902072,
          25.524543534902072
        ],
        [
          25.306203677960248,
          25.306203677960248
        ],
        [
          25.087863806684897,
          25.087863806684897
        ],
        [
          24.869523921124284,
          24.869523921124284
        ],
        [
          24.651184021326895,
          24.651184021326895
        ],
        [
          24.4328441073409,
          24.4328441073409
        ],
        [
          24.214504179214895,
          24.214504179214895
        ],
        [
          23.99616423699694,
          23.99616423699694
        ],
        [
          23.777824280735537,
          23.777824280735537
        ],
        [
          23.559484310478943,
          23.559484310478943
        ],
        [
          23.341144326275494,
          23.341144326275494
        ],
        [
          23.122804328173608,
          23.122804328173608
        ],
        [
          22.904464316221542,
          22.904464316221542
        ],
        [
          22.6861242904676,
          22.6861242904676
        ],
        [
          22.467784250960253,
          22.467784250960253
        ],
        [
          22.24944419774773,
          22.24944419774773
        ],
        [
          22.031104130878372,
          22.031104130878372
        ],
        [
          21.81276405040059,
          21.81276405040059
        ],
        [
          21.594423956362668,
          21.594423956362668
        ],
        [
          21.376083848812932,
          21.376083848812932
        ],
        [
          21.157743727799748,
          21.157743727799748
        ],
        [
          20.93940359337144,
          20.93940359337144
        ],
        [
          20.721063445576277,
          20.721063445576277
        ],
        [
          20.502723284462792,
          20.502723284462792
        ],
        [
          20.28438311007905,
          20.28438311007905
        ],
        [
          20.06604292247356,
          20.06604292247356
        ],
        [
          19.847702721694628,
          19.847702721694628
        ],
        [
          19.629362507790596,
          19.629362507790596
        ],
        [
          19.41102228080983,
          19.41102228080983
        ],
        [
          19.19268204080058,
          19.19268204080058
        ],
        [
          18.97434178781128,
          18.97434178781128
        ],
        [
          18.75600152189017,
          18.75600152189017
        ],
        [
          18.5376612430856,
          18.5376612430856
        ],
        [
          18.319320951446,
          18.319320951446
        ],
        [
          18.100980647019664,
          18.100980647019664
        ],
        [
          17.882640329854862,
          17.882640329854862
        ],
        [
          17.6643,
          17.6643
        ],
        [
          17.35131689299973,
          17.35131689299973
        ],
        [
          17.038333835681094,
          17.038333835681094
        ],
        [
          16.725350827762952,
          16.725350827762952
        ],
        [
          16.41236786896415,
          16.41236786896415
        ],
        [
          16.09938495900355,
          16.09938495900355
        ],
        [
          15.786402097600067,
          15.786402097600067
        ],
        [
          15.473419284472604,
          15.473419284472604
        ],
        [
          15.160436519339987,
          15.160436519339987
        ],
        [
          14.847453801921079,
          14.847453801921079
        ],
        [
          14.53447113193486,
          14.53447113193486
        ],
        [
          14.221488509100137,
          14.221488509100137
        ],
        [
          13.90850593313578,
          13.90850593313578
        ],
        [
          13.595523403760694,
          13.595523403760694
        ],
        [
          13.282540920693746,
          13.282540920693746
        ],
        [
          12.969558483653834,
          12.969558483653834
        ],
        [
          12.656576092359847,
          12.656576092359847
        ],
        [
          12.343593746530614,
          12.343593746530614
        ],
        [
          12.030611445885082,
          12.030611445885082
        ],
        [
          11.717629190142105,
          11.717629190142105
        ],
        [
          11.404646979020567,
          11.404646979020567
        ],
        [
          11.09166481223933,
          11.09166481223933
        ],
        [
          10.778682689517282,
          10.778682689517282
        ],
        [
          10.465700610573304,
          10.465700610573304
        ],
        [
          10.152718575126311,
          10.152718575126311
        ],
        [
          9.839736582895156,
          9.839736582895156
        ],
        [
          9.526754633598742,
          9.526754633598742
        ],
        [
          9.213772726955925,
          9.213772726955925
        ],
        [
          8.900790862685595,
          8.900790862685595
        ],
        [
          8.587809040506613,
          8.587809040506613
        ],
        [
          8.274827260137949,
          8.274827260137949
        ],
        [
          7.961845521298385,
          7.961845521298385
        ],
        [
          7.648863823706855,
          7.648863823706855
        ],
        [
          7.335882167082249,
          7.335882167082249
        ],
        [
          7.022900551143414,
          7.022900551143414
        ],
        [
          6.709918975609256,
          6.709918975609256
        ],
        [
          6.396937440198659,
          6.396937440198659
        ],
        [
          6.083955944630528,
          6.083955944630528
        ],
        [
          5.770974488623711,
          5.770974488623711
        ],
        [
          5.45799307189713,
          5.45799307189713
        ],
        [
          5.145011694169628,
          5.145011694169628
        ],
        [
          4.832030355160132,
          4.832030355160132
        ],
        [
          4.519049054587467,
          4.519049054587467
        ],
        [
          4.2060677921705745,
          4.2060677921705745
        ],
        [
          3.8930865676283344,
          3.8930865676283344
        ],
        [
          3.580105380679608,
          3.580105380679608
        ],
        [
          3.2671242310433435,
          3.2671242310433435
        ],
        [
          2.9541431184383082,
          2.9541431184383082
        ],
        [
          2.6411620425835256,
          2.6411620425835256
        ],
        [
          2.3281810031977432,
          2.3281810031977432
        ],
        [
          2.0152,
          2.0152
        ]
      ]
    },
    "15": {
      "label": "D15",
      "values": [
        [
          6.2322,
          6.2322
        ],
        [
          6.005745848658254,
          6.005745848658254
        ],
        [
          5.786872275244924,
          5.786872275244924
        ],
        [
          5.57538712541556,
          5.57538712541556
        ],
        [
          5.371104684788371,
          5.371104684788371
        ],
        [
          5.173845411395483,
          5.173845411395483
        ],
        [
          4.9834356813628204,
          4.9834356813628204
        ],
        [
          4.799707547061175,
          4.799707547061175
        ],
        [
          4.622498507021454,
          4.622498507021454
        ],
        [
          4.451651286952163,
          4.451651286952163
        ],
        [
          4.287013631237208,
          4.287013631237208
        ],
        [
          4.128438104336418,
          4.128438104336418
        ],
        [
          3.975781901541822,
          3.975781901541822
        ],
        [
          3.828906668580551,
          3.828906668580551
        ],
        [
          3.687678329585907,
          3.687678329585907
        ],
        [
          3.551966922986381,
          3.551966922986381
        ],
        [
          3.421646444891664,
          3.421646444891664
        ],
        [
          3.2965946995780584,
          3.2965946995780584
        ],
        [
          3.176693156701063,
          3.176693156701063
        ],
        [
          3.061826814885926,
          3.061826814885926
        ],
        [
          2.9518840713622794,
          2.9518840713622794
        ],
        [
          2.846756597340338,
          2.846756597340338
        ],
        [
          2.746339218824936,
          2.746339218824936
        ],
        [
          2.6505298026033515,
          2.6505298026033515
        ],
        [
          2.5592291471397317,
          2.5592291471397317
        ],
        [
          2.4723408781342116,
          2.4723408781342116
        ],
        [
          2.3897713485160352,
          2.3897713485160352
        ],
        [
          2.3114295426504796,
          2.3114295426504796
        ],
        [
          2.237226984556358,
          2.237226984556358
        ],
        [
          2.1670776499383564,
          2.1670776499383564
        ],
        [
          2.100897881850088,
          2.100897881850088
        ],
        [
          2.038606309815016,
          2.038606309815016
        ],
        [
          1.9801237722410718,
          1.9801237722410718
        ],
        [
          1.9253732419725154,
          1.9253732419725154
        ],
        [
          1.8742797548330117,
          1.8742797548330117
        ],
        [
          1.826770341020385,
          1.826770341020385
        ],
        [
          1.7827739592211813,
          1.7827739592211813
        ],
        [
          1.742221433318889,
          1.742221433318889
        ],
        [
          1.7050453915807395,
          1.7050453915807395
        ],
        [
          1.671180208205854,
          1.671180208205854
        ],
        [
          1.6405619471328734,
          1.6405619471328734
        ],
        [
          1.6131283080030627,
          1.6131283080030627
        ],
        [
          1.5888185741841951,
          1.5888185741841951
        ],
        [
          1.5675735627639469,
          1.5675735627639469
        ],
        [
          1.5493355764254773,
          1.5493355764254773
        ],
        [
          1.5340483571249024,
          1.5340483571249024
        ],
        [
          1.5216570414901724,
          1.5216570414901724
        ],
        [
          1.5121081178688982,
          1.5121081178688982
        ],
        [
          1.5053493849538313,
          1.5053493849538313
        ],
        [
          1.5013299119186385,
          1.5013299119186385
        ],
        [
          1.5,
          1.5
        ],
        [
          1.5026948900910426,
          1.5026948900910426
        ],
        [
          1.510677911769669,
          1.510677911769669
        ],
        [
          1.5238150191534672,
          1.5238150191534672
        ],
        [
          1.5419766588495563,
          1.5419766588495563
        ],
        [
          1.5650375833137034,
          1.5650375833137034
        ],
        [
          1.5928766734379565,
          1.5928766734379565
        ],
        [
          1.6253767698384394,
          1.6253767698384394
        ],
        [
          1.6624245123492827,
          1.6624245123492827
        ],
        [
          1.7039101872613216,
          1.7039101872613216
        ],
        [
          1.7497275818724063,
          1.7497275818724063
        ],
        [
          1.799773845945218,
          1.799773845945218
        ],
        [
          1.8539493596917538,
          1.8539493596917538
        ],
        [
          1.9121576079293732,
          1.9121576079293732
        ],
        [
          1.9743050600740801,
          1.9743050600740801
        ],
        [
          2.040301055657771,
          2.040301055657771
        ],
        [
          2.1100576950747225,
          2.1100576950747225
        ],
        [
          2.183489735281256,
          2.183489735281256
        ],
        [
          2.26051449018788,
          2.26051449018788
        ],
        [
          2.3410517355002938,
          2.3410517355002938
        ],
        [
          2.4250236177783435,
          2.4250236177783435
        ],
        [
          2.512354567496871,
          2.512354567496871
        ],
        [
          2.602971215904425,
          2.602971215904425
        ],
        [
          2.6968023154874956,
          2.6968023154874956
        ],
        [
          2.793778663859406,
          2.793778663859406
        ],
        [
          2.893833030903089,
          2.893833030903089
        ],
        [
          2.996900089005919,
          2.996900089005919
        ],
        [
          3.1029163462357943,
          3.1029163462357943
        ],
        [
          3.2118200823137144,
          3.2118200823137144
        ],
        [
          3.3235512872477244,
          3.3235512872477244
        ],
        [
          3.4380516024999537,
          3.4380516024999537
        ],
        [
          3.5552642645661194,
          3.5552642645661194
        ],
        [
          3.6751340508516037,
          3.6751340508516037
        ],
        [
          3.7976072277372666,
          3.7976072277372666
        ],
        [
          3.9226315007313346,
          3.9226315007313346
        ],
        [
          4.050155966610411,
          4.050155966610411
        ],
        [
          4.180131067458127,
          4.180131067458127
        ],
        [
          4.312508546513598,
          4.312508546513598
        ],
        [
          4.447241405747484,
          4.447241405747484
        ],
        [
          4.584283865086952,
          4.584283865086952
        ],
        [
          4.723591323215793,
          4.723591323215793
        ],
        [
          4.8651203198785495,
          4.8651203198785495
        ],
        [
          5.008828499622268,
          5.008828499622268
        ],
        [
          5.154674576911717,
          5.154674576911717
        ],
        [
          5.302618302558649,
          5.302618302558649
        ],
        [
          5.452620431406714,
          5.452620431406714
        ],
        [
          5.60464269121827,
          5.60464269121827
        ],
        [
          5.75864775271134,
          5.75864775271134
        ],
        [
          5.914599200696088,
          5.914599200696088
        ],
        [
          6.0724615062665706,
          6.0724615062665706
        ],
        [
          6.2322,
          6.2322
        ]
      ]
    },
    "25": {
      "label": "BF",
      "values": [
        [
          69.75255034744667,
          69.75255034744667
        ],
        [
          69.75254858856349,
          69.75254858856349
        ],
        [
          69.7525468296803,
          69.7525468296803
        ],
        [
          69.75254507079711,
          69.75254507079711
        ],
        [
          69.75254331191393,
          69.75254331191393
        ],
        [
          69.75254155303074,
          69.75254155303074
        ],
        [
          69.75253979414755,
          69.75253979414755
        ],
        [
          69.75253803526437,
          69.75253803526437
        ],
        [
          69.75253627638118,
          69.75253627638118
        ],
        [
          69.752534517498,
          69.752534517498
        ],
        [
          69.7525327586148,
          69.7525327586148
        ],
        [
          69.75253099973162,
          69.75253099973162
        ],
        [
          69.75252924084845,
          69.75252924084845
        ],
        [
          69.75252748196525,
          69.75252748196525
        ],
        [
          69.75252572308206,
          69.75252572308206
        ],
        [
          69.75252396419887,
          69.75252396419887
        ],
        [
          69.75252220531569,
          69.75252220531569
        ],
        [
          69.7525204464325,
          69.7525204464325
        ],
        [
          69.75251868754931,
          69.75251868754931
        ],
        [
          69.75251692866613,
          69.75251692866613
        ],
        [
          69.75251516978294,
          69.75251516978294
        ],
        [
          69.75251341089975,
          69.75251341089975
        ],
        [
          69.75251165201658,
          69.75251165201658
        ],
        [
          69.75250989313339,
          69.75250989313339
        ],
        [
          69.7525081342502,
          69.7525081342502
        ],
        [
          69.752506375367,
          69.752506375367
        ],
        [
          69.75250461648383,
          69.75250461648383
        ],
        [
          69.75250285760063,
          69.75250285760063
        ],
        [
          69.75250109871746,
          69.75250109871746
        ],
        [
          69.75249933983426,
          69.75249933983426
        ],
        [
          69.75249758095109,
          69.75249758095109
        ],
        [
          69.7524958220679,
          69.7524958220679
        ],
        [
          69.75249406318471,
          69.75249406318471
        ],
        [
          69.75249230430153,
          69.75249230430153
        ],
        [
          69.75249054541834,
          69.75249054541834
        ],
        [
          69.75248878653514,
          69.75248878653514
        ],
        [
          69.75248702765197,
          69.75248702765197
        ],
        [
          69.75248526876878,
          69.75248526876878
        ],
        [
          69.7524835098856,
          69.7524835098856
        ],
        [
          69.7524817510024,
          69.7524817510024
        ],
        [
          69.75247999211922,
          69.75247999211922
        ],
        [
          69.75247823323603,
          69.75247823323603
        ],
        [
          69.75247647435285,
          69.75247647435285
        ],
        [
          69.75247471546966,
          69.75247471546966
        ],
        [
          69.75247295658647,
          69.75247295658647
        ],
        [
          69.75247119770329,
          69.75247119770329
        ],
        [
          69.7524694388201,
          69.7524694388201
        ],
        [
          69.7524676799369,
          69.7524676799369
        ],
        [
          69.75246592105373,
          69.75246592105373
        ],
        [
          69.75246416217054,
          69.75246416217054
        ],
        [
          69.75246240328735,
          69.75246240328735
        ],
        [
          69.75246738138574,
          69.75246738138574
        ],
        [
          69.75247235948413,
          69.75247235948413
        ],
        [
          69.75247733758249,
          69.75247733758249
        ],
        [
          69.75248231568088,
          69.75248231568088
        ],
        [
          69.75248729377927,
          69.75248729377927
        ],
        [
          69.75249227187766,
          69.75249227187766
        ],
        [
          69.75249724997603,
          69.75249724997603
        ],
        [
          69.75250222807442,
          69.75250222807442
        ],
        [
          69.7525072061728,
          69.7525072061728
        ],
        [
          69.75251218427118,
          69.75251218427118
        ],
        [
          69.75251716236957,
          69.75251716236957
        ],
        [
          69.75252214046795,
          69.75252214046795
        ],
        [
          69.75252711856633,
          69.75252711856633
        ],
        [
          69.75253209666471,
          69.75253209666471
        ],
        [
          69.7525370747631,
          69.7525370747631
        ],
        [
          69.75254205286149,
          69.75254205286149
        ],
        [
          69.75254703095986,
          69.75254703095986
        ],
        [
          69.75255200905825,
          69.75255200905825
        ],
        [
          69.75255698715662,
          69.75255698715662
        ],
        [
          69.75256196525501,
          69.75256196525501
        ],
        [
          69.7525669433534,
          69.7525669433534
        ],
        [
          69.75257192145177,
          69.75257192145177
        ],
        [
          69.75257689955016,
          69.75257689955016
        ],
        [
          69.75258187764854,
          69.75258187764854
        ],
        [
          69.75258685574693,
          69.75258685574693
        ],
        [
          69.75259183384532,
          69.75259183384532
        ],
        [
          69.75259681194369,
          69.75259681194369
        ],
        [
          69.75260179004208,
          69.75260179004208
        ],
        [
          69.75260676814045,
          69.75260676814045
        ],
        [
          69.75261174623884,
          69.75261174623884
        ],
        [
          69.75261672433723,
          69.75261672433723
        ],
        [
          69.75262170243562,
          69.75262170243562
        ],
        [
          69.752626680534,
          69.752626680534
        ],
        [
          69.75263165863237,
          69.75263165863237
        ],
        [
          69.75263663673076,
          69.75263663673076
        ],
        [
          69.75264161482914,
          69.75264161482914
        ],
        [
          69.75264659292752,
          69.75264659292752
        ],
        [
          69.75265157102591,
          69.75265157102591
        ],
        [
          69.75265654912428,
          69.75265654912428
        ],
        [
          69.75266152722267,
          69.75266152722267
        ],
        [
          69.75266650532105,
          69.75266650532105
        ],
        [
          69.75267148341943,
          69.75267148341943
        ],
        [
          69.75267646151782,
          69.75267646151782
        ],
        [
          69.7526814396162,
          69.7526814396162
        ],
        [
          69.75268641771459,
          69.75268641771459
        ],
        [
          69.75269139581297,
          69.75269139581297
        ],
        [
          69.75269637391136,
          69.75269637391136
        ],
        [
          69.75270135200972,
          69.75270135200972
        ],
        [
          69.75270633010811,
          69.75270633010811
        ],
        [
          69.7527113082065,
          69.7527113082065
        ]
      ]
    }
  },
  "aberrationControl": {
    "label": "SOFT",
    "description": "The soft ring shifts the rear relay elements: G12 and G13 move forward 6.2 mm, and G14 moves forward 9.22 mm. The model interpolates linearly between the patent's normal and soft settings while holding the sensor fixed. Intermediate ring positions do not reproduce a documented factory calibration.",
    "minLabel": "NORMAL",
    "maxLabel": "SOFT",
    "gaps": {
      "STO": {
        "values": [
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ],
          [
            8.5,
            2.3
          ]
        ]
      },
      "23": {
        "values": [
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ],
          [
            17.5,
            14.48
          ]
        ]
      },
      "25": {
        "values": [
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ],
          [
            69.75255034744667,
            78.97255034744667
          ]
        ]
      }
    }
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
