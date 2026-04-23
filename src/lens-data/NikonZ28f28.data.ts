import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON NIKKOR Z 28mm f/2.8                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2022/071249 A1 Example 2 (Table 2)               ║
 * ║  (Nikon / SHIMADA, Toshiyuki).                                     ║
 * ║  Compact wide-angle prime for Nikon Z-mount.                       ║
 * ║  9 elements / 8 groups, 3 aspherical surfaces on 2 elements.      ║
 * ║  Focus: Floating inner-focus (GF1 = G2, GF2 = G3).               ║
 * ║  G1 and G4 fixed; aperture stop fixed between G1 and G2.          ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters. Initial SDs estimated via  ║
 * ║    paraxial marginal + chief ray trace at full field (ω = 38°),   ║
 * ║    with distortion correction factor and 10% mechanical clearance. ║
 * ║    G2 and G3 SDs then reduced to satisfy positive edge thickness, ║
 * ║    shared rim-slope, and cross-gap render diagnostics.            ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-z-28f28",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 28mm f/2.8",
  subtitle: "WO 2022/071249 A1 Example 2 — Nikon / SHIMADA",
  specs: ["9 ELEMENTS / 8 GROUPS", "f ≈ 28.8 mm", "F/2.8", "2ω ≈ 76.1°", "3 ASPHERICAL SURFACES"],

  focalLengthMarketing: 28,
  focalLengthDesign: 28.8,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  patentYear: 2022,
  elementCount: 9,
  groupCount: 8,

  /* ── Elements ──
   *  Nikon counts 9 physical elements in 8 groups.
   *  The data format requires separate entries for the L24 glass body and resin
   *  layer (different nd), plus the sensor cover glass — yielding 11 entries total.
   *
   *  Group structure: G1(+) — S — G2(+, GF1) — G3(+, GF2) — G4(−) — [FL]
   */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.53172,
      vd: 48.78,
      fl: -26.8,
      glass: "S-TIL 2 (OHARA)",
      apd: false,
      role: "Front negative — controls astigmatism, contributes to Petzval correction",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.804,
      vd: 46.6,
      fl: 24.4,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Dominant positive power in G1; convex front, flat rear",
    },
    {
      id: 3,
      name: "L21",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.12,
      fl: 10.6,
      glass: "S-NPH 1 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Primary positive power — ultra-high index (nd = 2.001) reduces Petzval sum",
    },
    {
      id: 4,
      name: "L22",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.45,
      fl: -13.2,
      glass: "S-TIH 14 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Cemented to L21 — corrects SA and coma at the cemented interface",
    },
    {
      id: 5,
      name: "L23",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.80809,
      vd: 22.74,
      fl: -22.2,
      glass: "S-TIH 18 (OHARA)",
      apd: false,
      role: "High-dispersion negative — SA correction and lateral color control",
    },
    {
      id: 6,
      name: "L24g",
      label: "Element 6 (glass body)",
      type: "Plano-Convex Positive",
      nd: 1.804,
      vd: 46.6,
      fl: 21.8,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      cemented: "H1",
      role: "Hybrid asphere glass body — flat front, positive rear; same glass as L12 and L32",
    },
    {
      id: 7,
      name: "L24r",
      label: "Element 6 (resin layer)",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.56093,
      vd: 36.64,
      fl: 413.6,
      glass: "UV-curing resin (proprietary)",
      apd: false,
      cemented: "H1",
      role: "Aspherical resin layer — SA and coma correction; image-side surface is aspherical",
    },
    {
      id: 8,
      name: "L31",
      label: "Element 7",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.53113,
      vd: 55.73,
      fl: -1033.0,
      glass: "S-BAL 41 (OHARA)",
      apd: false,
      role: "Near-zero-power aspherical corrector plate — both surfaces asph; field-dependent aberration correction",
    },
    {
      id: 9,
      name: "L32",
      label: "Element 8",
      type: "Plano-Convex Positive",
      nd: 1.804,
      vd: 46.6,
      fl: 45.8,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Dominant positive power in G3; flat front, powered rear; same glass as L12 and L24g",
    },
    {
      id: 10,
      name: "L41",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.64769,
      vd: 33.73,
      fl: -44.3,
      glass: "S-TIM 22 (OHARA)",
      apd: false,
      role: "Rear negative field flattener — Petzval correction, lateral color, exit pupil control",
    },
  ],

  /* ── Surface prescription ──
   *  Patent sign convention: R > 0 = center of curvature on image side.
   *  This matches the data spec convention — no sign reversal needed.
   *  Air nd = 1.00000 omitted in patent; explicitly entered here as 1.0.
   *
   *  Patent surface numbering → data label mapping:
   *    Patent 1–4 = surfaces "1"–"4" (G1)
   *    Patent 5 (絞りS) = "STO"
   *    Patent 6–13* = surfaces "6"–"13A" (G2)
   *    Patent 14*–17 = surfaces "14A"–"17" (G3)
   *    Patent 18–19 = surfaces "18"–"19" (G4)
   *    Patent 20–21 = cover glass (excluded; modeled separately in camera body)
   */
  surfaces: [
    // ── G1 — Front group (positive, f = +187.2 mm) ──
    { label: "1", R: -67.65263, d: 0.8, nd: 1.53172, elemId: 1, sd: 8.5 }, // L11 front
    { label: "2", R: 18.07229, d: 1.03, nd: 1.0, elemId: 0, sd: 8.0 }, // L11 rear → air
    { label: "3", R: 19.61204, d: 2.3, nd: 1.804, elemId: 2, sd: 7.5 }, // L12 front
    { label: "4", R: 1e15, d: 1.0, nd: 1.0, elemId: 0, sd: 6.5 }, // L12 rear → air

    // ── Aperture stop (patent surface 5, between G1 and G2) ──
    { label: "STO", R: 1e15, d: 4.85, nd: 1.0, elemId: 0, sd: 5.1 }, // D5, variable

    // ── G2 — First focusing group / GF1 (positive, f = +34.7 mm) ──
    { label: "6", R: 39.03942, d: 3.0, nd: 2.001, elemId: 3, sd: 7.0 }, // L21 front
    { label: "7", R: -14.018, d: 0.7, nd: 1.80518, elemId: 4, sd: 7.5 }, // L21→L22 junction
    { label: "8", R: 44.52125, d: 3.457, nd: 1.0, elemId: 0, sd: 7.0 }, // L22 rear → air
    { label: "9", R: -11.08066, d: 0.9, nd: 1.80809, elemId: 5, sd: 9.5 }, // L23 front
    { label: "10", R: -29.93301, d: 0.15, nd: 1.0, elemId: 0, sd: 11.5 }, // L23 rear → air
    { label: "11", R: 1e15, d: 6.55, nd: 1.804, elemId: 6, sd: 13.0 }, // L24g front (flat)
    { label: "12", R: -17.50329, d: 0.14, nd: 1.56093, elemId: 7, sd: 13.5 }, // L24g/resin junction
    { label: "13A", R: -16.27553, d: 4.45, nd: 1.0, elemId: 0, sd: 13.5 }, // L24r rear (asph) → air — D13, variable

    // ── G3 — Second focusing group / GF2 (positive, f = +46.6 mm) ──
    { label: "14A", R: -26.85154, d: 2.0, nd: 1.53113, elemId: 8, sd: 18.5 }, // L31 front (asph)
    { label: "15A", R: -28.96313, d: 0.2, nd: 1.0, elemId: 0, sd: 19.5 }, // L31 rear (asph) → air
    { label: "16", R: 1e15, d: 4.5, nd: 1.804, elemId: 9, sd: 17.0 }, // L32 front (flat)
    { label: "17", R: -36.85132, d: 3.7, nd: 1.0, elemId: 0, sd: 17.5 }, // L32 rear → air — D17, variable

    // ── G4 — Rear negative group (fixed, f = −44.3 mm) ──
    { label: "18", R: -34.46648, d: 1.2, nd: 1.64769, elemId: 10, sd: 20.0 }, // L41 front
    { label: "19", R: 173.14403, d: 11.223, nd: 1.0, elemId: 0, sd: 20.0 }, // L41 rear → image plane (BFD; cover glass modeled separately in camera body)
  ],

  /* ── Aspherical coefficients ──
   *  Patent conic constant κ = 1 + K (standard convention). All surfaces have
   *  κ = 1.00000, so K = 0 in the spec convention (spherical base curve,
   *  aspherical departure carried entirely by polynomial terms).
   */
  asph: {
    "13A": {
      K: 0,
      A4: 2.85655e-5,
      A6: -1.38279e-8,
      A8: 5.79289e-10,
      A10: 9.06875e-13,
      A12: -2.2576e-15,
      A14: 1.3307e-17,
    },
    "14A": {
      K: 0,
      A4: 2.41081e-5,
      A6: 9.24872e-8,
      A8: -6.64821e-10,
      A10: 1.30136e-12,
      A12: 8.8976e-16,
      A14: 0,
    },
    "15A": {
      K: 0,
      A4: 3.97489e-5,
      A6: 2.41498e-7,
      A8: -1.14609e-9,
      A10: 2.49848e-12,
      A12: -2.3864e-15,
      A14: 0,
    },
  },

  /* ── Variable air spacings (floating inner-focus) ──
   *  Three variable gaps → floating focus with 2 independently moving groups.
   *  G1, aperture stop, and G4 are fixed relative to the image plane.
   *  Total variable gap sum is conserved: 4.850 + 4.450 + 3.700 = 13.000 mm
   *  at both infinity and close focus, confirming internal focus.
   *
   *  Close focus: β = −0.203, D0 = 135.390 mm → MFD = D0 + TL = 190.0 mm.
   */
  var: {
    STO: [4.85, 3.169], // Stop → G2 (G2 moves toward object)
    "13A": [4.45, 1.339], // G2 → G3 (both groups move, G3 moves more)
    "17": [3.7, 8.492], // G3 → G4 (G3 moves toward object, gap expands)
  },

  varLabels: [
    ["STO", "D5"],
    ["13A", "D13"],
    ["17", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "4" },
    { text: "G2 (+) GF1", fromSurface: "6", toSurface: "13A" },
    { text: "G3 (+) GF2", fromSurface: "14A", toSurface: "17" },
    { text: "G4 (−)", fromSurface: "18", toSurface: "19" },
  ],

  doublets: [
    { text: "D1", fromSurface: "6", toSurface: "8" }, // L21 + L22 cemented
    { text: "H1", fromSurface: "11", toSurface: "13A" }, // L24 hybrid composite
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.19,
  focusDescription:
    "Floating inner-focus: G2 (GF1) and G3 (GF2) move toward the object with differential travel (1.68 mm and 4.79 mm respectively). G1, aperture stop, and G4 remain fixed.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  maxFstop: 16,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
