import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║          LENS DATA — NIKON NIKKOR Z 35mm f/1.8 S                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2019-090947 A Example 4 (Yamada, Imajima,        ║
 * ║    Tatsuno, Sato; Konica Minolta / Nikon joint filing).           ║
 * ║  Wide-angle fast prime, positive–positive–negative 3-group design ║
 * ║  with floating focus (Gr2 + Gr3 independently driven).            ║
 * ║  11 elements / 9 groups, 3 aspherical elements (6 asph surfaces), ║
 * ║  2 ED elements.                                                    ║
 * ║                                                                    ║
 * ║  SCALE:                                                            ║
 * ║    The patent normalizes every example to a maximum image height  ║
 * ║    of 1.00 mm (FIG. 8 IMG HT axis; f = 1.572, 2ω = 64.9°,         ║
 * ║    TL = 4.553). This file stores the prescription at s = 21.6×    ║
 * ║    (image height 21.6 mm, 135 full frame): every R, d, Ri and     ║
 * ║    variable gap × 21.6, asphere A_n ÷ 21.6^(n−1), K unchanged.    ║
 * ║    Patent values at this scale: f = 33.96 mm, F/1.85, TL =        ║
 * ║    98.34 mm, and the POS2 object-to-image distance                ║
 * ║    (7.0 + 4.553) × 21.6 = 249.5 mm, i.e. Nikon's 0.25 m MFD.      ║
 * ║    (35/1.572 = 22.26× would put the image height at 22.3 mm and   ║
 * ║    the near conjugate at 257 mm, so it is not used.)              ║
 * ║                                                                    ║
 * ║  NOTE ON d5 (PATENT MISPRINT, DERIVED VALUE):                     ║
 * ║    The Example 4 table prints d5 = 0.108, but the listed          ║
 * ║    spacings then sum to 4.4015 against the stated TL = 4.553 and  ║
 * ║    give f = 1.624, f1 = 2.168 instead of the stated 1.572 and     ║
 * ║    2.089; the published effective radii of surfaces 5 and 6 also  ║
 * ║    overlap by 0.06 at that spacing. d5 is therefore derived as    ║
 * ║    TL − Σ(other published spacings) = 0.2595 (5.6052 mm here).    ║
 * ║    With it the table reproduces f = 1.5729, f1 = 2.0906, a        ║
 * ║    paraxial image 0.0013 from the stated plane, and the published ║
 * ║    radii of surfaces 9–13 equal the traced F/1.85 marginal ray.   ║
 * ║    FIG. 4 draws the same air space at 0.255. Every other row is   ║
 * ║    the patent value.                                               ║
 * ║                                                                    ║
 * ║  Cover glass PT (nd = 1.51680, t = 0.074 → 1.598 mm) is excluded; ║
 * ║  its air-equivalent thickness t/n is folded into the rear gap:    ║
 * ║  d21 + t/n + BF = (0.751 + 0.04879 + 0.0425) × 21.6 = 18.1934 mm. ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent effective-radius column Ri (有効半径) × 21.6, rounded   ║
 * ║    to 0.01 mm. Surfaces 9–12A and STO, whose published radii are  ║
 * ║    the F/1.85 axial marginal-ray heights, are stored at the       ║
 * ║    traced marginal height (inside the ±0.0005 rounding band of    ║
 * ║    the printed value) so the nominal axial beam is not clipped.   ║
 * ║    The patent also lists the stop radius at POS2 (0.509 →         ║
 * ║    10.99 mm); the file keeps the single infinity iris.            ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikkor-z-35f18s",
  name: "NIKON NIKKOR Z 35mm f/1.8 S",
  maker: "Nikon",
  subtitle: "JP 2019-090947A EX4",
  specs: ["35mm", "f/1.8", "11 elements / 9 groups", "3 Asph · 2 ED", "Z-mount"],

  focalLengthMarketing: 35,
  focalLengthDesign: 33.96,
  apertureMarketing: 1.8,
  apertureDesign: 1.85,
  lensMounts: ["nikon-z"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2019-090947 A",
  patentAuthors: ["Keiko Yamada", "Ryosuke Imajima", "Wataru Tatsuno", "Haruo Sato"],
  patentAssignees: ["Konica Minolta, Inc.", "Nikon Corporation"],
  patentYear: 2019,
  elementCount: 11,
  groupCount: 9,
  focusDescription:
    "Floating focus — Gr2 (3 elements, positive) advances ≈5.0 mm toward the object; Gr3 (1 element, negative) retreats 4.45 mm toward the image. Gr1, stop and image plane fixed.",

  elements: [
    // ── Group 1 (positive, fixed) ──────────────────────────────────
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.13,
      fl: -45.75,
      glass: "J-BK7A (HIKARI catalog equivalent; exact 1.51680 / 64.13)",
      role: "Front field-widening negative meniscus; concave image side. Expands angular acceptance for the 64.9° design field at the wide aperture.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.95375,
      vd: 32.33,
      fl: 31.32,
      glass: "S-LAH98 (OHARA)",
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
      fl: -44.38,
      glass: "S-TIM5 (OHARA)",
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
      fl: -22.81,
      glass: "S-TIM28 (OHARA)",
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
      fl: 23.22,
      glass: "S-LAH89 (OHARA)",
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
      fl: 39.81,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      dPgF: 0.028,
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
      fl: -99.43,
      glass: "M-NBFD10 (HOYA; exact molded-glass coordinate match)",
      role: "Last element before stop; 2× aspherical surfaces provide fine control of residual SA and coma accumulated through the preceding six elements. Asph departures at the patent effective radii: S11A +38 µm, S12A +119 µm.",
    },

    // ── Group 2 (positive, focus → object) ─────────────────────────
    {
      id: 8,
      name: "L21",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.61293,
      vd: 36.94,
      fl: -42.4,
      glass: "S-TIM3 (OHARA)",
      role: "First element of focus group, behind stop. Concave-toward-object shape gently diverges the converging beam from Gr1, suppressing abrupt aberration changes during focus.",
    },
    {
      id: 9,
      name: "L22",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      fl: 31.58,
      glass: "FCD515 (HOYA catalog equivalent; production supplier unspecified)",
      apd: "patent",
      dPgF: 0.019,
      apdNote:
        "Patent θgF = 0.5441 and ΔθgF = +0.019 (condition 6). HOYA FCD515 reproduces the patent nd/νd/θgF triple; production supplier remains unspecified.",
      role: "ED element #2. Strongest positive element in Gr2. Anomalous partial dispersion maintains chromatic correction stability across the entire focus range.",
    },
    {
      id: 10,
      name: "L23",
      label: "Element 10",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.6935,
      vd: 53.2,
      fl: 130.98,
      glass: "L-LAL13 (OHARA)",
      role: "Weak positive meniscus (convex image side); primary role is aberration correction, not power. 2× aspherical surfaces manage field curvature variation during focus. L-prefix = PGM glass. Asph departures at the patent effective radii: S18A −515 µm, S19A +211 µm.",
    },

    // ── Group 3 (negative, focus → image) ──────────────────────────
    {
      id: 11,
      name: "L31",
      label: "Element 11",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.46,
      fl: -97.34,
      glass: "M-BACD12 (HOYA catalog equivalent; exact molded-glass coordinate match)",
      role: "Sole Gr3 element — dedicated field flattener and final wavefront corrector. Concave-toward-object per patent condition (7). Molded-glass coordinate. Largest departures in design at the patent effective radii: S20A −653 µm, S21A −825 µm.",
    },
  ],

  surfaces: [
    // All R, d, sd = patent Example 4 value × 21.6 (see header). d5 is the derived value.
    // ── Gr1 (fixed) ────────────────────────────────────────────────
    // L11 — negative meniscus
    { label: "1", R: 99.8611, d: 2.2032, nd: 1.5168, elemId: 1, sd: 17.97 },
    { label: "2", R: 18.9734, d: 7.6464, nd: 1.0, elemId: 0, sd: 14.54 },

    // D1: L12 (biconvex) + L13 (biconcave), cemented
    { label: "3", R: 87.9768, d: 5.5728, nd: 1.95375, elemId: 2, sd: 14.19 },
    { label: "4", R: -43.8264, d: 1.7928, nd: 1.60342, elemId: 3, sd: 13.82 },
    // d5: patent prints 0.108 (2.333 mm); derived 0.2595 from TL — see header note.
    { label: "5", R: 69.8933, d: 5.6052, nd: 1.0, elemId: 0, sd: 12.29 },

    // D2: L14 (biconcave) + L15 (biconvex equi-convex), cemented
    { label: "6", R: -27.9612, d: 3.7152, nd: 1.68893, elemId: 4, sd: 11.84 },
    { label: "7", R: 37.8367, d: 7.1064, nd: 1.8515, elemId: 5, sd: 13.63 },
    { label: "8", R: -37.8367, d: 0.3888, nd: 1.0, elemId: 0, sd: 13.93 },

    // L16 — biconvex positive, ED #1 (S-FPL51)
    { label: "9", R: 25.7407, d: 7.9488, nd: 1.497, elemId: 6, sd: 14.112 },
    { label: "10", R: -76.7405, d: 0.1944, nd: 1.0, elemId: 0, sd: 13.637 },

    // L17 — negative meniscus, 2× aspherical
    { label: "11A", R: 89.761, d: 1.2312, nd: 1.83441, elemId: 7, sd: 12.682 },
    { label: "12A", R: 42.8458, d: 4.0392, nd: 1.0, elemId: 0, sd: 12.041 },

    // ── Aperture stop (patent surface 13, fixed with Gr1) ──────────
    // Patent R13 = 0.533 (POS1) / 0.509 (POS2); d13 = 0.514 → 0.283.
    { label: "STO", R: 1e15, d: 11.1024, nd: 1.0, elemId: 0, sd: 11.516 },

    // ── Gr2 (positive, moves toward object during close focus) ─────
    // L21 — negative meniscus, concave object side
    { label: "14", R: -21.4207, d: 1.3392, nd: 1.61293, elemId: 8, sd: 10.32 },
    { label: "15", R: -124.8264, d: 0.2592, nd: 1.0, elemId: 0, sd: 10.69 },

    // L22 — biconvex positive, ED #2 (fluorophosphate crown)
    { label: "16", R: 45.887, d: 6.0912, nd: 1.59282, elemId: 9, sd: 11.75 },
    { label: "17", R: -30.0629, d: 4.5144, nd: 1.0, elemId: 0, sd: 12.14 },

    // L23 — positive meniscus, 2× aspherical (convex image side)
    { label: "18A", R: -181.8094, d: 2.1168, nd: 1.6935, elemId: 10, sd: 12.94 },
    { label: "19A", R: -60.8602, d: 4.9464, nd: 1.0, elemId: 0, sd: 13.26 },

    // ── Gr3 (negative, moves toward image during close focus) ──────
    // L31 — negative meniscus, 2× aspherical (concave object side)
    { label: "20A", R: -40.9817, d: 1.7928, nd: 1.58313, elemId: 11, sd: 13.93 },
    // d21: (patent 0.751 + cover glass 0.074/1.5168 + BF 0.0425) × 21.6 = 18.1934 to image
    { label: "21A", R: -149.7917, d: 18.1934, nd: 1.0, elemId: 0, sd: 15.21 },
  ],

  // Patent coefficients ÷ 21.6^(n−1); K unchanged (patent sag equation uses 1 + K).
  asph: {
    "11A": {
      K: -4.9288,
      A4: -9.5081e-6,
      A6: 1.0726e-7,
      A8: -2.1051e-10,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "12A": {
      K: -0.4693,
      A4: -8.2906e-6,
      A6: 1.2099e-7,
      A8: -1.3279e-10,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "18A": {
      K: 15.3255,
      A4: -2.0471e-5,
      A6: 1.4654e-8,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "19A": {
      K: -0.9347,
      A4: -2.3974e-7,
      A6: 2.4629e-8,
      A8: 9.0395e-11,
      A10: -1.1041e-13,
      A12: 0,
      A14: 0,
    },
    "20A": {
      K: -0.1889,
      A4: -1.1342e-5,
      A6: -3.2944e-8,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "21A": {
      K: 0,
      A4: -9.2868e-6,
      A6: -3.9835e-8,
      A8: 8.7022e-11,
      A10: -1.2682e-13,
      A12: 0,
      A14: 0,
    },
  },

  // Three variable gaps: STO→Gr2, Gr2→Gr3, Gr3→image
  // [POS1 infinity, POS2 object 7.0 → 151.2 mm before surface 1]; patent rows × 21.6.
  // The 21A gap carries the same folded cover-glass + BF constant (0.09129 → 1.9718 mm) in both states.
  var: {
    STO: [11.1024, 6.1128],
    "19A": [4.9464, 14.3856],
    "21A": [18.1934, 13.7438],
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
  nominalFno: 1.85,
  fstopSeries: [1.85, 2, 2.8, 4, 5.6, 8, 11, 16],
  maxFstop: 16,
  scFill: 0.55,
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
