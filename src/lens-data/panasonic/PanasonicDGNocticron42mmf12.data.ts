import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ Panasonic Leica DG Nocticron 42.5 mm f/1.2 ASPH Power O.I.S.              ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 2015/0192839 A1, Numerical Example 5 (Panasonic /          ║
 * ║ Kyoichi Miyazaki). Patent-scale prescription; not rescaled to 42.5 mm.     ║
 * ║                                                                            ║
 * ║ 14 powered elements / 11 air-separated groups. L15 in the patent is a      ║
 * ║ plane-parallel sensor cover/filter plate (Table 29 surfaces 27-28:         ║
 * ║ t = 4.2000 mm, nd 1.51680, νd 64.2). It is modeled in `rearPlates`         ║
 * ║ (traced, not drawn); surface 26 keeps the patent d26 = 14.8222 mm to       ║
 * ║ the plate. Trailing gap 1.0002 mm keeps the file's traced image plane      ║
 * ║ (patent d28 1.0000 + BF -0.00016; derived, not printed).                   ║
 * ║                                                                            ║
 * ║ Focus: internal focus by L9/G2 only. d15 and d17 vary while their sum is   ║
 * ║ conserved at 8.8694 mm. L9 moves 4.9449 mm toward the image side from      ║
 * ║ infinity to the 0.5 m object-distance state.                               ║
 * ║                                                                            ║
 * ║ Aperture note: Panasonic markets the production lens as f/1.2. Example 5   ║
 * ║ tabulates F-number = 1.284 at infinity. nominalFNumber and                 ║
 * ║ catalog.fNumber.design carry that patent value; catalog.fNumber.marketing  ║
 * ║ records the manufacturer's f/1.2.                                          ║
 * ║                                                                            ║
 * ║ Semi-diameters: patent does not publish clear apertures. Values below are  ║
 * ║ inferred from marginal/chief paraxial ray traces, then constrained for     ║
 * ║ rendering: sd/|R| < 0.90, element SD ratio <= 1.30, minimum rounded edge   ║
 * ║ thickness >= 0.43 mm, and signed cross-gap clearance retained at MFD.      ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "panasonic-dg-nocticron-42mm-f12",
  maker: "Panasonic",
  name: "PANASONIC LEICA DG NOCTICRON 42.5mm f/1.2 ASPH. POWER O.I.S.",
  subtitle: "US 2015/0192839 A1 Example 5 — Panasonic / Miyazaki",

  catalog: {
    lensMounts: ["micro-four-thirds"],
    imageFormat: "four-thirds",
    specs: [
      "14 elements / 11 groups",
      "f = 41.6508 mm patent; 42.5 mm marketed",
      "F1.2 marketed; F1.284 patent",
      "2ω = 29.4° patent; 29° marketed",
      "2 aspherical surfaces",
      "Internal focus + Power O.I.S.",
    ],
    elementCount: 14,
    groupCount: 11,
    focalLengthMm: { marketing: 42.5, design: 41.6508 },
    fNumber: { marketing: 1.2, design: 1.284 },
  },

  source: {
    patentNumber: "US 2015/0192839 A1",
    patentYear: 2015,
    authors: ["Kyoichi Miyazaki"],
    assignees: ["Panasonic Intellectual Property Management Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 2.00069,
      vd: 25.5,
      focalLengthMm: 65.4914,
      glass: "UHR lanthanum flint, TAFD40 / H-ZLaF90A / J-LASFH17 class",
      apd: false,
      role: "Ultra-high-index front collector; the only n≈2.00 powered element in the prescription.",
      nC: 1.98941,
      nF: 2.02872,
      ng: 2.05283,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.91082,
      vd: 35.2,
      focalLengthMm: 144.0734,
      glass: "TAFD35 / H-ZLaF4LA / K-LaSFn23 class",
      apd: false,
      role: "Weak positive meniscus preceding the patent's A-D sub-unit.",
      nC: 1.90323,
      nF: 1.92907,
      ng: 1.94412,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.5,
      focalLengthMm: -38.4567,
      glass: "S-TIH1 / E-FD1 / H-ZF3 class",
      apd: false,
      role: "Negative member G of the front F-G pair; condition-(5) shape-factor element.",
      nC: 1.71032,
      nF: 1.73464,
      ng: 1.74931,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.74077,
      vd: 27.8,
      focalLengthMm: -24.3856,
      glass: "S-TIH13 / E-FD13 class",
      apd: false,
      role: "Negative element A in the patent's first sub-lens-unit E.",
      cemented: "D1",
      nC: 1.73307,
      nF: 1.75976,
      ng: 1.77597,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      focalLengthMm: 26.5683,
      glass: "S-LAL18 / TAC8 / H-LaK52 class",
      apd: false,
      role: "Positive element B; cemented to L4 to form the first E doublet.",
      cemented: "D1",
      nC: 1.7251,
      nF: 1.73844,
      ng: 1.74571,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.3,
      focalLengthMm: -30.8629,
      glass: "S-NBH53(V) / J-KZFH9 class",
      apd: false,
      role: "Negative element C in the second E doublet.",
      cemented: "D2",
      nC: 1.73131,
      nF: 1.75418,
      ng: 1.76768,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.2,
      focalLengthMm: 34.2654,
      glass: "TAFD35 / H-ZLaF4LA / K-LaSFn23 class",
      apd: false,
      role: "Positive element D in the second E doublet; stop follows after this element.",
      cemented: "D2",
      nC: 1.90323,
      nF: 1.92907,
      ng: 1.94412,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.7701,
      vd: 49.7,
      focalLengthMm: 40.7256,
      glass: "Moldable lanthanum, M-TAF / K-LaFK50 equivalent class",
      apd: false,
      role: "Post-stop positive element; object-side asphere trims residual front-unit aberration.",
      nC: 1.76546,
      nF: 1.78094,
      ng: 1.78951,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.64769,
      vd: 33.8,
      focalLengthMm: -40.5422,
      glass: "N-SF2 / E-FD2 / H-ZF1 class",
      apd: false,
      role: "Single moving internal-focus element H; moves toward the image side at close focus.",
      nC: 1.6421,
      nF: 1.66124,
      ng: 1.67258,
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus (ED)",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 218.4222,
      glass: "S-FPL51 / FCD1 / N-PK52A / D-FK61A class",
      apd: "patent",
      apdNote: "Patent P_g,F = 0.53875; ΔP_g,F ≈ +0.0322 versus Schott normal line.",
      role: "Weak ED positive meniscus providing the design's main secondary-spectrum correction.",
      dPgF: 0.0322,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus (1× Asph, O.I.S.)",
      nd: 1.7701,
      vd: 49.7,
      focalLengthMm: 44.989,
      glass: "Moldable lanthanum, M-TAF / K-LaFK50 equivalent class",
      apd: false,
      role: "Image-blur-compensating element; decentered perpendicular to the axis for O.I.S.",
      nC: 1.76546,
      nF: 1.78094,
      ng: 1.78951,
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.58144,
      vd: 40.9,
      focalLengthMm: -62.8881,
      glass: "LF5 / E-FL5 / QF50 class",
      apd: false,
      role: "Rear negative element participating in the patent's image-side chromatic condition.",
      nC: 1.57723,
      nF: 1.59145,
      ng: 1.59965,
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.2,
      focalLengthMm: 20.7622,
      glass: "TAFD35 / H-ZLaF4LA / K-LaSFn23 class",
      apd: false,
      role: "Strong positive member of the final rear doublet.",
      cemented: "D3",
      nC: 1.90323,
      nF: 1.92907,
      ng: 1.94412,
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.72047,
      vd: 34.7,
      focalLengthMm: -33.1061,
      glass: "N-KZFS8 / S-NBH8 class",
      apd: false,
      role: "Negative element I; selected element for patent condition (7).",
      cemented: "D3",
      nC: 1.71437,
      nF: 1.73512,
      ng: 1.74723,
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 77.5508, d: 5.7078, sd: 27.0, medium: 1 },
    { label: "2", R: -407.4695, d: 0.4, sd: 24.0 },
    { label: "3", R: 23.7493, d: 4.0893, sd: 18.8, medium: 2 },
    { label: "4", R: 26.6173, d: 3.1943, sd: 19.2 },
    { label: "5", R: 104.0316, d: 0.85, sd: 13.2, medium: 3 },
    { label: "6", R: 21.7306, d: 6.8715, sd: 14.0 },
    { label: "7", R: -41.7509, d: 0.85, sd: 12.3, medium: 4 },
    { label: "8", R: 32.1161, d: 6.081, sd: 13.8, medium: 5 },
    { label: "9", R: -44.9242, d: 2.1267, sd: 14.15 },
    { label: "10", R: -23.7707, d: 1.1332, sd: 12.8, medium: 6 },
    { label: "11", R: 555.7835, d: 5.7337, sd: 14.45, medium: 7 },
    { label: "12", R: -32.9039, d: 0.7, sd: 14.5 },
    { label: "STO", R: "flat", d: 1.2 },
    {
      label: "14A",
      R: 35.5272,
      d: 4.857,
      sd: 14.65,
      medium: 8,
      asphere: {
        K: -6.32271e-1,
        A4: -1.42435e-7,
        A6: 4.80045e-10,
        A8: -4.47091e-11,
        A10: 6.57429e-13,
        A12: -4.36493e-15,
        A14: 1.40294e-17,
        A16: -1.77567e-20,
      },
    },
    { label: "15", R: -251.6466, sd: 14.55 },
    { label: "16", R: 357.6009, d: 0.8, sd: 14.4, medium: 9 },
    { label: "17", R: 24.441, sd: 14.35 },
    { label: "18", R: 21.8767, d: 2.3888, sd: 15.2, medium: 10 },
    { label: "19", R: 26.4049, d: 2.4748, sd: 15.0 },
    {
      label: "20A",
      R: 31.6608,
      d: 3.28,
      sd: 15.2,
      medium: 11,
      asphere: {
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
    { label: "21", R: 350.8878, d: 0.6781, sd: 13.9 },
    { label: "22", R: 41.3662, d: 1.0176, sd: 14.3, medium: 12 },
    { label: "23", R: 19.2335, d: 3.2914, sd: 12.1 },
    { label: "24", R: 48.259, d: 4.9831, sd: 12.6, medium: 13 },
    { label: "25", R: -29.5653, d: 0.9, sd: 12.4, medium: 14 },
    { label: "26", R: 125.0004, d: 14.8222, sd: 12.6 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.5,
    description: "Internal focus by L9/G2 only; L9 moves 4.9449 mm toward the image side between infinity and 0.5 m.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Focus variable air gaps ── */
  gaps: { "15": { label: "d15", values: [[1.6489, 6.5938]] }, "17": { label: "d17", values: [[7.2205, 2.2756]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.284, fStops: [1.284, 1.4, 1.8, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 9 },

  /* ── Sensor cover/filter plate L15 (patent surfaces 27–28): traced, not drawn ── */
  rearPlates: [
    {
      label: "L15",
      thicknessMm: 4.2,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      dPgF: -0.0016,
      nC: 1.51432,
      nF: 1.52237,
      ng: 1.52667,
      gapAfterMm: 1.0002,
      source:
        "US 2015/0192839 A1, Numerical Example 5 Tables 29-30 surfaces 27-28 (patent PgF 0.53418); gap after derived, not printed (d28 1.00000 + BF -0.00016, legacy traced image plane kept)",
    },
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

  /* ── Layout tuning ── */
  layout: { scFill: 0.58, yScFill: 0.62 },
} satisfies LensDataV2Input;

export default LENS_DATA;
