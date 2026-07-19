import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — FUJIFILM FUJINON GF 110mm f/2 R LM WR               ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2018/0100988 A1 Example 1 (Tables 1–3).         ║
 * ║  Inventor: Masato Kondo / FUJIFILM Corporation.                   ║
 * ║  Three-group inner-focus design, positive–negative–positive.      ║
 * ║  14 elements / 9 groups, 0 aspherical surfaces.                   ║
 * ║  Focus: inner focus — G2 (2-element cemented doublet) translates  ║
 * ║         toward image; G1, G3, and aperture stop fixed.            ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from paraxial marginal ray (at f/2.06 design FNO)    ║
 * ║    and chief ray (at 60% of the 14.9° half-field) with 8%        ║
 * ║    mechanical clearance. Front group SDs constrained by marginal  ║
 * ║    ray only; rear group SDs include off-axis contribution.        ║
 * ║    Cemented groups use uniform SD limited by the element with     ║
 * ║    the tightest edge-thickness constraint.                        ║
 * ║    Front element SD ≈ 28.5 mm, consistent with 77 mm filter      ║
 * ║    thread.                                                        ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE FOCUS:                                              ║
 * ║    Patent evaluates at 110 cm; production MFD is 0.9 m.          ║
 * ║    Close-focus spacings computed via brentq solver for 0.9 m,     ║
 * ║    gap sum conserved at 22.890 mm.                                ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-gf-110mm-f2",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON GF 110mm f/2 R LM WR",
  subtitle: "US 2018/0100988 A1 Example 1 — FUJIFILM / Kondo",
  specs: ["14 ELEMENTS / 9 GROUPS", "f ≈ 108.5 mm", "F/2", "2ω ≈ 29.8°", "ALL SPHERICAL — 4 ED ELEMENTS"],

  focalLengthMarketing: 110,
  focalLengthDesign: 108.47,
  apertureMarketing: 2,
  apertureDesign: 2.06,
  lensMounts: ["fujifilm-g"],
  imageFormat: "44x33",
  patentNumber: "US 2018/0100988 A1",
  patentAuthors: ["Masato Kondo"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2018,
  elementCount: 14,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.95375,
      vd: 32.32,
      fl: +161.0,
      glass: "TAFD45 (HOYA; S-LAH98 equivalent)",
      apd: false,
      role: "Front positive meniscus; high-index collector shortens total length and minimizes beam diameter entering G2.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.55032,
      vd: 75.5,
      fl: +165.3,
      glass: "FCD705 (HOYA)",
      apd: "inferred",
      apdNote: "ED fluorophosphate crown, dPgF ≈ +0.028",
      role: "ED element 1 of 4; primary chromatic corrector in G1 wide beam.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Plano-Negative",
      nd: 1.56732,
      vd: 42.81,
      fl: -87.0,
      glass: "S-TIL26 (OHARA, 567/428 high-index barium glass)",
      apd: false,
      cemented: "D1",
      role: "Negative partner of doublet D1; flat front, convex-to-object rear at cemented junction.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 39.22,
      fl: +73.8,
      glass: "H-ZLaF68L (NHG)",
      apd: false,
      cemented: "D1",
      role: "Positive partner of doublet D1; high-index meniscus carries strong convergent power in G1.",
    },
    {
      id: 5,
      name: "L15",
      label: "Element 5",
      type: "Plano-Negative",
      nd: 1.6398,
      vd: 34.49,
      fl: -48.1,
      glass: "S-TIM27 (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Negative partner of doublet D2; Δνd = 41.0 with L16 drives Conditional Expression (10).",
    },
    {
      id: 6,
      name: "L16",
      label: "Element 6",
      type: "Plano-Convex Positive",
      nd: 1.55032,
      vd: 75.5,
      fl: +55.9,
      glass: "FCD705 (HOYA)",
      apd: "inferred",
      apdNote: "ED fluorophosphate crown, dPgF ≈ +0.028",
      cemented: "D2",
      role: "ED element 2 of 4; strongest individual positive power in G1, shapes exit cone before stop.",
    },
    {
      id: 7,
      name: "L21",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.95906,
      vd: 17.47,
      fl: +90.0,
      glass: "S-NPH3 (OHARA)",
      apd: false,
      cemented: "G2",
      role: "Focus group front; ultra-dispersive dense flint meniscus concave to object. Shape factor governed by Conditional Expression (1).",
    },
    {
      id: 8,
      name: "L22",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.8515,
      vd: 40.78,
      fl: -34.7,
      glass: "S-LAH89 (OHARA)",
      apd: false,
      cemented: "G2",
      role: "Focus group rear; dominant negative power of G2. Two-element cemented doublet keeps focusing mass low for fast linear-motor AF.",
    },
    {
      id: 9,
      name: "L31",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.55032,
      vd: 75.5,
      fl: +85.1,
      glass: "FCD705 (HOYA)",
      apd: "inferred",
      apdNote: "ED fluorophosphate crown, dPgF ≈ +0.028",
      cemented: "D3",
      role: "ED element 3 of 4; concave-to-object meniscus opening G3, stabilizes lateral color as G2 translates.",
    },
    {
      id: 10,
      name: "L32",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.68893,
      vd: 31.16,
      fl: -93.4,
      glass: "E-FD8 (HOYA)",
      apd: false,
      cemented: "D3",
      role: "Flint partner of nearly afocal doublet D3; primarily chromatic correction behind focus group.",
    },
    {
      id: 11,
      name: "L33",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      fl: +52.8,
      glass: "FCD515 (HOYA)",
      apd: "inferred",
      apdNote: "ED fluorophosphate crown, dPgF ≈ +0.019",
      cemented: "D4",
      role: "ED element 4 of 4; strongest individual positive power in G3, primary re-convergence element.",
    },
    {
      id: 12,
      name: "L34",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.61,
      fl: -54.0,
      glass: "S-TIH14 (OHARA)",
      apd: false,
      cemented: "D4",
      role: "Flint partner of D4; equiconcave symmetric radii minimize coma. Δνd = 42.0 with L33.",
    },
    {
      id: 13,
      name: "L35",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      fl: +54.3,
      glass: "TAFD55 (HOYA)",
      apd: false,
      role: "Ultra-high-index (nd=2.001) power relay in G3; HOYA TAFD55 enables gentle curvatures at strong power.",
    },
    {
      id: 14,
      name: "L36",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.21,
      fl: -95.3,
      glass: "S-BSL7 (OHARA)",
      apd: false,
      role: "Rear field flattener; concave-to-object meniscus improves Petzval sum and corrects astigmatism and distortion (¶0090).",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    /* ── Group G1 (L11–L16) ── */
    { label: "1", R: 98.0201, d: 3.95, nd: 1.95375, elemId: 1, sd: 28.5 },
    { label: "2", R: 265.8358, d: 0.1, nd: 1.0, elemId: 0, sd: 28.0 },
    { label: "3", R: 106.1474, d: 5.32, nd: 1.55032, elemId: 2, sd: 28.0 },
    { label: "4", R: -625.6445, d: 0.36, nd: 1.0, elemId: 0, sd: 27.0 },
    { label: "5", R: 1e15, d: 1.73, nd: 1.56732, elemId: 3, sd: 25.5 },
    { label: "6", R: 49.383, d: 5.98, nd: 1.883, elemId: 4, sd: 25.5 },
    { label: "7", R: 192.1886, d: 1.49, nd: 1.0, elemId: 0, sd: 25.5 },
    { label: "8", R: 1e15, d: 1.7, nd: 1.6398, elemId: 5, sd: 22.0 },
    { label: "9", R: 30.778, d: 10.1, nd: 1.55032, elemId: 6, sd: 22.0 },
    { label: "10", R: 1e15, d: 6.01, nd: 1.0, elemId: 0, sd: 22.0 },

    /* ── Aperture stop ── */
    { label: "STO", R: 1e15, d: 4.7, nd: 1.0, elemId: 0, sd: 19.5 },

    /* ── Group G2 (L21–L22, focus group) ── */
    { label: "12", R: -380.4254, d: 3.07, nd: 1.95906, elemId: 7, sd: 19.0 },
    { label: "13", R: -70.629, d: 1.22, nd: 1.8515, elemId: 8, sd: 19.0 },
    { label: "14", R: 51.2612, d: 18.19, nd: 1.0, elemId: 0, sd: 19.0 },

    /* ── Group G3 (L31–L36) ── */
    { label: "15", R: -230.3817, d: 5.18, nd: 1.55032, elemId: 9, sd: 20.0 },
    { label: "16", R: -39.23, d: 1.63, nd: 1.68893, elemId: 10, sd: 20.0 },
    { label: "17", R: -102.2608, d: 0.1, nd: 1.0, elemId: 0, sd: 20.0 },
    { label: "18", R: 48.4494, d: 8.75, nd: 1.59282, elemId: 11, sd: 22.0 },
    { label: "19", R: -82.654, d: 1.8, nd: 1.76182, elemId: 12, sd: 22.0 },
    { label: "20", R: 82.654, d: 9.96, nd: 1.0, elemId: 0, sd: 22.0 },
    { label: "21", R: 119.8382, d: 7.04, nd: 2.001, elemId: 13, sd: 25.5 },
    { label: "22", R: -96.6341, d: 19.51, nd: 1.0, elemId: 0, sd: 25.5 },
    { label: "23", R: -37.7586, d: 1.47, nd: 1.5168, elemId: 14, sd: 21.0 },
    { label: "24", R: -163.9992, d: 26.97, nd: 1.0, elemId: 0, sd: 21.0 },
  ],

  /* ── Aspherical coefficients (none — all-spherical design) ── */
  asph: {},

  /* ── Variable air spacings (inner focus) ──
   *  G2 translates toward image during focus; gap sum conserved at 22.890 mm.
   *  Close-focus spacings computed for production MFD = 0.9 m via paraxial solve.
   */
  var: {
    STO: [4.7, 15.88],
    "14": [18.19, 7.01],
  },
  varLabels: [
    ["STO", "D(G1–G2)"],
    ["14", "D(G2–G3)"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "10" },
    { text: "G2 (−) FOCUS", fromSurface: "12", toSurface: "14" },
    { text: "G3 (+)", fromSurface: "15", toSurface: "24" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D(G2)", fromSurface: "12", toSurface: "14" },
    { text: "D3", fromSurface: "15", toSurface: "17" },
    { text: "D4", fromSurface: "18", toSurface: "20" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.9,
  focusDescription:
    "Inner focus — only G2 (L21+L22 cemented doublet) translates toward image. G1, G3, and aperture stop fixed. Linear motor (LM) drive.",

  /* ── Aperture configuration ── */
  nominalFno: 2,
  apertureBlades: 9,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.52,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
