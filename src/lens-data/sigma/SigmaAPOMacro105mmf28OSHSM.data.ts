import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — Sigma APO Macro 105mm F2.8 EX DG OS HSM                ║
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
  key: "sigma-apo-macro-105mm-f28-os-hsm",
  maker: "Sigma",
  name: "SIGMA APO Macro 105mm f/2.8 EX DG OS HSM",
  subtitle: "JP 2012-58682 A Example 4 — Sigma / Ogasawara",
  specs: [
    "16 elements / 11 groups",
    "105 mm marketed; 101.71 mm design",
    "F2.8 marketed; F2.91 design",
    "2ω = 24.09° design",
    "Floating inner focus; L3a optical stabilizer",
    "All spherical surfaces",
  ],

  focalLengthMarketing: 105,
  focalLengthDesign: 101.71,
  apertureMarketing: 2.8,
  apertureDesign: 2.91,
  lensMounts: ["sigma-sa", "canon-ef", "nikon-f", "sony-a"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2012-058682 A",
  patentAuthors: ["Noriyuki Ogasawara"],
  patentAssignees: ["SIGMA CORP"],
  patentYear: 2012,
  elementCount: 16,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      fl: 91.5,
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
      fl: 71.1,
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
      fl: -61.0,
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
      fl: 101.8,
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
      fl: -40.9,
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
      fl: -41.5,
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
      fl: 50.8,
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
      fl: 122.1,
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
      fl: 84.3,
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
      fl: 35.9,
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
      fl: -43.1,
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
      fl: 57.2,
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
      fl: -26.7,
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
      fl: -34.3,
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
      fl: 41.1,
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
      fl: 81.8,
      glass: "M-BACD5N (HOYA)",
      apd: false,
      role: "Low-index rear positive; sets the minimum positive index term in condition (4).",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 129.085, d: 4.5536, nd: 1.8042, elemId: 1, sd: 24.0 },
    { label: "2", R: -168.456, d: 0.7593, nd: 1.0, elemId: 0, sd: 23.5 },
    { label: "3", R: 60.1581, d: 6.7285, nd: 1.497, elemId: 2, sd: 20.5 },
    { label: "4", R: -82.4177, d: 1.2, nd: 1.76182, elemId: 3, sd: 20.5 },
    { label: "5", R: 107.39, d: 0.15, nd: 1.0, elemId: 0, sd: 20.5 },
    { label: "6", R: 49.2292, d: 3.5517, nd: 1.59282, elemId: 4, sd: 18.5 },
    { label: "7", R: 260.546, d: 2.9138, nd: 1.0, elemId: 0, sd: 18.3 },
    { label: "8", R: -359.578, d: 0.95, nd: 1.60342, elemId: 5, sd: 15.5 },
    { label: "9", R: 26.4941, d: 4.9881, nd: 1.0, elemId: 0, sd: 12.4 },
    { label: "10", R: -80.7403, d: 1.0, nd: 1.5168, elemId: 6, sd: 12.4 },
    { label: "11", R: 29.3575, d: 3.9702, nd: 1.84666, elemId: 7, sd: 14.0 },
    { label: "12", R: 86.6184, d: 20.1047, nd: 1.0, elemId: 0, sd: 15.0 },
    { label: "STO", R: 1e15, d: 2.35, nd: 1.0, elemId: 0, sd: 14.76 },
    { label: "14", R: 249.878, d: 2.9386, nd: 1.80518, elemId: 8, sd: 16.5 },
    { label: "15", R: -161.212, d: 22.7964, nd: 1.0, elemId: 0, sd: 16.8 },
    { label: "16", R: 570.884, d: 3.0684, nd: 1.8042, elemId: 9, sd: 18.0 },
    { label: "17", R: -76.7882, d: 0.15, nd: 1.0, elemId: 0, sd: 18.0 },
    { label: "18", R: 75.4847, d: 5.7703, nd: 1.72916, elemId: 10, sd: 16.0 },
    { label: "19", R: -38.7023, d: 1.0, nd: 1.76182, elemId: 11, sd: 16.0 },
    { label: "20", R: 218.324, d: 5.4077, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "21", R: -399.592, d: 3.3872, nd: 1.80518, elemId: 12, sd: 15.5 },
    { label: "22", R: -41.4772, d: 0.95, nd: 1.7725, elemId: 13, sd: 15.5 },
    { label: "23", R: 41.4772, d: 4.3666, nd: 1.0, elemId: 0, sd: 14.2 },
    { label: "24", R: -78.7902, d: 1.2, nd: 1.8061, elemId: 14, sd: 14.2 },
    { label: "25", R: 42.8746, d: 5.6999, nd: 1.72916, elemId: 15, sd: 17.0 },
    { label: "26", R: -93.6099, d: 0.15, nd: 1.0, elemId: 0, sd: 17.0 },
    { label: "27", R: 53.7454, d: 4.6951, nd: 1.58913, elemId: 16, sd: 19.2 },
    { label: "28", R: -449.786, d: 53.3, nd: 1.0, elemId: 0, sd: 19.2 },
  ],

  asph: {},

  var: {
    "7": [2.9138, 18.6188],
    "12": [20.1047, 4.3997],
    "15": [22.7964, 3.3614],
    "20": [5.4077, 24.8427],
    "28": [53.3, 53.3001],
  },

  varLabels: [
    ["7", "D7"],
    ["12", "D12"],
    ["15", "D15"],
    ["20", "D20"],
    ["28", "BF"],
  ],

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

  /* ── Focus configuration ── */
  closeFocusM: 0.312,
  focusDescription:
    "Floating inner focus. L2a (E5-E7) moves imageward and L2c (E9-E11) moves objectward from infinity to 1:1 while L1, L2b/stop, L3a, and L3b remain fixed relative to the image plane.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  /* ── Layout tuning ── */
  scFill: 0.62,
  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
