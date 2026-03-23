/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — RICOH GR 28mm f/2.8                         ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 5,760,973 Example 1 (Ricoh / Atsushi Kawamura).  ║
 * ║  Compact wide-angle for the Ricoh GR-1 film camera (1996).        ║
 * ║  7 elements / 4 groups, 2 aspherical surfaces.                    ║
 * ║  Focus: unit focusing (entire lens translates, BFD changes).      ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    No scaling applied. Patent prescription at f = 28.1 mm,        ║
 * ║    matching the production 28mm specification directly.            ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs. Estimated from combined marginal +   ║
 * ║    chief ray trace (ω = 37.2°) with 10% mechanical clearance,    ║
 * ║    subject to: sd < 0.9|R|, element SD ratio ≤ 1.25, and         ║
 * ║    positive edge thickness. Cemented groups use uniform SDs.      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "ricoh-gr1-28f28",
  name: "RICOH GR 28mm f/2.8",
  subtitle: "US 5,760,973 EXAMPLE 1 — RICOH / KAWAMURA",
  specs: ["7 ELEMENTS / 4 GROUPS", "f ≈ 28.1 mm", "F/2.86", "2ω ≈ 74.4°", "2 ASPHERICAL SURFACES"],

  /* ── Elements ──
   *  Patent notation: L(I,J) = J-th element in I-th component.
   *  L1 = component 1 (negative), L2 = component 2 (positive doublet),
   *  L3 = component 3 (positive cemented triplet), L4 = component 4 (negative).
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1 — L(1,1)",
      type: "Biconcave Neg. (1× Asph)",
      nd: 1.64769,
      vd: 33.8,
      fl: -25.0,
      glass: "SF2 (Schott) / FD2 (HOYA)",
      apd: false,
      role: "Front negative element of NPPN retrofocus arrangement. Aspherical front surface increases divergence toward periphery, correcting field curvature and coma from the L2 group.",
    },

    {
      id: 2,
      name: "L2",
      label: "Element 2 — L(2,1)",
      type: "Biconvex Positive",
      nd: 1.757,
      vd: 47.7,
      fl: 8.8,
      glass: "S-LAM54 (OHARA)",
      apd: false,
      role: "Primary convergent element of the front group. High-index lanthanum glass enables strong power with moderate curvatures, controlling spherical aberration.",
      cemented: "D1",
    },

    {
      id: 3,
      name: "L3",
      label: "Element 3 — L(2,2)",
      type: "Negative Meniscus",
      nd: 1.68893,
      vd: 31.2,
      fl: -36.3,
      glass: "S-TIM35 (OHARA) / FD110 (HOYA)",
      apd: false,
      role: "Achromatic corrector for L2 doublet. Δν = 16.5 with L(2,1) drives effective achromatization on the object side of the stop.",
      cemented: "D1",
    },

    {
      id: 4,
      name: "L4",
      label: "Element 4 — L(3,1)",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.4,
      fl: -16.1,
      glass: "FK5 (Schott) / S-FSL5 (OHARA)",
      apd: false,
      role: "Front element of cemented triplet. Low index (1.487) creates Δn = 0.348 at junction with L(3,2) — the critical correcting surface carrying 28% of system power. Low index also reduces Petzval sum contribution.",
      cemented: "T1",
    },

    {
      id: 5,
      name: "L5",
      label: "Element 5 — L(3,2)",
      type: "Biconvex Positive",
      nd: 1.835,
      vd: 43.0,
      fl: 8.2,
      glass: "S-LAH55 (OHARA) / TAFD5 (HOYA)",
      apd: false,
      role: "Positive core of the cemented triplet and strongest convergent element in the rear group. Highest index in the system (1.835). Two buried junction surfaces provide convergent and chromatic correction.",
      cemented: "T1",
    },

    {
      id: 6,
      name: "L6",
      label: "Element 6 — L(3,3)",
      type: "Negative Meniscus",
      nd: 1.74077,
      vd: 27.8,
      fl: -20.7,
      glass: "EFD4 (HOYA)",
      apd: false,
      role: "Rear element of cemented triplet. High-dispersion flint provides chromatic balance for the L3 group. Meniscus form contributes to Petzval field correction.",
      cemented: "T1",
    },

    {
      id: 7,
      name: "L7",
      label: "Element 7 — L(4,1)",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.60342,
      vd: 38.0,
      fl: -35.4,
      glass: "F5 (Schott) / S-TIM5 (OHARA)",
      apd: false,
      role: "Field flattener and exit corrector. Aspherical front surface is the primary mechanism for image-side correction of field curvature and coma across the full 74.4° field.",
    },
  ],

  /* ── Surface prescription ──
   *  Patent surface numbering (i) maps to surface labels as follows:
   *    i=1→"1A", i=2→"2", i=3→"3", i=4→"4", i=5→"5", stop→"STO",
   *    i=7→"7", i=8→"8", i=9→"9", i=10→"10", i=11→"11A", i=12→"12"
   *
   *  Sign convention: R > 0 = center of curvature to RIGHT, R < 0 = to LEFT.
   *  nd = refractive index of medium AFTER the surface (1.0 for air).
   *  elemId = element ID for the front surface of each element; 0 for air/exit.
   *
   *  Cemented doublet (L2+L3): junction at surface 4 carries elemId: 3.
   *  Cemented triplet (L4+L5+L6): junctions at surfaces 8 and 9 carry
   *    elemId: 5 and elemId: 6 respectively.
   */
  surfaces: [
    // ── Component L1: single biconcave, aspherical front ──
    { label: "1A", R: -24.427, d: 1.0, nd: 1.64769, elemId: 1, sd: 8.0 }, // L1 front (asph)
    { label: "2", R: 48.935, d: 0.08, nd: 1.0, elemId: 0, sd: 7.5 }, // L1 rear → air

    // ── Component L2: cemented doublet (L2 positive + L3 negative) ──
    { label: "3", R: 12.031, d: 3.43, nd: 1.757, elemId: 2, sd: 6.2 }, // L2 front
    { label: "4", R: -14.84, d: 0.9, nd: 1.68893, elemId: 3, sd: 6.2 }, // Junction → L3
    { label: "5", R: -36.502, d: 0.8, nd: 1.0, elemId: 0, sd: 6.2 }, // L3 rear → air

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 2.41, nd: 1.0, elemId: 0, sd: 4.9 },

    // ── Component L3: cemented triplet (L4 neg + L5 pos + L6 neg) ──
    { label: "7", R: -10.144, d: 0.8, nd: 1.48749, elemId: 4, sd: 5.5 }, // L4 front
    { label: "8", R: 34.733, d: 4.37, nd: 1.835, elemId: 5, sd: 5.5 }, // Junction → L5
    { label: "9", R: -8.514, d: 0.8, nd: 1.74077, elemId: 6, sd: 5.5 }, // Junction → L6
    { label: "10", R: -19.156, d: 2.45, nd: 1.0, elemId: 0, sd: 5.8 }, // L6 rear → air

    // ── Component L4: single negative meniscus, aspherical front ──
    { label: "11A", R: -9.27, d: 1.2, nd: 1.60342, elemId: 7, sd: 7.3 }, // L7 front (asph)
    { label: "12", R: -16.394, d: 17.22, nd: 1.0, elemId: 0, sd: 7.8 }, // L7 rear → BFD
  ],

  /* ── Aspherical coefficients ──
   *  Patent notation: K = conic constant, A/B/C/D = 4th/6th/8th/10th order.
   *  Mapped to spec: K → K, A → A4, B → A6, C → A8, D → A10.
   */
  asph: {
    "1A": {
      K: -0.0665,
      A4: -2.72e-5,
      A6: -1.415e-6,
      A8: 4.466e-8,
      A10: -6.139e-10,
      A12: 0,
      A14: 0,
    },
    "11A": {
      K: 0.5327,
      A4: -8.3178e-5,
      A6: 2.884e-6,
      A8: -1.0011e-7,
      A10: 1.0731e-9,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (unit focus) ──
   *  Unit focusing: entire lens translates as a rigid body.
   *  Only the back focal distance (surface 12 → image) changes.
   *  BFD at infinity: 17.22 mm (computed from marginal ray intercept).
   *  BFD at close focus (0.35 m): ≈ 19.67 mm (≈ 2.45 mm extension).
   */
  var: {
    12: [17.22, 19.67],
  },

  varLabels: [["12", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "L1", fromSurface: "1A", toSurface: "2" },
    { text: "L2", fromSurface: "3", toSurface: "5" },
    { text: "L3", fromSurface: "7", toSurface: "10" },
    { text: "L4", fromSurface: "11A", toSurface: "12" },
  ],

  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" }, // Cemented doublet L2+L3
    { text: "T1", fromSurface: "7", toSurface: "10" }, // Cemented triplet L4+L5+L6
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.35,
  focusDescription:
    "Unit focusing — entire 7-element assembly translates axially. Extension ≈ 2.45 mm at 0.35 m close focus.",

  /* ── Aperture configuration ── */
  nominalFno: 2.86,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.48,
  yScFill: 0.38,
};

export default LENS_DATA;
