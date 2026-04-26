import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — RICOH GR LENS A12 28mm f/2.5                 ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2012-003015 A, Example 3 (Kubota / Ricoh).       ║
 * ║  Positive–positive two-group wide-angle prime for APS-C sensor.   ║
 * ║  8 elements / 6 groups, 3 aspherical surfaces on 2 elements.      ║
 * ║  Focus: Floating — both groups advance independently.             ║
 * ║                                                                    ║
 * ║  NOTE ON PRODUCTION LENS:                                          ║
 * ║    Production GR LENS A12 28mm is 9 elements / 6 groups with      ║
 * ║    2 aspherical lenses bearing 2 aspherical surfaces. Example 3   ║
 * ║    is 8 elements / 6 groups with 3 aspherical surfaces. The       ║
 * ║    production design is likely a refinement blending features      ║
 * ║    from multiple examples in the patent family.                    ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    SDs estimated via marginal + chief ray paraxial trace with     ║
 * ║    5–10% mechanical clearance, subject to edge-thickness and      ║
 * ║    cross-gap sag intrusion constraints. Not patent-listed.        ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent surfaces 16–17 are a 2.5 mm cover glass (nd = 1.5168). ║
 * ║    Air-equivalent BFD folded into last surface d value.           ║
 * ║    Air-equiv offset = 2.5 / 1.5168 = 1.648 mm.                   ║
 * ║                                                                    ║
 * ║  CONIC CONSTANT CONVENTION:                                        ║
 * ║    Patent sag uses k in place of (1+K). K_standard = k_patent − 1.║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "ricoh-gxr-a12-18f25",
  maker: "Ricoh",
  name: "RICOH GR LENS A12 28mm f/2.5",
  subtitle: "JP 2012-003015 A EXAMPLE 3 — KUBOTA / RICOH",
  specs: ["8 ELEMENTS / 6 GROUPS", "f = 18.28 mm (28 mm equiv.)", "F/2.56", "2ω ≈ 75.6°", "3 ASPHERICAL SURFACES"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 18.3,
  focalLengthDesign: 18.28,
  apertureMarketing: 2.5,
  apertureDesign: 2.56,
  patentYear: 2012,
  elementCount: 8,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.5163,
      vd: 64.1,
      fl: -31.6,
      glass: "S-BSL7 (OHARA) / N-BK7 (SCHOTT)",
      apd: false,
      role: "Wide-angle field-flattening corrector; both surfaces aspherical. PGM candidate.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: +47.9,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "Primary positive power, Group 1. High-index lanthanum crown.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.62,
      vd: 36.3,
      fl: -13.9,
      glass: "S-TIM2 (OHARA) / N-F2 (SCHOTT)",
      apd: false,
      cemented: "D1",
      role: "Chromatic corrector in Group 1 rear doublet.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: +13.0,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Achromatic positive element in Group 1 rear doublet.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: +9.4,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Primary power-generating element. Thick positive biconvex in Group 2 front doublet.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.2,
      fl: -12.6,
      glass: "S-TIF6 (OHARA) / N-SF5 (SCHOTT)",
      apd: false,
      cemented: "D2",
      role: "Chromatic corrector in Group 2 front doublet.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.8467,
      vd: 23.9,
      fl: -20.7,
      glass: "S-TIH53 (OHARA) / N-SF57 (SCHOTT)",
      apd: false,
      role: "Dense flint field flattener and chromatic lever. Highest dispersion in system.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.8014,
      vd: 45.4,
      fl: +17.4,
      glass: "S-LAH65V (OHARA) / N-LAF34 (SCHOTT)",
      apd: false,
      role: "Strongest individual positive element. Rear asphere controls field-dependent aberrations.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── Group 1: L1 (Group A) ──
    { label: "1A", R: 23.77, d: 1.1, nd: 1.5163, elemId: 1, sd: 9.5 }, // L1 front (asph)
    { label: "2A", R: 9.53, d: 4.9, nd: 1.0, elemId: 0, sd: 8.0 }, // L1 rear (asph) → air

    // ── Group 1: L2 (Group B) ──
    { label: "3", R: 32.35, d: 1.7, nd: 1.883, elemId: 2, sd: 9.5 }, // L2 front
    { label: "4", R: 133.8, d: 1.7, nd: 1.0, elemId: 0, sd: 8.0 }, // L2 rear → air

    // ── Group 1: L3 + L4 cemented doublet (Group C) ──
    { label: "5", R: -17.05, d: 0.9, nd: 1.62, elemId: 3, sd: 6.6 }, // L3 front
    { label: "6", R: 17.77, d: 3.0, nd: 1.883, elemId: 4, sd: 7.5 }, // L3→L4 junction
    { label: "7", R: -29.7, d: 2.2, nd: 1.0, elemId: 0, sd: 7.5 }, // L4 rear → air

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 5.58, nd: 1.0, elemId: 0, sd: 4.4 }, // Stop (d = D1 at infinity)

    // ── Group 2: L5 + L6 cemented doublet (Group D) ──
    { label: "9", R: 22.92, d: 4.2, nd: 1.883, elemId: 5, sd: 7.0 }, // L5 front
    { label: "10", R: -11.87, d: 0.8, nd: 1.6727, elemId: 6, sd: 6.5 }, // L5→L6 junction
    { label: "11", R: 30.47, d: 2.9, nd: 1.0, elemId: 0, sd: 6.5 }, // L6 rear → air

    // ── Group 2: L7 (Group E) ──
    { label: "12", R: -15.38, d: 0.8, nd: 1.8467, elemId: 7, sd: 6.0 }, // L7 front
    { label: "13", R: -129.05, d: 0.1, nd: 1.0, elemId: 0, sd: 6.0 }, // L7 rear → air

    // ── Group 2: L8 (Group F) ──
    { label: "14", R: 72.46, d: 3.8, nd: 1.8014, elemId: 8, sd: 6.5 }, // L8 front
    { label: "15A", R: -16.82, d: 15.91, nd: 1.0, elemId: 0, sd: 7.0 }, // L8 rear (asph) → air (BFD)
  ],

  /* ── Aspherical coefficients ──
   *  Patent conic convention: k_patent occupies (1+K) position.
   *  K_standard = k_patent − 1 applied below.
   */
  asph: {
    "1A": {
      K: -6.163,
      A4: 1.99e-4,
      A6: -3.715e-6,
      A8: 5.008e-8,
      A10: -3.466e-10,
      A12: 1.083e-12,
      A14: 0,
    },
    "2A": {
      K: -0.812,
      A4: 1.317e-4,
      A6: -5.317e-6,
      A8: 6.213e-8,
      A10: -6.522e-10,
      A12: 1.333e-12,
      A14: 1.496e-13,
      A16: -3.28e-15,
      A18: 1.898e-17,
    },
    "15A": {
      K: -0.5418,
      A4: 1.119e-4,
      A6: 2.677e-7,
      A8: 6.947e-9,
      A10: -9.656e-11,
      A12: 4.708e-13,
      A14: 0,
    },
  },

  /* ── Variable air spacings (floating focus) ──
   *  Both groups advance toward object independently.
   *  Group 1 extends 2.18 mm, Group 2 extends 1.66 mm at 200 mm focus.
   *  D1 (inter-group gap) = STO surface d.
   *  D2 (BFD) = S15A d, with cover glass folded as air-equivalent.
   */
  var: {
    STO: [5.58, 5.06],
    "15A": [15.91, 17.57],
  },
  varLabels: [
    ["STO", "D1"],
    ["15A", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "GROUP 1", fromSurface: "1A", toSurface: "7" },
    { text: "GROUP 2", fromSurface: "9", toSurface: "15A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "9", toSurface: "11" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.2,
  focusDescription: "Floating focus — both groups advance independently toward the object at different rates.",

  /* ── Aperture configuration ── */
  nominalFno: 2.5,
  fstopSeries: [2.5, 2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
