import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON EF 600mm f/4 L IS III USM                                     ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Patent source: US 2019/0041605 A1, Example 4 / Numerical Data 4.                ║
 * ║  Production correlation: inferred from Canon's EF600mm f/4L IS III USM data.     ║
 * ║  Active LensVisualizer model: 16 elements / 12 air-separated groups, all spherical.║
 * ║  Patent surfaces 30–31 are the final parallel glass block G (e.g. filter) and are ║
 * ║  omitted under the current data specification. Surface 29 therefore uses the      ║
 * ║  patent's 80.59 mm air-equivalent BF to the image plane instead of raw d29=5.25. ║
 * ║  The production 17-element / 13-group count is recovered when G is counted.       ║
 * ║                                                                                     ║
 * ║  NO SCALING: the Example-4 prescription is retained at its published dimensions.  ║
 * ║  Marketing/design separation: 600 mm / f/4 marketed; EFL≈587.932 mm / F4.12 model.║
 * ║                                                                                     ║
 * ║  FOCUS — CONSTRAINED_RECONSTRUCTION:                                                ║
 * ║    The patent publishes only the infinity state. L2 (surface 15–16, E8) is the     ║
 * ║    sole axial focus unit and moves imageward; L1 and L3 remain fixed. The 4.2 m    ║
 * ║    Canon MFD was treated as focal-plane-to-object distance. A code-solved rigid    ║
 * ║    translation of 18.906939851 mm gives d(STO→15)=22.396939851 mm and              ║
 * ║    d16=19.153060149 mm, preserving d14+d16=41.55 mm and fixed total track.         ║
 * ║    The resulting |m|=0.149215 agrees with Canon's rounded 0.15× specification.      ║
 * ║                                                                                     ║
 * ║  SEMI-DIAMETERS — MODELED, NOT PATENT-PUBLISHED:                                   ║
 * ║    STO sd=22.42736934 mm is implied by F/4.12 and the traced entrance pupil.       ║
 * ║    Refracting-surface SDs start from an 8% clearance over the infinity on-axis     ║
 * ║    marginal-ray height, then are adjusted only where geometry/off-axis containment ║
 * ║    requires it. S22/S23 are constrained by the 4.13 mm cross-gap; S26–S29 are      ║
 * ║    enlarged to contain the default 0.6-field / ±0.75-pupil rendered bundle.        ║
 * ║    Infinity and reconstructed-close states were independently checked for positive ║
 * ║    edge thickness, actual spherical rim slope, cross-gap intrusion, and off-axis   ║
 * ║    containment. Repository render diagnostics remain a later local integration gate.║
 * ║                                                                                     ║
 * ║  SPECTRAL FIELDS:                                                                ║
 * ║    Numerical Data 4 publishes nd, νd and θgF, but not nC/nF/ng. Patent-derived          ║
 * ║    dPgF is reconstructed as θgF - (0.6438 - 0.001682·νd) for every element.        ║
 * ║    No line indices are authored from proxies. Defensible public catalog names are  ║
 * ║    retained where catalog coordinates support them; unresolved materials remain     ║
 * ║    manufacturer-constrained or vendor-neutral coordinate classes. Runtime Sellmeier ║
 * ║    resolution is used only where the annotation round-trips against patent nd/νd. ║
 * ║                                                                                     ║
 * ║  Manufacturer identity/spec source: Canon Camera Museum, EF600mm f/4L IS III USM. ║
 * ║  Catalog anchors: HOYA PCD51/NBFD15-W/FD60-W; SCHOTT N-LASF44; OHARA legacy   ║
 * ║  S-NPH53/S-NBH53 plus S-NPH4/S-LAH59/S-NBH56; CaF2: Malitson (1963).            ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-ef-600f4l-is-iii-usm",
  maker: "Canon",
  name: "CANON EF 600mm f/4 L IS III USM",
  subtitle: "US 2019/0041605 A1 Example 4 — production correlation inferred",
  specs: [
    "17 ELEMENTS / 13 GROUPS PRODUCTION; 16 / 12 ACTIVE MODEL",
    "600mm f/4 MARKETED",
    "f ≈ 587.93 mm / F4.12 DESIGN",
    "2ω ≈ 4.22°",
    "2 FLUORITE + 1 SUPER UD",
    "ALL-SPHERICAL",
    "INNER FOCUS / IS",
  ],

  focalLengthMarketing: 600,
  focalLengthDesign: 587.932441008,
  apertureMarketing: 4,
  apertureDesign: 4.12,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2019/0041605 A1",
  patentAuthors: ["Shinichiro Saito", "Makoto Nakahara"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2019,
  elementCount: 16,
  groupCount: 12,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      diagramLabel: "E1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.59349,
      vd: 67,
      fl: 453.812077,
      glass: "PCD51 (HOYA)",
      dPgF: 0.004994,
    },
    {
      id: 2,
      name: "E2",
      diagramLabel: "E2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 95.1,
      fl: 187.103675,
      glass: "Fluorite (CaF2; manufacturer-constrained)",
      apd: "inferred",
      apdNote: "Production-correlated fluorite; patent θgF = 0.5373 gives ΔPgF = +0.05345820.",
      dPgF: 0.0534582,
    },
    {
      id: 3,
      name: "E3",
      diagramLabel: "E3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 33.27,
      fl: -109.711528,
      glass: "NBFD15-W (HOYA)",
      dPgF: 0.00026014,
    },
    {
      id: 4,
      name: "E4",
      diagramLabel: "E4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.43387,
      vd: 95.1,
      fl: 281.94187,
      glass: "Fluorite (CaF2; manufacturer-constrained)",
      apd: "inferred",
      apdNote: "Production-correlated fluorite; patent θgF = 0.5373 gives ΔPgF = +0.05345820.",
      dPgF: 0.0534582,
    },
    {
      id: 5,
      name: "E5",
      diagramLabel: "E5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.88,
      fl: 166.944809,
      glass: "S-NPH53 (OHARA; legacy)",
      dPgF: 0.01816616,
    },
    {
      id: 6,
      name: "E6",
      diagramLabel: "E6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.8042,
      vd: 46.5,
      fl: -89.468882,
      glass: "N-LASF44 (SCHOTT)",
      dPgF: -0.008387,
      cemented: "E6-E7",
    },
    {
      id: 7,
      name: "E7",
      diagramLabel: "E7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.437,
      vd: 95.1,
      fl: 109.196204,
      glass: "437951 ultra-low-dispersion class; spectral proxy FCD100 (HOYA)",
      apd: "inferred",
      apdNote: "Production-correlated Super UD; patent θgF = 0.5326 gives ΔPgF = +0.04875820.",
      dPgF: 0.0487582,
      cemented: "E6-E7",
    },
    {
      id: 8,
      name: "E8",
      diagramLabel: "E8",
      label: "Element 8 / L2 focus unit",
      type: "Negative Meniscus",
      nd: 1.59349,
      vd: 67,
      fl: -120.515837,
      glass: "PCD51 (HOYA)",
      dPgF: 0.004994,
    },
    {
      id: 9,
      name: "E9",
      diagramLabel: "E9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.89286,
      vd: 20.36,
      fl: -81.408919,
      glass: "S-NPH4 (OHARA)",
      dPgF: 0.02974552,
      cemented: "E9-E10",
    },
    {
      id: 10,
      name: "E10",
      diagramLabel: "E10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.738,
      vd: 32.26,
      fl: 63.382733,
      glass: "S-NBH53 (OHARA; legacy)",
      dPgF: 0.00036132,
      cemented: "E9-E10",
    },
    {
      id: 11,
      name: "E11",
      diagramLabel: "E11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.46,
      fl: 57.478514,
      glass: "FD60-W (HOYA)",
      dPgF: 0.01462372,
      cemented: "E11-E12",
    },
    {
      id: 12,
      name: "E12",
      diagramLabel: "E12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.59349,
      vd: 67,
      fl: -51.60495,
      glass: "PCD51 (HOYA)",
      dPgF: 0.004994,
      cemented: "E11-E12",
    },
    {
      id: 13,
      name: "E13",
      diagramLabel: "E13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.816,
      vd: 46.62,
      fl: -56.987445,
      glass: "S-LAH59 (OHARA)",
      dPgF: -0.00858516,
    },
    {
      id: 14,
      name: "E14",
      diagramLabel: "E14",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.85478,
      vd: 24.8,
      fl: 82.602886,
      glass: "S-NBH56 (OHARA)",
      dPgF: 0.0101136,
    },
    {
      id: 15,
      name: "E15",
      diagramLabel: "E15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.66565,
      vd: 35.64,
      fl: 55.385866,
      glass: "H-ZBaF4 catalog equivalent (patent 666356; production supplier unspecified)",
      dPgF: -0.00145352,
      cemented: "E15-E16",
    },
    {
      id: 16,
      name: "E16",
      diagramLabel: "E16",
      label: "Element 16",
      type: "Biconcave Negative",
      nd: 1.89286,
      vd: 20.36,
      fl: -59.583092,
      glass: "S-NPH4 (OHARA)",
      dPgF: 0.02974552,
      cemented: "E15-E16",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 285.176, d: 12.69, nd: 1.59349, elemId: 1, sd: 77.1 },
    { label: "2", R: -4767.657, d: 161.04, nd: 1.0, elemId: 0, sd: 75.8 },
    { label: "3", R: 122.017, d: 15.58, nd: 1.43387, elemId: 2, sd: 48.5 },
    { label: "4", R: -233.175, d: 0.0, nd: 1.0, elemId: 0, sd: 44.8 },
    { label: "5", R: -238.384, d: 1.6, nd: 1.8061, elemId: 3, sd: 44.8 },
    { label: "6", R: 141.021, d: 0.15, nd: 1.0, elemId: 0, sd: 44.5 },
    { label: "7", R: 93.182, d: 10.34, nd: 1.43387, elemId: 4, sd: 44.5 },
    { label: "8", R: 377.979, d: 45.03, nd: 1.0, elemId: 0, sd: 42.9 },
    { label: "9", R: 80.811, d: 5.76, nd: 1.84666, elemId: 5, sd: 34.9 },
    { label: "10", R: 182.524, d: 0.15, nd: 1.0, elemId: 0, sd: 33.2 },
    { label: "11", R: 120.397, d: 2.0, nd: 1.8042, elemId: 6, sd: 33.1 },
    { label: "12", R: 44.703, d: 13.45, nd: 1.437, elemId: 7, sd: 32.5 },
    { label: "13", R: 642.625, d: 15.35, nd: 1.0, elemId: 0, sd: 29.2 },
    { label: "STO", R: 1e15, d: 3.49, nd: 1.0, elemId: 0, sd: 22.42736934 },
    { label: "15", R: 491.75, d: 1.6, nd: 1.59349, elemId: 8, sd: 23.1 },
    { label: "16", R: 62.367, d: 38.06, nd: 1.0, elemId: 0, sd: 22.8 },
    { label: "17", R: 325.083, d: 1.5, nd: 1.89286, elemId: 9, sd: 17.6 },
    { label: "18", R: 59.275, d: 4.64, nd: 1.738, elemId: 10, sd: 17.5 },
    { label: "19", R: -214.466, d: 1.0, nd: 1.0, elemId: 0, sd: 17.1 },
    { label: "20", R: 74.22, d: 4.0, nd: 1.80518, elemId: 11, sd: 16.9 },
    { label: "21", R: -119.987, d: 1.3, nd: 1.59349, elemId: 12, sd: 16.1 },
    { label: "22", R: 41.29, d: 4.13, nd: 1.0, elemId: 0, sd: 14.6 },
    { label: "23", R: -102.097, d: 1.3, nd: 1.816, elemId: 13, sd: 14.5 },
    { label: "24", R: 85.886, d: 3.79, nd: 1.0, elemId: 0, sd: 14.9 },
    { label: "25", R: 68.86, d: 5.13, nd: 1.85478, elemId: 14, sd: 15.2 },
    { label: "26", R: 2687.062, d: 30.08, nd: 1.0, elemId: 0, sd: 15.2 },
    { label: "27", R: 99.601, d: 9.53, nd: 1.66565, elemId: 15, sd: 15.5 },
    { label: "28", R: -56.296, d: 1.5, nd: 1.89286, elemId: 16, sd: 15.5 },
    { label: "29", R: 979.304, d: 80.59, nd: 1.0, elemId: 0, sd: 15.5 },
  ],

  asph: {},

  /* ── Variable air spacings: infinity → reconstructed 4.2 m MFD ── */
  var: {
    STO: [3.49, 22.396939851],
    "16": [38.06, 19.153060149],
  },
  varLabels: [
    ["STO", "D14"],
    ["16", "D16"],
  ],

  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "13" },
    { text: "L2 FOCUS (−)", fromSurface: "15", toSurface: "16" },
    { text: "L3A (+)", fromSurface: "17", toSurface: "19" },
    { text: "L3B IS (−)", fromSurface: "20", toSurface: "22" },
    { text: "L3C", fromSurface: "23", toSurface: "29" },
  ],
  doublets: [
    { text: "E6-E7", fromSurface: "11", toSurface: "13" },
    { text: "E9-E10", fromSurface: "17", toSurface: "19" },
    { text: "E11-E12", fromSurface: "20", toSurface: "22" },
    { text: "E15-E16", fromSurface: "27", toSurface: "29" },
  ],

  closeFocusM: 4.2,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: E8/L2 (surfaces 15–16) translates 18.906939851 mm imageward from infinity to the modeled 4.2 m MFD. The STO→15 gap changes 3.49→22.396939851 mm and d16 changes 38.06→19.153060149 mm, preserving their 41.55 mm sum and the fixed image plane. The patent publishes no finite-focus spacing row; the reconstruction is solved from Canon's MFD and independently cross-checks at |m|=0.149215 versus the marketed 0.15×.",

  nominalFno: 4.12,
  fstopSeries: [4.12, 5.6, 8, 11, 16, 22, 32],
  apertureBlades: 9,
  maxFstop: 32,

  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
