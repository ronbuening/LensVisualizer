import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON NIKKOR Z 40mm f/2                      ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2021-189351A Example 4 (Furuida Keigo / Nikon).   ║
 * ║  Compact three-group inner-focus prime: G1(+) / S / G2(+) / G3(−).║
 * ║  6 elements / 4 groups, 2 aspherical surfaces (hybrid composite).  ║
 * ║  Focus: inner focus — G2 translates toward object.                 ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs. Estimated via combined marginal +     ║
 * ║    chief ray trace (f/2.04, ω = 27.72°), constrained by edge      ║
 * ║    thickness ≥ 0.3 mm and cross-gap sag overlap ≤ gap × 1.1.      ║
 * ║    Front group (G1) SDs constrained by L11 biconvex edge thickness ║
 * ║    — significant off-axis vignetting at f/2 is expected and        ║
 * ║    consistent with the production lens's known behavior.           ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent surfaces 14–15 (IR filter, nd = 1.5168, d = 1.6 mm)     ║
 * ║    excluded. Last surface d = air-equivalent BFD = 12.114 mm.      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-z-40f2",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 40mm f/2",
  subtitle: "JP 2021-189351A EXAMPLE 4 — NIKON / FURUIDA",
  specs: ["6 ELEMENTS / 4 GROUPS", "f ≈ 41.2 mm", "F/2.04", "2ω ≈ 55.4°", "2 ASPHERICAL SURFACES (HYBRID COMPOSITE)"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 40,
  focalLengthDesign: 41.2,
  apertureMarketing: 2,
  apertureDesign: 2.04,
  patentYear: 2021,
  elementCount: 6,
  groupCount: 4,

  /* ── Elements ──
   *  6 glass elements + 2 resin layers = 8 entries.
   *  Nikon counts hybrid composites (glass + resin) as single elements;
   *  elementCount = 6 matches the marketed specification.
   */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.73,
      fl: 27.5,
      glass: "S-LAH55 (OHARA)",
      apd: false,
      role: "Front positive crown — dominant converging power in G1 achromatic doublet",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.57,
      fl: -44.1,
      glass: "S-TIH23 (OHARA)",
      apd: false,
      role: "Negative flint — chromatic correction partner in G1 doublet",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L21",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.57,
      fl: -18.9,
      glass: "PBM18Y (OHARA)",
      apd: false,
      role: "High-dispersion flint — spherical and chromatic corrector in G2 cemented assembly",
      cemented: "H1",
    },
    {
      id: 4,
      name: "L22",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.804,
      vd: 46.6,
      fl: 32.3,
      glass: "S-LAH64 (OHARA)",
      apd: false,
      role: "Positive crown body of hybrid composite — primary positive power in G2",
      cemented: "H1",
    },
    {
      id: 5,
      name: "L22r",
      label: "Element 4 (resin)",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.56093,
      vd: 36.64,
      fl: 666.5,
      glass: "UV-curable photopolymer (Nikon)",
      apd: false,
      role: "Aspherical resin layer — primary spherical aberration corrector",
      cemented: "H1",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.83481,
      vd: 42.73,
      fl: 27.0,
      glass: "S-LAH55 (OHARA)",
      apd: false,
      role: "Strongest positive element — concave toward object, high-index meniscus reducing higher-order SA",
    },
    {
      id: 7,
      name: "L31r",
      label: "Element 6 (resin)",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.56093,
      vd: 36.64,
      fl: -284.8,
      glass: "UV-curable photopolymer (Nikon)",
      apd: false,
      role: "Aspherical resin layer — field-dependent aberration corrector (astigmatism, coma)",
      cemented: "H2",
    },
    {
      id: 8,
      name: "L31",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.51742,
      vd: 52.2,
      fl: -67.9,
      glass: "E-CF6 (HOYA)",
      apd: false,
      role: "Field flattener — negative power lengthens Petzval radius, corrects field curvature",
      cemented: "H2",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    /* G1 — positive cemented doublet (L11 + L12), fixed during focus */
    { label: "1", R: 28.7073, d: 4.9, nd: 1.83481, elemId: 1, sd: 14.0 },
    { label: "2", R: -105.0698, d: 0.9, nd: 1.71736, elemId: 2, sd: 14.0 },
    { label: "3", R: 45.4688, d: 2.45, nd: 1.0, elemId: 0, sd: 13.5 },

    /* Aperture stop — between G1 and G2, fixed during focus */
    { label: "STO", R: 1e15, d: 11.25, nd: 1.0, elemId: 0, sd: 8.8 },

    /* G2 — positive focus group: cemented assembly (L21 + L22 + L22r) + singlet L23 */
    { label: "5", R: -16.5359, d: 0.9, nd: 1.7552, elemId: 3, sd: 7.2 },
    { label: "6", R: 105.5966, d: 4.55, nd: 1.804, elemId: 4, sd: 7.8 },
    { label: "7", R: -33.838, d: 0.1, nd: 1.56093, elemId: 5, sd: 9.8 },
    { label: "8A", R: -31.0626, d: 0.15, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "9", R: -397.823, d: 6.76, nd: 1.83481, elemId: 6, sd: 10.2 },
    { label: "10", R: -21.5121, d: 13.7904, nd: 1.0, elemId: 0, sd: 12.8 },

    /* G3 — negative field flattener: hybrid composite (L31r + L31), fixed during focus */
    { label: "11A", R: -29.55, d: 0.1, nd: 1.56093, elemId: 7, sd: 15.5 },
    { label: "12", R: -36.3, d: 1.3, nd: 1.51742, elemId: 8, sd: 15.5 },
    { label: "13", R: 1084.4056, d: 12.114, nd: 1.0, elemId: 0, sd: 16.0 },
  ],

  /* ── Aspherical coefficients ──
   *  Patent conic parameter κ = 1.0000 → K = κ − 1 = 0 (spherical base).
   *  Patent uses polynomial terms through A12; A12 = 0 for surface 8A.
   */
  asph: {
    "8A": {
      K: 0,
      A4: 3.51503e-5,
      A6: 5.19649e-8,
      A8: 2.28989e-10,
      A10: -1.66287e-12,
      A12: 0,
      A14: 0,
    },
    "11A": {
      K: 0,
      A4: 7.47127e-6,
      A6: 2.62883e-8,
      A8: -6.53514e-11,
      A10: 1.25069e-13,
      A12: -2.2897e-17,
      A14: 0,
    },
  },

  /* ── Variable air spacings (inner focus) ──
   *  G2 translates 1.209 mm toward object from infinity to close focus.
   *  Total track conserved: ΔD4 + ΔD10 = −1.209 + 1.209 = 0.
   */
  var: {
    STO: [11.25, 10.0415],
    "10": [13.7904, 14.9989],
  },
  varLabels: [
    ["STO", "D4"],
    ["10", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "3" },
    { text: "G2 (+)", fromSurface: "5", toSurface: "10" },
    { text: "G3 (−)", fromSurface: "11A", toSurface: "13" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "H1", fromSurface: "5", toSurface: "8A" },
    { text: "H2", fromSurface: "11A", toSurface: "13" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.29,
  focusDescription:
    "Inner focus (IF): G2 (L21–L23) translates toward the object. G1, aperture stop, and G3 remain fixed.",

  /* ── Aperture configuration ── */
  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 9,

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
