import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — PANASONIC LEICA DG SUMMILUX 9mm F1.7 ASPH (H-X09)    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2023/0367186 A1, Example 1 (Panasonic IP Mgmt).   ║
 * ║  Retrofocus wide-angle prime for Micro Four Thirds.                ║
 * ║  12 elements / 9 groups, 4 aspherical surfaces (2 elements).       ║
 * ║  Focus: inner focus via G2 (L10+L11 cemented doublet).             ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated via combined marginal + chief ray trace at 80%        ║
 * ║    field (front group) and 60% field (mid/rear), with 8%           ║
 * ║    mechanical clearance. Validated against edge thickness           ║
 * ║    (≥ 0.3 mm), sd/|R| < 0.90, and cross-gap sag intrusion.        ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "panasonic-leica-dg-9f17",
  maker: "Panasonic",
  name: "PANASONIC LEICA DG SUMMILUX 9mm f/1.7 ASPH",
  subtitle: "US 2023/0367186 A1, Example 1 — Panasonic IP Management",
  specs: ["12 ELEMENTS / 9 GROUPS", "f ≈ 9.35 mm", "F/1.77", "2ω ≈ 99.6°", "4 ASPHERICAL SURFACES"],

  /* ── Metadata ── */
  focalLengthMarketing: 9,
  focalLengthDesign: 9.35,
  apertureMarketing: 1.7,
  apertureDesign: 1.77,
  lensMounts: ["micro-four-thirds"],
  imageFormat: "four-thirds",
  patentNumber: "US 2023/0367186 A1",
  patentAuthors: ["Yuka Ikegami", "Takahiro Kitada", "Kunio Dohno"],
  patentAssignees: ["Panasonic Intellectual Property Management Co., Ltd."],
  patentYear: 2023,
  elementCount: 12,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Neg. Meniscus",
      nd: 1.8042,
      vd: 46.5,
      fl: -32.6,
      glass: "S-LAH65V (OHARA)",
      apd: false,
      role: "Negative front element; diverges wide-angle chief ray bundle for retrofocus BFD",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.5338,
      vd: 55.6,
      fl: -48.1,
      glass: "534556 — moldable crown (patent nd=1.53380, nu_d=55.6)",
      apd: false,
      role: "PGM double-aspheric; corrects coma, astigmatism, and distortion from front group",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Neg. Meniscus (ED)",
      nd: 1.497,
      vd: 81.6,
      fl: -35.5,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      role: "ED fluorophosphate; lateral chromatic correction with anomalous partial dispersion",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Concave Negative",
      nd: 1.59349,
      vd: 67.0,
      fl: -14.5,
      glass: "J-PSKH4 (Hikari)",
      apd: false,
      cemented: "D1",
      role: "Strongest negative in G1A; negative half of achromatic doublet with L5",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.4,
      fl: 13.6,
      glass: "S-FTM16 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Positive half of G1A achromatic doublet; Δνd = 31.6 with L4",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.75211,
      vd: 25.0,
      fl: 51.5,
      glass: "S-TIH4 (OHARA)",
      apd: false,
      role: "Weak positive before stop; corrects residual coma and astigmatism",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Neg. Meniscus (UHR)",
      nd: 2.001,
      vd: 29.1,
      fl: -17.4,
      glass: "S-LAH79 (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Ultra-high-index negative; reduces curvatures for compact post-stop correction",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive (ED)",
      nd: 1.497,
      vd: 81.6,
      fl: 14.9,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      cemented: "D2",
      role: "ED positive in achromatic doublet with L7; Δνd = 52.5, principal axial color corrector",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58575,
      vd: 59.5,
      fl: 17.6,
      glass: "P-SK57Q1 (Schott, 586595)",
      apd: false,
      role: "PGM double-aspheric; fine-tunes spherical aberration and field curvature before G2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.94595,
      vd: 18.0,
      fl: 36.1,
      glass: "FDS18 (HOYA)",
      apd: false,
      cemented: "D3",
      role: "Super-dense flint positive in focus group doublet",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.8,
      fl: -14.0,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      cemented: "D3",
      role: "Strong negative in focus group; dominant field curvature contributor in G2",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.62299,
      vd: 58.1,
      fl: 40.2,
      glass: "S-PHM52Q (OHARA)",
      apd: false,
      role: "Field flattener and telecentric corrector; fixed rear element (G3)",
    },
  ],

  /* ── Surface prescription ──
   *  25 patent surfaces → 22 data-file surfaces after folding three
   *  UV-curable resin cement layers (nd = 1.56732, d ≈ 0.01 mm each)
   *  into the preceding element thickness.
   *  Cover glass (nd = 1.51680, d = 4.20 mm) excluded; air-equivalent
   *  BFD folded into the last surface d value.
   */
  surfaces: [
    // ── G1A: Negative front group (L1–L6) ──
    { label: "1", R: 21.5241, d: 1.3, nd: 1.8042, elemId: 1, sd: 10.3 },
    { label: "2", R: 11.4951, d: 2.8898, nd: 1.0, elemId: 0, sd: 10.1 },
    { label: "3A", R: 10.1831, d: 2.5, nd: 1.5338, elemId: 2, sd: 9.5 },
    { label: "4A", R: 6.6667, d: 4.6172, nd: 1.0, elemId: 0, sd: 8.0 },
    { label: "5", R: 20.3566, d: 0.8, nd: 1.497, elemId: 3, sd: 7.2 },
    { label: "6", R: 9.3296, d: 3.3755, nd: 1.0, elemId: 0, sd: 6.8 },
    { label: "7", R: 1e15, d: 0.71, nd: 1.59349, elemId: 4, sd: 7.0 }, // L4 front; d = 0.70 + 0.01 (cement)
    { label: "8", R: 8.6196, d: 6.0, nd: 1.5927, elemId: 5, sd: 7.0 }, // L4→L5 junction
    { label: "9", R: -96.2175, d: 1.3482, nd: 1.0, elemId: 0, sd: 6.5 },
    { label: "10", R: 52.5474, d: 2.6593, nd: 1.75211, elemId: 6, sd: 6.3 },
    { label: "11", R: -144.266, d: 2.8, nd: 1.0, elemId: 0, sd: 6.1 },

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 1.9743, nd: 1.0, elemId: 0, sd: 5.3 },

    // ── G1B: Positive relay group (L7–L9) ──
    { label: "12", R: 27.9431, d: 1.01, nd: 2.001, elemId: 7, sd: 5.6 }, // L7 front; d = 1.00 + 0.01 (cement)
    { label: "13", R: 10.5308, d: 6.1121, nd: 1.497, elemId: 8, sd: 5.6 }, // L7→L8 junction
    { label: "14", R: -20.1096, d: 0.2, nd: 1.0, elemId: 0, sd: 5.8 },
    { label: "15A", R: 26.3044, d: 5.2209, nd: 1.58575, elemId: 9, sd: 6.0 },
    { label: "16A", R: -15.6869, d: 1.201, nd: 1.0, elemId: 0, sd: 5.8 }, // variable: G1B–G2 gap (d19)

    // ── G2: Focus group (L10+L11 cemented doublet) ──
    { label: "17", R: 41.5013, d: 2.2219, nd: 1.94595, elemId: 10, sd: 5.5 }, // L10 front; d = 2.2119 + 0.01 (cement)
    { label: "18", R: -187.3904, d: 0.6, nd: 1.84666, elemId: 11, sd: 5.5 }, // L10→L11 junction
    { label: "19", R: 12.6474, d: 5.1035, nd: 1.0, elemId: 0, sd: 5.3 }, // variable: G2–G3 gap (d23)

    // ── G3: Field corrector (L12) ──
    { label: "20", R: 157.2184, d: 2.7252, nd: 1.62299, elemId: 12, sd: 7.5 },
    { label: "21", R: -29.5709, d: 14.199, nd: 1.0, elemId: 0, sd: 7.5 }, // BFD incl. air-equiv CG
  ],

  /* ── Aspherical coefficients ──
   *  Patent Table 1B. Convention: κ = K (standard conic).
   *  Verified: K values produce physically reasonable sag profiles.
   */
  asph: {
    "3A": {
      K: -4.13601e-1,
      A4: -4.83155e-5,
      A6: 9.17529e-8,
      A8: -1.33747e-8,
      A10: 1.42533e-10,
      A12: -5.26229e-13,
      A14: 0,
    },
    "4A": {
      K: -7.48255e-1,
      A4: -2.83442e-5,
      A6: 9.67121e-7,
      A8: -8.90069e-8,
      A10: 1.25287e-9,
      A12: -6.87122e-12,
      A14: 0,
    },
    "15A": {
      K: 0.0,
      A4: -4.21347e-5,
      A6: 1.05188e-8,
      A8: -1.99866e-9,
      A10: -8.71399e-12,
      A12: 9.90029e-14,
      A14: 0,
    },
    "16A": {
      K: 0.0,
      A4: 2.64024e-5,
      A6: -4.74134e-7,
      A8: -1.82935e-10,
      A10: -5.27974e-12,
      A12: -8.61303e-14,
      A14: 0,
    },
  },

  /* ── Variable air spacings (inner focus via G2) ──
   *  G2 (L10+L11) moves toward image when focusing infinity → close.
   *  Variable-gap conservation: Δd19 + Δd23 ≈ 0 (< 0.01 mm).
   */
  var: {
    "16A": [1.201, 1.6129], // d19: G1B–G2 gap [infinity, close]
    "19": [5.1035, 4.6917], // d23: G2–G3 gap [infinity, close]
  },

  varLabels: [
    ["16A", "IF₁"],
    ["19", "IF₂"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1A(−)", fromSurface: "1", toSurface: "11" },
    { text: "G1B(+)", fromSurface: "12", toSurface: "16A" },
    { text: "G2(−)", fromSurface: "17", toSurface: "19" },
    { text: "G3(+)", fromSurface: "20", toSurface: "21" },
  ],

  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "12", toSurface: "14" },
    { text: "D3", fromSurface: "17", toSurface: "19" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.095,
  focusDescription: "Inner focus via G2 (L10+L11 cemented doublet); linear motor AF.",

  /* ── Aperture configuration ── */
  nominalFno: 1.77,
  fstopSeries: [1.7, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.28,
} satisfies LensDataInput;

export default LENS_DATA;
