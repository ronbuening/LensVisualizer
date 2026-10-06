import type { LensDataInput } from "../../types/optics.js";

/* US 2025/0334778 A1 Numerical Example 2, Sigma Corporation / Ryosuke Sato.
 * Source-native 17 elements / 13 groups, eight aspheric surfaces, unit scale.
 * PUBLISHED focus endpoints: infinity and 1477 mm heading (1477.4622 mm from
 * printed spacings). G2/G4 move objectward. Interpolation is an approximation;
 * no production 0.28 m cam law is inferred. The literal gap pairs leave a
 * -0.0004 mm shift of nominally fixed G3; its cause is unresolved and no
 * gap correction is made.
 * SEMI-DIAMETERS: estimated from Figure 6 (PDF p7 at 300 dpi, 18.36 px/mm from
 * the tabulated vertex spacings) and floor-checked by exact ray trace; not
 * published clear apertures. Concave faces 4 and 29 end where the figure's flat
 * annulus begins (17.7 and 14.7 mm), so L2 and L16 draw a chamfered edge; faces
 * 2 and 9 keep the drawn rim height. G4 follows its drawn 19.3-19.5 mm rim and
 * L17 its 16.3 mm rim. STO location is published; its radius is calibrated
 * from the source F1.24 by exact tracing.
 * Absolute source PgF is converted to dPgF using the engine normal line,
 * 0.6438 - 0.001682*vd. No spectral line indices or glass supplier are invented.
 * No source-listed rear plate or dummy plane exists. No source correction.
 * Factory-prescription identity is unconfirmed; production correlation only.
 */

const LENS_DATA = {
  "key": "sigma-35mm-f12-dg-ii-art",
  "maker": "Sigma",
  "name": "SIGMA 35mm f/1.2 DG II | Art",
  "subtitle": "US 2025/0334778 A1 — Numerical Example 2; production construction correlation",
  "specs": [
    "17 ELEMENTS / 13 GROUPS",
    "DESIGN f = 34.60 mm",
    "DESIGN F/1.24",
    "8 ASPHERICAL SURFACES / 4 ELEMENTS"
  ],
  "focalLengthMarketing": 35,
  "focalLengthDesign": 34.6005730731,
  "apertureMarketing": 1.2,
  "apertureDesign": 1.24,
  "lensMounts": [
    "l-mount",
    "sony-fe"
  ],
  "imageFormat": "135-full-frame",
  "imageCircleMm": 43.26,
  "patentNumber": "US 2025/0334778 A1",
  "patentAuthors": [
    "Ryosuke Sato"
  ],
  "patentAssignees": [
    "Sigma Corporation"
  ],
  "patentYear": 2025,
  "elementCount": 17,
  "groupCount": 13,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.80809,
      "vd": 22.76,
      "fl": 265.451863,
      "glass": "FD225 class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.02318232,
      "role": "Source functional group G1; standalone positive power."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Negative Meniscus",
      "nd": 1.54072,
      "vd": 47.2,
      "fl": -61.024396,
      "glass": "E-FEL2 class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.0033904,
      "role": "Source functional group G2; standalone negative power."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive (2x Asph)",
      "nd": 1.8061,
      "vd": 40.73,
      "fl": 56.06063,
      "glass": "NBFD13 class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": -0.00589214,
      "role": "Source functional group G2; standalone positive power."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Biconcave Negative",
      "nd": 1.48749,
      "vd": 70.44,
      "fl": -51.990103,
      "glass": "FC5 class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.00528008,
      "role": "Source functional group G3; standalone negative power."
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Biconcave Negative",
      "nd": 1.69895,
      "vd": 30.05,
      "fl": -37.039241,
      "glass": "E-FD15 class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.0095441,
      "role": "Source functional group G3; standalone negative power.",
      "cemented": "L5–L6"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Biconvex Positive",
      "nd": 1.94594,
      "vd": 17.98,
      "fl": 56.236396,
      "glass": "FDS18-W class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.04104236,
      "role": "Source functional group G3; standalone positive power.",
      "cemented": "L5–L6"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Biconvex Positive (2x Asph)",
      "nd": 1.77377,
      "vd": 47.17,
      "fl": 41.779603,
      "glass": "M-TAF401 class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": -0.00876006,
      "role": "Source functional group G3; standalone positive power."
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconcave Negative",
      "nd": 1.7888,
      "vd": 28.43,
      "fl": -38.423866,
      "glass": "S-NBH58 class (OHARA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.00491926,
      "role": "Source functional group G3; standalone negative power.",
      "cemented": "L8–L9"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Positive Meniscus",
      "nd": 1.755,
      "vd": 52.32,
      "fl": 60.657377,
      "glass": "TAC6L class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": -0.00849776,
      "role": "Source functional group G3; standalone positive power.",
      "cemented": "L8–L9"
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Negative Meniscus",
      "nd": 1.85451,
      "vd": 25.15,
      "fl": -67.576374,
      "glass": "NBFD25 class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.0088023,
      "role": "Source functional group G3; standalone negative power.",
      "cemented": "L10–L11"
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Biconvex Positive",
      "nd": 1.59282,
      "vd": 68.62,
      "fl": 36.7992,
      "glass": "FCD515 class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.01561884,
      "role": "Source functional group G3; standalone positive power.",
      "cemented": "L10–L11"
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "type": "Biconcave Negative",
      "nd": 1.69895,
      "vd": 30.05,
      "fl": -169.899519,
      "glass": "E-FD15 class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.0095441,
      "role": "Source functional group G4; standalone negative power."
    },
    {
      "id": 13,
      "name": "L13",
      "label": "Element 13",
      "type": "Biconvex Positive (2x Asph)",
      "nd": 1.7645,
      "vd": 49.09,
      "fl": 38.688914,
      "glass": "L-LAH91 class (OHARA coordinate equivalent; supplier unconfirmed)",
      "dPgF": -0.00843062,
      "role": "Source functional group G4; standalone positive power."
    },
    {
      "id": 14,
      "name": "L14",
      "label": "Element 14",
      "type": "Biconvex Positive",
      "nd": 1.755,
      "vd": 52.32,
      "fl": 102.710602,
      "glass": "TAC6L class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": -0.00849776,
      "role": "Source functional group G5; standalone positive power."
    },
    {
      "id": 15,
      "name": "L15",
      "label": "Element 15",
      "type": "Biconvex Positive",
      "nd": 1.98612,
      "vd": 16.48,
      "fl": 43.43823,
      "glass": "FDS16-W class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.04951936,
      "role": "Source functional group G5; standalone positive power.",
      "cemented": "L15–L16"
    },
    {
      "id": 16,
      "name": "L16",
      "label": "Element 16",
      "type": "Biconcave Negative",
      "nd": 1.7888,
      "vd": 28.43,
      "fl": -23.411813,
      "glass": "S-NBH58 class (OHARA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.00491926,
      "role": "Source functional group G5; standalone negative power.",
      "cemented": "L15–L16"
    },
    {
      "id": 17,
      "name": "L17",
      "label": "Element 17",
      "type": "Biconcave Negative (2x Asph)",
      "nd": 1.85135,
      "vd": 40.1,
      "fl": -169.956281,
      "glass": "M-TAFD305 class (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": -0.0068518,
      "role": "Source functional group G5; standalone negative power."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 82.3764,
      "d": 3.9192,
      "nd": 1.80809,
      "elemId": 1,
      "sd": 29.5
    },
    {
      "label": "2",
      "R": 130.8893,
      "d": 7.5696,
      "nd": 1.0,
      "elemId": 0,
      "sd": 29.5
    },
    {
      "label": "3",
      "R": 114.6913,
      "d": 0.9,
      "nd": 1.54072,
      "elemId": 2,
      "sd": 22.5
    },
    {
      "label": "4",
      "R": 25.5542,
      "d": 6.8043,
      "nd": 1.0,
      "elemId": 0,
      "sd": 17.7
    },
    {
      "label": "5A",
      "R": 56.8249,
      "d": 5.0982,
      "nd": 1.8061,
      "elemId": 3,
      "sd": 18.4
    },
    {
      "label": "6A",
      "R": -211.8812,
      "d": 3.5035,
      "nd": 1.0,
      "elemId": 0,
      "sd": 18.4
    },
    {
      "label": "7",
      "R": -148.2676,
      "d": 1.1795,
      "nd": 1.48749,
      "elemId": 4,
      "sd": 14.5
    },
    {
      "label": "8",
      "R": 30.65,
      "d": 7.5007,
      "nd": 1.0,
      "elemId": 0,
      "sd": 14.5
    },
    {
      "label": "9",
      "R": -36.554,
      "d": 1.7147,
      "nd": 1.69895,
      "elemId": 5,
      "sd": 18.0
    },
    {
      "label": "10",
      "R": 90.4412,
      "d": 4.6177,
      "nd": 1.94594,
      "elemId": 6,
      "sd": 18.0
    },
    {
      "label": "11",
      "R": -125.9694,
      "d": 0.8682,
      "nd": 1.0,
      "elemId": 0,
      "sd": 18.5
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 2.1148,
      "nd": 1.0,
      "elemId": 0,
      "sd": 18.00030413540412
    },
    {
      "label": "13A",
      "R": 90.0023,
      "d": 9.1378,
      "nd": 1.77377,
      "elemId": 7,
      "sd": 21.5
    },
    {
      "label": "14A",
      "R": -48.2139,
      "d": 0.2057,
      "nd": 1.0,
      "elemId": 0,
      "sd": 21.5
    },
    {
      "label": "15",
      "R": -138.5636,
      "d": 1.0225,
      "nd": 1.7888,
      "elemId": 8,
      "sd": 21.1
    },
    {
      "label": "16",
      "R": 38.9207,
      "d": 6.5952,
      "nd": 1.755,
      "elemId": 9,
      "sd": 21.4
    },
    {
      "label": "17",
      "R": 240.3404,
      "d": 0.6848,
      "nd": 1.0,
      "elemId": 0,
      "sd": 21.4
    },
    {
      "label": "18",
      "R": 52.3045,
      "d": 1.0136,
      "nd": 1.85451,
      "elemId": 10,
      "sd": 21.5
    },
    {
      "label": "19",
      "R": 27.2,
      "d": 12.8779,
      "nd": 1.59282,
      "elemId": 11,
      "sd": 20.8
    },
    {
      "label": "20",
      "R": -90.7789,
      "d": 6.9518,
      "nd": 1.0,
      "elemId": 0,
      "sd": 20.8
    },
    {
      "label": "21",
      "R": -848.1912,
      "d": 0.9,
      "nd": 1.69895,
      "elemId": 12,
      "sd": 19.5
    },
    {
      "label": "22",
      "R": 138.144,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 19.5
    },
    {
      "label": "23A",
      "R": 46.2651,
      "d": 7.6904,
      "nd": 1.7645,
      "elemId": 13,
      "sd": 19.3
    },
    {
      "label": "24A",
      "R": -76.0969,
      "d": 2.2921,
      "nd": 1.0,
      "elemId": 0,
      "sd": 19.3
    },
    {
      "label": "25",
      "R": 296.4918,
      "d": 3.4967,
      "nd": 1.755,
      "elemId": 14,
      "sd": 18.9
    },
    {
      "label": "26",
      "R": -104.4793,
      "d": 0.1532,
      "nd": 1.0,
      "elemId": 0,
      "sd": 18.9
    },
    {
      "label": "27",
      "R": 820.4806,
      "d": 4.6992,
      "nd": 1.98612,
      "elemId": 15,
      "sd": 17.8
    },
    {
      "label": "28",
      "R": -45.0663,
      "d": 1.0168,
      "nd": 1.7888,
      "elemId": 16,
      "sd": 17.8
    },
    {
      "label": "29",
      "R": 31.6,
      "d": 5.3461,
      "nd": 1.0,
      "elemId": 0,
      "sd": 14.7
    },
    {
      "label": "30A",
      "R": -169.2643,
      "d": 1.2141,
      "nd": 1.85135,
      "elemId": 17,
      "sd": 16.3
    },
    {
      "label": "31A",
      "R": 1000.0,
      "d": 17.4972,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16.3
    }
  ],
  "asph": {
    "5A": {
      "K": 0.0,
      "A4": -1.99816e-06,
      "A6": -1.32897e-09,
      "A8": -2.08157e-11,
      "A10": 3.9595e-15,
      "A12": 0.0,
      "A14": 0
    },
    "6A": {
      "K": 0.0,
      "A4": -4.72277e-07,
      "A6": -3.3885e-10,
      "A8": -2.11984e-11,
      "A10": 2.3176e-14,
      "A12": 0.0,
      "A14": 0
    },
    "13A": {
      "K": 0.0,
      "A4": -1.03559e-06,
      "A6": -1.87709e-09,
      "A8": -7.13483e-12,
      "A10": 1.19593e-14,
      "A12": 0.0,
      "A14": 0
    },
    "14A": {
      "K": 0.0,
      "A4": 7.7168e-07,
      "A6": -1.40925e-09,
      "A8": -8.22545e-12,
      "A10": 9.14549e-15,
      "A12": 0.0,
      "A14": 0
    },
    "23A": {
      "K": 0.0,
      "A4": -1.71933e-06,
      "A6": 7.19596e-10,
      "A8": -1.65373e-11,
      "A10": 1.66871e-14,
      "A12": 0.0,
      "A14": 0
    },
    "24A": {
      "K": 0.0,
      "A4": 3.82753e-06,
      "A6": -5.16977e-09,
      "A8": -8.71093e-12,
      "A10": 1.35974e-14,
      "A12": 0.0,
      "A14": 0
    },
    "30A": {
      "K": 0.0,
      "A4": 2.91423e-05,
      "A6": -2.82416e-07,
      "A8": 6.89447e-10,
      "A10": -5.1977e-13,
      "A12": 0.0,
      "A14": 0
    },
    "31A": {
      "K": 0.0,
      "A4": 4.31949e-05,
      "A6": -2.72422e-07,
      "A8": 7.46965e-10,
      "A10": -4.3181e-13,
      "A12": -6.05302e-16,
      "A14": 0
    }
  },
  "var": {
    "2": [
      7.5696,
      7.0438
    ],
    "6A": [
      3.5035,
      4.0289
    ],
    "20": [
      6.9518,
      6.3311
    ],
    "24A": [
      2.2921,
      2.9132
    ]
  },
  "focusPositions": [
    0,
    1
  ],
  "varLabels": [
    [
      "2",
      "D2"
    ],
    [
      "6A",
      "D6"
    ],
    [
      "20",
      "D20"
    ],
    [
      "24A",
      "D24"
    ]
  ],
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "2"
    },
    {
      "text": "G2",
      "fromSurface": "3",
      "toSurface": "6A"
    },
    {
      "text": "G3",
      "fromSurface": "7",
      "toSurface": "20"
    },
    {
      "text": "G4",
      "fromSurface": "21",
      "toSurface": "24A"
    },
    {
      "text": "G5",
      "fromSurface": "25",
      "toSurface": "31A"
    }
  ],
  "doublets": [
    {
      "text": "L5–L6",
      "fromSurface": "9",
      "toSurface": "11"
    },
    {
      "text": "L8–L9",
      "fromSurface": "15",
      "toSurface": "17"
    },
    {
      "text": "L10–L11",
      "fromSurface": "18",
      "toSurface": "20"
    },
    {
      "text": "L15–L16",
      "fromSurface": "27",
      "toSurface": "29"
    }
  ],
  "closeFocusM": 1.4774622,
  "finiteConjugates": [
    {
      "focusT": 1,
      "zoomT": 0,
      "objectDistanceMm": 1348.7267,
      "distanceReference": "first-surface",
      "source": "US 2025/0334778 A1, Numerical Example 2, PDF p43, Variable distance data: d0 and d2/d6/d20/d24/BF."
    }
  ],
  "focusDescription": "Published two-group inner focus: G2 and G4 move objectward to the 1.4774622 m test state; G3 is nominally fixed but the source gaps retain a -0.0004 mm discrepancy; intermediate gaps are linear interpolation, with no extrapolation to the marketed 0.28 m MFD.",
  "nominalFno": 1.24,
  "fstopSeries": [
    1.24,
    1.4,
    2,
    2.8,
    4,
    5.6,
    8,
    11,
    16
  ],
  "maxFstop": 16,
  "apertureBlades": 11,
  "apertureBladeRoundedness": 1,
  "yScFill": 0.35
} satisfies LensDataInput;

export default LENS_DATA;
