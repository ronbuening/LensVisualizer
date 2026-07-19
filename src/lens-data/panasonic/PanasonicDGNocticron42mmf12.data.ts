import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ Panasonic Leica DG Nocticron 42.5 mm f/1.2 ASPH Power O.I.S.              ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 2015/0192839 A1, Numerical Example 5 (Panasonic /          ║
 * ║ Kyoichi Miyazaki). Patent-scale prescription; not rescaled to 42.5 mm.     ║
 * ║                                                                            ║
 * ║ 14 powered elements / 11 air-separated groups. L15 in the patent is a      ║
 * ║ plane-parallel sensor cover/filter plate and is excluded here. Its paraxial║
 * ║ effect is folded into the final air-equivalent BFD after surface 26.       ║
 * ║                                                                            ║
 * ║ Focus: internal focus by L9/G2 only. d15 and d17 vary while their sum is   ║
 * ║ conserved at 8.8694 mm. L9 moves 4.9449 mm toward the image side from      ║
 * ║ infinity to the 0.5 m object-distance state.                               ║
 * ║                                                                            ║
 * ║ Aperture note: Panasonic markets the production lens as f/1.2. Example 5   ║
 * ║ tabulates F-number = 1.284 at infinity. nominalFno therefore follows the   ║
 * ║ manufacturer specification, while apertureDesign records the patent value. ║
 * ║                                                                            ║
 * ║ Semi-diameters: patent does not publish clear apertures. Values below are  ║
 * ║ inferred from marginal/chief paraxial ray traces, then constrained for     ║
 * ║ rendering: sd/|R| < 0.90, element SD ratio <= 1.30, minimum rounded edge   ║
 * ║ thickness >= 0.43 mm, and signed cross-gap clearance retained at MFD.      ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "panasonic-dg-nocticron-42mm-f12",
  maker: "Panasonic",
  name: "PANASONIC LEICA DG NOCTICRON 42.5mm f/1.2 ASPH POWER O.I.S.",
  subtitle: "US 2015/0192839 A1 Example 5 — Panasonic / Miyazaki",
  specs: [
    "14 elements / 11 groups",
    "f = 41.6508 mm patent; 42.5 mm marketed",
    "F1.2 marketed; F1.284 patent",
    "2ω = 29.4° patent; 29° marketed",
    "2 aspherical surfaces",
    "Internal focus + Power O.I.S.",
  ],

  focalLengthMarketing: 42.5,
  focalLengthDesign: 41.6508,
  apertureMarketing: 1.2,
  apertureDesign: 1.284,
  lensMounts: ["micro-four-thirds"],
  imageFormat: "four-thirds",
  patentNumber: "US 2015/0192839 A1",
  patentAuthors: ["Kyoichi Miyazaki"],
  patentAssignees: ["Panasonic Intellectual Property Management Co Ltd"],
  patentYear: 2015,
  elementCount: 14,
  groupCount: 11,
  apertureBlades: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 2.00069,
      vd: 25.5,
      fl: 65.4914,
      glass: "UHR lanthanum flint, TAFD40 / H-ZLaF90A / J-LASFH17 class",
      nC: 1.98941,
      nF: 2.02872,
      ng: 2.05283,
      apd: false,
      role: "Ultra-high-index front collector; the only n≈2.00 powered element in the prescription.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.91082,
      vd: 35.2,
      fl: 144.0734,
      glass: "TAFD35 / H-ZLaF4LA / K-LaSFn23 class",
      nC: 1.90323,
      nF: 1.92907,
      ng: 1.94412,
      apd: false,
      role: "Weak positive meniscus preceding the patent's A-D sub-unit.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.5,
      fl: -38.4567,
      glass: "S-TIH1 / E-FD1 / H-ZF3 class",
      nC: 1.71032,
      nF: 1.73464,
      ng: 1.74931,
      apd: false,
      role: "Negative member G of the front F-G pair; condition-(5) shape-factor element.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.74077,
      vd: 27.8,
      fl: -24.3856,
      glass: "S-TIH13 / E-FD13 class",
      nC: 1.73307,
      nF: 1.75976,
      ng: 1.77597,
      apd: false,
      role: "Negative element A in the patent's first sub-lens-unit E.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      fl: 26.5683,
      glass: "S-LAL18 / TAC8 / H-LaK52 class",
      nC: 1.7251,
      nF: 1.73844,
      ng: 1.74571,
      apd: false,
      role: "Positive element B; cemented to L4 to form the first E doublet.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.3,
      fl: -30.8629,
      glass: "S-NBH53(V) / J-KZFH9 class",
      nC: 1.73131,
      nF: 1.75418,
      ng: 1.76768,
      apd: false,
      role: "Negative element C in the second E doublet.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.2,
      fl: 34.2654,
      glass: "TAFD35 / H-ZLaF4LA / K-LaSFn23 class",
      nC: 1.90323,
      nF: 1.92907,
      ng: 1.94412,
      apd: false,
      role: "Positive element D in the second E doublet; stop follows after this element.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.7701,
      vd: 49.7,
      fl: 40.7256,
      glass: "Moldable lanthanum, M-TAF / K-LaFK50 equivalent class",
      nC: 1.76546,
      nF: 1.78094,
      ng: 1.78951,
      apd: false,
      role: "Post-stop positive element; object-side asphere trims residual front-unit aberration.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.64769,
      vd: 33.8,
      fl: -40.5422,
      glass: "N-SF2 / E-FD2 / H-ZF1 class",
      nC: 1.6421,
      nF: 1.66124,
      ng: 1.67258,
      apd: false,
      role: "Single moving internal-focus element H; moves toward the image side at close focus.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus (ED)",
      nd: 1.497,
      vd: 81.6,
      fl: 218.4222,
      glass: "S-FPL51 / FCD1 / N-PK52A / D-FK61A class",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
      dPgF: 0.0322,
      apd: "patent",
      apdNote: "Patent P_g,F = 0.53875; ΔP_g,F ≈ +0.0322 versus Schott normal line.",
      role: "Weak ED positive meniscus providing the design's main secondary-spectrum correction.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus (1× Asph, O.I.S.)",
      nd: 1.7701,
      vd: 49.7,
      fl: 44.989,
      glass: "Moldable lanthanum, M-TAF / K-LaFK50 equivalent class",
      nC: 1.76546,
      nF: 1.78094,
      ng: 1.78951,
      apd: false,
      role: "Image-blur-compensating element; decentered perpendicular to the axis for O.I.S.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.58144,
      vd: 40.9,
      fl: -62.8881,
      glass: "LF5 / E-FL5 / QF50 class",
      nC: 1.57723,
      nF: 1.59145,
      ng: 1.59965,
      apd: false,
      role: "Rear negative element participating in the patent's image-side chromatic condition.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.2,
      fl: 20.7622,
      glass: "TAFD35 / H-ZLaF4LA / K-LaSFn23 class",
      nC: 1.90323,
      nF: 1.92907,
      ng: 1.94412,
      apd: false,
      role: "Strong positive member of the final rear doublet.",
      cemented: "D3",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.72047,
      vd: 34.7,
      fl: -33.1061,
      glass: "N-KZFS8 / S-NBH8 class",
      nC: 1.71437,
      nF: 1.73512,
      ng: 1.74723,
      apd: false,
      role: "Negative element I; selected element for patent condition (7).",
      cemented: "D3",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 77.5508, d: 5.7078, nd: 2.00069, elemId: 1, sd: 27.0 },
    { label: "2", R: -407.4695, d: 0.4, nd: 1, elemId: 0, sd: 24.0 },
    { label: "3", R: 23.7493, d: 4.0893, nd: 1.91082, elemId: 2, sd: 18.8 },
    { label: "4", R: 26.6173, d: 3.1943, nd: 1, elemId: 0, sd: 19.2 },
    { label: "5", R: 104.0316, d: 0.85, nd: 1.71736, elemId: 3, sd: 13.2 },
    { label: "6", R: 21.7306, d: 6.8715, nd: 1, elemId: 0, sd: 14.0 },
    { label: "7", R: -41.7509, d: 0.85, nd: 1.74077, elemId: 4, sd: 12.3 },
    { label: "8", R: 32.1161, d: 6.081, nd: 1.72916, elemId: 5, sd: 13.8 },
    { label: "9", R: -44.9242, d: 2.1267, nd: 1, elemId: 0, sd: 14.15 },
    { label: "10", R: -23.7707, d: 1.1332, nd: 1.738, elemId: 6, sd: 12.8 },
    { label: "11", R: 555.7835, d: 5.7337, nd: 1.91082, elemId: 7, sd: 14.45 },
    { label: "12", R: -32.9039, d: 0.7, nd: 1, elemId: 0, sd: 14.5 },
    { label: "STO", R: 1e15, d: 1.2, nd: 1, elemId: 0, sd: 13.7 },
    { label: "14A", R: 35.5272, d: 4.857, nd: 1.7701, elemId: 8, sd: 14.65 },
    { label: "15", R: -251.6466, d: 1.6489, nd: 1, elemId: 0, sd: 14.55 },
    { label: "16", R: 357.6009, d: 0.8, nd: 1.64769, elemId: 9, sd: 14.4 },
    { label: "17", R: 24.441, d: 7.2205, nd: 1, elemId: 0, sd: 14.35 },
    { label: "18", R: 21.8767, d: 2.3888, nd: 1.497, elemId: 10, sd: 15.2 },
    { label: "19", R: 26.4049, d: 2.4748, nd: 1, elemId: 0, sd: 15.0 },
    { label: "20A", R: 31.6608, d: 3.28, nd: 1.7701, elemId: 11, sd: 15.2 },
    { label: "21", R: 350.8878, d: 0.6781, nd: 1, elemId: 0, sd: 13.9 },
    { label: "22", R: 41.3662, d: 1.0176, nd: 1.58144, elemId: 12, sd: 14.3 },
    { label: "23", R: 19.2335, d: 3.2914, nd: 1, elemId: 0, sd: 12.1 },
    { label: "24", R: 48.259, d: 4.9831, nd: 1.91082, elemId: 13, sd: 12.6 },
    { label: "25", R: -29.5653, d: 0.9, nd: 1.72047, elemId: 14, sd: 12.4 },
    { label: "26", R: 125.0004, d: 18.5914, nd: 1, elemId: 0, sd: 12.6 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "14A": {
      K: -6.32271e-1,
      A4: -1.42435e-7,
      A6: 4.80045e-10,
      A8: -4.47091e-11,
      A10: 6.57429e-13,
      A12: -4.36493e-15,
      A14: 1.40294e-17,
      A16: -1.77567e-20,
    },
    "20A": {
      K: -1.19401,
      A4: 2.50312e-6,
      A6: -6.28166e-9,
      A8: 2.11966e-10,
      A10: -3.72303e-12,
      A12: 2.97405e-14,
      A14: -1.15161e-16,
      A16: 1.7407e-19,
    },
  },

  /* ── Focus variable air gaps ── */
  var: {
    "15": [1.6489, 6.5938],
    "17": [7.2205, 2.2756],
  },

  varLabels: [
    ["15", "d15"],
    ["17", "d17"],
  ],

  /* ── Group and cemented-group annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "15" },
    { text: "G2 (-) IF", fromSurface: "16", toSurface: "17" },
    { text: "G3 (+)", fromSurface: "18", toSurface: "26" },
  ],

  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "24", toSurface: "26" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.5,
  focusDescription:
    "Internal focus by L9/G2 only; L9 moves 4.9449 mm toward the image side between infinity and 0.5 m.",

  /* ── Aperture configuration ── */
  nominalFno: 1.2,
  fstopSeries: [1.2, 1.4, 1.8, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.58,
  yScFill: 0.62,
} satisfies LensDataInput;

export default LENS_DATA;
