import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — SIGMA 23mm F1.4 DC DN | Contemporary          ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2024-035865 A, Numerical Example 1 (Sigma).        ║
 * ║  Positive fixed front group, single negative inner-focus element,    ║
 * ║  and positive rear relay / field-corrector group.                   ║
 * ║  13 elements / 10 groups, 3 aspherical surfaces on 2 elements.      ║
 * ║  Focus: G2 / L21 alone moves image-ward from infinity to 0.25 m.    ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    No scale factor was applied. Example 1 computes at f = 22.31 mm  ║
 * ║    and is represented directly; 23 mm is the marketed focal length. ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    The patent does not publish clear semi-diameters. Values below   ║
 * ║    are conservative inferred drawing / ray-trace apertures. They    ║
 * ║    were constrained by the 52 mm filter envelope, paraxial marginal ║
 * ║    and chief-ray heights, sd/|R| < 0.90, element SD ratio <= 1.25,  ║
 * ║    positive edge thickness, and signed cross-gap sag clearance.     ║
 * ║    They are rendering / tracing apertures, not patent-published CA. ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:            ║
 * ║    ✓ Glass elements and surfaces from front element to image plane  ║
 * ║    ✓ Aperture stop and variable focus gaps                          ║
 * ║    ✗ No filters, sensor cover glass, mount, AF motor, or barrel     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sigma-23mm-f14-dc-dn-c",
  maker: "Sigma",
  name: "SIGMA 23mm F1.4 DC DN | Contemporary",
  subtitle: "JP 2024-035865 A Example 1 — Sigma / Murakami",
  specs: [
    "13 elements / 10 groups",
    "f = 22.31 mm design; 23 mm marketed",
    "F1.46 design; F1.4 marketed",
    "2ω = 67.85° patent field",
    "3 aspherical surfaces on 2 elements",
    "3 SLD-class elements",
  ],

  focalLengthMarketing: 23,
  focalLengthDesign: 22.3102623,
  apertureMarketing: 1.4,
  apertureDesign: 1.46,
  lensMounts: ["l-mount", "canon-rf", "fujifilm-x", "sony-fe"],
  imageFormat: "aps-c",
  patentYear: 2024,
  elementCount: 13,
  groupCount: 10,
  apertureBlades: 9,
  apertureBladeRoundedness: 1,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11 front negative meniscus",
      type: "Negative Meniscus",
      nd: 1.55032,
      vd: 75.5,
      fl: -37.4,
      glass: "FCD705 (HOYA, SLD class)",
      role: "Front low-dispersion negative meniscus controlling wide-field incidence angle.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12 negative meniscus",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.2,
      fl: -117.0,
      glass: "BSC7 / N-BK7 / S-BSL7 class crown",
      role: "Second weak front negative meniscus sharing the front-group negative power.",
    },
    {
      id: 3,
      name: "L13",
      label: "L13 L1p positive meniscus",
      type: "Positive Meniscus",
      nd: 1.94595,
      vd: 17.98,
      fl: 86.6,
      glass: "FDS18 (HOYA, anomalous-dispersion dense flint)",
      apd: "patent",
      dPgF: 0.038634,
      apdNote: "Patent lists PgF = 0.6546; ΔPgF = PgF + 0.0018νd − 0.64833 = +0.0386.",
      role: "Positive L1p element satisfying the patent's low-Abbe / anomalous-dispersion condition for lateral color correction.",
    },
    {
      id: 4,
      name: "L14",
      label: "L14 doublet negative",
      type: "Biconcave Negative",
      nd: 1.77047,
      vd: 29.74,
      fl: -26.0,
      glass: "NBFD29 (HOYA)",
      cemented: "D1",
      role: "Negative front component of the first G1B cemented doublet.",
    },
    {
      id: 5,
      name: "L15",
      label: "L15 doublet positive",
      type: "Biconvex Positive",
      nd: 1.87071,
      vd: 40.73,
      fl: 42.5,
      glass: "TAFD32 (HOYA)",
      cemented: "D1",
      role: "High-index positive component of the leading G1B cemented doublet.",
    },
    {
      id: 6,
      name: "L16",
      label: "L16 positive",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.25,
      fl: 43.1,
      glass: "TAFD35 (HOYA)",
      role: "High-index positive lens carrying part of G1B's convergence.",
    },
    {
      id: 7,
      name: "L17",
      label: "L17 SLD positive",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      fl: 58.7,
      glass: "FCD515 (HOYA, SLD class)",
      role: "Low-dispersion positive element in the stop-adjacent part of G1B.",
    },
    {
      id: 8,
      name: "L18",
      label: "L18 SLD doublet positive",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      fl: 29.3,
      glass: "FCD515 (HOYA, SLD class)",
      cemented: "D2",
      role: "Low-dispersion positive component of the principal G1B achromatizing doublet.",
    },
    {
      id: 9,
      name: "L19",
      label: "L19 doublet negative",
      type: "Biconcave Negative",
      nd: 1.85451,
      vd: 25.15,
      fl: -30.4,
      glass: "NBFD25 (HOYA)",
      cemented: "D2",
      role: "High-dispersion negative component paired with L18 for axial-color correction.",
    },
    {
      id: 10,
      name: "L21",
      label: "L21 inner-focus asphere",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.6935,
      vd: 53.2,
      fl: -38.19,
      glass: "MP-LAC130 / M-LAC130 (HOYA moldable)",
      role: "Single negative inner-focus element; moves image-ward for near focus.",
    },
    {
      id: 11,
      name: "L31",
      label: "L31 rear doublet negative",
      type: "Negative Meniscus",
      nd: 1.56732,
      vd: 42.84,
      fl: -58.2,
      glass: "E-FL6 (HOYA) / S-TIL26 (OHARA) class",
      cemented: "D3",
      role: "Negative component of the rear positive cemented group.",
    },
    {
      id: 12,
      name: "L32",
      label: "L32 rear doublet positive",
      type: "Biconvex Positive",
      nd: 1.76385,
      vd: 48.49,
      fl: 18.0,
      glass: "S-LAH96 (OHARA)",
      cemented: "D3",
      role: "High-index positive rear-group power element.",
    },
    {
      id: 13,
      name: "L33",
      label: "L33 rear biaspheric meniscus",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.8061,
      vd: 40.73,
      fl: -94.5,
      glass: "MP-NBFD130 / M-NBFD130 (HOYA moldable)",
      role: "Rear field-correcting biaspheric negative meniscus.",
    },
  ],

  surfaces: [
    { label: "1", R: 95.7011, d: 1.2, nd: 1.55032, elemId: 1, sd: 18.8 },
    { label: "2", R: 16.8636, d: 7.443, nd: 1.0, elemId: 0, sd: 15.1 },
    { label: "3", R: 76.853, d: 0.95, nd: 1.5168, elemId: 2, sd: 14.2 },
    { label: "4", R: 33.703, d: 2.538, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "5", R: 56.2568, d: 3.6, nd: 1.94595, elemId: 3, sd: 16.0 },
    { label: "6", R: 174.2087, d: 8.717, nd: 1.0, elemId: 0, sd: 15.8 },
    { label: "7", R: -25.7938, d: 0.9, nd: 1.77047, elemId: 4, sd: 16.2 },
    { label: "8", R: 91.6288, d: 4.612, nd: 1.87071, elemId: 5, sd: 16.5 },
    { label: "9", R: -60.5055, d: 0.15, nd: 1.0, elemId: 0, sd: 17.3 },
    { label: "10", R: 269.5616, d: 4.541, nd: 1.91082, elemId: 6, sd: 17.0 },
    { label: "11", R: -45.5516, d: 0.35, nd: 1.0, elemId: 0, sd: 17.2 },
    { label: "12", R: 129.9318, d: 5.152, nd: 1.59282, elemId: 7, sd: 17.0 },
    { label: "13", R: -46.8478, d: 0.15, nd: 1.0, elemId: 0, sd: 16.5 },
    { label: "14", R: 38.6911, d: 7.909, nd: 1.59282, elemId: 8, sd: 15.8 },
    { label: "15", R: -29.0872, d: 0.9, nd: 1.85451, elemId: 9, sd: 13.0 },
    { label: "16", R: 246.9248, d: 1.979, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "STO", R: 1e15, d: 3.2524, nd: 1.0, elemId: 0, sd: 10.609 },
    { label: "18A", R: 238.1843, d: 1.1, nd: 1.6935, elemId: 10, sd: 11.5 },
    { label: "19", R: 23.7911, d: 7.3908, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "20", R: 48.8216, d: 0.9, nd: 1.56732, elemId: 11, sd: 14.5 },
    { label: "21", R: 19.5605, d: 8.205, nd: 1.76385, elemId: 12, sd: 13.3 },
    { label: "22", R: -37.7493, d: 2.1, nd: 1.0, elemId: 0, sd: 15.2 },
    { label: "23A", R: 179.6006, d: 1.5, nd: 1.8061, elemId: 13, sd: 15.0 },
    { label: "24A", R: 53.285, d: 18.7827, nd: 1.0, elemId: 0, sd: 15.0 },
  ],

  asph: {
    "18A": {
      K: 0,
      A4: -5.2748e-6,
      A6: -5.56773e-9,
      A8: 6.44743e-12,
      A10: -5.11734e-13,
      A12: 2.64452e-15,
      A14: 0,
    },
    "23A": {
      K: 0,
      A4: 1.06941e-5,
      A6: 4.1793e-8,
      A8: -7.73151e-10,
      A10: -6.18608e-13,
      A12: 9.42967e-15,
      A14: 0,
    },
    "24A": {
      K: 0,
      A4: 3.33861e-5,
      A6: 6.67769e-8,
      A8: -6.06177e-10,
      A10: 5.03576e-13,
      A12: 2.49819e-15,
      A14: 0,
    },
  },

  var: {
    STO: [3.2524, 7.3364],
    "19": [7.3908, 3.3069],
  },
  varLabels: [
    ["STO", "D17"],
    ["19", "D19"],
  ],
  focusDescription:
    "Inner focus by the single negative G2 element L21; L21 moves image-ward by 4.084 mm from infinity to 0.25 m while G1, the stop, G3, and BF remain fixed.",

  groups: [
    { text: "G1A", fromSurface: "1", toSurface: "6" },
    { text: "G1B", fromSurface: "7", toSurface: "16" },
    { text: "G2 / IF", fromSurface: "18A", toSurface: "19" },
    { text: "G3", fromSurface: "20", toSurface: "24A" },
  ],
  doublets: [
    { text: "L14–L15", fromSurface: "7", toSurface: "9" },
    { text: "L18–L19", fromSurface: "14", toSurface: "16" },
    { text: "L31–L32", fromSurface: "20", toSurface: "22" },
  ],

  closeFocusM: 0.25,
  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  yScFill: 0.72,
};

export default LENS_DATA satisfies LensDataInput;
