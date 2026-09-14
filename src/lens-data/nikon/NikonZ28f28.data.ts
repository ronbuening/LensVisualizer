import type { LensDataInput } from "../../types/optics.js";

/** WO2022071249A1 Example2, Table2 pp.26–28 and Figure3 p.47.
 * Three source conics use kappa=1+K (equation p.20); K=0 is verified.
 * Nine source elements are ten modeled media because L24 includes a resin layer.
 * Filter20–21 stays omitted; final air-equivalent distance is11.223+1.6/1.5168+0.86.
 * Optical rims are inferred from Figure3 at600dpi, excluding shoulders and callouts.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-z-28f28",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 28mm f/2.8",
  subtitle: "WO 2022/071249 A1 Example 2 — Nikon / SHIMADA",
  specs: ["9 ELEMENTS / 8 GROUPS", "f = 28.824 mm", "F/2.909", "2ω = 76.058°", "3 ASPHERICAL SURFACES"],

  focalLengthMarketing: 28,
  focalLengthDesign: 28.824,
  apertureMarketing: 2.8,
  apertureDesign: 2.909,
  lensMounts: ["nikon-z"],
  imageFormat: "135-full-frame",
  patentNumber: "WO 2022/071249 A1",
  patentAuthors: ["Toshiyuki Shimada"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2022,
  elementCount: 9,
  groupCount: 8,

  /* ── Elements ──
   *  Nikon counts 9 physical elements in 8 groups.
   *  The data format requires separate entries for the L24 glass body and resin
   *  layer (different nd), yielding 10 entries total. The separate filter is excluded.
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
      fl: -26.74,
      glass: "532488 class; J-LLF6 catalog spectral proxy (production supplier unspecified)",
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
      fl: 24.39,
      glass: "S-LAH65V (OHARA, inferred coordinate counterpart)",
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
      glass: "S-LAH99 (OHARA, inferred coordinate counterpart)",
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
      fl: -13.17,
      glass: "S-TIH6 (OHARA, inferred coordinate counterpart)",
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
      fl: -22.25,
      glass: "808227 class; J-SFH1 catalog spectral proxy (production supplier unspecified)",
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
      fl: 21.77,
      glass: "S-LAH65V (OHARA, inferred coordinate counterpart)",
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
      fl: 397.37,
      glass: "Resin layer (source coordinate; formulation unspecified)",
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
      fl: -1032.75,
      glass: "531557 — source optical material (unmatched; supplier unspecified)",
      apd: false,
      role: "Weak negative aspherical lens — both surfaces asph; field-dependent aberration correction",
    },
    {
      id: 9,
      name: "L32",
      label: "Element 8",
      type: "Plano-Convex Positive",
      nd: 1.804,
      vd: 46.6,
      fl: 45.83,
      glass: "S-LAH65V (OHARA, inferred coordinate counterpart)",
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
      fl: -44.28,
      glass: "S-TIM22 (OHARA, inferred coordinate counterpart)",
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
   *    Patent 20–21 = filter (excluded; equivalent air spacing retained)
   */
  surfaces: [
    // ── G1 — Front group (positive, f = +187.2 mm) ──
    { label: "1", R: -67.65263, d: 0.8, nd: 1.53172, elemId: 1, sd: 6.7 }, // L11 front
    { label: "2", R: 18.07229, d: 1.03, nd: 1.0, elemId: 0, sd: 6.2 }, // L11 rear → air
    { label: "3", R: 19.61204, d: 2.3, nd: 1.804, elemId: 2, sd: 6.2 }, // L12 front
    { label: "4", R: 1e15, d: 1.0, nd: 1.0, elemId: 0, sd: 6.2 }, // L12 rear → air

    // ── Aperture stop (patent surface 5, between G1 and G2) ──
    { label: "STO", R: 1e15, d: 4.85, nd: 1.0, elemId: 0, sd: 5.1 }, // D5, variable

    // ── G2 — First focusing group / GF1 (positive, f = +34.7 mm) ──
    { label: "6", R: 39.03942, d: 3.0, nd: 2.001, elemId: 3, sd: 6 }, // L21 front
    { label: "7", R: -14.018, d: 0.7, nd: 1.80518, elemId: 4, sd: 6 }, // L21→L22 junction
    { label: "8", R: 44.52125, d: 3.457, nd: 1.0, elemId: 0, sd: 6.4 }, // L22 rear → air
    { label: "9", R: -11.08066, d: 0.9, nd: 1.80809, elemId: 5, sd: 6.9 }, // L23 front
    { label: "10", R: -29.93301, d: 0.15, nd: 1.0, elemId: 0, sd: 8.2 }, // L23 rear → air
    { label: "11", R: 1e15, d: 6.55, nd: 1.804, elemId: 6, sd: 11 }, // L24g front (flat)
    { label: "12", R: -17.50329, d: 0.14, nd: 1.56093, elemId: 7, sd: 11 }, // L24g/resin junction
    { label: "13A", R: -16.27553, d: 4.45, nd: 1.0, elemId: 0, sd: 11 }, // L24r rear (asph) → air — D13, variable

    // ── G3 — Second focusing group / GF2 (positive, f = +46.6 mm) ──
    { label: "14A", R: -26.85154, d: 2.0, nd: 1.53113, elemId: 8, sd: 12.3 }, // L31 front (asph)
    { label: "15A", R: -28.96313, d: 0.2, nd: 1.0, elemId: 0, sd: 13.1 }, // L31 rear (asph) → air
    { label: "16", R: 1e15, d: 4.5, nd: 1.804, elemId: 9, sd: 14.3 }, // L32 front (flat)
    { label: "17", R: -36.85132, d: 3.7, nd: 1.0, elemId: 0, sd: 14.3 }, // L32 rear → air — D17, variable

    // ── G4 — Rear negative group (fixed, f = −44.3 mm) ──
    { label: "18", R: -34.46648, d: 1.2, nd: 1.64769, elemId: 10, sd: 14.6 }, // L41 front
    { label: "19", R: 173.14403, d: 13.137852320675105, nd: 1.0, elemId: 0, sd: 16.1 }, // L41 rear → image plane (BFD; omitted filter represented by equivalent air spacing)
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
    ["17", "D17"],
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
    "Source near station: 19 cm including the original filter path. G2 and G3 move 1.681 mm and 4.792 mm objectward; G1, stop and G4 stay fixed. Intermediate motion is interpolated.",

  /* ── Aperture configuration ── */
  nominalFno: 2.909,
  maxFstop: 16,
  fstopSeries: [2.909, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
