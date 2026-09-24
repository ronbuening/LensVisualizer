import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — VOIGTLÄNDER NOKTON 35mm f/1.2 Aspherical               ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2004-101880 A, Example 2 (Table 3, asph. Table 4). ║
 * ║  Applicant Cosina Co., Ltd.; inventor Yoshihisa Yomogida.           ║
 * ║  Patent: f = 35.8, Fno 1.24, ω = 31.8°. Stored at native patent     ║
 * ║  scale (already production focal length; no rescaling).            ║
 * ║  Modified double-Gauss for Leica M mount, f/1.2 wide-normal.        ║
 * ║  10 elements / 7 groups, 3 aspherical surfaces (on 2 elements).     ║
 * ║  Patent Examples 1 and 2 share 10/7 and 3 aspheric surfaces; which  ║
 * ║  one is the production (Version I/II) formula is inferred, not      ║
 * ║  stated by the patent.                                              ║
 * ║                                                                    ║
 * ║  FOCUS: unit focus (entire lens translates). The patent publishes   ║
 * ║    infinity data only; the close-focus back gap is CALCULATED       ║
 * ║    (paraxial Newton solve for 0.7 m object-to-image distance, the   ║
 * ║    rangefinder-coupled limit): BF 23.51 → 25.62 mm (Δ 2.11 mm).     ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent lists no effective diameters. SDs follow the Fig. 3   ║
 * ║    section (measured at 10.5 px/mm from the S1–S18 vertex span),    ║
 * ║    floored by the exact f/1.24 axial marginal ray: L2b/L3 doublet   ║
 * ║    rims 19.5–20.0 mm, L3b rear optical zone 15.0 mm, L5 doublet     ║
 * ║    15.8 mm (limited by L5b edge thickness). Stop 12.9 mm = paraxial ║
 * ║    f/1.24 iris (engine's real-ray iris 13.24 mm is derived from     ║
 * ║    nominalFno). L1, L2a, L4, L6, L7 retain earlier estimates, all   ║
 * ║    within ~10 % of the figure. The full-field                       ║
 * ║    (ω 31.7°) bundle is heavily vignetted, as usual for this class.  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "voigtlander-nokton-35-f12",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER NOKTON 35mm f/1.2 Aspherical",
  subtitle: "JP 2004-101880 A Example 2 — Cosina / Yomogida",
  specs: ["10 ELEMENTS / 7 GROUPS", "f ≈ 35.8 mm", "F/1.24", "2ω ≈ 63.6°", "3 ASPHERICAL SURFACES"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 35,
  focalLengthDesign: 35.808,
  apertureMarketing: 1.2,
  apertureDesign: 1.24,
  lensMounts: ["leica-m"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2004-101880 A",
  patentAuthors: ["Yoshihisa Yomogida"],
  patentAssignees: ["Cosina Co., Ltd."],
  patentYear: 2004,
  elementCount: 10,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.4,
      fl: -107.3,
      glass: "FC5 (HOYA)",
      apd: false,
      role: "Weak negative front meniscus; low-dispersion crown keeps chromatic contribution small at the widest ray heights while widening the accepted field.",
    },
    {
      id: 2,
      name: "L2a",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.56732,
      vd: 42.8,
      fl: -46.1,
      glass: "S-TIL26 (OHARA)",
      apd: false,
      role: "Negative element of cemented doublet D22; light titanium flint paired against high-index positive for monochromatic correction.",
      cemented: "D22",
    },
    {
      id: 3,
      name: "L2b",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      fl: 44.2,
      glass: "TAF3 (HOYA)",
      apd: false,
      role: "Positive element of D22; high-index lanthanum glass (nd > 1.7 per patent requirement) provides convergence with controlled Petzval contribution.",
      cemented: "D22",
    },
    {
      id: 4,
      name: "L3a",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      fl: 24.2,
      glass: "TAF3 (HOYA)",
      apd: false,
      role: "Principal power element of front group; thickest element (13.1 mm CT) carries the highest surface powers. Strongest positive element in G21.",
      cemented: "D23",
    },
    {
      id: 5,
      name: "L3b",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.64769,
      vd: 33.8,
      fl: -33.2,
      glass: "E-FD2 (HOYA)",
      apd: false,
      role: "Primary chromatic corrector in front group (Δν = 12.7); dense flint paired with the nd 1.804 lanthanum positive.",
      cemented: "D23",
    },
    {
      id: 6,
      name: "L4",
      label: "Element 6",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.8061,
      vd: 40.7,
      fl: -1183.3,
      glass: "NBFD13 (HOYA)",
      apd: false,
      role: "Aspherical correction plate immediately behind stop; near-zero base power but strong negative A4 departure provides overcorrecting SA contribution at the full f/1.2 aperture.",
    },
    {
      id: 7,
      name: "L5a",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.5,
      fl: -22.7,
      glass: "FD60 (HOYA)",
      apd: false,
      role: "High-dispersion negative element of rear chromatic doublet D25; largest Δν in system (21.0) carries heaviest axial chromatic correction burden.",
      cemented: "D25",
    },
    {
      id: 8,
      name: "L5b",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      fl: 22.6,
      glass: "TAF3 (HOYA)",
      apd: false,
      role: "Positive element of D25; near-identical nd to L5a (Δnd ≈ 0.001) — 'new achromat' design where chromatic correction arises from dispersion difference, minimizing monochromatic penalty.",
      cemented: "D25",
    },
    {
      id: 9,
      name: "L6",
      label: "Element 9",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.8061,
      vd: 40.7,
      fl: 28.8,
      glass: "NBFD13 (HOYA)",
      apd: false,
      role: "Double-aspherical power element in rear group. Front asph provides mild undercorrecting SA balance; rear asph provides overcorrecting SA.",
    },
    {
      id: 10,
      name: "L7",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.54814,
      vd: 45.8,
      fl: -38.9,
      glass: "S-TIL1 (OHARA)",
      apd: false,
      role: "Rear field-flattener and exit-pupil shaper; low nd amplifies Petzval correction per unit power. Strong rear curvature (R = +30 mm) shapes exit pupil for M-mount rangefinder compatibility.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 200.0, d: 1.6, nd: 1.48749, elemId: 1, sd: 23.0 }, // L1 front
    { label: "2", R: 41.361, d: 9.55, nd: 1.0, elemId: 0, sd: 18.0 }, // L1 rear → air
    { label: "3", R: -29.539, d: 1.5, nd: 1.56732, elemId: 2, sd: 16.0 }, // L2a front
    { label: "4", R: 233.985, d: 6.67, nd: 1.8042, elemId: 3, sd: 19.5 }, // L2a–L2b junction
    { label: "5", R: -41.35, d: 0.15, nd: 1.0, elemId: 0, sd: 19.5 }, // L2b rear → air
    { label: "6", R: 28.934, d: 13.1, nd: 1.8042, elemId: 4, sd: 20.0 }, // L3a front
    { label: "7", R: -47.262, d: 2.8, nd: 1.64769, elemId: 5, sd: 20.0 }, // L3a–L3b junction
    { label: "8", R: 40.326, d: 4.04, nd: 1.0, elemId: 0, sd: 15.0 }, // L3b rear → air
    { label: "STO", R: 1e15, d: 3.51, nd: 1.0, elemId: 0, sd: 12.9 }, // Aperture stop
    { label: "10A", R: -200.0, d: 1.7, nd: 1.8061, elemId: 6, sd: 13.0 }, // L4 front (asph)
    { label: "11", R: -254.022, d: 2.86, nd: 1.0, elemId: 0, sd: 12.9 }, // L4 rear → air
    { label: "12", R: -30.236, d: 1.4, nd: 1.80518, elemId: 7, sd: 13.5 }, // L5a front
    { label: "13", R: 46.963, d: 8.51, nd: 1.8042, elemId: 8, sd: 15.8 }, // L5a–L5b junction
    { label: "14", R: -27.172, d: 0.15, nd: 1.0, elemId: 0, sd: 15.8 }, // L5b rear → air
    { label: "15A", R: 81.004, d: 6.41, nd: 1.8061, elemId: 9, sd: 15.0 }, // L6 front (asph)
    { label: "16A", R: -31.428, d: 0.2, nd: 1.0, elemId: 0, sd: 15.5 }, // L6 rear (asph) → air
    { label: "17", R: -75.075, d: 1.5, nd: 1.54814, elemId: 10, sd: 15.5 }, // L7 front
    { label: "18", R: 30.0, d: 23.51, nd: 1.0, elemId: 0, sd: 15.5 }, // L7 rear → image (BFL)
  ],

  /* ── Aspherical coefficients ──
   *  Patent Table 4: Z = ch²/[1+√(1−(1+K)c²h²)] + Ah⁴ + Bh⁶ + Ch⁸ + Dh¹⁰ — the standard
   *  conic form, so K maps directly; every surface has K = 0 (spherical base, per the patent text).
   */
  asph: {
    "10A": {
      K: 0,
      A4: -3.46513e-5,
      A6: -5.82425e-8,
      A8: -3.01558e-11,
      A10: 7.98551e-14,
      A12: 0,
      A14: 0,
    },
    "15A": {
      K: 0,
      A4: 3.63823e-6,
      A6: -2.57284e-8,
      A8: 2.13341e-10,
      A10: -5.87072e-13,
      A12: 0,
      A14: 0,
    },
    "16A": {
      K: 0,
      A4: 1.17867e-5,
      A6: -3.91138e-8,
      A8: 2.32768e-10,
      A10: -5.55678e-13,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings ──
   *  Unit focus: only the back gap changes as the entire lens translates.
   *  Close value CALCULATED (paraxial Newton x·x′ = f², front focal point 0.30 mm ahead of S1):
   *  0.7 m object-to-image → extension 2.11 mm, m ≈ −0.059. Not a patent value.
   */
  var: {
    "18": [23.51, 25.62],
  },

  varLabels: [["18", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G21 (Front)", fromSurface: "1", toSurface: "8" },
    { text: "G22 (Rear)", fromSurface: "10A", toSurface: "18" },
  ],

  doublets: [
    { text: "D22", fromSurface: "3", toSurface: "5" },
    { text: "D23", fromSurface: "6", toSurface: "8" },
    { text: "D25", fromSurface: "12", toSurface: "14" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.7,
  focusDescription:
    "Unit focus — entire optical assembly translates via helicoid. Close position calculated for the 0.7 m rangefinder-coupled limit (Version I MFD).",

  /* ── Aperture configuration ── */
  nominalFno: 1.24,
  fstopSeries: [1.24, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
