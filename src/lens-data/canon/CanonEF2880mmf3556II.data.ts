import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon EF 28-80mm f/3.5-5.6 II.
 * Prescription: US 5,899,585, Numerical Example 1; 10 air-spaced elements, all spherical.
 * Patent dimensions are retained without focal-length scaling. D8 and D17 are published zoom gaps.
 * The patent omits r21-to-image distance; 37.732911 mm is an independently recovered common image plane.
 * No finite-focus spacings are published, so identical infinity/close pairs prevent an invented focus state.
 * Semi-diameters are inferred rendering apertures, not manufacturer clear-aperture data. The stop radius is derived
 * from the design f-number at each zoom station.
 * Glass names are current OHARA catalog equivalents; Canon's historical supplier is not identified.
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-28-80mm-f35-56-ii",
  maker: "Canon",
  name: "CANON EF 28-80mm f/3.5-5.6 II",
  subtitle: "US 5,899,585 — Numerical Example 1 (production-correlated patent prescription)",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "10 ELEMENTS / 10 GROUPS",
      "COMPUTED EFL 28.9689-76.9612 mm",
      "PATENT f/3.46-5.88",
      "3-UNIT NEGATIVE-POSITIVE-NEGATIVE ZOOM",
      "ALL-SPHERICAL",
      "FRONT-UNIT FOCUS; NO FINITE-FOCUS RECONSTRUCTION",
    ],
    elementCount: 10,
    groupCount: 10,
    focalLengthMm: { marketing: [28, 80], design: [28.968918, 76.96118] },
    fNumber: { marketing: 3.5, design: 3.46 },
  },

  source: { patentNumber: "US 5,899,585", patentYear: 1999, authors: ["Hideki Ogawa"], assignees: ["Canon Inc."] },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Positive Meniscus",
      nd: 1.51633,
      vd: 64.1,
      focalLengthMm: 273.983442,
      glass: "S-BSL7 (OHARA equivalent; vendor unspecified)",
      role: "Weak positive front meniscus used to moderate distortion in the negative first unit.",
      dPgF: -0.000637016894,
      nC: 1.513855,
      nF: 1.521905,
      ng: 1.526214,
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Negative Meniscus",
      nd: 1.70154,
      vd: 41.2,
      focalLengthMm: -36.355632,
      glass: "S-BAH27 (OHARA equivalent; vendor unspecified)",
      role: "Strong negative meniscus forming the principal negative power of the first unit.",
      dPgF: 0.002099891145,
      nC: 1.696503,
      nF: 1.713515,
      ng: 1.723323,
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Biconcave Negative",
      nd: 1.62299,
      vd: 58.2,
      focalLengthMm: -47.2438,
      glass: "S-BSM15 (OHARA equivalent; vendor unspecified)",
      role: "Low-dispersion negative component that shares first-unit power and chromatic correction.",
      dPgF: -0.000180836493,
      nC: 1.619739,
      nF: 1.63045,
      ng: 1.636296,
    },
    {
      id: 4,
      name: "L14",
      label: "L14",
      type: "Positive Meniscus",
      nd: 1.76182,
      vd: 26.5,
      focalLengthMm: 50.374322,
      glass: "S-TIH14 (OHARA equivalent; vendor unspecified)",
      role: "High-dispersion positive meniscus completing the negative first unit's aberration balance.",
      dPgF: 0.014367849927,
      nC: 1.753567,
      nF: 1.782296,
      ng: 1.799923,
    },
    {
      id: 5,
      name: "L21",
      label: "L21",
      type: "Biconvex Positive",
      nd: 1.63854,
      vd: 55.4,
      focalLengthMm: 37.877067,
      glass: "S-BSM18 (OHARA equivalent; vendor unspecified)",
      role: "Front positive element of the principal variator unit.",
      dPgF: -0.00221618559,
      nC: 1.635051,
      nF: 1.646582,
      ng: 1.652906,
    },
    {
      id: 6,
      name: "L22",
      label: "L22",
      type: "Positive Meniscus",
      nd: 1.66672,
      vd: 48.3,
      focalLengthMm: 52.72525,
      glass: "S-BAH11 (OHARA equivalent; vendor unspecified)",
      role:
        "Positive meniscus immediately behind the aperture stop, contributing converging power and " +
        "spherical correction.",
      dPgF: -0.001606719629,
      nC: 1.662589,
      nF: 1.676386,
      ng: 1.684125,
    },
    {
      id: 7,
      name: "L23",
      label: "L23",
      type: "Biconcave Negative",
      nd: 1.78472,
      vd: 25.7,
      focalLengthMm: -19.029663,
      glass: "S-TIH11 (OHARA equivalent; vendor unspecified)",
      role: "Strong dense-flint negative element balancing the positive second unit and its chromatic power.",
      dPgF: 0.015516035316,
      nC: 1.775965,
      nF: 1.806519,
      ng: 1.825344,
    },
    {
      id: 8,
      name: "L24",
      label: "L24",
      type: "Biconvex Positive",
      nd: 1.58144,
      vd: 40.8,
      focalLengthMm: 31.621733,
      glass: "S-TIL25 (OHARA equivalent; vendor unspecified)",
      role: "Rear positive element completing the net-positive second unit.",
      dPgF: 0.002176678697,
      nC: 1.577216,
      nF: 1.591486,
      ng: 1.599726,
    },
    {
      id: 9,
      name: "L31",
      label: "L31",
      type: "Biconcave Negative",
      nd: 1.63854,
      vd: 55.4,
      focalLengthMm: -56.675582,
      glass: "S-BSM18 (OHARA equivalent; vendor unspecified)",
      role: "Negative front element of the stationary rear field-correction unit.",
      dPgF: -0.00221618559,
      nC: 1.635051,
      nF: 1.646582,
      ng: 1.652906,
    },
    {
      id: 10,
      name: "L32",
      label: "L32",
      type: "Positive Meniscus",
      nd: 1.66672,
      vd: 48.3,
      focalLengthMm: 67.550745,
      glass: "S-BAH11 (OHARA equivalent; vendor unspecified)",
      role: "Positive rear meniscus paired across air with L31 to flatten and relay the final image field.",
      dPgF: -0.001606719629,
      nC: 1.662589,
      nF: 1.676386,
      ng: 1.684125,
    },
  ],

  surfaces: [
    { label: "1", R: 117.525, d: 2.7, sd: 22.0, medium: 1 },
    { label: "2", R: 689.019, d: 0.15, sd: 21.0 },
    { label: "3", R: 57.304, d: 1.5, sd: 20.5, medium: 2 },
    { label: "4", R: 17.459, d: 9.79, sd: 14.1 },
    { label: "5", R: -64.591, d: 1.3, sd: 17.0, medium: 3 },
    { label: "6", R: 54.489, d: 0.17, sd: 17.0 },
    { label: "7", R: 31.274, d: 3.82, sd: 15.7, medium: 4 },
    { label: "8", R: 160.062, sd: 15.5 },
    { label: "9", R: 32.699, d: 2.98, sd: 11.5, medium: 5 },
    { label: "10", R: -89.601, d: 0.99, sd: 11.5 },
    { label: "STO", R: "flat", d: 0.2 },
    { label: "12", R: 22.321, d: 2.17, sd: 10.5, medium: 6 },
    { label: "13", R: 58.77, d: 0.98, sd: 8.3 },
    { label: "14", R: -122.838, d: 10.46, sd: 8.3, medium: 7 },
    { label: "15", R: 17.636, d: 0.89, sd: 7.2 },
    { label: "16", R: 34.854, d: 2.67, sd: 9.1, medium: 8 },
    { label: "17", R: -37.818, sd: 9.1 },
    { label: "18", R: -64.438, d: 1.3, sd: 13.0, medium: 9 },
    { label: "19", R: 83.202, d: 1.94, sd: 13.2 },
    { label: "20", R: -709.402, d: 2.77, sd: 13.2, medium: 10 },
    { label: "21", R: -42.415, d: 37.732911, sd: 13.5 },
  ],

  zoom: {
    // (moved from nominalFno) Retain the patent optical states; the stop radius is derived from these f-numbers, and
    // imposing the marketed tele f/5.6 would exceed the rear-L2 apertures.
    stations: [
      { focalLengthMm: 28.98, nominalFNumber: 3.46, label: "Wide" },
      { focalLengthMm: 50.0, nominalFNumber: 4.51 },
      { focalLengthMm: 77.08, nominalFNumber: 5.88, label: "Tele" },
    ],
  },

  focus: {
    closeFocusM: 0.38,
    description:
      "NO_INTERNAL_RECONSTRUCTION: the patent identifies L1 front-unit focus, but no finite-focus spacings are " +
      "published; 0.38 m is the rounded production MFD only.",
  },

  gaps: {
    "8": {
      label: "D8 (L1-L2)",
      values: [
        [32.88, 32.88],
        [11.61, 11.61],
        [1.31, 1.31],
      ],
    },
    "17": {
      label: "D17 (L2-L3)",
      values: [
        [3.01, 3.01],
        [17.95, 17.95],
        [37.21, 37.21],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 38, blades: 5 },

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "8" },
    { text: "L2", fromSurface: "9", toSurface: "17" },
    { text: "L3", fromSurface: "18", toSurface: "21" },
  ],
  doublets: [],

  layout: { yScFill: 0.72 },
} satisfies LensDataV2Input;

export default LENS_DATA;
