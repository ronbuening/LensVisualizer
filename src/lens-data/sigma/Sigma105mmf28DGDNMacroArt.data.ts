import type { LensDataInput } from "../../types/optics.js";
/**
 * JP2021148808A Numerical Example 1. Source-native spherical prescription; scale 1.
 * FIXED_IRIS_DIAGNOSTIC_V1: limited fixed-iris prescription/geometry visualization.
 * 17 elements / 12 groups; all three published focus states are retained unchanged.
 * No source plate, dummy-plane omission or synthetic camera stack. Stop 22 -> STO.
 * Physical iris 9.611937886 mm is inferred from exact infinity F2.90 calibration.
 * Semi-diameters are model estimates from JP2021148808A FIG. 1 (PDF p. 30, infinity
 * section; 0.1138 mm/px at 600 dpi from the surface 1 to image-plane span), checked by
 * traced clearance; they are not published clear apertures. Rims follow the drawn
 * element heights. L16 is drawn as the figure's square-edged 15.0 mm blank on both
 * faces: FIG. 1 ends the concave surface 27 curve at a flat annulus near 13.1 mm,
 * which the straight-edge renderer cannot show, so the outer 1.7 mm of surface 27 is
 * blank rather than clear aperture (no in-format meridional ray passes it above
 * 13.3 mm). L17 follows its drawn 16.6 mm rim. CL3 (14.0) and L13 (12.0) stay 0.3 to
 * 0.45 mm above their drawn rims because in-format finite-focus rays use that height.
 * Source finite F4.32/F5.73 are not reproduced: admitted cones are about F4.014/F5.226.
 * Close-focus exposure, illumination and full-pupil fidelity are not verified.
 * Current UI pupil/focusK fan and effective-F/Summary readouts have different,
 * approximate semantics; no additional bellows factor is applied to exact working NA.
 * No focus-indexed iris law, engine change, source repair or geometry exception.
 * Between published focus stations, linear gap interpolation is a visualization
 * approximation, not a measured production cam law. Original source optics retained.
 * Every absolute source PgF is converted to the runtime normal line in dPgF.
 * APD tags: L4 (G2LPL) and L10 (G2LPH) are the glasses the patent itself describes as
 * anomalous partial dispersion (conditions 4 and 7); L16 is inferred from its
 * FCD705-class coordinates. Sigma lists one SLD element without naming its slot.
 * Glass labels name the HOYA catalog glass whose nd, vd and PgF reproduce each source row;
 * they are coordinate equivalents and do not assert the production supplier or melt.
 * Yuki Ueda is the public transliteration of the source inventor 植田 裕輝.
 */
const LENS_DATA = {
  "key": "sigma-105mm-f28-dg-dn-macro-art",
  "maker": "Sigma",
  "name": "SIGMA 105mm f/2.8 DG DN MACRO | Art",
  "subtitle": "JP 2021-148808 A · Numerical Example 1 · Construction correlation",
  "specs": [
    "17 ELEMENTS / 12 GROUPS",
    "DESIGN f = 103.48 mm",
    "DESIGN F/2.90",
    "2ω = 23.28°",
    "ALL SPHERICAL"
  ],
  "focalLengthMarketing": 105,
  "focalLengthDesign": 103.47677047771677,
  "apertureMarketing": 2.8,
  "apertureDesign": 2.9,
  "lensMounts": [
    "l-mount",
    "sony-fe"
  ],
  "imageFormat": "135-full-frame",
  "patentNumber": "JP 2021-148808 A",
  "patentAuthors": [
    "Yuki Ueda"
  ],
  "patentAssignees": [
    "Sigma Corporation"
  ],
  "patentYear": 2021,
  "elementCount": 17,
  "groupCount": 12,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Negative Meniscus",
      "nd": 1.51742,
      "vd": 52.15,
      "fl": -666.55489075,
      "glass": "E-CF6 (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.0029163,
      "role": "Fixed front group G1; standalone element power is not an isolated in-situ aberration contribution."
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Biconvex Positive",
      "nd": 1.8042,
      "vd": 46.5,
      "fl": 279.76111793,
      "glass": "TAF3D (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": -0.008287,
      "role": "Fixed front group G1; standalone element power is not an isolated in-situ aberration contribution."
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Biconvex Positive",
      "nd": 2.0509,
      "vd": 26.94,
      "fl": 88.25667388,
      "glass": "TAFD65 (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.00671308,
      "role": "Moving positive group G2; standalone element power is not an isolated in-situ aberration contribution."
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4 (G2LPL)",
      "type": "Biconvex Positive",
      "nd": 1.59282,
      "vd": 68.62,
      "fl": 58.06113265,
      "glass": "FCD515 (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.01561884,
      "apd": "patent",
      "apdNote": "Patent G2LPL: low-dispersion glass with anomalous partial dispersion (¶0053–0058); condition (4) ΔPgF > 0.0050, printed 0.0192 on the patent normal line. Source PgF 0.5440; runtime dPgF +0.01562.",
      "role": "Moving positive group G2, front of CL1; patent G2LPL, the low-dispersion anomalous-partial-dispersion positive lens of conditions (4)–(5). Standalone element power is not an isolated in-situ aberration contribution.",
      "cemented": "CL1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5 (G2LN)",
      "type": "Biconcave Negative",
      "nd": 1.85451,
      "vd": 25.15,
      "fl": -62.25679754,
      "glass": "NBFD25 (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.0088023,
      "role": "Moving positive group G2, rear of CL1; patent G2LN, a negative lens of conditions (8)–(9). Standalone element power is not an isolated in-situ aberration contribution.",
      "cemented": "CL1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Positive Meniscus",
      "nd": 1.72916,
      "vd": 54.67,
      "fl": 89.21012935,
      "glass": "TAC8 (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": -0.00654506,
      "role": "Moving positive group G2; standalone element power is not an isolated in-situ aberration contribution.",
      "cemented": "CL2"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7 (G2LN)",
      "type": "Biconcave Negative",
      "nd": 1.77047,
      "vd": 29.74,
      "fl": -31.60853012,
      "glass": "NBFD29 (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.00132268,
      "role": "Moving positive group G2, middle of CL2; patent G2LN, a negative lens of conditions (8)–(9). Standalone element power is not an isolated in-situ aberration contribution.",
      "cemented": "CL2"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Biconvex Positive",
      "nd": 1.83481,
      "vd": 42.72,
      "fl": 47.55339436,
      "glass": "TAFD5G (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": -0.00724496,
      "role": "Moving positive group G2; standalone element power is not an isolated in-situ aberration contribution.",
      "cemented": "CL2"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9 (G2LN)",
      "type": "Biconcave Negative",
      "nd": 1.77047,
      "vd": 29.74,
      "fl": -33.44672956,
      "glass": "NBFD29 (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.00132268,
      "role": "Moving positive group G2, front of CL3; patent G2LN, a negative lens of conditions (8)–(9). Standalone element power is not an isolated in-situ aberration contribution.",
      "cemented": "CL3"
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10 (G2LPH)",
      "type": "Biconvex Positive",
      "nd": 1.92286,
      "vd": 20.88,
      "fl": 31.58099029,
      "glass": "E-FDS1-W (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.03032016,
      "apd": "patent",
      "apdNote": "Patent G2LPH: high-index glass with large anomalous partial dispersion (¶0059–0062); condition (7) ΔPgF > 0.0100, printed 0.0283 on the patent normal line. Source PgF 0.6390; runtime dPgF +0.03032.",
      "role": "Moving positive group G2, rear of CL3; patent G2LPH, the high-index anomalous-partial-dispersion positive lens of conditions (6)–(7). Standalone element power is not an isolated in-situ aberration contribution.",
      "cemented": "CL3"
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Negative Meniscus",
      "nd": 1.84666,
      "vd": 23.78,
      "fl": -56.40467748,
      "glass": "FDS90-SG (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.01539796,
      "role": "Moving positive group G2; standalone element power is not an isolated in-situ aberration contribution.",
      "cemented": "CL4"
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "type": "Positive Meniscus",
      "nd": 1.54814,
      "vd": 45.82,
      "fl": 149.76733175,
      "glass": "E-FEL1 (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.00326924,
      "role": "Moving positive group G2; standalone element power is not an isolated in-situ aberration contribution.",
      "cemented": "CL4"
    },
    {
      "id": 13,
      "name": "L13",
      "label": "Element 13",
      "type": "Biconvex Positive",
      "nd": 1.8707,
      "vd": 40.73,
      "fl": 110.09416597,
      "glass": "TAFD32 (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": -0.00709214,
      "role": "Moving positive group G2; standalone element power is not an isolated in-situ aberration contribution."
    },
    {
      "id": 14,
      "name": "L14",
      "label": "Element 14 (G3LN)",
      "type": "Negative Meniscus",
      "nd": 1.62041,
      "vd": 60.35,
      "fl": -72.01390605,
      "glass": "BACD16 (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": -0.0028913,
      "role": "Fixed negative group G3; patent G3LN, a low-index, low-dispersion negative lens of conditions (2)–(3). Standalone element power is not an isolated in-situ aberration contribution."
    },
    {
      "id": 15,
      "name": "L15",
      "label": "Element 15",
      "type": "Positive Meniscus",
      "nd": 1.91082,
      "vd": 35.25,
      "fl": 131.92562695,
      "glass": "TAFD35 (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": -0.0023095,
      "role": "Fixed negative group G3; standalone element power is not an isolated in-situ aberration contribution."
    },
    {
      "id": 16,
      "name": "L16",
      "label": "Element 16 (G3LN)",
      "type": "Biconcave Negative",
      "nd": 1.55032,
      "vd": 75.5,
      "fl": -45.09888995,
      "glass": "FCD705 (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": 0.023291,
      "apd": "inferred",
      "apdNote": "Inferred from coordinates: FCD705-class low-dispersion anomalous crown (νd 75.50; source PgF 0.5401, runtime dPgF +0.02329). The patent's G3LN conditions (2)–(3) limit only nd and νd. Sigma lists one SLD element without naming its position.",
      "role": "Fixed negative group G3; patent G3LN, a low-index, low-dispersion negative lens of conditions (2)–(3). Standalone element power is not an isolated in-situ aberration contribution."
    },
    {
      "id": 17,
      "name": "L17",
      "label": "Element 17",
      "type": "Biconvex Positive",
      "nd": 1.5168,
      "vd": 64.2,
      "fl": 54.00903698,
      "glass": "BSC7 (HOYA coordinate equivalent; supplier unconfirmed)",
      "dPgF": -0.0015156,
      "role": "Fixed negative group G3; standalone element power is not an isolated in-situ aberration contribution."
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": -142.3582,
      "d": 1.7942,
      "nd": 1.51742,
      "elemId": 1,
      "sd": 26.5
    },
    {
      "label": "2",
      "R": -243.4632,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 26.5
    },
    {
      "label": "3",
      "R": 289.9411,
      "d": 2.7409,
      "nd": 1.8042,
      "elemId": 2,
      "sd": 26.5
    },
    {
      "label": "4",
      "R": -1000.0,
      "d": 42.2916,
      "nd": 1.0,
      "elemId": 0,
      "sd": 26.5
    },
    {
      "label": "5",
      "R": 117.5947,
      "d": 2.789,
      "nd": 2.0509,
      "elemId": 3,
      "sd": 17.5
    },
    {
      "label": "6",
      "R": -433.6448,
      "d": 0.4,
      "nd": 1.0,
      "elemId": 0,
      "sd": 17.5
    },
    {
      "label": "7",
      "R": 43.0396,
      "d": 6.4569,
      "nd": 1.59282,
      "elemId": 4,
      "sd": 16.5
    },
    {
      "label": "8",
      "R": -162.2658,
      "d": 1.0,
      "nd": 1.85451,
      "elemId": 5,
      "sd": 16.5
    },
    {
      "label": "9",
      "R": 79.3725,
      "d": 3.2345,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16.5
    },
    {
      "label": "10",
      "R": -91.7434,
      "d": 2.8191,
      "nd": 1.72916,
      "elemId": 6,
      "sd": 14.5
    },
    {
      "label": "11",
      "R": -38.5549,
      "d": 1.0,
      "nd": 1.77047,
      "elemId": 7,
      "sd": 14.5
    },
    {
      "label": "12",
      "R": 66.8622,
      "d": 4.1402,
      "nd": 1.83481,
      "elemId": 8,
      "sd": 14.5
    },
    {
      "label": "13",
      "R": -94.9604,
      "d": 1.3319,
      "nd": 1.0,
      "elemId": 0,
      "sd": 14.5
    },
    {
      "label": "14",
      "R": -66.5689,
      "d": 1.0,
      "nd": 1.77047,
      "elemId": 9,
      "sd": 14.0
    },
    {
      "label": "15",
      "R": 42.3213,
      "d": 4.6765,
      "nd": 1.92286,
      "elemId": 10,
      "sd": 14.0
    },
    {
      "label": "16",
      "R": -88.6454,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 14.0
    },
    {
      "label": "17",
      "R": 56.6346,
      "d": 1.0,
      "nd": 1.84666,
      "elemId": 11,
      "sd": 12.5
    },
    {
      "label": "18",
      "R": 25.699,
      "d": 2.2649,
      "nd": 1.54814,
      "elemId": 12,
      "sd": 12.5
    },
    {
      "label": "19",
      "R": 36.2427,
      "d": 2.5951,
      "nd": 1.0,
      "elemId": 0,
      "sd": 12.5
    },
    {
      "label": "20",
      "R": 168.4374,
      "d": 2.1283,
      "nd": 1.8707,
      "elemId": 13,
      "sd": 12.0
    },
    {
      "label": "21",
      "R": -221.1578,
      "d": 2.3594,
      "nd": 1.0,
      "elemId": 0,
      "sd": 12.0
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 1.6794,
      "nd": 1.0,
      "elemId": 0,
      "sd": 9.611937886
    },
    {
      "label": "23",
      "R": 65.2508,
      "d": 2.0,
      "nd": 1.62041,
      "elemId": 14,
      "sd": 10.0
    },
    {
      "label": "24",
      "R": 26.2085,
      "d": 10.0049,
      "nd": 1.0,
      "elemId": 0,
      "sd": 10.0
    },
    {
      "label": "25",
      "R": -41.6855,
      "d": 2.8193,
      "nd": 1.91082,
      "elemId": 15,
      "sd": 13.0
    },
    {
      "label": "26",
      "R": -31.9466,
      "d": 4.6065,
      "nd": 1.0,
      "elemId": 0,
      "sd": 13.0
    },
    {
      "label": "27",
      "R": -28.2194,
      "d": 1.0,
      "nd": 1.55032,
      "elemId": 16,
      "sd": 15.0
    },
    {
      "label": "28",
      "R": 208.5475,
      "d": 0.15,
      "nd": 1.0,
      "elemId": 0,
      "sd": 15.0
    },
    {
      "label": "29",
      "R": 53.0053,
      "d": 6.3956,
      "nd": 1.5168,
      "elemId": 17,
      "sd": 16.6
    },
    {
      "label": "30",
      "R": -56.5349,
      "d": 31.7486,
      "nd": 1.0,
      "elemId": 0,
      "sd": 16.6
    }
  ],
  "asph": {},
  "var": {
    "4": [
      42.2916,
      21.2405,
      1.7259
    ],
    "21": [
      2.3594,
      11.2153,
      19.4249
    ],
    "STO": [
      1.6794,
      13.8745,
      25.1795
    ]
  },
  "focusPositions": [
    0,
    0.7727876566859618,
    1
  ],
  "finiteConjugates": [
    {
      "focusT": 0.7727876566859618,
      "zoomT": 0,
      "objectDistanceMm": 237.4813,
      "distanceReference": "first-surface",
      "source": "JP2021148808A Example1, PDF p16, −0.5× spacing column."
    },
    {
      "focusT": 1,
      "zoomT": 0,
      "objectDistanceMm": 150.1845,
      "distanceReference": "first-surface",
      "source": "JP2021148808A Example1, PDF p16, −1× spacing column."
    }
  ],
  "varLabels": [
    [
      "4",
      "D4"
    ],
    [
      "21",
      "D21"
    ],
    [
      "STO",
      "D22"
    ]
  ],
  "groups": [
    {
      "text": "G1",
      "fromSurface": "1",
      "toSurface": "4"
    },
    {
      "text": "G2",
      "fromSurface": "5",
      "toSurface": "21"
    },
    {
      "text": "S",
      "fromSurface": "STO",
      "toSurface": "STO"
    },
    {
      "text": "G3",
      "fromSurface": "23",
      "toSurface": "30"
    }
  ],
  "doublets": [
    {
      "text": "CL1",
      "fromSurface": "7",
      "toSurface": "9"
    },
    {
      "text": "CL2",
      "fromSurface": "10",
      "toSurface": "13"
    },
    {
      "text": "CL3",
      "fromSurface": "14",
      "toSurface": "16"
    },
    {
      "text": "CL4",
      "fromSurface": "17",
      "toSurface": "19"
    }
  ],
  "closeFocusM": 0.2969112,
  "focusDescription": "Published infinity, −0.5× and −1× states. G1/G3 fixed; G2 and the stop move toward the object at different rates: G2 by 21.05 mm at −0.5× and 40.57 mm at −1×, the stop by 12.20 and 23.50 mm (derived from the published gaps). Intermediate gaps are linear visualization interpolation, not production cam data. Native closest object-to-image distance 296.9112 mm; commercial MFD 295 mm is not substituted. Fixed-iris diagnostic visualization (FIXED_IRIS_DIAGNOSTIC_V1): physical iris 9.611937886 mm retained; semi-diameters are figure-based estimates. Patent close-focus F4.32/F5.73 are not reproduced; admitted modeled cones are approximately F4.014/F5.226. Close-focus exposure, illumination and full-pupil fidelity are not verified. Current app aperture readouts and diagram fan sampling remain approximate.",
  "nominalFno": 2.9,
  "fstopSeries": [
    2.9,
    4,
    5.6,
    8,
    11,
    16,
    22
  ],
  "maxFstop": 22,
  "apertureBlades": 9,
  "scFill": 0.55,
  "yScFill": 0.3
} satisfies LensDataInput;
export default LENS_DATA;
