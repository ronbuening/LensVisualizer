import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — ZEISS Touit Makro-Planar T* 2.8/50M                             ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2015-161792 A, Example 1 (Fujifilm / Carl Zeiss).                 ║
 * ║  Patent prescription: f' = 51.52 mm, FNo. = 2.88, 2ω = 30.6° at infinity.          ║
 * ║  14 elements / 11 air-separated groups; 3 aspherical surfaces on 2 elements.       ║
 * ║  Focus: floating inner focus; G2 moves imageward, G4 and G5 move objectward.       ║
 * ║                                                                                      ║
 * ║  NOTE ON COVER GLASS:                                                                ║
 * ║    The patent's PP plate (surfaces 27-28, d = 1.22 mm, nd = 1.51680, νd = 64.20)     ║
 * ║    and the trailing 22.81 mm air gap are modeled physically in `rearPlates`          ║
 * ║    (traced, not drawn). Surface 26 stores the patent's 1.00 mm gap to the plate.     ║
 * ║                                                                                      ║
 * ║  NOTE ON ASPHERES:                                                                   ║
 * ║    Surfaces 4A and 7A carry the patent's exact odd/even coefficients (A3-A15,       ║
 * ║    KA = 1 → K = 0). Earlier revisions stored even-order least-squares refits        ║
 * ║    because the renderer lacked odd-order support. Surface 6A is copied directly     ║
 * ║    because the patent gives even powers only.                                       ║
 * ║                                                                                      ║
 * ║  NOTE ON FOCUS DATA:                                                                 ║
 * ║    The patent's β = 0, -0.5, and -0.98 rows are exact focus keyframes, including    ║
 * ║    the non-monotonic DD[18] path of 1.52 → 2.54 → 1.51 mm.                           ║
 * ║                                                                                      ║
 * ║  NOTE ON SEMI-DIAMETERS:                                                            ║
 * ║    The patent does not publish clear apertures. SD values here are conservative     ║
 * ║    renderer clear-aperture estimates constrained by the f/2.88 stop, element edge   ║
 * ║    thickness, front/rear SD ratio, and cross-gap sag intrusion limits.              ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "zeiss-touit-50mm-f28-macro",
  maker: "Carl Zeiss Oberkochen",
  name: "CARL ZEISS TOUIT MAKRO-PLANAR T* 50mm f/2.8 Macro",
  subtitle: "JP 2015-161792 A Example 1 — Fujifilm / Carl Zeiss",

  catalog: {
    lensMounts: ["sony-fe", "fujifilm-x"],
    imageFormat: "aps-c",
    specs: [
      "14 elements / 11 groups",
      "f' = 51.52 mm patent design",
      "FNo. = 2.88 patent design",
      "2ω = 30.6° at infinity",
      "3 aspherical surfaces on 2 elements",
      "Floating inner focus to β = -0.98",
    ],
    elementCount: 14,
    groupCount: 11,
    focalLengthMm: { marketing: 50, design: 51.52 },
    fNumber: { marketing: 2.8, design: 2.88 },
  },

  source: {
    patentNumber: "JP 2015-161792 A",
    patentYear: 2015,
    authors: ["Ryoko Tomioka", "Hiroki Saito", "Aurélien Dodoc", "Michael Pollmann", "Jürgen Klein"],
    assignees: ["Fujifilm Corporation", "Carl Zeiss AG"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -31.82,
      glass: "S-TIH53 (OHARA)",
      role: "Front high-index flint of the G1 cemented chromatic-correction doublet.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Biconvex Positive",
      nd: 1.59522,
      vd: 67.74,
      focalLengthMm: 31.25,
      glass: "S-FPM2 (OHARA)",
      apd: "inferred",
      apdNote: "Catalog anomalous partial dispersion, Δθg,F ≈ +0.0123.",
      role: "Low-index, high-Abbe positive element satisfying patent conditions (1) and (2).",
      cemented: "D1",
      dPgF: 0.0123,
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.7433,
      vd: 49.33,
      focalLengthMm: 30.37,
      glass: "M-NBF1 / MP-NBF1 class (HOYA, 743/493)",
      role: "High-index positive aspheric element controlling front-group spherical aberration.",
    },
    {
      id: 4,
      name: "L21",
      label: "L21",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.73077,
      vd: 40.5,
      focalLengthMm: -22.19,
      glass: "M-LAF81 / MP-LAF81 class (HOYA, 731/405)",
      role: "Dominant negative member of the moving G2 focus group; both surfaces are aspherical.",
    },
    {
      id: 5,
      name: "L22",
      label: "L22",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: -30.16,
      glass: "BSC7 (HOYA) / N-BK7 class (517/642)",
      role: "BK7-class negative crown partner in the G2 cemented achromat.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L23",
      label: "L23",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 42.87,
      glass: "S-TIH53 (OHARA)",
      role: "High-dispersion positive flint partner of the G2 cemented achromat.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L31",
      label: "L31",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: 37.09,
      glass: "E-FDS1 / MP-FDS1 class (HOYA, 923/209)",
      role: "Ultra-high-index, high-dispersion fixed field lens before the aperture stop.",
    },
    {
      id: 8,
      name: "L41",
      label: "L41",
      type: "Biconcave Negative",
      nd: 1.74077,
      vd: 27.79,
      focalLengthMm: -21.67,
      glass: "S-TIH13 (OHARA)",
      role: "Negative flint at the front of the moving G4 cemented doublet.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L42",
      label: "L42",
      type: "Biconvex Positive",
      nd: 1.59522,
      vd: 67.74,
      focalLengthMm: 25.65,
      glass: "S-FPM2 (OHARA)",
      apd: "inferred",
      apdNote: "Catalog anomalous partial dispersion, Δθg,F ≈ +0.0123.",
      role: "Low-dispersion positive partner of the G4 cemented doublet.",
      cemented: "D3",
      dPgF: 0.0123,
    },
    {
      id: 10,
      name: "L43",
      label: "L43",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.33,
      focalLengthMm: 61.02,
      glass: "S-PHM52 (OHARA)",
      apd: "inferred",
      apdNote: "Catalog anomalous partial dispersion, Δθg,F ≈ +0.0051.",
      role: "Additional high-Abbe positive relay element in the moving G4 group.",
      dPgF: 0.0051,
    },
    {
      id: 11,
      name: "L51",
      label: "L51",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.68,
      focalLengthMm: 48.51,
      glass: "S-LAL18 (OHARA)",
      role: "Single positive moving G5 group, travelling nearly in lockstep with G4.",
    },
    {
      id: 12,
      name: "L61",
      label: "L61",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.13,
      focalLengthMm: -30.15,
      glass: "S-TIM35 (OHARA)",
      role: "Strong negative element in the fixed rear field-flattening group.",
    },
    {
      id: 13,
      name: "L62",
      label: "L62",
      type: "Plano-Concave Negative",
      nd: 1.51742,
      vd: 52.43,
      focalLengthMm: -91.27,
      glass: "S-NSL36 (OHARA)",
      role: "Weak negative crown in the fixed rear group.",
    },
    {
      id: 14,
      name: "L63",
      label: "L63",
      type: "Biconvex Positive",
      nd: 1.67003,
      vd: 47.23,
      focalLengthMm: 83.51,
      glass: "S-BAH10 (OHARA)",
      role: "Weak positive terminal element completing the negative-power rear corrector group.",
    },
  ],

  surfaces: [
    { label: "1", R: 794.4933, d: 1.26, sd: 13.0, medium: 1 },
    { label: "2", R: 26.042, d: 4.85, sd: 12.0, medium: 2 },
    { label: "3", R: -60.5422, d: 0.1, sd: 12.0 },
    {
      label: "4A",
      R: 23.5562,
      d: 3.95,
      sd: 12.0,
      medium: 3,
      // Exact patent odd/even coefficients (Table for surface 4, KA = 1 → K = 0).
      asphere: {
        K: 0,
        A4: 6.2378398e-7,
        A6: -1.4423201e-8,
        A8: 1.3838857e-10,
        A10: 4.3025158e-13,
        A12: -2.1109002e-14,
        A14: -5.8476062e-17,
        A3: -1.9975218e-5,
        A5: -6.7539764e-7,
        A7: 7.9012377e-10,
        A9: 2.1167277e-11,
        A11: -1.6841831e-14,
        A13: -2.4650413e-15,
        A15: 2.9617348e-17,
      },
    },
    { label: "5", R: -500.9101, sd: 12.0 },
    {
      label: "6A",
      R: -105.5377,
      d: 1.1,
      sd: 8.1,
      medium: 4,
      asphere: { K: 0, A4: 4.1237569e-5, A6: -5.6417743e-7, A8: 3.6088348e-9, A10: -8.8306165e-12 },
    },
    {
      label: "7A",
      R: 19.2398,
      d: 2.56,
      sd: 7.7,
      // Exact patent odd/even coefficients (Table for surface 7, KA = 1 → K = 0).
      asphere: {
        K: 0,
        A4: 3.8413905e-5,
        A6: -2.2519977e-7,
        A8: -1.5872068e-9,
        A10: 4.6685223e-11,
        A12: -1.0209216e-13,
        A14: -1.2829288e-14,
        A3: -1.7101547e-5,
        A5: -6.373894e-7,
        A7: -2.8870262e-8,
        A9: 8.7049597e-11,
        A11: 5.4433814e-12,
        A13: -5.536815e-14,
        A15: 1.29655e-15,
      },
    },
    { label: "8", R: -46.3896, d: 1.01, sd: 10.0, medium: 5 },
    { label: "9", R: 23.645, d: 2.32, sd: 10.0, medium: 6 },
    { label: "10", R: 64.7859, sd: 10.0 },
    { label: "11", R: 67.7469, d: 2.95, sd: 10.6, medium: 7 },
    { label: "12", R: -67.7469, d: 2.67, sd: 10.6 },
    { label: "STO", R: "flat" },
    { label: "14", R: -32.323, d: 1.02, sd: 10.5, medium: 8 },
    { label: "15", R: 32.323, d: 4.55, sd: 10.5, medium: 9 },
    { label: "16", R: -27.4119, d: 0.11, sd: 10.5 },
    { label: "17", R: 74.8635, d: 2.92, sd: 12.0, medium: 10 },
    { label: "18", R: -74.8635, sd: 12.0 },
    { label: "19", R: 37.2563, d: 3.07, sd: 12.0, medium: 11 },
    { label: "20", R: -674.5448, sd: 11.8 },
    { label: "21", R: -126.2001, d: 1.01, sd: 10.9, medium: 12 },
    { label: "22", R: 25.3759, d: 2.75, sd: 8.8 },
    { label: "23", R: -47.2254, d: 1.33, sd: 8.8, medium: 13 },
    { label: "24", R: "flat", d: 1.48, sd: 10.0 },
    { label: "25", R: 297.4201, d: 2.58, sd: 11.7, medium: 14 },
    { label: "26", R: -68.6822, d: 1.0, sd: 11.7 }, // patent d26 to the PP plate
  ],

  focus: {
    closeFocusM: 0.15,
    keyframes: [0, 0.7599103882848731, 1],
    description:
      "Floating inner focus: G2 translates imageward while G4 and G5 translate objectward; G1, G3, stop, and G6 remain fixed.",
    // (moved from publishedStations) Every focus keyframe is a source row.
    published: [1, 2],
  },

  gaps: {
    "5": { label: "DD[5] G1-G2", values: [[1.6, 5.25, 9.61]] },
    "10": { label: "DD[10] G2-G3", values: [[9.1, 5.45, 1.1]] },
    STO: { label: "DD[13] STO-G4", values: [[12.68, 6.82, 2.47]] },
    "18": { label: "DD[18] G4-G5", values: [[1.52, 2.54, 1.51]] },
    "20": { label: "DD[20] G5-G6", values: [[1.85, 6.69, 12.08]] },
  },

  aperture: { nominalFNumber: 2.88, fStops: [2.88, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  /* ── Optical member PP (patent surfaces 27–28): traced, not drawn ── */
  rearPlates: [
    {
      label: "PP",
      thicknessMm: 1.22,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 22.81,
      source: "JP 2015-161792 A, Example 1 Table 1 surfaces 27–28",
    },
  ],

  groups: [
    { text: "G1 +", fromSurface: "1", toSurface: "5" },
    { text: "G2 -", fromSurface: "6A", toSurface: "10" },
    { text: "G3 +", fromSurface: "11", toSurface: "12" },
    { text: "G4 +", fromSurface: "14", toSurface: "18" },
    { text: "G5 +", fromSurface: "19", toSurface: "20" },
    { text: "G6 -", fromSurface: "21", toSurface: "26" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "14", toSurface: "16" },
  ],

  layout: { scFill: 0.58, yScFill: 0.56 },
} satisfies LensDataV2Input;

export default LENS_DATA;
