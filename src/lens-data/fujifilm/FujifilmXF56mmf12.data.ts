import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — FUJINON XF 56mm F1.2 R                      ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2015/0212302 A1 Example 3 (Suzuki / Fujifilm).   ║
 * ║  Modified Gaussian, 11 elements / 8 groups, 2 aspherical surfaces.║
 * ║  Focus: inner focus — L21 + cemented triplet (L22–L24) move       ║
 * ║         toward object; G1 and L25 fixed to image plane.           ║
 * ║                                                                    ║
 * ║  NOTE ON ASPHERICAL SURFACES:                                      ║
 * ║    The patent specifies odd-order polynomial terms (A3, A5, A7,   ║
 * ║    A9, A11, A13, A15, A17, A19) in addition to even-order terms.  ║
 * ║    The renderer supports only even-order coefficients (A4–A14).   ║
 * ║    Odd-order terms and A16–A20 are OMITTED. This affects the      ║
 * ║    aspherical sag profile, particularly at intermediate zones.    ║
 * ║    The odd-order A3 coefficient is the largest in magnitude       ║
 * ║    (~3.8×10⁻⁴ for S13A) and its omission slightly alters the     ║
 * ║    rendered element shape and ray trace near the rim.             ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters. Values estimated from     ║
 * ║    marginal + chief ray trace at f/1.25 design aperture, with     ║
 * ║    ~8% mechanical clearance. Front elements constrained by 62 mm  ║
 * ║    filter thread (SD ≤ 29 mm). All SDs validated for sd/|R|<0.90, ║
 * ║    edge thickness ≥ 0.5 mm, cemented pair consistency, and        ║
 * ║    cross-gap sag clearance.                                       ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent specifies PP: nd=1.5168, t=2.80 mm, plus 10.00 mm air  ║
 * ║    gap from L25 rear. PP excluded from surfaces; air-equivalent   ║
 * ║    BFD = 16.53 mm from L25 rear to image.                        ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujinon-xf56f12r",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON XF 56mm F1.2 R",
  subtitle: "US 2015/0212302 A1 Example 3 — Fujifilm / Suzuki",
  specs: ["11 ELEMENTS / 8 GROUPS", "f ≈ 56.99 mm", "F/1.25", "2ω ≈ 28.0°", "2 ASPHERICAL SURFACES (even-order only)"],

  focalLengthMarketing: 56,
  focalLengthDesign: 56.99,
  apertureMarketing: 1.2,
  apertureDesign: 1.25,
  patentYear: 2015,
  elementCount: 11,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      fl: 385.2,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Weak positive collector; gentle pre-convergence of incoming beam",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      fl: 78.7,
      glass: "S-FPL51 (OHARA) — ED",
      apd: "patent",
      apdNote: "θgF = 0.5375 (patent-listed)",
      role: "First ED element; primary positive power in G1 with minimal chromatic contribution",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      fl: 139.8,
      glass: "S-FPL51 (OHARA) — ED",
      apd: "patent",
      apdNote: "θgF = 0.5375 (patent-listed)",
      role: "Second ED element; paired with L12 for secondary spectrum correction",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: 66.4,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "High-index positive element in achromatizing doublet D1",
    },
    {
      id: 5,
      name: "L15",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.75211,
      vd: 25.1,
      fl: -90.4,
      glass: "Dense flint (752/251, uncertain)",
      apd: false,
      cemented: "D1",
      role: "Dense flint corrector in doublet D1; chromatic correction via dispersion contrast",
    },
    {
      id: 6,
      name: "L16",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.673,
      vd: 38.2,
      fl: -29.1,
      glass: "Flint (673/382, uncertain)",
      apd: false,
      role: "Strong negative meniscus; Gaussian-type spherical aberration corrector and Petzval flattener",
    },
    {
      id: 7,
      name: "L21",
      label: "Element 7",
      type: "Biconcave Neg. (2× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: -91.1,
      glass: "L-BAL42 (OHARA) — PGM",
      apd: false,
      role: "Molded double-asphere; corrects spherical aberration post-stop without strong concave surface",
    },
    {
      id: 8,
      name: "L22",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: 16.6,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      cemented: "T1",
      role: "Front positive of cemented triplet; convex-to-image meniscus redirects converging beam",
    },
    {
      id: 9,
      name: "L23",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.6668,
      vd: 33.0,
      fl: -14.0,
      glass: "S-TIF6 (OHARA)",
      apd: false,
      cemented: "T1",
      role: "Central negative of triplet; chromatic and spherical aberration corrector",
    },
    {
      id: 10,
      name: "L24",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 22.7,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      cemented: "T1",
      role: "Rear positive of triplet; shares aberration-correction burden with L22",
    },
    {
      id: 11,
      name: "L25",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 297.6,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Weak positive field lens; fixed to image plane, maintains image-side telecentricity",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 163.41, d: 2.59, nd: 1.48749, elemId: 1, sd: 27.5 },
    { label: "2", R: 1252.6, d: 0.15, nd: 1.0, elemId: 0, sd: 27.5 },
    { label: "3", R: 32.582, d: 9.16, nd: 1.497, elemId: 2, sd: 23.5 },
    { label: "4", R: 177.38, d: 0.15, nd: 1.0, elemId: 0, sd: 23.5 },
    { label: "5", R: 31.661, d: 4.54, nd: 1.497, elemId: 3, sd: 21.0 },
    { label: "6", R: 55.403, d: 0.4, nd: 1.0, elemId: 0, sd: 21.0 },
    { label: "7", R: 28.432, d: 3.99, nd: 1.883, elemId: 4, sd: 18.5 },
    { label: "8", R: 51.536, d: 1.3, nd: 1.75211, elemId: 5, sd: 18.5 },
    { label: "9", R: 28.992, d: 2.96, nd: 1.0, elemId: 0, sd: 18.5 },
    { label: "10", R: 89.503, d: 1.21, nd: 1.673, elemId: 6, sd: 14.0 },
    { label: "11", R: 15.974, d: 6.22, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "STO", R: 1e15, d: 11.59, nd: 1.0, elemId: 0, sd: 11.3 },
    { label: "13A", R: -187.802, d: 1.5, nd: 1.58313, elemId: 7, sd: 6.0 },
    { label: "14A", R: 74.266, d: 0.39, nd: 1.0, elemId: 0, sd: 6.0 },
    { label: "15", R: -193.91, d: 6.96, nd: 1.883, elemId: 8, sd: 11.5 },
    { label: "16", R: -13.865, d: 1.21, nd: 1.6668, elemId: 9, sd: 11.5 },
    { label: "17", R: 29.688, d: 6.63, nd: 1.883, elemId: 10, sd: 11.5 },
    { label: "18", R: -55.427, d: 0.9, nd: 1.0, elemId: 0, sd: 11.5 },
    { label: "19", R: 289.87, d: 1.81, nd: 1.48749, elemId: 11, sd: 11.5 },
    { label: "20", R: -289.87, d: 16.53, nd: 1.0, elemId: 0, sd: 11.5 },
  ],

  /* ── Aspherical coefficients ──
   *  Even-order only (A4–A14). Patent specifies odd-order terms A3–A19
   *  and higher-order A16–A20 which are unsupported by the renderer.
   *  Omitted coefficients for surface 13A: A3=3.8394e-4, A5=1.4778e-4,
   *    A7=-4.3589e-6, A9=-8.1702e-9, A11=1.8896e-9, A13=-3.5277e-12,
   *    A15=-7.1519e-13, A17=9.4964e-15, A19=-3.5657e-17.
   *  Omitted coefficients for surface 14A: A3=3.2574e-4, A5=1.1259e-4,
   *    A7=-3.6581e-6, A9=-8.9862e-8, A11=4.6428e-9, A13=-4.8041e-11,
   *    A15=-5.5600e-14, A17=3.3642e-15, A19=-1.2834e-17.
   *  Higher-order (A16–A20) also omitted for both surfaces.
   */
  asph: {
    "13A": {
      K: 0,
      A4: -6.2592552e-4,
      A6: -1.4352983e-5,
      A8: 1.1550101e-6,
      A10: -2.0799721e-8,
      A12: -7.7228059e-11,
      A14: 5.669064e-12,
    },
    "14A": {
      K: 0,
      A4: -5.1485989e-4,
      A6: -1.045219e-5,
      A8: 1.2413561e-6,
      A10: -1.9808269e-8,
      A12: -2.0450812e-10,
      A14: 6.9487622e-12,
    },
  },

  /* ── Variable air spacings (inner focus) ──
   *  G1 and L25 fixed to image plane. Moving group: L21 + L22 + L23 + L24.
   *  Focus shift δ ≈ 6.20 mm at MFD (0.7 m).
   */
  var: {
    STO: [11.59, 5.39],
    "18": [0.9, 7.1],
  },
  varLabels: [
    ["STO", "D(STO)"],
    ["18", "BF(G2)"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "11" },
    { text: "G2 (+)", fromSurface: "13A", toSurface: "20" },
  ],
  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "T1", fromSurface: "15", toSurface: "18" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.7,
  focusDescription: "Inner focus — L21 through L24 move toward object; G1 and L25 fixed.",

  /* ── Aperture configuration ── */
  nominalFno: 1.2,
  fstopSeries: [1.2, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 7,
  apertureBladeRoundedness: 0.7,

  /* ── Layout tuning ── */
  scFill: 0.52,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
