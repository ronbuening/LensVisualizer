import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — Sigma MACRO 105mm F2.8 EX DG OS HSM                    ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2012-58682 A, Example 4 (Sigma / Noriyuki Ogasawara).    ║
 * ║  16 elements / 11 air-separated groups, all spherical surfaces.           ║
 * ║  Focus: floating inner focus; L2a moves imageward and L2c objectward.      ║
 * ║  Stabilization: L3a cemented doublet decenters perpendicular to the axis. ║
 * ║                                                                              ║
 * ║  NOTE ON SCALING:                                                           ║
 * ║    No scale factor is applied. The patent prescription is retained at       ║
 * ║    f = 101.71 mm; production metadata records the marketed 105 mm value.    ║
 * ║                                                                              ║
 * ║  NOTE ON SEMI-DIAMETERS:                                                    ║
 * ║    The patent does not publish clear apertures. Semi-diameters below are    ║
 * ║    conservative, geometry-valid estimates from marginal/chief-ray traces,   ║
 * ║    then constrained by the 62 mm filter thread, thin air gaps, spherical    ║
 * ║    rim limits, and >=0.5 mm minimum edge thickness. They are not asserted   ║
 * ║    as factory mechanical clear apertures.                                   ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "sigma-apo-macro-105mm-f28-os-hsm",
  maker: "Sigma",
  name: "SIGMA MACRO 105mm f/2.8 EX DG OS HSM",
  subtitle: "JP 2012-58682 A Example 4 — Sigma / Ogasawara",

  catalog: {
    lensMounts: ["sigma-sa", "canon-ef", "nikon-f", "sony-a"],
    imageFormat: "135-full-frame",
    specs: [
      "16 elements / 11 groups",
      "105 mm marketed; 101.71 mm design",
      "F2.8 marketed; F2.91 design",
      "2ω = 24.09° design",
      "Floating inner focus; L3a optical stabilizer",
      "All spherical surfaces",
    ],
    elementCount: 16,
    groupCount: 11,
    focalLengthMm: { marketing: 105, design: 101.71 },
    fNumber: { marketing: 2.8, design: 2.91 },
  },

  source: {
    patentNumber: "JP 2012-058682 A",
    patentYear: 2012,
    authors: ["Noriyuki Ogasawara"],
    assignees: ["Sigma Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      focalLengthMm: 91.5,
      glass: "TAF3D / N-LASF44 class; close to OHARA S-LAH65VS (dense lanthanum flint)",
      apd: false,
      role: "High-index front collector element; reduces front-surface curvature while carrying substantial L1 positive power.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 71.1,
      glass: "S-FPL51 (OHARA) / FCD1 (HOYA) class",
      apd: "inferred",
      apdNote:
        "SLD-class ED fluorophosphate inferred from nd/vd and Sigma product description; patent lists nd/vd only.",
      role: "Primary low-dispersion positive in the front achromatizing doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.61,
      focalLengthMm: -61.0,
      glass: "S-TIH14 (OHARA) class",
      apd: false,
      role: "High-index flint mate to E2; main front-group achromatizing partner.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.59282,
      vd: 68.62,
      focalLengthMm: 101.8,
      glass: "FCD515 (HOYA) / S-FPM2-neighbor class",
      apd: "inferred",
      apdNote: "High-index SLD-class crown inferred from exact Hoya FCD515 code 593686; patent lists nd/vd only.",
      role: "Weak positive meniscus completing L1 and providing additional low-dispersion correction.",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.60342,
      vd: 38.01,
      focalLengthMm: -40.9,
      glass: "S-TIM5 (OHARA) / F5 class",
      apd: false,
      role: "Leading negative singlet of the moving L2a focus component.",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: -41.5,
      glass: "N-BK7 / BSC7 class (517642)",
      apd: false,
      role: "Low-index crown negative in the L2a cemented pair.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 50.8,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Dense-flint positive mate to E6; controls chromatic error of the moving negative focus component.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.46,
      focalLengthMm: 122.1,
      glass: "S-TIH6 (OHARA) / SF6 class",
      apd: false,
      role: "Fixed positive stop-group element; deliberately high dispersion under condition (3).",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      focalLengthMm: 84.3,
      glass: "TAF3D / N-LASF44 class; close to OHARA S-LAH65VS (dense lanthanum flint)",
      apd: false,
      role: "Leading positive singlet of the moving L2c focus component.",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.67,
      focalLengthMm: 35.9,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Strong positive in the L2c cemented pair; primary re-converging element after the stop.",
      cemented: "D3",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.61,
      focalLengthMm: -43.1,
      glass: "S-TIH14 (OHARA) class",
      apd: false,
      role: "High-index flint mate to E10; achromatizes the moving positive L2c component.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.46,
      focalLengthMm: 57.2,
      glass: "S-TIH6 (OHARA) / SF6 class",
      apd: false,
      role: "Positive member of the L3a optical-stabilizer doublet.",
      cemented: "D4",
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.62,
      focalLengthMm: -26.7,
      glass: "S-LAH66 (OHARA) / TAF1 / N-LAF34 class",
      apd: false,
      role: "Negative member of the L3a optical-stabilizer doublet; decentered with E12 for OS.",
      cemented: "D4",
    },
    {
      id: 14,
      name: "E14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 33.27,
      focalLengthMm: -34.3,
      glass: "NBFD15 (HOYA) / H-ZLaF56B class",
      apd: false,
      role: "High-index negative in L3b; establishes the index split used for Petzval control.",
      cemented: "D5",
    },
    {
      id: 15,
      name: "E15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.67,
      focalLengthMm: 41.1,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Lower-Abbe positive in L3b and positive member of the E14/E15 cemented pair.",
      cemented: "D5",
    },
    {
      id: 16,
      name: "E16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.25,
      focalLengthMm: 81.8,
      glass: "M-BACD5N (HOYA)",
      apd: false,
      role: "Low-index rear positive; sets the minimum positive index term in condition (4).",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 129.085, d: 4.5536, sd: 24.0, medium: 1 },
    { label: "2", R: -168.456, d: 0.7593, sd: 23.5 },
    { label: "3", R: 60.1581, d: 6.7285, sd: 20.5, medium: 2 },
    { label: "4", R: -82.4177, d: 1.2, sd: 20.5, medium: 3 },
    { label: "5", R: 107.39, d: 0.15, sd: 20.5 },
    { label: "6", R: 49.2292, d: 3.5517, sd: 18.5, medium: 4 },
    { label: "7", R: 260.546, sd: 18.3 },
    { label: "8", R: -359.578, d: 0.95, sd: 15.5, medium: 5 },
    { label: "9", R: 26.4941, d: 4.9881, sd: 12.4 },
    { label: "10", R: -80.7403, d: 1.0, sd: 12.4, medium: 6 },
    { label: "11", R: 29.3575, d: 3.9702, sd: 14.0, medium: 7 },
    { label: "12", R: 86.6184, sd: 15.0 },
    { label: "STO", R: "flat", d: 2.35 },
    { label: "14", R: 249.878, d: 2.9386, sd: 16.5, medium: 8 },
    { label: "15", R: -161.212, sd: 16.8 },
    { label: "16", R: 570.884, d: 3.0684, sd: 18.0, medium: 9 },
    { label: "17", R: -76.7882, d: 0.15, sd: 18.0 },
    { label: "18", R: 75.4847, d: 5.7703, sd: 16.0, medium: 10 },
    { label: "19", R: -38.7023, d: 1.0, sd: 16.0, medium: 11 },
    { label: "20", R: 218.324, sd: 16.0 },
    { label: "21", R: -399.592, d: 3.3872, sd: 15.5, medium: 12 },
    { label: "22", R: -41.4772, d: 0.95, sd: 15.5, medium: 13 },
    { label: "23", R: 41.4772, d: 4.3666, sd: 14.2 },
    { label: "24", R: -78.7902, d: 1.2, sd: 14.2, medium: 14 },
    { label: "25", R: 42.8746, d: 5.6999, sd: 17.0, medium: 15 },
    { label: "26", R: -93.6099, d: 0.15, sd: 17.0 },
    { label: "27", R: 53.7454, d: 4.6951, sd: 19.2, medium: 16 },
    { label: "28", R: -449.786, sd: 19.2 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.312,
    keyframes: [0, 0.7874856150695161, 1],
    description:
      "Floating inner focus. L2a (E5-E7) moves imageward and L2c (E9-E11) moves objectward from infinity to 1:1 while L1, L2b/stop, L3a, and L3b remain fixed relative to the image plane.",
    // (moved from publishedStations) Patent read 2026-10-06: Focus keyframes 1 and 2 are the patent's Example 4 variable-spacing columns for 1:2 and
    // 1:1 magnification, transcribed unscaled.
    published: [1, 2],
  },

  gaps: {
    "7": { label: "D7", values: [[2.9138, 10.4099, 18.6188]] },
    "12": { label: "D12", values: [[20.1047, 12.6086, 4.3997]] },
    "15": { label: "D15", values: [[22.7964, 12.4801, 3.3614]] },
    "20": { label: "D20", values: [[5.4077, 15.724, 24.8427]] },
    "28": { label: "BF", values: [[53.3, 53.3001, 53.3001]] },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.91, fStops: [2.91, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "L1 fixed +", fromSurface: "1", toSurface: "7" },
    { text: "L2a focus −", fromSurface: "8", toSurface: "12" },
    { text: "L2b stop +", fromSurface: "STO", toSurface: "15" },
    { text: "L2c focus +", fromSurface: "16", toSurface: "20" },
    { text: "L3a OS −", fromSurface: "21", toSurface: "23" },
    { text: "L3b fixed +", fromSurface: "24", toSurface: "28" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
    { text: "D4 / OS", fromSurface: "21", toSurface: "23" },
    { text: "D5", fromSurface: "24", toSurface: "26" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.62, yScFill: 0.44 },
} satisfies LensDataV2Input;

export default LENS_DATA;
