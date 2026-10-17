import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US20230213745A1 Numerical Example 4, Figure 7 (not Figure 5).
 * Source radii and spacings retained; estimated optical rims reviewed at 600 dpi.
 * Plate rows 31–32 (1.50 mm, nd 1.51633, νd 64.1) and the 0.80 mm air to the
 * image are modeled in `rearPlates` (traced, not drawn); surface 30 keeps the
 * patent's 12.63 mm gap to the plate.
 * Source nd/vd do not identify glass suppliers, chemistry or APD.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-rf-135f18",
  maker: "Canon",
  name: "CANON RF 135mm f/1.8 L IS USM",
  subtitle: "US 2023/0213745 A1 EXAMPLE 4 — CANON / NAKADA",

  catalog: {
    lensMounts: ["canon-rf"],
    imageFormat: "135-full-frame",
    specs: ["17 ELEMENTS / 12 GROUPS", "f ≈ 130.9 mm", "F/1.86", "2ω = 18.76°", "ALL SPHERICAL — 5 CEMENTED DOUBLETS"],
    elementCount: 17,
    groupCount: 12,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: 135, design: 130.95 },
    fNumber: { marketing: 1.8, design: 1.86 },
  },

  source: {
    patentNumber: "US 2023/0213745 A1",
    patentYear: 2023,
    authors: ["Takeharu Nakada"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 144.6,
      glass: "S-TIH53 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Positive front singlet of fixed unit L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 170.2,
      glass: "S-FPL51 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Low-dispersion positive singlet of fixed unit L1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 121.9,
      glass: "S-FPL51 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Positive front element of cemented doublet D1",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.77047,
      vd: 29.7,
      focalLengthMm: -45.7,
      glass: "NBFD29 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Negative rear element of cemented doublet D1",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 67.8,
      glass: "S-FPL51 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Positive front element of cemented doublet D2",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.77047,
      vd: 29.7,
      focalLengthMm: -194.8,
      glass: "NBFD29 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Negative rear element of cemented doublet D2",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Plano-Concave Negative",
      nd: 1.618,
      vd: 63.4,
      focalLengthMm: -62.5,
      glass: "S-PHM52 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Single plano-concave element forming moving focus unit L2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 20.9,
      focalLengthMm: -74.8,
      glass: "N-SF66 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Negative front element of cemented doublet D3 in fixed subunit L3a",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.804,
      vd: 46.5,
      focalLengthMm: 45.0,
      glass: "S-LAH65V — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Positive rear element of cemented doublet D3",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 20.9,
      focalLengthMm: 105.4,
      glass: "N-SF66 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Positive meniscus in stabilization subunit L3b; lateral motion not simulated",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.91082,
      vd: 35.3,
      focalLengthMm: -37.0,
      glass: "TAFD35 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Negative singlet in stabilization subunit L3b; lateral motion not simulated",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.6,
      focalLengthMm: 38.5,
      glass: "N-SK14 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Positive front element of cemented doublet D4 in subunit L3c",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -56.1,
      glass: "S-TIH53 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Negative rear element of cemented doublet D4",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 2.00069,
      vd: 25.5,
      focalLengthMm: 42.3,
      glass: "TAFD40 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "High-index positive singlet in subunit L3c",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconcave Negative",
      nd: 1.65844,
      vd: 50.9,
      focalLengthMm: -31.2,
      glass: "N-SSK5 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Negative front element of cemented doublet D5",
      cemented: "D5",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.5,
      focalLengthMm: 45.5,
      glass: "SF6 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Positive rear element of cemented doublet D5",
      cemented: "D5",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Negative Meniscus",
      nd: 1.58913,
      vd: 61.1,
      focalLengthMm: -115.1,
      glass: "S-BAL35 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Negative rear meniscus of fixed unit L3",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    // ── L1 — Front positive group (Unit L1) ──
    { label: "1", R: 82.715, d: 6.98, sd: 38.2, medium: 1 }, // L1 front
    { label: "2", R: 245.193, d: 0.35, sd: 38.2 }, // L1 rear → air
    { label: "3", R: 62.217, d: 9.16, sd: 35.6, medium: 2 }, // L2 front
    { label: "4", R: 223.597, d: 0.55, sd: 35.1 }, // L2 rear → air
    { label: "5", R: 56.551, d: 10.42, sd: 28.8, medium: 3 }, // L3 front (D1)
    { label: "6", R: 799.841, d: 3.59, sd: 28.8, medium: 4 }, // L3→L4 junction (D1)
    { label: "7", R: 33.661, d: 1.89, sd: 28.0 }, // L4 rear → air
    { label: "8", R: 40.413, d: 10.28, sd: 21.9, medium: 5 }, // L5 front (D2)
    { label: "9", R: -185.049, d: 1.9, sd: 21.9, medium: 6 }, // L5→L6 junction (D2)
    { label: "10", R: 798.092, d: 3.38, sd: 21.9 }, // L6 rear → air

    // ── Aperture stop ──
    { label: "STO", R: "flat" }, // d11 variable

    // ── L7 — Focus unit (Unit L2) ──
    { label: "12", R: "flat", d: 1.35, sd: 18.0, medium: 7 }, // L7 front (flat)
    { label: "13", R: 38.615, sd: 17.8 }, // L7 rear → air (d13 variable)

    // ── L3a subunit: D3 ──
    { label: "14", R: 157.599, d: 1.25, sd: 16.2, medium: 8 }, // L8 front (D3)
    { label: "15", R: 47.803, d: 4.6, sd: 16.2, medium: 9 }, // L8→L9 junction (D3)
    { label: "16", R: -142.411, d: 1.8, sd: 16.2 }, // L9 rear → air

    // ── L3b subunit: IS unit (L10 + L11) ──
    { label: "17", R: -295.214, d: 2.08, sd: 18.0, medium: 10 }, // L10 front
    { label: "18", R: -73.431, d: 0.97, sd: 18.0 }, // L10 rear → air
    { label: "19", R: -88.195, d: 1.0, sd: 18.4, medium: 11 }, // L11 front
    { label: "20", R: 54.928, d: 3.89, sd: 18.4 }, // L11 rear → air

    // ── L3c subunit: rear corrector ──
    { label: "21", R: 40.006, d: 9.01, sd: 18.0, medium: 12 }, // L12 front (D4)
    { label: "22", R: -50.592, d: 1.5, sd: 18.0, medium: 13 }, // L12→L13 junction (D4)
    { label: "23", R: 797.299, d: 4.02, sd: 18.0 }, // L13 rear → air
    { label: "24", R: 197.831, d: 6.5, sd: 20.0, medium: 14 }, // L14 front
    { label: "25", R: -52.908, d: 1.5, sd: 19.4 }, // L14 rear → air
    { label: "26", R: -59.824, d: 1.6, sd: 18.2, medium: 15 }, // L15 front (D5)
    { label: "27", R: 31.679, d: 7.95, sd: 18.2, medium: 16 }, // L15→L16 junction (D5)
    { label: "28", R: 207.181, d: 8.55, sd: 18.8 }, // L16 rear → air
    { label: "29", R: -28.564, d: 1.6, sd: 18.5, medium: 17 }, // L17 front
    { label: "30", R: -50.386, d: 12.63, sd: 18.5 }, // Patent gap to the rear plate
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.699370427048457,
    description:
      "Patent inner focus: only plano-concave element L7 (unit L2) moves 18.21 mm toward the image. L1, the stop and L3 remain fixed. Closest distance 69.94 cm is calculated from the published near gaps. Stabilization displacement is not simulated.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Variable air spacings (inner focus) ── */
  gaps: {
    STO: { label: "D11", values: [[2.45, 20.66]] }, // d11: stop → L7 (opens during close focus)
    "13": { label: "D13", values: [[24.03, 5.82]] }, // d13: L7 → L3 (closes during close focus)
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.86, fStops: [1.86, 2, 2.5, 2.8, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22] },

  /* ── Rear plate (patent surfaces 31–32): traced, not drawn ── */
  rearPlates: [
    {
      thicknessMm: 1.5,
      nd: 1.51633,
      vd: 64.1,
      glass: "S-BSL7",
      gapAfterMm: 0.8,
      source: "US 2023/0213745 A1, Numerical Example 4 surfaces 31–32",
    },
  ],

  /* ── Group annotations ── */
  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "10" },
    { text: "L2 (−)", fromSurface: "12", toSurface: "13" },
    { text: "L3 (+)", fromSurface: "14", toSurface: "30" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "14", toSurface: "16" },
    { text: "D4", fromSurface: "21", toSurface: "23" },
    { text: "D5", fromSurface: "26", toSurface: "28" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
