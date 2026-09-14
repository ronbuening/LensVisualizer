import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — APO-LANTHAR 50mm f/2.0 Aspherical            ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP2021-43376A Example 5 (Cosina / Sugano).           ║
 * ║  Identified as the E-mount production prescription candidate.      ║
 * ║  10 elements / 8 groups, 2 double-sided aspherics (4 surfaces).    ║
 * ║  Focus: floating focus (F36 scheme — 3 variable air gaps).         ║
 * ║                                                                    ║
 * ║  Table 5 lists dPgF only for elements 3 and 4. Supplier identity   ║
 * ║  and APD status of the other elements are not established.        ║
 * ║  SDs are estimates: Fig. 10 optical rims support 15 mm for LE;   ║
 * ║  other rims retain their conservative approximations.            ║
 * ║  2026-09-08: corrected ASP19 A6 sign from rendered Table 5.       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "apo-lanthar-50f2",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER APO-LANTHAR 50mm f/2.0 Aspherical",
  subtitle: "JP2021-43376A EXAMPLE 5 — COSINA / SUGANO",
  specs: [
    "10 ELEMENTS / 8 GROUPS",
    "f ≈ 49.3 mm",
    "F/1.93",
    "2ω ≈ 47.4°",
    "4 ASPHERICAL SURFACES",
    "2 PATENT-LISTED APD ELEMENTS",
  ],

  focalLengthMarketing: 50,
  focalLengthDesign: 49.28,
  apertureMarketing: 2.0,
  apertureDesign: 1.93,
  lensMounts: ["nikon-z", "sony-fe"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2021-043376 A",
  patentAuthors: ["Yasuyuki Sugano"],
  patentAssignees: ["Cosina Co., Ltd."],
  patentYear: 2021,
  elementCount: 10,
  groupCount: 8,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "LF",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.54373,
      vd: 47.65,
      fl: -45.5,
      glass: "Unmatched (patent glass; supplier unspecified)",
      apd: false,
      apdNote: "Not specified in patent Table 5; manufacturer counts do not identify this element.",
      role: "Front diverging element; opening bracket of front Gc group — widens beam to reduce incidence angles downstream",
    },
    {
      id: 2,
      name: "Lfa",
      label: "Element 2",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.85249,
      vd: 42.08,
      fl: 74.5,
      glass: "Unmatched (patent nd=1.85249, νd=42.08; supplier unspecified)",
      apd: false,
      role: "Double-sided aspheric positive meniscus; calculated rear departure +358 µm at the estimated 14.5 mm rim",
    },
    {
      id: 3,
      name: "Lfb",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 60.0,
      glass: "S-FPL51 / N-PK52A (catalog-compatible equivalents; supplier unspecified)",
      apd: "patent",
      role: "Positive low-dispersion element; patent dPgF = +0.0376 supports secondary-spectrum correction",
      dPgF: 0.0376, apdNote: "dPgF = +0.0376 (patent-listed)",
    },
    {
      id: 4,
      name: "Lfc",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      fl: 55.0,
      glass: "FCD505 (catalog-compatible model; supplier unspecified)",
      apd: "patent",
      role: "Positive element with patent dPgF = +0.0195; shares positive power with Lfb",
      dPgF: 0.0195, apdNote: "dPgF = +0.0195 (patent-listed)",
    },
    {
      id: 5,
      name: "Lfd",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.51322,
      vd: 57.22,
      fl: -67.6,
      glass: "Unmatched (patent glass; supplier unspecified)",
      apd: false,
      apdNote: "Not specified in patent Table 5; manufacturer counts do not identify this element.",
      role: "Closing bracket of front Gc group; last element before stop — boundary for focus adjustment",
    },
    {
      id: 6,
      name: "Lrd",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.70269,
      vd: 34.87,
      fl: -23.8,
      glass: "Unmatched (patent nd=1.70269, νd=34.87; partial dispersion unspecified)",
      apd: false,
      apdNote: "Not specified in patent Table 5; manufacturer counts do not identify this element.",
      role: "Doublet Jb negative partner; first post-stop element — chromatic correction via Δνd ≈ 12.3 with Lrc",
      cemented: "Jb",
    },
    {
      id: 7,
      name: "Lrc",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.79334,
      vd: 47.18,
      fl: 23.4,
      glass: "Unmatched (patent nd=1.79334, νd=47.18; supplier unspecified)",
      apd: false,
      role: "Doublet Jb positive partner; high-index lanthanum glass — drives primary chromatic correction in rear group",
      cemented: "Jb",
    },
    {
      id: 8,
      name: "Lrb",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.80258,
      vd: 46.6,
      fl: 26.3,
      glass: "S-LAH65V (catalog-compatible model; supplier unspecified)",
      apd: false,
      role: "Doublet Ja positive partner; Δnd ≈ 0.249 with Lra drives monochromatic correction (sphere + coma)",
      cemented: "Ja",
    },
    {
      id: 9,
      name: "Lra",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.55362,
      vd: 45.38,
      fl: -31.4,
      glass: "Unmatched (patent nd=1.55362, νd=45.38; supplier unspecified)",
      apd: false,
      role: "Doublet Ja negative partner; large index contrast and small Abbe-number difference with Lrb",
      cemented: "Ja",
    },
    {
      id: 10,
      name: "LE",
      label: "Element 10",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.51633,
      vd: 64.06,
      fl: -96.2,
      glass: "S-BSL7 / N-BK7 (catalog-compatible equivalents; supplier unspecified)",
      apd: false,
      role: "Aspheric field corrector after a 12.49 mm gap; calculated rear departure −1532 µm at the estimated 15 mm rim",
    },
  ],

  /* ── Surface prescription — JP2021-43376A Table 5, Example 5 ──
   *  Patent does not specify SDs. Conservative existing rims retained except
   *  LE: 15 mm estimated from Fig. 10 optical endpoints (page 48, 600 dpi).
   */
  surfaces: [
    { label: "1", R: -37.07, d: 1.7, nd: 1.54373, elemId: 1, sd: 15.0 },
    { label: "2", R: 75.394, d: 0.2, nd: 1.0, elemId: 0, sd: 15.0 },
    { label: "3A", R: 50.421, d: 3.46, nd: 1.85249, elemId: 2, sd: 14.5 },
    { label: "4A", R: 236.595, d: 0.32, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "5", R: 67.642, d: 7.57, nd: 1.497, elemId: 3, sd: 14.0 },
    { label: "6", R: -51.349, d: 0.2, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "7", R: 63.022, d: 4.71, nd: 1.59282, elemId: 4, sd: 13.5 },
    { label: "8", R: -65.678, d: 0.2, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "9", R: 200.0, d: 1.6, nd: 1.51322, elemId: 5, sd: 13.0 },
    { label: "10", R: 29.49, d: 5.49, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "STO", R: 1e15, d: 3.36, nd: 1.0, elemId: 0, sd: 12.8 },
    { label: "12", R: -50.154, d: 1.6, nd: 1.70269, elemId: 6, sd: 13.0 },
    { label: "13", R: 25.432, d: 6.72, nd: 1.79334, elemId: 7, sd: 13.0 },
    { label: "14", R: -60.434, d: 0.56, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "15", R: 40.672, d: 6.63, nd: 1.80258, elemId: 8, sd: 13.0 },
    { label: "16", R: -40.724, d: 1.6, nd: 1.55362, elemId: 9, sd: 12.0 },
    { label: "17", R: 30.835, d: 12.49, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "18A", R: -34.164, d: 2.6, nd: 1.51633, elemId: 10, sd: 15.0 },
    { label: "19A", R: -112.348, d: 15.0, nd: 1.0, elemId: 0, sd: 15.0 },
  ],

  /* ── Aspherical coefficients — Patent Table 5, Example 5 ──
   *  4 aspheric surfaces on 2 elements (Lfa and LE).
   *  K = 0 for all surfaces (no conic departure).
   *  A4–A10 polynomial terms only (no A12/A14 in this patent).
   */
  asph: {
    "3A": {
      K: 0,
      A4: -1.6435e-6,
      A6: 7.0442e-10,
      A8: 2.7291e-11,
      A10: -2.2674e-15,
      A12: 0,
      A14: 0,
    },
    "4A": {
      K: 0,
      A4: 6.4457e-6,
      A6: 1.9943e-9,
      A8: 2.8907e-11,
      A10: -4.7319e-15,
      A12: 0,
      A14: 0,
    },
    "18A": {
      K: 0,
      A4: -7.6822e-5,
      A6: 1.9445e-7,
      A8: -8.3803e-10,
      A10: 1.7349e-12,
      A12: 0,
      A14: 0,
    },
    "19A": {
      K: 0,
      A4: -5.6981e-5,
      A6: 1.8942e-7,
      A8: -4.8687e-10,
      A10: 7.6837e-13,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings — F36 focus scheme ──
   *  F36 moves: front group, Jb, and Ja+LE as 3 separate groups.
   *  Variable gaps: ZD10 (pre-stop), ZD14 (between doublets), ZD19 (BFD).
   *  Object-to-first-surface distance: ∞ → 370 mm.
   *  F36 track = 84.95 mm; object-to-image endpoint = 454.95 mm.
   *  Intermediate states interpolate the two source endpoints.
   */
  var: {
    10: [5.49, 5.89],
    14: [0.56, 3.57],
    "19A": [15.0, 20.53],
  },

  varLabels: [
    ["10", "ZD10"],
    ["14", "ZD14"],
    ["19A", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT (101)", fromSurface: "1", toSurface: "10" },
    { text: "Jb (102)", fromSurface: "12", toSurface: "14" },
    { text: "Ja + LE (102)", fromSurface: "15", toSurface: "19A" },
  ],

  doublets: [
    { text: "Jb", fromSurface: "12", toSurface: "14" },
    { text: "Ja", fromSurface: "15", toSurface: "17" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.45495,
  focusDescription:
    "Patent F36 floating focus: front group, Jb, and Ja+LE move 8.94, 8.54, and 5.53 mm toward the object. Close endpoint is 0.455 m from the image plane (370 mm from surface 1). Intermediate motion is interpolated.",

  /* ── Aperture configuration ── */
  nominalFno: 1.93,
  fstopSeries: [1.4, 1.8, 2, 2.5, 2.8, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22],

  /* ── Layout tuning (overrides defaults) ── */
  scFill: 0.52,
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
