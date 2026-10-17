import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON EF 600mm f/4 L IS III USM                                     ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Patent source: US 2019/0041605 A1, Example 4 / Numerical Data 4.                ║
 * ║  Production correlation: inferred from Canon's EF600mm f/4L IS III USM data.     ║
 * ║  Active LensVisualizer model: 16 elements / 12 air-separated groups, all spherical, ║
 * ║  plus the rear filter plate G.                                                      ║
 * ║  REAR FILTER PLATE: patent surfaces 30–31 are the final parallel glass block G      ║
 * ║  (e.g. filter): 2.20 mm, nd 1.51633, νd 64.14, θgF 0.5353. It is drawn as a plane-  ║
 * ║  parallel plate element, not counted in elementCount, with a ray-trace estimated    ║
 * ║  semi-diameter (the patent lists none). Surface 29 keeps the patent d29 = 5.25 mm   ║
 * ║  and 73.90 mm of air follows the plate. Air-equivalent BF for reference: 5.25 +     ║
 * ║  2.20/1.51633 + 73.90 = 80.600871 mm (patent 80.59). The production 17-element /    ║
 * ║  13-group count is recovered when G is counted.                                     ║
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
 * ║    The stop radius is derived from the design f-number (F/4.12).                   ║
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
  schema: 2,
  key: "canon-ef-600f4l-is-iii-usm",
  maker: "Canon",
  name: "CANON EF 600mm f/4 L IS III USM",
  subtitle: "US 2019/0041605 A1 Example 4 — production correlation inferred",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "17 ELEMENTS / 13 GROUPS PRODUCTION; 16 / 12 ACTIVE MODEL",
      "600mm f/4 MARKETED",
      "f ≈ 587.93 mm / F4.12 DESIGN",
      "2ω ≈ 4.22°",
      "2 FLUORITE + 1 SUPER UD",
      "ALL-SPHERICAL",
      "INNER FOCUS / IS",
    ],
    elementCount: 16,
    groupCount: 12,
    focalLengthMm: { marketing: 600, design: 587.932441008 },
    fNumber: { marketing: 4, design: 4.12 },
  },

  source: {
    patentNumber: "US 2019/0041605 A1",
    patentYear: 2019,
    authors: ["Shinichiro Saito", "Makoto Nakahara"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.59349,
      vd: 67,
      focalLengthMm: 453.812077,
      glass: "PCD51 (HOYA)",
      diagramLabel: "E1",
      dPgF: 0.004994,
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 95.1,
      focalLengthMm: 187.103675,
      glass: "Fluorite (CaF2; manufacturer-constrained)",
      apd: "inferred",
      apdNote: "Production-correlated fluorite; patent θgF = 0.5373 gives ΔPgF = +0.05345820.",
      diagramLabel: "E2",
      dPgF: 0.0534582,
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 33.27,
      focalLengthMm: -109.711528,
      glass: "NBFD15-W (HOYA)",
      diagramLabel: "E3",
      dPgF: 0.00026014,
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.43387,
      vd: 95.1,
      focalLengthMm: 281.94187,
      glass: "Fluorite (CaF2; manufacturer-constrained)",
      apd: "inferred",
      apdNote: "Production-correlated fluorite; patent θgF = 0.5373 gives ΔPgF = +0.05345820.",
      diagramLabel: "E4",
      dPgF: 0.0534582,
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.88,
      focalLengthMm: 166.944809,
      glass: "S-NPH53 (OHARA; legacy)",
      diagramLabel: "E5",
      dPgF: 0.01816616,
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.8042,
      vd: 46.5,
      focalLengthMm: -89.468882,
      glass: "N-LASF44 (SCHOTT)",
      diagramLabel: "E6",
      cemented: "E6-E7",
      dPgF: -0.008387,
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: 109.196204,
      glass: "437951 ultra-low-dispersion class; spectral proxy FCD100 (HOYA)",
      apd: "inferred",
      apdNote: "Production-correlated Super UD; patent θgF = 0.5326 gives ΔPgF = +0.04875820.",
      diagramLabel: "E7",
      cemented: "E6-E7",
      dPgF: 0.0487582,
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8 / L2 focus unit",
      type: "Negative Meniscus",
      nd: 1.59349,
      vd: 67,
      focalLengthMm: -120.515837,
      glass: "PCD51 (HOYA)",
      diagramLabel: "E8",
      dPgF: 0.004994,
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.89286,
      vd: 20.36,
      focalLengthMm: -81.408919,
      glass: "S-NPH4 (OHARA)",
      diagramLabel: "E9",
      cemented: "E9-E10",
      dPgF: 0.02974552,
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.738,
      vd: 32.26,
      focalLengthMm: 63.382733,
      glass: "S-NBH53 (OHARA; legacy)",
      diagramLabel: "E10",
      cemented: "E9-E10",
      dPgF: 0.00036132,
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.46,
      focalLengthMm: 57.478514,
      glass: "FD60-W (HOYA)",
      diagramLabel: "E11",
      cemented: "E11-E12",
      dPgF: 0.01462372,
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.59349,
      vd: 67,
      focalLengthMm: -51.60495,
      glass: "PCD51 (HOYA)",
      diagramLabel: "E12",
      cemented: "E11-E12",
      dPgF: 0.004994,
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.816,
      vd: 46.62,
      focalLengthMm: -56.987445,
      glass: "S-LAH59 (OHARA)",
      diagramLabel: "E13",
      dPgF: -0.00858516,
    },
    {
      id: 14,
      name: "E14",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.85478,
      vd: 24.8,
      focalLengthMm: 82.602886,
      glass: "S-NBH56 (OHARA)",
      diagramLabel: "E14",
      dPgF: 0.0101136,
    },
    {
      id: 15,
      name: "E15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.66565,
      vd: 35.64,
      focalLengthMm: 55.385866,
      glass: "H-ZBaF4 catalog equivalent (patent 666356; production supplier unspecified)",
      diagramLabel: "E15",
      cemented: "E15-E16",
      dPgF: -0.00145352,
    },
    {
      id: 16,
      name: "E16",
      label: "Element 16",
      type: "Biconcave Negative",
      nd: 1.89286,
      vd: 20.36,
      focalLengthMm: -59.583092,
      glass: "S-NPH4 (OHARA)",
      diagramLabel: "E16",
      cemented: "E15-E16",
      dPgF: 0.02974552,
    },
    {
      id: 17,
      name: "G",
      label: "Drop-in filter G",
      type: "Plane-Parallel Plate",
      nd: 1.51633,
      vd: 64.14,
      glass: "S-BSL7 (OHARA)",
      role: "Plane-parallel filter plate of the patent prescription (US 2019/0041605 A1, Numerical Data 4 surfaces 30–31; patent θgF 0.5353), in the rear drop-in filter holder. The patent states the last two surfaces of each example are a glass block such as a filter; Canon counts it in the production lens.",
      diagramLabel: "G",
      dPgF: -0.00062,
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 285.176, d: 12.69, sd: 77.1, medium: 1 },
    { label: "2", R: -4767.657, d: 161.04, sd: 75.8 },
    { label: "3", R: 122.017, d: 15.58, sd: 48.5, medium: 2 },
    { label: "4", R: -233.175, d: 0.0, sd: 44.8 },
    { label: "5", R: -238.384, d: 1.6, sd: 44.8, medium: 3 },
    { label: "6", R: 141.021, d: 0.15, sd: 44.5 },
    { label: "7", R: 93.182, d: 10.34, sd: 44.5, medium: 4 },
    { label: "8", R: 377.979, d: 45.03, sd: 42.9 },
    { label: "9", R: 80.811, d: 5.76, sd: 34.9, medium: 5 },
    { label: "10", R: 182.524, d: 0.15, sd: 33.2 },
    { label: "11", R: 120.397, d: 2.0, sd: 33.1, medium: 6 },
    { label: "12", R: 44.703, d: 13.45, sd: 32.5, medium: 7 },
    { label: "13", R: 642.625, d: 15.35, sd: 29.2 },
    { label: "STO", R: "flat" },
    { label: "15", R: 491.75, d: 1.6, sd: 23.1, medium: 8 },
    { label: "16", R: 62.367, sd: 22.8 },
    { label: "17", R: 325.083, d: 1.5, sd: 17.6, medium: 9 },
    { label: "18", R: 59.275, d: 4.64, sd: 17.5, medium: 10 },
    { label: "19", R: -214.466, d: 1.0, sd: 17.1 },
    { label: "20", R: 74.22, d: 4.0, sd: 16.9, medium: 11 },
    { label: "21", R: -119.987, d: 1.3, sd: 16.1, medium: 12 },
    { label: "22", R: 41.29, d: 4.13, sd: 14.6 },
    { label: "23", R: -102.097, d: 1.3, sd: 14.5, medium: 13 },
    { label: "24", R: 85.886, d: 3.79, sd: 14.9 },
    { label: "25", R: 68.86, d: 5.13, sd: 15.2, medium: 14 },
    { label: "26", R: 2687.062, d: 30.08, sd: 15.2 },
    { label: "27", R: 99.601, d: 9.53, sd: 15.5, medium: 15 },
    { label: "28", R: -56.296, d: 1.5, sd: 15.5, medium: 16 },
    { label: "29", R: 979.304, d: 5.25, sd: 15.5 },
    // Drop-in filter G (US 2019/0041605 A1, Numerical Data 4 surfaces 30–31), drawn as a plane-parallel plate.
    // Its sd is a ray-trace estimate (the source lists none).
    { label: "30", R: "flat", d: 2.2, sd: 17.0, medium: 17 },
    { label: "31", R: "flat", d: 73.9, sd: 17.0 }, // drop-in filter → image plane
  ],

  focus: {
    closeFocusM: 4.2,
    description:
      "CONSTRAINED_RECONSTRUCTION: E8/L2 (surfaces 15–16) translates 18.906939851 mm imageward from infinity to the modeled 4.2 m MFD. The STO→15 gap changes 3.49→22.396939851 mm and d16 changes 38.06→19.153060149 mm, preserving their 41.55 mm sum and the fixed image plane. The patent publishes no finite-focus spacing row; the reconstruction is solved from Canon's MFD and independently cross-checks at |m|=0.149215 versus the marketed 0.15×.",
  },

  /* (moved from var) ── Variable air spacings: infinity → reconstructed 4.2 m MFD ── */
  gaps: {
    STO: { label: "D14", values: [[3.49, 22.396939851]] },
    "16": { label: "D16", values: [[38.06, 19.153060149]] },
  },

  aperture: { nominalFNumber: 4.12, fStops: [4.12, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 9 },

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

  layout: { yScFill: 0.32 },
} satisfies LensDataV2Input;

export default LENS_DATA;
