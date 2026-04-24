import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Canon RF 50mm f/1.2 L USM                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2019/0265441 A1 Example 2 (Katayose / Canon).    ║
 * ║  Large-aperture 50mm prime for Canon RF mount (mirrorless).        ║
 * ║  15 elements / 9 groups, 3 aspherical surfaces, 1 UD element.     ║
 * ║  Focus: front-group extension (L1 translates toward object;       ║
 * ║    L2 stationary). Single variable gap (d19); BFD constant.       ║
 * ║    Not unit focus (only a subunit moves, not the entire lens).    ║
 * ║                                                                    ║
 * ║  NOTE ON PRESCRIPTION:                                             ║
 * ║    Patent text for Example 2 contains OCR-corrupted radii at      ║
 * ║    surfaces 14–18. Corrected values recovered from rasterized     ║
 * ║    patent PDF at 400 DPI. Corrected prescription reproduces all   ║
 * ║    patent-stated parameters: EFL = 51.10 mm, BFD = 14.60 mm,     ║
 * ║    total track = 111.01 mm, all element/group focal lengths,      ║
 * ║    and all Table 1 conditional expressions.                        ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated via combined marginal + chief ray trace at            ║
 * ║    offAxisFieldFrac = 0.60 with ~8–10% mechanical clearance.      ║
 * ║    Front element SD constrained by edge thickness (biconvex       ║
 * ║    R1=80.1/R2=−68.2 limits practical SD to ~25.5 mm despite      ║
 * ║    77 mm filter thread). Gap 7 (d=7.45 mm between G4 and G5)     ║
 * ║    is the binding cross-gap constraint, limiting the G4 rear      ║
 * ║    boundary to ~15.4 mm while G5 keeps the larger clear aperture. ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf-50-f12-l",
  maker: "Canon",
  name: "CANON RF 50mm f/1.2 L USM",
  subtitle: "US 2019/0265441 A1 EXAMPLE 2 — CANON / KATAYOSE",
  specs: [
    "15 ELEMENTS / 9 GROUPS",
    "f ≈ 51.1 mm (marketed 50 mm)",
    "F/1.25 (marketed F/1.2)",
    "2ω ≈ 45.9°",
    "3 ASPHERICAL SURFACES",
    "1 UD ELEMENT (S-FPL51)",
  ],

  /* ── Metadata ── */
  focalLengthMarketing: 50,
  focalLengthDesign: 51.1,
  apertureMarketing: 1.2,
  apertureDesign: 1.25,
  patentYear: 2019,
  elementCount: 15,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "G1",
      label: "Element 1",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.804,
      vd: 46.58,
      fl: 47.21,
      glass: "S-LAH65V (OHARA)",
      apd: false,
      apdNote: "",
      role: "Front positive element (Lp); primary beam convergence. Ground aspherical front surface for zonal spherical aberration correction at f/1.2.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "G2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.07,
      fl: -43.0,
      glass: "S-TIM25 (OHARA)",
      apd: false,
      apdNote: "",
      role: "Negative component of front doublet D1; chromatic correction against G1. Doublet D1 is near-afocal (f ≈ −1810 mm).",
      cemented: "D1",
    },
    {
      id: 3,
      name: "G3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 2.001,
      vd: 29.13,
      fl: 42.8,
      glass: "S-NPH7 (OHARA)",
      apd: "inferred",
      apdNote: "Ultra-high-index niobium phosphate (nd = 2.001); expected positive dPgF anomaly",
      role: "Primary converging element; ultra-high refractive index enables strong power with moderate curvature. Near-plano rear surface (R₂ ≈ 2511 mm).",
    },
    {
      id: 4,
      name: "G4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.65412,
      vd: 39.68,
      fl: -50.05,
      glass: "S-TIL27 (OHARA)",
      apd: false,
      apdNote: "",
      role: "Spherical aberration corrector for G3; steep meniscus form (concave toward image).",
    },
    {
      id: 5,
      name: "G5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.66565,
      vd: 35.64,
      fl: -38.82,
      glass: "S-TIM22 (OHARA)",
      apd: false,
      apdNote: "",
      role: "Negative lens Ln (patent conditional expr.); final spherical aberration correction before stop. fLn/Dns = −4.156.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "G6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.95375,
      vd: 32.32,
      fl: 38.91,
      glass: "S-LAH79 (OHARA)",
      apd: false,
      apdNote: "",
      role: "Ultra-high-index positive in near-afocal doublet D2 (f ≈ −17,500 mm); Petzval-reducing pair with G5. Near-plano rear (R₂ ≈ 516 mm).",
      cemented: "D2",
    },
    {
      id: 7,
      name: "G7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.54,
      fl: 42.76,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "Fluorophosphate UD glass; strongly anomalous positive dPgF for secondary chromatic correction",
      role: "UD (Ultra-low Dispersion) element; primary apochromatic corrector. Nearly plano-concave meniscus (R₁ ≈ −1398 mm). Thickest element (ct = 10.02 mm).",
      cemented: "D3",
    },
    {
      id: 8,
      name: "G8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.26,
      fl: -26.19,
      glass: "S-NBH55 (OHARA)",
      apd: false,
      apdNote: "",
      role: "Strongest negative element (f = −26.2 mm); paired with G7 in doublet D3 (f = −67.4 mm) for aggressive chromatic correction. Junction Δnd = 0.241.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "G9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.76385,
      vd: 48.51,
      fl: 38.96,
      glass: "S-LAL14 (OHARA)",
      apd: false,
      apdNote: "",
      role: "Moderate positive power; residual chromatic and astigmatism correction. Lanthanum crown for favorable dispersion balance.",
      cemented: "D4",
    },
    {
      id: 10,
      name: "G10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.66565,
      vd: 35.64,
      fl: -46.1,
      glass: "S-TIM22 (OHARA)",
      apd: false,
      apdNote: "",
      role: "Negative component of doublet D4 (f = +204.8 mm); lateral chromatic compensation.",
      cemented: "D4",
    },
    {
      id: 11,
      name: "G11",
      label: "Element 11",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.883,
      vd: 40.8,
      fl: 38.77,
      glass: "S-LAH89 (OHARA)",
      apd: false,
      apdNote: "",
      role: "Last element of focus unit L1; second ground aspherical surface (S18*) for residual higher-order spherical aberration. High-index biconvex.",
    },
    {
      id: 12,
      name: "G12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 33.67,
      glass: "S-LAH89 (OHARA)",
      apd: false,
      apdNote: "",
      role: "First element of stationary unit L2; final convergence. Same glass as G11.",
      cemented: "D5",
    },
    {
      id: 13,
      name: "G13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.59551,
      vd: 39.24,
      fl: -40.55,
      glass: "S-TIM1 (OHARA)",
      apd: false,
      apdNote: "",
      role: "Negative component of doublet D5 (f = +136.6 mm).",
      cemented: "D5",
    },
    {
      id: 14,
      name: "G14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.673,
      vd: 38.15,
      fl: -55.64,
      glass: "S-TIM35 (OHARA)",
      apd: false,
      apdNote: "",
      role: "Negative component of rear field-flattening doublet D6 (f = −154.7 mm); Petzval curvature reduction.",
      cemented: "D6",
    },
    {
      id: 15,
      name: "G15",
      label: "Element 15",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.804,
      vd: 46.58,
      fl: 89.08,
      glass: "S-LAH65V / L-LAH65V (OHARA)",
      apd: false,
      apdNote: "",
      role: "Final element; glass-molded aspherical rear surface (S25*) for field-dependent astigmatism/curvature correction. Same glass family as G1.",
      cemented: "D6",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── Front Lens Group (LF): G1–G6 ──
    // Cemented doublet D1: G1 + G2
    { label: "1A", R: 80.11, d: 9.67, nd: 1.804, elemId: 1, sd: 25.5 }, // G1 front (asph)
    { label: "2", R: -68.243, d: 1.64, nd: 1.68893, elemId: 2, sd: 25.0 }, // G1→G2 junction
    { label: "3", R: 52.862, d: 0.2, nd: 1.0, elemId: 0, sd: 23.0 }, // G2 rear → air

    // Singlet G3
    { label: "4", R: 42.184, d: 7.47, nd: 2.001, elemId: 3, sd: 23.0 }, // G3 front
    { label: "5", R: 2510.576, d: 0.7, nd: 1.0, elemId: 0, sd: 22.0 }, // G3 rear → air

    // Singlet G4
    { label: "6", R: 99.979, d: 1.6, nd: 1.65412, elemId: 4, sd: 19.0 }, // G4 front
    { label: "7", R: 24.508, d: 7.45, nd: 1.0, elemId: 0, sd: 15.4 }, // G4 rear → air

    // Cemented doublet D2: G5 + G6
    { label: "8", R: -101.919, d: 1.34, nd: 1.66565, elemId: 5, sd: 16.5 }, // G5 front
    { label: "9", R: 34.799, d: 5.56, nd: 1.95375, elemId: 6, sd: 16.5 }, // G5→G6 junction
    { label: "10", R: 516.053, d: 2.44, nd: 1.0, elemId: 0, sd: 16.0 }, // G6 rear → air

    // ── Aperture Stop ──
    { label: "STO", R: 1e15, d: 2.58, nd: 1.0, elemId: 0, sd: 15.5 },

    // ── Rear Lens Group (LR): G7–G15 ──
    // Cemented doublet D3: G7 (UD) + G8
    { label: "12", R: -1398.232, d: 10.02, nd: 1.497, elemId: 7, sd: 16.0 }, // G7 front
    { label: "13", R: -20.985, d: 1.29, nd: 1.738, elemId: 8, sd: 18.0 }, // G7→G8 junction
    { label: "14", R: 251.143, d: 0.44, nd: 1.0, elemId: 0, sd: 18.0 }, // G8 rear → air

    // Cemented doublet D4: G9 + G10
    { label: "15", R: 87.566, d: 7.29, nd: 1.76385, elemId: 9, sd: 19.0 }, // G9 front
    { label: "16", R: -43.447, d: 1.28, nd: 1.66565, elemId: 10, sd: 20.5 }, // G9→G10 junction
    { label: "17", R: 105.692, d: 1.79, nd: 1.0, elemId: 0, sd: 20.5 }, // G10 rear → air

    // Singlet G11
    { label: "18A", R: 161.695, d: 7.96, nd: 1.883, elemId: 11, sd: 21.5 }, // G11 front (asph)
    { label: "19", R: -42.423, d: 1.95, nd: 1.0, elemId: 0, sd: 23.0 }, // G11 rear → air (VARIABLE)

    // Cemented doublet D5: G12 + G13 (stationary unit L2)
    { label: "20", R: 54.474, d: 8.77, nd: 1.883, elemId: 12, sd: 22.5 }, // G12 front
    { label: "21", R: -60.531, d: 1.54, nd: 1.59551, elemId: 13, sd: 20.0 }, // G12→G13 junction
    { label: "22", R: 40.56, d: 7.14, nd: 1.0, elemId: 0, sd: 19.5 }, // G13 rear → air

    // Cemented doublet D6: G14 + G15
    { label: "23", R: -58.17, d: 1.21, nd: 1.673, elemId: 14, sd: 17.0 }, // G14 front
    { label: "24", R: 105.985, d: 5.08, nd: 1.804, elemId: 15, sd: 17.0 }, // G14→G15 junction
    { label: "25A", R: -216.191, d: 14.6, nd: 1.0, elemId: 0, sd: 16.5 }, // G15 rear (asph) → air (BFD)
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "1A": {
      K: 0,
      A4: -1.44652e-6,
      A6: -1.02693e-9,
      A8: 1.91678e-12,
      A10: -3.07794e-15,
      A12: 2.00476e-18,
      A14: 0,
    },
    "18A": {
      K: 0,
      A4: -2.17027e-6,
      A6: 4.00496e-9,
      A8: -1.90948e-11,
      A10: 4.86536e-14,
      A12: -4.89586e-17,
      A14: 0,
    },
    "25A": {
      K: 0,
      A4: 3.50064e-6,
      A6: -5.9867e-10,
      A8: 1.34319e-11,
      A10: -2.56798e-14,
      A12: 2.5993e-17,
      A14: 0,
    },
  },

  /* ── Variable air spacings ── */
  var: {
    "19": [1.95, 16.11],
  },
  varLabels: [["19", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT (LF)", fromSurface: "1A", toSurface: "10" },
    { text: "REAR (LR)", fromSurface: "12", toSurface: "25A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1A", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "12", toSurface: "14" },
    { text: "D4", fromSurface: "15", toSurface: "17" },
    { text: "D5", fromSurface: "20", toSurface: "22" },
    { text: "D6", fromSurface: "23", toSurface: "25A" },
  ],

  /* ── Focus ── */
  closeFocusM: 0.4,
  focusDescription:
    "Front-group extension focus: L1 (G1–G11 + stop) translates toward object; L2 (G12–G15) stationary. Single variable gap (d19); BFD constant. Ring-type USM.",

  /* ── Aperture ── */
  nominalFno: 1.2,
  fstopSeries: [1.2, 1.4, 1.8, 2, 2.5, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 10,

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
