import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — FUJINON GF120mmF4 R LM OIS WR Macro                 ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2018/0059384 A1, Example 1 (Tables 1–3).        ║
 * ║  Inventor: Taiga Noda. Assignee: FUJIFILM Corporation.           ║
 * ║  Five-group macro design for GFX mirrorless medium format.        ║
 * ║  14 elements / 9 groups, 0 aspherical surfaces.                   ║
 * ║  Focus: dual-group inner focus (G2 toward image, G4 toward        ║
 * ║    object), driven by two linear motors. G3 decenters for OIS.    ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from paraxial marginal ray (F/4.12) plus chief ray   ║
 * ║    at 60% field (ω = 7.9°) with 8% mechanical clearance.         ║
 * ║    Reduced at S5/S6 and S9/S10 to satisfy cross-gap sag          ║
 * ║    intrusion ≤ 90% of gap thickness (d = 0.600 and 4.000 mm      ║
 * ║    respectively). Front-element SD well within 72 mm filter       ║
 * ║    thread constraint.                                              ║
 * ║                                                                    ║
 * ║  COVER GLASS: Excluded per spec. Patent lists a parallel plate    ║
 * ║    (PP, nd = 1.51680, d = 3.200 mm) followed by 1.022 mm air.    ║
 * ║    Air-equivalent optical path folded into final surface BFD:     ║
 * ║    36.746 + 3.200/1.51680 + 1.022 ≈ 39.878 mm.                   ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "gf-120f4-macro",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON GF 120mm f/4 R LM OIS WR Macro",
  subtitle: "US 2018/0059384 A1 Example 1 — FUJIFILM / Noda",
  specs: ["14 ELEMENTS / 9 GROUPS", "f ≈ 116.4 mm", "F/4.12", "2ω ≈ 26.4°", "3 ED ELEMENTS", "ALL SPHERICAL"],

  focalLengthMarketing: 120,
  focalLengthDesign: 116.4,
  apertureMarketing: 4.0,
  apertureDesign: 4.12,
  lensMounts: ["fujifilm-g"],
  imageFormat: "44x33",
  patentNumber: "US 2018/0059384 A1",
  patentAuthors: ["Taiga Noda"],
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
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.24,
      fl: 135.2,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Front collector; low-dispersion fluorosilicate crown with modest positive power.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      fl: 70.5,
      glass: "S-FPL51 (OHARA)",
      apd: "patent",
      apdNote: "θgF = 0.53748, ΔPgF ≈ +0.031; ED fluorophosphate crown, primary chromatic corrector (G1).",
      cemented: "D1",
      role: "ED crown in the front-group achromatic doublet; corrects primary and secondary longitudinal chromatic aberration.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.7495,
      vd: 35.28,
      fl: -41.0,
      glass: "S-NBH51 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Niobium-barium heavy flint achromatic partner to L12; the D1 doublet is net weakly negative (f ≈ −113 mm).",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.8515,
      vd: 40.78,
      fl: 62.4,
      glass: "S-LAH85V (OHARA)",
      apd: false,
      role: "High-index lanthanum meniscus; strong positive power at rear of G1, prepares beam for G2.",
    },
    {
      id: 5,
      name: "L21",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.72,
      fl: -34.9,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Primary diverger of focus group G2; strongly curved rear surface provides most of G2's negative power.",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.51742,
      vd: 52.43,
      fl: -43.3,
      glass: "S-NSL36 (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Light silicate glass in the G2 chromatic corrector doublet.",
    },
    {
      id: 7,
      name: "L23",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.8,
      vd: 29.84,
      fl: 34.2,
      glass: "S-LAH52Q (OHARA)",
      apd: false,
      cemented: "D2",
      role: "High-index lanthanum flint achromatic partner in G2; the D2 doublet is net weakly positive (f ≈ +148 mm).",
    },
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      fl: 53.5,
      glass: "S-FPL51 (OHARA)",
      apd: "patent",
      apdNote: "θgF = 0.53748, ΔPgF ≈ +0.031; ED crown in OIS group, ensures chromatic correction during decentering.",
      cemented: "D3",
      role: "ED crown in the OIS cemented doublet (= G3); strong positive power for effective image stabilization.",
    },
    {
      id: 9,
      name: "L32",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.72,
      vd: 43.69,
      fl: -100.7,
      glass: "S-LAM52 (OHARA)",
      apd: false,
      cemented: "D3",
      role: "Lanthanum flint achromatic partner in OIS group; meniscus shape controls SA and its chromatic variation during stabilization.",
    },
    {
      id: 10,
      name: "L41",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.70154,
      vd: 41.24,
      fl: 122.9,
      glass: "S-BAH27 (OHARA)",
      apd: false,
      role: "Front element of focus group G4; concave-to-object meniscus controls coma and astigmatism.",
    },
    {
      id: 11,
      name: "L42",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      fl: 61.7,
      glass: "S-FPL51 (OHARA)",
      apd: "patent",
      apdNote: "θgF = 0.53748, ΔPgF ≈ +0.031; third ED element, corrects secondary spectrum in G4.",
      cemented: "D4",
      role: "ED crown in the G4 chromatic corrector doublet; leverages anomalous partial dispersion for secondary-spectrum correction.",
    },
    {
      id: 12,
      name: "L43",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.62588,
      vd: 35.7,
      fl: -74.7,
      glass: "E-F1 (HOYA)",
      apd: false,
      cemented: "D4",
      role: "Dense flint achromatic partner to L42; the D4 doublet is net weakly positive (f ≈ +342 mm).",
    },
    {
      id: 13,
      name: "L51",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.58,
      fl: -27.6,
      glass: "S-LAH65V (OHARA)",
      apd: false,
      cemented: "D5",
      role: "Primary diverger of rear group G5; strong negative power flattens the Petzval surface and bends exit pupil rearward.",
    },
    {
      id: 14,
      name: "L52",
      label: "Element 14",
      type: "Plano-Convex Positive",
      nd: 1.834,
      vd: 37.16,
      fl: 47.3,
      glass: "S-LAH60V (OHARA)",
      apd: false,
      cemented: "D5",
      role: "High-index lanthanum flint for lateral chromatic correction; flat rear surface simplifies mounting. G5 net f ≈ −67.2 mm.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    /* ── G1: Front group (positive, f ≈ +72.8 mm) ── */
    // L11 — Biconvex Positive
    { label: "1", R: 92.1548, d: 4.75, nd: 1.48749, elemId: 1, sd: 23.0 },
    { label: "2", R: -227.30838, d: 0.15, nd: 1.0, elemId: 0, sd: 22.0 },
    // D1: L12 (ED) + L13 cemented doublet
    { label: "3", R: 45.46342, d: 6.55, nd: 1.497, elemId: 2, sd: 22.0 },
    { label: "4", R: -145.56, d: 1.3, nd: 1.7495, elemId: 3, sd: 18.0 },
    { label: "5", R: 39.0618, d: 0.6, nd: 1.0, elemId: 0, sd: 14.5 },
    // L14 — Positive Meniscus
    { label: "6", R: 47.51551, d: 3.87, nd: 1.8515, elemId: 4, sd: 14.5 },
    { label: "7", R: 429.85501, d: 3.232, nd: 1.0, elemId: 0, sd: 14.0 },

    /* ── G2: Focus group A (negative, f ≈ −49.3 mm) ── */
    // L21 — Biconcave Negative
    { label: "8", R: -204.55655, d: 1.3, nd: 1.83481, elemId: 5, sd: 13.5 },
    { label: "9", R: 34.01646, d: 4.0, nd: 1.0, elemId: 0, sd: 13.0 },
    // D2: L22 + L23 cemented doublet
    { label: "10", R: -67.3306, d: 1.31, nd: 1.51742, elemId: 6, sd: 12.5 },
    { label: "11", R: 33.76, d: 5.39, nd: 1.8, elemId: 7, sd: 12.5 },
    { label: "12", R: -133.90218, d: 20.862, nd: 1.0, elemId: 0, sd: 13.0 },

    /* ── Aperture stop ── */
    { label: "STO", R: 1e15, d: 2.0, nd: 1.0, elemId: 0, sd: 13.5 },

    /* ── G3: OIS group (positive, f ≈ +113.4 mm) ── */
    // D3: L31 (ED) + L32 cemented doublet = entire G3
    { label: "14", R: 99.97122, d: 6.45, nd: 1.497, elemId: 8, sd: 14.0 },
    { label: "15", R: -35.465, d: 1.3, nd: 1.72, elemId: 9, sd: 14.5 },
    { label: "16", R: -70.4954, d: 24.855, nd: 1.0, elemId: 0, sd: 14.5 },

    /* ── G4: Focus group B (positive, f ≈ +90.6 mm) ── */
    // L41 — Positive Meniscus, concave to object
    { label: "17", R: -120.66013, d: 2.74, nd: 1.70154, elemId: 10, sd: 17.0 },
    { label: "18", R: -50.75168, d: 1.5, nd: 1.0, elemId: 0, sd: 17.0 },
    // D4: L42 (ED) + L43 cemented doublet
    { label: "19", R: 154.14868, d: 4.98, nd: 1.497, elemId: 11, sd: 17.0 },
    { label: "20", R: -37.888, d: 1.3, nd: 1.62588, elemId: 12, sd: 16.5 },
    { label: "21", R: -202.26127, d: 26.884, nd: 1.0, elemId: 0, sd: 16.5 },

    /* ── G5: Rear group (negative, f ≈ −67.2 mm) ── */
    // D5: L51 + L52 cemented doublet = entire G5
    { label: "22", R: -51.37287, d: 1.31, nd: 1.804, elemId: 13, sd: 13.5 },
    { label: "23", R: 39.448, d: 5.38, nd: 1.834, elemId: 14, sd: 13.5 },
    { label: "24", R: 1e15, d: 39.878, nd: 1.0, elemId: 0, sd: 14.0 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (dual-group inner focus) ──
   *  G2 moves toward image at close focus; G4 moves toward object.
   *  Total track conserved to < 0.001 mm.
   *  Patent close-focus: 0.28075 m from front vertex (β = −0.5×).
   */
  var: {
    "7": [3.232, 16.729],
    "12": [20.862, 7.364],
    "16": [24.855, 12.408],
    "21": [26.884, 39.331],
  },
  varLabels: [
    ["7", "D7"],
    ["12", "D12"],
    ["16", "D16"],
    ["21", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "7" },
    { text: "G2 (−)", fromSurface: "8", toSurface: "12" },
    { text: "G3 / OIS (+)", fromSurface: "14", toSurface: "16" },
    { text: "G4 (+)", fromSurface: "17", toSurface: "21" },
    { text: "G5 (−)", fromSurface: "22", toSurface: "24" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "14", toSurface: "16" },
    { text: "D4", fromSurface: "19", toSurface: "21" },
    { text: "D5", fromSurface: "22", toSurface: "24" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.45,
  focusDescription:
    "Dual-group inner focus. G2 moves 13.5 mm toward image; G4 moves 12.4 mm toward object. " +
    "Two linear motors, constant overall length. MFD 0.45 m (β = −0.5×).",

  /* ── Aperture configuration ── */
  nominalFno: 4.0,
  apertureBlades: 9,
  fstopSeries: [4, 5.6, 8, 11, 16, 22, 32],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
