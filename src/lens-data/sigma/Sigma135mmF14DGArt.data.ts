import type { LensDataInput } from "../../types/optics.js";

/**
 * Sigma 135mm F1.4 DG | Art (A025): US20260086332A1 Numerical Example 1.
 * Selected production correlation, not a manufacturer-confirmed patent attribution.
 * Native 131.00 mm / F1.46 prescription is unscaled; marketing is 135 mm / F1.4.
 * 17 elements / 13 air-separated groups; four aspheres with all A4-A20 coefficients.
 * Focus status PUBLISHED: three printed configurations, no reconstructed optical values.
 * US paragraph 0205 prints (y/z)^2 in the sag equation. The original Japanese family
 * JP2026-056718 A paragraph 0097 explicitly prints (y/r)^2 with 1+K; that primary-backed
 * correction is used. No coefficient refit. The literal US error remains in the dossier.
 * Plane 32 is a neutral air plane at the image; omit it and retain the physical d31 gap.
 * Stop radius is inferred by exact tracing from F1.46, not a published diameter.
 * All surface SDs are estimated from Figure 1 (PDF page 2, infinity state) and floor-checked
 * by exact ray trace; they are not patent-listed clear apertures. Figure 1 is drawn 0.92 as
 * tall as it is long (surface-curve fits and the drawn stop opening agree), and the readings
 * correct for that. Figure 1 and Sigma's construction diagram draw L5, L7 and L9 as flanged
 * blocks: the concave rear curve ends at 32.7, 25.3 and 18.8 mm and a flat annulus runs out
 * to the 37.6, 29.7 and 21.8 mm blank. The annulus is not modeled. Rear faces 9, 13 and 18
 * sit between the two at 36.0, 26.5 and 20.5 mm (Sigma steps those corners at 36.2, 27.1 and
 * 20.3 mm), so each rim draws as a block with a shallow slope whose lip stays more than
 * 1 mm short of the next element's rim; the axial F1.46 ray needs 32.51, 25.30 and
 * 18.78 mm there. L16 and L17 share the 17.8 mm rim line
 * FIG. 1 and Sigma's diagram draw and surface 27 ends at its drawn 17.0 mm; gapSagFrac 0.97 is
 * the smallest two-decimal cross-gap limit that admits them (the 29-30A faces close 0.969 of
 * their 1.299 mm gap without crossing). Source radii,
 * spacings, indices and coefficients are never adjusted for aperture, geometry or
 * performance. Final diagnostics govern SDs.
 * Glass labels are coordinate/PgF-compatible catalog equivalents; supplier/melt unknown.
 * Patent absolute PgF is converted to runtime dPgF using its own documented normal line.
 * No absolute nC/nF/ng values are fabricated from nd/vd/PgF.
 */

const LENS_DATA = {
  "key": "sigma-135mm-f14-dg-art",
  "maker": "Sigma",
  "name": "SIGMA 135mm f/1.4 DG | Art",
  "subtitle": "US 2026/0086332 A1, Numerical Example 1 — correlated with the A025 production lens",
  "specs": [
    "17 ELEMENTS / 13 GROUPS",
    "DESIGN f = 131.00 mm",
    "DESIGN F/1.46",
    "2ω = 18.16°",
    "4 ASPHERICAL SURFACES / 2 ELEMENTS"
  ],
  "focalLengthMarketing": 135,
  "focalLengthDesign": 131,
  "apertureMarketing": 1.4,
  "apertureDesign": 1.46,
  "lensMounts": [
    "l-mount",
    "sony-fe"
  ],
  "imageFormat": "135-full-frame",
  "imageCircleMm": 43.26,
  "gapSagFrac": 0.97,
  "patentNumber": "US 2026/0086332 A1",
  "patentAuthors": [
    "Yukihiro Yamamoto"
  ],
  "patentAssignees": [
    "Sigma Corporation"
  ],
  "patentYear": 2026,
  "elementCount": 17,
  "groupCount": 13,
  "elements": [
    {
      "id": 1,
      "name": "L1",
      "label": "Element 1",
      "type": "Positive Meniscus",
      "nd": 1.86966,
      "vd": 20.02,
      "fl": 366.484444,
      "glass": "FDS20-W (HOYA)",
      "apd": "patent",
      "apdNote": "Patent conditions (10) and (11) bound the Abbe number and the g-F anomalous dispersion of the positive lens closest to the object: ΔPgF = θgF − 0.64833 + 0.00180·νd = +0.031 for this element, inside the claimed 0.010 to 0.100. The same θgF 0.6435 is +0.0334 from the engine's normal line.",
      "dPgF": 0.03337364,
      "role": "Fixed front-group element"
    },
    {
      "id": 2,
      "name": "L2",
      "label": "Element 2",
      "type": "Positive Meniscus",
      "nd": 1.437,
      "vd": 95.1,
      "fl": 385.919889,
      "glass": "FCD100 (HOYA)",
      "apd": "inferred",
      "apdNote": "Fluorite-like low-dispersion coordinate at one of the four positions Sigma's construction diagram fills as FLD glass; inferred from the glass family and the patent θgF, not a patent designation.",
      "dPgF": 0.0497582,
      "role": "Fixed front-group element"
    },
    {
      "id": 3,
      "name": "L3",
      "label": "Element 3",
      "type": "Positive Meniscus",
      "nd": 1.437,
      "vd": 95.1,
      "fl": 312.344828,
      "glass": "FCD100 (HOYA)",
      "apd": "inferred",
      "apdNote": "Fluorite-like low-dispersion coordinate at one of the four positions Sigma's construction diagram fills as FLD glass; inferred from the glass family and the patent θgF, not a patent designation.",
      "dPgF": 0.0497582,
      "role": "Fixed front-group element"
    },
    {
      "id": 4,
      "name": "L4",
      "label": "Element 4",
      "type": "Positive Meniscus",
      "nd": 1.43875,
      "vd": 94.93,
      "fl": 207.579221,
      "glass": "S-FPL53 (OHARA)",
      "apd": "inferred",
      "apdNote": "Fluorite-like low-dispersion coordinate at one of the four positions Sigma's construction diagram fills as FLD glass; inferred from the glass family and the patent θgF, not a patent designation.",
      "dPgF": 0.04987226,
      "role": "Fixed front-group element",
      "cemented": "D1"
    },
    {
      "id": 5,
      "name": "L5",
      "label": "Element 5",
      "type": "Negative Meniscus",
      "nd": 1.90043,
      "vd": 37.37,
      "fl": -127.700406,
      "glass": "TAFD37A (HOYA)",
      "dPgF": -0.00424366,
      "role": "Fixed front-group element",
      "cemented": "D1"
    },
    {
      "id": 6,
      "name": "L6",
      "label": "Element 6",
      "type": "Positive Meniscus",
      "nd": 1.43875,
      "vd": 94.93,
      "fl": 151.669531,
      "glass": "S-FPL53 (OHARA)",
      "apd": "inferred",
      "apdNote": "Fluorite-like low-dispersion coordinate at one of the four positions Sigma's construction diagram fills as FLD glass; inferred from the glass family and the patent θgF, not a patent designation.",
      "dPgF": 0.04987226,
      "role": "Fixed front-group element"
    },
    {
      "id": 7,
      "name": "L7",
      "label": "Element 7",
      "type": "Negative Meniscus",
      "nd": 1.85451,
      "vd": 25.15,
      "fl": -99.697902,
      "glass": "NBFD25 (HOYA)",
      "dPgF": 0.0088023,
      "role": "Fixed front-group element"
    },
    {
      "id": 8,
      "name": "L8",
      "label": "Element 8",
      "type": "Positive Meniscus Aspheric",
      "nd": 1.58313,
      "vd": 59.46,
      "fl": 128.316112,
      "glass": "M-BACD12 (HOYA)",
      "dPgF": -0.00328828,
      "role": "Fixed front-group element"
    },
    {
      "id": 9,
      "name": "L9",
      "label": "Element 9",
      "type": "Negative Meniscus",
      "nd": 1.755,
      "vd": 52.32,
      "fl": -53.348088,
      "glass": "TAC6 (HOYA)",
      "dPgF": -0.00849776,
      "role": "Imageward-moving negative focus singlet"
    },
    {
      "id": 10,
      "name": "L10",
      "label": "Element 10",
      "type": "Negative Meniscus",
      "nd": 1.84666,
      "vd": 23.78,
      "fl": -68.385673,
      "glass": "FDS90-SG (HOYA)",
      "dPgF": 0.01539796,
      "role": "Objectward-moving focus doublet",
      "cemented": "D2"
    },
    {
      "id": 11,
      "name": "L11",
      "label": "Element 11",
      "type": "Positive Meniscus",
      "nd": 1.72916,
      "vd": 54.54,
      "fl": 89.958329,
      "glass": "TAC8P (HOYA)",
      "dPgF": -0.00676372,
      "role": "Objectward-moving focus doublet",
      "cemented": "D2"
    },
    {
      "id": 12,
      "name": "L12",
      "label": "Element 12",
      "type": "Biconvex Positive",
      "nd": 1.881,
      "vd": 40.14,
      "fl": 30.856384,
      "glass": "TAFD33 (HOYA)",
      "dPgF": -0.00628452,
      "role": "Fixed rear-group element",
      "cemented": "D3"
    },
    {
      "id": 13,
      "name": "L13",
      "label": "Element 13",
      "type": "Negative Meniscus",
      "nd": 1.76634,
      "vd": 35.82,
      "fl": -131.023532,
      "glass": "S-NBH59 (OHARA)",
      "dPgF": -0.00435076,
      "role": "Fixed rear-group element",
      "cemented": "D3"
    },
    {
      "id": 14,
      "name": "L14",
      "label": "Element 14",
      "type": "Biconvex Positive",
      "nd": 1.94594,
      "vd": 17.98,
      "fl": 57.722587,
      "glass": "FDS18-W (HOYA)",
      "dPgF": 0.04104236,
      "role": "Fixed rear-group element",
      "cemented": "D4"
    },
    {
      "id": 15,
      "name": "L15",
      "label": "Element 15",
      "type": "Biconcave Negative",
      "nd": 1.76182,
      "vd": 26.61,
      "fl": -34.426792,
      "glass": "FD140 (HOYA)",
      "dPgF": 0.01325802,
      "role": "Fixed rear-group element",
      "cemented": "D4"
    },
    {
      "id": 16,
      "name": "L16",
      "label": "Element 16",
      "type": "Biconvex Positive",
      "nd": 2.00069,
      "vd": 25.46,
      "fl": 82.909044,
      "glass": "TAFD40-W (HOYA)",
      "dPgF": 0.01262372,
      "role": "Fixed rear-group element"
    },
    {
      "id": 17,
      "name": "L17",
      "label": "Element 17",
      "type": "Biconcave Negative Aspheric",
      "nd": 1.58313,
      "vd": 59.46,
      "fl": -95.851232,
      "glass": "M-BACD12 (HOYA)",
      "dPgF": -0.00328828,
      "role": "Fixed rear-group element"
    }
  ],
  "surfaces": [
    {
      "label": "1",
      "R": 139.1088,
      "d": 4.8329,
      "nd": 1.86966,
      "elemId": 1,
      "sd": 48
    },
    {
      "label": "2",
      "R": 242.8613,
      "d": 0.9,
      "nd": 1,
      "elemId": 0,
      "sd": 48
    },
    {
      "label": "3",
      "R": 92.4653,
      "d": 8.0166,
      "nd": 1.437,
      "elemId": 2,
      "sd": 45
    },
    {
      "label": "4",
      "R": 199.2979,
      "d": 0.15,
      "nd": 1,
      "elemId": 0,
      "sd": 45
    },
    {
      "label": "5",
      "R": 66.2231,
      "d": 9.2418,
      "nd": 1.437,
      "elemId": 3,
      "sd": 42
    },
    {
      "label": "6",
      "R": 123.1719,
      "d": 0.7,
      "nd": 1,
      "elemId": 0,
      "sd": 42
    },
    {
      "label": "7",
      "R": 57.9228,
      "d": 11.0967,
      "nd": 1.43875,
      "elemId": 4,
      "sd": 38
    },
    {
      "label": "8",
      "R": 149.8268,
      "d": 2.4925,
      "nd": 1.90043,
      "elemId": 5,
      "sd": 38
    },
    {
      "label": "9",
      "R": 64.5442,
      "d": 0.15,
      "nd": 1,
      "elemId": 0,
      "sd": 36.0
    },
    {
      "label": "10",
      "R": 53.9493,
      "d": 10.9955,
      "nd": 1.43875,
      "elemId": 6,
      "sd": 33.8
    },
    {
      "label": "11",
      "R": 267.3073,
      "d": 0.15,
      "nd": 1,
      "elemId": 0,
      "sd": 33.8
    },
    {
      "label": "12",
      "R": 71.7755,
      "d": 1.451,
      "nd": 1.85451,
      "elemId": 7,
      "sd": 30
    },
    {
      "label": "13",
      "R": 38.5925,
      "d": 3.6698,
      "nd": 1,
      "elemId": 0,
      "sd": 26.5
    },
    {
      "label": "14A",
      "R": 47.4008,
      "d": 6.5576,
      "nd": 1.58313,
      "elemId": 8,
      "sd": 26.8
    },
    {
      "label": "15A",
      "R": 122.7395,
      "d": 5.7746,
      "nd": 1,
      "elemId": 0,
      "sd": 26.8
    },
    {
      "label": "STO",
      "R": 1000000000000000.0,
      "d": 3.2297,
      "nd": 1,
      "elemId": 0,
      "sd": 22.41183100978485
    },
    {
      "label": "17",
      "R": 402.5829,
      "d": 1.083,
      "nd": 1.755,
      "elemId": 9,
      "sd": 22.5
    },
    {
      "label": "18",
      "R": 36.5722,
      "d": 20.3908,
      "nd": 1,
      "elemId": 0,
      "sd": 20.5
    },
    {
      "label": "19",
      "R": 61.6251,
      "d": 1.0,
      "nd": 1.84666,
      "elemId": 10,
      "sd": 20.5
    },
    {
      "label": "20",
      "R": 29.63,
      "d": 4.2961,
      "nd": 1.72916,
      "elemId": 11,
      "sd": 20.5
    },
    {
      "label": "21",
      "R": 50.7374,
      "d": 3.1336,
      "nd": 1,
      "elemId": 0,
      "sd": 20.5
    },
    {
      "label": "22",
      "R": 52.1881,
      "d": 8.939,
      "nd": 1.881,
      "elemId": 12,
      "sd": 20.5
    },
    {
      "label": "23",
      "R": -52.1881,
      "d": 1.0,
      "nd": 1.76634,
      "elemId": 13,
      "sd": 20.5
    },
    {
      "label": "24",
      "R": -109.5737,
      "d": 0.7,
      "nd": 1,
      "elemId": 0,
      "sd": 20.5
    },
    {
      "label": "25",
      "R": 1000.0,
      "d": 5.3636,
      "nd": 1.94594,
      "elemId": 14,
      "sd": 19.0
    },
    {
      "label": "26",
      "R": -57.6051,
      "d": 1.0,
      "nd": 1.76182,
      "elemId": 15,
      "sd": 19.0
    },
    {
      "label": "27",
      "R": 48.51,
      "d": 1.9463,
      "nd": 1,
      "elemId": 0,
      "sd": 17.0
    },
    {
      "label": "28",
      "R": 116.6417,
      "d": 3.1455,
      "nd": 2.00069,
      "elemId": 16,
      "sd": 17.8
    },
    {
      "label": "29",
      "R": -283.4942,
      "d": 1.2989,
      "nd": 1,
      "elemId": 0,
      "sd": 17.8
    },
    {
      "label": "30A",
      "R": -72.1371,
      "d": 1.4004,
      "nd": 1.58313,
      "elemId": 17,
      "sd": 17.8
    },
    {
      "label": "31A",
      "R": 250.0,
      "d": 28.4437,
      "nd": 1,
      "elemId": 0,
      "sd": 17.8
    }
  ],
  "asph": {
    "14A": {
      "K": 1.31969,
      "A4": -1.746e-06,
      "A6": -2.74822e-10,
      "A8": -5.27433e-12,
      "A10": 1.14794e-14,
      "A12": -1.96123e-17,
      "A14": 1.81911e-20,
      "A16": -1.23654e-23,
      "A18": 2.16244e-27,
      "A20": -6.33221e-31
    },
    "15A": {
      "K": -0.49418,
      "A4": 8.007e-07,
      "A6": 1.89969e-09,
      "A8": -1.05116e-11,
      "A10": 3.73574e-14,
      "A12": -7.5348e-17,
      "A14": 8.48844e-20,
      "A16": -4.45989e-23,
      "A18": -6.26134e-27,
      "A20": 1.29953e-29
    },
    "30A": {
      "K": -9.33638,
      "A4": 1.40182e-06,
      "A6": 6.12079e-09,
      "A8": -1.36953e-10,
      "A10": 1.20007e-12,
      "A12": -5.23473e-15,
      "A14": 1.15364e-17,
      "A16": -8.53231e-21,
      "A18": -9.90443e-24,
      "A20": 1.46825e-26
    },
    "31A": {
      "K": 3.00773,
      "A4": 5.9741e-06,
      "A6": 5.19546e-09,
      "A8": -1.40827e-10,
      "A10": 1.3663e-12,
      "A12": -6.38593e-15,
      "A14": 1.58507e-17,
      "A16": -1.69005e-20,
      "A18": -3.43479e-24,
      "A20": 1.53859e-26
    }
  },
  "var": {
    "STO": [
      3.2297,
      7.6457,
      14.4546
    ],
    "18": [
      20.3908,
      15.192,
      7.0477
    ],
    "21": [
      3.1336,
      3.9164,
      5.2518
    ]
  },
  "focusPositions": [
    0,
    0.4586547991042496,
    1
  ],
  "finiteConjugates": [
    {
      "focusT": 0.4586547991042496,
      "zoomT": 0,
      "objectDistanceMm": 2254.5496,
      "distanceReference": "first-surface",
      "source": "US 2026/0086332 A1 Example 1, printed page 10: d0 and the 2407 mm gap column; authored image plane retained."
    },
    {
      "focusT": 1,
      "zoomT": 0,
      "objectDistanceMm": 951.478,
      "distanceReference": "first-surface",
      "source": "US 2026/0086332 A1 Example 1, printed page 10: d0 and the 1104 mm gap column; authored image plane retained."
    }
  ],
  "varLabels": [
    [
      "STO",
      "D16"
    ],
    [
      "18",
      "D18"
    ],
    [
      "21",
      "D21"
    ]
  ],
  "groups": [
    {
      "text": "GrF",
      "fromSurface": "1",
      "toSurface": "15A"
    },
    {
      "text": "GrFC1",
      "fromSurface": "17",
      "toSurface": "18"
    },
    {
      "text": "GrFC2",
      "fromSurface": "19",
      "toSurface": "21"
    },
    {
      "text": "GrR",
      "fromSurface": "22",
      "toSurface": "31A"
    }
  ],
  "doublets": [
    {
      "text": "D1",
      "fromSurface": "7",
      "toSurface": "9"
    },
    {
      "text": "D2",
      "fromSurface": "19",
      "toSurface": "21"
    },
    {
      "text": "D3",
      "fromSurface": "22",
      "toSurface": "24"
    },
    {
      "text": "D4",
      "fromSurface": "25",
      "toSurface": "27"
    }
  ],
  "closeFocusM": 1.1040276,
  "focusDescription": "PUBLISHED: fixed front/rear groups and iris; GrFC1 moves imageward and GrFC2 objectward. Three tabulated states are preserved at infinity, 2.4070992 m and 1.1040276 m object-to-image. Between-state gap interpolation is illustrative, not a published cam law. Marketed minimum focus is 1.1 m.",
  "nominalFno": 1.46,
  "fstopSeries": [
    1.46,
    2,
    2.8,
    4,
    5.6,
    8,
    11,
    16
  ],
  "apertureBlades": 13,
  "yScFill": 0.67
} satisfies LensDataInput;

export default LENS_DATA;
