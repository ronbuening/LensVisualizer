import type { LensDataInput } from "../../types/optics.js";

/**
 * VOIGTLÄNDER COLOR-SKOPAR 35mm f/3.5 Aspherical VM
 *
 * Source: JP 2026-121744 A, Example 1 (Cosina Co., Ltd.; inventor 三島 豊).
 * Production correlation: high confidence. The patent and Cosina product have 6 elements in 4 groups,
 * one double-sided aspherical final element, a 35 mm / f/3.5 class specification, and a 61.6° full field.
 *
 * Prescription convention: the printed D3 and STO rows are consecutive axial distances. This reproduces
 * the published infinity total length of 40.03 mm and gives a fixed S1-to-S11 vertex track of 24.92 mm.
 * Patent Table 1 instead mixes TLo = 21.84 mm with close-state BF = 18.19 mm; that contradiction is retained
 * in the audit and is not forced into the sequential model.
 *
 * Focus status: PUBLISHED. Whole-lens unit focus is represented by D11 = 15.11 mm at infinity and 18.19 mm
 * at the patent's 0.45 m state. The production VM lens is marketed with a 0.7 m minimum focus, so the modeled
 * close endpoint is a patent state rather than the production rangefinder-coupled limit.
 *
 * Scaling: none. All radii, spacings, indices, and asphere coefficients are transcribed at source scale.
 *
 * Semi-diameters: the patent does not tabulate a complete clear-aperture table. The stop SD is solved
 * paraxially from the modeled EFL and f/3.61. S10A uses sd = 8.30 mm, the source-precision root corresponding
 * to the patent's Sag2b = 3.29 mm on the object-side asphere. S11A uses an inferred 9.50 mm clear semi-diameter
 * to contain the published full-field chief ray. The other groups measure 5.6 / 4.3 / 6.5 mm in Fig. 1,
 * then are checked against exact ray envelopes, edge thickness, cross-gap clearance, and render geometry.
 * Standalone element focal lengths are recomputed as complete two-surface thick lenses; this corrects the Stage 1
 * single-surface values previously reported for the front members L1f and L2f.
 *
 * Spectral data: dPgF is transcribed directly from the patent. nC, nF, and ng are omitted because the patent
 * does not identify glass vendors and catalog-equivalent line indices would overstate the certainty.
 */

const LENS_DATA = {
  key: "voigtlander-color-skopar-vm-35mm-f35-aspherical",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER COLOR-SKOPAR 35mm f/3.5 Aspherical VM",
  subtitle: "JP 2026-121744 A, Example 1 — high-confidence production correlation",
  specs: [
    "6 ELEMENTS / 4 GROUPS",
    "DESIGN f = 35.6639 mm",
    "DESIGN F/3.61 (MARKETED F/3.5)",
    "2ω = 61.72°",
    "2 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: 35,
  focalLengthDesign: 35.663874741806914,
  apertureMarketing: 3.5,
  apertureDesign: 3.61,
  lensMounts: ["leica-m"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2026-121744 A",
  patentAuthors: ["三島 豊"],
  patentAssignees: ["Cosina Co., Ltd."],
  patentYear: 2026,
  elementCount: 6,
  groupCount: 4,

  elements: [
    {
      id: 1,
      name: "L1f",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.37,
      fl: 14.48230482135371,
      glass: "TAFD37A-class (HOYA code 900374; vendor not specified by patent)",
      dPgF: -0.004,
      role: "High-index positive front member of the cemented G1 collector.",
      cemented: "L1",
    },
    {
      id: 2,
      name: "L1r",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.45,
      fl: -19.949512754715045,
      glass: "S-TIH6-class (OHARA code 805254; patent νd = 25.45)",
      dPgF: 0.013,
      role: "Negative rear member that achromatizes the positive front member of G1.",
      cemented: "L1",
    },
    {
      id: 3,
      name: "L2f",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.6134,
      vd: 44.27,
      fl: -26.61118470964773,
      glass: "S-NBM51-class (OHARA code 613443; vendor not specified by patent)",
      dPgF: -0.005,
      role: "Negative front member of the cemented G2a group.",
      cemented: "L2",
    },
    {
      id: 4,
      name: "L2r",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.8707,
      vd: 40.73,
      fl: 42.875834997569505,
      glass: "TAFD32-class (HOYA code 871407; vendor not specified by patent)",
      dPgF: -0.007,
      role: "Positive rear member of G2a; the cemented pair remains net negative.",
      cemented: "L2",
    },
    {
      id: 5,
      name: "L3",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.55032,
      vd: 75.5,
      fl: 29.059720752432938,
      glass: "FCD705-class (HOYA code 550755; vendor not specified by patent)",
      dPgF: 0.028,
      role: "Low-dispersion positive element and the shortest-focal-length positive member of G2b.",
    },
    {
      id: 6,
      name: "L4",
      label: "Element 6",
      type: "Negative Meniscus (2× Asph), concave to object",
      nd: 1.58313,
      vd: 59.46,
      fl: -65.99553951683083,
      glass: "M-BACD12-class (HOYA code 583595; vendor not specified by patent)",
      dPgF: -0.001,
      role: "Double-sided aspherical final negative meniscus for off-axis correction and field shaping.",
    },
  ],

  surfaces: [
    { label: "1", R: 13.304, d: 3.03, nd: 1.90043, elemId: 1, sd: 5.6 },
    { label: "2", R: -62.085, d: 0.9, nd: 1.80518, elemId: 2, sd: 5.6 },
    { label: "3", R: 15.574, d: 3.1, nd: 1.0, elemId: 0, sd: 5.6 },
    { label: "STO", R: 1e15, d: 2.5, nd: 1.0, elemId: 0, sd: 3.8581660617534816 },
    { label: "5", R: -14.247, d: 0.9, nd: 1.6134, elemId: 3, sd: 4.3 },
    { label: "6", R: 48.111, d: 2.37, nd: 1.8707, elemId: 4, sd: 4.3 },
    { label: "7", R: -48.111, d: 0.35, nd: 1.0, elemId: 0, sd: 4.3 },
    { label: "8", R: 31.282, d: 3.87, nd: 1.55032, elemId: 5, sd: 6.5 },
    { label: "9", R: -31.282, d: 5.8, nd: 1.0, elemId: 0, sd: 6.5 },
    { label: "10A", R: -33.247, d: 2.1, nd: 1.58313, elemId: 6, sd: 8.3 },
    { label: "11A", R: -250.0, d: 15.11, nd: 1.0, elemId: 0, sd: 9.5 },
  ],

  asph: {
    "10A": {
      K: 0,
      A4: -5.3761e-4,
      A6: 1.7189e-6,
      A8: -5.7399e-8,
      A10: 7.9869e-10,
      A12: -1.8531e-12,
      A14: 0,
    },
    "11A": {
      K: 0,
      A4: -4.1065e-4,
      A6: 2.4139e-6,
      A8: -2.4264e-8,
      A10: 2.4208e-10,
      A12: -7.3037e-13,
      A14: 0,
    },
  },

  var: {
    "11A": [15.11, 18.19],
  },
  varLabels: [["11A", "BF"]],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2a", fromSurface: "5", toSurface: "7" },
    { text: "G2b", fromSurface: "8", toSurface: "11A" },
  ],
  doublets: [
    { text: "L1", fromSurface: "1", toSurface: "3" },
    { text: "L2", fromSurface: "5", toSurface: "7" },
  ],

  closeFocusM: 0.45,
  focusDescription:
    "PUBLISHED whole-lens unit focus: D11 increases from 15.11 mm at infinity to 18.19 mm at the patent " +
    "0.45 m state. " +
    "The production VM lens is marketed with a 0.7 m rangefinder-coupled minimum.",

  nominalFno: 3.61,
  fstopSeries: [3.61, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 10,

  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
