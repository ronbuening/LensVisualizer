import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — LAOWA 24mm f/14 2× MACRO PROBE        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: CN 210573001 U, Example 1 (实施例1).                 ║
 * ║  Applicant: 安徽长庚光学科技有限公司 (Laowa).        ║
 * ║  Inventor: 李大勇 (Li Dayong). Filed 2019-08-29, pub. 2020-05-19. ║
 * ║                                                                    ║
 * ║  Compound wide-angle macro: Objective + Relay + Macro.             ║
 * ║  27 elements / 19 groups, 0 aspherical surfaces.                  ║
 * ║  Focus: inner focus — single positive element (L23) translates.   ║
 * ║  All-spherical design. f/14 (slow), 2ω ≈ 84.1° (135 format).     ║
 * ║                                                                    ║
 * ║  NOTE ON P1 ROD LENS:                                              ║
 * ║    Patent surfaces 3–6 describe a thick rod lens with internal     ║
 * ║    flat surfaces (prism fold planes in straight-through mode).     ║
 * ║    These internal flat surfaces have zero optical power (same      ║
 * ║    glass on both sides, R = ∞) and are collapsed into one thick   ║
 * ║    element (d = 12.0 mm) for this prescription. This is exact     ║
 * ║    for paraxial and finite ray tracing.                            ║
 * ║                                                                    ║
 * ║  NOTE ON PRISM PLATES P2, P3:                                      ║
 * ║    In Example 1, prisms P2 and P3 are unfolded into flat plates   ║
 * ║    (R = ∞ on both sides, zero optical power). In alternative      ║
 * ║    patent examples (2, 3), these become 45° reflecting prisms.    ║
 * ║                                                                    ║
 * ║  NOTE ON SURFACE 43 (PATENT):                                      ║
 * ║    Patent surface 43 is a blank row (no R, d, nd data), likely    ║
 * ║    a table separator. It is omitted here; the air gap is split    ║
 * ║    across the preceding surface (S40, d = 2.4) and the stop.     ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not publish SDs. Estimated from combined marginal  ║
 * ║    + chief ray trace at 60% field with 8% mechanical clearance.   ║
 * ║    Front barrel constraint ≈ 20 mm outer diameter (≈ 9 mm max SD ║
 * ║    for objective/relay sections). Cemented groups use uniform SD.  ║
 * ║    S32 (L17 rear) and S44-S47 (L24, L25) were later raised to      ║
 * ║    pass the traced chief ray to the full-frame corner (21.65 mm    ║
 * ║    at 44.5°; patent ω = 44.6°); the old rims clipped it from 38.6° ║
 * ║    (2026-09-24 field-coverage audit).                              ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "laowa-24f14-probe",
  maker: "Laowa",
  name: "LAOWA 24mm f/14 2× Macro Probe",
  subtitle: "CN 210573001 U Example 1 — Laowa / Li Dayong",

  catalog: {
    lensMounts: ["canon-ef", "nikon-f", "sony-fe", "pentax-k", "canon-rf", "nikon-z", "l-mount"],
    imageFormat: "135-full-frame",
    specs: ["27 ELEMENTS / 19 GROUPS", "f ≈ 23.7 mm", "F/14", "2ω ≈ 84.1°", "ALL SPHERICAL"],
    elementCount: 27,
    groupCount: 19,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: 24, design: 23.71 },
    fNumber: { marketing: 14 },
  },

  source: {
    patentNumber: "CN 210573001 U",
    patentYear: 2020,
    authors: ["Dayong Li"],
    assignees: ["Anhui Changgeng Optics Technology Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    // ── Objective Section (OBJ) ──
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Neg. Meniscus, convex to object",
      nd: 1.83481,
      vd: 42.72,
      focalLengthMm: -5.4,
      glass: "TAFD5F (HOYA catalog equivalent for patent coordinate; production supplier unspecified)",
      apd: false,
      role: "Front negative — retrofocus field-capture element",
    },
    {
      id: 2,
      name: "P1",
      label: "Element 2",
      type: "Pos. Meniscus, concave to object (Rod Lens)",
      nd: 1.90366,
      vd: 31.31,
      focalLengthMm: 11.0,
      glass: "H-ZLaF75B (CDGM)",
      apd: false,
      role: "Hopkins-type rod lens; converts to 45° prism in Ex. 2–3",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 16.2,
      glass: "H-FK61 (CDGM)",
      apd: "inferred",
      role: "ED crown — primary achromatic corrector",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -8.5,
      glass: "H-ZF88A (CDGM)",
      apd: false,
      role: "Dense flint partner in achromatizing doublet",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Neg. Meniscus, convex to object",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -27.3,
      glass: "H-ZF88A (CDGM)",
      apd: false,
      role: "Flint-leading element in achromatic doublet D2",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.44,
      focalLengthMm: 12.6,
      glass: "H-QK3L (CDGM)",
      apd: false,
      role: "Crown element — second achromatic corrector",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: 21.8,
      glass: "N-SF66 / E-FDS1 class (923209)",
      apd: false,
      role: "ERI element — field flattener / SA balancer for intermediate image",
    },

    // ── Prism Section (unfolded flat plates in Example 1) ──
    {
      id: 8,
      name: "P2",
      label: "Element 8",
      type: "Plane-Parallel Plate",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 0,
      glass: "H-ZF88A (CDGM)",
      apd: false,
      role: "Prism P2 unfolded — zero power in straight-through mode",
    },
    {
      id: 9,
      name: "P3",
      label: "Element 9",
      type: "Plane-Parallel Plate",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 0,
      glass: "H-ZF88A (CDGM)",
      apd: false,
      role: "Prism P3 unfolded — zero power in straight-through mode",
    },

    // ── Symmetric Relay Section — first half ──
    {
      id: 10,
      name: "L8",
      label: "Element 10",
      type: "Neg. Meniscus, convex to object",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -132.8,
      glass: "H-ZF88A (CDGM)",
      apd: false,
      role: "Relay entry — weakly negative meniscus",
    },
    {
      id: 11,
      name: "L9",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 8.3,
      glass: "H-ZF88A (CDGM)",
      apd: false,
      role: "Primary converging element, relay first half",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L10",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.32,
      focalLengthMm: -6.5,
      glass: "H-ZF4A (CDGM)",
      apd: false,
      role: "Negative partner in relay doublet D3",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L11",
      label: "Element 13",
      type: "Neg. Meniscus, convex to object",
      nd: 1.80518,
      vd: 25.46,
      focalLengthMm: -56.9,
      glass: "H-ZF7LA (CDGM)",
      apd: false,
      role: "Weakly negative meniscus in relay doublet D4",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L12",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 40.73,
      focalLengthMm: 9.2,
      glass: "H-ZLaF52A (CDGM)",
      apd: false,
      role: "Positive lanthanum flint, highest νd in relay",
      cemented: "D4",
    },

    // ── Symmetric Relay Section — second half (mirror of first) ──
    {
      id: 15,
      name: "L13",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 40.73,
      focalLengthMm: 9.2,
      glass: "H-ZLaF52A (CDGM)",
      apd: false,
      role: "Mirror of L12 — relay symmetry partner",
      cemented: "D5",
    },
    {
      id: 16,
      name: "L14",
      label: "Element 16",
      type: "Neg. Meniscus, concave to object",
      nd: 1.80518,
      vd: 25.46,
      focalLengthMm: -56.9,
      glass: "H-ZF7LA (CDGM)",
      apd: false,
      role: "Mirror of L11 — relay symmetry partner",
      cemented: "D5",
    },
    {
      id: 17,
      name: "L15",
      label: "Element 17",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.32,
      focalLengthMm: -6.5,
      glass: "H-ZF4A (CDGM)",
      apd: false,
      role: "Mirror of L10 — relay symmetry partner",
      cemented: "D6",
    },
    {
      id: 18,
      name: "L16",
      label: "Element 18",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 8.3,
      glass: "H-ZF88A (CDGM)",
      apd: false,
      role: "Mirror of L9 — relay symmetry partner",
      cemented: "D6",
    },
    {
      id: 19,
      name: "L17",
      label: "Element 19",
      type: "Neg. Meniscus, concave to object",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -132.8,
      glass: "H-ZF88A (CDGM)",
      apd: false,
      role: "Relay exit — mirror of L8",
    },

    // ── Macro (Magnification) Section ──
    {
      id: 20,
      name: "L18",
      label: "Element 20",
      type: "Pos. Meniscus, convex to object",
      nd: 1.48749,
      vd: 70.44,
      focalLengthMm: 63.7,
      glass: "H-QK3L (CDGM)",
      apd: false,
      role: "Magnification section entry — low-dispersion positive element",
    },
    {
      id: 21,
      name: "L19",
      label: "Element 21",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: 33.7,
      glass: "N-SF66 / E-FDS1 class (923209)",
      apd: false,
      role: "ERI element — high-index positive, SA suppression in macro section",
    },
    {
      id: 22,
      name: "L20",
      label: "Element 22",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -17.9,
      glass: "H-ZF88A (CDGM)",
      apd: false,
      role: "Dense flint in achromatizing triplet T1",
      cemented: "T1",
    },
    {
      id: 23,
      name: "L21",
      label: "Element 23",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 15.3,
      glass: "H-FK61 (CDGM)",
      apd: "inferred",
      role: "ED crown — central positive element of triplet T1",
      cemented: "T1",
    },
    {
      id: 24,
      name: "L22",
      label: "Element 24",
      type: "Neg. Meniscus, concave to object",
      nd: 1.80518,
      vd: 25.46,
      focalLengthMm: -27.2,
      glass: "H-ZF7LA (CDGM)",
      apd: false,
      role: "Dense flint — rear negative element of triplet T1",
      cemented: "T1",
    },

    // ── Focus + Rear Section ──
    {
      id: 25,
      name: "L23",
      label: "Element 25",
      type: "Pos. Meniscus, concave to object",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 69.3,
      glass: "H-ZF88A (CDGM)",
      apd: false,
      role: "Focus element (Foc) — sole moving element for inner focus",
    },
    {
      id: 26,
      name: "L24",
      label: "Element 26",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.17,
      focalLengthMm: -16.5,
      glass: "H-ZF2 (CDGM)",
      apd: false,
      role: "Rear negative — field curvature / BFD extension",
    },
    {
      id: 27,
      name: "L25",
      label: "Element 27",
      type: "Plano-Convex Positive",
      nd: 1.83481,
      vd: 42.72,
      focalLengthMm: 55.9,
      glass: "TAFD5F (HOYA catalog equivalent for patent coordinate; production supplier unspecified)",
      apd: false,
      role: "Field flattener — bookends system with L1 glass",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    // ── Objective Section ──
    { label: "1", R: 8.731, d: 1.0, sd: 2.8, medium: 1 }, // L1 front
    { label: "2", R: 2.81, d: 2.4364, sd: 2.3 }, // L1 rear → air
    { label: "3", R: -15.2, d: 12.0, sd: 2.0, medium: 2 }, // P1 rod front (internal flats collapsed)
    { label: "4", R: -8.258, d: 0.189, sd: 3.6 }, // P1 rod rear → air
    { label: "5", R: 14.6, d: 8.1097, sd: 3.6, medium: 3 }, // L3 front (D1)
    { label: "6", R: -14.6, d: 1.0498, sd: 3.6, medium: 4 }, // L3→L4 junction (D1)
    { label: "7", R: 14.6, d: 0.3, sd: 3.6 }, // L4 rear → air
    { label: "8", R: 24.228, d: 1.25, sd: 4.0, medium: 5 }, // L5 front (D2)
    { label: "9", R: 11.55, d: 4.3, sd: 4.0, medium: 6 }, // L5→L6 junction (D2)
    { label: "10", R: -11.55, d: 0.4588, sd: 4.0 }, // L6 rear → air
    { label: "11", R: 39.496, d: 3.0, sd: 4.4, medium: 7 }, // L7 front (ERI)
    { label: "12", R: -39.496, d: 0.5, sd: 4.4 }, // L7 rear → air

    // ── Prism Plates (unfolded) ──
    { label: "13", R: "flat", d: 12.0, sd: 4.3, medium: 8 }, // P2 front
    { label: "14", R: "flat", d: 5.5, sd: 4.3 }, // P2 rear → air
    { label: "15", R: "flat", d: 12.0, sd: 4.8, medium: 9 }, // P3 front
    { label: "16", R: "flat", d: 0.5, sd: 4.8 }, // P3 rear → air

    // ── Symmetric Relay — first half ──
    { label: "17", R: 18.876, d: 12.0, sd: 4.9, medium: 10 }, // L8 front
    { label: "18", R: 11.452, d: 0.54, sd: 4.67 }, // L8 rear → air
    { label: "19", R: 21.58, d: 11.8794, sd: 5.9, medium: 11 }, // L9 front (D3)
    { label: "20", R: -7.799, d: 7.6149, sd: 5.9, medium: 12 }, // L9→L10 junction (D3)
    { label: "21", R: 17.232, d: 0.5, sd: 5.9 }, // L10 rear → air
    { label: "22", R: 15.849, d: 12.0, sd: 6.0, medium: 13 }, // L11 front (D4)
    { label: "23", R: 7.8, d: 11.6314, sd: 6.0, medium: 14 }, // L11→L12 junction (D4)
    { label: "24", R: -52.517, d: 1.5929, sd: 6.0 }, // L12 rear → air (symmetry plane)

    // ── Symmetric Relay — second half ──
    { label: "25", R: 52.517, d: 11.6314, sd: 5.6, medium: 15 }, // L13 front (D5)
    { label: "26", R: -7.8, d: 12.0, sd: 5.6, medium: 16 }, // L13→L14 junction (D5)
    { label: "27", R: -15.849, d: 0.5, sd: 5.6 }, // L14 rear → air
    { label: "28", R: -17.232, d: 7.6149, sd: 4.7, medium: 17 }, // L15 front (D6)
    { label: "29", R: 7.799, d: 11.8794, sd: 4.7, medium: 18 }, // L15→L16 junction (D6)
    { label: "30", R: -21.58, d: 0.54, sd: 4.7 }, // L16 rear → air
    { label: "31", R: -11.452, d: 12.0, sd: 4.1, medium: 19 }, // L17 front
    { label: "32", R: -18.876, d: 24.9577, sd: 4.7 }, // L17 rear → air

    // ── Macro (Magnification) Section ──
    { label: "33", R: 27.795, d: 10.1314, sd: 6.2, medium: 20 }, // L18 front
    { label: "34", R: 232.402, d: 47.477, sd: 6.8 }, // L18 rear → air (largest gap in system)
    { label: "35", R: 36.48, d: 6.0, sd: 11.1, medium: 21 }, // L19 front (ERI)
    { label: "36", R: -194.024, d: 10.575, sd: 10.5 }, // L19 rear → air
    { label: "37", R: -126.076, d: 2.0, sd: 8.0, medium: 22 }, // L20 front (T1)
    { label: "38", R: 17.301, d: 5.0, sd: 8.0, medium: 23 }, // L20→L21 junction (T1)
    { label: "39", R: -12.218, d: 3.0, sd: 8.0, medium: 24 }, // L21→L22 junction (T1)
    { label: "40", R: -30.681, d: 2.4, sd: 8.0 }, // L22 rear → air

    // ── Aperture Stop ──
    // Stop is positioned behind the macro section, before the focus element.
    // Patent places it between surface 42 (air) and surface 44 (air reference).
    // Gap from L22 rear to stop: 2.4 mm (surface 40 d).
    // Gap from stop to variable reference surface: 29.7891 mm.
    { label: "STO", R: "flat", d: 29.7891 },

    // ── Focus Section ──
    { label: "41", R: "flat", sd: 10.4 }, // Variable gap D(44)
    { label: "42", R: -269.8, d: 3.0, sd: 11.3, medium: 25 }, // L23/Foc front
    { label: "43", R: -48.42, sd: 11.5 }, // L23/Foc rear → air, variable gap D(46)

    // ── Rear Correctors ──
    { label: "44", R: -17.67, d: 2.0, sd: 7.4, medium: 26 }, // L24 front
    { label: "45", R: 31.177, d: 1.1205, sd: 7.7 }, // L24 rear → air
    { label: "46", R: "flat", d: 5.0, sd: 7.9, medium: 27 }, // L25 front (plano-convex)
    { label: "47", R: -46.7, d: 39.154, sd: 8.9 }, // L25 rear → BFD
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.47,
    description:
      "Inner focus — L23 (Foc, f = +69 mm) translates toward object. Patent data from ∞ to 1.0× magnification.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Variable air spacings (focus mechanism) ──
   *  Inner focus: L23 (Foc) translates toward object side.
   *  D(44) decreases, D(46) increases. Sum is conserved (≈ 82.10 mm).
   *  D(50)/BFD is fixed at 39.154 mm (not included in var).
   *
   *  Patent provides data at: infinity, 0.025×, and 1.0× magnification.
   *  The var array uses [d_infinity, d_close_focus(1.0×)].
   */
  gaps: { "41": { label: "D(44)", values: [[11.8183, 8.5685]] }, "43": { label: "BF", values: [[67.2829, 70.5327]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 14, fStops: [14, 16, 22, 32, 40], maxFNumber: 40 },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "OBJ (物镜)", fromSurface: "1", toSurface: "12" },
    { text: "P2 (棱镜)", fromSurface: "13", toSurface: "14" },
    { text: "P3 (棱镜)", fromSurface: "15", toSurface: "16" },
    { text: "RELAY (接力)", fromSurface: "17", toSurface: "32" },
    { text: "MACRO (放大)", fromSurface: "33", toSurface: "40" },
    { text: "FOCUS+REAR", fromSurface: "42", toSurface: "47" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "19", toSurface: "21" },
    { text: "D4", fromSurface: "22", toSurface: "24" },
    { text: "D5", fromSurface: "25", toSurface: "27" },
    { text: "D6", fromSurface: "28", toSurface: "30" },
    { text: "T1", fromSurface: "37", toSurface: "40" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.85, yScFill: 0.1, maxAspectRatio: 3.0 },
} satisfies LensDataV2Input;

export default LENS_DATA;
