import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — PANASONIC LUMIX S 35mm F1.8                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: CN 216772097U Example 1 (Xiamen Panasonic).          ║
 * ║  Three-group inner-focus design for L-mount full-frame.            ║
 * ║  11 elements / 9 groups, 6 aspherical surfaces (3 asph elements). ║
 * ║  Focus: inner focus via single negative element (G2, L21).         ║
 * ║                                                                    ║
 * ║  NOTE ON DUMMY SURFACES:                                           ║
 * ║    Patent surfaces S5, S13, S22, S23 are non-optical dummy flats   ║
 * ║    (reference planes in air). Absorbed into adjacent air gaps:     ║
 * ║    S4.d += S5.d (7.98+5.85=13.83); S12.d += S13.d (4.05+0.30=    ║
 * ║    4.35); S21*.d + S22.d + S23.d consolidated into single gap     ║
 * ║    (4.20 + d2 at infinity = 12.056).                              ║
 * ║                                                                    ║
 * ║  NOTE ON CEMENT LAYERS:                                            ║
 * ║    Patent models 0.01 mm cement layers (nd=1.56732) at the         ║
 * ║    L13/L14 and L16/L17 cemented junctions. Both junctions share   ║
 * ║    the same R on both sides of the cement, giving zero optical     ║
 * ║    power. Cement thickness absorbed into front element of each     ║
 * ║    doublet (L13: 0.90+0.01=0.91; L16: 7.77+0.01=7.78).           ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent surfaces 28–29 (cover glass CG, 2.10 mm, nd 1.51680,     ║
 * ║    νd 64.2) and the 1.00 mm air gap to IMG are modeled in          ║
 * ║    `rearPlates` (traced, not drawn). Surface 20 (patent S27)       ║
 * ║    keeps the patent's 12.42 mm gap to the cover glass.             ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Not published in patent. Estimated from combined marginal ray   ║
 * ║    (at f/1.871 design aperture) + chief ray (at 60% field with     ║
 * ║    graduated vignetting weighting) + mechanical clearance, then    ║
 * ║    refined against Panasonic's production optical section: compact ║
 * ║    front ED/doublet heights, smaller focus element, and taller     ║
 * ║    rear field group. Validated against slope-aware rim checks,     ║
 * ║    positive edge thickness, and cross-gap sag ≤90% constraints.   ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: mechanical parts (cover glass: `rearPlates`)  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "panasonic-lumix-s-35-f18",
  maker: "Panasonic",
  name: "PANASONIC LUMIX S 35mm f/1.8",
  subtitle: "CN 216772097U Example 1 — Xiamen Panasonic / Yidan Zheng, Hanzhao Chen, Xiaoqing Zhan",

  catalog: {
    lensMounts: ["l-mount"],
    imageFormat: "135-full-frame",
    specs: ["11 ELEMENTS / 9 GROUPS", "f ≈ 33.8 mm", "F/1.8", "2ω ≈ 63°", "3 ASPHERICAL ELEMENTS (6 SURFACES)"],
    elementCount: 11,
    groupCount: 9,
    focalLengthMm: { marketing: 35, design: 33.85 },
    fNumber: { marketing: 1.8, design: 1.871 },
  },

  source: {
    patentNumber: "CN 216772097 U",
    patentYear: 2022,
    authors: ["Yidan Zheng", "Hanzhao Chen", "Xiaoqing Zhan"],
    assignees: ["Panasonic AVC Networks Xiamen Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.94595,
      vd: 18.0,
      focalLengthMm: 88.7,
      glass: "FDS18 (HOYA, 946180)",
      apd: false,
      role: "Front positive collector; extreme nd minimizes surface curvature for a given power contribution, keeping the front element diameter manageable at f/1.8. Deliberate source of chromatic aberration balanced by downstream ED elements.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: -35.2,
      glass: "S-FPL51 (OHARA) / FCD1 class (ED fluorophosphate, νd = 81.6)",
      apd: "inferred",
      apdNote: "S-FPL51/FCD1 ED fluorophosphate class; patent lists nd/vd only.",
      role: "First ED element; chromatic antidote to L11. Diverges the marginal ray bundle with low dispersion, partially neutralizing L11's color error.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.68893,
      vd: 31.2,
      focalLengthMm: -28.2,
      glass: "S-TIM28 (OHARA)",
      apd: false,
      role: "Front element of cemented achromatic doublet D1. Dense flint providing the dispersive counterbalance to L14 (ED crown).",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 55.9,
      glass: "S-FPL51 (OHARA) / FCD1 class (ED fluorophosphate, νd = 81.6)",
      apd: "inferred",
      apdNote: "S-FPL51/FCD1 ED fluorophosphate class; patent lists nd/vd only.",
      role: "Second ED element; rear of cemented doublet D1. Paired with L13 flint for local achromatic correction in the front group.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L15",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      focalLengthMm: 42.3,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Pre-stop converger; re-converges the diverged beam from L12 and the D1 doublet. Lanthanum crown provides high index with moderate dispersion.",
    },
    {
      id: 6,
      name: "L16",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.6,
      focalLengthMm: 32.9,
      glass: "FCD515 (Hoya)",
      apd: "inferred",
      apdNote: "FCD515 ED fluorophosphate crown; patent lists nd/vd only.",
      role: "Third ED element; front of post-stop cemented doublet D2. Low-dispersion crown for axial and lateral chromatic correction in the converging beam after the stop.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L17",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.3,
      focalLengthMm: -55.5,
      glass: "NBFD15 (HOYA)",
      apd: false,
      role: "High-dispersion flint in cemented doublet D2. Standalone f = −55.5 mm (negative), but within the cemented interface (entering from L16 glass) the effective power is very weakly positive. Optical role is chromatic counter-correction, not refractive.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L18",
      label: "Element 8",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.51602,
      vd: 56.5,
      focalLengthMm: 76.3,
      glass: "C2 (Hoya catalog equivalent; patent code 516565, supplier unspecified)",
      apd: false,
      role: "First aspherical element. Both surfaces carry aspheric departures that control higher-order spherical aberration from the fast f/1.8 front group. Positioned at the rear of G1, it fine-tunes the wavefront before the variable gap.",
    },
    {
      id: 9,
      name: "L21",
      label: "Element 9",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.51602,
      vd: 56.5,
      focalLengthMm: -69.3,
      glass: "C2 (Hoya catalog equivalent; patent code 516565, supplier unspecified)",
      apd: false,
      role: "Sole focus element (Group G2). Translates rearward along the optical axis for inner focus. Both aspherical surfaces minimize focus-dependent spherical aberration variation across the 6.9 mm travel. Lightweight single-element design enables fast, quiet linear-motor AF.",
    },
    {
      id: 10,
      name: "L31",
      label: "Element 10",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.51602,
      vd: 56.5,
      focalLengthMm: 55.9,
      glass: "C2 (Hoya catalog equivalent; patent code 516565, supplier unspecified)",
      apd: false,
      role: "Third aspherical element; field-flattening corrector in rear group G3. Front surface (R = 300 mm, nearly flat) carries the stronger aspheric departure; rear surface fine-tunes astigmatism at intermediate and full field.",
    },
    {
      id: 11,
      name: "L32",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: -70.1,
      glass: "H-K9L (CDGM) / N-BK7 (Schott) class, code 517/642",
      apd: false,
      role: "Final optical element; extends back focal distance while flattening residual Petzval curvature. BK7-class glass chosen for cost optimization — element operates in a low-ray-height, gentle-curvature region.",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ──
   *  All K = 0 (spherical base conic). Patent uses standard even-polynomial sag:
   *  Z(h) = (h²/R) / [1 + √(1 − (h/R)²)] + A4·h⁴ + A6·h⁶ + A8·h⁸ + A10·h¹⁰
   *
   *  SURFACE NUMBERING NOTE: The patent's aspherical coefficient table uses
   *  a +1 offset relative to the prescription table (confirmed across all four
   *  examples). The asterisk-marked surfaces in the prescription table are
   *  authoritative. Mapping: patent "第19面"→S18*, "第20面"→S19*, etc.
   */
  surfaces: [
    /* ── Group G1a — Front collector (L11 through L15) ── */
    { label: "1", R: 66.5499, d: 3.41, sd: 15.4, medium: 1 },
    { label: "2", R: 313.0913, d: 0.3, sd: 14.8 },
    { label: "3", R: 157.8254, d: 0.9, sd: 13.1, medium: 2 },
    { label: "4", R: 15.7038, d: 13.83, sd: 12.6 }, // 7.98 + 5.85 (absorbed dummy S5)
    { label: "5", R: -18.2918, d: 0.91, sd: 11.8, medium: 3 }, // L13 front (0.90 + 0.01 cement)
    { label: "6", R: -318.0662, d: 5.13, sd: 11.9, medium: 4 }, // L13→L14 junction
    { label: "7", R: -25.7001, d: 0.3, sd: 12.2 },
    { label: "8", R: 102.2234, d: 5.42, sd: 14.2, medium: 5 },
    { label: "9", R: -43.2435, d: 0.7, sd: 14.2 },

    /* ── Aperture stop ── */
    { label: "STO", R: "flat", d: 4.35 }, // 4.05 + 0.30 (absorbed dummy S13)

    /* ── Group G1b — Post-stop corrector (L16 through L18) ── */
    { label: "10", R: 67.6048, d: 7.78, sd: 14.5, medium: 6 }, // L16 front (7.77 + 0.01 cement)
    { label: "11", R: -26.1852, d: 1.2, sd: 14.6, medium: 7 }, // L16→L17 junction
    { label: "12", R: -64.4895, d: 2.11, sd: 14.1 },
    {
      label: "13A",
      R: -72.2364,
      d: 4.35,
      sd: 13.2,
      medium: 8,
      asphere: { K: 0, A4: -1.55403e-5, A6: -2.45467e-8, A8: 2.50355e-10, A10: -3.87306e-13 },
    },
    {
      label: "14A",
      R: -26.0047,
      sd: 13.0,
      asphere: { K: 0, A4: 4.73655e-6, A6: -7.15905e-9, A8: 1.19263e-10, A10: -1.60781e-13 },
    }, // var d1

    /* ── Group G2 — Focus element (L21) ── */
    {
      label: "15A",
      R: 214.2128,
      d: 2.7,
      sd: 11.4,
      medium: 9,
      asphere: { K: 0, A4: 4.97404e-5, A6: -2.03601e-7, A8: 2.89599e-10 },
    },
    { label: "16A", R: 30.5085, sd: 11.0, asphere: { K: 0, A4: 6.94755e-5, A6: -2.2348e-7, A8: 2.84101e-10 } }, // var: 4.20 + d2

    /* ── Group G3 — Field flattener / relay (L31, L32) ── */
    {
      label: "17A",
      R: 300.0,
      d: 7.0,
      sd: 14.1,
      medium: 10,
      asphere: { K: 0, A4: 2.87359e-5, A6: -9.88945e-9, A8: -3.25614e-11 },
    },
    {
      label: "18A",
      R: -31.6485,
      d: 9.07,
      sd: 14.2,
      asphere: { K: 0, A4: 1.48027e-5, A6: -6.62808e-10, A8: -4.28859e-11 },
    },
    { label: "19", R: -26.1426, d: 2.16, sd: 15.0, medium: 11 },
    { label: "20", R: -96.5349, d: 12.42, sd: 15.3 }, // patent S27: gap to cover glass CG
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.24,
    description:
      "Inner focus — single negative element (L21, Group G2) driven by linear motor. Total travel 6.92 mm; overall optical length is constant.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Variable air spacings (inner focus) ──
   *  G2 (L21) translates rearward for close focus.
   *  d1: gap between L18 rear (S14A) and L21 front (S15A).
   *  d2_total: consolidated gap between L21 rear (S16A) and L31 front (S17A).
   *    = patent S21*.d (fixed 4.20) + patent d2 (variable).
   *  Sum d1 + d2_total + L21 thickness = constant (16.556 mm).
   *
   *  Patent variable spacings:
   *            INF      1/40     MOD (0.24 m)
   *    d1      1.8000   2.5230   8.7213
   *    d2      7.8560   7.1330   0.9347
   *  d2_total = 4.20 + d2:
   *            12.0560  11.3330  5.1347
   */
  gaps: { "14A": { label: "D14", values: [[1.8, 8.7213]] }, "16A": { label: "D16", values: [[12.056, 5.1347]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.871, fStops: [1.871, 2, 2.5, 2.8, 3.5, 4, 5.6, 8, 11, 16, 22] },

  /* ── Cover glass CG (patent surfaces 28–29): traced, not drawn ── */
  rearPlates: [
    {
      label: "CG",
      thicknessMm: 2.1,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 1.0,
      source: "CN 216772097 U, Example 1 surfaces 28–29",
    },
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1a", fromSurface: "1", toSurface: "9" },
    { text: "G1b", fromSurface: "10", toSurface: "14A" },
    { text: "G2 (focus)", fromSurface: "15A", toSurface: "16A" },
    { text: "G3", fromSurface: "17A", toSurface: "20" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.55, yScFill: 0.38 },
} satisfies LensDataV2Input;

export default LENS_DATA;
