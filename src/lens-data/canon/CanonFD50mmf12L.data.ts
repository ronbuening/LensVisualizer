import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CANON FD 50mm f/1.2 L                       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,364,644 — Example 1 (Ikemori / Canon K.K.)     ║
 * ║  "Gauss Type Large Aperture Photographic Objective."               ║
 * ║  JP priority: 27 Nov 1979 (JP 54-153258).                         ║
 * ║  US filed: 24 Nov 1980 · US granted: 21 Dec 1982.                 ║
 * ║  8 elements / 6 groups, 1 aspherical surface.                      ║
 * ║  Focus: split-unit — L1–L7 extend forward as a rigid assembly;    ║
 * ║         L8 remains fixed relative to the camera mount.            ║
 * ║         Only gap D12 (R12–R13) changes during focus.              ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent Example 1 normalised to f = 100 mm.                     ║
 * ║    All R, d, and sd values scaled × 0.500 to f ≈ 50 mm.          ║
 * ║                                                                    ║
 * ║  NOTE ON OCR CORRECTIONS:                                          ║
 * ║    Two radii are corrected from the PDF OCR text:                 ║
 * ║      R1: 208.673 → 108.673 mm (norm.) — "2" misread for "1";     ║
 * ║          208.673 gives EFL ≈ −94 mm; 108.673 gives 100.000 mm.   ║
 * ║      R9: −36.428 → −316.428 mm (norm.) — "31" digits dropped;    ║
 * ║          −36.428 gives f₆ ≈ −73 mm; −316.428 gives +131.43 mm.  ║
 * ║    All eight patent conditional expressions verified ≥ 4 sig. figs.║
 * ║                                                                    ║
 * ║  NOTE ON ASPHERICAL COEFFICIENTS (surface R3 / "3A"):             ║
 * ║    Coefficients A4 and A6 confirmed from OCR.                     ║
 * ║    A8 (= D) inferred from partial OCR and cross-comparison        ║
 * ║    with Examples 2–4 (D ranges −6.41 to −6.54 × 10⁻¹⁴ norm.).   ║
 * ║    A10 (= E) strongly inferred; explicitly legible and identical  ║
 * ║    across Examples 2–4 (E = +2.08995 × 10⁻¹⁷ norm.).            ║
 * ║    Verify A8/A10 against a clean scan or JP 54-153258.            ║
 * ║                                                                    ║
 * ║  NOTE ON APERTURE STOP:                                            ║
 * ║    Stop position not tabulated in patent. Inferred from Fig. 1    ║
 * ║    as approximately mid-gap D5. The normalised gap D5 = 30.851 mm ║
 * ║    is split at t = 15.426 mm from R5 → STO → 15.425 mm to R6.   ║
 * ║    Production split: 7.713 mm | STO | 7.713 mm.                  ║
 * ║    Physical stop SD ≈ 14.3 mm (prod.) from marginal ray trace;   ║
 * ║    entrance pupil SD ≈ 20.8 mm (prod.); pupil mag. ≈ 1.46×.      ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from marginal ray trace (EP SD = 20.833 mm prod.)    ║
 * ║    with 9–13% mechanical clearance. All edge-thickness, slope,    ║
 * ║    and cross-gap sag checks pass.                                 ║
 * ║                                                                    ║
 * ║  NOTE ON GLASS IDENTIFICATION (L8):                               ║
 * ║    L8 (n_d = 1.62299, ν_d = 58.2) — best catalogue match OHARA   ║
 * ║    S-BAL35 (1.62280 / 57.08), Δν_d = −1.12. Flagged provisional; ║
 * ║    Canon may have used a proprietary domestic glass in 1980.      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-fd-50f1p2-l",
  maker: "Canon",
  name: "CANON FD 50mm f/1.2 L",
  subtitle: "US 4,364,644 EXAMPLE 1 — IKEMORI / CANON K.K.",
  specs: ["8 ELEMENTS / 6 GROUPS", "f ≈ 50.0 mm", "F/1.2", "2ω = 46°", "1 ASPHERICAL SURFACE"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 50,
  focalLengthDesign: 50.0,
  apertureMarketing: 1.2,
  patentYear: 1982,
  elementCount: 8,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.804,
      vd: 46.6,
      fl: 90.3,
      glass: "OHARA S-LAH58 (804466)",
      apd: false,
      role: "Front light-gathering positive meniscus; high index suppresses higher-order spherical aberration",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus (1× Asph)",
      nd: 1.744,
      vd: 44.7,
      fl: 64.1,
      glass: "OHARA S-LAH52 (744447)",
      apd: false,
      cemented: "D1",
      role: "Aspherical front surface corrects sagittal flare and over-corrected spherical aberration; part of L2+L3 achromat",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.63636,
      vd: 35.4,
      fl: -36.9,
      glass: "OHARA S-TIM27 (636354)",
      apd: false,
      cemented: "D1",
      role: "Negative meniscus cemented to L2; strong R5 provides Petzval correction; Δn=0.108 satisfies condition (7)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      fl: -22.3,
      glass: "S-TIH6 / Schott SF6 (805254)",
      apd: false,
      cemented: "D2",
      role: "Dense flint immediately behind stop; strongly curved R6 controls sagittal flare; conditions (4)+(5); part of L4+L5 achromat",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.816,
      vd: 46.6,
      fl: 36.4,
      glass: "OHARA S-LAH59 (816466)",
      apd: false,
      cemented: "D2",
      role: "Main positive power of rear inner group; high index limits curvatures; Δν=21.2 from L4 ensures chromatic correction",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: 65.7,
      glass: "OHARA S-LAH64 (883408)",
      apd: false,
      role: "Highest-index element (n_d=1.883); strongest rear singlet (condition 6: f₆<f₇<f₈); folds off-axis bundle, limits rear element diameters",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      fl: 91.2,
      glass: "OHARA S-LAL18 (773496)",
      apd: false,
      role: "Last element of moving focus unit; asymmetric biconvex concentrates power at R12; contributes longitudinal chromatic correction",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.62299,
      vd: 58.2,
      fl: 371.9,
      glass: "OHARA S-BAL35* (623582; provisional, Δν_d=−1.12)",
      apd: false,
      role: "Fixed rear corrector; very weak positive power (f₈≈7.4f); Petzval fine-corrector; high Abbe number trims lateral colour",
    },
  ],

  /* ── Surfaces ── */
  // Patent surfaces R1–R14 plus aperture stop (STO) inserted mid-gap D5.
  // D5 (30.851 mm norm.) split at t = 15.426 mm from R5 → STO → 15.425 mm to R6.
  // Production split: surface "5" d = 7.713 mm | STO d = 7.713 mm.
  // Variable gap: surface "12" (D12), d_inf = 0.194 mm, d_MFD = 6.384 mm.
  surfaces: [
    { label: "1", R: 54.337, d: 4.341, nd: 1.804, elemId: 1, sd: 23.0 },
    { label: "2", R: 208.109, d: 0.146, nd: 1.0, elemId: 0, sd: 22.0 },
    { label: "3A", R: 39.163, d: 11.435, nd: 1.744, elemId: 2, sd: 22.0 }, // aspherical — R3 (front of L2)
    { label: "4", R: 192.181, d: 1.996, nd: 1.63636, elemId: 3, sd: 18.0 }, // cemented junction L2→L3
    { label: "5", R: 20.844, d: 7.713, nd: 1.0, elemId: 0, sd: 17.0 }, // R5 to STO (first half of D5)
    { label: "STO", R: 1e15, d: 7.713, nd: 1.0, elemId: 0, sd: 14.3 }, // STO to R6 (second half of D5); pos. inferred from Fig. 1
    { label: "6", R: -18.914, d: 1.163, nd: 1.80518, elemId: 4, sd: 15.0 },
    { label: "7", R: 360.405, d: 8.664, nd: 1.816, elemId: 5, sd: 15.3 }, // cemented junction L4→L5
    { label: "8", R: -32.002, d: 0.146, nd: 1.0, elemId: 0, sd: 17.0 },
    { label: "9", R: -158.214, d: 3.876, nd: 1.883, elemId: 6, sd: 17.0 },
    { label: "10", R: -42.943, d: 0.097, nd: 1.0, elemId: 0, sd: 17.5 },
    { label: "11", R: 609.527, d: 3.246, nd: 1.7725, elemId: 7, sd: 17.5 },
    { label: "12", R: -79.452, d: 0.194, nd: 1.0, elemId: 0, sd: 17.0 }, // variable focus gap D12; d_inf=0.194, d_MFD=6.384
    { label: "13", R: 372.927, d: 1.744, nd: 1.62299, elemId: 8, sd: 17.0 },
    { label: "14", R: -610.824, d: 35.636, nd: 1.0, elemId: 0, sd: 16.5 }, // d = BFD at infinity
  ],

  /* ── Aspherical coefficients ── */
  // Surface "3A" (R3, front of L2). Patent formula: X = R(1−√(1−H²/R²)) + BH⁴ + CH⁶ + DH⁸ + EH¹⁰
  // A=0 (K=0), so the standard sag form applies with conic K=0 and polynomial A4–A10.
  // Normalised (f=100) → Production (f=50) scaling: A_{2n} × k^(−(2n−1)) where k=0.5.
  // A4: −1.172337×10⁻⁷ / 0.5³ = −9.378696×10⁻⁷ (confirmed)
  // A6: +6.303928×10⁻¹¹ / 0.5⁵ = +2.017257×10⁻⁹  (confirmed)
  // A8: −6.418568×10⁻¹⁴ / 0.5⁷ = −8.215767×10⁻¹²  (inferred — see file header)
  // A10: +2.08995×10⁻¹⁷ / 0.5⁹ = +1.070054×10⁻¹⁴   (strongly inferred — see file header)
  asph: {
    "3A": {
      K: 0,
      A4: -9.378696e-7,
      A6: 2.017257e-9,
      A8: -8.215767e-12,
      A10: 1.070054e-14,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air gaps ── */
  // Only surface "12" (D12, between L7 and fixed L8) changes during focus.
  // d_inf computed via paraxial ray trace at object distance = ∞.
  // d_MFD computed by iterative finite-conjugate ray trace at MFD = 0.6 m from film.
  var: {
    "12": [0.194, 6.384],
  },

  varLabels: [["12", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "L2+L3 (D1)", fromSurface: "3A", toSurface: "5" },
    { text: "L4+L5 (D2)", fromSurface: "6", toSurface: "8" },
  ],

  doublets: [
    { text: "D1", fromSurface: "3A", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.6,
  focusDescription:
    "Split-unit focus: L1–L7 extend forward as a rigid assembly; L8 remains fixed relative to the camera mount. Only gap D12 (between R12 and R13) changes, increasing from 0.194 mm at infinity to ≈ 6.38 mm at MFD = 0.6 m.",

  /* ── Aperture configuration ── */
  nominalFno: 1.2,
  fstopSeries: [1.2, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.52,
  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
