/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON AF-S MICRO-NIKKOR 60mm f/2.8G ED      ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 7,898,744 B2, Example 2 (Wada / Nikon Corp.)     ║
 * ║  Internal-focusing macro lens, G1(+) G2(−) Stop G3(+) G4(−).     ║
 * ║  12 elements / 9 groups, 2 aspherical surfaces, 1 ED element.     ║
 * ║  Focus: Floating IF — G2 moves toward image, G3 moves toward      ║
 * ║         object. G1, G4, and stop are fixed. 4 variable gaps.      ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    Patent Example 2 computes at f ≈ 58.0 mm. Production lens is   ║
 * ║    marketed as 60 mm (implied ×1.034 uniform scale). Data here    ║
 * ║    is UNSCALED — direct patent values. EFL verified at 58.01 mm   ║
 * ║    via paraxial ray trace.                                         ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs. Estimated via paraxial marginal +    ║
 * ║    chief ray trace at 85% field, then constrained by:             ║
 * ║    — S2A asph sag depth (limits G1 SDs to ≤ 14.5 mm)            ║
 * ║    — S8A conic height limit (K = +2.12, max h = 11.9 mm)        ║
 * ║    — Cross-gap clearances at S8A→S9 and S19→S20                  ║
 * ║    — Edge thickness positivity for all elements                   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikon-micro-60f28g",
  name: "NIKON AF-S MICRO-NIKKOR 60mm f/2.8G ED",
  subtitle: "US 7,898,744 B2 Example 2 — Wada / Nikon Corporation",
  specs: [
    "12 ELEMENTS / 9 GROUPS",
    "f ≈ 58.0 mm (patent) / 60 mm (production)",
    "F/2.88",
    "2ω ≈ 39.7°",
    "2 ASPHERICAL SURFACES",
    "1 ED ELEMENT (L7)",
  ],

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.8044,
      vd: 39.57,
      fl: -50.0,
      glass: "S-LAH63Q (OHARA)",
      apd: false,
      role: "Front negative meniscus; aspherical rear surface S2A (K = −5.31) corrects spherical aberration and coma at full aperture. High-index LaF substrate enables precision glass molding.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.63854,
      vd: 55.48,
      fl: +85.0,
      glass: "H-LAK6A (CDGM) or Nikon melt",
      apd: false,
      role: "Weak positive meniscus; contributes to Petzval sum correction with minimal added spherical aberration. No exact OHARA/Schott match — likely Nikon-specified melt.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.834807,
      vd: 42.71,
      fl: +57.6,
      glass: "TAFD5 (HOYA)",
      apd: false,
      role: "Strongest positive element in G1; high-index LaF glass keeps curvatures moderate despite strong power.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.51612,
      vd: 64.03,
      fl: -51.5,
      glass: "S-BSL7 (OHARA) / N-BK7 (Schott)",
      apd: false,
      role: "Second asphere in moving G2; aspherical S8A (K = +2.12) provides focus-dependent SA correction. BK7 substrate chosen for precision glass moldability.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.62004,
      vd: 36.3,
      fl: -26.3,
      glass: "S-TIM2 (OHARA)",
      apd: false,
      role: "Negative component of G2 cemented doublet; balances monochromatic aberration that varies during G2 travel.",
      cemented: "D2a",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.77,
      fl: +21.9,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "Positive component of G2 cemented doublet; extremely high index (nd = 1.883) enables strong junction curvature for higher-order aberration control.",
      cemented: "D2a",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.56,
      fl: +79.4,
      glass: "S-FPM4 (OHARA) — ED glass",
      apd: "inferred",
      apdNote: "Fluorophosphate crown; anomalous partial dispersion dPgF ≈ +0.033 (inferred from S-FPM4 catalog)",
      role: "ED glass element in moving G3; very low dispersion (vd = 82.56) provides secondary spectrum correction. Positioned in focusing group to compensate chromatic shift during focus travel.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.603,
      vd: 65.47,
      fl: +40.6,
      glass: "S-PHM53 (OHARA)",
      apd: false,
      role: "Positive crown of G3 achromatic doublet (Δvd = 41.69); provides primary LoCA correction.",
      cemented: "D3a",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -66.7,
      glass: "S-TIH53 (OHARA) / N-SF57 (Schott)",
      apd: false,
      role: "Negative flint of G3 achromatic doublet; dense flint provides large Abbe number contrast for chromatic correction.",
      cemented: "D3a",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.43,
      fl: -45.3,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      role: "Strong negative meniscus in fixed G4; high-dispersion flint provides chromatic balance and contributes to Petzval field flattening.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.801,
      vd: 34.96,
      fl: -30.2,
      glass: "NBFD3 (HOYA)",
      apd: false,
      role: "Negative component of G4 cemented doublet; niobium-dense-barium-flint for Petzval sum control via high index.",
      cemented: "D4a",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: +24.0,
      glass: "S-TIH53 (OHARA) / N-SF57 (Schott)",
      apd: false,
      role: "Positive component of G4 cemented doublet; same glass as L9, strong convergence balances L11 for net field-flattening contribution.",
      cemented: "D4a",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── Group 1 (G1): Fixed front group, positive power ──
    { label: "1", R: 68.8358, d: 1.3514, nd: 1.8044, elemId: 1, sd: 14.5 }, // L1 front
    { label: "2A", R: 25.1596, d: 3.1598, nd: 1.0, elemId: 0, sd: 14.5 }, // L1 rear (asph) → air
    { label: "3", R: 50.568, d: 3.089, nd: 1.63854, elemId: 2, sd: 14.5 }, // L2 front
    { label: "4", R: 726.7885, d: 0.0997, nd: 1.0, elemId: 0, sd: 14.5 }, // L2 rear → air
    { label: "5", R: 61.6542, d: 2.8959, nd: 1.834807, elemId: 3, sd: 14.5 }, // L3 front
    { label: "6", R: -213.335, d: 2.62569, nd: 1.0, elemId: 0, sd: 14.5 }, // L3 rear → air (var: G1→G2)

    // ── Group 2 (G2): Focusing group, moves toward image ──
    { label: "7", R: 114.0007, d: 1.2549, nd: 1.51612, elemId: 4, sd: 10.5 }, // L4 front
    { label: "8A", R: 21.4584, d: 5.2, nd: 1.0, elemId: 0, sd: 10.5 }, // L4 rear (asph) → air
    { label: "9", R: -25.9781, d: 1.8341, nd: 1.62004, elemId: 5, sd: 12.0 }, // L5 front (cemented D2a)
    { label: "10", R: 45.0791, d: 6.2262, nd: 1.883, elemId: 6, sd: 12.0 }, // L5→L6 junction — elemId: 6
    { label: "11", R: -31.6859, d: 12.29619, nd: 1.0, elemId: 0, sd: 12.0 }, // L6 rear → air (var: G2→Stop)

    // ── Aperture Stop (fixed) ──
    { label: "STO", R: 1e15, d: 23.27238, nd: 1.0, elemId: 0, sd: 11.3 }, // 9-blade diaphragm

    // ── Group 3 (G3): Focusing group, moves toward object ──
    { label: "13", R: 279.333, d: 3.089, nd: 1.49782, elemId: 7, sd: 14.5 }, // L7 front (ED)
    { label: "14", R: -45.865, d: 0.0483, nd: 1.0, elemId: 0, sd: 14.5 }, // L7 rear → air
    { label: "15", R: 55.7141, d: 4.5852, nd: 1.603, elemId: 8, sd: 13.5 }, // L8 front (cemented D3a)
    { label: "16", R: -42.3441, d: 1.1584, nd: 1.84666, elemId: 9, sd: 13.5 }, // L8→L9 junction — elemId: 9
    { label: "17", R: -171.5862, d: 4.49094, nd: 1.0, elemId: 0, sd: 13.5 }, // L9 rear → air (var: G3→G4)

    // ── Group 4 (G4): Fixed rear group, negative power ──
    { label: "18", R: 202.8956, d: 1.1584, nd: 1.80518, elemId: 10, sd: 11.5 }, // L10 front
    { label: "19", R: 30.8234, d: 1.641, nd: 1.0, elemId: 0, sd: 11.5 }, // L10 rear → air
    { label: "20", R: 90.5377, d: 1.2549, nd: 1.801, elemId: 11, sd: 11.5 }, // L11 front (cemented D4a)
    { label: "21", R: 18.9814, d: 5.9849, nd: 1.84666, elemId: 12, sd: 11.5 }, // L11→L12 junction — elemId: 12
    { label: "22", R: 242.9593, d: 37.45, nd: 1.0, elemId: 0, sd: 11.5 }, // L12 rear → BFD
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "2A": {
      K: -5.3148,
      A4: 5.5804e-5,
      A6: -1.4307e-7,
      A8: 5.0263e-10,
      A10: -7.7598e-13,
      A12: 0,
      A14: 0,
    },
    "8A": {
      K: 2.1218,
      A4: -2.6928e-5,
      A6: -9.4708e-8,
      A8: 9.7003e-11,
      A10: -2.5636e-12,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (floating focus — 4 gaps) ──
   *  G2 moves toward image (+d6, −d11) upon close focus.
   *  G3 moves toward object (−dSTO, +d17) upon close focus.
   *  G1, G4, and stop are fixed.
   *  D6 + D11 = 14.922 mm (invariant — G2 rigid body).
   *  DSTO + D17 = 27.763 mm (invariant — G3 rigid body).
   *  Total track = 124.166 mm (constant at all focus positions).
   */
  var: {
    6: [2.62569, 13.83349], // G1→G2
    11: [12.29619, 1.08839], // G2→Stop
    STO: [23.27238, 1.87196], // Stop→G3
    17: [4.49094, 25.89136], // G3→G4
  },

  varLabels: [
    ["6", "D6"],
    ["11", "D11"],
    ["STO", "D12"],
    ["17", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (fixed)", fromSurface: "1", toSurface: "6" },
    { text: "G2 (focus →)", fromSurface: "7", toSurface: "11" },
    { text: "G3 (← focus)", fromSurface: "13", toSurface: "17" },
    { text: "G4 (fixed)", fromSurface: "18", toSurface: "22" },
  ],

  doublets: [
    { text: "D2a", fromSurface: "9", toSurface: "11" },
    { text: "D3a", fromSurface: "15", toSurface: "17" },
    { text: "D4a", fromSurface: "20", toSurface: "22" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.185,
  focusDescription:
    "Internal floating focus: G2 moves toward image, G3 moves toward object. G1, G4, and aperture stop fixed. Total track 124.2 mm (constant). G2 travel: 11.2 mm, G3 travel: 21.4 mm.",

  /* ── Aperture configuration ── */
  nominalFno: 2.88,
  fstopSeries: [2.8, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22, 32],

  /* ── Layout tuning ── */
  scFill: 0.45,
  yScFill: 0.35,
};

export default LENS_DATA;
