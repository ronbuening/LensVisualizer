import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2003/0223122 A1 (Pentax Corporation, published 2003-12-04), Embodiment 3, Table 3, PDF pp. 15–16; Fig. 9
 * section, Figs. 10–12 aberrations, Fig. 17 group paths. The grant US 6,778,331 B2 (same application 10/431,464)
 * prints identical Tables 3 and 4.
 * Production correlation is qualified: Embodiments 3 and 4 both match the maker's 12 elements / 10 groups with a
 * free-standing plastic tenth element (L10, aspheric S18) and differ only by a glass swap between L7 and L8.
 * Embodiment 4's printed middle/tele fB (72.32/86.58 mm) repeats Table 2; its own prescription focuses at
 * 71.78/86.15 mm, a printing error, so Embodiment 3 is used.
 * R, d, nd/νd (d-line), K = 0 and the S18 asphere coefficients are as printed; the patent's K is the standard conic.
 * The printed fB 58.97/73.19/87.56 mm are kept as the image planes; paraxial focus differs from them by
 * +0.0051/−0.0175/+0.0038 mm, left as printed.
 * Design f = 77.25/200.01/289.96 mm at f/4.6/5.4/6.2; the lens is sold as 75–300 mm f/4.5–5.8.
 * Of the 65 zoom stations only 0, 32 and 64 are the printed rows. Between them D11 and BF are linear and D6 is
 * solved to keep the image on the plane; intermediate focal lengths are calculated EFLs, not factory cam data.
 * Infinity only: both focus columns repeat the infinity prescription. ¶0057 focuses by moving G1 toward the object,
 * but no near spacing is printed; the maker's 1.3 m minimum focus is not modeled.
 * Semi-diameters are inferred from Fig. 9 proportions; the patent prints none. Measured on Fig. 9 (wide position,
 * 0.0862 mm/px from the S1–S22 vertex span), every rim is within 3% of the drawing; Fig. 9 draws L6 at 11.96 mm.
 * The stop (unnumbered S in Fig. 9) is placed 0.6 mm before S12 and moves with G3; the 0.6 mm is taken out of D11,
 * so the printed track is unchanged. The iris radius follows the printed f-number; no stop sd is authored.
 * The printed field is W = 16.0/6.0/4.2° (about 21.6 mm image height); no image height is printed.
 * No camera-side plates are listed. Glass names are catalog equivalents; the patent names no supplier.
 * G2 moves imageward to the middle position and then objectward; every group is closest to the object at tele,
 * but the motion is not monotonic.
 * L6 is square at 11.99 mm, the least rim that passes the tele f/6.2 axial beam by the repo's aperture audit
 * (Fig. 9 draws it at 11.96 mm). Its S10 rim then sits close to L5's rear face across the 2.77 mm air gap without
 * crossing it, so checks.gapSagFrac is 0.96. About 98.8% of the tele axial entrance area passes (about f/6.24).
 */
const LENS_DATA = {
  "schema": 2,
  "key": "pentax-fa-j-75-300mm-f45-58-al",
  "maker": "Pentax",
  "name": "PENTAX SMC FA J 75-300mm f/4.5-5.8 AL",
  "subtitle": "US 2003/0223122 A1, Embodiment 3 \u2014 qualified production correlation",
  "catalog": {
    "lensMounts": [
      "pentax-k"
    ],
    "imageFormat": "135-full-frame",
    "specs": [
      "12 ELEMENTS / 10 GROUPS",
      "DESIGN f = 77.25–289.96 mm",
      "DESIGN F/4.6–6.2",
      "1 ASPHERICAL SURFACE / 1 ELEMENT",
      "PLASTIC ASPHERICAL ELEMENT"
    ],
    "elementCount": 12,
    "groupCount": 10,
    "focalLengthMm": {
      "marketing": [
        75,
        300
      ],
      "design": [
        77.25,
        289.96
      ]
    },
    "fNumber": {
      "marketing": 4.5,
      "design": 4.6
    }
  },
  "source": {
    "patentNumber": "US 2003/0223122 A1",
    "example": {
      "label": "Embodiment 3",
      "id": "3"
    },
    "patentYear": 2003,
    "authors": [
      "Hiroyasu Ozaki"
    ],
    "assignees": [
      "Pentax Corporation"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "diagramLabel": "L1",
      "role": "Positive front collector of the focusing first group (G1)",
      "type": "Positive Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "focalLengthMm": 161.593991543,
      "glass": "S-BSL7 (catalog equivalent; supplier unconfirmed)",
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "diagramLabel": "L2",
      "role": "Negative dense-flint meniscus balancing the color of the first group's crowns",
      "type": "Negative Meniscus",
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "d",
      "focalLengthMm": -175.740407399,
      "glass": "S-TIH6 (catalog equivalent; supplier unconfirmed)",
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "diagramLabel": "L3",
      "role": "Positive rear element of the first group (G1)",
      "type": "Positive Meniscus",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "focalLengthMm": 129.314248065,
      "glass": "S-BSL7 (catalog equivalent; supplier unconfirmed)",
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "diagramLabel": "L4",
      "role": "Negative front member of the second-group (G2) cemented doublet",
      "type": "Biconcave Negative",
      "nd": 1.734,
      "vd": 51.5,
      "indexReference": "d",
      "focalLengthMm": -24.639033783,
      "glass": "S-LAL59 (catalog equivalent; supplier unconfirmed)",
      "cemented": "C1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "diagramLabel": "L5",
      "role": "Positive dense-flint rear member of the G2 cemented doublet",
      "type": "Positive Meniscus",
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "d",
      "focalLengthMm": 33.799778402,
      "glass": "S-TIH6 (catalog equivalent; supplier unconfirmed)",
      "cemented": "C1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "diagramLabel": "L6",
      "role": "Negative rear singlet of G2; its rim limits the tele aperture",
      "type": "Biconcave Negative",
      "nd": 1.8061,
      "vd": 40.9,
      "indexReference": "d",
      "focalLengthMm": -52.140213119,
      "glass": "S-LAH53 (catalog equivalent; supplier unconfirmed)",
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "diagramLabel": "L7",
      "role": "Positive front singlet of the third group (G3), just behind the stop",
      "type": "Biconvex Positive",
      "nd": 1.51633,
      "vd": 64.1,
      "indexReference": "d",
      "focalLengthMm": 56.900755143,
      "glass": "S-BSL7 (catalog equivalent; supplier unconfirmed)",
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "diagramLabel": "L8",
      "role": "Positive low-dispersion crown of the G3 cemented doublet",
      "type": "Biconvex Positive",
      "nd": 1.48749,
      "vd": 70.2,
      "indexReference": "d",
      "focalLengthMm": 45.454151106,
      "glass": "S-FSL5 (catalog equivalent; supplier unconfirmed)",
      "cemented": "C2"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "diagramLabel": "L9",
      "role": "Negative dense-flint member of the G3 cemented doublet",
      "type": "Biconcave Negative",
      "nd": 1.80518,
      "vd": 25.4,
      "indexReference": "d",
      "focalLengthMm": -48.014863924,
      "glass": "S-TIH6 (catalog equivalent; supplier unconfirmed)",
      "cemented": "C2"
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "diagramLabel": "L10",
      "role": "Weak positive plastic element carrying the aspheric surface S18; ends the forward G3 subgroup",
      "type": "Positive Meniscus",
      "nd": 1.52538,
      "vd": 56.3,
      "indexReference": "d",
      "focalLengthMm": 666.670158988,
      "glass": "Unmatched (optical plastic; nd 1.52538, νd 56.3)",
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "diagramLabel": "L11",
      "role": "Positive front singlet of the rear negative G3 subgroup",
      "type": "Biconvex Positive",
      "nd": 1.64769,
      "vd": 33.8,
      "indexReference": "d",
      "focalLengthMm": 35.650594007,
      "glass": "S-TIM22 (catalog equivalent; supplier unconfirmed)",
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "diagramLabel": "L12",
      "role": "Negative final element of the rear G3 subgroup",
      "type": "Biconcave Negative",
      "nd": 1.804,
      "vd": 46.6,
      "indexReference": "d",
      "focalLengthMm": -27.181572578,
      "glass": "S-LAH65 (catalog equivalent; supplier unconfirmed)",
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 76.154,
      "sd": 25.3,
      "medium": 1,
      "d": 5.84
    },
    {
      "label": "2",
      "R": 849.794,
      "sd": 25.3,
      "d": 0.1
    },
    {
      "label": "3",
      "R": 90.032,
      "sd": 24.7,
      "medium": 2,
      "d": 1.6
    },
    {
      "label": "4",
      "R": 54.587,
      "sd": 24.7,
      "d": 1.26
    },
    {
      "label": "5",
      "R": 66.472,
      "sd": 23.7,
      "medium": 3,
      "d": 6.32
    },
    {
      "label": "6",
      "R": 14468.316,
      "sd": 23.7
    },
    {
      "label": "7",
      "R": -358.787,
      "sd": 12.63,
      "medium": 4,
      "d": 1.2
    },
    {
      "label": "8",
      "R": 19.072,
      "sd": 12.63,
      "medium": 5,
      "d": 4.78
    },
    {
      "label": "9",
      "R": 56.616,
      "sd": 12.63,
      "d": 2.77
    },
    {
      "label": "10",
      "R": -53.066,
      "sd": 11.99,
      "medium": 6,
      "d": 1.0
    },
    {
      "label": "11",
      "R": 203.804,
      "sd": 11.99
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 0.6
    },
    {
      "label": "12",
      "R": 40.67,
      "sd": 12.88,
      "medium": 7,
      "d": 4.52
    },
    {
      "label": "13",
      "R": -101.825,
      "sd": 12.88,
      "d": 0.1
    },
    {
      "label": "14",
      "R": 24.587,
      "sd": 12.8,
      "medium": 8,
      "d": 5.64
    },
    {
      "label": "15",
      "R": -207.47,
      "sd": 12.8,
      "medium": 9,
      "d": 1.1
    },
    {
      "label": "16",
      "R": 47.627,
      "sd": 12.8,
      "d": 1.34
    },
    {
      "label": "17",
      "R": 53.671,
      "sd": 11.8,
      "medium": 10,
      "d": 2.0
    },
    {
      "label": "18A",
      "R": 62.57,
      "sd": 11.8,
      "d": 20.5,
      "asphere": {
        "K": 0.0,
        "A4": 7.089e-06,
        "A6": -1.8612e-09,
        "A8": 1.423e-11,
        "A10": 0.0
      }
    },
    {
      "label": "19",
      "R": 45.515,
      "sd": 9.2,
      "medium": 11,
      "d": 3.34
    },
    {
      "label": "20",
      "R": -45.515,
      "sd": 9.2,
      "d": 4.19
    },
    {
      "label": "21",
      "R": -24.623,
      "sd": 9.1,
      "medium": 12,
      "d": 1.1
    },
    {
      "label": "22",
      "R": 198.202,
      "sd": 9.1
    }
  ],
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 77.25,
        "nominalFNumber": 4.6,
        "published": true
      },
      {
        "focalLengthMm": 80.22966067,
        "nominalFNumber": 4.625,
        "published": false
      },
      {
        "focalLengthMm": 83.269994927,
        "nominalFNumber": 4.65,
        "published": false
      },
      {
        "focalLengthMm": 86.365108352,
        "nominalFNumber": 4.675,
        "published": false
      },
      {
        "focalLengthMm": 89.515000944,
        "nominalFNumber": 4.7,
        "published": false
      },
      {
        "focalLengthMm": 92.719672704,
        "nominalFNumber": 4.725,
        "published": false
      },
      {
        "focalLengthMm": 95.979123632,
        "nominalFNumber": 4.75,
        "published": false
      },
      {
        "focalLengthMm": 99.293353727,
        "nominalFNumber": 4.775,
        "published": false
      },
      {
        "focalLengthMm": 102.66236299,
        "nominalFNumber": 4.8,
        "published": false
      },
      {
        "focalLengthMm": 106.086151421,
        "nominalFNumber": 4.825,
        "published": false
      },
      {
        "focalLengthMm": 109.56471902,
        "nominalFNumber": 4.85,
        "published": false
      },
      {
        "focalLengthMm": 113.098065787,
        "nominalFNumber": 4.875,
        "published": false
      },
      {
        "focalLengthMm": 116.686191721,
        "nominalFNumber": 4.9,
        "published": false
      },
      {
        "focalLengthMm": 120.329096823,
        "nominalFNumber": 4.925,
        "published": false
      },
      {
        "focalLengthMm": 124.026781093,
        "nominalFNumber": 4.95,
        "published": false
      },
      {
        "focalLengthMm": 127.77924453,
        "nominalFNumber": 4.975,
        "published": false
      },
      {
        "focalLengthMm": 131.586487136,
        "nominalFNumber": 5.0,
        "published": false
      },
      {
        "focalLengthMm": 135.448508909,
        "nominalFNumber": 5.025,
        "published": false
      },
      {
        "focalLengthMm": 139.365309849,
        "nominalFNumber": 5.05,
        "published": false
      },
      {
        "focalLengthMm": 143.336889958,
        "nominalFNumber": 5.075,
        "published": false
      },
      {
        "focalLengthMm": 147.363249234,
        "nominalFNumber": 5.1,
        "published": false
      },
      {
        "focalLengthMm": 151.444387678,
        "nominalFNumber": 5.125,
        "published": false
      },
      {
        "focalLengthMm": 155.58030529,
        "nominalFNumber": 5.15,
        "published": false
      },
      {
        "focalLengthMm": 159.771002069,
        "nominalFNumber": 5.175,
        "published": false
      },
      {
        "focalLengthMm": 164.016478017,
        "nominalFNumber": 5.2,
        "published": false
      },
      {
        "focalLengthMm": 168.316733132,
        "nominalFNumber": 5.225,
        "published": false
      },
      {
        "focalLengthMm": 172.671767414,
        "nominalFNumber": 5.25,
        "published": false
      },
      {
        "focalLengthMm": 177.081580865,
        "nominalFNumber": 5.275,
        "published": false
      },
      {
        "focalLengthMm": 181.546173483,
        "nominalFNumber": 5.3,
        "published": false
      },
      {
        "focalLengthMm": 186.065545269,
        "nominalFNumber": 5.325,
        "published": false
      },
      {
        "focalLengthMm": 190.639696223,
        "nominalFNumber": 5.35,
        "published": false
      },
      {
        "focalLengthMm": 195.268626344,
        "nominalFNumber": 5.375,
        "published": false
      },
      {
        "focalLengthMm": 200.01,
        "nominalFNumber": 5.4,
        "published": true
      },
      {
        "focalLengthMm": 202.359822648,
        "nominalFNumber": 5.425,
        "published": false
      },
      {
        "focalLengthMm": 204.793404575,
        "nominalFNumber": 5.45,
        "published": false
      },
      {
        "focalLengthMm": 207.253081412,
        "nominalFNumber": 5.475,
        "published": false
      },
      {
        "focalLengthMm": 209.738853161,
        "nominalFNumber": 5.5,
        "published": false
      },
      {
        "focalLengthMm": 212.250719821,
        "nominalFNumber": 5.525,
        "published": false
      },
      {
        "focalLengthMm": 214.788681393,
        "nominalFNumber": 5.55,
        "published": false
      },
      {
        "focalLengthMm": 217.352737876,
        "nominalFNumber": 5.575,
        "published": false
      },
      {
        "focalLengthMm": 219.94288927,
        "nominalFNumber": 5.6,
        "published": false
      },
      {
        "focalLengthMm": 222.559135576,
        "nominalFNumber": 5.625,
        "published": false
      },
      {
        "focalLengthMm": 225.201476793,
        "nominalFNumber": 5.65,
        "published": false
      },
      {
        "focalLengthMm": 227.869912922,
        "nominalFNumber": 5.675,
        "published": false
      },
      {
        "focalLengthMm": 230.564443961,
        "nominalFNumber": 5.7,
        "published": false
      },
      {
        "focalLengthMm": 233.285069913,
        "nominalFNumber": 5.725,
        "published": false
      },
      {
        "focalLengthMm": 236.031790775,
        "nominalFNumber": 5.75,
        "published": false
      },
      {
        "focalLengthMm": 238.804606549,
        "nominalFNumber": 5.775,
        "published": false
      },
      {
        "focalLengthMm": 241.603517234,
        "nominalFNumber": 5.8,
        "published": false
      },
      {
        "focalLengthMm": 244.428522831,
        "nominalFNumber": 5.825,
        "published": false
      },
      {
        "focalLengthMm": 247.279623338,
        "nominalFNumber": 5.85,
        "published": false
      },
      {
        "focalLengthMm": 250.156818758,
        "nominalFNumber": 5.875,
        "published": false
      },
      {
        "focalLengthMm": 253.060109088,
        "nominalFNumber": 5.9,
        "published": false
      },
      {
        "focalLengthMm": 255.98949433,
        "nominalFNumber": 5.925,
        "published": false
      },
      {
        "focalLengthMm": 258.944974483,
        "nominalFNumber": 5.95,
        "published": false
      },
      {
        "focalLengthMm": 261.926549548,
        "nominalFNumber": 5.975,
        "published": false
      },
      {
        "focalLengthMm": 264.934219524,
        "nominalFNumber": 6.0,
        "published": false
      },
      {
        "focalLengthMm": 267.967984412,
        "nominalFNumber": 6.025,
        "published": false
      },
      {
        "focalLengthMm": 271.02784421,
        "nominalFNumber": 6.05,
        "published": false
      },
      {
        "focalLengthMm": 274.11379892,
        "nominalFNumber": 6.075,
        "published": false
      },
      {
        "focalLengthMm": 277.225848542,
        "nominalFNumber": 6.1,
        "published": false
      },
      {
        "focalLengthMm": 280.363993074,
        "nominalFNumber": 6.125,
        "published": false
      },
      {
        "focalLengthMm": 283.528232519,
        "nominalFNumber": 6.15,
        "published": false
      },
      {
        "focalLengthMm": 286.718566874,
        "nominalFNumber": 6.175,
        "published": false
      },
      {
        "focalLengthMm": 289.96,
        "nominalFNumber": 6.2,
        "published": true
      }
    ]
  },
  "focus": {
    "closeFocusM": 1.3,
    "keyframes": [
      0,
      1
    ],
    "description": "Infinity prescription only; the patent prints no focus spacings. ¶0057 focuses by moving the first group (G1) toward the object. The production lens focuses to 1.3 m, which is not modeled."
  },
  "gaps": {
    "6": {
      "label": "D6",
      "values": [
        [
          2.09,
          2.09
        ],
        [
          4.325682664951,
          4.325682664951
        ],
        [
          6.447654414774,
          6.447654414774
        ],
        [
          8.463886501351,
          8.463886501351
        ],
        [
          10.381645709022,
          10.381645709022
        ],
        [
          12.207569002703,
          12.207569002703
        ],
        [
          13.947728996766,
          13.947728996766
        ],
        [
          15.607691524463,
          15.607691524463
        ],
        [
          17.192566389025,
          17.192566389025
        ],
        [
          18.707052212395,
          18.707052212395
        ],
        [
          20.155476160656,
          20.155476160656
        ],
        [
          21.541829210277,
          21.541829210277
        ],
        [
          22.86979752345,
          22.86979752345
        ],
        [
          24.142790419909,
          24.142790419909
        ],
        [
          25.363965364519,
          25.363965364519
        ],
        [
          26.536250332292,
          26.536250332292
        ],
        [
          27.662363863515,
          27.662363863515
        ],
        [
          28.744833080103,
          28.744833080103
        ],
        [
          29.786009898706,
          29.786009898706
        ],
        [
          30.78808564571,
          30.78808564571
        ],
        [
          31.753104253314,
          31.753104253314
        ],
        [
          32.68297419318,
          32.68297419318
        ],
        [
          33.579479285125,
          33.579479285125
        ],
        [
          34.444288501467,
          34.444288501467
        ],
        [
          35.278964873102,
          35.278964873102
        ],
        [
          36.084973591092,
          36.084973591092
        ],
        [
          36.86368938632,
          36.86368938632
        ],
        [
          37.616403260549,
          37.616403260549
        ],
        [
          38.344328633703,
          38.344328633703
        ],
        [
          39.048606965044,
          39.048606965044
        ],
        [
          39.730312899464,
          39.730312899464
        ],
        [
          40.390458984697,
          40.390458984697
        ],
        [
          41.03,
          41.03
        ],
        [
          41.234892140413,
          41.234892140413
        ],
        [
          41.439549801305,
          41.439549801305
        ],
        [
          41.643903938144,
          41.643903938144
        ],
        [
          41.847888954604,
          41.847888954604
        ],
        [
          42.051442583452,
          42.051442583452
        ],
        [
          42.254505769541,
          42.254505769541
        ],
        [
          42.457022555114,
          42.457022555114
        ],
        [
          42.658939967464,
          42.658939967464
        ],
        [
          42.860207909137,
          42.860207909137
        ],
        [
          43.060779050582,
          43.060779050582
        ],
        [
          43.260608725508,
          43.260608725508
        ],
        [
          43.459654828795,
          43.459654828795
        ],
        [
          43.657877717097,
          43.657877717097
        ],
        [
          43.855240112208,
          43.855240112208
        ],
        [
          44.051707007002,
          44.051707007002
        ],
        [
          44.247245574207,
          44.247245574207
        ],
        [
          44.441825077778,
          44.441825077778
        ],
        [
          44.63541678698,
          44.63541678698
        ],
        [
          44.827993893141,
          44.827993893141
        ],
        [
          45.019531429012,
          45.019531429012
        ],
        [
          45.210006190753,
          45.210006190753
        ],
        [
          45.399396662426,
          45.399396662426
        ],
        [
          45.58768294307,
          45.58768294307
        ],
        [
          45.774846676229,
          45.774846676229
        ],
        [
          45.960870981874,
          45.960870981874
        ],
        [
          46.145740390749,
          46.145740390749
        ],
        [
          46.329440781041,
          46.329440781041
        ],
        [
          46.511959317287,
          46.511959317287
        ],
        [
          46.693284391551,
          46.693284391551
        ],
        [
          46.873405566705,
          46.873405566705
        ],
        [
          47.052313521895,
          47.052313521895
        ],
        [
          47.23,
          47.23
        ]
      ]
    },
    "11": {
      "label": "D11",
      "values": [
        [
          29.05,
          29.05
        ],
        [
          28.4728125,
          28.4728125
        ],
        [
          27.895625,
          27.895625
        ],
        [
          27.3184375,
          27.3184375
        ],
        [
          26.74125,
          26.74125
        ],
        [
          26.1640625,
          26.1640625
        ],
        [
          25.586875,
          25.586875
        ],
        [
          25.0096875,
          25.0096875
        ],
        [
          24.4325,
          24.4325
        ],
        [
          23.8553125,
          23.8553125
        ],
        [
          23.278125,
          23.278125
        ],
        [
          22.7009375,
          22.7009375
        ],
        [
          22.12375,
          22.12375
        ],
        [
          21.5465625,
          21.5465625
        ],
        [
          20.969375,
          20.969375
        ],
        [
          20.3921875,
          20.3921875
        ],
        [
          19.815,
          19.815
        ],
        [
          19.2378125,
          19.2378125
        ],
        [
          18.660625,
          18.660625
        ],
        [
          18.0834375,
          18.0834375
        ],
        [
          17.50625,
          17.50625
        ],
        [
          16.9290625,
          16.9290625
        ],
        [
          16.351875,
          16.351875
        ],
        [
          15.7746875,
          15.7746875
        ],
        [
          15.1975,
          15.1975
        ],
        [
          14.6203125,
          14.6203125
        ],
        [
          14.043125,
          14.043125
        ],
        [
          13.4659375,
          13.4659375
        ],
        [
          12.88875,
          12.88875
        ],
        [
          12.3115625,
          12.3115625
        ],
        [
          11.734375,
          11.734375
        ],
        [
          11.1571875,
          11.1571875
        ],
        [
          10.58,
          10.58
        ],
        [
          10.30875,
          10.30875
        ],
        [
          10.0375,
          10.0375
        ],
        [
          9.76625,
          9.76625
        ],
        [
          9.495,
          9.495
        ],
        [
          9.22375,
          9.22375
        ],
        [
          8.9525,
          8.9525
        ],
        [
          8.68125,
          8.68125
        ],
        [
          8.41,
          8.41
        ],
        [
          8.13875,
          8.13875
        ],
        [
          7.8675,
          7.8675
        ],
        [
          7.59625,
          7.59625
        ],
        [
          7.325,
          7.325
        ],
        [
          7.05375,
          7.05375
        ],
        [
          6.7825,
          6.7825
        ],
        [
          6.51125,
          6.51125
        ],
        [
          6.24,
          6.24
        ],
        [
          5.96875,
          5.96875
        ],
        [
          5.6975,
          5.6975
        ],
        [
          5.42625,
          5.42625
        ],
        [
          5.155,
          5.155
        ],
        [
          4.88375,
          4.88375
        ],
        [
          4.6125,
          4.6125
        ],
        [
          4.34125,
          4.34125
        ],
        [
          4.07,
          4.07
        ],
        [
          3.79875,
          3.79875
        ],
        [
          3.5275,
          3.5275
        ],
        [
          3.25625,
          3.25625
        ],
        [
          2.985,
          2.985
        ],
        [
          2.71375,
          2.71375
        ],
        [
          2.4425,
          2.4425
        ],
        [
          2.17125,
          2.17125
        ],
        [
          1.9,
          1.9
        ]
      ]
    },
    "22": {
      "label": "BF",
      "values": [
        [
          58.97,
          58.97
        ],
        [
          59.414375,
          59.414375
        ],
        [
          59.85875,
          59.85875
        ],
        [
          60.303125,
          60.303125
        ],
        [
          60.7475,
          60.7475
        ],
        [
          61.191875,
          61.191875
        ],
        [
          61.63625,
          61.63625
        ],
        [
          62.080625,
          62.080625
        ],
        [
          62.525,
          62.525
        ],
        [
          62.969375,
          62.969375
        ],
        [
          63.41375,
          63.41375
        ],
        [
          63.858125,
          63.858125
        ],
        [
          64.3025,
          64.3025
        ],
        [
          64.746875,
          64.746875
        ],
        [
          65.19125,
          65.19125
        ],
        [
          65.635625,
          65.635625
        ],
        [
          66.08,
          66.08
        ],
        [
          66.524375,
          66.524375
        ],
        [
          66.96875,
          66.96875
        ],
        [
          67.413125,
          67.413125
        ],
        [
          67.8575,
          67.8575
        ],
        [
          68.301875,
          68.301875
        ],
        [
          68.74625,
          68.74625
        ],
        [
          69.190625,
          69.190625
        ],
        [
          69.635,
          69.635
        ],
        [
          70.079375,
          70.079375
        ],
        [
          70.52375,
          70.52375
        ],
        [
          70.968125,
          70.968125
        ],
        [
          71.4125,
          71.4125
        ],
        [
          71.856875,
          71.856875
        ],
        [
          72.30125,
          72.30125
        ],
        [
          72.745625,
          72.745625
        ],
        [
          73.19,
          73.19
        ],
        [
          73.6390625,
          73.6390625
        ],
        [
          74.088125,
          74.088125
        ],
        [
          74.5371875,
          74.5371875
        ],
        [
          74.98625,
          74.98625
        ],
        [
          75.4353125,
          75.4353125
        ],
        [
          75.884375,
          75.884375
        ],
        [
          76.3334375,
          76.3334375
        ],
        [
          76.7825,
          76.7825
        ],
        [
          77.2315625,
          77.2315625
        ],
        [
          77.680625,
          77.680625
        ],
        [
          78.1296875,
          78.1296875
        ],
        [
          78.57875,
          78.57875
        ],
        [
          79.0278125,
          79.0278125
        ],
        [
          79.476875,
          79.476875
        ],
        [
          79.9259375,
          79.9259375
        ],
        [
          80.375,
          80.375
        ],
        [
          80.8240625,
          80.8240625
        ],
        [
          81.273125,
          81.273125
        ],
        [
          81.7221875,
          81.7221875
        ],
        [
          82.17125,
          82.17125
        ],
        [
          82.6203125,
          82.6203125
        ],
        [
          83.069375,
          83.069375
        ],
        [
          83.5184375,
          83.5184375
        ],
        [
          83.9675,
          83.9675
        ],
        [
          84.4165625,
          84.4165625
        ],
        [
          84.865625,
          84.865625
        ],
        [
          85.3146875,
          85.3146875
        ],
        [
          85.76375,
          85.76375
        ],
        [
          86.2128125,
          86.2128125
        ],
        [
          86.661875,
          86.661875
        ],
        [
          87.1109375,
          87.1109375
        ],
        [
          87.56,
          87.56
        ]
      ]
    }
  },
  "aperture": {
    "fStops": [
      4.6,
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
      "text": "G1 (+)",
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
      "toSurface": "22"
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
    "gapSagFrac": 0.96
  }
} satisfies LensDataV2Input;

export default LENS_DATA;
