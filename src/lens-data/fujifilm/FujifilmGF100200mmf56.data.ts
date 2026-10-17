import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — FUJIFILM GF 100-200mm F5.6 R LM OIS WR                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2019/0361195 A1, Example 1 (FUJIFILM / Kondo).      ║
 * ║  Positive-negative-positive-positive four-group telephoto zoom.      ║
 * ║  20 elements / 13 groups, one double-sided aspherical element.       ║
 * ║  Focus: patent assigns focusing to G3 only; close-focus spacings     ║
 * ║  are not tabulated, so this file encodes the infinity zoom states.   ║
 * ║  OIS: G4B anti-vibration subgroup, moving transverse to the axis.    ║
 * ║                                                                      ║
 * ║  Zoom variable gaps: DD[5], DD[13], DD[18].                          ║
 * ║  Reversing group: DD[18] is non-monotonic across W/M/T positions.    ║
 * ║  Cover glass PP (S35–36) is modeled in `rearPlates` (traced, not     ║
 * ║  drawn); d34 stores the patent's 57.4777 mm gap to the plate.        ║
 * ║                                                                      ║
 * ║  NOTE ON SEMI-DIAMETERS:                                             ║
 * ║  Patent omits clear apertures. SDs are estimated from paraxial       ║
 * ║  marginal/chief-ray envelopes and held inside edge-thickness,        ║
 * ║  element-SD-ratio, and cross-gap sag-intrusion constraints.          ║
 * ║  Surfaces 21 and 22 (L41 rear, L42 front) follow the F5.70 on-axis   ║
 * ║  ray instead: it reaches 10.72 / 10.48 mm there at 101.68 mm, and    ║
 * ║  the rows store 10.8 / 10.5 mm. The fixed iris (11.12 mm real-ray    ║
 * ║  radius) limits the on-axis beam at every zoom station.              ║
 * ║  L48 asphere SD = 14.5 mm leaves ~0.43 mm edge thickness.            ║
 * ║                                                                      ║
 * ║  NOTE ON ASPHERES:                                                   ║
 * ║  Surfaces 31A/32A store exact Table 3 odd/even A4–A20 terms.         ║
 * ║  Zero A3 is omitted; patent KA converts with K = KA − 1.             ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "fujifilm-gf-100-200mm-f56",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON GF 100-200mm f/5.6 R LM OIS WR",
  subtitle: "US 2019/0361195 A1 Example 1 — FUJIFILM / Masato Kondo",

  catalog: {
    lensMounts: ["fujifilm-g"],
    imageFormat: "44x33",
    specs: [
      "20 elements / 13 groups",
      "f = 101.68–203.35 mm (patent)",
      "F5.6 nominal / F5.70 design",
      "44×33 mm image circle",
      "1 aspherical element / 2 Super ED elements",
      "G3 internal focus / G4B OIS group",
    ],
    elementCount: 20,
    groupCount: 13,
    acceptsTeleconverters: true, // GF1.4X TC WR per Fujifilm's compatibility chart
    focalLengthMm: { marketing: [100, 200], design: [101.688, 203.355] },
    fNumber: { marketing: 5.6, design: 5.7 },
  },

  source: {
    patentNumber: "US 2019/0361195 A1",
    patentYear: 2019,
    authors: ["Masato Kondo"],
    assignees: ["Fujifilm Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11 front negative meniscus",
      type: "Negative Meniscus",
      nd: 1.7495,
      vd: 35.02,
      focalLengthMm: -119.46,
      glass: "HOYA E-LAF7 / CDGM H-LaF4 (750350; OHARA S-LAM7 class)",
      role: "Dispersive negative member of the front cemented doublet in G1.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "L12 front positive crown",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.21,
      focalLengthMm: 93.79,
      glass: "N-BK7 / BSC7 / H-K9L class",
      role: "Crown partner of the front achromatizing doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "L13 Super ED meniscus",
      type: "Positive Meniscus",
      nd: 1.43875,
      vd: 94.66,
      focalLengthMm: 131.88,
      glass: "OHARA S-FPL55 (Super ED; S-FPL53/FCD100 family)",
      apd: "inferred",
      apdNote: "OHARA S-FPL55 catalog line indices; patent itself gives only nd/vd.",
      role: "Low-dispersion positive element carrying much of G1's converging power.",
      nC: 1.43733,
      nF: 1.44196,
      ng: 1.44444,
    },
    {
      id: 4,
      name: "L21",
      label: "L21 variator positive",
      type: "Biconvex Positive",
      nd: 1.834,
      vd: 37.23,
      focalLengthMm: 47.82,
      glass: "OHARA S-LAH60V / HOYA NBFD10 class",
      role: "High-index positive member of the first G2 cemented pair.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L22",
      label: "L22 variator negative",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.75,
      focalLengthMm: -30.05,
      glass: "OHARA S-TIL25 / HOYA E-FL5 / CDGM H-QF50A",
      role: "Negative member that makes the leading G2 cemented pair strongly diverging.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L23",
      label: "L23 variator low-dispersion negative",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.42,
      focalLengthMm: -50.63,
      glass: "HOYA FC5 / OHARA S-FSL5 class",
      role: "Low-dispersion negative partner in the high-Abbe-difference G2 doublet.",
      cemented: "D3",
    },
    {
      id: 7,
      name: "L24",
      label: "L24 dense-flint positive",
      type: "Positive Meniscus",
      nd: 1.85896,
      vd: 22.73,
      focalLengthMm: 48.69,
      glass: "OHARA S-NPH5",
      role: "Dense-flint positive member that sets the maximum Abbe-number difference in G2.",
      cemented: "D3",
    },
    {
      id: 8,
      name: "L25",
      label: "L25 rear variator meniscus",
      type: "Negative Meniscus",
      nd: 1.58144,
      vd: 40.75,
      focalLengthMm: -55.55,
      glass: "OHARA S-TIL25 / HOYA E-FL5 / CDGM H-QF50A",
      role: "Trailing negative meniscus of G2, convex toward the image side.",
    },
    {
      id: 9,
      name: "L31",
      label: "L31 focus-group lead positive",
      type: "Positive Meniscus",
      nd: 1.92287,
      vd: 18.9,
      focalLengthMm: 96.88,
      glass: "OHARA S-NPH2",
      role: "Very high-index lead positive element of the moving G3 focus group.",
    },
    {
      id: 10,
      name: "L32",
      label: "L32 focus-group positive",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.37,
      focalLengthMm: 78.65,
      glass: "OHARA S-BSM16 / HOYA BACD16",
      role: "Crown positive member of the G3 achromatizing doublet.",
      cemented: "D4",
    },
    {
      id: 11,
      name: "L33",
      label: "L33 focus-group dense-flint negative",
      type: "Negative Meniscus",
      nd: 1.95906,
      vd: 17.47,
      focalLengthMm: -82.4,
      glass: "OHARA S-NPH3",
      role: "Extreme dense-flint negative member that stabilizes focus-group chromatic behavior.",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L41",
      label: "L41 rear Super ED meniscus",
      type: "Positive Meniscus",
      nd: 1.43875,
      vd: 94.66,
      focalLengthMm: 84.35,
      glass: "OHARA S-FPL55 (Super ED; S-FPL53/FCD100 family)",
      apd: "inferred",
      apdNote: "OHARA S-FPL55 catalog line indices; patent itself gives only nd/vd.",
      role: "Second Super ED element, placed just behind the stop in G4A.",
      nC: 1.43733,
      nF: 1.44196,
      ng: 1.44444,
    },
    {
      id: 13,
      name: "L42",
      label: "L42 G4A positive",
      type: "Biconvex Positive",
      nd: 1.56883,
      vd: 56.06,
      focalLengthMm: 37.82,
      glass: "OHARA S-BAL14 / HOYA BAC4 class",
      role: "Leading crown of the G4A cemented triplet.",
      cemented: "T1",
    },
    {
      id: 14,
      name: "L43",
      label: "L43 G4A negative core",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.73,
      focalLengthMm: -17.0,
      glass: "OHARA S-LAH55VS / HOYA TAFD5G / HIKARI J-LASF05 class",
      role: "High-index negative core of the crown-flint-crown triplet.",
      cemented: "T1",
    },
    {
      id: 15,
      name: "L44",
      label: "L44 G4A positive crown",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.42,
      focalLengthMm: 29.85,
      glass: "HOYA FC5 / OHARA S-FSL5 class",
      role: "Low-dispersion trailing positive member of the G4A triplet.",
      cemented: "T1",
    },
    {
      id: 16,
      name: "L45",
      label: "L45 OIS-group positive",
      type: "Biconvex Positive",
      nd: 1.64769,
      vd: 33.84,
      focalLengthMm: 27.31,
      glass: "HOYA E-FD2 / Schott N-SF2 / CDGM H-ZF1 class",
      role: "Positive member of the G4B anti-vibration cemented pair.",
      cemented: "D5",
    },
    {
      id: 17,
      name: "L46",
      label: "L46 OIS-group negative",
      type: "Biconcave Negative",
      nd: 1.62041,
      vd: 60.37,
      focalLengthMm: -22.18,
      glass: "OHARA S-BSM16 / HOYA BACD16",
      role: "Negative crown member that makes the L45-L46 cemented component net negative.",
      cemented: "D5",
    },
    {
      id: 18,
      name: "L47",
      label: "L47 OIS-group rear negative",
      type: "Biconcave Negative",
      nd: 1.883,
      vd: 39.22,
      focalLengthMm: -50.02,
      glass: "CDGM H-ZLaF68N (883392)",
      role: "High-index negative lens completing the G4B anti-vibration subgroup.",
    },
    {
      id: 19,
      name: "L48",
      label: "L48 double-sided aspherical positive",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.5176,
      vd: 63.5,
      focalLengthMm: 39.83,
      glass: "CDGM D-K59 (518635)",
      role: "Single double-sided aspherical element leading the rear positive group G4C.",
    },
    {
      id: 20,
      name: "L49",
      label: "L49 rear negative meniscus",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.42,
      focalLengthMm: -92.46,
      glass: "HOYA FC5 / OHARA S-FSL5 class",
      role: "Image-side field-correcting negative meniscus of G4C.",
    },
  ],

  surfaces: [
    { label: "1", R: 182.7312, d: 2.13, sd: 27.0, medium: 1 },
    { label: "2", R: 59.79, d: 8.16, sd: 26.5, medium: 2 },
    { label: "3", R: -244.1537, d: 0.1, sd: 26.0 },
    { label: "4", R: 51.1618, d: 6.58, sd: 25.0, medium: 3 },
    { label: "5", R: 424.5411, sd: 24.8 },
    { label: "6", R: 138.7122, d: 5.63, sd: 19.5, medium: 4 },
    { label: "7", R: -54.945, d: 1.31, sd: 18.2, medium: 5 },
    { label: "8", R: 25.8385, d: 6.37, sd: 14.7 },
    { label: "9", R: -109.5983, d: 1.11, sd: 14.7, medium: 6 },
    { label: "10", R: 31.965, d: 3.43, sd: 14.2, medium: 7 },
    { label: "11", R: 128.9091, d: 3.31, sd: 11.4 },
    { label: "12", R: -27.9491, d: 0.84, sd: 11.4, medium: 8 },
    { label: "13", R: -209.8241, sd: 13.5 },
    { label: "14", R: -427.6232, d: 2.18, sd: 14.0, medium: 9 },
    { label: "15", R: -74.1246, d: 0.15, sd: 14.0 },
    { label: "16", R: 177.249, d: 3.01, sd: 13.8, medium: 10 },
    { label: "17", R: -66.888, d: 1.01, sd: 14.0, medium: 11 },
    { label: "18", R: -438.8309, sd: 14.0 },
    { label: "STO", R: "flat", d: 0.2 },
    { label: "20", R: 25.1162, d: 5.03, sd: 11.3, medium: 12 },
    { label: "21", R: 73.3817, d: 0.65, sd: 10.8 }, // f/5.70 on-axis ray: 10.72 mm
    { label: "22", R: 29.4303, d: 4.97, sd: 10.5, medium: 13 }, // f/5.70 on-axis ray: 10.48 mm
    { label: "23", R: -75.04, d: 0.94, sd: 10.5, medium: 14 },
    { label: "24", R: 17.605, d: 5.45, sd: 11.0, medium: 15 },
    { label: "25", R: -75.4013, d: 4.1, sd: 11.0 },
    { label: "26", R: 437.5349, d: 4.48, sd: 11.0, medium: 16 },
    { label: "27", R: -18.358, d: 0.87, sd: 9.0, medium: 17 },
    { label: "28", R: 55.9806, d: 1.02, sd: 8.4 },
    { label: "29", R: -127.9899, d: 0.84, sd: 8.4, medium: 18 },
    { label: "30", R: 67.6556, d: 5.19, sd: 10.4 },
    {
      label: "31A",
      R: 39.2886,
      d: 6.45,
      sd: 14.5,
      medium: 19,
      asphere: {
        K: 1.8572951,
        A4: -7.3711067e-6,
        A6: 4.3707776e-7,
        A8: -6.3741378e-9,
        A10: 5.3683757e-11,
        A12: 4.9091049e-14,
        A14: -1.8069522e-15,
        A16: 5.471453e-18,
        A18: 1.9939949e-21,
        A20: -1.6186888e-23,
        A5: -1.7817947e-6,
        A7: -2.6735859e-8,
        A9: 8.4356379e-10,
        A11: -1.1791015e-11,
        A13: 6.2143266e-14,
        A15: -1.231901e-16,
        A17: -2.7239555e-20,
        A19: 2.9379048e-22,
      },
    },
    {
      label: "32A",
      R: -40.9507,
      d: 15.04,
      sd: 14.5,
      asphere: {
        K: 0,
        A4: -2.8957588e-6,
        A6: -1.5456344e-7,
        A8: -2.9995264e-9,
        A10: 9.5104961e-11,
        A12: -7.0737478e-13,
        A14: 1.5575916e-15,
        A16: 1.8668195e-18,
        A18: 9.1768224e-21,
        A20: -2.512716e-23,
        A5: 3.399612e-7,
        A7: 4.0287917e-8,
        A9: -5.8201593e-10,
        A11: 8.0089734e-13,
        A13: 1.9090278e-14,
        A15: -7.6779636e-17,
        A17: -1.4052547e-19,
        A19: 1.2514959e-22,
      },
    },
    { label: "33", R: -21.0887, d: 1.0, sd: 15.2, medium: 20 },
    { label: "34", R: -40.2457, d: 57.4777, sd: 15.4 }, // patent d34 to cover glass PP
  ],

  zoom: {
    stations: [
      { focalLengthMm: 101.68, label: "100 mm" },
      { focalLengthMm: 152.51 },
      { focalLengthMm: 203.35, label: "200 mm" },
    ],
    apertureModel: "fixed-iris",
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.6,
    description:
      "Patent: inner focus by the entire third lens group G3. Data file: infinity zoom states only; the patent does not publish close-focus spacings.",
  },

  gaps: {
    "5": {
      label: "DD5 G1→G2",
      values: [
        [1.4, 1.4],
        [17.56, 17.56],
        [25.87, 25.87],
      ],
    },
    "13": {
      label: "DD13 G2→G3",
      values: [
        [22.11, 22.11],
        [11.5, 11.5],
        [0.54, 0.54],
      ],
    },
    "18": {
      label: "DD18 G3→G4",
      values: [
        [18.27, 18.27],
        [12.72, 12.72],
        [15.37, 15.37],
      ],
    },
  },

  aperture: { nominalFNumber: 5.7, fStops: [5.7, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 9 },

  /* ── Cover glass PP (patent surfaces 35–36): traced, not drawn ── */
  rearPlates: [
    {
      label: "PP",
      thicknessMm: 3.2,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 1.0314,
      source: "US 2019/0361195 A1, Example 1 Table 1 surfaces 35–36",
    },
  ],

  groups: [
    { text: "G1 +", fromSurface: "1", toSurface: "5" },
    { text: "G2 −", fromSurface: "6", toSurface: "13" },
    { text: "G3 + / IF", fromSurface: "14", toSurface: "18" },
    { text: "G4A +", fromSurface: "20", toSurface: "25" },
    { text: "G4B − / OIS", fromSurface: "26", toSurface: "30" },
    { text: "G4C +", fromSurface: "31A", toSurface: "34" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "9", toSurface: "11" },
    { text: "D4", fromSurface: "16", toSurface: "18" },
    { text: "T1", fromSurface: "22", toSurface: "25" },
    { text: "D5", fromSurface: "26", toSurface: "28" },
  ],

  layout: { scFill: 0.58, yScFill: 0.78 },
} satisfies LensDataV2Input;

export default LENS_DATA;
