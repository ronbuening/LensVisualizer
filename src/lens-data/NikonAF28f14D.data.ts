import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON AF NIKKOR 28mm f/1.4D                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 5,315,441 Embodiment 1 (Table 1)                 ║
 * ║  Inventors: Kenji Hori, Wataru Tatsuno — Nikon Corporation.       ║
 * ║  Inverse telephoto (retrofocus) large-aperture wide-angle.        ║
 * ║  11 elements / 8 groups, 1 aspherical surface (S16A, ground).     ║
 * ║  Focus: Three-group floating (CRC). G1 fixed; G2+Stop and G4     ║
 * ║         move together; G3 moves faster. Four variable air gaps.   ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Not listed in patent. Estimated via paraxial marginal + chief  ║
 * ║    ray trace (H=10.1mm EP, ω=37.7°) with ~30% off-axis           ║
 * ║    vignetting typical of f/1.4 wide-angle designs.  Clamped to   ║
 * ║    sd < 0.9×|R| and front/rear ratio ≤ 1.25.                     ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    Patent does not specify stop as a separate surface. Position   ║
 * ║    inferred from Fig. 1 cross-section: ~5.0 mm after L5 rear     ║
 * ║    in the 12.55 mm G2–G3 air gap. Stop moves with G2 per         ║
 * ║    patent text (col. 5 line 14).                                  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-28f14d",
  maker: "Nikon",
  name: "NIKON AF NIKKOR 28mm f/1.4D",
  subtitle: "US 5,315,441 EXAMPLE 1 — NIKON / HORI & TATSUNO",
  specs: ["11 ELEMENTS / 8 GROUPS", "f ≈ 28.6 mm", "F/1.4", "2ω ≈ 75.4°", "1 ASPHERICAL SURFACE (GROUND GLASS)"],

  /* ── Elements ──
   *  11 physical glass elements in 8 air-spaced groups (4 functional macro-groups).
   *  Three cemented doublets: L4 (G2), L6 (G3), L8 (G4).
   *  Two glasses reused: L2/L7 share nd=1.77279/νd=49.4; L5/L8a share nd=1.80411/νd=46.5.
   */
  elements: [
    // ── G1: Negative front group (1 element, 1 group) ──
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.1,
      fl: -79.7,
      glass: "BSC7 / BK7 type (HOYA BSC7 nd=1.51680, νd=64.20)",
      apd: false,
      role: "Front diverging meniscus (convex to object). Establishes retrofocus offset for ~38 mm back focus. Low-index borosilicate crown keeps cost manageable at large diameter.",
    },

    // ── G2: Main positive group (5 elements, 4 groups) ──
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.77279,
      vd: 49.4,
      fl: +75.4,
      glass: "LaM type (near OHARA S-LAM66, nd=1.77250, νd=49.62)",
      apd: false,
      role: "Moderate positive power; begins converging divergent beam from G1. Lanthanum crown provides high index for reduced curvature.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.4,
      fl: -65.1,
      glass: "FK5 / S-FSL5 type (Schott FK5 nd=1.48749, νd=70.41)",
      apd: false,
      role: "Thin negative meniscus (convex to object). Low-dispersion fluorophosphate crown for chromatic correction and Petzval sum control. Strong rear curvature (R₂=23.1 mm) flattens field.",
    },
    {
      id: 4,
      name: "L4a",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.5186,
      vd: 69.9,
      fl: +40.6,
      glass: "Phosphate crown (no exact modern catalog match; 1990s-era type)",
      apd: false,
      role: "Front element of cemented achromatic doublet L4. Thick meniscus (concave to object); high Abbe number provides low-dispersion component of the chromatic corrector.",
      cemented: "L4",
    },
    {
      id: 5,
      name: "L4b",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.51454,
      vd: 54.6,
      fl: -29.5,
      glass: "Crown-flint boundary (no exact modern catalog match; 1990s-era type)",
      apd: false,
      role: "Rear element of cemented doublet L4. Nearly index-matched to L4a (Δnd=0.004) to suppress monochromatic junction aberrations; dispersion difference (Δνd=15.3) provides achromatic correction for G2.",
      cemented: "L4",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.80411,
      vd: 46.5,
      fl: +30.8,
      glass: "LaH type (near OHARA S-LAH55, nd=1.80440, νd=46.50)",
      apd: false,
      role: "Strongest positive element; sits immediately before stop. Steep front curvature (R₁=33.2 mm) in high-index lanthanum glass acts as coma corrector, refracting marginal rays into symmetric configuration before the stop plane.",
    },

    // ── G3: Negative correction group (3 elements, 2 groups) ──
    {
      id: 7,
      name: "L6a",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.7481,
      vd: 52.3,
      fl: +120.7,
      glass: "LaM type (near OHARA S-LAM7, nd=1.74950, νd=52.33)",
      apd: false,
      role: "Front element of cemented achromatic doublet L6. Weakly positive meniscus (concave to object); lanthanum crown paired with dense flint L6b for chromatic correction behind stop.",
      cemented: "L6",
    },
    {
      id: 8,
      name: "L6b",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.7552,
      vd: 27.6,
      fl: -27.1,
      glass: "Dense flint (near OHARA S-TIH4, nd=1.75520, νd=27.53)",
      apd: false,
      role: "Rear element of cemented doublet L6. Nearly index-matched to L6a (Δnd=0.007) with large Δνd=24.7 for achromatic negative power. Controls axial and lateral chromatic aberration in the correction zone behind stop.",
      cemented: "L6",
    },
    {
      id: 9,
      name: "L7",
      label: "Element 9",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.77279,
      vd: 49.4,
      fl: +95.1,
      glass: "LaM type (same as L2; near OHARA S-LAM66)",
      apd: false,
      role: "Weakly positive meniscus (concave to object) with precision-ground aspherical rear surface (S16A). The asphere corrects residual spherical aberration that cannot be achieved with spherical surfaces at f/1.4. K=+1.974 oblate ellipsoid with 334 µm departure at h=12 mm.",
    },

    // ── G4: Final positive group (2 elements, 1 group) ──
    {
      id: 10,
      name: "L8a",
      label: "Element 10",
      type: "Plano-Convex Positive",
      nd: 1.80411,
      vd: 46.5,
      fl: +25.5,
      glass: "LaH type (same as L5; near OHARA S-LAH55)",
      apd: false,
      role: "Front element of cemented power/corrector doublet L8. Nearly flat front (R₁=723 mm), strongly curved rear. Dominant converging power of G4 (f=+25.5 mm); high-index lanthanum glass reduces surface curvatures.",
      cemented: "L8",
    },
    {
      id: 11,
      name: "L8b",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.86074,
      vd: 23.0,
      fl: -105.1,
      glass: "Very dense flint (no exact modern catalog match; possibly Sumita or Nikon-specified 1990s melt)",
      apd: false,
      role: "Rear element of cemented doublet L8. Very high-index, very dispersive flint (Δnd=0.057 at junction) provides both chromatic and monochromatic correction. Controls distortion and lateral color while maintaining back focus per patent text.",
      cemented: "L8",
    },
  ],

  /* ── Surface prescription ──
   *  19 patent surfaces + 1 inserted STO = 20 surfaces total.
   *  Patent Table 1 does not include stop as a separate row.
   *  Stop inserted in d11 gap at estimated position (see header note).
   */
  surfaces: [
    // ── G1 ──
    { label: "1", R: 66.23, d: 2.0, nd: 1.5168, elemId: 1, sd: 28.0 }, // L1 front
    { label: "2", R: 25.126, d: 13.9, nd: 1.0, elemId: 0, sd: 22.5 }, // L1 rear → air (d2, variable)

    // ── G2 ──
    { label: "3", R: 89.207, d: 4.7, nd: 1.77279, elemId: 2, sd: 22.5 }, // L2 front
    { label: "4", R: -164.124, d: 0.1, nd: 1.0, elemId: 0, sd: 22.0 }, // L2 rear → air
    { label: "5", R: 87.119, d: 1.5, nd: 1.48749, elemId: 3, sd: 22.0 }, // L3 front
    { label: "6", R: 23.125, d: 7.9, nd: 1.0, elemId: 0, sd: 20.5 }, // L3 rear → air
    { label: "7", R: -49.577, d: 9.0, nd: 1.5186, elemId: 4, sd: 17.5 }, // L4a front
    { label: "8", R: -15.69, d: 1.5, nd: 1.51454, elemId: 5, sd: 14.0 }, // L4a→L4b junction
    { label: "9", R: 462.539, d: 0.2, nd: 1.0, elemId: 0, sd: 15.0 }, // L4b rear → air
    { label: "10", R: 33.228, d: 9.0, nd: 1.80411, elemId: 6, sd: 18.0 }, // L5 front
    { label: "11", R: -85.405, d: 5.0, nd: 1.0, elemId: 0, sd: 16.5 }, // L5 rear → air (to stop)

    // ── Stop (inferred from Fig. 1; moves with G2) ──
    { label: "STO", R: 1e15, d: 7.55, nd: 1.0, elemId: 0, sd: 13.6 }, // aperture stop

    // ── G3 ──
    { label: "12", R: -23.276, d: 3.6, nd: 1.7481, elemId: 7, sd: 15.0 }, // L6a front
    { label: "13", R: -19.731, d: 1.0, nd: 1.7552, elemId: 8, sd: 15.5 }, // L6a→L6b junction
    { label: "14", R: -568.331, d: 1.0, nd: 1.0, elemId: 0, sd: 16.0 }, // L6b rear → air
    { label: "15", R: -122.249, d: 3.5, nd: 1.77279, elemId: 9, sd: 16.5 }, // L7 front
    { label: "16A", R: -46.473, d: 0.5, nd: 1.0, elemId: 0, sd: 18.0 }, // L7 rear → air (aspherical)

    // ── G4 ──
    { label: "17", R: 722.991, d: 9.3, nd: 1.80411, elemId: 10, sd: 17.0 }, // L8a front
    { label: "18", R: -21.0, d: 1.5, nd: 1.86074, elemId: 11, sd: 17.0 }, // L8a→L8b junction
    { label: "19", R: -28.251, d: 38.1031, nd: 1.0, elemId: 0, sd: 21.0 }, // L8b rear → BF (variable)
  ],

  /* ── Aspherical coefficients ──
   *  Surface 16A (L7 image-side): precision-ground asphere.
   *  Patent sag equation (even-polynomial + conic):
   *    Z(h) = (h²/R) / [1 + √(1 − (1+K)(h/R)²)] + A4·h⁴ + A6·h⁶ + A8·h⁸ + A10·h¹⁰
   *  K = +1.974 (oblate ellipsoid). Departure from best-fit sphere: ~334 µm at h=12 mm.
   */
  asph: {
    "16A": {
      K: 1.974,
      A4: 1.644e-5,
      A6: 1.61e-8,
      A8: 1.721e-11,
      A10: -6.229e-14,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (three-group floating focus) ──
   *  G1 fixed; G2+Stop and G4 coupled (Δd₂=Δd₄=3.5248 mm); G3 moves 10% more (Δd₃/Δd₂=1.1).
   *  Patent Table 1 variable spacings at infinity focus and close focus (β=−1/10):
   *    d2:   13.9000 → 10.3752  (G1→G2, decreasing)
   *    d11:  12.5500 → 12.1975  (G2→G3 total gap, decreasing)
   *    d16:   0.5000 →  0.8525  (G3→G4, increasing)
   *    BF:   38.1031 → 41.6279  (G4→image, increasing)
   *
   *  Since stop moves with G2, the d11 gap is split:
   *    S11 d = 5.00 (fixed: L5 rear to stop, both move with G2)
   *    STO d = 7.55 → 7.1975 (variable: stop to G3, only G3 side moves faster)
   */
  var: {
    "2": [13.9, 10.3752],
    STO: [7.55, 7.1975],
    "16A": [0.5, 0.8525],
    "19": [38.1031, 41.6279],
  },
  varLabels: [
    ["2", "D2"],
    ["STO", "D₁₁"],
    ["16A", "D16"],
    ["19", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (−)", fromSurface: "1", toSurface: "2" },
    { text: "G2 (+)", fromSurface: "3", toSurface: "11" },
    { text: "G3 (−)", fromSurface: "12", toSurface: "16A" },
    { text: "G4 (+)", fromSurface: "17", toSurface: "19" },
  ],
  doublets: [
    { text: "L4", fromSurface: "7", toSurface: "9" },
    { text: "L6", fromSurface: "12", toSurface: "14" },
    { text: "L8", fromSurface: "17", toSurface: "19" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.35,
  focusDescription:
    "Three-group floating focus (Nikon CRC). G1 fixed relative to the image plane. G2 + aperture stop and G4 are mechanically coupled and move together toward the object. G3 moves toward the object at 1.1× the speed of G2/G4, creating differential gap changes that independently correct spherical aberration and astigmatism at close range.",

  /* ── Aperture configuration ── */
  nominalFno: 1.4,
  fstopSeries: [1.4, 1.8, 2, 2.5, 2.8, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
