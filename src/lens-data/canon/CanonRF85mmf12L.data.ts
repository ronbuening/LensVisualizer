import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CANON RF 85mm f/1.2L USM                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2020/0012073 A1, Example 1 (Maetaki / Canon).    ║
 * ║  Large-aperture medium telephoto, 3-unit internal-focus design.    ║
 * ║  14 elements / 9 groups, 1 aspherical surface.                    ║
 * ║  Focus: Internal focus — L2 (8 elements) translates bodily        ║
 * ║         toward object from infinity to close focus.               ║
 * ║  Variable gaps: d3 (L1→L2), d17 (L2→L3). Track conserved.        ║
 * ║                                                                    ║
 * ║  NOTE: Patent Example 1 has 14 elements; production lens has 13.  ║
 * ║  The patent prescription models the core design philosophy with   ║
 * ║  f = 86.53 mm (production 85 mm) and Fno = 1.24 (production 1.2).║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Derived from patent "Effective Ray Diameter" / 2. Surface 20  ║
 * ║    is slightly reduced from the tabulated 18.2 mm to preserve     ║
 * ║    visible clearance across the tight L12→L13 air gap.             ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf-85f12l",
  maker: "Canon",
  name: "CANON RF 85mm f/1.2L USM",
  subtitle: "US 2020/0012073 A1 EXAMPLE 1 — CANON / MAETAKI",
  specs: [
    "14 ELEMENTS / 9 GROUPS",
    "f ≈ 86.5 mm",
    "F/1.24",
    "2ω ≈ 28.1°",
    "1 ASPHERICAL SURFACE",
    "BR OPTICS (CANON PROPRIETARY)",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 85,
  focalLengthDesign: 86.53,
  apertureMarketing: 1.2,
  apertureDesign: 1.24,
  patentYear: 2020,
  elementCount: 13, // production count; patent Example 1 has 14
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.4,
      fl: 80.5,
      glass: "S-PHM52 (OHARA)",
      apd: false,
      role: "Front crown — collector element",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.72047,
      vd: 34.7,
      fl: -88.7,
      glass: "S-NBF1 or S-LAF2 (OHARA)",
      apd: false,
      role: "Front flint — primary color correction with L1",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3 (Lp1)",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 20.9,
      fl: 134.4,
      glass: "S-NPH2 (OHARA)",
      apd: "patent",
      apdNote:
        "ΔθgF₁ = 0.008 — ultra-high-index dense flint with anomalous partial dispersion for axial secondary spectrum correction",
      role: "First APD positive lens — on-axis chromatic correction",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4 (UD)",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      fl: 97.8,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "UD glass — fluorophosphate crown with inherent anomalous partial dispersion",
      role: "Ultra-low Dispersion positive element — primary chromatic correction",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.85478,
      vd: 24.8,
      fl: -52.5,
      glass: "855/248 — high-index dense flint",
      apd: false,
      role: "Aspherical element — spherical aberration correction at f/1.2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.85478,
      vd: 24.8,
      fl: -27.9,
      glass: "855/248 — high-index dense flint",
      apd: false,
      role: "DL1 flint — axial color and SA correction after stop",
      cemented: "DL1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 26.6,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "DL1 crown — achromatic partner to L6",
      cemented: "DL1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.54072,
      vd: 47.2,
      fl: -48.6,
      glass: "541/472 — likely custom BR carrier",
      apd: false,
      role: "BR triplet carrier (object side) — diverging element",
      cemented: "DL2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9 (Lp2 / BR)",
      type: "Positive Meniscus",
      nd: 1.60401,
      vd: 20.8,
      fl: 375.2,
      glass: "BR optics (Canon proprietary organic)",
      apd: "patent",
      apdNote: "ΔθgF₂ = 0.092 — Blue Spectrum Refractive element for lateral secondary spectrum correction",
      role: "Second APD positive lens — lateral chromatic aberration of magnification cancellation",
      cemented: "DL2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.95375,
      vd: 32.3,
      fl: 41.7,
      glass: "S-LAH79 (OHARA)",
      apd: false,
      role: "BR triplet carrier (image side) — primary positive power",
      cemented: "DL2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.95375,
      vd: 32.3,
      fl: 41.4,
      glass: "S-LAH79 (OHARA)",
      apd: false,
      role: "Rear doublet crown — exit beam convergence",
      cemented: "D2",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.62004,
      vd: 36.3,
      fl: -51.6,
      glass: "S-TIM22 (OHARA)",
      apd: false,
      role: "Rear doublet flint — chromatic balancing",
      cemented: "D2",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.1,
      fl: -61.9,
      glass: "S-TIM27 (OHARA)",
      apd: false,
      role: "Field flattener — astigmatism and field curvature control",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.4,
      fl: 86.3,
      glass: "S-LAH64 (OHARA)",
      apd: false,
      role: "Exit element — ray angle telecentric correction for sensor compatibility",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── Unit L1 (fixed) — cemented doublet ──
    { label: "1", R: 71.655, d: 15.57, nd: 1.618, elemId: 1, sd: 35.1 }, // L1 front
    { label: "2", R: -149.456, d: 3.0, nd: 1.72047, elemId: 2, sd: 35.1 }, // L1→L2 junction
    { label: "3", R: 112.469, d: 14.36, nd: 1.0, elemId: 0, sd: 32.32 }, // L2 rear → air (VARIABLE: L1→L2 gap)

    // ── Unit L2 (focus group) ──
    // G2: L3 (Lp1 — APD positive meniscus)
    { label: "4", R: 67.332, d: 5.75, nd: 1.92286, elemId: 3, sd: 30.76 }, // L3 front
    { label: "5", R: 141.236, d: 0.3, nd: 1.0, elemId: 0, sd: 30.3 }, // L3 rear → air

    // G3: L4 (UD glass)
    { label: "6", R: 39.868, d: 11.43, nd: 1.497, elemId: 4, sd: 27.5 }, // L4 front
    { label: "7", R: 200.86, d: 6.51, nd: 1.0, elemId: 0, sd: 26.36 }, // L4 rear → air

    // G4: L5 (aspherical negative meniscus)
    { label: "8A", R: 75.484, d: 2.5, nd: 1.85478, elemId: 5, sd: 20.62 }, // L5 front (aspherical)
    { label: "9", R: 27.701, d: 10.68, nd: 1.0, elemId: 0, sd: 17.58 }, // L5 rear → air

    // Aperture stop
    { label: "STO", R: 1e15, d: 4.51, nd: 1.0, elemId: 0, sd: 16.55 },

    // G5: DL1 — cemented doublet (L6 + L7)
    { label: "11", R: -85.831, d: 1.5, nd: 1.85478, elemId: 6, sd: 15.84 }, // L6 front
    { label: "12", R: 33.313, d: 9.5, nd: 1.883, elemId: 7, sd: 15.6 }, // L6→L7 junction
    { label: "13", R: -68.563, d: 2.28, nd: 1.0, elemId: 0, sd: 15.44 }, // L7 rear → air

    // G6: DL2 — cemented triplet (L8 + L9 BR + L10)
    { label: "14", R: -48.43, d: 1.7, nd: 1.54072, elemId: 8, sd: 14.93 }, // L8 front
    { label: "15", R: 58.169, d: 1.0, nd: 1.60401, elemId: 9, sd: 17.0 }, // L8→L9 junction (BR)
    { label: "16", R: 77.751, d: 6.95, nd: 1.95375, elemId: 10, sd: 17.11 }, // L9→L10 junction
    { label: "17", R: -77.751, d: 1.64, nd: 1.0, elemId: 0, sd: 17.7 }, // L10 rear → air (VARIABLE: L2→L3 gap)

    // ── Unit L3 (fixed) ──
    // G7: Cemented doublet (L11 + L12)
    { label: "18", R: 204.839, d: 7.0, nd: 1.95375, elemId: 11, sd: 18.43 }, // L11 front
    { label: "19", R: -48.06, d: 2.2, nd: 1.62004, elemId: 12, sd: 18.52 }, // L11→L12 junction
    { label: "20", R: 97.164, d: 5.4, nd: 1.0, elemId: 0, sd: 17.9 }, // L12 rear → air

    // G8: L13 (biconcave singlet)
    { label: "21", R: -52.101, d: 1.65, nd: 1.68893, elemId: 13, sd: 18.22 }, // L13 front
    { label: "22", R: 237.864, d: 0.15, nd: 1.0, elemId: 0, sd: 19.25 }, // L13 rear → air

    // G9: L14 (biconvex singlet)
    { label: "23", R: 97.826, d: 4.0, nd: 1.90043, elemId: 14, sd: 19.78 }, // L14 front
    { label: "24", R: -370.202, d: 14.91, nd: 1.0, elemId: 0, sd: 19.9 }, // L14 rear → BFD
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "8A": {
      K: 0,
      A4: -2.2875e-6,
      A6: -2.1286e-10,
      A8: 2.6709e-13,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (internal focus) ──
   *  L2 translates bodily toward object for close focus.
   *  d3 (L1→L2 gap) decreases; d17 (L2→L3 gap) increases.
   *  Total track conserved: d3 + d17 = 16.00 mm at all focus positions.
   *  Close-focus gaps computed via paraxial ray trace for MFD = 0.85 m.
   */
  var: {
    "3": [14.36, 1.61], // L1→L2 gap: [infinity, close 0.85 m]
    "17": [1.64, 14.39], // L2→L3 gap: [infinity, close 0.85 m]
  },
  varLabels: [
    ["3", "D3"],
    ["17", "D17"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "L1 (FIXED)", fromSurface: "1", toSurface: "3" },
    { text: "L2 (FOCUS)", fromSurface: "4", toSurface: "17" },
    { text: "L3 (FIXED)", fromSurface: "18", toSurface: "24" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "DL1", fromSurface: "11", toSurface: "13" },
    { text: "DL2", fromSurface: "14", toSurface: "17" },
    { text: "D2", fromSurface: "18", toSurface: "20" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.85,
  focusDescription: "Internal focus: L2 (8 elements, Groups G2–G6) translates toward object. L1 and L3 fixed.",

  /* ── Aperture configuration ── */
  nominalFno: 1.2,
  fstopSeries: [1.2, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
