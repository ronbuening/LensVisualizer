import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — SIGMA DP3 MERRILL 50mm f/2.8                ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2014-126652 A, Example 3 (Sigma / Ogasawara).    ║
 * ║  Telephoto-type two-group imaging system (G1 positive, G2          ║
 * ║  negative) for APS-C Foveon sensor. G1 contains aperture stop     ║
 * ║  between its front sub-group G1A and rear sub-group G1B.          ║
 * ║  10 elements / 8 groups, 1 aspherical surface (rear of L10).      ║
 * ║  Focus: G1 unit focus (extends toward object); G2 stationary.     ║
 * ║                                                                    ║
 * ║  NOTE ON VARIABLE GAP:                                             ║
 * ║    d11 (L6-rear to L7-front) is the sole variable gap.            ║
 * ║    BF (after L10-rear) is constant at all focus distances.        ║
 * ║    The close-focus value for d11 is taken from the patent's        ║
 * ║    β = |10| (10× macro) verification condition — the production    ║
 * ║    close-focus distance (22.5 cm from front of lens per Sigma)    ║
 * ║    corresponds to a smaller d11 than the patent extreme.          ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from paraxial marginal + chief ray trace at EFL =    ║
 * ║    48.72 mm, F/2.91 (design), Y = 14.20 mm. Surfaces 12 and 13   ║
 * ║    (L7 front/rear) are constrained below the paraxial prediction  ║
 * ║    by the cross-gap intrusion limit: the 2.507 mm air gap between ║
 * ║    L7's rear surface (R = +16.46 mm) and L8's front surface is   ║
 * ║    the binding constraint, limiting sd_13 to 8.1 mm (vs. the      ║
 * ║    paraxial 9.3 mm). This reflects real vignetting at this gap.   ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gap d11                     ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sigma-dp3m-50f28",
  maker: "Sigma",
  name: "SIGMA DP3 MERRILL 50mm f/2.8",
  subtitle: "JP 2014-126652 A EXAMPLE 3 — SIGMA / OGASAWARA",
  specs: ["10 ELEMENTS / 8 GROUPS", "f ≈ 48.7 mm", "F/2.91 (design)", "2ω ≈ 32.1°", "1 ASPHERICAL SURFACE"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 50,
  focalLengthDesign: 48.72,
  apertureMarketing: 2.8,
  apertureDesign: 2.91,
  patentYear: 2014,
  elementCount: 10,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: 33.5,
      glass: "S-LAH55 (Ohara) / TAC8 (Hoya) — Δnd = 0, ΔVd = +0.04",
      apd: false,
      role: "LP1 of patent. Very high-index positive meniscus (convex toward object) that converges the axial beam before the stop, reducing the physical stop diameter to 62.5% of the entrance pupil (satisfying Condition 1, φA/φENP = 0.625). Satisfies Condition 4: NdLP1 = 1.883 > 1.85.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      fl: 27.6,
      glass: "S-PHM52 (Ohara) — exact match",
      apd: "inferred",
      apdNote:
        "ΔPg,F ≈ +0.017 (S-PHM52 catalog value at Vd = 68.62). Positive APD glass enables secondary-spectrum correction in the DB1 achromat.",
      cemented: "DB1",
      role: "Positive element of the cemented doublet DB1 (L2+L3). Biconvex with a nearly flat junction surface (R4 = −133.17 mm). Satisfies Condition 5: VdDB1 = 68.62 > 65. Combined DB1 EFL = −57.97 mm (net negative).",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 33.27,
      fl: -17.0,
      glass: "H-ZF52 (CDGM) — exact match, unconfirmed in Ohara/Hoya/Schott",
      apd: false,
      cemented: "DB1",
      role: "Negative element of doublet DB1 (L2+L3). The dominant power contributor within DB1: rear surface R5 = +15.34 mm (dense glass to air) contributes f_surface = −19.0 mm. Together with APD glass L2, corrects both primary and secondary chromatic aberration in G1A.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.90366,
      vd: 31.32,
      fl: -10.2,
      glass: "S-NPH2 (Ohara) — exact match",
      apd: false,
      cemented: "D1",
      role: "Negative element of cemented doublet D1 (L4+L5), immediately behind the aperture stop. Very high index enables a strongly curved concave front surface (R7 = −15.15 mm) in small physical extent. Combined D1 EFL = −93.37 mm.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.72,
      fl: +13.0,
      glass: "S-LAH58 (Ohara) / TAC4 (Hoya) — exact match",
      apd: false,
      cemented: "D1",
      role: "Positive element of cemented doublet D1 (L4+L5). High-index crown complements L4 as an achromatic pair. The net-negative doublet D1, followed by positive L6, forms the G1B telephoto sub-system (G1B EFL = +37.96 mm).",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.834,
      vd: 37.34,
      fl: +30.9,
      glass: "H-LAF51 (CDGM) or J-LASF019 (Hikari) — unconfirmed",
      apd: false,
      role: "Asymmetric biconvex relay that brings the D1 diverging beam to a net-convergent state in G1B. Front surface stronger than rear. Rear surface (surface 11) defines the variable air gap d11 that changes during focusing.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.62004,
      vd: 36.3,
      fl: -42.7,
      glass: "CF6 (Hoya) — tentative (ΔVd = +0.04)",
      apd: false,
      role: "First element of G2. Negative meniscus convex toward object. Moderate index keeps the negative Petzval contribution low per diopter. Clear aperture is constrained by the 2.507 mm gap to L8's nearly-flat front surface: SD at rear surface (surface 13) is limited to 8.1 mm by the cross-gap geometry.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: +33.0,
      glass: "SF57 (Schott) / S-TIH53 (Ohara) — exact match",
      apd: false,
      role: "Architecturally unconventional: a positive element in dense flint glass. Its positive power over-corrects chromatic aberration in the direction opposite to normal positive elements, helping balance secondary spectrum in G2. Convex toward image.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.8042,
      vd: 46.5,
      fl: -20.9,
      glass: "TAFD37 (Hoya) — tentative; S-LAH65 (Ohara): Δnd = +0.0002",
      apd: false,
      role: "Strongest negative element in the system (EFL = −20.89 mm). Convex toward image. At large off-axis heights, efficiently counteracts the cumulative positive Petzval from high-index positive elements throughout the system. Key contributor to the 92% Petzval sum reduction.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.80834,
      vd: 40.92,
      fl: +56.3,
      glass: "Uncertain; TACD5 (Hoya) possible — no confirmed catalog match",
      apd: false,
      role: "Final field lens. Asymmetric biconvex with aspherical rear surface (surface 19A). At the image-side, the axial beam is compact (~1.9 mm half-height) while the chief ray reaches ~10.5 mm. The aspherical rear surface corrects pincushion distortion and tangential field curvature intrinsic to the telephoto layout, with departures reaching −736 µm at h = 12 mm.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ─── G1A (front sub-group of G1) ───────────────────────────────────────
    // L1 — high-index positive meniscus (LP1)
    { label: "1", R: 24.8702, d: 3.9377, nd: 1.883, elemId: 1, sd: 13.9 }, // L1 front
    { label: "2", R: 143.8625, d: 1.7773, nd: 1.0, elemId: 0, sd: 12.3 }, // L1 rear → air

    // DB1 — L2 (biconvex) + L3 (biconcave) cemented doublet
    { label: "3", R: 18.4598, d: 3.7358, nd: 1.59282, elemId: 2, sd: 11.0 }, // L2 front
    { label: "4", R: -133.1738, d: 0.8, nd: 1.8061, elemId: 3, sd: 8.5 }, // L2→L3 junction
    { label: "5", R: 15.3383, d: 4.4992, nd: 1.0, elemId: 0, sd: 8.1 }, // L3 rear → air

    // ─── Aperture stop ─────────────────────────────────────────────────────
    { label: "STO", R: 1e15, d: 6.7172, nd: 1.0, elemId: 0, sd: 5.23 }, // aperture stop

    // ─── G1B (rear sub-group of G1) ────────────────────────────────────────
    // D1 — L4 (biconcave) + L5 (biconvex) cemented doublet
    { label: "7", R: -15.1537, d: 0.8, nd: 1.90366, elemId: 4, sd: 7.3 }, // L4 front
    { label: "8", R: 24.2003, d: 3.3262, nd: 1.83481, elemId: 5, sd: 7.6 }, // L4→L5 junction
    { label: "9", R: -18.3336, d: 0.15, nd: 1.0, elemId: 0, sd: 8.9 }, // L5 rear → air

    // L6 — biconvex relay
    { label: "10", R: 36.4736, d: 2.1561, nd: 1.834, elemId: 6, sd: 9.0 }, // L6 front
    { label: "11", R: -85.1508, d: 1.8, nd: 1.0, elemId: 0, sd: 9.2 }, // L6 rear → air (variable: d11)

    // ─── G2 (rear group; stationary during focus) ──────────────────────────
    // L7 — negative meniscus (convex toward object)
    // sd_12/sd_13 constrained by cross-gap geometry (gap 13→14 is binding at 90% of 2.507 mm)
    { label: "12", R: 44.3715, d: 0.8, nd: 1.62004, elemId: 7, sd: 8.5 }, // L7 front
    { label: "13", R: 16.4586, d: 2.5073, nd: 1.0, elemId: 0, sd: 8.1 }, // L7 rear → air

    // L8 — positive meniscus in dense flint (convex toward image)
    { label: "14", R: -412.6963, d: 3.8324, nd: 1.84666, elemId: 8, sd: 10.0 }, // L8 front
    { label: "15", R: -26.2443, d: 2.9513, nd: 1.0, elemId: 0, sd: 10.6 }, // L8 rear → air

    // L9 — negative meniscus (convex toward image)
    { label: "16", R: -14.7356, d: 0.8, nd: 1.8042, elemId: 9, sd: 10.4 }, // L9 front
    { label: "17", R: -122.8394, d: 0.958, nd: 1.0, elemId: 0, sd: 10.7 }, // L9 rear → air

    // L10 — biconvex field lens with aspherical rear
    { label: "18", R: 104.8826, d: 4.6192, nd: 1.80834, elemId: 10, sd: 11.1 }, // L10 front
    { label: "19A", R: -78.855, d: 8.8352, nd: 1.0, elemId: 0, sd: 12.0 }, // L10 rear (asph) → image
  ],

  /* ── Aspherical coefficients ── */
  // Surface 19A: rear of L10. K = 0 (spherical base). Dominant A4 < 0 increases
  // surface concavity at larger heights, strengthening positive power toward the
  // margin. Corrects pincushion distortion and tangential field curvature.
  asph: {
    "19A": {
      K: 0,
      A4: -3.70226e-5,
      A6: 1.10203e-8,
      A8: -2.88695e-11,
      A10: 1.86588e-13,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings ── */
  // Only d11 (L6-rear to L7-front) changes during focus; BF is constant.
  // Close-focus value is the patent's β = |10| verification condition;
  // the production minimum focus (22.5 cm from front) gives a smaller d11.
  var: {
    "11": [1.8, 4.2909],
  },

  varLabels: [["11", "d11"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1A", fromSurface: "1", toSurface: "5" },
    { text: "G1B", fromSurface: "7", toSurface: "11" },
    { text: "G2", fromSurface: "12", toSurface: "19A" },
  ],

  doublets: [
    { text: "DB1", fromSurface: "3", toSurface: "5" },
    { text: "D1", fromSurface: "7", toSurface: "9" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.225, // Sigma spec: 22.5 cm from front of lens
  focusDescription:
    "Unit focus — G1 (L1–L6 with aperture stop) extends toward the object; G2 and sensor are stationary. Only d11 (L6-rear to L7-front gap) changes during focusing.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
