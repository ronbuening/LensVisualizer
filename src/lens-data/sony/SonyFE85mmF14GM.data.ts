import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — SONY FE 85mm f/1.4 GM                          ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2017/130571 A1, Example 2 (Table 4, Table 5,        ║
 * ║  Table 6; Fig. 3) — Sony Corporation / Masaki Maruyama, Hiroyuki     ║
 * ║  Matsumoto. Production correlation with the first-generation         ║
 * ║  SEL85F14GM (2016) is strong but not manufacturer-confirmed.         ║
 * ║  Positive–positive–negative three-group inner-focus prime            ║
 * ║  (TL/EFL ≈ 1.43 at infinity; neither telephoto nor retrofocus).      ║
 * ║  11 elements / 8 groups, 1 aspherical surface (13A, front of L7).    ║
 * ║  Focus status — PUBLISHED: G2 (L5–L8) moves 12.096 mm toward the     ║
 * ║  object between the patent's infinity and 0.85 m states; G1, the     ║
 * ║  stop and G3 are fixed. Variable gaps: STO (D9) and 15 (D15).        ║
 * ║                                                                      ║
 * ║  INDICES: the patent prints nd to three decimals. Five-decimal nd    ║
 * ║    values of the coordinate-exact HOYA glasses are used (each rounds ║
 * ║    to the printed value; 1.593→1.59282, 1.620→1.62004, 1.821→1.82115,║
 * ║    1.755→1.75520, 1.569→1.56883). Printed-index EFL 86.784 mm;       ║
 * ║    restored-index EFL 86.848 mm vs published f = 86.85 mm.           ║
 * ║  BACK DISTANCE: Fig. 3 draws an FL plate but Table 4 publishes no    ║
 * ║    plate data or back distance. No rearPlates; surface 20 d is the   ║
 * ║    computed paraxial infinity BFD in air (16.861 mm).                ║
 * ║  APERTURE: no stop diameter is published. nominalFno = patent Fno    ║
 * ║    1.45; the stop radius is derived from the design f-number as the  ║
 * ║    real-ray stop height of an axis-parallel entry ray at height      ║
 * ║    EFL/(2 × 1.45). This is an F-number calibration, not an           ║
 * ║    independent diaphragm measurement. The real image-space marginal  ║
 * ║    ray gives 1/(2 sin U′) = 1.449.                                   ║
 * ║  NOTE ON SEMI-DIAMETERS: modeled, not published. Surfaces 1–5, 7 and ║
 * ║    20: real-ray envelope of the f/1.45 axial bundle, the 0.6-field   ║
 * ║    ±0.75-stop fan and the full-field chief ray at five focus states, ║
 * ║    plus ≈8% clearance; reduced to ≈5% at L1 and ≈3% at L2 (edge      ║
 * ║    thickness) and the L4 front (6→7 gap). Fig. 3 draws these rims    ║
 * ║    within about 4% of the model. It ends the concave rear faces of   ║
 * ║    L1–L4 on flat annuli. Surfaces 6 and 8 follow them: 24.7 mm (drawn║
 * ║    23.9 mm; the lowest rim that stops no ray passed before) and      ║
 * ║    20.9 mm (as drawn; the f/1.45 axial ray needs 20.41 mm). Surfaces ║
 * ║    2 and 4 stay higher: their drawn arc ends (29.2 and 26.5 mm) lie  ║
 * ║    under the f/1.45 axial ray (29.62 and 28.06 mm).                  ║
 * ║    Surfaces 10–17: estimated from Fig. 3, which draws the focus      ║
 * ║    doublets and G3a square-cut and smaller than the stop opening     ║
 * ║    (19.6 mm): 17.9 mm for L5–L6, 17.3 mm for L7–L8 and 17.3 mm for L9║
 * ║    (surfaces 16–17). Surfaces 18–19 are 16.7 mm: Fig. 3 draws L10    ║
 * ║    and L11 touching at the rim (the faces meet at 16.87 mm);         ║
 * ║    gapSagFrac 0.98 admits it, 0.08 mm of air left. The focus-group   ║
 * ║    rims are floor-checked against the f/1.45 axial ray at infinity   ║
 * ║    (16.49 mm at surface 10). At the 0.85 m state they, not the stop, ║
 * ║    limit the axial beam: the model's working F-number there is 1.64, ║
 * ║    and Fig. 4 heads its close-focus plots Fno = 1.81. Surface 13A    ║
 * ║    stays inside 18.63 mm, where its sag turns back.                  ║
 * ║  CLOSE FOCUS: the published close gaps focus paraxially at 857.6 mm  ║
 * ║    object-to-image (|β| 0.116 vs printed 0.118); the 0.85 m label is ║
 * ║    kept and finiteConjugates is not declared because the patent does ║
 * ║    not define the distance reference. Sony's MF limit (0.8 m) is not ║
 * ║    modeled.                                                          ║
 * ║  GLASS: the patent names no supplier. HOYA glasses are coordinate-   ║
 * ║    exact for all eight nd/νd pairs (inferred, not proven) and all    ║
 * ║    resolve in the runtime catalog, L7 as M-FDS910 moulding glass;    ║
 * ║    ΔPgF values are catalog-derived, not patent data.                 ║
 * ║  SCALE: 1.0. Patent K maps directly (1+K form); A4–A8 as published.  ║
 * ║                                                                      ║
 * ║  Optical design only: glass surfaces, stop, variable gaps.           ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "sony-fe-85mm-f14-gm",
  maker: "Sony",
  name: "SONY FE 85mm f/1.4 GM",
  subtitle: "WO 2017/130571 A1, Example 2 — inferred production correlation",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "135-full-frame",
    specs: [
      "11 ELEMENTS / 8 GROUPS",
      "DESIGN f = 86.85 mm",
      "DESIGN F/1.45",
      "1 ASPHERICAL SURFACE / 1 ELEMENT",
      "INNER FOCUS (G2)",
    ],
    elementCount: 11,
    groupCount: 8,
    focalLengthMm: { marketing: 85, design: 86.85 },
    fNumber: { marketing: 1.4, design: 1.45 },
  },

  source: {
    patentNumber: "WO 2017/130571 A1",
    patentYear: 2017,
    authors: ["Masaki Maruyama", "Hiroyuki Matsumoto"],
    assignees: ["Sony Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.4,
      indexReference: "d",
      focalLengthMm: 139.25,
      glass: "PCD4 (HOYA) / dense phosphate crown class (cf. H-ZPK1A, K-PSKn2, N-PSK53A; Δνd −0.008 to −0.011)",
      apd: false,
      role: "Front positive meniscus convex to the object; first of the three positive collectors of G1.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.61,
      indexReference: "d",
      focalLengthMm: 172.05,
      glass: "FCD1 (HOYA) / fluorophosphate ED class (N-PK52A, H-FK61 coordinates; cf. S-FPL51)",
      apd: "inferred",
      apdNote: "dPgF ≈ +0.0323 from the HOYA FCD1 catalog formula; the patent publishes no partial dispersion",
      role: "Low-dispersion positive meniscus of G1; inferred ED-class collector.",
      dPgF: 0.0323,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.59282,
      vd: 68.62,
      indexReference: "d",
      focalLengthMm: 221.31,
      glass: "FCD515 (HOYA) / ED phosphate crown class (no coordinate-exact non-HOYA match)",
      apd: "inferred",
      apdNote: "dPgF ≈ +0.0157 from the HOYA FCD515 catalog formula; the patent publishes no partial dispersion",
      role: "Third positive meniscus of G1, in the same low-dispersion glass as L8.",
      dPgF: 0.0157,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.62004,
      vd: 36.3,
      indexReference: "d",
      focalLengthMm: -66.09,
      glass: "E-F2 (HOYA) / F2-type flint class (cf. S-TIM2)",
      apd: false,
      role: "Negative meniscus concave to the image that closes G1 ahead of the stop.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.62004,
      vd: 36.3,
      indexReference: "d",
      focalLengthMm: -31.0,
      glass: "E-F2 (HOYA) / F2-type flint class (cf. S-TIM2)",
      apd: false,
      role: "Biconcave front of cemented G2a; its object-side concave surface is r_2a of condition (8).",
      cemented: "G2a",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 2.001,
      vd: 29.13,
      indexReference: "d",
      focalLengthMm: 31.8,
      glass: "TAFD55 (HOYA) / nd 2.00 lanthanum dense flint class (cf. J-LASFH16, S-LAH99; Δνd −0.007, +0.009)",
      apd: false,
      role: "High-index positive of G2a; nearly cancels L5, leaving G2a weakly negative.",
      cemented: "G2a",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.82115,
      vd: 24.06,
      indexReference: "d",
      focalLengthMm: -96.88,
      glass: "M-FDS910 (HOYA, precision-moulding dense flint; inferred)",
      apd: false,
      role: "Negative meniscus at the front of cemented G2b; carries the only asphere (13A).",
      cemented: "G2b",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      indexReference: "d",
      focalLengthMm: 43.9,
      glass: "FCD515 (HOYA) / ED phosphate crown class (no coordinate-exact non-HOYA match)",
      apd: "inferred",
      apdNote: "dPgF ≈ +0.0157 from the HOYA FCD515 catalog formula; the patent publishes no partial dispersion",
      role: "Thick low-dispersion biconvex positive; principal positive power of the focus group.",
      cemented: "G2b",
      dPgF: 0.0157,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      indexReference: "d",
      focalLengthMm: 42.07,
      glass: "TAFD55 (HOYA) / nd 2.00 lanthanum dense flint class (cf. J-LASFH16, S-LAH99; Δνd −0.007, +0.009)",
      apd: false,
      role: "Thick high-index biconvex positive at the front of cemented G3a.",
      cemented: "G3a",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.53,
      indexReference: "d",
      focalLengthMm: -47.04,
      glass: "E-FD4 (HOYA) / dense flint class (H-ZF6 coordinates; cf. S-TIH4)",
      apd: false,
      role: "Biconcave dense flint completing the positive cemented G3a.",
      cemented: "G3a",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.56883,
      vd: 56.04,
      indexReference: "d",
      focalLengthMm: -112.37,
      glass: "BAC4 (HOYA) / barium crown class (H-BaK7 coordinates; cf. N-BAK4)",
      apd: false,
      role: "Rear negative meniscus concave to the object (G3b); its shape factor is condition (2).",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── Table 5; z = (Y²/R)/(1+√(1−(1+K)Y²/R²)) + A4Y⁴ + A6Y⁶ + A8Y⁸ */
  surfaces: [
    { label: "1", R: 53.409, d: 7.177, sd: 31.6, medium: 1 },
    { label: "2", R: 133.55, d: 0.5, sd: 31.2 },
    { label: "3", R: 55.873, d: 6.013, sd: 29.2, medium: 2 },
    { label: "4", R: 155.451, d: 0.3, sd: 29.0 },
    { label: "5", R: 43.037, d: 5.272, sd: 27.3, medium: 3 },
    { label: "6", R: 61.127, d: 3.026, sd: 24.7 },
    { label: "7", R: 121.72, d: 2.4, sd: 24.7, medium: 4 },
    { label: "8", R: 30.425, d: 10.9, sd: 20.9 },
    { label: "STO", R: "flat" }, // patent surface 9; D9 variable
    { label: "10", R: -57.485, d: 1.5, sd: 17.9, medium: 5 },
    { label: "11", R: 29.166, d: 9.168, sd: 17.9, medium: 6 }, // L5→L6 cemented junction
    { label: "12", R: 293.577, d: 0.57, sd: 17.9 },
    {
      label: "13A",
      R: 122.73,
      d: 1.5,
      sd: 17.3,
      medium: 7,
      asphere: { K: 0, A4: -4.98661e-6, A6: -2.69634e-9, A8: 1.87534e-12, A10: 0, A12: 0, A14: 0 },
    },
    { label: "14", R: 48.001, d: 14.955, sd: 17.3, medium: 8 }, // L7→L8 cemented junction
    { label: "15", R: -50.259, sd: 17.3 }, // D15 variable
    { label: "16", R: 216.748, d: 15.0, sd: 17.3, medium: 9 },
    { label: "17", R: -50.452, d: 2.566, sd: 17.3, medium: 10 }, // L9→L10 cemented junction
    { label: "18", R: 122.664, d: 4.0, sd: 16.7 },
    { label: "19", R: -51.592, d: 1.6, sd: 16.7, medium: 11 },
    { label: "20", R: -270.536, d: 16.861, sd: 17.5 }, // computed paraxial BFD (not published)
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.85,
    description:
      "Inner focus: G2 (L5–L8, two cemented doublets) moves 12.10 mm toward the object from infinity to the patent's 0.85 m state while G1, the stop and G3 stay fixed. The published close gaps focus at about 0.858 m object-to-image in this model; Sony's 0.8 m manual-focus limit is not modeled.",
  },

  /* (moved from var) ── Variable air spacings ── Table 6: [infinity, 0.85 m state] */
  gaps: { STO: { label: "D9", values: [[17.857, 5.761]] }, "15": { label: "D15", values: [[3.0, 15.097]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.45, fStops: [1.45, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 11 },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "8" },
    { text: "G2 (FOCUS)", fromSurface: "10", toSurface: "15" },
    { text: "G3", fromSurface: "16", toSurface: "20" },
  ],
  doublets: [
    { text: "G2a", fromSurface: "10", toSurface: "12" },
    { text: "G2b", fromSurface: "13A", toSurface: "15" },
    { text: "G3a", fromSurface: "16", toSurface: "18" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.55, yScFill: 0.4 },

  checks: { gapSagFrac: 0.98 },
} satisfies LensDataV2Input;

export default LENS_DATA;
