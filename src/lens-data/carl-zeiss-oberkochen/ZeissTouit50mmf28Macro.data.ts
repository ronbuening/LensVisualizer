import type { LensDataInput } from "../../types/optics.js";

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
 * ║    The patent's PP plate (surfaces 27-28, nd = 1.51680, d = 1.22 mm) is sensor-    ║
 * ║    side cover glass and is excluded per project convention. Its optical path is     ║
 * ║    folded into the final BFD: 1.00 + 1.22 / 1.51680 + 22.81 = 24.6143248945 mm.    ║
 * ║                                                                                      ║
 * ║  NOTE ON ASPHERES:                                                                   ║
 * ║    The patent uses odd and even powers on surfaces 4 and 7. LensVisualizer stores   ║
 * ║    even-order coefficients only, so surfaces 4A and 7A are least-squares refits     ║
 * ║    over the listed renderer semi-diameters. Maximum refit residuals: 0.026 µm on    ║
 * ║    S4 over 0-12.0 mm, and 0.006 µm on S7 over 0-7.7 mm. Surface 6A is copied        ║
 * ║    directly because the patent gives even powers only.                              ║
 * ║                                                                                      ║
 * ║  NOTE ON FOCUS DATA:                                                                 ║
 * ║    The patent gives β = 0, -0.5, and -0.98 spacings. LensVisualizer's current       ║
 * ║    prime-focus var schema stores only infinity and close-focus endpoints. The       ║
 * ║    non-monotonic DD[18] path is therefore encoded as [1.52, 1.51]; the intermediate ║
 * ║    β = -0.5 value, 2.54 mm, is documented in the analysis but not interpolated.     ║
 * ║                                                                                      ║
 * ║  NOTE ON SEMI-DIAMETERS:                                                            ║
 * ║    The patent does not publish clear apertures. SD values here are conservative     ║
 * ║    renderer clear-aperture estimates constrained by the f/2.88 stop, element edge   ║
 * ║    thickness, front/rear SD ratio, and cross-gap sag intrusion limits.              ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "zeiss-touit-50mm-f28-macro",
  maker: "Carl Zeiss Oberkochen",
  name: "CARL ZEISS TOUIT MAKRO-PLANAR T* 50mm f/2.8 Macro",
  subtitle: "JP 2015-161792 A Example 1 — Fujifilm / Carl Zeiss",
  specs: [
    "14 elements / 11 groups",
    "f' = 51.52 mm patent design",
    "FNo. = 2.88 patent design",
    "2ω = 30.6° at infinity",
    "3 aspherical surfaces on 2 elements",
    "Floating inner focus to β = -0.98",
  ],

  focalLengthMarketing: 50,
  focalLengthDesign: 51.52,
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["sony-fe", "fujifilm-x"],
  imageFormat: "aps-c",
  patentNumber: "JP 2015-161792 A",
  patentAuthors: ["Ryoko Tomioka", "Hiroki Saito", "Dodoc Aurelian", "Pollmann Michael", "Klein Juergen"],
  patentAssignees: ["Fujifilm Corporation", "Carl Zeiss AG"],
  patentYear: 2015,
  elementCount: 14,
  groupCount: 11,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -31.82,
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
      fl: 31.25,
      glass: "S-FPM2 (OHARA)",
      apd: "inferred",
      dPgF: 0.0123,
      apdNote: "Catalog anomalous partial dispersion, Δθg,F ≈ +0.0123.",
      role: "Low-index, high-Abbe positive element satisfying patent conditions (1) and (2).",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.7433,
      vd: 49.33,
      fl: 30.37,
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
      fl: -22.19,
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
      fl: -30.16,
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
      fl: 42.87,
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
      fl: 37.09,
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
      fl: -21.67,
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
      fl: 25.65,
      glass: "S-FPM2 (OHARA)",
      apd: "inferred",
      dPgF: 0.0123,
      apdNote: "Catalog anomalous partial dispersion, Δθg,F ≈ +0.0123.",
      role: "Low-dispersion positive partner of the G4 cemented doublet.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L43",
      label: "L43",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.33,
      fl: 61.02,
      glass: "S-PHM52 (OHARA)",
      apd: "inferred",
      dPgF: 0.0051,
      apdNote: "Catalog anomalous partial dispersion, Δθg,F ≈ +0.0051.",
      role: "Additional high-Abbe positive relay element in the moving G4 group.",
    },
    {
      id: 11,
      name: "L51",
      label: "L51",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.68,
      fl: 48.51,
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
      fl: -30.15,
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
      fl: -91.27,
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
      fl: 83.51,
      glass: "S-BAH10 (OHARA)",
      role: "Weak positive terminal element completing the negative-power rear corrector group.",
    },
  ],

  surfaces: [
    { label: "1", R: 794.4933, d: 1.26, nd: 1.84666, elemId: 1, sd: 13.0 },
    { label: "2", R: 26.042, d: 4.85, nd: 1.59522, elemId: 2, sd: 12.0 },
    { label: "3", R: -60.5422, d: 0.1, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "4A", R: 23.5562, d: 3.95, nd: 1.7433, elemId: 3, sd: 12.0 },
    { label: "5", R: -500.9101, d: 1.6, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "6A", R: -105.5377, d: 1.1, nd: 1.73077, elemId: 4, sd: 8.1 },
    { label: "7A", R: 19.2398, d: 2.56, nd: 1.0, elemId: 0, sd: 7.7 },
    { label: "8", R: -46.3896, d: 1.01, nd: 1.5168, elemId: 5, sd: 10.0 },
    { label: "9", R: 23.645, d: 2.32, nd: 1.84666, elemId: 6, sd: 10.0 },
    { label: "10", R: 64.7859, d: 9.1, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "11", R: 67.7469, d: 2.95, nd: 1.92286, elemId: 7, sd: 10.6 },
    { label: "12", R: -67.7469, d: 2.67, nd: 1.0, elemId: 0, sd: 10.6 },
    { label: "STO", R: 1e15, d: 12.68, nd: 1.0, elemId: 0, sd: 8.73 },
    { label: "14", R: -32.323, d: 1.02, nd: 1.74077, elemId: 8, sd: 10.5 },
    { label: "15", R: 32.323, d: 4.55, nd: 1.59522, elemId: 9, sd: 10.5 },
    { label: "16", R: -27.4119, d: 0.11, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "17", R: 74.8635, d: 2.92, nd: 1.618, elemId: 10, sd: 12.0 },
    { label: "18", R: -74.8635, d: 1.52, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "19", R: 37.2563, d: 3.07, nd: 1.72916, elemId: 11, sd: 12.0 },
    { label: "20", R: -674.5448, d: 1.85, nd: 1.0, elemId: 0, sd: 11.8 },
    { label: "21", R: -126.2001, d: 1.01, nd: 1.69895, elemId: 12, sd: 10.9 },
    { label: "22", R: 25.3759, d: 2.75, nd: 1.0, elemId: 0, sd: 8.8 },
    { label: "23", R: -47.2254, d: 1.33, nd: 1.51742, elemId: 13, sd: 8.8 },
    { label: "24", R: 1e15, d: 1.48, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "25", R: 297.4201, d: 2.58, nd: 1.67003, elemId: 14, sd: 11.7 },
    { label: "26", R: -68.6822, d: 24.6143248945, nd: 1.0, elemId: 0, sd: 11.7 },
  ],

  asph: {
    "4A": {
      K: 0,
      A4: -1.051555685111637e-5,
      A6: 4.050958052964697e-7,
      A8: -1.831396910281167e-8,
      A10: 4.544274699334215e-10,
      A12: -6.839456817745785e-12,
      A14: 6.396270596596304e-14,
      A16: -3.654058075843303e-16,
      A18: 1.172712377245193e-18,
      A20: -1.604553986682877e-21,
    },
    "6A": {
      K: 0,
      A4: 4.1237569e-5,
      A6: -5.6417743e-7,
      A8: 3.6088348e-9,
      A10: -8.8306165e-12,
      A12: 0,
      A14: 0,
    },
    "7A": {
      K: 0,
      A4: 2.424749080153175e-5,
      A6: 1.352796668878109e-6,
      A8: -1.684998008448662e-7,
      A10: 9.573164189794696e-9,
      A12: -3.424133695386654e-10,
      A14: 7.772441160525017e-12,
      A16: -1.080842317450219e-13,
      A18: 8.389380996143237e-16,
      A20: -2.782261057184308e-18,
    },
  },

  var: {
    "5": [1.6, 9.61],
    "10": [9.1, 1.1],
    STO: [12.68, 2.47],
    "18": [1.52, 1.51],
    "20": [1.85, 12.08],
  },
  varLabels: [
    ["5", "DD[5] G1-G2"],
    ["10", "DD[10] G2-G3"],
    ["STO", "DD[13] STO-G4"],
    ["18", "DD[18] G4-G5"],
    ["20", "DD[20] G5-G6"],
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

  focusDescription:
    "Floating inner focus: G2 translates imageward while G4 and G5 translate objectward; G1, G3, stop, and G6 remain fixed.",
  closeFocusM: 0.15,
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  scFill: 0.58,
  yScFill: 0.56,
} satisfies LensDataInput;

export default LENS_DATA;
