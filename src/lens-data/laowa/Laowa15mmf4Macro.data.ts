import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Venus Laowa 15mm f/4 Wide Angle 1:1 Macro            ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: CN 205427291 U, Example 2 (Anhui ChangGeng Optical  ║
 * ║  / Venus Optics, inventor Zhang Xiaohua).                          ║
 * ║  Retrofocus ultra-wide-angle macro, all-spherical design.          ║
 * ║  12 elements / 9 groups, 0 aspherical surfaces.                   ║
 * ║  Focus: Dual-group floating (SF + MF both move toward object).    ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f = 16.00 mm; production marketed at 15 mm.           ║
 * ║    Prescription transcribed at patent scale (no scaling applied).  ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                          ║
 * ║    Patent does not list SDs. Estimated via combined marginal +     ║
 * ║    chief ray trace at ~60% field with ~8% mechanical clearance,    ║
 * ║    validated against edge thickness ≥ 0.3 mm, cross-gap sag       ║
 * ║    intrusion ≤ 90%, sd/|R| < 0.90, and element SD ratio ≤ 3.0.   ║
 * ║    Front element (S1) constrained by 77 mm filter thread.         ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "laowa-15f4-macro",
  maker: "Laowa",
  name: "LAOWA 15mm f/4 Wide Angle 1:1 Macro",
  subtitle: "CN 205427291 U Example 2 — Anhui ChangGeng / Zhang Xiaohua",
  specs: ["12 ELEMENTS / 9 GROUPS", "f = 16.00 mm", "F/4.1", "2ω = 110.4°", "ALL SPHERICAL"],

  /* ── Metadata ── */
  focalLengthMarketing: 15,
  focalLengthDesign: 16.0,
  apertureMarketing: 4,
  apertureDesign: 4.1,
  lensMounts: ["canon-ef", "nikon-f", "sony-a", "sony-fe", "pentax-k"],
  imageFormat: "135-full-frame",
  patentNumber: "CN 205427291 U",
  patentAuthors: ["Xiaohua Zhang"],
  patentAssignees: ["ANHUI CHANGGENG OPTICAL TECHNOLOGY Co Ltd"],
  patentYear: 2016,
  elementCount: 12,
  groupCount: 9,
  apertureBlades: 14,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.62,
      fl: 177.6,
      glass: "H-LAK7 (CDGM)",
      apd: false,
      role: "Front lanthanum crown meniscus; collects wide-angle beam (2ω = 110°) with minimal reflection loss",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.25,
      fl: -29.1,
      glass: "H-ZLAF2 (CDGM)",
      apd: false,
      role: "Strong negative meniscus; first element establishing retrofocus divergence; high index minimizes curvatures",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.31,
      fl: -17.9,
      glass: "S-LAH95 / TAFD25 class (904313)",
      apd: false,
      role: "Strongest negative element; with L1–L2 forms sub-group f ≈ −11.2 mm for retrofocus BFD extension",
    },
    {
      id: 4,
      name: "L4a",
      label: "Element 4a",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      fl: 23.4,
      glass: "H-ZF52 (CDGM)",
      apd: false,
      cemented: "D1",
      role: "Positive flint in inverted doublet; unconventional flint-positive / crown-negative pairing flips chromatic sign",
    },
    {
      id: 5,
      name: "L4b",
      label: "Element 4b",
      type: "Negative Meniscus",
      nd: 1.72916,
      vd: 54.67,
      fl: -15.4,
      glass: "H-LAK5A (CDGM)",
      apd: false,
      cemented: "D1",
      role: "Negative crown in inverted doublet; net doublet f ≈ −48.3 mm counterbalances L2–L3 overcorrection",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.90366,
      vd: 31.31,
      fl: 124.7,
      glass: "S-LAH95 / TAFD25 class (904313)",
      apd: false,
      role: "Thick (8 mm) weakly positive high-index element; shifts principal planes and fine-tunes higher-order aberrations",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.44,
      fl: 25.1,
      glass: "H-QK3L (CDGM)",
      apd: false,
      role: "Strongest positive singlet in SF group; ED fluoride crown provides collecting power with minimal chromatic spread",
    },
    {
      id: 8,
      name: "L7a",
      label: "Element 7a",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.2,
      fl: 15.9,
      glass: "H-K9L (CDGM)",
      apd: false,
      cemented: "D2",
      role: "Positive crown in classical achromatic doublet; controls chromatic coma and lateral color after the stop",
    },
    {
      id: 9,
      name: "L7b",
      label: "Element 7b",
      type: "Negative Meniscus",
      nd: 1.8042,
      vd: 46.5,
      fl: -9.6,
      glass: "H-LAF3 (CDGM)",
      apd: false,
      cemented: "D2",
      role: "Negative flint in achromatic doublet; net doublet f ≈ −34.7 mm provides chromatically corrected divergence",
    },
    {
      id: 10,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.64769,
      vd: 33.84,
      fl: 16.6,
      glass: "H-ZF1 (CDGM)",
      apd: false,
      role: "Primary positive power in MF group; flint glass chosen to balance overcorrecting chromatic contributions of L7 and L9",
    },
    {
      id: 11,
      name: "L9a",
      label: "Element 9a",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.31,
      fl: -14.7,
      glass: "S-LAH95 / TAFD25 class (904313)",
      apd: false,
      cemented: "D3",
      role: "Negative high-index flint in final achromatic doublet; with L9b forms rear corrector for lateral color and field curvature",
    },
    {
      id: 12,
      name: "L9b",
      label: "Element 9b",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.44,
      fl: 17.7,
      glass: "H-QK3L (CDGM)",
      apd: false,
      cemented: "D3",
      role: "Positive ED crown in final doublet; net doublet f ≈ −161 mm provides field flattening near image plane",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    /* --- SF group: L1–L6 (surfaces 1–13) --- */
    { label: "1", R: 51.1838, d: 3.9185, nd: 1.7725, elemId: 1, sd: 27.5 }, // L1 front
    { label: "2", R: 78.9199, d: 0.15, nd: 1.0, elemId: 0, sd: 23.0 }, // L1 rear → air
    { label: "3", R: 24.9469, d: 1.35, nd: 1.91082, elemId: 2, sd: 12.5 }, // L2 front
    { label: "4", R: 12.5294, d: 5.1363, nd: 1.0, elemId: 0, sd: 11.0 }, // L2 rear → air
    { label: "5", R: 28.226, d: 1.2, nd: 1.90366, elemId: 3, sd: 9.2 }, // L3 front
    { label: "6", R: 10.0604, d: 4.9375, nd: 1.0, elemId: 0, sd: 8.0 }, // L3 rear → air
    { label: "7", R: 212.9888, d: 3.4261, nd: 1.84666, elemId: 4, sd: 10.5 }, // L4a front (D1)
    { label: "8", R: -21.6379, d: 1.2, nd: 1.72916, elemId: 5, sd: 10.0 }, // L4a→L4b cemented junction (D1)
    { label: "9", R: 23.9034, d: 1.9663, nd: 1.0, elemId: 0, sd: 9.0 }, // L4b rear → air
    { label: "10", R: 230.1139, d: 8.0, nd: 1.90366, elemId: 6, sd: 9.0 }, // L5 front
    { label: "11", R: -217.2471, d: 0.15, nd: 1.0, elemId: 0, sd: 9.0 }, // L5 rear → air
    { label: "12", R: 60.1975, d: 6.0436, nd: 1.48749, elemId: 7, sd: 9.0 }, // L6 front
    { label: "13", R: -14.8819, d: 10.7961, nd: 1.0, elemId: 0, sd: 8.5 }, // L6 rear → air (variable D13)

    /* --- MF group: Stop + L7–L9 (surfaces 14–22) --- */
    { label: "STO", R: 1e15, d: 1.3985, nd: 1.0, elemId: 0, sd: 5.44 }, // Aperture stop (14-blade)
    { label: "15", R: 24.1927, d: 6.0736, nd: 1.5168, elemId: 8, sd: 6.6 }, // L7a front (D2)
    { label: "16", R: -11.4249, d: 3.4204, nd: 1.8042, elemId: 9, sd: 7.5 }, // L7a→L7b cemented junction (D2)
    { label: "17", R: 27.1687, d: 0.15, nd: 1.0, elemId: 0, sd: 8.0 }, // L7b rear → air
    { label: "18", R: 21.6812, d: 3.7905, nd: 1.64769, elemId: 10, sd: 8.0 }, // L8 front
    { label: "19", R: -19.7942, d: 0.15, nd: 1.0, elemId: 0, sd: 8.0 }, // L8 rear → air
    { label: "20", R: 597.5644, d: 1.2, nd: 1.90366, elemId: 11, sd: 8.0 }, // L9a front (D3)
    { label: "21", R: 12.9398, d: 5.4309, nd: 1.48749, elemId: 12, sd: 8.5 }, // L9a→L9b cemented junction (D3)
    { label: "22", R: -22.1709, d: 38.8967, nd: 1.0, elemId: 0, sd: 9.0 }, // L9b rear → air (variable BFD)
  ],

  /* ── Aspherical coefficients — all-spherical design ── */
  asph: {},

  /* ── Variable air spacings (dual-group floating focus) ──
   *  D(13): SF group rear to aperture stop — decreases during macro focus.
   *  D(22): BFD — increases during macro focus.
   *  SF travel = 2.711 mm toward object.
   *  MF travel = 12.406 mm toward object.
   *  Patent max magnification: 0.7836×; production extends to 1:1.
   */
  var: {
    "13": [10.7961, 1.1015],
    "22": [38.8967, 51.3022],
  },

  varLabels: [
    ["13", "D13"],
    ["22", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "SF", fromSurface: "1", toSurface: "13" },
    { text: "MF", fromSurface: "STO", toSurface: "22" },
  ],

  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
    { text: "D3", fromSurface: "20", toSurface: "22" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.122,
  focusDescription:
    "Dual-group floating focus: SF (L1–L6) moves 2.71 mm and MF (stop + L7–L9) moves 12.41 mm toward object. " +
    "Patent max 0.78×; production extends to 1:1 at MFD 0.122 m (~5 mm working distance).",

  /* ── Aperture configuration ── */
  nominalFno: 4.1,
  fstopSeries: [4, 5.6, 8, 11, 16, 22, 32],

  /* ── Layout tuning ── */
  scFill: 0.45,
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
