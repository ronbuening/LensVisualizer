import type { LensDataInput } from "../../types/optics.js";

/**
 * Nikon NIKKOR Z 35mm f/1.8 S — JP 2019-090947 A, Example 4.
 * Published prescription f = 1.572; physical model scale s = 35 / 1.572.
 * All R, d, sd, element fl and variable gaps below are millimetres after
 * scaling. A_p = A_p,patent / s^(p-1); K and refractive indices are unchanged.
 * The flat-radius sentinel is retained. This is a production-size model,
 * not independent confirmation of the manufactured prescription.
 *
 * Source limitation: the table computes EFL 36.15176 mm at infinity, not
 * the scaled stated 35 mm. Gr1 disagrees with Table 2; the cause remains
 * unresolved. Published front-group surfaces also intersect along the
 * wide-open ray path. Retain unavailable real-ray results rather than
 * changing source powers, enlarging trimmed rims or silently closing the iris.
 * Semi-diameters include earlier rendering trims below published Ri.
 * Sensor cover glass is omitted by diagram convention. Its physical thickness
 * is included in the final air spacing; this does not model plate refraction.
 * See the companion audit and analysis for the remaining limitations.
 */

const LENS_DATA = {
  key: "nikkor-z-35f18s",
  name: "NIKON NIKKOR Z 35mm f/1.8 S",
  maker: "Nikon",
  subtitle: "JP 2019-090947A EX4",
  specs: ["35mm", "f/1.8", "11 elements / 9 groups", "3 Asph · 2 ED", "Z-mount"],

  focalLengthMarketing: 35,
  focalLengthDesign: 35,
  apertureMarketing: 1.8,
  apertureDesign: 1.85,
  lensMounts: ["nikon-z"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2019-090947 A",
  patentAuthors: ["Keiko Yamada", "Ryosuke Imajima", "Wataru Tatsuno", "Haruo Sato"],
  patentAssignees: ["Konica Minolta, Inc.","Nikon Corporation"],
  patentYear: 2019,
  elementCount: 11,
  groupCount: 9,
  focusDescription:
    "Floating focus — Gr2 (3 elements, positive) advances toward object; Gr3 (1 element, negative) retreats toward image. Gr1 and stop fixed. Source-model limitation: the published powers disagree by 3.3%; wide-open rays cannot be traced reliably.",

  elements: [
    // ── Group 1 (positive, fixed) ──────────────────────────────────
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.13,
      fl: -47.2010178117,
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
      fl: 32.28371501272,
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
      fl: -45.64249363868,
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
      fl: -23.60050890585,
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
      fl: 24.04580152672,
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
      fl: 40.96692111959,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      dPgF: 0.028, apdNote: "ΔPgF = +0.028 (OHARA catalog θgF = 0.5375). Fluorophosphate ED crown with very high νd = 81.6.",
      role: "ED element #1. Extremely low dispersion for primary + secondary chromatic correction. Positioned before stop at full marginal ray height for maximum chromatic efficiency.",
    },
    {
      id: 7,
      name: "L17",
      label: "Element 7",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.83441,
      vd: 37.28,
      fl: -102.417302799,
      glass: "M-NBFD10 (HOYA; exact molded-glass coordinate match)",
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
      fl: -43.63867684478,
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
      fl: 32.50636132316,
      glass: "FCD515 (HOYA catalog equivalent; production supplier unspecified)",
      apd: "patent",
      dPgF: 0.019, apdNote:
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
      fl: 134.9236641221,
      glass: "L-LAL13 (OHARA)",
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
      fl: -100.4134860051,
      glass: "L-BAL42 (OHARA), probable",
      role: "Sole Gr3 element — dedicated field flattener and final wavefront corrector. Concave-toward-object per patent condition (7). L-prefix = PGM glass. Largest departures in design: S20A −674 µm, S21A −850 µm (scaled).",
    },
  ],

  surfaces: [
    // ── Gr1 (fixed) ────────────────────────────────────────────────
    // L11 — negative meniscus
    { label: "1", R: 102.9338422392, d: 2.270992366412, nd: 1.5168, elemId: 1, sd: 18.52417302799 },
    { label: "2", R: 19.5572519084, d: 7.881679389313, nd: 1.0, elemId: 0, sd: 14.98409669211 },

    // D1: L12 (biconvex) + L13 (biconcave), cemented
    { label: "3", R: 90.68384223919, d: 5.74427480916, nd: 1.95375, elemId: 2, sd: 10.68702290076 },
    { label: "4", R: -45.17493638677, d: 1.84796437659, nd: 1.60342, elemId: 3, sd: 10.68702290076 },
    { label: "5", R: 72.04389312977, d: 2.404580152672, nd: 1.0, elemId: 0, sd: 8.905852417303 },

    // D2: L14 (biconcave) + L15 (biconvex equi-convex), cemented
    // SD trimmed from the rough estimate so the very tight D1→D2 gap clears
    // the adjacent sag profiles while preserving the patent air spacing.
    { label: "6", R: -28.8215648855, d: 3.82951653944, nd: 1.68893, elemId: 4, sd: 10.28625954198 },
    { label: "7", R: 39.00095419847, d: 7.325063613232, nd: 1.8515, elemId: 5, sd: 10.28625954198 },
    { label: "8", R: -39.00095419847, d: 0.4007633587786, nd: 1.0, elemId: 0, sd: 10.28625954198 },

    // L16 — biconvex positive, ED #1 (S-FPL51)
    { label: "9", R: 26.53276081425, d: 8.193384223919, nd: 1.497, elemId: 6, sd: 10.46437659033 },
    { label: "10", R: -79.10178117048, d: 0.2003816793893, nd: 1.0, elemId: 0, sd: 10.01908396947 },

    // L17 — negative meniscus, 2× aspherical
    { label: "11A", R: 92.52290076336, d: 1.269083969466, nd: 1.83441, elemId: 7, sd: 10.68702290076 },
    { label: "12A", R: 44.1641221374, d: 4.163486005089, nd: 1.0, elemId: 0, sd: 10.2417302799 },

    // ── Aperture stop (fixed with Gr1) ─────────────────────────────
    // STO position inferred from patent surface 13; source-scale gap split: d12A = 0.187, d_STO = 0.514 at infinity
    { label: "STO", R: 1e15, d: 11.44402035623, nd: 1.0, elemId: 0, sd: 11.86704834606 },

    // ── Gr2 (positive, moves toward object during close focus) ─────
    // L21 — negative meniscus, concave object side
    { label: "14", R: -22.0798346056, d: 1.380407124682, nd: 1.61293, elemId: 8, sd: 8.905852417303 },
    { label: "15", R: -128.667302799, d: 0.2671755725191, nd: 1.0, elemId: 0, sd: 9.351145038168 },

    // L22 — biconvex positive, ED #2 (fluorophosphate crown)
    { label: "16", R: 47.2989821883, d: 6.278625954198, nd: 1.59282, elemId: 9, sd: 9.796437659033 },
    { label: "17", R: -30.98791348601, d: 4.653307888041, nd: 1.0, elemId: 0, sd: 10.2417302799 },

    // L23 — positive meniscus, 2× aspherical (convex image side)
    { label: "18A", R: -187.4036259542, d: 2.181933842239, nd: 1.6935, elemId: 10, sd: 11.13231552163 },
    { label: "19A", R: -62.73282442748, d: 5.098600508906, nd: 1.0, elemId: 0, sd: 11.57760814249 },

    // ── Gr3 (negative, moves toward image during close focus) ──────
    // L31 — negative meniscus, 2× aspherical (concave object side)
    { label: "20A", R: -42.24268447837, d: 1.84796437659, nd: 1.58313, elemId: 11, sd: 12.46819338422 },
    // Preserve physical sensor position: source d21 + omitted plate 0.074 + BF 0.0425, all ×s.
    { label: "21A", R: -154.4007633588, d: 19.31456743003, nd: 1.0, elemId: 0, sd: 12.91348600509 },
  ],

  asph: {
    "11A": {
      K: -4.9288,
      A4: -8.681797634597e-06,
      A6: 9.217464102652e-08,
      A8: -1.702728518859e-10,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "12A": {
      K: -0.4693,
      A4: -7.570070886773e-06,
      A6: 1.039820608368e-07,
      A8: -1.074068465881e-10,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "18A": {
      K: 15.3255,
      A4: -1.869186862886e-05,
      A6: 1.259336261497e-08,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "19A": {
      K: -0.9347,
      A4: -2.189023490418e-07,
      A6: 2.116562250817e-08,
      A8: 7.311629824377e-11,
      A10: -8.405023260405e-14,
      A12: 0,
      A14: 0,
    },
    "20A": {
      K: -0.1889,
      A4: -1.03561831521e-05,
      A6: -2.831221870912e-08,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "21A": {
      K: 0,
      A4: -8.479747867063e-06,
      A6: -3.423420635389e-08,
      A8: 7.038780299917e-11,
      A10: -9.654619638943e-14,
      A12: 0,
      A14: 0,
    },
  },

  // Three variable gaps: STO→Gr2, Gr2→Gr3, Gr3→image
  // [d_infinity, d_close_focus]
  // The omitted plate thickness and rear gap are included in the final spacing.
  var: {
    STO: [11.44402035623, 6.300890585242],
    "19A": [5.098600508906, 14.82824427481],
    "21A": [19.31456743003, 14.72805343511],
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
  scFill: 0.55,
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
