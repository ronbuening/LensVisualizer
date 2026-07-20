import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — FUJINON GF80mmF1.7 R WR                              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2021/0294073 A1, Example 1 (Tables 1–4).         ║
 * ║  Inventor: Masato Kondo (Fujifilm Corporation).                    ║
 * ║  Three-group inner-focus design for medium format (GFX).           ║
 * ║  12 elements / 9 groups, 2 aspherical surfaces (on L26).          ║
 * ║  Focus: inner focus, G2 (6 elements + stop) moves toward object.  ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from marginal + chief ray (60% field) with 8%         ║
 * ║    clearance. Front elements constrained by 77 mm filter thread    ║
 * ║    and cross-gap sag intrusion (S2→S3 gap = 2.75 mm is binding).  ║
 * ║                                                                    ║
 * ║  NOTE ON ASPHERICAL COEFFICIENTS:                                  ║
 * ║    The patent's aspheric equation uses BOTH odd and even powers    ║
 * ║    (A3 through A20). This data file can only encode even powers   ║
 * ║    (A4–A20). The odd-power coefficients (A5, A7, A9, A11, A13,    ║
 * ║    A15, A17, A19) are non-zero in the patent and contribute       ║
 * ║    materially to the sag profile. Their omission here means the   ║
 * ║    rendered aspherical departure is approximate. Refer to the      ║
 * ║    analysis document and the patent for the full coefficient set.  ║
 * ║                                                                    ║
 * ║  NOTE ON CONIC CONVENTION:                                         ║
 * ║    The patent uses KA where KA = 1 + K (standard). Both aspheric  ║
 * ║    surfaces have KA = 1.0, giving K = 0.                          ║
 * ║                                                                    ║
 * ║  COVER GLASS:                                                      ║
 * ║    Patent lists PP (nd = 1.51680, d = 3.20 mm) plus 1.05 mm air.  ║
 * ║    Excluded; air-equivalent OPL folded into BFD on last surface.   ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-gf80-f17",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON GF 80mm f/1.7 R WR",
  subtitle: "US 2021/0294073 A1 Example 1 — Fujifilm / Kondo",
  specs: [
    "12 ELEMENTS / 9 GROUPS",
    "f ≈ 78.7 mm",
    "F/1.75",
    "2ω ≈ 38.0°",
    "2 ASPHERICAL SURFACES (1 element)",
    "Medium format (GFX, 43.8 × 32.9 mm)",
  ],

  focalLengthMarketing: 80,
  focalLengthDesign: 78.68,
  apertureMarketing: 1.7,
  apertureDesign: 1.75,
  lensMounts: ["fujifilm-g"],
  imageFormat: "44x33",
  patentNumber: "US 2021/0294073 A1",
  patentAuthors: ["Masato Kondo"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2021,
  elementCount: 12,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.79952,
      vd: 42.25,
      fl: 168.2,
      glass: "S-NBH55 (OHARA)",
      apd: false,
      role: "Front collector; high-index meniscus pre-converges beam into G1–G2 gap.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.31,
      fl: -202.5,
      glass: "S-TIH10 (OHARA)",
      apd: false,
      role: "Chromatic corrector for G1; titanium flint counteracts L11 LoCA.",
    },
    {
      id: 3,
      name: "L21",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.755,
      vd: 52.34,
      fl: 63.2,
      glass: "J-LASKH2 (Hikari)",
      apd: false,
      role: "Leading positive of focus group G2; high-index (Cond. 3: N2 = 1.755) reduces downstream ray diameter.",
    },
    {
      id: 4,
      name: "L22",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.43875,
      vd: 94.66,
      fl: 70.5,
      glass: "S-FPL55 (OHARA)",
      apd: "inferred",
      apdNote: "Super-ED fluorophosphate; ΔPgF ≈ +0.046 per OHARA catalog.",
      dPgF: 0.046,
      cemented: "D1",
      role: "Positive crown of pre-stop achromatic doublet D1; extremely low dispersion (νd = 94.66).",
    },
    {
      id: 5,
      name: "L23",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.57099,
      vd: 50.8,
      fl: -33.4,
      glass: "S-BAL2 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Negative partner of D1; Δν = 43.9 drives pre-stop achromatic correction. Concave image-side satisfies ¶0051.",
    },
    {
      id: 6,
      name: "L24",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.43875,
      vd: 94.66,
      fl: 63.9,
      glass: "S-FPL55 (OHARA)",
      apd: "inferred",
      apdNote: "Super-ED fluorophosphate; ΔPgF ≈ +0.046 per OHARA catalog.",
      dPgF: 0.046,
      cemented: "D2",
      role: "Positive crown of post-stop achromatic doublet D2; symmetric partner to L22 about stop.",
    },
    {
      id: 7,
      name: "L25",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.6727,
      vd: 32.18,
      fl: -36.0,
      glass: "E-FD5 (HOYA)",
      apd: false,
      cemented: "D2",
      role: "Negative flint of D2; Δν = 62.48 — max in system (Cond. 10). Most aggressive achromatic correction.",
    },
    {
      id: 8,
      name: "L26",
      label: "Element 8",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.81,
      vd: 41.0,
      fl: 51.3,
      glass: "K-VC89 (Sumita)",
      apd: false,
      role: "Sole aspherical element; both surfaces aspheric. Corrects residual SA and higher-order coma at f/1.7.",
    },
    {
      id: 9,
      name: "L31",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 39.22,
      fl: 42.0,
      glass: "H-ZLaF68L (NHG)",
      apd: false,
      cemented: "D3",
      role: "Strongest positive in system (f ≈ 42 mm). Petzval corrector; high-index (highest nd in design).",
    },
    {
      id: 10,
      name: "L32",
      label: "Element 10",
      type: "Plano-Concave Negative",
      nd: 1.5927,
      vd: 35.31,
      fl: -81.5,
      glass: "S-FTM16 (OHARA)",
      apd: false,
      cemented: "D3",
      role: "Negative partner of D3; flat rear surface. Near-zero net power but controlled Petzval shift.",
    },
    {
      id: 11,
      name: "L33",
      label: "Element 11",
      type: "Plano-Concave Negative",
      nd: 1.5168,
      vd: 64.21,
      fl: -204.1,
      glass: "N-BK7 (Schott)",
      apd: false,
      role: "Weak negative field flattener; low-index crown minimizes chromatic disturbance.",
    },
    {
      id: 12,
      name: "L34",
      label: "Element 12",
      type: "Plano-Concave Negative",
      nd: 1.64769,
      vd: 33.84,
      fl: -133.6,
      glass: "E-FD2 (HOYA)",
      apd: false,
      role: "Rearmost element; concave object-side corrects astigmatism and improves Petzval sum (¶0055–0056).",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: L11 + L12 (2 elements, positive group, fixed) ──
    { label: "1", R: 82.3255, d: 4.66, nd: 1.79952, elemId: 1, sd: 26.0 },
    { label: "2", R: 206.9226, d: 2.75, nd: 1.0, elemId: 0, sd: 26.0 },
    { label: "3", R: -420.0742, d: 1.68, nd: 1.72825, elemId: 2, sd: 28.0 },
    { label: "4", R: 227.5627, d: 16.34, nd: 1.0, elemId: 0, sd: 28.0 }, // DD[4] inf

    // ── G2: L21–L26 + STO (6 elements, positive group, focus group) ──
    { label: "5", R: 41.3284, d: 7.02, nd: 1.755, elemId: 3, sd: 23.5 },
    { label: "6", R: 285.6388, d: 0.2, nd: 1.0, elemId: 0, sd: 23.5 },
    { label: "7", R: 28.5038, d: 8.21, nd: 1.43875, elemId: 4, sd: 20.0 }, // L22 front
    { label: "8", R: 329.044, d: 1.63, nd: 1.57099, elemId: 5, sd: 16.0 }, // L22→L23 junction
    { label: "9", R: 17.9857, d: 9.8099, nd: 1.0, elemId: 0, sd: 16.0 }, // L23 rear → air
    { label: "STO", R: 1e15, d: 6.0118, nd: 1.0, elemId: 0, sd: 13.5 }, // aperture stop
    { label: "11", R: -40.9786, d: 5.42, nd: 1.43875, elemId: 6, sd: 14.0 }, // L24 front
    { label: "12", R: -17.3114, d: 1.2, nd: 1.6727, elemId: 7, sd: 14.0 }, // L24→L25 junction
    { label: "13", R: -62.541, d: 6.01, nd: 1.0, elemId: 0, sd: 14.0 }, // L25 rear → air
    { label: "14A", R: -146.6394, d: 7.26, nd: 1.81, elemId: 8, sd: 18.4 }, // L26 front (asph)
    { label: "15A", R: -33.0799, d: 2.32, nd: 1.0, elemId: 0, sd: 19.2 }, // L26 rear (asph), DD[15] inf

    // ── G3: L31–L34 (4 elements, weakly positive group, fixed) ──
    { label: "16", R: 145.617, d: 8.67, nd: 1.883, elemId: 9, sd: 19.5 }, // L31 front
    { label: "17", R: -48.319, d: 1.94, nd: 1.5927, elemId: 10, sd: 19.5 }, // L31→L32 junction
    { label: "18", R: 1e15, d: 2.33, nd: 1.0, elemId: 0, sd: 19.5 }, // L32 rear → air
    { label: "19", R: -105.4941, d: 1.3, nd: 1.5168, elemId: 11, sd: 18.5 }, // L33 front
    { label: "20", R: 1e15, d: 2.89, nd: 1.0, elemId: 0, sd: 18.5 }, // L33 rear → air
    { label: "21", R: -86.5553, d: 1.3, nd: 1.64769, elemId: 12, sd: 18.0 }, // L34 front
    { label: "22", R: 1e15, d: 23.2843, nd: 1.0, elemId: 0, sd: 18.0 }, // L34 rear → image (air-equiv BFD)
  ],

  /* ── Aspherical coefficients ──
   *  IMPORTANT: The patent specifies odd-power terms (A3–A19 odd) in
   *  addition to even powers. Only even-power terms are encoded here.
   *  See file header note for details.
   *
   *  Patent conic convention: KA = 1 + K.  KA = 1.0 → K = 0.
   */
  asph: {
    "14A": {
      K: 0,
      A4: -1.0088242e-6,
      A6: 1.7071672e-8,
      A8: -1.0054449e-12,
      A10: 6.0868319e-13,
      A12: 1.3561314e-17,
      A14: 5.4134773e-18,
      A16: 6.8084206e-21,
      A18: -1.8685654e-22,
      A20: 1.880646e-25,
    },
    "15A": {
      K: 0,
      A4: 1.3965451e-7,
      A6: 1.5432308e-8,
      A8: -8.1934546e-11,
      A10: 1.574072e-13,
      A12: -9.8161787e-16,
      A14: 3.9921882e-18,
      A16: -7.0611745e-21,
      A18: 3.8876927e-24,
      A20: -2.1180317e-26,
    },
  },

  /* ── Variable air spacings (inner focus) ──
   *  G2 moves toward object during close focusing.
   *  Two variable gaps: DD[4] (G1–G2) and DD[15] (G2–G3).
   *  Sum conserved at 18.660 mm.
   */
  var: {
    "4": [16.34, 1.932],
    "15A": [2.32, 16.728],
  },
  varLabels: [
    ["4", "DD4"],
    ["15A", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "4" },
    { text: "G2 (+) FOCUS", fromSurface: "5", toSurface: "15A" },
    { text: "G3 (+weak)", fromSurface: "16", toSurface: "22" },
  ],

  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "11", toSurface: "13" },
    { text: "D3", fromSurface: "16", toSurface: "18" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.7,
  focusDescription: "Inner focus: G2 (L21–L26 + stop) moves toward object. G1 and G3 fixed. DC motor with GMR sensor.",

  /* ── Aperture configuration ── */
  nominalFno: 1.75,
  apertureBlades: 9,
  fstopSeries: [1.7, 2, 2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
