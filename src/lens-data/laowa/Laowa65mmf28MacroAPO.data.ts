import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — LAOWA 65mm f/2.8 2× ULTRA MACRO APO     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: CN 110161666A Example 2 (安徽长庚光学科技有限公司 /   ║
 * ║    Laowa, inventor 李大勇). Filed 2019-05-20.               ║
 * ║  All-spherical inner-focus macro prime for APS-C mirrorless.       ║
 * ║  14 elements / 10 groups, 0 aspherical surfaces.                  ║
 * ║  3 ED elements (H-FK61 class).                                    ║
 * ║  Focus: inner focus — G2 (L3–L9) moves forward, G1 & G3 fixed.   ║
 * ║  Travel: 35.0 mm from infinity to 1.95× magnification.            ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs. Estimated via combined marginal +     ║
 * ║    chief ray trace at 60% field (ω = 7.3°) with 8% mechanical     ║
 * ║    clearance, then constrained by edge-thickness ≥ 0.3 mm,        ║
 * ║    sd/|R| < 0.90, and cross-gap sag intrusion ≤ 90% of gap.      ║
 * ║    Front element constrained by 52 mm filter thread.              ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent surfaces 27–28 (nd = 1.51680, 2.0 mm) are sensor cover  ║
 * ║    glass; excluded per spec. Air-equivalent BFD folded onto the   ║
 * ║    final surface: 12.3 + 2.0/1.5168 + 1.0 ≈ 14.62 mm.           ║
 * ║                                                                    ║
 * ║  NOTE ON SURFACE 16 FOLD:                                          ║
 * ║    Patent lists a flat spacer surface (S16, R = 0, d = 0.2 mm)    ║
 * ║    between L9 rear and the stop. This is folded into the L9 rear  ║
 * ║    air gap: surface "15" carries d = 1.0 + 0.2 = 1.2 mm.         ║
 * ║    Post-stop surfaces renumbered 16–24 (patent 18–26).            ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "laowa-65mm-f28-macro-apo",
  maker: "Laowa",
  name: "LAOWA 65mm f/2.8 2× Ultra Macro APO",
  subtitle: "CN 110161666A EXAMPLE 2 — 安徽长庚光学科技 / LI DAYONG",
  specs: [
    "14 ELEMENTS / 10 GROUPS",
    "f ≈ 66.0 mm (design) / 65 mm (marketed)",
    "F/2.9 (design) / F/2.8 (marketed)",
    "2ω ≈ 24.3°",
    "ALL SPHERICAL",
    "3 ED ELEMENTS (H-FK61)",
    "2:1 MACRO (1.95× patent)",
  ],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 65,
  focalLengthDesign: 66.02,
  apertureMarketing: 2.8,
  apertureDesign: 2.9,
  lensMounts: ["fujifilm-x", "sony-fe", "canon-ef-m", "nikon-z", "canon-rf", "l-mount"],
  imageFormat: "aps-c",
  patentYear: 2019,
  elementCount: 14,
  groupCount: 10,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.618,
      vd: 63.39,
      fl: -156.9,
      glass: "S-PHM52 (OHARA)",
      apd: false,
      role: "Front element of G1 cemented doublet; weak negative crown for chromatic pre-correction.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.60342,
      vd: 38.01,
      fl: 142.0,
      glass: "H-QF50 (CDGM)",
      apd: false,
      role: "Rear element of G1 doublet; weak positive light flint completing the nearly afocal achromatic pair.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 53.0,
      fl: 52.3,
      glass: "Unmatched (lanthanum crown 773/530 — no exact CDGM catalog match; nearest H-LAK51 at νd ≈ 49.6)",
      apd: false,
      role: "Leading positive element of G2 focusing group; high-index quasi-plano-convex providing the first substantial converging power.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.61,
      fl: 66.7,
      glass: "H-FK61 (CDGM)",
      apd: "inferred",
      apdNote: "FK61-class fluorophosphate; anomalous partial dispersion inferred from glass family.",
      role: "First ED element; positive meniscus contributing power with minimal chromatic aberration.",
      cemented: undefined,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.46,
      fl: -11.4,
      glass: "H-ZF7LA (CDGM)",
      apd: false,
      role: "Front half of split-flint doublet D2; strongly negative with high dispersion for chromatic and Petzval correction.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 20.88,
      fl: 25.6,
      glass: "H-ZF72A (CDGM)",
      apd: false,
      role: "Rear half of split-flint doublet D2; super-dense flint exploiting partial-dispersion difference for secondary spectrum correction.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.8042,
      vd: 46.5,
      fl: -61.8,
      glass: "H-ZLAF50D (CDGM)",
      apd: false,
      role: "Front half of ED achromat D3; lanthanum dense flint providing negative power and controlled chromatic contribution.",
      cemented: "D3",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 19.3,
      glass: "H-FK61 (CDGM)",
      apd: "inferred",
      apdNote: "FK61-class fluorophosphate; strongest positive power in G2 — most tolerance-sensitive element.",
      role: "Second ED element; strongly positive biconvex completing achromat D3 for three-wavelength correction.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      fl: 57.5,
      glass: "H-ZF72A (CDGM)",
      apd: false,
      role: "Petzval corrector at G2 rear; super-dense flint used as a weak positive to flatten the field via its extreme index.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.72916,
      vd: 57.67,
      fl: -27.6,
      glass: "Unmatched (lanthanum crown 729/577 — H-LAK52 matches nd exactly but νd = 54.68, Δνd = +3.0)",
      apd: false,
      role: "First element of G3; strong negative meniscus diverging the beam for BFD extension and Petzval correction.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.61,
      fl: -14.8,
      glass: "S-TIH14 (OHARA)",
      apd: false,
      role: "Front half of split-flint doublet D4; dense flint for overcorrecting chromatic aberration in G3.",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.90366,
      vd: 31.31,
      fl: 10.9,
      glass: "S-LAH95 / TAFD25 class (904313)",
      apd: false,
      role: "Rear half of split-flint doublet D4; high-index lanthanum flint for Petzval flattening and coma correction.",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.61,
      fl: -25.1,
      glass: "H-FK61 (CDGM)",
      apd: "inferred",
      apdNote:
        "FK61-class fluorophosphate in negative role — exploits anomalous partial dispersion in opposite sign for APO correction.",
      role: "Third ED element; negative ED crown balancing the two positive ED elements (L4, L8) for apochromatic performance.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Plano-Convex Positive",
      nd: 1.51823,
      vd: 58.96,
      fl: 51.8,
      glass: "H-K8 (CDGM)",
      apd: false,
      role: "Rear field flattener; low-index crown bending marginal and chief rays to flatten the image surface near the sensor.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: Fixed front cemented doublet (L1 + L2) ──
    { label: "1", R: 131.0392, d: 1.0, nd: 1.618, elemId: 1, sd: 20.5 },
    { label: "2", R: 55.5671, d: 3.5853, nd: 1.60342, elemId: 2, sd: 20.0 },
    { label: "3", R: 154.2525, d: 36.0482, nd: 1.0, elemId: 0, sd: 19.5 }, // D(3) — variable

    // ── G2: Moving focus group (L3 – L9) ──
    { label: "4", R: 45.5262, d: 3.1741, nd: 1.7725, elemId: 3, sd: 14.0 },
    { label: "5", R: -348.9313, d: 1.26, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "6", R: 25.1847, d: 3.2661, nd: 1.497, elemId: 4, sd: 12.5 },
    { label: "7", R: 100.2668, d: 3.5733, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "8", R: -65.8922, d: 1.2, nd: 1.80518, elemId: 5, sd: 9.5 },
    { label: "9", R: 10.7033, d: 3.2025, nd: 1.92286, elemId: 6, sd: 9.0 },
    { label: "10", R: 16.7653, d: 0.15, nd: 1.0, elemId: 0, sd: 8.8 },
    { label: "11", R: 15.2, d: 1.0, nd: 1.8042, elemId: 7, sd: 8.8 },
    { label: "12", R: 11.3, d: 4.5886, nd: 1.497, elemId: 8, sd: 8.0 },
    { label: "13", R: -54.04, d: 0.15, nd: 1.0, elemId: 0, sd: 8.0 },
    { label: "14", R: 249.3084, d: 2.0293, nd: 1.92286, elemId: 9, sd: 8.5 },
    { label: "15", R: -67.1764, d: 1.2, nd: 1.0, elemId: 0, sd: 8.0 }, // 1.0 + 0.2 (folded spacer S16)

    // ── Aperture stop (moves with G2) ──
    { label: "STO", R: 1e15, d: 1.3, nd: 1.0, elemId: 0, sd: 7.3 }, // D(17) — variable

    // ── G3: Fixed rear relay group (L10 – L14) ──
    { label: "16", R: 70.696, d: 0.8, nd: 1.72916, elemId: 10, sd: 7.5 },
    { label: "17", R: 15.5978, d: 5.6256, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "18", R: -40.2688, d: 1.0, nd: 1.76182, elemId: 11, sd: 8.5 },
    { label: "19", R: 15.897, d: 6.7521, nd: 1.90366, elemId: 12, sd: 8.5 },
    { label: "20", R: -20.9235, d: 0.6129, nd: 1.0, elemId: 0, sd: 8.8 },
    { label: "21", R: -17.1788, d: 0.8, nd: 1.497, elemId: 13, sd: 8.5 },
    { label: "22", R: 46.3288, d: 6.9569, nd: 1.0, elemId: 0, sd: 9.0 },
    { label: "23", R: 26.8458, d: 7.0, nd: 1.51823, elemId: 14, sd: 10.0 },
    { label: "24", R: 1e15, d: 14.62, nd: 1.0, elemId: 0, sd: 10.0 }, // BFD (air-equivalent, cover glass folded)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (inner focus) ──
   *  G2 moves as a rigid unit; G1 and G3 fixed.
   *  D(3):  gap between G1 rear (L2) and G2 front (L3) — collapses as G2 advances.
   *  D(17): gap between stop and G3 front (L10) — opens as G2 advances.
   *  Conservation: D(3) + D(17) = 37.3482 mm at all focus positions.
   */
  var: {
    "3": [36.0482, 1.0481],
    STO: [1.3, 36.3001],
  },

  varLabels: [
    ["3", "D3 (G1–G2)"],
    ["STO", "D17 (STO–G3)"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (fixed)", fromSurface: "1", toSurface: "3" },
    { text: "G2 (focus)", fromSurface: "4", toSurface: "15" },
    { text: "G3 (fixed)", fromSurface: "16", toSurface: "24" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "11", toSurface: "13" },
    { text: "D4", fromSurface: "18", toSurface: "20" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.17,
  focusDescription:
    "Inner focus — G2 (L3–L9, 7 elements) translates 35 mm forward as a rigid unit. " +
    "G1 (L1–L2) and G3 (L10–L14) are fixed. Manual focus only, ~270° helicoid rotation. " +
    "Patent max magnification 1.95×; production rated 2:1.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.52,
  yScFill: 0.28,
} satisfies LensDataInput;

export default LENS_DATA;
