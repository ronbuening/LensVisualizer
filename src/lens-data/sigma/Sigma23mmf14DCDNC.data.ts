import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║    No scale factor was applied. Example 1 prints f = 22.31 mm  ║
 * ║    and is represented directly; 23 mm is the marketed focal length. ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS: native Figure 1 has no numeric clear       ║
 * ║    diameters. Source optical caps and five resolved outer shoulders ║
 * ║    are reconstructed from the 825 ppi original with ±0.25 mm        ║
 * ║    practical uncertainty. Clear caps, outer blank and bonded        ║
 * ║    interface constraints remain distinct; no opaque lands or cuts. ║
 * ║    Every printed R/d/asphere, index/Abbe pair, stop and focus cam    ║
 * ║    is retained. Catalog curves are qualified spectral proxies; only ║
 * ║    L13 has the source-published partial and APD classification.     ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:            ║
 * ║    ✓ Glass elements and surfaces from front element to image plane  ║
 * ║    ✓ Aperture stop and variable focus gaps                          ║
 * ║    ✗ No filters, sensor cover glass, mount, AF motor, or barrel     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "sigma-23mm-f14-dc-dn-c",
  maker: "Sigma",
  name: "SIGMA 23mm f/1.4 DC DN | Contemporary",
  subtitle: "JP 2024-035865 A Numerical Example 1 — Sigma / Murakami",

  catalog: {
    lensMounts: ["l-mount", "canon-rf", "fujifilm-x", "sony-fe"],
    imageFormat: "aps-c",
    specs: [
      "13 elements / 10 groups",
      "f = 22.31 mm design; 23 mm marketed",
      "F1.46 design; F1.4 marketed",
      "2ω = 67.85° patent field",
      "3 aspherical surfaces on 2 elements",
      "3 low-dispersion media; production assignment unconfirmed",
    ],
    elementCount: 13,
    groupCount: 10,
    focalLengthMm: { marketing: 23, design: 22.31 },
    fNumber: { marketing: 1.4, design: 1.46 },
  },

  source: {
    patentNumber: "JP 2024-035865 A",
    example: { label: "Numerical Example 1", id: "1" },
    patentYear: 2024,
    authors: ["Kyosuke Murakami"],
    assignees: ["Sigma Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11 front negative meniscus",
      type: "Negative Meniscus",
      nd: 1.55032,
      vd: 75.5,
      focalLengthMm: -37.4,
      glass: "FCD705 (qualified spectral proxy)",
      role: "Front low-dispersion negative meniscus controlling wide-field incidence angle.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12 negative meniscus",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: -117.0,
      glass: "BSC7 / N-BK7 / S-BSL7 (qualified spectral proxies)",
      role: "Second weak front negative meniscus sharing the front-group negative power.",
    },
    {
      id: 3,
      name: "L13",
      label: "L13 L1p positive meniscus",
      type: "Positive Meniscus",
      nd: 1.94595,
      vd: 17.98,
      focalLengthMm: 86.6,
      glass: "FDS18 (qualified spectral proxy; source anomalous partial)",
      apd: "patent",
      apdNote:
        "Original Numerical Example 1, PDF page9, prints PgF 0.6546; paragraph0029–0030 page6 explicitly identifies L1p anomalous dispersion. Source normal gives ΔPgF +0.038634 (printed summary +0.0386); retained engine dPgF +0.041042 uses normal0.6438−0.001682νd. Supplier/chemistry unconfirmed.",
      role: "Positive L1p element satisfying the patent's low-Abbe / anomalous-dispersion condition for lateral color correction.",
      dPgF: 0.041042,
    },
    {
      id: 4,
      name: "L14",
      label: "L14 doublet negative",
      type: "Biconcave Negative",
      nd: 1.77047,
      vd: 29.74,
      focalLengthMm: -26.0,
      glass: "NBFD29 (qualified spectral proxy)",
      role: "Negative front component of the first G1B cemented doublet.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L15",
      label: "L15 doublet positive",
      type: "Biconvex Positive",
      nd: 1.87071,
      vd: 40.73,
      focalLengthMm: 42.5,
      glass: "TAFD32 (qualified spectral proxy)",
      role: "High-index positive component of the leading G1B cemented doublet.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L16",
      label: "L16 positive",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.25,
      focalLengthMm: 43.1,
      glass: "TAFD35 (qualified spectral proxy)",
      role: "High-index positive lens carrying part of G1B's convergence.",
    },
    {
      id: 7,
      name: "L17",
      label: "L17 low-dispersion positive",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      focalLengthMm: 58.7,
      glass: "FCD515 (qualified spectral proxy)",
      role: "Low-dispersion positive element in the stop-adjacent part of G1B.",
    },
    {
      id: 8,
      name: "L18",
      label: "L18 low-dispersion doublet positive",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      focalLengthMm: 29.3,
      glass: "FCD515 (qualified spectral proxy)",
      role: "Low-dispersion positive component of the principal G1B achromatizing doublet.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L19",
      label: "L19 doublet negative",
      type: "Biconcave Negative",
      nd: 1.85451,
      vd: 25.15,
      focalLengthMm: -30.4,
      glass: "NBFD25 (qualified spectral proxy)",
      role: "High-dispersion negative component paired with L18 for axial-color correction.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L21",
      label: "L21 inner-focus asphere",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.6935,
      vd: 53.2,
      focalLengthMm: -38.19,
      glass: "MP-LAC130 / M-LAC130 (qualified spectral proxies)",
      role: "Single negative inner-focus element; moves image-ward for near focus.",
    },
    {
      id: 11,
      name: "L31",
      label: "L31 rear doublet negative",
      type: "Negative Meniscus",
      nd: 1.56732,
      vd: 42.84,
      focalLengthMm: -58.2,
      glass: "E-FL6 / S-TIL26 (qualified spectral proxies)",
      role: "Negative component of the rear positive cemented group.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L32",
      label: "L32 rear doublet positive",
      type: "Biconvex Positive",
      nd: 1.76385,
      vd: 48.49,
      focalLengthMm: 18.0,
      glass: "S-LAH96 (qualified spectral proxy)",
      role: "High-index positive rear-group power element.",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L33",
      label: "L33 rear biaspheric meniscus",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.8061,
      vd: 40.73,
      focalLengthMm: -94.5,
      glass: "MP-NBFD130 / M-NBFD130 (qualified spectral proxies)",
      role: "Rear field-correcting biaspheric negative meniscus.",
    },
  ],

  surfaces: [
    { label: "1", R: 95.7011, d: 1.2, sd: 17.4, medium: 1 },
    { label: "2", R: 16.8636, d: 7.443, sd: 13.7, rimExtensionSd: 17.4 },
    { label: "3", R: 76.853, d: 0.95, sd: 14.1, medium: 2 },
    { label: "4", R: 33.703, d: 2.538, sd: 12.6, rimExtensionSd: 14.1 },
    { label: "5", R: 56.2568, d: 3.6, sd: 13.7, medium: 3 },
    { label: "6", R: 174.2087, d: 8.717, sd: 13.7 },
    { label: "7", R: -25.7938, d: 0.9, sd: 11.7, rimExtensionSd: 14.8, medium: 4 },
    { label: "8", R: 91.6288, d: 4.612, sd: 14.8, medium: 5 },
    { label: "9", R: -60.5055, d: 0.15, sd: 14.8 },
    { label: "10", R: 269.5616, d: 4.541, sd: 15.9, medium: 6 },
    { label: "11", R: -45.5516, d: 0.35, sd: 15.9 },
    { label: "12", R: 129.9318, d: 5.152, sd: 15.9, medium: 7 },
    { label: "13", R: -46.8478, d: 0.15, sd: 15.9 },
    { label: "14", R: 38.6911, d: 7.909, sd: 14.3, medium: 8 },
    { label: "15", R: -29.0872, d: 0.9, sd: 14.3, medium: 9 },
    { label: "16", R: 246.9248, d: 1.979, sd: 12.5, rimExtensionSd: 14.3 },
    { label: "STO", R: "flat" },
    {
      label: "18A",
      R: 238.1843,
      d: 1.1,
      sd: 10.9,
      medium: 10,
      asphere: { K: 0, A4: -5.2748e-6, A6: -5.56773e-9, A8: 6.44743e-12, A10: -5.11734e-13, A12: 2.64452e-15 },
    },
    { label: "19", R: 23.7911, sd: 10, rimExtensionSd: 10.9 },
    { label: "20", R: 48.8216, d: 0.9, sd: 11.2, medium: 11 },
    { label: "21", R: 19.5605, d: 8.205, sd: 11.2, medium: 12 },
    { label: "22", R: -37.7493, d: 2.1, sd: 11.2 },
    {
      label: "23A",
      R: 179.6006,
      d: 1.5,
      sd: 11.2,
      medium: 13,
      asphere: { K: 0, A4: 1.06941e-5, A6: 4.1793e-8, A8: -7.73151e-10, A10: -6.18608e-13, A12: 9.42967e-15 },
    },
    {
      label: "24A",
      R: 53.285,
      d: 18.7827,
      sd: 11.2,
      asphere: { K: 0, A4: 3.33861e-5, A6: 6.67769e-8, A8: -6.06177e-10, A10: 5.03576e-13, A12: 2.49819e-15 },
    },
  ],

  focus: {
    closeFocusM: 0.25,
    description:
      "Source-tabulated single negative G2/L21 moves imageward by 4.084 mm; all published gaps, fixed G1/stop/G3 and BF are retained. The source near row labels 0.25 m and separately prints d0=155 mm before surface 1 (about 249.322 mm total). Intermediate focus positions are illustrative; Gaussian conjugates and display-distance probes are reported separately.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: { STO: { label: "D17", values: [[3.2524, 7.3364]] }, "19": { label: "D19", values: [[7.3908, 3.3069]] } },

  aperture: { nominalFNumber: 1.46, fStops: [1.46, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 9, bladeRoundedness: 1 },

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

  layout: { yScFill: 0.72 },
} satisfies LensDataV2Input;

export default LENS_DATA;
