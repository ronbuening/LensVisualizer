import type { LensDataInput } from "../../types/optics.js";

/**
 * JP 2025-182227 A, Numerical Example 1. Native mm; all source R/d/nd/K/A4–A20 retained.
 * Asphere equation: ¶0067 prints the conic term without its square root, a typesetting
 * error. The model uses the standard square-root conic form, which reproduces the patent's
 * own spherical-aberration plots; the literal form does not (owner ruling, 2026-10-16).
 * Glass: each element's printed nd/νd/PgF matches one HOYA or OHARA catalog glass exactly;
 * dPgF = printed PgF − the engine's normal line.
 * Semi-diameters: the source prints no surface or iris diameters. Front-group rims are
 * estimated from Figure 1; rear-group rims (14A–27) are the least values that pass the F2.91
 * axial beam at every zoom station. Surfaces 28–32A follow Figure 1's optical rims.
 * The last singlet and cemented pair use 18.3/17.4 mm, excluding brackets and flanges. The iris
 * schedule is calibrated to the source F2.91 through zoomApertureModel.
 * Zoom: only the three source infinity stations are published. Linear interpolation
 * between them leaves up to 0.98 mm of defocus at intermediate focal lengths; accepted
 * by the owner (2026-10-16). No finite-focus law or camera stack is invented.
 */
const LENS_DATA = {
  "key": "sigma-28-105f28-dg-dn-art",
  "maker": "Sigma",
  "name": "SIGMA 28-105mm f/2.8 DG DN Art",
  "subtitle": "JP 2025-182227 A — Numerical Example 1",
  "specs": [
    "18 ELEMENTS / 13 GROUPS",
    "SOURCE 28.55–102.37 mm",
    "SOURCE F2.91",
    "9 ASPHERICAL SURFACES / 5 ELEMENTS"
  ],
  "focalLengthMarketing": [
    28,
    105
  ],
  "focalLengthDesign": [
    28.55,
    102.37
  ],
  "apertureMarketing": 2.8,
  "apertureDesign": 2.91,
  "lensMounts": [
    "l-mount",
    "sony-fe"
  ],
  "imageFormat": "135-full-frame",
  "patentNumber": "JP 2025-182227 A",
  "patentAuthors": [
    "Takeshi Umeda"
  ],
  "patentAssignees": [
    "Sigma Corporation"
  ],
  "patentYear": 2025,
  "elementCount": 18,
  "groupCount": 13,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.84666,
      "vd": 23.78,
      "indexReference": "d",
      "fl": -190.851174,
      "glass": "FDS90 (HOYA; nd, νd and printed PgF match; supplier unconfirmed)",
      "dPgF": 0.015397959999999933,
      "role": "Source element at surfaces 1–2; standalone negative power.",
      "cemented": "D1"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.437,
      "vd": 95.1,
      "indexReference": "d",
      "fl": 184.808837,
      "glass": "FCD100 (HOYA; nd, νd and printed PgF match; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "Inferred from the printed partial dispersion and the FCD100 spectral proxy (PgF 0.5336). The corresponding production position is FLD; this does not establish the original supplier or melt.",
      "dPgF": 0.04975819999999992,
      "role": "Source element at surfaces 2–3; standalone positive power.",
      "cemented": "D1"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.85033,
      "vd": 42.7,
      "indexReference": "d",
      "fl": 125.997717,
      "glass": "TAFD34 (HOYA; nd, νd and printed PgF match; supplier unconfirmed)",
      "dPgF": -0.007378600000000013,
      "role": "Source element at surfaces 4–5; standalone positive power."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Negative Meniscus (2× Asph)",
      "nd": 1.77377,
      "vd": 47.17,
      "indexReference": "d",
      "fl": -37.206761,
      "glass": "M-TAF401 (HOYA; nd, νd and printed PgF match; supplier unconfirmed)",
      "dPgF": -0.00876006000000007,
      "role": "Source element at surfaces 6–7; standalone negative power."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.7725,
      "vd": 49.63,
      "indexReference": "d",
      "fl": -27.799118,
      "glass": "TAF1 (HOYA; nd, νd and printed PgF match; supplier unconfirmed)",
      "dPgF": -0.00992234000000003,
      "role": "Source element at surfaces 8–9; standalone negative power.",
      "cemented": "D2"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.7888,
      "vd": 28.43,
      "indexReference": "d",
      "fl": 29.508366,
      "glass": "S-NBH58 (OHARA; nd, νd and printed PgF match; supplier unconfirmed)",
      "dPgF": 0.004919259999999981,
      "role": "Source element at surfaces 9–10; standalone positive power.",
      "cemented": "D2"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Negative Meniscus (2× Asph)",
      "nd": 1.6935,
      "vd": 53.18,
      "indexReference": "d",
      "fl": -93.301355,
      "glass": "L-LAL13 (OHARA; nd, νd and printed PgF match; supplier unconfirmed)",
      "dPgF": -0.006151240000000002,
      "role": "Source element at surfaces 11–12; standalone negative power."
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive (2× Asph)",
      "nd": 1.6935,
      "vd": 53.18,
      "indexReference": "d",
      "fl": 59.189042,
      "glass": "L-LAL13 (OHARA; nd, νd and printed PgF match; supplier unconfirmed)",
      "dPgF": -0.006151240000000002,
      "role": "Source element at surfaces 14–15; standalone positive power."
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Negative Meniscus",
      "nd": 1.72342,
      "vd": 37.99,
      "indexReference": "d",
      "fl": -123.347659,
      "glass": "BAFD8 (HOYA; nd, νd and printed PgF match; supplier unconfirmed)",
      "dPgF": 0.0020991799999999783,
      "role": "Source element at surfaces 16–17; standalone negative power."
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Biconvex Positive",
      "nd": 1.497,
      "vd": 81.61,
      "indexReference": "d",
      "fl": 62.245901,
      "glass": "FCD1 (HOYA; nd, νd and printed PgF match; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "Inferred from the printed partial dispersion and the FCD1 spectral proxy (PgF 0.5389). The corresponding production position is SLD; this does not establish the original supplier or melt.",
      "dPgF": 0.03236801999999994,
      "role": "Source element at surfaces 18–19; standalone positive power."
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Biconcave Negative",
      "nd": 1.73037,
      "vd": 32.23,
      "indexReference": "d",
      "fl": -46.180941,
      "glass": "NBFD32 (HOYA; nd, νd and printed PgF match; supplier unconfirmed)",
      "dPgF": 0.00031085999999991287,
      "role": "Source element at surfaces 20–21; standalone negative power.",
      "cemented": "D3"
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "type": "Biconvex Positive",
      "nd": 1.437,
      "vd": 95.1,
      "indexReference": "d",
      "fl": 71.988498,
      "glass": "FCD100 (HOYA; nd, νd and printed PgF match; supplier unconfirmed)",
      "apd": "inferred",
      "apdNote": "Inferred from the printed partial dispersion and the FCD100 spectral proxy (PgF 0.5336). The corresponding production position is FLD; this does not establish the original supplier or melt.",
      "dPgF": 0.04975819999999992,
      "role": "Source element at surfaces 21–22; standalone positive power.",
      "cemented": "D3"
    },
    {
      "id": 13,
      "name": "L13",
      "label": "Element 13",
      "type": "Biconvex Positive (2× Asph)",
      "nd": 1.59201,
      "vd": 67.02,
      "indexReference": "d",
      "fl": 51.844879,
      "glass": "M-PCD51 (HOYA; nd, νd and printed PgF match; supplier unconfirmed)",
      "dPgF": 0.004727640000000033,
      "role": "Source element at surfaces 23–24; standalone positive power."
    },
    {
      "id": 14,
      "name": "L14",
      "label": "Element 14",
      "type": "Biconvex Positive",
      "nd": 1.9011,
      "vd": 27.06,
      "indexReference": "d",
      "fl": 90.512768,
      "glass": "NBFD27 (HOYA; nd, νd and printed PgF match; supplier unconfirmed)",
      "dPgF": 0.008914919999999937,
      "role": "Source element at surfaces 25–26; standalone positive power.",
      "cemented": "D4"
    },
    {
      "id": 15,
      "name": "L15",
      "label": "Element 15",
      "type": "Biconcave Negative",
      "nd": 1.6968,
      "vd": 55.46,
      "indexReference": "d",
      "fl": -40.392606,
      "glass": "LAC14 (HOYA; nd, νd and printed PgF match; supplier unconfirmed)",
      "dPgF": -0.007916280000000109,
      "role": "Source element at surfaces 26–27; standalone negative power.",
      "cemented": "D4"
    },
    {
      "id": 16,
      "name": "L16",
      "label": "Element 16",
      "type": "Biconvex Positive",
      "nd": 1.61997,
      "vd": 63.88,
      "indexReference": "d",
      "fl": 50.139746,
      "glass": "PCD40 (HOYA; nd, νd and printed PgF match; supplier unconfirmed)",
      "dPgF": 0.00624615999999989,
      "role": "Source element at surfaces 28–29; standalone positive power."
    },
    {
      "id": 17,
      "name": "L17",
      "label": "Element 17",
      "type": "Biconcave Negative",
      "nd": 1.91082,
      "vd": 35.25,
      "indexReference": "d",
      "fl": -21.758108,
      "glass": "TAFD35 (HOYA; nd, νd and printed PgF match; supplier unconfirmed)",
      "dPgF": -0.0023094999999999644,
      "role": "Source element at surfaces 30–31; standalone negative power.",
      "cemented": "D5"
    },
    {
      "id": 18,
      "name": "L18",
      "label": "Element 18",
      "type": "Positive Meniscus (1× Asph)",
      "nd": 1.68948,
      "vd": 31.02,
      "indexReference": "d",
      "fl": 42.413846,
      "glass": "L-TIM28 (OHARA; nd, νd and printed PgF match; supplier unconfirmed)",
      "dPgF": 0.007075639999999939,
      "role": "Source element at surfaces 31–32; standalone positive power.",
      "cemented": "D5"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 360.2963,
      "d": 1.8,
      "nd": 1.84666,
      "elemId": 1,
      "sd": 35
    },
    {
      "label": "2",
      "R": 111.3,
      "d": 7.9378,
      "nd": 1.437,
      "elemId": 2,
      "sd": 35
    },
    {
      "label": "3",
      "R": -287.9574,
      "d": 0.2,
      "nd": 1.0,
      "elemId": 0,
      "sd": 35
    },
    {
      "label": "4",
      "R": 76.2922,
      "d": 5.6161,
      "nd": 1.85033,
      "elemId": 3,
      "sd": 31
    },
    {
      "label": "5",
      "R": 256.0148,
      "d": 1.5,
      "nd": 1.0,
      "elemId": 0,
      "sd": 31
    },
    {
      "label": "6A",
      "R": 123.0252,
      "d": 1.2084,
      "nd": 1.77377,
      "elemId": 4,
      "sd": 21
    },
    {
      "label": "7A",
      "R": 23.23,
      "d": 10.4,
      "nd": 1.0,
      "elemId": 0,
      "sd": 15.2
    },
    {
      "label": "8",
      "R": -42.7806,
      "d": 1.0,
      "nd": 1.7725,
      "elemId": 5,
      "sd": 15.2
    },
    {
      "label": "9",
      "R": 43.5593,
      "d": 6.7372,
      "nd": 1.7888,
      "elemId": 6,
      "sd": 15.2
    },
    {
      "label": "10",
      "R": -46.5779,
      "d": 3.8,
      "nd": 1.0,
      "elemId": 0,
      "sd": 15.2
    },
    {
      "label": "11A",
      "R": -22.4247,
      "d": 1.0,
      "nd": 1.6935,
      "elemId": 7,
      "sd": 15
    },
    {
      "label": "12A",
      "R": -34.9452,
      "d": 28.352,
      "nd": 1.0,
      "elemId": 0,
      "sd": 15
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 1.5,
      "nd": 1.0,
      "elemId": 0,
      "sd": 11.02034534615612
    },
    {
      "label": "14A",
      "R": 53.692,
      "d": 4.9623,
      "nd": 1.6935,
      "elemId": 8,
      "sd": 16.8
    },
    {
      "label": "15A",
      "R": -167.7039,
      "d": 8.265,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16.8
    },
    {
      "label": "16",
      "R": -37.5017,
      "d": 1.0,
      "nd": 1.72342,
      "elemId": 9,
      "sd": 17.2
    },
    {
      "label": "17",
      "R": -65.4124,
      "d": 7.817,
      "nd": 1.0,
      "elemId": 0,
      "sd": 17.2
    },
    {
      "label": "18",
      "R": 69.4007,
      "d": 7.6084,
      "nd": 1.497,
      "elemId": 10,
      "sd": 18.2
    },
    {
      "label": "19",
      "R": -53.786,
      "d": 1.6515,
      "nd": 1.0,
      "elemId": 0,
      "sd": 18.2
    },
    {
      "label": "20",
      "R": -255.9684,
      "d": 1.0,
      "nd": 1.73037,
      "elemId": 11,
      "sd": 17.4
    },
    {
      "label": "21",
      "R": 38.9123,
      "d": 6.9842,
      "nd": 1.437,
      "elemId": 12,
      "sd": 17.4
    },
    {
      "label": "22",
      "R": -155.2762,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 17.4
    },
    {
      "label": "23A",
      "R": 50.66,
      "d": 6.2967,
      "nd": 1.59201,
      "elemId": 13,
      "sd": 16.9
    },
    {
      "label": "24A",
      "R": -74.2726,
      "d": 2.3042,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16.9
    },
    {
      "label": "25",
      "R": 260.896,
      "d": 2.4925,
      "nd": 1.9011,
      "elemId": 14,
      "sd": 14.1
    },
    {
      "label": "26",
      "R": -118.1175,
      "d": 1.0,
      "nd": 1.6968,
      "elemId": 15,
      "sd": 14.1
    },
    {
      "label": "27",
      "R": 37.0787,
      "d": 4.4853,
      "nd": 1.0,
      "elemId": 0,
      "sd": 14.1
    },
    {
      "label": "28",
      "R": 34.9425,
      "d": 7.07,
      "nd": 1.61997,
      "elemId": 16,
      "sd": 18.3
    },
    {
      "label": "29",
      "R": -259.785,
      "d": 1.9747,
      "nd": 1.0,
      "elemId": 0,
      "sd": 18.3
    },
    {
      "label": "30",
      "R": -500.0,
      "d": 2.0525,
      "nd": 1.91082,
      "elemId": 17,
      "sd": 17.4
    },
    {
      "label": "31",
      "R": 20.676,
      "d": 8.4087,
      "nd": 1.68948,
      "elemId": 18,
      "sd": 17.4
    },
    {
      "label": "32A",
      "R": 58.8604,
      "d": 27.8972,
      "nd": 1.0,
      "elemId": 0,
      "sd": 17.4
    }
  ],
  // Evaluated with the standard square-root conic equation; ¶0067 omits the root (see header).
  "asph": {
    "6A": {
      "K": 0.0,
      "A4": 1.85091e-07,
      "A6": 4.26604e-08,
      "A8": -2.21868e-10,
      "A10": 6.01194e-13,
      "A12": -4.78015e-16,
      "A14": -7.32009e-19,
      "A16": -8.78114e-22,
      "A18": 7.22224e-24,
      "A20": -6.75429e-27
    },
    "7A": {
      "K": -1.0,
      "A4": 8.62972e-06,
      "A6": 8.6459e-08,
      "A8": -6.91508e-10,
      "A10": 6.99967e-12,
      "A12": -3.41025e-14,
      "A14": -3.35498e-17,
      "A16": 1.25237e-18,
      "A18": -5.285e-21,
      "A20": 7.25132e-24
    },
    "11A": {
      "K": -1.0,
      "A4": 2.24402e-05,
      "A6": -1.47419e-07,
      "A8": 3.52063e-10,
      "A10": 1.85113e-13,
      "A12": -1.32511e-15,
      "A14": -7.28653e-18,
      "A16": -1.96704e-20,
      "A18": 1.21596e-22,
      "A20": 5.37674e-26
    },
    "12A": {
      "K": 0.0,
      "A4": 2.70163e-05,
      "A6": -1.5551e-07,
      "A8": 4.98439e-10,
      "A10": -6.833e-13,
      "A12": -2.83775e-16,
      "A14": -1.19661e-18,
      "A16": -7.57143e-21,
      "A18": 9.37658e-25,
      "A20": 1.60524e-25
    },
    "14A": {
      "K": 0.0,
      "A4": -1.27386e-06,
      "A6": -5.12422e-09,
      "A8": 4.41803e-11,
      "A10": -1.61037e-13,
      "A12": 5.07015e-17,
      "A14": -2.39015e-19,
      "A16": 2.17445e-21,
      "A18": 8.42503e-24,
      "A20": -1.61985e-26
    },
    "15A": {
      "K": 0.0,
      "A4": 5.74097e-07,
      "A6": -5.16686e-09,
      "A8": 3.82098e-11,
      "A10": -1.08565e-13,
      "A12": -2.0324e-16,
      "A14": 4.83533e-19,
      "A16": 1.76105e-21,
      "A18": 4.40341e-24,
      "A20": -6.76496e-27
    },
    "23A": {
      "K": 0.0,
      "A4": -3.14483e-06,
      "A6": -1.98499e-10,
      "A8": -5.3062e-12,
      "A10": -2.87197e-14,
      "A12": 1.08836e-16,
      "A14": -4.94374e-19,
      "A16": -8.27912e-22,
      "A18": 1.11878e-23,
      "A20": -2.44641e-26
    },
    "24A": {
      "K": 0.0,
      "A4": 2.83152e-06,
      "A6": 8.67123e-10,
      "A8": -1.06632e-11,
      "A10": -4.64511e-14,
      "A12": 1.87428e-16,
      "A14": -1.02921e-19,
      "A16": -6.14286e-22,
      "A18": -1.08374e-25,
      "A20": -2.83106e-27
    },
    "32A": {
      "K": 0.0,
      "A4": 1.16496e-06,
      "A6": -7.65792e-09,
      "A8": -8.49581e-12,
      "A10": 7.86908e-13,
      "A12": -6.73161e-15,
      "A14": 2.04431e-17,
      "A16": 8.18003e-21,
      "A18": -1.79202e-22,
      "A20": 2.86343e-25
    }
  },
  "var": {
    "5": [
      [
        1.5,
        1.5
      ],
      [
        19.0108,
        19.0108
      ],
      [
        43.1924,
        43.1924
      ]
    ],
    "12A": [
      [
        28.352,
        28.352
      ],
      [
        15.6537,
        15.6537
      ],
      [
        1.5,
        1.5
      ]
    ],
    "17": [
      [
        7.817,
        7.817
      ],
      [
        2.8418,
        2.8418
      ],
      [
        1.5,
        1.5
      ]
    ],
    "24A": [
      [
        2.3042,
        2.3042
      ],
      [
        2.1,
        2.1
      ],
      [
        5.7383,
        5.7383
      ]
    ],
    "27": [
      [
        4.4853,
        4.4853
      ],
      [
        22.3631,
        22.3631
      ],
      [
        34.2202,
        34.2202
      ]
    ]
  },
  "varLabels": [
    [
      "5",
      "D5"
    ],
    [
      "12A",
      "D12"
    ],
    [
      "17",
      "D17"
    ],
    [
      "24A",
      "D24"
    ],
    [
      "27",
      "D27"
    ]
  ],
  "zoomPositions": [
    28.55,
    50,
    102.37
  ],
  "zoomLabels": [
    "Wide",
    "Tele"
  ],
  "zoomApertureModel": "from-nominal-fno",
  "nominalFno": 2.91,
  "fstopSeries": [
    2.91,
    4,
    5.6,
    8,
    11,
    16,
    22
  ],
  "maxFstop": 22,
  "closeFocusM": 0.4,
  "focusDescription": "The patent describes G5 moving toward the image for closer focus, but provides only infinity-focus zoom prescriptions. The production lens focuses to 0.40 m. Intermediate zoom positions are interpolated; they do not establish the production zoom or focus mechanism.",
  "apertureBlades": 12,
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "5"
    },
    {
      "text": "G2",
      "fromSurface": "6A",
      "toSurface": "12A"
    },
    {
      "text": "G3",
      "fromSurface": "STO",
      "toSurface": "17"
    },
    {
      "text": "G4",
      "fromSurface": "18",
      "toSurface": "24A"
    },
    {
      "text": "G5",
      "fromSurface": "25",
      "toSurface": "27"
    },
    {
      "text": "G6",
      "fromSurface": "28",
      "toSurface": "32A"
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
    },
    {
      "text": "D3",
      "fromSurface": "20",
      "toSurface": "22"
    },
    {
      "text": "D4",
      "fromSurface": "25",
      "toSurface": "27"
    },
    {
      "text": "D5",
      "fromSurface": "30",
      "toSurface": "32A"
    }
  ],
  "yScFill": 0.3
} satisfies LensDataInput;

export default LENS_DATA;
