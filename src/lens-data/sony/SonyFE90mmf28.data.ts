import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — SONY FE 90 mm F2.8 MACRO G OSS              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2016/136352 A1, Example 2 (Sony Corporation).    ║
 * ║  Internal-focus macro with floating dual-group focus and OSS.     ║
 * ║  15 elements / 11 groups, 1 aspherical surface (S7).             ║
 * ║  Focus: floating inner focus — GR2 (3 elements, negative) moves   ║
 * ║    toward image; GR4 (3 elements, positive) moves toward object.  ║
 * ║    GR1, GR3 (OSS), STO, GR5 are all fixed axially.               ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs. Estimated from combined marginal +   ║
 * ║    chief ray trace (marginal at EP_SD, off-axis at 40% field      ║
 * ║    for rear elements), with 8–10% mechanical clearance.           ║
 * ║    Validated against edge-thickness (≥ 0.5 mm), sd/|R| (< 0.90), ║
 * ║    and cross-gap sag intrusion (< 90% of gap) constraints.       ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sony-fe-90mm-f2p8-macro",
  maker: "Sony",
  name: "SONY FE 90 mm F2.8 Macro G OSS",
  subtitle: "WO 2016/136352 A1 Example 2 — Sony / Uehara, Kanetaka, Uno",
  specs: ["15 ELEMENTS / 11 GROUPS", "f ≈ 92.6 mm", "F/2.8", "2ω ≈ 26.3°", "1 ASPHERICAL SURFACE"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 90,
  focalLengthDesign: 92.63,
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  patentYear: 2016,
  elementCount: 15,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "G1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.7292,
      vd: 54.67,
      fl: 77.27,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Front positive biconvex; carries maximum chief-ray height in GR1",
    },
    {
      id: 2,
      name: "G2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 134.1,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      dPgF: 0.038, apdNote: "ED glass; ΔPg,F ≈ +0.038 above normal line per S-FPL51 datasheet",
      role: "ED anomalous-low-dispersion crown; cemented to G3 for secondary-spectrum correction in GR1",
      cemented: "Da",
    },
    {
      id: 3,
      name: "G3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.8467,
      vd: 23.78,
      fl: -61.0,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Heavy titanium dense flint; achromatic partner of ED G2 in cemented doublet",
      cemented: "Da",
    },
    {
      id: 4,
      name: "G4",
      label: "Element 4",
      type: "Positive Meniscus (1× Asph)",
      nd: 1.768,
      vd: 49.24,
      fl: 66.54,
      glass: "S-LAM61 (OHARA)",
      apd: false,
      role: "Rear surface S7 is the only asphere; corrects high-order spherical aberration at high marginal-ray height in GR1",
    },
    {
      id: 5,
      name: "G5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.62,
      fl: -48.01,
      glass: "M-TAC60 (HOYA)",
      apd: false,
      role: "Entry of 1st focus group GR2; gentle front (R=+235), strong rear (R=+32)",
    },
    {
      id: 6,
      name: "G6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.7292,
      vd: 54.67,
      fl: -35.15,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Negative element in GR2; cemented to G7 for chromatic control of focus group",
      cemented: "Db",
    },
    {
      id: 7,
      name: "G7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.9229,
      vd: 20.88,
      fl: 49.52,
      glass: "S-NPH2 (OHARA)",
      apd: false,
      role: "Very-high-index, very-high-dispersion meniscus; achromatic partner of G6 in GR2",
      cemented: "Db",
    },
    {
      id: 8,
      name: "G8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.27,
      fl: -105.12,
      glass: "High-index Nb dense flint (806333)",
      apd: false,
      role: "OSS group GR3 negative element; cemented to G9 for achromatised lateral-shift stabilisation",
      cemented: "Dc",
    },
    {
      id: 9,
      name: "G9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.4875,
      vd: 70.44,
      fl: 53.31,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Low-dispersion crown in OSS group GR3; achromatic partner of G8",
      cemented: "Dc",
    },
    {
      id: 10,
      name: "G10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.7292,
      vd: 54.67,
      fl: 56.24,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Entry of 2nd focus group GR4",
    },
    {
      id: 11,
      name: "G11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      fl: 63.47,
      glass: "FCD100 (HOYA)",
      apd: "inferred",
      dPgF: 0.056, apdNote: "Super ED glass; ΔPg,F ≈ +0.056 above normal line per HOYA FCD100 datasheet",
      role: "Super ED fluorophosphate in GR4; cemented to G12 for apochromatic correction in the 2nd focus group",
      cemented: "Dd",
    },
    {
      id: 12,
      name: "G12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.6727,
      vd: 32.17,
      fl: -70.3,
      glass: "S-TIM35 (OHARA)",
      apd: false,
      role: "Titanium flint; chromatic partner of Super ED G11 in GR4",
      cemented: "Dd",
    },
    {
      id: 13,
      name: "G13",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.9037,
      vd: 31.32,
      fl: 108.33,
      glass: "S-NBH55 (OHARA)",
      apd: false,
      role: "Positive meniscus in fixed final group GR5; concave to object",
    },
    {
      id: 14,
      name: "G14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.6584,
      vd: 50.85,
      fl: -66.98,
      glass: "S-BAH27 (OHARA)",
      apd: false,
      role: "Equiconcave negative element in GR5; R_front = −R_rear (single-tooling manufacturing simplification)",
    },
    {
      id: 15,
      name: "G15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.46,
      fl: -64.02,
      glass: "S-LAL14 (OHARA)",
      apd: false,
      role: "Final element of GR5; rear S27 is convex toward image to suppress ghost generation [paragraph 0050]",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ──── GR1: Object-side group (4 elements, fixed) ────
    { label: "1", R: 60.7452, d: 6.483, nd: 1.7292, elemId: 1, sd: 17.7 }, // G1 front
    { label: "2", R: -742.4113, d: 0.5, nd: 1.0, elemId: 0, sd: 16.9 }, // G1 rear → air
    { label: "3", R: 85.188, d: 4.575, nd: 1.497, elemId: 2, sd: 16.8 }, // G2 front (cemented Da)
    { label: "4", R: -300.7794, d: 1.8, nd: 1.8467, elemId: 3, sd: 15.8 }, // G2/G3 junction → G3
    { label: "5", R: 62.5282, d: 0.5, nd: 1.0, elemId: 0, sd: 15.5 }, // G3 rear → air
    { label: "6", R: 46.3651, d: 4.722, nd: 1.768, elemId: 4, sd: 15.4 }, // G4 front
    { label: "7A", R: 478.0475, d: 2.8, nd: 1.0, elemId: 0, sd: 14.5 }, // G4 rear (asph) → air [d7 variable]

    // ──── GR2: 1st focus group (3 elements, moves toward image) ────
    { label: "8", R: 235.4026, d: 1.2, nd: 1.7725, elemId: 5, sd: 13.6 }, // G5 front
    { label: "9", R: 31.968, d: 4.165, nd: 1.0, elemId: 0, sd: 13.1 }, // G5 rear → air
    { label: "10", R: -120.8878, d: 1.2, nd: 1.7292, elemId: 6, sd: 13.1 }, // G6 front (cemented Db)
    { label: "11", R: 32.6584, d: 3.067, nd: 1.9229, elemId: 7, sd: 13.1 }, // G6/G7 junction → G7
    { label: "12", R: 109.2743, d: 22.92, nd: 1.0, elemId: 0, sd: 13.0 }, // G7 rear → air [d12 variable]

    // ──── GR3: Anti-vibration / OSS group (2 elements, fixed axially, lateral-shift for stabilisation) ────
    { label: "13", R: 44.4665, d: 1.2, nd: 1.8061, elemId: 8, sd: 14.3 }, // G8 front (cemented Dc)
    { label: "14", R: 28.8115, d: 5.8, nd: 1.4875, elemId: 9, sd: 14.2 }, // G8/G9 junction → G9
    { label: "15", R: -247.5076, d: 3.19, nd: 1.0, elemId: 0, sd: 14.0 }, // G9 rear → air

    // ──── Aperture stop (fixed) ────
    { label: "STO", R: 1e15, d: 23.22, nd: 1.0, elemId: 0, sd: 13.0 }, // [d16 variable]

    // ──── GR4: 2nd focus group (3 elements, moves toward object) ────
    { label: "17", R: 89.3718, d: 3.942, nd: 1.7292, elemId: 10, sd: 14.3 }, // G10 front
    { label: "18", R: -74.3718, d: 0.5, nd: 1.0, elemId: 0, sd: 14.1 }, // G10 rear → air
    { label: "19", R: 100.2759, d: 5.427, nd: 1.437, elemId: 11, sd: 14.0 }, // G11 front (cemented Dd)
    { label: "20", R: -37.7081, d: 1.28, nd: 1.6727, elemId: 12, sd: 12.9 }, // G11/G12 junction → G12
    { label: "21", R: -188.5814, d: 7.49, nd: 1.0, elemId: 0, sd: 12.8 }, // G12 rear → air [d21 variable]

    // ──── GR5: Final group (3 elements, fixed) ────
    { label: "22", R: -76.0642, d: 2.432, nd: 1.9037, elemId: 13, sd: 10.9 }, // G13 front
    { label: "23", R: -43.4556, d: 1.5, nd: 1.0, elemId: 0, sd: 10.8 }, // G13 rear → air
    { label: "24", R: -88.4506, d: 1.3, nd: 1.6584, elemId: 14, sd: 10.3 }, // G14 front
    { label: "25", R: 88.4506, d: 6.245, nd: 1.0, elemId: 0, sd: 10.1 }, // G14 rear → air
    { label: "26", R: -27.8033, d: 1.3, nd: 1.6968, elemId: 15, sd: 8.9 }, // G15 front
    { label: "27", R: -75.2165, d: 25.4, nd: 1.0, elemId: 0, sd: 8.9 }, // G15 rear → image (air-equiv BFD; cover glass path folded in)
  ],

  /* ── Aspherical coefficients ──
   *  Patent formula (κ convention):
   *  x = c·y² / [1 + √(1 − (1+κ)·c²·y²)] + A·y⁴ + B·y⁶ + C·y⁸ + D·y¹⁰
   *  κ = 0 → K = 0 (spherical base); aspheric departure is entirely polynomial.
   */
  asph: {
    "7A": {
      K: 0,
      A4: 1.68758e-6,
      A6: -2.23231e-10,
      A8: -6.57918e-13,
      A10: 1.65445e-15,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (floating dual-group inner focus) ──
   *  GR2 (1st focus) moves toward image: d7 grows, d12 shrinks.
   *  GR4 (2nd focus) moves toward object: d16 shrinks, d21 grows.
   *  Total variable-gap sum is conserved (118.76 mm optical track, ±0.01 mm rounding).
   *  Patent Table 8: magnification 0.0 (infinity), −0.5×, −1.0× (1:1).
   *  Close focus distance: d_close column uses the −1.0× (1:1) values.
   */
  var: {
    "7A": [2.8, 22.17], // GR1 ↔ GR2 gap (d7)
    "12": [22.92, 3.54], // GR2 ↔ GR3 gap (d12)
    STO: [23.22, 5.0], // STO ↔ GR4 gap (d16)
    "21": [7.49, 25.71], // GR4 ↔ GR5 gap (d21)
  },

  varLabels: [
    ["7A", "D7"],
    ["12", "D12"],
    ["STO", "D16"],
    ["21", "D21"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "GR1 (fixed)", fromSurface: "1", toSurface: "7A" },
    { text: "GR2 (focus→image)", fromSurface: "8", toSurface: "12" },
    { text: "GR3 (OSS)", fromSurface: "13", toSurface: "15" },
    { text: "GR4 (focus→object)", fromSurface: "17", toSurface: "21" },
    { text: "GR5 (fixed)", fromSurface: "22", toSurface: "27" },
  ],

  doublets: [
    { text: "Da", fromSurface: "3", toSurface: "5" },
    { text: "Db", fromSurface: "10", toSurface: "12" },
    { text: "Dc", fromSurface: "13", toSurface: "15" },
    { text: "Dd", fromSurface: "19", toSurface: "21" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.28,
  focusDescription:
    "Floating dual-group inner focus (Dual DDSSM). GR2 retreats toward image; GR4 advances toward object. 1:1 macro capable.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 7.1, 8, 9, 10, 11, 13, 14, 16, 18, 20, 22],

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.28,
} satisfies LensDataInput;

export default LENS_DATA;
