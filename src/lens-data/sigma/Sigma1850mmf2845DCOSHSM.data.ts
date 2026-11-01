import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JP 2010-211056 A, Example 1 (Table 1, Figure 1), filed 2009-03-11. JP 2010-211102 A, filed 2009-03-12 by the same
 * inventor, prints the same Example 1 and names element L3a (surfaces 11-12, element L6 here) as the stabilizing
 * element, shifted +/-0.5 mm across the axis. Probable production correlation with the SIGMA 18-50mm f/2.8-4.5 DC OS
 * HSM, not a confirmed factory prescription.
 *
 * Printed: R, d, nd, vd; the aspheres on surfaces 3, 12 and 30 (patent k is K here; A, B, C, D are A4, A6, A8, A10);
 * d5, d10, d18, d24 and d32 at f = 18.60, 27.99 and 48.32 mm, the three published zoom stations. Surface 12 prints no
 * C or D, as in all six examples of the patent; those terms are unused and are zero here.
 * Derived: the gap from flare-cut plane S33 to the image. The patent labels it Fb and prints no value. It is the
 * computed back focus, 38.529, 38.531 and 38.536 mm at the three stations, which agree within 6.4 micrometres as a
 * plane fixed to the image should. No total length is printed.
 * Inferred: the zoom stations between the printed ones (a numerical path, not a published cam) and every semi-diameter.
 * The patent prints infinity focus only, so the focus pairs repeat. The stabilizing shift is not modeled.
 * S20/S21 sd 6.05 mm passes the stated axial beam at every station. S21 and S22 then come within 0.07 mm at the rim
 * without crossing; checks.gapSagFrac 0.95 is the smallest two-decimal value that admits it.
 * The stop radius comes from the design f-number at each station under the stop rule (paraxial EPD = F/N): 6.43, 6.41
 * and 6.40 mm at the printed stations. It is not a measured diaphragm. S29 is a plane glass surface, not a stop.
 * Glass: nd and vd stay as printed; catalog equivalents supply the spectral curves. L6 (moulded) and the two resin
 * layers stay Unmatched. Surface labels follow the patent's numbering.
 */

const LENS_DATA = {
  "schema": 2,
  "key": "sigma-18-50mm-f28-45-dc-os-hsm",
  "maker": "Sigma",
  "name": "SIGMA 18-50mm f/2.8-4.5 DC OS HSM",
  "subtitle": "JP 2010-211056 A, Example 1 — probable production correlation",
  "catalog": {
    "lensMounts": [
      "sigma-sa",
      "canon-ef",
      "nikon-f",
      "pentax-k",
      "sony-a"
    ],
    "imageFormat": "aps-c",
    "imageCircleMm": 28.4,
    "specs": [
      "16 ELEMENTS / 12 GROUPS",
      "DESIGN f = 18.60–48.32 mm",
      "DESIGN F/2.92–4.49",
      "3 ASPHERICAL SURFACES / 3 ELEMENTS",
      "INNER ZOOM / INNER FOCUS"
    ],
    "elementCount": 16,
    "groupCount": 12,
    "focalLengthMm": {
      "marketing": [
        18,
        50
      ],
      "design": [
        18.6,
        48.32
      ]
    },
    "fNumber": {
      "marketing": 2.8,
      "design": 2.92
    }
  },
  "source": {
    "patentNumber": "JP 2010-211056 A",
    example: {"label": "Example 1", "id": "1"},
    "patentYear": 2010,
    "authors": [
      "Kenta Fujita"
    ],
    "assignees": [
      "Sigma Corporation"
    ]
  },
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.7725,
      "vd": 49.6243,
      "indexReference": "d",
      "focalLengthMm": -63.45254623085152,
      "glass": "N-LAF34 (SCHOTT catalog equivalent; production supplier unspecified)",
      "role": "Front negative meniscus of fixed G1; its rear face carries the thin resin layer."
    },
    {
      "id": 2,
      "name": "R1",
      "label": "Element 1 resin layer",
      "type": "Negative Meniscus",
      "nd": 1.5184,
      "vd": 52.0743,
      "indexReference": "d",
      "focalLengthMm": -516.7821979029443,
      "glass": "Unmatched (hybrid optical resin; spectrum unpublished)",
      "role": "Thin resin layer bonded to Element 1; its air-side surface 3A is the front asphere, for wide-angle distortion."
    },
    {
      "id": 3,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.8466,
      "vd": 23.7848,
      "indexReference": "d",
      "focalLengthMm": 129.20134464842747,
      "glass": "H-ZF52 (CDGM catalog equivalent; production supplier unspecified)",
      "role": "Biconvex positive closing fixed G1; the negative-positive order helps distortion without enlarging the front element."
    },
    {
      "id": 4,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconcave Negative",
      "nd": 1.7725,
      "vd": 49.6243,
      "indexReference": "d",
      "focalLengthMm": -97.8500313733255,
      "glass": "N-LAF34 (SCHOTT catalog equivalent; production supplier unspecified)",
      "role": "Biconcave first element of G2, the negative group that moves for focus."
    },
    {
      "id": 5,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.7292,
      "vd": 54.6735,
      "indexReference": "d",
      "focalLengthMm": -36.35071980045285,
      "glass": "TAC8 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Biconcave crown of the G2 cemented doublet, carrying most of that group's negative power."
    },
    {
      "id": 6,
      "name": "L5",
      "label": "Element 5",
      "type": "Positive Meniscus",
      "nd": 1.8466,
      "vd": 23.7848,
      "indexReference": "d",
      "focalLengthMm": 69.64411743426885,
      "glass": "H-ZF52 (CDGM catalog equivalent; production supplier unspecified)",
      "role": "High-dispersion positive meniscus cemented to Element 4, the colour partner in G2."
    },
    {
      "id": 7,
      "name": "L6",
      "label": "Element 6",
      "type": "Positive Meniscus",
      "nd": 1.5876,
      "vd": 61.0842,
      "indexReference": "d",
      "focalLengthMm": 79.38040340300878,
      "glass": "Unmatched (moulded glass; patent class 588611)",
      "role": "Aspheric first element of G3 (rear surface 12A); JP 2010-211102 A shifts it across the axis as the stabilizing element."
    },
    {
      "id": 8,
      "name": "L7",
      "label": "Element 7",
      "type": "Negative Meniscus",
      "nd": 1.8466,
      "vd": 23.7848,
      "indexReference": "d",
      "focalLengthMm": -40.464485034138164,
      "glass": "H-ZF52 (CDGM catalog equivalent; production supplier unspecified)",
      "role": "Negative high-dispersion meniscus leading the G3 cemented doublet."
    },
    {
      "id": 9,
      "name": "L8",
      "label": "Element 8",
      "type": "Positive Meniscus",
      "nd": 1.7725,
      "vd": 49.6243,
      "indexReference": "d",
      "focalLengthMm": 25.915080937172952,
      "glass": "N-LAF34 (SCHOTT catalog equivalent; production supplier unspecified)",
      "role": "Strong high-index positive cemented to Element 7; the main power of G3."
    },
    {
      "id": 10,
      "name": "L9",
      "label": "Element 9",
      "type": "Positive Meniscus",
      "nd": 1.497,
      "vd": 81.6084,
      "indexReference": "d",
      "apd": "inferred",
      "apdNote": "HOYA FCD1 coordinate match (νd 81.6); Sigma's construction diagram marks this position SLD. The patent states no dispersion class.",
      "focalLengthMm": 49.780733564814454,
      "glass": "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Low-dispersion positive closing G3 just ahead of the stop; one of the two SLD positions."
    },
    {
      "id": 11,
      "name": "L10",
      "label": "Element 10",
      "type": "Biconcave Negative",
      "nd": 1.7725,
      "vd": 49.6243,
      "indexReference": "d",
      "focalLengthMm": -26.731760065147775,
      "glass": "N-LAF34 (SCHOTT catalog equivalent; production supplier unspecified)",
      "role": "Biconcave first element of negative G4, just behind the stop."
    },
    {
      "id": 12,
      "name": "L11",
      "label": "Element 11",
      "type": "Biconcave Negative",
      "nd": 1.7725,
      "vd": 49.6243,
      "indexReference": "d",
      "focalLengthMm": -15.771456082622795,
      "glass": "N-LAF34 (SCHOTT catalog equivalent; production supplier unspecified)",
      "role": "Strong biconcave negative of the G4 cemented doublet."
    },
    {
      "id": 13,
      "name": "L12",
      "label": "Element 12",
      "type": "Biconvex Positive",
      "nd": 1.8466,
      "vd": 23.7848,
      "indexReference": "d",
      "focalLengthMm": 23.544851474152374,
      "glass": "H-ZF52 (CDGM catalog equivalent; production supplier unspecified)",
      "role": "High-dispersion biconvex cemented to Element 11, the colour partner in G4."
    },
    {
      "id": 14,
      "name": "L13",
      "label": "Element 13",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.6084,
      "indexReference": "d",
      "apd": "inferred",
      "apdNote": "HOYA FCD1 coordinate match (νd 81.6); Sigma's construction diagram marks this position SLD. The patent states no dispersion class.",
      "focalLengthMm": 29.108386233269897,
      "glass": "FCD1 (HOYA catalog equivalent; production supplier unspecified)",
      "role": "Low-dispersion biconvex first element of G5; the second SLD position."
    },
    {
      "id": 15,
      "name": "L14",
      "label": "Element 14",
      "type": "Positive Meniscus",
      "nd": 1.7725,
      "vd": 49.6243,
      "indexReference": "d",
      "focalLengthMm": 69.3301865808726,
      "glass": "N-LAF34 (SCHOTT catalog equivalent; production supplier unspecified)",
      "role": "Positive meniscus leading the G5 cemented doublet."
    },
    {
      "id": 16,
      "name": "L15",
      "label": "Element 15",
      "type": "Plano-Concave Negative",
      "nd": 1.8466,
      "vd": 23.7848,
      "indexReference": "d",
      "focalLengthMm": -45.67682494684621,
      "glass": "H-ZF52 (CDGM catalog equivalent; production supplier unspecified)",
      "role": "High-dispersion negative cemented to Element 14, with a flat rear face; the colour partner in G5."
    },
    {
      "id": 17,
      "name": "R2",
      "label": "Element 16 resin layer",
      "type": "Positive Meniscus",
      "nd": 1.5184,
      "vd": 52.0743,
      "indexReference": "d",
      "focalLengthMm": 302.07356219467147,
      "glass": "Unmatched (hybrid optical resin; spectrum unpublished)",
      "role": "Thin resin layer bonded to the front of Element 16; its air-side surface 30A is the rear asphere, for coma and astigmatism."
    },
    {
      "id": 18,
      "name": "L16",
      "label": "Element 16",
      "type": "Positive Meniscus",
      "nd": 1.4875,
      "vd": 70.4412,
      "indexReference": "d",
      "focalLengthMm": 96.2595695147173,
      "glass": "H-QK3L (CDGM catalog equivalent; production supplier unspecified)",
      "role": "Last positive meniscus of G5, carrying the resin layer on its front face."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 89.7,
      "sd": 21.55111076893464,
      "medium": 1,
      "d": 1.6
    },
    {
      "label": "2",
      "R": 31.45,
      "sd": 21.55111076893464,
      "medium": 2,
      "d": 0.15
    },
    {
      "label": "3A",
      "R": 28.1,
      "sd": 21.55111076893464,
      "asphere": {
        "K": 0.0986,
        "A4": -0.0000049775,
        "A6": -9.5217e-9,
        "A8": 1.3566e-11,
        "A10": -2.459e-14
      },
      "d": 7.81
    },
    {
      "label": "4",
      "R": 218,
      "sd": 20.98057,
      "medium": 3,
      "d": 3.32
    },
    {
      "label": "5",
      "R": -218,
      "sd": 20.98057
    },
    {
      "label": "6",
      "R": -319.6,
      "sd": 16.29,
      "medium": 4,
      "d": 1
    },
    {
      "label": "7",
      "R": 99.14,
      "sd": 16.29,
      "d": 2.04
    },
    {
      "label": "8",
      "R": -110.75,
      "sd": 13.820638917635607,
      "medium": 5,
      "d": 1
    },
    {
      "label": "9",
      "R": 34.98,
      "sd": 13.820638917635607,
      "medium": 6,
      "d": 3.1
    },
    {
      "label": "10",
      "R": 82.51,
      "sd": 13.820638917635607
    },
    {
      "label": "11",
      "R": -433.69,
      "sd": 12.101,
      "medium": 7,
      "d": 2.38
    },
    {
      "label": "12A",
      "R": -42.2,
      "sd": 12.101,
      "asphere": {
        "K": -1.1922,
        "A4": -0.0000028679,
        "A6": -2.0403e-9,
        "A8": 0,
        "A10": 0
      },
      "d": 0.05
    },
    {
      "label": "13",
      "R": "flat",
      "sd": 12.099,
      "d": 0.45
    },
    {
      "label": "14",
      "R": 46.5,
      "sd": 11.373861884718746,
      "medium": 8,
      "d": 0.85
    },
    {
      "label": "15",
      "R": 19.56,
      "sd": 11.373861884718746,
      "medium": 9,
      "d": 3.6
    },
    {
      "label": "16",
      "R": 784,
      "sd": 11.373861884718746,
      "d": 0.15
    },
    {
      "label": "17",
      "R": 21,
      "sd": 11.483,
      "medium": 10,
      "d": 3.18
    },
    {
      "label": "18",
      "R": 131.9,
      "sd": 11.483
    },
    {
      "label": "STO",
      "R": "flat",
      "d": 2.3
    },
    {
      "label": "20",
      "R": -61.33,
      "sd": 6.05,
      "medium": 11,
      "d": 0.8
    },
    {
      "label": "21",
      "R": 31.31,
      "sd": 6.05,
      "d": 1.42
    },
    {
      "label": "22",
      "R": -24.54,
      "sd": 8.9,
      "medium": 12,
      "d": 0.8
    },
    {
      "label": "23",
      "R": 24.54,
      "sd": 8.9,
      "medium": 13,
      "d": 2.53
    },
    {
      "label": "24",
      "R": -101.16,
      "sd": 8.9
    },
    {
      "label": "25",
      "R": 32.7,
      "sd": 11.15785768563377,
      "medium": 14,
      "d": 4.69
    },
    {
      "label": "26",
      "R": -24.71,
      "sd": 11.15785768563377,
      "d": 0.15
    },
    {
      "label": "27",
      "R": -135.9,
      "sd": 13.094847574690169,
      "medium": 15,
      "d": 2.05
    },
    {
      "label": "28",
      "R": -38.67,
      "sd": 13.094847574690169,
      "medium": 16,
      "d": 0.85
    },
    {
      "label": "29",
      "R": "flat",
      "sd": 13.094847574690169,
      "d": 1.57
    },
    {
      "label": "30A",
      "R": -1000,
      "sd": 15.385,
      "asphere": {
        "K": 0,
        "A4": -0.000032971,
        "A6": -4.1422e-8,
        "A8": -2.3153e-10,
        "A10": 3.6395e-13
      },
      "medium": 17,
      "d": 0.15
    },
    {
      "label": "31",
      "R": -135.4,
      "sd": 15.385,
      "medium": 18,
      "d": 2.86
    },
    {
      "label": "32",
      "R": -35.09,
      "sd": 15.385
    },
    {
      "label": "33",
      "R": "flat",
      "sd": 15.385
    }
  ],
  "zoom": {
    "stations": [
      {
        "focalLengthMm": 18.6,
        "nominalFNumber": 2.92,
        "published": true,
        "label": "Wide"
      },
      {
        "focalLengthMm": 18.68385136256631,
        "nominalFNumber": 2.9248,
        "published": false
      },
      {
        "focalLengthMm": 18.7683737020397,
        "nominalFNumber": 2.9295999999999998,
        "published": false
      },
      {
        "focalLengthMm": 18.853074911197872,
        "nominalFNumber": 2.9343999999999997,
        "published": false
      },
      {
        "focalLengthMm": 18.937955062440608,
        "nominalFNumber": 2.9392,
        "published": false
      },
      {
        "focalLengthMm": 19.023014252160205,
        "nominalFNumber": 2.944,
        "published": false
      },
      {
        "focalLengthMm": 19.10825260002726,
        "nominalFNumber": 2.9488,
        "published": false
      },
      {
        "focalLengthMm": 19.193670248303054,
        "nominalFNumber": 2.9536,
        "published": false
      },
      {
        "focalLengthMm": 19.279267361178018,
        "nominalFNumber": 2.9584,
        "published": false
      },
      {
        "focalLengthMm": 19.36504412413455,
        "nominalFNumber": 2.9632,
        "published": false
      },
      {
        "focalLengthMm": 19.451000743333616,
        "nominalFNumber": 2.968,
        "published": false
      },
      {
        "focalLengthMm": 19.53713744502367,
        "nominalFNumber": 2.9728,
        "published": false
      },
      {
        "focalLengthMm": 19.62345447497126,
        "nominalFNumber": 2.9776,
        "published": false
      },
      {
        "focalLengthMm": 19.70995209791243,
        "nominalFNumber": 2.9824,
        "published": false
      },
      {
        "focalLengthMm": 19.796630597023686,
        "nominalFNumber": 2.9872,
        "published": false
      },
      {
        "focalLengthMm": 19.883490273412193,
        "nominalFNumber": 2.992,
        "published": false
      },
      {
        "focalLengthMm": 19.970531445623923,
        "nominalFNumber": 2.9968,
        "published": false
      },
      {
        "focalLengthMm": 20.057754449169533,
        "nominalFNumber": 3.0016,
        "published": false
      },
      {
        "focalLengthMm": 20.14515963606665,
        "nominalFNumber": 3.0064,
        "published": false
      },
      {
        "focalLengthMm": 20.232747374398443,
        "nominalFNumber": 3.0112,
        "published": false
      },
      {
        "focalLengthMm": 20.320518047887536,
        "nominalFNumber": 3.016,
        "published": false
      },
      {
        "focalLengthMm": 20.408472055484538,
        "nominalFNumber": 3.0208,
        "published": false
      },
      {
        "focalLengthMm": 20.49660981097107,
        "nominalFNumber": 3.0256,
        "published": false
      },
      {
        "focalLengthMm": 20.58493174257606,
        "nominalFNumber": 3.0304,
        "published": false
      },
      {
        "focalLengthMm": 20.67343829260536,
        "nominalFNumber": 3.0351999999999997,
        "published": false
      },
      {
        "focalLengthMm": 20.762129917083847,
        "nominalFNumber": 3.04,
        "published": false
      },
      {
        "focalLengthMm": 20.851007085409588,
        "nominalFNumber": 3.0448,
        "published": false
      },
      {
        "focalLengthMm": 20.94007028001962,
        "nominalFNumber": 3.0496,
        "published": false
      },
      {
        "focalLengthMm": 21.029319996066842,
        "nominalFNumber": 3.0544,
        "published": false
      },
      {
        "focalLengthMm": 21.118756741107703,
        "nominalFNumber": 3.0591999999999997,
        "published": false
      },
      {
        "focalLengthMm": 21.20838103480023,
        "nominalFNumber": 3.064,
        "published": false
      },
      {
        "focalLengthMm": 21.29819340861179,
        "nominalFNumber": 3.0687999999999995,
        "published": false
      },
      {
        "focalLengthMm": 21.38819440553654,
        "nominalFNumber": 3.0736,
        "published": false
      },
      {
        "focalLengthMm": 21.478384579822162,
        "nominalFNumber": 3.0784,
        "published": false
      },
      {
        "focalLengthMm": 21.568764496705175,
        "nominalFNumber": 3.0831999999999997,
        "published": false
      },
      {
        "focalLengthMm": 21.65933473215499,
        "nominalFNumber": 3.088,
        "published": false
      },
      {
        "focalLengthMm": 21.750095872626066,
        "nominalFNumber": 3.0928,
        "published": false
      },
      {
        "focalLengthMm": 21.84104851481784,
        "nominalFNumber": 3.0976,
        "published": false
      },
      {
        "focalLengthMm": 21.932193265442656,
        "nominalFNumber": 3.1024000000000003,
        "published": false
      },
      {
        "focalLengthMm": 22.023530741000474,
        "nominalFNumber": 3.1071999999999997,
        "published": false
      },
      {
        "focalLengthMm": 22.115061567561092,
        "nominalFNumber": 3.112,
        "published": false
      },
      {
        "focalLengthMm": 22.20678638055297,
        "nominalFNumber": 3.1168,
        "published": false
      },
      {
        "focalLengthMm": 22.298705824558596,
        "nominalFNumber": 3.1216,
        "published": false
      },
      {
        "focalLengthMm": 22.39082055311635,
        "nominalFNumber": 3.1264000000000003,
        "published": false
      },
      {
        "focalLengthMm": 22.48313122852813,
        "nominalFNumber": 3.1312,
        "published": false
      },
      {
        "focalLengthMm": 22.57563852167343,
        "nominalFNumber": 3.136,
        "published": false
      },
      {
        "focalLengthMm": 22.668343111828463,
        "nominalFNumber": 3.1408,
        "published": false
      },
      {
        "focalLengthMm": 22.761245686491158,
        "nominalFNumber": 3.1456,
        "published": false
      },
      {
        "focalLengthMm": 22.85434694121149,
        "nominalFNumber": 3.1504,
        "published": false
      },
      {
        "focalLengthMm": 22.947647579426505,
        "nominalFNumber": 3.1552,
        "published": false
      },
      {
        "focalLengthMm": 23.041148312300813,
        "nominalFNumber": 3.16,
        "published": false
      },
      {
        "focalLengthMm": 23.134849858571506,
        "nominalFNumber": 3.1647999999999996,
        "published": false
      },
      {
        "focalLengthMm": 23.22875294439752,
        "nominalFNumber": 3.1696,
        "published": false
      },
      {
        "focalLengthMm": 23.322858303214087,
        "nominalFNumber": 3.1744,
        "published": false
      },
      {
        "focalLengthMm": 23.4171666755908,
        "nominalFNumber": 3.1792,
        "published": false
      },
      {
        "focalLengthMm": 23.511678809094064,
        "nominalFNumber": 3.184,
        "published": false
      },
      {
        "focalLengthMm": 23.606395458153802,
        "nominalFNumber": 3.1887999999999996,
        "published": false
      },
      {
        "focalLengthMm": 23.701317383933574,
        "nominalFNumber": 3.1936,
        "published": false
      },
      {
        "focalLengthMm": 23.79644535420488,
        "nominalFNumber": 3.1984,
        "published": false
      },
      {
        "focalLengthMm": 23.89178014322482,
        "nominalFNumber": 3.2032,
        "published": false
      },
      {
        "focalLengthMm": 23.98732253161737,
        "nominalFNumber": 3.208,
        "published": false
      },
      {
        "focalLengthMm": 24.083073306257955,
        "nominalFNumber": 3.2127999999999997,
        "published": false
      },
      {
        "focalLengthMm": 24.17903326016143,
        "nominalFNumber": 3.2176,
        "published": false
      },
      {
        "focalLengthMm": 24.27520319237324,
        "nominalFNumber": 3.2224,
        "published": false
      },
      {
        "focalLengthMm": 24.371583907863435,
        "nominalFNumber": 3.2272,
        "published": false
      },
      {
        "focalLengthMm": 24.4681762174239,
        "nominalFNumber": 3.232,
        "published": false
      },
      {
        "focalLengthMm": 24.56498093756844,
        "nominalFNumber": 3.2368,
        "published": false
      },
      {
        "focalLengthMm": 24.66199889043531,
        "nominalFNumber": 3.2416,
        "published": false
      },
      {
        "focalLengthMm": 24.759230903693105,
        "nominalFNumber": 3.2464,
        "published": false
      },
      {
        "focalLengthMm": 24.856677810448677,
        "nominalFNumber": 3.2512,
        "published": false
      },
      {
        "focalLengthMm": 24.954340449157787,
        "nominalFNumber": 3.2560000000000002,
        "published": false
      },
      {
        "focalLengthMm": 25.05221966353822,
        "nominalFNumber": 3.2607999999999997,
        "published": false
      },
      {
        "focalLengthMm": 25.150316302485347,
        "nominalFNumber": 3.2656,
        "published": false
      },
      {
        "focalLengthMm": 25.24863121998982,
        "nominalFNumber": 3.2703999999999995,
        "published": false
      },
      {
        "focalLengthMm": 25.347165275057712,
        "nominalFNumber": 3.2752,
        "published": false
      },
      {
        "focalLengthMm": 25.445919331632513,
        "nominalFNumber": 3.28,
        "published": false
      },
      {
        "focalLengthMm": 25.544894258519694,
        "nominalFNumber": 3.2848,
        "published": false
      },
      {
        "focalLengthMm": 25.644090929312743,
        "nominalFNumber": 3.2896,
        "published": false
      },
      {
        "focalLengthMm": 25.74351022232168,
        "nominalFNumber": 3.2944,
        "published": false
      },
      {
        "focalLengthMm": 25.843153020503177,
        "nominalFNumber": 3.2992,
        "published": false
      },
      {
        "focalLengthMm": 25.943020211392586,
        "nominalFNumber": 3.3040000000000003,
        "published": false
      },
      {
        "focalLengthMm": 26.043112687038125,
        "nominalFNumber": 3.3087999999999997,
        "published": false
      },
      {
        "focalLengthMm": 26.14343134393572,
        "nominalFNumber": 3.3136,
        "published": false
      },
      {
        "focalLengthMm": 26.24397708296733,
        "nominalFNumber": 3.3183999999999996,
        "published": false
      },
      {
        "focalLengthMm": 26.34475080933916,
        "nominalFNumber": 3.3232,
        "published": false
      },
      {
        "focalLengthMm": 26.44575343252261,
        "nominalFNumber": 3.328,
        "published": false
      },
      {
        "focalLengthMm": 26.546985866196337,
        "nominalFNumber": 3.3327999999999998,
        "published": false
      },
      {
        "focalLengthMm": 26.648449028189393,
        "nominalFNumber": 3.3375999999999997,
        "published": false
      },
      {
        "focalLengthMm": 26.750143840427167,
        "nominalFNumber": 3.3424,
        "published": false
      },
      {
        "focalLengthMm": 26.852071228877197,
        "nominalFNumber": 3.3472,
        "published": false
      },
      {
        "focalLengthMm": 26.9542321234974,
        "nominalFNumber": 3.352,
        "published": false
      },
      {
        "focalLengthMm": 27.05662745818525,
        "nominalFNumber": 3.3568,
        "published": false
      },
      {
        "focalLengthMm": 27.159258170727924,
        "nominalFNumber": 3.3616,
        "published": false
      },
      {
        "focalLengthMm": 27.262125202754742,
        "nominalFNumber": 3.3663999999999996,
        "published": false
      },
      {
        "focalLengthMm": 27.36522949968981,
        "nominalFNumber": 3.3712,
        "published": false
      },
      {
        "focalLengthMm": 27.468572010706193,
        "nominalFNumber": 3.3760000000000003,
        "published": false
      },
      {
        "focalLengthMm": 27.572153688681652,
        "nominalFNumber": 3.3808,
        "published": false
      },
      {
        "focalLengthMm": 27.675975490154432,
        "nominalFNumber": 3.3856,
        "published": false
      },
      {
        "focalLengthMm": 27.780038375281812,
        "nominalFNumber": 3.3904,
        "published": false
      },
      {
        "focalLengthMm": 27.8843433077981,
        "nominalFNumber": 3.3952,
        "published": false
      },
      {
        "focalLengthMm": 27.99,
        "nominalFNumber": 3.4,
        "published": true
      },
      {
        "focalLengthMm": 28.157731763878143,
        "nominalFNumber": 3.4109000000000003,
        "published": false
      },
      {
        "focalLengthMm": 28.327146440709328,
        "nominalFNumber": 3.4217999999999997,
        "published": false
      },
      {
        "focalLengthMm": 28.497138533543684,
        "nominalFNumber": 3.4327,
        "published": false
      },
      {
        "focalLengthMm": 28.667711317447964,
        "nominalFNumber": 3.4436,
        "published": false
      },
      {
        "focalLengthMm": 28.8388680940053,
        "nominalFNumber": 3.4545000000000003,
        "published": false
      },
      {
        "focalLengthMm": 29.010612190858712,
        "nominalFNumber": 3.4654,
        "published": false
      },
      {
        "focalLengthMm": 29.182946961274915,
        "nominalFNumber": 3.4763,
        "published": false
      },
      {
        "focalLengthMm": 29.355875783724738,
        "nominalFNumber": 3.4872,
        "published": false
      },
      {
        "focalLengthMm": 29.52940206148178,
        "nominalFNumber": 3.4981000000000004,
        "published": false
      },
      {
        "focalLengthMm": 29.703529222236124,
        "nominalFNumber": 3.509,
        "published": false
      },
      {
        "focalLengthMm": 29.878260717725965,
        "nominalFNumber": 3.5199000000000003,
        "published": false
      },
      {
        "focalLengthMm": 30.053600023382323,
        "nominalFNumber": 3.5308,
        "published": false
      },
      {
        "focalLengthMm": 30.229550637989597,
        "nominalFNumber": 3.5416999999999996,
        "published": false
      },
      {
        "focalLengthMm": 30.406116083358597,
        "nominalFNumber": 3.5526,
        "published": false
      },
      {
        "focalLengthMm": 30.58329990401482,
        "nominalFNumber": 3.5635,
        "published": false
      },
      {
        "focalLengthMm": 30.76110566689771,
        "nominalFNumber": 3.5744,
        "published": false
      },
      {
        "focalLengthMm": 30.939536961073387,
        "nominalFNumber": 3.5852999999999997,
        "published": false
      },
      {
        "focalLengthMm": 31.118597397457606,
        "nominalFNumber": 3.5962,
        "published": false
      },
      {
        "focalLengthMm": 31.29829060855235,
        "nominalFNumber": 3.6071,
        "published": false
      },
      {
        "focalLengthMm": 31.478620248190886,
        "nominalFNumber": 3.618,
        "published": false
      },
      {
        "focalLengthMm": 31.659589991294755,
        "nominalFNumber": 3.6289,
        "published": false
      },
      {
        "focalLengthMm": 31.84120353364007,
        "nominalFNumber": 3.6398,
        "published": false
      },
      {
        "focalLengthMm": 32.023464591633086,
        "nominalFNumber": 3.6506999999999996,
        "published": false
      },
      {
        "focalLengthMm": 32.206376902096515,
        "nominalFNumber": 3.6616,
        "published": false
      },
      {
        "focalLengthMm": 32.38994422206274,
        "nominalFNumber": 3.6725,
        "published": false
      },
      {
        "focalLengthMm": 32.57417032857708,
        "nominalFNumber": 3.6834,
        "published": false
      },
      {
        "focalLengthMm": 32.75905901850866,
        "nominalFNumber": 3.6943,
        "published": false
      },
      {
        "focalLengthMm": 32.94461410836843,
        "nominalFNumber": 3.7052,
        "published": false
      },
      {
        "focalLengthMm": 33.13083943413678,
        "nominalFNumber": 3.7161,
        "published": false
      },
      {
        "focalLengthMm": 33.31773885109649,
        "nominalFNumber": 3.7270000000000003,
        "published": false
      },
      {
        "focalLengthMm": 33.50531623367351,
        "nominalFNumber": 3.7379,
        "published": false
      },
      {
        "focalLengthMm": 33.693575475285314,
        "nominalFNumber": 3.7488,
        "published": false
      },
      {
        "focalLengthMm": 33.88252048819337,
        "nominalFNumber": 3.7597,
        "published": false
      },
      {
        "focalLengthMm": 34.07215520336544,
        "nominalFNumber": 3.7706,
        "published": false
      },
      {
        "focalLengthMm": 34.26248357034107,
        "nominalFNumber": 3.7815000000000003,
        "published": false
      },
      {
        "focalLengthMm": 34.45350955710381,
        "nominalFNumber": 3.7924,
        "published": false
      },
      {
        "focalLengthMm": 34.64523714995984,
        "nominalFNumber": 3.8033,
        "published": false
      },
      {
        "focalLengthMm": 34.83767035342098,
        "nominalFNumber": 3.8141999999999996,
        "published": false
      },
      {
        "focalLengthMm": 35.03081319009381,
        "nominalFNumber": 3.8251,
        "published": false
      },
      {
        "focalLengthMm": 35.224669700572626,
        "nominalFNumber": 3.8359999999999994,
        "published": false
      },
      {
        "focalLengthMm": 35.419243943339495,
        "nominalFNumber": 3.8468999999999998,
        "published": false
      },
      {
        "focalLengthMm": 35.61453999466668,
        "nominalFNumber": 3.8578,
        "published": false
      },
      {
        "focalLengthMm": 35.81056194852514,
        "nominalFNumber": 3.8687,
        "published": false
      },
      {
        "focalLengthMm": 36.00731391649677,
        "nominalFNumber": 3.8796,
        "published": false
      },
      {
        "focalLengthMm": 36.20480002769148,
        "nominalFNumber": 3.8905,
        "published": false
      },
      {
        "focalLengthMm": 36.403024428667926,
        "nominalFNumber": 3.9013999999999998,
        "published": false
      },
      {
        "focalLengthMm": 36.60199128335761,
        "nominalFNumber": 3.9123,
        "published": false
      },
      {
        "focalLengthMm": 36.80170477299535,
        "nominalFNumber": 3.9232000000000005,
        "published": false
      },
      {
        "focalLengthMm": 37.00216909605027,
        "nominalFNumber": 3.9341,
        "published": false
      },
      {
        "focalLengthMm": 37.203388468162544,
        "nominalFNumber": 3.9450000000000003,
        "published": false
      },
      {
        "focalLengthMm": 37.405367122082815,
        "nominalFNumber": 3.9559,
        "published": false
      },
      {
        "focalLengthMm": 37.60810930761553,
        "nominalFNumber": 3.9668,
        "published": false
      },
      {
        "focalLengthMm": 37.81161929156488,
        "nominalFNumber": 3.9777,
        "published": false
      },
      {
        "focalLengthMm": 38.01590135768452,
        "nominalFNumber": 3.9886,
        "published": false
      },
      {
        "focalLengthMm": 38.220959806630354,
        "nominalFNumber": 3.9995000000000003,
        "published": false
      },
      {
        "focalLengthMm": 38.42679895591509,
        "nominalFNumber": 4.0104,
        "published": false
      },
      {
        "focalLengthMm": 38.633423139868285,
        "nominalFNumber": 4.0213,
        "published": false
      },
      {
        "focalLengthMm": 38.84083670959652,
        "nominalFNumber": 4.0322000000000005,
        "published": false
      },
      {
        "focalLengthMm": 39.04904403294798,
        "nominalFNumber": 4.043100000000001,
        "published": false
      },
      {
        "focalLengthMm": 39.25804949447882,
        "nominalFNumber": 4.054,
        "published": false
      },
      {
        "focalLengthMm": 39.46785749542247,
        "nominalFNumber": 4.0649,
        "published": false
      },
      {
        "focalLengthMm": 39.6784724536616,
        "nominalFNumber": 4.0758,
        "published": false
      },
      {
        "focalLengthMm": 39.88989880370217,
        "nominalFNumber": 4.0866999999999996,
        "published": false
      },
      {
        "focalLengthMm": 40.102140996650014,
        "nominalFNumber": 4.0976,
        "published": false
      },
      {
        "focalLengthMm": 40.3152035001896,
        "nominalFNumber": 4.1085,
        "published": false
      },
      {
        "focalLengthMm": 40.52909079856515,
        "nominalFNumber": 4.1194,
        "published": false
      },
      {
        "focalLengthMm": 40.74380739256388,
        "nominalFNumber": 4.1303,
        "published": false
      },
      {
        "focalLengthMm": 40.959357799501745,
        "nominalFNumber": 4.1411999999999995,
        "published": false
      },
      {
        "focalLengthMm": 41.17574655320939,
        "nominalFNumber": 4.1521,
        "published": false
      },
      {
        "focalLengthMm": 41.39297820402356,
        "nominalFNumber": 4.163,
        "published": false
      },
      {
        "focalLengthMm": 41.61105731877705,
        "nominalFNumber": 4.1739,
        "published": false
      },
      {
        "focalLengthMm": 41.82998848079218,
        "nominalFNumber": 4.1848,
        "published": false
      },
      {
        "focalLengthMm": 42.04977628987631,
        "nominalFNumber": 4.1957,
        "published": false
      },
      {
        "focalLengthMm": 42.27042536231812,
        "nominalFNumber": 4.2066,
        "published": false
      },
      {
        "focalLengthMm": 42.49194033088641,
        "nominalFNumber": 4.2175,
        "published": false
      },
      {
        "focalLengthMm": 42.71432584483042,
        "nominalFNumber": 4.228400000000001,
        "published": false
      },
      {
        "focalLengthMm": 42.93758656988207,
        "nominalFNumber": 4.2393,
        "published": false
      },
      {
        "focalLengthMm": 43.16172718825904,
        "nominalFNumber": 4.2502,
        "published": false
      },
      {
        "focalLengthMm": 43.38675239867018,
        "nominalFNumber": 4.2611,
        "published": false
      },
      {
        "focalLengthMm": 43.612666916322354,
        "nominalFNumber": 4.272,
        "published": false
      },
      {
        "focalLengthMm": 43.839475472928626,
        "nominalFNumber": 4.2829,
        "published": false
      },
      {
        "focalLengthMm": 44.06718281671761,
        "nominalFNumber": 4.2938,
        "published": false
      },
      {
        "focalLengthMm": 44.29579371244503,
        "nominalFNumber": 4.3047,
        "published": false
      },
      {
        "focalLengthMm": 44.525312941406135,
        "nominalFNumber": 4.315600000000001,
        "published": false
      },
      {
        "focalLengthMm": 44.75574530144949,
        "nominalFNumber": 4.3265,
        "published": false
      },
      {
        "focalLengthMm": 44.987095606992284,
        "nominalFNumber": 4.337400000000001,
        "published": false
      },
      {
        "focalLengthMm": 45.21936868903709,
        "nominalFNumber": 4.3483,
        "published": false
      },
      {
        "focalLengthMm": 45.45256939518929,
        "nominalFNumber": 4.3591999999999995,
        "published": false
      },
      {
        "focalLengthMm": 45.68670258967675,
        "nominalFNumber": 4.3701,
        "published": false
      },
      {
        "focalLengthMm": 45.921773153369664,
        "nominalFNumber": 4.381,
        "published": false
      },
      {
        "focalLengthMm": 46.157785983802526,
        "nominalFNumber": 4.3919,
        "published": false
      },
      {
        "focalLengthMm": 46.39474599519647,
        "nominalFNumber": 4.4028,
        "published": false
      },
      {
        "focalLengthMm": 46.632658118483526,
        "nominalFNumber": 4.4137,
        "published": false
      },
      {
        "focalLengthMm": 46.87152730133137,
        "nominalFNumber": 4.4246,
        "published": false
      },
      {
        "focalLengthMm": 47.1113585081695,
        "nominalFNumber": 4.4355,
        "published": false
      },
      {
        "focalLengthMm": 47.35215672021696,
        "nominalFNumber": 4.446400000000001,
        "published": false
      },
      {
        "focalLengthMm": 47.59392693550972,
        "nominalFNumber": 4.4573,
        "published": false
      },
      {
        "focalLengthMm": 47.836674168931,
        "nominalFNumber": 4.4681999999999995,
        "published": false
      },
      {
        "focalLengthMm": 48.08040345224077,
        "nominalFNumber": 4.4791,
        "published": false
      },
      {
        "focalLengthMm": 48.32,
        "nominalFNumber": 4.49,
        "published": true,
        "label": "Tele"
      }
    ],
    "step": 0.005
  },
  "focus": {
    "closeFocusM": 0.3,
    "description": "G2 moves toward the object for near focus, but the patent prints infinity focus only, so the model stays at infinity and the focus control does not change the optics. The 0.3 m close-focus figure is Sigma's specification. Spacings are printed at 18.60, 27.99 and 48.32 mm; those between are inferred, not a published cam. The optical stabilizer shift is not modeled.",
    "step": 1
  },
  "gaps": {
    "5": {
      "label": "d5",
      "values": [
        [
          7.59,
          7.59
        ],
        [
          7.727377296114703,
          7.727377296114703
        ],
        [
          7.862441319318029,
          7.862441319318029
        ],
        [
          7.995228657125902,
          7.995228657125902
        ],
        [
          8.125775132570329,
          8.125775132570329
        ],
        [
          8.254115824197838,
          8.254115824197838
        ],
        [
          8.380285085441365,
          8.380285085441365
        ],
        [
          8.50431656338693,
          8.50431656338693
        ],
        [
          8.626243216959306,
          8.626243216959306
        ],
        [
          8.746097334545523,
          8.746097334545523
        ],
        [
          8.863910551078016,
          8.863910551078016
        ],
        [
          8.979713864595833,
          8.979713864595833
        ],
        [
          9.093537652302503,
          9.093537652302503
        ],
        [
          9.205411686139378,
          9.205411686139378
        ],
        [
          9.315365147889795,
          9.315365147889795
        ],
        [
          9.423426643832185,
          9.423426643832185
        ],
        [
          9.52962421895672,
          9.52962421895672
        ],
        [
          9.633985370761167,
          9.633985370761167
        ],
        [
          9.736537062640217,
          9.736537062640217
        ],
        [
          9.837305736882431,
          9.837305736882431
        ],
        [
          9.936317327287911,
          9.936317327287911
        ],
        [
          10.033597271419904,
          10.033597271419904
        ],
        [
          10.129170522502616,
          10.129170522502616
        ],
        [
          10.223061560976921,
          10.223061560976921
        ],
        [
          10.315294405725545,
          10.315294405725545
        ],
        [
          10.40589262497919,
          10.40589262497919
        ],
        [
          10.494879346912926,
          10.494879346912926
        ],
        [
          10.582277269944948,
          10.582277269944948
        ],
        [
          10.668108672745376,
          10.668108672745376
        ],
        [
          10.752395423966297,
          10.752395423966297
        ],
        [
          10.835158991701132,
          10.835158991701132
        ],
        [
          10.91642045268238,
          10.91642045268238
        ],
        [
          10.996200501225964,
          10.996200501225964
        ],
        [
          11.074519457931094,
          11.074519457931094
        ],
        [
          11.151397278142026,
          11.151397278142026
        ],
        [
          11.226853560180588,
          11.226853560180588
        ],
        [
          11.30090755335627,
          11.30090755335627
        ],
        [
          11.373578165760165,
          11.373578165760165
        ],
        [
          11.444883971851244,
          11.444883971851244
        ],
        [
          11.514843219839303,
          11.514843219839303
        ],
        [
          11.583473838872662,
          11.583473838872662
        ],
        [
          11.65079344603573,
          11.65079344603573
        ],
        [
          11.716819353162329,
          11.716819353162329
        ],
        [
          11.781568573471008,
          11.781568573471008
        ],
        [
          11.845057828026693,
          11.845057828026693
        ],
        [
          11.907303552035618,
          11.907303552035618
        ],
        [
          11.968321900976248,
          11.968321900976248
        ],
        [
          12.028128756573599,
          12.028128756573599
        ],
        [
          12.086739732620067,
          12.086739732620067
        ],
        [
          12.144170180647205,
          12.144170180647205
        ],
        [
          12.200435195454482,
          12.200435195454482
        ],
        [
          12.255549620497403,
          12.255549620497403
        ],
        [
          12.309528053139802,
          12.309528053139802
        ],
        [
          12.362384849775463,
          12.362384849775463
        ],
        [
          12.414134130820734,
          12.414134130820734
        ],
        [
          12.46478978558312,
          12.46478978558312
        ],
        [
          12.514365477010141,
          12.514365477010141
        ],
        [
          12.56287464631985,
          12.56287464631985
        ],
        [
          12.61033051751859,
          12.61033051751859
        ],
        [
          12.656746101807867,
          12.656746101807867
        ],
        [
          12.70213420188376,
          12.70213420188376
        ],
        [
          12.746507416132173,
          12.746507416132173
        ],
        [
          12.789878142722719,
          12.789878142722719
        ],
        [
          12.83225858360422,
          12.83225858360422
        ],
        [
          12.87366074840391,
          12.87366074840391
        ],
        [
          12.914096458234342,
          12.914096458234342
        ],
        [
          12.953577349409228,
          12.953577349409228
        ],
        [
          12.992114877071034,
          12.992114877071034
        ],
        [
          13.029720318734075,
          13.029720318734075
        ],
        [
          13.066404777743378,
          13.066404777743378
        ],
        [
          13.102179186652851,
          13.102179186652851
        ],
        [
          13.137054310524745,
          13.137054310524745
        ],
        [
          13.171040750152745,
          13.171040750152745
        ],
        [
          13.204148945210113,
          13.204148945210113
        ],
        [
          13.236389177325531,
          13.236389177325531
        ],
        [
          13.2677715730882,
          13.2677715730882
        ],
        [
          13.29830610698457,
          13.29830610698457
        ],
        [
          13.328002604267667,
          13.328002604267667
        ],
        [
          13.356870743761755,
          13.356870743761755
        ],
        [
          13.384920060603406,
          13.384920060603406
        ],
        [
          13.412159948920797,
          13.412159948920797
        ],
        [
          13.438599664453445,
          13.438599664453445
        ],
        [
          13.464248327111727,
          13.464248327111727
        ],
        [
          13.489114923482212,
          13.489114923482212
        ],
        [
          13.513208309274667,
          13.513208309274667
        ],
        [
          13.536537211716643,
          13.536537211716643
        ],
        [
          13.559110231894929,
          13.559110231894929
        ],
        [
          13.580935847044584,
          13.580935847044584
        ],
        [
          13.602022412790399,
          13.602022412790399
        ],
        [
          13.62237816533685,
          13.62237816533685
        ],
        [
          13.642011223612323,
          13.642011223612323
        ],
        [
          13.660929591366257,
          13.660929591366257
        ],
        [
          13.679141159220686,
          13.679141159220686
        ],
        [
          13.696653706679285,
          13.696653706679285
        ],
        [
          13.713474904091797,
          13.713474904091797
        ],
        [
          13.729612314577276,
          13.729612314577276
        ],
        [
          13.74507339590697,
          13.74507339590697
        ],
        [
          13.759865502345752,
          13.759865502345752
        ],
        [
          13.77399588645725,
          13.77399588645725
        ],
        [
          13.787471700868682,
          13.787471700868682
        ],
        [
          13.8003,
          13.8003
        ],
        [
          13.801634103764831,
          13.801634103764831
        ],
        [
          13.801058780788,
          13.801058780788
        ],
        [
          13.798606717858625,
          13.798606717858625
        ],
        [
          13.79430987815749,
          13.79430987815749
        ],
        [
          13.788199521392912,
          13.788199521392912
        ],
        [
          13.780306223262427,
          13.780306223262427
        ],
        [
          13.770659894270885,
          13.770659894270885
        ],
        [
          13.759289797925572,
          13.759289797925572
        ],
        [
          13.746224568335327,
          13.746224568335327
        ],
        [
          13.731492227233616,
          13.731492227233616
        ],
        [
          13.715120200451192,
          13.715120200451192
        ],
        [
          13.697135333854614,
          13.697135333854614
        ],
        [
          13.67756390877432,
          13.67756390877432
        ],
        [
          13.656431656938189,
          13.656431656938189
        ],
        [
          13.63376377493268,
          13.63376377493268
        ],
        [
          13.60958493820491,
          13.60958493820491
        ],
        [
          13.583919314625744,
          13.583919314625744
        ],
        [
          13.556790577626861,
          13.556790577626861
        ],
        [
          13.528221918931715,
          13.528221918931715
        ],
        [
          13.498236060889667,
          13.498236060889667
        ],
        [
          13.466855268431871,
          13.466855268431871
        ],
        [
          13.434101360660295,
          13.434101360660295
        ],
        [
          13.399995722082688,
          13.399995722082688
        ],
        [
          13.36455931350865,
          13.36455931350865
        ],
        [
          13.327812682614816,
          13.327812682614816
        ],
        [
          13.289775974194084,
          13.289775974194084
        ],
        [
          13.250468940098159,
          13.250468940098159
        ],
        [
          13.209910948883804,
          13.209910948883804
        ],
        [
          13.168120995175563,
          13.168120995175563
        ],
        [
          13.125117708750869,
          13.125117708750869
        ],
        [
          13.080919363359904,
          13.080919363359904
        ],
        [
          13.035543885288904,
          13.035543885288904
        ],
        [
          12.989008861672936,
          12.989008861672936
        ],
        [
          12.941331548571727,
          12.941331548571727
        ],
        [
          12.892528878810833,
          12.892528878810833
        ],
        [
          12.842617469599627,
          12.842617469599627
        ],
        [
          12.79161362993265,
          12.79161362993265
        ],
        [
          12.739533367780849,
          12.739533367780849
        ],
        [
          12.686392397080393,
          12.686392397080393
        ],
        [
          12.632206144524657,
          12.632206144524657
        ],
        [
          12.576989756168091,
          12.576989756168091
        ],
        [
          12.520758103844681,
          12.520758103844681
        ],
        [
          12.46352579140991,
          12.46352579140991
        ],
        [
          12.405307160810302,
          12.405307160810302
        ],
        [
          12.346116297986988,
          12.346116297986988
        ],
        [
          12.285967038617777,
          12.285967038617777
        ],
        [
          12.22487297370268,
          12.22487297370268
        ],
        [
          12.162847455000238,
          12.162847455000238
        ],
        [
          12.09990360031526,
          12.09990360031526
        ],
        [
          12.036054298646189,
          12.036054298646189
        ],
        [
          11.9713122151946,
          11.9713122151946
        ],
        [
          11.905689796241981,
          11.905689796241981
        ],
        [
          11.839199273897142,
          11.839199273897142
        ],
        [
          11.771852670718866,
          11.771852670718866
        ],
        [
          11.70366180421751,
          11.70366180421751
        ],
        [
          11.634638291238256,
          11.634638291238256
        ],
        [
          11.56479355223215,
          11.56479355223215
        ],
        [
          11.494138815414997,
          11.494138815414997
        ],
        [
          11.42268512081996,
          11.42268512081996
        ],
        [
          11.350443324245987,
          11.350443324245987
        ],
        [
          11.277424101105375,
          11.277424101105375
        ],
        [
          11.203637950173837,
          11.203637950173837
        ],
        [
          11.129095197245075,
          11.129095197245075
        ],
        [
          11.053805998693713,
          11.053805998693713
        ],
        [
          10.977780344948478,
          10.977780344948478
        ],
        [
          10.901028063878709,
          10.901028063878709
        ],
        [
          10.823558824096553,
          10.823558824096553
        ],
        [
          10.745382138177385,
          10.745382138177385
        ],
        [
          10.666507365800097,
          10.666507365800097
        ],
        [
          10.586943716811652,
          10.586943716811652
        ],
        [
          10.506700254215097,
          10.506700254215097
        ],
        [
          10.425785897085493,
          10.425785897085493
        ],
        [
          10.344209423415103,
          10.344209423415103
        ],
        [
          10.26197947288948,
          10.26197947288948
        ],
        [
          10.179104549596905,
          10.179104549596905
        ],
        [
          10.095593024672965,
          10.095593024672965
        ],
        [
          10.01145313888182,
          10.01145313888182
        ],
        [
          9.926693005136103,
          9.926693005136103
        ],
        [
          9.841320610957247,
          9.841320610957247
        ],
        [
          9.755343820877709,
          9.755343820877709
        ],
        [
          9.668770378786848,
          9.668770378786848
        ],
        [
          9.581607910221711,
          9.581607910221711
        ],
        [
          9.493863924604774,
          9.493863924604774
        ],
        [
          9.405545817429449,
          9.405545817429449
        ],
        [
          9.316660872395284,
          9.316660872395284
        ],
        [
          9.227216263493846,
          9.227216263493846
        ],
        [
          9.137219057047004,
          9.137219057047004
        ],
        [
          9.046676213698305,
          9.046676213698305
        ],
        [
          8.955594590359537,
          8.955594590359537
        ],
        [
          8.863980942112697,
          8.863980942112697
        ],
        [
          8.771841924069474,
          8.771841924069474
        ],
        [
          8.679184093188582,
          8.679184093188582
        ],
        [
          8.586013910052651,
          8.586013910052651
        ],
        [
          8.492337740605418,
          8.492337740605418
        ],
        [
          8.398161857850237,
          8.398161857850237
        ],
        [
          8.303492443511235,
          8.303492443511235
        ],
        [
          8.208335589657645,
          8.208335589657645
        ],
        [
          8.112697300292552,
          8.112697300292552
        ],
        [
          8.016583492906914,
          8.016583492906914
        ],
        [
          7.92,
          7.92
        ]
      ]
    },
    "10": {
      "label": "d10",
      "values": [
        [
          24.8,
          24.8
        ],
        [
          24.597573703885296,
          24.597573703885296
        ],
        [
          24.39746068068197,
          24.39746068068197
        ],
        [
          24.1996243428741,
          24.1996243428741
        ],
        [
          24.00402886742967,
          24.00402886742967
        ],
        [
          23.810639175802162,
          23.810639175802162
        ],
        [
          23.61942091455863,
          23.61942091455863
        ],
        [
          23.430340436613072,
          23.430340436613072
        ],
        [
          23.243364783040697,
          23.243364783040697
        ],
        [
          23.05846166545448,
          23.05846166545448
        ],
        [
          22.875599448921985,
          22.875599448921985
        ],
        [
          22.694747135404167,
          22.694747135404167
        ],
        [
          22.515874347697498,
          22.515874347697498
        ],
        [
          22.338951313860623,
          22.338951313860623
        ],
        [
          22.163948852110206,
          22.163948852110206
        ],
        [
          21.99083835616781,
          21.99083835616781
        ],
        [
          21.819591781043282,
          21.819591781043282
        ],
        [
          21.650181629238833,
          21.650181629238833
        ],
        [
          21.482580937359785,
          21.482580937359785
        ],
        [
          21.316763263117572,
          21.316763263117572
        ],
        [
          21.152702672712092,
          21.152702672712092
        ],
        [
          20.990373728580096,
          20.990373728580096
        ],
        [
          20.829751477497386,
          20.829751477497386
        ],
        [
          20.670811439023076,
          20.670811439023076
        ],
        [
          20.51352959427446,
          20.51352959427446
        ],
        [
          20.357882375020814,
          20.357882375020814
        ],
        [
          20.203846653087076,
          20.203846653087076
        ],
        [
          20.051399730055053,
          20.051399730055053
        ],
        [
          19.900519327254624,
          19.900519327254624
        ],
        [
          19.751183576033704,
          19.751183576033704
        ],
        [
          19.60337100829887,
          19.60337100829887
        ],
        [
          19.457060547317617,
          19.457060547317617
        ],
        [
          19.312231498774032,
          19.312231498774032
        ],
        [
          19.168863542068905,
          19.168863542068905
        ],
        [
          19.02693672185797,
          19.02693672185797
        ],
        [
          18.88643143981941,
          18.88643143981941
        ],
        [
          18.747328446643728,
          18.747328446643728
        ],
        [
          18.609608834239836,
          18.609608834239836
        ],
        [
          18.473254028148755,
          18.473254028148755
        ],
        [
          18.338245780160698,
          18.338245780160698
        ],
        [
          18.20456616112734,
          18.20456616112734
        ],
        [
          18.072197553964273,
          18.072197553964273
        ],
        [
          17.941122646837673,
          17.941122646837673
        ],
        [
          17.811324426528994,
          17.811324426528994
        ],
        [
          17.68278617197331,
          17.68278617197331
        ],
        [
          17.555491447964386,
          17.555491447964386
        ],
        [
          17.429424099023752,
          17.429424099023752
        ],
        [
          17.3045682434264,
          17.3045682434264
        ],
        [
          17.18090826737993,
          17.18090826737993
        ],
        [
          17.058428819352795,
          17.058428819352795
        ],
        [
          16.93711480454552,
          16.93711480454552
        ],
        [
          16.816951379502598,
          16.816951379502598
        ],
        [
          16.6979239468602,
          16.6979239468602
        ],
        [
          16.580018150224536,
          16.580018150224536
        ],
        [
          16.463219869179266,
          16.463219869179266
        ],
        [
          16.34751521441688,
          16.34751521441688
        ],
        [
          16.23289052298986,
          16.23289052298986
        ],
        [
          16.11933235368015,
          16.11933235368015
        ],
        [
          16.00682748248141,
          16.00682748248141
        ],
        [
          15.895362898192133,
          15.895362898192133
        ],
        [
          15.78492579811624,
          15.78492579811624
        ],
        [
          15.675503583867828,
          15.675503583867828
        ],
        [
          15.56708385727728,
          15.56708385727728
        ],
        [
          15.45965441639578,
          15.45965441639578
        ],
        [
          15.353203251596089,
          15.353203251596089
        ],
        [
          15.247718541765657,
          15.247718541765657
        ],
        [
          15.143188650590767,
          15.143188650590767
        ],
        [
          15.039602122928969,
          15.039602122928969
        ],
        [
          14.936947681265924,
          14.936947681265924
        ],
        [
          14.835214222256623,
          14.835214222256623
        ],
        [
          14.734390813347149,
          14.734390813347149
        ],
        [
          14.634466689475254,
          14.634466689475254
        ],
        [
          14.535431249847255,
          14.535431249847255
        ],
        [
          14.437274054789889,
          14.437274054789889
        ],
        [
          14.339984822674468,
          14.339984822674468
        ],
        [
          14.243553426911799,
          14.243553426911799
        ],
        [
          14.147969893015429,
          14.147969893015429
        ],
        [
          14.053224395732332,
          14.053224395732332
        ],
        [
          13.959307256238246,
          13.959307256238246
        ],
        [
          13.866208939396593,
          13.866208939396593
        ],
        [
          13.773920051079202,
          13.773920051079202
        ],
        [
          13.682431335546553,
          13.682431335546553
        ],
        [
          13.591733672888274,
          13.591733672888274
        ],
        [
          13.501818076517788,
          13.501818076517788
        ],
        [
          13.412675690725333,
          13.412675690725333
        ],
        [
          13.324297788283356,
          13.324297788283356
        ],
        [
          13.23667576810507,
          13.23667576810507
        ],
        [
          13.149801152955417,
          13.149801152955417
        ],
        [
          13.063665587209602,
          13.063665587209602
        ],
        [
          12.97826083466315,
          12.97826083466315
        ],
        [
          12.893578776387677,
          12.893578776387677
        ],
        [
          12.809611408633742,
          12.809611408633742
        ],
        [
          12.726350840779313,
          12.726350840779313
        ],
        [
          12.643789293320715,
          12.643789293320715
        ],
        [
          12.561919095908204,
          12.561919095908204
        ],
        [
          12.480732685422723,
          12.480732685422723
        ],
        [
          12.400222604093027,
          12.400222604093027
        ],
        [
          12.32038149765425,
          12.32038149765425
        ],
        [
          12.241202113542748,
          12.241202113542748
        ],
        [
          12.16267729913132,
          12.16267729913132
        ],
        [
          12.0848,
          12.0848
        ],
        [
          11.947629896235169,
          11.947629896235169
        ],
        [
          11.812369219211998,
          11.812369219211998
        ],
        [
          11.678985282141374,
          11.678985282141374
        ],
        [
          11.547446121842508,
          11.547446121842508
        ],
        [
          11.417720478607087,
          11.417720478607087
        ],
        [
          11.289777776737573,
          11.289777776737573
        ],
        [
          11.163588105729115,
          11.163588105729115
        ],
        [
          11.039122202074427,
          11.039122202074427
        ],
        [
          10.91635143166467,
          10.91635143166467
        ],
        [
          10.795247772766382,
          10.795247772766382
        ],
        [
          10.675783799548807,
          10.675783799548807
        ],
        [
          10.557932666145383,
          10.557932666145383
        ],
        [
          10.44166809122568,
          10.44166809122568
        ],
        [
          10.326964343061812,
          10.326964343061812
        ],
        [
          10.213796225067322,
          10.213796225067322
        ],
        [
          10.102139061795091,
          10.102139061795091
        ],
        [
          9.991968685374255,
          9.991968685374255
        ],
        [
          9.88326142237314,
          9.88326142237314
        ],
        [
          9.775994081068285,
          9.775994081068285
        ],
        [
          9.670143939110334,
          9.670143939110334
        ],
        [
          9.565688731568128,
          9.565688731568128
        ],
        [
          9.462606639339706,
          9.462606639339706
        ],
        [
          9.360876277917313,
          9.360876277917313
        ],
        [
          9.26047668649135,
          9.26047668649135
        ],
        [
          9.161387317385184,
          9.161387317385184
        ],
        [
          9.063588025805915,
          9.063588025805915
        ],
        [
          8.96705905990184,
          8.96705905990184
        ],
        [
          8.871781051116194,
          8.871781051116194
        ],
        [
          8.777735004824434,
          8.777735004824434
        ],
        [
          8.68490229124913,
          8.68490229124913
        ],
        [
          8.593264636640097,
          8.593264636640097
        ],
        [
          8.502804114711093,
          8.502804114711093
        ],
        [
          8.413503138327062,
          8.413503138327062
        ],
        [
          8.32534445142827,
          8.32534445142827
        ],
        [
          8.238311121189165,
          8.238311121189165
        ],
        [
          8.152386530400372,
          8.152386530400372
        ],
        [
          8.067554370067347,
          8.067554370067347
        ],
        [
          7.983798632219152,
          7.983798632219152
        ],
        [
          7.901103602919608,
          7.901103602919608
        ],
        [
          7.819453855475343,
          7.819453855475343
        ],
        [
          7.73883424383191,
          7.73883424383191
        ],
        [
          7.65922989615532,
          7.65922989615532
        ],
        [
          7.58062620859009,
          7.58062620859009
        ],
        [
          7.503008839189697,
          7.503008839189697
        ],
        [
          7.426363702013014,
          7.426363702013014
        ],
        [
          7.350676961382222,
          7.350676961382222
        ],
        [
          7.2759350262973195,
          7.2759350262973195
        ],
        [
          7.202124544999762,
          7.202124544999762
        ],
        [
          7.12923239968474,
          7.12923239968474
        ],
        [
          7.057245701353813,
          7.057245701353813
        ],
        [
          6.986151784805399,
          6.986151784805399
        ],
        [
          6.915938203758017,
          6.915938203758017
        ],
        [
          6.84659272610286,
          6.84659272610286
        ],
        [
          6.778103329281134,
          6.778103329281134
        ],
        [
          6.710458195782489,
          6.710458195782489
        ],
        [
          6.643645708761742,
          6.643645708761742
        ],
        [
          6.57765444776785,
          6.57765444776785
        ],
        [
          6.5124731845850015,
          6.5124731845850015
        ],
        [
          6.448090879180038,
          6.448090879180038
        ],
        [
          6.3844966757540105,
          6.3844966757540105
        ],
        [
          6.321679898894623,
          6.321679898894623
        ],
        [
          6.259630049826161,
          6.259630049826161
        ],
        [
          6.198336802754926,
          6.198336802754926
        ],
        [
          6.137790001306287,
          6.137790001306287
        ],
        [
          6.077979655051523,
          6.077979655051523
        ],
        [
          6.018895936121291,
          6.018895936121291
        ],
        [
          5.960529175903449,
          5.960529175903449
        ],
        [
          5.902869861822614,
          5.902869861822614
        ],
        [
          5.845908634199903,
          5.845908634199903
        ],
        [
          5.789636283188349,
          5.789636283188349
        ],
        [
          5.734043745784904,
          5.734043745784904
        ],
        [
          5.679122102914508,
          5.679122102914508
        ],
        [
          5.624862576584897,
          5.624862576584897
        ],
        [
          5.5712565271105206,
          5.5712565271105206
        ],
        [
          5.518295450403095,
          5.518295450403095
        ],
        [
          5.465970975327035,
          5.465970975327035
        ],
        [
          5.41427486111818,
          5.41427486111818
        ],
        [
          5.363198994863896,
          5.363198994863896
        ],
        [
          5.312735389042753,
          5.312735389042753
        ],
        [
          5.262876179122291,
          5.262876179122291
        ],
        [
          5.2136136212131525,
          5.2136136212131525
        ],
        [
          5.164940089778288,
          5.164940089778288
        ],
        [
          5.116848075395224,
          5.116848075395224
        ],
        [
          5.069330182570552,
          5.069330182570552
        ],
        [
          5.022379127604715,
          5.022379127604715
        ],
        [
          4.975987736506152,
          4.975987736506152
        ],
        [
          4.930148942952996,
          4.930148942952996
        ],
        [
          4.884855786301697,
          4.884855786301697
        ],
        [
          4.8401014096404635,
          4.8401014096404635
        ],
        [
          4.795879057887303,
          4.795879057887303
        ],
        [
          4.752182075930527,
          4.752182075930527
        ],
        [
          4.70900390681142,
          4.70900390681142
        ],
        [
          4.66633808994735,
          4.66633808994735
        ],
        [
          4.624178259394582,
          4.624178259394582
        ],
        [
          4.582518142149764,
          4.582518142149764
        ],
        [
          4.541351556488765,
          4.541351556488765
        ],
        [
          4.5006724103423545,
          4.5006724103423545
        ],
        [
          4.460474699707449,
          4.460474699707449
        ],
        [
          4.420752507093086,
          4.420752507093086
        ],
        [
          4.3815,
          4.3815
        ]
      ]
    },
    "18": {
      "label": "d18",
      "values": [
        [
          1.7,
          1.7
        ],
        [
          1.732104,
          1.732104
        ],
        [
          1.764208,
          1.764208
        ],
        [
          1.796312,
          1.796312
        ],
        [
          1.8284159999999998,
          1.8284159999999998
        ],
        [
          1.86052,
          1.86052
        ],
        [
          1.8926239999999999,
          1.8926239999999999
        ],
        [
          1.924728,
          1.924728
        ],
        [
          1.9568320000000001,
          1.9568320000000001
        ],
        [
          1.9889359999999998,
          1.9889359999999998
        ],
        [
          2.02104,
          2.02104
        ],
        [
          2.053144,
          2.053144
        ],
        [
          2.085248,
          2.085248
        ],
        [
          2.117352,
          2.117352
        ],
        [
          2.149456,
          2.149456
        ],
        [
          2.1815599999999997,
          2.1815599999999997
        ],
        [
          2.213664,
          2.213664
        ],
        [
          2.245768,
          2.245768
        ],
        [
          2.2778720000000003,
          2.2778720000000003
        ],
        [
          2.309976,
          2.309976
        ],
        [
          2.34208,
          2.34208
        ],
        [
          2.3741839999999996,
          2.3741839999999996
        ],
        [
          2.406288,
          2.406288
        ],
        [
          2.4383920000000003,
          2.4383920000000003
        ],
        [
          2.470496,
          2.470496
        ],
        [
          2.5026,
          2.5026
        ],
        [
          2.534704,
          2.534704
        ],
        [
          2.566808,
          2.566808
        ],
        [
          2.5989120000000003,
          2.5989120000000003
        ],
        [
          2.631016,
          2.631016
        ],
        [
          2.66312,
          2.66312
        ],
        [
          2.6952239999999996,
          2.6952239999999996
        ],
        [
          2.727328,
          2.727328
        ],
        [
          2.759432,
          2.759432
        ],
        [
          2.791536,
          2.791536
        ],
        [
          2.82364,
          2.82364
        ],
        [
          2.855744,
          2.855744
        ],
        [
          2.887848,
          2.887848
        ],
        [
          2.9199520000000003,
          2.9199520000000003
        ],
        [
          2.952056,
          2.952056
        ],
        [
          2.98416,
          2.98416
        ],
        [
          3.016264,
          3.016264
        ],
        [
          3.048368,
          3.048368
        ],
        [
          3.0804720000000003,
          3.0804720000000003
        ],
        [
          3.1125760000000002,
          3.1125760000000002
        ],
        [
          3.14468,
          3.14468
        ],
        [
          3.1767840000000005,
          3.1767840000000005
        ],
        [
          3.208888,
          3.208888
        ],
        [
          3.240992,
          3.240992
        ],
        [
          3.273096,
          3.273096
        ],
        [
          3.3052,
          3.3052
        ],
        [
          3.3373040000000005,
          3.3373040000000005
        ],
        [
          3.369408,
          3.369408
        ],
        [
          3.4015120000000003,
          3.4015120000000003
        ],
        [
          3.4336160000000002,
          3.4336160000000002
        ],
        [
          3.46572,
          3.46572
        ],
        [
          3.497824,
          3.497824
        ],
        [
          3.529928,
          3.529928
        ],
        [
          3.562032,
          3.562032
        ],
        [
          3.5941359999999998,
          3.5941359999999998
        ],
        [
          3.62624,
          3.62624
        ],
        [
          3.6583439999999996,
          3.6583439999999996
        ],
        [
          3.690448,
          3.690448
        ],
        [
          3.7225520000000003,
          3.7225520000000003
        ],
        [
          3.754656,
          3.754656
        ],
        [
          3.78676,
          3.78676
        ],
        [
          3.818864,
          3.818864
        ],
        [
          3.8509680000000004,
          3.8509680000000004
        ],
        [
          3.8830720000000003,
          3.8830720000000003
        ],
        [
          3.9151759999999998,
          3.9151759999999998
        ],
        [
          3.94728,
          3.94728
        ],
        [
          3.9793839999999996,
          3.9793839999999996
        ],
        [
          4.011488,
          4.011488
        ],
        [
          4.043591999999999,
          4.043591999999999
        ],
        [
          4.075696,
          4.075696
        ],
        [
          4.1078,
          4.1078
        ],
        [
          4.1399040000000005,
          4.1399040000000005
        ],
        [
          4.172008,
          4.172008
        ],
        [
          4.204112,
          4.204112
        ],
        [
          4.236216000000001,
          4.236216000000001
        ],
        [
          4.26832,
          4.26832
        ],
        [
          4.3004240000000005,
          4.3004240000000005
        ],
        [
          4.332528,
          4.332528
        ],
        [
          4.364631999999999,
          4.364631999999999
        ],
        [
          4.396736,
          4.396736
        ],
        [
          4.42884,
          4.42884
        ],
        [
          4.4609440000000005,
          4.4609440000000005
        ],
        [
          4.493048,
          4.493048
        ],
        [
          4.525152,
          4.525152
        ],
        [
          4.557256000000001,
          4.557256000000001
        ],
        [
          4.58936,
          4.58936
        ],
        [
          4.621464,
          4.621464
        ],
        [
          4.653568000000001,
          4.653568000000001
        ],
        [
          4.685672,
          4.685672
        ],
        [
          4.717776,
          4.717776
        ],
        [
          4.74988,
          4.74988
        ],
        [
          4.781984,
          4.781984
        ],
        [
          4.814088,
          4.814088
        ],
        [
          4.846191999999999,
          4.846191999999999
        ],
        [
          4.878296000000001,
          4.878296000000001
        ],
        [
          4.9104,
          4.9104
        ],
        [
          4.949496000000001,
          4.949496000000001
        ],
        [
          4.988592,
          4.988592
        ],
        [
          5.027688,
          5.027688
        ],
        [
          5.066784,
          5.066784
        ],
        [
          5.105880000000001,
          5.105880000000001
        ],
        [
          5.144976,
          5.144976
        ],
        [
          5.1840720000000005,
          5.1840720000000005
        ],
        [
          5.223168,
          5.223168
        ],
        [
          5.262264000000001,
          5.262264000000001
        ],
        [
          5.30136,
          5.30136
        ],
        [
          5.3404560000000005,
          5.3404560000000005
        ],
        [
          5.379552,
          5.379552
        ],
        [
          5.418648,
          5.418648
        ],
        [
          5.457744,
          5.457744
        ],
        [
          5.49684,
          5.49684
        ],
        [
          5.5359359999999995,
          5.5359359999999995
        ],
        [
          5.575032,
          5.575032
        ],
        [
          5.614128,
          5.614128
        ],
        [
          5.653224,
          5.653224
        ],
        [
          5.69232,
          5.69232
        ],
        [
          5.731416,
          5.731416
        ],
        [
          5.770512,
          5.770512
        ],
        [
          5.809608000000001,
          5.809608000000001
        ],
        [
          5.848704,
          5.848704
        ],
        [
          5.8878,
          5.8878
        ],
        [
          5.926896,
          5.926896
        ],
        [
          5.965992,
          5.965992
        ],
        [
          6.005088000000001,
          6.005088000000001
        ],
        [
          6.044184,
          6.044184
        ],
        [
          6.08328,
          6.08328
        ],
        [
          6.122376,
          6.122376
        ],
        [
          6.161472,
          6.161472
        ],
        [
          6.2005680000000005,
          6.2005680000000005
        ],
        [
          6.239664000000001,
          6.239664000000001
        ],
        [
          6.27876,
          6.27876
        ],
        [
          6.317856000000001,
          6.317856000000001
        ],
        [
          6.356952000000001,
          6.356952000000001
        ],
        [
          6.3960479999999995,
          6.3960479999999995
        ],
        [
          6.435143999999999,
          6.435143999999999
        ],
        [
          6.47424,
          6.47424
        ],
        [
          6.513336,
          6.513336
        ],
        [
          6.552432,
          6.552432
        ],
        [
          6.591528,
          6.591528
        ],
        [
          6.630624,
          6.630624
        ],
        [
          6.66972,
          6.66972
        ],
        [
          6.708816000000001,
          6.708816000000001
        ],
        [
          6.7479119999999995,
          6.7479119999999995
        ],
        [
          6.787008,
          6.787008
        ],
        [
          6.826104,
          6.826104
        ],
        [
          6.8652,
          6.8652
        ],
        [
          6.904296,
          6.904296
        ],
        [
          6.943392,
          6.943392
        ],
        [
          6.982488,
          6.982488
        ],
        [
          7.021584000000001,
          7.021584000000001
        ],
        [
          7.0606800000000005,
          7.0606800000000005
        ],
        [
          7.099776,
          7.099776
        ],
        [
          7.138872000000001,
          7.138872000000001
        ],
        [
          7.177968,
          7.177968
        ],
        [
          7.217064000000001,
          7.217064000000001
        ],
        [
          7.25616,
          7.25616
        ],
        [
          7.295256000000001,
          7.295256000000001
        ],
        [
          7.334352000000001,
          7.334352000000001
        ],
        [
          7.373448,
          7.373448
        ],
        [
          7.412544,
          7.412544
        ],
        [
          7.45164,
          7.45164
        ],
        [
          7.490736,
          7.490736
        ],
        [
          7.529832,
          7.529832
        ],
        [
          7.568928,
          7.568928
        ],
        [
          7.608024,
          7.608024
        ],
        [
          7.647119999999999,
          7.647119999999999
        ],
        [
          7.686216,
          7.686216
        ],
        [
          7.725312,
          7.725312
        ],
        [
          7.764408,
          7.764408
        ],
        [
          7.803504,
          7.803504
        ],
        [
          7.8426,
          7.8426
        ],
        [
          7.881696000000001,
          7.881696000000001
        ],
        [
          7.9207920000000005,
          7.9207920000000005
        ],
        [
          7.959888000000001,
          7.959888000000001
        ],
        [
          7.998984,
          7.998984
        ],
        [
          8.03808,
          8.03808
        ],
        [
          8.077176,
          8.077176
        ],
        [
          8.116272,
          8.116272
        ],
        [
          8.155368000000001,
          8.155368000000001
        ],
        [
          8.194464,
          8.194464
        ],
        [
          8.23356,
          8.23356
        ],
        [
          8.272656000000001,
          8.272656000000001
        ],
        [
          8.311752,
          8.311752
        ],
        [
          8.350848000000001,
          8.350848000000001
        ],
        [
          8.389944,
          8.389944
        ],
        [
          8.42904,
          8.42904
        ],
        [
          8.468136,
          8.468136
        ],
        [
          8.507232,
          8.507232
        ],
        [
          8.546328,
          8.546328
        ],
        [
          8.585424,
          8.585424
        ],
        [
          8.62452,
          8.62452
        ],
        [
          8.663616000000001,
          8.663616000000001
        ],
        [
          8.702712,
          8.702712
        ],
        [
          8.741807999999999,
          8.741807999999999
        ],
        [
          8.780904,
          8.780904
        ],
        [
          8.82,
          8.82
        ]
      ]
    },
    "24": {
      "label": "d24",
      "values": [
        [
          7.62,
          7.62
        ],
        [
          7.587896,
          7.587896
        ],
        [
          7.555792,
          7.555792
        ],
        [
          7.523688,
          7.523688
        ],
        [
          7.491584,
          7.491584
        ],
        [
          7.45948,
          7.45948
        ],
        [
          7.427376,
          7.427376
        ],
        [
          7.395272,
          7.395272
        ],
        [
          7.363168000000001,
          7.363168000000001
        ],
        [
          7.3310640000000005,
          7.3310640000000005
        ],
        [
          7.298960000000001,
          7.298960000000001
        ],
        [
          7.266856000000001,
          7.266856000000001
        ],
        [
          7.234752,
          7.234752
        ],
        [
          7.202648000000001,
          7.202648000000001
        ],
        [
          7.1705440000000005,
          7.1705440000000005
        ],
        [
          7.13844,
          7.13844
        ],
        [
          7.106336000000001,
          7.106336000000001
        ],
        [
          7.074232,
          7.074232
        ],
        [
          7.042128,
          7.042128
        ],
        [
          7.0100240000000005,
          7.0100240000000005
        ],
        [
          6.97792,
          6.97792
        ],
        [
          6.945816,
          6.945816
        ],
        [
          6.913712,
          6.913712
        ],
        [
          6.881608,
          6.881608
        ],
        [
          6.849504,
          6.849504
        ],
        [
          6.8174,
          6.8174
        ],
        [
          6.785296,
          6.785296
        ],
        [
          6.753192,
          6.753192
        ],
        [
          6.721088,
          6.721088
        ],
        [
          6.688984,
          6.688984
        ],
        [
          6.656879999999999,
          6.656879999999999
        ],
        [
          6.624776,
          6.624776
        ],
        [
          6.592671999999999,
          6.592671999999999
        ],
        [
          6.560568,
          6.560568
        ],
        [
          6.528464,
          6.528464
        ],
        [
          6.49636,
          6.49636
        ],
        [
          6.464256000000001,
          6.464256000000001
        ],
        [
          6.432152,
          6.432152
        ],
        [
          6.400048,
          6.400048
        ],
        [
          6.3679440000000005,
          6.3679440000000005
        ],
        [
          6.33584,
          6.33584
        ],
        [
          6.303736000000001,
          6.303736000000001
        ],
        [
          6.271632,
          6.271632
        ],
        [
          6.239528000000001,
          6.239528000000001
        ],
        [
          6.207424000000001,
          6.207424000000001
        ],
        [
          6.175320000000001,
          6.175320000000001
        ],
        [
          6.143216000000001,
          6.143216000000001
        ],
        [
          6.111112,
          6.111112
        ],
        [
          6.079008,
          6.079008
        ],
        [
          6.046904,
          6.046904
        ],
        [
          6.0148,
          6.0148
        ],
        [
          5.982696000000001,
          5.982696000000001
        ],
        [
          5.950592,
          5.950592
        ],
        [
          5.918488,
          5.918488
        ],
        [
          5.886384,
          5.886384
        ],
        [
          5.85428,
          5.85428
        ],
        [
          5.822176000000001,
          5.822176000000001
        ],
        [
          5.790072,
          5.790072
        ],
        [
          5.757968,
          5.757968
        ],
        [
          5.725864,
          5.725864
        ],
        [
          5.69376,
          5.69376
        ],
        [
          5.661656000000001,
          5.661656000000001
        ],
        [
          5.629552,
          5.629552
        ],
        [
          5.597448,
          5.597448
        ],
        [
          5.565344,
          5.565344
        ],
        [
          5.53324,
          5.53324
        ],
        [
          5.501136000000001,
          5.501136000000001
        ],
        [
          5.469032,
          5.469032
        ],
        [
          5.436928,
          5.436928
        ],
        [
          5.4048240000000005,
          5.4048240000000005
        ],
        [
          5.372720000000001,
          5.372720000000001
        ],
        [
          5.340616000000001,
          5.340616000000001
        ],
        [
          5.308512,
          5.308512
        ],
        [
          5.276408,
          5.276408
        ],
        [
          5.2443040000000005,
          5.2443040000000005
        ],
        [
          5.2122,
          5.2122
        ],
        [
          5.180096,
          5.180096
        ],
        [
          5.147992,
          5.147992
        ],
        [
          5.115888,
          5.115888
        ],
        [
          5.0837840000000005,
          5.0837840000000005
        ],
        [
          5.051679999999999,
          5.051679999999999
        ],
        [
          5.019576,
          5.019576
        ],
        [
          4.987472,
          4.987472
        ],
        [
          4.955368,
          4.955368
        ],
        [
          4.923264,
          4.923264
        ],
        [
          4.89116,
          4.89116
        ],
        [
          4.859056000000001,
          4.859056000000001
        ],
        [
          4.826952,
          4.826952
        ],
        [
          4.794848,
          4.794848
        ],
        [
          4.762744,
          4.762744
        ],
        [
          4.73064,
          4.73064
        ],
        [
          4.698536,
          4.698536
        ],
        [
          4.6664319999999995,
          4.6664319999999995
        ],
        [
          4.634328,
          4.634328
        ],
        [
          4.6022240000000005,
          4.6022240000000005
        ],
        [
          4.57012,
          4.57012
        ],
        [
          4.538016,
          4.538016
        ],
        [
          4.505912,
          4.505912
        ],
        [
          4.473808,
          4.473808
        ],
        [
          4.4417040000000005,
          4.4417040000000005
        ],
        [
          4.4096,
          4.4096
        ],
        [
          4.370504,
          4.370504
        ],
        [
          4.331408,
          4.331408
        ],
        [
          4.292312,
          4.292312
        ],
        [
          4.253216,
          4.253216
        ],
        [
          4.21412,
          4.21412
        ],
        [
          4.1750240000000005,
          4.1750240000000005
        ],
        [
          4.135928,
          4.135928
        ],
        [
          4.096832,
          4.096832
        ],
        [
          4.057735999999999,
          4.057735999999999
        ],
        [
          4.0186399999999995,
          4.0186399999999995
        ],
        [
          3.9795439999999997,
          3.9795439999999997
        ],
        [
          3.940448,
          3.940448
        ],
        [
          3.9013520000000006,
          3.9013520000000006
        ],
        [
          3.8622560000000004,
          3.8622560000000004
        ],
        [
          3.8231600000000006,
          3.8231600000000006
        ],
        [
          3.7840640000000008,
          3.7840640000000008
        ],
        [
          3.7449680000000005,
          3.7449680000000005
        ],
        [
          3.7058720000000003,
          3.7058720000000003
        ],
        [
          3.6667760000000005,
          3.6667760000000005
        ],
        [
          3.6276800000000002,
          3.6276800000000002
        ],
        [
          3.5885840000000004,
          3.5885840000000004
        ],
        [
          3.549488,
          3.549488
        ],
        [
          3.5103920000000004,
          3.5103920000000004
        ],
        [
          3.471296,
          3.471296
        ],
        [
          3.4322,
          3.4322
        ],
        [
          3.393104,
          3.393104
        ],
        [
          3.3540080000000003,
          3.3540080000000003
        ],
        [
          3.314912,
          3.314912
        ],
        [
          3.275816,
          3.275816
        ],
        [
          3.23672,
          3.23672
        ],
        [
          3.1976240000000002,
          3.1976240000000002
        ],
        [
          3.158528,
          3.158528
        ],
        [
          3.1194319999999998,
          3.1194319999999998
        ],
        [
          3.0803359999999995,
          3.0803359999999995
        ],
        [
          3.04124,
          3.04124
        ],
        [
          3.002144,
          3.002144
        ],
        [
          2.9630479999999997,
          2.9630479999999997
        ],
        [
          2.9239520000000003,
          2.9239520000000003
        ],
        [
          2.8848560000000005,
          2.8848560000000005
        ],
        [
          2.8457600000000003,
          2.8457600000000003
        ],
        [
          2.8066640000000005,
          2.8066640000000005
        ],
        [
          2.7675680000000003,
          2.7675680000000003
        ],
        [
          2.7284720000000005,
          2.7284720000000005
        ],
        [
          2.689376,
          2.689376
        ],
        [
          2.6502800000000004,
          2.6502800000000004
        ],
        [
          2.611184,
          2.611184
        ],
        [
          2.572088,
          2.572088
        ],
        [
          2.532992,
          2.532992
        ],
        [
          2.4938960000000003,
          2.4938960000000003
        ],
        [
          2.4548,
          2.4548
        ],
        [
          2.415704,
          2.415704
        ],
        [
          2.376608,
          2.376608
        ],
        [
          2.3375120000000003,
          2.3375120000000003
        ],
        [
          2.298416,
          2.298416
        ],
        [
          2.2593199999999998,
          2.2593199999999998
        ],
        [
          2.220224,
          2.220224
        ],
        [
          2.1811279999999997,
          2.1811279999999997
        ],
        [
          2.1420319999999995,
          2.1420319999999995
        ],
        [
          2.1029359999999997,
          2.1029359999999997
        ],
        [
          2.06384,
          2.06384
        ],
        [
          2.0247439999999997,
          2.0247439999999997
        ],
        [
          1.9856479999999996,
          1.9856479999999996
        ],
        [
          1.9465520000000005,
          1.9465520000000005
        ],
        [
          1.9074560000000003,
          1.9074560000000003
        ],
        [
          1.8683600000000005,
          1.8683600000000005
        ],
        [
          1.8292640000000002,
          1.8292640000000002
        ],
        [
          1.7901680000000004,
          1.7901680000000004
        ],
        [
          1.7510720000000002,
          1.7510720000000002
        ],
        [
          1.7119760000000002,
          1.7119760000000002
        ],
        [
          1.6728800000000001,
          1.6728800000000001
        ],
        [
          1.6337840000000001,
          1.6337840000000001
        ],
        [
          1.594688,
          1.594688
        ],
        [
          1.555592,
          1.555592
        ],
        [
          1.516496,
          1.516496
        ],
        [
          1.4774,
          1.4774
        ],
        [
          1.438304,
          1.438304
        ],
        [
          1.399208,
          1.399208
        ],
        [
          1.360112,
          1.360112
        ],
        [
          1.3210159999999997,
          1.3210159999999997
        ],
        [
          1.28192,
          1.28192
        ],
        [
          1.2428239999999997,
          1.2428239999999997
        ],
        [
          1.203728,
          1.203728
        ],
        [
          1.1646319999999997,
          1.1646319999999997
        ],
        [
          1.1255359999999999,
          1.1255359999999999
        ],
        [
          1.0864399999999996,
          1.0864399999999996
        ],
        [
          1.0473439999999996,
          1.0473439999999996
        ],
        [
          1.0082479999999996,
          1.0082479999999996
        ],
        [
          0.9691520000000005,
          0.9691520000000005
        ],
        [
          0.9300560000000004,
          0.9300560000000004
        ],
        [
          0.8909600000000004,
          0.8909600000000004
        ],
        [
          0.8518640000000004,
          0.8518640000000004
        ],
        [
          0.8127680000000003,
          0.8127680000000003
        ],
        [
          0.7736720000000002,
          0.7736720000000002
        ],
        [
          0.7345760000000002,
          0.7345760000000002
        ],
        [
          0.6954800000000002,
          0.6954800000000002
        ],
        [
          0.6563840000000001,
          0.6563840000000001
        ],
        [
          0.6172880000000001,
          0.6172880000000001
        ],
        [
          0.578192,
          0.578192
        ],
        [
          0.539096,
          0.539096
        ],
        [
          0.5,
          0.5
        ]
      ]
    },
    "32": {
      "label": "d32",
      "values": [
        [
          0,
          0
        ],
        [
          0.06504800000000001,
          0.06504800000000001
        ],
        [
          0.13009600000000002,
          0.13009600000000002
        ],
        [
          0.195144,
          0.195144
        ],
        [
          0.26019200000000003,
          0.26019200000000003
        ],
        [
          0.32524000000000003,
          0.32524000000000003
        ],
        [
          0.390288,
          0.390288
        ],
        [
          0.4553360000000001,
          0.4553360000000001
        ],
        [
          0.5203840000000001,
          0.5203840000000001
        ],
        [
          0.5854320000000001,
          0.5854320000000001
        ],
        [
          0.6504800000000001,
          0.6504800000000001
        ],
        [
          0.715528,
          0.715528
        ],
        [
          0.780576,
          0.780576
        ],
        [
          0.845624,
          0.845624
        ],
        [
          0.9106720000000001,
          0.9106720000000001
        ],
        [
          0.97572,
          0.97572
        ],
        [
          1.0407680000000001,
          1.0407680000000001
        ],
        [
          1.1058160000000001,
          1.1058160000000001
        ],
        [
          1.1708640000000001,
          1.1708640000000001
        ],
        [
          1.2359120000000001,
          1.2359120000000001
        ],
        [
          1.3009600000000001,
          1.3009600000000001
        ],
        [
          1.3660080000000001,
          1.3660080000000001
        ],
        [
          1.431056,
          1.431056
        ],
        [
          1.496104,
          1.496104
        ],
        [
          1.561152,
          1.561152
        ],
        [
          1.6262,
          1.6262
        ],
        [
          1.691248,
          1.691248
        ],
        [
          1.7562960000000003,
          1.7562960000000003
        ],
        [
          1.8213440000000003,
          1.8213440000000003
        ],
        [
          1.886392,
          1.886392
        ],
        [
          1.95144,
          1.95144
        ],
        [
          2.0164880000000003,
          2.0164880000000003
        ],
        [
          2.0815360000000003,
          2.0815360000000003
        ],
        [
          2.1465840000000003,
          2.1465840000000003
        ],
        [
          2.2116320000000003,
          2.2116320000000003
        ],
        [
          2.27668,
          2.27668
        ],
        [
          2.3417280000000003,
          2.3417280000000003
        ],
        [
          2.4067760000000002,
          2.4067760000000002
        ],
        [
          2.4718240000000002,
          2.4718240000000002
        ],
        [
          2.5368720000000002,
          2.5368720000000002
        ],
        [
          2.6019200000000002,
          2.6019200000000002
        ],
        [
          2.666968,
          2.666968
        ],
        [
          2.7320160000000002,
          2.7320160000000002
        ],
        [
          2.797064,
          2.797064
        ],
        [
          2.862112,
          2.862112
        ],
        [
          2.92716,
          2.92716
        ],
        [
          2.992208,
          2.992208
        ],
        [
          3.057256,
          3.057256
        ],
        [
          3.122304,
          3.122304
        ],
        [
          3.187352,
          3.187352
        ],
        [
          3.2524,
          3.2524
        ],
        [
          3.317448,
          3.317448
        ],
        [
          3.382496,
          3.382496
        ],
        [
          3.447544,
          3.447544
        ],
        [
          3.5125920000000006,
          3.5125920000000006
        ],
        [
          3.5776400000000006,
          3.5776400000000006
        ],
        [
          3.6426880000000006,
          3.6426880000000006
        ],
        [
          3.7077359999999997,
          3.7077359999999997
        ],
        [
          3.772784,
          3.772784
        ],
        [
          3.837832,
          3.837832
        ],
        [
          3.90288,
          3.90288
        ],
        [
          3.967928,
          3.967928
        ],
        [
          4.032976000000001,
          4.032976000000001
        ],
        [
          4.0980240000000006,
          4.0980240000000006
        ],
        [
          4.1630720000000005,
          4.1630720000000005
        ],
        [
          4.2281200000000005,
          4.2281200000000005
        ],
        [
          4.2931680000000005,
          4.2931680000000005
        ],
        [
          4.3582160000000005,
          4.3582160000000005
        ],
        [
          4.4232640000000005,
          4.4232640000000005
        ],
        [
          4.488312,
          4.488312
        ],
        [
          4.55336,
          4.55336
        ],
        [
          4.618408,
          4.618408
        ],
        [
          4.6834560000000005,
          4.6834560000000005
        ],
        [
          4.7485040000000005,
          4.7485040000000005
        ],
        [
          4.8135520000000005,
          4.8135520000000005
        ],
        [
          4.8786000000000005,
          4.8786000000000005
        ],
        [
          4.9436480000000005,
          4.9436480000000005
        ],
        [
          5.0086960000000005,
          5.0086960000000005
        ],
        [
          5.0737440000000005,
          5.0737440000000005
        ],
        [
          5.1387920000000005,
          5.1387920000000005
        ],
        [
          5.2038400000000005,
          5.2038400000000005
        ],
        [
          5.2688880000000005,
          5.2688880000000005
        ],
        [
          5.333936,
          5.333936
        ],
        [
          5.3989840000000004,
          5.3989840000000004
        ],
        [
          5.4640320000000004,
          5.4640320000000004
        ],
        [
          5.52908,
          5.52908
        ],
        [
          5.594128,
          5.594128
        ],
        [
          5.659176,
          5.659176
        ],
        [
          5.724224,
          5.724224
        ],
        [
          5.789272,
          5.789272
        ],
        [
          5.85432,
          5.85432
        ],
        [
          5.919368,
          5.919368
        ],
        [
          5.984416,
          5.984416
        ],
        [
          6.049464,
          6.049464
        ],
        [
          6.114512,
          6.114512
        ],
        [
          6.17956,
          6.17956
        ],
        [
          6.244608,
          6.244608
        ],
        [
          6.309656,
          6.309656
        ],
        [
          6.374704,
          6.374704
        ],
        [
          6.439752,
          6.439752
        ],
        [
          6.5048,
          6.5048
        ],
        [
          6.640636000000001,
          6.640636000000001
        ],
        [
          6.776472000000001,
          6.776472000000001
        ],
        [
          6.912308000000001,
          6.912308000000001
        ],
        [
          7.048144000000001,
          7.048144000000001
        ],
        [
          7.183980000000002,
          7.183980000000002
        ],
        [
          7.319816000000001,
          7.319816000000001
        ],
        [
          7.455652000000001,
          7.455652000000001
        ],
        [
          7.591488000000001,
          7.591488000000001
        ],
        [
          7.727324000000001,
          7.727324000000001
        ],
        [
          7.8631600000000015,
          7.8631600000000015
        ],
        [
          7.998996000000002,
          7.998996000000002
        ],
        [
          8.134832000000001,
          8.134832000000001
        ],
        [
          8.270667999999999,
          8.270667999999999
        ],
        [
          8.406504,
          8.406504
        ],
        [
          8.54234,
          8.54234
        ],
        [
          8.678175999999999,
          8.678175999999999
        ],
        [
          8.814011999999998,
          8.814011999999998
        ],
        [
          8.949848,
          8.949848
        ],
        [
          9.085683999999999,
          9.085683999999999
        ],
        [
          9.22152,
          9.22152
        ],
        [
          9.357356,
          9.357356
        ],
        [
          9.493192,
          9.493192
        ],
        [
          9.629028,
          9.629028
        ],
        [
          9.764864,
          9.764864
        ],
        [
          9.9007,
          9.9007
        ],
        [
          10.036536000000002,
          10.036536000000002
        ],
        [
          10.172372000000001,
          10.172372000000001
        ],
        [
          10.308208,
          10.308208
        ],
        [
          10.444044000000002,
          10.444044000000002
        ],
        [
          10.57988,
          10.57988
        ],
        [
          10.715716,
          10.715716
        ],
        [
          10.851552000000002,
          10.851552000000002
        ],
        [
          10.987388000000001,
          10.987388000000001
        ],
        [
          11.123224,
          11.123224
        ],
        [
          11.259060000000002,
          11.259060000000002
        ],
        [
          11.394896000000003,
          11.394896000000003
        ],
        [
          11.530732000000002,
          11.530732000000002
        ],
        [
          11.666567999999998,
          11.666567999999998
        ],
        [
          11.802404,
          11.802404
        ],
        [
          11.93824,
          11.93824
        ],
        [
          12.074076,
          12.074076
        ],
        [
          12.209912,
          12.209912
        ],
        [
          12.345747999999999,
          12.345747999999999
        ],
        [
          12.481583999999998,
          12.481583999999998
        ],
        [
          12.61742,
          12.61742
        ],
        [
          12.753256,
          12.753256
        ],
        [
          12.889092,
          12.889092
        ],
        [
          13.024928,
          13.024928
        ],
        [
          13.160764,
          13.160764
        ],
        [
          13.2966,
          13.2966
        ],
        [
          13.432436000000001,
          13.432436000000001
        ],
        [
          13.568272,
          13.568272
        ],
        [
          13.704108000000002,
          13.704108000000002
        ],
        [
          13.839944000000001,
          13.839944000000001
        ],
        [
          13.97578,
          13.97578
        ],
        [
          14.111616000000001,
          14.111616000000001
        ],
        [
          14.247452000000003,
          14.247452000000003
        ],
        [
          14.383288000000002,
          14.383288000000002
        ],
        [
          14.519124000000001,
          14.519124000000001
        ],
        [
          14.65496,
          14.65496
        ],
        [
          14.790796,
          14.790796
        ],
        [
          14.926632000000001,
          14.926632000000001
        ],
        [
          15.062467999999999,
          15.062467999999999
        ],
        [
          15.198304,
          15.198304
        ],
        [
          15.33414,
          15.33414
        ],
        [
          15.469975999999999,
          15.469975999999999
        ],
        [
          15.605811999999998,
          15.605811999999998
        ],
        [
          15.741647999999998,
          15.741647999999998
        ],
        [
          15.877483999999999,
          15.877483999999999
        ],
        [
          16.01332,
          16.01332
        ],
        [
          16.149155999999998,
          16.149155999999998
        ],
        [
          16.284992,
          16.284992
        ],
        [
          16.420828,
          16.420828
        ],
        [
          16.556664,
          16.556664
        ],
        [
          16.6925,
          16.6925
        ],
        [
          16.828336,
          16.828336
        ],
        [
          16.964172,
          16.964172
        ],
        [
          17.100008000000003,
          17.100008000000003
        ],
        [
          17.235844,
          17.235844
        ],
        [
          17.37168,
          17.37168
        ],
        [
          17.507516,
          17.507516
        ],
        [
          17.643352,
          17.643352
        ],
        [
          17.779188,
          17.779188
        ],
        [
          17.915024000000003,
          17.915024000000003
        ],
        [
          18.05086,
          18.05086
        ],
        [
          18.186696,
          18.186696
        ],
        [
          18.322532000000002,
          18.322532000000002
        ],
        [
          18.458367999999997,
          18.458367999999997
        ],
        [
          18.594203999999998,
          18.594203999999998
        ],
        [
          18.73004,
          18.73004
        ],
        [
          18.865876,
          18.865876
        ],
        [
          19.001711999999998,
          19.001711999999998
        ],
        [
          19.137548,
          19.137548
        ],
        [
          19.273384,
          19.273384
        ],
        [
          19.40922,
          19.40922
        ],
        [
          19.545056,
          19.545056
        ],
        [
          19.680892,
          19.680892
        ],
        [
          19.816728,
          19.816728
        ],
        [
          19.952564000000002,
          19.952564000000002
        ],
        [
          20.0884,
          20.0884
        ]
      ]
    },
    "33": {
      "label": "BF",
      "values": [
        [
          38.52922540243389,
          38.52922540243389
        ],
        [
          38.52923969880624,
          38.52923969880624
        ],
        [
          38.52925399517861,
          38.52925399517861
        ],
        [
          38.52926829155097,
          38.52926829155097
        ],
        [
          38.52928258792333,
          38.52928258792333
        ],
        [
          38.52929688429569,
          38.52929688429569
        ],
        [
          38.52931118066805,
          38.52931118066805
        ],
        [
          38.529325477040416,
          38.529325477040416
        ],
        [
          38.52933977341278,
          38.52933977341278
        ],
        [
          38.52935406978514,
          38.52935406978514
        ],
        [
          38.5293683661575,
          38.5293683661575
        ],
        [
          38.52938266252986,
          38.52938266252986
        ],
        [
          38.529396958902225,
          38.529396958902225
        ],
        [
          38.52941125527459,
          38.52941125527459
        ],
        [
          38.529425551646945,
          38.529425551646945
        ],
        [
          38.52943984801931,
          38.52943984801931
        ],
        [
          38.529454144391664,
          38.529454144391664
        ],
        [
          38.529468440764035,
          38.529468440764035
        ],
        [
          38.5294827371364,
          38.5294827371364
        ],
        [
          38.52949703350876,
          38.52949703350876
        ],
        [
          38.52951132988112,
          38.52951132988112
        ],
        [
          38.52952562625348,
          38.52952562625348
        ],
        [
          38.529539922625844,
          38.529539922625844
        ],
        [
          38.5295542189982,
          38.5295542189982
        ],
        [
          38.52956851537056,
          38.52956851537056
        ],
        [
          38.52958281174292,
          38.52958281174292
        ],
        [
          38.52959710811528,
          38.52959710811528
        ],
        [
          38.529611404487646,
          38.529611404487646
        ],
        [
          38.52962570086001,
          38.52962570086001
        ],
        [
          38.529639997232366,
          38.529639997232366
        ],
        [
          38.52965429360473,
          38.52965429360473
        ],
        [
          38.52966858997709,
          38.52966858997709
        ],
        [
          38.52968288634945,
          38.52968288634945
        ],
        [
          38.52969718272181,
          38.52969718272181
        ],
        [
          38.529711479094175,
          38.529711479094175
        ],
        [
          38.52972577546654,
          38.52972577546654
        ],
        [
          38.5297400718389,
          38.5297400718389
        ],
        [
          38.52975436821126,
          38.52975436821126
        ],
        [
          38.52976866458362,
          38.52976866458362
        ],
        [
          38.529782960955984,
          38.529782960955984
        ],
        [
          38.52979725732834,
          38.52979725732834
        ],
        [
          38.52981155370071,
          38.52981155370071
        ],
        [
          38.52982585007307,
          38.52982585007307
        ],
        [
          38.52984014644543,
          38.52984014644543
        ],
        [
          38.52985444281779,
          38.52985444281779
        ],
        [
          38.52986873919015,
          38.52986873919015
        ],
        [
          38.52988303556252,
          38.52988303556252
        ],
        [
          38.529897331934876,
          38.529897331934876
        ],
        [
          38.52991162830723,
          38.52991162830723
        ],
        [
          38.529925924679596,
          38.529925924679596
        ],
        [
          38.52994022105196,
          38.52994022105196
        ],
        [
          38.52995451742432,
          38.52995451742432
        ],
        [
          38.529968813796685,
          38.529968813796685
        ],
        [
          38.52998311016904,
          38.52998311016904
        ],
        [
          38.529997406541405,
          38.529997406541405
        ],
        [
          38.53001170291377,
          38.53001170291377
        ],
        [
          38.530025999286124,
          38.530025999286124
        ],
        [
          38.53004029565849,
          38.53004029565849
        ],
        [
          38.53005459203085,
          38.53005459203085
        ],
        [
          38.53006888840321,
          38.53006888840321
        ],
        [
          38.53008318477558,
          38.53008318477558
        ],
        [
          38.53009748114793,
          38.53009748114793
        ],
        [
          38.5301117775203,
          38.5301117775203
        ],
        [
          38.53012607389266,
          38.53012607389266
        ],
        [
          38.530140370265016,
          38.530140370265016
        ],
        [
          38.53015466663738,
          38.53015466663738
        ],
        [
          38.53016896300974,
          38.53016896300974
        ],
        [
          38.530183259382106,
          38.530183259382106
        ],
        [
          38.53019755575446,
          38.53019755575446
        ],
        [
          38.530211852126826,
          38.530211852126826
        ],
        [
          38.53022614849919,
          38.53022614849919
        ],
        [
          38.530240444871545,
          38.530240444871545
        ],
        [
          38.53025474124391,
          38.53025474124391
        ],
        [
          38.53026903761627,
          38.53026903761627
        ],
        [
          38.530283333988635,
          38.530283333988635
        ],
        [
          38.530297630361,
          38.530297630361
        ],
        [
          38.530311926733354,
          38.530311926733354
        ],
        [
          38.53032622310572,
          38.53032622310572
        ],
        [
          38.53034051947808,
          38.53034051947808
        ],
        [
          38.530354815850444,
          38.530354815850444
        ],
        [
          38.5303691122228,
          38.5303691122228
        ],
        [
          38.53038340859516,
          38.53038340859516
        ],
        [
          38.53039770496753,
          38.53039770496753
        ],
        [
          38.53041200133988,
          38.53041200133988
        ],
        [
          38.530426297712246,
          38.530426297712246
        ],
        [
          38.53044059408461,
          38.53044059408461
        ],
        [
          38.53045489045697,
          38.53045489045697
        ],
        [
          38.53046918682933,
          38.53046918682933
        ],
        [
          38.5304834832017,
          38.5304834832017
        ],
        [
          38.530497779574056,
          38.530497779574056
        ],
        [
          38.53051207594642,
          38.53051207594642
        ],
        [
          38.530526372318775,
          38.530526372318775
        ],
        [
          38.530540668691145,
          38.530540668691145
        ],
        [
          38.5305549650635,
          38.5305549650635
        ],
        [
          38.53056926143586,
          38.53056926143586
        ],
        [
          38.53058355780823,
          38.53058355780823
        ],
        [
          38.530597854180584,
          38.530597854180584
        ],
        [
          38.53061215055295,
          38.53061215055295
        ],
        [
          38.530626446925304,
          38.530626446925304
        ],
        [
          38.530640743297674,
          38.530640743297674
        ],
        [
          38.53065503967003,
          38.53065503967003
        ],
        [
          38.53070438567275,
          38.53070438567275
        ],
        [
          38.53075373167545,
          38.53075373167545
        ],
        [
          38.53080307767817,
          38.53080307767817
        ],
        [
          38.53085242368089,
          38.53085242368089
        ],
        [
          38.5309017696836,
          38.5309017696836
        ],
        [
          38.530951115686314,
          38.530951115686314
        ],
        [
          38.53100046168903,
          38.53100046168903
        ],
        [
          38.531049807691744,
          38.531049807691744
        ],
        [
          38.53109915369446,
          38.53109915369446
        ],
        [
          38.531148499697174,
          38.531148499697174
        ],
        [
          38.53119784569989,
          38.53119784569989
        ],
        [
          38.531247191702604,
          38.531247191702604
        ],
        [
          38.53129653770532,
          38.53129653770532
        ],
        [
          38.531345883708035,
          38.531345883708035
        ],
        [
          38.531395229710746,
          38.531395229710746
        ],
        [
          38.531444575713465,
          38.531444575713465
        ],
        [
          38.53149392171618,
          38.53149392171618
        ],
        [
          38.53154326771889,
          38.53154326771889
        ],
        [
          38.53159261372161,
          38.53159261372161
        ],
        [
          38.53164195972432,
          38.53164195972432
        ],
        [
          38.53169130572704,
          38.53169130572704
        ],
        [
          38.53174065172975,
          38.53174065172975
        ],
        [
          38.53178999773247,
          38.53178999773247
        ],
        [
          38.53183934373518,
          38.53183934373518
        ],
        [
          38.5318886897379,
          38.5318886897379
        ],
        [
          38.53193803574061,
          38.53193803574061
        ],
        [
          38.53198738174332,
          38.53198738174332
        ],
        [
          38.53203672774604,
          38.53203672774604
        ],
        [
          38.53208607374875,
          38.53208607374875
        ],
        [
          38.53213541975147,
          38.53213541975147
        ],
        [
          38.53218476575418,
          38.53218476575418
        ],
        [
          38.53223411175689,
          38.53223411175689
        ],
        [
          38.53228345775961,
          38.53228345775961
        ],
        [
          38.53233280376232,
          38.53233280376232
        ],
        [
          38.53238214976504,
          38.53238214976504
        ],
        [
          38.53243149576775,
          38.53243149576775
        ],
        [
          38.532480841770465,
          38.532480841770465
        ],
        [
          38.53253018777318,
          38.53253018777318
        ],
        [
          38.5325795337759,
          38.5325795337759
        ],
        [
          38.53262887977861,
          38.53262887977861
        ],
        [
          38.532678225781325,
          38.532678225781325
        ],
        [
          38.53272757178404,
          38.53272757178404
        ],
        [
          38.53277691778676,
          38.53277691778676
        ],
        [
          38.532826263789474,
          38.532826263789474
        ],
        [
          38.532875609792185,
          38.532875609792185
        ],
        [
          38.5329249557949,
          38.5329249557949
        ],
        [
          38.532974301797616,
          38.532974301797616
        ],
        [
          38.53302364780033,
          38.53302364780033
        ],
        [
          38.533072993803046,
          38.533072993803046
        ],
        [
          38.53312233980576,
          38.53312233980576
        ],
        [
          38.53317168580847,
          38.53317168580847
        ],
        [
          38.53322103181119,
          38.53322103181119
        ],
        [
          38.5332703778139,
          38.5332703778139
        ],
        [
          38.53331972381662,
          38.53331972381662
        ],
        [
          38.53336906981933,
          38.53336906981933
        ],
        [
          38.53341841582204,
          38.53341841582204
        ],
        [
          38.53346776182475,
          38.53346776182475
        ],
        [
          38.53351710782748,
          38.53351710782748
        ],
        [
          38.53356645383019,
          38.53356645383019
        ],
        [
          38.5336157998329,
          38.5336157998329
        ],
        [
          38.53366514583562,
          38.53366514583562
        ],
        [
          38.53371449183833,
          38.53371449183833
        ],
        [
          38.53376383784104,
          38.53376383784104
        ],
        [
          38.53381318384376,
          38.53381318384376
        ],
        [
          38.53386252984647,
          38.53386252984647
        ],
        [
          38.533911875849185,
          38.533911875849185
        ],
        [
          38.533961221851904,
          38.533961221851904
        ],
        [
          38.53401056785462,
          38.53401056785462
        ],
        [
          38.534059913857334,
          38.534059913857334
        ],
        [
          38.534109259860045,
          38.534109259860045
        ],
        [
          38.534158605862764,
          38.534158605862764
        ],
        [
          38.534207951865476,
          38.534207951865476
        ],
        [
          38.534257297868194,
          38.534257297868194
        ],
        [
          38.534306643870906,
          38.534306643870906
        ],
        [
          38.53435598987362,
          38.53435598987362
        ],
        [
          38.534405335876336,
          38.534405335876336
        ],
        [
          38.53445468187905,
          38.53445468187905
        ],
        [
          38.534504027881766,
          38.534504027881766
        ],
        [
          38.53455337388448,
          38.53455337388448
        ],
        [
          38.53460271988719,
          38.53460271988719
        ],
        [
          38.53465206588991,
          38.53465206588991
        ],
        [
          38.53470141189263,
          38.53470141189263
        ],
        [
          38.53475075789534,
          38.53475075789534
        ],
        [
          38.53480010389805,
          38.53480010389805
        ],
        [
          38.53484944990077,
          38.53484944990077
        ],
        [
          38.53489879590348,
          38.53489879590348
        ],
        [
          38.53494814190619,
          38.53494814190619
        ],
        [
          38.53499748790891,
          38.53499748790891
        ],
        [
          38.53504683391163,
          38.53504683391163
        ],
        [
          38.53509617991434,
          38.53509617991434
        ],
        [
          38.53514552591705,
          38.53514552591705
        ],
        [
          38.53519487191977,
          38.53519487191977
        ],
        [
          38.53524421792248,
          38.53524421792248
        ],
        [
          38.5352935639252,
          38.5352935639252
        ],
        [
          38.53534290992791,
          38.53534290992791
        ],
        [
          38.535392255930624,
          38.535392255930624
        ],
        [
          38.53544160193334,
          38.53544160193334
        ],
        [
          38.53549094793606,
          38.53549094793606
        ],
        [
          38.535540293938766,
          38.535540293938766
        ],
        [
          38.535589639941485,
          38.535589639941485
        ]
      ]
    }
  },
  "aperture": {
    "fStops": [
      2.92,
      5.6,
      8,
      11,
      16,
      22
    ],
    "maxFNumber": 22
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
      "toSurface": "10"
    },
    {
      "text": "G3",
      "fromSurface": "11",
      "toSurface": "18"
    },
    {
      "text": "G4",
      "fromSurface": "STO",
      "toSurface": "24"
    },
    {
      "text": "G5",
      "fromSurface": "25",
      "toSurface": "32"
    }
  ],
  "checks": {
    "gapSagFrac": 0.95
  },
  "layout": {
    "yScFill": 0.66
  }
} satisfies LensDataV2Input;
export default LENS_DATA;
