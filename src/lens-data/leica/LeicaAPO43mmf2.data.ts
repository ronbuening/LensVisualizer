import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — LEICA APO-SUMMICRON 43mm f/2 ASPH.                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2024/0241349 A1, Example 1 (Nishioka / Kurioka). ║
 * ║  Panasonic IP Management Co., Ltd.  Priority: JP 2022-142614.     ║
 * ║  Production lens: Leica APO-Summicron 43mm f/2 ASPH. (Q3 43).    ║
 * ║  11 elements / 5 power groups (8 air-separated) / 7 asph surfs.  ║
 * ║  Focus: floating inner focus — G2 (L6–L7) and G4 (L10) move.     ║
 * ║                                                                    ║
 * ║  NOTE ON CEMENT LAYERS:                                            ║
 * ║    Patent models 0.01 mm cement layers (nd = 1.56732) at each     ║
 * ║    cemented junction (D1, D2, D3). Since junction surfaces share  ║
 * ║    the same R, the cement thickness is folded into the preceding  ║
 * ║    element's center thickness (e.g., L3 d = 5.00 + 0.01 = 5.01). ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters. Estimated via paraxial    ║
 * ║    marginal ray (at f/2.06) + chief ray (70% field for post-stop  ║
 * ║    surfaces), with 8% mechanical clearance. Front SD constrained  ║
 * ║    by E49 filter thread (max OD ~47 mm; not binding here).        ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent parallel plate P (nd = 1.51680, d = 1.40) plus 1.00 mm ║
 * ║    air gap omitted from surfaces; total 6.00 mm folded into BFD. ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "leica-apo-summicron-43f2",
  maker: "Leica",
  name: "LEICA APO-SUMMICRON 43mm f/2 ASPH.",
  subtitle: "US 2024/0241349 A1 EXAMPLE 1 — PANASONIC / NISHIOKA",
  specs: ["11 ELEMENTS / 8 GROUPS", "f ≈ 41.7 mm", "F/2.06", "2ω ≈ 55.0°", "7 ASPHERICAL SURFACES (4 ELEMENTS)"],

  focalLengthMarketing: 43,
  focalLengthDesign: 41.71,
  apertureMarketing: 2.0,
  apertureDesign: 2.06,
  patentYear: 2024,
  elementCount: 11,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.64769,
      vd: 33.8,
      fl: -35.6,
      glass: "S-TIM22 (OHARA)",
      apd: false,
      role: "Front negative; pre-diverges beam to reduce higher-order aberrations on downstream high-index positives; Petzval counter-bending",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 2.00069,
      vd: 25.5,
      fl: 29.9,
      glass: "S-NPH4 (OHARA)",
      apd: false,
      role: "Ultra-high-index positive; strong refraction at minimal curvature, primary chromatic dispersion source in G1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.6,
      fl: 28.7,
      glass: "593/686 (PK crown, uncertain ID)",
      apd: "inferred",
      apdNote: "Phosphate crown region; νd = 68.6 implies positive ΔPgF for secondary spectrum correction",
      role: "Positive crown in D1 doublet; primary positive power in G1; APD glass for secondary spectrum correction",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.6,
      fl: -24.4,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      role: "Negative flint in D1 doublet; chromatic correction partner for L3",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.5866,
      vd: 59.0,
      fl: 66.0,
      glass: "587/590 (HOYA FDS family / PGM)",
      apd: false,
      role: "OIS element — shifts ⊥ to optical axis for image stabilization; weak positive with aspherics for SA/coma correction near stop",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.68948,
      vd: 31.0,
      fl: -22.3,
      glass: "S-TIM28 / L-TIM28 (OHARA)",
      apd: false,
      role: "Negative flint in D2 doublet; aspherical front surface for coma and oblique SA control at stop",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.95375,
      vd: 32.3,
      fl: 19.0,
      glass: "S-LAH99 / TAFD33 (OHARA)",
      apd: false,
      role: "Ultra-high-index positive in D2 doublet; primary power in G2; focus group component",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.90366,
      vd: 31.3,
      fl: 37.8,
      glass: "S-LAH95 (OHARA)",
      apd: false,
      role: "High-index positive meniscus (convex to image) in D3 doublet; Petzval correction",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.1,
      fl: -31.0,
      glass: "S-TIM35 (OHARA)",
      apd: false,
      role: "Negative flint in D3 doublet; G3 diverging power for field curvature correction",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.55332,
      vd: 71.7,
      fl: 40.0,
      glass: "S-FPM3 / L-FPM3 (OHARA)",
      apd: "inferred",
      apdNote: "Fluorophosphate; νd = 71.7 — primary APO contributor; patent requires νd4G > 62",
      role: "Fluorophosphate APD positive; cornerstone of APO correction; focus group (G4 moves during IF)",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.5866,
      vd: 59.0,
      fl: -31.1,
      glass: "587/590 (HOYA FDS family / PGM)",
      apd: false,
      role: "Rear field-flattener; G5 negative for Petzval balance; aggressive aspherization for astigmatism and distortion",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1 (+) — L1 through L5 ──
    { label: "1", R: -48.2488, d: 1.5, nd: 1.64769, elemId: 1, sd: 10.9 }, // L1 front
    { label: "2", R: 44.7343, d: 0.7288, nd: 1.0, elemId: 0, sd: 11.1 }, // L1 rear → air
    { label: "3", R: 37.972, d: 5.0, nd: 2.00069, elemId: 2, sd: 11.3 }, // L2 front
    { label: "4", R: -131.5072, d: 0.9, nd: 1.0, elemId: 0, sd: 11.3 }, // L2 rear → air
    { label: "5", R: 25.1796, d: 6.61, nd: 1.59282, elemId: 3, sd: 11.2 }, // L3 front (D1); d includes 0.01 cement
    { label: "6", R: -47.5179, d: 1.1, nd: 1.76182, elemId: 4, sd: 9.8 }, // D1 junction → L4
    { label: "7", R: 30.7715, d: 2.9914, nd: 1.0, elemId: 0, sd: 9.6 }, // L4 rear → air
    { label: "8A", R: 54.8186, d: 2.8, nd: 1.5866, elemId: 5, sd: 9.4 }, // L5 front (OIS element)
    { label: "9A", R: -129.0571, d: 1.3423, nd: 1.0, elemId: 0, sd: 9.1 }, // L5 rear → air

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 8.5, nd: 1.0, elemId: 0, sd: 8.2 }, // d11 variable

    // ── G2 (+) — L6–L7 cemented (focus group) ──
    { label: "10A", R: -34.7967, d: 1.41, nd: 1.68948, elemId: 6, sd: 7.1 }, // L6 front; d includes 0.01 cement
    { label: "11", R: 27.9597, d: 4.0, nd: 1.95375, elemId: 7, sd: 7.0 }, // D2 junction → L7
    { label: "12", R: -47.7042, d: 2.3984, nd: 1.0, elemId: 0, sd: 6.9 }, // L7 rear → air; d15 variable

    // ── G3 (−) — L8–L9 cemented ──
    { label: "13", R: -69.0757, d: 3.11, nd: 1.90366, elemId: 8, sd: 8.1 }, // L8 front; d includes 0.01 cement
    { label: "14", R: -23.3606, d: 1.0, nd: 1.69895, elemId: 9, sd: 9.1 }, // D3 junction → L9
    { label: "15", R: 306.9478, d: 4.5634, nd: 1.0, elemId: 0, sd: 9.4 }, // L9 rear → air; d19 variable

    // ── G4 (+) — L10 singlet (focus group) ──
    { label: "16A", R: 202.6421, d: 7.1497, nd: 1.55332, elemId: 10, sd: 11.9 }, // L10 front
    { label: "17A", R: -24.5159, d: 5.2709, nd: 1.0, elemId: 0, sd: 14.2 }, // L10 rear → air; d21 variable

    // ── G5 (−) — L11 singlet ──
    { label: "18A", R: -17.1668, d: 2.0, nd: 1.5866, elemId: 11, sd: 15.3 }, // L11 front
    { label: "19A", R: -295.0, d: 6.0, nd: 1.0, elemId: 0, sd: 16.2 }, // L11 rear → image (BFD incl. cover glass)
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "8A": {
      // Patent surface 9 — L5 front
      K: 0,
      A4: -1.30306e-5,
      A6: -5.62107e-8,
      A8: -3.60682e-10,
      A10: 8.61029e-14,
      A12: -7.87986e-14,
      A14: 5.22901e-17,
    },
    "9A": {
      // Patent surface 10 — L5 rear
      K: 0,
      A4: -9.82247e-6,
      A6: -9.90962e-9,
      A8: -2.51292e-9,
      A10: 3.89661e-11,
      A12: -4.70452e-13,
      A14: 1.70621e-15,
    },
    "10A": {
      // Patent surface 12 — L6 front (prolate ellipsoid base)
      K: -4.20325e-1,
      A4: -2.20963e-5,
      A6: -1.90668e-8,
      A8: -1.28958e-9,
      A10: 1.02111e-11,
      A12: 0,
      A14: 0,
    },
    "16A": {
      // Patent surface 20 — L10 front
      K: 0,
      A4: -1.18748e-5,
      A6: 6.25689e-8,
      A8: -1.36411e-10,
      A10: 7.15711e-14,
      A12: -3.29562e-17,
      A14: -1.87905e-18,
    },
    "17A": {
      // Patent surface 21 — L10 rear
      K: 0,
      A4: 3.3582e-6,
      A6: 1.04068e-7,
      A8: -6.34208e-10,
      A10: 4.09992e-12,
      A12: -1.28044e-14,
      A14: 1.19979e-17,
    },
    "18A": {
      // Patent surface 22 — L11 front (prolate ellipsoid base)
      K: -2.75865e-1,
      A4: 7.31746e-5,
      A6: -2.58094e-7,
      A8: 7.84314e-10,
      A10: 2.62197e-13,
      A12: -3.52305e-15,
      A14: 0,
    },
    "19A": {
      // Patent surface 23 — L11 rear
      K: 0,
      A4: 3.22163e-5,
      A6: -2.53939e-7,
      A8: 7.10332e-10,
      A10: -8.86821e-13,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (floating inner focus) ──
   *  G2 (L6–L7) and G4 (L10) advance toward object during close focusing.
   *  G1, G3, G5 remain stationary. Constant overall length.
   *  d(STO) + d(12) = 10.898 mm (constant); d(15) + d(17A) = 9.834 mm (constant).
   */
  var: {
    STO: [8.5, 6.4983],
    "12": [2.3984, 4.4001],
    "15": [4.5634, 1.8105],
    "17A": [5.2709, 8.0238],
  },
  varLabels: [
    ["STO", "D11"],
    ["12", "D15"],
    ["15", "D19"],
    ["17A", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "9A" },
    { text: "G2 (+)", fromSurface: "10A", toSurface: "12" },
    { text: "G3 (−)", fromSurface: "13", toSurface: "15" },
    { text: "G4 (+)", fromSurface: "16A", toSurface: "17A" },
    { text: "G5 (−)", fromSurface: "18A", toSurface: "19A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "10A", toSurface: "12" },
    { text: "D3", fromSurface: "13", toSurface: "15" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.6,
  focusDescription: "Floating inner focus: G2 (L6–L7) and G4 (L10) translate toward object. Constant overall length.",

  /* ── Aperture configuration ── */
  nominalFno: 2.0,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
