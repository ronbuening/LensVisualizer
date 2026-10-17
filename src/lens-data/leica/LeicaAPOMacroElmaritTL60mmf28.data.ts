import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — LEICA APO-MACRO-ELMARIT-TL 60 mm f/2.8 ASPH.        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2016-090725A Example 9 (Konica Minolta / Tanaka).║
 * ║  Three-group inner-focus macro, positive–positive–negative.        ║
 * ║  10 elements / 9 groups, 4 aspherical surfaces on 2 elements.     ║
 * ║  Focus: inner focus — Gr2 (L21–L23) moves toward object; Gr1,     ║
 * ║         aperture stop, and Gr3 are fixed.                         ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters.  Estimated from combined   ║
 * ║    marginal + chief ray trace (60 % chief-ray fraction at full    ║
 * ║    field) with ~8 % mechanical clearance.  Validated for edge     ║
 * ║    thickness ≥ 0.3 mm and cross-gap sag intrusion ≤ 90 %.        ║
 * ║    Surfaces 16-19 (L33, L34) were later raised to pass the         ║
 * ║    traced chief ray to the APS-C corner (14.18 mm at 13.2°;        ║
 * ║    patent y'max = 14.200 mm, ω = 13.319°); the old rims clipped    ║
 * ║    it from 9.6° (2026-09-24 field-coverage audit).                 ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent surfaces 21–22 (1.500 mm plate, nd 1.52249, νd 59.48)   ║
 * ║    and the 0.800 mm air gap to the image are modeled in           ║
 * ║    `rearPlates` (traced, not drawn). Data surface 19 (patent 20)  ║
 * ║    keeps the patent's 13.369 mm gap to the plate.                 ║
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
  key: "leica-apo-macro-elmarit-tl-60-f28",
  maker: "Leica",
  name: "LEICA APO-MACRO-ELMARIT-TL 60mm f/2.8 ASPH.",
  subtitle: "JP 2016-090725A EXAMPLE 9 — KONICA MINOLTA / TANAKA",

  catalog: {
    lensMounts: ["l-mount"],
    imageFormat: "aps-c",
    specs: ["10 ELEMENTS / 9 GROUPS", "f ≈ 60.0 mm", "F/2.8", "2ω ≈ 26.6°", "4 ASPHERICAL SURFACES"],
    elementCount: 10,
    groupCount: 9,
    /* ── Explicit metadata fields ── */
    focalLengthMm: { marketing: 60, design: 59.979 },
    fNumber: { marketing: 2.8, design: 2.9 },
  },

  source: {
    patentNumber: "JP 2016-090725 A",
    patentYear: 2016,
    authors: ["Hiroaki Tanaka"],
    assignees: ["Konica Minolta, Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 115.7,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "High-dispersion front collector; biconvex dense flint establishing initial chromatic balance for the near-afocal Gr1 triplet.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.38,
      focalLengthMm: 105.2,
      glass: "S-BAL42 (OHARA)",
      apd: false,
      role: "Double-aspheric positive meniscus in Gr1; corrects spherical aberration from the front group. Polished glass aspheric substrate.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.16,
      focalLengthMm: -54.9,
      glass: "S-TIM28 (OHARA)",
      apd: false,
      role: "Diverging element completing Gr1's near-afocal triplet; achromatizes Gr1 with its flint-type dispersion.",
    },
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: 32.5,
      glass: "FCD100 (HOYA)",
      apd: "inferred",
      apdNote: "Super-ED fluorophosphate crown; ΔPgF ≈ +0.0564 (HOYA catalog). APO primary corrector.",
      role: "Super-ED keystone of the apochromatic correction; provides strong positive power with minimal chromatic aberration. Leading element of the moving focus group Gr2.",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.27,
      focalLengthMm: -42.3,
      glass: "NBFD15 (HOYA)",
      apd: false,
      role: "Dense flint chromatic partner to L21; Δν = 61.8 provides the compensating dispersion for APO correction within the focus group.",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.38,
      focalLengthMm: 36.8,
      glass: "S-BAL42 (OHARA)",
      apd: false,
      role: "Double-aspheric rear element of focus group Gr2; strongest aspherical correction in the design (surface 11A). Controls field curvature and SA variation across the focus range.",
    },
    {
      id: 7,
      name: "L31",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.91082,
      vd: 35.25,
      focalLengthMm: 35.7,
      glass: "TAFD35 (HOYA)",
      apd: false,
      role: "Highest-index element in the design; front component of the cemented doublet in fixed rear group Gr3.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L32",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.51742,
      vd: 52.15,
      focalLengthMm: -23.2,
      glass: "517522 — crown (patent coordinate; vendor unresolved)",
      apd: false,
      role: "Rear component of the cemented doublet; large Δnd = 0.393 at the junction provides strong diverging power and secondary achromatic correction in Gr3.",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L33",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.56883,
      vd: 56.04,
      focalLengthMm: -31.4,
      glass: "569560 — barium crown (patent coordinate; vendor unresolved)",
      apd: false,
      role: "Primary field flattener; front surface R = −15.0 mm is the smallest radius in the design. Low-dispersion crown minimizes chromatic disturbance from this strongly curved element.",
    },
    {
      id: 10,
      name: "L34",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.67,
      focalLengthMm: 49.9,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Final positive element; fine-tunes exit pupil position and telecentricity for the APS-C digital sensor.",
    },
  ],

  /* ── Surface prescription ──
   *  Patent surface numbering (i) → data file label:
   *    1→"1", 2→"2", 3*→"3A", 4*→"4A", 5→"5", 6→"6",
   *    7(stop)→"STO", 8→"7", 9→"8", 10→"9", 11→"10",
   *    12*→"11A", 13*→"12A", 14→"13", 15→"14", 16→"15",
   *    17→"16", 18→"17", 19→"18", 20→"19".
   *  Cover glass (patent surfaces 21–22) → `rearPlates` below.
   */
  /* (moved from asph) ── Aspherical coefficients ──
   *  Patent equation (¶0060):
   *    Z(h) = (c·h²)/[1+√{1−(1+K)·c²·h²}] + Σ Aⱼ·hʲ
   *  All four surfaces have K = 0 (spherical base).
   *  Standard even-order polynomial terms only.
   */
  surfaces: [
    // ── Gr1 (fixed, weakly positive — f₁ ≈ 1365 mm) ──
    { label: "1", R: 123.775, d: 3.38, sd: 15.0, medium: 1 }, // L11 front
    { label: "2", R: -469.026, d: 2.899, sd: 14.5 }, // L11 rear → air
    {
      label: "3A",
      R: -103.089,
      d: 3.722,
      sd: 13.5,
      medium: 2,
      asphere: { K: 0, A4: 5.4249e-6, A6: 6.0883e-9, A8: -6.9548e-12 },
    }, // L12 front (asph)
    {
      label: "4A",
      R: -38.467,
      d: 1.473,
      sd: 13.0,
      asphere: { K: 0, A4: 6.7595e-6, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 },
    }, // L12 rear (asph) → air
    { label: "5", R: -38.636, d: 2.0, sd: 12.5, medium: 3 }, // L13 front
    { label: "6", R: 1787.871, d: 1.526, sd: 12.2 }, // L13 rear → air

    // ── Aperture stop (fixed during focus) ──
    { label: "STO", R: "flat" },

    // ── Gr2 (positive focus group — f₂ ≈ 32.3 mm; moves toward object) ──
    { label: "7", R: 27.241, d: 5.4, sd: 10.0, medium: 4 }, // L21 front (FCD100)
    { label: "8", R: -29.604, d: 2.951, sd: 9.8 }, // L21 rear → air
    { label: "9", R: -19.493, d: 0.9, sd: 9.0, medium: 5 }, // L22 front
    { label: "10", R: -45.546, d: 5.194, sd: 8.8 }, // L22 rear → air
    {
      label: "11A",
      R: -502.215,
      d: 4.4,
      sd: 9.0,
      medium: 6,
      asphere: { K: 0, A4: -1.8527e-5, A6: -1.5091e-7, A8: 1.2319e-9, A10: -5.6523e-12 },
    }, // L23 front (asph)
    {
      label: "12A",
      R: -20.577,
      sd: 9.2,
      asphere: { K: 0, A4: 4.5088e-6, A6: -1.3825e-7, A8: 1.1438e-9, A10: -5.2275e-12 },
    }, // L23 rear (asph) → air

    // ── Gr3 (fixed, negative — f₃ ≈ −36.2 mm) ──
    { label: "13", R: -814.44, d: 3.066, sd: 9.5, medium: 7 }, // L31 front
    { label: "14", R: -31.27, d: 1.01, sd: 9.5, medium: 8 }, // L31–L32 junction
    { label: "15", R: 19.473, d: 12.475, sd: 9.5 }, // L32 rear → air
    { label: "16", R: -15.039, d: 0.9, sd: 9.6, medium: 9 }, // L33 front
    { label: "17", R: -95.771, d: 0.3, sd: 10.7 }, // L33 rear → air
    { label: "18", R: 38.336, d: 4.047, sd: 13.0, medium: 10 }, // L34 front
    { label: "19", R: -721.431, d: 13.369, sd: 12.2 }, // L34 rear → cover glass
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.16,
    description: "Inner focus: Gr2 (L21–L23) moves toward object; Gr1, stop, and Gr3 fixed. β = −1.0 (1:1) at MFD.",
    // (moved from publishedStations) Patent read 2026-10-06: Close-focus endpoint is the patent's tabulated POS2 row for Example 9 (β = -1.0, object
    // 67.497 mm): d7 = 3.050, d13 = 22.608 (¶0115).
    published: [1],
  },

  /* (moved from var) ── Variable air spacings (inner focus) ──
   *  Gr2 moves toward object for close focus.
   *  d_STO shrinks; d_12A grows by the same amount.
   *  Gap sum conserved to 0.001 mm (25.657 → 25.658).
   */
  gaps: { STO: { label: "D(ST)", values: [[23.096, 3.05]] }, "12A": { label: "BF(Gr2)", values: [[2.561, 22.608]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.9, fStops: [2.9, 4, 5.6, 8, 11, 16, 22, 32] },

  /* ── Cover glass (patent surfaces 21–22): traced, not drawn ── */
  rearPlates: [
    {
      thicknessMm: 1.5,
      nd: 1.52249,
      vd: 59.48,
      glass: "S-NSL5",
      gapAfterMm: 0.8,
      source: "JP 2016-090725 A, Example 9 surfaces 21–22 (¶0110)",
    },
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "Gr1 (FIXED)", fromSurface: "1", toSurface: "6" },
    { text: "Gr2 (FOCUS)", fromSurface: "7", toSurface: "12A" },
    { text: "Gr3 (FIXED)", fromSurface: "13", toSurface: "19" },
  ],
  doublets: [{ text: "D1", fromSurface: "13", toSurface: "15" }],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
