import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — LEICA SUMMILUX 28 mm f/1.7 ASPH.                ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2016/0266350 A1, Example 1 (Panasonic IPM /      ║
 * ║  Iiyama & Sueyoshi). Production lens of Leica Q (Typ 116),       ║
 * ║  Q2, and Q3 cameras. Designed by Peter Karbe (Leica).            ║
 * ║  11 elements / 9 groups (5 focusing-architecture groups),         ║
 * ║  3 aspherical elements (5 aspherical surfaces).                   ║
 * ║  Focus: floating inner focus — G2 (cemented doublet) and G4      ║
 * ║  (singlet) move toward object; G1, G3, G5 fixed.                 ║
 * ║  G3 (L8–L9 doublet) shifts laterally for OIS.                    ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from paraxial marginal + chief ray trace at           ║
 * ║    f/1.76, ω = 39.9°, with ~8% mechanical clearance.             ║
 * ║    Front element constrained by 49 mm filter thread.              ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent surfaces 22–23 (cover glass, nd = 1.5168, 1.4 mm)       ║
 * ║    omitted from surfaces array; physical thickness folded into    ║
 * ║    BFD of last surface.                                            ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "leica-summilux-28f17",
  maker: "Leica",
  name: "LEICA SUMMILUX 28 mm f/1.7 ASPH.",
  subtitle: "US 2016/0266350 A1 Example 1 — PANASONIC IPM / IIYAMA & SUEYOSHI",
  specs: ["11 ELEMENTS / 9 GROUPS", "f ≈ 27.08 mm", "F/1.76", "2ω ≈ 79.9°", "3 ASPHERICAL ELEMENTS (5 SURFACES)"],

  focalLengthMarketing: 28,
  focalLengthDesign: 27.08,
  apertureMarketing: 1.7,
  apertureDesign: 1.76,
  patentYear: 2016,
  elementCount: 11,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.56732,
      vd: 42.8,
      fl: -31.0,
      glass: "S-BAL42 (OHARA)",
      apd: false,
      role: "Negative front element — diverges field bundle for angular coverage",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.881,
      vd: 40.1,
      fl: 30.7,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "Primary positive power carrier in G1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.60342,
      vd: 38.0,
      fl: -39.5,
      glass: "S-TIM5 (OHARA)",
      apd: false,
      role: "Symmetric aberration corrector; chromatic compensation",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.6,
      fl: 31.2,
      glass: "L-LAM60 (OHARA)",
      apd: false,
      role: "Low-dispersion positive power; PGM glass for high-volume production",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.91082,
      vd: 35.2,
      fl: 80.2,
      glass: "S-LAH79 (OHARA)",
      apd: false,
      role: "Ultra-high-index field lens guiding chief ray into stop",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.87722,
      vd: 37.0,
      fl: 24.8,
      glass: "S-LAH63 (OHARA)",
      apd: false,
      role: "Aspherical focusing doublet — spherical aberration control near stop",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.76182,
      vd: 26.6,
      fl: -28.9,
      glass: "S-TIH14 (OHARA)",
      apd: false,
      role: "High-dispersion corrector in G2 focusing doublet",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.74077,
      vd: 27.8,
      fl: -21.7,
      glass: "S-NBH55 (OHARA)",
      apd: false,
      role: "Chromatic corrector in OIS doublet",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.881,
      vd: 40.1,
      fl: 22.5,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "OIS doublet positive — same glass as L2",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.77271,
      vd: 49.7,
      fl: 34.0,
      glass: "S-LAM66 (OHARA)",
      apd: false,
      role: "Double-asphere 2nd focusing singlet — primary focus corrector",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.6825,
      vd: 33.0,
      fl: -27.8,
      glass: "H-ZF52A (CDGM)",
      apd: false,
      role: "Aspherical field-flattener; shortens BFD for compact body",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: Front positive group (L1–L5), fixed ──
    { label: "1", R: -111.983, d: 1.4, nd: 1.56732, elemId: 1, sd: 19.0 }, // L1 front
    { label: "2", R: 20.9441, d: 3.1601, nd: 1.0, elemId: 0, sd: 17.0 }, // L1 rear → air
    { label: "3", R: 33.3039, d: 6.1681, nd: 1.881, elemId: 2, sd: 17.0 }, // L2 front
    { label: "4", R: -131.595, d: 1.6754, nd: 1.0, elemId: 0, sd: 15.5 }, // L2 rear → air
    { label: "5", R: -47.8716, d: 1.0, nd: 1.60342, elemId: 3, sd: 14.5 }, // L3 front
    { label: "6", R: 47.8716, d: 1.3489, nd: 1.0, elemId: 0, sd: 14.0 }, // L3 rear → air
    { label: "7", R: 23.7727, d: 4.6431, nd: 1.59282, elemId: 4, sd: 12.0 }, // L4 front
    { label: "8", R: -76.9617, d: 1.0, nd: 1.0, elemId: 0, sd: 11.5 }, // L4 rear → air
    { label: "9", R: 62.5536, d: 1.8121, nd: 1.91082, elemId: 5, sd: 10.5 }, // L5 front
    { label: "10", R: 428.7396, d: 2.0, nd: 1.0, elemId: 0, sd: 10.0 }, // L5 rear → air

    // ── Aperture stop (between G1 and G2) ──
    { label: "STO", R: 1e15, d: 6.3788, nd: 1.0, elemId: 0, sd: 7.95 },

    // ── G2: 1st focusing doublet (L6–L7), moves toward object ──
    { label: "12A", R: -305.338, d: 2.3735, nd: 1.87722, elemId: 6, sd: 8.5 }, // L6 front (asph)
    { label: "13", R: -20.3412, d: 0.7, nd: 1.76182, elemId: 7, sd: 9.0 }, // L6→L7 junction
    { label: "14", R: -274.05, d: 3.0255, nd: 1.0, elemId: 0, sd: 9.2 }, // L7 rear → air

    // ── G3: Stationary OIS doublet (L8–L9), shifts laterally for stabilisation ──
    { label: "15", R: -22.7936, d: 0.9, nd: 1.74077, elemId: 8, sd: 10.0 }, // L8 front
    { label: "16", R: 55.5503, d: 5.0027, nd: 1.881, elemId: 9, sd: 10.5 }, // L8→L9 junction
    { label: "17", R: -29.5541, d: 4.3357, nd: 1.0, elemId: 0, sd: 12.0 }, // L9 rear → air

    // ── G4: 2nd focusing singlet (L10), moves toward object ──
    { label: "18A", R: -1000, d: 5.69, nd: 1.77271, elemId: 10, sd: 13.0 }, // L10 front (asph)
    { label: "19A", R: -25.6511, d: 5.6658, nd: 1.0, elemId: 0, sd: 14.0 }, // L10 rear (asph) → air

    // ── G5: Field-flattener (L11), fixed ──
    { label: "20A", R: -17.7688, d: 2.0, nd: 1.6825, elemId: 11, sd: 15.0 }, // L11 front (asph)
    { label: "21A", R: -286.769, d: 4.7011, nd: 1.0, elemId: 0, sd: 15.5 }, // L11 rear (asph) → image (BFD incl. cover glass)
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "12A": {
      K: 0,
      A4: -2.2402e-5,
      A6: -1.9303e-7,
      A8: 1.9069e-9,
      A10: 3.45582e-11,
      A12: -1.62696e-12,
      A14: 1.42308e-14,
    },
    "18A": {
      K: 0,
      A4: -2.9558e-5,
      A6: 1.54985e-7,
      A8: -1.28788e-9,
      A10: 5.79353e-12,
      A12: -7.18388e-15,
      A14: 0,
    },
    "19A": {
      K: 0,
      A4: -7.63516e-6,
      A6: 1.21226e-7,
      A8: -8.41754e-10,
      A10: 3.04999e-12,
      A12: -1.88131e-15,
      A14: 0,
    },
    "20A": {
      K: -1.07027,
      A4: 6.7124e-5,
      A6: -7.99132e-7,
      A8: 4.89936e-9,
      A10: -1.35501e-11,
      A12: 1.21204e-14,
      A14: 0,
    },
    "21A": {
      K: 0,
      A4: 5.71492e-5,
      A6: -7.71272e-7,
      A8: 3.68213e-9,
      A10: -8.24551e-12,
      A12: 6.72998e-15,
      A14: 0,
    },
  },

  /* ── Variable air spacings (State M1: infinity to 0.3 m) ──
   *  Floating inner focus: G2 and G4 move toward object.
   *  Five variable gaps: stop–G2, G2–G3, G3–G4, G4–G5, and BFD.
   *  Patent also defines State M2 (macro, 0.3–0.17 m) where G1–G4
   *  extend as a unit; only M1 is modelled here.
   */
  var: {
    STO: [6.3788, 4.4288],
    "14": [3.0255, 4.9755],
    "17": [4.3357, 1.3888],
    "19A": [5.6658, 8.6128],
    "21A": [4.7011, 4.7763],
  },
  varLabels: [
    ["STO", "D11"],
    ["14", "D14"],
    ["17", "D17"],
    ["19A", "D19"],
    ["21A", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "10" },
    { text: "G2 (+)", fromSurface: "12A", toSurface: "14" },
    { text: "G3 (+)", fromSurface: "15", toSurface: "17" },
    { text: "G4 (+)", fromSurface: "18A", toSurface: "19A" },
    { text: "G5 (−)", fromSurface: "20A", toSurface: "21A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "12A", toSurface: "14" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.3,
  focusDescription:
    "Floating inner focus: G2 (doublet) and G4 (singlet) move toward object. Macro mode (M2) extends G1–G4 as a unit to 0.17 m.",

  /* ── Aperture configuration ── */
  nominalFno: 1.7,
  fstopSeries: [1.7, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
