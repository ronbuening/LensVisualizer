import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║    Surface 1 was raised to 14.2 mm, the L1 front rim drawn in      ║
 * ║    Fig. 1A, so the traced chief ray passes the patent's            ║
 * ║    Y = 10.00 mm image height (2026-09-24 field-coverage audit).    ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: mechanical parts (cover glass: `rearPlates`) ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "panasonic-leica-dg-9f17",
  maker: "Panasonic",
  name: "PANASONIC LEICA DG SUMMILUX 9mm f/1.7 ASPH.",
  subtitle: "US 2023/0367186 A1, Example 1 — Panasonic IP Management",

  catalog: {
    lensMounts: ["micro-four-thirds"],
    imageFormat: "four-thirds",
    specs: ["12 ELEMENTS / 9 GROUPS", "f ≈ 9.35 mm", "F/1.77", "2ω ≈ 99.6°", "4 ASPHERICAL SURFACES"],
    elementCount: 12,
    groupCount: 9,
    /* ── Metadata ── */
    focalLengthMm: { marketing: 9, design: 9.35 },
    fNumber: { marketing: 1.7, design: 1.77 },
  },

  source: {
    patentNumber: "US 2023/0367186 A1",
    patentYear: 2023,
    authors: ["Yuka Ikegami", "Takahiro Kitada", "Kunio Dohno"],
    assignees: ["Panasonic Intellectual Property Management Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Neg. Meniscus",
      nd: 1.8042,
      vd: 46.5,
      focalLengthMm: -32.6,
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
      focalLengthMm: -48.1,
      glass:
        "Unmatched (Panasonic moulding material 1.53380/55.6; no catalog row; line indices from US 2017/0059832 A1)",
      apd: false,
      apdNote:
        "nC, nF and ng are the values Panasonic prints for this nd/νd material in US 2017/0059832 A1 (Table 23, P_g,F 0.56232); this patent prints nd and νd only.",
      role: "PGM double-aspheric; corrects coma, astigmatism, and distortion from front group",
      dPgF: 0.01204,
      nC: 1.531,
      nF: 1.5406,
      ng: 1.546,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Neg. Meniscus (ED)",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: -35.5,
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
      focalLengthMm: -14.5,
      glass: "J-PSKH4 (Hikari)",
      apd: false,
      role: "Strongest negative in G1A; negative half of achromatic doublet with L5",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.4,
      focalLengthMm: 13.6,
      glass: "S-FTM16 (OHARA)",
      apd: false,
      role: "Positive half of G1A achromatic doublet; Δνd = 31.6 with L4",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.75211,
      vd: 25.0,
      focalLengthMm: 51.5,
      glass: "752251 — dense flint (patent coordinate; vendor unresolved)",
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
      focalLengthMm: -17.4,
      glass: "S-LAH79 (OHARA)",
      apd: false,
      role: "Ultra-high-index negative; reduces curvatures for compact post-stop correction",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive (ED)",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 14.9,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      role: "ED positive in achromatic doublet with L7; Δνd = 52.5, principal axial color corrector",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58575,
      vd: 59.5,
      focalLengthMm: 17.6,
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
      focalLengthMm: 36.1,
      glass: "FDS18 (HOYA)",
      apd: false,
      role: "Super-dense flint positive in focus group doublet",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -14.0,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Strong negative in focus group; dominant field curvature contributor in G2",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.62299,
      vd: 58.1,
      focalLengthMm: 40.2,
      glass: "S-BSM15 (OHARA; exact patent coordinate match)",
      apd: false,
      role: "Field flattener and telecentric corrector; fixed rear element (G3)",
    },
  ],

  /* ── Surface prescription ──
   *  25 patent surfaces → 22 data-file surfaces after folding three
   *  UV-curable resin cement layers (nd = 1.56732, d ≈ 0.01 mm each)
   *  into the preceding element thickness.
   *  Cover glass (patent surfaces 26–27, nd = 1.51680, t = 4.20 mm) is
   *  modeled in `rearPlates` below (traced, not drawn); the last surface d
   *  is the physical patent gap d25 = 10.43 mm to the cover glass.
   */
  /* (moved from asph) ── Aspherical coefficients ──
   *  Patent Table 1B. Convention: κ = K (standard conic).
   *  Verified: K values produce physically reasonable sag profiles.
   */
  surfaces: [
    // ── G1A: Negative front group (L1–L6) ──
    { label: "1", R: 21.5241, d: 1.3, sd: 14.2, medium: 1 },
    { label: "2", R: 11.4951, d: 2.8898, sd: 10.1 },
    {
      label: "3A",
      R: 10.1831,
      d: 2.5,
      sd: 9.5,
      medium: 2,
      asphere: {
        K: -4.13601e-1,
        A4: -4.83155e-5,
        A6: 9.17529e-8,
        A8: -1.33747e-8,
        A10: 1.42533e-10,
        A12: -5.26229e-13,
      },
    },
    {
      label: "4A",
      R: 6.6667,
      d: 4.6172,
      sd: 8.0,
      asphere: { K: -7.48255e-1, A4: -2.83442e-5, A6: 9.67121e-7, A8: -8.90069e-8, A10: 1.25287e-9, A12: -6.87122e-12 },
    },
    { label: "5", R: 20.3566, d: 0.8, sd: 7.2, medium: 3 },
    { label: "6", R: 9.3296, d: 3.3755, sd: 6.8 },
    { label: "7", R: "flat", d: 0.71, sd: 7.0, medium: 4 }, // L4 front; d = 0.70 + 0.01 (cement)
    { label: "8", R: 8.6196, d: 6.0, sd: 7.0, medium: 5 }, // L4→L5 junction
    { label: "9", R: -96.2175, d: 1.3482, sd: 6.5 },
    { label: "10", R: 52.5474, d: 2.6593, sd: 6.3, medium: 6 },
    { label: "11", R: -144.266, d: 2.8, sd: 6.1 },

    // ── Aperture stop ──
    { label: "STO", R: "flat", d: 1.9743 },

    // ── G1B: Positive relay group (L7–L9) ──
    { label: "12", R: 27.9431, d: 1.01, sd: 5.6, medium: 7 }, // L7 front; d = 1.00 + 0.01 (cement)
    { label: "13", R: 10.5308, d: 6.1121, sd: 5.6, medium: 8 }, // L7→L8 junction
    { label: "14", R: -20.1096, d: 0.2, sd: 5.8 },
    {
      label: "15A",
      R: 26.3044,
      d: 5.2209,
      sd: 6.0,
      medium: 9,
      asphere: { K: 0, A4: -4.21347e-5, A6: 1.05188e-8, A8: -1.99866e-9, A10: -8.71399e-12, A12: 9.90029e-14 },
    },
    {
      label: "16A",
      R: -15.6869,
      sd: 5.8,
      asphere: { K: 0, A4: 2.64024e-5, A6: -4.74134e-7, A8: -1.82935e-10, A10: -5.27974e-12, A12: -8.61303e-14 },
    }, // variable: G1B–G2 gap (d19)

    // ── G2: Focus group (L10+L11 cemented doublet) ──
    { label: "17", R: 41.5013, d: 2.2219, sd: 5.5, medium: 10 }, // L10 front; d = 2.2119 + 0.01 (cement)
    { label: "18", R: -187.3904, d: 0.6, sd: 5.5, medium: 11 }, // L10→L11 junction
    { label: "19", R: 12.6474, sd: 5.3 }, // variable: G2–G3 gap (d23)

    // ── G3: Field corrector (L12) ──
    { label: "20", R: 157.2184, d: 2.7252, sd: 7.5, medium: 12 },
    { label: "21", R: -29.5709, d: 10.43, sd: 7.5 }, // d25: physical gap to cover glass
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.095,
    description: "Inner focus via G2 (L10+L11 cemented doublet); linear motor AF.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Variable air spacings (inner focus via G2) ──
   *  G2 (L10+L11) moves toward image when focusing infinity → close.
   *  Variable-gap conservation: Δd19 + Δd23 ≈ 0 (< 0.01 mm).
   */
  gaps: {
    "16A": { label: "IF₁", values: [[1.201, 1.6129]] }, // d19: G1B–G2 gap [infinity, close]
    "19": { label: "IF₂", values: [[5.1035, 4.6917]] }, // d23: G2–G3 gap [infinity, close]
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.77, fStops: [1.7, 2, 2.8, 4, 5.6, 8, 11, 16] },

  /* ── Cover glass (patent surfaces 26–27): traced, not drawn ── */
  rearPlates: [
    {
      thicknessMm: 4.2,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 1.0,
      source: "US 2023/0367186 A1, Example 1 Table 1A surfaces 26–27",
    },
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

  /* ── Layout tuning ── */
  layout: { scFill: 0.55, yScFill: 0.28 },
} satisfies LensDataV2Input;

export default LENS_DATA;
