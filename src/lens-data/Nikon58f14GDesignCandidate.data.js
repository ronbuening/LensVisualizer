/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF-S NIKKOR 58mm f/1.4G (Design Candidate)     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP2013-019993A Example 2 (Nikon / Haruo Sato).      ║
 * ║  Modified Gauss type optimized for sagittal coma correction.       ║
 * ║  9 elements / 4 patent groups (5 air-separated components),       ║
 * ║  2 aspherical surfaces (S1A front, S15A rear).                    ║
 * ║  Focus: Unit focus — entire optical assembly translates.           ║
 * ║                                                                    ║
 * ║  DESIGN CANDIDATE NOTE:                                            ║
 * ║    Example 2 is the closest patent match to the production lens    ║
 * ║    (9 elements, asph on S1 and S15, f ≈ 58mm). The production     ║
 * ║    lens is 9 elements / 6 groups; the patent groups the Lb1       ║
 * ║    cemented doublet as a single component within Gb, yielding     ║
 * ║    5 air-separated components. Nikon likely split this doublet    ║
 * ║    into two air-separated singlets for production.                ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs. Estimated via paraxial marginal +    ║
 * ║    0.6-field chief ray trace with 5–8% mechanical clearance,      ║
 * ║    capped by edge-thickness positivity (ET > 0.3 mm) and the     ║
 * ║    S15A conic height limit (sd < 0.98 × |R|/√(1+K) = 20.1 mm).  ║
 * ║                                                                    ║
 * ║  NOTE ON CONIC CONSTANTS:                                          ║
 * ║    Patent uses κ in the sag discriminant 1 − κ(y/r)².            ║
 * ║    Spec uses (1+K). Therefore K = κ − 1.                         ║
 * ║    S1A:  patent κ = 0.5721  → K = −0.4279 (prolate ellipsoid)    ║
 * ║    S15A: patent κ = 14.1597 → K = +13.1597 (oblate ellipsoid)    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-af-s-58f14g",
  name: "NIKON AF-S NIKKOR 58mm f/1.4G",
  subtitle: "JP2013-019993A EXAMPLE 2 — NIKON / HARUO SATO",
  specs: [
    "9 ELEMENTS / 4 GROUPS (patent) · 6 GROUPS (production)",
    "f ≈ 58.0 mm",
    "F/1.4",
    "2ω ≈ 41.7°",
    "2 ASPHERICAL SURFACES",
  ],

  /* ── Elements ──
   *  9 elements, front to rear. Patent group designations noted.
   *  Glass identifications are INFERENTIAL from nd/νd catalog matching.
   */
  elements: [
    {
      id: 1,
      name: "La",
      label: "Element 1",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.74443,
      vd: 49.53,
      fl: 91.0,
      glass: "Lanthanum dense flint (LASF-type, nd/νd match uncertain)",
      apd: false,
      role: "Front positive collector with aspherical correction for spherical aberration and lower coma. Ga (Group 1, positive).",
    },
    {
      id: 2,
      name: "Lb1p",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.755,
      vd: 52.34,
      fl: 59.8,
      glass: "S-LAL14 / N-LAK12 (lanthanum crown)",
      apd: false,
      cemented: "Lb1",
      role: "Front element of cemented chromatic corrector doublet. Gb (Group 2, negative).",
    },
    {
      id: 3,
      name: "Lb1n",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.31,
      fl: -99.0,
      glass: "S-FSL5 / FK5 (fluorine crown, low dispersion)",
      apd: false,
      cemented: "Lb1",
      role: "Rear element of chromatic corrector doublet; low dispersion controls primary color. Gb.",
    },
    {
      id: 4,
      name: "Lb2",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.68893,
      vd: 31.16,
      fl: -51.6,
      glass: "S-TIH4 / N-SF8 (dense flint)",
      apd: false,
      role: "Classical Gauss diverging meniscus; strongest negative element in front half. Petzval field flattening. Gb.",
    },
    {
      id: 5,
      name: "Lcn",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.46,
      fl: -22.3,
      glass: "S-TIH11 / N-SF10 (dense flint)",
      apd: false,
      cemented: "Lc",
      role: "Front element of post-stop corrector doublet; high dispersion for chromatic balancing. Gc (Group 3, negative).",
    },
    {
      id: 6,
      name: "Lcp",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.77,
      fl: 32.0,
      glass: "S-LAH58 / N-LASF44 (high-index lanthanum)",
      apd: false,
      cemented: "Lc",
      role: "Rear element of post-stop corrector; nd = 1.883 drives Petzval correction. Gc.",
    },
    {
      id: 7,
      name: "Ldp1",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.66,
      fl: 37.1,
      glass: "S-LAH58 / N-LASF44 (high-index lanthanum, same family as Lcp)",
      apd: false,
      cemented: "Ld",
      role: "Front positive of rear power triplet; high index for Petzval control. Gd (Group 4, positive).",
    },
    {
      id: 8,
      name: "Ldn",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.53172,
      vd: 48.78,
      fl: -41.4,
      glass: "S-NBM51 / KZFS2-type (short flint, anomalous partial dispersion)",
      apd: "inferred",
      apdNote: "Short flint with positive ΔPgF; paired with S-LAH58 positive elements for secondary spectrum control",
      cemented: "Ld",
      role: "Central negative of rear triplet; symmetric biconcave shape factor ≈ 0 optimizes coma and spherical aberration balance. Gd.",
    },
    {
      id: 9,
      name: "Ldp2",
      label: "Element 9",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.74443,
      vd: 49.53,
      fl: 38.6,
      glass: "Same as La (lanthanum dense flint, LASF-type)",
      apd: false,
      cemented: "Ld",
      role: "Rear positive of triplet with aspherical exit surface; corrects upper coma, sagittal coma, spherical aberration, and distortion. Gd.",
    },
  ],

  /* ── Surface prescription ──
   *  16 surfaces (15 patent surfaces + STO), front to rear.
   *  Patent surface numbers preserved in labels.
   *  Aperture stop at patent surface 8, between Gb and Gc.
   */
  surfaces: [
    { label: "1A", R: 52.8577, d: 6.0, nd: 1.74443, elemId: 1, sd: 26.7 }, // La front (aspherical)
    { label: "2", R: 229.3475, d: 0.1, nd: 1.0, elemId: 0, sd: 26.4 }, // La rear → air
    { label: "3", R: 40.3738, d: 6.0, nd: 1.755, elemId: 2, sd: 21.8 }, // Lb1p front
    { label: "4", R: 354.9744, d: 1.5, nd: 1.48749, elemId: 3, sd: 21.8 }, // Lb1p→Lb1n junction
    { label: "5", R: 42.4134, d: 4.1038, nd: 1.0, elemId: 0, sd: 21.8 }, // Lb1n rear → air
    { label: "6", R: 290.8467, d: 1.5, nd: 1.68893, elemId: 4, sd: 18.0 }, // Lb2 front
    { label: "7", R: 31.6359, d: 6.0, nd: 1.0, elemId: 0, sd: 17.3 }, // Lb2 rear → air
    { label: "STO", R: 1e15, d: 6.0, nd: 1.0, elemId: 0, sd: 14.0 }, // Aperture stop (patent surface 8)
    { label: "9", R: -30.7873, d: 1.7, nd: 1.72825, elemId: 5, sd: 16.2 }, // Lcn front
    { label: "10", R: 35.1427, d: 7.0, nd: 1.883, elemId: 6, sd: 16.8 }, // Lcn→Lcp junction
    { label: "11", R: -131.1407, d: 0.1, nd: 1.0, elemId: 0, sd: 18.7 }, // Lcp rear → air
    { label: "12", R: 118.7661, d: 6.0, nd: 1.883, elemId: 7, sd: 18.8 }, // Ldp1 front
    { label: "13", R: -44.2318, d: 1.5, nd: 1.53172, elemId: 8, sd: 17.6 }, // Ldp1→Ldn junction
    { label: "14", R: 44.2683, d: 6.0, nd: 1.74443, elemId: 9, sd: 17.6 }, // Ldn→Ldp2 junction
    { label: "15A", R: -77.2943, d: 38.7, nd: 1.0, elemId: 0, sd: 17.6 }, // Ldp2 rear (aspherical) → air; d = BFD
  ],

  /* ── Aspherical coefficients ──
   *  K = patent κ − 1 (see header note on conic convention).
   *  Patent A2 = 0 for all surfaces (omitted per spec).
   */
  asph: {
    "1A": {
      K: -0.4279,
      A4: 1.10084e-7,
      A6: 6.21998e-10,
      A8: -4.25694e-13,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "15A": {
      K: 13.1597,
      A4: 8.65514e-6,
      A6: 4.15194e-9,
      A8: 1.25812e-11,
      A10: 1.22728e-14,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (unit focus) ──
   *  Single variable gap: BFD (surface 15A d) changes with focus.
   *  Extension ≈ 7.3 mm for 0.58 m close focus (paraxial computation).
   *  BFD increases as lens extends forward from sensor.
   */
  var: {
    "15A": [38.7, 46.003],
  },

  varLabels: [["15A", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "Ga (+)", fromSurface: "1A", toSurface: "2" },
    { text: "Gb (−)", fromSurface: "3", toSurface: "7" },
    { text: "Gc (−)", fromSurface: "9", toSurface: "11" },
    { text: "Gd (+)", fromSurface: "12", toSurface: "15A" },
  ],

  doublets: [
    { text: "Lb1", fromSurface: "3", toSurface: "5" },
    { text: "Lc", fromSurface: "9", toSurface: "11" },
    { text: "Ld", fromSurface: "12", toSurface: "15A" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.58,
  focusDescription:
    "Unit focus — entire optical assembly translates forward via SWM helicoid. BFD increases at close focus.",

  /* ── Aperture configuration ── */
  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.32,
};

export default LENS_DATA;
