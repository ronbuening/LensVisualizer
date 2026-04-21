import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║          LENS DATA — NIKON NIKKOR Z 35mm f/1.8 S                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2019-090947A Example 4 (Yamada, Imashima,        ║
 * ║    Tatsuno, Sato; Konica Minolta / Nikon joint filing).           ║
 * ║  Wide-angle fast prime, positive–positive–negative 3-group design ║
 * ║  with floating focus (Gr2 + Gr3 independently driven).            ║
 * ║  11 elements / 9 groups, 3 aspherical elements (6 asph surfaces), ║
 * ║  2 ED elements.                                                    ║
 * ║                                                                    ║
 * ║  Prescription is at patent-normalized scale (f = 1.572 mm).       ║
 * ║  Scale factor to 35 mm production: 22.26×.                        ║
 * ║                                                                    ║
 * ║  NOTE ON EFL DISCREPANCY:                                          ║
 * ║    Independent paraxial ray trace yields EFL = 1.624 mm, a 3.3%   ║
 * ║    discrepancy vs. the patent-stated 1.572 mm. The error is       ║
 * ║    concentrated in Gr1 (computed f₁ = 2.168 vs. patent 2.089 mm), ║
 * ║    consistent with accumulated rounding across 12 Gr1 surfaces.   ║
 * ║    Gr2 and Gr3 match patent Table 2 to <0.1%.                     ║
 * ║                                                                    ║
 * ║  Cover glass (nd = 1.517, t = 0.074) excluded; its optical path   ║
 * ║  is folded into the back focal distance.                           ║
 * ║                                                                    ║
 * ║  Semi-diameters from patent Ri (有効半径) column.                   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikkor-z-35f18s",
  name: "NIKON NIKKOR Z 35mm f/1.8 S",
  maker: "Nikon",
  subtitle: "JP 2019-090947A EX4",
  specs: ["35mm", "f/1.8", "11 elements / 9 groups", "3 Asph · 2 ED", "Z-mount"],

  focalLengthMarketing: 35,
  focalLengthDesign: 1.572,
  apertureMarketing: 1.8,
  apertureDesign: 1.85,
  patentYear: 2019,
  elementCount: 11,
  groupCount: 9,
  focusDescription:
    "Floating focus — Gr2 (3 elements, positive) advances toward object; Gr3 (1 element, negative) retreats toward image. Gr1 and stop fixed.",

  elements: [
    // ── Group 1 (positive, fixed) ──────────────────────────────────
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.13,
      fl: -2.12,
      glass: "S-BSL7 (OHARA)",
      role: "Front field-widening negative meniscus; concave image side. Expands angular acceptance for 63° field coverage at the wide aperture.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.95375,
      vd: 32.33,
      fl: 1.45,
      glass: "S-LAH79 (OHARA)",
      cemented: "D1",
      role: "Ultra-high-index La flint (nd = 1.954, highest in design). Strong positive power with manageable curvatures for SA control at f/1.8.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.60342,
      vd: 38.03,
      fl: -2.05,
      glass: "S-TIM2 (OHARA)",
      cemented: "D1",
      role: "Light titanium flint in D1 doublet. Modest Δνd (5.7) — doublet prioritizes monochromatic aberration correction over chromatic.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.16,
      fl: -1.06,
      glass: "S-TIH14 (OHARA)",
      cemented: "D2",
      role: "Dense titanium flint in D2 doublet. Meaningful chromatic correction (Δνd ≈ 9.6) and strong negative power.",
    },
    {
      id: 5,
      name: "L15",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.8515,
      vd: 40.78,
      fl: 1.08,
      glass: "S-LAH51 (OHARA)",
      cemented: "D2",
      role: "Equi-convex (|R₇| = |R₈|) high-index La crown. Primary positive-power workhorse in Gr1; optimal shape for minimizing SA.",
    },
    {
      id: 6,
      name: "L16",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 1.84,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "ΔPgF = +0.028 (OHARA catalog θgF = 0.5375). Fluorophosphate ED crown with very high νd = 81.6.",
      role: "ED element #1. Extremely low dispersion for primary + secondary chromatic correction. Positioned before stop at full marginal ray height for maximum chromatic efficiency.",
    },
    {
      id: 7,
      name: "L17",
      label: "Element 7",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.83441,
      vd: 37.28,
      fl: -4.6,
      glass: "S-LAH55VS (OHARA), probable",
      role: "Last element before stop; 2× aspherical surfaces provide fine control of residual SA and coma accumulated through the preceding six elements. Asph departures: S11A +39 µm, S12A +122 µm (scaled).",
    },

    // ── Group 2 (positive, focus → object) ─────────────────────────
    {
      id: 8,
      name: "L21",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.61293,
      vd: 36.94,
      fl: -1.96,
      glass: "S-TIM25 (OHARA)",
      role: "First element of focus group, behind stop. Concave-toward-object shape gently diverges the converging beam from Gr1, suppressing abrupt aberration changes during focus.",
    },
    {
      id: 9,
      name: "L22",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      fl: 1.46,
      glass: "Fluorophosphate crown (family-level ID only)",
      apd: "patent",
      apdNote:
        "θgF = 0.5441, ΔθgF = +0.019 (patent condition 6). nd/νd = 1.59282/68.62 does not exactly match any single OHARA catalog glass; nearest is S-FPM2 (Δnd = 0.0024, Δνd = 0.88).",
      role: "ED element #2. Strongest positive element in Gr2. Anomalous partial dispersion maintains chromatic correction stability across the entire focus range.",
    },
    {
      id: 10,
      name: "L23",
      label: "Element 10",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.6935,
      vd: 53.2,
      fl: 6.06,
      glass: "L-LAL14 (OHARA), probable",
      role: "Weak positive meniscus (convex image side); primary role is aberration correction, not power. 2× aspherical surfaces manage field curvature variation during focus. L-prefix = PGM glass. Asph departures: S18A −530 µm, S19A +218 µm (scaled).",
    },

    // ── Group 3 (negative, focus → image) ──────────────────────────
    {
      id: 11,
      name: "L31",
      label: "Element 11",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.46,
      fl: -4.51,
      glass: "L-BAL42 (OHARA), probable",
      role: "Sole Gr3 element — dedicated field flattener and final wavefront corrector. Concave-toward-object per patent condition (7). L-prefix = PGM glass. Largest departures in design: S20A −674 µm, S21A −850 µm (scaled).",
    },
  ],

  surfaces: [
    // ── Gr1 (fixed) ────────────────────────────────────────────────
    // L11 — negative meniscus
    { label: "1", R: 4.6232, d: 0.102, nd: 1.5168, elemId: 1, sd: 0.832 },
    { label: "2", R: 0.8784, d: 0.354, nd: 1.0, elemId: 0, sd: 0.673 },

    // D1: L12 (biconvex) + L13 (biconcave), cemented
    { label: "3", R: 4.073, d: 0.258, nd: 1.95375, elemId: 2, sd: 0.48 },
    { label: "4", R: -2.029, d: 0.083, nd: 1.60342, elemId: 3, sd: 0.48 },
    { label: "5", R: 3.2358, d: 0.108, nd: 1.0, elemId: 0, sd: 0.4 },

    // D2: L14 (biconcave) + L15 (biconvex equi-convex), cemented
    // SD trimmed from the rough estimate so the very tight D1→D2 gap clears
    // the adjacent sag profiles while preserving the patent air spacing.
    { label: "6", R: -1.2945, d: 0.172, nd: 1.68893, elemId: 4, sd: 0.462 },
    { label: "7", R: 1.7517, d: 0.329, nd: 1.8515, elemId: 5, sd: 0.462 },
    { label: "8", R: -1.7517, d: 0.018, nd: 1.0, elemId: 0, sd: 0.462 },

    // L16 — biconvex positive, ED #1 (S-FPL51)
    { label: "9", R: 1.1917, d: 0.368, nd: 1.497, elemId: 6, sd: 0.47 },
    { label: "10", R: -3.5528, d: 0.009, nd: 1.0, elemId: 0, sd: 0.45 },

    // L17 — negative meniscus, 2× aspherical
    { label: "11A", R: 4.1556, d: 0.057, nd: 1.83441, elemId: 7, sd: 0.48 },
    { label: "12A", R: 1.9836, d: 0.187, nd: 1.0, elemId: 0, sd: 0.46 },

    // ── Aperture stop (fixed with Gr1) ─────────────────────────────
    // STO position inferred from patent surface 13; gap split is d12A = 0.187 (Gr1 rear to STO), d_STO = 0.514 (STO to Gr2 front at ∞)
    { label: "STO", R: 1e15, d: 0.514, nd: 1.0, elemId: 0, sd: 0.533 },

    // ── Gr2 (positive, moves toward object during close focus) ─────
    // L21 — negative meniscus, concave object side
    { label: "14", R: -0.9917, d: 0.062, nd: 1.61293, elemId: 8, sd: 0.4 },
    { label: "15", R: -5.779, d: 0.012, nd: 1.0, elemId: 0, sd: 0.42 },

    // L22 — biconvex positive, ED #2 (fluorophosphate crown)
    { label: "16", R: 2.1244, d: 0.282, nd: 1.59282, elemId: 9, sd: 0.44 },
    { label: "17", R: -1.3918, d: 0.209, nd: 1.0, elemId: 0, sd: 0.46 },

    // L23 — positive meniscus, 2× aspherical (convex image side)
    { label: "18A", R: -8.4171, d: 0.098, nd: 1.6935, elemId: 10, sd: 0.5 },
    { label: "19A", R: -2.8176, d: 0.229, nd: 1.0, elemId: 0, sd: 0.52 },

    // ── Gr3 (negative, moves toward image during close focus) ──────
    // L31 — negative meniscus, 2× aspherical (concave object side)
    { label: "20A", R: -1.8973, d: 0.083, nd: 1.58313, elemId: 11, sd: 0.56 },
    // d21: patent 0.751 + cover glass 0.074 + BF 0.0425 = 0.8675 total to image
    { label: "21A", R: -6.9348, d: 0.8675, nd: 1.0, elemId: 0, sd: 0.58 },
  ],

  asph: {
    "11A": {
      K: -4.9288,
      A4: -9.582e-2,
      A6: 5.043e-1,
      A8: -4.618e-1,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "12A": {
      K: -0.4693,
      A4: -8.355e-2,
      A6: 5.689e-1,
      A8: -2.913e-1,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "18A": {
      K: 15.3255,
      A4: -2.063e-1,
      A6: 6.89e-2,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "19A": {
      K: -0.9347,
      A4: -2.416e-3,
      A6: 1.158e-1,
      A8: 1.983e-1,
      A10: -1.13e-1,
      A12: 0,
      A14: 0,
    },
    "20A": {
      K: -0.1889,
      A4: -1.143e-1,
      A6: -1.549e-1,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "21A": {
      K: 0,
      A4: -9.359e-2,
      A6: -1.873e-1,
      A8: 1.909e-1,
      A10: -1.298e-1,
      A12: 0,
      A14: 0,
    },
  },

  // Three variable gaps: STO→Gr2, Gr2→Gr3, Gr3→image
  // [d_infinity, d_close_focus]
  // d_close includes cover glass folded into BF for surface 21A
  var: {
    STO: [0.514, 0.283],
    "19A": [0.229, 0.666],
    "21A": [0.8675, 0.6615],
  },
  varLabels: [
    ["STO", "D13"],
    ["19A", "D19"],
    ["21A", "BF"],
  ],

  groups: [
    { text: "Gr1 (+) Fixed", fromSurface: "1", toSurface: "12A" },
    { text: "Gr2 (+) Focus", fromSurface: "14", toSurface: "19A" },
    { text: "Gr3 (−) Focus", fromSurface: "20A", toSurface: "21A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  closeFocusM: 0.25,
  nominalFno: 1.8,
  fstopSeries: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16],
  scFill: 0.55,
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
