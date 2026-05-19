import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — HASSELBLAD XCD 2,5/90V                       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2022-99402 A, Example 1 (Panasonic IP Mgmt).      ║
 * ║  Positive–negative–positive three-group inner-focus prime.          ║
 * ║  9 elements / 6 groups, 2 aspherical surfaces (on 1 element).      ║
 * ║  Focus: inner focus via G2 (L5–L6 cemented doublet), G1/G3 fixed.  ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent normalised to full-frame (f = 71.28 mm, IH = 21.63 mm). ║
 * ║    All R, d, sd values scaled ×1.26265 to production f ≈ 90 mm    ║
 * ║    covering the 44×33 mm medium-format sensor (diag ≈ 54.78 mm).  ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from combined paraxial marginal ray (at F/2.56) and   ║
 * ║    chief ray (at 60% of half-field), scaled to production, with    ║
 * ║    ~8% mechanical clearance. Cemented junction SDs unified.        ║
 * ║                                                                    ║
 * ║  NOTE ON CEMENT LAYERS:                                            ║
 * ║    The patent models three cemented interfaces (L2–L3, L5–L6,      ║
 * ║    L7–L8) as thin adhesive layers (nd = 1.56732, νd = 42.8,       ║
 * ║    d = 0.01 mm). These are preserved as thin surface entries.      ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent includes a parallel plate (nd = 1.51680, d = 1.44 mm)   ║
 * ║    plus 0.80 mm air gap. Excluded per spec; air-equivalent path    ║
 * ║    folded into the final surface BFD.                              ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "hasselblad-xcd-90-f25-v",
  maker: "Hasselblad",
  name: "HASSELBLAD XCD 2,5/90V",
  subtitle: "JP 2022-99402 A Example 1 — Panasonic IP Management / Nishioka",
  specs: [
    "9 ELEMENTS / 6 GROUPS",
    "f ≈ 90.0 mm",
    "F/2.5",
    "2ω ≈ 34°",
    "2 ASPHERICAL SURFACES (1 ELEMENT)",
    "1 ED ELEMENT",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 90,
  focalLengthDesign: 90.0,
  apertureMarketing: 2.5,
  apertureDesign: 2.56,
  lensMounts: ["hasselblad-xcd"],
  imageFormat: "44x33",
  patentYear: 2022,
  elementCount: 9,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.7,
      fl: 73.9,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Front positive collector; lanthanum crown distributes converging power with moderate curvatures.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 69.7,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "ED fluorophosphate; anomalous positive ΔPgF enables secondary-spectrum reduction.",
      role: "ED crown in G1 achromatic doublet; primary chromatic corrector.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.77047,
      vd: 29.7,
      fl: -36.2,
      glass: "770297 - dense flint (patent nd=1.77047, vd=29.7, PgF=0.5951; unresolved)",
      apd: false,
      apdNote: "Patent-published PgF = 0.5951; condition (5) value = +0.0003, near the Schott normal line.",
      role: "Achromatising partner to L2 in G1 doublet; provides net-negative power for the cemented pair.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.77047,
      vd: 29.7,
      fl: 76.4,
      glass: "770297 - dense flint (patent nd=1.77047, vd=29.7, PgF=0.5951; unresolved)",
      apd: false,
      role: "Pre-stop positive converger; same glass as L3 introduces controlled chromatic contribution.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.85896,
      vd: 22.7,
      fl: 31.1,
      glass: "S-NPH4 (OHARA)",
      apd: false,
      role: "Ultra-high-dispersion positive element in focus group G2; reverse-dispersion achromatic pairing per conditions (1)–(2).",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.91082,
      vd: 35.2,
      fl: -18.4,
      glass: "911352 - ultra-high-index glass (patent nd=1.91082, vd=35.2; unresolved)",
      apd: false,
      role: "Negative element of focus doublet G2; high index per condition (3) controls aberration sensitivity during focus travel.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      fl: 29.0,
      glass: "S-LAL14 (OHARA)",
      apd: false,
      role: "Most powerful positive element; anchors G3 relay function.",
      cemented: "D3",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Neg. Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: -170.9,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Achromatising negative in G3 relay doublet; weakly negative, partial colour cancellation is deliberate.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.68863,
      vd: 31.2,
      fl: -45.8,
      glass: "L-BBH1 (OHARA)",
      apd: false,
      role: "PGM aspherical field flattener; both surfaces aspherical. Satisfies condition (7): fG3n/f = −0.51.",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    // ── G1: Front collector (L1, L2–L3 cemented, L4) ──
    { label: "1", R: 47.249, d: 6.67842, nd: 1.72916, elemId: 1, sd: 22.5 },
    { label: "2", R: 361.532, d: 0.20202, nd: 1.0, elemId: 0, sd: 22.0 },
    { label: "3", R: 36.223, d: 5.98712, nd: 1.497, elemId: 2, sd: 19.0 },
    { label: "4", R: -741.931, d: 0.01263, nd: 1.56732, elemId: 0, sd: 19.0 }, // L2–L3 cement
    { label: "5", R: -741.931, d: 1.41417, nd: 1.77047, elemId: 3, sd: 19.0 },
    { label: "6", R: 28.998, d: 4.21347, nd: 1.0, elemId: 0, sd: 20.0 },
    { label: "7", R: 40.311, d: 3.35487, nd: 1.77047, elemId: 4, sd: 18.3 },
    { label: "8", R: 123.322, d: 7.15672, nd: 1.0, elemId: 0, sd: 18.3 },

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 2.52329, nd: 1.0, elemId: 0, sd: 19.0 },

    // ── G2: Inner-focus group (L5–L6 cemented) ──
    { label: "9", R: 194.674, d: 4.02685, nd: 1.85896, elemId: 5, sd: 13.7 },
    { label: "10", R: -30.645, d: 0.01263, nd: 1.56732, elemId: 0, sd: 13.7 }, // L5–L6 cement
    { label: "11", R: -30.645, d: 0.8081, nd: 1.91082, elemId: 6, sd: 13.7 },
    { label: "12", R: 37.409, d: 15.28214, nd: 1.0, elemId: 0, sd: 18.0 },

    // ── G3: Rear relay (L7–L8 cemented, L9 aspherical) ──
    { label: "13", R: 56.176, d: 8.6344, nd: 1.6968, elemId: 7, sd: 17.3 },
    { label: "14", R: -29.539, d: 0.01263, nd: 1.56732, elemId: 0, sd: 17.3 }, // L7–L8 cement
    { label: "15", R: -29.539, d: 9.85437, nd: 1.84666, elemId: 8, sd: 17.3 },
    { label: "16", R: -42.79, d: 15.54364, nd: 1.0, elemId: 0, sd: 22.0 },
    { label: "17A", R: -20.856, d: 3.03037, nd: 1.68863, elemId: 9, sd: 17.0 },
    { label: "18A", R: -65.154, d: 15.69272, nd: 1.0, elemId: 0, sd: 17.5 },
  ],

  /* ── Aspherical coefficients ──
   *  Patent convention (¶0180): Z = h²/r / [1+√(1−(1+κ)(h/r)²)] + Σ An·h^n
   *  where κ = K (standard conic constant). Coefficients scaled from patent
   *  via An_prod = An_patent / k^(n−1) where k = 90/71.2785.
   */
  asph: {
    "17A": {
      K: -5.6767e-2,
      A4: -1.85467e-6,
      A6: 1.54979e-7,
      A8: -6.78257e-10,
      A10: 9.87536e-13,
      A12: 5.00804e-15,
      A14: -2.09469e-17,
      A16: 2.36783e-20,
    },
    "18A": {
      K: 0,
      A4: -1.32574e-5,
      A6: 1.17941e-7,
      A8: -5.75862e-10,
      A10: 1.52356e-12,
      A12: -1.88892e-15,
      A14: 4.49279e-19,
      A16: 6.90366e-22,
    },
  },

  /* ── Variable air spacings (focus) ──
   *  Inner focus: G2 (L5–L6) moves toward image.
   *  G1 and G3 fixed. Two variable gaps:
   *    STO: gap from stop to L5 front — expands during close focus.
   *    12:  gap from L6 rear to L7 front — compresses during close focus.
   *  Close-focus values computed via brentq for MFD = 0.67 m (production).
   */
  var: {
    STO: [2.52329, 11.90774],
    "12": [15.28214, 5.89769],
  },

  varLabels: [
    ["STO", "D(STO)"],
    ["12", "D12"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "8" },
    { text: "G2 (−)", fromSurface: "9", toSurface: "12" },
    { text: "G3 (+)", fromSurface: "13", toSurface: "18A" },
  ],

  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "6" },
    { text: "D2", fromSurface: "9", toSurface: "12" },
    { text: "D3", fromSurface: "13", toSurface: "16" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.67,
  focusDescription:
    "Inner focus via G2 (L5–L6 cemented doublet). G2 translates toward image during close focus; G1, stop, and G3 remain fixed. Linear stepping motor drive.",

  /* ── Aperture configuration ── */
  nominalFno: 2.5,
  fstopSeries: [2.5, 2.8, 4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  /* ── Layout tuning ── */
  scFill: 0.52,
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
