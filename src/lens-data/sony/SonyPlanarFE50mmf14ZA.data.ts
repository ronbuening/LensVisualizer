import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — SONY PLANAR T* FE 50mm F1.4 ZA (SEL50F14Z)           ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2017/138250 A1, Numerical Example 2 (Tables 6–10) ║
 * ║  Inventor: Hosoi Masaharu (Sony Corporation).                      ║
 * ║  Modified double-Gauss (Planar) design, positive–negative–positive ║
 * ║  three-group architecture.                                         ║
 * ║  12 elements / 9 groups, 2 aspherical surfaces.                    ║
 * ║  Focus: inner focus, GR2 only (2 elements) moves axially.          ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from marginal ray (f/1.4) + chief ray (60% field)     ║
 * ║    with 8% mechanical clearance.  Cross-gap sag intrusion at the   ║
 * ║    Ln1→Ln2 air gap (R=+28.12 / R=−51.93, gap=8.835) is the        ║
 * ║    binding constraint on surfaces 5–6, limiting SD to ~16.2 mm.    ║
 * ║    Front element SD constrained by 72 mm filter thread.            ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)    ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sony-planar-fe-50f14-za",
  maker: "Sony",
  name: "SONY PLANAR T* FE 50mm f/1.4 ZA",
  subtitle: "WO 2017/138250 A1 EXAMPLE 2 — SONY / HOSOI",
  specs: ["12 ELEMENTS / 9 GROUPS", "f ≈ 50.3 mm", "F/1.4", "2ω ≈ 46.4°", "2 ASPHERICAL SURFACES", "1 ED ELEMENT"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 50,
  focalLengthDesign: 50.29,
  apertureMarketing: 1.4,
  apertureDesign: 1.45,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame",
  patentNumber: "WO 2017/138250 A1",
  patentAuthors: ["Masaharu Hosoi"],
  patentAssignees: ["Sony Corporation"],
  patentYear: 2017,
  elementCount: 12,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.72341,
      vd: 37.9,
      fl: 175.0,
      glass: "S-BAH28 (OHARA)",
      apd: false,
      role: "Front collector — weak positive with near-plano front surface. Bends off-axis bundles gently inward while contributing minimal spherical aberration.",
    },
    {
      id: 2,
      name: "Lp1",
      label: "Element 2",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.85134,
      vd: 40.1,
      fl: 68.5,
      glass: "High-index lanthanum crown, 851/401 class (uncertain)",
      apd: false,
      role: "AA aspherical element. Front surface aspherical corrects spherical aberration at f/1.4. Cemented to Ln1.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "Ln1",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.51679,
      vd: 64.1,
      fl: -43.6,
      glass: "S-BSL7 (OHARA)",
      apd: false,
      role: "Borosilicate crown, achromatic partner to Lp1 (Δνd = 24.0). Strongly curved rear forms diverging air space.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "Ln2",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.71735,
      vd: 29.5,
      fl: -33.1,
      glass: "S-TIH1 (OHARA)",
      apd: false,
      role: "Dense titanium flint, achromatic partner to Lp2 (Δνd = 25.1). Part of quasi-symmetric Gauss arrangement.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "Lp2",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.6,
      fl: 35.4,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Lanthanum crown, achromatic partner to Ln2. Near-afocal doublet corrects chromatic aberration and coma.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "Lp3",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.6,
      fl: 52.6,
      glass: "Fluorophosphate crown, 593/686 class (uncertain) — ED glass",
      apd: "inferred",
      apdNote: "Probable positive ΔPgF (fluorophosphate class); spectral data not published in patent.",
      role: "ED element — strongest single positive in GR1. Positioned after stop for simultaneous axial and lateral chromatic correction.",
    },
    {
      id: 7,
      name: "L21",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.99502,
      vd: 29.3,
      fl: -37.6,
      glass: "Ultra-high-index lanthanum-niobium heavy flint, 995/293 class (uncertain)",
      apd: false,
      role: "Focus group negative — ultra-high index (nd ≈ 2.0) per conditional (1). Keeps curvatures gentle despite strong power, suppressing SA and coma during focus travel.",
    },
    {
      id: 8,
      name: "L22",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.94594,
      vd: 17.9,
      fl: 66.2,
      glass: "Ultra-high-dispersion titanium heavy flint, 946/179 class (uncertain)",
      apd: false,
      role: "Focus group positive — very low Abbe number (17.9) provides achromatization within GR2 paired with L21 (Δνd = 11.4).",
    },
    {
      id: 9,
      name: "L31",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.80419,
      vd: 46.5,
      fl: 47.2,
      glass: "S-LAH65V (OHARA)",
      apd: false,
      role: "GR3 relay element — re-converges divergent beam from GR2 toward image plane.",
    },
    {
      id: 10,
      name: "L32",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.80419,
      vd: 46.5,
      fl: 31.9,
      glass: "S-LAH65V (OHARA)",
      apd: false,
      role: "GR3 doublet positive — same glass as L31, simplifies bill of materials. Achromatic partner to L33.",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L33",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      fl: -22.2,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      role: "GR3 doublet negative — dense titanium flint. Net negative doublet power (f ≈ −101 mm) contributes Petzval correction.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L34",
      label: "Element 12",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.58312,
      vd: 59.3,
      fl: -92.4,
      glass: "S-BAL42 (OHARA)",
      apd: false,
      role: "Aspherical field flattener — concave to object, rear surface aspherical. Position far from stop gives maximum leverage over field-dependent aberrations.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── GR1: front collector ──
    { label: "1", R: 9999.0, d: 3.887, nd: 1.72341, elemId: 1, sd: 27.0 },
    { label: "2", R: -128.215, d: 2.552, nd: 1.0, elemId: 0, sd: 26.5 },

    // ── GR1: sub-group G1a — cemented doublet Lp1+Ln1 ──
    { label: "3A", R: 114.514, d: 4.946, nd: 1.85134, elemId: 2, sd: 23.0 }, // Lp1 front (asph, AA element)
    { label: "4", R: -116.373, d: 2.178, nd: 1.51679, elemId: 3, sd: 23.0 }, // Lp1→Ln1 junction
    { label: "5", R: 28.12, d: 8.835, nd: 1.0, elemId: 0, sd: 16.2 }, // Ln1 rear → air (cross-gap limited)

    // ── GR1: sub-group G1a — cemented doublet Ln2+Lp2 ──
    { label: "6", R: -51.934, d: 2.897, nd: 1.71735, elemId: 4, sd: 16.2 }, // Ln2 front
    { label: "7", R: 44.703, d: 10.94, nd: 1.72916, elemId: 5, sd: 17.5 }, // Ln2→Lp2 junction
    { label: "8", R: -54.876, d: 1.144, nd: 1.0, elemId: 0, sd: 19.5 }, // Lp2 rear → air

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 1.764, nd: 1.0, elemId: 0, sd: 18.9 },

    // ── GR1: sub-group G1a — Lp3 (ED element) ──
    { label: "10", R: 68.142, d: 9.35, nd: 1.59282, elemId: 6, sd: 19.5 },
    { label: "11", R: -54.525, d: 2.442, nd: 1.0, elemId: 0, sd: 18.5 }, // var D11

    // ── GR2: focus group — L21 (negative) ──
    { label: "12", R: -243.918, d: 1.8, nd: 1.99502, elemId: 7, sd: 17.5 },
    { label: "13", R: 44.296, d: 5.45, nd: 1.0, elemId: 0, sd: 17.0 },

    // ── GR2: focus group — L22 (positive) ──
    { label: "14", R: 105.875, d: 3.768, nd: 1.94594, elemId: 8, sd: 18.0 },
    { label: "15", R: -150.783, d: 12.684, nd: 1.0, elemId: 0, sd: 18.0 }, // var D15

    // ── GR3: L31 ──
    { label: "16", R: 93.568, d: 5.822, nd: 1.80419, elemId: 9, sd: 17.0 },
    { label: "17", R: -62.024, d: 0.5, nd: 1.0, elemId: 0, sd: 16.5 },

    // ── GR3: cemented doublet L32+L33 ──
    { label: "18", R: 70.486, d: 10.36, nd: 1.80419, elemId: 10, sd: 16.5 },
    { label: "19", R: -37.614, d: 1.931, nd: 1.80518, elemId: 11, sd: 14.5 }, // L32→L33 junction
    { label: "20", R: 34.944, d: 8.141, nd: 1.0, elemId: 0, sd: 14.0 },

    // ── GR3: L34 (aspherical field flattener) ──
    { label: "21", R: -34.288, d: 1.8, nd: 1.58312, elemId: 12, sd: 14.0 },
    { label: "22A", R: -96.201, d: 15.506, nd: 1.0, elemId: 0, sd: 14.0 }, // BFD
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "3A": {
      K: 0,
      A4: -4.5136e-6,
      A6: -1.7517e-9,
      A8: 1.83e-14,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "22A": {
      K: 0,
      A4: 7.3383e-6,
      A6: 1.6537e-9,
      A8: 2.1185e-11,
      A10: -1.5608e-14,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (inner focus) ── */
  var: {
    "11": [2.442, 12.782], // D11: Lp3 rear → L21 front
    "15": [12.684, 2.344], // D15: L22 rear → L31 front
  },
  varLabels: [
    ["11", "D11"],
    ["15", "D15"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "GR1 (+)", fromSurface: "1", toSurface: "11" },
    { text: "GR2 (−)", fromSurface: "12", toSurface: "15" },
    { text: "GR3 (+)", fromSurface: "16", toSurface: "22A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3A", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.45,
  focusDescription: "Inner focus — GR2 (L21 + L22, 2 elements) translates axially; GR1 and GR3 fixed. Ring Drive SSM.",

  /* ── Aperture configuration ── */
  nominalFno: 1.4,
  apertureBlades: 11,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  maxFstop: 16,

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
